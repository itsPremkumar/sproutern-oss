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
  Cloud,
  ShoppingCart,
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
  Truck,
  Package,
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

export const metadata: Metadata = {
  title: 'Amazon Careers | Jobs, Salary & Interview Guide',
  description:
    'Complete guide to Amazon careers. Explore Amazon salary structure, loop interview process, leadership principles, AWS jobs, and tips to get hired at Amazon.',
  keywords:
    'amazon careers, amazon salary, amazon interview questions, amazon jobs, amazon, aws careers, amazon loop interview, amazon leadership principles',
  openGraph: {
    title: 'Amazon Careers - Complete Guide',
    description:
      'Everything you need to know about working at Amazon - salaries, loop interview, culture, and how to get hired.',
    type: 'article',
    url: 'https://www.sproutern.com/companies/amazon',
  },
  alternates: { canonical: 'https://www.sproutern.com/companies/amazon' },
};

const salaryData = [
  {
    role: 'SDE I',
    level: 'L4',
    experience: '0-2 years',
    ctc: '₹20-32 LPA',
    base: '₹16-25 LPA',
    stocks: '₹3-5 LPA',
    signOn: '₹2-4 LPA',
  },
  {
    role: 'SDE II',
    level: 'L5',
    experience: '2-5 years',
    ctc: '₹35-55 LPA',
    base: '₹28-40 LPA',
    stocks: '₹5-12 LPA',
    signOn: '₹3-6 LPA',
  },
  {
    role: 'SDE III (Senior)',
    level: 'L6',
    experience: '5-10 years',
    ctc: '₹55-90 LPA',
    base: '₹40-60 LPA',
    stocks: '₹12-25 LPA',
    signOn: '₹5-10 LPA',
  },
  {
    role: 'Principal Engineer',
    level: 'L7',
    experience: '10-15 years',
    ctc: '₹90-150 LPA',
    base: '₹60-85 LPA',
    stocks: '₹25-50 LPA',
    signOn: '₹10-20 LPA',
  },
  {
    role: 'Sr. Principal',
    level: 'L8',
    experience: '15+ years',
    ctc: '₹1.5-2.5 Cr',
    base: '₹85-120 LPA',
    stocks: '₹50-100 LPA',
    signOn: '₹15-30 LPA',
  },
  {
    role: 'Technical PM',
    level: 'L5-L6',
    experience: '3-8 years',
    ctc: '₹40-70 LPA',
    base: '₹32-50 LPA',
    stocks: '₹6-15 LPA',
    signOn: '₹4-8 LPA',
  },
  {
    role: 'Sr. TPM',
    level: 'L6-L7',
    experience: '8-12 years',
    ctc: '₹70-120 LPA',
    base: '₹50-80 LPA',
    stocks: '₹15-30 LPA',
    signOn: '₹8-15 LPA',
  },
  {
    role: 'Data Engineer',
    level: 'L5',
    experience: '2-5 years',
    ctc: '₹35-55 LPA',
    base: '₹28-42 LPA',
    stocks: '₹5-10 LPA',
    signOn: '₹3-5 LPA',
  },
  {
    role: 'Applied Scientist',
    level: 'L5-L6',
    experience: '3-8 years',
    ctc: '₹45-80 LPA',
    base: '₹35-55 LPA',
    stocks: '₹8-20 LPA',
    signOn: '₹4-8 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'L6-L7',
    experience: '10+ years',
    ctc: '₹80-140 LPA',
    base: '₹55-90 LPA',
    stocks: '₹20-40 LPA',
    signOn: '₹10-18 LPA',
  },
];

const leadershipPrinciples = [
  {
    name: 'Customer Obsession',
    description:
      'Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust.',
  },
  {
    name: 'Ownership',
    description:
      'Leaders are owners. They think long term and don&apos;t sacrifice long-term value for short-term results.',
  },
  {
    name: 'Invent and Simplify',
    description:
      'Leaders expect and require innovation and invention from their teams and always find ways to simplify.',
  },
  {
    name: 'Are Right, A Lot',
    description:
      'Leaders are right a lot. They have strong judgment and good instincts. They seek diverse perspectives.',
  },
  {
    name: 'Learn and Be Curious',
    description:
      'Leaders are never done learning. They are curious about new possibilities and act to explore them.',
  },
  {
    name: 'Hire and Develop the Best',
    description:
      'Leaders raise the performance bar with every hire and promotion. They recognize exceptional talent.',
  },
  {
    name: 'Insist on the Highest Standards',
    description:
      'Leaders have relentlessly high standards. They continually raise the bar and drive quality.',
  },
  {
    name: 'Think Big',
    description:
      'Thinking small is a self-fulfilling prophecy. Leaders create bold direction that inspires results.',
  },
  {
    name: 'Bias for Action',
    description:
      'Speed matters in business. Many decisions are reversible and do not need extensive study.',
  },
  {
    name: 'Frugality',
    description:
      'Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention.',
  },
  {
    name: 'Earn Trust',
    description:
      'Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical.',
  },
  {
    name: 'Dive Deep',
    description:
      'Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics differ.',
  },
  {
    name: 'Have Backbone; Disagree and Commit',
    description:
      'Leaders are obligated to respectfully challenge decisions when they disagree, even when uncomfortable.',
  },
  {
    name: 'Deliver Results',
    description:
      'Leaders focus on the key inputs and deliver them with the right quality and in a timely fashion.',
  },
  {
    name: 'Strive to be Earth&apos;s Best Employer',
    description:
      'Leaders work every day to create a safer, more productive, higher performing, more diverse, and more just work environment.',
  },
  {
    name: 'Success and Scale Bring Responsibility',
    description:
      'We are not combust in our environment. We must be humble and thoughtful about even secondary effects of our actions.',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Online Assessment (OA)',
    duration: '90 mins',
    description:
      'Coding assessment with 2-3 problems on HackerRank. Includes work simulation/work style assessment.',
    tips: [
      'Practice medium LeetCode problems',
      'Strong in arrays, strings, and graphs',
      'Time management is key',
      'Attempt all questions',
    ],
  },
  {
    round: 2,
    name: 'Phone Screen',
    duration: '45-60 mins',
    description:
      'Technical phone interview with one LP question and one coding problem. Uses Amazon Chime.',
    tips: [
      'Practice coding on shared doc',
      'Use STAR format for LP questions',
      'Explain thought process clearly',
      'Ask clarifying questions',
    ],
  },
  {
    round: 3,
    name: 'Loop Round 1 - Coding',
    duration: '60 mins',
    description:
      'First onsite/virtual loop round focused on data structures and algorithms.',
    tips: [
      'Master trees, graphs, DP',
      'Discuss time/space complexity',
      'Handle edge cases',
      'Write clean code',
    ],
  },
  {
    round: 4,
    name: 'Loop Round 2 - System Design',
    duration: '60 mins',
    description:
      'Design a large-scale distributed system. Required for L5+ roles.',
    tips: [
      'Know AWS services well',
      'Start with requirements',
      'Draw clear diagrams',
      'Discuss trade-offs',
    ],
  },
  {
    round: 5,
    name: 'Loop Round 3 - LP Deep Dive',
    duration: '60 mins',
    description:
      'Behavioral interview focused on 3-4 leadership principles with detailed STAR stories.',
    tips: [
      'Prepare 15+ STAR stories',
      'Cover all 16 LPs',
      'Quantify impact',
      'Show ownership',
    ],
  },
  {
    round: 6,
    name: 'Loop Round 4 - Bar Raiser',
    duration: '60 mins',
    description:
      'Independent interviewer ensuring hire meets Amazon&apos;s high bar. Mix of technical and LP.',
    tips: [
      'Expect tough questions',
      'Stay calm under pressure',
      'Be honest about weaknesses',
      'Show growth mindset',
    ],
  },
  {
    round: 7,
    name: 'Hiring Manager Chat',
    duration: '30-45 mins',
    description:
      'Final discussion about team, role expectations, and any remaining questions.',
    tips: [
      'Research the team',
      'Ask about growth opportunities',
      'Show enthusiasm',
      'Discuss timeline',
    ],
  },
];

const teams = [
  {
    name: 'AWS (Amazon Web Services)',
    icon: Cloud,
    description:
      'Build the world&apos;s leading cloud platform. Work on compute, storage, AI/ML, and 200+ cloud services.',
    roles: ['SDE', 'Solutions Architect', 'DevOps', 'Data Engineer'],
    tech: ['Java', 'Python', 'Go', 'Kubernetes', 'Terraform'],
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description:
      'Power the world&apos;s largest online marketplace. Build features for catalog, checkout, search, and recommendations.',
    roles: ['SDE', 'ML Engineer', 'PM', 'Data Scientist'],
    tech: ['Java', 'React', 'Machine Learning', 'Big Data'],
  },
  {
    name: 'Alexa & Devices',
    icon: MessageSquare,
    description:
      'Create voice-first AI experiences. Work on Echo devices, Alexa skills, and natural language processing.',
    roles: ['SDE', 'ML Scientist', 'Embedded Engineer', 'PM'],
    tech: ['Python', 'C++', 'NLP', 'Deep Learning'],
  },
  {
    name: 'Amazon Transportation',
    icon: Truck,
    description:
      'Revolutionize logistics and delivery. Build systems for last-mile delivery, route optimization, and fleet management.',
    roles: ['SDE', 'Operations Research', 'Data Engineer'],
    tech: ['Java', 'Python', 'Optimization', 'ML'],
  },
  {
    name: 'Amazon Pay',
    icon: Shield,
    description:
      'Build secure and seamless payment experiences for millions of customers.',
    roles: ['SDE', 'Security Engineer', 'PM', 'Risk Analyst'],
    tech: ['Java', 'Spring Boot', 'Microservices', 'Security'],
  },
  {
    name: 'Prime Video',
    icon: Package,
    description:
      'Create world-class streaming experiences. Work on video delivery, recommendations, and original content tech.',
    roles: ['SDE', 'Video Engineer', 'ML Engineer', 'iOS/Android'],
    tech: ['Java', 'Swift', 'Kotlin', 'Video Streaming', 'CDN'],
  },
  {
    name: 'Amazon Science',
    icon: Cpu,
    description:
      'Push the boundaries of AI/ML research. Work on fundamental research and applied science.',
    roles: ['Applied Scientist', 'Research Scientist', 'ML Engineer'],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning'],
  },
  {
    name: 'Seller Services',
    icon: Briefcase,
    description:
      'Empower millions of sellers globally. Build tools for inventory, pricing, and seller success.',
    roles: ['SDE', 'PM', 'Data Analyst', 'TPM'],
    tech: ['Java', 'React', 'AWS', 'Big Data'],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Insurance',
    items: [
      'Comprehensive medical coverage',
      'Dental and vision plans',
      'Life insurance',
      'Disability coverage',
      'Mental health support',
      'Health savings account',
    ],
  },
  {
    icon: Calendar,
    title: 'Time & Flexibility',
    items: [
      'Flexible work arrangements',
      'Paid parental leave (20 weeks)',
      'Unlimited sick time',
      'Vacation time',
      'Personal time',
      'Bereavement leave',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Competitive base salary',
      'RSU grants (4-year vest)',
      'Sign-on bonus',
      'Relocation assistance',
      'Stock purchase plan',
      'Performance incentives',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learning',
    items: [
      'Tuition assistance',
      'Amazon Technical Academy',
      'Career Choice program',
      'Internal training',
      'Conference attendance',
      'Certification support',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Setup',
    items: [
      'Latest equipment',
      'Home office allowance',
      'Modern campuses',
      'Standing desks',
      'Ergonomic setup',
      'Tech support',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks',
    items: [
      'Free meals at office',
      'Commuter benefits',
      'Employee discounts',
      'Team events',
      'Fitness centers',
      'On-site amenities',
    ],
  },
];

const faqs = [
  {
    question: 'What is Amazon&apos;s loop interview?',
    answer:
      'The "loop" is Amazon&apos;s onsite interview format consisting of 4-6 back-to-back interviews (45-60 mins each). Each interviewer evaluates specific leadership principles and technical skills. The Bar Raiser ensures hiring standards are met.',
  },
  {
    question: 'What salary can freshers expect at Amazon?',
    answer:
      'SDE I (L4) fresh graduates can expect ₹20-32 LPA. This includes base salary, RSUs vesting over 4 years, and sign-on bonus. Top candidates from IITs may receive higher offers.',
  },
  {
    question: 'How important are Leadership Principles at Amazon?',
    answer:
      'Extremely important. Every interview includes LP questions. Prepare 2-3 STAR stories for each of the 16 principles. Interviewers specifically evaluate LP alignment and can reject candidates who don&apos;t demonstrate them.',
  },
  {
    question: 'What is the RSU vesting schedule at Amazon?',
    answer:
      'Amazon RSUs vest: 5% Year 1, 15% Year 2, 40% Year 3, 40% Year 4. To compensate for back-loaded vesting, Amazon offers larger sign-on bonuses in years 1 and 2.',
  },
  {
    question: 'What programming languages should I know for Amazon?',
    answer:
      'Java is dominant at Amazon, followed by Python. AWS roles may use Go or TypeScript. For interviews, you can choose any major language. Focus more on problem-solving than specific languages.',
  },
  {
    question: 'How do I prepare for Amazon system design interviews?',
    answer:
      'Study distributed systems, AWS services, and real Amazon systems. Practice designing services like Amazon.com product page, URL shortener, or notification service. The DDIA book is highly recommended.',
  },
  {
    question: 'What is the Bar Raiser round?',
    answer:
      'The Bar Raiser is an independent interviewer (from different team) who ensures every hire raises the bar. They have veto power and evaluate both technical skills and LP fit with fresh perspective.',
  },
  {
    question: 'Where are Amazon offices?',
    answer:
      'Major engineering offices: Bangalore (largest), Hyderabad, Chennai, Pune, and Gurugram. AWS has data centers and offices across India. Bangalore hosts most SDE roles.',
  },
  {
    question: 'Can I switch teams within Amazon?',
    answer:
      'Yes! After 1 year, you can apply to internal positions. Amazon encourages internal mobility. Many engineers switch teams every 2-3 years for learning and growth.',
  },
  {
    question: 'What is Amazon&apos;s PIP (Performance Improvement Plan)?',
    answer:
      'Amazon has rigorous performance management. Bottom performers may be put on "focus" which is an opportunity to improve. The culture emphasizes high performance and ownership.',
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'Master Leadership Principles',
    description:
      'The #1 reason people fail Amazon interviews. Prepare 2-3 detailed STAR stories for each of the 16 LPs. Practice delivering them concisely.',
  },
  {
    icon: Code,
    title: 'Strong DSA Foundation',
    description:
      'Amazon coding interviews are challenging. Master trees, graphs, dynamic programming, and string manipulation. LeetCode medium problems regularly.',
  },
  {
    icon: MessageSquare,
    title: 'Use STAR Format Religiously',
    description:
      'Situation, Task, Action, Result. Quantify your impact. Amazon interviewers are trained to dig deep - have detailed stories ready.',
  },
  {
    icon: Star,
    title: 'Show Ownership Mentality',
    description:
      '&quot;Ownership&quot; is key at Amazon. Demonstrate you take responsibility, think long-term, and don&apos;t say "that&apos;s not my job."',
  },
  {
    icon: Cloud,
    title: 'Learn AWS Services',
    description:
      'Even for non-AWS roles, knowing basic AWS services (EC2, S3, Lambda, DynamoDB) helps in system design and shows genuine interest.',
  },
  {
    icon: TrendingUp,
    title: 'Quantify Everything',
    description:
      'Amazon is data-driven. In your stories and resume, use numbers: improved performance by X%, handled Y requests/sec, saved $Z annually.',
  },
];

export default function AmazonCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Amazon',
            description:
              'Amazon is a multinational technology company focused on e-commerce, cloud computing, and AI.',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-600">
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
                E-commerce & Cloud Leader
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Amazon Careers
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Work hard. Have fun. Make history. Join one of the world&apos;s
                most customer-centric companies and build products used by
                billions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-white/90"
                >
                  <a
                    href="https://amazon.jobs"
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
                <p className="text-2xl font-bold text-white">1994</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">15 Lakh+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Office Locations</p>
                <p className="text-2xl font-bold text-white">
                  Bangalore, Hyderabad
                </p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Glassdoor Rating</p>
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
                ₹20 LPA - ₹2.5 Cr+
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4-8 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-7 Rounds</p>
              <p className="text-sm text-muted-foreground">Loop Interview</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">16 LPs</p>
              <p className="text-sm text-muted-foreground">
                Leadership Principles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Amazon</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Amazon is a global technology behemoth that started as an online
              bookstore in 1994 and evolved into the world&apos;s largest
              e-commerce platform. Under Jeff Bezos&apos; leadership and now
              Andy Jassy as CEO, Amazon has disrupted countless industries with
              its customer-obsessed approach.
            </p>
            <p>
              Amazon Development Centre (ADC) in Bangalore and Hyderabad is
              among Amazon&apos;s largest development centers outside the US.
              Indian teams work on core Amazon services, AWS infrastructure,
              Alexa AI, Prime Video, and hundreds of customer-facing products
              serving billions globally.
            </p>
            <p>
              Amazon&apos;s culture is unique - intense, fast-paced, and driven
              by the 16 Leadership Principles. Day 1 mentality means always
              behaving like a startup, taking risks, and obsessing over
              customers. It&apos;s not for everyone, but for those who thrive,
              Amazon offers unparalleled learning and growth.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
            <h3 className="mb-2 text-lg font-semibold text-orange-800 dark:text-orange-200">
              Day 1 Philosophy
            </h3>
            <p className="text-orange-700 dark:text-orange-300">
              &quot;Day 2 is stasis. Followed by irrelevance. Followed by
              excruciating, painful decline. That is why it is always Day
              1.&quot; - Jeff Bezos
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Amazon&apos;s 16 Leadership Principles
              </h2>
              <p className="text-muted-foreground">
                The foundation of Amazon&apos;s culture and interviews
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {leadershipPrinciples.map((lp) => (
                <Card
                  key={lp.name}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold text-orange-600">
                    {lp.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {lp.description}
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
            <h2 className="mb-4 text-3xl font-bold">Teams at Amazon</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teams.map((team) => (
              <Card
                key={team.name}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900">
                    <team.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {team.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {team.tech.slice(0, 4).map((t) => (
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
                Amazon India Salary Structure
              </h2>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  SDE I (L4)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹20-32 LPA
                </p>
              </Card>
              <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  SDE III (L6)
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ₹55-90 LPA
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Principal (L7+)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹90 LPA - ₹2.5 Cr+
                </p>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Detailed Salary by Level</CardTitle>
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
                        <th className="p-3 text-left">RSUs</th>
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
                          <td className="p-3">{row.stocks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
              <h4 className="mb-2 font-semibold text-amber-800 dark:text-amber-200">
                💡 Amazon RSU Vesting
              </h4>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Amazon&apos;s unique 5-15-40-40 vesting schedule: Year 1: 5%,
                Year 2: 15%, Year 3: 40%, Year 4: 40%. Sign-on bonuses in Years
                1-2 compensate for this back-loaded structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Amazon Loop Interview Process
            </h2>
          </div>
          <div className="space-y-6">
            {interviewRounds.map((round) => (
              <Card
                key={round.round}
                className="overflow-hidden"
              >
                <div className="flex">
                  <div className="flex w-16 flex-shrink-0 items-center justify-center bg-orange-500 text-white">
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
      </section>

      {/* Tips */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Tips to Get Hired at Amazon
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hiringTips.map((tip) => (
                <Card
                  key={tip.title}
                  className="p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900">
                    <tip.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{tip.title}</h3>
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
            <h2 className="mb-4 text-3xl font-bold">Benefits at Amazon</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((cat) => (
              <Card
                key={cat.title}
                className="p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                    <cat.icon className="h-5 w-5 text-orange-600" />
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
      </section>

      {/* FAQs */}
      <section className="bg-muted/30 py-16">
        <div className="container">
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-600 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join Amazon?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Start your journey at one of the world&apos;s most innovative
              companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-white/90"
              >
                <a
                  href="https://amazon.jobs"
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

      {/* Related */}
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
            <Link href="/companies/microsoft">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Microsoft</p>
                <p className="text-sm text-muted-foreground">
                  Software & Cloud
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
