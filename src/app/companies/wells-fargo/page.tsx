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
  GraduationCap,
  Clock,
  CheckCircle,
  TrendingUp,
  Award,
  Heart,
  Globe,
  Code,
  Database,
  Shield,
  MessageSquare,
  Target,
  BookOpen,
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  Landmark,
  CreditCard,
  PiggyBank,
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
  title: 'Wells Fargo Careers India | Careers',
  description:
    'Complete guide to Wells Fargo careers in India. Explore salary structure, interview process, technology teams, and tips to get hired at Wells Fargo .',
  keywords:
    'wells fargo careers india, wells fargo salary, wells fargo interview, wells fargo jobs, wells fargo hyderabad, wells fargo bangalore, banking technology careers',
  openGraph: {
    title: 'Wells Fargo Careers India - Complete Guide',
    description:
      'Everything you need to know about working at Wells Fargo India.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/wells-fargo',
  },
  alternates: { canonical: 'https://sproutern.dpdns.org/companies/wells-fargo' },
};

const salaryData = [
  {
    role: 'Software Engineer',
    level: 'Associate',
    experience: '0-2 years',
    ctc: '₹8-14 LPA',
    base: '₹7-12 LPA',
    bonus: '₹1-2 LPA',
  },
  {
    role: 'Senior SE',
    level: 'Senior Associate',
    experience: '2-5 years',
    ctc: '₹14-24 LPA',
    base: '₹12-20 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Lead SE',
    level: 'VP',
    experience: '5-8 years',
    ctc: '₹24-40 LPA',
    base: '₹20-32 LPA',
    bonus: '₹4-8 LPA',
  },
  {
    role: 'Principal Engineer',
    level: 'SVP',
    experience: '8-12 years',
    ctc: '₹40-65 LPA',
    base: '₹32-50 LPA',
    bonus: '₹8-12 LPA',
  },
  {
    role: 'Director',
    level: 'D/MD',
    experience: '12+ years',
    ctc: '₹65-100 LPA',
    base: '₹50-75 LPA',
    bonus: '₹12-20 LPA',
  },
  {
    role: 'Data Analyst',
    level: 'Associate',
    experience: '0-2 years',
    ctc: '₹6-12 LPA',
    base: '₹5-10 LPA',
    bonus: '₹1-2 LPA',
  },
  {
    role: 'Data Scientist',
    level: 'VP',
    experience: '4-7 years',
    ctc: '₹22-38 LPA',
    base: '₹18-30 LPA',
    bonus: '₹4-8 LPA',
  },
  {
    role: 'Business Analyst',
    level: 'Senior Associate',
    experience: '2-5 years',
    ctc: '₹12-22 LPA',
    base: '₹10-18 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'SVP',
    experience: '10+ years',
    ctc: '₹50-80 LPA',
    base: '₹40-60 LPA',
    bonus: '₹10-15 LPA',
  },
  {
    role: 'Scrum Master',
    level: 'VP',
    experience: '5-8 years',
    ctc: '₹20-35 LPA',
    base: '₹16-28 LPA',
    bonus: '₹4-7 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'HR Screening',
    duration: '20-30 mins',
    description:
      'Initial discussion about background, role expectations, and Wells Fargo culture.',
    tips: [
      'Research Wells Fargo values',
      'Know your resume well',
      'Ask about the team',
      'Be professional',
    ],
  },
  {
    round: 2,
    name: 'Technical Round 1',
    duration: '45-60 mins',
    description:
      'Coding round focusing on data structures, algorithms, and problem-solving.',
    tips: [
      'Practice medium LeetCode',
      'Strong on arrays/strings',
      'Explain your approach',
      'Write clean code',
    ],
  },
  {
    round: 3,
    name: 'Technical Round 2',
    duration: '45-60 mins',
    description:
      'Deeper technical discussion on system design, database, and domain knowledge.',
    tips: [
      'Know SQL well',
      'Understand banking basics',
      'Discuss past projects',
      'System design for seniors',
    ],
  },
  {
    round: 4,
    name: 'Managerial Round',
    duration: '45 mins',
    description:
      'Discussion with hiring manager about team fit, career goals, and leadership.',
    tips: [
      'Prepare STAR stories',
      'Show team collaboration',
      'Ask about growth',
      'Demonstrate ownership',
    ],
  },
  {
    round: 5,
    name: 'HR Discussion',
    duration: '30 mins',
    description:
      'Final round covering compensation, benefits, and joining formalities.',
    tips: [
      'Know market rates',
      'Discuss expectations',
      'Clarify notice period',
      'Ask about benefits',
    ],
  },
];

const teams = [
  {
    name: 'Technology Banking',
    icon: Landmark,
    description:
      'Build core banking systems, account management, and transaction processing platforms.',
    roles: ['Java Developer', 'Mainframe Developer', 'BA'],
    tech: ['Java', 'COBOL', 'DB2', 'Oracle'],
  },
  {
    name: 'Digital & Mobile',
    icon: CreditCard,
    description:
      'Develop consumer and commercial banking apps, online banking, and digital experiences.',
    roles: ['iOS/Android Dev', 'Frontend', 'UX'],
    tech: ['Swift', 'Kotlin', 'React', 'Angular'],
  },
  {
    name: 'Data & Analytics',
    icon: Database,
    description:
      'Build data platforms, analytics solutions, and ML models for risk and insights.',
    roles: ['Data Engineer', 'Data Scientist', 'ML Engineer'],
    tech: ['Python', 'Spark', 'Hadoop', 'Tableau'],
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    description:
      'Protect bank and customer data with security operations, threat detection, and identity management.',
    roles: ['Security Analyst', 'IAM Engineer', 'SOC Analyst'],
    tech: ['SIEM', 'IAM', 'Cloud Security', 'Splunk'],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: Globe,
    description:
      'Modernize infrastructure with cloud migration, DevOps, and platform engineering.',
    roles: ['Cloud Engineer', 'DevOps', 'SRE'],
    tech: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
  },
  {
    name: 'Wealth & Investment',
    icon: PiggyBank,
    description:
      'Build platforms for wealth management, investment advisory, and retirement services.',
    roles: ['Full Stack Dev', 'Backend Engineer', 'BA'],
    tech: ['Java', 'Python', 'React', 'Microservices'],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Insurance',
    items: [
      'Medical coverage for family',
      'Dental and vision',
      'Life insurance',
      'Accident coverage',
      'Health check-ups',
      'Wellness programs',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Paid vacation (18-24 days)',
      'Sick leave',
      'Parental leave (16 weeks)',
      'Sabbatical options',
      'Flexible holidays',
      'Work from home',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Competitive base salary',
      'Annual bonus (10-20%)',
      'Retention bonus',
      'Retirement benefits (PF, Gratuity)',
      'Stock purchase plan',
      'Relocation support',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learning',
    items: [
      'Education assistance',
      'Certification support',
      'Internal training (WF University)',
      'Leadership programs',
      'Conference attendance',
      'Career pathing',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Setup',
    items: [
      'Hybrid work model',
      'Modern office spaces',
      'Ergonomic equipment',
      'Latest devices',
      'Home office allowance',
      'Tech support',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks',
    items: [
      'Subsidized cafeteria',
      'Transportation allowance',
      'Employee discounts',
      'Team events',
      'Recognition programs',
      'Community volunteering',
    ],
  },
];

const faqs = [
  {
    question: 'What is the interview process at Wells Fargo India?',
    answer:
      'Typically 4-5 rounds: HR Screening, 2 Technical Rounds (coding + system design), Managerial Round, and HR Discussion. Process takes 2-4 weeks. For senior roles, expect additional leadership discussions.',
  },
  {
    question: 'What is the salary for freshers at Wells Fargo?',
    answer:
      'Associate level software engineers can expect ₹8-14 LPA. Campus hires from top colleges may receive higher offers. Total compensation includes base salary, annual bonus (10-15%), and benefits.',
  },
  {
    question: 'What is Wells Fargo&apos;s level system?',
    answer:
      'Levels: Associate (entry), Senior Associate (2-4 years), VP (5-8 years), SVP (8-12 years), Director/Managing Director (12+ years). Promotions are based on performance and typically take 2-3 years per level.',
  },
  {
    question: 'Which technologies are used at Wells Fargo?',
    answer:
      'Core: Java, Python, SQL, Oracle, Mainframe (COBOL). Modern: React, Angular, AWS, Azure, Kubernetes, Spark. The bank is modernizing legacy systems and adopting cloud-native architectures.',
  },
  {
    question: 'What is the work culture like at Wells Fargo India?',
    answer:
      'Professional banking culture with focus on risk management and compliance. Work-life balance is generally good with hybrid arrangements. Culture emphasizes ethics, diversity, and customer focus.',
  },
  {
    question: 'Does Wells Fargo hire freshers?',
    answer:
      'Yes! Wells Fargo has strong campus recruitment programs at engineering colleges. They also have technology analyst programs for fresh graduates with training and rotation opportunities.',
  },
  {
    question: 'What are Wells Fargo office locations in India?',
    answer:
      'Major offices in Hyderabad (largest), Bangalore, and Chennai. Hyderabad is the primary technology hub with thousands of employees across multiple campuses.',
  },
  {
    question: 'How to prepare for Wells Fargo interviews?',
    answer:
      'Focus on: DSA (arrays, strings, SQL), system design basics, banking domain knowledge, and behavioral/STAR stories. Understanding financial services context helps but isn&apos;t mandatory.',
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'Strong SQL Skills',
    description:
      'Banking involves heavy data processing. Master SQL queries, joins, and database concepts. Many roles require strong DB knowledge.',
  },
  {
    icon: Code,
    title: 'Java Proficiency',
    description:
      'Java is the primary language at Wells Fargo. Know Spring Boot, microservices, and enterprise Java patterns.',
  },
  {
    icon: Shield,
    title: 'Security Awareness',
    description:
      'Banking requires security-first thinking. Understand OWASP, secure coding, and compliance basics.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Skills',
    description:
      'Wells Fargo values clear communication. Practice explaining technical concepts and prepare STAR stories.',
  },
  {
    icon: Globe,
    title: 'Cloud Knowledge',
    description:
      'WF is modernizing to cloud. AWS/Azure certifications add value, especially for senior roles.',
  },
  {
    icon: TrendingUp,
    title: 'Banking Domain',
    description:
      'Understanding basic banking concepts (payments, lending, risk) demonstrates genuine interest in the domain.',
  },
];

export default function WellsFargoCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Wells Fargo',
            description: 'Wells Fargo is a leading financial services company.',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-yellow-700">
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
                Banking & Financial Services
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Wells Fargo Careers India
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Build technology that powers one of America&apos;s largest
                banks. Join 10,000+ technologists in India shaping the future of
                banking.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-700 hover:bg-white/90"
                >
                  <a
                    href="https://www.wellsfargojobs.com"
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
                <p className="text-2xl font-bold text-white">1852</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Global Employees</p>
                <p className="text-2xl font-bold text-white">2.3 Lakh+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">India Offices</p>
                <p className="text-2xl font-bold text-white">
                  Hyderabad, Bangalore
                </p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">India Tech Team</p>
                <p className="text-2xl font-bold text-white">10,000+</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹8-100 LPA</p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2-4 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4-5 Rounds</p>
              <p className="text-sm text-muted-foreground">Interview Rounds</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Hybrid</p>
              <p className="text-sm text-muted-foreground">Work Model</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Wells Fargo</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Wells Fargo & Company is one of the largest and oldest financial
              services companies in the United States, founded in 1852. With
              over $1.9 trillion in assets, Wells Fargo provides banking,
              investment, mortgage, and consumer finance services to millions of
              customers.
            </p>
            <p>
              Wells Fargo Technology in India is a critical hub for the
              company&apos;s digital transformation. With over 10,000 technology
              professionals in Hyderabad, Bangalore, and Chennai, Indian teams
              build and maintain core banking systems, digital platforms, data
              analytics, cybersecurity, and cloud infrastructure.
            </p>
            <p>
              The company is undergoing significant modernization, migrating
              from legacy mainframe systems to cloud-native architectures. This
              creates exciting opportunities for engineers to work on both
              maintaining critical systems and building next-generation banking
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Technology Teams at Wells Fargo India
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <Card
                  key={team.name}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900">
                      <team.icon className="h-6 w-6 text-red-700" />
                    </div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {team.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section
        id="salaries"
        className="container py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Wells Fargo India Salary Structure
            </h2>
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
              <p className="text-sm text-green-700 dark:text-green-400">
                Associate
              </p>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                ₹8-14 LPA
              </p>
            </Card>
            <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
              <p className="text-sm text-blue-700 dark:text-blue-400">
                VP Level
              </p>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                ₹24-40 LPA
              </p>
            </Card>
            <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
              <p className="text-sm text-purple-700 dark:text-purple-400">
                SVP/Director
              </p>
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                ₹50-100 LPA
              </p>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Detailed Salary by Role & Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left">Level</th>
                      <th className="p-3 text-left">Exp</th>
                      <th className="p-3 text-left">Total CTC</th>
                      <th className="p-3 text-left">Base</th>
                      <th className="p-3 text-left">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((row, i) => (
                      <tr
                        key={row.role}
                        className={i % 2 === 0 ? 'bg-muted/20' : ''}
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
                        <td className="p-3">{row.bonus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interview */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Wells Fargo Interview Process
              </h2>
            </div>
            <div className="space-y-6">
              {interviewRounds.map((round) => (
                <Card
                  key={round.round}
                  className="overflow-hidden"
                >
                  <div className="flex">
                    <div className="flex w-16 flex-shrink-0 items-center justify-center bg-red-700 text-white">
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

      {/* Tips */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Tips to Get Hired at Wells Fargo
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringTips.map((tip) => (
              <Card
                key={tip.title}
                className="p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900">
                  <tip.icon className="h-6 w-6 text-red-700" />
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
                Benefits at Wells Fargo
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((cat) => (
                <Card
                  key={cat.title}
                  className="p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                      <cat.icon className="h-5 w-5 text-red-700" />
                    </div>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
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
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-700 to-yellow-600 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join Wells Fargo?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Build technology that powers banking for millions. Explore
              opportunities today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-700 hover:bg-white/90"
              >
                <a
                  href="https://www.wellsfargojobs.com"
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
                <Link href="/companies">
                  Explore More Companies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
