const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  {
    from: 'first-tech-internship-india-2025',
    to: 'first-tech-internship-india',
  },
  { from: 'generative-ai-careers-2025', to: 'generative-ai-careers' },
  {
    from: 'how-to-write-a-resume-that-beats-ats-in-2025',
    to: 'how-to-write-a-resume-that-beats-ats',
  },
  {
    from: 'is-a-data-science-certification-worth-it-in-2025',
    to: 'is-a-data-science-certification-worth-it',
  },
  {
    from: 'top-5-programming-languages-for-web-development-in-2025',
    to: 'top-5-programming-languages-for-web-development',
  },
  {
    from: 'ultimate-guide-first-internship-2025',
    to: 'ultimate-guide-first-internship',
  },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const { from, to } of replacements) {
    // Replace all occurrences
    content = content.replaceAll(from, to);
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
    } else if (file.match(/\.(tsx|ts|js|json|md)$/)) {
      if (processFile(fullPath)) {
        updatedCount++;
      }
    }
  }

  return updatedCount;
}

console.log('Replacing -2025 slugs with timeless slugs...');
const count = walkDir(srcDir);
console.log(`\nDone! Updated ${count} files.`);
