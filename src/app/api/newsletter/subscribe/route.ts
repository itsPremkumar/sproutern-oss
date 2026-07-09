import { NextRequest, NextResponse } from 'next/server';

/**
 * Newsletter Subscription API
 *
 * Stores email subscribers for the Sproutern career digest.
 * Uses a simple JSON file store (can be upgraded to Firestore later).
 */

import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const SubscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const SUBSCRIBERS_FILE = path.join(
  process.cwd(),
  'src',
  'data',
  'subscribers.json',
);

function getSubscribers(): string[] {
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      return JSON.parse(fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8'));
    }
  } catch {
    /* ignore */
  }
  return [];
}

function addSubscriber(email: string): boolean {
  const subscribers = getSubscribers();
  if (subscribers.includes(email)) return false;

  subscribers.push(email);
  fs.mkdirSync(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
  fs.writeFileSync(
    SUBSCRIBERS_FILE,
    JSON.stringify(subscribers, null, 2),
    'utf-8',
  );
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = SubscribeSchema.parse(body);

    const isNew = addSubscriber(email.toLowerCase().trim());

    if (!isNew) {
      return NextResponse.json(
        { success: true, message: 'Already subscribed!' },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 },
    );
  }
}
