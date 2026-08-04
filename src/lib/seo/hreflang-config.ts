/**
 * Hreflang Configuration for International SEO
 * Targets worldwide users in key English-speaking markets
 */

export interface HreflangTag {
  hreflang: string;
  href: string;
}

// Base URL for the website
export const BASE_URL = 'https://sproutern.dpdns.org';

// Supported languages and regions
export const SUPPORTED_LOCALES = [
  { hreflang: 'en-US', name: 'English (United States)', region: 'US' },
  { hreflang: 'en-GB', name: 'English (United Kingdom)', region: 'GB' },
  { hreflang: 'en-IN', name: 'English (India)', region: 'IN' },
  { hreflang: 'en-AU', name: 'English (Australia)', region: 'AU' },
  { hreflang: 'en-CA', name: 'English (Canada)', region: 'CA' },
  { hreflang: 'en-SG', name: 'English (Singapore)', region: 'SG' },
  { hreflang: 'en-IE', name: 'English (Ireland)', region: 'IE' },
  { hreflang: 'en-NZ', name: 'English (New Zealand)', region: 'NZ' },
  { hreflang: 'en-ZA', name: 'English (South Africa)', region: 'ZA' },
  { hreflang: 'en-NO', name: 'English (Norway)', region: 'NO' },
  { hreflang: 'en-SE', name: 'English (Sweden)', region: 'SE' },
  { hreflang: 'en-AE', name: 'English (United Arab Emirates)', region: 'AE' },
  {
    hreflang: 'x-default',
    name: 'Default (All Other Regions)',
    region: 'default',
  },
] as const;

/**
 * Generate hreflang tags for a given path
 * @param path - The page path (e.g., '/tools/cgpa-converter')
 * @returns Array of hreflang link objects
 */
export function generateHreflangTags(path: string): HreflangTag[] {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return SUPPORTED_LOCALES.map((locale) => ({
    hreflang: locale.hreflang,
    href: `${BASE_URL}${normalizedPath}`,
  }));
}

/**
 * Generate hreflang alternates for Next.js metadata
 * @param path - The page path
 * @returns Object for use in metadata.alternates.languages
 */
export function generateAlternateLanguages(
  path: string,
): Record<string, string> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return {
    'en-US': `${BASE_URL}${normalizedPath}`,
    'en-GB': `${BASE_URL}${normalizedPath}`,
    'en-IN': `${BASE_URL}${normalizedPath}`,
    'en-AU': `${BASE_URL}${normalizedPath}`,
    'en-CA': `${BASE_URL}${normalizedPath}`,
    'en-SG': `${BASE_URL}${normalizedPath}`,
    'en-IE': `${BASE_URL}${normalizedPath}`,
    'en-NZ': `${BASE_URL}${normalizedPath}`,
    'en-ZA': `${BASE_URL}${normalizedPath}`,
    'x-default': `${BASE_URL}${normalizedPath}`,
  };
}

/**
 * Get geo-targeted metadata for specific regions
 */
export const GEO_TARGETED_CONTENT = {
  IN: {
    currency: 'INR',
    currencySymbol: '₹',
    phonePrefix: '+91',
    primaryLanguage: 'en-IN',
    popularSearchTerms: [
      'internships in India',
      'CGPA to percentage',
      'TCS interview questions',
      'off campus drives',
      'fresher jobs India',
    ],
  },
  US: {
    currency: 'USD',
    currencySymbol: '$',
    phonePrefix: '+1',
    primaryLanguage: 'en-US',
    popularSearchTerms: [
      'internships near me',
      'GPA calculator',
      'resume tips',
      'entry level jobs',
      'career guidance',
    ],
  },
  GB: {
    currency: 'GBP',
    currencySymbol: '£',
    phonePrefix: '+44',
    primaryLanguage: 'en-GB',
    popularSearchTerms: [
      'graduate schemes UK',
      'internships London',
      'CV writing tips',
      'graduate jobs',
      'placement year',
    ],
  },
  AU: {
    currency: 'AUD',
    currencySymbol: 'A$',
    phonePrefix: '+61',
    primaryLanguage: 'en-AU',
    popularSearchTerms: [
      'internships Australia',
      'graduate programs',
      'ATAR calculator',
      'career advice',
      'student jobs',
    ],
  },
  CA: {
    currency: 'CAD',
    currencySymbol: 'C$',
    phonePrefix: '+1',
    primaryLanguage: 'en-CA',
    popularSearchTerms: [
      'internships Canada',
      'co-op programs',
      'GPA conversion',
      'entry level jobs Canada',
      'student work permits',
    ],
  },
  SG: {
    currency: 'SGD',
    currencySymbol: 'S$',
    phonePrefix: '+65',
    primaryLanguage: 'en-SG',
    popularSearchTerms: [
      'internships Singapore',
      'graduate jobs Singapore',
      'NUS NTU internships',
      'career guidance Singapore',
      'resume tips Singapore',
    ],
  },
  ZA: {
    currency: 'ZAR',
    currencySymbol: 'R',
    phonePrefix: '+27',
    primaryLanguage: 'en-ZA',
    popularSearchTerms: [
      'internships South Africa',
      'graduate programs South Africa',
      'learnerships',
      'career guidance Johannesburg',
      'student jobs Cape Town',
    ],
  },
  NO: {
    currency: 'NOK',
    currencySymbol: 'kr',
    phonePrefix: '+47',
    primaryLanguage: 'en-NO',
    popularSearchTerms: [
      'study in Norway',
      'free tuition Norway',
      'NTNU admissions',
      'work in Norway',
      'Norwegian student visa',
    ],
  },
  SE: {
    currency: 'SEK',
    currencySymbol: 'kr',
    phonePrefix: '+46',
    primaryLanguage: 'en-SE',
    popularSearchTerms: [
      'study in Sweden',
      'KTH admissions',
      'work in Sweden',
      'Swedish Institute scholarship',
      'Lund University',
    ],
  },
  AE: {
    currency: 'AED',
    currencySymbol: 'د.إ',
    phonePrefix: '+971',
    primaryLanguage: 'en-AE',
    popularSearchTerms: [
      'study in Dubai',
      'work in UAE',
      'tax-free salary UAE',
      'Golden Visa UAE',
      'jobs in Abu Dhabi',
    ],
  },
} as const;

/**
 * Regional-specific SEO keywords
 */
export const REGIONAL_KEYWORDS = {
  global: [
    'internships',
    'career guidance',
    'resume builder',
    'interview preparation',
    'job search',
    'student careers',
    'entry level jobs',
  ],
  IN: [
    'internships India',
    'fresher jobs',
    'off campus drives',
    'TCS Infosys Wipro',
    'campus placements',
    'CGPA calculator',
    'MNC interview questions',
  ],
  US: [
    'internships USA',
    'summer internships',
    'career services',
    'GPA calculator',
    'job fair tips',
    'networking events',
    'entry level positions',
  ],
  GB: [
    'internships UK',
    'graduate schemes',
    'placement year',
    'CV tips',
    'assessment centre',
    'graduate jobs London',
    'work experience UK',
  ],
  AU: [
    'internships Australia',
    'graduate programs Australia',
    'vacation work',
    'cadetships',
    'student jobs Australia',
    'internship programs Sydney Melbourne',
  ],
  CA: [
    'internships Canada',
    'co-op programs',
    'Canadian internships',
    'student work permit',
    'entry level jobs Toronto Vancouver',
  ],
  SG: [
    'internships Singapore',
    'graduate jobs Singapore',
    'management trainee Singapore',
    'internship NUS NTU SMU',
  ],
  NO: [
    'study Norway free',
    'NTNU international students',
    'work permit Norway',
    'Norwegian universities',
    'Bergen Oslo Trondheim jobs',
  ],
  SE: [
    'study Sweden',
    'KTH Lund Stockholm',
    'Swedish work permit',
    'Sweden scholarships',
    'post-study work Sweden',
  ],
  AE: [
    'Dubai internships',
    'UAE jobs tax-free',
    'Golden Visa students',
    'Abu Dhabi universities',
    'Emirates careers',
  ],
};
