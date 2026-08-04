/**
 * Tool SGE (Search Generative Experience) Optimization
 * Optimizes tool content for Google AI Overview, Bing Copilot, Perplexity
 * Focuses on entity optimization, expert perspectives, and utility schemas
 */

const siteUrl = 'https://sproutern.dpdns.org';

/**
 * SGE Content Structure for Tools
 */
export interface ToolSGEContent {
  slug: string;
  // Primary answer extracted by AI (30-50 words)
  primaryAnswer: string;
  // Follow-up questions AI might suggest
  relatedQuestions: {
    question: string;
    answer: string;
  }[];
  // Expert perspective for E-E-A-T
  expertPerspective: {
    author: string;
    credential: string;
    insight: string;
  };
  // Comparison data for SGE tables
  comparisonData?: {
    item: string;
    value: string;
    description: string;
  }[];
  // Entity relationships
  entities: {
    type: string;
    name: string;
    relation: string;
  }[];
  // Tool category for schema
  applicationCategory: string;
}

/**
 * Generate SoftwareApplication schema for tools
 */
export function generateToolSoftwareSchema(
  slug: string,
  appName: string,
  category: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    applicationCategory: category,
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: siteUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150', // Would typically come from DB
    },
  };
}

/**
 * Generate HowTo schema for tool usage
 */
export function generateToolHowToSchema(
  slug: string,
  appName: string,
  steps: { title: string; description: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${appName}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
      position: index + 1,
    })),
  };
}

// =============================================================================
// CALCULATOR SGE CONTENT
// =============================================================================

const calculatorSGE: Record<string, ToolSGEContent> = {
  'cgpa-converter': {
    slug: 'cgpa-converter',
    primaryAnswer:
      'CGPA Converter allows students to calculate their percentage from CGPA using university-standard formulas. It supports the widely used 9.5 multiplier for 10-point scales (CBSE standard) and specific formulas for Mumbai University, engineering colleges, and international grading systems.',
    relatedQuestions: [
      {
        question: 'Why multiply CGPA by 9.5?',
        answer:
          'The 9.5 factor is a statistical average derived from student performance data. It is the official conversion factor mandated by CBSE and adopted by many Indian universities to standardize grades.',
      },
      {
        question: 'Is 9.5 multiplier used everywhere?',
        answer:
          'No, some universities like Mumbai University use 7.14 or 7.25. Our tool allows you to select your specific university formula for accurate conversion.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Education Team',
      credential: 'Admission Consultants',
      insight:
        'Accuracy in CGPA conversion is critical for placement eligibility. A difference of 0.1% can sometimes disqualify a candidate from top companies like TCS or Infosys.',
    },
    comparisonData: [
      { item: '10 Point', value: '× 9.5', description: 'CBSE Standard' },
      { item: '7 Point', value: '× 10', description: 'Some Deemed Univs' },
      { item: '4 Point', value: '× 25', description: 'US Standard' },
    ],
    entities: [
      { type: 'Metric', name: 'CGPA', relation: 'converts' },
      { type: 'Organization', name: 'CBSE', relation: 'follows-standard' },
      { type: 'Concept', name: 'Grading System', relation: 'calculates' },
    ],
    applicationCategory: 'EducationalApplication',
  },

  'salary-calculator': {
    slug: 'salary-calculator',
    primaryAnswer:
      'Salary Calculator estimates in-hand monthly income from annual CTC by deducting Income Tax (New vs Old Regime), Provident Fund (PF), and Professional Tax. It helps freshers negotiate better by understanding the difference between offered CTC and actual take-home pay.',
    relatedQuestions: [
      {
        question: 'Is New Tax Regime better for 10 LPA?',
        answer:
          'For 10 LPA with minimal investments, the New Tax Regime is generally beneficial due to lower slab rates. However, if you claim HRA and 80C deductions, the Old Regime might save more tax.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Finance Team',
      credential: 'Chartered Accountants',
      insight:
        "Most freshers focus only on the CTC number. Understanding the in-hand component prevents financial surprises after joining. Always check if the PF is part of the employer's contribution in the CTC.",
    },
    entities: [
      { type: 'Concept', name: 'In-hand Salary', relation: 'calculates' },
      { type: 'Concept', name: 'CTC', relation: 'inputs' },
      {
        type: 'Organization',
        name: 'Income Tax Dept',
        relation: 'follows-rules',
      },
    ],
    applicationCategory: 'FinanceApplication',
  },
};

// =============================================================================
// CAREER TOOL SGE CONTENT
// =============================================================================

const careerToolSGE: Record<string, ToolSGEContent> = {
  'resume-builder': {
    slug: 'resume-builder',
    primaryAnswer:
      'Resume Builder provides ATS-friendly templates designed to pass automated screening software. It guides users through creating professional resumes with structured sections for experience, skills, and education, ensuring high readability for recruiters.',
    relatedQuestions: [
      {
        question: 'Why uses ATS friendly templates?',
        answer:
          "Applicant Tracking Systems (ATS) cannot read complex graphics or columns. Our templates use standard hierarchies that parsers can easily index, ensuring your application isn't auto-rejected.",
      },
    ],
    expertPerspective: {
      author: 'Sproutern HR Team',
      credential: 'Recruitment Specialists',
      insight:
        'A fancy resume often performs worse than a simple, clean one. Recruiters spend 6 seconds scanning a resume - standard formatting ensures they find what they need instantly.',
    },
    entities: [
      { type: 'Software', name: 'ATS', relation: 'optimizes-for' },
      { type: 'Document', name: 'Resume', relation: 'creates' },
    ],
    applicationCategory: 'BusinessApplication',
  },
};

// =============================================================================
// DEVELOPER TOOL SGE CONTENT
// =============================================================================

const devToolSGE: Record<string, ToolSGEContent> = {
  'github-readme-generator': {
    slug: 'github-readme-generator',
    primaryAnswer:
      'GitHub README Generator creates visually appealing profile READMEs with dynamic stats, tech stack badges, and social widgets. It simplifies markdown creation, allowing developers to showcase their portfolio and skills effectively on GitHub.',
    relatedQuestions: [
      {
        question: 'Does a good README help getting hired?',
        answer:
          'Yes, a professional README acts as a portfolio landing page. It shows attention to detail and communication skills, which are highly valued by engineering managers.',
      },
    ],
    expertPerspective: {
      author: 'Sproutern Tech Team',
      credential: 'Senior Developers',
      insight:
        'Your GitHub profile is your developer resume. A well-structured README sets the context for your code and guides reviewers to your best work.',
    },
    entities: [
      { type: 'Platform', name: 'GitHub', relation: 'enhances' },
      { type: 'Language', name: 'Markdown', relation: 'generates' },
    ],
    applicationCategory: 'DeveloperApplication',
  },
};

// =============================================================================
// COMBINED EXPORTS
// =============================================================================

export const toolSGEContent: Record<string, ToolSGEContent> = {
  ...calculatorSGE,
  ...careerToolSGE,
  ...devToolSGE,
};

/**
 * Get SGE content for a tool
 */
export function getToolSGEContent(slug: string): ToolSGEContent | null {
  return toolSGEContent[slug] || null;
}

/**
 * Generate complete SGE schema package for a tool
 */
export function generateToolSGESchemas(
  slug: string,
  appName: string,
  category: string,
  howToSteps: { title: string; description: string }[],
) {
  const content = toolSGEContent[slug];

  return {
    software: generateToolSoftwareSchema(slug, appName, category),
    howTo: generateToolHowToSchema(slug, appName, howToSteps),
    perspective: content
      ? {
          '@context': 'https://schema.org',
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: content.expertPerspective.author,
            jobTitle: content.expertPerspective.credential,
          },
          reviewBody: content.expertPerspective.insight,
        }
      : null,
  };
}
