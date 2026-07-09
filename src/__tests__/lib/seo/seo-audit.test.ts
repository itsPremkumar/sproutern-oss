/**
 * Tests for SEO Audit utilities
 * @jest-environment node
 */

import {
  auditPageSEO,
  findDuplicateContent,
  seoChecklists,
} from '@/lib/seo/seo-audit';

describe('auditPageSEO', () => {
  describe('title validation', () => {
    it('should add error for missing title', () => {
      const result = auditPageSEO({
        url: '/test',
        description: 'Test description',
      });

      expect(
        result.issues.some((i) => i.message === 'Missing page title'),
      ).toBe(true);
      expect(
        result.issues.find((i) => i.message === 'Missing page title')?.severity,
      ).toBe('error');
    });

    it('should add warning for short title', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Short',
        description: 'Test description',
      });

      expect(result.issues.some((i) => i.message === 'Title too short')).toBe(
        true,
      );
    });

    it('should add warning for long title', () => {
      const result = auditPageSEO({
        url: '/test',
        title:
          'This is an extremely long title that exceeds the recommended sixty character limit for SEO',
        description: 'Test description',
      });

      expect(
        result.issues.some((i) => i.message.includes('Title too long')),
      ).toBe(true);
    });

    it('should not add title warnings for optimal length', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'This is a perfectly fine title for SEO purposes',
        description: 'Test description',
      });

      expect(result.issues.some((i) => i.message.includes('Title'))).toBe(
        false,
      );
    });
  });

  describe('description validation', () => {
    it('should add error for missing description', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
      });

      expect(
        result.issues.some((i) => i.message === 'Missing meta description'),
      ).toBe(true);
    });

    it('should add warning for short description', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description: 'Too short',
      });

      expect(
        result.issues.some((i) => i.message === 'Meta description too short'),
      ).toBe(true);
    });

    it('should add info for long description', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description:
          'This is an extremely long meta description that greatly exceeds the recommended one hundred and sixty character limit that is typically suggested for optimal SEO performance and search result display.',
      });

      expect(
        result.issues.some((i) =>
          i.message.includes('exceeds recommended length'),
        ),
      ).toBe(true);
    });
  });

  describe('canonical URL validation', () => {
    it('should add warning for missing canonical', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description:
          'This is a proper description with enough characters to pass validation',
      });

      expect(
        result.issues.some((i) => i.message === 'Missing canonical URL'),
      ).toBe(true);
    });

    it('should not add warning when canonical is provided', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description:
          'This is a proper description with enough characters to pass validation',
        canonical: 'https://www.sproutern.com/test',
      });

      expect(
        result.issues.some((i) => i.message === 'Missing canonical URL'),
      ).toBe(false);
    });
  });

  describe('heading validation', () => {
    it('should add error for missing H1', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description: 'This is a proper description with enough characters',
        headings: ['H2: Subheading'],
      });

      expect(
        result.issues.some((i) => i.message === 'Missing H1 heading'),
      ).toBe(true);
    });

    it('should add warning for multiple H1 headings', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description: 'This is a proper description with enough characters',
        headings: ['H1: First', 'H1: Second'],
      });

      expect(
        result.issues.some((i) => i.message === 'Multiple H1 headings found'),
      ).toBe(true);
    });
  });

  describe('image validation', () => {
    it('should add warning for images missing alt text', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description: 'This is a proper description with enough characters',
        images: [
          { src: '/image1.jpg', alt: 'Good alt text' },
          { src: '/image2.jpg', alt: '' },
          { src: '/image3.jpg' },
        ],
      });

      expect(
        result.issues.some((i) => i.message.includes('missing alt text')),
      ).toBe(true);
    });
  });

  describe('content validation', () => {
    it('should add warning for thin content', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'Test Title for the Page',
        description: 'This is a proper description with enough characters',
        content: 'Short content with only a few words.',
      });

      expect(
        result.issues.some((i) => i.message === 'Thin content detected'),
      ).toBe(true);
    });
  });

  describe('score calculation', () => {
    it('should return score of 100 for perfect SEO', () => {
      const result = auditPageSEO({
        url: '/test',
        title: 'This is a perfectly fine title for SEO purposes',
        description:
          'This is a proper meta description with enough characters to meet the recommended length for optimal search engine display.',
        canonical: 'https://www.sproutern.com/test',
        headings: ['H1: Main Heading', 'H2: Subheading'],
        images: [{ src: '/img.jpg', alt: 'Good alt' }],
        internalLinks: ['/link1', '/link2', '/link3', '/link4'],
        content: 'Long content '.repeat(150),
      });

      expect(result.score).toBe(100);
    });

    it('should reduce score for errors', () => {
      const result = auditPageSEO({
        url: '/test',
      });

      expect(result.score).toBeLessThan(100);
    });
  });
});

describe('findDuplicateContent', () => {
  it('should detect highly similar content', () => {
    const pages = [
      {
        url: '/page1',
        content: 'The quick brown fox jumps over the lazy dog repeatedly',
      },
      {
        url: '/page2',
        content: 'The quick brown fox jumps over the lazy dog repeatedly',
      },
    ];

    const duplicates = findDuplicateContent(pages);

    expect(duplicates.length).toBeGreaterThan(0);
    expect(duplicates[0].page1).toBe('/page1');
    expect(duplicates[0].page2).toBe('/page2');
    expect(duplicates[0].similarity).toBe(1);
  });

  it('should not flag unique content', () => {
    const pages = [
      {
        url: '/page1',
        content: 'This is unique content about internships and career guidance',
      },
      {
        url: '/page2',
        content: 'Completely different text with no overlap whatsoever',
      },
    ];

    const duplicates = findDuplicateContent(pages);

    expect(duplicates.length).toBe(0);
  });

  it('should handle empty pages array', () => {
    const duplicates = findDuplicateContent([]);
    expect(duplicates).toEqual([]);
  });
});

describe('seoChecklists', () => {
  it('should have blogPost checklist', () => {
    expect(seoChecklists.blogPost).toBeDefined();
    expect(Array.isArray(seoChecklists.blogPost)).toBe(true);
    expect(seoChecklists.blogPost.length).toBeGreaterThan(0);
  });

  it('should have toolPage checklist', () => {
    expect(seoChecklists.toolPage).toBeDefined();
    expect(Array.isArray(seoChecklists.toolPage)).toBe(true);
  });

  it('should have landingPage checklist', () => {
    expect(seoChecklists.landingPage).toBeDefined();
    expect(Array.isArray(seoChecklists.landingPage)).toBe(true);
  });
});
