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
  Sun,
  Plane,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in UAE | Complete Guide for International Students',
  description:
    'Complete guide to studying and working in the United Arab Emirates. Learn about student visas, university costs, tax-free salaries, and career opportunities in Dubai, Abu Dhabi, and other Emirates.',
  keywords:
    'study in UAE, work in UAE, Dubai student visa, UAE universities, tax-free salary UAE, study abroad Dubai, Abu Dhabi universities, UAE work permit, free zones UAE',
  openGraph: {
    title: 'Study & Work in UAE - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in the UAE. World-class education, tax-free salaries, and dynamic career opportunities in the Middle East hub.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/uae',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/uae',
  },
};

const visaTypes = [
  {
    name: 'Student Visa',
    description: 'For students enrolled in UAE educational institutions',
    duration: '1 year, renewable',
    workRights: 'Part-time work allowed with NOC from university',
    path: 'Study → Employment Visa → Long-term Residence',
  },
  {
    name: 'Employment Visa',
    description: 'Employer-sponsored work visa for professionals',
    duration: '2-3 years, renewable',
    workRights: 'Full-time work for sponsor',
    path: 'Sponsored by employer',
  },
  {
    name: 'Golden Visa',
    description: 'Long-term residence for exceptional individuals',
    duration: '5-10 years',
    workRights: 'Full work rights, can sponsor family',
    path: 'For investors, entrepreneurs, top graduates',
  },
  {
    name: 'Freelance Visa',
    description: 'For self-employed professionals and creators',
    duration: '1-3 years',
    workRights: 'Self-employment in licensed activities',
    path: 'Available in Dubai, Abu Dhabi, Sharjah free zones',
  },
];

const costs = {
  tuition: {
    undergraduate: 'AED 40,000 - 100,000/year',
    postgraduate: 'AED 50,000 - 150,000/year',
    mba: 'AED 80,000 - 250,000/year',
  },
  living: {
    dubai: 'AED 50,000 - 80,000/year',
    abuDhabi: 'AED 45,000 - 70,000/year',
    sharjah: 'AED 35,000 - 55,000/year',
  },
  other: {
    insurance: 'AED 1,500 - 5,000/year',
    transport: 'AED 3,000 - 8,000/year',
    utilities: 'AED 500 - 1,500/month',
  },
};

const topUniversities = [
  {
    name: 'NYU Abu Dhabi',
    location: 'Abu Dhabi',
    ranking: 'Ivy League Branch',
    programs: 'Liberal Arts, Engineering, Sciences',
  },
  {
    name: 'Khalifa University',
    location: 'Abu Dhabi',
    ranking: '#1 UAE, Top 200 World',
    programs: 'Engineering, AI, Nuclear Energy',
  },
  {
    name: 'American University of Sharjah',
    location: 'Sharjah',
    ranking: 'Top Private',
    programs: 'Architecture, Engineering, Business',
  },
  {
    name: 'University of Dubai',
    location: 'Dubai',
    ranking: 'AACSB Accredited',
    programs: 'Business, IT, Law',
  },
  {
    name: 'Heriot-Watt University Dubai',
    location: 'Dubai',
    ranking: 'UK University Branch',
    programs: 'Engineering, Built Environment, Business',
  },
  {
    name: 'BITS Pilani Dubai',
    location: 'Dubai',
    ranking: 'Premier Indian University',
    programs: 'Engineering, IT, Biotechnology',
  },
];

const scholarships = [
  {
    name: 'Khalifa University Scholarship',
    amount: 'Full tuition + stipend',
    eligibility: 'High-achieving STEM students',
    deadline: 'February',
  },
  {
    name: 'NYU Abu Dhabi Financial Aid',
    amount: 'Need-based (up to full cost)',
    eligibility: 'All admitted students',
    deadline: 'January',
  },
  {
    name: 'Emirates Aviation University',
    amount: 'Up to 50% tuition',
    eligibility: 'Outstanding academic record',
    deadline: 'Varies by intake',
  },
  {
    name: 'Abu Dhabi Government Scholarships',
    amount: 'Full funding',
    eligibility: 'UAE nationals and select internationals',
    deadline: 'March',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'AED 12,000 - 20,000/month',
    mid: 'AED 25,000 - 45,000/month',
  },
  {
    role: 'Data Scientist',
    entry: 'AED 15,000 - 22,000/month',
    mid: 'AED 28,000 - 50,000/month',
  },
  {
    role: 'Finance Professional',
    entry: 'AED 12,000 - 18,000/month',
    mid: 'AED 25,000 - 55,000/month',
  },
  {
    role: 'Marketing Manager',
    entry: 'AED 10,000 - 15,000/month',
    mid: 'AED 20,000 - 40,000/month',
  },
  {
    role: 'Project Manager',
    entry: 'AED 15,000 - 22,000/month',
    mid: 'AED 30,000 - 55,000/month',
  },
  {
    role: 'Healthcare Professional',
    entry: 'AED 15,000 - 25,000/month',
    mid: 'AED 30,000 - 60,000/month',
  },
];

const faqs = [
  {
    question: 'Are salaries really tax-free in the UAE?',
    answer:
      'Yes! The UAE has no personal income tax. Your salary is 100% yours to keep. This makes UAE salaries effectively 20-40% higher than equivalent salaries in taxed countries. There is a 5% VAT on goods and services, but no income, capital gains, or inheritance taxes.',
  },
  {
    question: 'Can I work while studying in the UAE?',
    answer:
      'Yes, but with restrictions. Students can work part-time with a No Objection Certificate (NOC) from their university. Internships are highly encouraged and many programs include them. Some free zones offer student intern visas with more flexible work rights.',
  },
  {
    question: 'What is the Golden Visa and how can students qualify?',
    answer:
      "The UAE Golden Visa is a 5-10 year renewable residence permit. Outstanding students (top graduates, GPA 3.75+) can qualify. It allows you to live, work, and study in the UAE without a sponsor, and you can bring your family. It's competitive but achievable for high performers.",
  },
  {
    question: 'Is the UAE expensive for students?',
    answer:
      'The UAE can be expensive, but costs vary widely. Dubai is pricier than Sharjah or Ajman. Budget AED 4,000-7,000/month for accommodation and living. Many universities offer housing, and sharing apartments is common. Public transport (Dubai Metro) is affordable at AED 300-400/month.',
  },
  {
    question: 'What languages are used in the UAE?',
    answer:
      'Arabic is the official language, but English is widely used in business, education, and daily life. Most university programs are taught in English. You can live and work comfortably with only English, though learning basic Arabic is appreciated.',
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

export default function UAEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-slate-900/80 to-red-800/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇦🇪</span>
              <span className="font-semibold">United Arab Emirates</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in the UAE
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Gateway to the Middle East with <strong>tax-free salaries</strong>
              , world-class infrastructure, and global career opportunities.
              Home to Dubai, Abu Dhabi, and thriving innovation ecosystems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-white/90"
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
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">0%</p>
              <p className="text-sm text-muted-foreground">Income Tax</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">70+</p>
              <p className="text-sm text-muted-foreground">
                Universities & Colleges
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="mx-auto mb-3 h-10 w-10 text-yellow-600" />
              <p className="text-3xl font-bold text-primary">10 Years</p>
              <p className="text-sm text-muted-foreground">Golden Visa</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Sun className="mx-auto mb-3 h-10 w-10 text-orange-600" />
              <p className="text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">Nationalities</p>
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
            Cost of Studying in the UAE
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
                  <span>Dubai</span>
                  <span className="font-semibold">{costs.living.dubai}</span>
                </div>
                <div className="flex justify-between">
                  <span>Abu Dhabi</span>
                  <span className="font-semibold">{costs.living.abuDhabi}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sharjah</span>
                  <span className="font-semibold">{costs.living.sharjah}</span>
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
                  <span>Transportation</span>
                  <span className="font-semibold">{costs.other.transport}</span>
                </div>
                <div className="flex justify-between">
                  <span>Utilities</span>
                  <span className="font-semibold">{costs.other.utilities}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="h-5 w-5" />
              <strong>Tax Advantage:</strong> With 0% income tax, your take-home
              salary is significantly higher than equivalent positions in most
              countries
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
            Salary Expectations (AED/month, Tax-Free)
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
          <div className="mt-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <p className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
              <TrendingUp className="h-5 w-5" />
              <strong>Note:</strong> All salaries are TAX-FREE. Compare with
              after-tax salaries in other countries for true purchasing power
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

        {/* Related Tools */}
        <section className="rounded-2xl bg-gradient-to-r from-green-600/10 via-white/5 to-red-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your UAE Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/cgpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CGPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades for UAE applications
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for Gulf region jobs
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Compare tax-free UAE salaries
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
              href="/countries/singapore"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇸🇬</span>
              <p className="mt-2 font-semibold">Singapore</p>
            </Link>
            <Link
              href="/countries/uk"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇬🇧</span>
              <p className="mt-2 font-semibold">United Kingdom</p>
            </Link>
            <Link
              href="/countries/germany"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇩🇪</span>
              <p className="mt-2 font-semibold">Germany</p>
            </Link>
            <Link
              href="/countries/australia"
              className="block rounded-lg bg-muted p-4 text-center transition-all hover:bg-muted/80"
            >
              <span className="text-3xl">🇦🇺</span>
              <p className="mt-2 font-semibold">Australia</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
