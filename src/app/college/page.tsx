import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Globe,
  Target,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Laptop,
  Brain,
  Building,
  Code,
  Database,
  FileText,
  Lightbulb,
  MapPin,
  DollarSign,
  Trophy,
  Zap,
  Heart,
  Coffee,
  Book,
  PenTool,
  MessageSquare,
  Shield,
  Rocket,
  HelpCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title:
    'College Student Guide | Semester Planning, Internships & Placements',
  description:
    'Plan college life with semester tools, internship guidance, placement prep, scholarships, study-abroad support, and career planning resources.',
  keywords:
    'college student resources, undergraduate guide, internship tips, college career guidance, semester planner, college to career, study abroad for undergraduates, placement preparation, CGPA calculator, resume builder',
  openGraph: {
    title: 'College Student Guide',
    description:
      'Semester planning, internships, placements, scholarships, and career guidance for college students.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/college',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/college',
  },
};

const mainResources = [
  {
    title: 'Semester Planner',
    description:
      'Plan your semesters, track credits, and organize your complete academic journey.',
    icon: Calendar,
    href: '/college/semester-planner',
    color: 'bg-blue-500',
    badge: 'Tool',
  },
  {
    title: 'College Comparisons',
    description:
      'IIT vs NIT vs IIIT, public vs private - detailed comparison to make informed decisions.',
    icon: Target,
    href: '/college/comparison',
    color: 'bg-purple-500',
    badge: 'Guide',
  },
  {
    title: 'First Year Guide',
    description:
      'Survival tips for freshers - academics, hostel life, clubs, and avoiding common mistakes.',
    icon: Star,
    href: '/college/first-year-guide',
    color: 'bg-green-500',
    badge: 'Essential',
  },
  {
    title: 'Extracurriculars Guide',
    description:
      'Clubs, sports, hackathons, cultural events - build your profile beyond academics.',
    icon: Trophy,
    href: '/college/extracurriculars',
    color: 'bg-orange-500',
    badge: 'Guide',
  },
  {
    title: 'Internship Finder',
    description:
      'Find internships by industry, location, and skill level. Get noticed by top companies.',
    icon: Briefcase,
    href: '/internships',
    color: 'bg-amber-500',
    badge: 'Search',
  },
  {
    title: 'Study Abroad',
    description:
      'MS/MBA abroad, exchange programs, research opportunities in USA, UK, Germany & more.',
    icon: Globe,
    href: '/countries',
    color: 'bg-cyan-500',
    badge: 'Guide',
  },
  {
    title: 'Scholarships',
    description:
      'Merit-based, need-based, and talent scholarships for undergraduate students.',
    icon: Award,
    href: '/scholarships',
    color: 'bg-yellow-500',
    badge: 'Database',
  },
  {
    title: 'Career Roadmaps',
    description:
      'Step-by-step guides for Software, Data Science, Finance, Consulting & more careers.',
    icon: Rocket,
    href: '/roadmaps',
    color: 'bg-red-500',
    badge: 'Paths',
  },
];

const quickTools = [
  {
    title: 'CGPA Converter',
    href: '/tools/cgpa-converter',
    description: 'Convert CGPA to percentage',
  },
  {
    title: 'Resume Builder',
    href: '/tools/resume-builder',
    description: 'ATS-friendly resume',
  },
  {
    title: 'Cold Email Generator',
    href: '/tools/cold-email-generator',
    description: 'Professional outreach',
  },
  {
    title: 'Interview Prep',
    href: '/resources/interview-prep',
    description: 'Practice questions',
  },
  {
    title: 'Company Reviews',
    href: '/companies',
    description: 'Salary & culture info',
  },
  {
    title: 'SOP Generator',
    href: '/tools/sop-generator',
    description: 'Statement of Purpose',
  },
];

const yearGuides = [
  {
    year: '1st Year',
    focus: 'Foundation & Exploration',
    icon: BookOpen,
    color: 'bg-green-500',
    academics: [
      'Focus on CGPA (aim for 8+)',
      'Clear all backlogs immediately',
      'Master fundamentals thoroughly',
      'Attend all lectures',
    ],
    skills: [
      'Learn one programming language well',
      'Start with DSA basics',
      'Explore different domains',
      'Build basic projects',
    ],
    activities: [
      'Join 2-3 clubs maximum',
      'Participate in fresher events',
      'Attend workshops/webinars',
      'Network with seniors',
    ],
    mistakes: [
      'Skipping classes regularly',
      'Ignoring CGPA importance',
      'Not exploring enough',
      'Isolation from peers',
    ],
  },
  {
    year: '2nd Year',
    focus: 'Skill Building & Projects',
    icon: Code,
    color: 'bg-blue-500',
    academics: [
      'Maintain CGPA above 7.5',
      'Choose electives wisely',
      'Start reading research papers',
      'Master core subjects',
    ],
    skills: [
      'Complete DSA thoroughly',
      'Build 3-5 substantial projects',
      'Learn web/mobile/ML basics',
      'Contribute to open source',
    ],
    activities: [
      'Take leadership in clubs',
      'Participate in hackathons',
      'Attend tech conferences',
      'Start networking on LinkedIn',
    ],
    mistakes: [
      'Only focusing on CGPA',
      'Not building projects',
      'Missing hackathons',
      'Not starting internship prep',
    ],
  },
  {
    year: '3rd Year',
    focus: 'Internships & Growth',
    icon: Briefcase,
    color: 'bg-purple-500',
    academics: [
      'Maintain consistent CGPA',
      'Select specialization electives',
      'Consider minor degrees',
      'Research opportunities',
    ],
    skills: [
      'Master 2-3 technologies deeply',
      'Build impressive portfolio',
      'Practice system design',
      'Strong problem-solving',
    ],
    activities: [
      'Get quality internship',
      'Apply for research programs',
      'Build professional network',
      'Start placement prep early',
    ],
    mistakes: [
      'Settling for poor internship',
      'Not building portfolio',
      'Ignoring soft skills',
      'Late placement prep',
    ],
  },
  {
    year: 'Final Year',
    focus: 'Placements & Future',
    icon: Target,
    color: 'bg-orange-500',
    academics: [
      'Complete all requirements',
      'Strong final year project',
      'Prepare for GATE if needed',
      'Research thesis work',
    ],
    skills: [
      'Interview preparation',
      'System design mastery',
      'Behavioral questions prep',
      'Negotiation skills',
    ],
    activities: [
      'Campus placements focus',
      'Off-campus applications',
      'Higher studies applications',
      'Networking intensively',
    ],
    mistakes: [
      'Poor interview prep',
      'Ignoring off-campus',
      'Weak final project',
      'Missing application deadlines',
    ],
  },
];

const placementStats = [
  {
    company: 'Google',
    role: 'SDE',
    package: '₹45-65 LPA',
    requirements: 'Strong DSA, System Design, Coding',
  },
  {
    company: 'Microsoft',
    role: 'SDE',
    package: '₹40-55 LPA',
    requirements: 'DSA, OOP, Projects',
  },
  {
    company: 'Amazon',
    role: 'SDE',
    package: '₹35-50 LPA',
    requirements: 'DSA, Leadership Principles',
  },
  {
    company: 'Goldman Sachs',
    role: 'Analyst',
    package: '₹30-45 LPA',
    requirements: 'DSA, Finance basics, Aptitude',
  },
  {
    company: 'Flipkart',
    role: 'SDE',
    package: '₹25-40 LPA',
    requirements: 'DSA, System Design',
  },
  {
    company: 'Uber',
    role: 'SDE',
    package: '₹30-45 LPA',
    requirements: 'DSA, Problem Solving',
  },
  {
    company: 'Atlassian',
    role: 'SDE',
    package: '₹35-50 LPA',
    requirements: 'DSA, Values Fit',
  },
  {
    company: 'Oracle',
    role: 'SDE',
    package: '₹15-25 LPA',
    requirements: 'Java, DBMS, DSA',
  },
];

const internshipTips = [
  {
    tip: 'Start Early',
    description:
      'Apply 4-6 months before the internship period. Companies fill spots quickly.',
    icon: Clock,
  },
  {
    tip: 'Build Projects',
    description:
      'Real projects > Certifications. Show what you can build, not just what you know.',
    icon: Code,
  },
  {
    tip: 'Cold Email',
    description:
      'Reach out directly to hiring managers. 50+ targeted emails can land interviews.',
    icon: MessageSquare,
  },
  {
    tip: 'LinkedIn Game',
    description:
      'Optimize profile, connect with recruiters, engage with industry content daily.',
    icon: Users,
  },
  {
    tip: 'Referrals',
    description:
      'Alumni and seniors can refer you. Networking increases success rate by 10x.',
    icon: Star,
  },
  {
    tip: 'Interview Prep',
    description:
      'Practice 200+ DSA problems, mock interviews, and behavioral questions.',
    icon: Target,
  },
];

const skillRoadmaps = [
  {
    path: 'Software Development',
    skills: ['DSA', 'OOP', 'System Design', 'Git', 'APIs', 'Testing'],
    timeline: '6-12 months',
    demand: 'Very High',
  },
  {
    path: 'Data Science',
    skills: [
      'Python',
      'Statistics',
      'ML',
      'SQL',
      'Visualization',
      'Deep Learning',
    ],
    timeline: '8-12 months',
    demand: 'Very High',
  },
  {
    path: 'Product Management',
    skills: [
      'User Research',
      'Analytics',
      'Roadmapping',
      'SQL',
      'Communication',
      'Strategy',
    ],
    timeline: '6-9 months',
    demand: 'High',
  },
  {
    path: 'Consulting',
    skills: [
      'Case Studies',
      'Frameworks',
      'Excel',
      'PowerPoint',
      'Communication',
      'Business Acumen',
    ],
    timeline: '4-6 months',
    demand: 'High',
  },
  {
    path: 'Finance',
    skills: [
      'Accounting',
      'Valuation',
      'Excel',
      'Financial Modeling',
      'Market Analysis',
      'CFA Prep',
    ],
    timeline: '6-12 months',
    demand: 'High',
  },
  {
    path: 'UI/UX Design',
    skills: [
      'Figma',
      'User Research',
      'Prototyping',
      'Design Systems',
      'Usability',
      'Portfolio',
    ],
    timeline: '4-8 months',
    demand: 'High',
  },
];

const cgpaGuide = [
  {
    cgpa: '9.0 - 10.0',
    interpretation: 'Excellent',
    opportunities: 'All companies, research, top MS programs',
    tips: 'Maintain quality, focus on skills too',
  },
  {
    cgpa: '8.0 - 8.9',
    interpretation: 'Very Good',
    opportunities: 'Most top companies, good MS programs',
    tips: 'Good balance, keep building projects',
  },
  {
    cgpa: '7.0 - 7.9',
    interpretation: 'Good',
    opportunities: 'Most companies, decent MS programs',
    tips: 'Focus on skills and projects to compensate',
  },
  {
    cgpa: '6.0 - 6.9',
    interpretation: 'Average',
    opportunities: 'Many companies, some cutoff issues',
    tips: 'Strong skills can overcome CGPA barrier',
  },
  {
    cgpa: 'Below 6.0',
    interpretation: 'Below Average',
    opportunities: 'Limited on-campus, off-campus focus',
    tips: 'Build exceptional skills and portfolio',
  },
];

const scholarships = [
  {
    name: 'INSPIRE Fellowship',
    amount: '₹80,000/year',
    eligibility: 'Top 1% in 12th, pursuing science',
    deadline: 'After 12th results',
  },
  {
    name: 'AICTE Pragati/Saksham',
    amount: '₹50,000/year',
    eligibility: 'Female/Differently abled engineering students',
    deadline: 'September',
  },
  {
    name: 'Central Sector Scholarship',
    amount: '₹10,000-20,000/year',
    eligibility: 'Top 20% in 12th, family income < 8 LPA',
    deadline: 'October',
  },
  {
    name: 'Merit Cum Means',
    amount: 'Varies by college',
    eligibility: 'Good academics + financial need',
    deadline: 'Varies',
  },
  {
    name: 'Google Scholarships',
    amount: 'Multiple programs',
    eligibility: 'CS students, various criteria',
    deadline: 'Multiple',
  },
  {
    name: 'Microsoft Scholarship',
    amount: 'Up to $5000',
    eligibility: 'STEM undergraduates',
    deadline: 'February',
  },
];

const studyAbroadOptions = [
  {
    country: 'USA',
    programs: 'MS, PhD, Research',
    exams: 'GRE, TOEFL',
    cost: '$30-80k/year',
    opportunity: 'CPT, OPT work visa',
  },
  {
    country: 'Germany',
    programs: 'MS, Research',
    exams: 'GRE (some), IELTS',
    cost: 'Free tuition + €10k living',
    opportunity: '18-month job search visa',
  },
  {
    country: 'Canada',
    programs: 'MS, MBA',
    exams: 'GRE/GMAT, IELTS',
    cost: 'CAD 20-50k/year',
    opportunity: 'PGWP, PR pathway',
  },
  {
    country: 'UK',
    programs: 'MS (1 year)',
    exams: 'IELTS, Some GRE',
    cost: '£20-35k/year',
    opportunity: '2-year Graduate Route',
  },
  {
    country: 'Australia',
    programs: 'MS, Research',
    exams: 'IELTS, Some GRE',
    cost: 'AUD 30-50k/year',
    opportunity: 'Post-study work rights',
  },
];

const faqs = [
  {
    question: 'How important is CGPA for placements?',
    answer:
      'Most companies have 6.0-7.0 CGPA cutoff. Top companies rarely reject solely on CGPA if you have strong skills. However, higher CGPA (8+) opens more doors initially. Focus on both academics and skills.',
  },
  {
    question: 'When should I start placement preparation?',
    answer:
      'Ideally from 2nd year. Complete DSA by end of 2nd year, build projects in 3rd year, and focus on interview prep in 3rd-4th year. Starting 6 months before placements is too late for most students.',
  },
  {
    question: 'Should I do multiple internships or one long internship?',
    answer:
      'Quality over quantity. One 6-month internship at a good company is better than three 1-month internships. However, 2-3 diverse internships can help if you are exploring different domains.',
  },
  {
    question: 'Is it worth doing MS abroad?',
    answer:
      'Depends on goals. For research, academia, or US tech jobs, MS is valuable. ROI takes 3-5 years. Consider loans and living costs. Germany offers free education if budget is a concern.',
  },
  {
    question: 'How to balance academics and competitive coding?',
    answer:
      'Dedicate 1-2 hours daily to CP, more on weekends. Use summer vacations intensively. Dont sacrifice academics completely - maintain 7+ CGPA. CP helps in interviews but is not the only path.',
  },
  {
    question: 'What if I dont get placed on campus?',
    answer:
      'Off-campus opportunities are plenty. Apply on LinkedIn, company career pages, AngelList for startups. Build network, get referrals. Many successful engineers got their first job off-campus.',
  },
  {
    question: 'Should I join clubs or focus only on academics?',
    answer:
      'Join 2-3 clubs maximum. Leadership roles in clubs demonstrate soft skills valued by companies. But dont overcommit - academics and skills should not suffer. Quality involvement > quantity.',
  },
  {
    question: 'How to get into product-based companies?',
    answer:
      'Focus on DSA (400+ problems), system design basics, build 3-5 good projects, practice mock interviews, apply early and widely. Referrals help. Persistence is key - many got in after multiple attempts.',
  },
  {
    question: 'Is GATE worth it if I want to work?',
    answer:
      'For PSU jobs, GATE is essential. For MTech at IITs, GATE is the path. For private sector, GATE score rarely matters. Decide based on career goals - PSU/MTech vs private sector.',
  },
  {
    question: 'How to choose between higher studies and job?',
    answer:
      'Consider: financial situation, career goals, domain interest, risk appetite. Job gives immediate income and experience. Higher studies (MS/MBA) can accelerate growth but involves cost and opportunity loss.',
  },
];

const successTips = [
  {
    tip: 'Compound Small Actions',
    description:
      '1 hour daily of focused study compounds to 365 hours/year of expertise.',
    icon: TrendingUp,
  },
  {
    tip: 'Build in Public',
    description:
      'Share learnings on LinkedIn/Twitter. Visibility helps in job search and networking.',
    icon: Globe,
  },
  {
    tip: 'Find Your Community',
    description:
      'Join Discord/Slack groups of learners. Peer learning accelerates growth.',
    icon: Users,
  },
  {
    tip: 'Learn by Teaching',
    description:
      'Explain concepts to juniors. Teaching deepens your own understanding.',
    icon: Book,
  },
  {
    tip: 'Focus on Fundamentals',
    description:
      'Trends change, fundamentals dont. Master DSA, system concepts, CS basics.',
    icon: Brain,
  },
  {
    tip: 'Take Care of Health',
    description:
      'Sleep, exercise, nutrition affect cognitive performance. Dont sacrifice health.',
    icon: Heart,
  },
];

export default function CollegePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'College',
        item: 'https://sproutern.dpdns.org/college',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <GraduationCap className="mr-1 h-4 w-4" />
            For Undergraduate Students
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            College Student Resources
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            From your first semester to placement season - everything you need
            for academic excellence, skill development, and career success. Your
            complete guide to navigating college life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/college/first-year-guide">
                First Year Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/internships">Find Internships</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/college/comparison">Compare Colleges</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-xs text-muted-foreground">
                Internships Listed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">₹50 LPA+</p>
              <p className="text-xs text-muted-foreground">Top Packages</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Globe className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">20+</p>
              <p className="text-xs text-muted-foreground">Countries for MS</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Award className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-xs text-muted-foreground">Scholarships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Essential Resources</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need from semester 1 to placement day
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Year-wise Guide */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Year-by-Year Roadmap
          </div>
          <h2 className="mb-2 text-3xl font-bold">Complete College Roadmap</h2>
          <p className="text-muted-foreground">
            What to do in each year for maximum success
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {yearGuides.map((guide, index) => (
            <Card
              key={guide.year}
              className="overflow-hidden"
            >
              <CardHeader className={`${guide.color} text-white`}>
                <CardTitle className="flex items-center gap-3">
                  <guide.icon className="h-6 w-6" />
                  {guide.year}
                </CardTitle>
                <p className="text-sm text-white/80">{guide.focus}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                      Academics
                    </h4>
                    <ul className="space-y-1">
                      {guide.academics.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="mt-1 h-3 w-3 flex-shrink-0 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold">
                      <Code className="h-4 w-4 text-purple-600" />
                      Skills
                    </h4>
                    <ul className="space-y-1">
                      {guide.skills.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="mt-1 h-3 w-3 flex-shrink-0 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-600">
                    <Shield className="h-4 w-4" />
                    Avoid These Mistakes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.mistakes.map((m, i) => (
                      <Badge
                        key={i}
                        variant="destructive"
                        className="text-xs"
                      >
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Placement Preparation */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Top Company Packages</h2>
          <p className="text-muted-foreground">
            What it takes to get into top companies
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 text-left font-semibold">Company</th>
                <th className="p-4 text-left font-semibold">Role</th>
                <th className="p-4 text-left font-semibold">Package</th>
                <th className="p-4 text-left font-semibold">Requirements</th>
              </tr>
            </thead>
            <tbody>
              {placementStats.map((item, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 font-medium">{item.company}</td>
                  <td className="p-4">{item.role}</td>
                  <td className="p-4 font-semibold text-green-600">
                    {item.package}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {item.requirements}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Internship Tips */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            How to Get Good Internships
          </h2>
          <p className="text-muted-foreground">
            Proven strategies for landing quality internships
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {internshipTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{tip.tip}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skill Roadmaps */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Career Skill Roadmaps</h2>
          <p className="text-muted-foreground">
            What to learn for different career paths
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillRoadmaps.map((path, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-bold">{path.path}</h3>
                  <Badge
                    variant={
                      path.demand === 'Very High' ? 'default' : 'secondary'
                    }
                  >
                    {path.demand} Demand
                  </Badge>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {path.skills.map((skill, j) => (
                    <Badge
                      key={j}
                      variant="outline"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Timeline: {path.timeline}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/roadmaps">
              View Detailed Roadmaps
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CGPA Guide */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Understanding CGPA</h2>
          <p className="text-muted-foreground">
            What different CGPA ranges mean for your career
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {cgpaGuide.map((item, i) => (
            <Card
              key={i}
              className={
                i === 0 ? 'border-green-500' : i === 4 ? 'border-red-500' : ''
              }
            >
              <CardContent className="p-4 text-center">
                <p className="mb-1 text-2xl font-bold">{item.cgpa}</p>
                <p className="mb-2 text-sm font-medium text-primary">
                  {item.interpretation}
                </p>
                <p className="mb-2 text-xs text-muted-foreground">
                  {item.opportunities}
                </p>
                <p className="text-xs italic">{item.tips}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            asChild
          >
            <Link href="/tools/cgpa-converter">
              CGPA Converter Tool
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Study Abroad */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
            <Globe className="h-4 w-4" />
            Study Abroad
          </div>
          <h2 className="mb-2 text-3xl font-bold">MS/MBA Abroad Options</h2>
          <p className="text-muted-foreground">
            Top destinations for higher studies
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {studyAbroadOptions.map((country, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-bold">{country.country}</h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Programs:</span>{' '}
                    {country.programs}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Exams:</span>{' '}
                    {country.exams}
                  </p>
                  <p>
                    <span className="text-muted-foreground">Cost:</span>{' '}
                    {country.cost}
                  </p>
                  <p className="mt-2 text-xs text-primary">
                    {country.opportunity}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/countries">
              Explore Country Guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Tools */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Quick Tools</h2>
          <p className="text-muted-foreground">
            Useful utilities for college students
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {quickTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
            >
              <Card className="h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium">{tool.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Success Tips */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Success Tips from Seniors</h2>
          <p className="text-muted-foreground">Wisdom from those who made it</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {successTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="rounded-lg bg-green-50 p-2 dark:bg-green-950">
                  <tip.icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{tip.tip}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
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
            <Rocket className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Start Your Career Journey?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl opacity-90">
              Explore internships, build your resume, prepare for placements,
              and achieve your career goals with our free tools and guides.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/tools">
                  Explore All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/internships">Browse Internships</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
