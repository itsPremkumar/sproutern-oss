/**
 * IndexNow API Implementation
 * Enables instant URL indexing for Bing, Yandex, Seznam, and Naver
 *
 * @see https://www.indexnow.org/
 */

// IndexNow API key - use the existing verified key
const INDEXNOW_KEY =
  process.env.NEXT_PUBLIC_INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY';
const SITE_HOST = 'www.sproutern.com';

interface IndexNowResponse {
  success: boolean;
  message: string;
  submittedUrls?: string[];
  error?: string;
}

interface BatchSubmissionResult {
  engine: string;
  success: boolean;
  status?: number;
  message: string;
}

// All IndexNow-compatible search engines
const SEARCH_ENGINES = [
  { name: 'IndexNow API', endpoint: 'https://api.indexnow.org/indexnow' },
  { name: 'Bing', endpoint: 'https://www.bing.com/indexnow' },
  { name: 'Yandex', endpoint: 'https://yandex.com/indexnow' },
  { name: 'Seznam', endpoint: 'https://search.seznam.cz/indexnow' },
  { name: 'Naver', endpoint: 'https://searchadvisor.naver.com/indexnow' },
];

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrlToIndexNow(
  url: string,
): Promise<IndexNowResponse> {
  try {
    const response = await fetch(
      `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}`,
      { method: 'GET' },
    );

    if (response.ok || response.status === 200 || response.status === 202) {
      return {
        success: true,
        message: 'URL submitted successfully',
        submittedUrls: [url],
      };
    }

    return {
      success: false,
      message: `IndexNow returned status ${response.status}`,
      error: await response.text(),
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit URL',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit multiple URLs to IndexNow (batch submission)
 */
export async function submitUrlsToIndexNow(
  urls: string[],
  endpoint: string = 'https://api.indexnow.org/indexnow',
): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return { success: false, message: 'No URLs provided' };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.slice(0, 10000), // Max 10,000 URLs per request
      }),
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      return {
        success: true,
        message: `${urls.length} URLs submitted successfully`,
        submittedUrls: urls,
      };
    }

    return {
      success: false,
      message: `IndexNow returned status ${response.status}`,
      error: await response.text(),
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to submit URLs',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Submit URLs to all search engines in batches
 */
export async function submitBatchToAllEngines(
  urls: string[],
  batchSize: number = 100,
  onProgress?: (progress: {
    engine: string;
    batch: number;
    totalBatches: number;
    success: boolean;
  }) => void,
): Promise<BatchSubmissionResult[]> {
  const results: BatchSubmissionResult[] = [];
  const batches: string[][] = [];

  // Split URLs into batches
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }

  console.log(`Submitting ${urls.length} URLs in ${batches.length} batches`);

  for (const engine of SEARCH_ENGINES) {
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];

      try {
        const response = await fetch(engine.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            host: SITE_HOST,
            key: INDEXNOW_KEY,
            keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
            urlList: batch,
          }),
        });

        const success =
          response.ok || response.status === 200 || response.status === 202;
        if (success) {
          successCount++;
        } else {
          failCount++;
        }

        onProgress?.({
          engine: engine.name,
          batch: i + 1,
          totalBatches: batches.length,
          success,
        });

        // Small delay between batches to avoid rate limiting
        if (i < batches.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      } catch (error) {
        failCount++;
        onProgress?.({
          engine: engine.name,
          batch: i + 1,
          totalBatches: batches.length,
          success: false,
        });
      }
    }

    results.push({
      engine: engine.name,
      success: successCount > 0,
      message: `${successCount}/${batches.length} batches successful`,
    });

    // Delay between engines
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return results;
}

/**
 * Submit a URL to multiple IndexNow-compatible search engines
 */
export async function submitToAllSearchEngines(url: string): Promise<{
  bing: IndexNowResponse;
  yandex: IndexNowResponse;
  seznam: IndexNowResponse;
  naver: IndexNowResponse;
}> {
  const engines = [
    { name: 'bing', endpoint: 'https://www.bing.com/indexnow' },
    { name: 'yandex', endpoint: 'https://yandex.com/indexnow' },
    { name: 'seznam', endpoint: 'https://search.seznam.cz/indexnow' },
    { name: 'naver', endpoint: 'https://searchadvisor.naver.com/indexnow' },
  ];

  const results: Record<string, IndexNowResponse> = {};

  await Promise.all(
    engines.map(async (engine) => {
      try {
        const response = await fetch(
          `${engine.endpoint}?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}`,
          { method: 'GET' },
        );

        results[engine.name] = {
          success:
            response.ok || response.status === 200 || response.status === 202,
          message: response.ok ? 'Submitted' : `Status ${response.status}`,
          submittedUrls: [url],
        };
      } catch (error) {
        results[engine.name] = {
          success: false,
          message: 'Failed',
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    }),
  );

  return results as {
    bing: IndexNowResponse;
    yandex: IndexNowResponse;
    seznam: IndexNowResponse;
    naver: IndexNowResponse;
  };
}

/**
 * Get all important URLs to submit for indexing
 */
export function getImportantUrls(): string[] {
  const baseUrl = 'https://www.sproutern.com';

  return [
    // High-priority pages
    `${baseUrl}/`,
    `${baseUrl}/tools`,
    `${baseUrl}/tools/cgpa-converter`,
    `${baseUrl}/tools/salary-calculator`,
    `${baseUrl}/tools/gpa-calculator`,
    `${baseUrl}/tools/typing-test`,
    `${baseUrl}/tools/resume-score-checker`,
    `${baseUrl}/blog`,
    `${baseUrl}/internships`,
    `${baseUrl}/resources`,
    `${baseUrl}/games`,
    `${baseUrl}/interview-experiences`,
    `${baseUrl}/off-campus-drives`,
    `${baseUrl}/freshers`,
    `${baseUrl}/college`,
    `${baseUrl}/school`,
    `${baseUrl}/countries`,
    `${baseUrl}/scholarships`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/faq`,
    // Localized pages
    `${baseUrl}/zh/tools/cgpa-converter`,
    `${baseUrl}/zh/tools/salary-calculator`,
    `${baseUrl}/de/tools/cgpa-converter`,
    `${baseUrl}/de/tools/salary-calculator`,
  ];
}

// Export constants for external use
export { INDEXNOW_KEY, SITE_HOST, SEARCH_ENGINES };
