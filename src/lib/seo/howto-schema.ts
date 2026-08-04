/**
 * HowTo Schema Generator for Tutorial and Guide Content
 * Helps search engines understand step-by-step instructions
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToParams {
  name: string;
  description: string;
  image?: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[]; // Materials/tools needed
  tool?: string[]; // Tools required
  steps: HowToStep[];
}

/**
 * Generate HowTo schema for tutorial content
 */
export function generateHowToSchema(params: HowToParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    ...(params.image && { image: params.image }),
    ...(params.totalTime && { totalTime: params.totalTime }),
    ...(params.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: params.estimatedCost.currency,
        value: params.estimatedCost.value,
      },
    }),
    ...(params.supply &&
      params.supply.length > 0 && {
        supply: params.supply.map((item) => ({
          '@type': 'HowToSupply',
          name: item,
        })),
      }),
    ...(params.tool &&
      params.tool.length > 0 && {
        tool: params.tool.map((item) => ({
          '@type': 'HowToTool',
          name: item,
        })),
      }),
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    })),
  };
}

/**
 * Generate FAQ schema for question/answer content
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
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
  };
}

/**
 * Generate Course schema for educational content
 */
export interface CourseParams {
  name: string;
  description: string;
  provider: {
    name: string;
    url?: string;
  };
  url?: string;
  image?: string;
  offers?: {
    price: string;
    currency: string;
    category?: 'Free' | 'Paid';
  };
  educationalLevel?: string;
  courseMode?: 'Online' | 'Offline' | 'Blended';
  duration?: string; // ISO 8601 duration
  syllabusSections?: Array<{
    name: string;
    description?: string;
  }>;
}

export function generateCourseSchema(params: CourseParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: params.name,
    description: params.description,
    provider: {
      '@type': 'Organization',
      name: params.provider.name,
      ...(params.provider.url && { url: params.provider.url }),
    },
    ...(params.url && { url: params.url }),
    ...(params.image && { image: params.image }),
    ...(params.offers && {
      offers: {
        '@type': 'Offer',
        price: params.offers.price,
        priceCurrency: params.offers.currency,
        category:
          params.offers.category === 'Free'
            ? 'https://schema.org/FreeOffer'
            : undefined,
      },
    }),
    ...(params.educationalLevel && {
      educationalLevel: params.educationalLevel,
    }),
    ...(params.courseMode && { courseMode: params.courseMode }),
    ...(params.duration && { timeRequired: params.duration }),
    ...(params.syllabusSections && {
      syllabus: params.syllabusSections.map((section) => ({
        '@type': 'Syllabus',
        name: section.name,
        ...(section.description && { description: section.description }),
      })),
    }),
    inLanguage: 'en',
    isAccessibleForFree: params.offers?.category === 'Free',
  };
}

/**
 * Enhanced Article schema with author and publisher info
 */
export interface ArticleParams {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
    image?: string;
  };
  keywords?: string[];
  wordCount?: number;
  articleSection?: string;
}

export function generateArticleSchema(params: ArticleParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    ...(params.image && {
      image: {
        '@type': 'ImageObject',
        url: params.image,
        creditText: 'Sproutern',
        creator: {
          '@type': 'Organization',
          name: 'Sproutern',
        },
        copyrightNotice: '© 2026 Sproutern. All rights reserved.',
        license: 'https://sproutern.dpdns.org/terms',
        acquireLicensePage: 'https://sproutern.dpdns.org/contact',
      },
    }),
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      '@type': 'Person',
      name: params.author.name,
      ...(params.author.url && { url: params.author.url }),
      ...(params.author.image && { image: params.author.image }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: 'https://sproutern.dpdns.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sproutern.dpdns.org/logo.jpg',
        creditText: 'Sproutern',
        creator: {
          '@type': 'Organization',
          name: 'Sproutern',
        },
        copyrightNotice: '© 2026 Sproutern. All rights reserved.',
        license: 'https://sproutern.dpdns.org/terms',
        acquireLicensePage: 'https://sproutern.dpdns.org/contact',
      },
    },
    ...(params.keywords && { keywords: params.keywords.join(', ') }),
    ...(params.wordCount && { wordCount: params.wordCount }),
    ...(params.articleSection && { articleSection: params.articleSection }),
    inLanguage: 'en',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.author.url || 'https://sproutern.dpdns.org',
    },
  };
}
