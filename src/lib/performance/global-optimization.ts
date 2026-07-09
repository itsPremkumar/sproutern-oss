// Global Performance Optimization Utilities
// Edge caching, CDN hints, and performance optimizations for international users

/**
 * Cloudflare and CDN Cache Headers
 * Use these headers for optimal edge caching
 */
export const edgeCacheHeaders = {
  // Static assets - cache for 1 year
  static: {
    'Cache-Control': 'public, max-age=31536000, immutable',
    'CDN-Cache-Control': 'public, max-age=31536000',
    'Vercel-CDN-Cache-Control': 'public, max-age=31536000',
  },
  // Dynamic pages - cache for 1 hour with stale-while-revalidate
  dynamic: {
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    'CDN-Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
  },
  // Tool pages - cache for 5 minutes
  tools: {
    'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
    'CDN-Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
  },
  // API responses - cache for 1 minute
  api: {
    'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
  },
};

/**
 * Regional Edge Locations
 * Prioritize content delivery based on user geography
 */
export const regionalConfigs = {
  'de-DE': {
    edgeLocation: 'fra1', // Frankfurt
    timezone: 'Europe/Berlin',
    currencyFormat: 'de-DE',
  },
  'zh-CN': {
    edgeLocation: 'hkg1', // Hong Kong (closest to mainland)
    timezone: 'Asia/Shanghai',
    currencyFormat: 'zh-CN',
  },
  'en-IN': {
    edgeLocation: 'bom1', // Mumbai
    timezone: 'Asia/Kolkata',
    currencyFormat: 'en-IN',
  },
  'en-US': {
    edgeLocation: 'iad1', // Washington DC
    timezone: 'America/New_York',
    currencyFormat: 'en-US',
  },
  'en-AU': {
    edgeLocation: 'syd1', // Sydney
    timezone: 'Australia/Sydney',
    currencyFormat: 'en-AU',
  },
};

/**
 * Image optimization settings for global delivery
 */
export const imageOptimization = {
  // Default quality for different regions (lower for slower connections)
  qualityByRegion: {
    default: 85,
    'zh-CN': 80, // China - optimize for GFW considerations
    'en-IN': 75, // India - optimize for mobile-first
    'en-GH': 70, // Ghana - optimize for slower connections
  },
  // Image formats priority
  formats: ['avif', 'webp', 'jpg'],
  // Default sizes for responsive images
  sizes: [320, 640, 768, 1024, 1280, 1920],
};

/**
 * Preconnect hints for faster resource loading
 */
export const preconnectHints = [
  // Analytics
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com',
  // Fonts
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  // CDN
  'https://cdn.vercel-insights.com',
  // Ad networks
  'https://pagead2.googlesyndication.com',
];

/**
 * DNS prefetch hints for anticipated navigation
 */
export const dnsPrefetchHints = [
  // Firebase
  'https://firebasestorage.googleapis.com',
  // CDNs
  'https://cdnjs.cloudflare.com',
  'https://unpkg.com',
];

/**
 * Generate performance headers for a specific page type
 */
export function getPerformanceHeaders(
  pageType: 'static' | 'dynamic' | 'tools' | 'api',
) {
  return {
    ...edgeCacheHeaders[pageType],
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };
}

/**
 * Critical CSS for above-the-fold content
 * Inline these styles to reduce render-blocking CSS
 */
export const criticalStyles = `
  /* Critical font display */
  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: local('Inter');
  }
  
  /* Layout preventing shift */
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  /* Skeleton loading states */
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: skeleton 1.5s infinite;
  }
  
  @keyframes skeleton {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

/**
 * Web Vitals thresholds for performance monitoring
 */
export const webVitalsThresholds = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 }, // First Input Delay
  CLS: { good: 0.1, needsImprovement: 0.25 }, // Cumulative Layout Shift
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint
  TTFB: { good: 800, needsImprovement: 1800 }, // Time to First Byte
  INP: { good: 200, needsImprovement: 500 }, // Interaction to Next Paint
};

/**
 * Resource hints generator for specific pages
 */
export function generateResourceHints(pagePath: string) {
  const hints: { rel: string; href: string; as?: string; type?: string }[] = [];

  // Add base preconnects
  preconnectHints.forEach((href) => {
    hints.push({ rel: 'preconnect', href });
  });

  // Add DNS prefetch
  dnsPrefetchHints.forEach((href) => {
    hints.push({ rel: 'dns-prefetch', href });
  });

  // Page-specific preloads
  if (pagePath.includes('/tools/')) {
    hints.push({
      rel: 'preload',
      href: '/js/tools-bundle.js',
      as: 'script',
    });
  }

  return hints;
}

/**
 * Lazy loading configuration
 */
export const lazyLoadConfig = {
  // Intersection Observer options
  rootMargin: '200px',
  threshold: 0.1,
  // Max concurrent loads
  concurrency: 3,
};
