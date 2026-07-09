const fs = require('fs');
const path = require('path');

const toolDirs = [
  path.join(__dirname, 'src/app/tools'),
  path.join(__dirname, 'src/app/de/tools'),
];

const replacements = [
  // German Salary Calculator
  { pattern: /Brutto zu Netto 2025/g, replace: 'Brutto zu Netto' },
  { pattern: /, 2025/g, replace: '' },

  // Resume Builder
  { pattern: /placeholder="May 2025"/g, replace: 'placeholder="May 20XX"' },
  { pattern: /placeholder='May 2025'/g, replace: "placeholder='May 20XX'" },

  // General
  { pattern: / 2025/g, replace: '' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Special handling for specific files to avoid over-aggressive " 2025" removal
  if (filePath.includes('resume-builder')) {
    // Only change placeholders
    content = content.replace(
      /placeholder="May 2025"/g,
      'placeholder="May 20XX"',
    );
  } else {
    for (const { pattern, replace } of replacements) {
      content = content.replace(pattern, replace);
    }
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

console.log('Cleaning up tools pages...');
let total = 0;
for (const dir of toolDirs) {
  total += walkDir(dir);
}
console.log(`\nDone! Updated ${total} tool files.`);
