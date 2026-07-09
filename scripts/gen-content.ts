import fs from 'fs';
import path from 'path';

const gamesDir = path.join(process.cwd(), 'src/app/games');
const contentPath = path.join(process.cwd(), 'src/lib/seo/game-seo-content.ts');

const gameSlugs = fs.readdirSync(gamesDir).filter((file) => {
  const stat = fs.statSync(path.join(gamesDir, file));
  return stat.isDirectory() && !file.startsWith('[') && !file.startsWith('(');
});

const contentFile = fs.readFileSync(contentPath, 'utf-8');
const existingKeys = new Set<string>();
const keyRegex = /'([\w-]+)': \{/g;
let match;
while ((match = keyRegex.exec(contentFile)) !== null) {
  existingKeys.add(match[1]);
}

console.log('Total games:', gameSlugs.length);
console.log('Covered by content:', existingKeys.size);

const missingSlugs = gameSlugs.filter((slug) => !existingKeys.has(slug));

if (missingSlugs.length === 0) {
  console.log('All games covered!');
  process.exit(0);
}

console.log('Missing content for:', missingSlugs.length, 'games');

function generateEnhancedContent(slug: string) {
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  // Simple template - normally we'd make this more specific based on category
  return `  '${slug}': {
    slug: '${slug}',
    targetAgeRange: '10-65',
    educationalLevel: ['Middle School', 'High School', 'College'],
    examBenefits: ['IQ Tests', 'Aptitude Tests', 'Competitive Exams'],
    skillsGained: ['Cognitive skills', 'Problem solving', 'Critical thinking'],
    howToSteps: [
      { step: 1, title: 'Start the Game', description: 'Click play to begin the challenge.' },
      { step: 2, title: 'Follow Instructions', description: 'Read the specific rules for this puzzle.' },
      { step: 3, title: 'Solve the Problem', description: 'Use your logic to find the solution.' },
      { step: 4, title: 'Submit Answer', description: 'Check if you are correct and advance.' }
    ],
    paaQuestions: [
      { question: 'What is ${title}?', answer: '${title} is a brain training game designed to improve cognitive skills.' },
      { question: 'Is it free?', answer: 'Yes, all games on Sproutern are free to play online.' }
    ],
    relatedGames: ['memory-matrix', 'logic-puzzle', 'sudoku-trainer'], // Placeholder
    content: {
      introduction: \`${title} is an engaging educational game that challenges your mind. Designed for students and lifelong learners, it helps improve essential cognitive abilities through interactive play.\n\nRegular practice with brain games like this has been shown to enhance problem-solving skills and mental agility.\`,
      howItWorks: \`The game presents you with a unique challenge that requires focus and logical thinking. As you progress, the difficulty increases, ensuring your brain is constantly challenged.\`,
      cognitiveSkills: \`Playing this game helps develop:\n\n**Focus**: maintaining attention on the task.\n\n**Logic**: applying reasoning to solve problems.\n\n**Processing Speed**: thinking quickly under pressure.\`,
      examPreparation: \`This game is excellent preparation for competitive exams that test aptitude and logical reasoning.\`,
      whoShouldPlay: \`Anyone looking to keep their brain sharp! Especially useful for students preparing for exams like CAT, GRE, and placements.\`,
      scientificBasis: \`Cognitive training exercises like this stimulate neural plasticity, helping to maintain and improve brain function.\`,
      proTips: ['Take your time initially', 'Practice daily for best results', 'Review your mistakes']
    }
  },`;
}

const output = `
// ============================================
// GENERATED MISSING CONTENT
// ============================================
export const additionalGamesContent: Record<string, EnhancedGameSEO> = {
${missingSlugs.map((slug) => generateEnhancedContent(slug)).join('\n')}
};
`;

fs.writeFileSync('missing-content.txt', output);
console.log('Written missing content to missing-content.txt');
