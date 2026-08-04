/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GLOBAL REACH SUBMISSION SCRIPT v2.0 (Production-Grade)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * A best-in-class global indexing automation script for Sproutern.
 *
 * Features:
 * - IndexNow submission to 6 search engines
 * - WebSub/PubSubHubbub RSS distribution
 * - Legacy ping services (best-effort)
 * - Structured logging with file output
 * - URL normalization and validation
 * - Retry logic with exponential backoff
 * - Crawl budget protection
 *
 * Usage: npm run submit-global
 *
 * @author Sproutern Team
 * @version 2.0.0

 */

import * as fs from 'fs';
import * as path from 'path';

// ═══════════════════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const CONFIG = {
  // Site Configuration
  domain: 'https://sproutern.dpdns.org',
  siteName: 'Sproutern',
  rssFeedUrl: 'https://sproutern.dpdns.org/feed.xml',

  // IndexNow Configuration
  indexNowKey: process.env.INDEXNOW_KEY || 'YOUR_INDEXNOW_KEY',

  // Batch & Rate Limiting
  batchSize: 100,
  maxUrls: 10000, // Crawl budget protection
  delayBetweenBatches: 500, // ms
  delayBetweenEngines: 1000, // ms

  // Retry Configuration
  maxRetries: 2,
  retryDelayBase: 1000, // ms - exponential backoff base

  // Logging
  logFile: 'submission.log',
};

// ═══════════════════════════════════════════════════════════════════════════
// LOGGING SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
  service: string;
  message: string;
  details?: Record<string, unknown>;
}

const logs: LogEntry[] = [];

function log(
  level: LogEntry['level'],
  service: string,
  message: string,
  details?: Record<string, unknown>,
): void {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    service,
    message,
    details,
  };
  logs.push(entry);

  // Console output with colors
  const prefix = {
    INFO: '   ℹ️ ',
    SUCCESS: '   ✅',
    WARNING: '   ⚠️ ',
    ERROR: '   ❌',
  }[level];

  console.log(`${prefix} [${service}] ${message}`);
}

function saveLogs(): void {
  const logPath = path.join(__dirname, '..', CONFIG.logFile);
  const logContent = logs
    .map((l) => `[${l.timestamp}] [${l.level}] [${l.service}] ${l.message}`)
    .join('\n');
  fs.writeFileSync(logPath, logContent, 'utf-8');
  console.log(`\n📄 Log saved to: ${CONFIG.logFile}`);
}

// ═══════════════════════════════════════════════════════════════════════════
// FETCH WRAPPER (Node.js 18+ Compatible)
// ═══════════════════════════════════════════════════════════════════════════

async function safeFetch(
  url: string,
  options: RequestInit = {},
): Promise<Response> {
  // Node.js 18+ has native fetch, fallback for older versions
  const fetchFn = globalThis.fetch;
  if (!fetchFn) {
    throw new Error(
      'fetch is not available. Please use Node.js 18+ or install node-fetch',
    );
  }
  return fetchFn(url, {
    ...options,
    headers: {
      'User-Agent': 'Sproutern/2.0 (+https://sproutern.dpdns.org)',
      ...options.headers,
    },
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// URL NORMALIZATION
// ═══════════════════════════════════════════════════════════════════════════

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Enforce https
    parsed.protocol = 'https:';
    // Enforce www subdomain for consistency
    if (!parsed.hostname.startsWith('www.')) {
      parsed.hostname = 'www.' + parsed.hostname;
    }
    // Remove trailing slash (except for root)
    let normalized = parsed.toString();
    if (normalized.endsWith('/') && parsed.pathname !== '/') {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  } catch {
    return url; // Return as-is if invalid
  }
}

function normalizeUrls(urls: string[]): string[] {
  const normalized = new Set<string>();
  for (const url of urls) {
    normalized.add(normalizeUrl(url));
  }
  return Array.from(normalized);
}

// ═══════════════════════════════════════════════════════════════════════════
// INDEXNOW KEY VALIDATION
// ═══════════════════════════════════════════════════════════════════════════

async function validateIndexNowKey(): Promise<boolean> {
  const keyUrl = `${CONFIG.domain}/${CONFIG.indexNowKey}.txt`;
  log('INFO', 'IndexNow', `Validating key file: ${keyUrl}`);

  try {
    const response = await safeFetch(keyUrl, { method: 'GET' });
    if (response.ok) {
      const content = await response.text();
      if (content.trim() === CONFIG.indexNowKey) {
        log('SUCCESS', 'IndexNow', 'Key file validated successfully');
        return true;
      }
      log(
        'WARNING',
        'IndexNow',
        'Key file content does not match expected key',
      );
      return false;
    }
    log(
      'ERROR',
      'IndexNow',
      `Key file not accessible: HTTP ${response.status}`,
    );
    return false;
  } catch (error) {
    log('ERROR', 'IndexNow', `Key validation failed: ${error}`);
    return false;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// RSS FEED VALIDATION
// ═══════════════════════════════════════════════════════════════════════════

async function validateRssFeed(): Promise<boolean> {
  log('INFO', 'RSS', `Validating feed: ${CONFIG.rssFeedUrl}`);

  try {
    const response = await safeFetch(CONFIG.rssFeedUrl, { method: 'HEAD' });
    if (response.ok) {
      log('SUCCESS', 'RSS', 'Feed is accessible');
      return true;
    }
    log('WARNING', 'RSS', `Feed not accessible: HTTP ${response.status}`);
    return false;
  } catch (error) {
    log('ERROR', 'RSS', `Feed validation failed: ${error}`);
    return false;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// INDEXNOW SEARCH ENGINES
// ═══════════════════════════════════════════════════════════════════════════

const INDEXNOW_ENGINES = [
  { name: 'IndexNow API', endpoint: 'https://api.indexnow.org/indexnow' },
  { name: 'Bing', endpoint: 'https://www.bing.com/indexnow' },
  { name: 'Yandex', endpoint: 'https://yandex.com/indexnow' },
  { name: 'Seznam', endpoint: 'https://search.seznam.cz/indexnow' },
  { name: 'Naver', endpoint: 'https://searchadvisor.naver.com/indexnow' },
  { name: 'Yep', endpoint: 'https://indexnow.yep.com/indexnow' },
];

async function submitBatchWithRetry(
  engine: { name: string; endpoint: string },
  batch: string[],
  batchNum: number,
  totalBatches: number,
): Promise<boolean> {
  for (let attempt = 0; attempt <= CONFIG.maxRetries; attempt++) {
    try {
      const response = await safeFetch(engine.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: 'sproutern.dpdns.org',
          key: CONFIG.indexNowKey,
          keyLocation: `${CONFIG.domain}/${CONFIG.indexNowKey}.txt`,
          urlList: batch,
        }),
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        log(
          'SUCCESS',
          engine.name,
          `Batch ${batchNum}/${totalBatches} (${batch.length} URLs)`,
        );
        return true;
      }

      if (attempt < CONFIG.maxRetries) {
        const delay = CONFIG.retryDelayBase * Math.pow(2, attempt);
        log(
          'WARNING',
          engine.name,
          `Batch ${batchNum} failed, retrying in ${delay}ms...`,
        );
        await new Promise((r) => setTimeout(r, delay));
      }
    } catch (error) {
      if (attempt < CONFIG.maxRetries) {
        const delay = CONFIG.retryDelayBase * Math.pow(2, attempt);
        log(
          'WARNING',
          engine.name,
          `Batch ${batchNum} error, retrying in ${delay}ms...`,
        );
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }

  log(
    'ERROR',
    engine.name,
    `Batch ${batchNum}/${totalBatches} failed after ${CONFIG.maxRetries + 1} attempts`,
  );
  return false;
}

async function submitToIndexNow(
  urls: string[],
): Promise<{ success: number; failed: number }> {
  console.log('\n📡 INDEXNOW SUBMISSION');
  console.log('═'.repeat(50));

  // Create batches
  const batches: string[][] = [];
  for (let i = 0; i < urls.length; i += CONFIG.batchSize) {
    batches.push(urls.slice(i, i + CONFIG.batchSize));
  }

  log(
    'INFO',
    'IndexNow',
    `Submitting ${urls.length} URLs in ${batches.length} batches`,
  );

  let totalSuccess = 0;
  let totalFailed = 0;

  // Sequential submission to engines (respect rate limits)
  for (const engine of INDEXNOW_ENGINES) {
    console.log(`\n🔄 ${engine.name}...`);
    let engineSuccess = 0;

    for (let i = 0; i < batches.length; i++) {
      const success = await submitBatchWithRetry(
        engine,
        batches[i],
        i + 1,
        batches.length,
      );
      if (success) engineSuccess++;
      await new Promise((r) => setTimeout(r, CONFIG.delayBetweenBatches));
    }

    console.log(`   📊 ${engineSuccess}/${batches.length} batches successful`);
    totalSuccess += engineSuccess;
    totalFailed += batches.length - engineSuccess;

    await new Promise((r) => setTimeout(r, CONFIG.delayBetweenEngines));
  }

  return { success: totalSuccess, failed: totalFailed };
}

// ═══════════════════════════════════════════════════════════════════════════
// PING SERVICES (Separated by Status)
// ═══════════════════════════════════════════════════════════════════════════

const PING_SERVICES = {
  active: [
    {
      name: 'Ping-o-Matic',
      url: 'http://rpc.pingomatic.com/',
      status: 'ACTIVE',
    },
    { name: 'Twingly', url: 'http://rpc.twingly.com', status: 'ACTIVE' },
  ],
  legacy: [
    {
      name: 'Weblogs.com',
      url: 'http://rpc.weblogs.com/RPC2',
      status: 'LEGACY',
    },
    {
      name: 'FeedBurner',
      url: 'http://ping.feedburner.com',
      status: 'DEPRECATED',
    },
    {
      name: 'Technorati',
      url: 'http://rpc.technorati.com/rpc/ping',
      status: 'SHUTDOWN',
    },
    {
      name: 'Bloglines',
      url: 'http://www.bloglines.com/ping',
      status: 'SHUTDOWN',
    },
  ],
};

function createXmlRpcPing(): string {
  return `<?xml version="1.0"?>
<methodCall>
  <methodName>weblogUpdates.extendedPing</methodName>
  <params>
    <param><value><string>${CONFIG.siteName}</string></value></param>
    <param><value><string>${CONFIG.domain}</string></value></param>
    <param><value><string>${CONFIG.domain}</string></value></param>
    <param><value><string>${CONFIG.rssFeedUrl}</string></value></param>
  </params>
</methodCall>`;
}

async function submitToPingServices(): Promise<void> {
  console.log('\n📢 PING SERVICES');
  console.log('═'.repeat(50));

  const xmlPayload = createXmlRpcPing();

  // Active services (priority)
  console.log('\n   [ACTIVE SERVICES]');
  for (const service of PING_SERVICES.active) {
    try {
      const response = await safeFetch(service.url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/xml' },
        body: xmlPayload,
      });
      if (response.ok || response.status < 400) {
        log('SUCCESS', 'Ping', `${service.name}`);
      } else {
        log('WARNING', 'Ping', `${service.name} - HTTP ${response.status}`);
      }
    } catch {
      log('WARNING', 'Ping', `${service.name} - Connection failed`);
    }
  }

  // Legacy services (best-effort, run in parallel)
  console.log('\n   [LEGACY SERVICES - Best Effort]');
  await Promise.allSettled(
    PING_SERVICES.legacy.map(async (service) => {
      try {
        const response = await safeFetch(service.url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/xml' },
          body: xmlPayload,
        });
        if (response.ok) {
          log('SUCCESS', 'Ping', `${service.name} (${service.status})`);
        } else {
          log(
            'WARNING',
            'Ping',
            `${service.name} (${service.status}) - Expected for legacy service`,
          );
        }
      } catch {
        log(
          'WARNING',
          'Ping',
          `${service.name} (${service.status}) - Service likely discontinued`,
        );
      }
    }),
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// WEBSUB / RSS NOTIFICATION
// ═══════════════════════════════════════════════════════════════════════════

const WEBSUB_HUBS = [
  { name: 'Google PubSubHubbub', url: 'https://pubsubhubbub.appspot.com/' },
  { name: 'Superfeedr', url: 'https://pubsubhubbub.superfeedr.com/' },
];

const RSS_AGGREGATORS = [
  { name: 'Feedly', url: 'https://feedly.com/i/subscription/feed/' },
  { name: 'Inoreader', url: 'https://www.inoreader.com/' },
  { name: 'NewsBlur', url: 'https://newsblur.com/' },
  { name: 'Blogarama', url: 'https://www.blogarama.com/add-blog' },
];

async function notifyWebSubHubs(): Promise<void> {
  console.log('\n📰 WEBSUB / RSS NOTIFICATION');
  console.log('═'.repeat(50));

  // WebSub hub notifications (parallel)
  console.log('\n   [WEBSUB HUBS]');
  await Promise.all(
    WEBSUB_HUBS.map(async (hub) => {
      try {
        const formData = new URLSearchParams();
        formData.append('hub.mode', 'publish');
        formData.append('hub.url', CONFIG.rssFeedUrl);

        const response = await safeFetch(hub.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formData.toString(),
        });

        if (response.ok || response.status === 204) {
          log('SUCCESS', 'WebSub', hub.name);
        } else {
          log('WARNING', 'WebSub', `${hub.name} - HTTP ${response.status}`);
        }
      } catch (error) {
        log('ERROR', 'WebSub', `${hub.name} - Connection failed`);
      }
    }),
  );

  // Manual RSS submission links
  console.log('\n   [MANUAL RSS SUBMISSION]');
  console.log('   Submit your RSS feed to these aggregators manually:');
  for (const agg of RSS_AGGREGATORS) {
    console.log(`      • ${agg.name}: ${agg.url}`);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// GOOGLE INDEXING API NOTICE
// ═══════════════════════════════════════════════════════════════════════════

function printGoogleApiNotice(): void {
  console.log('\n🔍 GOOGLE INDEXING');
  console.log('═'.repeat(50));
  console.log(`
   ⚠️  IMPORTANT: Google Indexing API Limitations

   The Google Indexing API is ONLY valid for:
   • JobPosting schema pages
   • BroadcastEvent / LiveStreaming pages

   ❌ It does NOT work for regular web pages!

   ✅ For standard pages, use:
      • Google Search Console: https://search.google.com/search-console
      • Sitemap submission
      • URL Inspection tool

   Your site is already configured with:
   • Sitemap: ${CONFIG.domain}/sitemap.xml
   • Robots.txt: ${CONFIG.domain}/robots.txt
`);
}

// ═══════════════════════════════════════════════════════════════════════════
// SITEMAP PARSER
// ═══════════════════════════════════════════════════════════════════════════

interface SitemapEntry {
  url: string;
  lastmod?: string;
  priority?: number;
}

function parseSitemapWithPriority(content: string): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const urlRegex = /<url>([\s\S]*?)<\/url>/g;
  const locRegex = /<loc>([^<]+)<\/loc>/;
  const lastmodRegex = /<lastmod>([^<]+)<\/lastmod>/;
  const priorityRegex = /<priority>([^<]+)<\/priority>/;

  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    const urlBlock = match[1];
    const locMatch = locRegex.exec(urlBlock);

    if (locMatch && !locMatch[1].endsWith('.xml')) {
      const entry: SitemapEntry = { url: locMatch[1].trim() };

      const lastmodMatch = lastmodRegex.exec(urlBlock);
      if (lastmodMatch) entry.lastmod = lastmodMatch[1];

      const priorityMatch = priorityRegex.exec(urlBlock);
      if (priorityMatch) entry.priority = parseFloat(priorityMatch[1]);

      entries.push(entry);
    }
  }

  return entries;
}

function getAllUrlsFromSitemaps(): string[] {
  const publicDir = path.join(__dirname, '..', 'public');
  const allEntries: SitemapEntry[] = [];

  try {
    const files = fs.readdirSync(publicDir);
    const sitemapFiles = files.filter(
      (f) => f.startsWith('sitemap') && f.endsWith('.xml'),
    );

    for (const file of sitemapFiles) {
      const filePath = path.join(publicDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const entries = parseSitemapWithPriority(content);
      allEntries.push(...entries);
      log('INFO', 'Sitemap', `${file}: ${entries.length} URLs`);
    }
  } catch (error) {
    log('ERROR', 'Sitemap', `Error reading sitemaps: ${error}`);
  }

  // Sort by priority (higher first) and lastmod (newer first)
  allEntries.sort((a, b) => {
    if (a.priority !== b.priority) {
      return (b.priority || 0.5) - (a.priority || 0.5);
    }
    if (a.lastmod && b.lastmod) {
      return new Date(b.lastmod).getTime() - new Date(a.lastmod).getTime();
    }
    return 0;
  });

  // Extract URLs, normalize, and apply limit
  const urls = normalizeUrls(allEntries.map((e) => e.url));

  if (urls.length > CONFIG.maxUrls) {
    log(
      'WARNING',
      'Sitemap',
      `URL limit enforced: ${urls.length} → ${CONFIG.maxUrls}`,
    );
    return urls.slice(0, CONFIG.maxUrls);
  }

  return urls;
}

// ═══════════════════════════════════════════════════════════════════════════
// SUMMARY REPORT
// ═══════════════════════════════════════════════════════════════════════════

function printSummary(results: {
  urls: number;
  indexNow: { success: number; failed: number };
}): void {
  console.log('\n' + '═'.repeat(60));
  console.log('  📊 SUBMISSION SUMMARY');
  console.log('═'.repeat(60));

  const successLogs = logs.filter((l) => l.level === 'SUCCESS').length;
  const warningLogs = logs.filter((l) => l.level === 'WARNING').length;
  const errorLogs = logs.filter((l) => l.level === 'ERROR').length;

  console.log(`
   URLs Processed:     ${results.urls}
   IndexNow Batches:   ${results.indexNow.success} success, ${results.indexNow.failed} failed
   Total Operations:   ${successLogs} ✅ | ${warningLogs} ⚠️  | ${errorLogs} ❌

   🔗 Verification Links:
      • IndexNow Key: ${CONFIG.domain}/${CONFIG.indexNowKey}.txt
      • RSS Feed: ${CONFIG.rssFeedUrl}
      • Sitemap: ${CONFIG.domain}/sitemap.xml

   🛠️  Webmaster Tools:
      • Bing: https://www.bing.com/webmasters
      • Google: https://search.google.com/search-console
      • Yandex: https://webmaster.yandex.com
`);

  console.log('═'.repeat(60));
  console.log('  ✅ GLOBAL SUBMISSION COMPLETE');
  console.log('═'.repeat(60));
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN EXECUTION
// ═══════════════════════════════════════════════════════════════════════════

async function main(): Promise<void> {
  console.log('\n' + '═'.repeat(60));
  console.log('  🌐 GLOBAL REACH SUBMISSION v2.0');
  console.log('  📍 Domain: ' + CONFIG.domain);
  console.log('  ⏰ Started: ' + new Date().toISOString());
  console.log('═'.repeat(60));

  // Validation Phase
  console.log('\n🔍 VALIDATION');
  console.log('═'.repeat(50));

  const [keyValid, rssValid] = await Promise.all([
    validateIndexNowKey(),
    validateRssFeed(),
  ]);

  if (!keyValid) {
    console.log('\n❌ IndexNow key validation failed. Aborting.');
    console.log(
      `   Please ensure ${CONFIG.domain}/${CONFIG.indexNowKey}.txt is accessible.`,
    );
    process.exit(1);
  }

  // Read and parse sitemaps
  console.log('\n📁 SITEMAP PARSING');
  console.log('═'.repeat(50));
  const urls = getAllUrlsFromSitemaps();
  console.log(`\n   📊 Total unique URLs: ${urls.length}`);

  if (urls.length === 0) {
    log('ERROR', 'Main', 'No URLs found in sitemaps');
    process.exit(1);
  }

  // Execute submissions
  const indexNowResults = await submitToIndexNow(urls);

  // Parallel: Ping services and WebSub (independent of IndexNow)
  await Promise.all([submitToPingServices(), notifyWebSubHubs()]);

  // Google notice
  printGoogleApiNotice();

  // Summary
  printSummary({
    urls: urls.length,
    indexNow: indexNowResults,
  });

  // Save logs
  saveLogs();
}

// Run
main().catch((error) => {
  console.error('\n❌ Fatal error:', error);
  saveLogs();
  process.exit(1);
});
