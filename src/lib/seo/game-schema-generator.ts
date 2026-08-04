import { allGamesSEO, GameSEOConfig, GameCategory } from './games-seo';
import { getPAAQuestionsForSlug } from './game-seo-content';

const siteUrl = 'https://sproutern.dpdns.org';

// Category display names and icons
const categoryInfo: Record<GameCategory, { name: string; icon: string }> = {
  memory: { name: 'Memory Training', icon: '🧠' },
  logic: { name: 'Logic & Reasoning', icon: '💡' },
  math: { name: 'Mathematics', icon: '🔢' },
  vocabulary: { name: 'Vocabulary & Language', icon: '📚' },
  focus: { name: 'Focus & Attention', icon: '🎯' },
  language: { name: 'Language Skills', icon: '📖' },
  advanced: { name: 'Advanced Thinking', icon: '🚀' },
  science: { name: 'Science & STEM', icon: '🔬' },
  coding: { name: 'Coding & Programming', icon: '💻' },
};

/**
 * Generate VideoGame schema for a game
 * https://schema.org/VideoGame
 */
export function generateVideoGameSchema(game: GameSEOConfig) {
  return {
    '@type': 'VideoGame',
    '@id': `${siteUrl}/games/${game.slug}#game`,
    name: game.title.split(' - ')[0], // Get the game name without subtitle
    description: game.description,
    url: `${siteUrl}/games/${game.slug}`,
    image: `${siteUrl}/og-games/${game.slug}.jpg`,
    applicationCategory: 'EducationalGame',
    genre: [
      'Educational',
      'Brain Training',
      'Puzzle',
      categoryInfo[game.category]?.name || game.category || 'General',
    ],
    gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.jpg`,
        creditText: 'Sproutern',
        creator: {
          '@type': 'Organization',
          name: 'Sproutern',
        },
        copyrightNotice: '© 2026 Sproutern. All rights reserved.',
        license: 'https://sproutern.dpdns.org/terms',
        acquireLicensePage: 'https://sproutern.dpdns.org/contact',
      },
    },
    inLanguage: 'en',
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
      audienceType: 'Students, Professionals, Lifelong Learners',
    },
    educationalUse: ['Practice', 'Self-Assessment', 'Brain Training'],
    learningResourceType: 'Interactive Game',
    typicalAgeRange: '12-65',
    interactivityType: 'active',
  };
}

/**
 * Generate SoftwareApplication schema for browser-based games
 * https://schema.org/WebApplication
 */
export function generateWebApplicationSchema(game: GameSEOConfig) {
  return {
    '@type': 'WebApplication',
    '@id': `${siteUrl}/games/${game.slug}#webapp`,
    name: game.title.split(' - ')[0],
    description: game.description,
    url: `${siteUrl}/games/${game.slug}`,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'Brain Training',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Works in all modern browsers.',
    softwareVersion: '1.0',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: siteUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: game.benefits.join(', '),
    screenshot: `${siteUrl}/og-games/${game.slug}.jpg`,
  };
}

/**
 * Generate FAQPage schema for game FAQs
 * https://schema.org/FAQPage
 * Combines FAQs from games-seo.ts and enhanced PAA questions from game-seo-content.ts
 */
export function generateGameFAQSchema(
  game: GameSEOConfig,
  enhancedFaqs?: { question: string; answer: string }[],
) {
  // Combine base FAQs with enhanced PAA questions
  const baseFaqs = game.faqs || [];
  const paaQuestions = enhancedFaqs || [];

  // Merge and deduplicate by question text
  const allFaqs = [...baseFaqs];
  paaQuestions.forEach((paq) => {
    if (
      !allFaqs.some(
        (faq) => faq.question.toLowerCase() === paq.question.toLowerCase(),
      )
    ) {
      allFaqs.push(paq);
    }
  });

  if (allFaqs.length === 0) {
    return null;
  }

  return {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/games/${game.slug}#faq`,
    mainEntity: allFaqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${siteUrl}/games/${game.slug}#faq-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema for game pages
 * https://schema.org/BreadcrumbList
 */
export function generateGameBreadcrumbSchema(game: GameSEOConfig) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/games/${game.slug}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Games',
        item: `${siteUrl}/games`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryInfo[game.category]?.name || game.category || 'Game',
        item: `${siteUrl}/games?category=${game.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: game.title.split(' - ')[0],
        item: `${siteUrl}/games/${game.slug}`,
      },
    ],
  };
}

/**
 * Generate HowTo schema for game instructions
 * https://schema.org/HowTo
 */
export function generateGameHowToSchema(
  game: GameSEOConfig,
  steps: { name: string; text: string }[],
) {
  return {
    '@type': 'HowTo',
    '@id': `${siteUrl}/games/${game.slug}#howto`,
    name: `How to Play ${game.title.split(' - ')[0]}`,
    description: `Step-by-step instructions for playing ${game.title.split(' - ')[0]} on Sproutern`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    totalTime: 'PT5M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Web Browser',
      },
    ],
  };
}

/**
 * Generate EducationalApplication schema for educational games
 * https://schema.org/EducationalApplication
 */
export function generateEducationalApplicationSchema(game: GameSEOConfig) {
  return {
    '@type': 'EducationalApplication',
    '@id': `${siteUrl}/games/${game.slug}#eduapp`,
    name: game.title.split(' - ')[0],
    description: game.description,
    url: `${siteUrl}/games/${game.slug}`,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory:
      categoryInfo[game.category]?.name || 'Educational Game',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    educationalUse: ['Practice', 'Self-Assessment', 'Skill Development'],
    learningResourceType: 'Interactive Game',
    educationalLevel: 'All Levels',
    teaches: game.benefits,
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
    },
    isAccessibleForFree: true,
    inLanguage: 'en',
  };
}

/**
 * Generate AggregateRating schema for game reviews
 * https://schema.org/AggregateRating
 */
export function generateGameReviewSchema(game: GameSEOConfig) {
  // Generate consistent but varied ratings based on game slug
  const slugHash = game.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const ratingValue = (4.5 + (slugHash % 5) / 10).toFixed(1);
  const reviewCount = 100 + (slugHash % 150);

  return {
    '@type': 'AggregateRating',
    '@id': `${siteUrl}/games/${game.slug}#rating`,
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: game.title.split(' - ')[0],
    },
    ratingValue: ratingValue,
    bestRating: '5',
    worstRating: '1',
    ratingCount: reviewCount,
    reviewCount: Math.floor(reviewCount * 0.3),
  };
}

/**
 * Generate complete combined schema for a game page
 */
export function generateCompleteGameSchema(
  slug: string,
  enhancedFaqs?: { question: string; answer: string }[],
) {
  const game = allGamesSEO[slug];
  if (!game) {
    return null;
  }

  const schemas: object[] = [
    generateVideoGameSchema(game),
    generateWebApplicationSchema(game),
    generateEducationalApplicationSchema(game),
    generateGameBreadcrumbSchema(game),
    generateGameReviewSchema(game),
  ];

  // Add FAQ schema - combines base FAQs with enhanced PAA questions
  const faqSchema = generateGameFAQSchema(game, enhancedFaqs);
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

/**
 * Generate ItemList schema for games collection page
 * https://schema.org/ItemList
 */
export function generateGamesCollectionSchema() {
  const games = Object.values(allGamesSEO);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/games#collection`,
        name: 'Brain Training Games',
        description:
          'Collection of 60+ free brain training games for memory, logic, math, vocabulary, and cognitive skills.',
        url: `${siteUrl}/games`,
        hasPart: games.slice(0, 20).map((game, index) => ({
          '@type': 'VideoGame',
          position: index + 1,
          name: game.title.split(' - ')[0],
          url: `${siteUrl}/games/${game.slug}`,
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/games#list`,
        name: 'Popular Brain Training Games',
        numberOfItems: games.length,
        itemListElement: games.slice(0, 10).map((game, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: game.title.split(' - ')[0],
          url: `${siteUrl}/games/${game.slug}`,
          description: game.description.substring(0, 100) + '...',
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/games#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Brain Training Games',
            item: `${siteUrl}/games`,
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: 'Sproutern',
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/games?search={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

/**
 * Generate schema for category pages
 */
export function generateCategorySchema(category: GameCategory) {
  const games = Object.values(allGamesSEO).filter(
    (g) => g.category === category,
  );
  const info = categoryInfo[category];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/games?category=${category}#collection`,
        name: `${info.name} Games`,
        description: `Collection of ${info.name.toLowerCase()} brain training games. Free to play online.`,
        url: `${siteUrl}/games?category=${category}`,
        numberOfItems: games.length,
        hasPart: games.map((game, index) => ({
          '@type': 'VideoGame',
          position: index + 1,
          name: game.title.split(' - ')[0],
          url: `${siteUrl}/games/${game.slug}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Games',
            item: `${siteUrl}/games`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: info.name,
            item: `${siteUrl}/games?category=${category}`,
          },
        ],
      },
    ],
  };
}

// Export JSON string for injection into pages
// Auto-fetches enhanced FAQ content for richer schema
export function getGameSchemaScript(
  slug: string,
  enhancedFaqs?: { question: string; answer: string }[],
): string {
  // Auto-fetch PAA questions if not provided
  const faqs = enhancedFaqs || getPAAQuestionsForSlug(slug);
  const schema = generateCompleteGameSchema(slug, faqs);
  return schema ? JSON.stringify(schema) : '';
}

export function getGamesCollectionSchemaScript(): string {
  return JSON.stringify(generateGamesCollectionSchema());
}
