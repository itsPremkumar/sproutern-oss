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
  title: 'Study & Work in Japan | MEXT Scholarship & Career Guide',
  description:
    'Complete guide to studying and working in Japan. Learn about MEXT scholarship, top universities like Tokyo and Kyoto, language requirements, visa types, and career opportunities.',
  keywords:
    'study in Japan, MEXT scholarship, work in Japan, Japanese universities, University of Tokyo, Kyoto University, Japan student visa, study abroad Japan',
  openGraph: {
    title: 'Study & Work in Japan - Complete Guide',
    description:
      'Study in Japan with MEXT scholarship. Complete guide to universities, visas, and careers.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/japan',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/japan',
  },
};

const visaTypes = [
  {
    name: 'Student Visa (Ryugaku)',
    description: 'For students enrolled in Japanese institutions',
    duration: 'Duration of study (1-4 years)',
    workRights: '28 hrs/week with permit',
    path: 'Designated Activities → Work Visa',
  },
  {
    name: 'Designated Activities Visa',
    description: 'Post-graduation job search',
    duration: '6 months - 1 year',
    workRights: '28 hrs/week',
    path: 'Find job → Work visa',
  },
  {
    name: 'Engineer/Specialist Visa',
    description: 'For technical professionals',
    duration: '1-5 years, renewable',
    workRights: 'Full work rights',
    path: 'PR after 10 years (5 with HSP)',
  },
  {
    name: 'Highly Skilled Professional',
    description: 'Points-based fast-track visa',
    duration: '5 years',
    workRights: 'Full work rights + family',
    path: 'PR in 1-3 years (fastest path)',
  },
];

const costs = {
  tuition: {
    nationalUni: '¥535,800/year (~$3,600)',
    privateUni: '¥800,000 - 1,500,000/year',
    mext: 'Full tuition waiver + stipend',
  },
  living: {
    tokyo: '¥100,000 - 150,000/month',
    osaka: '¥80,000 - 120,000/month',
    otherCities: '¥60,000 - 90,000/month',
  },
  other: {
    insurance: '¥20,000/year (NHI discounted)',
    visaFee: '¥4,000 - 6,000',
    transport: '¥5,000 - 15,000/month',
  },
};

const topUniversities = [
  {
    name: 'University of Tokyo',
    location: 'Tokyo',
    ranking: '#1 Japan, #28 World',
    programs: 'All disciplines',
    abbr: 'Todai',
  },
  {
    name: 'Kyoto University',
    location: 'Kyoto',
    ranking: '#2 Japan, #46 World',
    programs: 'Sciences, Medicine, Law',
    abbr: 'Kyodai',
  },
  {
    name: 'Osaka University',
    location: 'Osaka',
    ranking: '#3 Japan',
    programs: 'Engineering, Medicine',
    abbr: 'Handai',
  },
  {
    name: 'Tokyo Institute of Technology',
    location: 'Tokyo',
    ranking: '#4 Japan',
    programs: 'Engineering, Sciences',
    abbr: 'Tokyo Tech',
  },
  {
    name: 'Tohoku University',
    location: 'Sendai',
    ranking: '#5 Japan',
    programs: 'Materials, Engineering',
    abbr: 'Tohoku',
  },
  {
    name: 'Waseda University',
    location: 'Tokyo',
    ranking: 'Top Private',
    programs: 'Business, Politics, Engineering',
    abbr: 'Waseda',
  },
];

const scholarships = [
  {
    name: 'MEXT Scholarship',
    amount: '¥143,000 - 145,000/month + full tuition',
    eligibility: 'All international students',
    deadline: 'April (Embassy) / varies (University)',
  },
  {
    name: 'JASSO Scholarship',
    amount: '¥48,000/month',
    eligibility: 'Self-funded international students',
    deadline: 'Varies by university',
  },
  {
    name: 'University-Specific Scholarships',
    amount: 'Varies (tuition reduction to full)',
    eligibility: 'Based on merit',
    deadline: 'With admission',
  },
  {
    name: 'Private Foundation Scholarships',
    amount: '¥50,000 - 180,000/month',
    eligibility: 'Various criteria',
    deadline: 'Varies',
  },
];

const salaries = [
  { role: 'Software Engineer', entry: '¥4M - 6M', mid: '¥8M - 15M' },
  { role: 'Data Scientist', entry: '¥5M - 7M', mid: '¥10M - 18M' },
  { role: 'Mechanical Engineer', entry: '¥4M - 5M', mid: '¥7M - 12M' },
  { role: 'Consultant', entry: '¥5M - 8M', mid: '¥12M - 25M' },
  { role: 'English Teacher (ALT)', entry: '¥3M - 4M', mid: '¥4M - 6M' },
  { role: 'Finance (Banking)', entry: '¥5M - 7M', mid: '¥10M - 20M' },
];

const faqs = [
  {
    question: 'What is the MEXT Scholarship?',
    answer:
      "MEXT (Ministry of Education) scholarship is Japan's prestigious fully-funded scholarship covering tuition, living allowance (¥143,000-145,000/month), and travel. Apply through Japanese Embassy (April) or University recommendation track.",
  },
  {
    question: 'Do I need to know Japanese to study in Japan?',
    answer:
      'Not necessarily. Many programs (especially graduate) are taught in English. However, Japanese (N2-N1 level) is highly recommended for daily life and employment. Many students study Japanese before/during their studies.',
  },
  {
    question: 'How affordable is studying in Japan?',
    answer:
      'National university tuition is very affordable (¥535,800/year ≈ $3,600). With MEXT or tuition waivers, it can be near-free. Living costs are moderate outside Tokyo. Many students work part-time (28 hrs/week allowed).',
  },
  {
    question: 'Can I work in Japan after graduation?',
    answer:
      'Yes! Switch to Designated Activities visa for job hunting (6-12 months). Japan actively recruits foreign graduates. Engineers and tech workers are in high demand. Learn Japanese to N2 level for best opportunities.',
  },
  {
    question: 'What is the Highly Skilled Professional visa?',
    answer:
      'Points-based visa for skilled workers. Score 70+ points (education, salary, age, Japanese ability) for PR in 3 years, 80+ points for PR in 1 year. Fastest path to permanent residence in Japan.',
  },
];

export default function JapanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/95 via-red-600/95 to-red-700/95" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇯🇵</span>
              <span className="font-semibold">Japan</span>
              <Mountain className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Japan
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Home to world-class universities and the MEXT scholarship. Japan
              offers affordable education, cutting-edge technology, and unique
              cultural experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-white/90"
              >
                <Link
                  href="#scholarships"
                  className="flex items-center gap-2"
                >
                  <Award className="h-5 w-5" />
                  MEXT Scholarship
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
              >
                <Link
                  href="#visa-guide"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Visa Guide
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
              <p className="text-3xl font-bold text-primary">#28</p>
              <p className="text-sm text-muted-foreground">
                U of Tokyo World Rank
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="mx-auto mb-3 h-10 w-10 text-yellow-500" />
              <p className="text-3xl font-bold text-primary">MEXT</p>
              <p className="text-sm text-muted-foreground">
                Full Scholarship Available
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">$3,600</p>
              <p className="text-sm text-muted-foreground">
                National Uni Tuition/year
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">1 Year</p>
              <p className="text-sm text-muted-foreground">
                Fast PR (HSP Visa)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Japan Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Mountain className="h-8 w-8 text-red-600" />
            Why Choose Japan?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'MEXT Scholarship',
                desc: 'Fully funded - tuition + ¥145,000/month stipend',
              },
              {
                title: 'Affordable Tuition',
                desc: 'National universities only ~$3,600/year',
              },
              {
                title: 'Tech Innovation',
                desc: 'Leading in robotics, electronics, automotive',
              },
              {
                title: 'Safe & Clean',
                desc: "One of world's safest and cleanest countries",
              },
              {
                title: 'Work Opportunities',
                desc: '28 hrs/week allowed, many part-time jobs',
              },
              {
                title: 'Unique Culture',
                desc: 'Rich history, anime, cuisine, and traditions',
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

        {/* Scholarships - Featured first for Japan */}
        <section
          id="scholarships"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Award className="h-8 w-8 text-primary" />
            Scholarships (MEXT & More)
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {scholarships.map((scholarship) => (
              <Card
                key={scholarship.name}
                className={`transition-all hover:shadow-lg ${scholarship.name === 'MEXT Scholarship' ? 'border-2 border-yellow-500' : ''}`}
              >
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-center gap-2">
                    <h3 className="text-lg font-bold">{scholarship.name}</h3>
                    {scholarship.name === 'MEXT Scholarship' && (
                      <Badge className="bg-yellow-500">Top Pick</Badge>
                    )}
                  </div>
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
            Cost of Studying in Japan (JPY)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-red-500" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>National University</span>
                  <span className="font-semibold text-green-600">
                    {costs.tuition.nationalUni}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Private University</span>
                  <span className="font-semibold">
                    {costs.tuition.privateUni}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>MEXT Scholars</span>
                  <span className="font-semibold text-yellow-600">
                    {costs.tuition.mext}
                  </span>
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
                  <span>Tokyo</span>
                  <span className="font-semibold">{costs.living.tokyo}</span>
                </div>
                <div className="flex justify-between">
                  <span>Osaka</span>
                  <span className="font-semibold">{costs.living.osaka}</span>
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
                  <span className="font-semibold">{costs.other.insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span>Visa Fee</span>
                  <span className="font-semibold">{costs.other.visaFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transport/month</span>
                  <span className="font-semibold">{costs.other.transport}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities in Japan
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topUniversities.map((uni) => (
              <Card
                key={uni.name}
                className="transition-all hover:border-primary"
              >
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-base font-bold">{uni.abbr}</h3>
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {uni.ranking}
                    </Badge>
                  </div>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {uni.name}
                  </p>
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

        {/* Salary Expectations */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" />
            Salary Expectations (JPY/Year)
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
        <section className="rounded-2xl bg-gradient-to-r from-red-600/10 via-white/5 to-red-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Japan Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Japanese scale
              </p>
            </Link>
            <Link
              href="/tools/sop-outliner"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Research Plan</h3>
              <p className="text-sm text-muted-foreground">
                Essential for MEXT application
              </p>
            </Link>
            <Link
              href="/scholarships"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">MEXT Details</h3>
              <p className="text-sm text-muted-foreground">
                Complete MEXT scholarship guide
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
