/**
 * Tests for Internal Linking utilities
 * @jest-environment node
 */

import {
  generateRelatedLinks,
  generateAnchorText,
  generateBreadcrumbLinks,
  identifyLinkOpportunities,
  generateYouMightLikeWidget,
  linkingPatterns,
  anchorTextVariations,
  footerLinkStructure,
  linkImportance,
  type PageLink,
  type LinkingContext,
  type LinkHealth,
} from '@/lib/seo/internal-linking';

describe('generateRelatedLinks', () => {
  const mockPages: PageLink[] = [
    {
      url: '/blog/post1',
      title: 'Post 1',
      category: 'blog',
      keywords: ['career', 'tips'],
    },
    {
      url: '/blog/post2',
      title: 'Post 2',
      category: 'blog',
      keywords: ['resume', 'guide'],
    },
    {
      url: '/tools/converter',
      title: 'Converter',
      category: 'tools',
      keywords: ['cgpa', 'calculator'],
    },
    {
      url: '/internships/tcs',
      title: 'TCS Internships',
      category: 'internships',
      keywords: ['tcs', 'career'],
    },
  ];

  it('should exclude current page from results', () => {
    const context: LinkingContext = {
      currentPageUrl: '/blog/post1',
      currentPageKeywords: ['career'],
      currentPageCategory: 'blog',
    };

    const links = generateRelatedLinks(context, mockPages);

    expect(links.every((link) => link.url !== '/blog/post1')).toBe(true);
  });

  it('should prioritize same category pages', () => {
    const context: LinkingContext = {
      currentPageUrl: '/blog/post1',
      currentPageKeywords: ['career'],
      currentPageCategory: 'blog',
    };

    const links = generateRelatedLinks(context, mockPages);

    // Blog pages should rank higher due to category match
    expect(links[0].category).toBe('blog');
  });

  it('should respect maxLinks parameter', () => {
    const context: LinkingContext = {
      currentPageUrl: '/blog/post1',
      currentPageKeywords: ['career'],
      currentPageCategory: 'blog',
    };

    const links = generateRelatedLinks(context, mockPages, 2);

    expect(links.length).toBeLessThanOrEqual(2);
  });

  it('should add relevance scores to results', () => {
    const context: LinkingContext = {
      currentPageUrl: '/blog/post1',
      currentPageKeywords: ['career'],
      currentPageCategory: 'blog',
    };

    const links = generateRelatedLinks(context, mockPages);

    expect(links.every((link) => typeof link.relevanceScore === 'number')).toBe(
      true,
    );
  });
});

describe('generateAnchorText', () => {
  const targetPage: PageLink = {
    url: '/tools/cgpa-converter',
    title: 'CGPA to Percentage Converter Tool',
  };

  it('should return exact title for "exact" variation', () => {
    expect(generateAnchorText(targetPage, 'exact')).toBe(
      'CGPA to Percentage Converter Tool',
    );
  });

  it('should return partial title for "partial" variation', () => {
    const result = generateAnchorText(targetPage, 'partial');
    expect(result).toBe('CGPA to Percentage Converter');
  });

  it('should add branding for "branded" variation', () => {
    const result = generateAnchorText(targetPage, 'branded');
    expect(result).toContain('Sproutern');
  });

  it('should return generic text for "generic" variation', () => {
    expect(generateAnchorText(targetPage, 'generic')).toBe('Learn more');
  });

  it('should default to exact title for unknown variation', () => {
    expect(generateAnchorText(targetPage)).toBe('CGPA to Percentage Converter');
  });
});

describe('generateBreadcrumbLinks', () => {
  it('should always include home as first breadcrumb', () => {
    const breadcrumbs = generateBreadcrumbLinks('/blog/post');

    expect(breadcrumbs[0].url).toBe('/');
    expect(breadcrumbs[0].title).toBe('Home');
  });

  it('should generate breadcrumbs for each path segment', () => {
    const breadcrumbs = generateBreadcrumbLinks('/tools/cgpa-converter');

    expect(breadcrumbs.length).toBe(3);
    expect(breadcrumbs[1].url).toBe('/tools');
    expect(breadcrumbs[2].url).toBe('/tools/cgpa-converter');
  });

  it('should format slugs to readable titles', () => {
    const breadcrumbs = generateBreadcrumbLinks('/career-planning');

    expect(breadcrumbs[1].title).toBe('Career Planning');
  });

  it('should handle root path', () => {
    const breadcrumbs = generateBreadcrumbLinks('/');

    expect(breadcrumbs.length).toBe(1);
    expect(breadcrumbs[0].title).toBe('Home');
  });
});

describe('identifyLinkOpportunities', () => {
  const mockLinks: LinkHealth[] = [
    {
      url: '/orphan-page',
      internalLinksOut: 5,
      internalLinksIn: 0,
      orphan: true,
      depth: 4,
    },
    {
      url: '/well-linked',
      internalLinksOut: 3,
      internalLinksIn: 10,
      orphan: false,
      depth: 1,
    },
    {
      url: '/shallow-orphan',
      internalLinksOut: 2,
      internalLinksIn: 1,
      orphan: false,
      depth: 2,
    },
    {
      url: '/deep-low-links',
      internalLinksOut: 1,
      internalLinksIn: 2,
      orphan: false,
      depth: 3,
    },
  ];

  it('should identify pages with low internal links and high depth', () => {
    const opportunities = identifyLinkOpportunities(mockLinks);

    expect(opportunities).toContain('/orphan-page');
    expect(opportunities).toContain('/deep-low-links');
  });

  it('should not include well-linked pages', () => {
    const opportunities = identifyLinkOpportunities(mockLinks);

    expect(opportunities).not.toContain('/well-linked');
  });

  it('should respect custom targetMinLinks parameter', () => {
    const opportunities = identifyLinkOpportunities(mockLinks, 5);

    expect(opportunities.length).toBeGreaterThan(0);
  });
});

describe('generateYouMightLikeWidget', () => {
  const mockPages: PageLink[] = [
    {
      url: '/blog/post1',
      title: 'Post 1',
      category: 'blog',
      keywords: ['career'],
    },
    {
      url: '/blog/post2',
      title: 'Post 2',
      category: 'blog',
      keywords: ['resume'],
    },
    {
      url: '/blog/post3',
      title: 'Post 3',
      category: 'blog',
      keywords: ['interview'],
    },
    {
      url: '/blog/post4',
      title: 'Post 4',
      category: 'blog',
      keywords: ['career'],
    },
    {
      url: '/blog/post5',
      title: 'Post 5',
      category: 'blog',
      keywords: ['tips'],
    },
  ];

  it('should return maximum 4 recommendations', () => {
    const context: LinkingContext = {
      currentPageUrl: '/blog/current',
      currentPageKeywords: ['career'],
      currentPageCategory: 'blog',
    };

    const widget = generateYouMightLikeWidget(context, mockPages);

    expect(widget.length).toBeLessThanOrEqual(4);
  });
});

describe('exported constants', () => {
  it('should have linkingPatterns for all page types', () => {
    expect(linkingPatterns.blog).toBeDefined();
    expect(linkingPatterns.tool).toBeDefined();
    expect(linkingPatterns.resource).toBeDefined();
    expect(linkingPatterns.country).toBeDefined();
  });

  it('should have anchorTextVariations', () => {
    expect(anchorTextVariations.primary).toBeDefined();
    expect(anchorTextVariations.action).toBeDefined();
    expect(Array.isArray(anchorTextVariations.primary)).toBe(true);
  });

  it('should have footerLinkStructure', () => {
    expect(footerLinkStructure.products).toBeDefined();
    expect(footerLinkStructure.company).toBeDefined();
    expect(footerLinkStructure.legal).toBeDefined();
  });

  it('should have linkImportance levels', () => {
    expect(linkImportance.critical).toBeDefined();
    expect(linkImportance.high).toBeDefined();
    expect(linkImportance.medium).toBeDefined();
    expect(linkImportance.low).toBeDefined();
  });
});
