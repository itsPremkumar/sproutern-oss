import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

async function verifySitemapCoverage() {
  console.log('Starting Sitemap Coverage Verification...');

  const publicDir = path.join(process.cwd(), 'public');
  const sitemapFiles = fs
    .readdirSync(publicDir)
    .filter(
      (f) =>
        f.startsWith('sitemap-') &&
        f.endsWith('.xml') &&
        f !== 'sitemap-index.xml',
    );

  const legacyUrls = new Set<string>();

  console.log(`Found ${sitemapFiles.length} legacy sitemap files.`);

  for (const file of sitemapFiles) {
    const content = fs.readFileSync(path.join(publicDir, file), 'utf-8');
    try {
      const result = await parseStringPromise(content);
      if (result.urlset && result.urlset.url) {
        result.urlset.url.forEach((entry: any) => {
          if (entry.loc && entry.loc[0]) {
            legacyUrls.add(entry.loc[0].trim());
          }
        });
      }
    } catch (err) {
      console.error(`Error parsing ${file}:`, err);
    }
  }

  console.log(`Total unique legacy URLs found: ${legacyUrls.size}`);

  // Simulate or fetch the new dynamic sitemap generation
  // Since we can't easily run the actual sitemap() function (as it might depend on Next.js context/Firebase),
  // we will try to import it if possible, or for now, just manually scan the file system in a similar way to comparison.
  // Ideally, we would fetch http://localhost:3000/sitemap.xml if the server was running.

  // For this recursive script, let's implement the scanning logic HERE first to verify it works,
  // then we can port it to src/app/sitemap.ts.

  const scanRoutes = (dir: string, baseUrl: string = ''): string[] => {
    let routes: string[] = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip special Next.js folders and components
        if (file.startsWith('_') || file.startsWith('.') || file === 'api')
          continue;

        // Handle route groups (folders in parens usually don't affect URL path)
        const isRouteGroup = file.startsWith('(') && file.endsWith(')');
        const nextBaseUrl = isRouteGroup ? baseUrl : `${baseUrl}/${file}`;

        routes = [...routes, ...scanRoutes(fullPath, nextBaseUrl)];
      } else {
        if (file === 'page.tsx' || file === 'page.js') {
          // It's a page!
          routes.push(baseUrl === '' ? '/' : baseUrl);
        }
      }
    }
    return routes;
  };

  const appDir = path.join(process.cwd(), 'src', 'app');
  const discoveredRoutes = scanRoutes(appDir);
  const discoveredUrls = new Set(
    discoveredRoutes.map((r) => `https://www.sproutern.com${r}`),
  );

  console.log(
    `Discovered ${discoveredUrls.size} static routes via file system scan.`,
  );

  // Now compare
  const missingInNew = [];
  for (const url of legacyUrls) {
    // normalize
    const normalized = url.replace(/\/$/, '');
    if (!discoveredUrls.has(normalized)) {
      // Check if it's dynamic (we can't easily check coverage of dynamic routes without DB access here)
      // Heuristic: if URL path segment count > discovered matching static path
      // For now, simply log it.
      missingInNew.push(url);
    }
  }

  console.log(`\nPotential missing URLs (${missingInNew.length}):`);
  if (missingInNew.length > 0) {
    console.log(missingInNew.slice(0, 20).join('\n'));
    if (missingInNew.length > 20) console.log('...');
  } else {
    console.log(
      '✅ All legacy static URLs are covered by the file system scan!',
    );
  }
}

verifySitemapCoverage();
