import type { UserConfig } from '@unlighthouse/core';

const config: UserConfig = {
  site: 'http://localhost:9002',

  scanner: {
    device: 'mobile', // Override via CLI: --scanner.device desktop
    // skipAfter: 100,    // Scan more pages for comprehensive audit
    throttle: true, // Prevent memory issues
    dynamicSampling: 5,
    maxRoutes: 200,
    sitemap: true,
    robotsTxt: true,
    samples: 1, // Single sample for faster scans
    exclude: ['/api/*', '/_next/*', '/admin/*'],
  },

  lighthouseOptions: {
    maxWaitForFcp: 30000,
    maxWaitForLoad: 45000,
  },

  ci: {
    budget: {
      performance: 85,
      accessibility: 95,
      'best-practices': 90,
      seo: 95,
    },
    buildStatic: true,
  },

  outputPath: './lighthouse-reports',
  debug: true,
};

export default config;
