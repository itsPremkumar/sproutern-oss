'use client';

import Link from 'next/link';
import { WifiOff } from 'lucide-react';

// Note: This page is client-side only, noindex is handled via robots.ts
export default function OfflinePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
          <WifiOff className="h-12 w-12 text-gray-500" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          You're Offline
        </h1>

        <p className="mb-8 text-lg text-gray-600">
          It looks like you've lost your internet connection. Some features may
          not be available until you're back online.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="block w-full rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-gray-400"
          >
            Go to Homepage
          </Link>
        </div>

        <div className="mt-8 rounded-lg bg-blue-50 p-4">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Once you're back online, this page will
            automatically update with the latest content.
          </p>
        </div>
      </div>
    </div>
  );
}
