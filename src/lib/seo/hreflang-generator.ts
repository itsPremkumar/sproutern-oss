/**
 * Dynamic Hreflang Generator for International SEO
 * Automatically generates hreflang tags for all supported regions
 */

export interface HreflangConfig {
  regions: Array<{
    lang: string; // e.g., "en-US", "en-GB", "en-IN"
    url: string;
  }>;
  defaultLang?: string; // x-default hreflang
}

// Supported regions for Sproutern - Expanded for International SEO
export const SUPPORTED_REGIONS = [
  // English-speaking regions
  { code: 'en-US', name: 'United States', currency: 'USD' },
  { code: 'en-GB', name: 'United Kingdom', currency: 'GBP' },
  { code: 'en-IN', name: 'India', currency: 'INR' },
  { code: 'en-AU', name: 'Australia', currency: 'AUD' },
  { code: 'en-CA', name: 'Canada', currency: 'CAD' },
  { code: 'en-SG', name: 'Singapore', currency: 'SGD' },
  { code: 'en-IE', name: 'Ireland', currency: 'EUR' },
  { code: 'en-NZ', name: 'New Zealand', currency: 'NZD' },
  { code: 'en-ZA', name: 'South Africa', currency: 'ZAR' },
  { code: 'en-PH', name: 'Philippines', currency: 'PHP' },
  { code: 'en-MY', name: 'Malaysia', currency: 'MYR' },
  { code: 'en-NG', name: 'Nigeria', currency: 'NGN' },
  { code: 'en-KE', name: 'Kenya', currency: 'KES' },
  { code: 'en-AE', name: 'United Arab Emirates', currency: 'AED' },
  // European markets (English content with regional targeting)
  { code: 'en-DE', name: 'Germany', currency: 'EUR' },
  { code: 'en-FR', name: 'France', currency: 'EUR' },
  { code: 'en-NL', name: 'Netherlands', currency: 'EUR' },
  { code: 'en-SE', name: 'Sweden', currency: 'SEK' },
  { code: 'en-CH', name: 'Switzerland', currency: 'CHF' },
  // Asian markets
  { code: 'en-JP', name: 'Japan', currency: 'JPY' },
  { code: 'en-KR', name: 'South Korea', currency: 'KRW' },
  { code: 'en-HK', name: 'Hong Kong', currency: 'HKD' },
] as const;

/**
 * Generate hreflang configurations for a given path
 */
export function generateHreflangTags(
  pathname: string,
  baseUrl: string = 'https://sproutern.dpdns.org',
): HreflangConfig {
  const regions = SUPPORTED_REGIONS.map((region) => ({
    lang: region.code,
    url: `${baseUrl}${pathname}`,
  }));

  return {
    regions,
    defaultLang: `${baseUrl}${pathname}`,
  };
}

/**
 * Generate hreflang link tags as HTML string
 */
export function generateHreflangHTML(
  pathname: string,
  baseUrl?: string,
): string {
  const config = generateHreflangTags(pathname, baseUrl);

  let html = '';

  // Add region-specific hreflang tags
  config.regions.forEach((region) => {
    html += `<link rel="alternate" hreflang="${region.lang}" href="${region.url}" />\n`;
  });

  // Add x-default
  if (config.defaultLang) {
    html += `<link rel="alternate" hreflang="x-default" href="${config.defaultLang}" />\n`;
  }

  return html;
}

/**
 * Generate hreflang tags as React link elements for Next.js metadata
 */
export function generateHreflangMetadata(pathname: string, baseUrl?: string) {
  const config = generateHreflangTags(pathname, baseUrl);

  const languages: Record<string, string> = {};

  config.regions.forEach((region) => {
    languages[region.lang] = region.url;
  });

  if (config.defaultLang) {
    languages['x-default'] = config.defaultLang;
  }

  return {
    languages,
  };
}

/**
 * Get user's preferred region based on various signals
 */
export function detectUserRegion(): string {
  // Server-side: use accept-language header or IP geolocation
  // Client-side: use navigator.language
  if (typeof window !== 'undefined') {
    const userLang = navigator.language;

    // Check if the user's language matches any supported region
    const matchedRegion = SUPPORTED_REGIONS.find(
      (region) =>
        region.code === userLang ||
        region.code.startsWith(userLang.split('-')[0]),
    );

    return matchedRegion?.code || 'en-US';
  }

  return 'en-US'; // Default
}

/**
 * Generate sitemap with hreflang annotations
 */
export interface SitemapUrl {
  url: string;
  lastModified?: Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
  alternates?: {
    languages: Record<string, string>;
  };
}

export function generateSitemapWithHreflang(
  paths: string[],
  baseUrl: string = 'https://sproutern.dpdns.org',
): SitemapUrl[] {
  return paths.map((path) => {
    const hreflangMetadata = generateHreflangMetadata(path, baseUrl);

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      alternates: hreflangMetadata,
    };
  });
}

/**
 * Generate comprehensive language selector data
 */
export function getLanguageSelectorData() {
  return SUPPORTED_REGIONS.map((region) => ({
    code: region.code,
    name: region.name,
    flag: getCountryFlag(region.code),
    currency: region.currency,
  }));
}

function getCountryFlag(langCode: string): string {
  const countryCode = langCode.split('-')[1];

  const flagEmojis: Record<string, string> = {
    US: '🇺🇸',
    GB: '🇬🇧',
    IN: '🇮🇳',
    AU: '🇦🇺',
    CA: '🇨🇦',
    SG: '🇸🇬',
    IE: '🇮🇪',
    NZ: '🇳🇿',
    ZA: '🇿🇦',
    PH: '🇵🇭',
    MY: '🇲🇾',
    NG: '🇳🇬',
    KE: '🇰🇪',
    AE: '🇦🇪',
    DE: '🇩🇪',
    FR: '🇫🇷',
    NL: '🇳🇱',
    SE: '🇸🇪',
    CH: '🇨🇭',
    JP: '🇯🇵',
    KR: '🇰🇷',
    HK: '🇭🇰',
  };

  return flagEmojis[countryCode] || '🌍';
}
