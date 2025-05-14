import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Move static file serving to after route registration

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
  // Add health check endpoint for deployment
  app.get("/_health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "ok", message: "LumeCredit API is running" });
  });

  // Register API routes and get HTTP server
  const server = await registerRoutes(app);

  // Dev or prod setup
  if (app.get("env") === "development") {
    // Setup Vite development server
    await setupVite(app, server);
  } else {
    // Serve static files in production from multiple possible locations
    const possiblePaths = [
      path.join(import.meta.dirname, "../dist"),
      path.join(import.meta.dirname, "../public"),
      path.join(import.meta.dirname, "../client/dist"),
      path.join(import.meta.dirname, "../client/public")
    ];
    
    log("Looking for static files...");
    
    // Attempt to serve static files from each possible location
    for (const staticPath of possiblePaths) {
      if (fs.existsSync(staticPath)) {
        log(`Found static files at: ${staticPath}`);
        // Serve static files
        app.use(express.static(staticPath));
      }
    }
    
    // Always add the SPA fallback route at the end
    app.get('*', (req, res) => {
      // Skip API routes
      if (req.path.startsWith('/api')) return;
      
      // Try to find index.html in one of the possible paths
      for (const staticPath of possiblePaths) {
        const indexPath = path.join(staticPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          log(`Serving SPA from: ${indexPath}`);
          return res.sendFile(indexPath);
        }
      }
      
      // If no index.html is found, send 404
      res.status(404).send('Application files not found');
    });
  }

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error(err);
  });

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
