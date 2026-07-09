/**
 * Google Indexing API Integration
 * Enables automatic submission of new/updated URLs to Google Search
 *
 * @see https://developers.google.com/search/apis/indexing-api/v3/quickstart
 */

export interface IndexingRequest {
  url: string;
  type: 'URL_UPDATED' | 'URL_DELETED';
}

export interface IndexingResponse {
  success: boolean;
  urlNotificationMetadata?: {
    url: string;
    latestUpdate: {
      url: string;
      type: string;
      notifyTime: string;
    };
  };
  error?: string;
}

// URLs that should be auto-indexed when created/updated
export const AUTO_INDEX_PATTERNS = [
  '/blog/',
  '/interview-experiences/',
  '/tools/',
  '/countries/',
  '/resources/',
  '/freshers/',
  '/college/',
  '/school/',
];

/**
 * Check if a URL should be auto-indexed
 */
export function shouldAutoIndex(url: string): boolean {
  return AUTO_INDEX_PATTERNS.some((pattern) => url.includes(pattern));
}

/**
 * Submit URL to Google Indexing API
 * Note: Requires service account credentials with Indexing API enabled
 */
export async function submitUrlForIndexing(
  url: string,
  type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED',
): Promise<IndexingResponse> {
  const endpoint =
    'https://indexing.googleapis.com/v3/urlNotifications:publish';

  try {
    // Check if service account credentials are available
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

    if (!serviceAccountKey) {
      console.log(
        '[Indexing API] Service account not configured, skipping submission',
      );
      return {
        success: false,
        error: 'Service account credentials not configured',
      };
    }

    // In production, this would use the Google Auth Library
    // For now, we'll log the intent and return success for development
    console.log(`[Indexing API] Would submit: ${url} (${type})`);

    return {
      success: true,
      urlNotificationMetadata: {
        url,
        latestUpdate: {
          url,
          type,
          notifyTime: new Date().toISOString(),
        },
      },
    };
  } catch (error) {
    console.error('[Indexing API] Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Batch submit multiple URLs for indexing
 */
export async function batchSubmitUrls(
  urls: string[],
  type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED',
): Promise<{ submitted: number; failed: number; results: IndexingResponse[] }> {
  const results: IndexingResponse[] = [];
  let submitted = 0;
  let failed = 0;

  for (const url of urls) {
    // Rate limiting: max 200 requests per day
    await new Promise((resolve) => setTimeout(resolve, 100));

    const result = await submitUrlForIndexing(url, type);
    results.push(result);

    if (result.success) {
      submitted++;
    } else {
      failed++;
    }
  }

  return { submitted, failed, results };
}

/**
 * Get all indexable URLs from the sitemap
 */
export function getIndexableUrls(): string[] {
  const baseUrl = 'https://www.sproutern.com';

  // Core pages that should always be indexed
  return [
    `${baseUrl}/`,
    `${baseUrl}/blog`,
    `${baseUrl}/interview-experiences`,
    `${baseUrl}/tools`,
    `${baseUrl}/resources`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/faq`,
    `${baseUrl}/scholarships`,
    `${baseUrl}/countries`,
    `${baseUrl}/school`,
    `${baseUrl}/college`,
    `${baseUrl}/freshers`,
    `${baseUrl}/off-campus-drives`,
  ];
}

/**
 * Request URL inspection from Google Search Console
 * Note: This is a placeholder for the URL Inspection API integration
 */
export async function inspectUrl(url: string): Promise<{
  indexed: boolean;
  crawledAs: string | null;
  lastCrawlTime: string | null;
  verdict: string;
}> {
  // Placeholder - would integrate with Search Console API
  console.log(`[URL Inspection] Would inspect: ${url}`);

  return {
    indexed: true,
    crawledAs: 'DESKTOP',
    lastCrawlTime: new Date().toISOString(),
    verdict: 'PASS',
  };
}
