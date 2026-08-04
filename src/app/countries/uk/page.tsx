import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  PoundSterling,
  FileText,
  Globe,
  Building2,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Plane,
  Home,
  Heart,
  Award,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in UK',
  description:
    'Complete guide to studying and working in the UK. Learn about Student visa, Graduate Route, top universities like Oxford and Cambridge, costs, scholarships, and job opportunities.',
  keywords:
    'study in UK, work in UK, UK student visa, Graduate Route visa, UK universities, international students UK, study abroad UK, Oxford, Cambridge, Russell Group',
  openGraph: {
    title: 'Study & Work in UK - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in the UK as an international student.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/uk',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/uk',
  },
};

const visaTypes = [
  {
    name: 'Student Visa (Tier 4)',
    description:
      'Primary visa for international students studying at licensed UK institutions',
    duration: 'Course duration + 4 months after',
    workRights: '20 hrs/week during term, full-time during breaks',
    path: 'Graduate Route → Skilled Worker visa → ILR',
  },
  {
    name: 'Graduate Route Visa',
    description: 'Post-study work visa for graduates of UK universities',
    duration: '2 years (3 years for PhD graduates)',
    workRights: 'Full-time work, no sponsorship required',
    path: 'Can switch to Skilled Worker for longer stay',
  },
  {
    name: 'Skilled Worker Visa',
    description: 'Work visa for skilled professionals with job offer',
    duration: 'Up to 5 years, extendable',
    workRights: 'Full-time work for sponsoring employer',
    path: 'ILR after 5 years → British Citizenship',
  },
  {
    name: 'High Potential Individual (HPI)',
    description: 'For graduates of top global universities',
    duration: '2 years (3 for PhD)',
    workRights: 'Work without sponsorship',
    path: 'Can switch to other visa routes',
  },
];

const costs = {
  tuition: {
    undergraduate: '£15,000 - £38,000/year',
    postgraduate: '£12,000 - £45,000/year',
    mba: '£30,000 - £90,000/year',
  },
  living: {
    london: '£15,000 - £20,000/year',
    otherCities: '£10,000 - £14,000/year',
    smallTowns: '£8,000 - £10,000/year',
  },
  other: {
    healthSurcharge: '£776/year (IHS)',
    visaFee: '£490 (Student visa)',
    books: '£500 - £1,000/year',
  },
};

const topUniversities = [
  {
    name: 'University of Oxford',
    location: 'Oxford',
    ranking: '#1 UK',
    programs: 'Law, Medicine, PPE',
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge',
    ranking: '#2 UK',
    programs: 'Sciences, Engineering',
  },
  {
    name: 'Imperial College London',
    location: 'London',
    ranking: '#3 UK',
    programs: 'STEM, Medicine, Business',
  },
  {
    name: 'UCL',
    location: 'London',
    ranking: '#4 UK',
    programs: 'Arts, Sciences, Law',
  },
  {
    name: 'London School of Economics',
    location: 'London',
    ranking: '#5 UK',
    programs: 'Economics, Politics, Law',
  },
  {
    name: 'University of Edinburgh',
    location: 'Edinburgh',
    ranking: '#6 UK',
    programs: 'Medicine, AI, Arts',
  },
];

const scholarships = [
  {
    name: 'Chevening Scholarships',
    amount: 'Full funding',
    eligibility: 'Future leaders from Chevening-eligible countries',
    deadline: 'November',
  },
  {
    name: 'Commonwealth Scholarships',
    amount: 'Full funding',
    eligibility: 'Citizens of Commonwealth countries',
    deadline: 'Varies by country',
  },
  {
    name: 'GREAT Scholarships',
    amount: '£10,000+ towards tuition',
    eligibility: 'Students from select countries',
    deadline: 'February',
  },
  {
    name: 'Gates Cambridge Scholarship',
    amount: 'Full funding',
    eligibility: 'Outstanding international applicants to Cambridge',
    deadline: 'December/January',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: '£35,000 - £55,000',
    mid: '£60,000 - £100,000',
  },
  {
    role: 'Data Scientist',
    entry: '£35,000 - £50,000',
    mid: '£55,000 - £85,000',
  },
  {
    role: 'Investment Banker',
    entry: '£50,000 - £70,000',
    mid: '£100,000 - £200,000+',
  },
  { role: 'Consultant', entry: '£40,000 - £55,000', mid: '£70,000 - £120,000' },
  {
    role: 'Marketing Manager',
    entry: '£28,000 - £40,000',
    mid: '£50,000 - £80,000',
  },
  { role: 'Accountant', entry: '£28,000 - £38,000', mid: '£50,000 - £80,000' },
];

const faqs = [
  {
    question: 'How long can I stay in the UK after graduation?',
    answer:
      'With the Graduate Route visa, you can stay for 2 years after completing your degree (3 years for PhD graduates) to work, look for work, or start a business without needing employer sponsorship.',
  },
  {
    question: 'What is the UK Honours degree classification?',
    answer:
      'UK universities use a classification system: First Class (70%+), Upper Second (2:1, 60-69%), Lower Second (2:2, 50-59%), Third Class (40-49%). Most employers and graduate programs look for at least a 2:1.',
  },
  {
    question: 'Can I work during my studies in the UK?',
    answer:
      'Yes, international students on a Student visa can work up to 20 hours per week during term time and full-time during vacation periods. Some restrictions apply to certain types of work.',
  },
  {
    question: 'What is the Immigration Health Surcharge (IHS)?',
    answer:
      'The IHS is a mandatory fee of £776 per year that international students must pay for access to the National Health Service (NHS). This gives you access to healthcare similar to UK residents.',
  },
  {
    question: 'How do I apply to UK universities?',
    answer:
      'For undergraduate courses, apply through UCAS (Universities and Colleges Admissions Service). For postgraduate courses, apply directly to universities. Deadlines are typically October for Oxford/Cambridge and January for most other universities.',
  },
];

export default function UKPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-red-700 to-blue-900 py-20 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇬🇧</span>
              <span className="font-semibold">United Kingdom</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in the UK
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Home to world-renowned universities like Oxford and Cambridge. The
              UK offers excellent education, a 2-year post-study work visa, and
              diverse career opportunities across Europe's largest economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-white/90"
              >
                <Link
                  href="#visa-guide"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Visa Guide
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Link
                  href="#scholarships"
                  className="flex items-center gap-2"
                >
                  <Award className="h-5 w-5" />
                  Scholarships
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        {/* Quick Stats */}
        <div className="mb-16 grid gap-4 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">680K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">160+</p>
              <p className="text-sm text-muted-foreground">Universities</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">2 Years</p>
              <p className="text-sm text-muted-foreground">
                Graduate Route Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-3 h-10 w-10 text-orange-600" />
              <p className="text-3xl font-bold text-primary">1 Year</p>
              <p className="text-sm text-muted-foreground">Master's Duration</p>
            </CardContent>
          </Card>
        </div>

        {/* Visa Types Section */}
        <section
          id="visa-guide"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <FileText className="h-8 w-8 text-primary" />
            Visa Types & Work Authorization
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {visaTypes.map((visa) => (
              <Card
                key={visa.name}
                className="transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">{visa.name}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{visa.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 text-blue-500" />
                      <span>
                        <strong>Duration:</strong> {visa.duration}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="mt-0.5 h-4 w-4 text-green-500" />
                      <span>
                        <strong>Work Rights:</strong> {visa.workRights}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 text-purple-500" />
                      <span>
                        <strong>Pathway:</strong> {visa.path}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <PoundSterling className="h-8 w-8 text-primary" />
            Cost of Studying in the UK
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Undergraduate</span>
                  <span className="font-semibold">
                    {costs.tuition.undergraduate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Postgraduate</span>
                  <span className="font-semibold">
                    {costs.tuition.postgraduate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>MBA</span>
                  <span className="font-semibold">{costs.tuition.mba}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-green-500" />
                  Living Expenses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>London</span>
                  <span className="font-semibold">{costs.living.london}</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Major Cities</span>
                  <span className="font-semibold">
                    {costs.living.otherCities}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Small Towns</span>
                  <span className="font-semibold">
                    {costs.living.smallTowns}
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Other Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Health Surcharge</span>
                  <span className="font-semibold">
                    {costs.other.healthSurcharge}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Visa Fee</span>
                  <span className="font-semibold">{costs.other.visaFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Books & Supplies</span>
                  <span className="font-semibold">{costs.other.books}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> £25,000 - £50,000+ per year
              depending on course and location
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities (Russell Group & More)
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topUniversities.map((uni) => (
              <Card
                key={uni.name}
                className="transition-all hover:border-primary"
              >
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-bold">{uni.name}</h3>
                    <Badge variant="outline">{uni.ranking}</Badge>
                  </div>
                  <p className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {uni.location}
                  </p>
                  <p className="text-sm">
                    <strong>Top Programs:</strong> {uni.programs}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Scholarships */}
        <section
          id="scholarships"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Award className="h-8 w-8 text-primary" />
            Scholarships for International Students
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {scholarships.map((scholarship) => (
              <Card
                key={scholarship.name}
                className="transition-all hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-bold">{scholarship.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <PoundSterling className="h-4 w-4 text-green-500" />
                      <span>
                        <strong>Amount:</strong> {scholarship.amount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>
                        <strong>Eligibility:</strong> {scholarship.eligibility}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>
                        <strong>Deadline:</strong> {scholarship.deadline}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link
                href="/scholarships"
                className="flex items-center gap-2"
              >
                <Award className="h-4 w-4" />
                View All Scholarships
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Salary Expectations */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <PoundSterling className="h-8 w-8 text-primary" />
            Salary Expectations (GBP)
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-3 text-left font-semibold">Role</th>
                      <th className="pb-3 text-left font-semibold">
                        Entry Level
                      </th>
                      <th className="pb-3 text-left font-semibold">
                        Mid Level (5+ years)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaries.map((salary) => (
                      <tr
                        key={salary.role}
                        className="border-b last:border-0"
                      >
                        <td className="py-3 font-medium">{salary.role}</td>
                        <td className="py-3 text-green-600">{salary.entry}</td>
                        <td className="py-3 text-blue-600">{salary.mid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <BookOpen className="h-8 w-8 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Tools CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-blue-900/10 via-red-700/10 to-blue-900/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your UK Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to UK Honours classification
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CV Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for UK applications
              </p>
            </Link>
            <Link
              href="/tools/sop-outliner"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Personal Statement</h3>
              <p className="text-sm text-muted-foreground">
                Create a compelling UCAS personal statement
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
