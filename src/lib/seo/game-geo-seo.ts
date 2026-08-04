/**
 * Game GEO (Geographic) SEO Optimization
 * Multi-region targeting for games with localized metadata, hreflang tags,
 * and region-specific exam/placement context
 */

const siteUrl = 'https://sproutern.dpdns.org';

/**
 * Supported regions with locale information
 */
export const gameRegions = {
  IN: {
    locale: 'en_IN',
    hreflang: 'en-in',
    countryName: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    exams: ['NEET', 'JEE', 'CAT', 'GATE', 'UPSC', 'Bank Exams'],
    placements: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
  },
  US: {
    locale: 'en_US',
    hreflang: 'en-us',
    countryName: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    exams: ['SAT', 'GRE', 'GMAT', 'MCAT', 'ACT', 'LSAT'],
    placements: ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple'],
  },
  GB: {
    locale: 'en_GB',
    hreflang: 'en-gb',
    countryName: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    exams: ['A-Levels', 'GCSE', 'UCAT', 'BMAT', 'LNAT'],
    placements: ['Deloitte', 'PwC', 'KPMG', 'EY', 'JP Morgan'],
  },
  AU: {
    locale: 'en_AU',
    hreflang: 'en-au',
    countryName: 'Australia',
    currency: 'AUD',
    currencySymbol: 'A$',
    exams: ['ATAR', 'GAMSAT', 'UCAT ANZ', 'NAPLAN'],
    placements: ['Commonwealth Bank', 'Telstra', 'BHP', 'CSL', 'Atlassian'],
  },
  CA: {
    locale: 'en_CA',
    hreflang: 'en-ca',
    countryName: 'Canada',
    currency: 'CAD',
    currencySymbol: 'C$',
    exams: ['SAT', 'LSAT', 'MCAT', 'GMAT', 'CASPer'],
    placements: ['Shopify', 'RBC', 'TD Bank', 'Rogers', 'BCE'],
  },
  SG: {
    locale: 'en_SG',
    hreflang: 'en-sg',
    countryName: 'Singapore',
    currency: 'SGD',
    currencySymbol: 'S$',
    exams: ['PSLE', 'O-Levels', 'A-Levels', 'GMAT', 'GRE'],
    placements: ['DBS', 'Google Singapore', 'Amazon', 'Grab', 'Sea Group'],
  },
  AE: {
    locale: 'en_AE',
    hreflang: 'en-ae',
    countryName: 'UAE',
    currency: 'AED',
    currencySymbol: 'AED',
    exams: ['EmSAT', 'SAT', 'IELTS', 'CAT', 'GMAT'],
    placements: ['Emirates', 'Etisalat', 'ADNOC', 'Majid Al Futtaim', 'Careem'],
  },
  DE: {
    locale: 'en_DE',
    hreflang: 'en-de',
    countryName: 'Germany',
    currency: 'EUR',
    currencySymbol: '€',
    exams: ['Abitur', 'TestAS', 'DSH', 'GMAT', 'GRE'],
    placements: ['SAP', 'Siemens', 'BMW', 'Volkswagen', 'Bosch'],
  },
};

export type GameRegion = keyof typeof gameRegions;

/**
 * Generate hreflang tags for a game page
 */
export function generateGameHrefLangTags(gameSlug: string): {
  hreflang: string;
  href: string;
}[] {
  const baseUrl = `${siteUrl}/games/${gameSlug}`;

  const tags = Object.entries(gameRegions).map(([, region]) => ({
    hreflang: region.hreflang,
    href: baseUrl,
  }));

  // Add x-default
  tags.push({
    hreflang: 'x-default',
    href: baseUrl,
  });

  return tags;
}

/**
 * Generate geo-targeted metadata for a game
 */
export function getGameGeoMetadata(
  gameSlug: string,
  gameTitle: string,
  category: string,
  region: GameRegion = 'IN',
) {
  const regionInfo = gameRegions[region];
  const categoryExamMap: Record<string, string[]> = {
    memory: ['NEET', 'JEE', 'Medical Exams'],
    logic: ['CAT', 'GRE', 'GMAT', 'LSAT'],
    math: ['CAT', 'Bank Exams', 'Aptitude Tests'],
    vocabulary: ['GRE', 'CAT', 'IELTS', 'TOEFL'],
    focus: ['All Competitive Exams'],
    advanced: ['MBA', 'Consulting', 'Case Interviews'],
    science: ['NEET', 'JEE', 'MCAT'],
    coding: ['Technical Interviews', 'Campus Placements'],
  };

  const relevantExams =
    categoryExamMap[category]?.filter((exam) =>
      regionInfo.exams.some(
        (e) =>
          e.toLowerCase().includes(exam.toLowerCase()) ||
          exam.toLowerCase().includes(e.toLowerCase()),
      ),
    ) || regionInfo.exams.slice(0, 3);

  const examString =
    relevantExams.length > 0
      ? relevantExams.join(', ')
      : regionInfo.exams.slice(0, 2).join(' and ');

  return {
    title: `${gameTitle} - Free Brain Training Game | ${regionInfo.countryName}`,
    description: `Play ${gameTitle} free online. Train ${category} skills for ${examString} preparation. Perfect for students and professionals in ${regionInfo.countryName}.`,
    keywords: [
      gameTitle.toLowerCase(),
      'brain training game',
      'free online game',
      `${category} game`,
      ...relevantExams.map((e) => `${e.toLowerCase()} preparation`),
      regionInfo.countryName.toLowerCase(),
    ],
    alternates: {
      canonical: `${siteUrl}/games/${gameSlug}`,
      languages: Object.fromEntries(
        Object.entries(gameRegions).map(([code, info]) => [
          info.hreflang,
          `${siteUrl}/games/${gameSlug}`,
        ]),
      ),
    },
    openGraph: {
      locale: regionInfo.locale,
      siteName: 'Sproutern',
    },
  };
}

/**
 * Get region-specific benefits text for a game
 */
export function getGameRegionBenefits(
  category: string,
  region: GameRegion = 'IN',
): string[] {
  const regionInfo = gameRegions[region];

  const baseBenefits: Record<string, string[]> = {
    memory: [
      'Remember diagrams and formulas better',
      'Improve visual-spatial memory',
      'Reduce careless errors in exams',
    ],
    logic: [
      'Crack logical reasoning sections',
      'Solve puzzles faster',
      'Improve analytical thinking',
    ],
    math: [
      'Calculate faster in aptitude rounds',
      'Master mental math',
      'Build quantitative confidence',
    ],
    vocabulary: [
      'Expand vocabulary for verbal sections',
      'Improve reading comprehension',
      'Ace vocabulary-based questions',
    ],
    focus: [
      'Maintain concentration during long exams',
      'Reduce distraction susceptibility',
      'Improve study efficiency',
    ],
    advanced: [
      'Think critically under pressure',
      'Make better decisions',
      'Prepare for case interviews',
    ],
    science: [
      'Build conceptual understanding',
      'Apply formulas intuitively',
      'Solve problems faster',
    ],
    coding: [
      'Prepare for technical interviews',
      'Debug code efficiently',
      'Think algorithmically',
    ],
  };

  const benefits = baseBenefits[category] || baseBenefits['memory'];

  // Add region-specific exam/placement benefit
  if (region === 'IN') {
    benefits.push(`Excel in ${regionInfo.exams.slice(0, 2).join('/')} exams`);
  } else if (region === 'US') {
    benefits.push(`Boost ${regionInfo.exams.slice(0, 2).join('/')} scores`);
  } else {
    benefits.push(`Prepare for ${regionInfo.countryName} exams`);
  }

  return benefits;
}

/**
 * Get regional placement context
 */
export function getGamePlacementContext(region: GameRegion = 'IN'): string {
  const regionInfo = gameRegions[region];

  if (region === 'IN') {
    return `Prepare for aptitude rounds at ${regionInfo.placements.slice(0, 3).join(', ')} and other top companies.`;
  } else if (region === 'US') {
    return `Build skills valued by ${regionInfo.placements.slice(0, 3).join(', ')} and other tech giants.`;
  } else {
    return `Develop cognitive skills for career opportunities in ${regionInfo.countryName}.`;
  }
}

/**
 * Generate geo-targeted Organization schema for games section
 */
export function generateGamesGeoOrganizationSchema(region: GameRegion = 'IN') {
  const regionInfo = gameRegions[region];

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Sproutern',
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    description: `Free brain training games and career resources for students and professionals in ${regionInfo.countryName} and worldwide.`,
    areaServed: {
      '@type': 'Country',
      name: regionInfo.countryName,
    },
    knowsLanguage: 'English',
    sameAs: [
      'https://twitter.com/sproutern',
      'https://linkedin.com/company/sproutern',
      'https://facebook.com/sproutern',
    ],
  };
}

/**
 * Generate complete geo markup for game pages
 */
export function generateGameGeoMarkup(gameSlug: string, region: GameRegion) {
  const regionInfo = gameRegions[region];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/games/${gameSlug}#webpage`,
    url: `${siteUrl}/games/${gameSlug}`,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      url: siteUrl,
      name: 'Sproutern',
    },
    about: {
      '@type': 'Thing',
      name: 'Brain Training Games',
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
      geographicArea: {
        '@type': 'Country',
        name: regionInfo.countryName,
      },
    },
  };
}

/**
 * Get all hreflang alternates for sitemap
 */
export function getGameHrefLangAlternates(gameSlug: string): string {
  const baseUrl = `${siteUrl}/games/${gameSlug}`;

  let alternates = '';
  Object.values(gameRegions).forEach((region) => {
    alternates += `\n    <xhtml:link rel="alternate" hreflang="${region.hreflang}" href="${baseUrl}"/>`;
  });
  alternates += `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>`;

  return alternates;
}

/**
 * Generate sitemap entry for a game with geo alternates
 */
export function generateGameSitemapEntry(
  gameSlug: string,
  lastmod: string = new Date().toISOString().split('T')[0],
  changefreq: 'daily' | 'weekly' | 'monthly' = 'monthly',
  priority: string = '0.8',
): string {
  const baseUrl = `${siteUrl}/games/${gameSlug}`;
  const alternates = getGameHrefLangAlternates(gameSlug);

  return `<url>
  <loc>${baseUrl}</loc>
  <lastmod>${lastmod}T00:00:00+00:00</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>${alternates}
</url>`;
}

/**
 * List of all game slugs for sitemap generation
 */
export const allGameSlugs = [
  // Memory Games
  'memory-matrix',
  'memory-match',
  'card-flip-memory',
  'memory-power-test',
  'quick-recall',
  'mind-snapshot',
  'attention-trainer',
  // Logic Games
  'logic-puzzle',
  'logic-builder',
  'pattern-recognition',
  'pattern-finder',
  'sudoku-trainer',
  'sequence-solver',
  'odd-one-out',
  'visual-logic-game',
  'brain-logic-test',
  'reasoning-master',
  'algorithm-thinking',
  'predict-output',
  'debugging-challenge',
  'critical-thinking-quiz',
  'problem-decomposition',
  'daily-riddle',
  'trivia-quiz',
  // Math Games
  'speed-math',
  'mental-math',
  'math-speed-test',
  'number-sequence',
  'number-series',
  'percentage-puzzle',
  'profit-loss-game',
  'time-work-challenge',
  'math-proof-builder',
  // Vocabulary Games
  'word-association',
  'word-scramble',
  'synonym-match',
  'antonym-challenge',
  'spelling-bee',
  'email-etiquette',
  // Focus Games
  'concentration-test',
  'concentration-challenge',
  'focus-booster',
  'reaction-time-test',
  'quick-click-challenge',
  'speed-focus-game',
  'think-fast',
  'situation-judgment',
  'interview-ready',
  // Advanced Thinking Games
  'bias-buster',
  'fallacy-detective',
  'causal-chain-builder',
  'system-simulator',
  'decision-matrix-lab',
  'risk-radar',
  'strategic-standoff',
  'complexity-cracker',
  'constraint-crusher',
  'data-detective',
  'chart-challenge',
  'stats-skeptic',
  'smart-choice',
  // Science Games
  'concept-sprint',
  'deep-problem-marathon',
  'fermi-estimation-duel',
  'physics-intuition-lab',
  'derivation-race',
  'dimensional-detective',
  'error-spotter',
  'organic-synthesis',
  'biology-pathway',
  'reaction-mechanism',
  'clinical-case',
];
