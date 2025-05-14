import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Check if we have a database URL
if (!process.env.DATABASE_URL) {
  console.error("ERROR: No DATABASE_URL provided, database functionality will not work");
  throw new Error("DATABASE_URL environment variable is required");
}

// Database connection
const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString);
export const db = drizzle(client);