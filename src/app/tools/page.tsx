import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Calculator,
  IndianRupee,
  FileText,
  Brain,
  MessageSquare,
  Keyboard,
  Briefcase,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Users,
  Clock,
  Shield,
  Sparkles,
  Target,
  ArrowRight,
  Lightbulb,
  Star,
  Flame,
  BookOpen,
  Server,
  Globe,
  Type,
  QrCode,
  ArrowRightLeft,
  Binary,
  Calendar,
  Hash,
  FileJson,
  FileSearch,
  CheckSquare,
  AlarmClock,
  Timer,
  Github,
  ClipboardList,
  Trophy,
  Lock,
  GraduationCap,
  PenTool,
  Wallet,
  Plane,
} from 'lucide-react';

export const metadata = getPageSEO('tools');

const tools = [
  {
    title: 'Resume Builder',
    description:
      'Create a professional, ATS-friendly resume in minutes with our free builder',
    icon: FileText,
    href: '/tools/resume-builder',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    features: [
      'Real-time preview',
      'ATS-optimized format',
      'Instant PDF download',
    ],
    users: 'NEW',
  },
  {
    title: 'Application Tracker',
    description: 'Track all your job and internship applications in one place',
    icon: Target,
    href: '/tools/application-tracker',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['Status tracking', 'Interview scheduler', 'Visual dashboard'],
    users: 'NEW',
  },
  {
    title: 'DSA Quiz',
    description:
      'Test your Data Structures & Algorithms knowledge with interactive questions',
    icon: Brain,
    href: '/tools/dsa-quiz',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950',
    features: [
      'Topic-wise questions',
      'Instant explanations',
      'Progress tracking',
    ],
    users: 'NEW',
  },
  {
    title: 'Resume Score Checker',
    description:
      'Analyze your resume and get an ATS-friendly score with improvement suggestions',
    icon: FileText,
    href: '/tools/resume-score-checker',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: [
      'ATS compatibility check',
      'Keyword analysis',
      'Section-by-section feedback',
    ],
    users: '25,000+',
  },
  {
    title: 'CGPA to Percentage Converter',
    description:
      'Convert your CGPA to percentage for all Indian university scales',
    icon: Calculator,
    href: '/tools/cgpa-converter',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: [
      '10, 7, 4-point scales',
      'University-specific formulas',
      'Instant conversion',
    ],
    users: '50,000+',
  },
  {
    title: 'Salary Calculator',
    description: 'Calculate your in-hand salary from CTC with tax deductions',
    icon: IndianRupee,
    href: '/tools/salary-calculator',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: [
      'New & old tax regimes',
      'PF & gratuity calculation',
      'City-wise comparison',
    ],
    users: '35,000+',
  },
  {
    title: 'Aptitude Mock Test',
    description:
      'Practice quantitative, logical, and verbal aptitude questions',
    icon: Brain,
    href: '/tools/aptitude-test',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    features: [
      '500+ questions',
      'Detailed explanations',
      'Performance tracking',
    ],
    users: '20,000+',
  },
  {
    title: 'Pomodoro Study Timer',
    description:
      'Focus sessions with breaks, streaks, and productivity tracking',
    icon: Clock,
    href: '/tools/pomodoro-timer',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: [
      '25/5 min cycles',
      'Session statistics',
      'Customizable durations',
    ],
    users: '15,000+',
  },
  {
    title: 'Study Planner',
    description:
      'Plan daily tasks, track goals, and build productive study streaks',
    icon: Target,
    href: '/tools/study-planner',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    features: ['Daily task tracking', 'Goal setting', 'Weekly progress charts'],
    users: '12,000+',
  },
  {
    title: 'Skills Assessment',
    description:
      'Assess technical, communication, analytical, and leadership skills',
    icon: Brain,
    href: '/tools/skills-assessment',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950',
    features: [
      '20 questions',
      '4 skill categories',
      'Personalized recommendations',
    ],
    users: '18,000+',
  },
  {
    title: 'Skills Gap Analyzer',
    description:
      'Compare your skills with job requirements and identify what to learn',
    icon: Target,
    href: '/tools/skills-gap-analyzer',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950',
    features: ['8+ job roles', 'Smart skill matching', 'Learning resources'],
    users: 'NEW',
  },
  {
    title: 'LinkedIn Generator',
    description: 'Generate professional LinkedIn headlines and summaries',
    icon: Briefcase,
    href: '/tools/linkedin-generator',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    features: [
      'Multiple templates',
      'Profile optimization tips',
      'Copy with one click',
    ],
    users: '10,000+',
  },
  {
    title: 'Interview Question Generator',
    description: 'Get tailored interview questions based on your job role',
    icon: MessageSquare,
    href: '/tools/interview-questions',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    features: [
      'Role-specific questions',
      'Technical & HR rounds',
      'Sample answers',
    ],
    users: '15,000+',
  },
  {
    title: 'Typing Speed Test',
    description: 'Test and improve your typing speed with our WPM calculator',
    icon: Keyboard,
    href: '/tools/typing-test',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    features: [
      'Real-time WPM tracking',
      'Accuracy measurement',
      'Practice passages',
    ],
    users: '30,000+',
  },
  {
    title: 'Cold Email Generator',
    description:
      'Create effective outreach emails for internships and networking',
    icon: MessageSquare,
    href: '/tools/cold-email-generator',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
    features: [
      '8 email templates',
      'Internship & referral',
      'Easy customization',
    ],
    users: '10,000+',
  },
  {
    title: 'Project Ideas Generator',
    description: 'Find perfect coding projects for your portfolio',
    icon: Sparkles,
    href: '/tools/project-ideas',
    color: 'text-fuchsia-600',
    bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-950',
    features: ['13+ project ideas', '7 domains', 'Detailed tech stacks'],
    users: '8,000+',
  },
  {
    title: 'Percentage Calculator',
    description: 'Calculate marks percentage and convert to grades',
    icon: Calculator,
    href: '/tools/percentage-calculator',
    color: 'text-lime-600',
    bgColor: 'bg-lime-50 dark:bg-lime-950',
    features: [
      'Basic & aggregate',
      'Grade conversion',
      'Multi-subject support',
    ],
    users: '30,000+',
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords and memorable passphrases',
    icon: Shield,
    href: '/tools/password-generator',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 dark:bg-slate-950',
    features: ['Crypto-secure', 'Strength meter', 'Passphrase option'],
    users: '25,000+',
  },
  {
    title: 'Job Description Enhancer',
    description:
      'AI-powered tool to optimize job descriptions for better candidates',
    icon: Briefcase,
    href: '/tools/job-description-enhancer',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['Bias-free language', 'SEO optimization', 'Industry templates'],
    users: '5,000+',
  },
  {
    title: 'Cover Letter Generator',
    description: 'Create professional cover letters in minutes',
    icon: FileText,
    href: '/tools/cover-letter-generator',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: [
      'Multiple templates',
      'Industry customization',
      'Instant download',
    ],
    users: '18,000+',
  },
  {
    title: 'Career Roadmap Generator',
    description: 'Get a personalized learning path for your dream career',
    icon: TrendingUp,
    href: '/tools/career-roadmap',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    features: [
      'Role-specific paths',
      'Skill gap analysis',
      'Resource recommendations',
    ],
    users: '12,000+',
  },
  {
    title: 'Education Loan EMI Calculator',
    description: 'Calculate monthly EMI for your education loan',
    icon: DollarSign,
    href: '/tools/emi-calculator',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950',
    features: [
      'Multiple loan tenures',
      'Interest comparison',
      'Amortization schedule',
    ],
    users: '8,000+',
  },
  {
    title: 'Technical MCQ Quiz',
    description:
      'Practice OS, DBMS, Computer Networks, and OOPs questions for placements',
    icon: Server,
    href: '/tools/technical-quiz',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: ['20+ questions', '4 core subjects', 'Instant explanations'],
    users: 'NEW',
  },
  {
    title: 'GD Topics Bank',
    description:
      '50+ Group Discussion topics for campus placements and MBA admissions',
    icon: MessageSquare,
    href: '/tools/gd-topics',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: ['50+ topics', 'Current affairs', "Do's and Don'ts"],
    users: 'NEW',
  },
  {
    title: 'HR Document Templates',
    description:
      'Generate resignation letters, leave applications, NOC requests instantly',
    icon: FileText,
    href: '/tools/hr-templates',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: ['6 template types', 'One-click copy', 'Professional format'],
    users: 'NEW',
  },
  {
    title: 'Syllabus Tracker',
    description: 'Track your GATE, placement, or web dev preparation progress',
    icon: BookOpen,
    href: '/tools/syllabus-tracker',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: ['3 syllabi', 'Topic checklist', 'Progress saved locally'],
    users: 'NEW',
  },
  {
    title: 'Study Tracker',
    description:
      'Track daily study hours with GitHub-style heatmap and streaks',
    icon: Flame,
    href: '/tools/study-tracker',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    features: ['Heatmap calendar', 'Streak tracking', 'Weekly/Monthly stats'],
    users: 'NEW',
  },
  {
    title: 'Company Salary Insights',
    description:
      'Compare fresher salaries across TCS, Infosys, Google, Amazon & 15+ companies',
    icon: IndianRupee,
    href: '/tools/salary-insights',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: ['15+ companies', 'Fresher & experienced', 'Bond information'],
    users: 'NEW',
  },
  {
    title: 'LOR & SOP Generator',
    description:
      'Generate Letter of Recommendation and Statement of Purpose for university applications',
    icon: FileText,
    href: '/tools/lor-sop-generator',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: ['LOR template', 'SOP template', 'University standard'],
    users: 'NEW',
  },
  {
    title: 'Flashcards Study Tool',
    description:
      'Study DSA, DBMS, OS, OOPs with interactive flashcards and confidence tracking',
    icon: Lightbulb,
    href: '/tools/flashcards',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    features: ['4 pre-loaded decks', 'Shuffle & track', 'Create custom cards'],
    users: 'NEW',
  },
  {
    title: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs instantly',
    icon: Type,
    href: '/tools/word-counter',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: ['Real-time counting', 'Reading time', 'No spaces count'],
    users: 'NEW',
  },
  {
    title: 'Case Converter',
    description:
      'Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case',
    icon: Type,
    href: '/tools/case-converter',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['8 case types', 'One-click convert', 'Instant copy'],
    users: 'NEW',
  },
  {
    title: 'Age Calculator',
    description:
      'Calculate exact age in years, months, days with birthday countdown',
    icon: Calendar,
    href: '/tools/age-calculator',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    features: ['Exact age', 'Next birthday', 'Total days/weeks'],
    users: 'NEW',
  },
  {
    title: 'QR Code Generator',
    description: 'Create QR codes for URLs, text, email, phone, and WiFi',
    icon: QrCode,
    href: '/tools/qr-code-generator',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-950',
    features: ['5 QR types', 'Instant download', 'Free to use'],
    users: 'NEW',
  },
  {
    title: 'Unit Converter',
    description:
      'Convert length, weight, temperature, time, data, and speed units',
    icon: ArrowRightLeft,
    href: '/tools/unit-converter',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    features: ['6 categories', '40+ units', 'Quick swap'],
    users: 'NEW',
  },
  {
    title: 'Number System Converter',
    description: 'Convert between Decimal, Binary, Octal, and Hexadecimal',
    icon: Binary,
    href: '/tools/number-converter',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    features: ['4 number systems', 'CS students', 'Instant convert'],
    users: 'NEW',
  },
  {
    title: 'Date Calculator',
    description: 'Calculate date differences and add/subtract days from dates',
    icon: Calendar,
    href: '/tools/date-calculator',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950',
    features: ['Date difference', 'Add/subtract days', 'Working days'],
    users: 'NEW',
  },
  {
    title: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for designs and mockups',
    icon: FileText,
    href: '/tools/lorem-ipsum-generator',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
    features: ['Custom paragraphs', 'Word count', 'Instant copy'],
    users: 'NEW',
  },
  {
    title: 'Random Generator',
    description: 'Generate random numbers, passwords, and colors',
    icon: Hash,
    href: '/tools/random-generator',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950',
    features: ['Numbers', 'Passwords', 'Colors'],
    users: 'NEW',
  },
  {
    title: 'World Clock',
    description: 'View current time across different time zones worldwide',
    icon: Globe,
    href: '/tools/world-clock',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    features: ['15+ time zones', 'Day/night indicator', 'Real-time update'],
    users: 'NEW',
  },
  {
    title: 'JSON Formatter',
    description: 'Format, beautify, minify, and validate JSON data',
    icon: FileJson,
    href: '/tools/json-formatter',
    color: 'text-lime-600',
    bgColor: 'bg-lime-50 dark:bg-lime-950',
    features: ['Beautify/Minify', 'Validation', 'Error detection'],
    users: 'NEW',
  },
  {
    title: 'Academic Calendar Tracker',
    description: 'Track semester dates, holidays, and exam schedules',
    icon: Calendar,
    href: '/tools/academic-calendar',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    features: ['Important dates', 'Holiday list', 'Exam schedule'],
    users: 'NEW',
  },
  {
    title: 'ATS Resume Checker',
    description: 'Check if your resume can be parsed by ATS software',
    icon: FileSearch,
    href: '/tools/ats-checker',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: ['Score analysis', 'Keyword matching', 'Formatting check'],
    users: 'NEW',
  },
  {
    title: 'Checklist Generator',
    description: 'Create custom checklists for projects, packing, or study',
    icon: CheckSquare,
    href: '/tools/checklist-generator',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: ['Templates', 'Export PDF', 'Reminders'],
    users: 'NEW',
  },
  {
    title: 'Deadline Calculator',
    description: 'Calculate project deadlines with buffer time',
    icon: AlarmClock,
    href: '/tools/deadline-calculator',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: ['Working days', 'Time remaining', 'Buffer time'],
    users: 'NEW',
  },
  {
    title: 'Exam Countdown',
    description: 'Track time remaining for all your upcoming exams',
    icon: Timer,
    href: '/tools/exam-countdown',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: ['Multiple exams', 'Study reminders', 'Visual timer'],
    users: 'NEW',
  },
  {
    title: 'GitHub Readme Generator',
    description: 'Create professional GitHub profile READMEs instantly',
    icon: Github,
    href: '/tools/github-readme-generator',
    color: 'text-slate-900',
    bgColor: 'bg-slate-50 dark:bg-slate-900',
    features: ['Drag & drop', 'Stats widgets', 'Social icons'],
    users: 'NEW',
  },
  {
    title: 'GPA Converter',
    description: 'Convert different GPA scales to 4.0 scale',
    icon: Calculator,
    href: '/tools/gpa-converter',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950',
    features: ['US scale', 'UK scale', 'Percentage to GPA'],
    users: 'NEW',
  },
  {
    title: 'Interview Checklist',
    description:
      'Comprehensive checklist for before, during, and after interviews',
    icon: ClipboardList,
    href: '/tools/interview-checklist',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['Pre-interview', 'During interview', 'Post-interview'],
    users: 'NEW',
  },
  {
    title: 'Marks Calculator',
    description: 'Calculate weighted averages and total percentages',
    icon: Calculator,
    href: '/tools/marks-calculator',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    features: ['Weighted average', 'Total percentage', 'Grade prediction'],
    users: 'NEW',
  },
  {
    title: 'Placement Readiness',
    description: 'Assess your readiness for campus placements',
    icon: Trophy,
    href: '/tools/placement-readiness',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    features: ['Skill assessment', 'Resume check', 'Mock score'],
    users: 'NEW',
  },
  {
    title: 'Salary Bond Tracker',
    description: 'Track employment bond period and calculations',
    icon: Lock,
    href: '/tools/salary-bond-tracker',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950',
    features: ['Bond period', 'Penalty calculator', 'Exit planning'],
    users: 'NEW',
  },
  {
    title: 'Scholarship Checker',
    description: 'Find eligible scholarships based on your profile',
    icon: GraduationCap,
    href: '/tools/scholarship-checker',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    features: ['Eligibility check', 'Deadline alerts', 'Application tips'],
    users: 'NEW',
  },
  {
    title: 'SOP Outliner',
    description: 'Structure your Statement of Purpose effectively',
    icon: PenTool,
    href: '/tools/sop-outliner',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950',
    features: ['Paragraph builder', 'Key points', 'Flow check'],
    users: 'NEW',
  },
  {
    title: 'Student Budget Planner',
    description: 'Manage monthly student expenses and savings',
    icon: Wallet,
    href: '/tools/student-budget-planner',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    features: ['Expense categories', 'Savings goal', 'Visual charts'],
    users: 'NEW',
  },
  {
    title: 'Study Hours Calculator',
    description: 'Calculate and plan your weekly study schedule',
    icon: Clock,
    href: '/tools/study-hours-calculator',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
    features: ['Weekly targets', 'Break optimization', 'Subject allocation'],
    users: 'NEW',
  },
  {
    title: 'Work Visa Comparison',
    description:
      'Compare H-1B, Blue Card, and other work visas across countries',
    icon: Globe,
    href: '/tools/work-visa-comparison',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['USA vs Europe', 'Eligibility check', 'Cost comparison'],
    users: 'NEW',
  },
  {
    title: 'Visa Timeline Calculator',
    description: 'Estimate visa processing timelines for different countries',
    icon: Plane,
    href: '/tools/visa-timeline',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    features: ['Processing times', 'Document checklist', 'Status stages'],
    users: 'NEW',
  },
  {
    title: 'Regex Tester',
    description: 'Test and debug regular expressions with real-time matching',
    icon: FileSearch,
    href: '/tools/regex-tester',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950',
    features: ['Real-time matching', 'Common patterns', 'Cheatsheet'],
    users: 'NEW',
  },
  {
    title: 'Diff Checker',
    description: 'Compare two texts and highlight differences',
    icon: FileSearch,
    href: '/tools/diff-checker',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: ['Side-by-side view', 'Line numbers', 'Statistics'],
    users: 'NEW',
  },
  {
    title: 'Code Formatter',
    description: 'Format and beautify code in multiple languages',
    icon: FileJson,
    href: '/tools/code-formatter',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    features: ['Multi-language', 'Minify option', 'Custom indent'],
    users: 'NEW',
  },
  {
    title: 'Encryption Tool',
    description: 'Encrypt, decrypt text and generate secure hashes',
    icon: Lock,
    href: '/tools/encryption-tool',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: ['AES encryption', 'Base64', 'Hash generators'],
    users: 'NEW',
  },
  {
    title: 'ASCII Table',
    description: 'Browse ASCII characters with decimal, hex, and binary codes',
    icon: Binary,
    href: '/tools/ascii-table',
    color: 'text-slate-600',
    bgColor: 'bg-slate-50 dark:bg-slate-950',
    features: ['Searchable', 'Extended ASCII', 'Copy codes'],
    users: 'NEW',
  },
  {
    title: 'IP Subnet Calculator',
    description: 'Calculate network addresses, subnets, and host ranges',
    icon: Server,
    href: '/tools/ip-subnet-calculator',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    features: ['CIDR notation', 'Host range', 'Subnet masks'],
    users: 'NEW',
  },
  {
    title: 'Coin Flipper',
    description: 'Flip coins with animation, statistics, and history',
    icon: Hash,
    href: '/tools/coin-flipper',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    features: ['Animation', 'Multi-flip', 'Statistics'],
    users: 'NEW',
  },
  {
    title: 'Dice Roller',
    description: 'Roll various dice types from D4 to D100 with modifiers',
    icon: Hash,
    href: '/tools/dice-roller',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: ['D4-D100', 'Modifiers', 'Roll history'],
    users: 'NEW',
  },
  {
    title: 'List Randomizer',
    description: 'Shuffle lists, pick random items, and sort entries',
    icon: ArrowRightLeft,
    href: '/tools/list-randomizer',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    features: ['Shuffle', 'Pick random', 'Remove duplicates'],
    users: 'NEW',
  },
  {
    title: 'Team Generator',
    description: 'Randomly split people into balanced teams',
    icon: Users,
    href: '/tools/team-generator',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950',
    features: ['Custom teams', 'Color-coded', 'Export'],
    users: 'NEW',
  },
  {
    title: 'Color Palette Generator',
    description: 'Generate harmonious color palettes for your designs',
    icon: Sparkles,
    href: '/tools/color-palette-generator',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950',
    features: ['Color harmonies', 'Lock colors', 'CSS export'],
    users: 'NEW',
  },
  {
    title: 'CSS Gradient Generator',
    description: 'Create beautiful CSS gradients with visual editor',
    icon: Sparkles,
    href: '/tools/css-gradient-generator',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['Linear/Radial', 'Color stops', 'Copy CSS'],
    users: 'NEW',
  },
  {
    title: 'Font Pairings',
    description: 'Discover beautiful font combinations for your projects',
    icon: Type,
    href: '/tools/font-pairings',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
    features: ['12 curated pairs', 'Preview', 'Copy CSS'],
    users: 'NEW',
  },
  {
    title: 'Image to Base64',
    description: 'Convert images to Base64 data URLs for embedding',
    icon: QrCode,
    href: '/tools/image-to-base64',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: ['Drag & drop', 'Preview', 'Copy string'],
    users: 'NEW',
  },
  {
    title: 'Image Placeholder',
    description: 'Generate placeholder images for mockups and prototypes',
    icon: QrCode,
    href: '/tools/image-placeholder',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    features: ['Custom size', 'Colors', 'Download PNG'],
    users: 'NEW',
  },
  {
    title: 'Calendar Generator',
    description: 'Generate printable monthly calendars with events',
    icon: Calendar,
    href: '/tools/calender-generator',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    features: ['Month view', 'Mark dates', 'Print ready'],
    users: 'NEW',
  },
  {
    title: 'Currency Converter',
    description: 'Convert between major world currencies',
    icon: DollarSign,
    href: '/tools/currency-converter',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: ['12 currencies', 'Quick amounts', 'Swap pairs'],
    users: 'NEW',
  },
  {
    title: 'GST Calculator',
    description: 'Calculate Indian GST with CGST/SGST/IGST breakdown',
    icon: IndianRupee,
    href: '/tools/gst-calculator',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: ['All GST slabs', 'Inclusive/Exclusive', 'IGST option'],
    users: 'NEW',
  },
  {
    title: 'Income Tax Calculator',
    description: 'Calculate Indian income tax for old and new regimes',
    icon: IndianRupee,
    href: '/tools/tax-calculator',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: ['Both regimes', 'Slab breakdown', 'Section 87A'],
    users: 'NEW',
  },
  {
    title: 'Discount Calculator',
    description: 'Calculate discounts, savings, and final prices',
    icon: Calculator,
    href: '/tools/discount-calculator',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: ['Final price', 'Savings %', 'Quick presets'],
    users: 'NEW',
  },
  {
    title: 'Time Calculator',
    description: 'Add, subtract, and find difference between times',
    icon: Clock,
    href: '/tools/time-calculator',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950',
    features: ['Add/Subtract', 'Difference', 'Multiple formats'],
    users: 'NEW',
  },
  {
    title: 'CGPA Calculator',
    description: 'Convert CGPA to percentage and calculate SGPA',
    icon: Calculator,
    href: '/tools/cgpa-to-percentage',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950',
    features: ['10 & 4 scale', 'SGPA calc', 'Grade table'],
    users: 'NEW',
  },
  {
    title: 'Career Quiz',
    description: 'Discover career paths that match your interests',
    icon: Brain,
    href: '/tools/career-quiz',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-950',
    features: ['5 questions', '8 careers', 'Instant results'],
    users: 'NEW',
  },
  {
    title: 'Notice Period Calculator',
    description: 'Calculate your last working day based on notice period',
    icon: Calendar,
    href: '/tools/notice-period-calculator',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-950',
    features: ['Date picker', 'Weekends option', 'Timeline'],
    users: 'NEW',
  },
  {
    title: 'Job Application Tracker',
    description: 'Track job applications, interviews, and offers',
    icon: Briefcase,
    href: '/tools/job-application-tracker',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950',
    features: ['Status tracking', 'Statistics', 'CRUD operations'],
    users: 'NEW',
  },
  {
    title: 'Salary Negotiation Guide',
    description: 'Tips, scripts, and calculator for salary negotiation',
    icon: TrendingUp,
    href: '/tools/salary-negotiation',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    features: ['8 key tips', 'Ready scripts', 'Hike calc'],
    users: 'NEW',
  },
  {
    title: 'Password Strength Checker',
    description: 'Check password security and get improvement tips',
    icon: Shield,
    href: '/tools/password-strength-checker',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    features: ['Strength meter', 'Time to crack', 'Suggestions'],
    users: 'NEW',
  },
  {
    title: '2FA Guide',
    description: 'Learn about two-factor authentication methods',
    icon: Lock,
    href: '/tools/2fa-guide',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    features: ['6 methods', 'Pros & cons', 'Service links'],
    users: 'NEW',
  },
  {
    title: 'Privacy Checklist',
    description: 'Comprehensive checklist to protect yourself online',
    icon: Shield,
    href: '/tools/privacy-checklist',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    features: ['25 items', 'Progress', 'Download'],
    users: 'NEW',
  },
  {
    title: 'Mock Interview',
    description: 'Practice interview questions with tips and answers',
    icon: MessageSquare,
    href: '/tools/mock-interview',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950',
    features: ['9 questions', 'Tips', 'Sample answers'],
    users: 'NEW',
  },
  {
    title: 'Email Generator',
    description: 'Generate professional emails with templates',
    icon: MessageSquare,
    href: '/tools/email-generator',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    features: ['6 templates', 'Variables', 'Copy email'],
    users: 'NEW',
  },
  {
    title: 'Meeting Planner',
    description: 'Find best meeting times across timezones',
    icon: Globe,
    href: '/tools/meeting-planner',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-950',
    features: ['10 timezones', 'Work hours', 'Multi-person'],
    users: 'NEW',
  },
  {
    title: 'Cost of Living Calculator',
    description: 'Compare living costs and salary equivalents between cities',
    icon: DollarSign,
    href: '/tools/cost-of-living',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    features: ['9 cities', 'Salary calc', 'Cost breakdown'],
    users: 'NEW',
  },
  {
    title: 'Flight Tracker',
    description: 'Track flights and find airline status pages',
    icon: Plane,
    href: '/tools/flight-tracker',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50 dark:bg-sky-950',
    features: ['8 airlines', 'Track services', 'Airport codes'],
    users: 'NEW',
  },
];

export default function ToolsPage() {
  const schemas = getPageSchema('tools');
  const toolFaqs = [
    {
      q: 'Are these tools really free?',
      a: "Yes, all tools on Sproutern are 100% free to use. We don't have any hidden charges, premium tiers, or paywalls. Our mission is to help students succeed in their careers.",
    },
    {
      q: 'Do I need to create an account?',
      a: 'No registration is required for most tools. You can use them instantly and anonymously. We only ask for an account if you want to save your results or access personalized features.',
    },
    {
      q: 'How accurate are the calculations?',
      a: 'Our tools use official formulas and current tax slabs. The CGPA converter supports university-specific formulas, and the salary calculator is refreshed when supported tax rules change. We update the tools regularly to keep them accurate.',
    },
    {
      q: 'Is my data secure?',
      a: "We don't store any personal data from tool usage. Calculations happen in your browser, and we respect your privacy. Read our Privacy Policy for complete details.",
    },
    {
      q: 'Can I use these tools on mobile?',
      a: 'Absolutely. All tools are responsive and work on phones, tablets, and desktops.',
    },
    {
      q: 'How often are tools updated?',
      a: 'We update tools whenever tax rules, university formulas, product logic, or user-critical requirements materially change. High-impact tools are reviewed on a recurring schedule.',
    },
  ];
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://www.sproutern.com/tools',
      },
    ],
  };
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: toolFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
  return (
    <div className="container py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema([
          ...schemas,
          breadcrumbSchema,
          faqSchema,
        ])}
      />
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-10 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            100% Free Career Tools
          </div>
          <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
            Free Career Tools for Students
          </h1>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-xl">
            Use practical tools for resumes, salary planning, GPA conversion,
            interview preparation, and day-to-day career decisions.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:mb-12 sm:gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 dark:bg-green-950 sm:gap-3 sm:p-4">
            <CheckCircle className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
            <div>
              <p className="text-sm font-bold sm:text-base">100% Free</p>
              <p className="text-xs text-muted-foreground">No hidden charges</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">2 Lakh+ Users</p>
              <p className="text-xs text-muted-foreground">
                Trusted by students
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Clock className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Instant Results</p>
              <p className="text-xs text-muted-foreground">No waiting time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Shield className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Privacy First</p>
              <p className="text-xs text-muted-foreground">Data never stored</p>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
              >
                <Card className="group h-full cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-lg ${tool.bgColor} mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      <Icon className={`h-6 w-6 ${tool.color}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <span className="rounded-full bg-muted px-2 py-1 text-xs">
                        {tool.users} users
                      </span>
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tool.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 font-medium text-primary transition-transform group-hover:translate-x-1">
                      Use Tool <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Why Use Our Tools */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Target className="h-8 w-8 text-primary" />
            Why Use Sproutern Career Tools?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    Designed for Indian Students
                  </h3>
                  <p className="text-muted-foreground">
                    All tools are customized for Indian education system,
                    universities, and job market. CGPA scales, tax calculations,
                    and industry standards are India-specific.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    Trusted by Top College Students
                  </h3>
                  <p className="text-muted-foreground">
                    Students from IITs, NITs, BITS, and top universities use our
                    tools daily for campus placements and internship
                    preparations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Always Up-to-Date</h3>
                  <p className="text-muted-foreground">
                    Our tools are regularly updated with latest tax slabs,
                    industry trends, and hiring practices. Get accurate, current
                    information every time.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">
                    No Registration Required
                  </h3>
                  <p className="text-muted-foreground">
                    Use any tool instantly without creating an account. We
                    respect your time and privacy—no spam, no data collection.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-bold text-primary">5</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Mobile-Friendly Design</h3>
                  <p className="text-muted-foreground">
                    All tools work perfectly on mobile devices. Calculate
                    salaries, check resume scores, or practice aptitude on the
                    go.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-bold text-primary">6</span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Expert-Backed Content</h3>
                  <p className="text-muted-foreground">
                    Tools are developed with input from HR professionals, career
                    counselors, and industry experts to ensure accuracy and
                    relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Categories */}
        <section className="mb-16 rounded-2xl bg-muted/50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Tools by Category</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <FileText className="h-5 w-5 text-blue-600" />
                Resume & Applications
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/tools/resume-score-checker"
                    className="text-primary hover:underline"
                  >
                    Resume Score Checker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/cover-letter-generator"
                    className="text-primary hover:underline"
                  >
                    Cover Letter Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resume-optimizer"
                    className="text-primary hover:underline"
                  >
                    AI Resume Optimizer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <Calculator className="h-5 w-5 text-green-600" />
                Calculators & Converters
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/tools/cgpa-converter"
                    className="text-primary hover:underline"
                  >
                    CGPA to Percentage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/salary-calculator"
                    className="text-primary hover:underline"
                  >
                    Salary Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/emi-calculator"
                    className="text-primary hover:underline"
                  >
                    EMI Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-semibold">
                <Brain className="h-5 w-5 text-orange-600" />
                Interview Preparation
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/tools/aptitude-test"
                    className="text-primary hover:underline"
                  >
                    Aptitude Mock Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/interview-questions"
                    className="text-primary hover:underline"
                  >
                    Interview Questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/typing-test"
                    className="text-primary hover:underline"
                  >
                    Typing Speed Test
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Most Popular Tools */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Star className="h-6 w-6 text-yellow-500" />
            Most Popular Tools
          </h2>
          <div className="prose prose-lg max-w-none">
            <h3>1. CGPA to Percentage Converter</h3>
            <p>
              Our most-used tool with over 50,000 monthly users. Essential for
              every student applying to jobs or higher education. Supports all
              major Indian university scales including CBSE, ICSE, Mumbai
              University, Anna University, VTU, and more. Simply enter your CGPA
              and get instant, accurate percentage conversion using official
              formulas.
            </p>

            <h3>2. CTC to In-Hand Salary Calculator</h3>
            <p>
              Understanding your actual take-home salary before accepting a job
              offer is crucial. Our calculator includes:
            </p>
            <ul>
              <li>
                Both new and old tax regime calculations supported by the
                active version of our salary calculator
              </li>
              <li>PF, professional tax, and all standard deductions</li>
              <li>City-wise cost of living comparison</li>
              <li>Tax-saving tips to maximize your in-hand salary</li>
            </ul>

            <h3>3. Resume Score Checker</h3>
            <p>
              With most companies using Applicant Tracking Systems (ATS), having
              an ATS-friendly resume is essential. Our Resume Score Checker
              analyzes your resume for:
            </p>
            <ul>
              <li>ATS compatibility and parsing accuracy</li>
              <li>Keyword optimization for your target role</li>
              <li>Format, structure, and content suggestions</li>
              <li>Section-by-section improvement recommendations</li>
            </ul>
          </div>
        </section>

        {/* Expert Tips */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            Expert Tips for Using Career Tools
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Use Multiple Tools Together',
                desc: 'Combine Resume Checker + Interview Questions + Aptitude Test for complete placement preparation.',
              },
              {
                title: 'Compare Before Deciding',
                desc: 'Use Salary Calculator to compare offers from different companies and make informed decisions.',
              },
              {
                title: 'Practice Regularly',
                desc: 'Take Aptitude Tests weekly to improve speed and accuracy. Track your progress over time.',
              },
              {
                title: 'Keep Resume Updated',
                desc: 'Run Resume Score Checker after every update to ensure your resume stays ATS-friendly.',
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border p-4"
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-semibold">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {toolFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-16 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
          <h2 className="mb-6 text-2xl font-bold">Explore More Resources</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/resources"
              className="block rounded-xl bg-background p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Career Resources</h3>
              <p className="text-sm text-muted-foreground">
                Templates, guides, and checklists
              </p>
            </Link>
            <Link
              href="/blog"
              className="block rounded-xl bg-background p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Career Blog</h3>
              <p className="text-sm text-muted-foreground">
                Expert advice and industry insights
              </p>
            </Link>
            <Link
              href="/internships"
              className="block rounded-xl bg-background p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Browse Internships</h3>
              <p className="text-sm text-muted-foreground">
                Find your perfect opportunity
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="rounded-2xl bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Start Your Career Journey?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Use our tools to prepare, then browse thousands of internship
            opportunities from top startups
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships <ArrowRight className="h-4 w-4" />
          </Link>
        </section> */}
      </div>
    </div>
  );
}
