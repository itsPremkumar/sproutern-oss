/**
 * SEO Schema Components
 * Comprehensive JSON-LD structured data for maximum search visibility
 * Supports: Organization, BreadcrumbList, FAQ, HowTo, SoftwareApplication, Article
 */

import React from 'react';

// Organization schema for sitewide use
export const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Sproutern',
        url: 'https://sproutern.dpdns.org',
        logo: 'https://sproutern.dpdns.org/logo.jpg',
        description:
          'Sproutern helps students and professionals with career tools, interview preparation, and salary insights for global opportunities.',
        foundingDate: '2023',
        sameAs: [
          'https://www.linkedin.com/company/sproutern',
          'https://twitter.com/sproutern',
          'https://www.youtube.com/@sproutern',
          'https://www.instagram.com/sproutern',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'support@sproutern.com',
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
      }),
    }}
  />
);

// Breadcrumb schema for hierarchical navigation
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement,
        }),
      }}
    />
  );
}

// FAQ schema for question/answer pages
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
        }),
      }}
    />
  );
}

// HowTo schema for step-by-step guides
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name,
          description,
          totalTime: totalTime || 'PT10M',
          step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image,
          })),
        }),
      }}
    />
  );
}

// SoftwareApplication schema for tools
export function SoftwareApplicationSchema({
  name,
  description,
  category = 'EducationalApplication',
  operatingSystem = 'Web',
  screenshot,
}: {
  name: string;
  description: string;
  category?: string;
  operatingSystem?: string;
  screenshot?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name,
          description,
          applicationCategory: category,
          operatingSystem,
          screenshot,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '2500',
            bestRating: '5',
          },
        }),
      }}
    />
  );
}

// Article schema for blog posts and guides
export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Sproutern Team',
  url,
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline,
          description,
          image: image || 'https://sproutern.dpdns.org/og-image.jpg',
          datePublished,
          dateModified: dateModified || datePublished,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Sproutern',
            logo: {
              '@type': 'ImageObject',
              url: 'https://sproutern.dpdns.org/logo.jpg',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        }),
      }}
    />
  );
}

// Company/Employer schema for company pages
export function EmployerSchema({
  name,
  description,
  url,
  logo,
  numberOfEmployees,
  foundingDate,
  industry,
}: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  numberOfEmployees?: string;
  foundingDate?: string;
  industry?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name,
          description,
          url,
          logo,
          numberOfEmployees: numberOfEmployees
            ? { '@type': 'QuantitativeValue', value: numberOfEmployees }
            : undefined,
          foundingDate,
          industry,
        }),
      }}
    />
  );
}

// Course/Learning schema for educational content
export function CourseSchema({
  name,
  description,
  provider = 'Sproutern',
  url,
  duration,
}: {
  name: string;
  description: string;
  provider?: string;
  url: string;
  duration?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name,
          description,
          provider: {
            '@type': 'Organization',
            name: provider,
          },
          url,
          hasCourseInstance: duration
            ? {
                '@type': 'CourseInstance',
                courseMode: 'online',
                duration,
              }
            : undefined,
          isAccessibleForFree: true,
        }),
      }}
    />
  );
}

// Salary/Job Posting schema (aggregated)
export function SalarySchema({
  jobTitle,
  baseSalary,
  currency = 'INR',
  minValue,
  maxValue,
  employerName,
  location = 'India',
}: {
  jobTitle: string;
  baseSalary?: number;
  currency?: string;
  minValue?: number;
  maxValue?: number;
  employerName?: string;
  location?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'OccupationalExperienceRequirements',
          name: `${jobTitle} Salary Information`,
          occupationalCategory: jobTitle,
          estimatedSalary: {
            '@type': 'MonetaryAmountDistribution',
            name: `${jobTitle} Salary`,
            currency,
            minValue,
            maxValue,
            median: baseSalary,
          },
          hiringOrganization: employerName
            ? { '@type': 'Organization', name: employerName }
            : undefined,
          jobLocation: {
            '@type': 'Place',
            address: { '@type': 'PostalAddress', addressCountry: location },
          },
        }),
      }}
    />
  );
}

// Video schema for video content
export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  embedUrl,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  embedUrl?: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name,
          description,
          thumbnailUrl,
          uploadDate,
          duration,
          embedUrl,
          publisher: {
            '@type': 'Organization',
            name: 'Sproutern',
            logo: {
              '@type': 'ImageObject',
              url: 'https://sproutern.dpdns.org/logo.jpg',
            },
          },
        }),
      }}
    />
  );
}

// Export all schemas
export const Schemas = {
  Organization: OrganizationSchema,
  Breadcrumb: BreadcrumbSchema,
  FAQ: FAQSchema,
  HowTo: HowToSchema,
  SoftwareApplication: SoftwareApplicationSchema,
  Article: ArticleSchema,
  Employer: EmployerSchema,
  Course: CourseSchema,
  Salary: SalarySchema,
  Video: VideoSchema,
};

export default Schemas;
