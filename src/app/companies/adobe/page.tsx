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
  Palette,
  Video,
  FileText,
  MessageSquare,
  Target,
  Zap,
  BookOpen,
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Adobe Careers | Jobs, Salary & Interview Guide',
  description:
    'Complete guide to Adobe careers. Explore Adobe salary structure, interview process, work culture, job roles, and tips to get hired at Adobe.',
  keywords:
    'adobe careers, adobe salary, adobe interview questions, adobe jobs, adobe, creative cloud careers, adobe hiring process, adobe work culture',
  openGraph: {
    title: 'Adobe Careers - Complete Guide',
    description:
      'Everything you need to know about working at Adobe - salaries, interview process, culture, and how to get hired.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/companies/adobe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adobe Careers - Jobs, Salary & Interview Guide',
    description:
      'Complete guide to Adobe careers, salary, and interview process.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/companies/adobe',
  },
};

// Salary data for different roles
const salaryData = [
  {
    role: 'Software Engineer (MTS)',
    level: 'Entry Level',
    experience: '0-2 years',
    ctc: '₹18-28 LPA',
    base: '₹15-22 LPA',
    stocks: '₹2-4 LPA',
    bonus: '₹1-2 LPA',
  },
  {
    role: 'Software Engineer II',
    level: 'Mid Level',
    experience: '2-5 years',
    ctc: '₹28-45 LPA',
    base: '₹22-35 LPA',
    stocks: '₹4-7 LPA',
    bonus: '₹2-3 LPA',
  },
  {
    role: 'Senior Software Engineer',
    level: 'Senior',
    experience: '5-8 years',
    ctc: '₹45-70 LPA',
    base: '₹35-50 LPA',
    stocks: '₹7-12 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Staff Engineer / Architect',
    level: 'Staff',
    experience: '8-12 years',
    ctc: '₹70-100 LPA',
    base: '₹50-70 LPA',
    stocks: '₹12-20 LPA',
    bonus: '₹5-8 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'Manager',
    experience: '10+ years',
    ctc: '₹80-120 LPA',
    base: '₹55-80 LPA',
    stocks: '₹15-25 LPA',
    bonus: '₹8-12 LPA',
  },
  {
    role: 'Product Manager',
    level: 'Mid Level',
    experience: '3-6 years',
    ctc: '₹35-55 LPA',
    base: '₹28-42 LPA',
    stocks: '₹5-8 LPA',
    bonus: '₹2-4 LPA',
  },
  {
    role: 'Senior Product Manager',
    level: 'Senior',
    experience: '6-10 years',
    ctc: '₹55-85 LPA',
    base: '₹42-60 LPA',
    stocks: '₹8-15 LPA',
    bonus: '₹4-8 LPA',
  },
  {
    role: 'UX Designer',
    level: 'Mid Level',
    experience: '2-5 years',
    ctc: '₹22-38 LPA',
    base: '₹18-30 LPA',
    stocks: '₹3-5 LPA',
    bonus: '₹1-3 LPA',
  },
  {
    role: 'Senior UX Designer',
    level: 'Senior',
    experience: '5-8 years',
    ctc: '₹38-60 LPA',
    base: '₹30-45 LPA',
    stocks: '₹5-10 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Data Scientist',
    level: 'Mid Level',
    experience: '2-5 years',
    ctc: '₹25-45 LPA',
    base: '₹20-35 LPA',
    stocks: '₹4-7 LPA',
    bonus: '₹1-3 LPA',
  },
];

// Interview rounds data
const interviewRounds = [
  {
    round: 1,
    name: 'Online Assessment',
    duration: '60-90 minutes',
    description:
      'Coding test on HackerRank or similar platform. Includes 2-3 medium to hard level DSA problems.',
    tips: [
      'Practice medium-level LeetCode problems',
      'Focus on arrays, strings, trees, and graphs',
      'Time management is crucial',
      'Write clean, optimized code',
    ],
  },
  {
    round: 2,
    name: 'Technical Phone Screen',
    duration: '45-60 minutes',
    description:
      'Live coding round with an engineer. Discuss your approach, write code, and optimize solutions.',
    tips: [
      'Think out loud while solving',
      'Ask clarifying questions',
      'Discuss time and space complexity',
      'Handle edge cases',
    ],
  },
  {
    round: 3,
    name: 'Technical Deep Dive',
    duration: '60 minutes',
    description:
      'In-depth discussion on system design, architecture, or domain-specific topics based on your experience.',
    tips: [
      'Review your past projects thoroughly',
      'Understand system design fundamentals',
      'Be ready to discuss trade-offs',
      'Know Adobe products relevant to the role',
    ],
  },
  {
    round: 4,
    name: 'Coding Round',
    duration: '60 minutes',
    description:
      'Another live coding session focusing on problem-solving, data structures, and algorithms.',
    tips: [
      'Practice on a whiteboard or shared editor',
      'Structure your solution before coding',
      'Test your code with examples',
      'Optimize iteratively',
    ],
  },
  {
    round: 5,
    name: 'Hiring Manager Round',
    duration: '45-60 minutes',
    description:
      'Discussion about your background, career goals, team fit, and behavioral questions using STAR method.',
    tips: [
      'Prepare STAR format answers',
      'Research the team and their products',
      'Show enthusiasm for Adobe products',
      'Ask insightful questions about the role',
    ],
  },
  {
    round: 6,
    name: 'HR Discussion',
    duration: '30-45 minutes',
    description:
      'Final round discussing compensation, benefits, joining timeline, and any remaining questions.',
    tips: [
      'Know your expected compensation range',
      'Understand the complete offer structure',
      'Ask about growth opportunities',
      'Clarify any concerns about the role',
    ],
  },
];

// Benefits data
const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    items: [
      'Comprehensive medical insurance for family',
      'Dental and vision coverage',
      'Mental health support programs',
      'On-site fitness centers',
      'Wellness reimbursement program',
      'Annual health check-ups',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Flexible PTO policy',
      'Paid parental leave (26 weeks)',
      'Bereavement leave',
      'Volunteer time off',
      'Sabbatical program for long-term employees',
      'Company holidays and shutdown days',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Financial Benefits',
    items: [
      'Competitive base salary',
      'Annual performance bonus',
      'RSU grants with 4-year vesting',
      'Employee Stock Purchase Plan (ESPP)',
      'Retirement benefits (PF, Gratuity)',
      'Relocation assistance',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learning & Development',
    items: [
      'Education reimbursement',
      'LinkedIn Learning access',
      'Internal training programs',
      'Conference attendance support',
      'Certification reimbursement',
      'Mentorship programs',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Environment',
    items: [
      'Hybrid work model',
      'Work from home allowance',
      'Latest MacBook/laptop',
      'Home office setup allowance',
      'Modern office spaces',
      'Free meals and snacks',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks & Extras',
    items: [
      'Free Adobe Creative Cloud subscription',
      'Employee discount programs',
      'Commuter benefits',
      'On-site cafeteria',
      'Team outings and events',
      'Recognition and rewards programs',
    ],
  },
];

// Job roles/teams at Adobe
const teams = [
  {
    name: 'Creative Cloud',
    icon: Palette,
    description:
      'Work on flagship products like Photoshop, Illustrator, Premiere Pro, and After Effects. Build features used by millions of creative professionals worldwide.',
    roles: [
      'Software Engineer',
      'ML Engineer',
      'Product Manager',
      'UX Designer',
    ],
    tech: ['C++', 'JavaScript', 'React', 'Python', 'GPU Programming'],
  },
  {
    name: 'Document Cloud',
    icon: FileText,
    description:
      'Develop Adobe Acrobat, PDF technologies, and document workflow solutions. Enable seamless document collaboration and digital signatures.',
    roles: [
      'Software Engineer',
      'Backend Engineer',
      'Security Engineer',
      'QA Engineer',
    ],
    tech: ['C++', 'Java', 'JavaScript', 'Python', 'Cloud Services'],
  },
  {
    name: 'Experience Cloud',
    icon: Globe,
    description:
      'Build enterprise marketing, analytics, and commerce solutions. Power digital experiences for major brands worldwide.',
    roles: [
      'Full Stack Engineer',
      'Data Engineer',
      'Solutions Architect',
      'Technical Consultant',
    ],
    tech: ['Java', 'React', 'Node.js', 'Apache Kafka', 'AWS/Azure'],
  },
  {
    name: 'Adobe Research',
    icon: Zap,
    description:
      'Push the boundaries of technology with cutting-edge research in AI, ML, computer vision, and graphics.',
    roles: [
      'Research Scientist',
      'Research Engineer',
      'ML Engineer',
      'PhD Intern',
    ],
    tech: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'Computer Vision'],
  },
  {
    name: 'Digital Media',
    icon: Video,
    description:
      'Innovate in digital media creation, editing, and delivery. Work on video, audio, and 3D content tools.',
    roles: ['Software Engineer', 'Rendering Engineer', 'Algorithm Engineer'],
    tech: ['C++', 'GPU Programming', 'Video Codecs', 'Real-time Rendering'],
  },
  {
    name: 'Platform Engineering',
    icon: Code,
    description:
      'Build the foundational infrastructure and platform services that power all Adobe products.',
    roles: ['Platform Engineer', 'DevOps Engineer', 'SRE', 'Security Engineer'],
    tech: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Go'],
  },
];

// FAQs
const faqs = [
  {
    question: 'What is the interview process at Adobe?',
    answer:
      'Adobe typically has 5-6 rounds: Online Assessment, Technical Phone Screen, 2-3 Technical/Coding rounds, Hiring Manager round, and HR discussion. The entire process takes 3-5 weeks. For senior roles, expect system design discussions.',
  },
  {
    question: 'What is the average salary at Adobe for freshers?',
    answer:
      'Fresh graduates (MTS - Member of Technical Staff) can expect ₹18-28 LPA at Adobe. This includes base salary, stocks (RSUs), and annual bonus. Top performers from premier institutes may receive higher offers.',
  },
  {
    question: 'Does Adobe hire from campus placements?',
    answer:
      'Yes, Adobe actively recruits from top engineering colleges including IITs, NITs, BITS, and other premier institutions. They also have internship programs that can convert to full-time offers.',
  },
  {
    question: 'What is the work culture like at Adobe?',
    answer:
      'Adobe is known for its excellent work-life balance, inclusive culture, and employee-first approach. They offer hybrid work, flexible hours, and focus on outcomes rather than hours worked. The culture emphasizes creativity, collaboration, and innovation.',
  },
  {
    question: 'What programming languages should I learn for Adobe?',
    answer:
      'Depends on the team: Creative Cloud uses C++, JavaScript, and Python. Experience Cloud uses Java, React, and Node.js. Research teams focus on Python, PyTorch, and ML frameworks. Strong DSA fundamentals are essential for all roles.',
  },
  {
    question: 'How long does it take to get a response after applying?',
    answer:
      'Typically 2-4 weeks for initial response. If shortlisted, the interview process takes 3-5 weeks. Some roles may take longer due to business priorities. Following up after 2 weeks is acceptable.',
  },
  {
    question: 'What are the office locations of Adobe?',
    answer:
      'Adobe has major offices in Noida and Bangalore. Noida is the larger office with most product development teams. Both offices have modern amenities and collaborative workspaces.',
  },
  {
    question: 'Does Adobe sponsor work visas for relocation?',
    answer:
      'Yes, Adobe sponsors H1B visas and other work permits for internal transfers to US offices. However, this is typically available after 1-2 years of tenure and based on business needs.',
  },
  {
    question: 'What is the stock/RSU vesting schedule at Adobe?',
    answer:
      'Adobe RSUs typically vest over 4 years with a 1-year cliff. After the first year, vesting occurs quarterly. RSUs are granted annually based on performance and level.',
  },
  {
    question: 'How can I prepare for Adobe interviews?',
    answer:
      'Focus on: 1) DSA practice (LeetCode medium/hard), 2) System design for senior roles, 3) Understand Adobe products, 4) Prepare STAR format behavioral stories, 5) Review your projects in depth. Mock interviews help significantly.',
  },
];

// Hiring process tips
const hiringTips = [
  {
    icon: Target,
    title: 'Tailor Your Resume',
    description:
      'Highlight projects using Adobe technologies or creative tools. Quantify your impact with metrics. Keep it concise - 1-2 pages max.',
  },
  {
    icon: Code,
    title: 'Master DSA',
    description:
      'Adobe interviews are known for challenging coding problems. Practice LeetCode medium to hard problems, especially trees, graphs, and dynamic programming.',
  },
  {
    icon: MessageSquare,
    title: 'Know Adobe Products',
    description:
      'Understand the products of the team you&apos;re interviewing for. Use them, know their features, and think about potential improvements.',
  },
  {
    icon: Star,
    title: 'Showcase Creativity',
    description:
      'Adobe values creative thinking. Demonstrate innovative solutions in your past projects and during interviews.',
  },
  {
    icon: Users,
    title: 'Cultural Fit',
    description:
      'Adobe emphasizes their core values: Genuine, Exceptional, Innovative, and Involved. Reflect these in your behavioral answers.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description:
      'Show your passion for learning new technologies. Mention courses, certifications, open source contributions, or side projects.',
  },
];

export default function AdobeCareersPage() {
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
        name: 'Companies',
        item: 'https://sproutern.dpdns.org/companies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Adobe',
        item: 'https://sproutern.dpdns.org/companies/adobe',
      },
    ],
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adobe Inc.',
    url: 'https://www.adobe.com',
    logo: 'https://www.adobe.com/favicon.ico',
    description:
      'Adobe is a global leader in creative software, digital marketing, and document management solutions.',
    foundingDate: '1982',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 30000,
    },
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-900">
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
                Software & Technology
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Adobe Careers
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Join the company that&apos;s changing the world through digital
                experiences. Build products used by 300+ million creative
                professionals worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-red-600 hover:bg-white/90"
                >
                  <a
                    href="https://adobe.wd5.myworkdayjobs.com/external_experienced"
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
                <p className="text-2xl font-bold text-white">1982</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Employees</p>
                <p className="text-2xl font-bold text-white">30,000+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Office Locations</p>
                <p className="text-2xl font-bold text-white">
                  Noida, Bangalore
                </p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Glassdoor Rating</p>
                <p className="text-2xl font-bold text-white">4.3 ★</p>
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
              <p className="text-3xl font-bold text-primary">₹18-120 LPA</p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3-5 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5-6 Rounds</p>
              <p className="text-sm text-muted-foreground">Interview Rounds</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Hybrid</p>
              <p className="text-sm text-muted-foreground">Work Model</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Adobe */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">About Adobe</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Adobe Inc. is a global technology leader that has been at the
              forefront of digital innovation for over four decades. Founded in
              1982 by John Warnock and Charles Geschke, the company
              revolutionized the way we create, communicate, and consume digital
              content.
            </p>
            <p>
              Today, Adobe&apos;s products touch virtually every creative
              professional in the world. From Photoshop and Illustrator to
              Premiere Pro and After Effects, Adobe Creative Cloud powers the
              creative economy. Adobe Document Cloud, with Acrobat and Adobe
              Sign, has transformed how businesses handle documents. Adobe
              Experience Cloud provides enterprise marketing, analytics, and
              commerce solutions to the world&apos;s leading brands.
            </p>
            <p>
              Adobe, with offices in Noida and Bangalore, is a critical hub for
              the company&apos;s global product development. Teams work across
              all major product lines, from Creative Cloud flagship products to
              cutting-edge AI research. The engineering center has grown
              significantly and now houses thousands of engineers, designers,
              researchers, and product managers.
            </p>
          </div>

          {/* Company Values */}
          <div className="mt-10">
            <h3 className="mb-4 text-xl font-semibold">
              Adobe&apos;s Core Values
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-red-600">Genuine</h4>
                <p className="text-sm text-muted-foreground">
                  We are sincere, trustworthy, and reliable. We communicate
                  openly with respect.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-red-600">Exceptional</h4>
                <p className="text-sm text-muted-foreground">
                  We hold ourselves to the highest standards and constantly push
                  to exceed expectations.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-red-600">Innovative</h4>
                <p className="text-sm text-muted-foreground">
                  We are highly creative, always striving for continuous
                  improvement in everything we do.
                </p>
              </Card>
              <Card className="p-4">
                <h4 className="mb-2 font-semibold text-red-600">Involved</h4>
                <p className="text-sm text-muted-foreground">
                  We are inclusive, open, and engaged with our customers,
                  partners, and communities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teams at Adobe */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Teams at Adobe</h2>
              <p className="text-muted-foreground">
                Explore the diverse teams and opportunities across Adobe&apos;s
                product portfolio
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <Card
                  key={team.name}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900">
                      <team.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="mb-2 text-sm font-medium">Key Roles:</p>
                      <div className="flex flex-wrap gap-1">
                        {team.roles.map((role) => (
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
                      <p className="mb-2 text-sm font-medium">Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {team.tech.map((tech) => (
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
            <h2 className="mb-4 text-3xl font-bold">Adobe Salary Structure</h2>
            <p className="text-muted-foreground">
              Comprehensive salary data for different roles and experience
              levels at Adobe
            </p>
          </div>

          {/* Salary highlights */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
              <p className="text-sm text-green-700 dark:text-green-400">
                Entry Level (MTS)
              </p>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                ₹18-28 LPA
              </p>
              <p className="text-xs text-green-600">0-2 years experience</p>
            </Card>
            <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Senior Level
              </p>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                ₹45-70 LPA
              </p>
              <p className="text-xs text-blue-600">5-8 years experience</p>
            </Card>
            <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Staff/Manager
              </p>
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                ₹70-120 LPA
              </p>
              <p className="text-xs text-purple-600">8+ years experience</p>
            </Card>
          </div>

          {/* Detailed salary table */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Salary Breakdown by Role</CardTitle>
              <CardDescription>
                *Salaries are indicative and may vary based on skills, interview
                performance, and team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-semibold">Role</th>
                      <th className="p-3 text-left font-semibold">
                        Experience
                      </th>
                      <th className="p-3 text-left font-semibold">Total CTC</th>
                      <th className="p-3 text-left font-semibold">
                        Base Salary
                      </th>
                      <th className="p-3 text-left font-semibold">RSUs</th>
                      <th className="p-3 text-left font-semibold">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((row, index) => (
                      <tr
                        key={row.role}
                        className={index % 2 === 0 ? 'bg-muted/20' : ''}
                      >
                        <td className="p-3">
                          <div>
                            <p className="font-medium">{row.role}</p>
                            <Badge
                              variant="outline"
                              className="mt-1 text-xs"
                            >
                              {row.level}
                            </Badge>
                          </div>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {row.experience}
                        </td>
                        <td className="p-3 font-semibold text-green-600">
                          {row.ctc}
                        </td>
                        <td className="p-3">{row.base}</td>
                        <td className="p-3">{row.stocks}</td>
                        <td className="p-3">{row.bonus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Compensation notes */}
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
            <h4 className="mb-2 font-semibold text-amber-800 dark:text-amber-200">
              💡 Important Notes on Compensation
            </h4>
            <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
              <li>
                • RSUs vest over 4 years with a 1-year cliff, then quarterly
                vesting
              </li>
              <li>
                • Annual bonus is typically 10-20% of base salary based on
                performance
              </li>
              <li>
                • Stock refreshers are granted annually based on performance
                ratings
              </li>
              <li>• Joining bonus may be offered for experienced candidates</li>
              <li>
                • Compensation packages are negotiable, especially for senior
                roles
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interview Process */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Adobe Interview Process
              </h2>
              <p className="text-muted-foreground">
                What to expect during Adobe&apos;s hiring process
              </p>
            </div>

            <div className="space-y-6">
              {interviewRounds.map((round, index) => (
                <Card
                  key={round.round}
                  className="overflow-hidden"
                >
                  <div className="flex">
                    <div className="flex w-16 flex-shrink-0 items-center justify-center bg-red-600 text-white">
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
                      <div>
                        <p className="mb-2 text-sm font-medium">
                          Tips for success:
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
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Getting Hired */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Tips to Get Hired at Adobe
            </h2>
            <p className="text-muted-foreground">
              Maximize your chances of landing a job at Adobe
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringTips.map((tip) => (
              <Card
                key={tip.title}
                className="p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900">
                  <tip.icon className="h-6 w-6 text-red-600" />
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
                Benefits & Perks at Adobe
              </h2>
              <p className="text-muted-foreground">
                Adobe offers industry-leading benefits to support
                employees&apos; well-being
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((category) => (
                <Card
                  key={category.title}
                  className="p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                      <category.icon className="h-5 w-5 text-red-600" />
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
              Common questions about working at Adobe India
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
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join Adobe?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Start your journey at one of the world&apos;s most innovative
              technology companies. Explore open positions and apply today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-white/90"
              >
                <a
                  href="https://adobe.wd5.myworkdayjobs.com/external_experienced"
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
            <Link href="/companies/microsoft">
              <Card className="p-4 transition-shadow hover:shadow-lg">
                <p className="font-semibold">Microsoft</p>
                <p className="text-sm text-muted-foreground">
                  Software & Cloud
                </p>
              </Card>
            </Link>
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
