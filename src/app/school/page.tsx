import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Compass,
  Calendar,
  Trophy,
  Users,
  Globe,
  Lightbulb,
  Brain,
  Calculator,
  Heart,
  Palette,
  TrendingUp,
  Clock,
  Award,
  FileText,
  Building,
  Briefcase,
  MapPin,
  DollarSign,
  Laptop,
  Microscope,
  Music,
  Camera,
  Plane,
  Scale,
  Stethoscope,
  Wrench,
  Zap,
  Shield,
  HelpCircle,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title:
    'School Career Guide | After 10th, After 12th, Exams & Scholarships',
  description:
    'Explore stream selection, after-10th and after-12th options, exam planning, scholarships, board-exam strategy, and early study-abroad guidance.',
  keywords:
    'school student career, after 10th guide, after 12th options, stream selection, NTSE preparation, school scholarships, JEE preparation, NEET preparation, board exam tips, study abroad for school students, career counseling India',
  openGraph: {
    title: 'School Career Guide for Students',
    description:
      'After 10th, after 12th, exam planning, scholarships, and career guidance in one place.',
    type: 'website',
    url: 'https://www.sproutern.com/school',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/school',
  },
};

const mainResources = [
  {
    title: 'After 10th Career Guide',
    description:
      'Complete guide to choosing the right stream - Science, Commerce, or Arts. Explore all career paths.',
    href: '/school/after-10th-guide',
    badge: 'Popular',
    icon: Target,
    color: 'bg-blue-500',
  },
  {
    title: 'After 12th Career Guide',
    description:
      '100+ career options after 12th class. Engineering, Medicine, Commerce, Arts & more.',
    href: '/school/after-12th-guide',
    badge: 'Essential',
    icon: GraduationCap,
    color: 'bg-green-500',
  },
  {
    title: 'Competitive Exams Calendar',
    description:
      'JEE, NEET, NTSE, Olympiads - all exam dates, registration deadlines & preparation tips.',
    href: '/school/competitive-exams',
    badge: 'Planning Guide',
    icon: Calendar,
    color: 'bg-purple-500',
  },
  {
    title: 'Stream Selection Guide',
    description:
      'Science vs Commerce vs Arts - which stream is right for you? Take our assessment.',
    href: '/school/stream-selection',
    badge: 'Interactive',
    icon: Compass,
    color: 'bg-orange-500',
  },
  {
    title: 'Board Exam Tips',
    description:
      'Score 90%+ in board exams with proven strategies, time management & last-minute tips.',
    href: '/school/board-exam-tips',
    badge: 'Strategies',
    icon: Award,
    color: 'bg-red-500',
  },
  {
    title: 'Study Abroad Early',
    description:
      'Gap year programs, exchange opportunities & undergraduate studies abroad after 12th.',
    href: '/school/study-abroad',
    badge: 'Global',
    icon: Globe,
    color: 'bg-cyan-500',
  },
];

const toolsAndUtilities = [
  {
    title: 'Marks Calculator',
    href: '/tools/marks-calculator',
    description: 'Convert board marks to percentage',
  },
  {
    title: 'CGPA Converter',
    href: '/tools/cgpa-converter',
    description: 'Convert CGPA to percentage & vice versa',
  },
  {
    title: 'Exam Countdown',
    href: '/tools/exam-countdown',
    description: 'Track days left for your exams',
  },
  {
    title: 'Career Quiz',
    href: '/tools/career-quiz',
    description: 'Find your ideal career path',
  },
  {
    title: 'College Predictor',
    href: '/tools/college-predictor',
    description: 'Predict colleges based on rank',
  },
  {
    title: 'Scholarship Finder',
    href: '/scholarships',
    description: 'Find scholarships you qualify for',
  },
];

const streamGuide = [
  {
    stream: 'Science (PCM)',
    icon: Calculator,
    color: 'bg-blue-500',
    description: 'Physics, Chemistry, Mathematics',
    careers: [
      'Engineering (IIT, NIT)',
      'Architecture',
      'Aviation & Pilot',
      'Merchant Navy',
      'Data Science',
      'AI/ML',
      'Robotics',
      'Defense (NDA)',
    ],
    exams: [
      'JEE Main',
      'JEE Advanced',
      'BITSAT',
      'VITEEE',
      'State CETs',
      'NDA',
    ],
    avgSalary: '₹6-50 LPA',
    topColleges: ['IIT Bombay', 'IIT Delhi', 'BITS Pilani', 'NIT Trichy'],
  },
  {
    stream: 'Science (PCB)',
    icon: Heart,
    color: 'bg-green-500',
    description: 'Physics, Chemistry, Biology',
    careers: [
      'MBBS Doctor',
      'Dentist (BDS)',
      'Pharmacy',
      'Biotechnology',
      'Nursing',
      'Veterinary',
      'BAMS/BHMS',
      'Research',
    ],
    exams: ['NEET UG', 'AIIMS', 'JIPMER', 'State Medical Entrances'],
    avgSalary: '₹5-40 LPA',
    topColleges: ['AIIMS Delhi', 'CMC Vellore', 'JIPMER', 'AFMC'],
  },
  {
    stream: 'Commerce',
    icon: TrendingUp,
    color: 'bg-amber-500',
    description: 'Accountancy, Business Studies, Economics',
    careers: [
      'Chartered Accountant',
      'Company Secretary',
      'Investment Banking',
      'MBA',
      'Economics',
      'Banking',
      'Stock Market',
      'Entrepreneur',
    ],
    exams: ['CA Foundation', 'CS Foundation', 'CUET', 'CAT/XAT', 'CLAT'],
    avgSalary: '₹5-35 LPA',
    topColleges: ['SRCC Delhi', 'LSR', 'Christ University', 'Symbiosis'],
  },
  {
    stream: 'Arts/Humanities',
    icon: Palette,
    color: 'bg-purple-500',
    description: 'History, Political Science, Psychology',
    careers: [
      'Civil Services (IAS/IPS)',
      'Law (LLB)',
      'Journalism',
      'Psychology',
      'Teaching',
      'Design',
      'Film Making',
      'Foreign Service',
    ],
    exams: ['UPSC CSE', 'CLAT', 'NID DAT', 'NIFT', 'Mass Comm Entrances'],
    avgSalary: '₹4-30 LPA',
    topColleges: ['St. Stephens', 'JNU', 'NLUs', 'NID', 'NIFT'],
  },
];

const scholarships = [
  {
    name: 'NTSE Scholarship',
    amount: '₹1,250/month till PhD',
    eligibility: 'Class 10 students',
    deadline: 'November',
    link: 'https://ncert.nic.in',
  },
  {
    name: 'KVPY Fellowship',
    amount: '₹5,000-7,000/month',
    eligibility: 'Class 11-12 Science',
    deadline: 'Merged with INSPIRE',
    link: '',
  },
  {
    name: 'INSPIRE Scholarship',
    amount: '₹80,000/year',
    eligibility: 'Top 1% in 12th boards',
    deadline: 'After results',
    link: 'https://online-inspire.gov.in',
  },
  {
    name: 'PM YASASVI',
    amount: 'Up to ₹75,000/year',
    eligibility: 'OBC/EBC/DNT students',
    deadline: 'August',
    link: 'https://yet.nta.ac.in',
  },
  {
    name: 'Sitaram Jindal Foundation',
    amount: '₹1,000-2,000/month',
    eligibility: 'Meritorious students',
    deadline: 'Rolling',
    link: '',
  },
  {
    name: 'L&T Build India Scholarship',
    amount: 'Varies',
    eligibility: 'Engineering aspirants',
    deadline: 'May-June',
    link: '',
  },
  {
    name: 'HDFC Educational Crisis',
    amount: 'Need-based',
    eligibility: 'Financial crisis',
    deadline: 'Anytime',
    link: '',
  },
  {
    name: 'Vidyasaarathi Scholarships',
    amount: 'Multiple',
    eligibility: 'Various criteria',
    deadline: 'Multiple',
    link: 'https://vidyasaarathi.co.in',
  },
];

const examCalendar = [
  {
    exam: 'JEE Main Session 1',
    date: 'Usually January',
    category: 'Engineering',
    registration: 'Usually November-December',
  },
  {
    exam: 'JEE Main Session 2',
    date: 'Usually April',
    category: 'Engineering',
    registration: 'Usually February-March',
  },
  {
    exam: 'NEET UG',
    date: 'Usually May',
    category: 'Medical',
    registration: 'Usually February-March',
  },
  {
    exam: 'JEE Advanced',
    date: 'Usually May-June',
    category: 'Engineering',
    registration: 'After JEE Main',
  },
  {
    exam: 'CUET UG',
    date: 'Usually May-June',
    category: 'Central Universities',
    registration: 'Usually February-March',
  },
  {
    exam: 'BITSAT',
    date: 'Usually May-June',
    category: 'Engineering',
    registration: 'Usually January-April',
  },
  {
    exam: 'VITEEE',
    date: 'Usually April',
    category: 'Engineering',
    registration: 'Usually November-March',
  },
  {
    exam: 'NDA',
    date: 'Usually April and September',
    category: 'Defense',
    registration: 'Usually December-January or May-June',
  },
  {
    exam: 'Olympiad Stage 1',
    date: 'Usually November-December',
    category: 'Scholarship',
    registration: 'Usually August-October',
  },
  {
    exam: 'CLAT',
    date: 'Usually December',
    category: 'Law',
    registration: 'Usually July-November',
  },
];

const careerPaths = [
  {
    career: 'Software Engineer',
    stream: 'PCM',
    avgSalary: '₹8-40 LPA',
    growth: 'Very High',
    education: 'B.Tech CS/IT',
    icon: Laptop,
  },
  {
    career: 'Doctor (MBBS)',
    stream: 'PCB',
    avgSalary: '₹8-50 LPA',
    growth: 'High',
    education: 'MBBS + MD/MS',
    icon: Stethoscope,
  },
  {
    career: 'Chartered Accountant',
    stream: 'Commerce',
    avgSalary: '₹7-30 LPA',
    growth: 'High',
    education: 'CA',
    icon: Calculator,
  },
  {
    career: 'IAS Officer',
    stream: 'Any',
    avgSalary: '₹8-12 LPA + Perks',
    growth: 'Stable',
    education: 'Any Graduate + UPSC',
    icon: Shield,
  },
  {
    career: 'Lawyer',
    stream: 'Any',
    avgSalary: '₹5-50 LPA',
    growth: 'High',
    education: 'LLB/BA LLB',
    icon: Scale,
  },
  {
    career: 'Data Scientist',
    stream: 'PCM',
    avgSalary: '₹10-50 LPA',
    growth: 'Very High',
    education: 'B.Tech + Skills',
    icon: Brain,
  },
  {
    career: 'Architect',
    stream: 'PCM',
    avgSalary: '₹5-20 LPA',
    growth: 'Moderate',
    education: 'B.Arch',
    icon: Building,
  },
  {
    career: 'Pilot',
    stream: 'PCM',
    avgSalary: '₹15-60 LPA',
    growth: 'High',
    education: 'CPL',
    icon: Plane,
  },
  {
    career: 'Fashion Designer',
    stream: 'Any',
    avgSalary: '₹4-25 LPA',
    growth: 'Moderate',
    education: 'B.Des',
    icon: Palette,
  },
  {
    career: 'Investment Banker',
    stream: 'Commerce',
    avgSalary: '₹15-80 LPA',
    growth: 'Very High',
    education: 'MBA Finance',
    icon: TrendingUp,
  },
  {
    career: 'Journalist',
    stream: 'Arts',
    avgSalary: '₹4-15 LPA',
    growth: 'Moderate',
    education: 'Mass Comm',
    icon: FileText,
  },
  {
    career: 'Psychologist',
    stream: 'Arts',
    avgSalary: '₹4-20 LPA',
    growth: 'High',
    education: 'MA Psychology',
    icon: Brain,
  },
];

const diplomaOptions = [
  {
    name: 'Diploma in Engineering',
    duration: '3 years',
    eligibility: '10th Pass',
    leads: 'Lateral entry to B.Tech 2nd year',
    fields: [
      'Computer Science',
      'Mechanical',
      'Electrical',
      'Civil',
      'Electronics',
    ],
  },
  {
    name: 'ITI Courses',
    duration: '1-2 years',
    eligibility: '8th/10th Pass',
    leads: 'Government & Private Jobs',
    fields: ['Electrician', 'Fitter', 'Mechanic', 'COPA', 'Welder'],
  },
  {
    name: 'Polytechnic',
    duration: '3 years',
    eligibility: '10th Pass',
    leads: 'Junior Engineer Jobs',
    fields: ['All Engineering Branches'],
  },
  {
    name: 'Vocational Courses',
    duration: '6 months - 2 years',
    eligibility: '10th/12th Pass',
    leads: 'Industry Jobs',
    fields: ['Fashion', 'Animation', 'Photography', 'Hotel Management'],
  },
];

const faqs = [
  {
    question:
      'Which stream should I choose after 10th - Science, Commerce, or Arts?',
    answer:
      'Choose based on your interests, not peer pressure or salary expectations. If you love solving problems and math, consider Science (PCM). If biology and healthcare fascinate you, choose Science (PCB). If business and finance interest you, go for Commerce. If you love reading, writing, and social sciences, choose Arts. Take career aptitude tests to understand your strengths.',
  },
  {
    question: 'Can I change my stream after 11th class?',
    answer:
      'Technically possible but not recommended. You would need to restart from 11th or pursue graduation in a different field. Some boards allow changing within a month of admission. Its better to take time initially to choose the right stream. If you must change, consider doing it before 11th final exams.',
  },
  {
    question: 'Is Arts a good career option? What are the job prospects?',
    answer:
      'Absolutely! Arts leads to diverse and prestigious careers including Civil Services (IAS/IPS/IFS), Law, Journalism, Psychology, Teaching, Foreign Services, Film Making, and Design. Many successful administrators, lawyers, and media professionals have Arts backgrounds. The key is excellence in your chosen field.',
  },
  {
    question: 'What are the best competitive exams for school students?',
    answer:
      'NTSE (Class 10) for scholarship, Olympiads (Math, Science, Astronomy) for recognition and learning, JEE Main/Advanced for engineering, NEET for medicine, KVPY/INSPIRE for science fellowships. Start preparing from Class 9-10 for JEE/NEET, and Class 8-9 for NTSE/Olympiads.',
  },
  {
    question: 'How to score 95%+ in board exams?',
    answer:
      'Focus on NCERT thoroughly, practice previous year papers, make short notes for revision, solve sample papers within time limits, maintain consistency in studies, get adequate sleep, and focus on understanding concepts rather than rote learning. Join coaching only if self-study is not working.',
  },
  {
    question: 'Can I do both JEE and NEET preparation together?',
    answer:
      'Not recommended. While Physics and Chemistry overlap, the approach and syllabus depth differ significantly. JEE focuses heavily on Mathematics while NEET requires Biology. Trying both leads to mediocre preparation in both. Choose one based on your interest and focus completely.',
  },
  {
    question: 'What if I dont get into IIT/AIIMS?',
    answer:
      'IIT/AIIMS are not the only paths to success. NITs, IIITs, BITS Pilani, top private colleges offer excellent education. Many successful professionals graduated from non-IIT colleges. Focus on skill development, projects, and internships during college for a successful career.',
  },
  {
    question: 'Is diploma better than regular 12th class?',
    answer:
      'They serve different purposes. Regular 12th is needed for most professional degrees (engineering, medicine, law). Diploma provides technical skills and allows lateral entry to B.Tech 2nd year. If you want quick employment with technical skills, diploma is good. For professional degrees, 12th is required.',
  },
  {
    question: 'How to prepare for NTSE scholarship exam?',
    answer:
      'NTSE has two stages - State level and National level. Focus on MAT (Mental Ability Test) and SAT (Scholastic Aptitude Test). Study NCERT thoroughly for SAT. Practice logical reasoning, patterns, and puzzles for MAT. Solve previous year papers and take mock tests.',
  },
  {
    question: 'What are the study abroad options after 12th?',
    answer:
      'You can pursue undergraduate studies in USA (SAT/ACT + TOEFL), UK (A-levels or IELTS), Canada, Australia, Germany (free education), Singapore, and more. Scholarships like Fulbright, Rhodes, and university-specific aids are available. Start preparation from Class 11 for standardized tests.',
  },
  {
    question:
      'How to manage time between school and competitive exam preparation?',
    answer:
      'Create a realistic timetable balancing both. School curriculum overlaps with competitive exams. Focus on concepts during school, practice competitive problems on weekends and holidays. Avoid sacrificing sleep or health. Quality study of 4-5 focused hours beats 10 hours of distracted study.',
  },
  {
    question: 'Which coaching institute is best for JEE/NEET?',
    answer:
      'No single coaching is "best" - it depends on your location, learning style, and budget. Top names include Allen, FIITJEE, Resonance, Aakash, but success depends on individual effort. Many toppers are self-taught. Online coaching (Unacademy, Physics Wallah) are good alternatives. Choose based on demo classes.',
  },
  {
    question: 'What are emerging careers for school students to explore?',
    answer:
      'AI/ML Engineering, Data Science, Cybersecurity, Robotics, Drone Technology, Electric Vehicle Engineering, Biotechnology, Climate Science, UX Design, Digital Marketing, Content Creation, E-sports, and Space Technology. These fields are growing rapidly and will have high demand.',
  },
  {
    question:
      'How important are extra-curricular activities for college admissions?',
    answer:
      'Very important, especially for abroad and top Indian colleges. Participate in sports, debates, Olympiads, science fairs, cultural events. Leadership roles in clubs add value. For JEE/NEET, rank matters most, but holistic development helps in interviews and personality development.',
  },
  {
    question: 'Can I start a business after 12th instead of college?',
    answer:
      'Legally yes, but education provides foundational knowledge, network, and backup plan. Many successful entrepreneurs studied first. Consider BBA or online courses while building your startup. Education is not opposite to entrepreneurship - it complements it.',
  },
];

const successStories = [
  {
    name: 'Sundar Pichai',
    role: 'CEO, Google',
    education: 'IIT Kharagpur (Metallurgy)',
    story: 'Came from modest background, excelled in academics',
  },
  {
    name: 'Indra Nooyi',
    role: 'Former CEO, PepsiCo',
    education: 'IIM Calcutta',
    story: 'Arts background, rose to lead Fortune 500 company',
  },
  {
    name: 'APJ Abdul Kalam',
    role: 'Former President, Missile Man',
    education: 'MIT Chennai',
    story: 'From newspaper seller to Presidents house',
  },
  {
    name: 'Kiran Mazumdar Shaw',
    role: 'Founder, Biocon',
    education: 'BSc Zoology',
    story: 'Became Indias richest self-made woman',
  },
];

const studyTips = [
  {
    tip: 'Follow the 25-5 Rule',
    description:
      'Study for 25 minutes, take 5 minute break. Repeat 4 times, then take longer break.',
  },
  {
    tip: 'Active Recall',
    description:
      'Test yourself instead of passive reading. Cover notes and try to recall information.',
  },
  {
    tip: 'Spaced Repetition',
    description:
      'Review material at increasing intervals - after 1 day, 3 days, 1 week, 2 weeks.',
  },
  {
    tip: 'Teach Someone',
    description:
      'Explaining concepts to others strengthens your own understanding.',
  },
  {
    tip: 'Make Mind Maps',
    description:
      'Visual representations help connect concepts and improve memory.',
  },
  {
    tip: 'Practice Problems Daily',
    description:
      'For STEM subjects, solving problems daily is more important than reading theory.',
  },
  {
    tip: 'Sleep 7-8 Hours',
    description:
      'Memory consolidation happens during sleep. Never sacrifice sleep for study.',
  },
  {
    tip: 'Exercise Regularly',
    description: '30 minutes of exercise improves concentration and memory.',
  },
];

export default function SchoolPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
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
        name: 'School',
        item: 'https://www.sproutern.com/school',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <GraduationCap className="mr-1 h-3 w-3" />
            For School Students (Class 9-12)
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            School Student Resources
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Complete career guidance from Class 9 onwards. Make informed
            decisions about streams, competitive exams, scholarships, and your
            future career path.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/school/after-10th-guide">
                After 10th Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/school/after-12th-guide">After 12th Guide</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/school/competitive-exams">Exam Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-xs text-muted-foreground">Career Options</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Trophy className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Scholarships</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Calendar className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-xs text-muted-foreground">Competitive Exams</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Globe className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">20+</p>
              <p className="text-xs text-muted-foreground">
                Countries to Study
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Essential Resources for School Students
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to plan your academic journey and career from
            Class 9 to 12.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainResources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
            >
              <Card className="group h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`rounded-lg p-3 ${resource.color} text-white`}
                    >
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{resource.badge}</Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Explore <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Stream Selection Guide */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Compass className="h-4 w-4" />
            Stream Selection
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Which Stream is Right for You?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choosing the right stream after 10th is one of the most important
            decisions. Understand each stream before deciding.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {streamGuide.map((stream) => (
            <Card
              key={stream.stream}
              className="overflow-hidden"
            >
              <CardHeader className={`${stream.color} text-white`}>
                <CardTitle className="flex items-center gap-3">
                  <stream.icon className="h-6 w-6" />
                  {stream.stream}
                </CardTitle>
                <p className="text-sm text-white/80">{stream.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Career Options
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.careers.map((career, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs"
                        >
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold">
                      <Target className="h-4 w-4 text-primary" />
                      Key Exams
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {stream.exams.join(' • ')}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Avg Salary
                      </p>
                      <p className="font-semibold text-green-600">
                        {stream.avgSalary}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        Top Colleges
                      </p>
                      <p className="text-sm">
                        {stream.topColleges[0]}, {stream.topColleges[1]}...
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            size="lg"
            asChild
          >
            <Link href="/school/stream-selection">
              Take Stream Selection Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Career Paths Explorer */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Popular Career Paths</h2>
          <p className="text-muted-foreground">
            Explore high-demand careers and their requirements
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {careerPaths.map((career, index) => (
            <Card
              key={index}
              className="transition-shadow hover:shadow-md"
            >
              <CardContent className="p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <career.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{career.career}</h3>
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {career.stream}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Salary:</span>
                    <span className="font-medium text-green-600">
                      {career.avgSalary}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Growth:</span>
                    <span className="font-medium">{career.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="text-xs font-medium">
                      {career.education}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Exam Calendar */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Exam Planning Windows
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Upcoming Competitive Exams
          </h2>
          <p className="text-muted-foreground">
            Use these typical yearly windows as a planning guide, then verify
            exact dates on the official exam site.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background">
            <thead>
              <tr className="bg-muted">
                <th className="border-b p-4 text-left font-semibold">Exam</th>
                <th className="border-b p-4 text-left font-semibold">Date</th>
                <th className="border-b p-4 text-left font-semibold">
                  Category
                </th>
                <th className="border-b p-4 text-left font-semibold">
                  Registration
                </th>
              </tr>
            </thead>
            <tbody>
              {examCalendar.map((exam, i) => (
                <tr
                  key={i}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="border-b p-4 font-medium">{exam.exam}</td>
                  <td className="border-b p-4">{exam.date}</td>
                  <td className="border-b p-4">
                    <Badge variant="secondary">{exam.category}</Badge>
                  </td>
                  <td className="border-b p-4">
                    <Badge
                      variant={
                        exam.registration === 'Closed'
                          ? 'destructive'
                          : 'outline'
                      }
                    >
                      {exam.registration}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            asChild
          >
            <Link href="/school/competitive-exams">
              View Full Exam Calendar
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Scholarships */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            <Award className="h-4 w-4" />
            Scholarships
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Scholarships for School Students
          </h2>
          <p className="text-muted-foreground">
            Financial support for meritorious students
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scholarships.map((s, i) => (
            <Card
              key={i}
              className="transition-shadow hover:shadow-md"
            >
              <CardContent className="p-4">
                <h3 className="mb-2 font-bold">{s.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-green-600">
                      {s.amount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {s.eligibility}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Deadline: {s.deadline}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/scholarships">
              Explore All Scholarships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Diploma & Alternative Options */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Alternative Career Paths</h2>
          <p className="text-muted-foreground">
            Not interested in regular 11-12th? Explore these options
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {diplomaOptions.map((option, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: {option.duration}
                    </p>
                  </div>
                  <Badge variant="outline">{option.eligibility}</Badge>
                </div>
                <p className="mb-3 text-sm">
                  <span className="font-semibold">Leads to:</span>{' '}
                  {option.leads}
                </p>
                <div className="flex flex-wrap gap-2">
                  {option.fields.map((field, j) => (
                    <Badge
                      key={j}
                      variant="secondary"
                      className="text-xs"
                    >
                      {field}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Tips */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Lightbulb className="h-4 w-4" />
            Study Tips
          </div>
          <h2 className="mb-2 text-3xl font-bold">Proven Study Strategies</h2>
          <p className="text-muted-foreground">
            Science-backed techniques to study smarter
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {studyTips.map((tip, i) => (
            <Card
              key={i}
              className="transition-shadow hover:shadow-md"
            >
              <CardContent className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold">{tip.tip}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools & Utilities */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Quick Tools</h2>
          <p className="text-muted-foreground">
            Calculators and utilities for students
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {toolsAndUtilities.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
            >
              <Card className="h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <h3 className="mb-1 text-sm font-medium">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Success Stories</h2>
          <p className="text-muted-foreground">
            Inspiration from those who made it
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {successStories.map((story, i) => (
            <Card
              key={i}
              className="text-center"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold">{story.name}</h3>
                <p className="mb-2 text-sm text-primary">{story.role}</p>
                <p className="mb-2 text-xs text-muted-foreground">
                  {story.education}
                </p>
                <p className="text-sm italic">"{story.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HelpCircle className="h-4 w-4" />
            FAQs
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common queries answered by experts
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-2 flex items-start gap-2 font-semibold">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="pl-8 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Star className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Start Planning Your Career Early
            </h2>
            <p className="mx-auto mb-6 max-w-2xl opacity-90">
              The earlier you start, the better prepared you'll be. Explore our
              guides, use our tools, and make informed decisions about your
              future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/school/after-10th-guide">
                  Start with After 10th Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/scholarships">Explore Scholarships</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/tools/exam-countdown">Exam Countdown</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
