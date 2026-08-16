/**
 * Tests for Schema Validator utilities
 * @jest-environment node
 */

import {
  validateOrganizationSchema,
  validateArticleSchema,
  validateJobPostingSchema,
  validateFAQSchema,
  validateBreadcrumbSchema,
  validateSchema,
  validatePageSchemas,
} from '@/lib/seo/schema-validator';

describe('validateOrganizationSchema', () => {
  it('should validate valid organization schema', () => {
    const schema = {
      '@type': 'Organization',
      name: 'Sproutern',
      url: 'https://sproutern.dpdns.org',
      logo: 'https://sproutern.dpdns.org/logo.jpg',
      contactPoint: { email: 'https://github.com/itsPremkumar/sproutern-oss' },
    };

    const result = validateOrganizationSchema(schema);

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  it('should add error for missing name', () => {
    const schema = {
      '@type': 'Organization',
      url: 'https://sproutern.dpdns.org',
    };

    const result = validateOrganizationSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path === 'name')).toBe(true);
  });

  it('should add error for missing url', () => {
    const schema = {
      '@type': 'Organization',
      name: 'Sproutern',
    };

    const result = validateOrganizationSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path === 'url')).toBe(true);
  });

  it('should add warning for missing logo', () => {
    const schema = {
      '@type': 'Organization',
      name: 'Sproutern',
      url: 'https://sproutern.dpdns.org',
    };

    const result = validateOrganizationSchema(schema);

    expect(result.warnings.some((w) => w.path === 'logo')).toBe(true);
  });

  it('should add warning for missing contactPoint', () => {
    const schema = {
      '@type': 'Organization',
      name: 'Sproutern',
      url: 'https://sproutern.dpdns.org',
    };

    const result = validateOrganizationSchema(schema);

    expect(result.warnings.some((w) => w.path === 'contactPoint')).toBe(true);
  });
});

describe('validateArticleSchema', () => {
  it('should validate valid article schema', () => {
    const schema = {
      '@type': 'Article',
      headline: 'How to Write a Great Resume',
      image: ['https://example.com/image.jpg'],
      datePublished: '2024-01-01',
      author: { '@type': 'Person', name: 'Author' },
    };

    const result = validateArticleSchema(schema);

    expect(result.valid).toBe(true);
  });

  it('should add errors for missing required fields', () => {
    const schema = {
      '@type': 'Article',
    };

    const result = validateArticleSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path === 'headline')).toBe(true);
    expect(result.errors.some((e) => e.path === 'image')).toBe(true);
    expect(result.errors.some((e) => e.path === 'datePublished')).toBe(true);
    expect(result.errors.some((e) => e.path === 'author')).toBe(true);
  });

  it('should add warning for long headline', () => {
    const schema = {
      '@type': 'Article',
      headline:
        'This is an extremely long headline that significantly exceeds the recommended one hundred and ten character limit for optimal display in search results',
      image: ['https://example.com/image.jpg'],
      datePublished: '2024-01-01',
      author: { '@type': 'Person', name: 'Author' },
    };

    const result = validateArticleSchema(schema);

    expect(result.warnings.some((w) => w.path === 'headline')).toBe(true);
  });

  it('should add error for empty image array', () => {
    const schema = {
      '@type': 'Article',
      headline: 'Test Article',
      image: [],
      datePublished: '2024-01-01',
      author: { '@type': 'Person', name: 'Author' },
    };

    const result = validateArticleSchema(schema);

    expect(
      result.errors.some((e) => e.message.includes('At least one image')),
    ).toBe(true);
  });
});

describe('validateJobPostingSchema', () => {
  it('should validate valid job posting schema', () => {
    const schema = {
      '@type': 'JobPosting',
      title: 'Software Engineer Intern',
      description: 'Exciting internship opportunity',
      datePosted: '2024-01-01',
      hiringOrganization: { '@type': 'Organization', name: 'TCS' },
      jobLocation: { '@type': 'Place', address: 'Mumbai, India' },
      validThrough: '2024-06-01',
    };

    const result = validateJobPostingSchema(schema);

    expect(result.valid).toBe(true);
    expect(result.warnings.length).toBe(0);
  });

  it('should add errors for missing required fields', () => {
    const schema = {
      '@type': 'JobPosting',
    };

    const result = validateJobPostingSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path === 'title')).toBe(true);
    expect(result.errors.some((e) => e.path === 'description')).toBe(true);
    expect(result.errors.some((e) => e.path === 'datePosted')).toBe(true);
    expect(result.errors.some((e) => e.path === 'hiringOrganization')).toBe(
      true,
    );
  });

  it('should add error for missing organization name', () => {
    const schema = {
      '@type': 'JobPosting',
      title: 'Intern',
      description: 'Test',
      datePosted: '2024-01-01',
      hiringOrganization: { '@type': 'Organization' },
      jobLocation: { '@type': 'Place' },
    };

    const result = validateJobPostingSchema(schema);

    expect(
      result.errors.some((e) => e.path === 'hiringOrganization.name'),
    ).toBe(true);
  });

  it('should add warning for missing validThrough', () => {
    const schema = {
      '@type': 'JobPosting',
      title: 'Intern',
      description: 'Test',
      datePosted: '2024-01-01',
      hiringOrganization: { '@type': 'Organization', name: 'TCS' },
      jobLocation: { '@type': 'Place' },
    };

    const result = validateJobPostingSchema(schema);

    expect(result.warnings.some((w) => w.path === 'validThrough')).toBe(true);
  });
});

describe('validateFAQSchema', () => {
  it('should validate valid FAQ schema', () => {
    const schema = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Sproutern?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sproutern is a career guidance platform.',
          },
        },
      ],
    };

    const result = validateFAQSchema(schema);

    expect(result.valid).toBe(true);
  });

  it('should add error for missing mainEntity', () => {
    const schema = {
      '@type': 'FAQPage',
    };

    const result = validateFAQSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path === 'mainEntity')).toBe(true);
  });

  it('should add error for invalid FAQ item', () => {
    const schema = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          // missing name and acceptedAnswer
        },
      ],
    };

    const result = validateFAQSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path.includes('mainEntity[0]'))).toBe(
      true,
    );
  });

  it('should add error for missing answer text', () => {
    const schema = {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Test question?',
          acceptedAnswer: { '@type': 'Answer' },
        },
      ],
    };

    const result = validateFAQSchema(schema);

    expect(result.errors.some((e) => e.path.includes('acceptedAnswer'))).toBe(
      true,
    );
  });
});

describe('validateBreadcrumbSchema', () => {
  it('should validate valid breadcrumb schema', () => {
    const schema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
      ],
    };

    const result = validateBreadcrumbSchema(schema);

    expect(result.valid).toBe(true);
  });

  it('should add error for missing itemListElement', () => {
    const schema = {
      '@type': 'BreadcrumbList',
    };

    const result = validateBreadcrumbSchema(schema);

    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.path === 'itemListElement')).toBe(true);
  });

  it('should add error for incorrect position ordering', () => {
    const schema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home' },
        { '@type': 'ListItem', position: 3, name: 'Blog' }, // Should be 2
      ],
    };

    const result = validateBreadcrumbSchema(schema);

    expect(result.errors.some((e) => e.path.includes('position'))).toBe(true);
  });

  it('should add error for missing position or name', () => {
    const schema = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem' }, // missing position and name
      ],
    };

    const result = validateBreadcrumbSchema(schema);

    expect(result.valid).toBe(false);
  });
});

describe('validateSchema', () => {
  it('should add error for missing @context on unknown types', () => {
    const schema = {
      '@type': 'WebSite',
      name: 'Test',
    };

    const result = validateSchema(schema);

    expect(result.errors.some((e) => e.path === '@context')).toBe(true);
  });

  it('should add error for missing @type', () => {
    const schema = {
      '@context': 'https://schema.org',
      name: 'Test',
    };

    const result = validateSchema(schema);

    expect(result.errors.some((e) => e.path === '@type')).toBe(true);
  });

  it('should route to correct validator based on @type', () => {
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Test',
      url: 'https://test.com',
    };

    const result = validateSchema(orgSchema);

    expect(result.valid).toBe(true);
  });

  it('should validate Organization type', () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Test',
      url: 'https://test.com',
    };

    const result = validateSchema(schema);

    expect(result.valid).toBe(true);
  });
});

describe('validatePageSchemas', () => {
  it('should validate multiple schemas on a page', () => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Test',
        url: 'https://test.com',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ position: 1, name: 'Home' }],
      },
    ];

    const result = validatePageSchemas(schemas);

    expect(result.results.length).toBe(2);
    expect(result.results[0].schema).toBe('Organization');
    expect(result.results[1].schema).toBe('BreadcrumbList');
  });

  it('should return overallValid as true when all schemas are valid', () => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Test',
        url: 'https://test.com',
      },
    ];

    const result = validatePageSchemas(schemas);

    expect(result.overallValid).toBe(true);
  });

  it('should return overallValid as false when any schema is invalid', () => {
    const schemas = [
      { '@context': 'https://schema.org', '@type': 'Organization' }, // missing required fields
    ];

    const result = validatePageSchemas(schemas);

    expect(result.overallValid).toBe(false);
  });

  it('should handle empty schemas array', () => {
    const result = validatePageSchemas([]);

    expect(result.results).toEqual([]);
    expect(result.overallValid).toBe(true);
  });
});
