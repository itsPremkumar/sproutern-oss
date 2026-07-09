import {
  Download,
  FileText,
  Table,
  FileSpreadsheet,
  CheckCircle,
  Lightbulb,
  Briefcase,
  GraduationCap,
  DollarSign,
  Plane,
  Calculator,
  Code,
} from 'lucide-react';

export interface DownloadTemplate {
  name: string;
  slug: string;
  desc: string;
  format: string;
  category: string;
  icon: any;
  longDescription: string;
  features: string[];
  whyUse: string;
  howToUse: {
    title: string;
    steps: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  downloadUrl?: string;
}

export const templates: DownloadTemplate[] = [
  {
    name: 'Scholarship Tracker',
    slug: 'scholarship-tracker',
    desc: 'Track scholarship applications, deadlines, and status in one place.',
    format: 'Google Sheets',
    category: 'Scholarships',
    icon: Table,
    downloadUrl: 'https://docs.google.com/spreadsheets/create', // Placeholder for actual template link
    longDescription:
      'Managing multiple scholarship applications can be overwhelming. Missing a deadline means missing out on free money for your education. Our comprehensive Scholarship Tracker Google Sheet helps you organize every aspect of your scholarship search. Track application status, deadlines, requirements, and award amounts in a single, easy-to-read dashboard.',
    features: [
      'Status tracking dashboard (Applied, In Progress, Won, Lost)',
      'Deadline countdowns and automatic alerts',
      'Essay prompt organizer to reuse content',
      'Document checklist (Transcripts, LoR, CV)',
      'Total scholarship value calculator',
    ],
    whyUse:
      'Students who organize their search apply to 3x more scholarships on average. This tracker ensures you never miss a deadline and helps you prioritize high-value opportunities.',
    howToUse: [
      {
        title: 'Getting Started',
        steps: [
          'Click the download link to open the Google Sheet',
          'Go to File > Make a Copy to save it to your Drive',
          "Start filling in the 'Master List' tab with scholarships you find",
        ],
      },
      {
        title: 'Tracking Progress',
        steps: [
          "Update the 'Status' column as you complete tasks",
          "Use the 'Essay' tab to catalog your written responses for reuse",
          'Check the dashboard weekly to see upcoming deadlines',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this tracker free?',
        answer:
          'Yes, this template is 100% free for students. You just need a Google account to use it.',
      },
      {
        question: 'Can I use this for college applications too?',
        answer:
          'Absolutely! The structure works perfectly for tracking college admission applications as well.',
      },
    ],
  },
  {
    name: 'Job Application Tracker',
    slug: 'job-tracker',
    desc: 'Track job applications, interviews, and follow-ups efficiently.',
    format: 'Google Sheets',
    category: 'Jobs',
    icon: Briefcase,
    longDescription:
      'The job hunt is a numbers game. Keeping track of 50+ applications, different versions of your resume, and interview schedules in your head is impossible. This Job Application Tracker is designed to be your personal CRM for your career. It helps you monitor every interaction with recruiters, track which resume version you sent, and reminds you when to follow up.',
    features: [
      'Pipeline view of all your applications',
      'Automated follow-up reminders',
      'Interview preparation checklist for each stage',
      'Salary negotiation notes section',
      'Networking contact log',
    ],
    whyUse:
      'Sending a timely follow-up email can increase your hiring chances by 20%. This tracker highlights exactly when you should circle back with recruiters.',
    howToUse: [
      {
        title: 'Setup',
        steps: [
          'Copy the sheet to your Google Drive',
          'Customize the dropdown menus in the "Settings" tab if needed',
        ],
      },
      {
        title: 'Daily Workflow',
        steps: [
          'Log every new application immediately after applying',
          'Paste the link to the job description (they often expire!)',
          'Update status after receiving emails or calls',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this work for internships?',
        answer:
          'Yes, it is perfect for tracking internship applications, listing start/end dates, and stipend details.',
      },
    ],
  },
  {
    name: 'Weekly Study Planner',
    slug: 'study-planner',
    desc: 'Plan your week with subject-wise study blocks and goals.',
    format: 'PDF',
    category: 'Productivity',
    icon: FileText,
    longDescription:
      'Stop cramming the night before exams. The Weekly Study Planner is a structured template based on active recall and spaced repetition principles. It helps you allocate specific time blocks for each subject, ensuring balanced preparation. Unlike generic calendars, this is designed specifically for students juggling classes, assignments, and self-study.',
    features: [
      'Hourly time-blocking grid (6 AM - 11 PM)',
      'Top 3 priorities section for high-impact tasks',
      'Subject-wise goal setting area',
      'Retrospective section to review what went well',
      'Printable A4 format',
    ],
    whyUse:
      'Time-blocking reduces procrastination. By assigning a specific task to a specific time, you reduce decision fatigue and start studying faster.',
    howToUse: [
      {
        title: 'Planning Your Week',
        steps: [
          'Print 4-5 copies at the start of the month',
          'Fill in your fixed schedule first (classes, labs)',
          'Block out study sessions for difficult subjects during your peak energy hours',
        ],
      },
      {
        title: 'Review',
        steps: [
          'At the end of the week, check off completed goals',
          'Move unfinished tasks to next week’s priority list',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this better than a digital calendar?',
        answer:
          'For many students, writing things down improves memory and commitment. Plus, a paper planner on your desk is a constant visual reminder.',
      },
    ],
  },
  {
    name: 'College Comparison Worksheet',
    slug: 'college-comparison',
    desc: 'Compare colleges on fees, placements, location, and more.',
    format: 'PDF',
    category: 'College',
    icon: GraduationCap,
    longDescription:
      "Choosing a college is one of the biggest financial decisions you'll make. Don't rely on memory or gut feeling. This comparison worksheet allows you to evaluate up to 5 colleges side-by-side on critical parameters like Total Cost of Attendance, Average Placement Package, Alumni Network Strength, and Course Curriculum.",
    features: [
      'Side-by-side comparison grid for 5 colleges',
      'Weighted scoring system to rank your choices',
      'Financial aid and scholarship comparison section',
      'Campus life and location rating',
      '"Deal Breakers" checklist',
    ],
    whyUse:
      'It forces you to look at the data objectively. Seeing that College A costs 50% more but has the same placement stats as College B makes the decision obvious.',
    howToUse: [
      {
        title: 'Data Collection',
        steps: [
          'Visit the official websites of your shortlisted colleges',
          'Fill in the hard data (Fees, Location, Class Size)',
        ],
      },
      {
        title: 'Evaluation',
        steps: [
          'Rate subjective factors (Campus Vibe, Safety) on a scale of 1-10',
          'Sum up the scores to see your objective winner',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I find placement data?',
        answer:
          'Look for the college\'s "Placement Report" or NIRF ranking data. Don\'t just trust the "Highest Package" numbers on ads.',
      },
    ],
  },
  {
    name: 'USA Visa Checklist',
    slug: 'usa-visa-checklist',
    desc: 'Complete F1 visa document checklist for interview.',
    format: 'PDF',
    category: 'Study Abroad',
    icon: Plane,
    longDescription:
      "The US F1 Visa interview is brief but requires meticulous documentation. Missing a single financial document or SEVIS receipt can lead to administrative processing delays or rejection. This checklist covers every document you might need, categorized into 'Mandatory', 'Financial', 'Academic', and 'Ties to Home Country'.",
    features: [
      'Mandatory documents list (I-20, DS-160, Passport)',
      'Financial proof organization guide',
      'Academic transcripts checklist',
      'Interview day "What to Carry" bag packer',
      'Tips for document folder arrangement',
    ],
    whyUse:
      'Anxiety is high on interview day. Knowing you have checked every single box on this list gives you the confidence to focus on your answers, not your paperwork.',
    howToUse: [
      {
        title: 'Preparation',
        steps: [
          'Print the checklist 2 weeks before your interview',
          'Mark items as "collected" only when they are physically in your folder',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this updated for 2025?',
        answer:
          'Yes, it includes recent requirements like the SEVIS fee receipt and DS-160 confirmation page.',
      },
    ],
  },
  {
    name: 'UK Visa Checklist',
    slug: 'uk-visa-checklist',
    desc: 'Complete UK student visa document checklist.',
    format: 'PDF',
    category: 'Study Abroad',
    icon: Plane,
    longDescription:
      'The UK Student Visa (formerly Tier 4) is points-based, meaning your documents must prove you meet the specific criteria. This checklist ensures you have your CAS letter, TB test results, and financial evidence in the exact format UKVI requires. It acts as a safeguard against common rejection reasons.',
    features: [
      'CAS statement verification points',
      'Financial evidence calculator (28-day rule)',
      'TB Certificate requirement check',
      'ATAS certificate check',
      'Biometric appointment checklist',
    ],
    whyUse:
      'The 28-day rule for bank funds is where most students fail. This checklist specifically reminds you to verify the dates on your bank statement.',
    howToUse: [
      {
        title: 'Before Applying',
        steps: [
          'Use the list to gather documents before submitting your online form',
          'Ensure your bank statements cover the required continuous period',
        ],
      },
    ],
    faq: [
      {
        question: 'Do I need originals?',
        answer:
          'Most documents are uploaded digitally now, but you should keep the original physical copies safe just in case.',
      },
    ],
  },
  {
    name: 'Interview Preparation Sheet',
    slug: 'interview-prep',
    desc: 'Common questions and STAR method template.',
    format: 'PDF',
    category: 'Jobs',
    icon: Briefcase,
    longDescription:
      "Wing it, and you'll fail. Preparation is the key to cracking interviews. This template provides a structured way to prepare stories for behavioral questions using the STAR (Situation, Task, Action, Result) method. It also lists the 50 most common HR and technical questions to practice.",
    features: [
      'STAR Method worksheets for storytelling',
      'Common behavioral question bank',
      '"Tell me about yourself" structure builder',
      'Questions to ask the interviewer',
      'Post-interview reflection log',
    ],
    whyUse:
      "Writing down your STAR stories ensures you don't ramble during the interview. It helps you deliver punchy, impact-focused answers.",
    howToUse: [
      {
        title: 'Story Mining',
        steps: [
          'Recall 5 major challenges/projects from your past',
          'Fill out a STAR worksheet for each one',
        ],
      },
      {
        title: 'Mock Practice',
        steps: [
          'Use the question bank to practice answering out loud',
          'Record your answers and check if they align with your notes',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the STAR method?',
        answer:
          'It stands for Situation, Task, Action, Result. It\'s the industry-standard way to answer "Tell me about a time when..." questions.',
      },
    ],
  },
  {
    name: 'Semester Expense Tracker',
    slug: 'expense-tracker',
    desc: 'Track your monthly expenses as a student.',
    format: 'Google Sheets',
    category: 'Finance',
    icon: DollarSign,
    downloadUrl: 'https://docs.google.com/spreadsheets/create', // Placeholder for actual template link
    longDescription:
      "Student life is often the first time you are managing your own finances. It's easy to overspend on food and social events and run out of money for books. This Expense Tracker is built for students - simple, minimal, and requiring zero finance knowledge. It automatically categorizes your spending and shows you where your money is going.",
    features: [
      'Monthly budget vs. actual spending',
      'Category-wise breakdown (Food, Rent, Transport)',
      'Semester summary dashboard',
      'Savings goal tracker',
      'Subscription manager to spot unused recurring payments',
    ],
    whyUse:
      "Financial literacy starts with awareness. Tracking your spending for just one month can reveal leaks you didn't know existed.",
    howToUse: [
      {
        title: 'Setup',
        steps: [
          'Enter your monthly income/allowance',
          'Set realistic budgets for each category',
        ],
      },
      {
        title: 'Logging',
        steps: [
          'Log expenses at the end of each day (takes 2 minutes)',
          "Review the dashboard at month-end to adjust next month's budget",
        ],
      },
    ],
    faq: [],
  },
  {
    name: 'Project Ideas List',
    slug: 'project-ideas',
    desc: '100+ project ideas for portfolio building.',
    format: 'PDF',
    category: 'Learning',
    icon: Lightbulb,
    longDescription:
      "Stuck in tutorial hell? The best way to learn is to build. This document curates over 100 project ideas across Web Development, Data Science, Mobile Apps, and Python. These aren't just 'To-Do List' apps - they are portfolio-worthy projects that solve real problems, sorted by difficulty level.",
    features: [
      'Categorized by domain (Frontend, Backend, AI/ML)',
      'Difficulty ratings (Beginner, Intermediate, Advanced)',
      'Tech stack suggestions for each project',
      'Feature requirements to make the project stand out',
      'Resources for APIs and datasets',
    ],
    whyUse:
      'Recruiters want to see unique projects. This list gives you ideas that go beyond the basics, helping your resume stand out.',
    howToUse: [
      {
        title: 'Selection',
        steps: [
          'Pick a project slightly above your current skill level',
          'Read the suggested tech stack and features',
        ],
      },
      {
        title: 'Execution',
        steps: [
          'Treat it like a real product: plan, design, and code',
          'Deploy it and add the link to your resume',
        ],
      },
    ],
    faq: [],
  },
  {
    name: 'Email Templates Pack',
    slug: 'email-templates',
    desc: 'Cold email, follow-up, and networking templates.',
    format: 'PDF',
    category: 'Career',
    icon: FileText,
    longDescription:
      'Cold emailing is a superpower, but staring at a blank screen is hard. This pack contains proven email scripts for asking for referrals, applying to unlisted jobs, following up after interviews, and networking with alumni. Just fill in the blanks and hit send.',
    features: [
      'Cold email for internship request',
      'LinkedIn connection note templates',
      'Referral request to alumni',
      'Post-interview thank you note',
      'Polite follow-up for no response',
    ],
    whyUse:
      'A well-written email shows professionalism. These templates are tested to get higher open and response rates than generic messages.',
    howToUse: [
      {
        title: 'Customization',
        steps: [
          'Copy the template that fits your situation',
          'Replace the bracketed text [Name] with real details',
          'Customize the first line to show you did your research',
        ],
      },
    ],
    faq: [],
  },
  {
    name: 'ATS-Friendly Resume Template',
    slug: 'ats-resume',
    desc: 'Professional single-column template optimized for ATS software.',
    format: 'DOCX',
    category: 'Resume',
    icon: FileText,
    longDescription:
      'Did you know 75% of resumes are rejected by Applicant Tracking Systems (ATS) before a human ever sees them? This template is designed to beat the bots. It uses a clean, single-column layout, standard headings, and parsed-friendly fonts to ensure your experience gets ranked correctly.',
    features: [
      'Single-column layout for perfect parsing',
      'Optimized header structure',
      'Skills section formatted for keyword matching',
      'Action-verb driven experience section',
      'Education section with CGPA formatting',
    ],
    whyUse:
      'Fancy designs confuse ATS software. This "boring" template is exactly what recruiters want to see because it makes their job easier.',
    howToUse: [
      {
        title: 'Editing',
        steps: [
          'Download the file',
          'Replace the bracketed text with your details',
          'Do NOT add columns, tables, or graphics',
        ],
      },
      {
        title: 'Export',
        steps: [
          'Always save as PDF before uploading to portals',
          'Name the file "FirstName_LastName_Resume.pdf"',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I add my photo?',
        answer:
          'Avoid it for US/UK/MNC jobs. It can confuse some ATS parsers and cause bias issues.',
      },
    ],
  },
  {
    name: '100 HR Interview Questions',
    slug: '100-hr-questions',
    desc: 'The ultimate list of common HR interview questions.',
    format: 'PDF',
    category: 'Jobs',
    icon: Briefcase,
    longDescription:
      'Preparation is the best antidote to nervousness. This guide compiles the 100 most common questions asked by HR professionals across major companies. It includes strategies for answering "Tell me about yourself", behavioral questions, and tricky situational queries.',
    features: [
      'Top 20 "Must Prepare" questions with strategies',
      'Behavioral questions categorized by trait',
      'Situational questions to test your ethics',
      'Questions YOU should ask the interviewer',
    ],
    whyUse:
      'You will likely face 3-4 of these questions in every single interview. Having prepared answers boosts your confidence significantly.',
    howToUse: [
      {
        title: 'Practice',
        steps: [
          'Pick 5 questions a day',
          'Record yourself answering them',
          'Refine your answers to be concise (under 2 mins)',
        ],
      },
    ],
    faq: [],
  },
  {
    name: 'DSA Cheatsheet',
    slug: 'dsa-cheatsheet',
    desc: 'Quick reference for Data Structures and Algorithms.',
    format: 'PDF',
    category: 'Technical',
    icon: Code,
    longDescription:
      'A last-minute revision guide for your technical interviews. Covers Big-O complexity of common operations, code snippets for standard algorithms (Binary Search, DFS/BFS), and patterns for solving problems (Sliding Window, Two Pointers).',
    features: [
      'Time & Space Complexity chart',
      'Common Data Structure operations',
      'Algorithm patterns and when to use them',
      'Python/Pseudocode snippets',
    ],
    whyUse:
      'Perfect for revising 1 hour before your coding round to keep the concepts fresh in your mind.',
    howToUse: [
      {
        title: 'Revision',
        steps: [
          'Review the Big-O chart',
          'Memorize the standard code templates for BFS/DFS',
        ],
      },
    ],
    faq: [],
  },
  {
    name: 'STAR Method Guide',
    slug: 'star-method',
    desc: 'Master behavioral interviews with the STAR framework.',
    format: 'PDF',
    category: 'Jobs',
    icon: CheckCircle,
    longDescription:
      'The STAR method (Situation, Task, Action, Result) is the industry standard for answering behavioral questions like "Tell me about a time you failed". This guide explains the formula and provides worksheets to help you build your own stories.',
    features: [
      'Explanation of the STAR formula',
      '50+ Behavioral questions to practice',
      'Story building worksheets',
      'Tips for quantifying your results',
    ],
    whyUse:
      'Structured answers are easier to follow and remember. This method ensures you hit all the key points recruiters look for.',
    howToUse: [
      {
        title: 'Storytelling',
        steps: [
          'Identify 5 key experiences from your past',
          'Map them to the STAR framework using the worksheet',
        ],
      },
    ],
    faq: [],
  },
];
