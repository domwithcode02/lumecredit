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
  // The most common build output locations
  path.join(import.meta.dirname, '../dist/public'),
  path.join(import.meta.dirname, '../dist/client'),
  path.join(import.meta.dirname, '../dist'),
  path.join(import.meta.dirname, '../client/dist'),
  // Fallback locations
  path.join(import.meta.dirname, 'public'),
  path.join(import.meta.dirname, '../public'),
  path.join(import.meta.dirname, '../client')
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
    // For API requests with specific Accept headers that don't want HTML, pass through
    if (req.accepts('json') && !req.accepts('html')) {
      next();
      return;
    }
    
    // For everything else, serve the frontend
    // In development, let Vite handle it
    if (app.get("env") === "development") {
      next();
    } else {
      // In production, we need to serve our frontend based on where it was built
      res.sendFile(path.resolve(import.meta.dirname, '../client/index.html'));
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

  // Add a catch-all handler for any routes not handled by anything else
  app.use("*", (req, res) => {
    // For API requests, return a 404 JSON response
    if (req.path.startsWith("/api") || 
        (req.accepts('json') && !req.accepts('html'))) {
      return res.status(404).json({ message: "API endpoint not found" });
    }
    
    // For all other requests (frontend routes), serve the app
    if (app.get("env") === "development") {
      // Let Vite handle the frontend in development
      // This shouldn't happen because Vite middleware would have already caught it
      res.status(404).send('Not found - check your Vite configuration');
    } else {
      // In production, serve the main HTML file for all frontend routes
      // This is crucial for client-side routing (React Router, etc.)
      res.sendFile(path.resolve(import.meta.dirname, '../client/index.html'), err => {
        if (err) {
          // If we can't find the index.html, display a helpful error
          log(`ERROR: Could not serve index.html: ${err.message}`, "static");
          
          // Send a more helpful error response
          res.status(500).send(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>LumeCredit - Site Maintenance</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
                        padding: 40px; max-width: 600px; margin: 0 auto; text-align: center; }
                  h1 { color: #003366; }
                  p { line-height: 1.6; color: #333; }
                </style>
              </head>
              <body>
                <h1>Temporarily Unavailable</h1>
                <p>The LumeCredit site is currently undergoing maintenance. Please check back soon.</p>
                <p><small>Error: ${err.message}</small></p>
              </body>
            </html>
          `);
        }
      });
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
