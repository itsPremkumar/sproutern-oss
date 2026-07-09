/**
 * SEO Audit Utility
 * Automatically check for common SEO issues
 */

export interface SEOIssue {
  severity: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  recommendation?: string;
}

export interface PageSEOAudit {
  url: string;
  issues: SEOIssue[];
  score: number; // 0-100
}

/**
 * Audit a page's SEO configuration
 */
export function auditPageSEO(params: {
  title?: string;
  description?: string;
  canonical?: string;
  headings?: string[];
  images?: Array<{ src: string; alt?: string }>;
  internalLinks?: string[];
  content?: string;
  url: string;
}): PageSEOAudit {
  const issues: SEOIssue[] = [];

  // Title checks
  if (!params.title) {
    issues.push({
      severity: 'error',
      message: 'Missing page title',
      recommendation: 'Add a unique, descriptive title tag (50-60 characters)',
    });
  } else {
    if (params.title.length < 30) {
      issues.push({
        severity: 'warning',
        message: 'Title too short',
        element: params.title,
        recommendation: 'Title should be 50-60 characters for optimal display',
      });
    }
    if (params.title.length > 60) {
      issues.push({
        severity: 'warning',
        message: 'Title too long (will be truncated in search results)',
        element: params.title,
        recommendation: 'Keep title under 60 characters',
      });
    }
  }

  // Description checks
  if (!params.description) {
    issues.push({
      severity: 'error',
      message: 'Missing meta description',
      recommendation: 'Add a meta description (150-160 characters)',
    });
  } else {
    if (params.description.length < 120) {
      issues.push({
        severity: 'warning',
        message: 'Meta description too short',
        recommendation: 'Aim for 150-160 characters for optimal display',
      });
    }
    if (params.description.length > 160) {
      issues.push({
        severity: 'info',
        message: 'Meta description exceeds recommended length',
        recommendation: 'Keep under 160 characters to avoid truncation',
      });
    }
  }

  // Canonical URL check
  if (!params.canonical) {
    issues.push({
      severity: 'warning',
      message: 'Missing canonical URL',
      recommendation: 'Add canonical tag to prevent duplicate content issues',
    });
  }

  // Heading structure checks
  if (params.headings && params.headings.length > 0) {
    const h1Count = params.headings.filter((h) => h.startsWith('H1:')).length;
    if (h1Count === 0) {
      issues.push({
        severity: 'error',
        message: 'Missing H1 heading',
        recommendation: 'Add exactly one H1 heading to each page',
      });
    } else if (h1Count > 1) {
      issues.push({
        severity: 'warning',
        message: 'Multiple H1 headings found',
        recommendation: 'Use only one H1 heading per page',
      });
    }
  }

  // Image alt text checks
  if (params.images) {
    const missingAlt = params.images.filter(
      (img) => !img.alt || img.alt === '',
    );
    if (missingAlt.length > 0) {
      issues.push({
        severity: 'warning',
        message: `${missingAlt.length} image(s) missing alt text`,
        recommendation:
          'Add descriptive alt text to all images for accessibility and SEO',
      });
    }
  }

  // Internal linking checks
  if (params.internalLinks) {
    if (params.internalLinks.length < 3) {
      issues.push({
        severity: 'info',
        message: 'Low number of internal links',
        recommendation:
          'Add 3-5 relevant internal links to improve crawlability',
      });
    }
  }

  // Content length check
  if (params.content) {
    const wordCount = params.content.split(/\s+/).length;
    if (wordCount < 300) {
      issues.push({
        severity: 'warning',
        message: 'Thin content detected',
        recommendation:
          'Aim for at least 300 words of unique, valuable content',
      });
    }
  }

  // Calculate SEO score
  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.filter((i) => i.severity === 'warning').length;
  const score = Math.max(0, 100 - errorCount * 20 - warningCount * 5);

  return {
    url: params.url,
    issues,
    score,
  };
}

/**
 * Check for broken internal links
 */
export async function checkBrokenLinks(links: string[]): Promise<string[]> {
  const brokenLinks: string[] = [];

  for (const link of links) {
    try {
      const response = await fetch(link, { method: 'HEAD' });
      if (!response.ok) {
        brokenLinks.push(link);
      }
    } catch {
      brokenLinks.push(link);
    }
  }

  return brokenLinks;
}

/**
 * Find duplicate content across pages
 */
export function findDuplicateContent(
  pages: Array<{ url: string; content: string }>,
): Array<{ page1: string; page2: string; similarity: number }> {
  const duplicates: Array<{
    page1: string;
    page2: string;
    similarity: number;
  }> = [];

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const similarity = calculateContentSimilarity(
        pages[i].content,
        pages[j].content,
      );

      if (similarity > 0.8) {
        // More than 80% similar
        duplicates.push({
          page1: pages[i].url,
          page2: pages[j].url,
          similarity,
        });
      }
    }
  }

  return duplicates;
}

/**
 * Simple content similarity calculation
 */
function calculateContentSimilarity(
  content1: string,
  content2: string,
): number {
  const words1 = new Set(content1.toLowerCase().split(/\s+/));
  const words2 = new Set(content2.toLowerCase().split(/\s+/));

  const intersection = new Set([...words1].filter((x) => words2.has(x)));
  const union = new Set([...words1, ...words2]);

  return intersection.size / union.size; // Jaccard similarity
}

/**
 * SEO checklist for different page types
 */
export const seoChecklists = {
  blogPost: [
    'Unique, descriptive title (50-60 chars)',
    'Compelling meta description (150-160 chars)',
    'One H1 heading matching title',
    'Logical heading hierarchy (H2, H3, etc.)',
    'Alt text for all images',
    'Internal links to related content',
    'External links to authoritative sources',
    'Author byline and publish date',
    'Schema markup (Article or BlogPosting)',
    'Social sharing meta tags (OG, Twitter)',
    'Minimum 300 words of quality content',
    'Target keyword in first paragraph',
    'Related posts section',
  ],
  toolPage: [
    'Clear, keyword-rich title',
    'Description explaining tool purpose and benefits',
    'Step-by-step usage instructions',
    'SoftwareApplication schema markup',
    'FAQ section',
    'Related tools links',
    'Tutorial or how-to content',
    'User testimonials or reviews',
  ],
  landingPage: [
    'Attention-grabbing H1',
    'Clear value proposition',
    'Call-to-action buttons',
    'Benefits/features section',
    'Social proof (testimonials, stats)',
    'FAQ section',
    'Internal links to key pages',
    'Fast loading time (<3s)',
  ],
};
