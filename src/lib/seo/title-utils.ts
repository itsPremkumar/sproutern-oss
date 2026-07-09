/**
 * SEO Title Utilities
 * Ensures titles are within 70 character limit for optimal SEO
 */

const MAX_TITLE_LENGTH = 70;
const BRAND_SUFFIX = ' | Sproutern';
const BRAND_SUFFIX_LENGTH = BRAND_SUFFIX.length; // 12 chars

/**
 * Creates an SEO-optimized title that stays within 70 characters
 * @param title - The main title content
 * @param includesBrand - Whether the title already includes the brand suffix
 * @returns Formatted title within 70 characters
 */
export function formatSEOTitle(title: string, includesBrand = false): string {
  if (includesBrand) {
    if (title.length <= MAX_TITLE_LENGTH) {
      return title;
    }
    // Truncate at word boundary
    const truncated = title.substring(0, MAX_TITLE_LENGTH - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 20
      ? truncated.substring(0, lastSpace) + '...'
      : truncated + '...';
  }

  const maxContentLength = MAX_TITLE_LENGTH - BRAND_SUFFIX_LENGTH;

  if (title.length <= maxContentLength) {
    return title + BRAND_SUFFIX;
  }

  // Truncate at word boundary and add ellipsis
  const truncated = title.substring(0, maxContentLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  const finalTitle =
    lastSpace > 15
      ? truncated.substring(0, lastSpace) + '...'
      : truncated + '...';

  return finalTitle + BRAND_SUFFIX;
}

/**
 * Creates a short title format for dynamic pages
 * @param parts - Array of title parts to join
 * @param separator - Separator between parts (default: ' - ')
 * @returns Formatted title within 70 characters
 */
export function createShortTitle(parts: string[], separator = ' - '): string {
  let title = parts.filter(Boolean).join(separator);

  if (title.length + BRAND_SUFFIX_LENGTH <= MAX_TITLE_LENGTH) {
    return title + BRAND_SUFFIX;
  }

  // Try removing parts from the end until it fits
  while (
    parts.length > 1 &&
    title.length + BRAND_SUFFIX_LENGTH > MAX_TITLE_LENGTH
  ) {
    parts.pop();
    title = parts.filter(Boolean).join(separator);
  }

  // If still too long, truncate
  if (title.length + BRAND_SUFFIX_LENGTH > MAX_TITLE_LENGTH) {
    return formatSEOTitle(title);
  }

  return title + BRAND_SUFFIX;
}

/**
 * Validates if a title is within SEO limits
 * @param title - Title to validate
 * @returns Object with isValid and character count
 */
export function validateTitle(title: string): {
  isValid: boolean;
  length: number;
  overflow: number;
} {
  const length = title.length;
  return {
    isValid: length <= MAX_TITLE_LENGTH,
    length,
    overflow: Math.max(0, length - MAX_TITLE_LENGTH),
  };
}
