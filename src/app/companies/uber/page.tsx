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
  MapPin,
  Navigation,
  Car,
  Truck,
  Utensils,
  Wallet,
  Shield,
  BarChart3,
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
  title: 'Uber Careers 2026 | Jobs, Salary & Interview Guide | Sproutern',
  description:
    'Complete guide to Uber careers in 2026. Explore Uber salary (₹20-1.5 Cr+), interview process, levels, teams, and tips to get hired at the global mobility leader.',
  keywords:
    'uber careers, uber salary india, uber interview questions, uber jobs, uber swe, uber interview experience, uber hiring 2026, uber levels',
  openGraph: {
    title: 'Uber Careers 2026 - Complete Interview & Salary Guide',
    description:
      'Everything you need to know about working at Uber - the company revolutionizing mobility.',
    type: 'article',
    url: 'https://www.sproutern.com/companies/uber',
  },
  alternates: { canonical: 'https://www.sproutern.com/companies/uber' },
};

const salaryData = [
  {
    role: 'Software Engineer I (L3)',
    level: 'L3',
    experience: '0-2 years',
    ctc: '₹20-32 LPA',
    base: '₹15-24 LPA',
    stocks: '₹3-6 LPA',
    bonus: '₹2-3 LPA',
  },
  {
    role: 'Software Engineer II (L4)',
    level: 'L4',
    experience: '2-5 years',
    ctc: '₹38-60 LPA',
    base: '₹28-42 LPA',
    stocks: '₹8-14 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Senior SWE (L5a)',
    level: 'L5a',
    experience: '5-8 years',
    ctc: '₹65-95 LPA',
    base: '₹45-65 LPA',
    stocks: '₹15-25 LPA',
    bonus: '₹5-8 LPA',
  },
  {
    role: 'Senior SWE (L5b)',
    level: 'L5b',
    experience: '8-12 years',
    ctc: '₹90-130 LPA',
    base: '₹60-85 LPA',
    stocks: '₹25-38 LPA',
    bonus: '₹6-10 LPA',
  },
  {
    role: 'Staff Engineer (L6)',
    level: 'L6',
    experience: '12-15 years',
    ctc: '₹1.2-1.6 Cr',
    base: '₹85-110 LPA',
    stocks: '₹30-45 LPA',
    bonus: '₹8-14 LPA',
  },
  {
    role: 'Principal Engineer (L7)',
    level: 'L7',
    experience: '15+ years',
    ctc: '₹1.5-2+ Cr',
    base: '₹1-1.3 Cr',
    stocks: '₹40-60 LPA',
    bonus: '₹12-18 LPA',
  },
  {
    role: 'Product Manager',
    level: 'PM',
    experience: '4-8 years',
    ctc: '₹50-90 LPA',
    base: '₹35-62 LPA',
    stocks: '₹12-22 LPA',
    bonus: '₹4-7 LPA',
  },
  {
    role: 'Data Scientist',
    level: 'L4-5',
    experience: '3-7 years',
    ctc: '₹45-85 LPA',
    base: '₹32-58 LPA',
    stocks: '₹10-20 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'ML Engineer',
    level: 'L4-5',
    experience: '3-7 years',
    ctc: '₹50-95 LPA',
    base: '₹35-65 LPA',
    stocks: '₹12-24 LPA',
    bonus: '₹4-7 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'EM',
    experience: '10+ years',
    ctc: '₹1-1.5 Cr',
    base: '₹70-100 LPA',
    stocks: '₹25-40 LPA',
    bonus: '₹8-12 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter Screen',
    duration: '30 mins',
    description:
      'Initial call to discuss background, role expectations, and Uber culture. Gauge interest and basic fit.',
    tips: [
      'Know Uber products',
      'Research the team',
      'Prepare questions',
      'Show enthusiasm',
    ],
  },
  {
    round: 2,
    name: 'Technical Phone Screen',
    duration: '45-60 mins',
    description:
      'Coding interview via shared editor. Medium-difficulty algorithm problem with focus on problem-solving.',
    tips: [
      'Practice LeetCode medium',
      'Think aloud',
      'Test your code',
      'Discuss complexity',
    ],
  },
  {
    round: 3,
    name: 'Onsite: Coding Round 1',
    duration: '45-60 mins',
    description:
      'First DSA round focusing on data structures, algorithms, and code quality.',
    tips: [
      'Master arrays, trees, graphs',
      'Write clean code',
      'Handle edge cases',
      'Optimize solution',
    ],
  },
  {
    round: 4,
    name: 'Onsite: Coding Round 2',
    duration: '45-60 mins',
    description:
      'Second coding round with different interviewer. May include different problem types.',
    tips: [
      'Show versatility',
      'Ask clarifications',
      'Time management',
      'Discuss trade-offs',
    ],
  },
  {
    round: 5,
    name: 'Onsite: System Design',
    duration: '60 mins',
    description:
      'For L5+: Design scalable systems like ride-matching, surge pricing, or real-time tracking.',
    tips: [
      'Study Uber architecture',
      'Know geo-spatial systems',
      'Discuss real-time',
      'Consider scale',
    ],
  },
  {
    round: 6,
    name: 'Onsite: Behavioral',
    duration: '45 mins',
    description:
      'Cultural fit assessment. Uber values discussed with STAR-format behavioral questions.',
    tips: [
      'Know Uber values',
      'Prepare STAR stories',
      'Show ownership',
      'Discuss failures',
    ],
  },
  {
    round: 7,
    name: 'Hiring Manager Round',
    duration: '45 mins',
    description:
      'Discussion with hiring manager about role, team dynamics, and career alignment.',
    tips: [
      'Research the team',
      'Ask good questions',
      'Show genuine interest',
      'Discuss goals',
    ],
  },
];

const teams = [
  {
    name: 'Rides',
    icon: Car,
    description:
      'Core ride-hailing platform. Real-time matching, dispatch, and the experiences for riders and drivers.',
    tech: ['Go', 'Java', 'Python', 'Kafka'],
  },
  {
    name: 'Eats',
    icon: Utensils,
    description:
      'Food delivery platform connecting restaurants, couriers and diners at massive scale.',
    tech: ['Go', 'React', 'Python', 'ML'],
  },
  {
    name: 'Freight',
    icon: Truck,
    description:
      'Transforming trucking and logistics. Building the Amazon of freight transportation.',
    tech: ['Go', 'Java', 'React', 'ML'],
  },
  {
    name: 'Maps & Navigation',
    icon: Navigation,
    description:
      'Build mapping, routing, and ETA prediction systems. Real-time geospatial at scale.',
    tech: ['C++', 'Python', 'ML', 'GIS'],
  },
  {
    name: 'Payments',
    icon: Wallet,
    description:
      'Global payments processing. Handle billions in transactions across payment methods.',
    tech: ['Java', 'Go', 'Python', 'Security'],
  },
  {
    name: 'Safety',
    icon: Shield,
    description:
      'Keep riders, drivers, and eaters safe. ML-powered safety features and incident response.',
    tech: ['Python', 'ML', 'Java', 'Mobile'],
  },
  {
    name: 'Data & ML Platform',
    icon: Cpu,
    description:
      'Build ML infrastructure used across Uber. Feature stores, model serving, experimentation.',
    tech: ['Python', 'Spark', 'TensorFlow', 'Go'],
  },
  {
    name: 'Marketplace',
    icon: BarChart3,
    description:
      'Pricing, surge, incentives, and marketplace optimization. Balance supply and demand in real-time.',
    tech: ['Python', 'Go', 'ML', 'Economics'],
  },
];

const uberValues = [
  {
    trait: 'We build globally, we live locally',
    description:
      'Think at global scale but understand local market nuances. Uber works in 10,000+ cities worldwide.',
  },
  {
    trait: 'We are customer obsessed',
    description:
      'Obsess over customer needs - riders, drivers, eaters, restaurants. Every decision starts with the customer.',
  },
  {
    trait: 'We celebrate differences',
    description:
      'Diverse teams build better products. Different perspectives and backgrounds make us stronger.',
  },
  {
    trait: 'We act like owners',
    description:
      "Take responsibility, make decisions, and own outcomes. Don't wait for permission.",
  },
  {
    trait: 'We persevere',
    description:
      'Ambitious goals require resilience. Keep pushing through challenges and setbacks.',
  },
  {
    trait: 'We value ideas over hierarchy',
    description:
      'The best ideas win, regardless of who proposes them. Challenge respectfully, commit fully.',
  },
  {
    trait: 'We make big bold bets',
    description:
      "Take calculated risks. Move fast and don't be afraid to fail - just fail fast and learn.",
  },
  {
    trait: 'We do the right thing',
    description:
      "Integrity, ethics, and doing what's right even when it's hard. Period.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Comprehensive health insurance',
      'Mental health support',
      'Wellness reimbursement',
      'Gym memberships',
      'Family health coverage',
      'On-demand care',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      '24+ paid leaves',
      'Unlimited sick leave',
      'Parental leave (18 weeks)',
      'Bereavement leave',
      'Flexible hours',
      'Remote work option',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Competitive salary',
      'RSUs (4-year vesting)',
      'Annual bonus',
      'Equity refreshers',
      'Sign-on bonus',
      'Annual increment',
    ],
  },
  {
    icon: BookOpen,
    title: 'Growth & Learning',
    items: [
      'Learning budget',
      'Internal mobility',
      'Leadership programs',
      'Conference sponsorship',
      'Mentorship',
      'Career coaching',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'MacBook Pro',
      'Hybrid work policy',
      'Home office setup',
      'Modern offices',
      'Ergonomic equipment',
      'Tech stipend',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks',
    items: [
      'Uber credits monthly',
      'Eats credits',
      'Commute benefits',
      'Team events',
      'Employee discounts',
      'Referral bonuses',
    ],
  },
];

const faqs = [
  {
    question: "What is Uber's interview process like?",
    answer:
      'Uber interviews typically have 5-7 rounds: recruiter screen, phone screen, 2 coding rounds, system design (L5+), behavioral, and hiring manager. Process takes 3-5 weeks. Focus is on DSA, practical problem-solving, and culture fit.',
  },
  {
    question: 'What salary can I expect at Uber India?',
    answer:
      'Uber India salaries are competitive: L3 (entry): ₹20-32 LPA, L4: ₹38-60 LPA, L5: ₹65-130 LPA, L6+: ₹1.2-2+ Cr. Includes base, RSUs (significant component), and bonus.',
  },
  {
    question: "What is Uber's level system?",
    answer:
      'Uber uses L-levels: L3 (entry IC), L4 (IC), L5a/L5b (Senior), L6 (Staff), L7 (Principal). L5 is split into 5a and 5b for granularity. Promotions based on impact and scope.',
  },
  {
    question: 'What programming languages does Uber use?',
    answer:
      "Primary languages: Go (microservices), Python (data/ML), Java (legacy/specific services), React/React Native (frontend/mobile). For interviews, use what you're comfortable with.",
  },
  {
    question: 'Does Uber have offices in India?',
    answer:
      'Yes! Uber has a major engineering hub in Bangalore and offices in Hyderabad and Gurugram. India teams work on Rides, Eats, Freight, Maps, and platform infrastructure. Many global teams are based in India.',
  },
  {
    question: 'How does Uber system design interview work?',
    answer:
      "For L5+, you'll design systems like ride-matching, surge pricing, ETA prediction, or real-time tracking. Focus on: high availability, low latency, geo-spatial indexing, and handling millions of requests.",
  },
  {
    question: 'What is work culture like at Uber?',
    answer:
      'Fast-paced, impact-driven culture. Uber has evolved significantly since early days. Now emphasizes sustainability, work-life balance, and doing the right thing. Remote-friendly with hybrid options.',
  },
  {
    question: 'How important are referrals at Uber?',
    answer:
      "Referrals help but aren't essential. They ensure your resume gets reviewed and can expedite the process. Strong applications without referrals also succeed regularly.",
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'Know Uber Products',
    description:
      'Use Uber Rides, Eats, and explore the driver app. Understand the marketplace from all sides.',
  },
  {
    icon: Code,
    title: 'Master Go/Python',
    description:
      "Uber's primary languages are Go and Python. Familiarity helps in system design discussions.",
  },
  {
    icon: MapPin,
    title: 'Learn Geo-Spatial',
    description:
      'Many Uber systems involve location. Understand geo-hashing, spatial indexing, and mapping concepts.',
  },
  {
    icon: Zap,
    title: 'Think Real-Time',
    description:
      'Uber is real-time. In system design, discuss low latency, consistency trade-offs, and event-driven architecture.',
  },
  {
    icon: MessageSquare,
    title: 'Own Your Stories',
    description:
      'Uber values ownership. In behavioral rounds, show initiative, accountability, and learning from failures.',
  },
  {
    icon: Star,
    title: 'Show Impact',
    description:
      'Quantify your achievements. Uber wants engineers who drive measurable business outcomes.',
  },
];

export default function UberCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Uber',
            description:
              'Uber is a technology platform connecting people with rides, food delivery, freight transportation, and more.',
            url: 'https://www.uber.com',
            sameAs: [
              'https://www.linkedin.com/company/uber',
              'https://twitter.com/Uber',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800">
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
                Move People Forward
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Uber Careers 2026
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join the company reimagining how people move and eat. Build
                products used by millions across 10,000+ cities worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <a
                    href="https://www.uber.com/careers"
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
                <p className="text-2xl font-bold text-white">2009</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">32,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Globe className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Cities</p>
                <p className="text-2xl font-bold text-white">10,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Trips Completed</p>
                <p className="text-2xl font-bold text-white">40B+</p>
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
                ₹20 LPA - ₹2 Cr+
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3-5 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-7 Rounds</p>
              <p className="text-sm text-muted-foreground">Total Interviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Hybrid</p>
              <p className="text-sm text-muted-foreground">Work Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Uber</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Uber, founded by Travis Kalanick and Garrett Camp in 2009, has
              transformed from a simple ride-sharing app into a global mobility
              platform. Operating in 10,000+ cities across 70+ countries, Uber
              facilitates millions of trips and deliveries daily.
            </p>
            <p>
              Beyond rides, Uber has expanded into Eats (food delivery), Freight
              (trucking), and various other mobility solutions. The
              company&apos;s engineering challenges span real-time systems,
              massive scale, geo-spatial computing, and sophisticated
              marketplace optimization.
            </p>
            <p>
              Uber&apos;s India engineering hub in Bangalore is one of its
              largest globally. India-based teams work on core platform
              infrastructure, marketplace systems, payments, and safety
              features. It&apos;s a key center for Uber&apos;s global
              engineering efforts.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              Uber&apos;s Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              &quot;We reimagine the way the world moves for the better.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Uber Cultural Norms</h2>
              <p className="text-muted-foreground">
                The values that define Uber&apos;s culture
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {uberValues.map((v) => (
                <Card
                  key={v.trait}
                  className="p-4"
                >
                  <h3 className="mb-2 text-sm font-semibold">{v.trait}</h3>
                  <p className="text-xs text-muted-foreground">
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
            <h2 className="mb-4 text-3xl font-bold">Teams at Uber</h2>
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
                Uber Salary Structure 2026
              </h2>
              <p className="text-muted-foreground">
                Competitive compensation with significant equity
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  L3 (Entry)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹20-32 LPA
                </p>
              </Card>
              <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  L5 (Senior)
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ₹65-130 LPA
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  L6+ (Staff)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹1.2-2+ Cr
                </p>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Salary Breakdown</CardTitle>
                <CardDescription>
                  Including base, RSUs, and bonus
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
            <h2 className="mb-4 text-3xl font-bold">Uber Interview Process</h2>
            <p className="text-muted-foreground">
              What to expect when interviewing at Uber
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
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
                How to Get Hired at Uber
              </h2>
              <p className="text-muted-foreground">
                Tips from engineers who cracked Uber interviews
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
              Benefits & Perks at Uber
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
                Common questions about Uber careers
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Join Uber?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Help move people and things in 10,000+ cities worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <a
                href="https://www.uber.com/careers"
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
              <Link href="/companies/meta">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Meta</h3>
                  <p className="text-sm text-muted-foreground">Social & Tech</p>
                </Card>
              </Link>
              <Link href="/companies/flipkart">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Flipkart</h3>
                  <p className="text-sm text-muted-foreground">E-commerce</p>
                </Card>
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ContextualToolLinks context="interview" />
              <CompanyComparisonLinks currentCompany="Uber" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
