const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blog';
const blogDataFile = 'src/lib/blog-data.ts';

// Get existing slugs to avoid duplicates
const existingContent = fs.readFileSync(blogDataFile, 'utf8');
const existingSlugs = new Set();
const slugMatch = existingContent.match(/slug:\s*['"]([^'"]+)['"]/g);
if (slugMatch) {
  slugMatch.forEach((s) => {
    const slug = s.match(/slug:\s*['"]([^'"]+)['"]/)[1];
    existingSlugs.add(slug);
  });
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
const newEntries = [];

files.forEach((file) => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const lines = content.split('\n');
  let inFrontmatter = false;
  let currentKey = null;
  let currentValue = '';
  const parsed = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    if (line.trim() === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
        continue;
      } else {
        break;
      }
    }

    if (inFrontmatter) {
      if (line.match(/^[a-zA-Z0-9]+:/)) {
        if (currentKey) {
          parsed[currentKey] = currentValue.trim();
          if (
            (parsed[currentKey].startsWith("'") &&
              parsed[currentKey].endsWith("'")) ||
            (parsed[currentKey].startsWith('"') &&
              parsed[currentKey].endsWith('"'))
          ) {
            parsed[currentKey] = parsed[currentKey].slice(1, -1);
          }
        }
        const colonIdx = line.indexOf(':');
        const k = line.substring(0, colonIdx);
        const v = line.substring(colonIdx + 1);
        currentKey = k.trim();
        currentValue = v;
      } else if (currentKey) {
        currentValue += ' ' + line.trim();
      }
    }
  }
  if (currentKey) {
    parsed[currentKey] = currentValue.trim();
    if (
      (parsed[currentKey].startsWith("'") &&
        parsed[currentKey].endsWith("'")) ||
      (parsed[currentKey].startsWith('"') && parsed[currentKey].endsWith('"'))
    ) {
      parsed[currentKey] = parsed[currentKey].slice(1, -1);
    }
  }

  const slug = file.replace('.md', '');
  if (existingSlugs.has(slug)) return;

  const readTime = parsed.readTime || '5 min read';

  newEntries.push({
    title: parsed.title || 'Untitled',
    date: parsed.date || new Date().toISOString().split('T')[0],
    category: parsed.category || 'General',
    readTime: readTime,
    excerpt: parsed.excerpt || '',
    slug: slug,
    contentType: 'markdown',
  });
});

const tsCode = newEntries
  .map(
    (entry) => `  {
    title: ${JSON.stringify(entry.title)},
    date: ${JSON.stringify(entry.date)},
    category: ${JSON.stringify(entry.category)},
    readTime: ${JSON.stringify(entry.readTime)},
    excerpt: ${JSON.stringify(entry.excerpt)},
    slug: ${JSON.stringify(entry.slug)},
    contentType: 'markdown',
  },`,
  )
  .join('\n');

console.log(tsCode);
