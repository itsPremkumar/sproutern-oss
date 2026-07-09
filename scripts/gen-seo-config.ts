import fs from 'fs';
import path from 'path';

const gamesDir = path.join(process.cwd(), 'src/app/games');
const gamesSeoPath = path.join(process.cwd(), 'src/lib/seo/games-seo.ts');

const gameSlugs = fs.readdirSync(gamesDir).filter((file) => {
  const stat = fs.statSync(path.join(gamesDir, file));
  return stat.isDirectory() && !file.startsWith('[') && !file.startsWith('(');
});

const existingSeoContent = fs.readFileSync(gamesSeoPath, 'utf-8');
const existingKeys = new Set<string>();
const keyRegex = /'([\w-]+)': \{/g;
let match;
while ((match = keyRegex.exec(existingSeoContent)) !== null) {
  existingKeys.add(match[1]);
}

const missingSlugs = gameSlugs.filter((slug) => !existingKeys.has(slug));

function guessCategory(slug: string): string {
  if (slug.includes('memory') || slug.includes('recall')) return 'memory';
  if (
    slug.includes('logic') ||
    slug.includes('puzzle') ||
    slug.includes('reasoning') ||
    slug.includes('think')
  )
    return 'logic';
  if (
    slug.includes('math') ||
    slug.includes('number') ||
    slug.includes('count') ||
    slug.includes('sudoku')
  )
    return 'math';
  if (
    slug.includes('word') ||
    slug.includes('vocab') ||
    slug.includes('spell') ||
    slug.includes('antonym') ||
    slug.includes('synonym')
  )
    return 'vocabulary';
  if (
    slug.includes('focus') ||
    slug.includes('attention') ||
    slug.includes('reaction') ||
    slug.includes('concentration')
  )
    return 'focus';
  if (
    slug.includes('physics') ||
    slug.includes('chemistry') ||
    slug.includes('bio') ||
    slug.includes('science')
  )
    return 'science';
  return 'advanced';
}

function generateConfig(slug: string) {
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const category = guessCategory(slug);

  return `  '${slug}': {
    slug: '${slug}',
    title: '${title} - Educational Brain Game',
    description: 'Play ${title} online. Improve your ${category} skills with this engaging educational game. Perfect for student brain training and exam preparation.',
    keywords: [
      '${slug.replace(/-/g, ' ')}',
      '${category} game',
      'brain training',
      'educational game',
      'student games'
    ],
    category: '${category}',
    difficulty: 'Medium',
    benefits: ['Improve ${category} skills', 'Brain training', 'Cognitive development'],
    faqs: [
      {
        question: 'What is ${title}?',
        answer: '${title} is a ${category} game designed to help students improve their cognitive abilities in a fun and interactive way.'
      }
    ]
  },`;
}

const output = `// MISSING GAMES CONFIGURATION

export const additionalGames: Record<string, GameSEOConfig> = {
${missingSlugs.map((slug) => generateConfig(slug)).join('\n')}
};`;

fs.writeFileSync('missing-seo.txt', output);
console.log('Done writing to missing-seo.txt');
