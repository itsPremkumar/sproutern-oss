const fs = require('fs');
const path = require('path');

const GAMES_DIR = 'src/app/games';
const TOOLS_DIR = 'src/app/tools';
const GAME_SEO_FILE = 'src/lib/seo/game-seo-content.ts';

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter((file) => {
    return fs.statSync(path.join(srcPath, file)).isDirectory();
  });
}

function analyzeGames() {
  const gameDirs = getDirectories(GAMES_DIR);
  console.log(`Found ${gameDirs.length} game directories.`);

  // Read SEO file content
  const seoContent = fs.readFileSync(GAME_SEO_FILE, 'utf8');

  // Simple regex to find keys in gameMoviesSEOContent
  // This is a rough heuristic, usually keys are 'slug': { ... }
  const definedGames = [];
  const regex = /'([a-z0-9-]+)':\s*{/g;
  let match;
  while ((match = regex.exec(seoContent)) !== null) {
    definedGames.push(match[1]);
  }

  const missingGames = gameDirs.filter((game) => !definedGames.includes(game));

  console.log(`Games with SEO Content: ${definedGames.length}`);
  console.log(`Missing Games (${missingGames.length}):`);
  missingGames.forEach((g) => console.log(` - ${g}`));

  return { missingGames, definedGames };
}

const TOOL_SEO_FILE = 'src/lib/seo/tool-seo-content.ts';

function analyzeTools() {
  const toolDirs = getDirectories(TOOLS_DIR);
  console.log(`Found ${toolDirs.length} tool directories.`);

  // Read Tool SEO file
  let toolSeoKeys = [];
  if (fs.existsSync(TOOL_SEO_FILE)) {
    const toolSeoContent = fs.readFileSync(TOOL_SEO_FILE, 'utf8');
    const regex = /'([a-z0-9-]+)':\s*{/g;
    let match;
    while ((match = regex.exec(toolSeoContent)) !== null) {
      toolSeoKeys.push(match[1]);
    }
  }

  const thinTools = [];
  const optimizedTools = [];

  toolDirs.forEach((tool) => {
    if (toolSeoKeys.includes(tool)) {
      optimizedTools.push(tool);
      return;
    }

    const pagePath = path.join(TOOLS_DIR, tool, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const content = fs.readFileSync(pagePath, 'utf8');
      const cleanContent = content
        .replace(/import.*?;/gs, '')
        .replace(/<.*?>/g, ' ');
      const wordCount = cleanContent.split(/\s+/).length;

      if (wordCount < 600) {
        thinTools.push({ tool, wordCount });
      }
    } else {
      console.log(`Warning: No page.tsx for tool ${tool}`);
    }
  });

  console.log(`Optimized Tools (${optimizedTools.length}):`);
  optimizedTools.forEach((t) => console.log(` - ${t} (Centralized Content)`));

  console.log(`\nPending Thin Tools (< 600 words) (${thinTools.length}):`);
  thinTools.forEach((t) => console.log(` - ${t.tool}: ${t.wordCount} words`));

  return thinTools;
}

function main() {
  console.log('--- Content Audit ---');
  analyzeGames();
  console.log('\n--- Tool Audit ---');
  analyzeTools();
}

main();
