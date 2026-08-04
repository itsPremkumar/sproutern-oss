/**
 * Tool GEO (Geographic) SEO Optimization
 * Multi-region targeting for tools with localized metadata and utility context
 */

const siteUrl = 'https://sproutern.dpdns.org';

/**
 * Supported regions with tool-specific locale info
 */
export const toolRegions = {
  IN: {
    locale: 'en_IN',
    hreflang: 'en-in',
    countryName: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    taxYear: 'FY 2025-26',
    gradeScale: '10-point CGPA',
  },
  US: {
    locale: 'en_US',
    hreflang: 'en-us',
    countryName: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    taxYear: 'IRS 2025',
    gradeScale: '4.0 GPA',
  },
  GB: {
    locale: 'en_GB',
    hreflang: 'en-gb',
    countryName: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    taxYear: 'HMRC 2025',
    gradeScale: 'Honours Classification',
  },
  AU: {
    locale: 'en_AU',
    hreflang: 'en-au',
    countryName: 'Australia',
    currency: 'AUD',
    currencySymbol: 'A$',
    taxYear: 'ATO 2025',
    gradeScale: '7-point GPA',
  },
  CA: {
    locale: 'en_CA',
    hreflang: 'en-ca',
    countryName: 'Canada',
    currency: 'CAD',
    currencySymbol: 'C$',
    taxYear: 'CRA 2025',
    gradeScale: '4.0/4.33 GPA',
  },
};

export type ToolRegion = keyof typeof toolRegions;

/**
 * Generate hreflang tags for a tool page
 */
export function generateToolHrefLangTags(toolSlug: string): {
  hreflang: string;
  href: string;
}[] {
  const baseUrl = `${siteUrl}/tools/${toolSlug}`;

  const tags = Object.entries(toolRegions).map(([, region]) => ({
    hreflang: region.hreflang,
    href: baseUrl,
  }));

  // Add x-default
  tags.push({
    hreflang: 'x-default',
    href: baseUrl,
  });

  return tags;
}

/**
 * Get region-specific benefits for a tool
 */
export function getToolRegionBenefits(
  toolSlug: string,
  region: ToolRegion = 'IN',
): string[] {
  const regionInfo = toolRegions[region];

  const benefitsMap: Record<string, string[]> = {
    'salary-calculator': [
      `Updated for ${regionInfo.countryName} Tax Rules`,
      `Calculates in ${regionInfo.currency}`,
      `Includes local deduction standards`,
    ],
    'cgpa-converter': [
      `Supports ${regionInfo.countryName} grading systems`,
      `University-specific conversions`,
      `Useful for ${regionInfo.countryName} job applications`,
    ],
    'resume-builder': [
      `Formats accepted by ${regionInfo.countryName} employers`,
      `Experience in local date formats`,
      `Paper size optimized (A4/Letter)`,
    ],
  };

  return (
    benefitsMap[toolSlug] || [
      `Optimized for ${regionInfo.countryName} users`,
      `Fast loading in your region`,
      `Relevant standards and units`,
    ]
  );
}

/**
 * Generate sitemap entry for a tool with geo alternates
 */
export function generateToolSitemapEntry(
  toolSlug: string,
  lastmod: string = new Date().toISOString().split('T')[0],
  changefreq: 'daily' | 'weekly' | 'monthly' = 'weekly',
  priority: string = '0.9',
): string {
  const baseUrl = `${siteUrl}/tools/${toolSlug}`;

  let alternates = '';
  Object.values(toolRegions).forEach((region) => {
    alternates += `\n    <xhtml:link rel="alternate" hreflang="${region.hreflang}" href="${baseUrl}"/>`;
  });
  alternates += `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>`;

  return `<url>
  <loc>${baseUrl}</loc>
  <lastmod>${lastmod}T00:00:00+00:00</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>${alternates}
</url>`;
}
