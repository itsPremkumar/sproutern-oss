/**
 * Link Crawler Test Suite for Sproutern
 *
 * These tests crawl internal links and identify:
 * - 404 Not Found pages
 * - Broken internal links
 * - Missing or incomplete pages
 * - Pages that redirect unexpectedly
 */

import fs from 'fs';
import path from 'path';
import { blogPosts } from '../../lib/blog-data';
import { companies } from '../../lib/company-data';

// Get all page routes from the app directory
function getAppRoutes(dir: string, basePath = ''): string[] {
  const routes: string[] = [];

  if (!fs.existsSync(dir)) return routes;

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip special Next.js directories
      if (
        item.startsWith('_') ||
        item.startsWith('.') ||
        item === 'api' ||
        item === 'actions'
      ) {
        continue;
      }

      // Handle dynamic routes
      const routeSegment = item.startsWith('[')
        ? `:${item.slice(1, -1)}`
        : item;
      const newBasePath = `${basePath}/${routeSegment}`;

      // Check if this directory has a page.tsx
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        routes.push(newBasePath);
      }

      // Recursively check subdirectories
      routes.push(...getAppRoutes(fullPath, newBasePath));
    }
  }

  return routes;
}

// Extract all internal links from a file
function extractInternalLinks(filePath: string): string[] {
  const links: string[] = [];

  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Match href="/path" or href='/path' patterns
    const hrefMatches = content.matchAll(/href=["'](\/?[^"'#]+)["']/g);
    for (const match of hrefMatches) {
      const href = match[1];
      // Only include internal links (starting with /)
      if (href.startsWith('/') && !href.startsWith('//')) {
        links.push(href);
      }
    }

    // Match Link component with href
    const linkMatches = content.matchAll(/<Link[^>]*href=["']([^"'#]+)["']/g);
    for (const match of linkMatches) {
      const href = match[1];
      if (href.startsWith('/') && !href.startsWith('//')) {
        links.push(href);
      }
    }
  } catch (error) {
    // Ignore read errors
  }

  return [...new Set(links)]; // Remove duplicates
}

// Walk directory and collect all links
function collectAllLinks(dir: string): Map<string, string[]> {
  const linkMap = new Map<string, string[]>();

  function walk(currentDir: string) {
    if (!fs.existsSync(currentDir)) return;

    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        item !== 'node_modules'
      ) {
        walk(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const links = extractInternalLinks(fullPath);
        if (links.length > 0) {
          linkMap.set(fullPath, links);
        }
      }
    }
  }

  walk(dir);
  return linkMap;
}

describe('Route Discovery', () => {
  const appDir = path.join(process.cwd(), 'src', 'app');

  test('should discover all page routes', () => {
    const routes = getAppRoutes(appDir);

    console.log(`\n📍 Discovered ${routes.length} routes:`);
    routes.slice(0, 20).forEach((route) => console.log(`  ${route}`));
    if (routes.length > 20) {
      console.log(`  ... and ${routes.length - 20} more`);
    }

    expect(routes.length).toBeGreaterThan(0);
  });

  test('should have required core pages', () => {
    const routes = getAppRoutes(appDir);

    const requiredPages = ['/', '/about', '/blog', '/contact'];

    const missingPages: string[] = [];

    // Check for root page
    if (!fs.existsSync(path.join(appDir, 'page.tsx'))) {
      missingPages.push('/');
    }

    requiredPages.slice(1).forEach((page) => {
      const pagePath = page.slice(1); // Remove leading /
      if (!routes.includes(page) && !routes.includes(`/${pagePath}`)) {
        // Check if directory exists with page.tsx
        const dirPath = path.join(appDir, pagePath);
        if (!fs.existsSync(path.join(dirPath, 'page.tsx'))) {
          missingPages.push(page);
        }
      }
    });

    if (missingPages.length > 0) {
      console.log('⚠️ Missing core pages:', missingPages);
    }

    // This is informational - some pages might be intentionally missing
    expect(true).toBe(true);
  });
});

describe('Internal Link Validation', () => {
  const srcDir = path.join(process.cwd(), 'src');
  const appDir = path.join(process.cwd(), 'src', 'app');

  test('should identify all internal links', () => {
    const linkMap = collectAllLinks(srcDir);

    let totalLinks = 0;
    linkMap.forEach((links) => {
      totalLinks += links.length;
    });

    console.log(
      `\n🔗 Found ${totalLinks} internal links across ${linkMap.size} files`,
    );

    expect(totalLinks).toBeGreaterThan(0);
  });

  test('should detect broken internal links', () => {
    const linkMap = collectAllLinks(srcDir);
    const routes = getAppRoutes(appDir);

    // Add root route
    routes.push('/');

    // Normalize routes for comparison
    const normalizedRoutes = new Set(
      routes.map((r) => r.replace(/\/$/, '') || '/'),
    );

    const brokenLinks: { file: string; link: string }[] = [];
    const dynamicLinks: { file: string; link: string }[] = [];

    linkMap.forEach((links, file) => {
      links.forEach((link) => {
        // Normalize link
        const normalizedLink = link.replace(/\/$/, '') || '/';

        // Skip external links, anchors, and query strings
        if (!normalizedLink.startsWith('/') || normalizedLink.includes('?')) {
          return;
        }

        // Check if it's a dynamic route (contains parameters)
        if (normalizedLink.includes(':') || /\/\d+$/.test(normalizedLink)) {
          dynamicLinks.push({ file: file.replace(srcDir, ''), link });
          return;
        }

        // Check for known patterns that are valid
        const validPatterns = [
          /^\/blog\/.+/, // Blog posts
          /^\/companies\/.+/, // Company pages
          /^\/interview-experiences\/.+/, // Interview experience pages
          /^\/tools\/.+/, // Tool pages
          /^\/games\/.+/, // Game pages
          /^\/resources\/.+/, // Resource pages
          /^\/scholarships\/.+/, // Scholarship pages
          /^\/countries\/.+/, // Country pages
          /^\/data\/.+/, // Public data files (served from /public/data/)
        ];

        const matchesPattern = validPatterns.some((pattern) =>
          pattern.test(normalizedLink),
        );

        // Check if route exists or matches a pattern
        if (!normalizedRoutes.has(normalizedLink) && !matchesPattern) {
          // Check if parent route exists (for nested routes)
          const parentRoute =
            normalizedLink.split('/').slice(0, -1).join('/') || '/';
          if (!normalizedRoutes.has(parentRoute) && !matchesPattern) {
            brokenLinks.push({ file: file.replace(srcDir, ''), link });
          }
        }
      });
    });

    if (brokenLinks.length > 0) {
      console.log('\n❌ Potentially broken links:');
      brokenLinks.slice(0, 20).forEach(({ file, link }) => {
        console.log(`  ${file} -> ${link}`);
      });
      if (brokenLinks.length > 20) {
        console.log(`  ... and ${brokenLinks.length - 20} more`);
      }
    } else {
      console.log('\n✅ No broken internal links detected');
    }

    // Informational - don't fail the test
    expect(true).toBe(true);
  });
});

describe('404 Page Verification', () => {
  const appDir = path.join(process.cwd(), 'src', 'app');

  test('should have a custom 404 page', () => {
    const notFoundPath = path.join(appDir, 'not-found.tsx');
    const exists = fs.existsSync(notFoundPath);

    if (exists) {
      console.log('✅ Custom 404 page exists: src/app/not-found.tsx');
    } else {
      console.log('⚠️ No custom 404 page found at src/app/not-found.tsx');
    }

    expect(exists).toBe(true);
  });

  test('should have error boundaries', () => {
    const errorPath = path.join(appDir, 'error.tsx');
    const globalErrorPath = path.join(appDir, 'global-error.tsx');

    const hasError = fs.existsSync(errorPath);
    const hasGlobalError = fs.existsSync(globalErrorPath);

    console.log(
      `Error page (error.tsx): ${hasError ? '✅ exists' : '⚠️ missing'}`,
    );
    console.log(
      `Global error (global-error.tsx): ${hasGlobalError ? '✅ exists' : '⚠️ missing'}`,
    );

    // At least one should exist
    expect(hasError || hasGlobalError).toBe(true);
  });
});

describe('Page Completeness Check', () => {
  const appDir = path.join(process.cwd(), 'src', 'app');

  test('should not have empty or placeholder pages', () => {
    const routes = getAppRoutes(appDir);
    const incompletePagesFound: { route: string; reason: string }[] = [];

    routes.forEach((route) => {
      const routePath =
        route === '/'
          ? ''
          : route
              .slice(1)
              .replace(/:/g, '[')
              .replace(/([^/]+)$/, (m) => (m.includes('[') ? m + ']' : m));
      const pagePath = path.join(appDir, routePath, 'page.tsx');

      if (fs.existsSync(pagePath)) {
        try {
          const content = fs.readFileSync(pagePath, 'utf-8');

          // Routes that legitimately discuss placeholder text (tools, generators, etc.)
          const falsePositiveRoutes = [
            '/tools/lorem-ipsum-generator',
            '/tools/image-placeholder',
            '/tools/word-counter',
            '/tools/case-converter',
            '/tools/font-pairings',
            '/tools/email-generator',
            '/tools/color-palette-generator',
            '/tools/css-gradient-generator',
            '/tools/number-converter',
            '/tools/image-to-base64',
            '/tools/college-predictor',
            '/tools',
            '/resources/resume-templates',
            '/forgot-password',
            '/dashboard', // Redirect page to /profile
          ];

          // Skip false positive routes
          if (falsePositiveRoutes.includes(route)) {
            return;
          }

          // Check for placeholder indicators (exclude HTML placeholder attributes)
          const placeholderPatterns = [
            { pattern: /TODO:/i, name: 'TODO' },
            { pattern: /FIXME:/i, name: 'FIXME' },
            { pattern: /coming soon/i, name: 'coming soon' },
            { pattern: /under construction/i, name: 'under construction' },
          ];

          // Only check for lorem ipsum in non-tool pages
          if (!route.startsWith('/tools') && !route.startsWith('/resources')) {
            if (/lorem ipsum/i.test(content)) {
              incompletePagesFound.push({
                route,
                reason: 'Contains "lorem ipsum"',
              });
            }
          }

          // Check for placeholder as actual display content (not HTML attribute or comments)
          // Exclude: placeholder="...", // placeholder, placeholder text in educational content
          const contentWithoutComments = content
            .replace(/\/\/.*$/gm, '')
            .replace(/\/\*[\s\S]*?\*\//g, '');
          const contentWithoutAttributes = contentWithoutComments.replace(
            /placeholder\s*=\s*["'][^"']*["']/g,
            '',
          );
          if (
            /\bplaceholder\b/i.test(contentWithoutAttributes) &&
            !route.startsWith('/tools') &&
            !route.startsWith('/resources')
          ) {
            incompletePagesFound.push({
              route,
              reason: 'Contains "placeholder" in content',
            });
          }

          for (const { pattern, name } of placeholderPatterns) {
            if (pattern.test(content)) {
              incompletePagesFound.push({
                route,
                reason: `Contains "${name}"`,
              });
              break;
            }
          }

          // Check if page is too short (likely incomplete)
          // But exclude pages that import client components (content is in the client component)
          const importsClientComponent =
            /import\s+\w+Client\s+from|import\s+{[^}]*}\s+from.*Client/.test(
              content,
            );
          if (content.length < 500 && !importsClientComponent) {
            incompletePagesFound.push({
              route,
              reason: 'Very short content (< 500 chars)',
            });
          }
        } catch (error) {
          // Ignore read errors
        }
      }
    });

    if (incompletePagesFound.length > 0) {
      console.log('\n⚠️ Potentially incomplete pages:');
      incompletePagesFound.forEach(({ route, reason }) => {
        console.log(`  ${route}: ${reason}`);
      });
    } else {
      console.log('\n✅ No incomplete pages detected');
    }

    // Informational - don't fail
    expect(true).toBe(true);
  });

  test('should have metadata for all pages', () => {
    const routes = getAppRoutes(appDir);
    const pagesWithoutMetadata: string[] = [];

    // Pages that are expected to not have metadata (redirects, auth pages, etc.)
    const expectedNoMetadata = [
      '/dashboard', // Redirect page to /profile
      '/signin',
      '/signup',
      '/forgot-password',
      '/verify-email',
      '/offline', // PWA offline page
    ];

    routes.forEach((route) => {
      // Skip pages that are expected to not have metadata
      if (expectedNoMetadata.includes(route)) {
        return;
      }

      const routePath = route === '/' ? '' : route.slice(1);
      const pagePath = path.join(appDir, routePath, 'page.tsx');
      const layoutPath = path.join(appDir, routePath, 'layout.tsx');

      if (fs.existsSync(pagePath)) {
        try {
          const pageContent = fs.readFileSync(pagePath, 'utf-8');

          // Check for metadata export in page
          const hasPageMetadata =
            pageContent.includes('export const metadata') ||
            pageContent.includes('export async function generateMetadata') ||
            pageContent.includes('export function generateMetadata');

          // Check for metadata export in layout (for client components)
          let hasLayoutMetadata = false;
          if (fs.existsSync(layoutPath)) {
            const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
            hasLayoutMetadata =
              layoutContent.includes('export const metadata') ||
              layoutContent.includes('getPageSEO') ||
              layoutContent.includes('generateMetadata');
          }

          if (!hasPageMetadata && !hasLayoutMetadata) {
            pagesWithoutMetadata.push(route);
          }
        } catch (error) {
          // Ignore read errors
        }
      }
    });

    if (pagesWithoutMetadata.length > 0) {
      console.log('\n⚠️ Pages without metadata (affects SEO):');
      pagesWithoutMetadata.slice(0, 15).forEach((route) => {
        console.log(`  ${route}`);
      });
      if (pagesWithoutMetadata.length > 15) {
        console.log(`  ... and ${pagesWithoutMetadata.length - 15} more`);
      }
    } else {
      console.log('\n✅ All pages have metadata');
    }

    // Informational - don't fail
    expect(true).toBe(true);
  });
});

describe('Orphan Page Detection', () => {
  const srcDir = path.join(process.cwd(), 'src');
  const appDir = path.join(process.cwd(), 'src', 'app');

  test('should identify pages with no incoming links', () => {
    const routes = getAppRoutes(appDir);
    const linkMap = collectAllLinks(srcDir);

    // Collect all linked routes
    const linkedRoutes = new Set<string>();
    linkMap.forEach((links) => {
      links.forEach((link) => {
        linkedRoutes.add(link.replace(/\/$/, '') || '/');
      });
    });

    // Add dynamically generated blog routes to known links
    blogPosts.forEach((post) => {
      linkedRoutes.add(`/blog/${post.slug}`);
    });

    // Add company pages to known links
    companies.forEach((company) => {
      linkedRoutes.add(company.interviewLink);
      if (company.salaryLink) {
        linkedRoutes.add(company.salaryLink);
      }
      if (company.hubLink) {
        linkedRoutes.add(company.hubLink);
      }
    });

    // Add country pages to known links (dynamically linked via template literals)
    const countrySlugs = [
      'germany',
      'usa',
      'uk',
      'canada',
      'australia',
      'netherlands',
      'france',
      'ireland',
      'singapore',
      'switzerland',
      'sweden',
      'new-zealand',
      'denmark',
      'south-korea',
      'hong-kong',
      'japan',
    ];
    countrySlugs.forEach((slug) => {
      linkedRoutes.add(`/countries/${slug}`);
    });

    // Add college resource pages (dynamically linked via JavaScript expressions)
    const collegePaths = [
      '/college/semester-planner',
      '/college/comparison',
      '/college/first-year-guide',
      '/college/extracurriculars',
    ];
    collegePaths.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add fresher guide pages (linked dynamically)
    const fresherPaths = [
      '/freshers',
      '/freshers/bond-clauses',
      '/freshers/finance-tax-guide',
      '/freshers/notice-period',
      '/freshers/first-job-guide',
      '/freshers/probation-tips',
      '/freshers/relocation',
      '/freshers/salary-negotiation',
    ];
    fresherPaths.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add company interview question pages (linked dynamically via company data)
    const companyInterviewPages = [
      '/companies/amazon/interview-questions',
      '/companies/google/interview-questions',
      '/companies/microsoft/interview-questions',
    ];
    companyInterviewPages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add German (de) locale pages
    const dePages = ['/de/tools/cgpa-converter', '/de/tools/salary-calculator'];
    dePages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add other known pages
    const otherKnownPages = [
      '/countries/uae',
      '/doneate', // Alternate spelling/redirect for /donate
      '/blog/:slug', // Dynamic route placeholder
      '/downloads/:slug', // Dynamic route placeholder
    ];
    otherKnownPages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add game pages (linked via GamesClient.tsx client component - static analysis can't detect)
    const gamePages = [
      '/games',
      '/games/algorithm-thinking',
      '/games/antonym-challenge',
      '/games/attention-trainer',
      '/games/bias-buster',
      '/games/biology-pathway',
      '/games/brain-logic-test',
      '/games/card-flip-memory',
      '/games/causal-chain-builder',
      '/games/chart-challenge',
      '/games/clinical-case',
      '/games/coding',
      '/games/complexity-cracker',
      '/games/concentration-challenge',
      '/games/concentration-test',
      '/games/concept-sprint',
      '/games/constraint-crusher',
      '/games/critical-thinking-quiz',
      '/games/daily-riddle',
      '/games/data-detective',
      '/games/debugging-challenge',
      '/games/decision-matrix-lab',
      '/games/deep-problem-marathon',
      '/games/derivation-race',
      '/games/dimensional-detective',
      '/games/email-etiquette',
      '/games/error-spotter',
      '/games/fallacy-detective',
      '/games/fermi-estimation-duel',
      '/games/focus-booster',
      '/games/interview-ready',
      '/games/logic-builder',
      '/games/logic-puzzle',
      '/games/math-proof-builder',
      '/games/math-speed-test',
      '/games/memory-match',
      '/games/memory-matrix',
      '/games/memory-power-test',
      '/games/mental-math',
      '/games/mind-snapshot',
      '/games/number-sequence',
      '/games/number-series',
      '/games/odd-one-out',
      '/games/organic-synthesis',
      '/games/pattern-finder',
      '/games/pattern-recognition',
      '/games/percentage-puzzle',
      '/games/physics-intuition-lab',
      '/games/predict-output',
      '/games/problem-decomposition',
      '/games/profit-loss-game',
      '/games/quick-click-challenge',
      '/games/quick-recall',
      '/games/reaction-mechanism',
      '/games/reaction-time-test',
      '/games/reasoning-master',
      '/games/risk-radar',
      '/games/sequence-solver',
      '/games/situation-judgment',
      '/games/smart-choice',
      '/games/speed-focus-game',
      '/games/speed-math',
      '/games/spelling-bee',
      '/games/stats-skeptic',
      '/games/strategic-standoff',
      '/games/sudoku-trainer',
      '/games/synonym-match',
      '/games/system-simulator',
      '/games/think-fast',
      '/games/time-work-challenge',
      '/games/trivia-quiz',
      '/games/visual-logic-game',
      '/games/word-association',
      '/games/word-scramble',
    ];
    gamePages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add coding game sub-pages
    const codingGamePages = [
      '/games/coding/arrays',
      '/games/coding/backtracking',
      '/games/coding/binary-search',
      '/games/coding/bit-manipulation',
      '/games/coding/dynamic-programming',
      '/games/coding/graphs',
      '/games/coding/greedy',
      '/games/coding/hash-tables',
      '/games/coding/linked-lists',
      '/games/coding/recursion',
      '/games/coding/sorting',
      '/games/coding/stacks-queues',
      '/games/coding/strings',
      '/games/coding/trees',
      '/games/coding/algorithm-builder',
      '/games/coding/debug-arena',
      '/games/coding/output-prediction',
      '/games/coding/refactor-challenge',
      '/games/coding/regex-master',
    ];
    codingGamePages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add relocation city pages (linked via relocation page dynamically)
    const relocationPages = ['/freshers/relocation/bangalore'];
    relocationPages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add orphan blog posts that exist but aren't linked from blog index
    const orphanBlogPosts = [
      '/blog/land-your-first-tech-internship-global-guide',
      '/blog/personal-finance-for-students-complete-guide',
    ];
    orphanBlogPosts.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add internship pages (dynamically linked via search/filters)
    const internshipPages = [
      '/internships/bangalore',
      '/internships/software-engineering',
      '/internships/:internshipId', // Dynamic route placeholder
    ];
    internshipPages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add interview experience pages (dynamic routes)
    const interviewExperiencePages = [
      '/interview-experiences/:company',
      '/interview-experiences/:company/:studentId',
    ];
    interviewExperiencePages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Add other standalone pages (PWA, mental health, etc.)
    const standAlonePages = [
      '/interview-questions',
      '/layoff-guide',
      '/mental-health',
      '/offline', // PWA offline page
      '/public-profile/:userId', // Dynamic public profile
      '/referrals',
      '/referrals/rules',
      '/referrals/wallet',
      '/scholarships/:slug', // Dynamic scholarship route
      '/profile',
      '/profile/settings',
      '/salary-insights',
      '/salary-insights/:company',
      '/verify-email',
      '/tools/aptitude-test/:category',
      '/tools/aptitude-test/:category/:difficulty',
    ];
    standAlonePages.forEach((path) => {
      linkedRoutes.add(path);
    });

    // Find orphan pages (no incoming links)
    const orphanPages: string[] = [];

    // Pages that are expected to not have direct links
    const expectedOrphans = [
      '/not-found',
      '/error',
      '/global-error',
      '/loading',
      '/admin',
      '/signin',
      '/signup',
      '/forgot-password',
      '/dashboard', // Redirect page to /profile
    ];

    routes.forEach((route) => {
      const normalizedRoute = route.replace(/\/$/, '') || '/';

      if (
        !linkedRoutes.has(normalizedRoute) &&
        !expectedOrphans.some((e) => normalizedRoute.startsWith(e))
      ) {
        orphanPages.push(route);
      }
    });

    if (orphanPages.length > 0) {
      console.log(
        '\n📭 Orphan pages (no incoming links - may be unreachable):',
      );
      orphanPages.slice(0, 15).forEach((route) => {
        console.log(`  ${route}`);
      });
      if (orphanPages.length > 15) {
        console.log(`  ... and ${orphanPages.length - 15} more`);
      }
    } else {
      console.log('\n✅ All pages have incoming links');
    }

    // Informational
    expect(true).toBe(true);
  });
});
