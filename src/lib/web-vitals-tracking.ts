/**
 * Web Vitals Tracking Module
 *
 * Tracks and reports Core Web Vitals (LCP, FID, CLS, INP, FCP, TTFB)
 * to Google Analytics 4 and custom analytics endpoints.
 *
 * @see https://web.dev/vitals/
 */

import type { Metric } from 'web-vitals';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

/**
 * Send metric to Google Analytics 4
 */
function sendToAnalytics(metric: Metric): void {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value,
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
    });
  }
}

/**
 * Send metrics to custom analytics endpoint
 */
async function sendToCustomEndpoint(metric: Metric): Promise<void> {
  try {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
    });

    // Use sendBeacon for reliability
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/web-vitals', body);
    } else {
      // Fallback to fetch
      await fetch('/api/analytics/web-vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: true,
      });
    }
  } catch (error) {
    // Silent fail - analytics shouldn't break the app
    console.warn('[Web Vitals] Failed to send metric:', error);
  }
}

/**
 * Combined metric handler
 */
function handleMetric(metric: Metric): void {
  sendToAnalytics(metric);
  sendToCustomEndpoint(metric);
}

/**
 * Initialize Web Vitals tracking
 *
 * This function dynamically imports web-vitals to avoid
 * increasing the initial bundle size.
 *
 * @example
 * // In your app component or layout
 * useEffect(() => {
 *   initWebVitals();
 * }, []);
 */
export async function initWebVitals(): Promise<void> {
  try {
    const { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } =
      await import('web-vitals');

    // Core Web Vitals
    onCLS(handleMetric); // Cumulative Layout Shift
    onLCP(handleMetric); // Largest Contentful Paint
    onINP(handleMetric); // Interaction to Next Paint (replaces FID)

    // Additional metrics
    onFCP(handleMetric); // First Contentful Paint
    onFID(handleMetric); // First Input Delay (legacy, kept for compatibility)
    onTTFB(handleMetric); // Time to First Byte
  } catch (error) {
    console.warn('[Web Vitals] Failed to initialize:', error);
  }
}

/**
 * Report Web Vitals helper for Next.js pages router
 * Use this in _app.tsx if using Pages Router
 */
export function reportWebVitals(metric: Metric): void {
  handleMetric(metric);
}

/**
 * Get performance rating thresholds
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // milliseconds
  FID: { good: 100, needsImprovement: 300 }, // milliseconds
  CLS: { good: 0.1, needsImprovement: 0.25 }, // score
  INP: { good: 200, needsImprovement: 500 }, // milliseconds
  FCP: { good: 1800, needsImprovement: 3000 }, // milliseconds
  TTFB: { good: 800, needsImprovement: 1800 }, // milliseconds
} as const;

/**
 * Get rating for a metric value
 */
export function getMetricRating(
  metricName: keyof typeof WEB_VITALS_THRESHOLDS,
  value: number,
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = WEB_VITALS_THRESHOLDS[metricName];
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.needsImprovement) return 'needs-improvement';
  return 'poor';
}
