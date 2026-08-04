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
  Briefcase,
  ExternalLink,
  GraduationCap,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Heart,
  Globe,
  Code,
  MessageSquare,
  Target,
  Zap,
  BookOpen,
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  Cpu,
  Smartphone,
  Music,
  Watch,
  Tv,
  Cloud,
  Shield,
  Palette,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CompanyComparisonLinks, ContextualToolLinks } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Apple Careers 2026 | Jobs, Salary & Interview Guide | Sproutern',
  description:
    "Complete guide to Apple careers in 2026. Explore Apple salary (₹25-2 Cr+), interview process, ICT levels, teams, and tips to get hired at the world's most valuable company.",
  keywords:
    'apple careers, apple salary, apple interview questions, apple jobs, apple swe, apple interview experience, apple hiring process 2026, apple ict levels',
  openGraph: {
    title: 'Apple Careers 2026 - Complete Interview & Salary Guide',
    description:
      "Everything you need to know about working at Apple - the world's most valuable technology company.",
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/apple',
  },
  alternates: { canonical: 'https://sproutern.dpdns.org/companies/apple' },
};

const salaryData = [
  {
    role: 'Software Engineer (ICT2)',
    level: 'ICT2',
    experience: '0-2 years',
    ctc: '₹25-40 LPA',
    base: '₹18-28 LPA',
    stocks: '₹5-8 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Software Engineer (ICT3)',
    level: 'ICT3',
    experience: '2-5 years',
    ctc: '₹45-70 LPA',
    base: '₹32-48 LPA',
    stocks: '₹10-16 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Senior SWE (ICT4)',
    level: 'ICT4',
    experience: '5-10 years',
    ctc: '₹80-130 LPA',
    base: '₹55-85 LPA',
    stocks: '₹20-35 LPA',
    bonus: '₹6-10 LPA',
  },
  {
    role: 'Staff Engineer (ICT5)',
    level: 'ICT5',
    experience: '10-15 years',
    ctc: '₹1.3-1.8 Cr',
    base: '₹90-120 LPA',
    stocks: '₹35-50 LPA',
    bonus: '₹10-15 LPA',
  },
  {
    role: 'Principal Engineer (ICT6)',
    level: 'ICT6',
    experience: '15+ years',
    ctc: '₹1.8-2.5+ Cr',
    base: '₹1.2-1.6 Cr',
    stocks: '₹50-80 LPA',
    bonus: '₹15-25 LPA',
  },
  {
    role: 'Product Manager',
    level: 'ICT3-4',
    experience: '3-8 years',
    ctc: '₹55-100 LPA',
    base: '₹40-70 LPA',
    stocks: '₹12-25 LPA',
    bonus: '₹4-8 LPA',
  },
  {
    role: 'ML Engineer',
    level: 'ICT3-4',
    experience: '3-8 years',
    ctc: '₹60-110 LPA',
    base: '₹42-75 LPA',
    stocks: '₹14-28 LPA',
    bonus: '₹5-8 LPA',
  },
  {
    role: 'Hardware Engineer',
    level: 'ICT3-4',
    experience: '3-8 years',
    ctc: '₹50-90 LPA',
    base: '₹35-62 LPA',
    stocks: '₹12-22 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Design Engineer',
    level: 'ICT3-4',
    experience: '3-8 years',
    ctc: '₹45-85 LPA',
    base: '₹32-58 LPA',
    stocks: '₹10-20 LPA',
    bonus: '₹3-6 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'M1',
    experience: '10+ years',
    ctc: '₹1.4-2 Cr',
    base: '₹95-130 LPA',
    stocks: '₹40-60 LPA',
    bonus: '₹12-18 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter Screen',
    duration: '30-45 mins',
    description:
      'Initial discussion about background, role expectations, and Apple culture fit.',
    tips: [
      'Know Apple products deeply',
      'Show genuine passion',
      'Research the team',
      'Prepare questions',
    ],
  },
  {
    round: 2,
    name: 'Technical Phone Screen',
    duration: '45-60 mins',
    description:
      'Coding interview via shared document. Focus on problem-solving approach and code quality.',
    tips: [
      'Think aloud',
      'Write clean code',
      'Test your solution',
      'Discuss trade-offs',
    ],
  },
  {
    round: 3,
    name: 'Onsite: Coding Round 1',
    duration: '60 mins',
    description:
      'Whiteboard/laptop coding with focus on data structures and algorithms.',
    tips: [
      'Master DS fundamentals',
      'Practice whiteboard coding',
      'Explain your approach',
      'Handle follow-ups',
    ],
  },
  {
    round: 4,
    name: 'Onsite: Coding Round 2',
    duration: '60 mins',
    description:
      'Another coding round with different interviewer. May include domain-specific problems.',
    tips: [
      'Show versatility',
      'Ask clarifying questions',
      'Write testable code',
      'Optimize iteratively',
    ],
  },
  {
    round: 5,
    name: 'Onsite: System Design',
    duration: '60 mins',
    description:
      'For ICT3+: Design scalable systems. Apple focuses on practical, production-ready designs.',
    tips: [
      'Study Apple services',
      'Know iOS/macOS architecture',
      'Focus on privacy/security',
      'Discuss scaling',
    ],
  },
  {
    round: 6,
    name: 'Onsite: Domain Deep Dive',
    duration: '45-60 mins',
    description:
      'Technical discussion on your area of expertise. May include past project review.',
    tips: [
      'Know your resume deeply',
      'Explain technical decisions',
      'Discuss challenges',
      'Show growth',
    ],
  },
  {
    round: 7,
    name: 'Onsite: Behavioral/Values',
    duration: '45 mins',
    description:
      'Apple values fit assessment. Focus on collaboration, innovation, and attention to detail.',
    tips: [
      'Prepare STAR stories',
      'Show attention to detail',
      'Discuss innovation',
      'Be authentic',
    ],
  },
  {
    round: 8,
    name: 'Hiring Manager Round',
    duration: '45 mins',
    description:
      'Discussion with hiring manager about team, role, and cultural alignment.',
    tips: [
      'Research the team',
      'Ask about challenges',
      'Show enthusiasm',
      'Discuss career goals',
    ],
  },
];

const teams = [
  {
    name: 'iOS/iPadOS',
    icon: Smartphone,
    description:
      'Build the operating system powering 1.5B+ iPhones and iPads worldwide.',
    tech: ['Swift', 'Objective-C', 'iOS SDK', 'UIKit'],
  },
  {
    name: 'macOS',
    icon: Laptop,
    description:
      'Develop the legendary Mac operating system - powering creativity worldwide.',
    tech: ['Swift', 'Objective-C', 'AppKit', 'Metal'],
  },
  {
    name: 'Apple Silicon',
    icon: Cpu,
    description:
      'Design world-leading M-series chips. Hardware-software integration at its finest.',
    tech: ['C++', 'Verilog', 'ASIC', 'ML'],
  },
  {
    name: 'Siri & AI',
    icon: MessageSquare,
    description:
      'Build intelligent assistants and on-device ML for privacy-first AI.',
    tech: ['ML', 'NLP', 'CoreML', 'Python'],
  },
  {
    name: 'Apple Music & TV+',
    icon: Music,
    description:
      'Create streaming experiences for music, podcasts, and video content.',
    tech: ['Swift', 'Backend', 'ML', 'Streaming'],
  },
  {
    name: 'watchOS & Health',
    icon: Watch,
    description:
      'Build health and fitness features - saving lives with Apple Watch.',
    tech: ['Swift', 'HealthKit', 'Sensors', 'ML'],
  },
  {
    name: 'iCloud & Services',
    icon: Cloud,
    description: 'Build cloud infrastructure for 2B+ Apple devices worldwide.',
    tech: ['Java', 'Cassandra', 'Kubernetes', 'Go'],
  },
  {
    name: 'Privacy & Security',
    icon: Shield,
    description:
      'Design privacy-preserving systems. Privacy is a fundamental human right at Apple.',
    tech: ['Security', 'Cryptography', 'C++', 'Swift'],
  },
];

const appleValues = [
  {
    trait: 'Think Different',
    description:
      'Challenge the status quo. The people who are crazy enough to think they can change the world are the ones who do.',
  },
  {
    trait: 'Privacy First',
    description:
      'Privacy is a fundamental human right. Every Apple product is designed with privacy at its core.',
  },
  {
    trait: 'Attention to Detail',
    description:
      'Obsess over the details. The difference between good and great is often invisible to most.',
  },
  {
    trait: 'Integration',
    description:
      'Hardware + Software + Services. The magic happens at the intersection.',
  },
  {
    trait: 'Simplicity',
    description:
      'Simple can be harder than complex. Keep pushing to make the complex simple.',
  },
  {
    trait: 'Environment',
    description:
      'Leave the world better than we found it. Carbon neutral by 2030.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Premium medical insurance',
      'Mental health support',
      'On-site wellness centers',
      'Fertility benefits',
      'Fitness programs',
      'Health coaching',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Generous PTO',
      '16+ weeks parental leave',
      'Volunteer time',
      'Sabbatical options',
      'Flexible schedule',
      'Remote flexibility',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Top-tier salary',
      'RSUs (4-year vesting)',
      'Annual bonus',
      'Equity refreshers',
      'Signing bonus',
      'Relocation',
    ],
  },
  {
    icon: BookOpen,
    title: 'Growth & Learning',
    items: [
      'Apple University',
      'Education reimbursement',
      'Internal mobility',
      'Conference attendance',
      'Patent bonuses',
      'Career coaching',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'Latest Apple devices',
      'Beautiful campuses',
      'Hybrid work options',
      'Collaborative spaces',
      'Cutting-edge labs',
      'Privacy-focused',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks',
    items: [
      'Subsidized meals',
      'Product discounts',
      'Commute benefits',
      'On-site stores',
      'Team events',
      'Employee stock purchase',
    ],
  },
];

const faqs = [
  {
    question: 'How hard is it to get into Apple?',
    answer:
      'Extremely competitive with ~1-2% acceptance rate. Apple receives millions of applications annually. Strong coding skills, attention to detail, and genuine passion for Apple products are essential. Cultural fit matters significantly.',
  },
  {
    question: "What is Apple's ICT level system?",
    answer:
      'Apple uses ICT levels: ICT2 (entry), ICT3 (mid), ICT4 (senior), ICT5 (staff), ICT6 (principal). Each level has distinct scope and expectations. ICT4+ requires system design and cross-team impact.',
  },
  {
    question: 'What salary can freshers expect at Apple India?',
    answer:
      'ICT2 (entry) roles offer ₹25-40 LPA including base, RSUs, and bonus. This is among the highest for fresh graduates in India. Campus hires from IITs may get higher offers.',
  },
  {
    question: 'Does Apple focus more on coding or system design?',
    answer:
      'Both are important. ICT2-3 interviews emphasize coding (data structures, algorithms). ICT4+ adds system design with focus on scalability, privacy, and Apple-specific architecture patterns.',
  },
  {
    question: 'What programming languages does Apple use?',
    answer:
      "Swift is dominant for Apple platforms. Also: Objective-C (legacy), C++ (performance-critical), Python (ML/scripts), Java (backend services). For interviews, use what you're comfortable with.",
  },
  {
    question: 'Does Apple have offices in India?',
    answer:
      'Yes! Apple has offices in Bangalore (main engineering hub) and Hyderabad. Teams include iOS, macOS, Siri, Maps, iCloud, and hardware. India is a growing engineering center.',
  },
  {
    question: 'How long does Apple interview process take?',
    answer:
      'Typically 4-8 weeks from application to offer. Phone screen in 1-2 weeks, onsite 2-3 weeks later, decision in 1-2 weeks. Process is thorough and unhurried.',
  },
  {
    question: 'What is unique about Apple interviews?',
    answer:
      'Apple emphasizes: 1) Passion for products, 2) Attention to detail, 3) Privacy/security mindset, 4) Collaboration over competition. Be authentic about why you want to work at Apple.',
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'Know Apple Deeply',
    description:
      'Use Apple products. Understand iOS, macOS architecture. Know recent Apple announcements. Show genuine enthusiasm.',
  },
  {
    icon: Code,
    title: 'Master Swift/iOS',
    description:
      'For platform roles, Swift is essential. Know UIKit/SwiftUI, memory management, and iOS-specific patterns.',
  },
  {
    icon: Shield,
    title: 'Think Privacy-First',
    description:
      'Apple cares deeply about privacy. In system design, always discuss privacy implications and data protection.',
  },
  {
    icon: Palette,
    title: 'Attention to Detail',
    description:
      'Apple obsesses over details. In code, consider edge cases, naming, and code clarity. In design, think holistically.',
  },
  {
    icon: Star,
    title: 'Show Impact',
    description:
      'Quantify your achievements. Apple values people who make things measurably better.',
  },
  {
    icon: MessageSquare,
    title: 'Be Authentic',
    description:
      "Apple interviews assess genuine fit. Don't just say what you think they want to hear. Be yourself.",
  },
];

export default function AppleCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Apple',
            description:
              'Apple designs and creates iPhone, iPad, Mac, Apple Watch, and Apple TV, along with software and services.',
            url: 'https://www.apple.com',
            sameAs: [
              'https://www.linkedin.com/company/apple',
              'https://twitter.com/Apple',
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
                Think Different
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Apple Careers 2026
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join the company that creates products people love. Build the
                future of technology at the world&apos;s most valuable company.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <a
                    href="https://www.apple.com/careers"
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
                <p className="text-2xl font-bold text-white">1976</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">160,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Globe className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Devices Active</p>
                <p className="text-2xl font-bold text-white">2B+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Market Cap</p>
                <p className="text-2xl font-bold text-white">#1</p>
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
              <p className="text-3xl font-bold text-primary">
                ₹25 LPA - ₹2.5 Cr+
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4-8 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">6-8 Rounds</p>
              <p className="text-sm text-muted-foreground">Total Interviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">~1-2%</p>
              <p className="text-sm text-muted-foreground">Acceptance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Apple</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Apple, founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in
              1976, has grown from a garage startup into the world&apos;s most
              valuable company. With a market cap exceeding $3 trillion, Apple
              has revolutionized personal computing, mobile phones, digital
              music, and wearable technology.
            </p>
            <p>
              The company&apos;s ecosystem spans hardware (iPhone, iPad, Mac,
              Apple Watch, AirPods), software (iOS, macOS, watchOS), and
              services (App Store, Apple Music, iCloud, Apple TV+). Over 2
              billion active devices use Apple&apos;s platforms worldwide.
            </p>
            <p>
              Apple&apos;s India presence includes offices in Bangalore and
              Hyderabad, with teams working on iOS, macOS, Siri, Maps, iCloud,
              and hardware engineering. The India team continues to grow as
              Apple expands its engineering footprint globally.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Apple&apos;s Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              &quot;To bring the best user experience to customers through
              innovative hardware, software, and services.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Apple Values</h2>
              <p className="text-muted-foreground">
                The principles that define Apple&apos;s culture
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {appleValues.map((v) => (
                <Card
                  key={v.trait}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
                    {v.trait}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {v.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Teams at Apple</h2>
            <p className="text-muted-foreground">
              Explore different engineering domains
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teams.map((team) => (
              <Card
                key={team.name}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                    <team.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {team.description}
                  </CardDescription>
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
      </section>

      {/* Salary */}
      <section
        id="salaries"
        className="bg-muted/30 py-16"
      >
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Apple Salary Structure 2026
              </h2>
              <p className="text-muted-foreground">
                Among the highest-paying tech companies globally
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  ICT2 (Entry)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹25-40 LPA
                </p>
              </Card>
              <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  ICT4 (Senior)
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ₹80-130 LPA
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  ICT5+ (Staff)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹1.3-2.5+ Cr
                </p>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Salary Breakdown</CardTitle>
                <CardDescription>
                  Including base, RSUs, and bonus components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-4 text-left font-semibold">Role</th>
                        <th className="pb-4 text-left font-semibold">Level</th>
                        <th className="pb-4 text-left font-semibold">
                          Experience
                        </th>
                        <th className="pb-4 text-left font-semibold">
                          Total CTC
                        </th>
                        <th className="hidden pb-4 text-left font-semibold md:table-cell">
                          Base
                        </th>
                        <th className="hidden pb-4 text-left font-semibold lg:table-cell">
                          RSUs
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {salaryData.map((s) => (
                        <tr
                          key={s.role}
                          className="border-b last:border-0"
                        >
                          <td className="py-4 font-medium">{s.role}</td>
                          <td className="py-4">
                            <Badge variant="outline">{s.level}</Badge>
                          </td>
                          <td className="py-4 text-muted-foreground">
                            {s.experience}
                          </td>
                          <td className="py-4 font-semibold text-primary">
                            {s.ctc}
                          </td>
                          <td className="hidden py-4 text-muted-foreground md:table-cell">
                            {s.base}
                          </td>
                          <td className="hidden py-4 text-muted-foreground lg:table-cell">
                            {s.stocks}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Apple Interview Process</h2>
            <p className="text-muted-foreground">
              Step-by-step guide to crack Apple interviews in 2026
            </p>
          </div>
          <div className="space-y-4">
            {interviewRounds.map((r) => (
              <Card
                key={r.round}
                className="relative overflow-hidden"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white">
                      {r.round}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{r.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {r.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{r.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tips.map((tip) => (
                      <Badge
                        key={tip}
                        variant="secondary"
                        className="text-xs"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {tip}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Tips */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                How to Get Hired at Apple
              </h2>
              <p className="text-muted-foreground">
                Pro tips from engineers who cracked Apple interviews
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hiringTips.map((tip) => (
                <Card
                  key={tip.title}
                  className="p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <tip.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="mb-2 font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Benefits & Perks at Apple
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {b.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common questions about Apple careers and interviews
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
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
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Join Apple?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start your journey at the company that changed the world
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <a
                href="https://www.apple.com/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
            >
              <Link href="/tools/interview-questions">
                <ArrowRight className="mr-2 h-4 w-4" />
                View Interview Questions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Companies */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Explore Similar Companies
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              <Link href="/companies/google">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Google</h3>
                  <p className="text-sm text-muted-foreground">Technology</p>
                </Card>
              </Link>
              <Link href="/companies/amazon">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Amazon</h3>
                  <p className="text-sm text-muted-foreground">
                    E-commerce & Cloud
                  </p>
                </Card>
              </Link>
              <Link href="/companies/microsoft">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Microsoft</h3>
                  <p className="text-sm text-muted-foreground">Technology</p>
                </Card>
              </Link>
              <Link href="/companies/meta">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Meta</h3>
                  <p className="text-sm text-muted-foreground">Social & Tech</p>
                </Card>
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ContextualToolLinks context="interview" />
              <CompanyComparisonLinks currentCompany="Apple" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
