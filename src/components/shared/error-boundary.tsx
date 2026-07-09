'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary component - catches JavaScript errors in child components
 * Displays a fallback UI instead of crashing the whole app
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Report error to analytics
    this.reportError(error, errorInfo);
  }

  /**
   * Report error to analytics/monitoring service
   */
  private async reportError(error: Error, errorInfo: ErrorInfo): Promise<void> {
    try {
      if (typeof window !== 'undefined') {
        const errorData = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        };

        // Use sendBeacon for reliability
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            '/api/analytics/errors',
            JSON.stringify(errorData),
          );
        } else {
          await fetch('/api/analytics/errors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(errorData),
            keepalive: true,
          });
        }

        // Send to Google Analytics if available
        if (
          (
            window as typeof window & {
              gtag?: (
                command: string,
                event: string,
                params: Record<string, unknown>,
              ) => void;
            }
          ).gtag
        ) {
          (
            window as typeof window & {
              gtag: (
                command: string,
                event: string,
                params: Record<string, unknown>,
              ) => void;
            }
          ).gtag('event', 'exception', {
            description: `${error.name}: ${error.message}`,
            fatal: true,
          });
        }
      }
    } catch (reportingError) {
      // Silent fail - error reporting shouldn't break the app further
      console.warn('Failed to report error:', reportingError);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Something went wrong</h2>
          <p className="mb-6 max-w-md text-muted-foreground">
            We apologize for the inconvenience. An unexpected error occurred.
            Please try refreshing the page or go back to the home page.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={this.handleReset}
              variant="outline"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-8 max-w-2xl rounded-lg bg-muted p-4 text-left">
              <summary className="cursor-pointer font-medium">
                Error Details (Development Only)
              </summary>
              <pre className="mt-4 overflow-auto text-sm text-destructive">
                {this.state.error.message}
                {'\n\n'}
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Functional wrapper for ErrorBoundary to use in layouts
 */
export function ErrorBoundaryWrapper({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
}
