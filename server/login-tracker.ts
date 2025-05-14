import fs from 'fs';
import path from 'path';
import { Request } from 'express';

// Define the log file path
const LOG_FILE = path.join(process.cwd(), 'login-activity.log');

// Log format interface
interface LoginLog {
  timestamp: string;
  username: string;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  message?: string;
}

// Function to get client IP address
function getClientIp(req: Request): string {
  // Get IP from various headers or connection
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' 
    ? forwarded.split(/, /)[0] 
    : req.socket.remoteAddress || '';
  return ip || 'unknown';
}

// Log login attempts
export function logLogin(req: Request, username: string, success: boolean, message?: string): void {
  const log: LoginLog = {
    timestamp: new Date().toISOString(),
    username,
    ipAddress: getClientIp(req),
    userAgent: req.headers['user-agent'] || 'unknown',
    success,
    message
  };

  // Convert to string and append newline
  const logEntry = JSON.stringify(log) + '\n';
  
  // Append to log file
  fs.appendFile(LOG_FILE, logEntry, (err) => {
    if (err) {
      console.error('Error writing to login log:', err);
    }
  });
}

// Retrieve login logs (most recent first)
export function getLoginLogs(limit = 100): Promise<LoginLog[]> {
  return new Promise((resolve, reject) => {
    fs.readFile(LOG_FILE, 'utf8', (err, data) => {
      if (err) {
        // If file doesn't exist yet, return empty array
        if (err.code === 'ENOENT') {
          return resolve([]);
        }
        return reject(err);
      }
      
      try {
        // Split by newline, parse each line, and filter out empty lines
        const logs = data
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => JSON.parse(line) as LoginLog)
          .reverse() // Most recent first
          .slice(0, limit);
        
        resolve(logs);
      } catch (parseErr) {
        reject(parseErr);
      }
    });
  });
}