import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  Euro,
  FileText,
  Globe,
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
  Clover,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Ireland 2025 | Tech Hub of Europe',
  description:
    'Complete guide to studying and working in Ireland. Learn about Trinity College Dublin, Third Level Graduate Scheme, EU tech hub status, costs, and career opportunities with Google, Meta, Apple.',
  keywords:
    'study in Ireland, work in Ireland, Trinity College Dublin, Irish universities, Third Level Graduate Scheme, Ireland tech jobs, study abroad Ireland, Ireland student visa',
  openGraph: {
    title: 'Study & Work in Ireland - Tech Hub of Europe',
    description:
      'Study in Ireland and work at Google, Meta, Apple. Complete guide to visas, costs, and careers.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/ireland',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/ireland',
  },
};

const visaTypes = [
  {
    name: 'Stamp 2 (Student Visa)',
    description: 'For students enrolled in full-time courses',
    duration: 'Duration of course',
    workRights: '20 hrs/week during term, 40 hrs during breaks',
    path: 'Third Level Graduate Scheme → Work Permit → IBC',
  },
  {
    name: 'Third Level Graduate Scheme',
    description: 'Post-study work permission for graduates',
    duration: '1 year (Level 8), 2 years (Level 9/10)',
    workRights: '40 hrs/week',
    path: 'Find job → Critical Skills Permit',
  },
  {
    name: 'Critical Skills Employment Permit',
    description: 'For in-demand occupations (IT, Engineering)',
    duration: '2 years, then Stamp 4',
    workRights: 'Full work rights',
    path: 'Stamp 4 (residency) after 2 years',
  },
  {
    name: 'Irish Born Child (Stamp 4)',
    description: 'Long-term residence permit',
    duration: 'Renewable',
    workRights: 'Unrestricted',
    path: 'Citizenship after 5 years',
  },
];

const costs = {
  tuition: {
    euEea: '€3,000/year (contribution)',
    nonEU: '€10,000 - €25,000/year',
    medicine: '€45,000 - €55,000/year',
  },
  living: {
    dublin: '€12,000 - €18,000/year',
    cork: '€10,000 - €14,000/year',
    galway: '€9,000 - €13,000/year',
  },
  other: {
    healthInsurance: '€500 - €1,000/year',
    visaFee: '€60 (single entry)',
    registration: '€300 (GNIB/IRP card)',
  },
};

const topUniversities = [
  {
    name: 'Trinity College Dublin',
    location: 'Dublin',
    ranking: '#81 World',
    programs: 'CS, Business, Law, Medicine',
  },
  {
    name: 'University College Dublin',
    location: 'Dublin',
    ranking: '#126 World',
    programs: 'Engineering, Business, Sciences',
  },
  {
    name: 'National University of Ireland Galway',
    location: 'Galway',
    ranking: '#259 World',
    programs: 'Medicine, Engineering, Arts',
  },
  {
    name: 'University College Cork',
    location: 'Cork',
    ranking: '#273 World',
    programs: 'Food Science, Law, Medicine',
  },
  {
    name: 'Dublin City University',
    location: 'Dublin',
    ranking: 'Top Young Uni',
    programs: 'Communications, Business, IT',
  },
  {
    name: 'University of Limerick',
    location: 'Limerick',
    ranking: 'Top for Employment',
    programs: 'Engineering, Business, Health',
  },
];

const scholarships = [
  {
    name: 'Government of Ireland Scholarships',
    amount: '€10,000/year + tuition fees',
    eligibility: 'Non-EU students for all levels',
    deadline: 'March',
  },
  {
    name: 'Trinity College Scholarships',
    amount: 'Up to €5,000/year',
    eligibility: 'Based on academic merit',
    deadline: 'Varies by program',
  },
  {
    name: 'Science Foundation Ireland',
    amount: 'Full funding for STEM research',
    eligibility: 'PhD/Research students',
    deadline: 'Varies',
  },
  {
    name: 'University-Specific Awards',
    amount: '€1,000 - €10,000',
    eligibility: 'Based on merit or need',
    deadline: 'With application',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: '€45,000 - €65,000',
    mid: '€75,000 - €120,000',
  },
  {
    role: 'Data Scientist',
    entry: '€45,000 - €60,000',
    mid: '€70,000 - €110,000',
  },
  {
    role: 'Financial Analyst',
    entry: '€40,000 - €55,000',
    mid: '€65,000 - €95,000',
  },
  { role: 'Pharmacist', entry: '€45,000 - €55,000', mid: '€60,000 - €80,000' },
  {
    role: 'Marketing Manager',
    entry: '€35,000 - €50,000',
    mid: '€55,000 - €85,000',
  },
  { role: 'Accountant', entry: '€35,000 - €45,000', mid: '€55,000 - €80,000' },
];

const faqs = [
  {
    question: 'Why is Ireland called the "Tech Hub of Europe"?',
    answer:
      'Ireland hosts European headquarters of Google, Meta, Apple, Microsoft, LinkedIn, Twitter, and most major tech companies. Low corporate tax (12.5%), English-speaking, EU member, and strong talent pool make it ideal for tech.',
  },
  {
    question: 'What is the Third Level Graduate Scheme?',
    answer:
      "It allows non-EU graduates to stay and work in Ireland after studies. Level 8 (Bachelor's): 1 year, Level 9/10 (Master's/PhD): 2 years. You can work 40 hrs/week without sponsorship during this time.",
  },
  {
    question: 'Can I work while studying in Ireland?',
    answer:
      'Yes! Non-EU students on Stamp 2 can work 20 hrs/week during term and 40 hrs/week during June-September and December 15-January 15. Minimum wage is €12.70/hour (2024).',
  },
  {
    question: 'Is Ireland expensive for students?',
    answer:
      'Dublin is expensive (similar to London), but Cork, Galway, and Limerick are more affordable. Student accommodation is the biggest challenge. Budget €12,000-18,000/year for living costs.',
  },
  {
    question: 'How can I get permanent residence in Ireland?',
    answer:
      'Work with a Critical Skills Permit for 2 years → Stamp 4 (residency). After 5 years of legal residence, you can apply for citizenship. Ireland allows dual citizenship.',
  },
];

export default function IrelandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-white to-orange-500 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/95 via-green-600/95 to-green-700/95" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇮🇪</span>
              <span className="font-semibold">Ireland</span>
              <Clover className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Ireland
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Europe's tech hub with Google, Meta, Apple. English-speaking EU
              country with 2-year post-study visa and fast track to work
              permits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-white/90"
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
              <Building2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">Tech Companies</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">35K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">2 Years</p>
              <p className="text-sm text-muted-foreground">Graduate Scheme</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="mx-auto mb-3 h-10 w-10 text-orange-500" />
              <p className="text-3xl font-bold text-primary">English</p>
              <p className="text-sm text-muted-foreground">
                Speaking EU Country
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Ireland Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Clover className="h-8 w-8 text-green-600" />
            Why Choose Ireland?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Tech Giants HQ',
                desc: 'European HQ of Google, Meta, Apple, Microsoft, LinkedIn',
              },
              {
                title: 'English Speaking',
                desc: 'Only English-speaking country in Eurozone',
              },
              {
                title: '2-Year Work Visa',
                desc: "Third Level Graduate Scheme for Master's graduates",
              },
              {
                title: 'EU Access',
                desc: 'Work and travel across EU after graduation',
              },
              {
                title: 'Friendly Culture',
                desc: 'Welcoming to international students and workers',
              },
              {
                title: 'Fast PR Path',
                desc: 'Critical Skills Permit leads to residency in 2 years',
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
            <Euro className="h-8 w-8 text-primary" />
            Cost of Studying in Ireland (EUR)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-500" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>EU/EEA</span>
                  <span className="font-semibold text-green-600">
                    {costs.tuition.euEea}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Non-EU</span>
                  <span className="font-semibold">{costs.tuition.nonEU}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicine</span>
                  <span className="font-semibold">
                    {costs.tuition.medicine}
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
                  <span>Dublin</span>
                  <span className="font-semibold">{costs.living.dublin}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cork</span>
                  <span className="font-semibold">{costs.living.cork}</span>
                </div>
                <div className="flex justify-between">
                  <span>Galway</span>
                  <span className="font-semibold">{costs.living.galway}</span>
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
                  <span>IRP Registration</span>
                  <span className="font-semibold">
                    {costs.other.registration}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities in Ireland
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
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-2 text-xs"
                  >
                    {uni.ranking}
                  </Badge>
                  <p className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {uni.location}
                  </p>
                  <p className="text-sm">
                    <strong>Programs:</strong> {uni.programs}
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
                      <Euro className="h-4 w-4 text-green-500" />
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
            <Euro className="h-8 w-8 text-primary" />
            Salary Expectations (EUR)
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
        <section className="rounded-2xl bg-gradient-to-r from-green-600/10 via-white/5 to-orange-500/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Ireland Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Irish 4.0 scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CV Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize for Irish tech companies
              </p>
            </Link>
            <Link
              href="/scholarships"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Scholarships</h3>
              <p className="text-sm text-muted-foreground">
                Find Irish government scholarships
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
