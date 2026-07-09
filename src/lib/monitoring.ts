/**
 * Centralized Monitoring Utilities
 *
 * Provides utilities for:
 * - Performance monitoring
 * - Error tracking
 * - User activity tracking
 * - Resource usage monitoring
 */

// Extend Window interface
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
 * Performance mark/measure utilities
 */
export const performance = {
  /**
   * Start a performance mark
   */
  mark(name: string): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        window.performance.mark(name);
      } catch {
        console.warn(`[Monitoring] Failed to create mark: ${name}`);
      }
    }
  },

  /**
   * Measure time between two marks
   */
  measure(name: string, startMark: string, endMark?: string): number | null {
    if (typeof window !== 'undefined' && 'performance' in window) {
      try {
        const measureName = `measure-${name}`;
        window.performance.measure(measureName, startMark, endMark);
        const entries = window.performance.getEntriesByName(measureName);
        if (entries.length > 0) {
          return entries[entries.length - 1].duration;
        }
      } catch {
        console.warn(`[Monitoring] Failed to measure: ${name}`);
      }
    }
    return null;
  },

  /**
   * Get all performance entries of a specific type
   */
  getEntries(type?: string): PerformanceEntry[] {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return type
        ? window.performance.getEntriesByType(type)
        : window.performance.getEntries();
    }
    return [];
  },

  /**
   * Clear performance marks and measures
   */
  clear(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.clearMarks();
      window.performance.clearMeasures();
    }
  },
};

/**
 * Error tracking utilities
 */
export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  metadata?: Record<string, unknown>;
}

export const errorTracking = {
  /**
   * Log an error with context
   */
  async logError(
    error: Error,
    context?: ErrorContext,
    fatal: boolean = false,
  ): Promise<void> {
    // Console logging
    console.error('[Error]', error, context);

    // Report to analytics
    try {
      if (typeof window !== 'undefined') {
        const errorData = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          url: window.location.href,
          timestamp: new Date().toISOString(),
          fatal,
          ...context,
        };

        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            '/api/analytics/errors',
            JSON.stringify(errorData),
          );
        }

        // Google Analytics
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: `${error.name}: ${error.message}`,
            fatal,
            ...context?.metadata,
          });
        }
      }
    } catch {
      console.warn('[Monitoring] Failed to report error');
    }
  },

  /**
   * Track a warning (non-fatal error)
   */
  logWarning(message: string, context?: ErrorContext): void {
    console.warn('[Warning]', message, context);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'warning', {
        event_category: 'Monitoring',
        event_label: message,
        ...context?.metadata,
      });
    }
  },
};

/**
 * User activity tracking
 */
export interface ActivityEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export const activityTracking = {
  /**
   * Track a user action
   */
  trackAction(event: ActivityEvent): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.metadata,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Activity]', event);
    }
  },

  /**
   * Track page view
   */
  trackPageView(path: string, title?: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title,
      });
    }
  },

  /**
   * Track a conversion event
   */
  trackConversion(eventName: string, value?: number, currency?: string): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        value,
        currency: currency || 'USD',
      });
    }
  },
};

/**
 * Resource monitoring utilities
 */
export const resourceMonitoring = {
  /**
   * Get current memory usage (if available)
   */
  getMemoryUsage(): {
    usedJSHeapSize?: number;
    totalJSHeapSize?: number;
  } | null {
    if (
      typeof window !== 'undefined' &&
      'performance' in window &&
      'memory' in
        (window.performance as Performance & {
          memory?: { usedJSHeapSize: number; totalJSHeapSize: number };
        })
    ) {
      const memory = (
        window.performance as Performance & {
          memory: { usedJSHeapSize: number; totalJSHeapSize: number };
        }
      ).memory;
      return {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
      };
    }
    return null;
  },

  /**
   * Get network information (if available)
   */
  getNetworkInfo(): {
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
  } | null {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (
        navigator as Navigator & {
          connection: {
            effectiveType?: string;
            downlink?: number;
            rtt?: number;
          };
        }
      ).connection;
      return {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      };
    }
    return null;
  },

  /**
   * Get device information
   */
  getDeviceInfo(): {
    userAgent: string;
    language: string;
    platform: string;
    cookieEnabled: boolean;
    screenWidth: number;
    screenHeight: number;
    devicePixelRatio: number;
  } | null {
    if (typeof window !== 'undefined') {
      return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        devicePixelRatio: window.devicePixelRatio || 1,
      };
    }
    return null;
  },
};

/**
 * Timing utilities for measuring custom operations
 */
export class Timer {
  private startTime: number;
  private name: string;

  constructor(name: string) {
    this.name = name;
    this.startTime = Date.now();
    performance.mark(`${name}-start`);
  }

  /**
   * Stop the timer and return the duration
   */
  stop(): number {
    const duration = Date.now() - this.startTime;
    performance.mark(`${this.name}-end`);
    performance.measure(this.name, `${this.name}-start`, `${this.name}-end`);

    // Track as event if significant
    if (duration > 100) {
      activityTracking.trackAction({
        action: 'timing',
        category: 'Performance',
        label: this.name,
        value: Math.round(duration),
      });
    }

    return duration;
  }
}

/**
 * Create a new timer
 */
export function createTimer(name: string): Timer {
  return new Timer(name);
}

/**
 * Initialize all monitoring utilities
 */
export function initMonitoring(): void {
  if (typeof window === 'undefined') return;

  // Log unhandled errors
  window.addEventListener('error', (event) => {
    errorTracking.logError(
      event.error || new Error(event.message),
      { action: 'unhandled_error' },
      true,
    );
  });

  // Log unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    errorTracking.logError(
      event.reason instanceof Error
        ? event.reason
        : new Error(String(event.reason)),
      { action: 'unhandled_rejection' },
      true,
    );
  });

  // Log network errors for resource loading
  window.addEventListener(
    'error',
    (event) => {
      if (event.target && (event.target as HTMLElement).tagName) {
        const target = event.target as HTMLElement;
        errorTracking.logWarning(`Resource failed to load: ${target.tagName}`, {
          metadata: {
            src:
              (target as HTMLImageElement | HTMLScriptElement).src ||
              (target as HTMLLinkElement).href,
          },
        });
      }
    },
    true,
  );

  console.log('[Monitoring] Initialized');
}

export default {
  performance,
  errorTracking,
  activityTracking,
  resourceMonitoring,
  createTimer,
  initMonitoring,
};
