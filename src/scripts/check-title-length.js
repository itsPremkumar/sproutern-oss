const fs = require('fs');
const path = require('path');

const traverseDir = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDir(filePath, fileList);
    } else {
      if (file === 'page.tsx' || file === 'layout.tsx') {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
};

const extractTitle = (content) => {
  // Match title: '...' or title: "..." inside metadata or generateMetadata
  // This is a simple regex and might fail on complex multi-line strings or computed values
  const titleRegex = /title:\s*['"]([^'"]+)['"]/;
  const match = content.match(titleRegex);
  return match ? match[1] : null;
};

const main = () => {
  const srcDir = path.join(process.cwd(), 'src/app');
  const files = traverseDir(srcDir);

  console.log('Checking files for long titles...');
  console.log('-----------------------------------');

  let longTitleCount = 0;

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');

    // Skip root layout as it defines the template, checking it would just give the default title
    if (
      file.endsWith('src\\app\\layout.tsx') ||
      file.endsWith('src/app/layout.tsx')
    ) {
      return;
    }

    const title = extractTitle(content);

    if (title) {
      // Add 12 characters for " | Sproutern" suffix
      const estimatedLength = title.length + 12;

      // Check if title itself is absolute (simple check if it doesn't look like it needs suffix)
      // But assuming most use template.

      if (estimatedLength >= 70) {
        // Normalize path for display
        const relPath = path.relative(process.cwd(), file);
        console.log(`File: ${relPath}`);
        console.log(`Title: "${title}"`);
        console.log(`Length (with suffix): ${estimatedLength}`);
        console.log('---');
        longTitleCount++;
      }
    }
  });

  console.log(
    `Total pages with estimated title length >= 70: ${longTitleCount}`,
  );
};

main();
