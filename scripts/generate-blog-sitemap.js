const fs = require('fs');
const path = require('path');

const blogDataPath = path.join('src', 'lib', 'blog-data.ts');
const text = fs.readFileSync(blogDataPath, 'utf8');

// Regex to match blog post objects
// Matches: slug: 'value', and date: 'value' inside the object
// We assume standard formatting as seen in the file
const slugRegex = /slug:\s*'([^']+)'/g;
const dateRegex = /date:\s*'([^']+)'/g;

// We need to match paired data. The file structure is an array of objects.
// Let's split by "{" to get object chunks (roughly)
const objectChunks = text.split('{').slice(1); // skip first split which is before first object

console.log(`Found ${objectChunks.length} potential chunks`);

const urlsetStart = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- Sproutern Blog Posts Sitemap - Updated ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} -->

<!-- Blog Main Page -->
<url>
  <loc>https://sproutern.dpdns.org/blog</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.90</priority>
</url>
`;

let xmlContent = urlsetStart;
let count = 0;

for (const chunk of objectChunks) {
  if (!chunk.includes('slug:') || !chunk.includes('date:')) continue;

  const slugMatch = /slug:\s*'([^']+)'/.exec(chunk);
  const dateMatch = /date:\s*'([^']+)'/.exec(chunk);

  if (slugMatch && dateMatch) {
    const slug = slugMatch[1];
    const dateStr = dateMatch[1];
    const dateObj = new Date(dateStr);

    // Validation: Check if date is valid
    let isoDate;
    if (!isNaN(dateObj.getTime())) {
      isoDate = dateObj.toISOString();
    } else {
      console.warn(
        `Invalid date for slug ${slug}: ${dateStr}, using current date`,
      );
      isoDate = new Date().toISOString();
    }

    xmlContent += `
<url>
  <loc>https://sproutern.dpdns.org/blog/${slug}</loc>
  <lastmod>${isoDate}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.85</priority>
</url>`;
    count++;
  }
}

xmlContent += '\n</urlset>';

fs.writeFileSync(path.join('public', 'sitemap-blog.xml'), xmlContent);
console.log(`Generated sitemap for ${count} blog posts.`);
