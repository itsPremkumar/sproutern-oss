/**
 * Enhanced Social Metadata Generator
 * Perfect Open Graph and Twitter Card implementation
 */

import { Metadata } from 'next';

export interface SocialMetadataParams {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'profile' | 'book' | 'music' | 'video';
  siteName?: string;
  locale?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
}

/**
 * Generate comprehensive social metadata for Next.js
 */
export function generateSocialMetadata(
  params: SocialMetadataParams,
): Partial<Metadata> {
  const {
    title,
    description,
    url,
    image = 'https://sproutern.dpdns.org/opengraph.jpg',
    imageAlt = 'Sproutern - Startup Internship Platform',
    type = 'website',
    siteName = 'Sproutern',
    locale = 'en_US',
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    twitterCard = 'summary_large_image',
    twitterSite = '@sproutern',
    twitterCreator = '@sproutern',
  } = params;

  // Only use Next.js supported OpenGraph types
  const ogType: 'website' | 'article' | 'book' | 'profile' = [
    'article',
    'book',
    'profile',
  ].includes(type)
    ? (type as 'article' | 'book' | 'profile')
    : 'website';

  const metadata: Partial<Metadata> = {
    // Open Graph
    openGraph: {
      type: ogType,
      locale,
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      ...(ogType === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },

    // Twitter Card
    twitter: {
      card: twitterCard,
      site: twitterSite,
      creator: twitterCreator,
      title,
      description,
      images: [image],
    },
  };

  return metadata;
}

/**
 * Generate Pinterest-specific meta tags
 */
export function generatePinterestMetadata(params: {
  description: string;
  image: string;
}) {
  return {
    'pinterest:description': params.description,
    'pinterest:media': params.image,
  };
}

/**
 * Generate LinkedIn-specific meta tags
 */
export function generateLinkedInMetadata(params: {
  title: string;
  description: string;
  image: string;
  author?: string;
}) {
  return {
    'linkedin:owner': 'sproutern',
    'linkedin:site': 'sproutern',
    'linkedin:title': params.title,
    'linkedin:description': params.description,
    'linkedin:image': params.image,
    ...(params.author && { 'linkedin:author': params.author }),
  };
}

/**
 * Generate WhatsApp-optimized metadata
 */
export function generateWhatsAppMetadata(params: {
  title: string;
  description: string;
  image: string;
}) {
  // WhatsApp uses Open Graph tags, but with specific optimizations
  return {
    'og:type': 'website',
    'og:title': params.title,
    'og:description': params.description.slice(0, 200), // WhatsApp truncates at ~200 chars
    'og:image': params.image,
    'og:image:width': '1200',
    'og:image:height': '630',
  };
}

/**
 * Generate Telegram-optimized metadata
 */
export function generateTelegramMetadata(params: {
  title: string;
  description: string;
  image: string;
}) {
  return {
    'telegram:channel': '@sproutern',
    'telegram:image': params.image,
  };
}

/**
 * Generate comprehensive social preview data
 */
export function generateAllSocialMetadata(params: SocialMetadataParams) {
  const baseMetadata = generateSocialMetadata(params);
  const pinterestMeta = generatePinterestMetadata({
    description: params.description,
    image: params.image || 'https://sproutern.dpdns.org/opengraph.jpg',
  });
  const linkedInMeta = generateLinkedInMetadata({
    title: params.title,
    description: params.description,
    image: params.image || 'https://sproutern.dpdns.org/opengraph.jpg',
    author: params.author,
  });

  return {
    ...baseMetadata,
    other: {
      ...pinterestMeta,
      ...linkedInMeta,
    },
  };
}

/**
 * Validate social media images
 */
export function validateSocialImage(imageUrl: string): {
  isValid: boolean;
  recommendations: string[];
} {
  const recommendations: string[] = [];

  // Check image format
  const validFormats = ['.jpg', '.jpeg', '.png', '.webp'];
  const hasValidFormat = validFormats.some((format) =>
    imageUrl.toLowerCase().endsWith(format),
  );

  if (!hasValidFormat) {
    recommendations.push(
      'Use JPG, PNG, or WebP format for better compatibility',
    );
  }

  // Recommend dimensions
  recommendations.push(
    'Recommended size: 1200x630px for optimal display across all platforms',
  );
  recommendations.push('File size should be under 5MB for faster loading');
  recommendations.push('Use high-quality images with clear, readable text');

  return {
    isValid: hasValidFormat,
    recommendations,
  };
}
