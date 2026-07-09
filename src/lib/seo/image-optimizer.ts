/**
 * Image Optimization Utilities for SEO
 * Handles responsive images, lazy loading, and proper alt text
 */

import { imageOptimizationConfig } from './performance-config';

export interface ImageSEO {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Generate optimized image props for Next.js Image component
 */
export function generateOptimizedImageProps(params: ImageSEO) {
  return {
    src: params.src,
    alt: params.alt,
    ...(params.title && { title: params.title }),
    ...(params.width && { width: params.width }),
    ...(params.height && { height: params.height }),
    loading: params.loading || 'lazy',
    ...(params.priority && { priority: params.priority }),
    ...(params.sizes && { sizes: params.sizes }),
    quality: params.quality || imageOptimizationConfig.quality,
  };
}

/**
 * Generate responsive image srcset
 */
export function generateResponsiveSrcSet(
  baseUrl: string,
  sizes: number[] = [640, 828, 1200, 1920, 2048],
): string {
  return sizes.map((size) => `${baseUrl}?w=${size} ${size}w`).join(', ');
}

/**
 * Generate sizes attribute based on breakpoints
 */
export function generateSizesAttribute(config?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  default?: string;
}): string {
  const defaults = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    default: '100vw',
  };

  const sizes = { ...defaults, ...config };

  return `(max-width: 640px) ${sizes.mobile}, (max-width: 1024px) ${sizes.tablet}, ${sizes.desktop}`;
}

/**
 * Calculate aspect ratio for preventing CLS
 */
export function calculateAspectRatio(width: number, height: number): number {
  return height / width;
}

/**
 * Generate alt text guidelines for images
 */
export const altTextGuidelines = {
  logo: 'Company name + logo',
  profile: 'Person name + role/context',
  screenshot: 'Descriptive text of what screenshot shows',
  diagram: 'Explanation of diagram content and purpose',
  decorative: '', // Empty alt for purely decorative images
  icon: 'Action or meaning the icon represents',
};

/**
 * Validate image has proper SEO attributes
 */
export function validateImageSEO(img: Partial<ImageSEO>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!img.src) {
    errors.push('Image source (src) is required');
  }

  if (!img.alt && img.alt !== '') {
    errors.push('Alt text is required for accessibility and SEO');
  }

  if (img.alt && img.alt.length > 125) {
    errors.push('Alt text should be under 125 characters for optimal SEO');
  }

  if (img.width && img.height) {
    // Good - has dimensions to prevent CLS
  } else {
    errors.push(
      'Width and height should be specified to prevent layout shift (CLS)',
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Generate image sitemap entry
 */
export function generateImageSitemapEntry(params: {
  loc: string; // Page URL
  images: Array<{
    loc: string; // Image URL
    caption?: string;
    title?: string;
    license?: string;
  }>;
}) {
  return {
    loc: params.loc,
    'image:image': params.images.map((img) => ({
      'image:loc': img.loc,
      ...(img.caption && { 'image:caption': img.caption }),
      ...(img.title && { 'image:title': img.title }),
      ...(img.license && { 'image:license': img.license }),
    })),
  };
}

/**
 * Common image CDN transformations
 */
export const imageTransformations = {
  thumbnail: (url: string) => `${url}?w=150&h=150&fit=crop`,
  hero: (url: string) => `${url}?w=1920&h=1080&fit=cover&q=85`,
  card: (url: string) => `${url}?w=400&h=300&fit=cover&q=80`,
  avatar: (url: string) => `${url}?w=96&h=96&fit=crop&q=90`,
  og: (url: string) => `${url}?w=1200&h=630&fit=cover&q=90`,
};

/**
 * Check if image format is modern (WebP/AVIF)
 */
export function isModernImageFormat(url: string): boolean {
  return /\.(webp|avif)$/i.test(url);
}

/**
 * Get optimized image format preference
 */
export function getOptimizedFormatPreference(): string[] {
  return ['image/avif', 'image/webp', 'image/jpeg', 'image/png'];
}

/**
 * Lazy loading observer configuration
 */
export const lazyLoadObserverConfig: IntersectionObserverInit = {
  root: null,
  rootMargin: '50px', // Start loading 50px before entering viewport
  threshold: 0.01,
};

/**
 * Generate blur placeholder data URL for images
 */
export function generateBlurDataURL(
  width: number = 10,
  height: number = 10,
): string {
  const svg = `
 <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
 <rect width="${width}" height="${height}" fill="#f0f0f0"/>
 </svg>
 `;
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Image loading priority rules
 */
export const imageLoadingPriority = {
  // Should load immediately
  critical: ['hero', 'logo', 'above-fold'],
  // Can be lazy loaded
  lazy: ['below-fold', 'carousel', 'gallery', 'card-image'],
  // Prefetch on hover/interaction
  prefetch: ['related-content', 'next-page'],
};
