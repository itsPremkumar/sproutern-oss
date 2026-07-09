import type { Metadata } from 'next';
import allPagesMetadata from './all-pages-metadata';
import { blogPostsMetadata } from './blog-metadata';

const siteUrl = 'https://sproutern.com';
const siteName = 'Sproutern';

// Generate complete metadata for any page
export function generatePageMetadata(
  page: keyof typeof allPagesMetadata,
): Metadata {
  const pageData = allPagesMetadata[page];

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: pageData.url,
      siteName,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
    },
    alternates: {
      canonical: pageData.url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate metadata for blog posts
export function generateBlogPostMetadata(slug: string): Metadata {
  const postData = blogPostsMetadata[slug as keyof typeof blogPostsMetadata];

  if (!postData) {
    return {
      title: 'Blog Post',
      description: 'Read career advice and internship tips on Sproutern blog.',
    };
  }

  return {
    title: postData.title,
    description: postData.description,
    keywords: postData.keywords,
    openGraph: {
      title: postData.title,
      description: postData.description,
      url: `${siteUrl}/blog/${slug}`,
      siteName,
      type: 'article',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate metadata for tool pages
export function generateToolMetadata(tool: {
  name: string;
  title: string;
  description: string;
  keywords: string;
  slug: string;
}): Metadata {
  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords,
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: `${siteUrl}/tools/${tool.slug}`,
      siteName,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.title,
      description: tool.description,
    },
    alternates: {
      canonical: `${siteUrl}/tools/${tool.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate metadata for resource pages
export function generateResourceMetadata(resource: {
  name: string;
  title: string;
  description: string;
  keywords: string;
  slug: string;
}): Metadata {
  return {
    title: resource.title,
    description: resource.description,
    keywords: resource.keywords,
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${siteUrl}/resources/${resource.slug}`,
      siteName,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.description,
    },
    alternates: {
      canonical: `${siteUrl}/resources/${resource.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate metadata for company pages
export function generateCompanyPageMetadata(
  company: string,
  type: string,
): Metadata {
  const titles: Record<string, string> = {
    'interview-questions': `${company} Interview Questions & Answers | Complete Preparation Guide`,
    salary: `${company} Salary Structure | CTC, In-Hand Salary & Benefits Breakdown`,
    profile: `${company} Careers | Internships, Jobs & Company Reviews`,
  };

  const descriptions: Record<string, string> = {
    'interview-questions': `Prepare for ${company} interviews with 50+ commonly asked questions, expert answers, and tips for technical, HR, and behavioral rounds.`,
    salary: `Complete ${company} salary breakdown: CTC, in-hand salary, benefits, increment structure, and compensation details for freshers and experienced professionals.`,
    profile: `Explore ${company} internship opportunities, company culture, work environment, employee reviews, and career growth prospects. Apply for openings today.`,
  };

  return {
    title: titles[type] || `${company} | Sproutern`,
    description:
      descriptions[type] || `Learn about ${company} careers and opportunities.`,
    keywords: `${company}, ${company} ${type.replace('-', ' ')}, ${company} careers, ${company} jobs, ${company} internships`,
    openGraph: {
      title: titles[type],
      description: descriptions[type],
      url: `${siteUrl}/companies/${company.toLowerCase()}/${type}`,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[type],
      description: descriptions[type],
    },
    alternates: {
      canonical: `${siteUrl}/companies/${company.toLowerCase()}/${type}`,
    },
  };
}

// Generate metadata for dynamic internship pages
export function generateInternshipMetadata(internship: {
  title: string;
  company: string;
  location: string;
  stipend?: string;
  duration?: string;
}): Metadata {
  const description = `Apply for ${internship.title} internship at ${internship.company} in ${internship.location}. ${internship.stipend ? `Stipend: ${internship.stipend}.` : ''} ${internship.duration ? `Duration: ${internship.duration}.` : ''} Apply now on Sproutern.`;

  return {
    title: `${internship.title} Internship at ${internship.company} | ${internship.location}`,
    description,
    keywords: `${internship.title} internship, ${internship.company} internship, ${internship.location} internship, internship opportunity`,
    openGraph: {
      title: `${internship.title} Internship at ${internship.company}`,
      description,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${internship.title} Internship at ${internship.company}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
