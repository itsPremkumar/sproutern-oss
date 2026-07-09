export const generateFAQSchema = (
  faqs: { question: string; answer: string }[],
) => ({
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
});

export const generateBlogPostingSchema = (post: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  author: {
    '@type': 'Person',
    name: post.author,
  },
  datePublished: post.datePublished,
  dateModified: post.dateModified || post.datePublished,
  image: post.image || 'https://www.sproutern.com/opengraph.jpg',
  url: post.url,
  publisher: {
    '@type': 'Organization',
    name: 'Sproutern',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.sproutern.com/logo.jpg',
      creditText: 'Sproutern',
      creator: {
        '@type': 'Organization',
        name: 'Sproutern',
      },
      copyrightNotice: '© 2026 Sproutern. All rights reserved.',
      license: 'https://www.sproutern.com/terms',
      acquireLicensePage: 'https://www.sproutern.com/contact',
    },
  },
});

export const generateJobPostingSchema = (job: {
  title: string;
  description: string;
  company: string;
  location: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  salary?: { min: number; max: number; currency: string };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title,
  description: job.description,
  hiringOrganization: {
    '@type': 'Organization',
    name: job.company,
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: job.location,
    },
  },
  datePosted: job.datePosted,
  validThrough: job.validThrough,
  employmentType: job.employmentType || 'INTERN',
  ...(job.salary && {
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salary.currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salary.min,
        maxValue: job.salary.max,
        unitText: 'MONTH',
      },
    },
  }),
});

export const generateHowToSchema = (howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  totalTime: howTo.totalTime,
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});

export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// ============================================
// Organization Schema
// ============================================
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.sproutern.com/#organization',
  name: 'Sproutern',
  alternateName: ['Sproutern.com', 'Sproutern Platform'],
  url: 'https://www.sproutern.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.sproutern.com/logo.jpg',
    width: 512,
    height: 512,
    creditText: 'Sproutern',
    creator: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
    copyrightNotice: '© 2026 Sproutern. All rights reserved.',
    license: 'https://www.sproutern.com/terms',
    acquireLicensePage: 'https://www.sproutern.com/contact',
  },
  description:
    'Premier platform connecting ambitious students with innovative startups worldwide. AI-powered internship matching, career guidance, and professional development.',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@sproutern.com',
      url: 'https://www.sproutern.com/contact',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://twitter.com/sproutern',
    'https://www.linkedin.com/company/sproutern',
    'https://www.facebook.com/sproutern',
    'https://www.instagram.com/sproutern',
  ],
  knowsAbout: [
    'Internships',
    'Career Development',
    'Resume Building',
    'Interview Preparation',
    'Study Abroad',
    'Scholarships',
    'Job Search',
  ],
});

// ============================================
// Website Schema with SearchAction (for Sitelinks Search Box)
// ============================================
export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.sproutern.com/#website',
  name: 'Sproutern',
  url: 'https://www.sproutern.com/',
  description:
    'Find internships, career guidance, educational resources, and tools for students worldwide.',
  publisher: {
    '@id': 'https://www.sproutern.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://www.sproutern.com/internships?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: ['en-US', 'en-IN', 'en-GB'],
});

// ============================================
// Article Schema (for blog posts with full details)
// ============================================
export const generateArticleSchema = (params: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  authorUrl?: string;
  section?: string;
  keywords?: string[];
  wordCount?: number;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: params.headline,
  description: params.description,
  image: params.image,
  datePublished: params.datePublished,
  dateModified: params.dateModified,
  author: {
    '@type': 'Person',
    name: params.author,
    url: params.authorUrl || 'https://www.sproutern.com/about',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sproutern',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.sproutern.com/logo.jpg',
      creditText: 'Sproutern',
      creator: {
        '@type': 'Organization',
        name: 'Sproutern',
      },
      copyrightNotice: '© 2026 Sproutern. All rights reserved.',
      license: 'https://www.sproutern.com/terms',
      acquireLicensePage: 'https://www.sproutern.com/contact',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': params.url,
  },
  articleSection: params.section || 'Career Guidance',
  keywords: params.keywords?.join(', '),
  wordCount: params.wordCount,
  inLanguage: 'en',
});

// ============================================
// Course Schema (for educational content)
// ============================================
export const generateCourseSchema = (params: {
  name: string;
  description: string;
  provider?: string;
  url: string;
  teaches?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: params.name,
  description: params.description,
  provider: {
    '@type': 'Organization',
    name: params.provider || 'Sproutern',
    url: 'https://www.sproutern.com',
  },
  url: params.url,
  teaches: params.teaches,
  courseMode: 'online',
  isAccessibleForFree: true,
  inLanguage: 'en',
});

// ============================================
// SoftwareApplication Schema (for tools)
// ============================================
export const generateSoftwareApplicationSchema = (params: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: params.name,
  description: params.description,
  url: params.url,
  applicationCategory: params.applicationCategory,
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  provider: {
    '@type': 'Organization',
    name: 'Sproutern',
    url: 'https://www.sproutern.com',
  },
});

// ============================================
// AggregateRating Schema
// ============================================
export const generateAggregateRatingSchema = (params: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => ({
  '@type': 'AggregateRating',
  ratingValue: params.ratingValue,
  reviewCount: params.reviewCount,
  bestRating: params.bestRating || 5,
  worstRating: params.worstRating || 1,
});

// ============================================
// Review Schema
// ============================================
export const generateReviewSchema = (params: {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
}) => ({
  '@type': 'Review',
  author: {
    '@type': 'Person',
    name: params.author,
  },
  reviewBody: params.reviewBody,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: params.ratingValue,
    bestRating: 5,
    worstRating: 1,
  },
  datePublished: params.datePublished,
});

// ============================================
// EducationalOrganization Schema
// ============================================
export const generateEducationalOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://www.sproutern.com/#educational-org',
  name: 'Sproutern',
  url: 'https://www.sproutern.com',
  description:
    'Providing career guidance, educational resources, and tools for students worldwide.',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Singapore' },
  ],
});

// ============================================
// Complete Graph Schema Generator
// ============================================
// ============================================
// Mention & Citation Schema (for GEO)
// ============================================
export const generateMentionsSchema = (
  mentions: { name: string; url: string; type?: string }[],
) => ({
  '@type': 'Thing',
  mentions: mentions.map((mention) => ({
    '@type': mention.type || 'Thing',
    name: mention.name,
    sameAs: mention.url,
  })),
});

export const generateCitationSchema = (
  citations: { name: string; url: string }[],
) => ({
  '@type': 'CreativeWork',
  citation: citations.map((citation) => ({
    '@type': 'CreativeWork',
    name: citation.name,
    url: citation.url,
  })),
});

export const generateCompleteSchema = (additionalSchemas: object[] = []) => ({
  '@context': 'https://schema.org',
  '@graph': [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateEducationalOrganizationSchema(),
    ...additionalSchemas,
  ],
});
