/**
 * Sitemap Parser for IndexNow
 * Parses all XML sitemaps to extract URLs for submission
 */

import * as fs from 'fs';
import * as path from 'path';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  priority?: string;
}

/**
 * Parse a single sitemap XML file and extract URLs
 */
export function parseSitemapXml(xmlContent: string): string[] {
  const urls: string[] = [];

  // Extract <loc>...</loc> tags using regex (simple XML parsing)
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;

  while ((match = locRegex.exec(xmlContent)) !== null) {
    const url = match[1].trim();
    // Only include actual page URLs, not sitemap references
    if (url && !url.endsWith('.xml')) {
      urls.push(url);
    }
  }

  return urls;
}

/**
 * Parse sitemap index to get all sitemap URLs
 */
export function parseSitemapIndex(xmlContent: string): string[] {
  const sitemapUrls: string[] = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;

  while ((match = locRegex.exec(xmlContent)) !== null) {
    const url = match[1].trim();
    if (url.endsWith('.xml')) {
      sitemapUrls.push(url);
    }
  }

  return sitemapUrls;
}

/**
 * Get all sitemap files from public directory
 */
export function getSitemapFiles(publicDir: string): string[] {
  const sitemapFiles: string[] = [];

  try {
    const files = fs.readdirSync(publicDir);
    for (const file of files) {
      if (file.startsWith('sitemap') && file.endsWith('.xml')) {
        sitemapFiles.push(path.join(publicDir, file));
      }
    }
  } catch (error) {
    console.error('Error reading public directory:', error);
  }

  return sitemapFiles;
}

/**
 * Parse all sitemaps and return all unique URLs
 */
export function getAllUrlsFromSitemaps(publicDir: string): string[] {
  const allUrls = new Set<string>();
  const sitemapFiles = getSitemapFiles(publicDir);

  console.log(`Found ${sitemapFiles.length} sitemap files`);

  for (const sitemapFile of sitemapFiles) {
    try {
      const content = fs.readFileSync(sitemapFile, 'utf-8');
      const urls = parseSitemapXml(content);
      console.log(`  ${path.basename(sitemapFile)}: ${urls.length} URLs`);

      for (const url of urls) {
        allUrls.add(url);
      }
    } catch (error) {
      console.error(`Error parsing ${sitemapFile}:`, error);
    }
  }

  const uniqueUrls = Array.from(allUrls);
  console.log(`Total unique URLs: ${uniqueUrls.length}`);

  return uniqueUrls;
}

/**
 * Fetch and parse a remote sitemap
 */
export async function fetchAndParseSitemap(url: string): Promise<string[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const content = await response.text();
    return parseSitemapXml(content);
  } catch (error) {
    console.error(`Error fetching sitemap ${url}:`, error);
    return [];
  }
}

/**
 * Fetch all URLs from remote sitemaps
 */
export async function getAllUrlsFromRemoteSitemaps(
  baseUrl: string = 'https://www.sproutern.com',
): Promise<string[]> {
  const allUrls = new Set<string>();

  const sitemaps = [
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/sitemap-static.xml`,
    `${baseUrl}/sitemap-blog.xml`,
    `${baseUrl}/sitemap-education.xml`,
    `${baseUrl}/sitemap-interviews.xml`,
    `${baseUrl}/sitemap-companies.xml`,
    `${baseUrl}/sitemap-india.xml`,
    `${baseUrl}/sitemap-tools.xml`,
    `${baseUrl}/sitemap-resources.xml`,
    `${baseUrl}/sitemap-countries.xml`,
    `${baseUrl}/sitemap-games.xml`,
    `${baseUrl}/sitemap-full-updated.xml`,
  ];

  console.log(`Fetching ${sitemaps.length} sitemaps...`);

  for (const sitemap of sitemaps) {
    const urls = await fetchAndParseSitemap(sitemap);
    console.log(`  ${sitemap.split('/').pop()}: ${urls.length} URLs`);

    for (const url of urls) {
      allUrls.add(url);
    }
  }

  const uniqueUrls = Array.from(allUrls);
  console.log(`Total unique URLs: ${uniqueUrls.length}`);

  return uniqueUrls;
}
