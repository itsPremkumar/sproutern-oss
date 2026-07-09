'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ─────────────────────────────────────────────────────────────────────────────
// Predictive Prefetch Hook
// Tracks mouse velocity + IntersectionObserver to prefetch Next.js routes
// BEFORE the user clicks, reducing perceived navigation time to near-zero.
// ─────────────────────────────────────────────────────────────────────────────

interface PredictivePrefetchOptions {
  /** Intersection threshold to trigger viewport-based prefetch (0.0 - 1.0) */
  intersectionThreshold?: number;
  /** Minimum mouse velocity (px/ms) to trigger intent-based prefetch */
  velocityThreshold?: number;
  /** Distance from link (px) to trigger proximity-based prefetch */
  proximityRadius?: number;
  /** Respect data-saver / slow connections */
  respectSaveData?: boolean;
}

interface MouseVelocity {
  x: number;
  y: number;
  timestamp: number;
  vx: number;
  vy: number;
  speed: number;
}

/**
 * Predictive prefetch hook that uses three signals to prefetch routes:
 *
 * 1. **Viewport Intersection** — When a link scrolls into view
 * 2. **Mouse Velocity** — When the cursor is moving toward a link at speed
 * 3. **Hover Proximity** — When the cursor is within N pixels of a link
 *
 * All three signals are combined with a debounce to avoid redundant prefetches.
 *
 * @example
 * ```tsx
 * function BlogList() {
 *   const containerRef = usePredictivePrefetch<HTMLDivElement>();
 *   return (
 *     <div ref={containerRef}>
 *       <a href="/blog/my-post">Read Post</a>
 *     </div>
 *   );
 * }
 * ```
 */
export function usePredictivePrefetch<T extends HTMLElement = HTMLDivElement>(
  options: PredictivePrefetchOptions = {},
) {
  const {
    intersectionThreshold = 0.1,
    velocityThreshold = 0.3,
    proximityRadius = 100,
    respectSaveData = true,
  } = options;

  const containerRef = useRef<T>(null);
  const prefetchedUrls = useRef<Set<string>>(new Set());
  const mouseState = useRef<MouseVelocity>({
    x: 0,
    y: 0,
    timestamp: 0,
    vx: 0,
    vy: 0,
    speed: 0,
  });
  const router = useRouter();

  // ── Check if we should skip prefetching ──────────────────────────────────
  const shouldSkip = useCallback((): boolean => {
    if (typeof navigator === 'undefined') return true;

    if (respectSaveData) {
      const connection = (
        navigator as Navigator & {
          connection?: { saveData?: boolean; effectiveType?: string };
        }
      ).connection;
      if (connection?.saveData) return true;
      if (
        connection?.effectiveType === '2g' ||
        connection?.effectiveType === 'slow-2g'
      )
        return true;
    }

    return false;
  }, [respectSaveData]);

  // ── Prefetch a URL (deduplicated) ────────────────────────────────────────
  const prefetch = useCallback(
    (url: string) => {
      if (prefetchedUrls.current.has(url)) return;
      if (shouldSkip()) return;

      // Only prefetch internal routes
      if (!url.startsWith('/') && !url.startsWith(window.location.origin))
        return;

      const path = url.startsWith('/') ? url : new URL(url).pathname;
      prefetchedUrls.current.add(path);
      router.prefetch(path);
    },
    [router, shouldSkip],
  );

  // ── Extract prefetchable links from a container ──────────────────────────
  const getLinks = useCallback((): HTMLAnchorElement[] => {
    if (!containerRef.current) return [];
    return Array.from(
      containerRef.current.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"], a[href^="https://www.sproutern.com"]',
      ),
    );
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || shouldSkip()) return;

    const container = containerRef.current;
    if (!container) return;

    // ── Signal 1: IntersectionObserver (viewport-based) ────────────────────
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const anchor = entry.target as HTMLAnchorElement;
            const href = anchor.getAttribute('href');
            if (href) {
              // Small delay to batch intersections
              requestIdleCallback(() => prefetch(href));
            }
          }
        }
      },
      { threshold: intersectionThreshold, rootMargin: '200px' },
    );

    const links = getLinks();
    for (const link of links) {
      observer.observe(link);
    }

    // ── Signal 2: Mouse velocity tracking ──────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const prev = mouseState.current;
      const dt = now - prev.timestamp;

      if (dt > 16) {
        // ~60fps sampling
        const dx = e.clientX - prev.x;
        const dy = e.clientY - prev.y;
        const vx = dx / dt;
        const vy = dy / dt;
        const speed = Math.sqrt(vx * vx + vy * vy);

        mouseState.current = {
          x: e.clientX,
          y: e.clientY,
          timestamp: now,
          vx,
          vy,
          speed,
        };

        // If mouse is moving fast, predict trajectory and prefetch target
        if (speed > velocityThreshold) {
          // Project cursor position 200ms into the future
          const futureX = e.clientX + vx * 200;
          const futureY = e.clientY + vy * 200;

          for (const link of links) {
            const rect = link.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dist = Math.sqrt(
              (futureX - centerX) ** 2 + (futureY - centerY) ** 2,
            );

            if (dist < proximityRadius) {
              const href = link.getAttribute('href');
              if (href) prefetch(href);
            }
          }
        }
      }
    };

    // ── Signal 3: Hover proximity ──────────────────────────────────────────
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href) prefetch(href);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    for (const link of links) {
      link.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    }

    return () => {
      observer.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      for (const link of links) {
        link.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [
    getLinks,
    prefetch,
    shouldSkip,
    intersectionThreshold,
    velocityThreshold,
    proximityRadius,
  ]);

  return containerRef;
}

/**
 * Polyfill for requestIdleCallback
 */
if (typeof window !== 'undefined' && !('requestIdleCallback' in window)) {
  (window as any).requestIdleCallback = (cb: IdleRequestCallback) =>
    setTimeout(
      () => cb({ didTimeout: false, timeRemaining: () => 50 } as IdleDeadline),
      1,
    );
}
