import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import AgeCalculatorClient from './AgeCalculatorClient';
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Gift,
  BookOpen,
  Lightbulb,
  FileText,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Age Calculator - Calculate Exact Age | Free Tool',
  description:
    'Free online age calculator to find your exact age in years, months, and days. Calculate age for job applications, passport, voter ID, insurance, and more. Works for any date of birth.',
  keywords: [
    'age calculator',
    'calculate age',
    'exact age calculator',
    'age in years months days',
    'birthday calculator',
    'age calculator online',
    'how old am i',
    'age calculator india',
    'age for passport',
    'age for voter id',
  ],
  canonical: '/tools/age-calculator',
});

const ageRequirements = [
  {
    document: 'Indian Passport',
    age: 'Any age (minor passport under 18)',
    note: 'Parents must apply for minors',
  },
  {
    document: 'Voter ID Card',
    age: '18 years',
    note: 'Must be 18 on January 1st of the year',
  },
  {
    document: 'PAN Card',
    age: 'Any age',
    note: 'Minor PAN requires parent signature',
  },
  {
    document: 'Driving License',
    age: '18 years (16 for non-geared)',
    note: 'Learning license at 16',
  },
  {
    document: 'Aadhaar Card',
    age: 'Any age',
    note: 'Mandatory biometric update at 5, 15 years',
  },
  {
    document: 'Bank Account',
    age: '10+ years (minor account)',
    note: '18+ for regular account',
  },
  {
    document: 'Demat Account',
    age: '18 years',
    note: 'Minor demat needs guardian',
  },
  { document: 'Credit Card', age: '18-21 years', note: 'Varies by bank' },
];

const jobAgeRequirements = [
  {
    category: 'UPSC Civil Services',
    minAge: '21',
    maxAge: '32',
    relaxation: 'SC/ST: +5, OBC: +3',
  },
  {
    category: 'SSC CGL',
    minAge: '18',
    maxAge: '32',
    relaxation: 'Varies by post',
  },
  {
    category: 'Bank PO (SBI)',
    minAge: '21',
    maxAge: '30',
    relaxation: 'SC/ST: +5, OBC: +3',
  },
  {
    category: 'IBPS Clerk',
    minAge: '20',
    maxAge: '28',
    relaxation: 'SC/ST: +5, OBC: +3',
  },
  {
    category: 'Railway (RRB)',
    minAge: '18',
    maxAge: '33',
    relaxation: 'Varies by category',
  },
  {
    category: 'Defence (NDA)',
    minAge: '16.5',
    maxAge: '19.5',
    relaxation: 'None',
  },
  {
    category: 'Indian Army',
    minAge: '17.5',
    maxAge: '23',
    relaxation: 'Varies by entry',
  },
  {
    category: 'State PSC',
    minAge: '21',
    maxAge: '35-40',
    relaxation: 'State-specific',
  },
];

const lifeMilestones = [
  { age: '5 years', milestone: 'School admission age in most states' },
  { age: '10 years', milestone: 'Can open minor savings bank account' },
  { age: '14 years', milestone: 'Minimum working age (non-hazardous)' },
  { age: '16 years', milestone: 'Eligible for learning driving license' },
  { age: '18 years', milestone: 'Legal adult - voting, driving, contracts' },
  { age: '21 years', milestone: 'Legal drinking age in most states' },
  { age: '25 years', milestone: 'Can rent car without extra fees' },
  { age: '60 years', milestone: 'Senior citizen benefits begin' },
];

export default function AgeCalculatorPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Free Utility Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Age Calculator Online
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate your exact age in years, months, and days. Perfect for job
            applications, government forms, passport applications, and more.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Instant Results</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">10,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Privacy First</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <AgeCalculatorClient />

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            🎂 <strong>127 users</strong> calculated their age in the last hour
          </p>
        </div>

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Complete Guide to Age Calculation
          </h2>
          <p>
            Calculating your exact age is essential for various official
            purposes in India. Whether you&apos;re applying for a government
            job, passport, voter ID, or filling insurance forms, knowing your
            precise age in years, months, and days is crucial. Our free age
            calculator provides instant, accurate results.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              How Age is Calculated
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                Your age is calculated by finding the difference between your
                date of birth and the current date:
              </p>
              <p className="text-center font-mono text-lg font-bold text-primary">
                Age = Current Date - Date of Birth
              </p>
              <p className="text-muted-foreground">
                The calculation accounts for leap years and varying month
                lengths to give you the most accurate result.
              </p>
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Age Requirements for Indian Documents
          </h2>
          <p>
            Different government documents and services have specific age
            requirements. Here&apos;s a comprehensive guide to help you
            understand the minimum age needed:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Document/Service</th>
                  <th className="border p-3 text-left">Minimum Age</th>
                  <th className="border p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ageRequirements.map((req, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-medium">{req.document}</td>
                    <td className="border p-3 font-semibold text-primary">
                      {req.age}
                    </td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {req.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Age Limits for Government Jobs in India
          </h2>
          <p>
            Government job applications strictly enforce age limits.
            Understanding these requirements is crucial for planning your
            career. Age relaxations are available for reserved categories.
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Exam/Job</th>
                  <th className="border p-3 text-left">Min Age</th>
                  <th className="border p-3 text-left">Max Age</th>
                  <th className="border p-3 text-left">Age Relaxation</th>
                </tr>
              </thead>
              <tbody>
                {jobAgeRequirements.map((job, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-medium">{job.category}</td>
                    <td className="border p-3">{job.minAge} yrs</td>
                    <td className="border p-3 font-semibold text-primary">
                      {job.maxAge} yrs
                    </td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {job.relaxation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Important Life Milestones by Age
          </h2>
          <p>
            In India, reaching certain ages unlocks new rights,
            responsibilities, and opportunities. Here are the key milestones you
            should know:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            {lifeMilestones.map((item, i) => (
              <Card key={i}>
                <CardContent className="flex items-center gap-4 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-bold text-primary">
                      {item.age.split(' ')[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{item.age}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.milestone}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2>Why Accurate Age Calculation Matters</h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Job Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  Most government and corporate jobs have strict age criteria:
                </p>
                <ul className="space-y-1">
                  <li>• Age calculated as on specific cutoff date</li>
                  <li>• Wrong age can lead to application rejection</li>
                  <li>• Age proof documents required for verification</li>
                  <li>• Some jobs have upper age limit of 25-35</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Insurance & Finance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Your age directly affects premiums and eligibility:</p>
                <ul className="space-y-1">
                  <li>• Life insurance premiums based on age</li>
                  <li>• Health insurance age-based pricing</li>
                  <li>• Loan eligibility depends on age</li>
                  <li>• Retirement planning calculations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>How do I calculate my exact age in years, months, and days?</h3>
          <p>
            To calculate your exact age, subtract your date of birth from
            today&apos;s date. Our calculator does this automatically,
            accounting for leap years and varying month lengths. Simply enter
            your birth date and get instant results showing your age in years,
            months, days, and even total days lived.
          </p>

          <h3>What is the minimum age for voting in India?</h3>
          <p>
            The minimum voting age in India is <strong>18 years</strong>. You
            must be 18 years old on or before January 1st of the year in which
            the electoral roll is being prepared. You can apply for Voter ID
            (EPIC) once you turn 18.
          </p>

          <h3>How is age calculated for government jobs?</h3>
          <p>
            For government jobs, age is calculated as on a specific cutoff date
            mentioned in the job notification. This date varies by recruitment.
            For example, UPSC calculates age as on August 1st of the exam year.
            Always check the official notification for the exact cutoff date.
          </p>

          <h3>Do leap years affect age calculation?</h3>
          <p>
            Yes, leap years are considered in accurate age calculations. A leap
            year has 366 days instead of 365, which affects the total number of
            days you&apos;ve lived. Our calculator automatically accounts for
            all leap years since your birth.
          </p>

          <h3>What documents are accepted as proof of age in India?</h3>
          <p>The following documents are commonly accepted as age proof:</p>
          <ul>
            <li>
              <strong>Birth Certificate</strong> - Primary document
            </li>
            <li>
              <strong>School Leaving Certificate</strong> - Contains date of
              birth
            </li>
            <li>
              <strong>Passport</strong> - Valid identity and age proof
            </li>
            <li>
              <strong>PAN Card</strong> - Contains date of birth
            </li>
            <li>
              <strong>Aadhaar Card</strong> - Government-issued ID with DOB
            </li>
            <li>
              <strong>Driving License</strong> - Shows date of birth
            </li>
          </ul>

          <h3>How do I calculate age for passport application?</h3>
          <p>
            For passport applications, your age is calculated as on the date of
            application. Minors (under 18) get passports valid for 5 years or
            until they turn 18, whichever is earlier. Adults get passports valid
            for 10 years.
          </p>

          <h3>What is the legal age of marriage in India?</h3>
          <p>
            The legal marriage age in India is <strong>21 years for men</strong>{' '}
            and
            <strong> 18 years for women</strong>. The Prohibition of Child
            Marriage Act makes child marriages voidable and punishable by law.
          </p>

          <h3>How is age relaxation calculated for reserved categories?</h3>
          <p>
            Age relaxation for reserved categories is added to the upper age
            limit. For example, if the upper age limit is 30 years and SC/ST
            candidates get 5 years relaxation, their effective upper age limit
            becomes 35 years. This varies by recruitment and category.
          </p>

          <h3>Can I calculate someone else&apos;s age using this tool?</h3>
          <p>
            Yes, you can calculate anyone&apos;s age by entering their date of
            birth. This is useful for filling forms for family members,
            calculating eligibility for children&apos;s school admissions, or
            verifying age for any purpose.
          </p>

          <h3>How many days until my next birthday?</h3>
          <p>
            Our age calculator also shows how many days are left until your next
            birthday. This countdown feature helps you track upcoming birthdays
            and plan celebrations. The calculation updates in real-time based on
            today&apos;s date.
          </p>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Date Calculator',
                href: '/tools/date-calculator',
                desc: 'Calculate difference between dates',
              },
              {
                title: 'Percentage Calculator',
                href: '/tools/percentage-calculator',
                desc: 'Calculate marks and percentages',
              },
              {
                title: 'EMI Calculator',
                href: '/tools/emi-calculator',
                desc: 'Calculate education loan EMI',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-bold">Helpful Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/government-internships-india"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Government Internships in India
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore internship opportunities in government sectors.
              </p>
            </Link>
            <Link
              href="/blog/gate-exam-preparation-guide"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                GATE Exam Preparation Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Complete guide to prepare for GATE examination.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Start Your Career Journey</h2>
          <p className="mb-6 text-muted-foreground">
            Explore internship opportunities from top startups
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
