const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src/app/resources');

const replacements = [
  { pattern: / 2025/g, replace: '' },
  { pattern: /2025 /g, replace: '' },
  { pattern: /in 2025/g, replace: '' },
  { pattern: /for 2025/g, replace: '' },
  { pattern: /Updated 2025/g, replace: 'Updated' },
  { pattern: /2025 Updated/g, replace: 'Updated' },
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

console.log('Removing 2025 from resources...');
const total = walkDir(targetDir);
console.log(`\nDone! Updated ${total} files.`);
