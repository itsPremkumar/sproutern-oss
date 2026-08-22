/**
 * IndexNow Full Website Submission Script
 * Submits ALL URLs from sitemaps to IndexNow-compatible search engines
 *
 * Usage: npm run indexnow
 *
 * Supported Search Engines:
 * - Bing (www.bing.com)
 * - Yandex (yandex.com)
 * - Seznam (search.seznam.cz)
 * - Naver (searchadvisor.naver.com)
 */

import * as fs from 'fs';
import * as path from 'path';

// Configuration
const DOMAIN = 'https://sproutern.dpdns.org';
const API_KEY = process.env.INDEXNOW_KEY || 'f4325fa0cf0e4ff0917492aa74b43e6e'; // matches public/f4325fa0cf0e4ff0917492aa74b43e6e.txt
const KEY_LOCATION = `${DOMAIN}/${API_KEY}.txt`;
const BATCH_SIZE = 100;
const DELAY_BETWEEN_BATCHES_MS = 1000;
const DELAY_BETWEEN_ENGINES_MS = 2000;

// ALL Search engines that support IndexNow (Complete List 2026)
const SEARCH_ENGINES = [
  // Primary IndexNow API (shares with all engines automatically)
  { name: 'IndexNow API', endpoint: 'https://api.indexnow.org/indexnow' },
  // Microsoft Bing (Global)
  { name: 'Bing', endpoint: 'https://www.bing.com/indexnow' },
  // Yandex (Russia, CIS countries)
  { name: 'Yandex', endpoint: 'https://yandex.com/indexnow' },
  // Seznam (Czech Republic - 2nd largest search engine there)
  { name: 'Seznam', endpoint: 'https://search.seznam.cz/indexnow' },
  // Naver (South Korea - largest search engine there)
  { name: 'Naver', endpoint: 'https://searchadvisor.naver.com/indexnow' },
  // Yep (Privacy-focused search engine by Ahrefs)
  { name: 'Yep', endpoint: 'https://indexnow.yep.com/indexnow' },
];

/**
 * Parse XML sitemap and extract URLs
 */
function parseSitemapXml(xmlContent: string): string[] {
  const urls: string[] = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;

  while ((match = locRegex.exec(xmlContent)) !== null) {
    const url = match[1].trim();
    if (url && !url.endsWith('.xml')) {
      urls.push(url);
    }
  }

  return urls;
}

/**
 * Get all URLs from local sitemap files
 */
function getAllUrlsFromSitemaps(): string[] {
  const publicDir = path.join(__dirname, '..', 'public');
  const allUrls = new Set<string>();

  console.log('\n📁 Reading sitemap files from:', publicDir);
  console.log('─'.repeat(50));

  try {
    const files = fs.readdirSync(publicDir);
    const sitemapFiles = files.filter(
      (f) => f.startsWith('sitemap') && f.endsWith('.xml'),
    );

    for (const file of sitemapFiles) {
      const filePath = path.join(publicDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const urls = parseSitemapXml(content);
      console.log(`  📄 ${file}: ${urls.length} URLs`);

      for (const url of urls) {
        allUrls.add(url);
      }
    }
  } catch (error) {
    console.error('❌ Error reading sitemaps:', error);
  }

  const uniqueUrls = Array.from(allUrls);
  console.log('─'.repeat(50));
  console.log(`📊 Total unique URLs: ${uniqueUrls.length}`);

  return uniqueUrls;
}

/**
 * Submit batch of URLs to a search engine
 */
async function submitBatch(
  urls: string[],
  endpoint: string,
): Promise<{ success: boolean; status: number }> {
  const payload = {
    host: 'sproutern.dpdns.org',
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return {
      success:
        response.ok || response.status === 200 || response.status === 202,
      status: response.status,
    };
  } catch (error) {
    return { success: false, status: 0 };
  }
}

/**
 * Submit all URLs to all search engines
 */
async function submitToAllEngines(urls: string[]): Promise<void> {
  // Create batches
  const batches: string[][] = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }

  console.log(
    `\n📦 Split into ${batches.length} batches of ${BATCH_SIZE} URLs`,
  );

  for (const engine of SEARCH_ENGINES) {
    console.log(`\n🔄 Submitting to ${engine.name}...`);
    console.log('─'.repeat(50));

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      const result = await submitBatch(batch, engine.endpoint);

      if (result.success) {
        successCount++;
        process.stdout.write(
          `  ✅ Batch ${i + 1}/${batches.length} (${batch.length} URLs) - OK\n`,
        );
      } else {
        failCount++;
        process.stdout.write(
          `  ❌ Batch ${i + 1}/${batches.length} - HTTP ${result.status}\n`,
        );
      }

      // Delay between batches
      if (i < batches.length - 1) {
        await new Promise((resolve) =>
          setTimeout(resolve, DELAY_BETWEEN_BATCHES_MS),
        );
      }
    }

    console.log('─'.repeat(50));
    console.log(
      `  📊 ${engine.name}: ${successCount}/${batches.length} batches successful`,
    );

    // Delay between engines
    if (SEARCH_ENGINES.indexOf(engine) < SEARCH_ENGINES.length - 1) {
      console.log(
        `  ⏳ Waiting ${DELAY_BETWEEN_ENGINES_MS / 1000}s before next engine...`,
      );
      await new Promise((resolve) =>
        setTimeout(resolve, DELAY_BETWEEN_ENGINES_MS),
      );
    }
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n' + '═'.repeat(60));
  console.log('  🚀 IndexNow Full Website Submission');
  console.log('  📍 Domain: ' + DOMAIN);
  console.log('  🔑 Key: ' + API_KEY);
  console.log('═'.repeat(60));

  // Get all URLs from sitemaps
  const urls = getAllUrlsFromSitemaps();

  if (urls.length === 0) {
    console.log('\n❌ No URLs found in sitemaps!');
    process.exit(1);
  }

  // Submit to all engines
  await submitToAllEngines(urls);

  console.log('\n' + '═'.repeat(60));
  console.log('  ✅ Submission Complete!');
  console.log('  📊 Total URLs submitted: ' + urls.length);
  console.log(
    '  🌐 Engines notified: ' + SEARCH_ENGINES.map((e) => e.name).join(', '),
  );
  console.log('═'.repeat(60));
  console.log('\n🔍 Verify your key file at:');
  console.log(`   ${KEY_LOCATION}\n`);
}

main().catch(console.error);
