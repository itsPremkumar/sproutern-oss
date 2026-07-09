// Static exam data for programmatic SEO — no database needed
// Each exam generates an indexable page at /exams/[slug]

export interface ExamData {
  slug: string;
  name: string;
  fullName: string;
  category: 'engineering' | 'management' | 'abroad' | 'government' | 'aptitude';
  description: string;
  eligibility: string;
  frequency: string;
  duration: string;
  totalMarks: number;
  sections: { name: string; topics: string[]; marks: number }[];
  preparationTimeline: { month: string; focus: string }[];
  topColleges: string[];
  cutoffs: { year: string; general: string; obc: string; sc: string }[];
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Very Hard';
  annualCandidates: string;
  officialWebsite: string;
  relatedTools: string[]; // links to existing Sproutern tools
  relatedGames: string[]; // links to existing Sproutern games
  tips: string[];
}

export const exams: ExamData[] = [
  {
    slug: 'gate',
    name: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    category: 'engineering',
    description:
      'GATE is a national-level exam for admission to postgraduate engineering programs (M.Tech, M.E., PhD) and PSU recruitment across India. Conducted jointly by IISc Bangalore and seven IITs.',
    eligibility: 'B.E./B.Tech graduates or final-year students',
    frequency: 'Once a year (February)',
    duration: '3 hours',
    totalMarks: 100,
    sections: [
      {
        name: 'General Aptitude',
        topics: ['Verbal Ability', 'Numerical Ability', 'Analytical Reasoning'],
        marks: 15,
      },
      {
        name: 'Engineering Mathematics',
        topics: [
          'Linear Algebra',
          'Calculus',
          'Probability',
          'Differential Equations',
        ],
        marks: 13,
      },
      {
        name: 'Core Subject',
        topics: [
          'Data Structures',
          'Algorithms',
          'OS',
          'DBMS',
          'Computer Networks',
          'TOC',
          'Digital Logic',
          'Computer Architecture',
        ],
        marks: 72,
      },
    ],
    preparationTimeline: [
      { month: 'Month 1-2', focus: 'Complete core subject fundamentals' },
      { month: 'Month 3-4', focus: 'Practice previous year papers' },
      { month: 'Month 5-6', focus: 'Mock tests and revision' },
      { month: 'Month 7-8', focus: 'Full-length mock tests, weak area focus' },
    ],
    topColleges: [
      'IIT Bombay',
      'IIT Delhi',
      'IIT Madras',
      'IIT Kanpur',
      'IISc Bangalore',
      'IIT Kharagpur',
      'IIT Roorkee',
    ],
    cutoffs: [
      { year: '2025', general: '29.5', obc: '26.2', sc: '19.8' },
      { year: '2024', general: '28.3', obc: '25.5', sc: '18.9' },
      { year: '2023', general: '25.0', obc: '22.5', sc: '16.7' },
    ],
    difficulty: 'Hard',
    annualCandidates: '900,000+',
    officialWebsite: 'https://gate2026.iisc.ac.in',
    relatedTools: [
      'aptitude-test',
      'study-planner',
      'exam-countdown',
      'flashcards',
    ],
    relatedGames: [
      'aptitude-drill',
      'math-speed-test',
      'number-series',
      'logic-puzzle',
    ],
    tips: [
      'Start with NCERT-level basics before diving into advanced topics',
      'Solve at least 10 years of previous GATE papers',
      'Focus on Engineering Mathematics — it alone can boost your score by 13 marks',
      'Join online test series for realistic mock exam experience',
      'Time management is key: practice completing papers in 2.5 hours',
    ],
  },
  {
    slug: 'cat',
    name: 'CAT',
    fullName: 'Common Admission Test',
    category: 'management',
    description:
      "CAT is India's premier MBA entrance exam for admission to IIMs and top B-schools. Tests quantitative ability, verbal reasoning, and data interpretation skills.",
    eligibility: "Bachelor's degree with 50% aggregate",
    frequency: 'Once a year (November)',
    duration: '2 hours',
    totalMarks: 198,
    sections: [
      {
        name: 'Verbal Ability & Reading Comprehension',
        topics: [
          'Reading Comprehension',
          'Para Jumbles',
          'Sentence Completion',
          'Critical Reasoning',
        ],
        marks: 66,
      },
      {
        name: 'Data Interpretation & Logical Reasoning',
        topics: ['Tables', 'Graphs', 'Charts', 'Puzzles', 'Arrangements'],
        marks: 66,
      },
      {
        name: 'Quantitative Ability',
        topics: [
          'Arithmetic',
          'Algebra',
          'Geometry',
          'Number Systems',
          'Modern Math',
        ],
        marks: 66,
      },
    ],
    preparationTimeline: [
      {
        month: 'Month 1-2',
        focus: 'Build concept foundation across all sections',
      },
      { month: 'Month 3-4', focus: 'Section-wise practice and speed building' },
      {
        month: 'Month 5-6',
        focus: 'Mock tests — aim for 20+ full-length mocks',
      },
      {
        month: 'Month 7',
        focus: 'Revision, time-management drills, confidence building',
      },
    ],
    topColleges: [
      'IIM Ahmedabad',
      'IIM Bangalore',
      'IIM Calcutta',
      'IIM Lucknow',
      'IIM Kozhikode',
      'FMS Delhi',
      'XLRI Jamshedpur',
    ],
    cutoffs: [
      { year: '2025', general: '99.0', obc: '95.0', sc: '85.0' },
      { year: '2024', general: '98.5', obc: '94.0', sc: '84.0' },
      { year: '2023', general: '98.0', obc: '93.0', sc: '83.0' },
    ],
    difficulty: 'Very Hard',
    annualCandidates: '2,50,000+',
    officialWebsite: 'https://iimcat.ac.in',
    relatedTools: ['aptitude-test', 'percentage-calculator', 'study-planner'],
    relatedGames: [
      'aptitude-drill',
      'math-speed-test',
      'data-interpretation',
      'percentage-puzzle',
      'reasoning-master',
    ],
    tips: [
      'Reading speed is critical — aim for 300+ words per minute',
      'Master the art of skipping questions: not every question needs answering',
      'Quantitative Ability is the differentiator at 99+ percentile',
      'Take at least 25 full-length mock tests before the actual exam',
      'Analyze each mock test for 2 hours — analysis matters more than quantity',
    ],
  },
  {
    slug: 'amcat',
    name: 'AMCAT',
    fullName: 'Aspiring Minds Computer Adaptive Test',
    category: 'aptitude',
    description:
      "AMCAT is India's largest employability test, used by 500+ companies for hiring freshers. A good AMCAT score opens doors to off-campus placement opportunities across IT, engineering, and business roles.",
    eligibility: 'Any graduate or final-year student',
    frequency: 'Multiple times a year (monthly)',
    duration: '2-3 hours',
    totalMarks: 900,
    sections: [
      {
        name: 'Quantitative Ability',
        topics: ['Arithmetic', 'Algebra', 'Geometry', 'Data Interpretation'],
        marks: 300,
      },
      {
        name: 'Logical Reasoning',
        topics: ['Deductive', 'Inductive', 'Abductive Reasoning', 'Puzzles'],
        marks: 300,
      },
      {
        name: 'English Comprehension',
        topics: ['Grammar', 'Vocabulary', 'Reading Comprehension'],
        marks: 300,
      },
    ],
    preparationTimeline: [
      {
        month: 'Week 1-2',
        focus: 'Understand test pattern and take diagnostic test',
      },
      {
        month: 'Week 3-4',
        focus: 'Practice quantitative and logical reasoning',
      },
      { month: 'Week 5-6', focus: 'Focus on English and module-specific prep' },
      { month: 'Week 7-8', focus: 'Mock tests and final revision' },
    ],
    topColleges: ['Used by companies, not colleges'],
    cutoffs: [
      { year: '2025', general: '500+', obc: 'N/A', sc: 'N/A' },
      { year: '2024', general: '475+', obc: 'N/A', sc: 'N/A' },
    ],
    difficulty: 'Moderate',
    annualCandidates: '3,000,000+',
    officialWebsite: 'https://www.myamcat.com',
    relatedTools: [
      'aptitude-test',
      'placement-readiness',
      'skills-assessment',
      'resume-builder',
    ],
    relatedGames: [
      'aptitude-drill',
      'grammar-fixer',
      'reasoning-master',
      'spelling-bee',
    ],
    tips: [
      'Focus on scoring 500+ in each module for top companies',
      'Practice adaptive test format — questions get harder as you answer correctly',
      'Strong English skills give an edge since most candidates neglect this section',
      'Use the AMCAT practice portal for realistic preparation',
      'Your AMCAT score is valid for 3 years — take it early in college',
    ],
  },
  {
    slug: 'gre',
    name: 'GRE',
    fullName: 'Graduate Record Examination',
    category: 'abroad',
    description:
      "The GRE is the world's most widely accepted graduate school admission test, required by thousands of universities in the US, UK, Canada, Australia, and Europe for MS, MBA, and PhD programs.",
    eligibility: "Any bachelor's degree holder (no age limit)",
    frequency: 'Year-round (computer-based)',
    duration: '1 hour 58 minutes',
    totalMarks: 340,
    sections: [
      {
        name: 'Verbal Reasoning',
        topics: [
          'Reading Comprehension',
          'Text Completion',
          'Sentence Equivalence',
        ],
        marks: 170,
      },
      {
        name: 'Quantitative Reasoning',
        topics: ['Arithmetic', 'Algebra', 'Geometry', 'Data Analysis'],
        marks: 170,
      },
    ],
    preparationTimeline: [
      {
        month: 'Month 1',
        focus: 'Diagnostic test + vocabulary building (learn 500 words)',
      },
      { month: 'Month 2', focus: 'Quant fundamentals + RC strategies' },
      {
        month: 'Month 3',
        focus: 'Practice tests and ETS Official Guide completion',
      },
      {
        month: 'Month 4',
        focus: 'Full-length PowerPrep tests + weak area review',
      },
    ],
    topColleges: [
      'MIT',
      'Stanford',
      'Caltech',
      'UC Berkeley',
      'Carnegie Mellon',
      'Georgia Tech',
      'University of Michigan',
    ],
    cutoffs: [
      { year: '2025', general: '320+ (top 20 US)', obc: 'N/A', sc: 'N/A' },
      { year: '2024', general: '315+ (top 50 US)', obc: 'N/A', sc: 'N/A' },
    ],
    difficulty: 'Hard',
    annualCandidates: '700,000+',
    officialWebsite: 'https://www.ets.org/gre',
    relatedTools: [
      'study-planner',
      'flashcards',
      'word-counter',
      'exam-countdown',
    ],
    relatedGames: [
      'synonym-match',
      'antonym-challenge',
      'math-speed-test',
      'data-interpretation',
    ],
    tips: [
      "Vocabulary is king for Verbal — learn 1000+ words from Magoosh/Barron's lists",
      "The Quant section is easier than CAT but tricky — don't underestimate it",
      'Take all free ETS PowerPrep tests (most accurate score predictor)',
      'Score of 320+ with 165+ Quant makes you competitive for top US MS programs',
      'The at-home test option is equally valid and more convenient',
    ],
  },
  {
    slug: 'ielts',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    category: 'abroad',
    description:
      "IELTS is the world's most popular English language proficiency test, accepted by 11,000+ organizations across 140+ countries for study, work, and immigration purposes.",
    eligibility: 'Anyone aged 16+ (no upper limit)',
    frequency: 'Multiple times per month',
    duration: '2 hours 45 minutes',
    totalMarks: 9,
    sections: [
      {
        name: 'Listening',
        topics: [
          'Conversations',
          'Monologues',
          'Academic Lectures',
          'Note Completion',
        ],
        marks: 9,
      },
      {
        name: 'Reading',
        topics: [
          'Academic Passages',
          'True/False/Not Given',
          'Matching Headings',
          'Summary Completion',
        ],
        marks: 9,
      },
      {
        name: 'Writing',
        topics: ['Task 1 (Graph/Diagram)', 'Task 2 (Essay Writing)'],
        marks: 9,
      },
      {
        name: 'Speaking',
        topics: ['Introduction', 'Long Turn (Cue Card)', 'Discussion'],
        marks: 9,
      },
    ],
    preparationTimeline: [
      {
        month: 'Week 1-2',
        focus: 'Understand test format and take diagnostic',
      },
      { month: 'Week 3-4', focus: 'Reading and Listening practice daily' },
      {
        month: 'Week 5-6',
        focus: 'Writing practice — 1 essay + 1 Task 1 daily',
      },
      { month: 'Week 7-8', focus: 'Speaking practice + full mock tests' },
    ],
    topColleges: [
      'Oxford',
      'Cambridge',
      'University of Toronto',
      'University of Melbourne',
      'UCL London',
      'McGill University',
    ],
    cutoffs: [
      {
        year: '2025',
        general: '7.0+ (top UK/Australia)',
        obc: 'N/A',
        sc: 'N/A',
      },
      {
        year: '2024',
        general: '6.5+ (most universities)',
        obc: 'N/A',
        sc: 'N/A',
      },
    ],
    difficulty: 'Moderate',
    annualCandidates: '3,500,000+',
    officialWebsite: 'https://www.ielts.org',
    relatedTools: ['word-counter', 'study-planner', 'exam-countdown'],
    relatedGames: [
      'grammar-fixer',
      'spelling-bee',
      'synonym-match',
      'typing-speed',
    ],
    tips: [
      "Reading: practice skimming and scanning — you won't have time to read every word",
      'Listening: practice with British, Australian, and American accents',
      'Writing: learn the IELTS essay structure (Introduction, Body 1, Body 2, Conclusion)',
      'Speaking: record yourself and review — most improvement comes from self-awareness',
      'A score of 7.0+ in each band is the gold standard for top universities',
    ],
  },
  {
    slug: 'toefl',
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language',
    category: 'abroad',
    description:
      "TOEFL iBT is accepted by 12,000+ universities in 160+ countries. It's the preferred English proficiency test for US and Canadian universities.",
    eligibility: 'Anyone (typically 15+ years)',
    frequency: 'Multiple times per month',
    duration: '2 hours',
    totalMarks: 120,
    sections: [
      {
        name: 'Reading',
        topics: ['Academic Passages', 'Inference', 'Vocabulary in Context'],
        marks: 30,
      },
      {
        name: 'Listening',
        topics: ['Lectures', 'Conversations', 'Note-taking'],
        marks: 30,
      },
      {
        name: 'Speaking',
        topics: ['Independent Tasks', 'Integrated Tasks'],
        marks: 30,
      },
      {
        name: 'Writing',
        topics: ['Integrated Essay', 'Academic Discussion'],
        marks: 30,
      },
    ],
    preparationTimeline: [
      { month: 'Week 1-2', focus: 'Diagnostic test + understand format' },
      { month: 'Week 3-4', focus: 'Reading and Listening strategies' },
      { month: 'Week 5-6', focus: 'Speaking and Writing practice' },
      { month: 'Week 7-8', focus: 'Full mock tests + review weak areas' },
    ],
    topColleges: [
      'Harvard',
      'MIT',
      'Stanford',
      'Yale',
      'Columbia',
      'University of Chicago',
    ],
    cutoffs: [
      { year: '2025', general: '100+ (Ivy League)', obc: 'N/A', sc: 'N/A' },
      { year: '2024', general: '90+ (top 50 US)', obc: 'N/A', sc: 'N/A' },
    ],
    difficulty: 'Moderate',
    annualCandidates: '2,000,000+',
    officialWebsite: 'https://www.ets.org/toefl',
    relatedTools: ['word-counter', 'study-planner', 'typing-test'],
    relatedGames: ['grammar-fixer', 'typing-speed', 'synonym-match'],
    tips: [
      'TOEFL is more academic than IELTS — prepare with university lecture-style content',
      'Note-taking is crucial for Listening and Speaking sections',
      'The new shorter format (2 hours) means every question counts more',
      "Use ETS's free practice tests for the most accurate preparation",
      'Score 100+ to be competitive for top 50 US universities',
    ],
  },
  {
    slug: 'gmat',
    name: 'GMAT',
    fullName: 'Graduate Management Admission Test',
    category: 'management',
    description:
      'GMAT Focus Edition is the gold standard for MBA admissions worldwide. Accepted by 2,400+ business schools including Harvard, Wharton, INSEAD, and London Business School.',
    eligibility: "Bachelor's degree (recommended 2+ years work experience)",
    frequency: 'Year-round (computer-based)',
    duration: '2 hours 15 minutes',
    totalMarks: 805,
    sections: [
      {
        name: 'Quantitative Reasoning',
        topics: [
          'Problem Solving',
          'Data Sufficiency',
          'Algebra',
          'Arithmetic',
        ],
        marks: 205,
      },
      {
        name: 'Verbal Reasoning',
        topics: [
          'Reading Comprehension',
          'Critical Reasoning',
          'Sentence Correction',
        ],
        marks: 205,
      },
      {
        name: 'Data Insights',
        topics: [
          'Data Sufficiency',
          'Multi-Source Reasoning',
          'Graphics Interpretation',
          'Table Analysis',
        ],
        marks: 205,
      },
    ],
    preparationTimeline: [
      {
        month: 'Month 1',
        focus: 'Diagnostic + concept building (Quant & Verbal)',
      },
      { month: 'Month 2', focus: 'Section-wise practice with Official Guide' },
      { month: 'Month 3', focus: 'Mock tests + Data Insights preparation' },
      {
        month: 'Month 4',
        focus: 'Review, retake mocks, build test-day strategy',
      },
    ],
    topColleges: [
      'Harvard Business School',
      'Wharton (UPenn)',
      'Stanford GSB',
      'INSEAD',
      'London Business School',
      'MIT Sloan',
    ],
    cutoffs: [
      { year: '2025', general: '700+ (M7 schools)', obc: 'N/A', sc: 'N/A' },
      { year: '2024', general: '680+ (top 20 global)', obc: 'N/A', sc: 'N/A' },
    ],
    difficulty: 'Hard',
    annualCandidates: '200,000+',
    officialWebsite: 'https://www.mba.com/gmat',
    relatedTools: ['aptitude-test', 'percentage-calculator', 'study-planner'],
    relatedGames: [
      'data-interpretation',
      'critical-thinking-quiz',
      'reasoning-master',
      'math-speed-test',
    ],
    tips: [
      'The new GMAT Focus Edition has no essay section — pure analytical skills',
      'Data Insights is the newest section — practice multi-source reasoning',
      'Score 700+ by mastering Critical Reasoning and Data Sufficiency',
      'You can choose your section order — lead with your strongest section',
      'Most test-takers need 3-4 months of dedicated preparation',
    ],
  },
  {
    slug: 'jee-main',
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination Main',
    category: 'engineering',
    description:
      "JEE Main is India's largest engineering entrance exam, the gateway to NITs, IIITs, and other centrally funded institutions. Top scorers qualify for JEE Advanced (IIT admission).",
    eligibility: 'Class 12 pass/appearing with PCM',
    frequency: 'Twice a year (January & April)',
    duration: '3 hours',
    totalMarks: 300,
    sections: [
      {
        name: 'Physics',
        topics: [
          'Mechanics',
          'Electrodynamics',
          'Optics',
          'Modern Physics',
          'Thermodynamics',
        ],
        marks: 100,
      },
      {
        name: 'Chemistry',
        topics: [
          'Physical Chemistry',
          'Organic Chemistry',
          'Inorganic Chemistry',
        ],
        marks: 100,
      },
      {
        name: 'Mathematics',
        topics: [
          'Calculus',
          'Algebra',
          'Coordinate Geometry',
          'Trigonometry',
          'Statistics',
        ],
        marks: 100,
      },
    ],
    preparationTimeline: [
      { month: 'Class 11', focus: 'Build strong fundamentals in PCM' },
      { month: '6 months before', focus: 'Complete NCERT + reference books' },
      { month: '3 months before', focus: 'Previous year papers + mock tests' },
      {
        month: 'Final month',
        focus: 'Revision + formula sheets + test strategy',
      },
    ],
    topColleges: [
      'NIT Trichy',
      'NIT Warangal',
      'NIT Surathkal',
      'NIT Rourkela',
      'IIIT Hyderabad',
      'NIT Calicut',
    ],
    cutoffs: [
      { year: '2025', general: '95+', obc: '75+', sc: '50+' },
      { year: '2024', general: '93+', obc: '73+', sc: '48+' },
    ],
    difficulty: 'Hard',
    annualCandidates: '12,00,000+',
    officialWebsite: 'https://jeemain.nta.ac.in',
    relatedTools: [
      'aptitude-test',
      'percentage-calculator',
      'marks-calculator',
      'exam-countdown',
    ],
    relatedGames: [
      'math-speed-test',
      'number-series',
      'derivation-race',
      'quick-recall',
    ],
    tips: [
      'NCERT is your bible — 30% questions come directly from NCERT',
      'Physics: focus on Mechanics and Electrodynamics (highest weightage)',
      'Chemistry: Inorganic is pure memory — revise it frequently',
      'Take both attempts (Jan & April) — best score is considered',
      "Don't neglect Numerical Value questions — they have no negative marking",
    ],
  },
  {
    slug: 'neet',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test',
    category: 'engineering',
    description:
      "NEET-UG is India's single national-level medical entrance exam for MBBS, BDS, AYUSH, and nursing programs across all government and private medical colleges.",
    eligibility: 'Class 12 pass with PCB (50% aggregate)',
    frequency: 'Once a year (May)',
    duration: '3 hours 20 minutes',
    totalMarks: 720,
    sections: [
      {
        name: 'Physics',
        topics: ['Mechanics', 'Electricity', 'Optics', 'Modern Physics'],
        marks: 180,
      },
      {
        name: 'Chemistry',
        topics: ['Physical', 'Organic', 'Inorganic Chemistry'],
        marks: 180,
      },
      {
        name: 'Biology (Botany)',
        topics: ['Cell Biology', 'Genetics', 'Ecology', 'Plant Physiology'],
        marks: 180,
      },
      {
        name: 'Biology (Zoology)',
        topics: [
          'Human Physiology',
          'Evolution',
          'Biotechnology',
          'Animal Kingdom',
        ],
        marks: 180,
      },
    ],
    preparationTimeline: [
      {
        month: 'Class 11-12',
        focus: 'Master NCERT thoroughly — it covers 95% of NEET',
      },
      {
        month: '6 months before',
        focus: 'Complete NCERT + practice MCQs daily',
      },
      {
        month: '3 months before',
        focus: 'Previous 10 years papers + mock tests',
      },
      {
        month: 'Final month',
        focus: 'Biology-focused revision + test strategy',
      },
    ],
    topColleges: [
      'AIIMS Delhi',
      'JIPMER',
      'CMC Vellore',
      'MAMC Delhi',
      'Grant Medical College Mumbai',
      'KGMU Lucknow',
    ],
    cutoffs: [
      { year: '2025', general: '720-137', obc: '136-107', sc: '106-107' },
      { year: '2024', general: '720-137', obc: '136-107', sc: '106-107' },
    ],
    difficulty: 'Hard',
    annualCandidates: '20,00,000+',
    officialWebsite: 'https://neet.nta.nic.in',
    relatedTools: [
      'aptitude-test',
      'marks-calculator',
      'study-planner',
      'exam-countdown',
    ],
    relatedGames: ['biology-pathway', 'quick-recall', 'concentration-test'],
    tips: [
      "Biology carries 360/720 marks — it's the most scoring section",
      'NCERT is non-negotiable: read every line, diagram, and flow chart',
      'Physics is the toughest section for most NEET aspirants — start early',
      'Solve 50 MCQs daily from Day 1 of preparation',
      'AIIMS cutoff is typically 650+ — set your target accordingly',
    ],
  },
  {
    slug: 'upsc',
    name: 'UPSC CSE',
    fullName: 'Union Public Service Commission Civil Services Examination',
    category: 'government',
    description:
      "UPSC CSE is India's most prestigious and competitive exam, selecting officers for IAS, IPS, IFS, and 20+ other All India Services. It has three stages: Prelims, Mains, and Interview.",
    eligibility: "Bachelor's degree in any discipline",
    frequency: 'Once a year (Prelims in June)',
    duration: 'Prelims: 4 hours | Mains: 25 hours total',
    totalMarks: 2025,
    sections: [
      {
        name: 'Prelims GS-I',
        topics: [
          'History',
          'Geography',
          'Polity',
          'Economy',
          'Science',
          'Current Affairs',
        ],
        marks: 200,
      },
      {
        name: 'Prelims CSAT',
        topics: [
          'Comprehension',
          'Logical Reasoning',
          'Decision Making',
          'Data Interpretation',
        ],
        marks: 200,
      },
      {
        name: 'Mains',
        topics: ['Essay', 'GS Papers I-IV', 'Optional Subject', 'Ethics'],
        marks: 1750,
      },
    ],
    preparationTimeline: [
      {
        month: 'Month 1-4',
        focus: 'NCERT foundation (Class 6-12 for all subjects)',
      },
      {
        month: 'Month 5-8',
        focus: 'Standard reference books + newspaper reading',
      },
      {
        month: 'Month 9-12',
        focus: 'Previous year papers + Prelims test series',
      },
      { month: 'Year 2', focus: 'Mains answer writing + mock interviews' },
    ],
    topColleges: ['N/A — produces IAS, IPS, IFS officers'],
    cutoffs: [
      { year: '2025', general: '90+/200', obc: '85+/200', sc: '75+/200' },
      { year: '2024', general: '88+/200', obc: '83+/200', sc: '73+/200' },
    ],
    difficulty: 'Very Hard',
    annualCandidates: '13,00,000+',
    officialWebsite: 'https://upsc.gov.in',
    relatedTools: [
      'study-planner',
      'exam-countdown',
      'flashcards',
      'pomodoro-timer',
    ],
    relatedGames: [
      'critical-thinking-quiz',
      'data-interpretation',
      'reasoning-master',
      'trivia-quiz',
    ],
    tips: [
      'Newspaper reading is non-negotiable — read The Hindu/Indian Express daily',
      'NCERT books (Class 6-12) form the base of your entire preparation',
      'Choose your Optional Subject wisely — it can make or break your rank',
      'Answer writing practice for Mains should start at least 6 months before',
      'Current Affairs contribute to 40-50% of Prelims questions',
    ],
  },
  {
    slug: 'elitmus',
    name: 'eLitmus',
    fullName: 'eLitmus pH Test',
    category: 'aptitude',
    description:
      'eLitmus pH Test is a national-level adaptive test used by 500+ companies across India for fresher hiring. Your pH score opens doors to multiple job interviews without separate company tests.',
    eligibility: 'Any graduate or final-year student',
    frequency: 'Monthly (multiple cities)',
    duration: '2 hours',
    totalMarks: 800,
    sections: [
      {
        name: 'Quantitative Aptitude',
        topics: ['Number System', 'Probability', 'P&C', 'Algebra', 'Geometry'],
        marks: 200,
      },
      {
        name: 'Logical Reasoning',
        topics: [
          'Puzzles',
          'Coding-Decoding',
          'Blood Relations',
          'Arrangements',
        ],
        marks: 200,
      },
      {
        name: 'Verbal Ability',
        topics: ['Grammar', 'RC', 'Vocabulary', 'Para Jumbles'],
        marks: 200,
      },
    ],
    preparationTimeline: [
      {
        month: 'Week 1',
        focus: 'Understand pH scoring system and test pattern',
      },
      { month: 'Week 2-3', focus: 'Practice Quant and Logical Reasoning' },
      { month: 'Week 4', focus: 'Mock tests and improve weak areas' },
    ],
    topColleges: ['Used by companies, not colleges'],
    cutoffs: [
      {
        year: '2025',
        general: '80+ percentile (top companies)',
        obc: 'N/A',
        sc: 'N/A',
      },
    ],
    difficulty: 'Moderate',
    annualCandidates: '1,000,000+',
    officialWebsite: 'https://www.elitmus.com',
    relatedTools: ['aptitude-test', 'placement-readiness', 'skills-assessment'],
    relatedGames: ['aptitude-drill', 'reasoning-master', 'number-series'],
    tips: [
      'pH scoring is unique — penalties are severe for wrong answers',
      'Focus on accuracy over speed: 10 correct answers > 20 attempted',
      'Quantitative section has the highest weightage',
      'Your score is valid for 2 years — take it early in final year',
      'Many mass recruiters like Accenture, TCS use eLitmus for screening',
    ],
  },
  {
    slug: 'sat',
    name: 'SAT',
    fullName: 'Scholastic Assessment Test',
    category: 'abroad',
    description:
      'The Digital SAT is a standardized test widely used for undergraduate admissions in the US, Canada, and other countries. The new digital format is shorter and adaptive.',
    eligibility: 'High school students (typically 16-19 years)',
    frequency: '7 times per year',
    duration: '2 hours 14 minutes',
    totalMarks: 1600,
    sections: [
      {
        name: 'Reading and Writing',
        topics: [
          'Information & Ideas',
          'Craft & Structure',
          'Expression of Ideas',
          'Standard English Conventions',
        ],
        marks: 800,
      },
      {
        name: 'Math',
        topics: [
          'Algebra',
          'Problem Solving',
          'Advanced Math',
          'Geometry & Trigonometry',
        ],
        marks: 800,
      },
    ],
    preparationTimeline: [
      { month: 'Month 1', focus: 'Diagnostic test + Khan Academy preparation' },
      {
        month: 'Month 2',
        focus: 'Section-wise practice + vocabulary building',
      },
      { month: 'Month 3', focus: 'Full-length practice tests + review' },
    ],
    topColleges: [
      'Ivy League (Harvard, Yale, Princeton)',
      'MIT',
      'Stanford',
      'Caltech',
      'Duke University',
    ],
    cutoffs: [
      { year: '2025', general: '1500+ (Ivy League)', obc: 'N/A', sc: 'N/A' },
      { year: '2024', general: '1400+ (top 50 US)', obc: 'N/A', sc: 'N/A' },
    ],
    difficulty: 'Moderate',
    annualCandidates: '2,200,000+',
    officialWebsite: 'https://www.collegeboard.org/sat',
    relatedTools: ['aptitude-test', 'study-planner', 'flashcards'],
    relatedGames: ['math-speed-test', 'grammar-fixer', 'synonym-match'],
    tips: [
      'Khan Academy offers free, official SAT practice — use it',
      'The digital SAT is adaptive: harder questions mean higher potential score',
      'Math section allows calculator throughout — bring a good one',
      'Reading & Writing passages are shorter in the digital format',
      'Score 1500+ to be competitive for Ivy League applications',
    ],
  },
  {
    slug: 'pte',
    name: 'PTE Academic',
    fullName: 'Pearson Test of English Academic',
    category: 'abroad',
    description:
      'PTE Academic is a computer-based English proficiency test accepted for study, work, and immigration to Australia, New Zealand, UK, Canada, and the US. Results typically available within 2 days.',
    eligibility: 'Anyone aged 16+',
    frequency: 'Year-round at test centers',
    duration: '2 hours',
    totalMarks: 90,
    sections: [
      {
        name: 'Speaking & Writing',
        topics: [
          'Read Aloud',
          'Repeat Sentence',
          'Describe Image',
          'Essay',
          'Summarize Written Text',
        ],
        marks: 90,
      },
      {
        name: 'Reading',
        topics: ['Fill in Blanks', 'Multiple Choice', 'Reorder Paragraphs'],
        marks: 90,
      },
      {
        name: 'Listening',
        topics: [
          'Summarize Spoken Text',
          'Fill in Blanks',
          'Highlight Correct Summary',
          'Dictation',
        ],
        marks: 90,
      },
    ],
    preparationTimeline: [
      { month: 'Week 1', focus: 'Understand PTE format + take practice test' },
      { month: 'Week 2-3', focus: 'Speaking and Writing templates' },
      { month: 'Week 4-5', focus: 'Reading and Listening strategies' },
      { month: 'Week 6', focus: 'Full mock tests + final review' },
    ],
    topColleges: [
      'Australian universities (ANU, University of Melbourne)',
      'UK universities',
      'New Zealand universities',
    ],
    cutoffs: [
      {
        year: '2025',
        general: '65+ (most universities)',
        obc: 'N/A',
        sc: 'N/A',
      },
      { year: '2024', general: '79+ (Australia PR)', obc: 'N/A', sc: 'N/A' },
    ],
    difficulty: 'Moderate',
    annualCandidates: '1,500,000+',
    officialWebsite: 'https://www.pearsonpte.com',
    relatedTools: ['word-counter', 'typing-test', 'study-planner'],
    relatedGames: ['typing-speed', 'grammar-fixer', 'spelling-bee'],
    tips: [
      'PTE is computer-scored — pronunciation clarity matters more than accent',
      'Speaking templates can boost your score dramatically',
      'Read Aloud affects both Reading and Speaking scores — practice daily',
      'Dictation in Listening is the highest-scoring item — train your ears',
      'PTE is faster results (2 days) vs IELTS (13 days) — useful for tight deadlines',
    ],
  },
  {
    slug: 'cocubes',
    name: 'CoCubes',
    fullName: 'CoCubes Pre-Assess & Hire',
    category: 'aptitude',
    description:
      'CoCubes (now part of Aon) is a major employability assessment platform in India, used by 1000+ companies for campus and off-campus hiring. Similar to AMCAT but focuses more on coding skills.',
    eligibility: 'Final-year students and freshers',
    frequency: 'Multiple times a year',
    duration: '1.5-2 hours',
    totalMarks: 500,
    sections: [
      {
        name: 'Quantitative Aptitude',
        topics: ['Arithmetic', 'Number System', 'Algebra', 'Geometry'],
        marks: 150,
      },
      {
        name: 'Logical Reasoning',
        topics: [
          'Coding-Decoding',
          'Puzzles',
          'Syllogisms',
          'Data Interpretation',
        ],
        marks: 150,
      },
      {
        name: 'English',
        topics: ['Grammar', 'Comprehension', 'Vocabulary'],
        marks: 100,
      },
      {
        name: 'Domain (Optional)',
        topics: ['Computer Science', 'Electronics', 'Mechanical'],
        marks: 100,
      },
    ],
    preparationTimeline: [
      {
        month: 'Week 1-2',
        focus: 'Practice aptitude and reasoning from IndiaBIX/PrepInsta',
      },
      {
        month: 'Week 3',
        focus: 'Focus on coding questions (if applying to IT)',
      },
      { month: 'Week 4', focus: 'Take CoCubes mock tests' },
    ],
    topColleges: ['Used by companies, not colleges'],
    cutoffs: [
      {
        year: '2025',
        general: '70+ percentile (mass recruiters)',
        obc: 'N/A',
        sc: 'N/A',
      },
    ],
    difficulty: 'Easy',
    annualCandidates: '2,000,000+',
    officialWebsite: 'https://www.cocubes.com',
    relatedTools: ['aptitude-test', 'placement-readiness', 'technical-quiz'],
    relatedGames: [
      'aptitude-drill',
      'coding',
      'predict-output',
      'debugging-challenge',
    ],
    tips: [
      'CoCubes questions are often easier than AMCAT — focus on accuracy',
      'Coding section is critical for IT company shortlisting',
      'Practice basic data structures: arrays, strings, sorting',
      'Score in CoCubes is valid for that placement season only',
      'Many Tier-2/3 college placements depend heavily on CoCubes scores',
    ],
  },
];

// Helper to get exam by slug
export function getExamBySlug(slug: string): ExamData | undefined {
  return exams.find((e) => e.slug === slug);
}

// Get all exam slugs for generateStaticParams
export function getExamSlugs(): string[] {
  return exams.map((e) => e.slug);
}

// Group exams by category
export function getExamsByCategory(): Record<string, ExamData[]> {
  return exams.reduce(
    (acc, exam) => {
      if (!acc[exam.category]) acc[exam.category] = [];
      acc[exam.category].push(exam);
      return acc;
    },
    {} as Record<string, ExamData[]>,
  );
}

export const categoryLabels: Record<string, string> = {
  engineering: '🎓 Engineering Entrance',
  management: '📊 Management (MBA)',
  abroad: '🌍 Study Abroad',
  government: '🏛️ Government Services',
  aptitude: '💼 Employability & Aptitude',
};
