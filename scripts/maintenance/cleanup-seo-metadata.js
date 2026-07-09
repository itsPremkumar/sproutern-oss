const fs = require('fs');
const path = require('path');

const seoDir = path.join(__dirname, 'src/lib/seo');

const replacements = [
  // Titles and Headings
  { pattern: /Off-Campus Drives 2025/g, replace: 'Off-Campus Drives' },
  {
    pattern: /Interview Questions & Answers 2025/g,
    replace: 'Interview Questions & Answers',
  },
  { pattern: /Salary Structure 2025/g, replace: 'Salary Structure' },
  { pattern: /Roadmap 2025/g, replace: 'Roadmap' },
  { pattern: /Guide 2025/g, replace: 'Guide' },
  { pattern: /Trends 2025/g, replace: 'Trends' },

  // Bio/Personal Info
  { pattern: /A 2025 Information/g, replace: 'An Information' }, // "A 2025 Information..." -> "An Information..."
  { pattern: /A 2025 MIT/g, replace: 'An MIT' },
  { pattern: /graduate 2025/g, replace: 'graduate' },
  { pattern: /2025 batch/g, replace: 'recent batch' },
  { pattern: /2025 hiring trends/g, replace: 'hiring trends' },
  { pattern: /skills for 2025/g, replace: 'skills' }, // "skills for 2025" -> "skills"
  { pattern: /in 2025/g, replace: '' },

  // Copyrights
  { pattern: /© 2025/g, replace: '©' }, // Remove year from copyright to make it timeless (or rely on dynamic footer)

  // Cleanups
  { pattern: /  +/g, replace: ' ' }, // Fix double spaces created by removal
  { pattern: / \|/g, replace: ' |' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const { pattern, replace } of replacements) {
    // Check if pattern matches to avoid unnecessary writes/reads logic if possible,
    // but regex replace is fast enough.
    content = content.replace(pattern, replace);
  }

  // Fix specific grammar issues that might arise
  content = content.replace(/An 2025/g, 'An'); // Just in case
  content = content.replace(/for {2}/g, 'for ');
  content = content.replace(/in {2}/g, 'in ');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return 0;

  const files = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updatedCount += walkDir(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      if (processFile(fullPath)) {
        updatedCount++;
      }
    }
  }

  return updatedCount;
}

console.log('Cleaning up SEO metadata in src/lib/seo...');
const total = walkDir(seoDir);
console.log(`\nDone! Updated ${total} SEO files.`);
