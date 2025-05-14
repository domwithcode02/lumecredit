import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Check if we have a database URL
if (!process.env.DATABASE_URL) {
  console.log("WARNING: No DATABASE_URL provided, some features may not work properly");
}

// Database connection
const connectionString = process.env.DATABASE_URL;
const client = connectionString ? postgres(connectionString) : null;
export const db = client ? drizzle(client) : null;