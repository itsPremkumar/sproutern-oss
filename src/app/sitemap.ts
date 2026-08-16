import { MetadataRoute } from 'next';

/**
 * Sitemap Index — references all working static sub-sitemaps.
 *
 * WHY THIS EXISTS:
 * The static sitemaps in /public/ are correctly generated with all URLs.
 * However, Next.js dynamic sitemap at /sitemap.xml shadows the static one.
 * This file serves as a sitemap index so Google Search Console sees a valid
 * sitemap with all URLs, not an empty one.
 *
 * The static sub-sitemaps (public/*.xml) contain the actual URLs.
 * This file just points to them.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sproutern.dpdns.org';
  const lastmod = new Date().toISOString();

  return [
    { url: `${baseUrl}/sitemap-static.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/sitemap-blog.xml`, lastModified: lastmod, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/sitemap-games.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/sitemap-tools.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/sitemap-education.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/sitemap-interviews.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/sitemap-companies.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/sitemap-india.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/sitemap-resources.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/sitemap-countries.xml`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/sitemap-images.xml`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
