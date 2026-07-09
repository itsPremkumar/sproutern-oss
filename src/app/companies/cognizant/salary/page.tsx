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
  IndianRupee,
  Star,
  Zap,
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
  title: 'Cognizant Salary | Salary Guide',
  description:
    'Comprehensive Cognizant salary guide for India 2025. Explore salary by designation from fresher to senior levels, hike structure, bonus, and complete compensation breakdown.',
  keywords:
    'cognizant salary, cognizant salary india, cts salary, cognizant pay scale, cognizant salary structure, cognizant hike percentage, cognizant salary for freshers, cognizant programmer analyst salary',
  openGraph: {
    title: 'Cognizant Salary in India - Complete Guide',
    description:
      'Detailed Cognizant salary breakdown by role, experience, and designation.',
    url: 'https://www.sproutern.com/companies/cognizant/salary',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/companies/cognizant/salary',
  },
};

const salaryByDesignation = [
  {
    designation: 'Programmer Analyst Trainee (PAT)',
    level: 'Entry',
    experience: '0 years',
    ctc: '₹3.5-4.5 LPA',
    takeHome: '₹25,000-32,000/month',
    variable: '₹0-15,000',
    notes: 'Campus hiring, 3-6 month training period',
  },
  {
    designation: 'Programmer Analyst (PA)',
    level: 'L1',
    experience: '0-2 years',
    ctc: '₹4-6 LPA',
    takeHome: '₹28,000-42,000/month',
    variable: '₹10,000-30,000',
    notes: 'Post-training designation',
  },
  {
    designation: 'Associate',
    level: 'L2',
    experience: '2-4 years',
    ctc: '₹5.5-8 LPA',
    takeHome: '₹38,000-55,000/month',
    variable: '₹20,000-50,000',
    notes: 'First major promotion',
  },
  {
    designation: 'Sr. Associate',
    level: 'L3',
    experience: '4-6 years',
    ctc: '₹7-12 LPA',
    takeHome: '₹48,000-80,000/month',
    variable: '₹40,000-80,000',
    notes: 'Technical specialization expected',
  },
  {
    designation: 'Manager',
    level: 'L4',
    experience: '6-9 years',
    ctc: '₹11-18 LPA',
    takeHome: '₹75,000-1.2 LPA/month',
    variable: '₹60,000-1.2 LPA',
    notes: 'People management or technical track',
  },
  {
    designation: 'Senior Manager',
    level: 'L5',
    experience: '9-12 years',
    ctc: '₹16-28 LPA',
    takeHome: '₹1.1-1.9 LPA/month',
    variable: '₹1-2 LPA',
    notes: 'Strategic leadership role',
  },
  {
    designation: 'Associate Director',
    level: 'L6',
    experience: '12-15 years',
    ctc: '₹25-40 LPA',
    takeHome: '₹1.7-2.7 LPA/month',
    variable: '₹2-4 LPA',
    notes: 'Business unit leadership',
  },
  {
    designation: 'Director',
    level: 'L7',
    experience: '15-18 years',
    ctc: '₹38-60 LPA',
    takeHome: '₹2.5-4 LPA/month',
    variable: '₹4-8 LPA',
    notes: 'Multi-team leadership',
  },
  {
    designation: 'Senior Director',
    level: 'L8',
    experience: '18+ years',
    ctc: '₹55-85 LPA',
    takeHome: '₹3.5-5.5 LPA/month',
    variable: '₹6-12 LPA',
    notes: 'Strategic business leadership',
  },
  {
    designation: 'VP & Above',
    level: 'Executive',
    experience: '20+ years',
    ctc: '₹80 LPA - ₹2 Cr+',
    takeHome: '₹5+ LPA/month',
    variable: '₹10+ LPA',
    notes: 'C-suite and executive roles',
  },
];

const salaryByRole = [
  {
    role: 'Java Developer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹4-6 LPA / ₹7-12 LPA / ₹13-22 LPA',
  },
  {
    role: '.NET Developer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹4-5.5 LPA / ₹6-11 LPA / ₹12-20 LPA',
  },
  {
    role: 'Python Developer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹4.5-6.5 LPA / ₹8-14 LPA / ₹15-25 LPA',
  },
  {
    role: 'Full Stack Developer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹5-7 LPA / ₹9-15 LPA / ₹16-28 LPA',
  },
  {
    role: 'DevOps Engineer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹5-7 LPA / ₹9-16 LPA / ₹18-30 LPA',
  },
  {
    role: 'Data Engineer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹5.5-8 LPA / ₹10-18 LPA / ₹20-35 LPA',
  },
  {
    role: 'Data Scientist',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹6-9 LPA / ₹12-22 LPA / ₹25-45 LPA',
  },
  {
    role: 'Cloud Architect',
    experience: '3-5 / 6-10 / 10+ years',
    salary: '₹12-20 LPA / ₹22-38 LPA / ₹40-65 LPA',
  },
  {
    role: 'Business Analyst',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹4-6 LPA / ₹7-13 LPA / ₹14-24 LPA',
  },
  {
    role: 'QA Engineer',
    experience: '0-2 / 3-5 / 6-10 years',
    salary: '₹3.5-5 LPA / ₹6-10 LPA / ₹11-18 LPA',
  },
  {
    role: 'Project Manager',
    experience: '5-8 / 8-12 / 12+ years',
    salary: '₹12-20 LPA / ₹18-32 LPA / ₹30-50 LPA',
  },
  {
    role: 'Solution Architect',
    experience: '8-12 / 12+ years',
    salary: '₹25-45 LPA / ₹45-75 LPA',
  },
];

const hikeStructure = [
  {
    type: 'Annual Increment',
    percentage: '5-12%',
    notes:
      'Based on performance rating. Rating 1: 10-15%, Rating 2: 6-10%, Rating 3: 3-5%',
  },
  {
    type: 'Promotion Hike',
    percentage: '15-30%',
    notes: 'Significant increase when moving to next designation level',
  },
  {
    type: 'Role Change Hike',
    percentage: '10-20%',
    notes: 'When changing technology or domain within Cognizant',
  },
  {
    type: 'Counter Offer',
    percentage: '20-40%',
    notes: 'Retention offers for high performers with external offers',
  },
  {
    type: 'Market Correction',
    percentage: '5-15%',
    notes: 'Periodic adjustments to match market rates',
  },
];

const bonusStructure = [
  {
    type: 'Variable Pay',
    amount: '₹10,000 - ₹2 LPA',
    frequency: 'Annual',
    eligibility: 'All employees based on company and individual performance',
  },
  {
    type: 'Quarterly Bonus',
    amount: '₹5,000 - ₹50,000',
    frequency: 'Quarterly',
    eligibility: 'Specific projects and delivery milestones',
  },
  {
    type: 'Spot Awards',
    amount: '₹2,000 - ₹25,000',
    frequency: 'Ad-hoc',
    eligibility: 'Exceptional contributions and customer appreciation',
  },
  {
    type: 'Referral Bonus',
    amount: '₹15,000 - ₹75,000',
    frequency: 'Per hire',
    eligibility: 'Successful referral hiring based on role level',
  },
  {
    type: 'Long-term Incentive',
    amount: 'RSUs/Stock',
    frequency: 'Annual',
    eligibility: 'Senior Manager and above levels',
  },
];

const benefitsValue = [
  {
    benefit: 'Medical Insurance',
    value: '₹5-10 LPA cover',
    notes: 'Family floater policy covering spouse and children',
  },
  {
    benefit: 'Term Life Insurance',
    value: '3-5x annual salary',
    notes: 'Death and disability coverage',
  },
  {
    benefit: 'Provident Fund',
    value: '12% contribution',
    notes: 'Employer matching contribution to EPF',
  },
  {
    benefit: 'Gratuity',
    value: '4.81% of basic',
    notes: 'Payable after 5 years of service',
  },
  {
    benefit: 'Leave Encashment',
    value: 'Up to 30 days',
    notes: 'Unused leave can be encashed annually',
  },
  {
    benefit: 'Food Allowance',
    value: '₹2,000-4,000/month',
    notes: 'Subsidized meals at office cafeteria',
  },
  {
    benefit: 'Transport',
    value: '₹3,000-5,000/month',
    notes: 'Cab facility or transport allowance',
  },
  {
    benefit: 'Learning Budget',
    value: '₹20,000-50,000/year',
    notes: 'Certifications and training programs',
  },
];

const faqs = [
  {
    question: 'What is the starting salary at Cognizant for freshers?',
    answer:
      'Fresh graduates joining as Programmer Analyst Trainee (PAT) can expect ₹3.5-4.5 LPA. After training (3-6 months), they become Programmer Analysts with ₹4-6 LPA. Top performers and those from premier institutes may receive higher offers up to ₹6-7 LPA.',
  },
  {
    question: 'How often are hikes given at Cognizant?',
    answer:
      'Annual appraisals happen in April. Typical hikes range from 5-12% based on performance rating. Promotions (every 2-3 years) bring 15-30% increase. Counter offers for retention can be 20-40% for high performers with external offers.',
  },
  {
    question: 'What is the variable pay at Cognizant?',
    answer:
      'Variable pay is typically 10-15% of CTC for junior roles and can go up to 20-25% for senior roles. It depends on company performance, project delivery, and individual rating. It&apos;s usually paid annually, sometimes quarterly.',
  },
  {
    question: 'How is the promotion structure at Cognizant?',
    answer:
      'Typical progression: PAT → PA (1 year) → Associate (2-3 years) → Sr. Associate (2-3 years) → Manager (3-4 years). Senior levels take longer. Promotions depend on performance, skills, and availability of higher-level positions.',
  },
  {
    question: 'Is Cognizant salary competitive?',
    answer:
      'Cognizant salaries are competitive within the IT services industry (TCS, Infosys, Wipro range). Product companies and startups typically pay 30-50% more. Cognizant compensates with stability, learning opportunities, and work-life balance.',
  },
  {
    question: 'What&apos;s the salary difference between offshore and onsite?',
    answer:
      'Onsite (US/UK) opportunities typically offer 2-4x India salary plus benefits in local currency. For example, a Sr. Associate earning ₹10 LPA in India could earn $60-80K in the US on an onsite assignment.',
  },
  {
    question: 'Do lateral hires get better salary than internal employees?',
    answer:
      'Often yes. Lateral hires can negotiate based on current salary and market rates, sometimes resulting in 30-50% higher than internal employees at the same level. Cognizant has made efforts to address such disparities through market corrections.',
  },
  {
    question: 'What benefits are included beyond salary?',
    answer:
      'Key benefits include: Medical insurance (₹5-10 LPA cover), term life insurance (3-5x salary), PF contribution (12%), gratuity, transport/food allowance, learning budget, and leave policies. Total benefits value is typically 15-20% of CTC.',
  },
];

const comparisonData = [
  {
    company: 'Cognizant',
    fresherSalary: '₹3.5-4.5 LPA',
    midLevelSalary: '₹8-15 LPA',
    seniorSalary: '₹18-35 LPA',
  },
  {
    company: 'TCS',
    fresherSalary: '₹3.3-4 LPA',
    midLevelSalary: '₹7-12 LPA',
    seniorSalary: '₹15-28 LPA',
  },
  {
    company: 'Infosys',
    fresherSalary: '₹3.5-4.5 LPA',
    midLevelSalary: '₹8-14 LPA',
    seniorSalary: '₹16-30 LPA',
  },
  {
    company: 'Wipro',
    fresherSalary: '₹3.5-4.2 LPA',
    midLevelSalary: '₹7-13 LPA',
    seniorSalary: '₹14-26 LPA',
  },
  {
    company: 'Accenture',
    fresherSalary: '₹4.5-6 LPA',
    midLevelSalary: '₹10-18 LPA',
    seniorSalary: '₹22-45 LPA',
  },
  {
    company: 'Capgemini',
    fresherSalary: '₹3.8-4.5 LPA',
    midLevelSalary: '₹8-14 LPA',
    seniorSalary: '₹17-32 LPA',
  },
];

export default function CognizantSalaryPage() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Cognizant Salary in India',
            description: 'Complete salary guide for Cognizant India.',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
        <div className="container relative py-16 md:py-24">
          <Link
            href="/companies/cognizant"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← Back to Cognizant
          </Link>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                Salary Guide
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Cognizant Salary Structure
              </h1>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Complete breakdown of Cognizant salaries in India - from fresher
                to senior leadership, including hikes, bonuses, and benefits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-white/90"
                >
                  <a
                    href="https://careers.cognizant.com"
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
                  <a href="#by-designation">View by Designation</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <GraduationCap className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Fresher Salary</p>
                <p className="text-2xl font-bold text-white">₹3.5-4.5 LPA</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <TrendingUp className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Annual Hike</p>
                <p className="text-2xl font-bold text-white">5-12%</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Briefcase className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Senior Level</p>
                <p className="text-2xl font-bold text-white">₹20-60 LPA</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Star className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Variable Pay</p>
                <p className="text-2xl font-bold text-white">10-25%</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹3.5 LPA</p>
              <p className="text-xs text-muted-foreground">Min (Fresher)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹10 LPA</p>
              <p className="text-xs text-muted-foreground">Median</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">₹2 Cr+</p>
              <p className="text-xs text-muted-foreground">Max (Executive)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">5-30%</p>
              <p className="text-xs text-muted-foreground">Hike Range</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">9 Levels</p>
              <p className="text-xs text-muted-foreground">Career Ladder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary by Designation */}
      <section
        id="by-designation"
        className="container py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Salary by Designation</h2>
            <p className="text-muted-foreground">
              Complete career ladder from Trainee to VP
            </p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-4 text-left font-semibold">
                        Designation
                      </th>
                      <th className="p-4 text-left font-semibold">Level</th>
                      <th className="p-4 text-left font-semibold">
                        Experience
                      </th>
                      <th className="p-4 text-left font-semibold">
                        CTC (Annual)
                      </th>
                      <th className="p-4 text-left font-semibold">Take Home</th>
                      <th className="hidden p-4 text-left font-semibold md:table-cell">
                        Variable
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryByDesignation.map((row, i) => (
                      <tr
                        key={row.designation}
                        className={i % 2 === 0 ? 'bg-muted/20' : ''}
                      >
                        <td className="p-4">
                          <div className="font-medium">{row.designation}</div>
                          <p className="text-xs text-muted-foreground">
                            {row.notes}
                          </p>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{row.level}</Badge>
                        </td>
                        <td className="p-4 text-muted-foreground">
                          {row.experience}
                        </td>
                        <td className="p-4 font-semibold text-green-600">
                          {row.ctc}
                        </td>
                        <td className="p-4">{row.takeHome}</td>
                        <td className="hidden p-4 text-muted-foreground md:table-cell">
                          {row.variable}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Salary by Role */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Salary by Role/Technology
              </h2>
              <p className="text-muted-foreground">
                How different technologies and roles affect compensation
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {salaryByRole.map((role) => (
                <Card
                  key={role.role}
                  className="p-4"
                >
                  <h3 className="mb-2 font-semibold">{role.role}</h3>
                  <p className="text-xs text-muted-foreground">
                    {role.experience}
                  </p>
                  <p className="mt-2 text-sm font-medium text-green-600">
                    {role.salary}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hike Structure */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Hike & Increment Structure
            </h2>
          </div>
          <div className="space-y-4">
            {hikeStructure.map((hike) => (
              <Card
                key={hike.type}
                className="p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{hike.type}</h3>
                    <p className="text-sm text-muted-foreground">
                      {hike.notes}
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    {hike.percentage}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Structure */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Bonus & Variable Pay</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {bonusStructure.map((bonus) => (
                    <div
                      key={bonus.type}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <h3 className="font-semibold">{bonus.type}</h3>
                        <p className="text-xs text-muted-foreground">
                          {bonus.eligibility}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">
                          {bonus.amount}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {bonus.frequency}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Value */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Benefits & Perks Value</h2>
            <p className="text-muted-foreground">
              Total benefits add 15-20% to your CTC
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {benefitsValue.map((benefit) => (
              <Card
                key={benefit.benefit}
                className="p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{benefit.benefit}</h3>
                    <p className="text-xs text-muted-foreground">
                      {benefit.notes}
                    </p>
                  </div>
                  <Badge variant="secondary">{benefit.value}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Cognizant vs Competitors
              </h2>
              <p className="text-muted-foreground">
                How Cognizant salaries compare to other IT services companies
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-3 text-left">Company</th>
                        <th className="p-3 text-left">Fresher</th>
                        <th className="p-3 text-left">Mid-Level (4-6 yrs)</th>
                        <th className="p-3 text-left">Senior (10+ yrs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr
                          key={row.company}
                          className={
                            row.company === 'Cognizant'
                              ? 'bg-blue-50 dark:bg-blue-950'
                              : i % 2 === 0
                                ? 'bg-muted/20'
                                : ''
                          }
                        >
                          <td className="p-3 font-medium">{row.company}</td>
                          <td className="p-3">{row.fresherSalary}</td>
                          <td className="p-3">{row.midLevelSalary}</td>
                          <td className="p-3">{row.seniorSalary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              *Salaries vary based on location, skills, and negotiation. Product
              companies typically pay 30-100% more.
            </p>
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

      {/* Tips */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Tips to Maximize Your Cognizant Salary
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Negotiate at Joining</h3>
                <p className="text-sm text-muted-foreground">
                  Lateral hires have more negotiation power. Research market
                  rates and negotiate base salary aggressively.
                </p>
              </Card>
              <Card className="p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Performance Matters</h3>
                <p className="text-sm text-muted-foreground">
                  Top performers (Rating 1) get 2-3x higher hikes than average
                  performers. Invest in delivering exceptional results.
                </p>
              </Card>
              <Card className="p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Hot Skills Command Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Cloud (AWS/Azure), AI/ML, Data Engineering, and DevOps skills
                  pay 20-40% more than traditional roles.
                </p>
              </Card>
              <Card className="p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Onsite Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Onsite assignments (US/UK/Europe) can 2-4x your effective
                  salary. Build client relationships for such opportunities.
                </p>
              </Card>
              <Card className="p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Get Certified</h3>
                <p className="text-sm text-muted-foreground">
                  Cloud certifications, PMP, Agile certifications add ₹1-3 LPA
                  to your value and accelerate promotions.
                </p>
              </Card>
              <Card className="p-4">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold">Use External Offers</h3>
                <p className="text-sm text-muted-foreground">
                  Counter offers for high performers can be 20-40% higher. Get
                  external offers to unlock retention bonuses.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Looking for Cognizant Jobs?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Explore current openings and start your journey at Cognizant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90"
              >
                <a
                  href="https://careers.cognizant.com"
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
                <Link href="/companies/cognizant">
                  Cognizant Overview
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
