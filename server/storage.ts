import {
  subscribers,
  users,
  type Subscriber,
  type InsertSubscriber,
  type User,
  type UpsertUser,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Subscriber operations
  createSubscriber(subscriber: InsertSubscriber & { timestamp: string }): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  
  // User operations for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
}

export class DatabaseStorage implements IStorage {
  // Subscriber operations
  async createSubscriber(subscriberData: InsertSubscriber & { timestamp: string }): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values({
        ...subscriberData,
        phone: subscriberData.phone ?? null
      })
      .returning();
    return subscriber;
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(subscribers);
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, email.toLowerCase()));
    return subscriber;
  }
  
  // User operations for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }
}

// In-memory fallback storage for development
export class MemStorage implements IStorage {
  private subscribers: Map<number, Subscriber>;
  private users: Map<string, User>;
  private currentId: number;

  constructor() {
    this.subscribers = new Map();
    this.users = new Map();
    this.currentId = 1;
  }

  async createSubscriber(subscriberData: InsertSubscriber & { timestamp: string }): Promise<Subscriber> {
    const id = this.currentId++;
    const subscriber: Subscriber = { 
      ...subscriberData, 
      id,
      phone: subscriberData.phone ?? null // Ensure phone is string | null, not undefined
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
    );
  }
  
  // User operations for Replit Auth
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const now = new Date();
    const user: User = {
      ...userData,
      createdAt: now,
      updatedAt: now,
    } as User;
    
    this.users.set(userData.id, user);
    return user;
  }
}

// Use DatabaseStorage if DATABASE_URL is available, otherwise fallback to MemStorage
export const storage = process.env.DATABASE_URL 
  ? new DatabaseStorage() 
  : new MemStorage();
