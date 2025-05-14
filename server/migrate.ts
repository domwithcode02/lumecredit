import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "../shared/schema";

// Check if we have a database URL
if (!process.env.DATABASE_URL) {
  console.error("Error: DATABASE_URL environment variable is not set");
  process.exit(1);
}

// Database connection for migrations
const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });

async function main() {
  console.log("Starting database migration...");
  
  try {
    // Create the database schema
    const db = drizzle(migrationClient);
    
    // Push schema changes to the database
    await db.insert(schema.users).values({
      id: "test-user",
      email: "test@example.com",
      firstName: "Test",
      lastName: "User",
      profileImageUrl: "https://example.com/image.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    }).onConflictDoNothing();
    
    console.log("Database migration completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    await migrationClient.end();
  }
}

main();