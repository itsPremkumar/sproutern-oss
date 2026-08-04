import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  DollarSign,
  FileText,
  Building2,
  ArrowRight,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Home,
  Heart,
  Award,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Sweden | Guide for Students',
  description:
    'Complete guide to studying and working in Sweden. Learn about residence permits, university costs, scholarships, post-study work rights, and career opportunities in Scandinavia.',
  keywords:
    'study in Sweden, work in Sweden, Swedish student visa, KTH, Lund University, Sweden scholarships, study abroad Sweden, Swedish work permit, Scandinavian education',
  openGraph: {
    title: 'Study & Work in Sweden - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in Sweden as an international student. High-quality education, innovative research, and excellent work-life balance.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/sweden',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/sweden',
  },
};

const visaTypes = [
  {
    name: 'Student Residence Permit',
    description:
      'Primary permit for students accepted to Swedish higher education institutions',
    duration: 'Duration of study program',
    workRights: 'Unlimited work hours alongside studies',
    path: 'Study → Job Seeker Permit → Work Permit',
  },
  {
    name: 'Job Seeker Permit',
    description: 'Post-study permit to search for employment in Sweden',
    duration: '12 months (graduates) or 9 months (researchers)',
    workRights: 'Full-time work once employed',
    path: 'Transition to Work Permit',
  },
  {
    name: 'Work Permit',
    description: 'Permit for skilled professionals with job offer',
    duration: 'Up to 2 years, renewable',
    workRights: 'Full-time work for sponsoring employer',
    path: 'Permanent residency after 4 years',
  },
  {
    name: 'EU/EEA Citizens',
    description: 'Free movement within EU - no permit required',
    duration: 'Unlimited',
    workRights: 'Full work rights',
    path: 'Immediate access to Swedish job market',
  },
];

const costs = {
  tuition: {
    euEea: 'FREE for EU/EEA citizens',
    nonEu: 'SEK 80,000 - 295,000/year',
    medicine: 'SEK 330,000+/year',
  },
  living: {
    stockholm: 'SEK 120,000 - 160,000/year',
    gothenburg: 'SEK 100,000 - 130,000/year',
    smallCity: 'SEK 85,000 - 110,000/year',
  },
  other: {
    insurance: 'SEK 0 (EU) / SEK 4,000-8,000 (non-EU)',
    books: 'SEK 5,000 - 8,000/year',
    transport: 'SEK 6,000 - 10,000/year',
  },
};

const topUniversities = [
  {
    name: 'Karolinska Institute',
    location: 'Stockholm',
    ranking: '#1 in Sweden, Top 10 Medicine',
    programs: 'Medicine, Biomedical Sciences',
  },
  {
    name: 'KTH Royal Institute',
    location: 'Stockholm',
    ranking: '#2 in Sweden',
    programs: 'Engineering, Technology, Architecture',
  },
  {
    name: 'Lund University',
    location: 'Lund',
    ranking: '#3 in Sweden',
    programs: 'Law, Economics, Sciences',
  },
  {
    name: 'Uppsala University',
    location: 'Uppsala',
    ranking: 'Top 100 Globally',
    programs: 'Research, Humanities, Sciences',
  },
  {
    name: 'Stockholm University',
    location: 'Stockholm',
    ranking: 'Top 100 Globally',
    programs: 'Social Sciences, Natural Sciences',
  },
  {
    name: 'Chalmers University',
    location: 'Gothenburg',
    ranking: 'Top Tech University',
    programs: 'Engineering, Sustainability, AI',
  },
];

const scholarships = [
  {
    name: 'Swedish Institute Scholarships',
    amount: 'Full tuition + SEK 10,000/month',
    eligibility: 'Students from eligible countries',
    deadline: 'December - February',
  },
  {
    name: 'University-specific Scholarships',
    amount: '25% - 100% tuition waiver',
    eligibility: 'Outstanding international students',
    deadline: 'January - February',
  },
  {
    name: 'Erasmus Mundus Joint Masters',
    amount: 'Full funding + living allowance',
    eligibility: 'Select joint master programs',
    deadline: 'Varies by program',
  },
  {
    name: 'SISS Scholarship',
    amount: 'SEK 90,000/year',
    eligibility: 'Non-EU students at Swedish universities',
    deadline: 'February',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'SEK 40,000 - 50,000/month',
    mid: 'SEK 55,000 - 80,000/month',
  },
  {
    role: 'Data Scientist',
    entry: 'SEK 38,000 - 48,000/month',
    mid: 'SEK 50,000 - 70,000/month',
  },
  {
    role: 'Product Manager',
    entry: 'SEK 42,000 - 52,000/month',
    mid: 'SEK 60,000 - 85,000/month',
  },
  {
    role: 'UX Designer',
    entry: 'SEK 35,000 - 45,000/month',
    mid: 'SEK 48,000 - 65,000/month',
  },
  {
    role: 'Finance Professional',
    entry: 'SEK 38,000 - 48,000/month',
    mid: 'SEK 55,000 - 75,000/month',
  },
  {
    role: 'Research Scientist',
    entry: 'SEK 35,000 - 42,000/month',
    mid: 'SEK 45,000 - 60,000/month',
  },
];

const faqs = [
  {
    question: 'Is education free for international students in Sweden?',
    answer:
      'Education is free for EU/EEA citizens at public universities. Non-EU/EEA students pay tuition fees ranging from SEK 80,000 to 295,000 per year depending on the program. However, many scholarships cover tuition and living expenses for qualified international students.',
  },
  {
    question: 'Can I work while studying in Sweden?',
    answer:
      'Yes! Sweden is one of the few countries with no restrictions on working hours for international students. You can work as much as you want alongside your studies, making it easier to support yourself financially.',
  },
  {
    question: 'How do I get a job in Sweden after graduation?',
    answer:
      'After completing your degree, you can apply for a 12-month job seeker permit. If you find work, your employer must offer a salary of at least SEK 27,360/month for you to qualify for a work permit. Many Swedish companies actively recruit international graduates.',
  },
  {
    question: 'Do I need to learn Swedish to study in Sweden?',
    answer:
      "Most master's programs are taught in English, and you can study without knowing Swedish. However, learning Swedish (through free SFI courses) significantly improves your job prospects and integration into Swedish society.",
  },
  {
    question: 'What is the cost of living in Sweden?',
    answer:
      'Budget SEK 9,000-12,000/month for living costs. Student accommodation costs SEK 3,500-6,500/month in cities. Stockholm is the most expensive, while smaller cities like Lund and Uppsala are more affordable.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function SwedenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-yellow-400 to-blue-500 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-600/80 to-blue-700/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇸🇪</span>
              <span className="font-semibold">Kingdom of Sweden</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Sweden
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Home to global innovators like Spotify, Ericsson, and IKEA. Sweden
              offers
              <strong> world-class education</strong>, exceptional work-life
              balance, and
              <strong> unlimited work hours</strong> for students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-blue-900 hover:bg-yellow-300"
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
              <p className="text-3xl font-bold text-primary">1,000+</p>
              <p className="text-sm text-muted-foreground">English Programs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Briefcase className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">Unlimited</p>
              <p className="text-sm text-muted-foreground">
                Work Hours for Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">12 Months</p>
              <p className="text-sm text-muted-foreground">
                Post-Study Job Seeker Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-yellow-600" />
              <p className="text-3xl font-bold text-primary">SEK 50K+</p>
              <p className="text-sm text-muted-foreground">
                Avg Tech Salary/Month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visa Types */}
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

        {/* Costs */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" />
            Cost of Studying in Sweden
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
                  <span>EU/EEA Citizens</span>
                  <span className="font-semibold text-green-600">
                    {costs.tuition.euEea}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Non-EU Students</span>
                  <span className="font-semibold">{costs.tuition.nonEu}</span>
                </div>
                <div className="flex justify-between">
                  <span>Medicine/Dentistry</span>
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
                  <span>Stockholm</span>
                  <span className="font-semibold">
                    {costs.living.stockholm}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Gothenburg</span>
                  <span className="font-semibold">
                    {costs.living.gothenburg}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Smaller Cities</span>
                  <span className="font-semibold">
                    {costs.living.smallCity}
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
                  <span className="font-semibold">{costs.other.insurance}</span>
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
              <CheckCircle className="h-5 w-5" />
              <strong>Key Benefit:</strong> Unlimited work hours means you can
              earn while you learn, significantly reducing financial burden
            </p>
          </div>
        </section>

        {/* Universities */}
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

        {/* Salaries */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" />
            Salary Expectations (SEK/month)
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
        <section className="rounded-2xl bg-gradient-to-r from-blue-600/10 via-yellow-400/10 to-blue-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Sweden Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/cgpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CGPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Swedish grading scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for Swedish applications
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate take-home pay in Sweden
              </p>
            </Link>
          </div>
        </section>

        {/* Related Countries */}
        <section className="mt-16">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Explore Other Countries
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            <Link
              href="/countries/norway"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇳🇴</span>
              <p className="mt-2 font-semibold">Norway</p>
            </Link>
            <Link
              href="/countries/denmark"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇩🇰</span>
              <p className="mt-2 font-semibold">Denmark</p>
            </Link>
            <Link
              href="/countries/germany"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇩🇪</span>
              <p className="mt-2 font-semibold">Germany</p>
            </Link>
            <Link
              href="/countries/netherlands"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇳🇱</span>
              <p className="mt-2 font-semibold">Netherlands</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
