import express, { type Request as ExpressRequest, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

// Extend the Express Request type to include user property
interface Request extends ExpressRequest {
  user?: any;
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Health check endpoint for Autoscale - keep this separate from main routes
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Serve static files from the appropriate directory based on environment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(import.meta.dirname, './public')));
} else {
  app.use(express.static(path.join(import.meta.dirname, '../dist/public')));
}

// JWT authentication middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  // Skip auth for API routes, login page, and static assets
  if (
    req.path.startsWith('/api') || 
    req.path === '/login' || 
    req.path.includes('.') || 
    req.path.startsWith('/@') || 
    req.path.startsWith('/node_modules') || 
    req.path.startsWith('/src/')
  ) {
    return next();
  }

  const token = req.cookies.auth_token;
  if (!token) {
    return res.redirect('/login');
  }

  try {
    // Use a secure default JWT secret if none is provided in environment
    const jwtSecret = process.env.JWT_SECRET || process.env.SESSION_SECRET || 'lumecredit-secure-jwt-secret-key-2025';
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    res.clearCookie('auth_token');
    return res.redirect('/login');
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
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

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

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
  
  // In production, add catch-all route that serves index.html for all unmatched routes
  // This should be the LAST route handler
  if (process.env.NODE_ENV === 'production') {
    app.get('*', (req: Request, res: Response) => {
      if (!req.path.startsWith('/api') && req.path !== '/health') {
        res.sendFile(path.join(import.meta.dirname, './public/index.html'));
      }
    });
  }
})();