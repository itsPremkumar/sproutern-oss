import type { Metadata } from 'next';
import { generateHrefLangTags } from './geo-metadata';

const siteUrl = 'https://www.sproutern.com';

// Game category types
export type GameCategory =
  | 'memory'
  | 'logic'
  | 'math'
  | 'vocabulary'
  | 'focus'
  | 'language'
  | 'advanced'
  | 'science'
  | 'coding';

// Game SEO configuration interface
export interface GameSEOConfig {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: GameCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'All Levels';
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

// International keywords for global targeting
const globalKeywords = {
  base: [
    'free online game',
    'play online',
    'no download',
    'browser game',
    'web game',
  ],
  regions: {
    us: ['brain games USA', 'cognitive games', 'mental exercises'],
    uk: ['brain training UK', 'mind games', 'mental agility games'],
    india: [
      'aptitude games',
      'competitive exam preparation',
      'placement preparation',
    ],
    australia: [
      'brain training Australia',
      'cognitive fitness',
      'mental workout',
    ],
    canada: ['brain games Canada', 'educational games', 'learning games'],
  },
  education: [
    'educational game',
    'learning game',
    'skill development',
    'cognitive training',
  ],
  benefits: [
    'improve memory',
    'boost brain power',
    'mental exercise',
    'brain workout',
  ],
};

// Helper to generate game metadata
export function generateGameMetadata(game: GameSEOConfig): Metadata {
  // Calculate title to stay within 70 chars when suffix is added
  // Layout adds " | Sproutern" (12 chars total including " | ")
  const maxTitleLength = 58;

  let gameTitle = game.title;
  if (gameTitle.length > maxTitleLength) {
    // Truncate and add ellipsis if needed
    gameTitle = gameTitle.substring(0, maxTitleLength - 3) + '...';
  }

  const canonicalUrl = `${siteUrl}/games/${game.slug}`;

  // Combine keywords with global targeting
  const allKeywords = [
    ...game.keywords,
    ...globalKeywords.base,
    ...globalKeywords.education,
    ...globalKeywords.benefits,
    `${game.category} games`,
    `free ${game.category} game`,
    'brain training',
    'cognitive games',
    'mind games for students',
  ];

  return {
    title: gameTitle,
    description: game.description,
    keywords: allKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'en-GB': canonicalUrl,
        'en-IN': canonicalUrl,
        'en-AU': canonicalUrl,
        'en-CA': canonicalUrl,
        'en-SG': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: game.title,
      description: game.description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Sproutern',
      images: [
        {
          url: `${siteUrl}/og-games/${game.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${game.title} - Brain Training Game`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: game.title,
      description: game.description,
      images: [`${siteUrl}/og-games/${game.slug}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'mobile-web-app-capable': 'yes',
    },
  };
}

// ============================================
// MEMORY GAMES SEO CONFIGURATION
// ============================================
export const memoryGames: Record<string, GameSEOConfig> = {
  'memory-matrix': {
    slug: 'memory-matrix',
    title: 'Memory Matrix Game - Visual Pattern Memory Training',
    description:
      'Train your visual-spatial memory with Memory Matrix. Remember grid patterns, improve short-term recall, and boost cognitive abilities. Free online brain training game for students worldwide.',
    keywords: [
      'memory matrix game',
      'visual memory training',
      'pattern memory game',
      'grid memory test',
      'spatial memory exercise',
      'visual recall training',
      'memory improvement game',
    ],
    category: 'memory',
    difficulty: 'All Levels',
    benefits: [
      'Improve visual memory',
      'Enhance pattern recognition',
      'Boost concentration',
    ],
    faqs: [
      {
        question: 'What is Memory Matrix game?',
        answer:
          'Memory Matrix is a visual-spatial memory training game where you memorize patterns on a grid and recreate them from memory. It helps improve short-term memory and concentration.',
      },
      {
        question: 'How does Memory Matrix improve memory?',
        answer:
          'By repeatedly practicing pattern recall, you strengthen neural pathways responsible for visual memory, improving your ability to remember diagrams, charts, and visual information.',
      },
      {
        question: 'Is Memory Matrix suitable for exam preparation?',
        answer:
          'Yes! Memory Matrix helps students remember visual information like diagrams, flowcharts, and formulas - essential skills for competitive exams and placements.',
      },
    ],
  },
  'memory-match': {
    slug: 'memory-match',
    title: 'Memory Match Game - Classic Card Matching Brain Training',
    description:
      'Play the classic memory match card game online. Flip cards, find pairs, and train your memory. Perfect brain exercise for all ages. Free to play with no download required.',
    keywords: [
      'memory match game',
      'card matching game',
      'concentration game',
      'pair matching',
      'memory card game',
      'flip card memory',
    ],
    category: 'memory',
    difficulty: 'Easy',
    benefits: ['Improve recall speed', 'Enhance focus', 'Train working memory'],
    faqs: [
      {
        question: 'How do I play Memory Match?',
        answer:
          'Click on cards to flip them over. Find matching pairs by remembering card positions. Match all pairs with the fewest moves to win!',
      },
      {
        question: 'What cognitive skills does Memory Match develop?',
        answer:
          'Memory Match trains short-term memory, concentration, visual recognition, and strategic thinking.',
      },
    ],
  },
  'card-flip-memory': {
    slug: 'card-flip-memory',
    title: 'Card Flip Memory - Interactive Memory Training Game',
    description:
      'Challenge your memory with Card Flip Memory game. Remember card positions, match pairs, and improve cognitive recall. Free brain training for students and professionals.',
    keywords: [
      'card flip memory',
      'memory card game',
      'card flip game',
      'memory training',
      'pair matching game',
    ],
    category: 'memory',
    difficulty: 'Easy',
    benefits: [
      'Quick memory recall',
      'Visual processing',
      'Attention training',
    ],
    faqs: [
      {
        question: 'What makes Card Flip Memory different?',
        answer:
          'Card Flip Memory features various themes and difficulty levels, making it engaging for repeated practice while progressively challenging your memory.',
      },
    ],
  },
  'memory-power-test': {
    slug: 'memory-power-test',
    title: 'Memory Power Test - Measure Your Memory Strength',
    description:
      'Take the Memory Power Test to assess your memory capacity. Measure short-term recall, visual memory, and cognitive retention. Get instant results and track improvement.',
    keywords: [
      'memory test',
      'memory power test',
      'memory assessment',
      'cognitive test',
      'memory strength test',
      'IQ memory test',
    ],
    category: 'memory',
    difficulty: 'Medium',
    benefits: [
      'Memory assessment',
      'Track progress',
      'Identify improvement areas',
    ],
    faqs: [
      {
        question: 'How accurate is the Memory Power Test?',
        answer:
          'The test measures working memory capacity through scientifically-designed exercises. While not a clinical assessment, it provides valuable insights into your memory abilities.',
      },
    ],
  },
  'quick-recall': {
    slug: 'quick-recall',
    title: 'Quick Recall Game - Speed Memory Training Exercise',
    description:
      'Test your memory speed with Quick Recall. Remember sequences quickly and recall them accurately. Improve reaction time and short-term memory with this fast-paced brain game.',
    keywords: [
      'quick recall game',
      'speed memory',
      'fast recall training',
      'memory speed test',
      'rapid memory game',
    ],
    category: 'memory',
    difficulty: 'Medium',
    benefits: ['Faster recall', 'Processing speed', 'Working memory'],
    faqs: [
      {
        question: 'How does Quick Recall improve memory speed?',
        answer:
          'By practicing rapid information encoding and retrieval, you train your brain to process and recall information faster - crucial for exams and interviews.',
      },
    ],
  },
  'mind-snapshot': {
    slug: 'mind-snapshot',
    title: 'Mind Snapshot - Photographic Memory Training Game',
    description:
      'Develop photographic memory skills with Mind Snapshot. Capture mental images and recall details accurately. Train your brain to remember visual information like a camera.',
    keywords: [
      'mind snapshot game',
      'photographic memory',
      'eidetic memory training',
      'visual memory game',
      'snapshot memory',
    ],
    category: 'memory',
    difficulty: 'Hard',
    benefits: ['Photographic memory', 'Detail retention', 'Visual acuity'],
    faqs: [
      {
        question: 'Can Mind Snapshot help develop photographic memory?',
        answer:
          'While true eidetic memory is rare, Mind Snapshot trains you to capture and recall visual details more accurately, significantly improving your visual memory abilities.',
      },
    ],
  },
};

// ============================================
// LOGIC GAMES SEO CONFIGURATION
// ============================================
export const logicGames: Record<string, GameSEOConfig> = {
  'logic-puzzle': {
    slug: 'logic-puzzle',
    title: 'Logic Puzzle Game - Deductive Reasoning Training',
    description:
      'Solve challenging logic puzzles with syllogisms, ordering, and blood relations. Perfect for aptitude tests, CAT, GRE, and campus placement preparation. Free logical reasoning practice.',
    keywords: [
      'logic puzzle game',
      'deductive reasoning',
      'syllogism practice',
      'logical reasoning',
      'aptitude puzzles',
      'analytical reasoning',
    ],
    category: 'logic',
    difficulty: 'All Levels',
    benefits: ['Deductive reasoning', 'Analytical thinking', 'Problem-solving'],
    faqs: [
      {
        question: 'What types of logic puzzles are included?',
        answer:
          'The game includes syllogisms, ordering/sequencing, direction sense, blood relations, and coding-decoding puzzles commonly found in aptitude tests.',
      },
      {
        question: 'Are these puzzles similar to CAT/GRE questions?',
        answer:
          'Yes! Our logic puzzles mirror the difficulty and format of logical reasoning sections in CAT, GRE, GMAT, and campus placement tests.',
      },
    ],
  },
  'logic-builder': {
    slug: 'logic-builder',
    title: 'Logic Builder - Step-by-Step Reasoning Game',
    description:
      'Build logical arguments step by step with Logic Builder. Learn to construct valid conclusions from given premises. Essential training for critical thinking and reasoning.',
    keywords: [
      'logic builder game',
      'reasoning game',
      'argument building',
      'logical thinking',
      'premise conclusion',
    ],
    category: 'logic',
    difficulty: 'Medium',
    benefits: [
      'Structured thinking',
      'Argument construction',
      'Valid reasoning',
    ],
    faqs: [],
  },
  'pattern-recognition': {
    slug: 'pattern-recognition',
    title: 'Pattern Recognition Game - Visual Sequence Training',
    description:
      'Master pattern recognition with shapes and colors. Identify sequences, predict patterns, and boost IQ. Essential for abstract reasoning tests and competitive exams worldwide.',
    keywords: [
      'pattern recognition game',
      'visual patterns',
      'sequence game',
      'IQ test practice',
      'abstract reasoning',
      'spatial reasoning',
    ],
    category: 'logic',
    difficulty: 'All Levels',
    benefits: [
      'Pattern identification',
      'Abstract reasoning',
      'IQ improvement',
    ],
    faqs: [
      {
        question: 'How does pattern recognition help with IQ tests?',
        answer:
          'Pattern recognition is a core component of IQ tests. Regular practice improves your ability to identify relationships and predict sequences quickly.',
      },
    ],
  },
  'pattern-finder': {
    slug: 'pattern-finder',
    title: 'Pattern Finder - Hidden Pattern Discovery Game',
    description:
      'Find hidden patterns in complex sequences. Train your brain to spot relationships others miss. Improve analytical skills for problem-solving and data analysis.',
    keywords: [
      'pattern finder game',
      'hidden patterns',
      'sequence finder',
      'pattern discovery',
      'analytical game',
    ],
    category: 'logic',
    difficulty: 'Hard',
    benefits: ['Pattern discovery', 'Analytical skills', 'Attention to detail'],
    faqs: [],
  },
  'sudoku-trainer': {
    slug: 'sudoku-trainer',
    title: 'Sudoku Trainer - Number Logic Puzzle Game',
    description:
      'Master Sudoku with guided training. Learn solving techniques from beginner to expert. Improve number logic, concentration, and problem-solving skills with daily puzzles.',
    keywords: [
      'sudoku trainer',
      'sudoku game',
      'number puzzle',
      'sudoku solver',
      'logic number game',
      'sudoku practice',
    ],
    category: 'logic',
    difficulty: 'All Levels',
    benefits: ['Number logic', 'Patience', 'Systematic thinking'],
    faqs: [
      {
        question: 'Is Sudoku good for brain training?',
        answer:
          "Yes! Sudoku improves logical thinking, concentration, and memory. It's proven to help maintain cognitive function and reduce mental decline.",
      },
    ],
  },
  'sequence-solver': {
    slug: 'sequence-solver',
    title: 'Sequence Solver - Number & Pattern Sequence Game',
    description:
      'Crack complex sequences in Sequence Solver. Identify rules behind number and pattern sequences. Essential training for aptitude tests and competitive examinations.',
    keywords: [
      'sequence solver game',
      'number sequence',
      'pattern sequence',
      'sequence reasoning',
      'aptitude sequence',
    ],
    category: 'logic',
    difficulty: 'Medium',
    benefits: ['Sequence analysis', 'Rule discovery', 'Mathematical reasoning'],
    faqs: [],
  },
  'odd-one-out': {
    slug: 'odd-one-out',
    title: 'Odd One Out - Classification & Categorization Game',
    description:
      'Find the odd one out in each set. Test your classification and categorization skills. Popular aptitude question type for campus placements and competitive exams.',
    keywords: [
      'odd one out game',
      'classification game',
      'categorization',
      'find the odd one',
      'aptitude game',
    ],
    category: 'logic',
    difficulty: 'Easy',
    benefits: [
      'Classification skills',
      'Quick analysis',
      'Category identification',
    ],
    faqs: [],
  },
  'visual-logic-game': {
    slug: 'visual-logic-game',
    title: 'Visual Logic Game - Spatial Reasoning Training',
    description:
      'Solve visual logic puzzles that test spatial reasoning. Rotate, transform, and analyze shapes. Prepare for non-verbal reasoning sections of aptitude tests.',
    keywords: [
      'visual logic game',
      'spatial reasoning',
      'non-verbal reasoning',
      'shape puzzles',
      'visual aptitude',
    ],
    category: 'logic',
    difficulty: 'Medium',
    benefits: [
      'Spatial reasoning',
      'Visual processing',
      'Non-verbal intelligence',
    ],
    faqs: [],
  },
  'brain-logic-test': {
    slug: 'brain-logic-test',
    title: 'Brain Logic Test - Comprehensive Reasoning Assessment',
    description:
      'Take the Brain Logic Test to assess your logical reasoning abilities. Combined test of deductive, inductive, and abductive reasoning with detailed results.',
    keywords: [
      'brain logic test',
      'reasoning test',
      'logic assessment',
      'IQ logic test',
      'reasoning ability',
    ],
    category: 'logic',
    difficulty: 'All Levels',
    benefits: [
      'Reasoning assessment',
      'Skill evaluation',
      'Performance tracking',
    ],
    faqs: [],
  },
  'reasoning-master': {
    slug: 'reasoning-master',
    title: 'Reasoning Master - Advanced Logic Training Game',
    description:
      'Become a reasoning master with advanced logic challenges. Multi-step reasoning problems that push your analytical abilities to the limit. For serious brain trainers.',
    keywords: [
      'reasoning master game',
      'advanced logic',
      'complex reasoning',
      'master level logic',
      'analytical puzzles',
    ],
    category: 'logic',
    difficulty: 'Hard',
    benefits: [
      'Advanced reasoning',
      'Complex analysis',
      'Expert-level thinking',
    ],
    faqs: [],
  },
  'algorithm-thinking': {
    slug: 'algorithm-thinking',
    title: 'Algorithm Thinking - Computational Logic Game',
    description:
      'Develop algorithmic thinking skills for coding interviews. Learn to break down problems, identify patterns, and think like a programmer. Essential for tech placements.',
    keywords: [
      'algorithm thinking game',
      'computational thinking',
      'coding logic',
      'programming mindset',
      'tech interview prep',
    ],
    category: 'logic',
    difficulty: 'Hard',
    benefits: ['Algorithmic thinking', 'Code logic', 'Tech interview prep'],
    faqs: [
      {
        question: 'How does this help with coding interviews?',
        answer:
          'Algorithm Thinking trains you to decompose problems, recognize patterns, and think systematically - the core skills tested in technical coding interviews.',
      },
    ],
  },
  'predict-output': {
    slug: 'predict-output',
    title: 'Predict Output - Code Tracing Brain Game',
    description:
      'Predict the output of code snippets. Perfect for programming interviews and coding assessments. Trace through logic and understand code execution flow.',
    keywords: [
      'predict output game',
      'code tracing',
      'programming game',
      'code output',
      'coding interview practice',
    ],
    category: 'logic',
    difficulty: 'Medium',
    benefits: ['Code tracing', 'Debugging skills', 'Programming logic'],
    faqs: [],
  },
  'debugging-challenge': {
    slug: 'debugging-challenge',
    title: 'Debugging Challenge - Find & Fix Code Bugs Game',
    description:
      'Spot bugs in code snippets and fix them. Essential skill for software developers. Practice debugging in multiple programming languages including Python, JavaScript, and Java.',
    keywords: [
      'debugging game',
      'bug fixing',
      'code debugging',
      'programming bugs',
      'software debugging',
    ],
    category: 'logic',
    difficulty: 'Hard',
    benefits: ['Debugging skills', 'Code analysis', 'Error detection'],
    faqs: [],
  },
  'critical-thinking-quiz': {
    slug: 'critical-thinking-quiz',
    title: 'Critical Thinking Quiz - Evaluate Arguments & Claims',
    description:
      'Test and improve your critical thinking with our quiz. Evaluate arguments, identify logical fallacies, and make better decisions. Essential life skill training.',
    keywords: [
      'critical thinking quiz',
      'argument evaluation',
      'logical fallacies',
      'decision making',
      'critical analysis',
    ],
    category: 'logic',
    difficulty: 'Medium',
    benefits: ['Critical evaluation', 'Fallacy detection', 'Better decisions'],
    faqs: [],
  },
  'problem-decomposition': {
    slug: 'problem-decomposition',
    title: 'Problem Decomposition - Break Down Complex Problems',
    description:
      'Learn to break down complex problems into manageable parts. Essential skill for programming, project management, and analytical thinking. Systematic problem-solving training.',
    keywords: [
      'problem decomposition',
      'break down problems',
      'systematic thinking',
      'problem solving',
      'analytical breakdown',
    ],
    category: 'logic',
    difficulty: 'Medium',
    benefits: [
      'Problem breakdown',
      'Systematic approach',
      'Complexity management',
    ],
    faqs: [],
  },
};

// ============================================
// MATH GAMES SEO CONFIGURATION
// ============================================
export const mathGames: Record<string, GameSEOConfig> = {
  'speed-math': {
    slug: 'speed-math',
    title: 'Speed Math Game - Quick Calculation Challenge',
    description:
      'Race against time with Speed Math! Practice addition, subtraction, multiplication, and division under pressure. Essential for aptitude tests and mental math improvement.',
    keywords: [
      'speed math game',
      'quick calculation',
      'arithmetic practice',
      'mental math',
      'calculation speed',
      'math under pressure',
    ],
    category: 'math',
    difficulty: 'All Levels',
    benefits: ['Calculation speed', 'Mental math', 'Time management'],
    faqs: [
      {
        question: 'How does Speed Math help with aptitude tests?',
        answer:
          'Speed Math trains you to calculate quickly under time pressure - exactly the skill needed for quantitative sections of aptitude tests where every second counts.',
      },
      {
        question: 'What math operations are covered?',
        answer:
          'Speed Math covers all four operations: addition, subtraction, multiplication, and division, with increasing difficulty levels.',
      },
    ],
  },
  'mental-math': {
    slug: 'mental-math',
    title: 'Mental Math Game - Advanced Calculation Training',
    description:
      'Master mental math with advanced calculation techniques. Learn Vedic math shortcuts, estimation, and rapid computation. Perfect for competitive exam preparation.',
    keywords: [
      'mental math game',
      'vedic math',
      'calculation tricks',
      'math shortcuts',
      'rapid calculation',
    ],
    category: 'math',
    difficulty: 'Hard',
    benefits: ['Advanced calculation', 'Math shortcuts', 'Mental computation'],
    faqs: [],
  },
  'math-speed-test': {
    slug: 'math-speed-test',
    title: 'Math Speed Test - Timed Arithmetic Challenge',
    description:
      'Take the Math Speed Test to measure your calculation speed. Timed challenges with instant scoring. Track your improvement and compare with others.',
    keywords: [
      'math speed test',
      'arithmetic test',
      'calculation test',
      'math assessment',
      'timed math',
    ],
    category: 'math',
    difficulty: 'All Levels',
    benefits: [
      'Speed assessment',
      'Performance tracking',
      'Competitive scoring',
    ],
    faqs: [],
  },
  'number-sequence': {
    slug: 'number-sequence',
    title: 'Number Sequence Game - Mathematical Pattern Training',
    description:
      'Crack number sequences and find the pattern. Arithmetic, geometric, Fibonacci, and complex sequences. Common aptitude question type for all competitive exams.',
    keywords: [
      'number sequence game',
      'math patterns',
      'series completion',
      'aptitude sequences',
      'number series',
    ],
    category: 'math',
    difficulty: 'Medium',
    benefits: [
      'Pattern recognition',
      'Series analysis',
      'Mathematical reasoning',
    ],
    faqs: [
      {
        question: 'What types of number sequences are included?',
        answer:
          'Arithmetic, geometric, Fibonacci, prime, square, cube, and complex mixed sequences - covering all types found in aptitude tests.',
      },
    ],
  },
  'number-series': {
    slug: 'number-series',
    title: 'Number Series - Complete the Sequence Game',
    description:
      'Find the missing number in series. Practice with arithmetic, geometric, and logical sequences. Essential preparation for quantitative aptitude sections.',
    keywords: [
      'number series game',
      'complete sequence',
      'missing number',
      'math series',
      'quantitative aptitude',
    ],
    category: 'math',
    difficulty: 'Medium',
    benefits: ['Series completion', 'Number patterns', 'Logical deduction'],
    faqs: [],
  },
  'percentage-puzzle': {
    slug: 'percentage-puzzle',
    title: 'Percentage Puzzle - Master Percentage Calculations',
    description:
      'Master percentage calculations with interactive puzzles. Discounts, profit-loss, interest, and ratio problems. Crucial for bank exams and business math.',
    keywords: [
      'percentage puzzle',
      'percentage game',
      'percentage calculation',
      'discount calculation',
      'profit loss',
    ],
    category: 'math',
    difficulty: 'Medium',
    benefits: ['Percentage mastery', 'Business math', 'Real-world application'],
    faqs: [],
  },
  'profit-loss-game': {
    slug: 'profit-loss-game',
    title: 'Profit Loss Game - Business Mathematics Training',
    description:
      'Calculate profit, loss, cost price, and selling price. Real-world business scenarios to master commercial math. Essential for banking and business aptitude.',
    keywords: [
      'profit loss game',
      'business math',
      'cost price',
      'selling price',
      'commercial aptitude',
    ],
    category: 'math',
    difficulty: 'Medium',
    benefits: ['Business calculations', 'Commercial math', 'Practical skills'],
    faqs: [],
  },
  'time-work-challenge': {
    slug: 'time-work-challenge',
    title: 'Time & Work Challenge - Efficiency Calculation Game',
    description:
      'Solve time and work problems efficiently. Calculate work rates, combined efficiency, and completion times. Common aptitude topic for all competitive exams.',
    keywords: [
      'time work game',
      'efficiency calculation',
      'work rate',
      'time problems',
      'aptitude math',
    ],
    category: 'math',
    difficulty: 'Hard',
    benefits: [
      'Time-work concepts',
      'Efficiency math',
      'Complex problem-solving',
    ],
    faqs: [],
  },
  'math-proof-builder': {
    slug: 'math-proof-builder',
    title: 'Math Proof Builder - Logical Proof Construction',
    description:
      'Build mathematical proofs step by step. Learn proof techniques for geometry, algebra, and number theory. Essential for advanced mathematics and olympiad preparation.',
    keywords: [
      'math proof game',
      'proof construction',
      'mathematical logic',
      'proof techniques',
      'olympiad math',
    ],
    category: 'math',
    difficulty: 'Hard',
    benefits: ['Proof construction', 'Mathematical reasoning', 'Formal logic'],
    faqs: [],
  },
};

// ============================================
// VOCABULARY GAMES SEO CONFIGURATION
// ============================================
export const vocabularyGames: Record<string, GameSEOConfig> = {
  'word-association': {
    slug: 'word-association',
    title: 'Word Association Game - Vocabulary & Connection Training',
    description:
      'Build vocabulary through word associations. Connect related words, learn synonyms, and expand your lexicon. Perfect for verbal aptitude and language skills.',
    keywords: [
      'word association game',
      'vocabulary game',
      'word connections',
      'verbal aptitude',
      'language skills',
    ],
    category: 'vocabulary',
    difficulty: 'Easy',
    benefits: ['Vocabulary building', 'Word connections', 'Verbal fluency'],
    faqs: [],
  },
  'word-scramble': {
    slug: 'word-scramble',
    title: 'Word Scramble - Unscramble Words Brain Game',
    description:
      'Unscramble jumbled letters to form words. Fun vocabulary challenge that improves spelling and word recognition. Race against time for high scores.',
    keywords: [
      'word scramble game',
      'anagram game',
      'unscramble words',
      'spelling game',
      'word puzzle',
    ],
    category: 'vocabulary',
    difficulty: 'Easy',
    benefits: ['Spelling improvement', 'Word recognition', 'Quick thinking'],
    faqs: [],
  },
  'synonym-match': {
    slug: 'synonym-match',
    title: 'Synonym Match - Word Meaning Matching Game',
    description:
      'Match words with their synonyms. Build vocabulary and understand word relationships. Essential for verbal sections of GRE, CAT, and competitive exams.',
    keywords: [
      'synonym match game',
      'synonym game',
      'vocabulary matching',
      'GRE vocabulary',
      'word meanings',
    ],
    category: 'vocabulary',
    difficulty: 'Medium',
    benefits: ['Synonym knowledge', 'Vocabulary depth', 'Exam preparation'],
    faqs: [],
  },
  'antonym-challenge': {
    slug: 'antonym-challenge',
    title: 'Antonym Challenge - Opposite Words Training Game',
    description:
      'Find opposite words quickly. Master antonyms for verbal reasoning tests. Commonly tested in GRE, CAT, banking exams, and campus placements.',
    keywords: [
      'antonym challenge',
      'opposite words game',
      'antonym game',
      'verbal reasoning',
      'vocabulary test',
    ],
    category: 'vocabulary',
    difficulty: 'Medium',
    benefits: ['Antonym mastery', 'Verbal reasoning', 'Quick recall'],
    faqs: [],
  },
  'spelling-bee': {
    slug: 'spelling-bee',
    title: 'Spelling Bee - Master English Spelling Game',
    description:
      'Test and improve your spelling skills. Learn correct spellings of commonly misspelled words. Fun spelling practice for students of all ages.',
    keywords: [
      'spelling bee game',
      'spelling practice',
      'spell words',
      'English spelling',
      'spelling test',
    ],
    category: 'vocabulary',
    difficulty: 'All Levels',
    benefits: ['Spelling accuracy', 'Word knowledge', 'Language skills'],
    faqs: [],
  },
  'daily-riddle': {
    slug: 'daily-riddle',
    title: 'Daily Riddle - Brain Teaser Word Puzzles',
    description:
      'Solve a new riddle every day! Brain teasers that stretch your thinking. Fun way to start your day while training lateral thinking and creativity.',
    keywords: [
      'daily riddle',
      'brain teasers',
      'riddle game',
      'word puzzles',
      'lateral thinking',
    ],
    category: 'vocabulary',
    difficulty: 'All Levels',
    benefits: [
      'Lateral thinking',
      'Creative problem-solving',
      'Daily brain exercise',
    ],
    faqs: [],
  },
};

// ============================================
// FOCUS GAMES SEO CONFIGURATION
// ============================================
export const focusGames: Record<string, GameSEOConfig> = {
  'concentration-test': {
    slug: 'concentration-test',
    title: 'Concentration Test - Focus & Attention Training',
    description:
      'Test and improve your concentration abilities. Measure attention span and focus quality. Reduce distractions and improve productivity with regular practice.',
    keywords: [
      'concentration test',
      'focus test',
      'attention training',
      'concentration game',
      'focus improvement',
    ],
    category: 'focus',
    difficulty: 'All Levels',
    benefits: ['Attention span', 'Focus quality', 'Distraction reduction'],
    faqs: [
      {
        question: 'How long should I practice concentration training?',
        answer:
          'Start with 10-15 minutes daily. Consistency is more important than duration. Regular short sessions are more effective than occasional long ones.',
      },
    ],
  },
  'concentration-challenge': {
    slug: 'concentration-challenge',
    title: 'Concentration Challenge - Distraction-Free Focus Game',
    description:
      'Challenge your concentration with increasingly difficult focus tasks. Learn to maintain attention despite distractions. Essential for exam preparation.',
    keywords: [
      'concentration challenge',
      'focus challenge',
      'attention game',
      'distraction training',
      'mental focus',
    ],
    category: 'focus',
    difficulty: 'Medium',
    benefits: [
      'Sustained attention',
      'Distraction resistance',
      'Mental endurance',
    ],
    faqs: [],
  },
  'focus-booster': {
    slug: 'focus-booster',
    title: 'Focus Booster - Quick Concentration Exercises',
    description:
      'Quick exercises to boost your focus before study or work. 5-minute concentration warmups that prime your brain for peak performance.',
    keywords: [
      'focus booster game',
      'concentration exercises',
      'focus warmup',
      'brain primer',
      'attention boost',
    ],
    category: 'focus',
    difficulty: 'Easy',
    benefits: ['Quick focus', 'Pre-study warmup', 'Mental preparation'],
    faqs: [],
  },
  'attention-trainer': {
    slug: 'attention-trainer',
    title: 'Attention Trainer - Selective Attention Training',
    description:
      'Train selective attention and filter out distractions. Learn to focus on what matters. Scientific approach to improving attention and reducing errors.',
    keywords: [
      'attention trainer',
      'selective attention',
      'attention game',
      'focus training',
      'error reduction',
    ],
    category: 'focus',
    difficulty: 'Medium',
    benefits: ['Selective attention', 'Error reduction', 'Signal detection'],
    faqs: [],
  },
  'reaction-time-test': {
    slug: 'reaction-time-test',
    title: 'Reaction Time Test - Speed & Reflexes Training',
    description:
      'Test and improve your reaction time. Measure how fast you respond to visual stimuli. Essential for gaming, sports, and cognitive assessment.',
    keywords: [
      'reaction time test',
      'reflex test',
      'response time',
      'reaction speed',
      'cognitive speed',
    ],
    category: 'focus',
    difficulty: 'Easy',
    benefits: ['Faster reactions', 'Reflex improvement', 'Processing speed'],
    faqs: [
      {
        question: 'What is a good reaction time?',
        answer:
          'Average human reaction time is 200-250ms for visual stimuli. With practice, you can improve to 150-200ms. Athletes and gamers often achieve below 150ms.',
      },
    ],
  },
  'quick-click-challenge': {
    slug: 'quick-click-challenge',
    title: 'Quick Click Challenge - Speed Accuracy Training',
    description:
      'Click targets quickly and accurately. Balance speed with precision. Fun game that improves hand-eye coordination and reaction speed.',
    keywords: [
      'quick click game',
      'speed click',
      'accuracy game',
      'hand-eye coordination',
      'click speed',
    ],
    category: 'focus',
    difficulty: 'Easy',
    benefits: [
      'Click accuracy',
      'Hand-eye coordination',
      'Speed-accuracy balance',
    ],
    faqs: [],
  },
  'speed-focus-game': {
    slug: 'speed-focus-game',
    title: 'Speed Focus Game - Rapid Attention Training',
    description:
      'Combine speed and focus in this intense brain game. Process information quickly while maintaining accuracy. Train your brain for high-pressure situations.',
    keywords: [
      'speed focus game',
      'rapid attention',
      'quick processing',
      'fast focus',
      'pressure training',
    ],
    category: 'focus',
    difficulty: 'Hard',
    benefits: ['Rapid processing', 'Pressure performance', 'Quick decisions'],
    faqs: [],
  },
  'think-fast': {
    slug: 'think-fast',
    title: 'Think Fast - Quick Decision Making Game',
    description:
      'Make split-second decisions in Think Fast. Train your brain to process and respond quickly. Improve cognitive speed and decision-making under pressure.',
    keywords: [
      'think fast game',
      'quick decisions',
      'rapid thinking',
      'decision speed',
      'cognitive speed',
    ],
    category: 'focus',
    difficulty: 'Medium',
    benefits: ['Quick decisions', 'Cognitive speed', 'Pressure handling'],
    faqs: [],
  },
  'trivia-quiz': {
    slug: 'trivia-quiz',
    title: 'Trivia Quiz - General Knowledge Brain Game',
    description:
      'Test your knowledge with diverse trivia questions. Science, history, geography, sports, and more. Fun way to learn while training memory recall.',
    keywords: [
      'trivia quiz',
      'knowledge quiz',
      'general knowledge',
      'quiz game',
      'trivia game',
    ],
    category: 'focus',
    difficulty: 'All Levels',
    benefits: ['General knowledge', 'Memory recall', 'Learning through play'],
    faqs: [],
  },
  'typing-speed': {
    slug: 'typing-speed',
    title: 'Typing Speed Test (Coding Edition) - WPM Test for Developers',
    description:
      'Test your typing speed and accuracy with our developer-focused typing test. Practice coding syntax, programming patterns, and sentences. Measure WPM, track your personal best, and improve keyboard skills for coding interviews.',
    keywords: [
      'typing speed test',
      'WPM test',
      'coding typing test',
      'typing test for programmers',
      'keyboard speed test',
      'typing practice online',
      'developer typing speed',
      'code typing practice',
      'typing test free',
      'words per minute test',
      'programmer typing practice',
      'keyboard skills for coding',
      'typing accuracy test',
      'online typing test',
      'fast typing practice',
    ],
    category: 'focus',
    difficulty: 'All Levels',
    benefits: [
      'Measure typing speed in WPM',
      'Improve coding accuracy',
      'Practice programming syntax',
      'Develop muscle memory for code',
      'Track personal best scores',
    ],
    faqs: [
      {
        question: 'What is a good typing speed for programmers?',
        answer:
          'A good typing speed for programmers is 50-80 WPM with high accuracy. Most professional developers type between 60-100 WPM. However, accuracy is more important than raw speed for coding, since a single mistyped character can cause bugs.',
      },
      {
        question: 'How does the coding mode differ from regular typing tests?',
        answer:
          'The coding mode uses real programming syntax including brackets, semicolons, arrow functions, and common code patterns. This trains muscle memory for characters like { } [ ] => ; that are used frequently in programming but rarely in everyday typing.',
      },
      {
        question: 'How often should I practice typing to see improvement?',
        answer:
          'Practicing 10-15 minutes daily yields the best results. Consistent short sessions are more effective than occasional long ones. Most people see measurable improvement (5-10 WPM increase) within 2-3 weeks of daily practice.',
      },
      {
        question: 'Does typing speed matter for coding interviews?',
        answer:
          'Yes, typing speed matters in timed coding interviews where you need to write solutions quickly. Companies like Google, Amazon, and Microsoft use timed coding assessments. Faster typing lets you spend more time thinking about the algorithm instead of struggling with the keyboard.',
      },
      {
        question: 'What is WPM and how is it calculated?',
        answer:
          'WPM stands for Words Per Minute. It is calculated by dividing the total characters typed by 5 (the standard word length), then dividing by the time elapsed in minutes. For example, typing 250 characters in 1 minute equals 50 WPM.',
      },
    ],
  },
};

// ============================================
// ADVANCED THINKING GAMES SEO CONFIGURATION
// ============================================
export const advancedGames: Record<string, GameSEOConfig> = {
  'bias-buster': {
    slug: 'bias-buster',
    title: 'Bias Buster - Cognitive Bias Recognition Game',
    description:
      'Identify cognitive biases in real-world scenarios. Learn about confirmation bias, anchoring, and more. Make better decisions by understanding mental shortcuts.',
    keywords: [
      'bias buster game',
      'cognitive bias',
      'decision making',
      'mental shortcuts',
      'bias recognition',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Bias awareness', 'Better decisions', 'Critical thinking'],
    faqs: [
      {
        question: 'What are cognitive biases?',
        answer:
          'Cognitive biases are mental shortcuts that can lead to errors in judgment. Understanding them helps you make more rational decisions in work and life.',
      },
    ],
  },
  'fallacy-detective': {
    slug: 'fallacy-detective',
    title: 'Fallacy Detective - Logical Fallacy Training Game',
    description:
      'Spot logical fallacies in arguments. Learn to identify strawman, ad hominem, false dichotomy, and more. Essential for critical thinking and debate skills.',
    keywords: [
      'fallacy detective',
      'logical fallacies',
      'argument analysis',
      'critical thinking',
      'debate skills',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Fallacy detection', 'Argument analysis', 'Debate preparation'],
    faqs: [],
  },
  'causal-chain-builder': {
    slug: 'causal-chain-builder',
    title: 'Causal Chain Builder - Cause & Effect Training',
    description:
      'Understand cause and effect relationships. Build causal chains and predict outcomes. Improve your ability to understand complex systems and consequences.',
    keywords: [
      'causal chain game',
      'cause effect',
      'systems thinking',
      'consequence prediction',
      'causal reasoning',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Causal reasoning', 'Systems thinking', 'Outcome prediction'],
    faqs: [],
  },
  'system-simulator': {
    slug: 'system-simulator',
    title: 'System Simulator - Complex Systems Thinking Game',
    description:
      'Simulate complex systems and observe emergent behavior. Understand feedback loops, delays, and cascading effects. Essential for engineering and management thinking.',
    keywords: [
      'system simulator',
      'systems thinking',
      'feedback loops',
      'complex systems',
      'emergence',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: [
      'Systems understanding',
      'Complex analysis',
      'Emergent thinking',
    ],
    faqs: [],
  },
  'decision-matrix-lab': {
    slug: 'decision-matrix-lab',
    title: 'Decision Matrix Lab - Structured Decision Making',
    description:
      'Make complex decisions using decision matrices. Weigh options systematically. Learn frameworks used by business leaders and strategists worldwide.',
    keywords: [
      'decision matrix',
      'decision making',
      'weighted decisions',
      'business strategy',
      'systematic thinking',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: ['Structured decisions', 'Option analysis', 'Strategic thinking'],
    faqs: [],
  },
  'risk-radar': {
    slug: 'risk-radar',
    title: 'Risk Radar - Risk Assessment & Probability Game',
    description:
      'Assess risks and calculate probabilities. Identify potential issues before they occur. Essential skill for project management and business planning.',
    keywords: [
      'risk radar game',
      'risk assessment',
      'probability game',
      'risk management',
      'project planning',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: ['Risk assessment', 'Probability thinking', 'Proactive planning'],
    faqs: [],
  },
  'strategic-standoff': {
    slug: 'strategic-standoff',
    title: 'Strategic Standoff - Game Theory & Strategy',
    description:
      "Learn game theory through strategic challenges. Understand Nash equilibrium, prisoner's dilemma, and competitive strategy. For future business leaders.",
    keywords: [
      'strategic standoff',
      'game theory',
      'strategy game',
      'Nash equilibrium',
      'competitive strategy',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Game theory', 'Strategic thinking', 'Competitive analysis'],
    faqs: [],
  },
  'complexity-cracker': {
    slug: 'complexity-cracker',
    title: 'Complexity Cracker - Simplify Complex Problems',
    description:
      'Learn to simplify complex problems. Break down complicated scenarios into manageable components. Essential skill for consulting and problem-solving.',
    keywords: [
      'complexity cracker',
      'problem simplification',
      'consulting skills',
      'complexity management',
      'analytical thinking',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Simplification', 'Clarity', 'Problem management'],
    faqs: [],
  },
  'constraint-crusher': {
    slug: 'constraint-crusher',
    title: 'Constraint Crusher - Optimization & Resource Game',
    description:
      'Solve optimization problems with limited resources. Find the best solution under constraints. Essential for operations research and business optimization.',
    keywords: [
      'constraint crusher',
      'optimization game',
      'resource management',
      'operations research',
      'constraint solving',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Optimization', 'Resource allocation', 'Constraint handling'],
    faqs: [],
  },
  'data-detective': {
    slug: 'data-detective',
    title: 'Data Detective - Data Analysis & Interpretation Game',
    description:
      'Analyze data and draw conclusions. Identify trends, outliers, and patterns. Essential skill for data science, analytics, and research careers.',
    keywords: [
      'data detective game',
      'data analysis',
      'data interpretation',
      'analytics game',
      'data patterns',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: [
      'Data analysis',
      'Trend identification',
      'Evidence-based thinking',
    ],
    faqs: [],
  },
  'chart-challenge': {
    slug: 'chart-challenge',
    title: 'Chart Challenge - Data Visualization Interpretation',
    description:
      'Read and interpret charts, graphs, and data visualizations. Common skill tested in banking exams and business analytics interviews.',
    keywords: [
      'chart challenge',
      'data visualization',
      'graph reading',
      'chart interpretation',
      'data literacy',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: ['Chart reading', 'Data visualization', 'Business analytics'],
    faqs: [],
  },
  'stats-skeptic': {
    slug: 'stats-skeptic',
    title: 'Stats Skeptic - Statistical Reasoning Game',
    description:
      'Evaluate statistical claims and identify manipulation. Learn to spot misleading statistics and data presentation tricks. Essential media literacy skill.',
    keywords: [
      'stats skeptic game',
      'statistical reasoning',
      'data literacy',
      'misleading statistics',
      'critical data analysis',
    ],
    category: 'advanced',
    difficulty: 'Hard',
    benefits: ['Statistical thinking', 'Data skepticism', 'Media literacy'],
    faqs: [],
  },
  'smart-choice': {
    slug: 'smart-choice',
    title: 'Smart Choice - Multi-Criteria Decision Game',
    description:
      'Make smart choices with multiple criteria. Learn to balance competing priorities. Real-world decision scenarios for personal and professional life.',
    keywords: [
      'smart choice game',
      'decision making',
      'priority balancing',
      'choice optimization',
      'multi-criteria',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: ['Decision quality', 'Priority setting', 'Trade-off analysis'],
    faqs: [],
  },
  'situation-judgment': {
    slug: 'situation-judgment',
    title: 'Situation Judgment Test - Workplace Scenario Training',
    description:
      'Practice situational judgment tests (SJT). Common in campus placements and job interviews. Learn to handle workplace scenarios professionally.',
    keywords: [
      'situation judgment',
      'SJT practice',
      'workplace scenarios',
      'interview preparation',
      'professional judgment',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: [
      'Professional judgment',
      'Workplace readiness',
      'Interview prep',
    ],
    faqs: [],
  },
  'email-etiquette': {
    slug: 'email-etiquette',
    title: 'Email Etiquette - Professional Communication Game',
    description:
      'Master professional email writing. Learn tone, formatting, and best practices. Essential skill for workplace success and business communication.',
    keywords: [
      'email etiquette game',
      'professional email',
      'business writing',
      'communication skills',
      'workplace email',
    ],
    category: 'advanced',
    difficulty: 'Easy',
    benefits: [
      'Email skills',
      'Professional communication',
      'Business writing',
    ],
    faqs: [],
  },
  'interview-ready': {
    slug: 'interview-ready',
    title: 'Interview Ready - HR Interview Simulation Game',
    description:
      'Practice common HR interview questions. Learn best answers and techniques. Build confidence for your next job interview with realistic scenarios.',
    keywords: [
      'interview ready game',
      'HR interview practice',
      'interview questions',
      'job interview prep',
      'interview confidence',
    ],
    category: 'advanced',
    difficulty: 'Medium',
    benefits: ['Interview confidence', 'Answer techniques', 'HR preparation'],
    faqs: [],
  },
};

// ============================================
// SCIENCE GAMES SEO CONFIGURATION (JEE/NEET PREP)
// ============================================
export const scienceGames: Record<string, GameSEOConfig> = {
  'concept-sprint': {
    slug: 'concept-sprint',
    title: 'Concept Sprint - Quick Science Concept Review',
    description:
      'Rapid-fire science concept review for JEE and NEET. Test Physics, Chemistry, and Biology fundamentals. Speed revision before exams.',
    keywords: [
      'concept sprint',
      'JEE preparation',
      'NEET preparation',
      'science concepts',
      'quick revision',
    ],
    category: 'science',
    difficulty: 'All Levels',
    benefits: ['Concept clarity', 'Quick revision', 'Exam preparation'],
    faqs: [
      {
        question: 'Is Concept Sprint useful for JEE/NEET?',
        answer:
          'Yes! Concept Sprint covers fundamental concepts from Physics, Chemistry, and Biology that are essential for JEE Mains, JEE Advanced, and NEET preparation.',
      },
    ],
  },
  'deep-problem-marathon': {
    slug: 'deep-problem-marathon',
    title: 'Deep Problem Marathon - Advanced Problem Solving',
    description:
      'Tackle challenging problems that require deep thinking. Multi-step solutions for JEE Advanced and NEET level questions. Build problem-solving stamina.',
    keywords: [
      'deep problem marathon',
      'JEE Advanced prep',
      'difficult problems',
      'multi-step solutions',
      'advanced reasoning',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: ['Deep thinking', 'Problem stamina', 'Advanced problem-solving'],
    faqs: [],
  },
  'fermi-estimation-duel': {
    slug: 'fermi-estimation-duel',
    title: 'Fermi Estimation - Order of Magnitude Training',
    description:
      'Practice Fermi estimation problems. Estimate quantities without exact data. Essential skill for consulting interviews and scientific reasoning.',
    keywords: [
      'Fermi estimation',
      'order of magnitude',
      'estimation problems',
      'consulting prep',
      'guesstimates',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: [
      'Estimation skills',
      'Scientific reasoning',
      'Consulting preparation',
    ],
    faqs: [],
  },
  'physics-intuition-lab': {
    slug: 'physics-intuition-lab',
    title: 'Physics Intuition Lab - Build Physical Intuition',
    description:
      'Develop intuition for physics problems. Predict outcomes before calculating. Essential for JEE Physics and engineering entrance exams.',
    keywords: [
      'physics intuition',
      'JEE Physics',
      'physics problems',
      'intuitive physics',
      'engineering prep',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: [
      'Physical intuition',
      'Conceptual understanding',
      'JEE preparation',
    ],
    faqs: [],
  },
  'derivation-race': {
    slug: 'derivation-race',
    title: 'Derivation Race - Mathematical Derivation Training',
    description:
      'Master important physics and math derivations. Step-by-step derivation practice for board exams and competitive entrance tests.',
    keywords: [
      'derivation race',
      'physics derivations',
      'math derivations',
      'step-by-step proofs',
      'board exam prep',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: ['Derivation skills', 'Mathematical fluency', 'Exam preparation'],
    faqs: [],
  },
  'dimensional-detective': {
    slug: 'dimensional-detective',
    title: 'Dimensional Detective - Dimensional Analysis Game',
    description:
      'Master dimensional analysis for physics. Check equations, derive formulas, and solve problems using units. Powerful technique for JEE and NEET.',
    keywords: [
      'dimensional analysis',
      'dimensional detective',
      'physics units',
      'formula verification',
      'JEE techniques',
    ],
    category: 'science',
    difficulty: 'Medium',
    benefits: [
      'Dimensional analysis',
      'Formula verification',
      'Error checking',
    ],
    faqs: [],
  },
  'error-spotter': {
    slug: 'error-spotter',
    title: 'Error Spotter - Science Problem Error Detection',
    description:
      'Spot errors in scientific calculations and reasoning. Common mistakes in Physics, Chemistry, and Biology. Learn from errors before exams.',
    keywords: [
      'error spotter game',
      'science errors',
      'common mistakes',
      'calculation errors',
      'JEE NEET prep',
    ],
    category: 'science',
    difficulty: 'Medium',
    benefits: ['Error detection', 'Mistake prevention', 'Careful analysis'],
    faqs: [],
  },
  'organic-synthesis': {
    slug: 'organic-synthesis',
    title: 'Organic Synthesis - Chemistry Reaction Training',
    description:
      'Master organic chemistry reactions and synthesis. Predict products, plan retrosynthesis, and understand mechanisms. Essential for JEE and NEET Chemistry.',
    keywords: [
      'organic synthesis game',
      'organic chemistry',
      'reaction prediction',
      'retrosynthesis',
      'JEE Chemistry',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: [
      'Organic reactions',
      'Synthesis planning',
      'Mechanism understanding',
    ],
    faqs: [],
  },
  'biology-pathway': {
    slug: 'biology-pathway',
    title: 'Biology Pathway - Metabolic Pathway Training',
    description:
      'Learn metabolic pathways and biological processes. Glycolysis, Krebs cycle, photosynthesis, and more. Essential NEET Biology preparation.',
    keywords: [
      'biology pathway game',
      'metabolic pathways',
      'NEET Biology',
      'biochemistry',
      'biological processes',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: ['Pathway knowledge', 'Biochemistry', 'NEET preparation'],
    faqs: [],
  },
  'reaction-mechanism': {
    slug: 'reaction-mechanism',
    title: 'Reaction Mechanism - Chemistry Mechanism Training',
    description:
      'Understand and predict chemical reaction mechanisms. Electron flow, intermediates, and transition states. Advanced chemistry for JEE Advanced.',
    keywords: [
      'reaction mechanism game',
      'chemistry mechanism',
      'electron flow',
      'organic mechanism',
      'JEE Chemistry',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: [
      'Mechanism understanding',
      'Electron pushing',
      'Advanced chemistry',
    ],
    faqs: [],
  },
  'clinical-case': {
    slug: 'clinical-case',
    title: 'Clinical Case - Medical Diagnosis Training',
    description:
      'Solve clinical cases like a doctor. Analyze symptoms, order tests, and make diagnoses. Perfect for NEET aspirants and medical students.',
    keywords: [
      'clinical case game',
      'medical diagnosis',
      'NEET preparation',
      'clinical reasoning',
      'medical training',
    ],
    category: 'science',
    difficulty: 'Hard',
    benefits: [
      'Clinical reasoning',
      'Diagnostic thinking',
      'Medical preparation',
    ],
    faqs: [],
  },
};

// ============================================
// CODING GAMES SEO CONFIGURATION
// ============================================
export const codingGames: Record<string, GameSEOConfig> = {
  'coding/debug-arena': {
    slug: 'coding/debug-arena',
    title: 'Debug Arena - Find & Fix Code Bugs | Practice Debugging Online',
    description:
      'Practice debugging skills with Debug Arena. Find and fix bugs in JavaScript & Python code. Perfect for coding interviews, tech placements, and improving your debugging abilities.',
    keywords: [
      'debugging practice',
      'find bugs in code',
      'fix code bugs game',
      'debugging game online',
      'code debugging practice',
      'JavaScript debugging',
      'Python debugging',
      'coding interview prep',
      'debug code online',
      'programming bugs',
      'software debugging practice',
      'learn debugging',
      'bug fixing game',
      'code review practice',
      'debugging skills',
    ],
    category: 'coding',
    difficulty: 'All Levels',
    benefits: [
      'Improve debugging skills',
      'Identify common coding errors',
      'Prepare for coding interviews',
      'Learn error patterns',
      'Faster bug detection',
    ],
    faqs: [
      {
        question: 'What is Debug Arena?',
        answer:
          'Debug Arena is an interactive coding game where you identify and fix bugs in real code snippets. It covers common bugs like infinite loops, scope errors, off-by-one errors, and type confusion in JavaScript and Python.',
      },
      {
        question: 'How does Debug Arena help with coding interviews?',
        answer:
          'Many coding interviews include debugging challenges. Debug Arena trains you to quickly identify common bug patterns, understand error messages, and fix code under time pressure - essential skills for technical interviews.',
      },
      {
        question: 'What programming languages are supported?',
        answer:
          'Debug Arena currently supports JavaScript and Python, the two most popular languages for coding interviews and web development. Each language includes multiple difficulty levels.',
      },
      {
        question: 'Is Debug Arena suitable for beginners?',
        answer:
          'Yes! Debug Arena starts with easy bugs like missing increments and variable scope issues. As you improve, you progress to more challenging bugs involving async code, complex logic, and edge cases.',
      },
      {
        question: 'How does the hint system work?',
        answer:
          'Each challenge includes progressive hints. Using hints reduces your XP reward slightly, encouraging you to solve problems independently while ensuring you can learn from every challenge.',
      },
    ],
  },
  'coding/regex-master': {
    slug: 'coding/regex-master',
    title:
      'Regex Master - Learn Regular Expressions | Interactive Regex Practice',
    description:
      'Master regular expressions with Regex Master. Write patterns, test matches in real-time, and learn regex for form validation, data parsing, and coding interviews.',
    keywords: [
      'learn regex',
      'regular expressions practice',
      'regex game online',
      'regex tutorial interactive',
      'pattern matching practice',
      'regex for beginners',
      'regex cheat sheet practice',
      'email validation regex',
      'phone number regex',
      'regex coding interview',
      'regular expression examples',
      'regex tester game',
      'learn regular expressions',
      'regex pattern matching',
      'text pattern matching',
    ],
    category: 'coding',
    difficulty: 'All Levels',
    benefits: [
      'Master regex syntax',
      'Form validation skills',
      'Data extraction abilities',
      'Text processing expertise',
      'Pattern matching proficiency',
    ],
    faqs: [
      {
        question: 'What is Regex Master?',
        answer:
          'Regex Master is an interactive game that teaches regular expressions through hands-on practice. Write patterns to match email addresses, phone numbers, URLs, and more with instant visual feedback.',
      },
      {
        question: 'Why should I learn regular expressions?',
        answer:
          'Regex is essential for form validation, data parsing, search functionality, and text processing. It appears in coding interviews and is used daily by developers for string manipulation tasks.',
      },
      {
        question: 'How does live testing work?',
        answer:
          'As you type your regex pattern, the game instantly shows which test strings match and which dont. Green indicates correct matches, red shows misses, helping you learn through immediate feedback.',
      },
      {
        question: 'What regex concepts are covered?',
        answer:
          'Regex Master covers character classes, quantifiers, anchors, groups, alternation, lookaheads, and real-world patterns for emails, URLs, phones, dates, passwords, and IP addresses.',
      },
      {
        question: 'Is there a regex reference guide?',
        answer:
          'Yes! Each challenge includes a quick reference panel with common regex syntax. You can also reveal the solution pattern to learn from examples.',
      },
    ],
  },
  'coding/algorithm-builder': {
    slug: 'coding/algorithm-builder',
    title:
      'Algorithm Builder - Learn Data Structures & Algorithms | Coding Practice',
    description:
      'Build classic algorithms step-by-step. Practice bubble sort, binary search, two sum, and more. Perfect for coding interviews and data structures learning.',
    keywords: [
      'algorithm practice',
      'data structures game',
      'learn algorithms online',
      'bubble sort practice',
      'binary search tutorial',
      'two sum solution',
      'coding challenges',
      'DSA practice',
      'algorithm visualization',
      'coding interview preparation',
      'LeetCode practice',
      'FAANG interview prep',
      'algorithm building game',
      'learn data structures',
      'programming algorithms',
    ],
    category: 'coding',
    difficulty: 'Medium',
    benefits: [
      'Learn classic algorithms',
      'Understand algorithm patterns',
      'Prepare for FAANG interviews',
      'Build coding confidence',
      'Master problem-solving',
    ],
    faqs: [
      {
        question: 'What is Algorithm Builder?',
        answer:
          'Algorithm Builder teaches classic algorithms through hands-on coding. You fill in missing code to complete implementations of sorting, searching, and data structure algorithms with guided hints.',
      },
      {
        question: 'What algorithms can I learn?',
        answer:
          'Algorithm Builder covers sorting (bubble sort), searching (binary search), hash-based (two sum), dynamic programming (fibonacci), two-pointer (merge arrays), and linked list algorithms.',
      },
      {
        question: 'How does this help with coding interviews?',
        answer:
          'Coding interviews focus on algorithm knowledge. Algorithm Builder teaches the exact patterns used in FAANG interviews, helping you recognize problem types and apply correct solutions.',
      },
      {
        question: 'Can I use JavaScript or Python?',
        answer:
          'Yes! Each algorithm is available in both JavaScript and Python. Switch between languages to practice in your preferred language or learn both for versatility.',
      },
      {
        question: 'What difficulty levels are available?',
        answer:
          'Challenges range from easy (bubble sort, two sum) to hard (reverse linked list). Each has starter code with clear // YOUR CODE HERE markers showing exactly what to implement.',
      },
    ],
  },
  'coding/refactor-challenge': {
    slug: 'coding/refactor-challenge',
    title: 'Refactor Challenge - Code Optimization Practice | Clean Code Game',
    description:
      'Optimize inefficient code! Practice refactoring, learn performance optimization, and master clean code principles with real-world coding challenges.',
    keywords: [
      'code refactoring practice',
      'clean code game',
      'code optimization',
      'refactoring examples',
      'performance optimization',
      'code quality practice',
      'best practices coding',
      'code improvement',
      'efficiency optimization',
      'reduce complexity',
      'code smell removal',
      'DRY principle practice',
      'code review skills',
      'programming best practices',
      'optimize code online',
    ],
    category: 'coding',
    difficulty: 'Medium',
    benefits: [
      'Write cleaner code',
      'Optimize performance',
      'Learn best practices',
      'Reduce code complexity',
      'Improve code quality',
    ],
    faqs: [
      {
        question: 'What is Refactor Challenge?',
        answer:
          'Refactor Challenge gives you working but inefficient code and challenges you to optimize it. Learn to remove unnecessary loops, use built-in methods, and apply clean code principles.',
      },
      {
        question: 'What types of refactoring are covered?',
        answer:
          'Challenges include removing nested loops, simplifying conditionals, using appropriate data structures, eliminating redundant code, and applying modern language features like reduce() and Set().',
      },
      {
        question: 'How is performance measured?',
        answer:
          'The game measures execution time before and after refactoring. Your optimized solution is compared to the original, showing exactly how much faster your code runs.',
      },
      {
        question: 'Why is refactoring important?',
        answer:
          'Clean, efficient code is easier to maintain, has fewer bugs, and performs better. Refactoring skills are valued in code reviews and demonstrate senior-level programming maturity.',
      },
      {
        question: 'Does this help with code reviews?',
        answer:
          'Absolutely! Refactor Challenge teaches you to spot common code smells and inefficiencies - the same skills used in professional code reviews.',
      },
    ],
  },
  'coding/output-prediction': {
    slug: 'coding/output-prediction',
    title:
      'Output Prediction - Code Tracing Practice | Predict Code Output Game',
    description:
      'Master code tracing by predicting program output. Understand execution flow, variable states, and edge cases. Essential for coding interviews and debugging.',
    keywords: [
      'predict code output',
      'code tracing practice',
      'execution flow understanding',
      'variable state tracking',
      'code output game',
      'programming quiz',
      'code analysis practice',
      'interview coding questions',
      'code behavior prediction',
      'program execution order',
      'loop tracing',
      'recursion tracing',
      'code walkthrough',
      'debugging practice',
      'code comprehension',
    ],
    category: 'coding',
    difficulty: 'Medium',
    benefits: [
      'Understand code execution',
      'Trace variable states',
      'Predict edge cases',
      'Debug more effectively',
      'Read code confidently',
    ],
    faqs: [
      {
        question: 'What is Output Prediction?',
        answer:
          'Output Prediction challenges you to read code snippets and predict what they will output. It tests your understanding of execution flow, scope, closures, and programming concepts.',
      },
      {
        question: 'How does this improve debugging skills?',
        answer:
          'Understanding how code executes is fundamental to debugging. By predicting output, you practice the same mental model used when tracing through buggy code to find problems.',
      },
      {
        question: 'What concepts are tested?',
        answer:
          'Challenges cover loops, conditionals, recursion, closures, hoisting, async/await, scope rules, and language-specific quirks that commonly appear in interviews.',
      },
      {
        question: 'Is this like interview whiteboard questions?',
        answer:
          'Yes! Many interviews include "what does this code output?" questions. Output Prediction gives you extensive practice with exactly this question format.',
      },
      {
        question: 'Can I see step-by-step execution?',
        answer:
          'After submitting your answer, you can view a detailed explanation showing how the code executes step by step, helping you understand any concepts you missed.',
      },
    ],
  },
  'coding/code-battle': {
    slug: 'coding/code-battle',
    title:
      'Code Battle - Programming Competition vs AI | Timed Coding Challenges',
    description:
      'Race against AI in timed coding challenges! Solve problems faster than your AI opponent. Competitive programming practice for interviews and skill building.',
    keywords: [
      'coding competition',
      'programming game vs AI',
      'timed coding challenges',
      'competitive programming',
      'coding race',
      'algorithm competition',
      'speed coding',
      'coding battle game',
      'programming contest online',
      'code faster',
      'AI coding opponent',
      'programming challenge',
      'coding speed test',
      'competitive coding practice',
      'coding game online',
    ],
    category: 'coding',
    difficulty: 'Hard',
    benefits: [
      'Code under pressure',
      'Improve coding speed',
      'Competitive practice',
      'Interview time management',
      'Problem-solving agility',
    ],
    faqs: [
      {
        question: 'What is Code Battle?',
        answer:
          'Code Battle pits you against an AI opponent in timed coding challenges. Solve problems correctly and faster than the AI to win. Its competitive programming made engaging and rewarding.',
      },
      {
        question: 'How does the AI opponent work?',
        answer:
          'The AI simulates a human competitor, solving problems at varying speeds based on difficulty. Higher difficulties feature faster AI opponents, pushing you to improve your speed.',
      },
      {
        question: 'What types of problems are included?',
        answer:
          'Code Battle features algorithm problems similar to competitive programming platforms: array manipulation, string processing, data structure operations, and classic interview problems.',
      },
      {
        question: 'Does speed matter more than correctness?',
        answer:
          'Both matter! You must pass all test cases to win. The AI also writes correct code, so racing to submit broken solutions wont work - you need speed AND accuracy.',
      },
      {
        question: 'How does this prepare me for interviews?',
        answer:
          'Coding interviews are time-pressured. Code Battle trains you to think and code quickly while maintaining correctness - exactly what interviewers look for.',
      },
    ],
  },
};

// ============================================
// COMBINED GAMES SEO EXPORT
// ============================================
export const allGamesSEO: Record<string, GameSEOConfig> = {
  ...memoryGames,
  ...logicGames,
  ...mathGames,
  ...vocabularyGames,
  ...focusGames,
  ...advancedGames,
  ...scienceGames,
  ...codingGames,
};

// Main games page SEO
export const mainGamesSEO = {
  title: '60+ Free Brain Games - Play & Learn Online',
  description:
    'Play 60+ free brain training games online. Improve memory, logic, math, vocabulary, and cognitive skills. Perfect for students preparing for competitive exams, placements, and career growth worldwide.',
  keywords: [
    'brain training games',
    'free educational games',
    'mind games online',
    'cognitive training games',
    'memory games free',
    'logic puzzles online',
    'math games for students',
    'brain exercises',
    'IQ games',
    'aptitude games',
    'competitive exam preparation games',
    'placement preparation games',
    'brain games USA',
    'brain training UK',
    'educational games India',
    'cognitive games Australia',
    'mental exercise games',
    'brain workout',
    'improve memory games',
    'logic training games',
  ],
  canonical: `${siteUrl}/games`,
};

// Generate metadata for any game
export function getGameMetadata(slug: string): Metadata {
  const game = allGamesSEO[slug];
  if (!game) {
    // Fallback for unknown games
    return {
      title: 'Brain Training Game',
      description:
        'Play free brain training games on Sproutern. Improve your cognitive abilities.',
    };
  }
  return generateGameMetadata(game);
}

// Get FAQs for a game
export function getGameFAQs(
  slug: string,
): { question: string; answer: string }[] {
  const game = allGamesSEO[slug];
  return game?.faqs || [];
}
