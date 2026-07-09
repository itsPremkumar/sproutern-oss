const fs = require('fs');
const path = require('path');

const roadmapDir = path.join(__dirname, 'src/app/roadmaps');
const resourceDir = path.join(__dirname, 'src/app/resources');

const replacements = [
  // --- Roadmap 2025 Removal ---
  { pattern: /Roadmap 2025/g, replace: 'Roadmap' },
  { pattern: / in 2025/g, replace: '' },
  { pattern: / for 2025/g, replace: '' },
  { pattern: / 2025/g, replace: '' },
  { pattern: /2025 /g, replace: '' },

  // --- Resource Repairs (Dangling words) ---
  { pattern: /In-Demand Skills for\s*</g, replace: 'In-Demand Skills<' },
  { pattern: /In-demand skills for\s*</g, replace: 'In-demand skills<' },
  { pattern: /In-Demand Skills for\s*$/g, replace: 'In-Demand Skills' },
  {
    pattern: /Why Networking Matters in\s*</g,
    replace: 'Why Networking Matters<',
  },
  { pattern: /Booming Sectors in\s*</g, replace: 'Booming Sectors<' },
  {
    pattern: /Why Cover Letters Matter in\s*</g,
    replace: 'Why Cover Letters Matter<',
  },
  { pattern: /outdated in\s*\./g, replace: 'outdated.' },

  // General dangling fixes (careful with these)
  { pattern: / for\s*<\/h1>/g, replace: '</h1>' },
  { pattern: / in\s*<\/h1>/g, replace: '</h1>' },
  { pattern: / for\s*<\/h2>/g, replace: '</h2>' },
  { pattern: / in\s*<\/h2>/g, replace: '</h2>' },
  { pattern: / for\s*<\/h3>/g, replace: '</h3>' },
  { pattern: / in\s*<\/h3>/g, replace: '</h3>' },
  { pattern: / for\s*<\/span/g, replace: '</span' },
  { pattern: / in\s*<\/span/g, replace: '</span' },

  // Specific Context Fixes
  {
    pattern: /Complete learning path for\s*$/g,
    replace: 'Complete learning path',
  },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const { pattern, replace } of replacements) {
    content = content.replace(pattern, replace);
  }

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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (processFile(fullPath)) {
        updatedCount++;
      }
    }
  }

  return updatedCount;
}

console.log('Cleaning up roadmaps and repairing resources...');
let total = 0;
total += walkDir(roadmapDir);
total += walkDir(resourceDir);
console.log(`\nDone! Updated ${total} files.`);
