import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  DollarSign,
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
  title: 'Study & Work in USA',
  description:
    'Complete guide to studying and working in the USA. Learn about F-1 visa, OPT, H-1B, top universities, costs, scholarships, and job opportunities for international students.',
  keywords:
    'study in USA, work in USA, F-1 visa, OPT, STEM OPT, H-1B visa, US universities, international students USA, USA student visa, study abroad USA',
  openGraph: {
    title: 'Study & Work in USA - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in the USA as an international student.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/usa',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/usa',
  },
};

const visaTypes = [
  {
    name: 'F-1 Student Visa',
    description:
      'Primary visa for full-time academic students at accredited universities',
    duration: 'Duration of study + 60 days grace period',
    workRights: '20 hrs/week on-campus during school, 40 hrs during breaks',
    path: 'OPT → H-1B → Green Card',
  },
  {
    name: 'OPT (Optional Practical Training)',
    description:
      'Work authorization for F-1 students to gain practical experience',
    duration: '12 months (24 additional months for STEM)',
    workRights: 'Full-time work in field of study',
    path: 'Post-graduation work permit',
  },
  {
    name: 'H-1B Work Visa',
    description: 'Specialty occupation visa for skilled workers',
    duration: '3 years, extendable to 6 years',
    workRights: 'Full-time work for sponsoring employer',
    path: 'Employer-sponsored Green Card pathway',
  },
  {
    name: 'J-1 Exchange Visitor',
    description: 'For students participating in exchange programs',
    duration: 'Program duration',
    workRights: 'Limited work authorization',
    path: 'May have 2-year home residency requirement',
  },
];

const costs = {
  tuition: {
    public: '$25,000 - $45,000/year',
    private: '$40,000 - $75,000/year',
    community: '$8,000 - $15,000/year',
  },
  living: {
    bigCity: '$18,000 - $30,000/year',
    mediumCity: '$12,000 - $18,000/year',
    smallTown: '$8,000 - $12,000/year',
  },
  other: {
    healthInsurance: '$1,500 - $3,000/year',
    books: '$500 - $1,500/year',
    transport: '$1,000 - $3,000/year',
  },
};

const topUniversities = [
  {
    name: 'MIT',
    location: 'Massachusetts',
    ranking: '#1 World',
    programs: 'STEM, Engineering',
  },
  {
    name: 'Stanford University',
    location: 'California',
    ranking: '#2 World',
    programs: 'Tech, Business, AI',
  },
  {
    name: 'Harvard University',
    location: 'Massachusetts',
    ranking: '#3 World',
    programs: 'Law, Business, Medicine',
  },
  {
    name: 'Caltech',
    location: 'California',
    ranking: '#6 World',
    programs: 'Science, Engineering',
  },
  {
    name: 'University of Chicago',
    location: 'Illinois',
    ranking: '#10 World',
    programs: 'Economics, Business',
  },
  {
    name: 'Carnegie Mellon',
    location: 'Pennsylvania',
    ranking: '#22 World',
    programs: 'CS, Robotics, AI',
  },
];

const scholarships = [
  {
    name: 'Fulbright Foreign Student Program',
    amount: 'Full funding',
    eligibility: 'Graduate students and young professionals',
    deadline: 'Varies by country',
  },
  {
    name: 'Hubert Humphrey Fellowship',
    amount: 'Full funding',
    eligibility: 'Mid-career professionals',
    deadline: 'Annual',
  },
  {
    name: 'University Merit Scholarships',
    amount: '$5,000 - Full tuition',
    eligibility: 'Based on academic excellence',
    deadline: 'Varies by university',
  },
  {
    name: 'AAUW International Fellowships',
    amount: '$18,000 - $30,000',
    eligibility: 'Women pursuing graduate degrees',
    deadline: 'November',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: '$100,000 - $150,000',
    mid: '$150,000 - $250,000',
  },
  {
    role: 'Data Scientist',
    entry: '$90,000 - $130,000',
    mid: '$130,000 - $200,000',
  },
  {
    role: 'Product Manager',
    entry: '$110,000 - $150,000',
    mid: '$150,000 - $250,000',
  },
  {
    role: 'Financial Analyst',
    entry: '$70,000 - $90,000',
    mid: '$100,000 - $150,000',
  },
  {
    role: 'Marketing Manager',
    entry: '$60,000 - $80,000',
    mid: '$90,000 - $140,000',
  },
  {
    role: 'Consultant',
    entry: '$80,000 - $120,000',
    mid: '$150,000 - $300,000',
  },
];

const faqs = [
  {
    question: 'Can I work while studying in the USA on F-1 visa?',
    answer:
      'Yes, F-1 students can work up to 20 hours per week on-campus during the academic semester and full-time during breaks. Off-campus work is restricted to CPT (Curricular Practical Training) and OPT (Optional Practical Training) programs.',
  },
  {
    question: 'What is the difference between OPT and STEM OPT?',
    answer:
      'Regular OPT provides 12 months of work authorization after graduation. STEM OPT is a 24-month extension available for students who graduated from STEM-designated degree programs, allowing a total of 36 months of work authorization.',
  },
  {
    question: 'How do I convert from F-1 to H-1B visa?',
    answer:
      'During OPT, you can apply for H-1B through an employer. The H-1B lottery occurs annually in March. If selected, you can transition from F-1/OPT status to H-1B by October 1st of that year.',
  },
  {
    question: 'What GPA do I need for US graduate schools?',
    answer:
      'Most US graduate schools require a minimum 3.0 GPA on a 4.0 scale (approximately 75% or 7.5 CGPA on Indian 10-point scale). Top programs typically expect 3.5+ GPA along with strong GRE/GMAT scores and research experience.',
  },
  {
    question: 'How much does it cost to study in the USA?',
    answer:
      'Total costs range from $40,000 to $80,000+ per year depending on the university and location. This includes tuition ($25,000-$75,000), living expenses ($12,000-$25,000), health insurance, and other costs.',
  },
];

export default function USAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 py-20 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇺🇸</span>
              <span className="font-semibold">United States of America</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in the USA
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Home to the world's top universities and tech companies. The USA
              offers unparalleled opportunities for education, research, and
              career growth for international students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90"
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
              <p className="text-3xl font-bold text-primary">1M+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">4,000+</p>
              <p className="text-sm text-muted-foreground">
                Universities & Colleges
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">3 Years</p>
              <p className="text-sm text-muted-foreground">STEM OPT Duration</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-orange-600" />
              <p className="text-3xl font-bold text-primary">$100K+</p>
              <p className="text-sm text-muted-foreground">Avg Tech Salary</p>
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
            <DollarSign className="h-8 w-8 text-primary" />
            Cost of Studying in the USA
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
                  <span>Public University</span>
                  <span className="font-semibold">{costs.tuition.public}</span>
                </div>
                <div className="flex justify-between">
                  <span>Private University</span>
                  <span className="font-semibold">{costs.tuition.private}</span>
                </div>
                <div className="flex justify-between">
                  <span>Community College</span>
                  <span className="font-semibold">
                    {costs.tuition.community}
                  </span>
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
                  <span>Big Cities (NYC, SF)</span>
                  <span className="font-semibold">{costs.living.bigCity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium Cities</span>
                  <span className="font-semibold">
                    {costs.living.mediumCity}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Small Towns</span>
                  <span className="font-semibold">
                    {costs.living.smallTown}
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
                  <span>Health Insurance</span>
                  <span className="font-semibold">
                    {costs.other.healthInsurance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Books & Supplies</span>
                  <span className="font-semibold">{costs.other.books}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transportation</span>
                  <span className="font-semibold">{costs.other.transport}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> $50,000 - $100,000+ per
              year depending on university and location
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities for International Students
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
                      <DollarSign className="h-4 w-4 text-green-500" />
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
            <DollarSign className="h-8 w-8 text-primary" />
            Salary Expectations (USD)
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
        <section className="rounded-2xl bg-gradient-to-r from-blue-600/10 via-red-500/10 to-blue-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your USA Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to US 4.0 GPA scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your resume for US applications
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate take-home pay in the US
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
