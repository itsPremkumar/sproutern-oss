/**
 * Tests for SEO utility functions
 * @jest-environment node
 */

import { generateMetadata } from '@/lib/seo/seo-utils';

describe('generateMetadata', () => {
  it('should generate basic metadata with required fields', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
    });

    expect(metadata.title).toBe('Test Page');
    expect(metadata.description).toBe('Test description');
  });

  it('should include keywords when provided', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
      keywords: ['test', 'keywords'],
    });

    expect(metadata.keywords).toEqual(['test', 'keywords']);
  });

  it('should set canonical URL correctly', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
      canonical: '/about',
    });

    expect(metadata.alternates?.canonical).toBe(
      'https://www.sproutern.com/about',
    );
  });

  it('should preserve full canonical URLs', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
      canonical: 'https://www.sproutern.com/contact',
    });

    expect(metadata.alternates?.canonical).toBe(
      'https://www.sproutern.com/contact',
    );
  });

  it('should generate OpenGraph metadata', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
      canonical: '/test',
      type: 'article',
    });

    expect(metadata.openGraph?.title).toBe('Test Page');
    expect(metadata.openGraph?.description).toBe('Test description');
    expect((metadata.openGraph as { type?: string })?.type).toBe('article');
  });

  it('should generate Twitter card metadata', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
    });

    expect((metadata.twitter as { card?: string })?.card).toBe(
      'summary_large_image',
    );
    expect(metadata.twitter?.title).toBe('Test Page');
    expect(metadata.twitter?.description).toBe('Test description');
  });

  it('should use default images when not provided', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
    });

    expect(metadata.openGraph?.images).toContain(
      'https://www.sproutern.com/opengraph.jpg',
    );
    expect(metadata.twitter?.images).toContain(
      'https://www.sproutern.com/twitter.jpg',
    );
  });

  it('should use custom images when provided', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
      image: 'https://example.com/custom.jpg',
    });

    expect(metadata.openGraph?.images).toContain(
      'https://example.com/custom.jpg',
    );
    expect(metadata.twitter?.images).toContain(
      'https://example.com/custom.jpg',
    );
  });

  it('should default to website type', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
    });

    expect((metadata.openGraph as { type?: string })?.type).toBe('website');
  });

  it('should include default robots settings', () => {
    const metadata = generateMetadata({
      title: 'Test Page',
      description: 'Test description',
    });

    expect(metadata.robots).toBeDefined();
    expect((metadata.robots as { index?: boolean })?.index).toBe(true);
  });
});
