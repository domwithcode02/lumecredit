import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// We need to ensure the static files are properly served for production deployment
// Try all possible locations for static files
const possibleStaticPaths = [
  path.join(import.meta.dirname, '../dist/public'),
  path.join(import.meta.dirname, '../dist'),
  path.join(import.meta.dirname, '../client/dist'),
  path.join(import.meta.dirname, 'public'),
  path.join(import.meta.dirname, '../public')
];

// Log which paths exist for debugging
possibleStaticPaths.forEach(staticPath => {
  if (fs.existsSync(staticPath)) {
    log(`Static path exists: ${staticPath}`, "static");
    app.use(express.static(staticPath));
  } else {
    log(`Static path does NOT exist: ${staticPath}`, "static");
  }
});

// No Basic Auth middleware - we're using our custom login page instead

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Root path handler to ensure it serves the frontend
  app.get("/", (req, res, next) => {
    // If the request accepts HTML, serve the frontend
    if (req.accepts('html')) {
      if (app.get("env") === "development") {
        next(); // Let Vite handle it in development
      } else {
        // In production, serve the index.html
        res.sendFile(path.resolve(import.meta.dirname, '../client/dist/index.html'));
      }
    } else {
      // For API requests not accepting HTML, pass through to the next handler
      next();
    }
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Add a fallback route handler to serve the frontend for any routes not handled
  app.use("*", (req, res) => {
    if (req.accepts('html')) {
      if (app.get("env") === "development") {
        // In development, let Vite handle it (already configured above)
        res.status(404).send('Not found');
      } else {
        // In production, try to find index.html in several possible locations
        const possibleIndexPaths = [
          path.resolve(import.meta.dirname, '../client/dist/index.html'),
          path.resolve(import.meta.dirname, '../dist/public/index.html'),
          path.resolve(import.meta.dirname, '../dist/index.html')
        ];
        
        let indexFound = false;
        for (const indexPath of possibleIndexPaths) {
          if (fs.existsSync(indexPath)) {
            res.sendFile(indexPath);
            indexFound = true;
            break;
          }
        }
        
        if (!indexFound) {
          log(`WARNING: No index.html found in any of the expected locations`, "static");
          res.status(500).send(`
            <html>
              <head><title>LumeCredit - Build Error</title></head>
              <body>
                <h1>Application Error</h1>
                <p>The application has not been properly built. Please contact support.</p>
              </body>
            </html>
          `);
        }
      }
    } else {
      // For API requests, return 404
      res.status(404).json({ message: "Not found" });
    }
  });

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
