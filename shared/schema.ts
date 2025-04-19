import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  timestamp: text("timestamp").notNull(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  fullName: true,
  email: true,
  phone: true,
});

export const insertSubscriberWithValidationSchema = insertSubscriberSchema.extend({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
