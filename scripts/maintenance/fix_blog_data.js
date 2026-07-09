const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, '..', '..', 'src', 'lib', 'blog-data.ts');
const validBlogsPath = path.join(__dirname, '..', '..', 'valid_blogs.json');

const validSlugs = JSON.parse(fs.readFileSync(validBlogsPath, 'utf8'));
const validSlugsSet = new Set(validSlugs);

let content = fs.readFileSync(blogDataPath, 'utf8');

// We use a simple line-by-line state machine.
// "  {" starts an object.
// "  }," (or "  }") ends an object.

const lines = content.split('\n');
let newLines = [];
let objectBuffer = [];
let inArray = false;
let insideObject = false;
let currentSlug = null;

for (let line of lines) {
  if (line.includes('export const blogPosts: BlogPost[] = [')) {
    inArray = true;
    newLines.push(line);
    continue;
  }
  if (line.trim() === '];') {
    inArray = false;
    newLines.push(line);
    continue;
  }

  if (inArray) {
    if (line.trim() === '{') {
      insideObject = true;
      objectBuffer = [line];
      currentSlug = null;
      continue;
    }

    if (insideObject) {
      objectBuffer.push(line);

      // Check for slug
      const slugMatch = line.match(/slug:\s*'([^']+)'/);
      if (slugMatch) currentSlug = slugMatch[1];

      if (line.trim() === '},' || line.trim() === '}') {
        insideObject = false;

        // Decide to keep or comment out
        if (currentSlug && !validSlugsSet.has(currentSlug)) {
          // Comment it out
          // We modify the buffer to prepend //
          for (let k = 0; k < objectBuffer.length; k++) {
            newLines.push('  // ' + objectBuffer[k].trim());
          }
        } else {
          newLines.push(...objectBuffer);
        }
        objectBuffer = [];
      }
      continue;
    }

    // If inside array but not object (e.g. empty lines or comments), keep
    newLines.push(line);
  } else {
    newLines.push(line);
  }
}

fs.writeFileSync(blogDataPath, newLines.join('\n'));
console.log('Done rewriting blog-data.ts');
