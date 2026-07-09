/**
 * Image Optimization Component
 * Wrapper around next/image with SEO and performance best practices
 */

'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string; // Make alt required
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  showPlaceholder?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = false,
  loading = 'lazy',
  sizes,
  showPlaceholder = true,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Calculate dimensions based on aspect ratio if not provided
  let computedWidth = width;
  let computedHeight = height;

  if (aspectRatio && width && !height) {
    const [w, h] = aspectRatio.split('/').map(Number);
    computedHeight = Math.round((Number(width) * h) / w);
  }

  // Default sizes if not provided
  const defaultSizes =
    sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Loading state */}
      {isLoading && showPlaceholder && (
        <div
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300"
          style={{ aspectRatio }}
        />
      )}

      {/* Error state */}
      {hasError ? (
        <div
          className="flex items-center justify-center bg-gray-100 text-gray-400"
          style={{
            width: computedWidth,
            height: computedHeight,
            aspectRatio,
          }}
        >
          <span className="text-sm">Image unavailable</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={computedWidth}
          height={computedHeight}
          priority={priority}
          loading={priority ? undefined : loading}
          sizes={defaultSizes}
          quality={85}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          {...props}
        />
      )}
    </div>
  );
}

/**
 * Responsive image with multiple breakpoints
 */
export function ResponsiveImage({
  src,
  alt,
  aspectRatio = '16/9',
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1200}
      aspectRatio={aspectRatio}
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
      className={className}
    />
  );
}

/**
 * Avatar image with fallback
 */
export function AvatarImage({
  src,
  alt,
  size = 40,
  className = '',
}: {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    // Generate avatar with initials
    const initials = alt
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    return (
      <div
        className={`flex items-center justify-center rounded-full bg-indigo-600 font-semibold text-white ${className}`}
        style={{ width: size, height: size, fontSize: size / 2.5 }}
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      onError={() => setHasError(true)}
      showPlaceholder={false}
    />
  );
}

/**
 * Logo image with proper sizing
 */
export function LogoImage({
  src,
  alt = 'Company Logo',
  width = 120,
  height = 40,
  priority = true,
  className = '',
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={className}
    />
  );
}

/**
 * Hero image with optimized loading
 */
export function HeroImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      priority={true}
      sizes="100vw"
      className={className}
    />
  );
}

/**
 * Blog post featured image
 */
export function FeaturedImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1200}
      aspectRatio="16/9"
      priority={false}
      sizes="(max-width: 768px) 100vw, 800px"
      className={`rounded-lg ${className}`}
    />
  );
}
