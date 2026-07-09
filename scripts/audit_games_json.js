const fs = require('fs');
const path = require('path');

const GAMES_DIR = 'src/app/games';
const GAME_SEO_FILE = 'src/lib/seo/game-seo-content.ts';

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter((file) => {
    return fs.statSync(path.join(srcPath, file)).isDirectory();
  });
}

function analyzeGames() {
  const gameDirs = getDirectories(GAMES_DIR);
  const seoContent = fs.readFileSync(GAME_SEO_FILE, 'utf8');

  const definedGames = [];
  const regex = /'([a-z0-9-]+)':\s*{/g;
  let match;
  while ((match = regex.exec(seoContent)) !== null) {
    definedGames.push(match[1]);
  }

  const missingGames = gameDirs.filter((game) => !definedGames.includes(game));

  fs.writeFileSync('missing_games.json', JSON.stringify(missingGames, null, 2));
  console.log(
    `Saved ${missingGames.length} missing games to missing_games.json`,
  );
}

analyzeGames();
