import { subscribers, type Subscriber, type InsertSubscriber } from "@shared/schema";

export interface IStorage {
  createSubscriber(subscriber: InsertSubscriber & { timestamp: string }): Promise<Subscriber>;
  getAllSubscribers(): Promise<Subscriber[]>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
}

export class MemStorage implements IStorage {
  private subscribers: Map<number, Subscriber>;
  private currentId: number;

  constructor() {
    this.subscribers = new Map();
    this.currentId = 1;
  }

  async createSubscriber(subscriberData: InsertSubscriber & { timestamp: string }): Promise<Subscriber> {
    const id = this.currentId++;
    const subscriber: Subscriber = { ...subscriberData, id };
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
}

export const storage = new MemStorage();
