const fs = require('fs');
const path = require('path');

const files = [
  'src/lib/seo/tool-seo-content.ts',
  'src/lib/seo/schema-generators.ts',
  'src/lib/seo/geo-metadata.ts',
  'src/lib/seo/complete-page-seo.ts',
].map((f) => path.join(__dirname, f));

const replacements = [
  { from: /2025 hiring trends/g, to: 'hiring trends' },
  { from: /GATE 2025/g, to: 'GATE' },
  { from: /© 2025/g, to: '©' },
  { from: /Off-Campus Drives 2025/g, to: 'Off-Campus Drives' },
  {
    from: /2025 Information Technology graduate/g,
    to: 'Information Technology graduate',
  },
  { from: /2025 drives/g, to: 'drives' },
  { from: /in 2025/g, to: '' },
  { from: /for 2025/g, to: '' },
  { from: /2025 batch/gi, to: 'batch' },
  { from: /Class of 2025/g, to: 'recent graduate' },
  { from: /MIT Chennai IT Graduate 2025/g, to: 'MIT Chennai IT Graduate' },
  { from: /2025 graduate/g, to: 'graduate' },
  { from: /jobs for freshers in 2025/g, to: 'jobs for freshers' },
  { from: /Top skills for 2025/g, to: 'Top skills' },
  { from: /2025 |/g, to: '|' },
];

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

console.log('Cleaning SEO files...');
files.forEach(processFile);
console.log('Done.');
