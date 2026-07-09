/**
 * Tool AEO (Answer Engine Optimization)
 * Optimizes tool content for AI assistants, voice search, and featured snippets
 * Targets: Google AI Overview, ChatGPT, Perplexity, Voice Assistants
 */

/**
 * AEO Content Block for tools - structured for AI extraction
 */
export interface ToolAEOBlock {
  question: string;
  answer: string;
  context?: string;
  lastUpdated: string;
}

/**
 * Complete AEO configuration for a tool
 */
export interface ToolAEOConfig {
  slug: string;
  // Direct answer for AI extraction (how to use/what it does)
  primaryAnswer: string;
  // TL;DR for quick comprehension
  tldr: string;
  // Key takeaways/features (bulleted facts)
  keyTakeaways: string[];
  // Featured snippet targets
  featuredSnippetContent: {
    paragraph?: string;
    list?: string[]; // Step-by-step
    table?: { row: string; value: string }[];
  };
  // People Also Ask questions
  paaQuestions: ToolAEOBlock[];
  // Voice search optimized answers
  voiceSearchAnswers: {
    question: string;
    speakableAnswer: string;
  }[];
  // Target audience
  targetAudience: string[];
  // Primary topic for entity recognition
  primaryTopic: string;
}

/**
 * Generate speakable schema for voice search optimization
 */
export function generateToolSpeakableSchema(slug: string) {
  const config = toolAEOConfigs[slug];
  if (!config) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.tool-description',
        '.tool-tldr',
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
export function generateToolAEOFAQSchema(slug: string) {
  const config = toolAEOConfigs[slug];
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
export function getToolAEOMetaTags(slug: string) {
  const config = toolAEOConfigs[slug];
  if (!config) return {};

  return {
    'ai-summary': config.tldr,
    'ai-key-points': config.keyTakeaways.join('; '),
    'target-audience': config.targetAudience.join(', '),
    'primary-topic': config.primaryTopic,
    'content-type': 'software-tool',
  };
}

// =============================================================================
// CALCULATORS AEO CONFIGURATIONS
// =============================================================================

const calculatorsAEO: Record<string, ToolAEOConfig> = {
  'cgpa-converter': {
    slug: 'cgpa-converter',
    primaryAnswer:
      'CGPA to Percentage Converter instantly converts your Cumulative Grade Point Average (CGPA) to percentage using standard university formulas (mostly multiplying by 9.5). It supports 10-point, 7-point, and 4-point scales used by Indian and international universities.',
    tldr: 'Convert CGPA to Percentage instantly. Supports 10-point scale (×9.5) and university specific formulas.',
    keyTakeaways: [
      'Standard formula: CGPA × 9.5 = Percentage',
      'Supports CBSE, Mumbai University, VTU, KTU',
      'Converts 10, 7, and 4-point scales',
      'Instant result with grade classification',
      'Essential for job applications and higher studies',
    ],
    featuredSnippetContent: {
      paragraph:
        'To convert CGPA to percentage, multiply your CGPA by 9.5. For example, if your CGPA is 8.0, the percentage is 8.0 × 9.5 = 76%. This standard formula is used by CBSE and most Indian universities.',
      list: [
        'Enter your current CGPA',
        'Select your university scale (usually 10-point)',
        'Click Convert to see percentage',
        'View equivalent grade class (First/Distinction)',
      ],
    },
    paaQuestions: [
      {
        question: 'How do I convert my CGPA to percentage?',
        answer:
          'Multiply your CGPA by 9.5 to get the percentage. For example, 9.2 CGPA = 9.2 × 9.5 = 87.4%. This factor of 9.5 is the standard conversion used by most boards and universities in India.',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'What is 7.5 CGPA in percentage?',
        answer:
          '7.5 CGPA is equal to 71.25% (7.5 × 9.5). This is considered a "First Class with Distinction" in many universities and meets the eligibility criteria for most campus placements.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How to calculate CGPA percentage?',
        speakableAnswer:
          'Just multiply your CGPA by 9.5. For example, 8 CGPA becomes 76 percent.',
      },
    ],
    targetAudience: ['students', 'graduates', 'job applicants'],
    primaryTopic: 'CGPA Conversion',
  },

  'salary-calculator': {
    slug: 'salary-calculator',
    primaryAnswer:
      'Salary Calculator India calculates your in-hand (take-home) salary from your annual CTC. It accounts for income tax (Old vs New Regime), PF deductions, professional tax, and HRA exemptions to show exactly how much money effectively hits your bank account.',
    tldr: 'Calculate monthly in-hand salary from CTC after Tax and PF deductions.',
    keyTakeaways: [
      'Calculates in-hand from CTC',
      'Compares Old vs New Tax Regime',
      'Account for PF (12%) & Professional Tax',
      'Shows monthly and annual breakdown',
      'Updated for Financial Year 2025-26',
    ],
    featuredSnippetContent: {
      paragraph:
        'To calculate in-hand salary, subtract PF (12% of basic), Income Tax (TDS), and Professional Tax from your monthly gross pay. CTC usually includes variable pay and employer PF contribution which are not part of monthly take-home.',
      table: [
        { row: 'CTC', value: 'Cost to Company (Annual)' },
        { row: 'Gross Salary', value: 'CTC minus Employer PF/Gratuity' },
        { row: 'Net Salary', value: 'Gross minus Tax and Employee PF' },
      ],
    },
    paaQuestions: [
      {
        question: 'What is the in-hand salary for 6 LPA?',
        answer:
          'For 6 LPA CTC, the approximate monthly in-hand salary is ₹42,000 - ₹45,000. This assumes standard deductions for PF and zero income tax under the New Regime rebate (up to ₹7 LPA).',
        lastUpdated: '2026-01-25',
      },
      {
        question: 'How is in-hand salary calculated from CTC?',
        answer:
          'In-hand salary = CTC - (Employer PF + Gratuity + Variable Pay) - (Employee PF + Professional Tax + Income Tax). Typically, in-hand is 80-85% of CTC for lower brackets and 70% for higher brackets.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'What is my in-hand salary?',
        speakableAnswer:
          'Your in-hand salary is your CTC minus deductions like PF, Income Tax, and Professional Tax. Use our calculator to get the exact amount.',
      },
    ],
    targetAudience: ['employees', 'freshers', 'finance planners'],
    primaryTopic: 'Salary Calculation',
  },

  'emi-calculator': {
    slug: 'emi-calculator',
    primaryAnswer:
      'EMI Calculator helps you calculate the Equal Monthly Installment for home, car, or personal loans. It provides a detailed amortization schedule showing the split between principal and interest for each payment over the loan tenure.',
    tldr: 'Calculate monthly loan EMI and view interest vs principal breakup.',
    keyTakeaways: [
      'Accurate monthly EMI calculation',
      'Total interest payable view',
      'Amortization schedule graph',
      'Compare loan tenures',
      'Supports Home, Car, and Personal loans',
    ],
    featuredSnippetContent: {
      paragraph:
        'EMI is calculated using the formula: P × r × (1 + r)^n / ((1 + r)^n - 1), where P is Principal, r is monthly interest rate, and n is tenure in months. This ensures you pay off both interest and principal over the term.',
    },
    paaQuestions: [
      {
        question: 'How is loan EMI calculated?',
        answer:
          'EMI is calculated based on Principal Amount, Interest Rate, and Loan Tenure. A longer tenure reduces monthly EMI but increases total interest paid. A shorter tenure increases EMI but saves interest.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I calculate EMI?',
        speakableAnswer:
          'Enter your loan amount, interest rate, and duration. The calculator will show your monthly payment and total interest cost.',
      },
    ],
    targetAudience: ['borrowers', 'home buyers', 'students'],
    primaryTopic: 'Loan EMI',
  },
};

// =============================================================================
// CAREER TOOLS AEO CONFIGURATIONS
// =============================================================================

const careerToolsAEO: Record<string, ToolAEOConfig> = {
  'resume-builder': {
    slug: 'resume-builder',
    primaryAnswer:
      'Resume Builder creates professional, ATS-friendly resumes in minutes. Choose from recruiter-approved templates, fill in your details, and download a perfectly formatted PDF that passes Applicant Tracking Systems.',
    tldr: 'Create ATS-friendly resumes instantly with professional templates.',
    keyTakeaways: [
      'ATS-compliant templates',
      'Real-time preview',
      'Pre-written content suggestions',
      'PDF export',
      'No signup required for basic use',
    ],
    featuredSnippetContent: {
      list: [
        'Choose a professional template',
        'Enter contact and education details',
        'Add work experience with action verbs',
        'List relevant skills and projects',
        'Download as PDF instantly',
      ],
    },
    paaQuestions: [
      {
        question: 'What is an ATS friendly resume?',
        answer:
          'An ATS-friendly resume uses standard formatting, fonts, and keywords that Applicant Tracking Systems can easily read. It avoids columns, graphics, and tables that might confuse the software used by recruiters.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'How do I make a resume?',
        speakableAnswer:
          'Use our free resume builder. Pick a template, key in your details, and download your professional resume in minutes.',
      },
    ],
    targetAudience: ['job seekers', 'students', 'professionals'],
    primaryTopic: 'Resume Creation',
  },

  'ats-checker': {
    slug: 'ats-checker',
    primaryAnswer:
      'ATS Checker analyzes your resume to see how well it parses in Applicant Tracking Systems. It scores your readability, formatting, and keyword usage, giving specific suggestions to improve your chances of getting shortlisted.',
    tldr: 'Check your resume score and fix formatting issues for ATS software.',
    keyTakeaways: [
      'Parsability score analysis',
      'Keyword detection check',
      'Formatting error identification',
      'Improvement recommendations',
      'Increases interview chances',
    ],
    featuredSnippetContent: {
      paragraph:
        'To check your resume ATS score, upload your PDF. The tool scans for readable text, standard section headings, and relevant keywords. Scores above 80% indicate good compatibility with hiring software.',
    },
    paaQuestions: [
      {
        question: 'How do I know if my resume is ATS friendly?',
        answer:
          'Run it through an ATS Checker. If the tool can extract your name, contact info, and work history correctly without errors, your resume is likely ATS-friendly. Simple layouts work best.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'Check my resume score',
        speakableAnswer:
          'Upload your resume to our ATS Checker. We will analyze it and give you a score out of 100 with tips to improve.',
      },
    ],
    targetAudience: ['job applicants', 'career changers'],
    primaryTopic: 'Resume Optimization',
  },

  'cover-letter-generator': {
    slug: 'cover-letter-generator',
    primaryAnswer:
      'Cover Letter Generator writes personalized, professional cover letters for any job role. Just enter your target role, company, and key skills to generate a compelling letter that highlights your fit for the position.',
    tldr: 'Generate professional cover letters tailored to your target job instantly.',
    keyTakeaways: [
      'Tailored to job roles',
      'Professional tone options',
      'Highlights key skills',
      'Ready-to-use structure',
      'Saves writing time',
    ],
    featuredSnippetContent: {
      list: [
        'Enter target Job Role & Company',
        'Add your top 3 Key Skills',
        'Generate Cover Letter',
        'Edit personal details and download',
      ],
    },
    paaQuestions: [
      {
        question: 'Is a cover letter necessary?',
        answer:
          'Yes, meaningful cover letters are still read by hiring managers, especially for competitive roles. They provide context to your resume and demonstrate your specific interest in the company.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'Write a cover letter for me',
        speakableAnswer:
          'Use our Cover Letter Generator. Enter the job role and your skills, and get a professional letter ready in seconds.',
      },
    ],
    targetAudience: ['job seekers', 'internship applicants'],
    primaryTopic: 'Cover Letter Writing',
  },
};

// =============================================================================
// PRODUCTIVITY TOOLS AEO CONFIGURATIONS
// =============================================================================

const productivityToolsAEO: Record<string, ToolAEOConfig> = {
  'pomodoro-timer': {
    slug: 'pomodoro-timer',
    primaryAnswer:
      'Pomodoro Timer boosts productivity using the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break. It tracks your focus sessions, helping you study or work longer without burnout.',
    tldr: 'Boost focus with 25-minute study timers and tracked break intervals.',
    keyTakeaways: [
      'Customizable timer intervals',
      'Audio notifications',
      'Session tracking',
      'Prevents burnout',
      'Increases study efficiency',
    ],
    featuredSnippetContent: {
      list: [
        'Set timer for 25 minutes (1 Pomodoro)',
        'Work until timer rings',
        'Take a short 5-minute break',
        'Every 4 Pomodoros, take a long break (15 min)',
      ],
    },
    paaQuestions: [
      {
        question: 'What is the Pomodoro Technique?',
        answer:
          'The Pomodoro Technique is a time management method developed by Francesco Cirillo. It uses a timer to break work into 25-minute intervals separated by short breaks to maintain high focus.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'Start a study timer',
        speakableAnswer:
          'Starting Pomodoro Timer. You will focus for 25 minutes, then get a 5-minute break.',
      },
    ],
    targetAudience: ['students', 'freelancers', 'workers'],
    primaryTopic: 'Pomodoro Technique',
  },

  'password-generator': {
    slug: 'password-generator',
    primaryAnswer:
      'Password Generator creates strong, secure passwords to protect your accounts. Generate random strings combining uppercase, lowercase, numbers, and symbols that are impossible for hackers to guess.',
    tldr: 'Create unhackable, secure passwords instantly with custom complexity.',
    keyTakeaways: [
      'Cryptographically secure',
      'Customizable length (8-64 chars)',
      'Include/exclude symbols',
      'Copy to clipboard one-click',
      'Runs locally in browser (Private)',
    ],
    featuredSnippetContent: {
      paragraph:
        'A strong password should be at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special symbols. Avoid common words or personal info.',
    },
    paaQuestions: [
      {
        question: 'How do I create a strong password?',
        answer:
          'Use a random generator to create a password at least 12 characters long with mixed character types. Avoid reusing passwords across sites. Use a password manager to store them.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'Generate a secure password',
        speakableAnswer:
          'Use our Password Generator to create a complex, random password that is safe from hacking attempts.',
      },
    ],
    targetAudience: ['security conscious users', 'everyone'],
    primaryTopic: 'Cybersecurity',
  },
};

// =============================================================================
// DEVELOPER TOOLS AEO CONFIGURATIONS
// =============================================================================

const devToolsAEO: Record<string, ToolAEOConfig> = {
  'github-readme-generator': {
    slug: 'github-readme-generator',
    primaryAnswer:
      'GitHub README Generator helps developers create stunning profile READMEs effortlessly. Add dynamic stats, tech stack icons, social links, and project showcases using a simple drag-and-drop interface.',
    tldr: 'Create professional GitHub Profile READMEs with stats and icons instantly.',
    keyTakeaways: [
      'Visual editor (No markdown needed)',
      'GitHub Stats cards integration',
      'Tech stack badges library',
      'Social media links',
      'One-click copy markdown',
    ],
    featuredSnippetContent: {
      paragraph:
        'A GitHub Profile README is shown at the top of your profile. Use our generator to add sections like "About Me," "Tech Stack," "GitHub Stats," and "Connect with Me" to make your profile stand out to recruiters.',
    },
    paaQuestions: [
      {
        question: 'How do I add a README to my GitHub profile?',
        answer:
          'Create a new repository with the same name as your username (e.g., username/username). Initialize it with a README.md file. Whatever you write there appears on your profile page.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'Make my GitHub profile look good',
        speakableAnswer:
          'Use our GitHub README Generator to add stats, skills, and bio sections to your profile easily.',
      },
    ],
    targetAudience: ['developers', 'students', 'open source contributors'],
    primaryTopic: 'GitHub Profile Optimization',
  },

  'regex-tester': {
    slug: 'regex-tester',
    primaryAnswer:
      'Regex Tester is a tool to debug and test Regular Expressions in real-time. Enter your regex pattern and test string to see matches, groups, and errors instantly.',
    tldr: 'Test and debug Regular Expressions with real-time highlighting.',
    keyTakeaways: [
      'Real-time matching',
      'Group capturing support',
      'Quick reference cheat sheet',
      'Common regex patterns included',
      'Works for JS/Python/Go regex',
    ],
    featuredSnippetContent: {
      paragraph:
        'To test a regex, input your pattern (e.g., ^[a-z]+$) and a test string. The matching parts will be highlighted. Check capture groups to verify data extraction.',
    },
    paaQuestions: [
      {
        question: 'How do I validate email using regex?',
        answer:
          'Use a pattern like ^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$. Our Regex Tester has this pattern pre-loaded for easy testing against sample emails.',
        lastUpdated: '2026-01-25',
      },
    ],
    voiceSearchAnswers: [
      {
        question: 'Test my regex',
        speakableAnswer:
          'Paste your pattern and test string into our Regex Tester to see if it matches correctly.',
      },
    ],
    targetAudience: ['developers', 'qa engineers', 'data analysts'],
    primaryTopic: 'Regular Expressions',
  },
};

// =============================================================================
// COMBINED EXPORTS
// =============================================================================

export const toolAEOConfigs: Record<string, ToolAEOConfig> = {
  ...calculatorsAEO,
  ...careerToolsAEO,
  ...productivityToolsAEO,
  ...devToolsAEO,
};

/**
 * Get AEO config for a tool
 */
export function getToolAEOConfig(slug: string): ToolAEOConfig | null {
  return toolAEOConfigs[slug] || null;
}

/**
 * Get all PAA questions for a tool
 */
export function getToolPAAQuestions(slug: string): ToolAEOBlock[] {
  return toolAEOConfigs[slug]?.paaQuestions || [];
}

/**
 * Generate complete AEO schema package for a tool
 */
export function generateCompleteToolAEOSchema(slug: string) {
  const config = toolAEOConfigs[slug];
  if (!config) return null;

  return {
    speakable: generateToolSpeakableSchema(slug),
    faq: generateToolAEOFAQSchema(slug),
    metaTags: getToolAEOMetaTags(slug),
  };
}
