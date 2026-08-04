/**
 * Tests for Hreflang Generator
 * @jest-environment node
 */

import {
  generateHreflangTags,
  generateHreflangHTML,
  generateHreflangMetadata,
  generateSitemapWithHreflang,
  getLanguageSelectorData,
  SUPPORTED_REGIONS,
} from '@/lib/seo/hreflang-generator';

describe('SUPPORTED_REGIONS', () => {
  it('should contain all expected regions', () => {
    expect(SUPPORTED_REGIONS.length).toBeGreaterThanOrEqual(9);
  });

  it('should have required properties for each region', () => {
    SUPPORTED_REGIONS.forEach((region) => {
      expect(region).toHaveProperty('code');
      expect(region).toHaveProperty('name');
      expect(region).toHaveProperty('currency');
    });
  });

  it('should include major English-speaking regions', () => {
    const codes = SUPPORTED_REGIONS.map((r) => r.code);
    expect(codes).toContain('en-US');
    expect(codes).toContain('en-GB');
    expect(codes).toContain('en-IN');
    expect(codes).toContain('en-AU');
    expect(codes).toContain('en-CA');
  });
});

describe('generateHreflangTags', () => {
  it('should generate config for all supported regions', () => {
    const config = generateHreflangTags('/internships');

    expect(config.regions).toHaveLength(SUPPORTED_REGIONS.length);
  });

  it('should include correct URLs for each region', () => {
    const config = generateHreflangTags('/internships');

    config.regions.forEach((region) => {
      expect(region.url).toBe('https://sproutern.dpdns.org/internships');
    });
  });

  it('should set default language', () => {
    const config = generateHreflangTags('/blog');

    expect(config.defaultLang).toBe('https://sproutern.dpdns.org/blog');
  });

  it('should handle custom base URL', () => {
    const config = generateHreflangTags('/about', 'https://custom.example.com');

    expect(config.defaultLang).toBe('https://custom.example.com/about');
    config.regions.forEach((region) => {
      expect(region.url).toBe('https://custom.example.com/about');
    });
  });

  it('should handle root path', () => {
    const config = generateHreflangTags('/');

    expect(config.defaultLang).toBe('https://sproutern.dpdns.org/');
  });
});

describe('generateHreflangHTML', () => {
  it('should generate valid HTML link tags', () => {
    const html = generateHreflangHTML('/internships');

    expect(html).toContain('<link rel="alternate"');
    expect(html).toContain('hreflang=');
    expect(html).toContain('href=');
  });

  it('should include all regional tags', () => {
    const html = generateHreflangHTML('/internships');

    SUPPORTED_REGIONS.forEach((region) => {
      expect(html).toContain(`hreflang="${region.code}"`);
    });
  });

  it('should include x-default tag', () => {
    const html = generateHreflangHTML('/internships');

    expect(html).toContain('hreflang="x-default"');
  });

  it('should use correct URL format', () => {
    const html = generateHreflangHTML('/blog');

    expect(html).toContain('href="https://sproutern.dpdns.org/blog"');
  });
});

describe('generateHreflangMetadata', () => {
  it('should return languages object', () => {
    const metadata = generateHreflangMetadata('/internships');

    expect(metadata).toHaveProperty('languages');
  });

  it('should include all regional languages', () => {
    const metadata = generateHreflangMetadata('/internships');

    SUPPORTED_REGIONS.forEach((region) => {
      expect(metadata.languages[region.code]).toBeDefined();
    });
  });

  it('should include x-default', () => {
    const metadata = generateHreflangMetadata('/internships');

    expect(metadata.languages['x-default']).toBeDefined();
  });
});

describe('generateSitemapWithHreflang', () => {
  it('should generate sitemap entries for all paths', () => {
    const paths = ['/', '/internships', '/blog'];
    const sitemap = generateSitemapWithHreflang(paths);

    expect(sitemap).toHaveLength(3);
  });

  it('should include required sitemap properties', () => {
    const sitemap = generateSitemapWithHreflang(['/internships']);
    const entry = sitemap[0];

    expect(entry.url).toBe('https://sproutern.dpdns.org/internships');
    expect(entry.lastModified).toBeInstanceOf(Date);
    expect(entry.changeFrequency).toBe('weekly');
    expect(entry.priority).toBe(0.8);
  });

  it('should set higher priority for homepage', () => {
    const sitemap = generateSitemapWithHreflang(['/']);

    expect(sitemap[0].priority).toBe(1.0);
  });

  it('should include alternates with hreflang', () => {
    const sitemap = generateSitemapWithHreflang(['/internships']);
    const entry = sitemap[0];

    expect(entry.alternates).toHaveProperty('languages');
  });
});

describe('getLanguageSelectorData', () => {
  it('should return data for all supported regions', () => {
    const data = getLanguageSelectorData();

    expect(data).toHaveLength(SUPPORTED_REGIONS.length);
  });

  it('should include required properties', () => {
    const data = getLanguageSelectorData();

    data.forEach((item) => {
      expect(item).toHaveProperty('code');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('flag');
      expect(item).toHaveProperty('currency');
    });
  });

  it('should have flag emojis', () => {
    const data = getLanguageSelectorData();

    data.forEach((item) => {
      expect(item.flag.length).toBeGreaterThan(0);
    });
  });

  it('should have correct US flag', () => {
    const data = getLanguageSelectorData();
    const usEntry = data.find((d) => d.code === 'en-US');

    expect(usEntry?.flag).toBe('🇺🇸');
  });
});
