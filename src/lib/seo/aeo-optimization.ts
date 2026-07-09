// Answer Engine Optimization (AEO) for AI-powered search
// Optimizes for: Google AI Overview, ChatGPT, Perplexity, Bing Copilot, Claude

/**
 * AEO Schema types for structured AI-readable content
 */
export interface AEOContentBlock {
  /** Question being answered */
  question: string;
  /** Direct answer (2-3 sentences max) */
  answer: string;
  /** Additional context */
  context?: string;
  /** Source/authority */
  source?: string;
  /** Last updated date */
  lastUpdated?: string;
}

export interface AEOPageConfig {
  /** Page title optimized for AI extraction */
  aiTitle: string;
  /** TL;DR summary (1-2 sentences) */
  tldr: string;
  /** Key takeaways as bullet points */
  keyTakeaways: string[];
  /** FAQ blocks for direct answers */
  faqs: AEOContentBlock[];
  /** Entity type for knowledge graph */
  entityType:
    | 'HowTo'
    | 'FAQPage'
    | 'Article'
    | 'WebApplication'
    | 'EducationalOrganization';
  /** Primary topic */
  primaryTopic: string;
  /** Target audience */
  targetAudience: string[];
}

/**
 * Generate FAQ Schema markup for Answer Engine Optimization
 */
export function generateFAQSchema(faqs: AEOContentBlock[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        dateModified: faq.lastUpdated || new Date().toISOString().split('T')[0],
      },
    })),
  };
}

/**
 * Generate HowTo Schema for step-by-step guides
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[],
  totalTime?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime: totalTime || 'PT5M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * Generate Speakable Schema for voice search optimization
 */
export function generateSpeakableSchema(
  cssSelectors: string[] = ['h1', '.tldr', '.key-takeaway', '.faq-answer'],
) {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  };
}

/**
 * Generate WebApplication schema for tools
 */
export function generateToolSchema(
  name: string,
  description: string,
  url: string,
  category: string,
  features: string[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: features,
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
      url: 'https://www.sproutern.com',
    },
  };
}

/**
 * AEO-optimized content configurations for tools
 */
export const toolAEOConfig: Record<string, AEOPageConfig> = {
  'cgpa-converter': {
    aiTitle: 'CGPA to Percentage Converter - Free Online Calculator',
    tldr: 'Convert CGPA to percentage instantly using the formula: Percentage = CGPA × 9.5 (CBSE standard). Our free tool supports 50+ Indian universities including Anna, VTU, and Mumbai University.',
    keyTakeaways: [
      'Standard formula: CGPA × 9.5 = Percentage (CBSE)',
      '8.5 CGPA = 80.75% (First Class)',
      '7.0 CGPA = 66.5% (Second Class)',
      'Different universities use different formulas',
      'Tool supports 10-point, 7-point, and 4-point scales',
    ],
    faqs: [
      {
        question: 'How to convert CGPA to percentage?',
        answer:
          'Multiply your CGPA by 9.5 to get the percentage. For example, 8.0 CGPA × 9.5 = 76%. This is the standard CBSE formula accepted by most Indian companies and universities.',
        lastUpdated: '2026-01-06',
      },
      {
        question: 'What is 8.5 CGPA in percentage?',
        answer:
          '8.5 CGPA equals 80.75% using the standard formula (8.5 × 9.5 = 80.75). This is considered First Class with Distinction in most Indian universities.',
        lastUpdated: '2026-01-06',
      },
      {
        question: 'Is 7.5 CGPA good for placements?',
        answer:
          'Yes, 7.5 CGPA (71.25%) is good for most campus placements. It meets the cutoff for TCS (60%), Infosys (65%), and most IT companies. Top product companies may require 8.0+.',
        lastUpdated: '2026-01-06',
      },
    ],
    entityType: 'WebApplication',
    primaryTopic: 'CGPA to Percentage Conversion',
    targetAudience: ['students', 'freshers', 'job seekers'],
  },

  'salary-calculator': {
    aiTitle: 'CTC to In-Hand Salary Calculator India - Free Tool',
    tldr: 'Calculate your actual take-home salary from CTC in India. On average, in-hand salary is 70-80% of CTC after deductions for PF (12%), professional tax, and income tax.',
    keyTakeaways: [
      'In-hand salary = 70-80% of CTC typically',
      '6 LPA CTC ≈ ₹42,000-45,000 monthly in-hand',
      '10 LPA CTC ≈ ₹65,000-70,000 monthly in-hand',
      'New tax regime is better for <₹12 LPA with no investments',
      'PF deduction: 12% of basic salary',
    ],
    faqs: [
      {
        question: 'What is the in-hand salary for 6 LPA CTC?',
        answer:
          'For 6 LPA CTC in India, your in-hand salary is approximately ₹42,000-45,000 per month after deductions including PF (₹2,400), Professional Tax (₹200), and Income Tax (₹1,250).',
        lastUpdated: '2026-01-06',
      },
      {
        question: 'How to calculate in-hand salary from CTC?',
        answer:
          'In-hand salary = CTC - Employer PF - Gratuity - Insurance - Employee PF - Professional Tax - Income Tax. Generally, expect 70-80% of CTC as take-home depending on your tax regime and deductions.',
        lastUpdated: '2026-01-06',
      },
      {
        question: 'What is the difference between CTC and in-hand salary?',
        answer:
          'CTC (Cost to Company) includes everything the company spends on you - salary, PF, gratuity, insurance. In-hand salary is what you actually receive after all deductions. CTC is always higher than in-hand.',
        lastUpdated: '2026-01-06',
      },
    ],
    entityType: 'WebApplication',
    primaryTopic: 'Salary Calculation India',
    targetAudience: ['freshers', 'job seekers', 'employees'],
  },

  'typing-test': {
    aiTitle: 'Free Typing Speed Test - Check Your WPM Online',
    tldr: 'Test your typing speed and accuracy for free. Average typing speed is 40 WPM. Professional typists reach 65-75 WPM. Our test measures WPM, accuracy, and provides instant results.',
    keyTakeaways: [
      'Average typing speed: 40 WPM',
      'Good typing speed: 60+ WPM',
      'Professional speed: 75+ WPM',
      'Accuracy should be 95%+ for job applications',
      'Most IT companies test typing during assessments',
    ],
    faqs: [
      {
        question: 'What is a good typing speed?',
        answer:
          'A good typing speed is 60+ WPM with 95%+ accuracy. Average is 40 WPM. For data entry jobs, 65-75 WPM is expected. For programming, 50+ WPM with high accuracy is sufficient.',
        lastUpdated: '2026-01-06',
      },
      {
        question: 'How to improve typing speed?',
        answer:
          'Practice daily for 15-30 minutes, use touch typing (no looking at keyboard), maintain proper posture, and focus on accuracy before speed. Use online typing tests to track progress.',
        lastUpdated: '2026-01-06',
      },
    ],
    entityType: 'WebApplication',
    primaryTopic: 'Typing Speed Test',
    targetAudience: ['students', 'job seekers', 'professionals'],
  },

  'resume-score-checker': {
    aiTitle: 'Free ATS Resume Score Checker - Optimize Your Resume',
    tldr: 'Check if your resume passes ATS (Applicant Tracking System) filters. Our free tool analyzes keywords, formatting, and structure to give you an ATS compatibility score.',
    keyTakeaways: [
      '75%+ of resumes are rejected by ATS before human review',
      'Use keywords from job description',
      'Avoid images, tables, and complex formatting',
      'Use standard section headings',
      'PDF and DOCX formats work best',
    ],
    faqs: [
      {
        question: 'What is a good ATS resume score?',
        answer:
          'A good ATS score is 70%+. Score above 80% is excellent. Below 50% means your resume likely gets filtered out. Focus on matching keywords from the job description to improve your score.',
        lastUpdated: '2026-01-06',
      },
      {
        question: 'How to make resume ATS friendly?',
        answer:
          'Use standard fonts (Arial, Calibri), avoid tables and images, include keywords from job posting, use standard section headings (Experience, Education, Skills), and save as PDF or DOCX.',
        lastUpdated: '2026-01-06',
      },
    ],
    entityType: 'WebApplication',
    primaryTopic: 'ATS Resume Optimization',
    targetAudience: ['job seekers', 'freshers', 'career changers'],
  },
};

/**
 * Generate complete AEO schema for a tool page
 */
export function generateToolAEOSchema(toolSlug: string) {
  const config = toolAEOConfig[toolSlug];
  if (!config) return null;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // FAQ Schema for direct answers
      generateFAQSchema(config.faqs),
      // Speakable for voice search
      {
        '@type': 'WebPage',
        name: config.aiTitle,
        description: config.tldr,
        speakable: generateSpeakableSchema(),
      },
    ],
  };
}

/**
 * AEO meta tags for AI crawlers
 */
export function getAEOMetaTags(config: AEOPageConfig) {
  return {
    'ai-content-type': config.entityType,
    'ai-primary-topic': config.primaryTopic,
    'ai-target-audience': config.targetAudience.join(', '),
    'ai-content-summary': config.tldr,
    citation: 'enabled',
    'speakable-content': 'enabled',
  };
}

/**
 * Generate structured content blocks for AI extraction
 */
export function generateAEOContentHTML(config: AEOPageConfig): string {
  return `
 <!-- AEO: TL;DR for AI extraction -->
 <div class="tldr-summary" data-ai-summary="true">
 <strong>TL;DR:</strong> ${config.tldr}
 </div>
 
 <!-- AEO: Key Takeaways -->
 <div class="key-takeaways" data-ai-key-points="true">
 <h2>Key Takeaways</h2>
 <ul>
 ${config.keyTakeaways.map((t) => `<li class="key-takeaway">${t}</li>`).join('\n')}
 </ul>
 </div>
 
 <!-- AEO: FAQ Section -->
 <div class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
 ${config.faqs
   .map(
     (faq) => `
 <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
 <h3 itemprop="name">${faq.question}</h3>
 <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
 <p itemprop="text" class="faq-answer">${faq.answer}</p>
 </div>
 </div>
 `,
   )
   .join('\n')}
 </div>
 `;
}
