import fs from 'fs';
import path from 'path';

const gamesDir = path.join(process.cwd(), 'src/app/games');

const gameSlugs = fs.readdirSync(gamesDir).filter((file) => {
  const stat = fs.statSync(path.join(gamesDir, file));
  return (
    stat.isDirectory() &&
    !file.startsWith('[') &&
    !file.startsWith('(') &&
    file !== 'memory-matrix'
  );
});

function fixSyntax(slug: string) {
  const pagePath = path.join(gamesDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf-8');

  // Check for double closing braces at the end
  // Logic: count open vs close braces
  const openCount = (content.match(/\{/g) || []).length;
  const closeCount = (content.match(/\}/g) || []).length;

  if (closeCount > openCount) {
    // Remove the last closing brace
    const lastIndex = content.lastIndexOf('}');
    if (lastIndex !== -1) {
      content =
        content.substring(0, lastIndex) + content.substring(lastIndex + 1);
      fs.writeFileSync(pagePath, content);
      console.log(`Fixed syntax for ${slug}`);
    }
  }
}

gameSlugs.forEach(fixSyntax);
