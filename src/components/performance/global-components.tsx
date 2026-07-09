'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Lazy Image Component with progressive loading
 * Optimized for global users with slower connections
 */
interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'blur',
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.1 },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder skeleton */}
      {!loaded && placeholder === 'blur' && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800" />
      )}

      {/* Actual image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}

/**
 * Prefetch Link Component
 * Prefetches page content on hover for faster navigation
 */
interface PrefetchLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetchOnHover?: boolean;
}

export function PrefetchLink({
  href,
  children,
  className = '',
  prefetchOnHover = true,
}: PrefetchLinkProps) {
  const prefetched = useRef(false);

  const handleMouseEnter = () => {
    if (prefetchOnHover && !prefetched.current) {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
      prefetched.current = true;
    }
  };

  return (
    <a
      href={href}
      className={className}
      onMouseEnter={handleMouseEnter}
      onFocus={handleMouseEnter}
    >
      {children}
    </a>
  );
}

/**
 * Deferred Component
 * Delays rendering of non-critical components
 */
interface DeferredProps {
  children: React.ReactNode;
  delay?: number;
  placeholder?: React.ReactNode;
}

export function Deferred({
  children,
  delay = 100,
  placeholder,
}: DeferredProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return placeholder || null;
  return <>{children}</>;
}

/**
 * Network-Aware Component
 * Adapts content based on user's network connection
 */
interface NetworkAwareProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  minConnection?: '4g' | '3g' | '2g' | 'slow-2g';
}

export function NetworkAware({
  children,
  fallback,
  minConnection = '3g',
}: NetworkAwareProps) {
  const [canShow, setCanShow] = useState(true);

  useEffect(() => {
    const connection = (
      navigator as unknown as { connection?: { effectiveType?: string } }
    ).connection;
    if (connection?.effectiveType) {
      const speeds = ['slow-2g', '2g', '3g', '4g'];
      const currentSpeed = speeds.indexOf(connection.effectiveType);
      const minSpeed = speeds.indexOf(minConnection);
      setCanShow(currentSpeed >= minSpeed);
    }
  }, [minConnection]);

  return canShow ? <>{children}</> : <>{fallback}</>;
}

/**
 * Performance Monitor Hook
 * Tracks Core Web Vitals
 */
export function usePerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Report Web Vitals
    const reportVital = (metric: { name: string; value: number }) => {
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.value),
          event_category: 'Web Vitals',
          non_interaction: true,
        });
      }
    };

    // Observe LCP
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          reportVital({ name: 'LCP', value: lastEntry.startTime });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if ('processingStart' in entry) {
              reportVital({
                name: 'FID',
                value:
                  (entry as PerformanceEventTiming).processingStart -
                  entry.startTime,
              });
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if ('value' in entry && !(entry as LayoutShift).hadRecentInput) {
              clsValue += (entry as LayoutShift).value;
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Report CLS on page hide
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            reportVital({ name: 'CLS', value: clsValue });
          }
        });
      } catch {
        // PerformanceObserver not supported
      }
    }
  }, []);
}

// Type declarations
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}
