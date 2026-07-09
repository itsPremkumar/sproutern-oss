const fs = require('fs');
const blogData = 'src/lib/blog-data.ts';
const newEntriesFile = 'new_entries.txt';

let newEntries = fs.readFileSync(newEntriesFile);
// Check for UTF-16LE BOM (common in PowerShell redirection)
if (newEntries[0] === 0xff && newEntries[1] === 0xfe) {
  newEntries = newEntries.toString('utf16le');
} else {
  newEntries = newEntries.toString('utf8');
}

let content = fs.readFileSync(blogData, 'utf8');
const closingIndex = content.lastIndexOf('];');

if (closingIndex !== -1) {
  const newContent = content.slice(0, closingIndex) + newEntries + '\n];';
  fs.writeFileSync(blogData, newContent);
  console.log('Appended successfully');
} else {
  console.error('Could not find closing bracket');
}
