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
  Snowflake,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Norway | Guide for Students',
  description:
    'Complete guide to studying and working in Norway. Learn about student residence permits, university costs, scholarships, post-study work rights, and career opportunities in Scandinavia.',
  keywords:
    'study in Norway, work in Norway, Norwegian student visa, NTNU, University of Oslo, Norway scholarships, study abroad Norway, Norway work permit, Scandinavian education',
  openGraph: {
    title: 'Study & Work in Norway - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in Norway as an international student. Free education, high quality of life, and excellent career prospects.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/norway',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/norway',
  },
};

const visaTypes = [
  {
    name: 'Student Residence Permit',
    description:
      'Primary permit for students accepted to Norwegian higher education institutions',
    duration: 'Duration of study + 1 year job-seeking period',
    workRights: '20 hrs/week during semester, full-time during holidays',
    path: 'Study → Job Seeker → Skilled Worker Permit',
  },
  {
    name: 'Job Seeker Visa',
    description: 'Post-study permit to search for employment in Norway',
    duration: '1 year after graduation',
    workRights: 'Full-time work once employed',
    path: 'Transition to Skilled Worker Permit',
  },
  {
    name: 'Skilled Worker Permit',
    description: 'Work permit for qualified professionals with job offer',
    duration: 'Up to 3 years, renewable',
    workRights: 'Full-time work for sponsoring employer',
    path: 'Permanent residency after 3 years',
  },
  {
    name: 'EU/EEA Registration',
    description: 'For EU/EEA citizens - simple registration process',
    duration: 'Unlimited',
    workRights: 'Full work rights',
    path: 'Direct access to Norwegian job market',
  },
];

const costs = {
  tuition: {
    public: 'FREE (only semester fee ~NOK 600/€55)',
    private: 'NOK 50,000 - 200,000/year',
    mba: 'NOK 150,000 - 400,000/year',
  },
  living: {
    oslo: 'NOK 140,000 - 180,000/year',
    bergen: 'NOK 120,000 - 150,000/year',
    smallCity: 'NOK 100,000 - 130,000/year',
  },
  other: {
    insurance: 'Free (covered by Norwegian system)',
    books: 'NOK 5,000 - 10,000/year',
    transport: 'NOK 6,000 - 12,000/year',
  },
};

const topUniversities = [
  {
    name: 'University of Oslo (UiO)',
    location: 'Oslo',
    ranking: '#1 in Norway',
    programs: 'Medicine, Law, Social Sciences',
  },
  {
    name: 'NTNU',
    location: 'Trondheim',
    ranking: '#2 in Norway',
    programs: 'Engineering, Technology, Natural Sciences',
  },
  {
    name: 'University of Bergen (UiB)',
    location: 'Bergen',
    ranking: '#3 in Norway',
    programs: 'Marine Science, Climate Research',
  },
  {
    name: 'UiT The Arctic University',
    location: 'Tromsø',
    ranking: 'Top 5 Norway',
    programs: 'Arctic Studies, Fisheries, Space Research',
  },
  {
    name: 'Norwegian School of Economics (NHH)',
    location: 'Bergen',
    ranking: 'Top Business School',
    programs: 'Business, Economics, Finance',
  },
  {
    name: 'BI Norwegian Business School',
    location: 'Oslo',
    ranking: 'Triple Crown Accredited',
    programs: 'MBA, Finance, Marketing',
  },
];

const scholarships = [
  {
    name: 'Norwegian Government Quota Scheme',
    amount: 'Full tuition + living stipend',
    eligibility: 'Students from developing countries',
    deadline: 'December (for fall intake)',
  },
  {
    name: 'Erasmus+ Programme',
    amount: '€800-1,100/month',
    eligibility: 'EU/EEA students on exchange',
    deadline: 'Varies by home university',
  },
  {
    name: 'NTNU Scholarship',
    amount: 'Full tuition waiver',
    eligibility: 'Outstanding international students',
    deadline: 'December',
  },
  {
    name: 'Lånekassen (Student Loan)',
    amount: 'NOK 129,000/year (40% grant)',
    eligibility: 'EU/EEA citizens',
    deadline: 'Ongoing',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'NOK 550,000 - 700,000',
    mid: 'NOK 800,000 - 1,200,000',
  },
  {
    role: 'Data Scientist',
    entry: 'NOK 500,000 - 650,000',
    mid: 'NOK 750,000 - 1,000,000',
  },
  {
    role: 'Petroleum Engineer',
    entry: 'NOK 650,000 - 850,000',
    mid: 'NOK 1,000,000 - 1,500,000',
  },
  {
    role: 'Healthcare Professional',
    entry: 'NOK 450,000 - 600,000',
    mid: 'NOK 650,000 - 900,000',
  },
  {
    role: 'Finance Professional',
    entry: 'NOK 500,000 - 700,000',
    mid: 'NOK 850,000 - 1,300,000',
  },
  {
    role: 'Marine Biologist',
    entry: 'NOK 450,000 - 550,000',
    mid: 'NOK 600,000 - 800,000',
  },
];

const faqs = [
  {
    question: 'Is higher education really free in Norway?',
    answer:
      'Yes! Public universities in Norway do not charge tuition fees for international students, including non-EU citizens. You only pay a small semester fee (around NOK 600/€55) for student welfare services. However, you must prove you have sufficient funds for living expenses (approximately NOK 137,000/year) when applying for a student visa.',
  },
  {
    question: 'Can I work while studying in Norway?',
    answer:
      'Yes, international students with a valid student residence permit can work up to 20 hours per week during the semester and full-time during holidays (Christmas, Easter, and summer breaks). Many students work part-time in retail, hospitality, or as research assistants.',
  },
  {
    question: 'What language skills do I need to study in Norway?',
    answer:
      "Many master's programs are taught entirely in English, so Norwegian language skills are not required for admission. However, bachelor's programs are typically taught in Norwegian. Learning Norwegian (or its spoken form, Norsk) is beneficial for daily life and employment after graduation.",
  },
  {
    question: 'Can I stay in Norway after graduation?',
    answer:
      'Yes! Graduates receive a 1-year job seeker residence permit to look for work in Norway. If you find a relevant job, you can apply for a skilled worker permit. After 3 years of legal residence, you can apply for permanent residency.',
  },
  {
    question: 'What is the cost of living in Norway?',
    answer:
      'Norway has a high cost of living. Students should budget NOK 12,000-15,000/month (~€1,100-1,400) for accommodation, food, transport, and other expenses. Oslo is the most expensive city, while Trondheim and Bergen are slightly more affordable.',
  },
];

// FAQ Schema for AEO/SGE optimization
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

export default function NorwayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-blue-600 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800/90 via-blue-900/80 to-red-800/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇳🇴</span>
              <span className="font-semibold">Kingdom of Norway</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Norway
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Experience world-class education with{' '}
              <strong>FREE tuition</strong> at public universities, exceptional
              quality of life, and outstanding career opportunities in one of
              the world's happiest countries.
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
              <p className="text-3xl font-bold text-primary">FREE</p>
              <p className="text-sm text-muted-foreground">
                Public University Tuition
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">40+</p>
              <p className="text-sm text-muted-foreground">
                Universities & Colleges
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">1 Year</p>
              <p className="text-sm text-muted-foreground">
                Post-Study Work Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">NOK 650K+</p>
              <p className="text-sm text-muted-foreground">
                Avg Graduate Salary
              </p>
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
            Cost of Studying in Norway
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
                  <span className="font-semibold text-green-600">
                    {costs.tuition.public}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Private University</span>
                  <span className="font-semibold">{costs.tuition.private}</span>
                </div>
                <div className="flex justify-between">
                  <span>MBA Programs</span>
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
                  <span>Oslo</span>
                  <span className="font-semibold">{costs.living.oslo}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bergen</span>
                  <span className="font-semibold">{costs.living.bergen}</span>
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
                  <span className="font-semibold text-green-600">
                    {costs.other.insurance}
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
          <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="h-5 w-5" />
              <strong>Key Benefit:</strong> Free tuition at public universities
              means you only need to cover living expenses (~NOK 137,000/year
              required for visa)
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
            Salary Expectations (NOK)
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
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <TrendingUp className="h-5 w-5" />
              <strong>Note:</strong> Norway has one of the highest salary levels
              in the world with a strong social safety net
            </p>
          </div>
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
        <section className="rounded-2xl bg-gradient-to-r from-red-600/10 via-blue-500/10 to-red-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Norway Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/cgpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CGPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Norwegian grading scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for Norwegian applications
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate take-home pay in Norway
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
              href="/countries/sweden"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇸🇪</span>
              <p className="mt-2 font-semibold">Sweden</p>
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
