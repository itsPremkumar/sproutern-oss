import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false, // Ensures consistent URLs without trailing slash
  // Fix: this repo lives under a parent dir that also has a package-lock.json;
  // pin the tracing root to this project so Next doesn't pick the parent.
  outputFileTracingRoot: __dirname,
  serverExternalPackages: [
    'pdf-parse',
    'firebase-admin',
    'genkit',
    '@genkit-ai/googleai',
    '@opentelemetry/instrumentation',
  ],
  typescript: {
    // Type-checking is disabled at build time to avoid native OOM crashes
    // on low-RAM machines (tsc segfaults on the full 70-dep type graph).
    // Code still compiles via webpack; run `npm run typecheck` separately
    // on a higher-RAM machine if you want strict checks.
    ignoreBuildErrors: true,
  },

  // Enhanced image optimization for SEO and performance
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Modern image formats for better performance
    formats: ['image/avif', 'image/webp'],
    // Image sizes optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Image quality levels (60 for logos, 75 for general images)
    qualities: [60, 75],
    minimumCacheTTL: 60,
    // Disable static imports for dynamic optimization
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression for better performance
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Experimental features for performance
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      'framer-motion',
      'date-fns',
      'firebase',
      'recharts',
    ],
    optimizeCss: true,
  },

  outputFileTracingExcludes: {
    '*': [
      'node_modules/monaco-editor/**',
      'node_modules/lighthouse/**',
      'node_modules/@lhci/**',
      'node_modules/playwright/**',
      'node_modules/@playwright/**',
      'node_modules/puppeteer/**',
      'node_modules/puppeteer-core/**',
      'node_modules/jspdf/**',
      'node_modules/html2canvas/**',
      'node_modules/pdf-parse/test/**',
    ],
  },

  webpack: (config, { isServer }) => {
    // Handle Handlebars
    config.module.rules.push({
      test: /\.(handlebars|hbs)$/,
      use: [
        {
          loader: 'handlebars-loader',
          options: {
            runtime: 'handlebars/runtime',
          },
        },
      ],
    });

    // Handle require.extensions issue
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }

    // Optimize bundle size - split into smaller chunks (CLIENT ONLY)
    // Server-side bundles should use Next.js defaults to avoid 'self is not defined' errors
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 25,
          minSize: 20000,
          cacheGroups: {
            default: false,
            vendors: false,
            // Firebase - load separately since it's large and often not needed immediately
            firebase: {
              name: 'firebase',
              test: /[\\/]node_modules[\\/](firebase|@firebase)[\\/]/,
              chunks: 'all',
              priority: 40,
              reuseExistingChunk: true,
            },
            // Framework essentials - React, Next.js
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              chunks: 'all',
              priority: 35,
              reuseExistingChunk: true,
            },
            // Animation libraries
            animations: {
              name: 'animations',
              test: /[\\/]node_modules[\\/](framer-motion|motion)[\\/]/,
              chunks: 'all',
              priority: 30,
              reuseExistingChunk: true,
            },
            // UI components - Radix UI
            ui: {
              name: 'ui',
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              chunks: 'all',
              priority: 25,
              reuseExistingChunk: true,
            },
            // Icons
            icons: {
              name: 'icons',
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              chunks: 'all',
              priority: 20,
              reuseExistingChunk: true,
            },
            // All other vendor code
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
            // Shared code between pages
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },

  // SEO-friendly redirects
  async redirects() {
    return [
      // === GLOBAL QUERY PARAMETER CLEANUP ===
      // Logic for stripping 'region' and 'lang' parameters has been moved to src/proxy.ts
      // to prevent infinite redirect loops caused by Next.js preserving query parameters by default.

      // Timeless content redirects (2025 -> timeless)
      {
        source: '/blog/first-tech-internship-india-2025',
        destination: '/blog/first-tech-internship-india',
        permanent: true,
      },
      {
        source: '/blog/generative-ai-careers-2025',
        destination: '/blog/generative-ai-careers',
        permanent: true,
      },
      {
        source: '/blog/how-to-write-a-resume-that-beats-ats-in-2025',
        destination: '/blog/how-to-write-a-resume-that-beats-ats',
        permanent: true,
      },
      {
        source: '/blog/is-a-data-science-certification-worth-it-in-2025',
        destination: '/blog/is-a-data-science-certification-worth-it',
        permanent: true,
      },
      {
        source: '/blog/top-5-programming-languages-for-web-development-in-2025',
        destination: '/blog/top-5-programming-languages-for-web-development',
        permanent: true,
      },
      {
        source: '/blog/ultimate-guide-first-internship-2025',
        destination: '/blog/ultimate-guide-first-internship',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      // Premkumar personal page redirects - all redirect to /founder
      {
        source: '/premkumar',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/m-premkumar',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/premkumar-m',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/premkumar-manivel',
        destination: '/founder',
        permanent: true,
      },
      // Ezoic ads.txt redirect - replace YOUR_ACCOUNT_ID with your actual ad manager ID
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/YOUR_ACCOUNT_ID/sproutern.dpdns.org',
        permanent: true,
      },
      // Fix 404 errors from Google Search Console
      // Malformed URLs from external bad links
      {
        source: '/\\$',
        destination: '/',
        permanent: true,
      },
      {
        source: '/\\&',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Sproutern',
        destination: '/',
        permanent: true,
      },
      // Non-existent interview experiences - redirect to main page
      {
        source: '/interview-experiences/IBM',
        destination: '/interview-experiences',
        permanent: true,
      },
      {
        source: '/interview-experiences/Oracle/:path*',
        destination: '/interview-experiences',
        permanent: true,
      },
      // Fix double-encoded HCL URL (noindex issue)
      {
        source: '/interview-experiences/HCL%2520Technologies/:path*',
        destination: '/interview-experiences',
        permanent: true,
      },
      // Fix 404 errors from Google Search Console (Jan-Feb 2026)
      // Legacy company subpages that no longer exist
      {
        source: '/companies/apple/interview-questions',
        destination: '/tools/interview-questions',
        permanent: true,
      },
      {
        source: '/companies/netflix/interview-questions',
        destination: '/tools/interview-questions',
        permanent: true,
      },
      {
        source: '/companies/uber/interview-questions',
        destination: '/tools/interview-questions',
        permanent: true,
      },
      {
        source: '/companies/wipro/salary',
        destination: '/companies/wipro',
        permanent: true,
      },
      // API routes should not be indexed - redirect to home
      {
        source: '/api/users/:path*',
        destination: '/',
        permanent: false, // Use temporary redirect for API routes
      },
    ];
  },

  // Security and performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
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
            value:
              'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          // International CDN optimization
          {
            key: 'Vary',
            value: 'Accept-Language, Accept-Encoding',
          },
          // Content language hint for SEO
          {
            key: 'Content-Language',
            value: 'en',
          },
          // Link preload hints for faster page transitions.
          // NOTE: only logo.jpg (actually rendered in the header) is preloaded.
          // opengraph.jpg is for social scrapers only — preloading it forced
          // every real visitor to download ~50-200KB they never see.
          {
            key: 'Link',
            value: '</logo.jpg>; rel=preload; as=image',
          },
          // Content Security Policy for enhanced security
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Google Translate requires: translate.google.com, translate.googleapis.com, translate-pa.googleapis.com, and www.google.com
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com https://www.google.com https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com https://www.ezojs.com https://cdn.id5-sync.com https://fundingchoicesmessages.google.com https://va.vercel-scripts.com https://googleads.g.doubleclick.net https://analytics.ahrefs.com https://static.cloudflareinsights.com https://mc.yandex.ru",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://translate.googleapis.com https://www.gstatic.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com data:",
              // Added Google Translate API endpoints and Vercel analytics
              "connect-src 'self' https://*.firebase.googleapis.com https://*.google-analytics.com https://*.firebaseio.com wss://*.firebaseio.com https://translate.googleapis.com https://translate-pa.googleapis.com https://www.google.com https://pagead2.googlesyndication.com https://va.vercel-scripts.com https://firestore.googleapis.com https://firebaseinstallations.googleapis.com https://analytics.ahrefs.com https://static.cloudflareinsights.com/cloudflareinsights https://mc.yandex.ru https://mc.yandex.com",
              // Added Google Ads doubleclick for ad frames
              "frame-src 'self' https://www.youtube.com https://player.vimeo.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://fundingchoicesmessages.google.com https://googleads.g.doubleclick.net https://www.google.com",
              "worker-src 'self' blob:",
              "media-src 'self' https: data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache Next.js static chunks (JS/CSS) - aggressive caching
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      // Premkumar profile image SEO headers
      {
        source: '/premkumar.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large',
          },
          {
            key: 'Content-Disposition',
            value: 'inline; filename="premkumar-founder-sproutern.jpeg"',
          },
        ],
      },
      // German localized pages
      {
        source: '/de/:path*',
        headers: [
          {
            key: 'Content-Language',
            value: 'de',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      // Chinese localized pages
      {
        source: '/zh/:path*',
        headers: [
          {
            key: 'Content-Language',
            value: 'zh-CN',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      // Tool pages - moderate caching with stale-while-revalidate
      {
        source: '/tools/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=3600',
          },
        ],
      },
      // Blog pages - moderate caching for content freshness + performance
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=600, stale-while-revalidate=3600',
          },
        ],
      },
      // Game pages - longer caching since games rarely change
      {
        source: '/games/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, stale-while-revalidate=7200',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
