/**
 * Game AEO (Answer Engine Optimization)
 * Optimizes game content for AI assistants, voice search, and featured snippets
 * Targets: Google AI Overview, ChatGPT, Perplexity, Bing Copilot, Claude, Voice Assistants
 */

import { allGamesSEO, GameCategory } from './games-seo';

/**
 * AEO Content Block for games - structured for AI extraction
 */
export interface GameAEOBlock {
  question: string;
  answer: string;
  context?: string;
  lastUpdated: string;
}

/**
 * Complete AEO configuration for a game
 */
export interface GameAEOConfig {
  slug: string;
  // Direct answer for AI extraction (40-60 words)
  primaryAnswer: string;
  // TL;DR for quick comprehension
  tldr: string;
  // Key takeaways (bulleted facts)
  keyTakeaways: string[];
  // Featured snippet targets
  featuredSnippetContent: {
    paragraph?: string; // 40-60 words
    list?: string[]; // 3-8 items
    table?: { row: string; value: string }[];
  };
  // People Also Ask questions
  paaQuestions: GameAEOBlock[];
  // Voice search optimized answers
  voiceSearchAnswers: {
    question: string;
    speakableAnswer: string; // Short, conversational
  }[];
  // Target audience
  targetAudience: string[];
  // Primary topic for entity recognition
  primaryTopic: string;
}

/**
 * Generate speakable schema for voice search optimization
 */
export function generateGameSpeakableSchema(slug: string) {
  const config = gameAEOConfigs[slug];
  if (!config) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.game-description',
        '.game-tldr',
        '.faq-answer',
        '.key-takeaway',
        `h1`,
      ],
    },
  };
}

/**
 * Generate FAQ schema optimized for AEO
 */
export function generateGameAEOFAQSchema(slug: string) {
  const config = gameAEOConfigs[slug];
  if (!config) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.paaQuestions.map((paa) => ({
      '@type': 'Question',
      name: paa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: paa.answer,
        dateModified: paa.lastUpdated,
      },
    })),
  };
}

/**
 * Get AEO meta tags for AI crawlers
 */
export function getGameAEOMetaTags(slug: string) {
  const config = gameAEOConfigs[slug];
  if (!config) return {};

  return {
    'ai-summary': config.tldr,
    'ai-key-points': config.keyTakeaways.join('; '),
    'target-audience': config.targetAudience.join(', '),
    'primary-topic': config.primaryTopic,
    'content-type': 'educational-game',
  };
}

// =============================================================================
// MEMORY GAMES AEO CONFIGURATIONS
// =============================================================================

const memoryGamesAEO: Record<string, GameAEOConfig> = {
  'memory-matrix': {
    slug: 'memory-matrix',
    primaryAnswer:
      'Memory Matrix is a visual-spatial memory training game where you remember patterns on a grid. Perfect for NEET, JEE, and CAT preparation. It improves visual memory, pattern recognition, and concentration - skills tested in competitive exams.',
    tldr: 'Train your visual memory by recalling grid patterns. Improves memory capacity essential for competitive exams.',
    keyTakeaways: [
      'Improves visual-spatial working memory',
      'Progressive difficulty from 3x3 to 5x5+ grids',
      'Helps remember diagrams, formulas, and charts',
      'Perfect for NEET, JEE, CAT, and placement prep',
      'Play 10-15 minutes daily for best results',
    ],
    featuredSnippetContent: {
      paragraph:
        'Memory Matrix trains visual-spatial memory by showing patterns on grids that you must recall. Start with 3x3 grids and progress to 5x5+. Regular 10-15 minute daily sessions significantly improve memory capacity for exams.',
      list: [
        'Watch the pattern carefully',
        'Memorize highlighted cells',
        'Recall the pattern after it disappears',
        'Progress to harder levels as you improve',
      ],
    },
    paaQuestions: [
      {
        question: 'What is Memory Matrix game?',
        answer:
          'Memory Matrix is a brain training game that tests and improves your visual-spatial memory. You watch a pattern of highlighted cells on a grid, then recreate it from memory. It progressively increases difficulty as you improve.',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'How does Memory Matrix help with exams?',
        answer:
          'Memory Matrix strengthens visual memory needed to remember diagrams, flowcharts, and formulas. Students preparing for NEET, JEE, CAT, and campus placements benefit from improved pattern recognition and visual recall.',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'How long should I play Memory Matrix daily?',
        answer:
          'Play Memory Matrix for 10-15 minutes daily for optimal results. Consistency matters more than duration. Short regular sessions are more effective for building lasting memory improvements than occasional long sessions.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is Memory Matrix?',
        speakableAnswer:
          "Memory Matrix is a brain training game where you remember patterns on a grid. It's great for improving visual memory for exams.",
      },
      {
        question: 'How do I play Memory Matrix?',
        speakableAnswer:
          'Watch the highlighted cells on the grid, memorize them, then click the same cells after the pattern disappears.',
      },
    ],
    targetAudience: [
      'students',
      'competitive exam aspirants',
      'NEET/JEE candidates',
      'job seekers',
    ],
    primaryTopic: 'Visual Memory Training',
  },

  'memory-match': {
    slug: 'memory-match',
    primaryAnswer:
      'Memory Match is a classic card-matching brain training game. Flip cards to find matching pairs while training short-term memory, concentration, and visual recognition - skills essential for academic and professional success.',
    tldr: 'Find matching pairs of cards to train short-term memory and concentration. Classic brain training for all ages.',
    keyTakeaways: [
      'Trains short-term memory and concentration',
      'Improves visual recognition speed',
      'Strategic thinking for optimal moves',
      'Suitable for all ages',
      'Reduces careless errors in exams',
    ],
    featuredSnippetContent: {
      paragraph:
        'Memory Match trains short-term memory by having you find matching pairs of cards. Flip two cards at a time and remember their positions. The game develops concentration and visual recognition crucial for exam success.',
      list: [
        'Flip two cards at a time',
        'Remember card positions',
        'Find all matching pairs',
        'Complete in minimum moves',
      ],
    },
    paaQuestions: [
      {
        question: 'What cognitive skills does Memory Match develop?',
        answer:
          'Memory Match develops short-term memory, concentration, visual recognition, and strategic thinking. Regular play strengthens working memory capacity and improves ability to focus during exams.',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'Is Memory Match good for brain training?',
        answer:
          'Yes, Memory Match is an excellent brain training game. Research shows card matching games improve memory, attention, and processing speed. They activate the hippocampus and prefrontal cortex responsible for memory formation.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I play Memory Match?',
        speakableAnswer:
          'Flip two cards at a time to find matching pairs. Remember where each card is located and match all pairs to win.',
      },
    ],
    targetAudience: ['students', 'children', 'professionals', 'seniors'],
    primaryTopic: 'Card Matching Memory Game',
  },

  'mind-snapshot': {
    slug: 'mind-snapshot',
    primaryAnswer:
      'Mind Snapshot trains photographic memory by showing complex images briefly that you must recall in detail. It develops eidetic memory skills useful for remembering diagrams, charts, and visual information in exams.',
    tldr: 'Develop photographic memory by recalling image details after brief exposure.',
    keyTakeaways: [
      'Trains eidetic (photographic) memory',
      'Brief image exposure challenges recall',
      'Helps remember exam diagrams and charts',
      'Progressive difficulty levels',
      'Improves attention to detail',
    ],
    featuredSnippetContent: {
      paragraph:
        'Mind Snapshot trains photographic memory through brief image exposure followed by detail recall. You view images for seconds then answer questions about specific details, developing the visual memory skills needed for exam diagrams and charts.',
    },
    paaQuestions: [
      {
        question: 'Can you train photographic memory?',
        answer:
          'While true eidetic memory is rare, Mind Snapshot helps you capture and recall visual details more accurately. Regular practice significantly improves visual memory and attention to detail.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is Mind Snapshot game?',
        speakableAnswer:
          'Mind Snapshot is a game that trains photographic memory. You view an image briefly then recall specific details from it.',
      },
    ],
    targetAudience: ['students', 'professionals', 'exam candidates'],
    primaryTopic: 'Photographic Memory Training',
  },

  'quick-recall': {
    slug: 'quick-recall',
    primaryAnswer:
      'Quick Recall is a speed memory game that trains rapid information encoding and retrieval. Perfect for improving recall speed during timed exams and interviews where quick thinking is essential.',
    tldr: 'Train rapid memory recall under time pressure for exam and interview preparation.',
    keyTakeaways: [
      'Speed-based memory training',
      'Improves recall under pressure',
      'Great for timed exams',
      'Trains quick information processing',
      'Builds confidence for interviews',
    ],
    featuredSnippetContent: {
      paragraph:
        'Quick Recall trains rapid memory by presenting information that must be recalled within time limits. This speed-based training improves performance in timed exams and interviews where quick thinking matters.',
    },
    paaQuestions: [
      {
        question: 'How does Quick Recall help with exams?',
        answer:
          'Quick Recall trains your brain to encode and retrieve information faster. This speed training directly improves performance in timed tests like CAT, GRE, and aptitude rounds where quick recall is crucial.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is Quick Recall?',
        speakableAnswer:
          'Quick Recall is a speed memory game that helps you remember things faster under time pressure.',
      },
    ],
    targetAudience: ['exam candidates', 'job seekers', 'students'],
    primaryTopic: 'Speed Memory Training',
  },
};

// =============================================================================
// LOGIC GAMES AEO CONFIGURATIONS
// =============================================================================

const logicGamesAEO: Record<string, GameAEOConfig> = {
  'logic-puzzle': {
    slug: 'logic-puzzle',
    primaryAnswer:
      'Logic Puzzle is a deductive reasoning game with puzzles similar to CAT, GRE, and GMAT logical reasoning sections. Develop systematic thinking and analytical skills essential for competitive exams and job interviews.',
    tldr: 'Solve deductive reasoning puzzles to prepare for CAT, GRE, and placement aptitude tests.',
    keyTakeaways: [
      'Mirrors CAT/GRE/GMAT question formats',
      'Develops deductive reasoning',
      'Improves systematic problem-solving',
      'Great for placement aptitude prep',
      'Progressive difficulty levels',
    ],
    featuredSnippetContent: {
      paragraph:
        'Logic Puzzle presents deductive reasoning challenges similar to CAT, GRE, and GMAT exams. You analyze clues systematically to reach conclusions, developing the analytical thinking skills valued in competitive exams and job interviews.',
      list: [
        'Read all clues carefully',
        'Use elimination method',
        'Make logical deductions',
        'Verify your conclusions',
      ],
    },
    paaQuestions: [
      {
        question: 'Are Logic Puzzle questions similar to CAT/GRE?',
        answer:
          'Yes, our Logic Puzzles mirror the difficulty and format of logical reasoning sections in CAT, GRE, GMAT, and campus placement tests. Regular practice directly improves exam performance.',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'How do I get better at logic puzzles?',
        answer:
          'Practice daily with systematic approaches: read all clues first, use elimination, make diagrams, and verify conclusions. Start with easier puzzles and progress to harder ones as you build skills.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is Logic Puzzle game?',
        speakableAnswer:
          'Logic Puzzle is a brain game where you solve deductive reasoning problems similar to CAT and GRE exams.',
      },
    ],
    targetAudience: [
      'CAT aspirants',
      'GRE candidates',
      'job seekers',
      'students',
    ],
    primaryTopic: 'Deductive Reasoning Training',
  },

  'pattern-recognition': {
    slug: 'pattern-recognition',
    primaryAnswer:
      'Pattern Recognition trains your brain to identify sequences and relationships in visual data. This skill is core to IQ tests, aptitude exams, and data analysis roles.',
    tldr: 'Identify patterns in sequences to boost IQ test and aptitude exam scores.',
    keyTakeaways: [
      'Core skill for IQ tests',
      'Improves data analysis abilities',
      'Helps spot trends quickly',
      'Essential for technical interviews',
      'Builds abstract reasoning',
    ],
    featuredSnippetContent: {
      paragraph:
        'Pattern Recognition helps identify relationships in visual sequences. You analyze shapes, numbers, and symbols to predict the next element - a skill directly tested in IQ assessments and aptitude exams.',
    },
    paaQuestions: [
      {
        question: 'Does pattern recognition improve IQ?',
        answer:
          'Pattern recognition is a core component of IQ tests. Regular practice improves your ability to identify relationships and predict sequences quickly, which can improve IQ test scores.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is pattern recognition?',
        speakableAnswer:
          "Pattern recognition is the ability to identify trends and relationships in data. It's a key skill tested in IQ and aptitude exams.",
      },
    ],
    targetAudience: ['students', 'job seekers', 'data analysts'],
    primaryTopic: 'Visual Pattern Analysis',
  },

  'sudoku-trainer': {
    slug: 'sudoku-trainer',
    primaryAnswer:
      'Sudoku Trainer develops logical thinking and number sense through classic Sudoku puzzles. Progressive difficulty from Easy to Expert builds systematic problem-solving skills for academic and professional success.',
    tldr: 'Classic Sudoku puzzles for logical thinking and number sense development.',
    keyTakeaways: [
      'Develops logical thinking',
      'Improves number sense',
      'Progressive difficulty levels',
      'Enhances patience and persistence',
      'Great mental workout',
    ],
    featuredSnippetContent: {
      paragraph:
        'Sudoku Trainer offers classic 9x9 puzzles from Easy to Expert difficulty. Fill each row, column, and 3x3 box with numbers 1-9 using logic. Regular Sudoku practice develops systematic thinking valued in academics and careers.',
    },
    paaQuestions: [
      {
        question: 'Is Sudoku good for the brain?',
        answer:
          'Yes, Sudoku exercises logical thinking, working memory, and concentration. Studies show regular Sudoku players have better cognitive function and problem-solving abilities.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I play Sudoku?',
        speakableAnswer:
          'Fill each row, column, and 3x3 box with numbers 1 through 9. Each number can appear only once in each section.',
      },
    ],
    targetAudience: ['puzzle enthusiasts', 'students', 'seniors'],
    primaryTopic: 'Sudoku Puzzle Game',
  },
};

// =============================================================================
// MATH GAMES AEO CONFIGURATIONS
// =============================================================================

const mathGamesAEO: Record<string, GameAEOConfig> = {
  'speed-math': {
    slug: 'speed-math',
    primaryAnswer:
      'Speed Math trains rapid mental calculation for aptitude tests and competitive exams. Practice addition, subtraction, multiplication, and division under time pressure to boost quantitative reasoning speed.',
    tldr: 'Train mental math speed for aptitude tests and competitive exams.',
    keyTakeaways: [
      'Improves calculation speed',
      'Covers all basic operations',
      'Time-based challenges',
      'Perfect for aptitude round prep',
      'Builds numerical confidence',
    ],
    featuredSnippetContent: {
      paragraph:
        'Speed Math challenges you to solve arithmetic problems quickly. Practice all operations under time pressure to build the calculation speed needed for quantitative sections in CAT, bank exams, and placement aptitude rounds.',
      list: [
        'Addition and subtraction drills',
        'Multiplication speed tests',
        'Division challenges',
        'Mixed operations mode',
      ],
    },
    paaQuestions: [
      {
        question: 'How can I improve my mental math speed?',
        answer:
          'Practice daily with timed exercises like Speed Math. Start with simpler problems, learn calculation shortcuts (like multiplying by 11 or squaring numbers ending in 5), and gradually increase difficulty.',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'Is mental math important for placements?',
        answer:
          'Yes, most campus placement aptitude rounds include quantitative sections. Fast mental math helps solve more problems in limited time, giving you a competitive advantage.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is Speed Math?',
        speakableAnswer:
          'Speed Math is a game that trains you to do calculations quickly in your head. Great for exam preparation.',
      },
    ],
    targetAudience: ['students', 'job seekers', 'exam candidates'],
    primaryTopic: 'Mental Math Training',
  },

  'percentage-puzzle': {
    slug: 'percentage-puzzle',
    primaryAnswer:
      'Percentage Puzzle trains percentage calculations essential for profit-loss, discount, and data interpretation questions in competitive exams and business contexts.',
    tldr: 'Master percentage calculations for exams and business problem-solving.',
    keyTakeaways: [
      'Practical percentage problems',
      'Profit-loss scenarios',
      'Discount calculations',
      'Data interpretation prep',
      'Business math skills',
    ],
    featuredSnippetContent: {
      paragraph:
        'Percentage Puzzle presents real-world percentage problems: profit-loss, discounts, tax calculations, and percentage change. These are commonly tested in bank exams, CAT, and aptitude rounds.',
    },
    paaQuestions: [
      {
        question: 'How do I calculate percentage of a number?',
        answer:
          'To find X% of a number, multiply by X/100. For example, 25% of 80 = 80 × 0.25 = 20. Quick tip: 10% is easy (move decimal left), then combine for other percentages.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I calculate percentage?',
        speakableAnswer:
          'Multiply the number by the percentage divided by 100. For example, 25 percent of 80 is 80 times 0.25 which equals 20.',
      },
    ],
    targetAudience: ['students', 'job seekers', 'business professionals'],
    primaryTopic: 'Percentage Calculations',
  },

  'profit-loss-game': {
    slug: 'profit-loss-game',
    primaryAnswer:
      'Profit Loss Game teaches profit and loss calculations through interactive business scenarios. Master cost price, selling price, markup, and discount concepts tested in bank exams and aptitude rounds.',
    tldr: 'Learn profit-loss calculations through business scenario simulations.',
    keyTakeaways: [
      'Cost price and selling price concepts',
      'Markup and margin calculations',
      'Discount and profit percentage',
      'Bank exam preparation',
      'Business math fundamentals',
    ],
    featuredSnippetContent: {
      paragraph:
        'Profit Loss Game simulates business scenarios to teach profit and loss calculations. Learn formulas: Profit = SP - CP, Profit% = (Profit/CP) × 100. Essential for bank exams and aptitude tests.',
      list: [
        'Profit = Selling Price - Cost Price',
        'Loss = Cost Price - Selling Price',
        'Profit% = (Profit/CP) × 100',
        'SP = CP × (100 + Profit%)/100',
      ],
    },
    paaQuestions: [
      {
        question: 'How to calculate profit percentage?',
        answer:
          'Profit Percentage = (Profit ÷ Cost Price) × 100. If you bought for ₹100 and sold for ₹125, profit is ₹25, so Profit% = (25÷100) × 100 = 25%.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I calculate profit?',
        speakableAnswer:
          'Subtract cost price from selling price. If you buy for 100 rupees and sell for 150, your profit is 50 rupees.',
      },
    ],
    targetAudience: ['bank exam aspirants', 'students', 'business learners'],
    primaryTopic: 'Profit Loss Calculations',
  },
};

// =============================================================================
// VOCABULARY GAMES AEO CONFIGURATIONS
// =============================================================================

const vocabularyGamesAEO: Record<string, GameAEOConfig> = {
  'word-association': {
    slug: 'word-association',
    primaryAnswer:
      'Word Association expands vocabulary through semantic connections. Link related words to build stronger vocabulary networks essential for GRE, CAT verbal sections, and communication skills.',
    tldr: 'Build vocabulary through word relationships and semantic connections.',
    keyTakeaways: [
      'Expands active vocabulary',
      'Builds semantic networks',
      'GRE/CAT verbal prep',
      'Improves word recall',
      'Enhances communication',
    ],
    featuredSnippetContent: {
      paragraph:
        'Word Association strengthens vocabulary by connecting semantically related words. This network-based learning helps words stick in long-term memory and improves verbal reasoning scores on GRE and CAT.',
    },
    paaQuestions: [
      {
        question: 'How does word association help vocabulary?',
        answer:
          'Word association creates semantic networks in your brain, linking new words to known concepts. This web of connections makes words easier to recall and use correctly.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is word association?',
        speakableAnswer:
          'Word association links related words together to build vocabulary. It helps you remember and use words better.',
      },
    ],
    targetAudience: ['GRE candidates', 'CAT aspirants', 'students'],
    primaryTopic: 'Vocabulary Building',
  },

  'synonym-match': {
    slug: 'synonym-match',
    primaryAnswer:
      'Synonym Match builds vocabulary by matching words with similar meanings. Essential for GRE vocabulary, reading comprehension, and improving writing by expanding word choices.',
    tldr: 'Learn synonyms to boost GRE vocabulary and writing quality.',
    keyTakeaways: [
      'GRE vocabulary preparation',
      'Expands word choices',
      'Improves reading comprehension',
      'Enhances writing quality',
      'Builds word relationships',
    ],
    featuredSnippetContent: {
      paragraph:
        'Synonym Match presents words to pair with their synonyms. Learning synonyms improves GRE vocabulary scores, reading comprehension, and writing variety. Match all pairs correctly to progress.',
    },
    paaQuestions: [
      {
        question: 'How to learn synonyms quickly?',
        answer:
          'Practice with games like Synonym Match, group similar words together, use flashcards, and read extensively. Context-based learning through games is more effective than rote memorization.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What are synonyms?',
        speakableAnswer:
          'Synonyms are words with similar meanings. For example, happy and joyful are synonyms.',
      },
    ],
    targetAudience: ['GRE candidates', 'students', 'writers'],
    primaryTopic: 'Synonym Learning',
  },

  'spelling-bee': {
    slug: 'spelling-bee',
    primaryAnswer:
      'Spelling Bee tests and improves spelling accuracy with words of increasing difficulty. Practice commonly misspelled words and challenging vocabulary for better written communication.',
    tldr: 'Test spelling skills with progressively difficult words for better writing.',
    keyTakeaways: [
      'Improves spelling accuracy',
      'Commonly misspelled words',
      'Progressive difficulty',
      'Better written communication',
      'Vocabulary enrichment',
    ],
    featuredSnippetContent: {
      paragraph:
        'Spelling Bee challenges you to spell words correctly. Hear the word, see it in context, then type the correct spelling. Progress through difficulty levels to master commonly misspelled words.',
    },
    paaQuestions: [
      {
        question: 'How to improve spelling skills?',
        answer:
          'Practice regularly with Spelling Bee games, read extensively, learn word roots and patterns, use mnemonics for tricky words, and write frequently to apply your knowledge.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I get better at spelling?',
        speakableAnswer:
          'Practice with spelling games, read more books, and learn common word patterns and roots.',
      },
    ],
    targetAudience: ['students', 'professionals', 'writers'],
    primaryTopic: 'Spelling Practice',
  },
};

// =============================================================================
// FOCUS GAMES AEO CONFIGURATIONS
// =============================================================================

const focusGamesAEO: Record<string, GameAEOConfig> = {
  'concentration-test': {
    slug: 'concentration-test',
    primaryAnswer:
      'Concentration Test measures and improves your ability to focus. It trains sustained attention essential for studying, exams, and professional work where focus determines success.',
    tldr: 'Measure and improve concentration through attention-training exercises.',
    keyTakeaways: [
      'Measures focus ability',
      'Trains sustained attention',
      'Reduces distraction susceptibility',
      'Improves study efficiency',
      'Better exam performance',
    ],
    featuredSnippetContent: {
      paragraph:
        'Concentration Test assesses and trains your focus through attention exercises. Identify targets while ignoring distractions to build the sustained concentration needed for successful studying and exam-taking.',
    },
    paaQuestions: [
      {
        question: 'How can I improve my concentration?',
        answer:
          'Practice with focus games like Concentration Test, minimize distractions, take regular breaks, exercise regularly, get enough sleep, and try mindfulness meditation.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I improve focus?',
        speakableAnswer:
          'Practice concentration exercises daily, minimize distractions, take regular breaks, and get enough sleep.',
      },
    ],
    targetAudience: ['students', 'professionals', 'exam candidates'],
    primaryTopic: 'Concentration Training',
  },

  'reaction-time-test': {
    slug: 'reaction-time-test',
    primaryAnswer:
      'Reaction Time Test measures how quickly you respond to visual stimuli. Average reaction time is 200-300ms. Faster reactions improve gaming performance, driving safety, and cognitive alertness.',
    tldr: 'Test your reaction speed and improve response time through practice.',
    keyTakeaways: [
      'Average reaction: 200-300ms',
      'Measures cognitive alertness',
      'Improves with practice',
      'Helps gaming performance',
      'Tests processing speed',
    ],
    featuredSnippetContent: {
      paragraph:
        'Reaction Time Test measures how quickly you click when a color changes. Average human reaction time is 200-300ms. Athletes and gamers often achieve 150-200ms. Regular practice can improve your reaction speed.',
      table: [
        { row: 'Average', value: '200-300 ms' },
        { row: 'Good', value: '150-200 ms' },
        { row: 'Excellent', value: '< 150 ms' },
      ],
    },
    paaQuestions: [
      {
        question: 'What is a good reaction time?',
        answer:
          'Average human reaction time is 200-300 milliseconds. Good reaction time is 150-200ms. Professional gamers and athletes often achieve under 150ms. Regular practice can improve your speed.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is average reaction time?',
        speakableAnswer:
          'Average human reaction time is 200 to 300 milliseconds. Professional gamers often react in under 150 milliseconds.',
      },
    ],
    targetAudience: ['gamers', 'athletes', 'general users'],
    primaryTopic: 'Reaction Time Measurement',
  },

  'focus-booster': {
    slug: 'focus-booster',
    primaryAnswer:
      'Focus Booster trains sustained attention through progressively challenging exercises. Build the concentration stamina needed for long study sessions and multi-hour exams.',
    tldr: 'Build concentration stamina for long study sessions and exams.',
    keyTakeaways: [
      'Builds attention stamina',
      'Progressive difficulty',
      'Long session preparation',
      'Reduces mental fatigue',
      'Improves study efficiency',
    ],
    featuredSnippetContent: {
      paragraph:
        'Focus Booster develops sustained attention through exercises that progressively increase in duration and complexity. Build the mental stamina needed for 3-hour CAT exams or long study sessions.',
    },
    paaQuestions: [
      {
        question: 'How to focus for long hours?',
        answer:
          'Train attention stamina with Focus Booster, use the Pomodoro technique (25 min work, 5 min break), stay hydrated, take short walks between sessions, and ensure proper lighting and posture.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I study for long hours?',
        speakableAnswer:
          'Build focus gradually, take short breaks every 25-30 minutes, stay hydrated, and practice with concentration exercises.',
      },
    ],
    targetAudience: ['students', 'exam candidates', 'professionals'],
    primaryTopic: 'Attention Training',
  },
};

// =============================================================================
// ADVANCED THINKING GAMES AEO CONFIGURATIONS
// =============================================================================

const advancedGamesAEO: Record<string, GameAEOConfig> = {
  'bias-buster': {
    slug: 'bias-buster',
    primaryAnswer:
      'Bias Buster teaches recognition of cognitive biases that affect decision-making. Learn to identify confirmation bias, anchoring, sunk cost fallacy, and other thinking traps for better choices.',
    tldr: 'Recognize cognitive biases to improve decision-making and critical thinking.',
    keyTakeaways: [
      'Learn 15+ cognitive biases',
      'Real-world decision scenarios',
      'Debiasing strategies',
      'Better critical thinking',
      'Improved judgment',
    ],
    featuredSnippetContent: {
      paragraph:
        'Bias Buster presents real-world scenarios where cognitive biases influence decisions. Identify biases like confirmation bias, anchoring, and sunk cost fallacy, then learn strategies to overcome them.',
      list: [
        'Confirmation Bias - Favoring confirming information',
        'Anchoring Bias - Over-relying on first information',
        'Sunk Cost Fallacy - Continuing due to past investment',
        'Availability Heuristic - Overweighting recent events',
      ],
    },
    paaQuestions: [
      {
        question: 'What are cognitive biases?',
        answer:
          'Cognitive biases are systematic thinking errors that affect judgments and decisions. Examples include confirmation bias (favoring confirming info), anchoring (over-relying on first data), and sunk cost fallacy (continuing bad investments).',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'How do I overcome cognitive biases?',
        answer:
          'Recognize biases through practice, seek opposing viewpoints, make decisions using structured frameworks, take time before important choices, and consult others for different perspectives.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is confirmation bias?',
        speakableAnswer:
          'Confirmation bias is when you favor information that confirms what you already believe and ignore contradicting evidence.',
      },
    ],
    targetAudience: [
      'professionals',
      'MBA students',
      'decision makers',
      'students',
    ],
    primaryTopic: 'Cognitive Bias Recognition',
  },

  'critical-thinking-quiz': {
    slug: 'critical-thinking-quiz',
    primaryAnswer:
      'Critical Thinking Quiz tests analytical reasoning with argument evaluation, logical fallacy detection, and evidence assessment. Essential for LSAT, GMAT critical reasoning sections, and case interviews.',
    tldr: 'Test critical reasoning skills for LSAT, GMAT, and case interview preparation.',
    keyTakeaways: [
      'Argument evaluation skills',
      'Logical fallacy detection',
      'Evidence assessment',
      'LSAT/GMAT preparation',
      'Case interview readiness',
    ],
    featuredSnippetContent: {
      paragraph:
        'Critical Thinking Quiz presents arguments to evaluate for logical validity. Identify premises, conclusions, assumptions, and fallacies. This directly prepares you for LSAT, GMAT critical reasoning, and case interviews.',
    },
    paaQuestions: [
      {
        question: 'How to improve critical thinking?',
        answer:
          'Practice analyzing arguments, identify assumptions and biases, evaluate evidence quality, consider alternative explanations, and regularly solve critical reasoning problems.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is critical thinking?',
        speakableAnswer:
          'Critical thinking is analyzing information objectively, evaluating arguments, and making reasoned judgments based on evidence.',
      },
    ],
    targetAudience: ['LSAT candidates', 'MBA aspirants', 'professionals'],
    primaryTopic: 'Critical Reasoning',
  },

  'data-detective': {
    slug: 'data-detective',
    primaryAnswer:
      'Data Detective trains data interpretation skills through chart, graph, and table analysis. Essential for CAT DI sections, consulting interviews, and data-driven decision making roles.',
    tldr: 'Master data interpretation for CAT, consulting interviews, and analytics roles.',
    keyTakeaways: [
      'Chart and graph analysis',
      'CAT DI preparation',
      'Consulting case prep',
      'Data-driven insights',
      'Visualization literacy',
    ],
    featuredSnippetContent: {
      paragraph:
        'Data Detective presents charts, graphs, and tables to analyze for insights. Answer questions about trends, comparisons, and calculations. This directly prepares for CAT Data Interpretation and consulting cases.',
    },
    paaQuestions: [
      {
        question: 'How to solve data interpretation questions?',
        answer:
          'First understand the data type (bar, pie, line, table), identify what is being asked, find relevant data points, perform calculations carefully, and eliminate impossible answer choices.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is data interpretation?',
        speakableAnswer:
          'Data interpretation is analyzing charts, graphs, and tables to draw insights and answer questions about the data.',
      },
    ],
    targetAudience: ['CAT aspirants', 'consultants', 'analysts'],
    primaryTopic: 'Data Interpretation',
  },
};

// =============================================================================
// SCIENCE GAMES AEO CONFIGURATIONS
// =============================================================================

const scienceGamesAEO: Record<string, GameAEOConfig> = {
  'physics-intuition-lab': {
    slug: 'physics-intuition-lab',
    primaryAnswer:
      'Physics Intuition Lab builds conceptual physics understanding through interactive simulations. Develop the deep intuition for mechanics, thermodynamics, and waves needed for JEE and NEET physics.',
    tldr: 'Build physics intuition through interactive concept simulations for JEE/NEET.',
    keyTakeaways: [
      'Interactive physics concepts',
      'JEE/NEET preparation',
      'Conceptual understanding',
      'Visual learning approach',
      'Real-world applications',
    ],
    featuredSnippetContent: {
      paragraph:
        'Physics Intuition Lab presents interactive scenarios to develop deep physics understanding. Predict outcomes, test hypotheses, and learn concepts through experimentation. Essential for JEE and NEET physics preparation.',
    },
    paaQuestions: [
      {
        question: 'How to develop physics intuition?',
        answer:
          'Visualize problems, understand concepts before formulas, practice with varied problems, analyze real-world applications, and use interactive simulations to see physics in action.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I get better at physics?',
        speakableAnswer:
          'Focus on understanding concepts first, visualize problems, practice regularly, and connect physics to real-world situations.',
      },
    ],
    targetAudience: ['JEE aspirants', 'NEET candidates', 'physics students'],
    primaryTopic: 'Physics Concept Training',
  },

  'organic-synthesis': {
    slug: 'organic-synthesis',
    primaryAnswer:
      'Organic Synthesis simulates organic chemistry reaction pathways. Practice retrosynthesis and reaction mechanisms essential for JEE and NEET organic chemistry sections.',
    tldr: 'Practice organic chemistry synthesis pathways for JEE and NEET.',
    keyTakeaways: [
      'Retrosynthesis practice',
      'Reaction mechanisms',
      'JEE/NEET organic chemistry',
      'Functional group interconversions',
      'Reagent selection skills',
    ],
    featuredSnippetContent: {
      paragraph:
        'Organic Synthesis challenges you to find pathways from starting materials to target molecules. Practice retrosynthesis, understand reaction mechanisms, and learn reagent effects - all crucial for JEE and NEET organic chemistry.',
    },
    paaQuestions: [
      {
        question: 'How to solve organic synthesis problems?',
        answer:
          'Work backwards from the product (retrosynthesis), identify functional group changes needed, select appropriate reagents, and verify each step is chemically valid.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is retrosynthesis?',
        speakableAnswer:
          'Retrosynthesis is working backwards from a target molecule to find simpler starting materials and the reactions needed to make it.',
      },
    ],
    targetAudience: ['JEE aspirants', 'NEET candidates', 'chemistry students'],
    primaryTopic: 'Organic Chemistry',
  },
};

// =============================================================================
// CODING GAMES AEO CONFIGURATIONS
// =============================================================================

const codingGamesAEO: Record<string, GameAEOConfig> = {
  'debugging-challenge': {
    slug: 'debugging-challenge',
    primaryAnswer:
      'Debugging Challenge tests code troubleshooting skills with buggy programs to fix. Essential practice for technical interviews where debugging is commonly tested.',
    tldr: 'Find and fix bugs in code to prepare for technical interviews.',
    keyTakeaways: [
      'Find bugs in code',
      'Multiple programming languages',
      'Technical interview prep',
      'Logical error detection',
      'Syntax error identification',
    ],
    featuredSnippetContent: {
      paragraph:
        'Debugging Challenge presents buggy code to analyze and fix. Identify logical errors, fix syntax mistakes, and understand why code fails. This directly prepares for debugging questions in technical interviews.',
    },
    paaQuestions: [
      {
        question: 'How to get better at debugging?',
        answer:
          'Understand code flow, use print statements strategically, test edge cases, read error messages carefully, use debugger tools, and practice with debugging challenges regularly.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I debug code?',
        speakableAnswer:
          'Read error messages, add print statements to track values, check edge cases, and step through code line by line to find issues.',
      },
    ],
    targetAudience: ['programmers', 'job seekers', 'CS students'],
    primaryTopic: 'Code Debugging',
  },

  'predict-output': {
    slug: 'predict-output',
    primaryAnswer:
      'Predict Output tests code comprehension by asking what code will print or return. Common in technical interviews to assess programming fundamentals and attention to detail.',
    tldr: 'Predict what code outputs to ace technical interview questions.',
    keyTakeaways: [
      'Code tracing skills',
      'Technical interview prep',
      'Programming fundamentals',
      'Edge case awareness',
      'Attention to detail',
    ],
    featuredSnippetContent: {
      paragraph:
        'Predict Output shows code snippets and asks what they produce. Trace through logic step-by-step, consider edge cases, and predict outputs. A direct preparation for common technical interview questions.',
    },
    paaQuestions: [
      {
        question: 'How to solve output prediction questions?',
        answer:
          'Trace through code line by line, track variable values, consider operator precedence, handle edge cases, and remember language-specific behaviors.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I trace code?',
        speakableAnswer:
          'Go through code line by line, track what value each variable holds, and follow the logic to see what happens at each step.',
      },
    ],
    targetAudience: ['programmers', 'interview candidates', 'CS students'],
    primaryTopic: 'Code Tracing',
  },
};

// =============================================================================
// COMBINED EXPORTS
// =============================================================================

export const gameAEOConfigs: Record<string, GameAEOConfig> = {
  ...memoryGamesAEO,
  ...logicGamesAEO,
  ...mathGamesAEO,
  ...vocabularyGamesAEO,
  ...focusGamesAEO,
  ...advancedGamesAEO,
  ...scienceGamesAEO,
  ...codingGamesAEO,
};

/**
 * Get AEO config for a game by slug
 */
export function getGameAEOConfig(slug: string): GameAEOConfig | null {
  return gameAEOConfigs[slug] || null;
}

/**
 * Get all PAA questions for a game
 */
export function getGamePAAQuestions(slug: string): GameAEOBlock[] {
  return gameAEOConfigs[slug]?.paaQuestions || [];
}

/**
 * Get voice search answers for a game
 */
export function getGameVoiceAnswers(
  slug: string,
): { question: string; speakableAnswer: string }[] {
  return gameAEOConfigs[slug]?.voiceSearchAnswers || [];
}

/**
 * Generate complete AEO schema package for a game
 */
export function generateCompleteGameAEOSchema(slug: string) {
  const config = gameAEOConfigs[slug];
  if (!config) return null;

  return {
    speakable: generateGameSpeakableSchema(slug),
    faq: generateGameAEOFAQSchema(slug),
    metaTags: getGameAEOMetaTags(slug),
  };
}
