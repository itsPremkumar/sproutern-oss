import { Metadata } from 'next';
import {
  SEO_DEFAULT_OG_IMAGE,
  SEO_DEFAULT_TWITTER_IMAGE,
  SEO_SITE_URL,
  toAbsoluteUrl,
} from '@/lib/seo/site-config';
import { shouldNoindexPath } from '@/lib/seo/indexing-policy';

function getPathnameFromCanonical(canonicalUrl?: string): string {
  if (!canonicalUrl) {
    return '/';
  }

  try {
    return new URL(canonicalUrl).pathname || '/';
  } catch {
    return '/';
  }
}

export const generateMetadata = (params: {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: string;
}): Metadata => {
  const canonicalUrl = toAbsoluteUrl(params.canonical);
  const canonicalPath = getPathnameFromCanonical(canonicalUrl);
  const shouldNoindex = shouldNoindexPath(canonicalPath);
  const normalizedCustomImage = toAbsoluteUrl(params.image);
  const ogImage = normalizedCustomImage || SEO_DEFAULT_OG_IMAGE;
  const twitterImage = normalizedCustomImage || SEO_DEFAULT_TWITTER_IMAGE;

  return {
    title: params.title,
    description: params.description,
    keywords: params.keywords,
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
      title: params.title,
      description: params.description,
      url: canonicalUrl || SEO_SITE_URL,
      type: (params.type as any) || 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
      images: [twitterImage],
      creator: '@sproutern',
    },
  };
};
