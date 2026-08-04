import { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  FileText,
  MapPin,
  Building,
  Banknote,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Calendar,
  Shield,
  AlertTriangle,
  TrendingUp,
  Award,
  Globe,
  Heart,
  Coffee,
  Home,
  Car,
  Utensils,
  Laptop,
  MessageSquare,
  BookOpen,
  Lightbulb,
  DollarSign,
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Rocket,
  ThumbsUp,
  Zap,
  Brain,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title:
    'Freshers Career Guide | First Job, Salary Negotiation & Workplace Tips',
  description:
    'Get practical fresher guidance on first jobs, salary negotiation, probation, relocation, bond clauses, and early-career decision making.',
  keywords:
    'fresher jobs, first job guide, salary negotiation freshers, fresher career tips, graduate job search, first job India, bond clause, notice period, relocation guide, probation tips',
  openGraph: {
    title: 'Freshers Career Guide',
    description:
      'First-job advice, salary negotiation help, and workplace guidance for freshers.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/freshers',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/freshers',
  },
};

const mainResources = [
  {
    title: 'First Job Guide',
    description:
      'Complete guide to starting your career - what to expect, how to prepare, first 90 days roadmap.',
    icon: Briefcase,
    href: '/freshers/first-job-guide',
    badge: 'Essential',
    color: 'bg-blue-500',
  },
  {
    title: 'Salary Negotiation',
    description:
      'Learn to negotiate your first salary confidently. Scripts, strategies, and what to avoid.',
    icon: Banknote,
    href: '/freshers/salary-negotiation',
    badge: 'Guide',
    color: 'bg-green-500',
  },
  {
    title: 'Bond Clauses Explained',
    description:
      'Understanding service bonds in IT companies - legal aspects, negotiation, and exits.',
    icon: FileText,
    href: '/freshers/bond-clauses',
    badge: 'Info',
    color: 'bg-red-500',
  },
  {
    title: 'Notice Period Guide',
    description:
      'How notice periods work, buying out, negotiation strategies, and smooth transitions.',
    icon: Clock,
    href: '/freshers/notice-period',
    badge: 'Guide',
    color: 'bg-purple-500',
  },
  {
    title: 'Probation Tips',
    description:
      'How to succeed during probation period - performance tips, relationship building, confirmation.',
    icon: Target,
    href: '/freshers/probation-tips',
    badge: 'Tips',
    color: 'bg-orange-500',
  },
  {
    title: 'Relocation Guides',
    description:
      'City-wise guides for Bangalore, Hyderabad, Pune, Chennai, Mumbai, Delhi & more.',
    icon: MapPin,
    href: '/freshers/relocation',
    badge: 'Guides',
    color: 'bg-cyan-500',
  },
  {
    title: 'Company Reviews',
    description:
      'Salary data, culture reviews, interview experiences for 500+ companies.',
    icon: Building,
    href: '/companies',
    badge: 'Database',
    color: 'bg-amber-500',
  },
  {
    title: 'Resume Builder',
    description:
      'Build an ATS-friendly resume that gets past filters and impresses recruiters.',
    icon: FileText,
    href: '/tools/resume-builder',
    badge: 'Tool',
    color: 'bg-indigo-500',
  },
];

const quickTools = [
  {
    title: 'Resume Builder',
    href: '/tools/resume-builder',
    description: 'ATS-friendly resume',
  },
  {
    title: 'Salary Calculator',
    href: '/tools/salary-calculator',
    description: 'In-hand salary calc',
  },
  {
    title: 'Cold Email Generator',
    href: '/tools/cold-email-generator',
    description: 'Professional outreach',
  },
  {
    title: 'Interview Prep',
    href: '/resources/interview-prep',
    description: 'Practice questions',
  },
  {
    title: 'Company Reviews',
    href: '/companies',
    description: 'Salary & culture info',
  },
  {
    title: 'Salary Negotiation Guide',
    href: '/resources/salary-negotiation',
    description: 'Scripts, anchors, and offer tips',
  },
];

const first90DaysRoadmap = [
  {
    period: 'Week 1',
    focus: 'Setup & Onboarding',
    tasks: [
      'Complete joining formalities',
      'Set up workstation and accounts',
      'Meet team and manager',
      'Understand company policies',
      'Get access to required tools',
    ],
    tips: [
      'Be punctual',
      'Dress professionally',
      'Take notes',
      'Ask questions',
    ],
  },
  {
    period: 'Week 2-4',
    focus: 'Learning & Observing',
    tasks: [
      'Focus on training sessions',
      'Learn team processes',
      'Start small tasks',
      'Build rapport with teammates',
      'Understand project context',
    ],
    tips: [
      'Ask questions freely',
      'Dont pretend to know',
      'Shadow seniors',
      'Document learnings',
    ],
  },
  {
    period: 'Month 2',
    focus: 'Contributing',
    tasks: [
      'Take ownership of tasks',
      'Seek feedback proactively',
      'Understand project workflows',
      'Identify a mentor',
      'Start delivering independently',
    ],
    tips: [
      'Over-communicate status',
      'Meet deadlines',
      'Quality over speed initially',
      'Build relationships',
    ],
  },
  {
    period: 'Month 3',
    focus: 'Establishing Value',
    tasks: [
      'Contribute independently',
      'Document your achievements',
      'Set goals with manager',
      'Plan skill development',
      'Get performance feedback',
    ],
    tips: [
      'Track your wins',
      'Be proactive',
      'Identify growth areas',
      'Network internally',
    ],
  },
];

const salaryComponents = [
  {
    component: 'Basic Salary',
    description: '40-50% of CTC. Base for PF, gratuity calculations.',
    tip: 'Higher basic = higher PF but lower take-home',
  },
  {
    component: 'HRA (House Rent)',
    description: '40-50% of basic. Tax exempt if you live in rented house.',
    tip: 'Keep rent receipts for tax savings',
  },
  {
    component: 'Special Allowance',
    description: 'Flexible component to balance CTC. Fully taxable.',
    tip: 'Often used to inflate CTC without PF contribution',
  },
  {
    component: 'PF (Provident Fund)',
    description: '12% of basic from employee, 12% from employer.',
    tip: 'Good for long-term savings but reduces take-home',
  },
  {
    component: 'Bonus/Variable Pay',
    description: '10-30% of CTC based on performance. May be quarterly/annual.',
    tip: 'Not guaranteed - understand appraisal criteria',
  },
  {
    component: 'Stock Options (ESOPs)',
    description: 'Company shares vesting over 3-4 years.',
    tip: 'High risk-reward. Paper value ≠ real money',
  },
  {
    component: 'Gratuity',
    description: 'Payable after 5 years. 15 days salary per year.',
    tip: 'Shows in CTC but you get it only after 5 years',
  },
  {
    component: 'Insurance',
    description: 'Health insurance, life insurance for employee + family.',
    tip: 'Check coverage amount and parents inclusion',
  },
];

const cityCostComparison = [
  {
    city: 'Bangalore',
    rent1BHK: '₹15-25K',
    rent2BHK: '₹25-40K',
    food: '₹8-12K',
    transport: '₹3-5K',
    total: '₹35-60K',
    techHub: true,
  },
  {
    city: 'Hyderabad',
    rent1BHK: '₹12-18K',
    rent2BHK: '₹18-28K',
    food: '₹6-10K',
    transport: '₹2-4K',
    total: '₹28-45K',
    techHub: true,
  },
  {
    city: 'Pune',
    rent1BHK: '₹12-20K',
    rent2BHK: '₹20-32K',
    food: '₹7-11K',
    transport: '₹2-4K',
    total: '₹30-50K',
    techHub: true,
  },
  {
    city: 'Chennai',
    rent1BHK: '₹10-16K',
    rent2BHK: '₹16-25K',
    food: '₹6-9K',
    transport: '₹2-3K',
    total: '₹25-40K',
    techHub: true,
  },
  {
    city: 'Mumbai',
    rent1BHK: '₹20-35K',
    rent2BHK: '₹35-60K',
    food: '₹10-15K',
    transport: '₹3-5K',
    total: '₹45-80K',
    techHub: true,
  },
  {
    city: 'Delhi NCR',
    rent1BHK: '₹12-22K',
    rent2BHK: '₹20-35K',
    food: '₹8-12K',
    transport: '₹3-5K',
    total: '₹32-55K',
    techHub: true,
  },
  {
    city: 'Kolkata',
    rent1BHK: '₹8-14K',
    rent2BHK: '₹14-22K',
    food: '₹5-8K',
    transport: '₹2-3K',
    total: '₹22-35K',
    techHub: false,
  },
  {
    city: 'Ahmedabad',
    rent1BHK: '₹8-14K',
    rent2BHK: '₹14-22K',
    food: '₹5-8K',
    transport: '₹2-3K',
    total: '₹22-35K',
    techHub: false,
  },
];

const workplaceTips = [
  {
    tip: 'Dont Compare Salaries',
    description:
      'Everyone has different backgrounds and negotiations. Focus on your growth, not others packages.',
    icon: DollarSign,
  },
  {
    tip: 'Avoid Office Politics Early',
    description:
      'Stay neutral, dont gossip, focus on work. Observe politics but dont participate initially.',
    icon: Users,
  },
  {
    tip: 'Document Everything',
    description:
      'Keep records of achievements, learnings, feedback. Useful for appraisals and future jobs.',
    icon: FileText,
  },
  {
    tip: 'Build Relationships',
    description:
      'Network with people across teams. Good relationships open opportunities and make work enjoyable.',
    icon: Heart,
  },
  {
    tip: 'Take Care of Health',
    description:
      'Dont sacrifice sleep and exercise for work. Long-term health affects career more than short-term gains.',
    icon: Heart,
  },
  {
    tip: 'Keep Learning',
    description:
      'Allocate time weekly for upskilling. First year is about learning, not just earning.',
    icon: BookOpen,
  },
  {
    tip: 'Communicate Proactively',
    description:
      'Over-communicate status updates. Let manager know blockers early. No surprises.',
    icon: MessageSquare,
  },
  {
    tip: 'Save Money Early',
    description:
      'Save at least 20% of salary from first paycheck. Lifestyle inflation is real. Start SIP early.',
    icon: Banknote,
  },
];

const commonMistakes = [
  {
    mistake: 'Leaving too early for small hike',
    reason:
      'Stability in first job matters. Frequent job hops hurt resume. Wait at least 1-2 years.',
  },
  {
    mistake: 'Not negotiating first salary',
    reason:
      'First salary sets baseline for future. 10% more today compounds over career.',
  },
  {
    mistake: 'Ignoring bonds completely',
    reason:
      'Understand bond clauses before joining. Some are enforceable, some are not.',
  },
  {
    mistake: 'Being overconfident about college',
    reason:
      'Industry is different from academics. Stay humble, be willing to learn.',
  },
  {
    mistake: 'Not asking questions',
    reason:
      'Pretending to know costs more than asking. No one expects freshers to know everything.',
  },
  {
    mistake: 'Comparing with batchmates',
    reason:
      'Different roles, companies, and negotiations. Focus on your own journey.',
  },
  {
    mistake: 'Ignoring soft skills',
    reason:
      'Technical skills get you hired, soft skills get you promoted. Work on communication.',
  },
  {
    mistake: 'Not networking within company',
    reason:
      'Internal mobility is easier. Know people across teams for growth opportunities.',
  },
];

const industryGuides = [
  {
    industry: 'IT/Software',
    avgSalary: '₹4-15 LPA',
    growth: 'High',
    tips: ['DSA important', 'Projects matter', 'Remote options available'],
    topCompanies: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL'],
  },
  {
    industry: 'Product Companies',
    avgSalary: '₹12-40 LPA',
    growth: 'Very High',
    tips: [
      'Strong DSA required',
      'System design knowledge',
      'Multiple interview rounds',
    ],
    topCompanies: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Uber'],
  },
  {
    industry: 'Consulting',
    avgSalary: '₹8-20 LPA',
    growth: 'High',
    tips: [
      'Case studies important',
      'Communication skills',
      'Client-facing roles',
    ],
    topCompanies: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'Accenture'],
  },
  {
    industry: 'Finance/Banking',
    avgSalary: '₹6-15 LPA',
    growth: 'Moderate',
    tips: ['Excel proficiency', 'Financial modeling', 'Certifications help'],
    topCompanies: [
      'HDFC',
      'ICICI',
      'Goldman Sachs',
      'JP Morgan',
      'Morgan Stanley',
    ],
  },
  {
    industry: 'Core Engineering',
    avgSalary: '₹4-12 LPA',
    growth: 'Moderate',
    tips: ['Domain knowledge key', 'GATE for PSUs', 'Limited positions'],
    topCompanies: ['L&T', 'Tata Steel', 'BHEL', 'NTPC', 'ONGC'],
  },
  {
    industry: 'Startups',
    avgSalary: '₹6-25 LPA',
    growth: 'Variable',
    tips: [
      'Equity important',
      'Multiple responsibilities',
      'High learning curve',
    ],
    topCompanies: ['Razorpay', 'Zerodha', 'CRED', 'Swiggy', 'Zomato'],
  },
];

const faqs = [
  {
    question: 'What should I expect in first month of job?',
    answer:
      'Expect training, onboarding, meeting team members. Focus on learning company culture, processes, and tools. Dont expect to contribute significantly immediately. Ask questions freely and build relationships.',
  },
  {
    question: 'How to negotiate salary as a fresher?',
    answer:
      'Research market rates, wait for company to make first offer, negotiate respectfully, consider total compensation not just base, ask for time to think. Dont accept immediately, dont share expected salary early.',
  },
  {
    question: 'Are service bonds legally enforceable?',
    answer:
      'Bonds with reasonable conditions (1-2 years, fair compensation) may be enforceable. Excessive bonds (5+ years, huge penalties) are less likely to be enforced. Consult legal expert for specific cases. Many freshers break bonds successfully.',
  },
  {
    question: 'What is typical notice period for freshers?',
    answer:
      'Usually 1-3 months. Some companies have shorter notice during probation (1 month or even 15 days). Check offer letter carefully. Notice buy-out is sometimes possible.',
  },
  {
    question: 'How to survive probation period?',
    answer:
      'Be punctual, meet deadlines, ask questions, seek feedback proactively, build relationships, document achievements. Most people clear probation - very few are terminated if they show genuine effort.',
  },
  {
    question: 'Which city is best for freshers in tech?',
    answer:
      'Bangalore has most tech jobs and startups but high cost. Hyderabad offers good jobs with lower costs. Pune is balanced. Choose based on job offers, not just city preference. Remote work is increasingly common.',
  },
  {
    question: 'Should I join service company or wait for product company?',
    answer:
      'Depends on situation. Service company experience is still valuable. If you have no offers, take what you get and prepare for switch. Dont stay unemployed waiting for dream company. Can always switch after 1-2 years.',
  },
  {
    question: 'How much should I save from first salary?',
    answer:
      'Target 20-30% savings. Start SIP immediately. Create emergency fund of 3-6 months expenses. Avoid lifestyle inflation. First few years of savings compound heavily due to time value of money.',
  },
  {
    question: 'Is it okay to switch jobs in first year?',
    answer:
      'Ideally no, unless toxic environment or significantly better opportunity. Frequent job hops in initial career hurt resume. Aim for minimum 1-2 years in first job. Stability shows commitment.',
  },
  {
    question: 'How to prepare for first performance review?',
    answer:
      'Document all achievements throughout the year. Quantify impact where possible. Prepare examples of challenges overcome. Have growth plan ready. Be prepared to discuss areas of improvement honestly.',
  },
  {
    question: 'What to do if I dont like my first job?',
    answer:
      'Give it time (6+ months) - initial adjustment takes time. Talk to manager about concerns. Focus on learning and building skills. Start preparing for switch quietly. Dont quit without another offer.',
  },
  {
    question: 'How to handle toxic manager or team?',
    answer:
      'Document issues, try internal transfer first, talk to HR if serious issues. Build network for external opportunities. Dont suffer silently but also dont act impulsively. Mental health is priority.',
  },
];

const preJoiningChecklist = [
  {
    item: 'Documents folder ready (digital + physical)',
    category: 'Documents',
  },
  { item: '10th, 12th, Degree certificates', category: 'Documents' },
  { item: 'ID proof (Aadhar, PAN, Passport)', category: 'Documents' },
  { item: 'Address proof', category: 'Documents' },
  { item: 'Passport size photos', category: 'Documents' },
  { item: 'Bank account in your name', category: 'Financial' },
  { item: 'Previous employment proof (if any)', category: 'Documents' },
  { item: 'Updated LinkedIn profile', category: 'Professional' },
  { item: 'Professional email signature ready', category: 'Professional' },
  { item: 'Accommodation sorted (if relocating)', category: 'Logistics' },
  { item: 'Commute route planned', category: 'Logistics' },
  { item: 'Professional attire ready', category: 'Preparation' },
  { item: 'Self-introduction pitch prepared', category: 'Preparation' },
  { item: 'Company research done', category: 'Preparation' },
];

const financialTips = [
  {
    tip: 'Start SIP Immediately',
    description:
      'Even ₹500/month compounds over career. Time in market > timing market.',
  },
  {
    tip: 'Emergency Fund First',
    description: 'Build 3-6 months expenses buffer before other investments.',
  },
  {
    tip: 'Understand Salary Slip',
    description: 'Know the difference between CTC, gross, and in-hand salary.',
  },
  {
    tip: 'File ITR Properly',
    description:
      'Claim all deductions (80C, 80D, HRA). Use tax-saving instruments.',
  },
  {
    tip: 'Avoid Lifestyle Inflation',
    description:
      'Dont upgrade lifestyle with every salary hike. Save the difference.',
  },
  {
    tip: 'Health Insurance Check',
    description:
      'Understand company coverage. Consider additional cover for parents.',
  },
];

export default function FreshersPage() {
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
        name: 'Freshers',
        item: 'https://sproutern.dpdns.org/freshers',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Star className="mr-1 h-3 w-3" />
            For Fresh Graduates
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Fresh Graduate Resources
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            From campus to corporate - everything you need for your first job.
            Navigate salary negotiations, relocation, probation, and career
            growth with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/freshers/first-job-guide">
                First Job Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/companies">Company Reviews</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/freshers/salary-negotiation">Salary Tips</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Building className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-xs text-muted-foreground">
                Companies Reviewed
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">₹3-50 LPA</p>
              <p className="text-xs text-muted-foreground">
                Fresher Salary Range
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <MapPin className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs text-muted-foreground">City Guides</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Award className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Career Tips</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Essential Resources for Freshers
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need before, during, and after joining your first job
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mainResources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
            >
              <Card className="group h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`rounded-lg p-3 ${resource.color} text-white`}
                    >
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{resource.badge}</Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* First 90 Days Roadmap */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Clock className="h-4 w-4" />
            First 90 Days
          </div>
          <h2 className="mb-2 text-3xl font-bold">First 90 Days Roadmap</h2>
          <p className="text-muted-foreground">
            What to focus on in your first three months
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {first90DaysRoadmap.map((period, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-1 text-xl font-bold text-primary">
                  {period.period}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {period.focus}
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Focus Areas</h4>
                    <ul className="space-y-1">
                      {period.tasks.map((task, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs"
                        >
                          <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-600" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-orange-600">
                      Tips
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {period.tips.map((tip, j) => (
                        <Badge
                          key={j}
                          variant="outline"
                          className="text-xs"
                        >
                          {tip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Salary Components */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Understanding Your Salary</h2>
          <p className="text-muted-foreground">
            Know what each component means
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {salaryComponents.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">{item.component}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <p className="text-xs italic text-primary">💡 {item.tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            asChild
          >
            <Link href="/tools/salary-calculator">
              Calculate In-Hand Salary
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* City Cost Comparison */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
            <MapPin className="h-4 w-4" />
            City Comparison
          </div>
          <h2 className="mb-2 text-3xl font-bold">City-wise Cost of Living</h2>
          <p className="text-muted-foreground">
            Monthly expenses comparison for freshers
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg bg-background">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 text-left font-semibold">City</th>
                <th className="p-4 text-left font-semibold">1BHK Rent</th>
                <th className="p-4 text-left font-semibold">2BHK Rent</th>
                <th className="p-4 text-left font-semibold">Food</th>
                <th className="p-4 text-left font-semibold">Transport</th>
                <th className="p-4 text-left font-semibold">Total/Month</th>
                <th className="p-4 text-center font-semibold">Tech Hub</th>
              </tr>
            </thead>
            <tbody>
              {cityCostComparison.map((city, i) => (
                <tr
                  key={i}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 font-medium">{city.city}</td>
                  <td className="p-4">{city.rent1BHK}</td>
                  <td className="p-4">{city.rent2BHK}</td>
                  <td className="p-4">{city.food}</td>
                  <td className="p-4">{city.transport}</td>
                  <td className="p-4 font-semibold text-primary">
                    {city.total}
                  </td>
                  <td className="p-4 text-center">
                    {city.techHub ? (
                      <CheckCircle className="mx-auto h-4 w-4 text-green-600" />
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <Button asChild>
            <Link href="/freshers/relocation">
              View Detailed City Guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Workplace Tips */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Pro Tips for Freshers</h2>
          <p className="text-muted-foreground">
            Wisdom from experienced professionals
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {workplaceTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-3 p-4">
                <div className="rounded-lg bg-green-50 p-2 dark:bg-green-950">
                  <tip.icon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{tip.tip}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="container bg-red-50/50 py-12 dark:bg-red-950/20">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">
            <AlertTriangle className="h-4 w-4" />
            Avoid These
          </div>
          <h2 className="mb-2 text-3xl font-bold">Common Fresher Mistakes</h2>
          <p className="text-muted-foreground">Learn from others experiences</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {commonMistakes.map((item, i) => (
            <Card
              key={i}
              className="border-red-200 dark:border-red-800"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 dark:bg-red-900">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-red-700 dark:text-red-300">
                      {item.mistake}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.reason}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industry Guides */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Industry-wise Fresher Guide
          </h2>
          <p className="text-muted-foreground">
            What to expect in different industries
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industryGuides.map((industry, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold">{industry.industry}</h3>
                  <Badge
                    variant={
                      industry.growth === 'Very High' ? 'default' : 'secondary'
                    }
                  >
                    {industry.growth} Growth
                  </Badge>
                </div>
                <p className="mb-3 font-semibold text-green-600">
                  Avg: {industry.avgSalary}
                </p>
                <div className="mb-3">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Tips:
                  </p>
                  <ul className="space-y-1">
                    {industry.tips.map((tip, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-3 w-3 text-green-600" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold text-muted-foreground">
                    Top Companies:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {industry.topCompanies.map((c, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="text-xs"
                      >
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Tools */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Quick Tools</h2>
          <p className="text-muted-foreground">Useful utilities for freshers</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {quickTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
            >
              <Card className="h-full cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium">{tool.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HelpCircle className="h-4 w-4" />
            FAQs
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-2 flex items-start gap-2 font-semibold">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="pl-8 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Briefcase className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Start Your Career?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl opacity-90">
              You have all the resources you need. Now go out there and make
              your mark. Remember - everyone was a fresher once!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/tools">
                  Explore All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/internships">Browse Opportunities</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
