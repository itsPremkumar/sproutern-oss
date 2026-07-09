/**
 * Related Content System for Internal Linking
 * Automatically suggests related blog posts, tools, and resources
 */

export interface ContentItem {
  title: string;
  url: string;
  type: 'blog' | 'tool' | 'resource' | 'guide' | 'country';
  category?: string;
  tags?: string[];
  description?: string;
}

export interface RelatedContentOptions {
  currentUrl: string;
  currentTags?: string[];
  currentCategory?: string;
  limit?: number;
  contentType?: 'blog' | 'tool' | 'resource' | 'guide' | 'country' | 'all';
}

// Comprehensive content database for internal linking
const contentDatabase: ContentItem[] = [
  // Blog posts
  {
    title: 'Ultimate Guide to First Internship',
    url: '/blog/ultimate-guide-first-internship',
    type: 'blog',
    category: 'Career Guidance',
    tags: ['internship', 'career', 'freshers', 'guide'],
  },
  {
    title: 'How to Write an Effective Cover Letter',
    url: '/blog/write-effective-cover-letter',
    type: 'blog',
    category: 'Career Guidance',
    tags: ['cover-letter', 'applications', 'job-search'],
  },
  {
    title: 'Startup vs Corporate Internship: Which is Better?',
    url: '/blog/startup-vs-corporate-internship',
    type: 'blog',
    category: 'Career Guidance',
    tags: ['internship', 'comparison', 'career-choice'],
  },
  {
    title: 'Technical Interview Preparation Guide',
    url: '/blog/technical-interview-preparation',
    type: 'blog',
    category: 'Interview Prep',
    tags: ['interview', 'technical', 'preparation', 'coding'],
  },
  {
    title: 'Remote Internships: Complete Guide',
    url: '/blog/remote-internships-complete-guide',
    type: 'blog',
    category: 'Internship Types',
    tags: ['remote', 'internship', 'work-from-home'],
  },

  // Tools
  {
    title: 'CGPA to Percentage Converter',
    url: '/tools/cgpa-converter',
    type: 'tool',
    category: 'Academic Tools',
    tags: ['cgpa', 'converter', 'academic', 'calculator'],
  },
  {
    title: 'Resume Score Checker',
    url: '/tools/resume-score-checker',
    type: 'tool',
    category: 'Career Tools',
    tags: ['resume', 'checker', 'ats', 'optimization'],
  },
  {
    title: 'Salary Calculator',
    url: '/tools/salary-calculator',
    type: 'tool',
    category: 'Career Tools',
    tags: ['salary', 'calculator', 'compensation', 'ctc'],
  },
  {
    title: 'Cover Letter Generator',
    url: '/tools/cover-letter-generator',
    type: 'tool',
    category: 'Career Tools',
    tags: ['cover-letter', 'generator', 'ai', 'applications'],
  },
  {
    title: 'Application Tracker',
    url: '/tools/application-tracker',
    type: 'tool',
    category: 'Career Tools',
    tags: ['applications', 'tracker', 'organization', 'job-search'],
  },

  // Resources
  {
    title: 'Resume Templates',
    url: '/resources/resume-templates',
    type: 'resource',
    category: 'Career Resources',
    tags: ['resume', 'templates', 'download', 'career'],
  },
  {
    title: 'Interview Preparation Guide',
    url: '/resources/interview-prep',
    type: 'resource',
    category: 'Interview Resources',
    tags: ['interview', 'preparation', 'guide', 'tips'],
  },
  {
    title: 'Career Planning Resources',
    url: '/resources/career-planning',
    type: 'resource',
    category: 'Career Resources',
    tags: ['career', 'planning', 'roadmap', 'guidance'],
  },

  // Guides
  {
    title: 'After 10th Career Guide',
    url: '/school/after-10th-guide',
    type: 'guide',
    category: 'School Students',
    tags: ['school', '10th-class', 'career', 'stream-selection'],
  },
  {
    title: 'After 12th Career Guide',
    url: '/school/after-12th-guide',
    type: 'guide',
    category: 'School Students',
    tags: ['school', '12th-class', 'career', 'college'],
  },
  {
    title: 'First Job Guide for Freshers',
    url: '/freshers/first-job-guide',
    type: 'guide',
    category: 'Fresh Graduates',
    tags: ['freshers', 'first-job', 'career', 'placement'],
  },

  // Country guides
  {
    title: 'Study in USA Guide',
    url: '/countries/usa',
    type: 'country',
    category: 'Study Abroad',
    tags: ['usa', 'study-abroad', 'international', 'education'],
  },
  {
    title: 'Study in UK Guide',
    url: '/countries/uk',
    type: 'country',
    category: 'Study Abroad',
    tags: ['uk', 'study-abroad', 'international', 'education'],
  },
  {
    title: 'Study in Canada Guide',
    url: '/countries/canada',
    type: 'country',
    category: 'Study Abroad',
    tags: ['canada', 'study-abroad', 'international', 'education'],
  },

  // FAANG Company Pages
  {
    title: 'Google Careers & Interview Guide',
    url: '/companies/google',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['google', 'faang', 'interview', 'salary', 'tech', 'swe'],
    description:
      'Complete guide to Google careers, salary (₹25-3 Cr+), and interview process',
  },
  {
    title: 'Google Interview Questions',
    url: '/companies/google/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: ['google', 'interview-questions', 'dsa', 'system-design', 'coding'],
  },
  {
    title: 'Amazon Careers & Interview Guide',
    url: '/companies/amazon',
    type: 'guide',
    category: 'Company Interviews',
    tags: [
      'amazon',
      'faang',
      'interview',
      'salary',
      'tech',
      'sde',
      'leadership-principles',
    ],
    description:
      'Complete guide to Amazon careers, salary, and Leadership Principles interview',
  },
  {
    title: 'Amazon Interview Questions',
    url: '/companies/amazon/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: ['amazon', 'interview-questions', 'dsa', 'system-design', 'lp'],
  },
  {
    title: 'Microsoft Careers & Interview Guide',
    url: '/companies/microsoft',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['microsoft', 'faang', 'interview', 'salary', 'tech', 'sde'],
    description:
      'Complete guide to Microsoft careers, levels, and interview process',
  },
  {
    title: 'Microsoft Interview Questions',
    url: '/companies/microsoft/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: ['microsoft', 'interview-questions', 'dsa', 'system-design'],
  },
  {
    title: 'Meta Careers & Interview Guide',
    url: '/companies/meta',
    type: 'guide',
    category: 'Company Interviews',
    tags: [
      'meta',
      'facebook',
      'faang',
      'interview',
      'salary',
      'tech',
      'swe',
      'e-levels',
    ],
    description:
      'Complete guide to Meta careers, E-levels, and interview process',
  },
  {
    title: 'Meta Interview Questions',
    url: '/companies/meta/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: [
      'meta',
      'facebook',
      'interview-questions',
      'dsa',
      'system-design',
      'behavioral',
    ],
  },

  // Indian Unicorns
  {
    title: 'Flipkart Careers & Interview Guide',
    url: '/companies/flipkart',
    type: 'guide',
    category: 'Company Interviews',
    tags: [
      'flipkart',
      'unicorn',
      'interview',
      'salary',
      'ecommerce',
      'sde',
      'machine-coding',
    ],
    description:
      'Complete guide to Flipkart careers, salary (₹18-1.8 Cr), and machine coding rounds',
  },
  {
    title: 'Flipkart Interview Questions',
    url: '/companies/flipkart/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: [
      'flipkart',
      'interview-questions',
      'dsa',
      'machine-coding',
      'lld',
      'system-design',
    ],
  },

  // Indian IT Companies
  {
    title: 'TCS Careers & Interview Guide',
    url: '/companies/tcs',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['tcs', 'it-services', 'interview', 'salary', 'nqt', 'freshers'],
    description: 'Complete guide to TCS careers, NQT, and interview process',
  },
  {
    title: 'Infosys Careers & Interview Guide',
    url: '/companies/infosys',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['infosys', 'it-services', 'interview', 'salary', 'freshers'],
  },
  {
    title: 'Wipro Careers & Interview Guide',
    url: '/companies/wipro',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['wipro', 'it-services', 'interview', 'salary', 'freshers'],
  },
  {
    title: 'Cognizant Careers & Interview Guide',
    url: '/companies/cognizant',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['cognizant', 'it-services', 'interview', 'salary', 'genc'],
  },
  {
    title: 'Accenture Careers & Interview Guide',
    url: '/companies/accenture',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['accenture', 'consulting', 'interview', 'salary', 'freshers'],
  },

  // Banks & Finance
  {
    title: 'Goldman Sachs Interview Guide',
    url: '/companies/goldman-sachs',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['goldman-sachs', 'finance', 'interview', 'banking', 'tech'],
  },
  {
    title: 'Citi Careers & Interview Guide',
    url: '/companies/citi',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['citi', 'finance', 'banking', 'interview', 'tech'],
  },

  // FAANG Extended (Apple, Netflix)
  {
    title: 'Apple Careers & Interview Guide',
    url: '/companies/apple',
    type: 'guide',
    category: 'Company Interviews',
    tags: [
      'apple',
      'faang',
      'interview',
      'salary',
      'tech',
      'ios',
      'ict-levels',
    ],
    description:
      'Complete guide to Apple careers, ICT levels, and interview process',
  },
  {
    title: 'Apple Interview Questions',
    url: '/tools/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: ['apple', 'interview-questions', 'dsa', 'system-design', 'ios'],
  },
  {
    title: 'Netflix Careers & Interview Guide',
    url: '/companies/netflix',
    type: 'guide',
    category: 'Company Interviews',
    tags: ['netflix', 'faang', 'interview', 'salary', 'streaming', 'culture'],
    description:
      'Complete guide to Netflix careers, all-cash compensation, and Freedom & Responsibility culture',
  },
  {
    title: 'Netflix Interview Questions',
    url: '/tools/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: [
      'netflix',
      'interview-questions',
      'dsa',
      'system-design',
      'culture-fit',
    ],
  },

  // Big Tech
  {
    title: 'Uber Careers & Interview Guide',
    url: '/companies/uber',
    type: 'guide',
    category: 'Company Interviews',
    tags: [
      'uber',
      'big-tech',
      'interview',
      'salary',
      'mobility',
      'geo-spatial',
    ],
    description:
      'Complete guide to Uber careers, L-levels, and interview process',
  },
  {
    title: 'Uber Interview Questions',
    url: '/tools/interview-questions',
    type: 'guide',
    category: 'Interview Questions',
    tags: ['uber', 'interview-questions', 'dsa', 'system-design', 'maps'],
  },
];

/**
 * Calculate relevance score between two content items
 */
function calculateRelevance(
  item: ContentItem,
  currentTags: string[] = [],
  currentCategory?: string,
): number {
  let score = 0;

  // Category match (high weight)
  if (currentCategory && item.category === currentCategory) {
    score += 50;
  }

  // Tag matches (medium weight)
  if (item.tags && currentTags.length > 0) {
    const matchingTags = item.tags.filter((tag) => currentTags.includes(tag));
    score += matchingTags.length * 10;
  }

  // Content type preference (low weight)
  // Prefer diverse content types for better exploration
  score += Math.random() * 5;

  return score;
}

/**
 * Find related content based on current page
 */
export function findRelatedContent(
  options: RelatedContentOptions,
): ContentItem[] {
  const {
    currentUrl,
    currentTags = [],
    currentCategory,
    limit = 6,
    contentType = 'all',
  } = options;

  // Filter out current page and by content type
  let candidates = contentDatabase.filter((item) => {
    if (item.url === currentUrl) return false;
    if (contentType !== 'all' && item.type !== contentType) return false;
    return true;
  });

  // Calculate relevance scores
  const scoredItems = candidates.map((item) => ({
    ...item,
    relevance: calculateRelevance(item, currentTags, currentCategory),
  }));

  // Sort by relevance and return top items
  return scoredItems.sort((a, b) => b.relevance - a.relevance).slice(0, limit);
}

/**
 * Get contextual internal links for a given topic
 */
export function getContextualLinks(
  topic: string,
  limit: number = 3,
): ContentItem[] {
  const topicLower = topic.toLowerCase();

  // Find content items that match the topic
  const matches = contentDatabase.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(topicLower);
    const tagMatch = item.tags?.some((tag) =>
      tag.toLowerCase().includes(topicLower),
    );
    const categoryMatch = item.category?.toLowerCase().includes(topicLower);

    return titleMatch || tagMatch || categoryMatch;
  });

  return matches.slice(0, limit);
}

/**
 * Get popular content by type
 */
export function getPopularContent(
  type: 'blog' | 'tool' | 'resource' | 'guide' | 'country',
  limit: number = 5,
): ContentItem[] {
  return contentDatabase.filter((item) => item.type === type).slice(0, limit);
}

/**
 * Get content by category
 */
export function getContentByCategory(
  category: string,
  limit: number = 10,
): ContentItem[] {
  return contentDatabase
    .filter((item) => item.category === category)
    .slice(0, limit);
}

/**
 * Generate SEO-friendly anchor text for internal links
 */
export function generateAnchorText(
  item: ContentItem,
  context?: string,
): string {
  if (context) {
    // Context-aware anchor text
    return `${context}: ${item.title}`;
  }

  // Default to title
  return item.title;
}
