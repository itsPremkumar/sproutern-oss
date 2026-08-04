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
  ShoppingCart,
  Search,
  FileText,
  MessageSquare,
  Target,
  Zap,
  BookOpen,
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  Cpu,
  Database,
  Smartphone,
  Wallet,
  Package,
  Truck,
  BarChart3,
  Shield,
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
  title: 'Flipkart Careers 2026 | Jobs, Salary & Interview Guide | Sproutern',
  description:
    "Complete guide to Flipkart careers in 2026. Explore Flipkart salary structure (₹18-90 LPA), interview process, SDE roles, teams, and tips to get hired at India's largest e-commerce company.",
  keywords:
    'flipkart careers, flipkart salary, flipkart interview questions, flipkart jobs, flipkart sde, flipkart interview experience, flipkart hiring process, flipkart interview preparation 2026',
  openGraph: {
    title: 'Flipkart Careers 2026 - Complete Interview & Salary Guide',
    description:
      "Everything you need to know about working at Flipkart - India's largest e-commerce platform.",
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/flipkart',
  },
  alternates: { canonical: 'https://sproutern.dpdns.org/companies/flipkart' },
};

const salaryData = [
  {
    role: 'SDE-1',
    level: 'SDE-1',
    experience: '0-2 years',
    ctc: '₹18-28 LPA',
    base: '₹12-18 LPA',
    stocks: '₹4-6 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'SDE-2',
    level: 'SDE-2',
    experience: '2-5 years',
    ctc: '₹32-50 LPA',
    base: '₹22-32 LPA',
    stocks: '₹6-12 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'SDE-3',
    level: 'SDE-3',
    experience: '5-8 years',
    ctc: '₹55-80 LPA',
    base: '₹35-50 LPA',
    stocks: '₹12-20 LPA',
    bonus: '₹8-10 LPA',
  },
  {
    role: 'Staff Engineer',
    level: 'Staff',
    experience: '8-12 years',
    ctc: '₹85-120 LPA',
    base: '₹55-75 LPA',
    stocks: '₹20-35 LPA',
    bonus: '₹10-15 LPA',
  },
  {
    role: 'Principal Engineer',
    level: 'Principal',
    experience: '12+ years',
    ctc: '₹1.2-1.8 Cr',
    base: '₹80-100 LPA',
    stocks: '₹35-60 LPA',
    bonus: '₹15-25 LPA',
  },
  {
    role: 'Product Manager',
    level: 'PM',
    experience: '3-6 years',
    ctc: '₹35-55 LPA',
    base: '₹25-38 LPA',
    stocks: '₹6-12 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Senior PM',
    level: 'Sr PM',
    experience: '6-10 years',
    ctc: '₹60-90 LPA',
    base: '₹42-60 LPA',
    stocks: '₹12-22 LPA',
    bonus: '₹6-10 LPA',
  },
  {
    role: 'Data Scientist',
    level: 'DS',
    experience: '2-5 years',
    ctc: '₹28-45 LPA',
    base: '₹20-30 LPA',
    stocks: '₹5-10 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'EM',
    experience: '10+ years',
    ctc: '₹90-140 LPA',
    base: '₹60-90 LPA',
    stocks: '₹25-40 LPA',
    bonus: '₹10-15 LPA',
  },
  {
    role: 'UX Designer',
    level: 'Design',
    experience: '2-5 years',
    ctc: '₹22-38 LPA',
    base: '₹16-26 LPA',
    stocks: '₹4-8 LPA',
    bonus: '₹2-4 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter/HR Screening',
    duration: '20-30 mins',
    description:
      'Initial call to discuss your background, current role, expectations, and verify basic eligibility criteria.',
    tips: [
      'Know Flipkart products well',
      'Prepare your introduction',
      'Ask smart questions about role',
      'Be clear about expectations',
    ],
  },
  {
    round: 2,
    name: 'Online Coding Assessment',
    duration: '90-120 mins',
    description:
      'HackerRank-based test with 2-3 DSA problems. Tests algorithmic thinking, coding speed, and problem-solving skills.',
    tips: [
      'Practice medium LeetCode problems',
      'Master arrays, strings, trees',
      'Optimize for time complexity',
      'Handle edge cases thoroughly',
    ],
  },
  {
    round: 3,
    name: 'Technical Round 1 (DSA)',
    duration: '60 mins',
    description:
      'Deep dive into data structures and algorithms. Expect 1-2 medium-hard problems with follow-up questions on optimization.',
    tips: [
      'Think aloud while solving',
      'Discuss multiple approaches',
      'Write clean, modular code',
      'Analyze time/space complexity',
    ],
  },
  {
    round: 4,
    name: 'Technical Round 2 (Problem Solving)',
    duration: '60 mins',
    description:
      'Another DSA round with different interviewer. May include problems from graphs, DP, or advanced data structures.',
    tips: [
      'Master graph algorithms',
      'Practice dynamic programming',
      'Show debugging skills',
      'Communicate thought process',
    ],
  },
  {
    round: 5,
    name: 'Machine Coding Round',
    duration: '90-120 mins',
    description:
      'Live coding round to build a small working system (like parking lot, elevator, split-wise). Tests LLD and OOP skills.',
    tips: [
      'Practice LLD problems',
      'Use design patterns',
      'Write extensible code',
      'Cover critical test cases',
    ],
  },
  {
    round: 6,
    name: 'System Design (SDE-2+)',
    duration: '45-60 mins',
    description:
      'For SDE-2 and above: Design scalable systems like product catalog, order management, or recommendation engine.',
    tips: [
      'Study e-commerce architectures',
      'Know caching, databases, queues',
      'Discuss trade-offs clearly',
      'Draw clear diagrams',
    ],
  },
  {
    round: 7,
    name: 'Hiring Manager Round',
    duration: '45-60 mins',
    description:
      'Behavioral and cultural fit interview. Discussion about past projects, leadership, conflict resolution, and career goals.',
    tips: [
      'Prepare STAR format stories',
      'Know your resume thoroughly',
      'Show ownership mindset',
      'Demonstrate impact with metrics',
    ],
  },
  {
    round: 8,
    name: 'HR Discussion & Offer',
    duration: '30-45 mins',
    description:
      'Final HR call for compensation discussion, team matching, start date negotiation, and background verification.',
    tips: [
      'Research market salaries',
      'Negotiate professionally',
      'Ask about growth path',
      'Clarify joining formalities',
    ],
  },
];

const teams = [
  {
    name: 'Commerce Platform',
    icon: ShoppingCart,
    description:
      'Build the core shopping experience - product discovery, search, cart, checkout, and the entire buyer journey.',
    roles: ['SDE', 'Frontend', 'PM', 'QA'],
    tech: ['Java', 'React', 'MySQL', 'Redis'],
  },
  {
    name: 'Supply Chain & Logistics',
    icon: Truck,
    description:
      "Power Ekart and Flipkart's delivery network. Route optimization, warehouse systems, and last-mile delivery.",
    roles: ['SDE', 'ML Engineer', 'Ops', 'PM'],
    tech: ['Java', 'Python', 'Kafka', 'ML'],
  },
  {
    name: 'Payments (PhonePe/FPay)',
    icon: Wallet,
    description:
      'Build secure payment infrastructure. UPI integrations, wallets, EMI, and financial services.',
    roles: ['SDE', 'Security', 'Backend', 'PM'],
    tech: ['Java', 'Go', 'PostgreSQL', 'Security'],
  },
  {
    name: 'Data Platform',
    icon: Database,
    description:
      'Handle petabytes of data. Build data pipelines, analytics platforms, and real-time processing systems.',
    roles: ['Data Engineer', 'ML Engineer', 'Platform SDE'],
    tech: ['Spark', 'Flink', 'Hadoop', 'Python'],
  },
  {
    name: 'Search & Discovery',
    icon: Search,
    description:
      'Power product search, recommendations, and personalization for 400M+ users. ML-driven discovery.',
    roles: ['ML Engineer', 'SDE', 'Research Scientist'],
    tech: ['Elasticsearch', 'ML', 'NLP', 'Python'],
  },
  {
    name: 'Seller Platform',
    icon: Package,
    description:
      'Build tools for lakhs of sellers. Catalog management, pricing, inventory, and seller analytics.',
    roles: ['SDE', 'PM', 'Frontend', 'Backend'],
    tech: ['Java', 'React', 'MongoDB', 'Kafka'],
  },
  {
    name: 'Ads Platform',
    icon: BarChart3,
    description:
      'Flipkart Ads business generating billions in revenue. Real-time bidding, ad serving, and attribution.',
    roles: ['SDE', 'Data Scientist', 'ML Engineer'],
    tech: ['Java', 'Scala', 'Kafka', 'ML'],
  },
  {
    name: 'Mobile Apps',
    icon: Smartphone,
    description:
      "Build India's most downloaded shopping app. Native Android/iOS and cross-platform development.",
    roles: ['Android', 'iOS', 'React Native', 'PM'],
    tech: ['Kotlin', 'Swift', 'React Native', 'Flutter'],
  },
];

const flipkartValues = [
  {
    trait: 'Customer First',
    description:
      'Every decision starts with how it impacts the customer. User obsession drives product development.',
  },
  {
    trait: 'Bias for Action',
    description:
      'Move fast, experiment, iterate. Speed matters in e-commerce. Perfect is the enemy of good.',
  },
  {
    trait: 'Ownership Mentality',
    description:
      'Think long-term, take responsibility, never say "it\'s not my job". Own outcomes, not just tasks.',
  },
  {
    trait: 'Be Bold',
    description:
      'Take calculated risks, challenge status quo, and innovate. Flipkart was built by bold bets.',
  },
  {
    trait: 'Stay Humble',
    description:
      "Learn from failures, seek feedback, stay grounded. Past success doesn't guarantee future wins.",
  },
  {
    trait: 'Build Trust',
    description:
      'Be transparent, deliver on commitments, and collaborate openly across teams and functions.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Comprehensive health insurance',
      'Mental health support',
      'Gym membership reimbursement',
      'Annual health checkups',
      'Parental health coverage',
      'COVID support programs',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off & Leave',
    items: [
      '25+ paid leaves per year',
      '26 weeks maternity leave',
      '4 weeks paternity leave',
      'Period leave policy',
      'Flexible work hours',
      'Work from home options',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Competitive base salary',
      'ESOPs/RSUs',
      'Performance bonus (15-20%)',
      'Joining bonus',
      'Annual increments',
      'Referral bonuses',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learning & Growth',
    items: [
      'Learning budget (₹50K+)',
      'Internal mobility program',
      'Leadership development',
      'Conference sponsorship',
      'Mentorship programs',
      'Tech talks & hackathons',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'MacBook Pro for engineers',
      'Modern office spaces',
      'Hybrid work policy',
      'Home office setup allowance',
      'High-speed internet reimbursement',
      'Ergonomic workstations',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks & Benefits',
    items: [
      'Free meals at office',
      'Employee discounts',
      'Commute allowance',
      'Relocation support',
      'Interest-free loans',
      'Insurance for family',
    ],
  },
];

const faqs = [
  {
    question: 'What is the Flipkart interview process for SDE-1?',
    answer:
      'Flipkart SDE-1 interview typically has 5-6 rounds: HR screening, online coding test (2-3 DSA problems), 2 technical DSA rounds, 1 machine coding round (LLD), and hiring manager round. The process takes 2-4 weeks. Focus on DSA, OOP concepts, and system design basics.',
  },
  {
    question: 'What is the salary for freshers at Flipkart?',
    answer:
      'Flipkart SDE-1 freshers get ₹18-28 LPA including base salary (₹12-18 LPA), ESOPs (₹4-6 LPA), and performance bonus (₹2-4 LPA). Campus hires from top IITs/NITs may get higher offers. The salary is among the best for Indian startups.',
  },
  {
    question: 'Is Flipkart interview harder than Amazon?',
    answer:
      "Both are challenging but different. Flipkart emphasizes machine coding and LLD more heavily than Amazon. Amazon focuses on Leadership Principles. Flipkart interviews are typically 5-6 rounds vs Amazon's 4-5. Both require strong DSA preparation.",
  },
  {
    question: 'What programming language should I use at Flipkart interviews?',
    answer:
      "Java is most common at Flipkart as it's their primary backend language. Python and C++ are also accepted. For machine coding rounds, Java or Python is preferred. Choose what you're most comfortable with.",
  },
  {
    question: 'How long does Flipkart interview process take?',
    answer:
      'Typically 2-4 weeks from first interview to offer. Campus hiring is faster (1-2 weeks). Lateral hiring may take longer due to multiple rounds. Keep following up with HR for updates.',
  },
  {
    question: 'What is the machine coding round at Flipkart?',
    answer:
      "Flipkart's machine coding round (90-120 mins) requires building a small working system like parking lot, splitwise, or elevator. Tests Object-Oriented Design, clean code, extensibility, and testing. Use design patterns and SOLID principles.",
  },
  {
    question: 'Does Flipkart hire freshers off-campus?',
    answer:
      'Yes! Flipkart has off-campus hiring through referrals, LinkedIn, and careers portal. However, campus hiring from IITs, NITs, and other top colleges is the primary channel for freshers. Referrals significantly increase chances.',
  },
  {
    question: 'What is work-life balance like at Flipkart?',
    answer:
      'Generally good for an e-commerce company. Expect more pressure during Big Billion Days sale and major launches. Normal weeks are 45-50 hours. Teams vary - some are more demanding than others. Hybrid work is common.',
  },
  {
    question: 'Where are Flipkart offices located?',
    answer:
      'Primary engineering hub is in Bangalore (Bellandur and Outer Ring Road). Other offices in Delhi-NCR, Mumbai, and Kolkata for specific functions. Most tech roles are Bangalore-based with hybrid work options.',
  },
  {
    question: 'How to prepare for Flipkart interview in 3 months?',
    answer:
      'Month 1: Master DSA fundamentals (arrays, strings, trees, graphs). Month 2: Practice LLD and machine coding (practice 10+ problems). Month 3: System design basics and mock interviews. Solve 200+ LeetCode problems focusing on medium difficulty.',
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'Master Machine Coding',
    description:
      'Flipkart heavily weighs machine coding rounds. Practice building systems like parking lot, splitwise, snake-ladders with clean OOP design.',
  },
  {
    icon: Code,
    title: 'DSA is Non-Negotiable',
    description:
      'Solve 200+ problems on LeetCode. Focus on trees, graphs, DP, and string algorithms. Flipkart DSA rounds are medium-hard difficulty.',
  },
  {
    icon: Database,
    title: 'Learn System Design',
    description:
      'For SDE-2+, study e-commerce systems: catalog, inventory, order management, payment flows. Know scaling patterns.',
  },
  {
    icon: MessageSquare,
    title: 'Prepare STAR Stories',
    description:
      'Hiring manager rounds focus on past impact. Quantify achievements: "Reduced latency by 40%", "Scaled to 10K TPS".',
  },
  {
    icon: Users,
    title: 'Get Strong Referrals',
    description:
      'Referrals increase interview chances significantly. Connect with Flipkart employees on LinkedIn. Attend tech meetups.',
  },
  {
    icon: Zap,
    title: 'Practice Under Pressure',
    description:
      'Machine coding round is time-bound. Practice building systems in 90 mins. Use online coding environments similar to actual interviews.',
  },
];

export default function FlipkartCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Flipkart',
            description:
              "Flipkart is India's leading e-commerce marketplace offering products across electronics, fashion, home, and more to 400M+ customers.",
            url: 'https://www.flipkart.com',
            sameAs: [
              'https://www.linkedin.com/company/flipkart',
              'https://twitter.com/Flipkart',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-blue-600">
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
                India&apos;s Largest E-Commerce Platform
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Flipkart Careers 2026
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join India&apos;s e-commerce pioneer and shape how 400 million+
                customers shop online. Build products at massive scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  <a
                    href="https://www.flipkartcareers.com"
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
                <p className="text-2xl font-bold text-white">2007</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">35,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Headquarters</p>
                <p className="text-2xl font-bold text-white">Bangalore</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Glassdoor</p>
                <p className="text-2xl font-bold text-white">3.9 ★</p>
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
                ₹18 LPA - ₹1.8 Cr
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2-4 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-7 Rounds</p>
              <p className="text-sm text-muted-foreground">Total Interviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">400M+</p>
              <p className="text-sm text-muted-foreground">Customers Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Flipkart</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Flipkart, founded by Sachin Bansal and Binny Bansal in 2007, is
              India&apos;s largest e-commerce marketplace. Starting as an online
              bookstore from a Bangalore apartment, Flipkart revolutionized
              online shopping in India and pioneered innovations like
              Cash-on-Delivery and Flipkart Assured.
            </p>
            <p>
              Acquired by Walmart in 2018 for $16 billion (the largest
              e-commerce acquisition ever), Flipkart continues to operate
              independently and aggressively expand. The company serves 400
              million+ registered users, processes millions of orders daily, and
              employs over 35,000 people.
            </p>
            <p>
              Working at Flipkart means solving problems at massive scale -
              handling Big Billion Days traffic (10x normal), building
              India&apos;s largest supply chain (Ekart), and competing with
              global giants like Amazon. Engineers here work on complex systems:
              real-time inventory, fraud detection, personalization, and
              cutting-edge ML applications.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-950">
            <h3 className="mb-2 text-lg font-semibold text-yellow-800 dark:text-yellow-200">
              Flipkart&apos;s Mission
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              &quot;To provide affordable access to the widest selection of
              products and services for every Indian.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Flipkart Values</h2>
              <p className="text-muted-foreground">
                The cultural traits that define the Flipkart DNA
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {flipkartValues.map((v) => (
                <Card
                  key={v.trait}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold text-yellow-600">
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
            <h2 className="mb-4 text-3xl font-bold">Teams at Flipkart</h2>
            <p className="text-muted-foreground">
              Explore different engineering domains at India&apos;s largest
              e-commerce company
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teams.map((team) => (
              <Card
                key={team.name}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900">
                    <team.icon className="h-6 w-6 text-yellow-600" />
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
                Flipkart Salary Structure 2026
              </h2>
              <p className="text-muted-foreground">
                Competitive compensation among Indian e-commerce companies
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  SDE-1 (Fresher)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹18-28 LPA
                </p>
              </Card>
              <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  SDE-3 (Senior)
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ₹55-80 LPA
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Staff+ (Principal)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹85 LPA - ₹1.8 Cr
                </p>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Salary Breakdown</CardTitle>
                <CardDescription>
                  Including base, ESOPs, and bonus components
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
                          ESOPs
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
            <h2 className="mb-4 text-3xl font-bold">
              Flipkart Interview Process
            </h2>
            <p className="text-muted-foreground">
              Step-by-step guide to crack Flipkart interviews in 2026
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
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
                How to Get Hired at Flipkart
              </h2>
              <p className="text-muted-foreground">
                Pro tips from engineers who cracked Flipkart interviews
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hiringTips.map((tip) => (
                <Card
                  key={tip.title}
                  className="p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                    <tip.icon className="h-6 w-6 text-yellow-600" />
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
              Benefits & Perks at Flipkart
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
                Common questions about Flipkart careers and interviews
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Join Flipkart?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Start your journey at India&apos;s largest e-commerce platform
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <a
                href="https://www.flipkartcareers.com"
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
              <Link href="/companies/flipkart/interview-questions">
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
              <Link href="/companies/amazon">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Amazon</h3>
                  <p className="text-sm text-muted-foreground">
                    E-commerce & Cloud
                  </p>
                </Card>
              </Link>
              <Link href="/companies/google">
                <Card className="p-4 transition-shadow hover:shadow-lg">
                  <h3 className="font-semibold">Google</h3>
                  <p className="text-sm text-muted-foreground">Technology</p>
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

            {/* Strategic Internal Links */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <ContextualToolLinks context="interview" />
              <CompanyComparisonLinks currentCompany="Flipkart" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
