import { NextRequest, NextResponse } from 'next/server';

/**
 * Newsletter Subscription API
 *
 * On Vercel the serverless filesystem is read-only/ephemeral, so writing a
 * local subscribers.json FAILS in production. To keep it 100% free and working:
 *  - If NEXT_PUBLIC_FORMSPREE_ID (or NEXT_PUBLIC_BASIN_ID) is set, we forward
 *    the email to that free form endpoint (Formspree/Basin free tier).
 *  - Otherwise we fall back to the local JSON file (fine for local dev).
 */

import fs from 'fs';
import path from 'path';
import { z } from 'zod';

const SubscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
const BASIN_ID = process.env.NEXT_PUBLIC_BASIN_ID || '';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'src', 'data', 'subscribers.json');

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

function addSubscriberLocal(email: string): boolean {
  const subscribers = getSubscribers();
  if (subscribers.includes(email)) return false;
  subscribers.push(email);
  fs.mkdirSync(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
  fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), 'utf-8');
  return true;
}

async function forwardToFormService(email: string): Promise<boolean> {
  const endpoint = FORMSPREE_ID
    ? `https://formspree.io/f/${FORMSPREE_ID}`
    : `https://usebasin.com/api/${BASIN_ID}`;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email, _subject: 'New Sproutern subscriber' }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = SubscribeSchema.parse(body);
    const normalized = email.toLowerCase().trim();

    // Production path: forward to a free form service (works on read-only FS)
    if (FORMSPREE_ID || BASIN_ID) {
      const ok = await forwardToFormService(normalized);
      if (!ok) {
        return NextResponse.json(
          { success: false, error: 'Could not save subscription.' },
          { status: 502 },
        );
      }
      return NextResponse.json(
        { success: true, message: 'Successfully subscribed!' },
        { status: 201 },
      );
    }

    // Local dev path: JSON file store
    const isNew = addSubscriberLocal(normalized);
    return NextResponse.json(
      {
        success: true,
        message: isNew ? 'Successfully subscribed!' : 'Already subscribed!',
      },
      { status: isNew ? 201 : 200 },
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
