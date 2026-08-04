import { Metadata } from 'next';
import { toolsSEOContent, ToolSlug } from './tool-seo-content';
import { shouldNoindexPath } from './indexing-policy';

function formatTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function extractTitleFromIntro(intro: string, slug: string): string {
  // Try to find bolded text in the first line/paragraph which usually contains the tool name
  const match = intro.match(/\*\*([^*]+)\*\*/);
  if (match && match[1]) {
    return match[1];
  }
  return formatTitle(slug);
}

function extractDescription(intro: string): string {
  // Basic Markdown stripping
  const clean = intro
    .replace(/\*\*/g, '')
    .replace(/__/g, '')
    .replace(/`/g, '')
    .replace(/\n/g, ' ')
    .trim();

  // Get first sentence roughly
  const firstPeriod = clean.indexOf('.');
  if (firstPeriod > -1) {
    return clean.substring(0, firstPeriod + 1);
  }
  return clean.substring(0, 160);
}

/**
 * Generate Metadata for a tool page
 * Usage: export const metadata = getToolMetadata('tool-slug');
 */
export function getToolMetadata(slug: ToolSlug): Metadata {
  const content = toolsSEOContent[slug];

  if (!content) {
    return {
      title: 'Tool Not Found',
      description: 'The requested tool could not be found.',
    };
  }

  const {
    slug: toolSlug,
    content: toolContent,
    targetAudience,
    features,
  } = content;

  // Dynamically derive metadata
  const title = extractTitleFromIntro(toolContent.introduction, toolSlug);
  const description = extractDescription(toolContent.introduction);
  const keywords = [...targetAudience, ...features].join(', ');

  const canonicalUrl = `https://sproutern.dpdns.org/tools/${toolSlug}`;
  const canonicalPath = `/tools/${toolSlug}`;
  const shouldNoindex = shouldNoindexPath(canonicalPath);

  return {
    title: `${title} | Free Online Tool - Sproutern`,
    description,
    keywords,
    robots: {
      index: !shouldNoindex,
      follow: true,
      googleBot: {
        index: !shouldNoindex,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Sproutern',
      images: [
        {
          url: 'https://sproutern.dpdns.org/opengraph.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://sproutern.dpdns.org/twitter.jpg'],
    },
  };
}
