/**
 * Game SGE (Search Generative Experience) Optimization
 * Optimizes game content for Google AI Overview, Bing Copilot, Perplexity
 * Focuses on entity optimization, cited answers, and AI-friendly content structure
 */

const siteUrl = 'https://www.sproutern.com';

/**
 * SGE Content Structure for Games
 * Provides primary answers, related questions, and expert perspectives
 */
export interface GameSGEContent {
  slug: string;
  // Primary answer - what AI will likely extract (2-3 sentences)
  primaryAnswer: string;
  // Follow-up questions the AI might generate
  relatedQuestions: {
    question: string;
    answer: string;
  }[];
  // Expert perspective for credibility
  expertPerspective: {
    author: string;
    credential: string;
    insight: string;
  };
  // Comparison data SGE loves
  comparisonData?: {
    item: string;
    value: string;
    description: string;
  }[];
  // Entity relationships for knowledge graph
  entities: {
    type: string;
    name: string;
    relation: string;
  }[];
  // Source citation
  sourceCitation: {
    organization: string;
    lastUpdated: string;
    reliability: 'high' | 'medium';
  };
}

/**
 * Generate Perspective schema for Google SGE
 * SGE values diverse expert perspectives
 */
export function generateGamePerspectiveSchema(content: GameSGEContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: content.expertPerspective.author,
      jobTitle: content.expertPerspective.credential,
    },
    itemReviewed: {
      '@type': 'WebApplication',
      name: content.slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
      url: `${siteUrl}/games/${content.slug}`,
    },
    reviewBody: content.expertPerspective.insight,
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
  };
}

/**
 * Generate EducationalApplication schema - SGE prioritizes educational content
 */
export function generateEducationalGameSchema(slug: string, category: string) {
  const categoryNames: Record<string, string> = {
    memory: 'Memory Training',
    logic: 'Logical Reasoning',
    math: 'Mathematical Skills',
    vocabulary: 'Language Skills',
    focus: 'Focus & Attention',
    advanced: 'Critical Thinking',
    science: 'Science Education',
    coding: 'Programming Skills',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalApplication',
    name:
      slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ') + ' - Brain Training Game',
    applicationCategory: 'EducationalGame',
    educationalLevel: ['High School', 'College', 'Professional'],
    learningResourceType: 'Game',
    typicalAgeRange: '14-65',
    educationalUse: categoryNames[category] || 'Cognitive Training',
    isAccessibleForFree: true,
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Sproutern',
      url: siteUrl,
    },
  };
}

/**
 * Generate LearningResource schema for educational credibility
 */
export function generateLearningResourceSchema(slug: string, skills: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    educationalLevel: 'Intermediate',
    teaches: skills.join(', '),
    assesses: skills.join(', '),
    timeRequired: 'PT10M',
    interactivityType: 'active',
    isAccessibleForFree: true,
    inLanguage: 'en',
  };
}

// =============================================================================
// MEMORY GAMES SGE CONTENT
// =============================================================================

const memoryGamesSGE: Record<string, GameSGEContent> = {
  'memory-matrix': {
    slug: 'memory-matrix',
    primaryAnswer:
      'Memory Matrix is a visual-spatial memory game that helps students prepare for competitive exams like NEET, JEE, and CAT. Players memorize patterns on grids that increase in complexity, training the same visual memory skills needed to remember diagrams and formulas during exams.',
    relatedQuestions: [
      {
        question: 'How does Memory Matrix improve exam performance?',
        answer:
          'It trains visual-spatial working memory, helping you remember diagrams, flowcharts, and complex formulas. Students report better recall of visual information during exams after regular practice.',
      },
      {
        question: 'What difficulty levels does Memory Matrix have?',
        answer:
          'Memory Matrix starts with 3x3 grids and progresses to 5x5 or larger. The number of highlighted cells also increases, creating multiple difficulty tiers suitable for beginners to advanced users.',
      },
      {
        question: 'Is Memory Matrix scientifically backed?',
        answer:
          'Yes, visual-spatial working memory training is supported by cognitive science research. Studies by Jaeggi et al. showed working memory training can improve fluid intelligence.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Education Team',
      credential: 'Career and Exam Preparation Experts',
      insight:
        'Visual memory training is often overlooked in exam prep. Students who practice pattern recognition for just 10 minutes daily show measurable improvement in remembering diagrams and visual information during NEET and JEE exams.',
    },
    comparisonData: [
      { item: 'Beginner', value: '3x3 grid', description: '3-4 cells' },
      { item: 'Intermediate', value: '4x4 grid', description: '5-6 cells' },
      { item: 'Advanced', value: '5x5 grid', description: '8+ cells' },
    ],
    entities: [
      { type: 'ExamType', name: 'NEET', relation: 'prepares-for' },
      { type: 'ExamType', name: 'JEE', relation: 'prepares-for' },
      { type: 'CognitiveSkill', name: 'Visual Memory', relation: 'trains' },
      {
        type: 'CognitiveSkill',
        name: 'Pattern Recognition',
        relation: 'develops',
      },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },

  'memory-match': {
    slug: 'memory-match',
    primaryAnswer:
      'Memory Match is a classic card-matching brain training game where you flip cards to find pairs. It trains short-term memory, concentration, and visual recognition - cognitive skills that help reduce careless errors during exams and improve study efficiency.',
    relatedQuestions: [
      {
        question: 'What cognitive skills does Memory Match develop?',
        answer:
          'Memory Match develops short-term memory, concentration, visual recognition, and strategic thinking. These skills transfer to better test-taking ability and reduced mistakes.',
      },
      {
        question: 'Is Memory Match suitable for children?',
        answer:
          'Yes, Memory Match is suitable for all ages. Children as young as 4 can play simpler versions, while advanced modes challenge adults with more cards and time limits.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Education Team',
      credential: 'Cognitive Development Specialists',
      insight:
        'Card matching games have been used for decades to train memory. The key is consistency - playing for 5-10 minutes daily is more effective than occasional long sessions.',
    },
    entities: [
      { type: 'CognitiveSkill', name: 'Short-term Memory', relation: 'trains' },
      { type: 'CognitiveSkill', name: 'Concentration', relation: 'improves' },
      { type: 'AudienceType', name: 'Students', relation: 'benefits' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

// =============================================================================
// LOGIC GAMES SGE CONTENT
// =============================================================================

const logicGamesSGE: Record<string, GameSGEContent> = {
  'logic-puzzle': {
    slug: 'logic-puzzle',
    primaryAnswer:
      'Logic Puzzle offers deductive reasoning challenges similar to CAT, GRE, and GMAT logical reasoning sections. Players analyze clues systematically to reach conclusions, directly practicing the analytical thinking tested in competitive exams and job interviews.',
    relatedQuestions: [
      {
        question: 'Are these puzzles like CAT/GRE questions?',
        answer:
          'Yes, the puzzles mirror the difficulty and format of logical reasoning sections in CAT, GRE, GMAT, and campus placement tests. Regular practice directly improves exam scores.',
      },
      {
        question: 'How do I approach logic puzzles?',
        answer:
          'Read all clues first, use elimination method, create diagrams when helpful, make logical deductions step by step, and verify conclusions against all given information.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Aptitude Team',
      credential: 'CAT/GRE Preparation Specialists',
      insight:
        'Logic puzzles test the same deductive reasoning skills as competitive exams. Students who solve 2-3 puzzles daily typically see 15-20% improvement in their logical reasoning scores within a month.',
    },
    comparisonData: [
      { item: 'Easy', value: '3-4 clues', description: 'Direct deductions' },
      {
        item: 'Medium',
        value: '5-6 clues',
        description: 'Multi-step reasoning',
      },
      {
        item: 'Hard',
        value: '7+ clues',
        description: 'Complex interdependencies',
      },
    ],
    entities: [
      { type: 'ExamType', name: 'CAT', relation: 'prepares-for' },
      { type: 'ExamType', name: 'GRE', relation: 'prepares-for' },
      {
        type: 'CognitiveSkill',
        name: 'Deductive Reasoning',
        relation: 'develops',
      },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },

  'pattern-recognition': {
    slug: 'pattern-recognition',
    primaryAnswer:
      'Pattern Recognition trains the ability to identify sequences and relationships in visual data - a core component of IQ tests and aptitude exams. Regular practice improves your ability to spot trends quickly, essential for data science and analytical roles.',
    relatedQuestions: [
      {
        question: 'Does pattern recognition improve IQ scores?',
        answer:
          'Pattern recognition is a core component of IQ tests that measures fluid intelligence. Regular practice can improve performance on this type of reasoning, though overall IQ is complex.',
      },
      {
        question: 'What careers need pattern recognition?',
        answer:
          'Data scientists, analysts, researchers, programmers, and anyone in analytical roles benefits from strong pattern recognition. It helps identify trends and correlations in data.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Career Team',
      credential: 'Skill Development Experts',
      insight:
        'Pattern recognition is one of the most transferable cognitive skills. Improving it helps with everything from coding to data analysis to strategic decision-making.',
    },
    entities: [
      { type: 'AssessmentType', name: 'IQ Test', relation: 'tested-in' },
      {
        type: 'CognitiveSkill',
        name: 'Abstract Reasoning',
        relation: 'develops',
      },
      { type: 'CareerType', name: 'Data Science', relation: 'benefits' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

// =============================================================================
// MATH GAMES SGE CONTENT
// =============================================================================

const mathGamesSGE: Record<string, GameSGEContent> = {
  'speed-math': {
    slug: 'speed-math',
    primaryAnswer:
      'Speed Math trains rapid mental calculation essential for aptitude tests in campus placements and competitive exams like CAT and bank exams. Practice addition, subtraction, multiplication, and division under time pressure to build the quantitative speed recruiters test.',
    relatedQuestions: [
      {
        question: 'How can I calculate faster in my head?',
        answer:
          'Practice daily with Speed Math, learn shortcuts (like multiplying by 11 or squaring numbers ending in 5), break complex calculations into simpler parts, and build number sense through regular practice.',
      },
      {
        question: 'What math speed is needed for placements?',
        answer:
          'Most aptitude rounds expect 20-30 quantitative questions in 20-25 minutes. Aim to solve basic arithmetic in 5-10 seconds and word problems in 30-60 seconds.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Placement Team',
      credential: 'Campus Placement Specialists',
      insight:
        'Quantitative aptitude is the most common elimination round in placements. Students who can calculate 2-3x faster than average clear this round comfortably, leaving time for verification.',
    },
    comparisonData: [
      {
        item: 'TCS',
        value: '15 mins',
        description: '20 quantitative questions',
      },
      {
        item: 'Infosys',
        value: '25 mins',
        description: '15 quantitative questions',
      },
      {
        item: 'CAT',
        value: '60 mins',
        description: 'DILR + Quant combined',
      },
    ],
    entities: [
      { type: 'ExamType', name: 'CAT', relation: 'prepares-for' },
      {
        type: 'RecruitmentType',
        name: 'Campus Placement',
        relation: 'prepares-for',
      },
      {
        type: 'CognitiveSkill',
        name: 'Mental Calculation',
        relation: 'develops',
      },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },

  'profit-loss-game': {
    slug: 'profit-loss-game',
    primaryAnswer:
      'Profit Loss Game teaches business math through interactive scenarios. Master cost price, selling price, markup, margin, and discount calculations - essential topics for bank exams, CAT, and business aptitude tests.',
    relatedQuestions: [
      {
        question: 'How do I calculate profit percentage?',
        answer:
          'Profit Percentage = (Profit ÷ Cost Price) × 100. For example, if you buy for ₹100 and sell for ₹125, profit is ₹25, so Profit% = (25÷100) × 100 = 25%.',
      },
      {
        question: 'What is the difference between markup and margin?',
        answer:
          'Markup is based on cost price (Markup% = Profit/CP × 100), while Margin is based on selling price (Margin% = Profit/SP × 100). Same profit gives different percentages.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Banking Team',
      credential: 'Bank Exam Preparation Experts',
      insight:
        'Profit-loss questions appear in every bank exam. The key is understanding the concept deeply rather than memorizing formulas - games make this understanding intuitive.',
    },
    entities: [
      { type: 'ExamType', name: 'Bank Exams', relation: 'prepares-for' },
      { type: 'TopicType', name: 'Profit and Loss', relation: 'teaches' },
      { type: 'SkillType', name: 'Business Math', relation: 'develops' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

// =============================================================================
// FOCUS GAMES SGE CONTENT
// =============================================================================

const focusGamesSGE: Record<string, GameSGEContent> = {
  'concentration-test': {
    slug: 'concentration-test',
    primaryAnswer:
      'Concentration Test measures and improves your focus through attention-training exercises. Identify targets while ignoring distractions to build the sustained concentration needed for 3-hour exams like CAT and JEE.',
    relatedQuestions: [
      {
        question: 'How can I improve my concentration?',
        answer:
          'Practice with focus games daily, minimize distractions, take breaks using Pomodoro technique (25 min work, 5 min rest), exercise regularly, and get adequate sleep.',
      },
      {
        question: 'How long can humans concentrate?',
        answer:
          'Research suggests focused attention naturally wanes after 20-25 minutes. Taking short breaks maintains productivity better than pushing through fatigue.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Learning Team',
      credential: 'Study Skills Specialists',
      insight:
        'Concentration is trainable like a muscle. Students who practice focus exercises consistently show measurable improvement in study session length and exam performance.',
    },
    entities: [
      {
        type: 'CognitiveSkill',
        name: 'Sustained Attention',
        relation: 'trains',
      },
      { type: 'TechniqueType', name: 'Pomodoro', relation: 'complements' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },

  'reaction-time-test': {
    slug: 'reaction-time-test',
    primaryAnswer:
      'Reaction Time Test measures how quickly you respond to visual stimuli. Average human reaction time is 200-300 milliseconds, with professional gamers achieving under 150ms. Regular practice can improve reaction speed.',
    relatedQuestions: [
      {
        question: 'What is a good reaction time?',
        answer:
          'Average reaction is 200-300ms. Good is 150-200ms. Excellent is under 150ms. Professional esports players often achieve 100-150ms through practice.',
      },
      {
        question: 'Can you improve reaction time?',
        answer:
          'Yes, reaction time improves with practice. Gaming, sports training, and reaction games all help. Sleep, caffeine, and alertness also significantly affect reaction speed.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Performance Team',
      credential: 'Cognitive Performance Specialists',
      insight:
        'Reaction time is partly genetic but highly trainable. Consistent practice can improve response time by 30-50ms, which makes a noticeable difference in gaming and sports.',
    },
    comparisonData: [
      { item: 'Slow', value: '300+ ms', description: 'Below average' },
      { item: 'Average', value: '200-300 ms', description: 'Most people' },
      { item: 'Good', value: '150-200 ms', description: 'Practiced users' },
      {
        item: 'Excellent',
        value: '< 150 ms',
        description: 'Athletes/gamers',
      },
    ],
    entities: [
      {
        type: 'MetricType',
        name: 'Reaction Time',
        relation: 'measures',
      },
      { type: 'AudienceType', name: 'Gamers', relation: 'benefits' },
      { type: 'AudienceType', name: 'Athletes', relation: 'benefits' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

// =============================================================================
// ADVANCED GAMES SGE CONTENT
// =============================================================================

const advancedGamesSGE: Record<string, GameSGEContent> = {
  'bias-buster': {
    slug: 'bias-buster',
    primaryAnswer:
      'Bias Buster teaches recognition of cognitive biases that affect decision-making. Identify confirmation bias, anchoring, sunk cost fallacy, and other thinking traps through real-world scenarios - essential for MBA students, managers, and anyone making important decisions.',
    relatedQuestions: [
      {
        question: 'What are the most common cognitive biases?',
        answer:
          'Confirmation bias (favoring confirming info), anchoring (over-relying on first data), sunk cost fallacy (continuing bad investments), availability heuristic (overweighting recent events), and hindsight bias (believing you knew it all along).',
      },
      {
        question: 'How do cognitive biases affect decisions?',
        answer:
          'Biases cause systematic errors in judgment, from poor hiring decisions (halo effect) to bad investments (sunk cost fallacy). Recognizing them is the first step to better choices.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Decision Science Team',
      credential: 'Behavioral Economics Specialists',
      insight:
        'Everyone has cognitive biases - the difference is awareness. Decision-makers who recognize their biases make measurably better choices in business, investing, and personal life.',
    },
    comparisonData: [
      {
        item: 'Confirmation Bias',
        value: 'Very Common',
        description: 'Seeking confirming info',
      },
      {
        item: 'Anchoring',
        value: 'Very Common',
        description: 'First number influence',
      },
      {
        item: 'Sunk Cost',
        value: 'Common',
        description: 'Continuing bad investments',
      },
      {
        item: 'Availability',
        value: 'Common',
        description: 'Overweighting recent events',
      },
    ],
    entities: [
      {
        type: 'ConceptType',
        name: 'Cognitive Biases',
        relation: 'teaches',
      },
      { type: 'FieldType', name: 'Behavioral Economics', relation: 'applies' },
      { type: 'AudienceType', name: 'MBA Students', relation: 'benefits' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },

  'data-detective': {
    slug: 'data-detective',
    primaryAnswer:
      'Data Detective trains data interpretation through charts, graphs, and tables. Practice the DI (Data Interpretation) skills tested in CAT, bank exams, and consulting interviews. Learn to extract insights quickly from visualized data.',
    relatedQuestions: [
      {
        question: 'How do I solve DI questions faster?',
        answer:
          'First identify the data type, understand what is asked, approximate when possible, use elimination for MCQs, and practice reading different chart types regularly.',
      },
      {
        question: 'What charts appear in CAT DI?',
        answer:
          'CAT DI includes bar charts, pie charts, line graphs, tables, combination charts, and caselets. Practice all types as the exam varies.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern CAT Team',
      credential: 'CAT 99+ Percentile Mentors',
      insight:
        'DI is often the highest-scoring section for prepared candidates. Unlike quant, DI tests speed of interpretation, which improves dramatically with practice.',
    },
    entities: [
      { type: 'ExamType', name: 'CAT', relation: 'prepares-for' },
      {
        type: 'SkillType',
        name: 'Data Interpretation',
        relation: 'develops',
      },
      {
        type: 'CareerType',
        name: 'Business Analytics',
        relation: 'benefits',
      },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

// =============================================================================
// SCIENCE & CODING GAMES SGE CONTENT
// =============================================================================

const scienceGamesSGE: Record<string, GameSGEContent> = {
  'physics-intuition-lab': {
    slug: 'physics-intuition-lab',
    primaryAnswer:
      'Physics Intuition Lab builds conceptual physics understanding through interactive simulations. Develop the deep intuition for mechanics, thermodynamics, and waves that JEE and NEET require - beyond just formula memorization.',
    relatedQuestions: [
      {
        question: 'How to develop physics intuition?',
        answer:
          'Visualize problems before solving, understand why formulas work, analyze real-world applications, use simulations to see concepts in action, and solve varied problems.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern JEE Team',
      credential: 'IIT Alumni & JEE Mentors',
      insight:
        'Top JEE rankers have deep physics intuition, not just memorized formulas. Interactive concept practice builds the mental models that make problem-solving faster and more accurate.',
    },
    entities: [
      { type: 'ExamType', name: 'JEE', relation: 'prepares-for' },
      { type: 'ExamType', name: 'NEET', relation: 'prepares-for' },
      {
        type: 'SubjectType',
        name: 'Physics',
        relation: 'teaches',
      },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

const codingGamesSGE: Record<string, GameSGEContent> = {
  'debugging-challenge': {
    slug: 'debugging-challenge',
    primaryAnswer:
      'Debugging Challenge tests code troubleshooting skills with buggy programs you must fix. Find logical errors, syntax mistakes, and edge case failures - the exact skills tested in technical interviews at companies like Google, Amazon, and Microsoft.',
    relatedQuestions: [
      {
        question: 'How to get better at debugging?',
        answer:
          'Understand code flow, use print statements or debuggers, test edge cases, read error messages carefully, and practice finding bugs in unfamiliar code.',
      },
      {
        question: 'Do technical interviews test debugging?',
        answer:
          'Yes, many tech companies include debugging rounds. You may be given buggy code to fix or asked to identify issues in your own solutions.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Tech Team',
      credential: 'FAANG Interview Coaches',
      insight:
        'Debugging is often overlooked in interview prep, but it separates good programmers from great ones. Companies love candidates who can quickly identify and fix issues.',
    },
    entities: [
      {
        type: 'InterviewType',
        name: 'Technical Interview',
        relation: 'prepares-for',
      },
      { type: 'SkillType', name: 'Debugging', relation: 'develops' },
      { type: 'CompanyType', name: 'FAANG', relation: 'targets' },
    ],
    sourceCitation: {
      organization: 'Sproutern',
      lastUpdated: '2026-01-25',
      reliability: 'high',
    },
  },
};

// =============================================================================
// COMBINED EXPORTS
// =============================================================================

export const gameSGEContent: Record<string, GameSGEContent> = {
  ...memoryGamesSGE,
  ...logicGamesSGE,
  ...mathGamesSGE,
  ...focusGamesSGE,
  ...advancedGamesSGE,
  ...scienceGamesSGE,
  ...codingGamesSGE,
};

/**
 * Get SGE content for a game
 */
export function getGameSGEContent(slug: string): GameSGEContent | null {
  return gameSGEContent[slug] || null;
}

/**
 * Generate complete SGE schema package for a game
 */
export function generateGameSGESchemas(
  slug: string,
  category: string,
  skills: string[],
) {
  const content = gameSGEContent[slug];

  return {
    perspective: content ? generateGamePerspectiveSchema(content) : null,
    educational: generateEducationalGameSchema(slug, category),
    learningResource: generateLearningResourceSchema(slug, skills),
  };
}

/**
 * Get SGE-optimized meta description
 */
export function getSGEMetaDescription(slug: string): string {
  const content = gameSGEContent[slug];
  return content?.primaryAnswer || '';
}

/**
 * Get related questions for AI follow-ups
 */
export function getSGERelatedQuestions(
  slug: string,
): { question: string; answer: string }[] {
  return gameSGEContent[slug]?.relatedQuestions || [];
}

/**
 * SGE Quality Signals for games
 */
export const gameSGEQualitySignals = {
  expertise: 'educational-games, cognitive-training, exam-preparation',
  experience: 'used-by-students-across-10-countries',
  authoritativeness: 'career-development-platform-2024',
  trustworthiness: 'free-accessible-regularly-updated',
  contentFreshness: new Date().toISOString().split('T')[0],
};

/**
 * Get SGE meta tags for game pages
 */
export function getGameSGEMetaTags(slug: string) {
  const content = gameSGEContent[slug];
  if (!content) return {};

  return {
    'ai-primary-answer': content.primaryAnswer,
    'ai-expert-insight': content.expertPerspective.insight,
    'content-freshness': content.sourceCitation.lastUpdated,
    'content-reliability': content.sourceCitation.reliability,
    expertise: gameSGEQualitySignals.expertise,
  };
}
