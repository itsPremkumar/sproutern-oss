import { NextResponse } from 'next/server';

/**
 * API endpoint to provide Firebase configuration to the Service Worker
 * This allows the SW to get config without hardcoding sensitive values
 *
 * Security: These values are NEXT_PUBLIC_ prefixed, meaning they're
 * already exposed to the client. This endpoint just provides them
 * in a structured way for the service worker.
 */
export async function GET() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  // Validate that all required config values are present
  const missingKeys = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    console.error('Missing Firebase config values:', missingKeys);
    return NextResponse.json(
      { error: 'Firebase configuration incomplete', missingKeys },
      { status: 500 },
    );
  }

  return NextResponse.json(config, {
    headers: {
      // Cache for 1 hour - config rarely changes
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
