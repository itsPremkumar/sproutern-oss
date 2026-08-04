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
  Youtube,
  Mail,
  Shield,
  Smartphone,
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
  title: 'Google Careers | Jobs, Salary & Interview Guide',
  description:
    'Complete guide to Google careers. Explore Google salary structure, interview process, Googleyness, teams, and tips to get hired at Google.',
  keywords:
    'google careers, google salary, google interview questions, google jobs, google, google hiring process, googleyness, google interview preparation',
  openGraph: {
    title: 'Google Careers - Complete Guide',
    description: 'Everything you need to know about working at Google.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/google',
  },
  alternates: { canonical: 'https://sproutern.dpdns.org/companies/google' },
};

const salaryData = [
  {
    role: 'Software Engineer (L3)',
    level: 'L3',
    experience: '0-2 years',
    ctc: '₹25-38 LPA',
    base: '₹20-30 LPA',
    stocks: '₹4-6 LPA',
    bonus: '₹2-3 LPA',
  },
  {
    role: 'Software Engineer (L4)',
    level: 'L4',
    experience: '2-5 years',
    ctc: '₹40-65 LPA',
    base: '₹32-48 LPA',
    stocks: '₹6-12 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Senior SWE (L5)',
    level: 'L5',
    experience: '5-9 years',
    ctc: '₹70-110 LPA',
    base: '₹52-75 LPA',
    stocks: '₹15-28 LPA',
    bonus: '₹5-8 LPA',
  },
  {
    role: 'Staff Engineer (L6)',
    level: 'L6',
    experience: '9-14 years',
    ctc: '₹1.1-1.8 Cr',
    base: '₹75-100 LPA',
    stocks: '₹30-60 LPA',
    bonus: '₹8-15 LPA',
  },
  {
    role: 'Sr Staff Engineer (L7)',
    level: 'L7',
    experience: '14+ years',
    ctc: '₹1.8-3 Cr+',
    base: '₹100-140 LPA',
    stocks: '₹60-120 LPA',
    bonus: '₹15-25 LPA',
  },
  {
    role: 'Product Manager (L4)',
    level: 'L4',
    experience: '2-5 years',
    ctc: '₹45-70 LPA',
    base: '₹35-52 LPA',
    stocks: '₹8-14 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Senior PM (L5)',
    level: 'L5',
    experience: '5-9 years',
    ctc: '₹75-120 LPA',
    base: '₹55-80 LPA',
    stocks: '₹16-32 LPA',
    bonus: '₹5-10 LPA',
  },
  {
    role: 'UX Designer (L4)',
    level: 'L4',
    experience: '2-5 years',
    ctc: '₹38-60 LPA',
    base: '₹30-45 LPA',
    stocks: '₹6-12 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Research Scientist (L4)',
    level: 'L4',
    experience: '3-6 years',
    ctc: '₹50-80 LPA',
    base: '₹40-60 LPA',
    stocks: '₹8-16 LPA',
    bonus: '₹4-6 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'M1-M2',
    experience: '10+ years',
    ctc: '₹1.2-2 Cr',
    base: '₹80-120 LPA',
    stocks: '₹35-70 LPA',
    bonus: '₹10-18 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter Call',
    duration: '30 mins',
    description:
      'Initial screening call to discuss background, role fit, and interview process overview.',
    tips: [
      'Research Google products',
      'Prepare elevator pitch',
      'Ask about timeline',
      'Show genuine enthusiasm',
    ],
  },
  {
    round: 2,
    name: 'Phone Interview',
    duration: '45 mins',
    description:
      'Technical phone screen with coding on Google Docs. One medium-hard algorithm problem.',
    tips: [
      'Practice coding in Google Docs',
      'Think aloud constantly',
      'Ask clarifying questions',
      'Optimize your solution',
    ],
  },
  {
    round: 3,
    name: 'Onsite 1: Coding',
    duration: '45 mins',
    description:
      'First of 4-5 onsite interviews. Algorithm and data structure problem on whiteboard.',
    tips: [
      'Master trees, graphs, DP',
      'Write clean, tested code',
      'Discuss complexity',
      'Handle edge cases',
    ],
  },
  {
    round: 4,
    name: 'Onsite 2: Coding',
    duration: '45 mins',
    description:
      'Second coding round with different interviewer. May include follow-up questions.',
    tips: [
      'Stay calm and methodical',
      'Different problem types',
      'Show debugging skills',
      'Iterate on solution',
    ],
  },
  {
    round: 5,
    name: 'Onsite 3: System Design',
    duration: '45 mins',
    description:
      'Design large-scale systems. Required for L4+ roles. Design Google-scale systems.',
    tips: [
      'Study Google research papers',
      'Know GCP services',
      'Start with requirements',
      'Discuss trade-offs deeply',
    ],
  },
  {
    round: 6,
    name: 'Onsite 4: Googleyness & Leadership',
    duration: '45 mins',
    description:
      'Behavioral interview assessing cultural fit, collaboration, and navigating ambiguity.',
    tips: [
      'Prepare STAR stories',
      'Show intellectual humility',
      'Demonstrate impact',
      'Be authentic',
    ],
  },
  {
    round: 7,
    name: 'Hiring Committee Review',
    duration: 'N/A',
    description:
      'Your packet is reviewed by independent committee. They assess all interview feedback.',
    tips: [
      'Interview performance matters most',
      'No additional prep needed',
      'Process takes 2-4 weeks',
      'Recruiter updates you',
    ],
  },
  {
    round: 8,
    name: 'Team Match & Offer',
    duration: 'Varies',
    description:
      'After HC approval, you interview with teams and get matched based on mutual fit.',
    tips: [
      'Research team products',
      'Ask about tech stack',
      'Understand scope',
      'Negotiate offer',
    ],
  },
];

const teams = [
  {
    name: 'Google Search',
    icon: Search,
    description:
      'Build the world&apos;s most used search engine. Work on ranking, NLP, voice search, and knowledge graph.',
    roles: ['SWE', 'ML Engineer', 'Research Scientist'],
    tech: ['C++', 'Python', 'TensorFlow', 'NLP'],
  },
  {
    name: 'Google Cloud (GCP)',
    icon: Cloud,
    description:
      'Compete with AWS and Azure. Build cloud infrastructure, AI/ML services, and enterprise solutions.',
    roles: ['Cloud Engineer', 'Solutions Architect', 'SRE'],
    tech: ['Go', 'Python', 'Kubernetes', 'BigQuery'],
  },
  {
    name: 'YouTube',
    icon: Youtube,
    description:
      'Power the world&apos;s largest video platform. Recommendations, streaming, creator tools, and ads.',
    roles: ['SWE', 'Frontend', 'ML Engineer', 'PM'],
    tech: ['Python', 'JavaScript', 'Go', 'ML'],
  },
  {
    name: 'Android',
    icon: Smartphone,
    description:
      'Build the OS powering 3 billion devices. Work on Android framework, security, and core apps.',
    roles: ['SWE', 'Frameworks Engineer', 'Security'],
    tech: ['Java', 'Kotlin', 'C++', 'Rust'],
  },
  {
    name: 'Google AI/DeepMind',
    icon: Cpu,
    description:
      'Pioneer AI research. Work on Gemini, Bard, LLMs, computer vision, and breakthrough research.',
    roles: ['Research Scientist', 'ML Engineer', 'Applied Scientist'],
    tech: ['Python', 'TensorFlow', 'JAX', 'PyTorch'],
  },
  {
    name: 'Gmail & Workspace',
    icon: Mail,
    description:
      'Build productivity tools for billions. Gmail, Docs, Drive, Meet, and enterprise collaboration.',
    roles: ['SWE', 'Frontend', 'PM', 'UX'],
    tech: ['TypeScript', 'Closure', 'Go', 'Python'],
  },
  {
    name: 'Ads & Commerce',
    icon: TrendingUp,
    description:
      'Drive Google&apos;s revenue engine. Build ad platforms, shopping, and measurement solutions.',
    roles: ['SWE', 'Data Scientist', 'ML Engineer', 'PM'],
    tech: ['C++', 'Python', 'ML', 'Big Data'],
  },
  {
    name: 'Chrome & Web Platform',
    icon: Globe,
    description:
      'Build the world&apos;s most popular browser and advance web standards.',
    roles: ['SWE', 'Graphics Engineer', 'Security'],
    tech: ['C++', 'JavaScript', 'WebAssembly', 'V8'],
  },
];

const googleyness = [
  {
    trait: 'Doing the right thing',
    description:
      'Acting with integrity, transparency, and respect for users above all else.',
  },
  {
    trait: 'Working well with others',
    description:
      'Collaborating effectively, seeking diverse perspectives, and supporting teammates.',
  },
  {
    trait: 'Navigating ambiguity',
    description:
      'Making progress despite unclear requirements or evolving priorities.',
  },
  {
    trait: 'Valuing feedback',
    description:
      'Seeking and giving constructive feedback with humility and openness.',
  },
  {
    trait: 'Challenging the status quo',
    description:
      'Questioning assumptions and pushing boundaries while respecting others.',
  },
  {
    trait: 'Putting users first',
    description: 'Making decisions that prioritize user experience and trust.',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Premium medical coverage',
      'On-site doctors & wellness centers',
      'Mental health support',
      'Fertility & family planning',
      'Fitness facilities & classes',
      'Massage credits',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Flexible vacation policy',
      'Paid parental leave (24 weeks)',
      'Bereavement leave',
      'Volunteer time off',
      'Sabbatical (5 years)',
      'Work from anywhere weeks',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Top-of-market salary',
      'GSUs (Google Stock Units)',
      'Annual bonus (15-30%)',
      'Peer bonuses',
      'Stock refreshers',
      'Joining bonus',
    ],
  },
  {
    icon: BookOpen,
    title: 'Growth & Learning',
    items: [
      '$12,000 annual education stipend',
      'Internal courses (G2G)',
      'Conference attendance',
      'Internal mobility',
      '20% projects',
      'Career coaching',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'Latest devices & equipment',
      'Work from home flexibility',
      'Modern offices worldwide',
      'Ergonomic setups',
      'Tech support',
      'Home office allowance',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks & Food',
    items: [
      'Free gourmet meals',
      'Snacks & cafes',
      'Bike/transit subsidy',
      'On-site amenities',
      'Employee discounts',
      'Death benefits (morbid but generous)',
    ],
  },
];

const faqs = [
  {
    question: 'How hard is it to get into Google?',
    answer:
      'Extremely competitive. Google&apos;s acceptance rate is ~0.2% for L3-L4 roles. However, thousands are hired annually. Focus on strong DSA, system design, and Googleyness. Many candidates succeed on 2nd or 3rd attempt.',
  },
  {
    question: 'What is the salary for freshers at Google?',
    answer:
      'L3 (fresh graduate) roles offer ₹25-38 LPA including base, GSUs, and bonus. Top performers from IITs may get higher offers. Google pays at the top of market for tech companies.',
  },
  {
    question: 'What is "Googleyness"?',
    answer:
      'Googleyness is Google&apos;s cultural assessment evaluating how you work with others, navigate ambiguity, take feedback, and do the right thing. It&apos;s tested in behavioral interviews and matters as much as technical skills.',
  },
  {
    question: 'What programming language should I use in Google interviews?',
    answer:
      'Python, Java, C++, or Go are most common. Use whatever you&apos;re most comfortable with. Interviewers care about problem-solving, not language syntax. Python is popular for its brevity.',
  },
  {
    question: 'How long does the Google interview process take?',
    answer:
      'Typically 6-10 weeks from application to offer. Phone screen in 2 weeks, onsite 1-2 weeks later, Hiring Committee review 2-4 weeks, team matching 1-2 weeks. Can be faster for strong candidates.',
  },
  {
    question: 'What is the Google Hiring Committee?',
    answer:
      'Independent committee reviews all interview feedback without meeting the candidate. They ensure consistent hiring bar across Google. Interviewers don&apos;t make final decisions - the HC does based on interview packets.',
  },
  {
    question: 'How many coding rounds are there?',
    answer:
      'Typically 2 coding rounds in onsite (45 mins each). Phone screen adds one more. Each focuses on different DSA topics. Expect medium-hard LeetCode difficulty with follow-up questions.',
  },
  {
    question: 'Where are Google offices?',
    answer:
      'Bangalore (main engineering office), Hyderabad (growing), Gurugram (sales/support), and Mumbai (ads). Bangalore houses most SWE roles and has the largest Google campus.',
  },
  {
    question: 'Can I switch teams at Google?',
    answer:
      'Yes! After 12 months, you can apply to internal positions. Google encourages mobility. Many engineers switch teams every 2-3 years for growth and learning new areas.',
  },
  {
    question: 'What is Google&apos;s level system?',
    answer:
      'Levels run from L3 (entry SWE) to L10+ (Distinguished Fellow). L3-L4: SWE, L5: Senior, L6: Staff, L7: Senior Staff, L8: Principal, L9: Distinguished, L10: Google Fellow. Each level doubles in scope/impact.',
  },
];

const hiringTips = [
  {
    icon: Target,
    title: 'LeetCode is Essential',
    description:
      'Google interviews are DSA-heavy. Solve 300+ problems, focusing on medium/hard. Master trees, graphs, DP, and string algorithms.',
  },
  {
    icon: Code,
    title: 'System Design at Scale',
    description:
      'For L4+, learn to design systems at Google scale (billions of users). Study Google research papers, GFS, MapReduce, Spanner.',
  },
  {
    icon: MessageSquare,
    title: 'Practice Googleyness',
    description:
      'Prepare 8-10 STAR stories showing collaboration, feedback, ambiguity, and impact. Google values cultural fit as much as technical skills.',
  },
  {
    icon: Star,
    title: 'Show Your Impact',
    description:
      'Quantify everything. "Improved latency by 40%", "Served 1M daily users". Google wants people who drive measurable outcomes.',
  },
  {
    icon: Users,
    title: 'Mock Interviews',
    description:
      'Practice with pramp.com, interviewing.io, or friends. Google interviews require thinking aloud and clear communication.',
  },
  {
    icon: Zap,
    title: 'Apply Multiple Times',
    description:
      'Many Googlers got in on 2nd or 3rd attempt. 6-month cooldown between attempts. Each attempt builds experience. Don&apos;t give up.',
  },
];

export default function GoogleCareersPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Google',
            description:
              'Google is a technology company specializing in search, advertising, cloud computing, and AI.',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500">
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
                Google Careers
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join Google and build products that shape how billions interact
                with information. Do cool things that matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90"
                >
                  <a
                    href="https://careers.google.com"
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
                <p className="text-2xl font-bold text-white">1998</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">1.9 Lakh+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Office Locations</p>
                <p className="text-2xl font-bold text-white">Bangalore</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Glassdoor</p>
                <p className="text-2xl font-bold text-white">4.4 ★</p>
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
                ₹25 LPA - ₹3 Cr+
              </p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">6-10 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-6 Rounds</p>
              <p className="text-sm text-muted-foreground">Onsite + HC</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">~0.2%</p>
              <p className="text-sm text-muted-foreground">Acceptance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Google</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Google, founded by Larry Page and Sergey Brin in 1998, has grown
              from a Stanford research project into one of the world&apos;s most
              valuable and influential technology companies. Under Alphabet
              Inc., Google&apos;s mission remains: &quot;to organize the
              world&apos;s information and make it universally accessible and
              useful.&quot;
            </p>
            <p>
              Google, headquartered in Bangalore, is a major engineering hub
              working on core products like Search, YouTube, Android, Chrome,
              Cloud, and AI. The Bangalore office is one of Google&apos;s
              largest, with thousands of engineers building products for the
              world.
            </p>
            <p>
              Working at Google means access to world-class infrastructure,
              brilliant colleagues, and the freedom to innovate. The famous 20%
              time policy encourages engineers to work on passion projects.
              Gmail, AdSense, and Google News all started as 20% projects.
            </p>
          </div>
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
            <h3 className="mb-2 text-lg font-semibold text-blue-800 dark:text-blue-200">
              Google&apos;s Mission
            </h3>
            <p className="text-blue-700 dark:text-blue-300">
              &quot;To organize the world&apos;s information and make it
              universally accessible and useful.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Googleyness */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">What is Googleyness?</h2>
              <p className="text-muted-foreground">
                The cultural traits Google evaluates in behavioral interviews
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {googleyness.map((g) => (
                <Card
                  key={g.trait}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold text-blue-600">
                    {g.trait}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {g.description}
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
            <h2 className="mb-4 text-3xl font-bold">Teams at Google</h2>
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
                Google Salary Structure
              </h2>
              <p className="text-muted-foreground">
                Among the highest-paying tech companies
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
                <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-400">
                  L3 (Entry)
                </p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                  ₹25-38 LPA
                </p>
              </Card>
              <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
                <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  L5 (Senior)
                </p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  ₹70-110 LPA
                </p>
              </Card>
              <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
                <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  L6+ (Staff)
                </p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  ₹1.1-3 Cr+
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
                        <th className="p-3 text-left">GSUs</th>
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
          </div>
        </div>
      </section>

      {/* Interview */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Google Interview Process
            </h2>
            <p className="text-muted-foreground">
              One of the most rigorous hiring processes in tech
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
      </section>

      {/* Tips */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Tips to Get Hired at Google
              </h2>
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
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Benefits at Google</h2>
            <p className="text-muted-foreground">
              Legendary perks that set the standard for tech
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((cat) => (
              <Card
                key={cat.title}
                className="p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                    <cat.icon className="h-5 w-5 text-blue-600" />
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
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join Google?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Take on challenges at Google scale. Build products used by
              billions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90"
              >
                <a
                  href="https://careers.google.com"
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
            <Link href="/companies/microsoft">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Microsoft</p>
                <p className="text-sm text-muted-foreground">
                  Software & Cloud
                </p>
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
