'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-12 w-12 text-destructive" />
      </div>

      <h1 className="mb-4 text-3xl font-bold">Oops! Something went wrong</h1>

      <p className="mb-8 max-w-md text-muted-foreground">
        We encountered an unexpected error. Don't worry, our team has been
        notified and we're working on it. Please try again or return to the home
        page.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={reset}
          variant="default"
          size="lg"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </div>

      {error.digest && (
        <p className="mt-8 text-xs text-muted-foreground">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
