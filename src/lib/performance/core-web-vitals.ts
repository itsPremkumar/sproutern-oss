/**
 * Core Web Vitals Optimization Utilities
 * Tools to improve LCP, FID, and CLS
 */

/**
 * Priority hint for critical resources
 */
export function addPriorityHint(
  element: HTMLElement,
  priority: 'high' | 'low' | 'auto',
) {
  element.setAttribute('fetchpriority', priority);
}

/**
 * Preload critical resources
 */
export function preloadResource(
  href: string,
  as: 'script' | 'style' | 'image' | 'font' | 'fetch',
  type?: string,
) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  if (as === 'font') link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

/**
 * Defer non-critical CSS
 */
export function deferCSS(href: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = function () {
    // @ts-ignore
    this.media = 'all';
  };
  document.head.appendChild(link);
}

/**
 * Reserve space for dynamic content to prevent CLS
 */
export function reserveSpace(element: HTMLElement, aspectRatio: string) {
  element.style.aspectRatio = aspectRatio;
}

/**
 * Lazy load images with Intersection Observer
 */
export class LazyImageLoader {
  private observer: IntersectionObserver;

  constructor(options: IntersectionObserverInit = {}) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.getAttribute('data-src');
            const dataSrcset = img.getAttribute('data-srcset');

            if (dataSrc) {
              // Only allow http(s) and same-origin blob/data URLs to prevent
              // javascript: scheme injection via data-src attributes.
              if (/^(https?:|\/)/i.test(dataSrc)) {
                img.src = dataSrc;
                img.removeAttribute('data-src');
              }
            }

            if (dataSrcset) {
              img.srcset = dataSrcset;
              img.removeAttribute('data-srcset');
            }

            img.classList.add('loaded');
            this.observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
        ...options,
      },
    );
  }

  observe(element: HTMLElement) {
    this.observer.observe(element);
  }

  unobserve(element: HTMLElement) {
    this.observer.unobserve(element);
  }

  disconnect() {
    this.observer.disconnect();
  }
}

/**
 * Measure and report Core Web Vitals
 */
export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric);
  }

  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value,
      ),
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint
  if (typeof window !== 'undefined') {
    navigator.sendBeacon?.('/api/analytics/web-vitals', JSON.stringify(metric));
  }
}

/**
 * Performance monitoring utilities
 */
export class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();

  startMeasure(name: string) {
    this.metrics.set(name, performance.now());
  }

  endMeasure(name: string): number | null {
    const start = this.metrics.get(name);
    if (!start) return null;

    const duration = performance.now() - start;
    this.metrics.delete(name);

    // Report to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name,
        value: Math.round(duration),
        event_category: 'Performance',
      });
    }

    return duration;
  }

  getMetrics() {
    return Object.fromEntries(this.metrics);
  }
}

/**
 * Critical CSS injection for above-the-fold content
 */
export function injectCriticalCSS(css: string) {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
}

/**
 * Resource hints generator
 */
export function addResourceHints(
  hints: Array<{
    rel: 'preconnect' | 'dns-prefetch' | 'prefetch' | 'prerender';
    href: string;
    crossOrigin?: boolean;
  }>,
) {
  hints.forEach((hint) => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossOrigin) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

/**
 * Reduce layout shift by setting explicit dimensions
 */
export function setExplicitDimensions(
  element: HTMLElement,
  width?: number,
  height?: number,
  aspectRatio?: string,
) {
  if (width) element.style.width = `${width}px`;
  if (height) element.style.height = `${height}px`;
  if (aspectRatio) element.style.aspectRatio = aspectRatio;
}

/**
 * Font loading optimization
 */
export async function preloadFont(
  fontFamily: string,
  url: string,
  options: {
    format?: 'woff2' | 'woff';
    weight?: string;
    style?: string;
  } = {},
) {
  const { format = 'woff2', weight, style } = options;

  try {
    const fontFace = new FontFace(
      fontFamily,
      `url(${url}) format('${format}')`,
      {
        weight,
        style,
        display: 'swap',
      },
    );

    await fontFace.load();
    document.fonts.add(fontFace);
  } catch (error) {
    console.error('Font preload failed:', error);
  }
}

/**
 * Reduce JavaScript execution time
 */
export function deferScript(src: string, onLoad?: () => void) {
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  if (onLoad) script.onload = onLoad;
  document.body.appendChild(script);
}

/**
 * Progressive image loading
 */
export async function loadImageProgressively(
  lowResUrl: string,
  highResUrl: string,
  element: HTMLImageElement,
): Promise<void> {
  return new Promise((resolve) => {
    // Load low-res first
    element.src = lowResUrl;
    element.classList.add('blur');

    // Load high-res in background
    const highResImage = new Image();
    highResImage.onload = () => {
      element.src = highResUrl;
      element.classList.remove('blur');
      resolve();
    };
    highResImage.src = highResUrl;
  });
}
