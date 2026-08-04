// Google Search Generative Experience (SGE) Optimization
// Optimizes content for Google's AI-powered search results

/**
 * SGE Content Structure Types
 * Google SGE prefers certain content formats for AI extraction
 */
export interface SGEContentBlock {
  /** Direct answer (50-150 characters ideal) */
  directAnswer: string;
  /** Supporting evidence/facts */
  supportingFacts: string[];
  /** Source credibility signals */
  sourceCredibility: {
    authorName: string;
    authorCredentials?: string;
    organization: string;
    lastUpdated: string;
  };
}

/**
 * Generate Perspective schema for Google SGE
 * SGE values diverse perspectives and expert opinions
 */
export function generatePerspectiveSchema(
  perspectives: {
    author: string;
    credential: string;
    opinion: string;
    topic: string;
  }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Expert Perspectives',
    itemListElement: perspectives.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Opinion',
        author: {
          '@type': 'Person',
          name: p.author,
          jobTitle: p.credential,
        },
        about: p.topic,
        text: p.opinion,
      },
    })),
  };
}

/**
 * Generate Claim Review schema for fact-checking signals
 * Google SGE prioritizes fact-checked content
 */
export function generateClaimReviewSchema(
  claim: string,
  rating: 'True' | 'Mostly True' | 'Mixed' | 'Mostly False' | 'False',
  reviewer: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed: claim,
    reviewRating: {
      '@type': 'Rating',
      ratingValue:
        rating === 'True'
          ? 5
          : rating === 'Mostly True'
            ? 4
            : rating === 'Mixed'
              ? 3
              : rating === 'Mostly False'
                ? 2
                : 1,
      bestRating: 5,
      worstRating: 1,
      alternateName: rating,
    },
    author: {
      '@type': 'Organization',
      name: reviewer,
    },
    url,
    datePublished: new Date().toISOString(),
  };
}

/**
 * Generate DiscussionForumPosting schema
 * SGE indexes forum-style Q&A content well
 */
export function generateDiscussionSchema(
  question: string,
  answers: {
    text: string;
    author: string;
    upvotes: number;
    dateCreated: string;
  }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: question,
    author: {
      '@type': 'Person',
      name: 'Community Member',
    },
    comment: answers.map((a) => ({
      '@type': 'Comment',
      text: a.text,
      author: {
        '@type': 'Person',
        name: a.author,
      },
      upvoteCount: a.upvotes,
      dateCreated: a.dateCreated,
    })),
  };
}

/**
 * SGE-optimized content structure for tool pages
 */
export const sgeToolContent = {
  'cgpa-converter': {
    // Primary answer (what SGE will likely show)
    primaryAnswer:
      'CGPA × 9.5 = Percentage. For example, 8.5 CGPA equals 80.75%.',

    // Follow-up questions SGE might generate
    relatedQuestions: [
      {
        q: 'What is 8.5 CGPA in percentage?',
        a: '8.5 CGPA = 80.75% (8.5 × 9.5)',
      },
      {
        q: 'What is a good CGPA for placements?',
        a: '7.5+ CGPA (71.25%) is good for most IT companies',
      },
      {
        q: 'Which formula should I use?',
        a: 'CBSE uses ×9.5, Anna University uses (CGPA-0.5)×10',
      },
    ],

    // Expert perspective for SGE diversity
    expertPerspective: {
      author: 'Sproutern Career Team',
      credential: 'Placement Preparation Experts',
      insight:
        "Always verify with your university's official conversion formula, as it varies.",
    },

    // Comparison data (SGE loves comparisons)
    comparisonData: [
      {
        cgpa: '10.0',
        percentage: '95%',
        grade: 'Outstanding',
        placement: 'Eligible for all companies',
      },
      {
        cgpa: '9.0',
        percentage: '85.5%',
        grade: 'Excellent',
        placement: 'Eligible for all companies',
      },
      {
        cgpa: '8.0',
        percentage: '76%',
        grade: 'Very Good',
        placement: 'Eligible for most companies',
      },
      {
        cgpa: '7.0',
        percentage: '66.5%',
        grade: 'Good',
        placement: 'Eligible for service companies',
      },
      {
        cgpa: '6.0',
        percentage: '57%',
        grade: 'Average',
        placement: 'Limited options',
      },
    ],
  },

  'salary-calculator': {
    primaryAnswer:
      'In-hand salary is typically 70-80% of CTC. For 6 LPA CTC, expect ₹42,000-45,000 monthly in-hand.',

    relatedQuestions: [
      {
        q: 'What is in-hand salary for 10 LPA?',
        a: 'Approximately ₹65,000-70,000 per month after deductions',
      },
      {
        q: 'What deductions are made from salary?',
        a: 'PF (12%), Professional Tax (₹200), Income Tax (varies)',
      },
      {
        q: 'New vs Old tax regime?',
        a: 'New regime is better for <₹12 LPA with minimal investments',
      },
    ],

    expertPerspective: {
      author: 'Sproutern Finance Team',
      credential: 'Tax & Salary Experts',
      insight:
        'Negotiate for higher variable pay and benefits over fixed salary for tax efficiency.',
    },

    comparisonData: [
      { ctc: '4 LPA', inHand: '₹30,000/month', tax: '₹0', effective: '90%' },
      {
        ctc: '6 LPA',
        inHand: '₹43,000/month',
        tax: '₹15,000/year',
        effective: '86%',
      },
      {
        ctc: '10 LPA',
        inHand: '₹67,000/month',
        tax: '₹52,500/year',
        effective: '80%',
      },
      {
        ctc: '15 LPA',
        inHand: '₹95,000/month',
        tax: '₹1.5L/year',
        effective: '76%',
      },
      {
        ctc: '25 LPA',
        inHand: '₹1.5L/month',
        tax: '₹4L/year',
        effective: '72%',
      },
    ],
  },

  'typing-test': {
    primaryAnswer:
      'Average typing speed is 40 WPM. Good speed is 60+ WPM. Professional typists reach 75+ WPM.',

    relatedQuestions: [
      {
        q: 'What is a good typing speed for jobs?',
        a: '60+ WPM with 95% accuracy for most office jobs',
      },
      {
        q: 'How to improve typing speed?',
        a: 'Practice 15-30 min daily, use touch typing, focus on accuracy first',
      },
      {
        q: 'What speed is required for data entry?',
        a: '65-75 WPM is typically required for data entry positions',
      },
    ],

    expertPerspective: {
      author: 'Sproutern Skills Team',
      credential: 'Assessment Specialists',
      insight:
        'Accuracy is more important than speed. Aim for 95%+ accuracy before increasing speed.',
    },

    comparisonData: [
      { wpm: '30', level: 'Beginner', suitable: 'Basic computer use' },
      { wpm: '40', level: 'Average', suitable: 'General office work' },
      { wpm: '60', level: 'Good', suitable: 'Administrative roles' },
      {
        wpm: '75',
        level: 'Professional',
        suitable: 'Data entry, Transcription',
      },
      { wpm: '100+', level: 'Expert', suitable: 'Court reporting, Captioning' },
    ],
  },
};

/**
 * Generate SGE-optimized WebPage schema
 */
export function generateSGEWebPageSchema(
  title: string,
  description: string,
  primaryAnswer: string,
  keywords: string[],
  dateModified: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    dateModified,
    inLanguage: 'en',
    isAccessibleForFree: true,
    keywords: keywords.join(', '),
    // SGE-specific: Primary entity being discussed
    mainEntity: {
      '@type': 'Thing',
      name: title,
      description: primaryAnswer,
    },
    // Speakable for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.primary-answer', '.tldr-summary', 'h1', '.key-takeaway'],
    },
    // Audience targeting
    audience: {
      '@type': 'Audience',
      audienceType: 'Students, Job Seekers, Freshers',
    },
  };
}

/**
 * Generate complete SGE optimization package for a tool page
 */
export function generateSGEPackage(toolSlug: string, url: string) {
  const content = sgeToolContent[toolSlug as keyof typeof sgeToolContent];
  if (!content) return null;

  return {
    schemas: [
      // Main FAQ schema
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.relatedQuestions.map((q) => ({
          '@type': 'Question',
          name: q.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.a,
          },
        })),
      },
      // Expert perspective
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `Expert Insight: ${content.expertPerspective.insight}`,
        author: {
          '@type': 'Person',
          name: content.expertPerspective.author,
          jobTitle: content.expertPerspective.credential,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Sproutern',
          url: 'https://sproutern.dpdns.org',
        },
      },
    ],
    // Content snippets for SGE extraction
    snippets: {
      primaryAnswer: content.primaryAnswer,
      relatedQuestions: content.relatedQuestions,
      comparison: content.comparisonData,
    },
  };
}

/**
 * SGE Content Quality Signals
 * These meta signals help Google understand content quality
 */
export const sgeQualitySignals = {
  // E-E-A-T signals
  expertise: 'career-guidance, educational-tools, placement-preparation',
  experience: 'helping-students-since-2024',
  authoritativeness: 'trusted-by-50000-students',
  trustworthiness: 'regularly-updated, fact-checked, expert-reviewed',

  // Content freshness
  contentFreshness: new Date().toISOString().split('T')[0],

  // Content completeness
  contentCompleteness: 'comprehensive-with-examples',
};

/**
 * Generate SGE meta tags
 */
export function getSGEMetaTags() {
  return {
    // Quality signals
    'content-expertise': sgeQualitySignals.expertise,
    'content-experience': sgeQualitySignals.experience,
    'content-authority': sgeQualitySignals.authoritativeness,
    'content-trust': sgeQualitySignals.trustworthiness,

    // SGE-specific
    'sge-primary-topic': 'career-tools, education, placements',
    'sge-content-type': 'calculator, guide, reference',
    'sge-answer-format': 'direct-answer, comparison, step-by-step',
    'sge-citation-ready': 'true',
  };
}
