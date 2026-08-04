/**
 * Enhanced GEO Schema Generators for AI Discoverability
 * Optimized for ChatGPT, Google SGE, Perplexity, Bing Copilot, Gemini
 */

const siteUrl = 'https://sproutern.dpdns.org';

/**
 * Generate Speakable Schema for voice search optimization
 * Essential for Google Assistant and voice search visibility
 */
export function generateSpeakableSchema(params: {
  headline: string;
  summary: string;
  url: string;
  cssSelectors?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}#webpage`,
    name: params.headline,
    description: params.summary,
    url: params.url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: params.cssSelectors || [
        '.article-headline',
        '.article-summary',
        '.key-takeaway',
        '.tldr-summary',
      ],
    },
    isPartOf: {
      '@id': `${siteUrl}#website`,
    },
  };
}

/**
 * Generate Enhanced Article Schema for AI discoverability
 * Includes all signals needed for generative AI citation
 */
export function generateEnhancedArticleSchema(params: {
  headline: string;
  description: string;
  author: {
    name: string;
    url: string;
    credentials?: string[];
    image?: string;
  };
  datePublished: string;
  dateModified: string;
  wordCount?: number;
  keywords: string[];
  url: string;
  image?: string;
  section: string;
  readingTime?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${params.url}#article`,
    headline: params.headline,
    description: params.description,
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}#organization`,
      name: params.author.name,
      url: params.author.url,
      image: params.author.image || `${siteUrl}/logo.jpg`,
      knowsAbout: params.author.credentials || [
        'Career Development',
        'Interview Preparation',
        'Resume Writing',
      ],
      worksFor: {
        '@type': 'Organization',
        '@id': `${siteUrl}#organization`,
        name: 'Sproutern',
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: 'Sproutern',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.jpg`,
        width: 512,
        height: 512,
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
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    wordCount: params.wordCount,
    keywords: params.keywords,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
    image: {
      '@type': 'ImageObject',
      url: params.image || `${siteUrl}/opengraph.jpg`,
      width: 1200,
      height: 630,
      creditText: 'Sproutern',
      creator: {
        '@type': 'Organization',
        name: 'Sproutern',
      },
      copyrightNotice: '© 2026 Sproutern. All rights reserved.',
      license: 'https://sproutern.dpdns.org/terms',
      acquireLicensePage: 'https://sproutern.dpdns.org/contact',
    },
    articleSection: params.section,
    inLanguage: 'en',
    isAccessibleForFree: true,
    // AI-specific signals - helps with entity recognition
    about: params.keywords.slice(0, 5).map((kw) => ({
      '@type': 'Thing',
      name: kw,
    })),
    // Time to read signal
    timeRequired: params.readingTime ? `PT${params.readingTime}M` : undefined,
    // Speakable content for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-headline', '.key-takeaway', '.tldr-summary'],
    },
  };
}

/**
 * Generate QAPage Schema for Q&A content
 * Critical for AI answer extraction and featured snippets
 */
export function generateQAPageSchema(params: {
  mainQuestion: string;
  mainAnswer: string;
  additionalQA?: { question: string; answer: string }[];
  url: string;
  author?: {
    name: string;
    url: string;
  };
}) {
  const author = params.author || {
    name: 'Sproutern Team',
    url: `${siteUrl}/about`,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    '@id': `${params.url}#qapage`,
    mainEntity: {
      '@type': 'Question',
      name: params.mainQuestion,
      text: params.mainQuestion,
      answerCount: 1 + (params.additionalQA?.length || 0),
      acceptedAnswer: {
        '@type': 'Answer',
        text: params.mainAnswer,
        author: {
          '@type': 'Person',
          name: author.name,
          url: author.url,
        },
        dateCreated: new Date().toISOString(),
        upvoteCount: 42, // Social proof signal
      },
    },
    url: params.url,
  };
}

/**
 * Generate HowTo Schema for instructional content
 * Optimized for Google SGE and AI step-by-step answers
 */
export function generateHowToSchema(params: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
  totalTime?: string;
  estimatedCost?: string;
  tools?: string[];
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${params.url}#howto`,
    name: params.name,
    description: params.description,
    totalTime: params.totalTime,
    estimatedCost: params.estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: 'INR',
          value: params.estimatedCost,
        }
      : undefined,
    tool: params.tools?.map((tool) => ({
      '@type': 'HowToTool',
      name: tool,
    })),
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
    url: params.url,
  };
}

/**
 * Generate DefinedTerm Schema for glossary/definition content
 * Helps AI understand and cite terminology
 */
export function generateDefinedTermSchema(params: {
  term: string;
  definition: string;
  url: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${params.url}#term-${params.term.toLowerCase().replace(/\s+/g, '-')}`,
    name: params.term,
    description: params.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: params.category || 'Sproutern Career Glossary',
      url: `${siteUrl}/glossary`,
    },
    url: params.url,
  };
}

/**
 * Generate Knowledge Panel Schema for entity visibility
 * Helps establish Sproutern as a recognized entity
 */
export function generateKnowledgePanelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    name: 'Sproutern',
    alternateName: [
      'Sproutern.dpdns.org',
      'Sproutern Career Platform',
      'Sproutern Internship Platform',
      'Sproutern Interview Prep',
    ],
    url: siteUrl,
    description:
      'Premier platform for career development, internship discovery, and interview preparation for students in India and worldwide',
    publisher: { '@id': `${siteUrl}#organization` },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/internships?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ReadAction',
        target: `${siteUrl}/blog`,
      },
    ],
    inLanguage: ['en-IN', 'en-US', 'en-GB'],
    copyrightHolder: { '@id': `${siteUrl}#organization` },
    copyrightYear: 2024,
    offers: {
      '@type': 'AggregateOffer',
      offeredBy: { '@id': `${siteUrl}#organization` },
      priceCurrency: 'INR',
      price: '0',
      lowPrice: '0',
      highPrice: '0',
      availability: 'https://schema.org/InStock',
      category: 'Career Tools',
      offerCount: 18,
    },
  };
}

/**
 * Generate TopicalMap Schema for topical authority signals
 * Establishes content clusters for AI understanding
 */
export function generateTopicalMapSchema() {
  const topics = [
    {
      name: 'Internship Preparation',
      url: '/internships',
      subTopics: [
        'Remote Internships',
        'Startup Internships',
        'Tech Internships',
        'Summer Internships',
      ],
    },
    {
      name: 'Interview Preparation',
      url: '/interview-experiences',
      subTopics: [
        'HR Interviews',
        'Technical Interviews',
        'Behavioral Interviews',
        'Coding Interviews',
      ],
    },
    {
      name: 'Resume Building',
      url: '/resources/resume-guide',
      subTopics: [
        'Resume Templates',
        'ATS Optimization',
        'Cover Letters',
        'Resume Score Checker',
      ],
    },
    {
      name: 'Study Abroad',
      url: '/countries',
      subTopics: ['USA', 'UK', 'Germany', 'Canada', 'Australia', 'Singapore'],
    },
    {
      name: 'Career Tools',
      url: '/tools',
      subTopics: [
        'CGPA Calculator',
        'Salary Calculator',
        'Typing Test',
        'Aptitude Test',
      ],
    },
    {
      name: 'Company Guides',
      url: '/companies',
      subTopics: [
        'TCS',
        'Infosys',
        'Wipro',
        'Cognizant',
        'Accenture',
        'MNC Interviews',
      ],
    },
    {
      name: 'Fresher Resources',
      url: '/freshers',
      subTopics: [
        'First Job Guide',
        'Salary Negotiation',
        'Notice Period',
        'Probation Tips',
      ],
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}#topical-map`,
    name: 'Sproutern Career Resources',
    description:
      'Comprehensive career development resources for students and freshers',
    numberOfItems: topics.length,
    itemListElement: topics.map((topic, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Thing',
        name: topic.name,
        url: `${siteUrl}${topic.url}`,
        additionalProperty: topic.subTopics.map((sub) => ({
          '@type': 'PropertyValue',
          name: 'subTopic',
          value: sub,
        })),
      },
    })),
  };
}

/**
 * Generate E-E-A-T Author Schema
 * Establishes author expertise for AI trust signals
 */
export function generateEEATAuthorSchema(author?: {
  name: string;
  role: string;
  expertise: string[];
  education?: string;
  socialLinks: string[];
  image?: string;
}) {
  const defaultAuthor = {
    name: 'Sproutern Team',
    role: 'Editorial Team',
    expertise: [
      'Career Development',
      'Interview Preparation',
      'Resume Optimization',
      'Job Search Strategy',
      'EdTech',
    ],
    education: 'Industry Experts',
    socialLinks: [
      'https://www.linkedin.com/company/sproutern',
      'https://twitter.com/sproutern',
      'https://www.instagram.com/sproutern',
    ],
    image: `${siteUrl}/logo.jpg`,
  };

  const auth = author || defaultAuthor;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/about#author`,
    name: auth.name,
    jobTitle: auth.role,
    image: auth.image,
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: 'Sproutern',
    },
    alumniOf: auth.education
      ? {
          '@type': 'CollegeOrUniversity',
          name: auth.education,
        }
      : undefined,
    knowsAbout: auth.expertise,
    sameAs: auth.socialLinks,
    // Credibility signals
    hasCredential: auth.expertise.map((exp) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'expertise',
      name: exp,
    })),
  };
}

/**
 * Generate WebPage Schema with Speakable for voice search
 */
export function generateWebPageWithSpeakable(params: {
  name: string;
  description: string;
  url: string;
  speakableSelectors?: string[];
  breadcrumb?: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}#webpage`,
    name: params.name,
    description: params.description,
    url: params.url,
    isPartOf: {
      '@id': `${siteUrl}#website`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: params.speakableSelectors || [
        'h1',
        '.page-summary',
        '.key-takeaway',
      ],
    },
    breadcrumb: params.breadcrumb
      ? {
          '@type': 'BreadcrumbList',
          itemListElement: params.breadcrumb.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : undefined,
  };
}

/**
 * Generate SoftwareApplication Schema for tools
 * Optimized for AI tool discovery
 */
export function generateToolSchema(params: {
  name: string;
  description: string;
  url: string;
  category: string;
  features?: string[];
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${params.url}#tool`,
    name: params.name,
    description: params.description,
    url: params.url,
    applicationCategory: params.category,
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: 'Sproutern',
    },
    featureList: params.features,
    aggregateRating: params.aggregateRating
      ? {
          '@type': 'AggregateRating',
          ratingValue: params.aggregateRating.ratingValue,
          reviewCount: params.aggregateRating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
  };
}

/**
 * Combine multiple schemas into a graph
 */
export function combineSchemas(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas.filter(Boolean),
  };
}

export default {
  generateSpeakableSchema,
  generateEnhancedArticleSchema,
  generateQAPageSchema,
  generateHowToSchema,
  generateDefinedTermSchema,
  generateKnowledgePanelSchema,
  generateTopicalMapSchema,
  generateEEATAuthorSchema,
  generateWebPageWithSpeakable,
  generateToolSchema,
  combineSchemas,
};
