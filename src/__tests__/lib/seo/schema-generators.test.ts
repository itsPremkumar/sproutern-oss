/**
 * Tests for Schema Generators
 * @jest-environment node
 */

import {
  generateFAQSchema,
  generateBlogPostingSchema,
  generateJobPostingSchema,
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateCourseSchema,
  generateSoftwareApplicationSchema,
} from '@/lib/seo/schema-generators';

describe('generateFAQSchema', () => {
  it('should generate valid FAQPage schema', () => {
    const faqs = [
      { question: 'What is Sproutern?', answer: 'A career platform' },
      { question: 'How to apply?', answer: 'Click apply button' },
    ];
    const schema = generateFAQSchema(faqs);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(2);
  });

  it('should format FAQ entries correctly', () => {
    const faqs = [{ question: 'Test Question?', answer: 'Test Answer' }];
    const schema = generateFAQSchema(faqs);

    expect(schema.mainEntity[0]['@type']).toBe('Question');
    expect(schema.mainEntity[0].name).toBe('Test Question?');
    expect(schema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer');
    expect(schema.mainEntity[0].acceptedAnswer.text).toBe('Test Answer');
  });

  it('should handle empty FAQ array', () => {
    const schema = generateFAQSchema([]);

    expect(schema.mainEntity).toHaveLength(0);
  });
});

describe('generateBlogPostingSchema', () => {
  const mockPost = {
    title: 'Test Blog Post',
    description: 'Test description',
    author: 'John Doe',
    datePublished: '2024-01-01',
    url: 'https://sproutern.dpdns.org/blog/test',
  };

  it('should generate valid BlogPosting schema', () => {
    const schema = generateBlogPostingSchema(mockPost);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('BlogPosting');
  });

  it('should include required properties', () => {
    const schema = generateBlogPostingSchema(mockPost);

    expect(schema.headline).toBe('Test Blog Post');
    expect(schema.description).toBe('Test description');
    expect(schema.datePublished).toBe('2024-01-01');
  });

  it('should include author information', () => {
    const schema = generateBlogPostingSchema(mockPost);

    expect(schema.author['@type']).toBe('Person');
    expect(schema.author.name).toBe('John Doe');
  });

  it('should handle optional dateModified', () => {
    const postWithModified = { ...mockPost, dateModified: '2024-06-01' };
    const schema = generateBlogPostingSchema(postWithModified);

    expect(schema.dateModified).toBe('2024-06-01');
  });
});

describe('generateJobPostingSchema', () => {
  const mockJob = {
    title: 'Software Engineer Intern',
    description: 'Join our team',
    company: 'Sproutern',
    location: 'Remote',
    datePosted: '2024-01-01',
  };

  it('should generate valid JobPosting schema', () => {
    const schema = generateJobPostingSchema(mockJob);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('JobPosting');
  });

  it('should include required job properties', () => {
    const schema = generateJobPostingSchema(mockJob);

    expect(schema.title).toBe('Software Engineer Intern');
    expect(schema.description).toBe('Join our team');
    expect(schema.datePosted).toBe('2024-01-01');
  });

  it('should include hiring organization', () => {
    const schema = generateJobPostingSchema(mockJob);

    expect(schema.hiringOrganization['@type']).toBe('Organization');
    expect(schema.hiringOrganization.name).toBe('Sproutern');
  });

  it('should include job location', () => {
    const schema = generateJobPostingSchema(mockJob);

    expect(schema.jobLocation).toBeDefined();
  });

  it('should handle optional salary information', () => {
    const jobWithSalary = {
      ...mockJob,
      salary: { min: 50000, max: 80000, currency: 'USD' },
    };
    const schema = generateJobPostingSchema(jobWithSalary);

    expect(schema.baseSalary).toBeDefined();
  });
});

describe('generateHowToSchema', () => {
  const mockHowTo = {
    name: 'How to Apply for Internships',
    description: 'Step by step guide',
    steps: [
      { name: 'Step 1', text: 'Prepare your resume' },
      { name: 'Step 2', text: 'Search for opportunities' },
    ],
  };

  it('should generate valid HowTo schema', () => {
    const schema = generateHowToSchema(mockHowTo);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('HowTo');
  });

  it('should include all steps', () => {
    const schema = generateHowToSchema(mockHowTo);

    expect(schema.step).toHaveLength(2);
  });

  it('should format steps correctly', () => {
    const schema = generateHowToSchema(mockHowTo);

    expect(schema.step[0]['@type']).toBe('HowToStep');
    expect(schema.step[0].name).toBe('Step 1');
    expect(schema.step[0].text).toBe('Prepare your resume');
  });
});

describe('generateBreadcrumbSchema', () => {
  it('should generate valid BreadcrumbList schema', () => {
    const items = [
      { name: 'Home', url: 'https://sproutern.dpdns.org' },
      { name: 'Internships', url: 'https://sproutern.dpdns.org/internships' },
    ];
    const schema = generateBreadcrumbSchema(items);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('BreadcrumbList');
  });

  it('should assign correct positions', () => {
    const items = [
      { name: 'Home', url: 'https://sproutern.dpdns.org' },
      { name: 'Blog', url: 'https://sproutern.dpdns.org/blog' },
    ];
    const schema = generateBreadcrumbSchema(items);

    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[1].position).toBe(2);
  });
});

describe('generateOrganizationSchema', () => {
  it('should generate valid Organization schema', () => {
    const schema = generateOrganizationSchema();

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Organization');
  });

  it('should include Sproutern details', () => {
    const schema = generateOrganizationSchema();

    expect(schema.name).toBe('Sproutern');
    expect(schema.url).toBe('https://sproutern.dpdns.org/');
  });

  it('should include social profiles', () => {
    const schema = generateOrganizationSchema();

    expect(schema.sameAs).toBeInstanceOf(Array);
    expect(schema.sameAs.length).toBeGreaterThan(0);
  });

  it('should include contact information', () => {
    const schema = generateOrganizationSchema();

    expect(schema.contactPoint).toBeDefined();
  });
});

describe('generateWebsiteSchema', () => {
  it('should generate valid WebSite schema', () => {
    const schema = generateWebsiteSchema();

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('WebSite');
  });

  it('should include search action for sitelinks', () => {
    const schema = generateWebsiteSchema();

    expect(schema.potentialAction).toBeDefined();
    expect(schema.potentialAction['@type']).toBe('SearchAction');
  });

  it('should include correct URL', () => {
    const schema = generateWebsiteSchema();

    expect(schema.url).toBe('https://sproutern.dpdns.org/');
  });
});

describe('generateCourseSchema', () => {
  const mockCourse = {
    name: 'Web Development Bootcamp',
    description: 'Learn web development',
    url: 'https://sproutern.dpdns.org/courses/webdev',
  };

  it('should generate valid Course schema', () => {
    const schema = generateCourseSchema(mockCourse);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('Course');
  });

  it('should include course details', () => {
    const schema = generateCourseSchema(mockCourse);

    expect(schema.name).toBe('Web Development Bootcamp');
    expect(schema.description).toBe('Learn web development');
  });
});

describe('generateSoftwareApplicationSchema', () => {
  const mockApp = {
    name: 'Resume Score Checker',
    description: 'Check your resume score',
    url: 'https://sproutern.dpdns.org/tools/resume-score-checker',
    applicationCategory: 'BusinessApplication',
  };

  it('should generate valid SoftwareApplication schema', () => {
    const schema = generateSoftwareApplicationSchema(mockApp);

    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('SoftwareApplication');
  });

  it('should include application details', () => {
    const schema = generateSoftwareApplicationSchema(mockApp);

    expect(schema.name).toBe('Resume Score Checker');
    expect(schema.applicationCategory).toBe('BusinessApplication');
  });
});
