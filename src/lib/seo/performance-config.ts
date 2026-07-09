/**
 * Performance Configuration for SEO Optimization
 * Utilities for Core Web Vitals improvement
 */

export interface ImageOptimizationConfig {
  formats: ('webp' | 'avif' | 'jpg' | 'png')[];
  quality: number;
  sizes: number[];
  deviceSizes: number[];
  imageSizes: number[];
}

export interface ResourceHint {
  rel: 'preconnect' | 'dns-prefetch' | 'prefetch' | 'preload' | 'modulepreload';
  href: string;
  as?: string;
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

// Default image optimization configuration
export const imageOptimizationConfig: ImageOptimizationConfig = {
  formats: ['avif', 'webp', 'jpg'],
  quality: 85,
  sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
};

// Critical external domains for resource hints
export const externalDomains = {
  // Google Services
  googleFonts: 'https://fonts.googleapis.com',
  googleFontsStatic: 'https://fonts.gstatic.com',
  googleAnalytics: 'https://www.google-analytics.com',
  googleTagManager: 'https://www.googletagmanager.com',
  googleAds: 'https://pagead2.googlesyndication.com',

  // Firebase
  firebaseStorage: 'https://firebasestorage.googleapis.com',
  firebaseApp: 'https://www.gstatic.com',

  // CDNs
  placehold: 'https://placehold.co',
  uiAvatars: 'https://ui-avatars.com',
};

// Generate resource hints for critical external resources
export function generateResourceHints(): ResourceHint[] {
  return [
    // Preconnect to critical domains
    {
      rel: 'preconnect',
      href: externalDomains.googleFonts,
    },
    {
      rel: 'preconnect',
      href: externalDomains.googleFontsStatic,
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: externalDomains.firebaseStorage,
    },

    // DNS prefetch for analytics (lower priority)
    {
      rel: 'dns-prefetch',
      href: externalDomains.googleAnalytics,
    },
    {
      rel: 'dns-prefetch',
      href: externalDomains.googleTagManager,
    },
    {
      rel: 'dns-prefetch',
      href: externalDomains.googleAds,
    },
  ];
}

// Font loading optimization
export const fontOptimization = {
  display: 'swap' as const, // Ensures text remains visible during font load
  preload: true,
  fallback:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

// Lazy loading configuration
export const lazyLoadConfig = {
  rootMargin: '50px', // Start loading when element is 50px from viewport
  threshold: 0.01,
  enableNativeLazyLoading: true,
};

// Critical CSS extraction patterns
export const criticalCSSPatterns = [
  // Above-the-fold elements
  'header',
  'nav',
  '.hero',
  '.navbar',
  'h1',
  'h2',
  // Critical UI components
  '.btn',
  '.button',
  // Layout structure
  '.container',
  '.wrapper',
  'main',
];

// Performance budgets (in KB)
export const performanceBudgets = {
  javascript: 300, // Max JS bundle size
  css: 100, // Max CSS size
  images: 500, // Max image size per page
  fonts: 100, // Max font files size
  total: 1000, // Max total page weight
};

// Core Web Vitals targets
export const coreWebVitalsTargets = {
  // Largest Contentful Paint (LCP) - should occur within 2.5 seconds
  lcp: 2500,

  // First Input Delay (FID) - should be less than 100 milliseconds
  fid: 100,

  // Cumulative Layout Shift (CLS) - should be less than 0.1
  cls: 0.1,

  // First Contentful Paint (FCP)
  fcp: 1800,

  // Time to Interactive (TTI)
  tti: 3800,

  // Total Blocking Time (TBT)
  tbt: 300,
};

// Compression configuration
export const compressionConfig = {
  gzip: {
    enabled: true,
    level: 6, // 1-9, higher = better compression but slower
  },
  brotli: {
    enabled: true,
    quality: 11, // 0-11, higher = better compression
  },
};

// Cache control headers
export const cacheControlHeaders = {
  static: 'public, max-age=31536000, immutable', // 1 year for static assets
  dynamic: 'public, max-age=0, must-revalidate', // Always revalidate dynamic content
  api: 'public, max-age=60, stale-while-revalidate=300', // Cache API responses for 1 min
  images: 'public, max-age=2592000, immutable', // 30 days for images
};

// Generate srcset for responsive images
export function generateSrcSet(
  imagePath: string,
  sizes: number[] = [640, 828, 1200, 1920],
): string {
  return sizes.map((size) => `${imagePath}?w=${size} ${size}w`).join(', ');
}

// Calculate image dimensions to prevent CLS
export function calculateAspectRatio(width: number, height: number): string {
  return `${(height / width) * 100}%`;
}

// Generate sizes attribute for responsive images
export function generateSizesAttribute(breakpoints: {
  [key: string]: string;
}): string {
  return Object.entries(breakpoints)
    .map(([mediaQuery, size]) => `${mediaQuery} ${size}`)
    .join(', ');
}

// Preload critical resources
export function generatePreloadLinks(resources: {
  fonts?: string[];
  images?: string[];
  scripts?: string[];
}): ResourceHint[] {
  const hints: ResourceHint[] = [];

  // Preload fonts
  if (resources.fonts) {
    resources.fonts.forEach((font) => {
      hints.push({
        rel: 'preload',
        href: font,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      });
    });
  }

  // Preload critical images
  if (resources.images) {
    resources.images.forEach((image) => {
      hints.push({
        rel: 'preload',
        href: image,
        as: 'image',
      });
    });
  }

  // Preload critical scripts
  if (resources.scripts) {
    resources.scripts.forEach((script) => {
      hints.push({
        rel: 'modulepreload',
        href: script,
      });
    });
  }

  return hints;
}

// Service Worker configuration for PWA
export const serviceWorkerConfig = {
  enabled: true,
  scope: '/',
  updateViaCache: 'none' as const,
  cacheStrategies: {
    // Network first for HTML
    html: 'NetworkFirst',
    // Cache first for static assets
    static: 'CacheFirst',
    // Stale while revalidate for images
    images: 'StaleWhileRevalidate',
    // Network only for API calls
    api: 'NetworkOnly',
  },
};

// Generate security headers for SEO and trust
export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self)',
  },
];

// Content Security Policy for enhanced security
export const contentSecurityPolicy = `
 default-src 'self';
 script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com;
 style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
 font-src 'self' https://fonts.gstatic.com;
 img-src 'self' data: https: blob:;
 media-src 'self' https://firebasestorage.googleapis.com;
 connect-src 'self' https://*.googleapis.com https://*.firebaseio.com https://*.google-analytics.com;
 frame-src 'self' https://www.google.com;
 object-src 'none';
 base-uri 'self';
 form-action 'self';
 frame-ancestors 'self';
 upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, ' ')
  .trim();
