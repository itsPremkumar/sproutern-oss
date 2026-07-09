/**
 * Company Page Schema Component
 * Generates enhanced schema markup for company interview/job pages
 * Part of SEO Engine 1 - Enhanced Schema for Company Pages
 */

import React from 'react';

interface CompanyInfo {
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  industry?: string;
  employeeCount?: string;
  headquarters?: string;
}

interface InterviewInfo {
  averageDuration?: string;
  rounds?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  successRate?: string;
}

interface SalaryInfo {
  currency?: string;
  minSalary?: number;
  maxSalary?: number;
  averageSalary?: number;
  role?: string;
}

interface CompanyPageSchemaProps {
  company: CompanyInfo;
  interview?: InterviewInfo;
  salary?: SalaryInfo;
  pageUrl: string;
  faqs?: { question: string; answer: string }[];
  dateModified?: string;
}

/**
 * Generates comprehensive schema markup for company interview/job pages.
 * Includes Organization, FAQPage, and JobPosting schemas for rich results.
 */
export function CompanyPageSchema({
  company,
  interview,
  salary,
  pageUrl,
  faqs = [],
  dateModified = new Date().toISOString().split('T')[0],
}: CompanyPageSchemaProps) {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    description:
      company.description ||
      `Learn about ${company.name} interview process, salary, and work culture`,
    url: company.website || pageUrl,
    ...(company.logo && { logo: company.logo }),
    ...(company.industry && { industry: company.industry }),
    ...(company.employeeCount && {
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: company.employeeCount,
      },
    }),
    ...(company.headquarters && {
      address: {
        '@type': 'PostalAddress',
        addressLocality: company.headquarters,
      },
    }),
  };

  // WebPage Schema with speakable for voice search
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${company.name} Interview Experience & Preparation Guide`,
    description: `Complete guide to ${company.name} interviews: process, questions, salary, and tips from real experiences.`,
    url: pageUrl,
    dateModified,
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: 'https://www.sproutern.com',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.key-takeaways', '.interview-summary'],
    },
    about: {
      '@type': 'Organization',
      name: company.name,
    },
  };

  // FAQPage Schema if FAQs provided
  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  // JobPosting Schema if salary info provided
  const jobPostingSchema = salary
    ? {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: salary.role || 'Software Engineer',
        description: `Career opportunity at ${company.name}`,
        hiringOrganization: {
          '@type': 'Organization',
          name: company.name,
          sameAs: company.website,
        },
        baseSalary: {
          '@type': 'MonetaryAmount',
          currency: salary.currency || 'INR',
          value: {
            '@type': 'QuantitativeValue',
            minValue: salary.minSalary,
            maxValue: salary.maxSalary,
            unitText: 'YEAR',
          },
        },
        employmentType: 'FULL_TIME',
        jobLocationType: 'TELECOMMUTE',
        datePosted: dateModified,
        validThrough: new Date(new Date().setMonth(new Date().getMonth() + 6))
          .toISOString()
          .split('T')[0],
      }
    : null;

  // HowTo Schema for interview preparation
  const howToSchema = interview
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to Prepare for ${company.name} Interview`,
        description: `Step-by-step guide to crack ${company.name} interview with ${interview.rounds || 'multiple'} rounds`,
        ...(interview.averageDuration && {
          totalTime: interview.averageDuration,
        }),
        step: [
          {
            '@type': 'HowToStep',
            name: 'Research the Company',
            text: `Learn about ${company.name}'s products, culture, and recent news`,
          },
          {
            '@type': 'HowToStep',
            name: 'Practice Technical Skills',
            text: 'Review DSA, system design, and coding problems',
          },
          {
            '@type': 'HowToStep',
            name: 'Prepare for Behavioral Questions',
            text: 'Use STAR method for situational questions',
          },
          {
            '@type': 'HowToStep',
            name: 'Mock Interviews',
            text: 'Practice with peers or use mock interview tools',
          },
        ],
      }
    : null;

  // Aggregate Rating Schema (placeholder - can be dynamic)
  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Organization',
      name: company.name,
    },
    ratingValue: '4.2',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '150',
    description: `Interview experience rating for ${company.name}`,
  };

  // Combine all schemas
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      webPageSchema,
      ...(faqSchema ? [faqSchema] : []),
      ...(jobPostingSchema ? [jobPostingSchema] : []),
      ...(howToSchema ? [howToSchema] : []),
      aggregateRatingSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema, null, 0),
      }}
    />
  );
}

/**
 * Interview Summary Component for AEO (Answer Engine Optimization)
 * Displays key interview info in a format optimized for featured snippets
 */
export function InterviewSummary({
  company,
  interview,
  salary,
  className = '',
}: {
  company: string;
  interview: InterviewInfo;
  salary?: SalaryInfo;
  className?: string;
}) {
  return (
    <div
      className={`interview-summary rounded-lg border-2 border-primary/20 bg-primary/5 p-6 ${className}`}
    >
      <h2 className="mb-4 text-xl font-bold">
        {company} Interview at a Glance
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {interview.rounds && (
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">
              {interview.rounds}
            </div>
            <div className="text-sm text-muted-foreground">
              Interview Rounds
            </div>
          </div>
        )}
        {interview.difficulty && (
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">
              {interview.difficulty}
            </div>
            <div className="text-sm text-muted-foreground">
              Difficulty Level
            </div>
          </div>
        )}
        {interview.averageDuration && (
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">
              {interview.averageDuration}
            </div>
            <div className="text-sm text-muted-foreground">Avg. Duration</div>
          </div>
        )}
        {salary?.averageSalary && (
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">
              ₹{(salary.averageSalary / 100000).toFixed(1)} LPA
            </div>
            <div className="text-sm text-muted-foreground">Avg. Package</div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Quick Stats Bar for Company Pages
 */
export function CompanyQuickStats({
  stats,
  className = '',
}: {
  stats: { label: string; value: string; icon?: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap gap-4 rounded-lg bg-muted/50 p-4 ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-2 rounded-full bg-background px-4 py-2 shadow-sm"
        >
          {stat.icon && <span className="text-primary">{stat.icon}</span>}
          <span className="font-semibold">{stat.value}</span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
