const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', '..', 'src', 'app', 'blog');

function getValidSlugs(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        if (!file.startsWith('[') && !file.startsWith('(')) {
          results.push(file);
        }
      }
    });
  } catch (e) {
    console.error('Error reading dir:', e);
  }
  return results;
}

const validSlugs = getValidSlugs(blogDir);
fs.writeFileSync(
  path.join(__dirname, '..', '..', 'valid_blogs.json'),
  JSON.stringify(validSlugs, null, 2),
);
console.log(`Wrote ${validSlugs.length} slugs to valid_blogs.json`);
