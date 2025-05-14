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
    // In production, serve static files from multiple potential build locations
    const possiblePaths = [
      path.join(import.meta.dirname, "../dist/public"),
      path.join(import.meta.dirname, "../dist"),
      path.join(import.meta.dirname, "../client/dist"),
      path.join(import.meta.dirname, "../client/build"),
      path.join(import.meta.dirname, "../public")
    ];
    
    log(`Looking for static files in production...`);
    
    // Track whether we found static files
    let foundStaticFiles = false;
    
    // Try to serve static files from each possible location
    for (const staticPath of possiblePaths) {
      if (fs.existsSync(staticPath)) {
        log(`Found static files at: ${staticPath}`);
        app.use(express.static(staticPath));
        foundStaticFiles = true;
      }
    }
    
    if (!foundStaticFiles) {
      log(`Warning: No static files found in any expected location`);
      
      // Create directory and fallback index.html in the first path
      const fallbackPath = possiblePaths[0];
      log(`Creating fallback static files at: ${fallbackPath}`);
      
      fs.mkdirSync(fallbackPath, { recursive: true });
      
      const indexPath = path.join(fallbackPath, 'index.html');
      fs.writeFileSync(indexPath, `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LumeCredit</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        padding: 20px;
        text-align: center;
      }
      h1 {
        margin-bottom: 10px;
        color: #003366;
      }
      p {
        margin-bottom: 20px;
      }
      a {
        display: inline-block;
        background-color: #003366;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 500;
      }
      a:hover {
        background-color: #002244;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to LumeCredit</h1>
    <p>The application is loading, please wait...</p>
    <a href="/" onclick="window.location.reload()">Refresh Page</a>
  </body>
</html>
      `);
      
      // Serve the fallback path
      app.use(express.static(fallbackPath));
    }
    
    // Always add the SPA fallback route for client-side routing
    app.get('*', (req, res, next) => {
      // Skip API routes
      if (req.path.startsWith('/api')) {
        return next();
      }
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
