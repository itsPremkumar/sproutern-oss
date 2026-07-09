const fs = require('fs');
const path = require('path');

// Target both blog directories
const directories = [
  path.join(__dirname, 'src/app/blog'),
  path.join(__dirname, 'src/content/blog'),
];

// Patterns to replace for making content timeless
const replacements = [
  // Remove year from month-day-year date patterns in text
  {
    pattern: /<span>\w+\s+\d{1,2},\s+(2025|2026)<\/span>/g,
    replace: '<span>Regularly updated</span>',
  },
  {
    pattern: />\s*\w+\s+\d{1,2},\s+(2025|2026)/g,
    replace: '> Regularly updated',
  },

  // Remove year references like "in 2025" or "for 2025"
  { pattern: /\s+(in|for|of)\s+(2025|2026)/gi, replace: '' },

  // Remove year references like "2025-2026" or "2024/2025"
  { pattern: /20(24|25)[-/]20(25|26)/g, replace: '' },

  // Remove "Last updated: Month Day, Year"
  {
    pattern: /Last updated:\s*\w+\s+\d{1,2},\s+(2025|2026)/gi,
    replace: 'Regularly updated',
  },

  // Remove standalone year references like "Top Tech Skills 2025"
  // Avoid matching date: '2026...' in frontmatter (YYYY-MM-DD format usually safe from this regex)
  { pattern: /\s+20(25|26)(?=["'<*)\s]|$)/g, replace: '' },

  // Remove "Updated Month Day, Year"
  { pattern: /Updated\s+\w+\s+\d{1,2},\s+(2025|2026)/gi, replace: 'Updated' },

  // Specific catch for marks in UPSC guide "2025 marks" -> "2025 marks" (Wait, 2025 marks looks like a count, not year! I should check context)
  // "2025 marks" in "UPS CSE" file: "Based on Mains (1750) + Interview (275) = 2025 marks"
  // I MUST NOT remove 2025 if it's a number of marks.
  // Strategy: If "marks" follows immediately, don't replace.

  // Fix for previous regex matching "2025 marks"
  // (Negative lookahead for " marks")
  { pattern: /\s+20(25|26)(?!\s+marks)(?=["'<*)\s]|$)/g, replace: '' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const { pattern, replace } of replacements) {
    content = content.replace(pattern, (match, ...args) => {
      const offset = args[args.length - 2];
      const surrounding = originalContent.substring(
        Math.max(0, offset - 20),
        Math.min(originalContent.length, offset + match.length + 20),
      );

      // Protect publishedTime (tsx) AND date: (md frontmatter) AND href links (if desired? User didn't say to fix links but I should probably leave URLs alone unless they want them broken/redirected)
      // Leaving URLs alone is safer unless I rename files.

      if (
        surrounding.includes('publishedTime') ||
        surrounding.includes('date:')
      ) {
        return match;
      }

      // Also protect "2025 marks" if regex missed it (redundant safety)
      if (surrounding.includes('marks')) {
        return match;
      }

      return replace.replace('$1', args[0] || '');
    });
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    return true;
  }
  return false;
}

function walkDir(dir) {
  console.log(`Scanning directory: ${dir}`);
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return 0;
  }

  const files = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      updatedCount += walkDir(fullPath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.md')
    ) {
      if (processFile(fullPath)) {
        updatedCount++;
      }
    }
  }

  return updatedCount;
}

console.log(
  'Starting to remove year references from blog content (preserving partial metadata)...',
);
let total = 0;
for (const dir of directories) {
  total += walkDir(dir);
}
console.log(`\nDone! Updated ${total} files.`);
