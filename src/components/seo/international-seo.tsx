'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Extended country currency and locale mapping for 16+ countries
const COUNTRY_CONFIG: Record<
  string,
  { currency: string; currencySymbol: string; locale: string; name: string }
> = {
  // Priority countries based on analytics (Germany, India, USA, China, Australia, etc.)
  DE: {
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'de-DE',
    name: 'Germany',
  },
  IN: { currency: 'INR', currencySymbol: '₹', locale: 'en-IN', name: 'India' },
  US: {
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
    name: 'United States',
  },
  CN: { currency: 'CNY', currencySymbol: '¥', locale: 'zh-CN', name: 'China' },
  AU: {
    currency: 'AUD',
    currencySymbol: 'A$',
    locale: 'en-AU',
    name: 'Australia',
  },
  CH: {
    currency: 'CHF',
    currencySymbol: 'CHF',
    locale: 'de-CH',
    name: 'Switzerland',
  },
  IE: {
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'en-IE',
    name: 'Ireland',
  },
  SE: {
    currency: 'SEK',
    currencySymbol: 'kr',
    locale: 'sv-SE',
    name: 'Sweden',
  },
  GB: {
    currency: 'GBP',
    currencySymbol: '£',
    locale: 'en-GB',
    name: 'United Kingdom',
  },
  CA: {
    currency: 'CAD',
    currencySymbol: 'C$',
    locale: 'en-CA',
    name: 'Canada',
  },
  SG: {
    currency: 'SGD',
    currencySymbol: 'S$',
    locale: 'en-SG',
    name: 'Singapore',
  },
  NL: {
    currency: 'EUR',
    currencySymbol: '€',
    locale: 'nl-NL',
    name: 'Netherlands',
  },
  FR: { currency: 'EUR', currencySymbol: '€', locale: 'fr-FR', name: 'France' },
  JP: { currency: 'JPY', currencySymbol: '¥', locale: 'ja-JP', name: 'Japan' },
  GH: { currency: 'GHS', currencySymbol: '₵', locale: 'en-GH', name: 'Ghana' },
  AE: { currency: 'AED', currencySymbol: 'د.إ', locale: 'ar-AE', name: 'UAE' },
  KR: {
    currency: 'KRW',
    currencySymbol: '₩',
    locale: 'ko-KR',
    name: 'South Korea',
  },
  HK: {
    currency: 'HKD',
    currencySymbol: 'HK$',
    locale: 'zh-HK',
    name: 'Hong Kong',
  },
  NZ: {
    currency: 'NZD',
    currencySymbol: 'NZ$',
    locale: 'en-NZ',
    name: 'New Zealand',
  },
  NO: {
    currency: 'NOK',
    currencySymbol: 'kr',
    locale: 'no-NO',
    name: 'Norway',
  },
  DK: {
    currency: 'DKK',
    currencySymbol: 'kr',
    locale: 'da-DK',
    name: 'Denmark',
  },
};

// All supported hreflang values for comprehensive international SEO
const HREFLANG_VALUES = [
  'en-DE',
  'de-DE', // Germany
  'en-IN',
  'hi-IN', // India
  'en-US', // USA
  'zh-CN', // China
  'en-AU', // Australia
  'en-CH',
  'de-CH', // Switzerland
  'en-IE', // Ireland
  'en-SE',
  'sv-SE', // Sweden
  'en-GB', // UK
  'en-CA',
  'fr-CA', // Canada
  'en-SG',
  'zh-SG', // Singapore
  'en-NL',
  'nl-NL', // Netherlands
  'en-FR',
  'fr-FR', // France
  'en-JP',
  'ja-JP', // Japan
  'en-GH', // Ghana
  'en-AE',
  'ar-AE', // UAE
  'en-KR',
  'ko-KR', // South Korea
  'en-HK',
  'zh-HK', // Hong Kong
  'x-default', // Default fallback
];

/**
 * Detect user's region based on browser settings
 */
function detectUserRegion(): string {
  if (typeof window === 'undefined') return 'en-US';

  const userLang = navigator.language || 'en-US';
  return userLang;
}

/**
 * Get country code from locale
 */
function getCountryFromLocale(locale: string): string {
  const parts = locale.split('-');
  if (parts.length > 1) {
    return parts[1].toUpperCase();
  }
  // Map language to common country
  const langToCountry: Record<string, string> = {
    en: 'US',
    de: 'DE',
    zh: 'CN',
    ja: 'JP',
    ko: 'KR',
    fr: 'FR',
    nl: 'NL',
    sv: 'SE',
    no: 'NO',
    da: 'DK',
    ar: 'AE',
  };
  return langToCountry[parts[0]] || 'US';
}

/**
 * Get currency symbol for country
 */
function getCurrencySymbol(country: string): string {
  return COUNTRY_CONFIG[country]?.currencySymbol || '$';
}

/**
 * Get country name
 */
function getCountryName(country: string): string {
  return COUNTRY_CONFIG[country]?.name || 'International';
}

interface InternationalSEOProps {
  /** Enable geo-targeted content hints */
  enableGeoHints?: boolean;
  /** Custom region override */
  region?: string;
  /** Enable China-specific optimizations */
  enableChinaSEO?: boolean;
}

/**
 * Enhanced International SEO Component
 *
 * Provides:
 * - Region detection for 16+ countries
 * - Currency display optimization
 * - Geo-targeted content hints
 * - International schema markup
 * - China/Baidu specific optimizations
 */
export function InternationalSEO({
  enableGeoHints = true,
  region: customRegion,
  enableChinaSEO = true,
}: InternationalSEOProps) {
  const [userRegion, setUserRegion] = useState<string>('en-US');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const detected = customRegion || detectUserRegion();
    setUserRegion(detected);
  }, [customRegion]);

  if (!isClient) return null;

  const country = getCountryFromLocale(userRegion);
  const currencySymbol = getCurrencySymbol(country);
  const countryName = getCountryName(country);
  const isChina = country === 'CN';

  // Generate geo-targeted schema
  const geoSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.sproutern.com/#website',
    name: 'Sproutern',
    url: 'https://www.sproutern.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.sproutern.com/internships?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: userRegion.split('-')[0],
    areaServed: {
      '@type': 'Country',
      name: countryName,
    },
  };

  // Comprehensive area served for global reach
  const globalReachSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://www.sproutern.com/#global-reach',
    name: 'Sproutern',
    areaServed: [
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'China' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'Sweden' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Japan' },
      { '@type': 'Country', name: 'Ghana' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    availableLanguage: [
      'English',
      'German',
      'Chinese',
      'Japanese',
      'French',
      'Dutch',
      'Swedish',
    ],
  };

  return (
    <>
      {/* Geo-targeted Schema */}
      <Script
        id="geo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoSchema) }}
        strategy="afterInteractive"
      />

      {/* Global Reach Schema */}
      <Script
        id="global-reach-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalReachSchema) }}
        strategy="afterInteractive"
      />

      {/* China-specific Baidu optimization */}
      {enableChinaSEO && isChina && (
        <>
          <meta
            name="applicable-device"
            content="pc,mobile"
          />
          <meta
            name="mobile-agent"
            content="format=xhtml; url=https://www.sproutern.com"
          />
        </>
      )}

      {/* Hidden data attributes for client-side personalization */}
      {enableGeoHints && (
        <div
          id="international-seo-data"
          data-region={userRegion}
          data-currency={currencySymbol}
          data-country={country}
          data-country-name={countryName}
          style={{ display: 'none' }}
          aria-hidden="true"
        />
      )}
    </>
  );
}

/**
 * Hook to get international SEO data
 */
export function useInternationalSEO() {
  const [data, setData] = useState<{
    region: string;
    currency: string;
    country: string;
    countryName: string;
  }>({
    region: 'en-US',
    currency: '$',
    country: 'US',
    countryName: 'United States',
  });

  useEffect(() => {
    const region = detectUserRegion();
    const country = getCountryFromLocale(region);
    const currency = getCurrencySymbol(country);
    const countryName = getCountryName(country);

    setData({ region, currency, country, countryName });
  }, []);

  return data;
}

/**
 * Get all hreflang values for sitemap/metadata
 */
export function getAllHreflangValues(): string[] {
  return HREFLANG_VALUES;
}

/**
 * Get country config
 */
export function getCountryConfig() {
  return COUNTRY_CONFIG;
}

export default InternationalSEO;
