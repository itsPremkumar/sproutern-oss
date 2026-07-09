const fs = require('fs');
const path = require('path');

const companiesDir = path.join(__dirname, 'src/app/companies');

const replacements = [
  // Specific contextual replacements first
  {
    pattern:
      /Year of Passing:<\/strong> Usually 202(4|5), 202(5|6), or 202(6|7)/g,
    replace: 'Year of Passing:</strong> Recent Batches',
  },
  {
    pattern: /Year of Passing:<\/strong> Usually 20\d{2}, 20\d{2}, or 20\d{2}/g,
    replace: 'Year of Passing:</strong> Recent Batches',
  }, // softer catch

  // Titles and Headings
  { pattern: /Interview Questions 20(25|26)/g, replace: 'Interview Questions' },
  { pattern: /Salary Structure 20(25|26)/g, replace: 'Salary Structure' },
  { pattern: /Salary Guide 20(25|26)/g, replace: 'Salary Guide' },
  { pattern: /Preparation Guide 20(25|26)/g, replace: 'Preparation Guide' },
  { pattern: /Placement Guide 20(25|26)/g, replace: 'Placement Guide' },
  { pattern: /Work Culture Guide 20(25|26)/g, replace: 'Work Culture Guide' },
  { pattern: /Careers India 20(25|26)/g, replace: 'Careers India' },
  { pattern: /Careers 20(25|26)/g, replace: 'Careers' },
  { pattern: /Hiring 20(25|26)/g, replace: 'Hiring' },
  { pattern: /Placements 20(25|26)/g, replace: 'Placements' },

  // General text
  { pattern: /in 20(25|26)/g, replace: '' },
  { pattern: /for 20(25|26)/g, replace: '' },
  { pattern: /Updated for 20(25|26)/g, replace: 'Recently Updated' },
  { pattern: /Latest .*? 20(25|26)/g, replace: 'Latest Information' }, // "Latest Job Openings for Freshers 2025" -> "Latest Job Openings for Freshers" (this regex is too greedy, be careful)

  // Safer General Removal
  { pattern: /\s+20(25|26)(?=["'<*)\s]|$)/g, replace: '' },
  { pattern: /- 20(25|26)/g, replace: '' },
  { pattern: /\| 20(25|26)/g, replace: '' },
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

console.log('Cleaning company content...');
const total = walkDir(companiesDir);
console.log(`\nDone! Updated ${total} files.`);
