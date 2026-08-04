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
  Tv,
  Play,
  Film,
  Database,
  BarChart3,
  Layers,
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
  title: 'Netflix Careers 2026 | Jobs, Salary & Interview Guide | Sproutern',
  description:
    'Complete guide to Netflix careers in 2026. Explore Netflix salary (₹40-2.5 Cr+), interview process, levels, teams, and the unique Freedom & Responsibility culture.',
  keywords:
    'netflix careers, netflix salary india, netflix interview questions, netflix jobs, netflix swe, netflix interview experience, netflix hiring 2026, netflix culture',
  openGraph: {
    title: 'Netflix Careers 2026 - Complete Interview & Salary Guide',
    description:
      'Everything you need to know about working at Netflix - the streaming giant with the highest pay.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/netflix',
  },
  alternates: { canonical: 'https://sproutern.dpdns.org/companies/netflix' },
};

const salaryData = [
  {
    role: 'Software Engineer (L3)',
    level: 'L3',
    experience: '0-3 years',
    ctc: '₹40-60 LPA',
    base: '₹35-52 LPA',
    stocks: '₹0 (Cash)',
    bonus: '₹5-8 LPA',
  },
  {
    role: 'Software Engineer (L4)',
    level: 'L4',
    experience: '3-6 years',
    ctc: '₹70-110 LPA',
    base: '₹60-95 LPA',
    stocks: '₹0 (Cash)',
    bonus: '₹10-15 LPA',
  },
  {
    role: 'Senior SWE (L5)',
    level: 'L5',
    experience: '6-10 years',
    ctc: '₹1.1-1.6 Cr',
    base: '₹95-140 LPA',
    stocks: '₹0 (Cash)',
    bonus: '₹15-25 LPA',
  },
  {
    role: 'Staff Engineer (L6)',
    level: 'L6',
    experience: '10-15 years',
    ctc: '₹1.6-2.2 Cr',
    base: '₹1.4-1.9 Cr',
    stocks: '₹0 (Cash)',
    bonus: '₹20-35 LPA',
  },
  {
    role: 'Principal Engineer (L7)',
    level: 'L7',
    experience: '15+ years',
    ctc: '₹2.2-3+ Cr',
    base: '₹1.9-2.6 Cr',
    stocks: '₹0 (Cash)',
    bonus: '₹30-50 LPA',
  },
  {
    role: 'Product Manager',
    level: 'PM',
    experience: '5-10 years',
    ctc: '₹90-150 LPA',
    base: '₹80-130 LPA',
    stocks: '₹0',
    bonus: '₹15-25 LPA',
  },
  {
    role: 'Data Scientist',
    level: 'L4-5',
    experience: '4-8 years',
    ctc: '₹80-140 LPA',
    base: '₹70-120 LPA',
    stocks: '₹0',
    bonus: '₹12-20 LPA',
  },
  {
    role: 'ML Engineer',
    level: 'L4-5',
    experience: '4-8 years',
    ctc: '₹85-150 LPA',
    base: '₹75-130 LPA',
    stocks: '₹0',
    bonus: '₹12-22 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'M1',
    experience: '10+ years',
    ctc: '₹1.4-2 Cr',
    base: '₹1.2-1.7 Cr',
    stocks: '₹0',
    bonus: '₹20-35 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter Screen',
    duration: '30-45 mins',
    description:
      'Deep discussion about your background, Netflix culture fit, and expectations. Netflix recruiters assess for culture from day one.',
    tips: [
      'Know Netflix culture deck',
      'Research their tech blog',
      'Show strong opinions',
      'Be authentic',
    ],
  },
  {
    round: 2,
    name: 'Technical Phone Screen',
    duration: '60 mins',
    description:
      'Coding and discussion with an engineer. Focus on practical problem-solving and code quality.',
    tips: [
      'Code in your best language',
      'Discuss trade-offs',
      'Think aloud',
      'Consider edge cases',
    ],
  },
  {
    round: 3,
    name: 'Onsite: Coding Round',
    duration: '60 mins',
    description:
      'Deep dive into coding. Netflix values practical, production-ready code over leetcode-style problems.',
    tips: [
      'Write clean, testable code',
      'Focus on readability',
      'Discuss production concerns',
      'Show experience',
    ],
  },
  {
    round: 4,
    name: 'Onsite: System Design',
    duration: '60 mins',
    description:
      'Design a streaming/media system. Netflix expects you to drive the conversation and make decisions.',
    tips: [
      'Study Netflix architecture',
      'Know CDN, encoding',
      'Discuss microservices',
      'Make trade-off decisions',
    ],
  },
  {
    round: 5,
    name: 'Onsite: Technical Discussion',
    duration: '60 mins',
    description:
      'Deep dive into a past project. Netflix values people who can go deep on technical decisions.',
    tips: [
      'Pick your best project',
      'Know every decision',
      'Discuss alternatives',
      'Show ownership',
    ],
  },
  {
    round: 6,
    name: 'Onsite: Culture/Values Fit',
    duration: '60 mins',
    description:
      'Critical assessment of Netflix culture fit. Test Freedom & Responsibility alignment.',
    tips: [
      'Know all Netflix values',
      'Have examples ready',
      'Show strong opinions',
      'Be genuinely you',
    ],
  },
  {
    round: 7,
    name: 'Hiring Manager Round',
    duration: '45-60 mins',
    description:
      'Discussion with hiring manager about role, team, and expectations. Career goals alignment.',
    tips: [
      'Show genuine interest',
      'Ask probing questions',
      'Discuss growth',
      'Be direct',
    ],
  },
];

const teams = [
  {
    name: 'Streaming Platform',
    icon: Play,
    description:
      'Build the core streaming experience for 250M+ subscribers worldwide. Video playback at scale.',
    tech: ['Java', 'Python', 'FFmpeg', 'AWS'],
  },
  {
    name: 'Content Engineering',
    icon: Film,
    description:
      'Power Netflix originals production - from scripts to screens. Studio technology.',
    tech: ['Python', 'React', 'ML', 'Media'],
  },
  {
    name: 'Personalization',
    icon: Star,
    description:
      'Build recommendation systems that decide what 250M people watch. ML at massive scale.',
    tech: ['ML', 'Python', 'Spark', 'Kafka'],
  },
  {
    name: 'Data Platform',
    icon: Database,
    description:
      'Handle petabytes of data. Build real-time analytics and data infrastructure.',
    tech: ['Spark', 'Flink', 'Iceberg', 'Python'],
  },
  {
    name: 'Consumer UI',
    icon: Tv,
    description:
      'Build Netflix apps for 1000+ device types - TVs, phones, tablets, consoles.',
    tech: ['React', 'Swift', 'Kotlin', 'JS'],
  },
  {
    name: 'Infrastructure',
    icon: Layers,
    description:
      'Run Netflix at global scale. Chaos engineering, microservices, cloud-native systems.',
    tech: ['Java', 'Go', 'AWS', 'Kubernetes'],
  },
  {
    name: 'Growth & Payments',
    icon: TrendingUp,
    description:
      'Optimize subscriber acquisition, retention, and global payments.',
    tech: ['Java', 'Python', 'ML', 'Payments'],
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    description:
      'Build A/B testing platform, experimentation infrastructure, and business intelligence.',
    tech: ['Python', 'Spark', 'SQL', 'ML'],
  },
];

const netflixValues = [
  {
    trait: 'Judgment',
    description:
      'You make wise decisions despite ambiguity. You identify root causes, not just symptoms.',
  },
  {
    trait: 'Communication',
    description:
      'You are concise and articulate. You listen well and seek to understand before reacting.',
  },
  {
    trait: 'Curiosity',
    description:
      'You learn rapidly and eagerly. You contribute outside your specialty.',
  },
  {
    trait: 'Courage',
    description:
      "You say what you think when it's in the best interest of Netflix, even if uncomfortable.",
  },
  {
    trait: 'Passion',
    description:
      "You care intensely about Netflix's success. You celebrate wins and are resilient in setbacks.",
  },
  {
    trait: 'Selflessness',
    description:
      "You seek what's best for Netflix, not what's best for you or your group.",
  },
  {
    trait: 'Innovation',
    description:
      'You create new ideas that prove useful. You challenge prevailing assumptions.',
  },
  {
    trait: 'Inclusion',
    description:
      'You collaborate effectively with people of diverse backgrounds and cultures.',
  },
  {
    trait: 'Integrity',
    description:
      'You are known for candor, authenticity, and transparency. You admit mistakes freely.',
  },
  {
    trait: 'Impact',
    description:
      'You focus on great results rather than process. You exhibit bias-to-action.',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Top-of-market pay',
      'All cash (no RSUs)',
      'Annual market adjustments',
      'Choose your salary/stock split',
      'No negotiation needed',
      'Transparency in pay',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Unlimited PTO',
      'No vacation tracking',
      'Parental leave (52 weeks)',
      'Work from anywhere',
      'No approval needed',
      'Trust-based',
    ],
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Premium health coverage',
      'Mental health support',
      'Fertility benefits',
      'Global coverage',
      'Wellness programs',
      'On-demand healthcare',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'Work from anywhere',
      'Home office setup',
      'Latest equipment',
      'No expense policies',
      "Act in Netflix's interest",
      'Freedom to choose',
    ],
  },
  {
    icon: BookOpen,
    title: 'Growth',
    items: [
      'No formal training',
      'Learn from best people',
      'Internal mobility',
      'Cross-functional work',
      'Direct feedback',
      'Rapid growth',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks',
    items: [
      'Netflix subscription free',
      'Travel benefits',
      'Meal benefits',
      'No approval for expenses',
      'Phone/internet covered',
      'Team events',
    ],
  },
];

const faqs = [
  {
    question: 'What is the Netflix culture like?',
    answer:
      'Netflix has a unique "Freedom & Responsibility" culture. No vacation policy, no approval processes, top-of-market pay. In return, they expect exceptional performance. Read the Netflix Culture Deck - it\'s famous for a reason.',
  },
  {
    question: 'Does Netflix give RSUs/equity?',
    answer:
      "No! Netflix pays entirely in cash. You can choose to allocate some of your compensation to buy Netflix stock, but there's no mandatory equity. This means you get full value immediately with no vesting period.",
  },
  {
    question: 'What is Netflix salary like in India?',
    answer:
      'Netflix pays among the highest in India. L3 (entry): ₹40-60 LPA, L5 (Senior): ₹1.1-1.6 Cr, L6+: ₹1.6-3+ Cr. All cash, no RSUs. Annual adjustments keep you at top-of-market.',
  },
  {
    question: 'How hard is it to get into Netflix?',
    answer:
      'Extremely competitive. Netflix hires only "stunning colleagues" and has a high bar. Culture fit is as important as technical skills. Many candidates fail the culture round even with strong technical performance.',
  },
  {
    question: 'Does Netflix have offices in India?',
    answer:
      'Netflix has a growing presence in India (Mumbai for content, potential engineering hub). Most engineering roles are in Los Gatos (HQ), Los Angeles, or remote. Some roles allow work from India.',
  },
  {
    question: 'What programming languages does Netflix use?',
    answer:
      "Primary stack: Java (microservices), Python (data/ML), JavaScript (UI), Go (infra). Netflix uses AWS heavily. For interviews, use your strongest language - they don't care about specific syntax.",
  },
  {
    question: 'What is the "Keeper Test" at Netflix?',
    answer:
      'Netflix managers ask: "Would I fight to keep this person?" If the answer is no, they part ways with a generous severance. This keeps teams of only high performers. It\'s controversial but central to Netflix culture.',
  },
  {
    question: 'How is Netflix interview different from FAANG?',
    answer:
      'Netflix interviews are more conversational, less leetcode-focused. They want to see how you think about real problems, not algorithm tricks. Culture assessment is more rigorous than at other companies.',
  },
];

const hiringTips = [
  {
    icon: BookOpen,
    title: 'Read the Culture Deck',
    description:
      'The Netflix Culture Deck is required reading. Internalize Freedom & Responsibility before interviewing.',
  },
  {
    icon: Code,
    title: 'Production-Ready Code',
    description:
      'Netflix cares more about clean, testable, production-ready code than algorithmic puzzles.',
  },
  {
    icon: MessageSquare,
    title: 'Have Strong Opinions',
    description:
      'Netflix values people with strong opinions, loosely held. Be opinionated but open to changing your mind.',
  },
  {
    icon: Target,
    title: 'Show Real Impact',
    description:
      'Netflix wants "stunning colleagues" who drive massive impact. Quantify your achievements.',
  },
  {
    icon: Star,
    title: 'Be Authentically You',
    description:
      "Netflix culture fit is critical. Don't fake it - they'll know. Be genuine about who you are.",
  },
  {
    icon: Zap,
    title: 'Study Netflix Tech Blog',
    description:
      'Read about their architecture: microservices, Zuul, Eureka, Hystrix. Know their tech decisions.',
  },
];

export default function NetflixCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Netflix',
            description:
              'Netflix is a streaming entertainment service offering movies, TV shows, and original content to 250M+ subscribers worldwide.',
            url: 'https://www.netflix.com',
            sameAs: [
              'https://www.linkedin.com/company/netflix',
              'https://twitter.com/Netflix',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-black">
        <div className="container relative py-16 md:py-24">
          <Link
            href="/companies"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← Back to Companies
          </Link>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-red-500/30 text-white hover:bg-red-500/40">
                Freedom & Responsibility
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Netflix Careers 2026
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join the company that reinvented entertainment. Work with
                stunning colleagues building products for 250M+ subscribers
                worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700"
                >
                  <a
                    href="https://jobs.netflix.com"
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
                <p className="text-2xl font-bold text-white">1997</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">13,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Globe className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Subscribers</p>
                <p className="text-2xl font-bold text-white">250M+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Countries</p>
                <p className="text-2xl font-bold text-white">190+</p>
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
              <p className="text-3xl font-bold text-red-600">
                ₹40 LPA - ₹3 Cr+
              </p>
              <p className="text-sm text-muted-foreground">
                Salary Range (All Cash)
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">4-6 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">6-7 Rounds</p>
              <p className="text-sm text-muted-foreground">Total Interviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">Unlimited</p>
              <p className="text-sm text-muted-foreground">PTO Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Netflix</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Netflix, founded by Reed Hastings and Marc Randolph in 1997,
              transformed from a DVD-by-mail service into the world&apos;s
              leading streaming entertainment platform. With 250M+ subscribers
              across 190+ countries, Netflix has fundamentally changed how the
              world consumes content.
            </p>
            <p>
              The company pioneered binge-watching, revolutionized original
              content with shows like House of Cards and Stranger Things, and
              built one of the most sophisticated recommendation systems in the
              world. Netflix engineers work at the intersection of entertainment
              and cutting-edge technology.
            </p>
            <p>
              Netflix is famous for its unique culture documented in the Netflix
              Culture Deck - emphasizing Freedom & Responsibility, high
              performance, and treating employees like adults. No vacation
              policies, no expense approvals, but also no tolerance for
              mediocrity.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
            <h3 className="mb-2 text-lg font-semibold text-red-800 dark:text-red-200">
              Netflix Culture
            </h3>
            <p className="text-red-700 dark:text-red-300">
              &quot;We believe a company\'s actual values are shown by who gets
              rewarded or let go. At Netflix, we particularly value: judgment,
              communication, curiosity, courage, passion, selflessness,
              innovation, inclusion, integrity, and impact.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Netflix Values</h2>
              <p className="text-muted-foreground">
                The behaviors and skills Netflix values most
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {netflixValues.map((v) => (
                <Card
                  key={v.trait}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold text-red-600">{v.trait}</h3>
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
            <h2 className="mb-4 text-3xl font-bold">Teams at Netflix</h2>
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
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900">
                    <team.icon className="h-6 w-6 text-red-600" />
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
                Netflix Salary Structure 2026
              </h2>
              <p className="text-muted-foreground">
                Highest-paying company globally - All cash, no RSUs
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  L3 (Entry)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹40-60 LPA
                </p>
              </Card>
              <Card className="border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
                <Briefcase className="mb-2 h-8 w-8 text-red-600" />
                <p className="text-sm text-red-700 dark:text-red-400">
                  L5 (Senior)
                </p>
                <p className="text-3xl font-bold text-red-700 dark:text-red-400">
                  ₹1.1-1.6 Cr
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  L6+ (Staff)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹1.6-3+ Cr
                </p>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Salary Breakdown</CardTitle>
                <CardDescription>
                  All compensation is cash - no vesting, no waiting
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
                            <Badge
                              variant="outline"
                              className="bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300"
                            >
                              {s.level}
                            </Badge>
                          </td>
                          <td className="py-4 text-muted-foreground">
                            {s.experience}
                          </td>
                          <td className="py-4 font-semibold text-red-600">
                            {s.ctc}
                          </td>
                          <td className="hidden py-4 text-muted-foreground md:table-cell">
                            {s.base}
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
            <h2 className="mb-4 text-3xl font-bold">
              Netflix Interview Process
            </h2>
            <p className="text-muted-foreground">
              Culture fit is as important as technical skills
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
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
                How to Get Hired at Netflix
              </h2>
              <p className="text-muted-foreground">
                Tips from engineers who joined Netflix
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hiringTips.map((tip) => (
                <Card
                  key={tip.title}
                  className="p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                    <tip.icon className="h-6 w-6 text-red-600" />
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
              Benefits & Perks at Netflix
            </h2>
            <p className="text-muted-foreground">
              Freedom to make decisions - no approvals needed
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <Card key={b.title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                    <b.icon className="h-5 w-5 text-red-600" />
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
                Common questions about Netflix careers
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Join Netflix?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Work with stunning colleagues and get paid top-of-market
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700"
            >
              <a
                href="https://jobs.netflix.com"
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
              <Link href="/companies/apple">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Apple</h3>
                  <p className="text-sm text-muted-foreground">Consumer Tech</p>
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
              <CompanyComparisonLinks currentCompany="Netflix" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
