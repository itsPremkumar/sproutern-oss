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
  Eye,
  Headphones,
  Video,
  Image,
  Shield,
  Layers,
  Glasses,
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
  title: 'Meta Careers 2026 | Jobs, Salary & Interview Guide | Sproutern',
  description:
    'Complete guide to Meta (Facebook) careers in 2026. Explore Meta salary structure (₹30-1.5 Cr+), interview process, E-levels, teams, and tips to get hired at the social media giant.',
  keywords:
    'meta careers, facebook careers, meta salary, meta interview questions, meta jobs, meta swe, meta interview experience, facebook interview preparation 2026, meta e4 e5 e6',
  openGraph: {
    title: 'Meta Careers 2026 - Complete Interview & Salary Guide',
    description:
      'Everything you need to know about working at Meta (Facebook, Instagram, WhatsApp).',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/meta',
  },
  alternates: { canonical: 'https://sproutern.dpdns.org/companies/meta' },
};

const salaryData = [
  {
    role: 'Software Engineer (E3)',
    level: 'E3',
    experience: '0-2 years',
    ctc: '₹30-45 LPA',
    base: '₹22-32 LPA',
    stocks: '₹6-10 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Software Engineer (E4)',
    level: 'E4',
    experience: '2-5 years',
    ctc: '₹50-80 LPA',
    base: '₹38-55 LPA',
    stocks: '₹10-20 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Senior SWE (E5)',
    level: 'E5',
    experience: '5-10 years',
    ctc: '₹90-140 LPA',
    base: '₹60-90 LPA',
    stocks: '₹25-40 LPA',
    bonus: '₹6-12 LPA',
  },
  {
    role: 'Staff Engineer (E6)',
    level: 'E6',
    experience: '10-15 years',
    ctc: '₹1.4-2 Cr',
    base: '₹90-120 LPA',
    stocks: '₹45-70 LPA',
    bonus: '₹10-18 LPA',
  },
  {
    role: 'Sr Staff Engineer (E7)',
    level: 'E7',
    experience: '15+ years',
    ctc: '₹2-3+ Cr',
    base: '₹1.2-1.5 Cr',
    stocks: '₹70-120 LPA',
    bonus: '₹15-30 LPA',
  },
  {
    role: 'Product Manager (IC4)',
    level: 'IC4',
    experience: '3-6 years',
    ctc: '₹55-85 LPA',
    base: '₹40-60 LPA',
    stocks: '₹12-20 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Senior PM (IC5)',
    level: 'IC5',
    experience: '6-10 years',
    ctc: '₹95-150 LPA',
    base: '₹65-95 LPA',
    stocks: '₹25-45 LPA',
    bonus: '₹8-12 LPA',
  },
  {
    role: 'Data Scientist (IC4)',
    level: 'IC4',
    experience: '3-6 years',
    ctc: '₹55-90 LPA',
    base: '₹40-62 LPA',
    stocks: '₹12-22 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'M1',
    experience: '10+ years',
    ctc: '₹1.5-2.2 Cr',
    base: '₹95-130 LPA',
    stocks: '₹50-80 LPA',
    bonus: '₹12-20 LPA',
  },
  {
    role: 'Research Scientist',
    level: 'IC4-IC5',
    experience: '3-8 years',
    ctc: '₹70-130 LPA',
    base: '₹50-85 LPA',
    stocks: '₹16-35 LPA',
    bonus: '₹5-10 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter Screen',
    duration: '30 mins',
    description:
      'Initial call with recruiter to discuss background, role fit, and interview expectations.',
    tips: [
      'Know Meta products deeply',
      'Prepare your story',
      'Ask about team/role',
      'Understand timeline',
    ],
  },
  {
    round: 2,
    name: 'Technical Phone Screen',
    duration: '45 mins',
    description:
      'Coding interview via CoderPad. One medium-hard algorithm problem with focus on optimal solutions.',
    tips: [
      'Practice on CoderPad',
      'Think aloud constantly',
      'Optimize your solution',
      'Discuss trade-offs',
    ],
  },
  {
    round: 3,
    name: 'Onsite: Coding 1',
    duration: '45 mins',
    description:
      'First coding round focusing on data structures and algorithms. Expect follow-up questions.',
    tips: [
      'Master arrays, trees, graphs',
      'Write bug-free code',
      'Handle edge cases',
      'Analyze complexity',
    ],
  },
  {
    round: 4,
    name: 'Onsite: Coding 2',
    duration: '45 mins',
    description:
      'Second coding round with different problem type. May involve strings, DP, or combinatorics.',
    tips: [
      'Different from round 1',
      'Show versatility',
      'Stay calm under pressure',
      'Ask good questions',
    ],
  },
  {
    round: 5,
    name: 'Onsite: System Design',
    duration: '45 mins',
    description:
      'Design scalable systems for E4+. Design Facebook-like features: News Feed, Messenger, Stories.',
    tips: [
      "Study Meta's architecture",
      'Know TAO, Cassandra, GraphQL',
      'Start with requirements',
      'Discuss scaling patterns',
    ],
  },
  {
    round: 6,
    name: 'Onsite: Behavioral',
    duration: '45 mins',
    description:
      'Assess Meta Core Values fit. Questions about collaboration, feedback, and impact.',
    tips: [
      'Know Meta Core Values',
      'Prepare 6-8 STAR stories',
      'Show builder mentality',
      'Demonstrate impact',
    ],
  },
  {
    round: 7,
    name: 'Hiring Committee Review',
    duration: 'N/A',
    description:
      'All interview feedback reviewed by hiring committee. Decision made within 1-2 weeks.',
    tips: [
      'No action needed',
      'Recruiter keeps you updated',
      'Process takes 1-2 weeks',
      'May ask for additional signal',
    ],
  },
];

const teams = [
  {
    name: 'Facebook App',
    icon: Users,
    description:
      'Core Facebook experience: News Feed, Stories, Groups, Events, and social interactions for 3B+ users.',
    roles: ['SWE', 'iOS/Android', 'ML', 'PM'],
    tech: ['React', 'Hack', 'GraphQL', 'ML'],
  },
  {
    name: 'Instagram',
    icon: Image,
    description:
      'Build features for 2B+ users: Reels, Stories, Shopping, Creators, and visual discovery.',
    roles: ['SWE', 'Mobile', 'ML', 'PM'],
    tech: ['Python', 'React Native', 'ML', 'Django'],
  },
  {
    name: 'WhatsApp',
    icon: MessageSquare,
    description:
      "World's largest messaging platform: E2E encryption, payments, business messaging at scale.",
    roles: ['SWE', 'Mobile', 'Security', 'PM'],
    tech: ['Erlang', 'C++', 'Java', 'Security'],
  },
  {
    name: 'Meta AI',
    icon: Cpu,
    description:
      'Cutting-edge AI research: LLaMA, PyTorch, computer vision, NLP, and AI infrastructure.',
    roles: ['Research Scientist', 'ML Engineer', 'SWE'],
    tech: ['PyTorch', 'Python', 'C++', 'CUDA'],
  },
  {
    name: 'Reality Labs (AR/VR)',
    icon: Glasses,
    description:
      'Building the metaverse: Quest VR, Ray-Ban glasses, Horizon Worlds, and future computing.',
    roles: ['SWE', '3D Graphics', 'CV', 'HW'],
    tech: ['C++', 'Unity', 'Computer Vision', 'ML'],
  },
  {
    name: 'Ads & Commerce',
    icon: TrendingUp,
    description:
      "Powers 98% of Meta's revenue. Ad targeting, measurement, shopping, and creator monetization.",
    roles: ['SWE', 'Data Scientist', 'ML', 'PM'],
    tech: ['ML', 'Spark', 'Python', 'C++'],
  },
  {
    name: 'Infrastructure',
    icon: Layers,
    description:
      'Run Meta at global scale: data centers, networks, TAO (graph database), and internal tools.',
    roles: ['SWE', 'SRE', 'Network Engineer'],
    tech: ['C++', 'Python', 'Rust', 'Linux'],
  },
  {
    name: 'Integrity & Safety',
    icon: Shield,
    description:
      'Protect billions of users: content moderation, anti-abuse, misinformation, and security.',
    roles: ['SWE', 'ML', 'Policy', 'Security'],
    tech: ['ML', 'Python', 'NLP', 'Graphs'],
  },
];

const metaValues = [
  {
    trait: 'Move Fast',
    description:
      'Ship quickly, iterate rapidly, and learn from real-world feedback. Speed creates value.',
  },
  {
    trait: 'Focus on Long-Term Impact',
    description:
      'Build things that matter at scale. Think in terms of billions of users and years of impact.',
  },
  {
    trait: 'Build Awesome Things',
    description:
      "Craft high-quality products you're proud of. Engineering excellence matters.",
  },
  {
    trait: 'Be Open',
    description:
      'Share information freely. Internal transparency enables better decision-making.',
  },
  {
    trait: 'Be Bold',
    description:
      "Take risks, challenge assumptions, and pursue ambitious goals. Safe choices don't change the world.",
  },
  {
    trait: 'Live in the Future',
    description:
      'Understand where technology and society are headed. Build for tomorrow, not just today.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Premium medical coverage',
      'Mental health support',
      'On-site wellness centers',
      'Fertility benefits',
      'Fitness reimbursement',
      'Health coaching',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Unlimited PTO (US model)',
      '4 months parental leave',
      'Wellness days',
      'Volunteer time off',
      'Sabbatical after 5 years',
      'Flexible work hours',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Top-of-market salary',
      'RSUs (4-year vesting)',
      'Annual bonus (15-25%)',
      'Equity refreshers',
      'Joining bonus',
      'Relocation packages',
    ],
  },
  {
    icon: BookOpen,
    title: 'Growth & Learning',
    items: [
      'Learning stipend',
      'Internal mobility',
      'Bootcamps & training',
      'Conference attendance',
      'Mentorship programs',
      'Open source contributions',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'Latest MacBook Pro/Linux',
      'Remote work flexibility',
      'World-class offices',
      'Home office setup',
      'Ergonomic equipment',
      'Tech support',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks & Food',
    items: [
      'Free gourmet meals',
      'Snacks & beverages',
      'Commute benefits',
      'On-site amenities',
      'Employee discounts',
      'Team events',
    ],
  },
];

const faqs = [
  {
    question: 'How hard is it to get into Meta?',
    answer:
      'Very competitive with ~0.5-1% acceptance rate for E3-E4 roles. Meta receives 1M+ applications annually but hires thousands. Strong DSA, system design (E4+), and behavioral alignment are essential. Many succeed on 2nd or 3rd attempt.',
  },
  {
    question: 'What is the salary for freshers at Meta India?',
    answer:
      'E3 (entry) roles offer ₹30-45 LPA including base (₹22-32 LPA), RSUs (₹6-10 LPA), and bonus. This is among the highest for fresh graduates in India. Top campus hires may get higher offers.',
  },
  {
    question: "What is Meta's E-level system?",
    answer:
      'Meta uses E-levels: E3 (entry IC), E4 (IC), E5 (Senior), E6 (Staff), E7 (Sr Staff), E8 (Principal), E9 (Distinguished). Each level roughly doubles in scope and impact. Promotions are based on sustained performance at the next level.',
  },
  {
    question: "What's the difference between Meta and Facebook?",
    answer:
      "Meta is the parent company (rebranded Oct 2021) that owns Facebook, Instagram, WhatsApp, Messenger, Reality Labs, and other properties. When applying, you're joining Meta but may work on any of these products.",
  },
  {
    question: 'How long does Meta interview process take?',
    answer:
      'Typically 4-8 weeks from application to offer. Phone screen within 2 weeks, onsite 1-2 weeks later, and decision 1-2 weeks after. Process can be faster for referrals or strong candidates.',
  },
  {
    question: 'Does Meta have offices in India?',
    answer:
      'Yes! Meta has offices in Gurugram, Hyderabad, and Bangalore. Teams include Facebook, Instagram, WhatsApp, Ads, Infrastructure, and AI. India is a key engineering hub with growing presence.',
  },
  {
    question: 'What programming languages are used at Meta?',
    answer:
      "Primary languages: Hack (PHP-derived), Python, C++, Java, JavaScript/React. For interviews, use Python, Java, or C++ - whatever you're most comfortable with. Syntax isn't evaluated heavily.",
  },
  {
    question: 'What is the behavioral interview like at Meta?',
    answer:
      "Meta's behavioral round assesses Core Values fit: Move Fast, Focus on Impact, Be Open, Be Bold. Prepare 6-8 STAR stories showing collaboration, feedback reception, ambiguity navigation, and impact.",
  },
  {
    question: 'Can I switch teams at Meta?',
    answer:
      'Yes! After 12-18 months, you can apply to internal positions. Meta encourages mobility and has an internal job board. Many engineers switch between Facebook, Instagram, WhatsApp, and other teams.',
  },
  {
    question: 'What is bootcamp at Meta?',
    answer:
      "New engineers join a 6-week Bootcamp where you work on small tasks across different teams before choosing your permanent team. This helps find the best team fit and ramps you up on Meta's systems.",
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'Master LeetCode',
    description:
      'Meta interviews are DSA-heavy. Solve 200+ problems, focusing on medium-hard. Trees, graphs, DP, and strings are common.',
  },
  {
    icon: Code,
    title: "Learn Meta's Stack",
    description:
      'Study GraphQL, TAO, Cassandra, and React for system design. Understand how Meta handles billions of requests.',
  },
  {
    icon: MessageSquare,
    title: 'Know Core Values',
    description:
      'Prepare STAR stories for Move Fast, Be Bold, Focus on Impact. Meta heavily weights cultural alignment.',
  },
  {
    icon: Star,
    title: 'Quantify Impact',
    description:
      'Meta loves metrics. "Increased DAU by 5%", "Reduced latency by 200ms", "Scaled to 10M users".',
  },
  {
    icon: Users,
    title: 'Get Referrals',
    description:
      'Referrals significantly increase interview chances and expedite process. Network with Meta employees.',
  },
  {
    icon: Zap,
    title: 'Practice on CoderPad',
    description:
      'Meta uses CoderPad for coding. Practice writing complete, bug-free code in this environment.',
  },
];

export default function MetaCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Meta',
            alternateName: 'Facebook',
            description:
              'Meta builds technologies that help people connect, find communities, and grow businesses across Facebook, Instagram, WhatsApp, and more.',
            url: 'https://www.meta.com',
            sameAs: [
              'https://www.linkedin.com/company/meta',
              'https://twitter.com/Meta',
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
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
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
                Building the Future of Connection
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Meta Careers 2026
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join Meta and build products that connect billions. Shape the
                future of social connection, AR/VR, and AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  <a
                    href="https://www.metacareers.com"
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
                <p className="text-2xl font-bold text-white">2004</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">70,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Globe className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Daily Users</p>
                <p className="text-2xl font-bold text-white">3.2B+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Glassdoor</p>
                <p className="text-2xl font-bold text-white">4.1 ★</p>
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
                ₹30 LPA - ₹3 Cr+
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4-8 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-6 Rounds</p>
              <p className="text-sm text-muted-foreground">Total Interviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">~0.5-1%</p>
              <p className="text-sm text-muted-foreground">Acceptance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Meta</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Meta, founded by Mark Zuckerberg in 2004 as Facebook, has grown
              from a college social network into one of the world&apos;s most
              influential technology companies. In October 2021, the company
              rebranded to Meta to reflect its expanded vision beyond social
              media into the metaverse.
            </p>
            <p>
              Today, Meta operates a family of apps that connect 3.2+ billion
              people daily: Facebook, Instagram, WhatsApp, and Messenger. The
              company&apos;s Reality Labs division is pioneering AR/VR
              technology with Quest headsets and Ray-Ban smart glasses, working
              toward a future of immersive computing.
            </p>
            <p>
              Meta&apos;s India presence includes offices in Gurugram,
              Hyderabad, and Bangalore, with thousands of engineers working on
              core products, ads, infrastructure, and AI. India is a strategic
              market (500M+ users) and a key engineering hub.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
            <h3 className="mb-2 text-lg font-semibold text-blue-800 dark:text-blue-200">
              Meta&apos;s Mission
            </h3>
            <p className="text-blue-700 dark:text-blue-300">
              &quot;Give people the power to build community and bring the world
              closer together.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Meta Core Values</h2>
              <p className="text-muted-foreground">
                The principles that guide how Meta builds and operates
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {metaValues.map((v) => (
                <Card
                  key={v.trait}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold text-blue-600">
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
            <h2 className="mb-4 text-3xl font-bold">Teams at Meta</h2>
            <p className="text-muted-foreground">
              Explore different products and domains across the Meta family
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
                Meta Salary Structure 2026
              </h2>
              <p className="text-muted-foreground">
                Among the highest-paying companies globally
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  E3 (Entry)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹30-45 LPA
                </p>
              </Card>
              <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  E5 (Senior)
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ₹90-140 LPA
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  E6+ (Staff)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹1.4-3+ Cr
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
            <h2 className="mb-4 text-3xl font-bold">Meta Interview Process</h2>
            <p className="text-muted-foreground">
              Step-by-step guide to crack Meta interviews in 2026
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
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
                How to Get Hired at Meta
              </h2>
              <p className="text-muted-foreground">
                Pro tips from engineers who cracked Meta interviews
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hiringTips.map((tip) => (
                <Card
                  key={tip.title}
                  className="p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                    <tip.icon className="h-6 w-6 text-blue-600" />
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
              Benefits & Perks at Meta
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
                Common questions about Meta careers and interviews
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Join Meta?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start your journey at the company building the future of connection
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <a
                href="https://www.metacareers.com"
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
              <Link href="/companies/meta/interview-questions">
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
              <Link href="/companies/flipkart">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Flipkart</h3>
                  <p className="text-sm text-muted-foreground">E-commerce</p>
                </Card>
              </Link>
            </div>

            {/* Strategic Internal Links */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ContextualToolLinks context="interview" />
              <CompanyComparisonLinks currentCompany="Meta" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
