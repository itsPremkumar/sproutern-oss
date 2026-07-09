/**
 * Internal Linking Strategy Generator
 * Improves crawlability and distributes link equity
 */

export interface PageLink {
  url: string;
  title: string;
  description?: string;
  category?: string;
  keywords?: string[];
  relevanceScore?: number;
}

export interface LinkingContext {
  currentPageUrl: string;
  currentPageKeywords: string[];
  currentPageCategory: string;
}

/**
 * Generate related content links based on keywords and categories
 */
export function generateRelatedLinks(
  context: LinkingContext,
  allPages: PageLink[],
  maxLinks: number = 5,
): PageLink[] {
  return allPages
    .filter((page) => page.url !== context.currentPageUrl)
    .map((page) => ({
      ...page,
      relevanceScore: calculateRelevanceScore(context, page),
    }))
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, maxLinks);
}

/**
 * Calculate relevance score between current page and candidate page
 */
function calculateRelevanceScore(
  context: LinkingContext,
  page: PageLink,
): number {
  let score = 0;

  // Category match (highest weight)
  if (page.category === context.currentPageCategory) {
    score += 50;
  }

  // Keyword overlap
  if (page.keywords && context.currentPageKeywords) {
    const commonKeywords = page.keywords.filter((kw) =>
      context.currentPageKeywords.some(
        (ckw) =>
          kw.toLowerCase().includes(ckw.toLowerCase()) ||
          ckw.toLowerCase().includes(kw.toLowerCase()),
      ),
    );
    score += commonKeywords.length * 10;
  }

  // URL structure similarity
  const contextParts = context.currentPageUrl.split('/').filter(Boolean);
  const pageParts = page.url.split('/').filter(Boolean);
  const commonParts = contextParts.filter((part) => pageParts.includes(part));
  score += commonParts.length * 5;

  return score;
}

/**
 * Generate contextual anchor text for internal links
 */
export function generateAnchorText(
  targetPage: PageLink,
  variation: 'exact' | 'partial' | 'branded' | 'generic' = 'partial',
): string {
  switch (variation) {
    case 'exact':
      return targetPage.title;
    case 'partial':
      // Extract key phrase from title
      return targetPage.title.split(' ').slice(0, 4).join(' ');
    case 'branded':
      return `${targetPage.title} - Sproutern`;
    case 'generic':
      return 'Learn more';
    default:
      return targetPage.title;
  }
}

/**
 * Internal linking patterns for different page types
 */
export const linkingPatterns = {
  blog: {
    // Blog posts should link to:
    relatedPosts: 3, // Other blog posts in same category
    toolPages: 2, // Relevant tools mentioned
    resourcePages: 1, // Resource hub
    categoryPage: 1, // Blog category index
  },
  tool: {
    // Tool pages should link to:
    relatedTools: 3, // Similar tools
    blogPosts: 2, // Tutorial blog posts
    resourcesPage: 1, // Resources hub
  },
  resource: {
    // Resource pages should link to:
    relatedResources: 3,
    blogPosts: 2,
    tools: 2,
  },
  country: {
    // Country guide pages should link to:
    relatedCountries: 3,
    relevantBlogs: 2,
    tools: 2,
  },
};

/**
 * Anchor text variation to avoid over-optimization
 */
export const anchorTextVariations = {
  primary: ['read more', 'learn more', 'explore', 'discover'],
  action: ['get started', 'try now', 'download', 'view guide'],
  navigational: ['visit page', 'see details', 'check out', 'browse'],
  informational: [
    'detailed guide',
    'complete tutorial',
    'step-by-step instructions',
  ],
};

/**
 * Generate breadcrumb links for internal navigation
 */
export function generateBreadcrumbLinks(currentPath: string): PageLink[] {
  const parts = currentPath.split('/').filter(Boolean);
  const breadcrumbs: PageLink[] = [
    {
      url: '/',
      title: 'Home',
    },
  ];

  let accumulatedPath = '';
  parts.forEach((part, index) => {
    accumulatedPath += `/${part}`;
    breadcrumbs.push({
      url: accumulatedPath,
      title: formatBreadcrumbTitle(part),
    });
  });

  return breadcrumbs;
}

/**
 * Format URL slug to readable breadcrumb title
 */
function formatBreadcrumbTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Internal link health tracking
 */
export interface LinkHealth {
  url: string;
  internalLinksOut: number;
  internalLinksIn: number;
  orphan: boolean; // No incoming links
  depth: number; // Clicks from homepage
}

/**
 * Identify pages that need more internal links
 */
export function identifyLinkOpportunities(
  links: LinkHealth[],
  targetMinLinks: number = 3,
): string[] {
  return links
    .filter((link) => link.internalLinksIn < targetMinLinks && link.depth > 2)
    .map((link) => link.url);
}

/**
 * Generate contextual "you might also like" widget data
 */
export function generateYouMightLikeWidget(
  context: LinkingContext,
  allPages: PageLink[],
): PageLink[] {
  return generateRelatedLinks(context, allPages, 4);
}

/**
 * Hub page linking strategy (topic clusters)
 */
export interface TopicCluster {
  pillarPage: PageLink; // Main comprehensive guide
  clusterPages: PageLink[]; // Supporting content
}

export function generateTopicCluster(
  pillarKeyword: string,
  allPages: PageLink[],
): TopicCluster {
  const pillar = allPages.find(
    (page) =>
      page.keywords?.includes(pillarKeyword) &&
      page.url.includes(pillarKeyword),
  );

  const clusters = allPages.filter(
    (page) =>
      page.keywords?.some((kw) => kw.includes(pillarKeyword)) &&
      page.url !== pillar?.url,
  );

  return {
    pillarPage: pillar || { url: '', title: '', keywords: [] },
    clusterPages: clusters,
  };
}

/**
 * Footer link organization
 */
export const footerLinkStructure = {
  products: ['Tools', 'Resources', 'Blog', 'Scholarships'],
  company: ['About', 'Founder', 'Contact', 'Testimonials'],
  resources: ['Interview Prep', 'Resume Guide', 'Career Planning'],
  students: ['School', 'College', 'Freshers'],
  legal: ['Privacy Policy', 'Terms & Conditions', 'Disclaimer'],
};

/**
 * Navigation link importance (for prioritization)
 */
export const linkImportance = {
  critical: ['/', '/blog', '/tools', '/internships'], // Homepage, main hubs
  high: ['/resources', '/countries', '/scholarships'], // Important categories
  medium: ['/about', '/contact', '/faq'], // Supporting pages
  low: ['/privacy-policy', '/terms-and-conditions'], // Legal pages
};
