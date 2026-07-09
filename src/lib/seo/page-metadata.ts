import type { Metadata } from 'next';
import {
  SEO_DEFAULT_OG_IMAGE,
  SEO_LOGO_URL,
  SEO_SITE_NAME,
  SEO_SITE_URL,
} from '@/lib/seo/site-config';

const siteUrl = SEO_SITE_URL;
const siteName = SEO_SITE_NAME;
const siteDescription =
  "India's leading internship platform connecting students with startups. Find internships, optimize your resume, and accelerate your career.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Find Internships & Build Your Career`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords:
    'internships, student jobs, career platform, resume builder, job search, startup internships, India internships',
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: `${siteName} - Find Internships & Build Your Career`,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    creator: '@sproutern',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'YOUR_YANDEX_VERIFICATION',
  },
};

// Page-specific metadata
export const pageMetadata = {
  blog: {
    title: 'Career Blog | Expert Advice for Students & Interns',
    description:
      'Get expert career advice, internship tips, resume writing guides, and interview preparation strategies. 30+ articles to help you land your dream job.',
    keywords:
      'career blog, internship tips, resume writing, interview preparation, job search, career advice',
    url: `${siteUrl}/blog`,
  },
  resources: {
    title: 'Free Career Resources | Resume Templates & Interview Guides',
    description:
      'Access 100+ free career resources: ATS-friendly resume templates, interview cheat sheets, cover letter samples, and career planning guides.',
    keywords:
      'career resources, free resume templates, interview preparation, cover letter samples, career planning',
    url: `${siteUrl}/resources`,
  },
  tools: {
    title:
      '10+ Free Career Tools | CGPA Converter, Salary Calculator, Resume Checker',
    description:
      'Free online career tools: CGPA converter, salary calculator, ATS resume checker, EMI calculator, typing test, and more. No signup required.',
    keywords:
      'career tools, CGPA converter, salary calculator, resume checker, ATS checker, typing test',
    url: `${siteUrl}/tools`,
  },
  skillTest: {
    title: 'AI Skill Test Generator | Free Online Quiz Maker',
    description:
      'Generate personalized skill tests with AI. Test your knowledge in programming, data science, marketing, and more. Get instant results.',
    keywords:
      'skill test, online quiz, AI quiz generator, programming test, aptitude test, skill assessment',
    url: `${siteUrl}/skill-test`,
  },
  resumeOptimizer: {
    title: 'AI Resume Optimizer | ATS-Friendly Resume Rewriter',
    description:
      'Upload your resume and let AI optimize it for ATS systems. Get instant feedback, keyword suggestions, and download your improved resume.',
    keywords:
      'resume optimizer, ATS resume, AI resume writer, resume rewriter, ATS optimization',
    url: `${siteUrl}/resume-optimizer`,
  },
};

// Structured data generators
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: SEO_LOGO_URL,
    description: siteDescription,
    sameAs: [
      'https://twitter.com/sproutern',
      'https://linkedin.com/company/sproutern',
      'https://instagram.com/sproutern',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'support@sproutern.com',
    },
  };
}

export function generateWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: SEO_LOGO_URL,
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
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
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

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: SEO_LOGO_URL,
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
    image: article.image || SEO_DEFAULT_OG_IMAGE,
  };
}

export function generateSoftwareApplicationSchema(tool: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: tool.category,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    operatingSystem: 'Web',
  };
}
