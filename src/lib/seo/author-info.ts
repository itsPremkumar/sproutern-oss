// Author and Expertise Information for E-E-A-T SEO signals
// This module provides author data and schema generation for demonstrating expertise
import { SEO_LOGO_URL, SEO_SITE_URL } from '@/lib/seo/site-config';

export const authorInfo = {
  founder: {
    name: 'Sproutern Team',
    role: 'Editorial Team',
    bio: 'The Sproutern Team consists of career experts and technologists dedicated to bridging the gap between talented students and innovative startups. We provide AI-powered internship matching, comprehensive career resources, and free tools to help students worldwide build successful careers.',
    shortBio:
      'Career experts and technologists dedicated to helping students worldwide launch successful careers.',
    education: 'Industry Experts',
    expertise: [
      'Career Development',
      'Interview Preparation',
      'Resume Writing',
      'AI-Powered Job Search',
      'EdTech Innovation',
    ],
    social: {
      linkedin: 'https://www.linkedin.com/company/sproutern',
    },
    image: '/logo.jpg',
    url: `${SEO_SITE_URL}/about`,
  },
  organization: {
    name: 'Sproutern',
    description:
      "India's leading education and internship resources platform for students. Sproutern connects talented students with innovative startups through AI-powered matching, comprehensive career resources, and free tools.",
    foundingDate: '2024',
    url: SEO_SITE_URL,
    logo: SEO_LOGO_URL,
    email: 'support@sproutern.com',
    address: {
      country: 'India',
      region: 'Tamil Nadu',
    },
  },
};

// Generate Person schema for author pages
export function generateAuthorSchema(author = authorInfo.founder) {
  return {
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: author.url,
    image: `${SEO_SITE_URL}${author.image}`,
    sameAs: Object.values(author.social),
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Global Industry Experts',
    },
    worksFor: {
      '@type': 'Organization',
      name: authorInfo.organization.name,
      url: authorInfo.organization.url,
    },
    knowsAbout: author.expertise,
  };
}

// Generate Organization schema with enhanced E-E-A-T signals
export function generateEnhancedOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${authorInfo.organization.url}/#organization`,
    name: authorInfo.organization.name,
    description: authorInfo.organization.description,
    url: authorInfo.organization.url,
    logo: {
      '@type': 'ImageObject',
      url: authorInfo.organization.logo,
      creditText: 'Sproutern',
      creator: {
        '@type': 'Organization',
        name: 'Sproutern',
      },
      copyrightNotice: '© 2026 Sproutern. All rights reserved.',
      license: 'https://www.sproutern.com/terms',
      acquireLicensePage: 'https://www.sproutern.com/contact',
    },
    foundingDate: authorInfo.organization.foundingDate,
    founder: generateAuthorSchema(),
    email: authorInfo.organization.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: authorInfo.organization.address.country,
      addressRegion: authorInfo.organization.address.region,
    },
    sameAs: [authorInfo.founder.social.linkedin],
  };
}

// Generate Article schema with author attribution
export function generateArticleSchema(articleData: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    '@type': 'Article',
    headline: articleData.title,
    description: articleData.description,
    url: articleData.url,
    datePublished: articleData.datePublished,
    dateModified: articleData.dateModified,
    author: generateAuthorSchema(),
    publisher: {
      '@type': 'Organization',
      name: authorInfo.organization.name,
      url: authorInfo.organization.url,
      logo: {
        '@type': 'ImageObject',
        url: authorInfo.organization.logo,
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
    image: articleData.image || `${SEO_SITE_URL}/opengraph.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleData.url,
    },
  };
}

// Generate WebPage schema
export function generateWebPageSchema(pageData: {
  name: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  return {
    '@type': 'WebPage',
    name: pageData.name,
    description: pageData.description,
    url: pageData.url,
    dateModified:
      pageData.dateModified || new Date().toISOString().split('T')[0],
    inLanguage: 'en-IN',
    isPartOf: {
      '@type': 'WebSite',
      name: authorInfo.organization.name,
      url: authorInfo.organization.url,
    },
    about: {
      '@type': 'Organization',
      name: authorInfo.organization.name,
    },
  };
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Author bio component data for inline use
export const authorBioComponent = {
  displayName: authorInfo.founder.name,
  shortBio: authorInfo.founder.shortBio,
  image: authorInfo.founder.image,
  linkedinUrl: authorInfo.founder.social.linkedin,
  profileUrl: authorInfo.founder.url,
  credentials: [
    'Career Experts',
    'Sproutern Editorial Team',
    'Industry Leaders',
    'Tech Innovators',
  ],
};
