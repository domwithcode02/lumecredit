import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { ZodError } from "zod";
import { insertSubscriberWithValidationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import jwt from "jsonwebtoken";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get spots remaining count
  app.get("/api/spots-remaining", async (_req: Request, res: Response) => {
    try {
      const totalSpots = 250;
      const subscribers = await storage.getAllSubscribers();
      const spotsRemaining = Math.max(0, totalSpots - subscribers.length);
      
      res.json({ spotsRemaining, totalSpots });
    } catch (error) {
      console.error("Error fetching spots count:", error);
      res.status(500).json({ 
        message: "Failed to fetch spots remaining" 
      });
    }
  });

  // Submit subscriber form
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      // Check if honeypot field is filled (spam protection)
      if (req.body.website) {
        // Silent success to avoid alerting bots
        return res.status(200).json({ success: true });
      }
      
      // Validate input
      const validatedData = insertSubscriberWithValidationSchema.parse(req.body);
      
      // Check if we've reached the limit
      const subscribers = await storage.getAllSubscribers();
      if (subscribers.length >= 250) {
        return res.status(400).json({
          message: "Sorry, all spots have been filled. Thank you for your interest!"
        });
      }
      
      // Check if email already exists
      const existingUser = await storage.getSubscriberByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({
          message: "This email has already been registered. Thank you for your interest!"
        });
      }
      
      // Add timestamp
      const subscriber = await storage.createSubscriber({
        ...validatedData,
        timestamp: new Date().toISOString(),
      });
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Thank you! Your spot has been reserved successfully.",
        subscriber: {
          id: subscriber.id,
          fullName: subscriber.fullName,
          email: subscriber.email
        }
      });
    } catch (error) {
      console.error("Subscription error:", error);
      
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message
        });
      }
      
      res.status(500).json({ 
        message: "An error occurred while processing your request. Please try again."
      });
    }
  });

  // Login API endpoint - with credential checking
  app.post("/api/login", (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      // Simple credential check - only specific credentials work
      if (username === "admin" && password === "secretpassword123") {
        
        // Create a JWT token
        const jwtSecret = process.env.JWT_SECRET || 'lumecredit-secure-jwt-secret-key-2025';
        const token = jwt.sign(
          { 
            id: `${username}-user`,
            username: username,
            role: "admin"
          },
          jwtSecret,
          { expiresIn: "24h" }
        );
        
        // Set cookie with token
        res.cookie("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        // For proper client-side routing, return JSON with token instead of redirect
        return res.status(200).json({
          success: true,
          message: "Login successful",
          token: token
        });
      } else {
        // Invalid credentials
        return res.status(401).json({
          success: false,
          message: "Invalid credentials"
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).redirect('/login?error=server');
    }
  });
  
  // Logout endpoint
  app.post("/api/logout", (req: Request, res: Response) => {
    try {
      // Clear auth cookie
      res.clearCookie("auth_token");
      
      // Redirect to login page
      return res.redirect('/login');
    } catch (error) {
      console.error("Logout error:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred during logout"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
