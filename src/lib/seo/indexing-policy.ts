const NOINDEX_EXACT_PATHS = new Set([
  '/signin',
  '/signup',
  '/forgot-password',
  '/offline',
  '/dashboard',
  '/doneate',
  '/terms-of-service',
  '/sitemap-page',
]);

const NOINDEX_PREFIXES = [
  '/admin',
  '/api',
  '/profile',
  '/public-profile',
  '/_next',
];

// Routes temporarily excluded from index until editorial long-form sections are added.
const NOINDEX_TOOL_SLUGS = new Set([
  '2fa-guide',
  'age-calculator',
  'aptitude-test',
  'ascii-table',
  'calender-generator',
  'career-quiz',
  'case-converter',
  'cgpa-to-percentage',
  'code-formatter',
  'coin-flipper',
  'college-predictor',
  'color-palette-generator',
  'cost-of-living',
  'css-gradient-generator',
  'currency-converter',
  'dice-roller',
  'diff-checker',
  'discount-calculator',
  'email-generator',
  'encryption-tool',
  'flight-tracker',
  'font-pairings',
  'gd-topics',
  'gpa-calculator',
  'gst-calculator',
  'image-placeholder',
  'image-to-base64',
  'ip-subnet-calculator',
  'job-application-tracker',
  'keyboard-shortcuts',
  'list-randomizer',
  'meeting-planner',
  'mock-interview',
  'notice-period-calculator',
  'password-strength-checker',
  'pomodoro-timer',
  'privacy-checklist',
  'qr-code-generator',
  'regex-tester',
  'roi-calculator',
  'salary-negotiation',
  'scholarship-checker',
  'skills-gap-analyzer',
  'sop-generator',
  'tax-calculator',
  'team-generator',
  'time-calculator',
  'unit-converter',
  'word-counter',
]);

const NOINDEX_GAME_SLUGS = new Set([
  'aptitude-drill',
  'case-study',
  'code-review',
  'coding/sql-builder',
  'data-interpretation',
  'email-tone',
  'excel-shortcuts',
  'gd-topic-timer',
  'grammar-fixer',
]);

function normalizePath(pathname: string): string {
  const cleanPath = pathname.split('?')[0];
  const normalized = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');
  return normalized || '/';
}

function getToolSlug(normalizedPath: string): string | null {
  if (!normalizedPath.startsWith('/tools/')) {
    return null;
  }

  const remainder = normalizedPath.replace('/tools/', '');
  if (!remainder || remainder.includes('/')) {
    return null;
  }

  return remainder;
}

function getGameSlug(normalizedPath: string): string | null {
  if (!normalizedPath.startsWith('/games/')) {
    return null;
  }

  const remainder = normalizedPath.replace('/games/', '');
  return remainder || null;
}

export function shouldNoindexPath(pathname: string): boolean {
  const normalized = normalizePath(pathname);

  if (NOINDEX_EXACT_PATHS.has(normalized)) {
    return true;
  }

  const toolSlug = getToolSlug(normalized);
  if (toolSlug && NOINDEX_TOOL_SLUGS.has(toolSlug)) {
    return true;
  }

  const gameSlug = getGameSlug(normalized);
  if (gameSlug && NOINDEX_GAME_SLUGS.has(gameSlug)) {
    return true;
  }

  return NOINDEX_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

export function shouldIndexPath(pathname: string): boolean {
  return !shouldNoindexPath(pathname);
}

export function isIndexableToolSlug(slug: string): boolean {
  return !NOINDEX_TOOL_SLUGS.has(slug);
}

export function isIndexableGameSlug(slug: string): boolean {
  return !NOINDEX_GAME_SLUGS.has(slug);
}
