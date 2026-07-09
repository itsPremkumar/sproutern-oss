import { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Building2,
  Users,
  MapPin,
  Briefcase,
  ExternalLink,
  IndianRupee,
  GraduationCap,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Heart,
  Globe,
  Code,
  Cloud,
  Gamepad2,
  FileText,
  MessageSquare,
  Target,
  Zap,
  BookOpen,
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  Shield,
  Cpu,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Microsoft Careers | Jobs, Salary & Interview Guide',
  description:
    'Complete guide to Microsoft careers. Explore Microsoft salary structure, interview process, work culture, job roles, and tips to get hired at Microsoft.',
  keywords:
    'microsoft careers, microsoft salary, microsoft interview questions, microsoft jobs, microsoft, azure careers, microsoft hiring process, microsoft work culture',
  openGraph: {
    title: 'Microsoft Careers - Complete Guide',
    description:
      'Everything you need to know about working at Microsoft - salaries, interview process, culture, and how to get hired.',
    type: 'article',
    url: 'https://www.sproutern.com/companies/microsoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Careers - Jobs, Salary & Interview Guide',
    description:
      'Complete guide to Microsoft careers, salary, and interview process.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/companies/microsoft',
  },
};

// Salary data for different roles
const salaryData = [
  {
    role: 'Software Engineer (SDE)',
    level: 'L59-60',
    experience: '0-2 years',
    ctc: '₹22-35 LPA',
    base: '₹18-28 LPA',
    stocks: '₹3-5 LPA',
    bonus: '₹2-3 LPA',
  },
  {
    role: 'Software Engineer II',
    level: 'L61-62',
    experience: '2-5 years',
    ctc: '₹35-55 LPA',
    base: '₹28-42 LPA',
    stocks: '₹5-10 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Senior Software Engineer',
    level: 'L63-64',
    experience: '5-9 years',
    ctc: '₹55-85 LPA',
    base: '₹42-60 LPA',
    stocks: '₹10-18 LPA',
    bonus: '₹5-8 LPA',
  },
  {
    role: 'Principal Engineer',
    level: 'L65-66',
    experience: '9-14 years',
    ctc: '₹85-130 LPA',
    base: '₹60-85 LPA',
    stocks: '₹18-35 LPA',
    bonus: '₹8-12 LPA',
  },
  {
    role: 'Partner/Distinguished Engineer',
    level: 'L67+',
    experience: '14+ years',
    ctc: '₹1.3-2 Cr+',
    base: '₹85-120 LPA',
    stocks: '₹40-70 LPA',
    bonus: '₹12-20 LPA',
  },
  {
    role: 'Program Manager',
    level: 'L60-62',
    experience: '2-5 years',
    ctc: '₹30-50 LPA',
    base: '₹24-38 LPA',
    stocks: '₹4-8 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Senior PM',
    level: 'L63-64',
    experience: '5-9 years',
    ctc: '₹50-80 LPA',
    base: '₹38-55 LPA',
    stocks: '₹8-18 LPA',
    bonus: '₹4-7 LPA',
  },
  {
    role: 'Data Scientist',
    level: 'L60-62',
    experience: '2-5 years',
    ctc: '₹32-52 LPA',
    base: '₹25-40 LPA',
    stocks: '₹5-9 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Applied Scientist',
    level: 'L63-65',
    experience: '5-10 years',
    ctc: '₹55-100 LPA',
    base: '₹42-70 LPA',
    stocks: '₹10-22 LPA',
    bonus: '₹5-10 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'M1-M2',
    experience: '10+ years',
    ctc: '₹90-150 LPA',
    base: '₹65-100 LPA',
    stocks: '₹20-40 LPA',
    bonus: '₹10-15 LPA',
  },
];

// Interview rounds
const interviewRounds = [
  {
    round: 1,
    name: 'Online Assessment',
    duration: '60-90 minutes',
    description:
      'Coding assessment on CodeSignal or Codility. Typically 2-3 algorithmic problems ranging from medium to hard difficulty.',
    tips: [
      'Practice array, string, and tree problems',
      'Focus on optimal time complexity',
      'Write clean, well-commented code',
      'Test with edge cases before submitting',
    ],
  },
  {
    round: 2,
    name: 'Technical Phone Screen',
    duration: '45-60 minutes',
    description:
      'Live coding interview on CoderPad or similar. Problem-solving discussion with an engineer from the team.',
    tips: [
      'Communicate your thought process clearly',
      'Ask clarifying questions',
      'Start with brute force, then optimize',
      'Discuss trade-offs openly',
    ],
  },
  {
    round: 3,
    name: 'Virtual Onsite - Coding 1',
    duration: '60 minutes',
    description:
      'First of 4-5 onsite rounds. Deep dive into data structures and algorithms with coding.',
    tips: [
      'Master trees, graphs, and DP',
      'Practice on whiteboard or shared editor',
      'Verify solution with test cases',
      'Explain complexity analysis',
    ],
  },
  {
    round: 4,
    name: 'Virtual Onsite - Coding 2',
    duration: '60 minutes',
    description:
      'Second coding round with a different interviewer. May include object-oriented design.',
    tips: [
      'Review SOLID principles',
      'Practice design problems',
      'Think about extensibility',
      'Use design patterns appropriately',
    ],
  },
  {
    round: 5,
    name: 'System Design',
    duration: '60 minutes',
    description:
      'Design a large-scale distributed system. Required for senior roles (L62+).',
    tips: [
      'Start with requirements gathering',
      'Draw clear architecture diagrams',
      'Discuss scalability and reliability',
      'Know Microsoft Azure services',
    ],
  },
  {
    round: 6,
    name: 'Behavioral (As Appropriate)',
    duration: '45 minutes',
    description:
      'Assessment of Microsoft values alignment, leadership, and collaboration skills.',
    tips: [
      'Prepare STAR format stories',
      'Know Microsoft&apos;s mission and values',
      'Show growth mindset examples',
      'Demonstrate customer focus',
    ],
  },
  {
    round: 7,
    name: 'Hiring Manager / AA',
    duration: '45 minutes',
    description:
      'Final conversation with hiring manager or "As Appropriate" interviewer who makes the final recommendation.',
    tips: [
      'Show genuine interest in the team',
      'Ask thoughtful questions',
      'Be prepared for any topic',
      'Summarize your strengths clearly',
    ],
  },
];

// Microsoft Teams/Divisions
const teams = [
  {
    name: 'Azure & Cloud',
    icon: Cloud,
    description:
      'Build and scale Azure, the world&apos;s second-largest cloud platform. Work on infrastructure, AI services, databases, and enterprise solutions.',
    roles: ['Cloud Engineer', 'SRE', 'Solutions Architect', 'Backend Engineer'],
    tech: ['C#', '.NET', 'Azure', 'Kubernetes', 'Go', 'Python'],
  },
  {
    name: 'Microsoft 365',
    icon: FileText,
    description:
      'Develop Office applications (Word, Excel, PowerPoint), Teams, and enterprise productivity tools used by billions.',
    roles: ['Software Engineer', 'Frontend Engineer', 'PM', 'UX Designer'],
    tech: ['TypeScript', 'React', 'C++', 'C#', '.NET'],
  },
  {
    name: 'LinkedIn',
    icon: Users,
    description:
      'Build the world&apos;s largest professional network. Work on feed, search, messaging, and data infrastructure.',
    roles: ['Software Engineer', 'ML Engineer', 'Data Engineer', 'PM'],
    tech: ['Java', 'Scala', 'Python', 'Kafka', 'Spark'],
  },
  {
    name: 'Xbox & Gaming',
    icon: Gamepad2,
    description:
      'Create next-generation gaming experiences. Work on Xbox consoles, Game Pass, and cloud gaming.',
    roles: ['Game Developer', 'Graphics Engineer', 'Backend Engineer'],
    tech: ['C++', 'C#', 'DirectX', 'Unity', 'Unreal'],
  },
  {
    name: 'AI & Research',
    icon: Cpu,
    description:
      'Pioneer AI research and products including Copilot, OpenAI integration, and Microsoft Research.',
    roles: ['Research Scientist', 'Applied Scientist', 'ML Engineer'],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'C++'],
  },
  {
    name: 'Security',
    icon: Shield,
    description:
      'Protect Microsoft and customers with Defender, Sentinel, and identity solutions.',
    roles: ['Security Engineer', 'Threat Researcher', 'Identity Engineer'],
    tech: ['C#', 'Python', 'Azure', 'ML', 'Cloud Security'],
  },
  {
    name: 'Data & Analytics',
    icon: Database,
    description:
      'Build Power BI, Azure Synapse, and data platform solutions enabling insights at scale.',
    roles: ['Data Engineer', 'Analytics Engineer', 'PM', 'Backend Engineer'],
    tech: ['SQL', 'Spark', 'Python', 'Azure Data Factory', 'Power BI'],
  },
  {
    name: 'Dynamics 365',
    icon: Briefcase,
    description:
      'Develop enterprise business applications for CRM, ERP, and business intelligence.',
    roles: ['Software Engineer', 'Consultant', 'Solutions Architect'],
    tech: ['C#', '.NET', 'TypeScript', 'Azure', 'Dataverse'],
  },
];

// Benefits
const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Comprehensive medical insurance for family',
      'Dental and vision coverage',
      'Mental health support (LYRA)',
      'On-site health centers',
      'Fitness reimbursement',
      'Life and disability insurance',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off & Flexibility',
    items: [
      'Unlimited discretionary time off',
      'Paid parental leave (20 weeks)',
      'Caregiver leave',
      'Bereavement leave',
      'Sabbatical after 8 years',
      'Flexible work arrangements',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Financial Benefits',
    items: [
      'Competitive base salary',
      'Annual performance bonus',
      'Stock awards (RSUs)',
      'Employee Stock Purchase Plan',
      'Retirement benefits',
      'Relocation assistance',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learning & Growth',
    items: [
      'Education reimbursement',
      'LinkedIn Learning access',
      'Internal career development',
      'Conference attendance',
      'Certification support',
      'Internal mobility programs',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Setup',
    items: [
      'Latest Surface devices',
      'Home office allowance',
      'Hybrid work model',
      'Modern office spaces',
      'Ergonomic equipment',
      'Software subscriptions',
    ],
  },
  {
    icon: Coffee,
    title: 'Office Perks',
    items: [
      'Free meals and snacks',
      'On-site cafeteria',
      'Game rooms',
      'Team events and offsites',
      'Employee discounts',
      'Transportation allowance',
    ],
  },
];

// FAQs
const faqs = [
  {
    question: 'What is the interview process at Microsoft?',
    answer:
      'Microsoft typically has 5-7 rounds: Online Assessment, Phone Screen, and 4-5 Virtual Onsite rounds (2-3 Coding, System Design for senior roles, Behavioral, and Hiring Manager). The process takes 3-6 weeks.',
  },
  {
    question: 'What is the salary for freshers at Microsoft?',
    answer:
      'Fresh graduates joining as SDE (L59-60) can expect competitive compensation at Microsoft. This includes base salary, RSU stocks, and annual bonus. Campus hires from top universities may receive higher offers.',
  },
  {
    question: 'What is Microsoft&apos;s level system?',
    answer:
      'Microsoft uses levels from 59 (entry) to 80+ (CVP). SDE starts at L59-60, SDE II is L61-62, Senior is L63-64, Principal is L65-66, Partner is L67+. Each level has defined impact expectations.',
  },
  {
    question: 'Does Microsoft hire from campus placements?',
    answer:
      'Yes, Microsoft actively recruits from top engineering colleges including IITs, NITs, BITS, and other premier institutions. They also have the Microsoft Engage internship program for pre-final year students.',
  },
  {
    question: 'What is the work culture like at Microsoft?',
    answer:
      'Microsoft emphasizes a "growth mindset" culture. The environment is collaborative, intellectually challenging, and focused on impact. They offer excellent work-life balance with flexible/hybrid work arrangements.',
  },
  {
    question: 'Which programming languages should I learn for Microsoft?',
    answer:
      'Core languages: C#, .NET for most teams. JavaScript/TypeScript for frontend and Office. Python for ML/Data Science. C++ for performance-critical systems. Java/Scala for LinkedIn. Focus on DSA and system design fundamentals.',
  },
  {
    question: 'How competitive is getting into Microsoft?',
    answer:
      'Microsoft is highly competitive with an acceptance rate of roughly 2-3% for experienced hires. Strong DSA skills, system design knowledge, and cultural fit are crucial. Practice LeetCode medium/hard problems extensively.',
  },
  {
    question: 'What are Microsoft office locations?',
    answer:
      'Microsoft has major development centers in Redmond, Hyderabad, Bangalore, and other global locations. Hyderabad and Bangalore are key R&D hubs.',
  },
  {
    question: 'What is the stock vesting schedule at Microsoft?',
    answer:
      'Microsoft RSUs vest over 4-5 years depending on the grant. Annual stock refreshers are given based on performance. ESPP allows purchasing stock at 10% discount.',
  },
  {
    question: 'Can I transfer offices at Microsoft?',
    answer:
      'Yes, internal transfers are possible after 1+ years. You can apply to positions globally on the internal job portal (MSFT Careers). Transfer depends on business needs and performance.',
  },
];

// Hiring tips
const hiringTips = [
  {
    icon: Target,
    title: 'Master Data Structures & Algorithms',
    description:
      'Microsoft interviews are DSA-heavy. Practice LeetCode medium/hard, especially trees, graphs, dynamic programming, and string manipulation.',
  },
  {
    icon: Code,
    title: 'Learn System Design',
    description:
      'Required for L62+ roles. Study distributed systems, scalability, Azure services, and practice designing systems like Twitter, Uber, or Netflix.',
  },
  {
    icon: MessageSquare,
    title: 'Demonstrate Growth Mindset',
    description:
      'Microsoft&apos;s core value. Show examples of learning from failures, embracing challenges, and helping others grow.',
  },
  {
    icon: Star,
    title: 'Know Microsoft Products',
    description:
      'Understand the team&apos;s products you&apos;re interviewing for. Use Azure, Office, or relevant technologies and have improvement ideas.',
  },
  {
    icon: Users,
    title: 'Prepare Behavioral Stories',
    description:
      'Use STAR format. Prepare stories for leadership, conflict resolution, customer obsession, and dealing with ambiguity.',
  },
  {
    icon: TrendingUp,
    title: 'Show Impact',
    description:
      'Quantify your achievements. Microsoft values people who drive significant impact and can articulate their contributions clearly.',
  },
];

export default function MicrosoftCareersPage() {
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
        name: 'Companies',
        item: 'https://www.sproutern.com/companies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Microsoft',
        item: 'https://www.sproutern.com/companies/microsoft',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Microsoft Corporation',
    url: 'https://www.microsoft.com',
    description:
      'Microsoft develops, manufactures, licenses, supports, and sells computer software and services.',
    foundingDate: '1975',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 220000 },
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative py-16 md:py-24">
          <Link
            href="/companies"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← Back to Companies
          </Link>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                Technology Leader
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Microsoft Careers
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Empower every person and organization on the planet to achieve
                more. Build products used by billions with one of the
                world&apos;s most valuable companies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  <a
                    href="https://careers.microsoft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Open Positions
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <a href="#salaries">View Salaries</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Building2 className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Founded</p>
                <p className="text-2xl font-bold text-white">1975</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">2.2 Lakh+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Office Locations</p>
                <p className="text-2xl font-bold text-white">
                  Hyderabad, Bangalore
                </p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Glassdoor Rating</p>
                <p className="text-2xl font-bold text-white">4.2 ★</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                ₹22 LPA - ₹2 Cr+
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3-6 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-7 Rounds</p>
              <p className="text-sm text-muted-foreground">Interview Rounds</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Hybrid</p>
              <p className="text-sm text-muted-foreground">Work Model</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Microsoft */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Microsoft</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Microsoft Corporation is one of the world&apos;s most valuable and
              influential technology companies. Founded by Bill Gates and Paul
              Allen in 1975, Microsoft has shaped the personal computing
              revolution and continues to lead in cloud computing, productivity
              software, gaming, and artificial intelligence.
            </p>
            <p>
              Microsoft Development Centers are major R&D hubs. With campuses in
              Hyderabad and Bangalore, thousands of engineers work on core
              products including Azure, Microsoft 365, Dynamics 365, and AI
              services that power businesses worldwide.
            </p>
            <p>
              Under CEO Satya Nadella&apos;s leadership (himself an IDC
              alumnus), Microsoft embraced a &quot;growth mindset&quot; culture
              that values learning, collaboration, and customer obsession. The
              company has successfully transformed from a Windows-centric
              company to a cloud-first, AI-powered technology leader.
            </p>
          </div>

          {/* Company Mission */}
          <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
            <h3 className="mb-2 text-xl font-semibold text-blue-800 dark:text-blue-200">
              Microsoft&apos;s Mission
            </h3>
            <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
              &quot;To empower every person and every organization on the planet
              to achieve more.&quot;
            </p>
          </div>

          {/* Core Values */}
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold">
              Core Values & Culture
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-blue-600">
                  Growth Mindset
                </h4>
                <p className="text-sm text-muted-foreground">
                  Learn from failures, embrace challenges, and continuously
                  improve yourself and others.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-blue-600">
                  Customer Obsession
                </h4>
                <p className="text-sm text-muted-foreground">
                  Start with customers and work backwards. Deliver solutions
                  that truly matter.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-blue-600">
                  One Microsoft
                </h4>
                <p className="text-sm text-muted-foreground">
                  Collaborate across teams to deliver integrated solutions. We
                  win as one company.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teams at Microsoft */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Teams at Microsoft</h2>
              <p className="text-muted-foreground">
                Explore diverse engineering opportunities across
                Microsoft&apos;s product portfolio
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {teams.map((team) => (
                <Card
                  key={team.name}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
                      <team.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{team.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {team.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <p className="mb-1 text-xs font-medium">Roles:</p>
                      <div className="flex flex-wrap gap-1">
                        {team.roles.slice(0, 3).map((role) => (
                          <Badge
                            key={role}
                            variant="secondary"
                            className="text-xs"
                          >
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium">Tech:</p>
                      <div className="flex flex-wrap gap-1">
                        {team.tech.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Salary Section */}
      <section
        id="salaries"
        className="container py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Microsoft India Salary Structure
            </h2>
            <p className="text-muted-foreground">
              Comprehensive salary data with Microsoft&apos;s level system
            </p>
          </div>

          {/* Salary highlights */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
              <p className="text-sm text-green-700 dark:text-green-400">
                Entry Level (SDE L59-60)
              </p>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                ₹22-35 LPA
              </p>
              <p className="text-xs text-green-600">0-2 years experience</p>
            </Card>
            <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Senior Level (L63-64)
              </p>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                ₹55-85 LPA
              </p>
              <p className="text-xs text-blue-600">5-9 years experience</p>
            </Card>
            <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Principal+ (L65+)
              </p>
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                ₹85 LPA - ₹2 Cr+
              </p>
              <p className="text-xs text-purple-600">9+ years experience</p>
            </Card>
          </div>

          {/* Detailed salary table */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Salary Breakdown by Level</CardTitle>
              <CardDescription>
                *Includes base, stocks, and bonus. Varies by team and
                performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-semibold">Role</th>
                      <th className="p-3 text-left font-semibold">Level</th>
                      <th className="p-3 text-left font-semibold">
                        Experience
                      </th>
                      <th className="p-3 text-left font-semibold">Total CTC</th>
                      <th className="p-3 text-left font-semibold">Base</th>
                      <th className="p-3 text-left font-semibold">Stocks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((row, index) => (
                      <tr
                        key={row.role}
                        className={index % 2 === 0 ? 'bg-muted/20' : ''}
                      >
                        <td className="p-3 font-medium">{row.role}</td>
                        <td className="p-3">
                          <Badge variant="outline">{row.level}</Badge>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {row.experience}
                        </td>
                        <td className="p-3 font-semibold text-green-600">
                          {row.ctc}
                        </td>
                        <td className="p-3">{row.base}</td>
                        <td className="p-3">{row.stocks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interview Process */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Microsoft Interview Process
              </h2>
              <p className="text-muted-foreground">
                What to expect during Microsoft&apos;s rigorous hiring process
              </p>
            </div>
            <div className="space-y-6">
              {interviewRounds.map((round) => (
                <Card
                  key={round.round}
                  className="overflow-hidden"
                >
                  <div className="flex">
                    <div className="flex w-16 flex-shrink-0 items-center justify-center bg-blue-600 text-white">
                      <span className="text-2xl font-bold">{round.round}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{round.name}</h3>
                        <Badge variant="outline">
                          <Clock className="mr-1 h-3 w-3" />
                          {round.duration}
                        </Badge>
                      </div>
                      <p className="mb-4 text-muted-foreground">
                        {round.description}
                      </p>
                      <ul className="grid gap-1 sm:grid-cols-2">
                        {round.tips.map((tip) => (
                          <li
                            key={tip}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Tips to Get Hired at Microsoft
            </h2>
            <p className="text-muted-foreground">
              Maximize your chances of joining Microsoft
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringTips.map((tip) => (
              <Card
                key={tip.title}
                className="p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
                  <tip.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Benefits & Perks at Microsoft
              </h2>
              <p className="text-muted-foreground">
                Industry-leading benefits for employees and families
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((category) => (
                <Card
                  key={category.title}
                  className="p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about Microsoft India careers
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join Microsoft?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Take the next step in your career at one of the world&apos;s most
              innovative companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90"
              >
                <a
                  href="https://careers.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Open Positions
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/roadmaps/software-engineer">
                  Prepare with Roadmaps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Companies */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-bold">Explore Similar Companies</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <Link href="/companies/google">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Google</p>
                <p className="text-sm text-muted-foreground">Technology</p>
              </Card>
            </Link>
            <Link href="/companies/amazon">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Amazon</p>
                <p className="text-sm text-muted-foreground">
                  E-commerce & Cloud
                </p>
              </Card>
            </Link>
            <Link href="/companies/adobe">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Adobe</p>
                <p className="text-sm text-muted-foreground">Software</p>
              </Card>
            </Link>
            <Link href="/companies/infosys">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Infosys</p>
                <p className="text-sm text-muted-foreground">IT Services</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
