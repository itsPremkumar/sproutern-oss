import { Metadata } from 'next';

interface GenerateMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateOptimizedMetadata({
  title,
  description,
  keywords = [],
  canonical,
  image = 'https://www.sproutern.com/opengraph.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
    author = 'Sproutern Team',
}: GenerateMetadataParams): Metadata {
  const fullTitle = title.includes('Sproutern')
    ? title
    : `${title} | Sproutern`;
  const url = canonical || 'https://www.sproutern.com';

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author, url: 'https://www.sproutern.com/about' }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Sproutern',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@sproutern',
    },
    other: {
      'last-modified': modifiedTime || new Date().toISOString(),
      'content-freshness': new Date().toISOString().split('T')[0],
    },
  };
}

// Optimized title templates
export const titleTemplates = {
  tool: (name: string) => `Free ${name} - Online Tool 2026 | Sproutern`,
  blog: (name: string) => `${name} - Complete Guide 2026 | Sproutern`,
  game: (name: string) => `${name} - Free Brain Training Game | Sproutern`,
  country: (name: string) =>
    `Study in ${name} - Complete Guide 2026 | Sproutern`,
};

// Optimized description templates
export const descriptionTemplates = {
  tool: (name: string, features: string) =>
    `Free ${name} trusted by 10,000+ students. ${features}. Instant results, no registration required. Try it now!`,
  blog: (topic: string, benefit: string) =>
    `Learn ${topic} with our expert guide. ${benefit}. Includes examples, tips, and actionable strategies. Read now!`,
  game: (name: string, benefit: string) =>
    `Play ${name} online for free. ${benefit}. Improve cognitive skills with fun brain training exercises.`,
};
