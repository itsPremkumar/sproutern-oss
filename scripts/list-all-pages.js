const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src/app');

function getAllPages(dir, basePath = '') {
  let results = [];
  try {
    const list = fs.readdirSync(dir);

    // Check if this directory is a page (has page.tsx/js/jsx)
    if (
      list.includes('page.tsx') ||
      list.includes('page.js') ||
      list.includes('page.jsx')
    ) {
      if (basePath === '') results.push('/');
      else results.push(basePath);
    }

    list.forEach((file) => {
      const filePath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(filePath);
      } catch (e) {
        return;
      }

      if (stat.isDirectory()) {
        // Skip hidden folders, node_modules, etc
        if (
          file.startsWith('.') ||
          file.startsWith('_') ||
          file === 'node_modules'
        )
          return;

        // Handle route groups (folders in parens) - they don't add to the URL path
        let newBasePath = basePath;
        if (!file.startsWith('(')) {
          newBasePath = basePath ? `${basePath}/${file}` : `/${file}`;
        }

        results = results.concat(getAllPages(filePath, newBasePath));
      }
    });
  } catch (err) {
    console.error(`Error scanning ${dir}:`, err);
  }
  return results;
}

const pages = getAllPages(appDir);
// Filter dynamic routes (containing '[') and api routes
const staticPages = pages.filter(
  (p) => !p.includes('[') && !p.includes('/api/'),
);
const sortedPages = [...new Set(staticPages)].sort();

fs.writeFileSync('all-static-pages.txt', sortedPages.join('\n'));
console.log(`Wrote ${sortedPages.length} static pages to all-static-pages.txt`);
