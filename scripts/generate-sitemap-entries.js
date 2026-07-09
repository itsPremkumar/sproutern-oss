const fs = require('fs');
const path = require('path');

const staticPagesFile = path.join(process.cwd(), 'all-static-pages.txt');
const staticPages = fs
  .readFileSync(staticPagesFile, 'utf-8')
  .split('\n')
  .filter(Boolean);

// Filter out pages handled by other logic
const filteredPages = staticPages.filter((p) => {
  if (p.startsWith('/blog/')) return false;
  // if (p.startsWith('/blog')) return false; // Keep /blog as it is a main hub
  if (p.startsWith('/tools/')) return false;
  // if (p.startsWith('/tools')) return false; // Keep /tools as main hub
  if (p.startsWith('/games/')) return false;
  // if (p.startsWith('/games')) return false; // Keep /games
  if (p.startsWith('/internships/')) return false; // Dynamic
  if (p.startsWith('/interview-experiences/')) return false; // Dynamic

  // Specific exclusions (if any)
  if (p === '/sitemap-page') return false; // Internal utility?

  return true;
});

console.log('--- FILTERED STATIC ROUTES ---');
filteredPages.forEach((p) => console.log(p));

// Generate the TS code for the array
const routesTs = filteredPages
  .map((p) => {
    let priority = 0.8;
    let changeFreq = 'monthly';

    // Customize based on path depth or importance
    if (p === '/') {
      priority = 1.0;
      changeFreq = 'daily';
    } else if (
      p === '/internships' ||
      p === '/blog' ||
      p.startsWith('/freshers')
    ) {
      priority = 0.9;
      changeFreq = 'weekly';
    } else if (p === '/tools' || p === '/resources' || p === '/scholarships') {
      priority = 0.9;
      changeFreq = 'weekly';
    } else if (p === '/contact' || p === '/about') {
      priority = 0.7;
    }

    return `    { path: '${p}', priority: ${priority}, changeFreq: '${changeFreq}' as const },`;
  })
  .join('\n');

console.log('--- GENERATED CODE ---');
console.log(routesTs);
