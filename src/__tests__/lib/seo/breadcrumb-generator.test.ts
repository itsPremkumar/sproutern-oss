/**
 * Tests for Breadcrumb Generator
 * @jest-environment node
 */

import {
  generateBreadcrumbs,
  generateBreadcrumbSchema,
  generateBreadcrumbJsonLd,
} from '@/lib/seo/breadcrumb-generator';

describe('generateBreadcrumbs', () => {
  it('should always include Home as the first breadcrumb', () => {
    const breadcrumbs = generateBreadcrumbs('/internships');

    expect(breadcrumbs[0]).toEqual({
      name: 'Home',
      url: 'https://www.sproutern.com',
      position: 1,
    });
  });

  it('should generate correct breadcrumbs for simple path', () => {
    const breadcrumbs = generateBreadcrumbs('/internships');

    expect(breadcrumbs).toHaveLength(2);
    expect(breadcrumbs[1]).toEqual({
      name: 'Internships',
      url: 'https://www.sproutern.com/internships',
      position: 2,
    });
  });

  it('should generate correct breadcrumbs for nested path', () => {
    const breadcrumbs = generateBreadcrumbs(
      '/companies/tcs/interview-questions',
    );

    expect(breadcrumbs).toHaveLength(4);
    expect(breadcrumbs[1].name).toBe('Companies');
    expect(breadcrumbs[2].name).toBe('TCS');
    expect(breadcrumbs[3].name).toBe('Interview Questions');
  });

  it('should handle custom base URL', () => {
    const breadcrumbs = generateBreadcrumbs(
      '/blog',
      'https://custom.example.com',
    );

    expect(breadcrumbs[0].url).toBe('https://custom.example.com');
    expect(breadcrumbs[1].url).toBe('https://custom.example.com/blog');
  });

  it('should convert kebab-case to Title Case for unknown paths', () => {
    const breadcrumbs = generateBreadcrumbs('/some-unknown-path');

    expect(breadcrumbs[1].name).toBe('Some Unknown Path');
  });

  it('should use mapped names for known paths', () => {
    const breadcrumbs = generateBreadcrumbs('/usa');

    expect(breadcrumbs[1].name).toBe('United States');
  });

  it('should handle root path', () => {
    const breadcrumbs = generateBreadcrumbs('/');

    expect(breadcrumbs).toHaveLength(1);
    expect(breadcrumbs[0].name).toBe('Home');
  });

  it('should assign correct position numbers', () => {
    const breadcrumbs = generateBreadcrumbs('/school/after-10th-guide');

    expect(breadcrumbs[0].position).toBe(1);
    expect(breadcrumbs[1].position).toBe(2);
    expect(breadcrumbs[2].position).toBe(3);
  });

  it('should handle URL-encoded paths', () => {
    const breadcrumbs = generateBreadcrumbs('/companies/test%20company');

    expect(breadcrumbs[2].name).toBe('Test Company');
  });
});

describe('generateBreadcrumbSchema', () => {
  it('should generate valid schema.org BreadcrumbList', () => {
    const schema = generateBreadcrumbSchema('/internships');

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toBeDefined();
  });

  it('should include correct item list elements', () => {
    const schema = generateBreadcrumbSchema('/blog');

    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0]).toEqual({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.sproutern.com',
    });
  });

  it('should handle nested paths in schema', () => {
    const schema = generateBreadcrumbSchema('/companies/tcs');

    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[2]).toMatchObject({
      '@type': 'ListItem',
      position: 3,
      name: 'TCS',
    });
  });
});

describe('generateBreadcrumbJsonLd', () => {
  it('should return valid JSON string', () => {
    const jsonLd = generateBreadcrumbJsonLd('/internships');

    expect(() => JSON.parse(jsonLd)).not.toThrow();
  });

  it('should contain BreadcrumbList schema', () => {
    const jsonLd = generateBreadcrumbJsonLd('/internships');
    const parsed = JSON.parse(jsonLd);

    expect(parsed['@type']).toBe('BreadcrumbList');
    expect(parsed['@context']).toBe('https://schema.org');
  });
});
