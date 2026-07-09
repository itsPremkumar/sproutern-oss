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
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in New Zealand | Guide for Students',
  description:
    'Complete guide to studying and working in New Zealand. Learn about student visas, university costs, post-study work rights, and career opportunities in one of the safest countries.',
  keywords:
    'study in New Zealand, work in New Zealand, NZ student visa, University of Auckland, post-study work visa NZ, New Zealand scholarships, study abroad New Zealand',
  openGraph: {
    title:
      'Study & Work in New Zealand - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in New Zealand. World-class education, stunning nature, and excellent post-study work opportunities.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/new-zealand',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/new-zealand',
  },
};

const visaTypes = [
  {
    name: 'Student Visa',
    description:
      'Primary visa for full-time students at NZ educational institutions',
    duration: 'Duration of study + travel allowance',
    workRights: '20 hrs/week during term, full-time during holidays',
    path: 'Study → Post-Study Work Visa → Resident Visa',
  },
  {
    name: 'Post-Study Work Visa',
    description: 'Open work visa for graduates to gain work experience',
    duration: '1-3 years depending on qualification level',
    workRights: 'Full-time work for any employer',
    path: 'Pathway to Skilled Migrant Category',
  },
  {
    name: 'Skilled Migrant Category',
    description: 'Points-based residence visa for skilled workers',
    duration: 'Permanent residence',
    workRights: 'Full work rights',
    path: 'Citizenship after 5 years',
  },
  {
    name: 'Working Holiday Visa',
    description: 'For young people (18-30) from eligible countries',
    duration: '12-23 months',
    workRights: 'Full-time work allowed',
    path: 'Study up to 6 months + work',
  },
];

const costs = {
  tuition: {
    undergraduate: 'NZD 22,000 - 35,000/year',
    postgraduate: 'NZD 26,000 - 45,000/year',
    medicine: 'NZD 75,000 - 85,000/year',
  },
  living: {
    auckland: 'NZD 20,000 - 27,000/year',
    wellington: 'NZD 18,000 - 25,000/year',
    smaller: 'NZD 15,000 - 20,000/year',
  },
  other: {
    insurance: 'NZD 500 - 700/year (mandatory)',
    books: 'NZD 500 - 1,000/year',
    transport: 'NZD 1,000 - 2,000/year',
  },
};

const topUniversities = [
  {
    name: 'University of Auckland',
    location: 'Auckland',
    ranking: '#1 in NZ, Top 100 World',
    programs: 'Engineering, Medicine, Business',
  },
  {
    name: 'University of Otago',
    location: 'Dunedin',
    ranking: '#2 in NZ',
    programs: 'Medicine, Health Sciences, Science',
  },
  {
    name: 'Victoria University',
    location: 'Wellington',
    ranking: '#3 in NZ',
    programs: 'Law, Public Policy, Design',
  },
  {
    name: 'University of Canterbury',
    location: 'Christchurch',
    ranking: 'Top 300 World',
    programs: 'Engineering, Forestry, Science',
  },
  {
    name: 'Massey University',
    location: 'Palmerston North',
    ranking: 'Top 300 World',
    programs: 'Agriculture, Veterinary, Aviation',
  },
  {
    name: 'Auckland University of Technology',
    location: 'Auckland',
    ranking: 'Young University Top 50',
    programs: 'Business, Creative Industries, Health',
  },
];

const scholarships = [
  {
    name: 'New Zealand Excellence Awards',
    amount: 'NZD 10,000 - 30,000',
    eligibility: 'High-achieving international students',
    deadline: 'Varies by university',
  },
  {
    name: 'University of Auckland International',
    amount: 'NZD 10,000 - 50,000',
    eligibility: 'Outstanding academic achievement',
    deadline: 'December',
  },
  {
    name: 'NZ International Doctoral',
    amount: 'Domestic fee rates',
    eligibility: 'All PhD students',
    deadline: 'Ongoing',
  },
  {
    name: 'Commonwealth Scholarships',
    amount: 'Full funding',
    eligibility: 'Commonwealth country citizens',
    deadline: 'Varies by country',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'NZD 65,000 - 85,000',
    mid: 'NZD 100,000 - 150,000',
  },
  {
    role: 'Data Scientist',
    entry: 'NZD 60,000 - 80,000',
    mid: 'NZD 95,000 - 130,000',
  },
  {
    role: 'Civil Engineer',
    entry: 'NZD 55,000 - 70,000',
    mid: 'NZD 85,000 - 120,000',
  },
  {
    role: 'Healthcare Professional',
    entry: 'NZD 55,000 - 75,000',
    mid: 'NZD 80,000 - 120,000',
  },
  {
    role: 'Accountant',
    entry: 'NZD 50,000 - 65,000',
    mid: 'NZD 75,000 - 110,000',
  },
  {
    role: 'Marketing Manager',
    entry: 'NZD 55,000 - 70,000',
    mid: 'NZD 85,000 - 120,000',
  },
];

const faqs = [
  {
    question: 'How long can I stay in New Zealand after graduation?',
    answer:
      "Graduates receive a Post-Study Work Visa of 1-3 years depending on qualification level and study location. Level 7 bachelor's degrees get 3 years, while Level 8+ postgraduate qualifications also get 3 years. This is one of the most generous post-study work rights globally.",
  },
  {
    question: 'Can I work while studying in New Zealand?',
    answer:
      'Yes! International students can work up to 20 hours per week during term time and full-time during scheduled holidays (Christmas, Easter, summer). Students in qualifying postgraduate programs can work full-time throughout their studies.',
  },
  {
    question: 'Is New Zealand expensive for international students?',
    answer:
      'New Zealand is moderately expensive. Budget NZD 1,250-1,700/month for living costs. Tuition ranges from NZD 22,000-45,000/year for most programs. Auckland is the most expensive city, while smaller cities offer significant savings.',
  },
  {
    question: 'Can I bring my family while studying?',
    answer:
      "Yes! Students in certain programs (postgraduate study, Bachelor's in specific fields) can bring their partner on a work visa and children on student visas. Partner work visas provide full work rights.",
  },
  {
    question: 'How can I become a permanent resident in New Zealand?',
    answer:
      'After completing your studies and gaining work experience on a Post-Study Work Visa, you can apply for the Skilled Migrant Category (points-based). NZ qualifications, work experience, and a job offer all contribute points. Processing times are typically 6-12 months.',
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

export default function NewZealandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate-900/80 to-black/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇳🇿</span>
              <span className="font-semibold">New Zealand / Aotearoa</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in New Zealand
            </h1>
            <p className="mb-8 text-xl text-white/90">
              World-class education in one of the safest, most beautiful
              countries on Earth. Enjoy{' '}
              <strong>3-year post-study work rights</strong> and a clear pathway
              to permanent residence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
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
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-black" />
              <p className="text-3xl font-bold text-primary">8</p>
              <p className="text-sm text-muted-foreground">
                World-Ranked Universities
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">3 Years</p>
              <p className="text-sm text-muted-foreground">
                Post-Study Work Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">#1</p>
              <p className="text-sm text-muted-foreground">
                Peace Index Ranking
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">NZD 85K+</p>
              <p className="text-sm text-muted-foreground">
                Avg Graduate Salary
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
            Cost of Studying in New Zealand
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
                  <span>Auckland</span>
                  <span className="font-semibold">{costs.living.auckland}</span>
                </div>
                <div className="flex justify-between">
                  <span>Wellington</span>
                  <span className="font-semibold">
                    {costs.living.wellington}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Smaller Cities</span>
                  <span className="font-semibold">{costs.living.smaller}</span>
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
          <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="h-5 w-5" />
              <strong>PhD Benefit:</strong> International PhD students pay
              domestic tuition rates (significant savings!)
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
            Salary Expectations (NZD/year)
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
        <section className="rounded-2xl bg-gradient-to-r from-black/10 via-white/10 to-red-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your New Zealand Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/cgpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CGPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to NZ grading scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for NZ applications
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate take-home pay in New Zealand
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
              href="/countries/australia"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇦🇺</span>
              <p className="mt-2 font-semibold">Australia</p>
            </Link>
            <Link
              href="/countries/canada"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇨🇦</span>
              <p className="mt-2 font-semibold">Canada</p>
            </Link>
            <Link
              href="/countries/uk"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇬🇧</span>
              <p className="mt-2 font-semibold">United Kingdom</p>
            </Link>
            <Link
              href="/countries/singapore"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇸🇬</span>
              <p className="mt-2 font-semibold">Singapore</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
