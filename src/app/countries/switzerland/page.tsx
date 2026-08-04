import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  DollarSign,
  FileText,
  Building2,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Home,
  Heart,
  Award,
  TrendingUp,
  AlertTriangle,
  Mountain,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Switzerland',
  description:
    'Complete guide to studying and working in Switzerland. Learn about ETH Zurich, EPFL, Swiss student visa, work permits, high salaries, and quality of life.',
  keywords:
    'study in Switzerland, work in Switzerland, ETH Zurich, EPFL, Swiss student visa, Switzerland universities, study abroad Switzerland, Swiss work permit',
  openGraph: {
    title: 'Study & Work in Switzerland - Complete Guide',
    description:
      'Everything you need to know about studying and working in Switzerland.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/switzerland',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/switzerland',
  },
};

const visaTypes = [
  {
    name: 'Student Visa (D Visa)',
    description: 'Long-stay visa for students enrolled in Swiss institutions',
    duration: 'Duration of studies',
    workRights: '15 hrs/week during term (after 6 months)',
    path: 'Student → Work Permit → C Permit (10+ years)',
  },
  {
    name: 'Work Permit (B Permit)',
    description: 'Residence permit for employed individuals',
    duration: '1 year, renewable',
    workRights: 'Full work rights',
    path: 'Requires job offer from Swiss employer',
  },
  {
    name: 'C Permit (Settlement)',
    description: 'Permanent residence after 10 years (5 for some countries)',
    duration: 'Permanent',
    workRights: 'Full work and self-employment rights',
    path: 'Path to Swiss citizenship after 10 years',
  },
];

const costs = {
  tuition: {
    undergraduate: 'CHF 500 - 2,000/semester (public)',
    postgraduate: 'CHF 500 - 4,000/semester (public)',
    private: 'CHF 20,000 - 50,000/year',
  },
  living: {
    zurich: 'CHF 2,000 - 3,000/month',
    geneva: 'CHF 1,800 - 2,800/month',
    otherCities: 'CHF 1,500 - 2,200/month',
  },
  other: {
    healthInsurance: 'CHF 80 - 150/month (mandatory)',
    visaFee: 'CHF 88',
    books: 'CHF 500 - 1,000/year',
  },
};

const topUniversities = [
  {
    name: 'ETH Zurich',
    location: 'Zurich',
    ranking: '#7 World (QS)',
    programs: 'Engineering, Computer Science, Physics',
    note: 'Top tech university globally',
  },
  {
    name: 'EPFL',
    location: 'Lausanne',
    ranking: '#36 World (QS)',
    programs: 'Engineering, Computer Science, Life Sciences',
    note: 'French-speaking equivalent of ETH',
  },
  {
    name: 'University of Zurich',
    location: 'Zurich',
    ranking: '#83 World (QS)',
    programs: 'Medicine, Law, Economics',
    note: 'Largest university in Switzerland',
  },
  {
    name: 'University of Geneva',
    location: 'Geneva',
    ranking: '#105 World (QS)',
    programs: 'International Relations, Law, Sciences',
    note: 'Near UN headquarters',
  },
  {
    name: 'University of Basel',
    location: 'Basel',
    ranking: '#87 World (QS)',
    programs: 'Life Sciences, Medicine',
    note: 'Oldest university in Switzerland',
  },
  {
    name: 'University of Bern',
    location: 'Bern',
    ranking: '#120 World (QS)',
    programs: 'Medicine, Law, Sciences',
    note: 'Capital city university',
  },
];

const scholarships = [
  {
    name: 'Swiss Government Excellence Scholarships',
    amount: 'CHF 1,920/month + tuition waiver',
    eligibility: 'PhD and Research students',
    deadline: 'August-November',
  },
  {
    name: 'ETH Excellence Scholarship',
    amount: 'CHF 12,000/year + tuition waiver',
    eligibility: 'Master students at ETH',
    deadline: 'December',
  },
  {
    name: 'EPFL Excellence Fellowships',
    amount: 'CHF 16,000/year',
    eligibility: 'Master students at EPFL',
    deadline: 'December-January',
  },
  {
    name: 'University Scholarships',
    amount: 'Varies (CHF 5,000 - 20,000)',
    eligibility: 'Based on academic merit',
    deadline: 'Varies by university',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'CHF 90,000 - 120,000',
    mid: 'CHF 140,000 - 200,000',
  },
  {
    role: 'Data Scientist',
    entry: 'CHF 95,000 - 125,000',
    mid: 'CHF 150,000 - 220,000',
  },
  {
    role: 'Finance/Banking',
    entry: 'CHF 85,000 - 110,000',
    mid: 'CHF 150,000 - 250,000',
  },
  {
    role: 'Pharma/Biotech',
    entry: 'CHF 80,000 - 100,000',
    mid: 'CHF 120,000 - 180,000',
  },
  {
    role: 'Mechanical Engineer',
    entry: 'CHF 75,000 - 95,000',
    mid: 'CHF 110,000 - 150,000',
  },
  {
    role: 'Academic Researcher',
    entry: 'CHF 70,000 - 90,000',
    mid: 'CHF 100,000 - 140,000',
  },
];

const faqs = [
  {
    question: 'What languages are needed to study in Switzerland?',
    answer:
      'Switzerland has four national languages: German, French, Italian, and Romansh. Many universities offer programs in English, especially at Masters level. ETH and EPFL have extensive English programs. For public universities, some programs require German or French proficiency (B2-C1 level).',
  },
  {
    question: 'How expensive is Switzerland for students?',
    answer:
      'Switzerland is one of the most expensive countries, but public university tuition is surprisingly low (CHF 500-2,000/semester). The main expense is living costs: budget CHF 1,800-2,500/month. Part-time work (15 hrs/week after 6 months) helps offset costs.',
  },
  {
    question: 'Can I stay in Switzerland after graduation?',
    answer:
      'Yes! After graduation, you can apply for a job-seeker permit (6 months) to find employment. Once employed, you can get a B Permit. The path to permanent residence (C Permit) takes 10 years, and citizenship requires 10+ years of residence.',
  },
  {
    question: 'How difficult is it to get a job in Switzerland?',
    answer:
      'Switzerland has low unemployment and high demand for skilled workers, especially in tech, pharma, finance, and engineering. However, work permits for non-EU citizens are limited. Studying in Switzerland significantly improves your chances as employers prefer local graduates.',
  },
  {
    question: 'What makes ETH Zurich special?',
    answer:
      'ETH Zurich is consistently ranked among the top 10 universities worldwide. It has produced 21 Nobel laureates including Einstein. Known for engineering, computer science, and natural sciences, it offers excellent research opportunities and industry connections with competitive tuition (CHF 730/semester).',
  },
];

export default function SwitzerlandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇨🇭</span>
              <span className="font-semibold">Switzerland</span>
              <Mountain className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Switzerland
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Home to world-class universities like ETH Zurich, offering
              exceptional quality of life, highest salaries globally, and a
              multilingual environment in the heart of Europe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-white/90"
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
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-red-600" />
              <p className="text-3xl font-bold text-primary">Top 10</p>
              <p className="text-sm text-muted-foreground">
                ETH Zurich World Rank
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">CHF 100K+</p>
              <p className="text-sm text-muted-foreground">
                Average Tech Salary
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Universities</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">#1</p>
              <p className="text-sm text-muted-foreground">Quality of Life</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Switzerland */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Mountain className="h-8 w-8 text-red-600" />
            Why Choose Switzerland?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'World-Class Education',
                desc: 'ETH Zurich & EPFL among top 50 globally',
              },
              {
                title: 'Highest Salaries',
                desc: 'CHF 100K+ average for tech roles',
              },
              {
                title: 'Low Tuition',
                desc: 'Public universities: CHF 500-2000/semester',
              },
              {
                title: 'Multilingual',
                desc: 'Learn German, French, or study in English',
              },
              { title: 'Central Location', desc: 'Gateway to rest of Europe' },
              {
                title: 'Quality of Life',
                desc: 'Clean cities, safety, excellent healthcare',
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <CheckCircle className="mb-2 h-6 w-6 text-green-500" />
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Visa Types */}
        <section
          id="visa-guide"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <FileText className="h-8 w-8 text-primary" />
            Visa & Permit Types
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
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
            Cost of Studying in Switzerland (CHF)
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
                  <span>Undergraduate (Public)</span>
                  <span className="font-semibold">
                    {costs.tuition.undergraduate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Postgraduate (Public)</span>
                  <span className="font-semibold">
                    {costs.tuition.postgraduate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Private Universities</span>
                  <span className="font-semibold">{costs.tuition.private}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-green-500" />
                  Living Expenses (Monthly)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Zurich</span>
                  <span className="font-semibold">{costs.living.zurich}</span>
                </div>
                <div className="flex justify-between">
                  <span>Geneva</span>
                  <span className="font-semibold">{costs.living.geneva}</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Cities</span>
                  <span className="font-semibold">
                    {costs.living.otherCities}
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
          <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="flex items-center gap-2 text-red-800 dark:text-red-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> CHF 25,000 - 40,000+ per
              year (living is the main expense, tuition is low)
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities in Switzerland
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topUniversities.map((uni) => (
              <Card
                key={uni.name}
                className="transition-all hover:border-primary"
              >
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-base font-bold">{uni.name}</h3>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      {uni.ranking}
                    </Badge>
                  </div>
                  <p className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {uni.location}
                  </p>
                  <p className="text-sm">
                    <strong>Programs:</strong> {uni.programs}
                  </p>
                  <p className="mt-2 text-xs italic text-muted-foreground">
                    {uni.note}
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
        </section>

        {/* Salary Expectations */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" />
            Salary Expectations (CHF)
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

        {/* Related Tools */}
        <section className="rounded-2xl bg-gradient-to-r from-red-600/10 to-white/20 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Switzerland Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert grades for Swiss universities
              </p>
            </Link>
            <Link
              href="/tools/cost-of-living"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Cost of Living</h3>
              <p className="text-sm text-muted-foreground">
                Compare Zurich, Geneva costs
              </p>
            </Link>
            <Link
              href="/tools/lor-sop-generator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">LOR/SOP Generator</h3>
              <p className="text-sm text-muted-foreground">
                Create German-format motivation letters
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
