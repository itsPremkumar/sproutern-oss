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
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: "Study & Work in Singapore 2025 | Asia's Education Hub",
  description:
    "Complete guide to studying and working in Singapore. Learn about NUS, NTU, student visa, post-study work rights, costs, and career opportunities in Asia's leading business hub.",
  keywords:
    'study in Singapore, work in Singapore, NUS, NTU, Singapore student visa, study abroad Singapore, Singapore universities, Singapore scholarships, Asia education hub',
  openGraph: {
    title: "Study & Work in Singapore - Asia's Education Hub",
    description:
      'Study at world-class Singapore universities. Complete guide to visas, costs, and careers.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/singapore',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/singapore',
  },
};

const visaTypes = [
  {
    name: 'Student Pass',
    description: 'Required for full-time studies in Singapore',
    duration: 'Duration of course',
    workRights: 'Up to 16 hrs/week during term (with approval)',
    path: 'Work Pass → PR → Citizenship',
  },
  {
    name: 'Long-Term Visit Pass Plus',
    description: 'For graduates seeking employment',
    duration: '1 year',
    workRights: 'Job search allowed',
    path: 'Find job → Employment Pass',
  },
  {
    name: 'Employment Pass (EP)',
    description: 'For professionals earning ≥SGD 5,000/month',
    duration: '2 years, renewable',
    workRights: 'Full work rights with employer',
    path: 'PR eligibility after 2+ years',
  },
  {
    name: 'Permanent Resident (PR)',
    description: 'Long-term residence in Singapore',
    duration: 'Permanent (renew IC every 5 years)',
    workRights: 'Unrestricted',
    path: 'Citizenship after 2+ years as PR',
  },
];

const costs = {
  tuition: {
    undergraduate: 'SGD 25,000 - 45,000/year',
    postgraduate: 'SGD 30,000 - 60,000/year',
    mba: 'SGD 80,000 - 150,000 total',
  },
  living: {
    onCampus: 'SGD 6,000 - 12,000/year',
    offCampus: 'SGD 12,000 - 24,000/year',
    food: 'SGD 4,000 - 8,000/year',
  },
  other: {
    insurance: 'SGD 100 - 300/year',
    transport: 'SGD 1,000 - 1,500/year',
    misc: 'SGD 2,000 - 4,000/year',
  },
};

const topUniversities = [
  {
    name: 'National University of Singapore',
    location: 'Singapore',
    ranking: '#1 Asia, #8 World',
    programs: 'All disciplines',
    abbr: 'NUS',
  },
  {
    name: 'Nanyang Technological University',
    location: 'Singapore',
    ranking: '#2 Asia, #26 World',
    programs: 'Engineering, Sciences, Business',
    abbr: 'NTU',
  },
  {
    name: 'Singapore Management University',
    location: 'Singapore',
    ranking: 'Top Business School',
    programs: 'Business, Law, IT, Economics',
    abbr: 'SMU',
  },
  {
    name: 'Singapore Uni of Technology & Design',
    location: 'Singapore',
    ranking: 'Top Design School',
    programs: 'Design, Engineering, Architecture',
    abbr: 'SUTD',
  },
  {
    name: 'Singapore Institute of Technology',
    location: 'Singapore',
    ranking: 'Applied Learning',
    programs: 'Applied Engineering, Health',
    abbr: 'SIT',
  },
  {
    name: 'INSEAD Singapore',
    location: 'Singapore',
    ranking: '#1 MBA globally',
    programs: 'MBA, Executive Education',
    abbr: 'INSEAD',
  },
];

const scholarships = [
  {
    name: 'Singapore Government Scholarships',
    amount: 'Full tuition + SGD 6,000/year allowance',
    eligibility: 'Outstanding international students',
    deadline: 'November-March',
  },
  {
    name: 'ASEAN Scholarships',
    amount: 'Full tuition + living allowance',
    eligibility: 'ASEAN country citizens',
    deadline: 'March',
  },
  {
    name: 'NUS/NTU Scholarships',
    amount: 'Full or partial tuition',
    eligibility: 'Based on academic excellence',
    deadline: 'Varies',
  },
  {
    name: 'Tuition Grant (MOE)',
    amount: 'Up to 50% tuition subsidy',
    eligibility: 'International students (3-year work bond)',
    deadline: 'With admission',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'SGD 60,000 - 90,000',
    mid: 'SGD 100,000 - 180,000',
  },
  {
    role: 'Data Scientist',
    entry: 'SGD 55,000 - 80,000',
    mid: 'SGD 90,000 - 150,000',
  },
  {
    role: 'Financial Analyst',
    entry: 'SGD 50,000 - 70,000',
    mid: 'SGD 80,000 - 130,000',
  },
  {
    role: 'Product Manager',
    entry: 'SGD 65,000 - 95,000',
    mid: 'SGD 120,000 - 200,000',
  },
  {
    role: 'Consultant',
    entry: 'SGD 60,000 - 85,000',
    mid: 'SGD 100,000 - 170,000',
  },
  {
    role: 'Marketing Manager',
    entry: 'SGD 45,000 - 65,000',
    mid: 'SGD 80,000 - 120,000',
  },
];

const faqs = [
  {
    question: 'Why study in Singapore?',
    answer:
      "Singapore has 2 universities in global top 15 (NUS #8, NTU #26). It's Asia's business hub, with headquarters of Google, Facebook, and major banks. Strong job market, high salaries, English-speaking, safe, clean, and multicultural.",
  },
  {
    question: 'What is the MOE Tuition Grant?',
    answer:
      'The Ministry of Education (MOE) Tuition Grant subsidizes up to 50% of tuition for international students. In exchange, you must work in Singapore for 3 years after graduation. This is a great deal if you plan to work there anyway!',
  },
  {
    question: 'Can I work while studying in Singapore?',
    answer:
      "Students can work up to 16 hours/week during term (with approval) and full-time during holidays. Industrial attachments and internships are encouraged and don't count toward the limit.",
  },
  {
    question: 'How competitive is admission to NUS/NTU?',
    answer:
      "Very competitive. NUS and NTU are among Asia's best universities. Strong academic record, standardized test scores (SAT/GRE), and extracurriculars are important. Apply to multiple programs.",
  },
  {
    question: 'Can I get permanent residence (PR) after studying?',
    answer:
      "Yes, but it's not automatic. Work in Singapore for 2+ years, contribute to CPF, and apply. Having Singapore education and consistent employment history helps. Success rate varies.",
  },
];

export default function SingaporePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/95 via-red-600/95 to-red-700/95" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇸🇬</span>
              <span className="font-semibold">Singapore</span>
              <Zap className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Singapore
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Asia's premier education and business hub. Home to NUS (#8 World)
              and NTU (#26 World), with excellent career opportunities in tech,
              finance, and consulting.
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
              <p className="text-3xl font-bold text-primary">#8</p>
              <p className="text-sm text-muted-foreground">NUS World Ranking</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground">
                Public Universities
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">50%</p>
              <p className="text-sm text-muted-foreground">MOE Tuition Grant</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">#1</p>
              <p className="text-sm text-muted-foreground">Asia Business Hub</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Singapore Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Zap className="h-8 w-8 text-red-600" />
            Why Choose Singapore?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'World-Class Universities',
                desc: "NUS #8, NTU #26 globally - Asia's best",
              },
              {
                title: 'Business Hub',
                desc: 'HQ of Google, Facebook, major banks & MNCs',
              },
              {
                title: 'English Speaking',
                desc: 'Official language, easy integration',
              },
              {
                title: 'High Salaries',
                desc: 'Among highest in Asia, no income tax issues',
              },
              { title: 'Safe & Clean', desc: "One of world's safest cities" },
              {
                title: 'Gateway to Asia',
                desc: 'Easy access to China, India, SEA markets',
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
            <DollarSign className="h-8 w-8 text-primary" />
            Cost of Studying in Singapore (SGD)
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
                  <span>MBA (total)</span>
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
                  <span>On-Campus</span>
                  <span className="font-semibold">{costs.living.onCampus}</span>
                </div>
                <div className="flex justify-between">
                  <span>Off-Campus</span>
                  <span className="font-semibold">
                    {costs.living.offCampus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Food</span>
                  <span className="font-semibold">{costs.living.food}</span>
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
                  <span>Insurance</span>
                  <span className="font-semibold">{costs.other.insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transport</span>
                  <span className="font-semibold">{costs.other.transport}</span>
                </div>
                <div className="flex justify-between">
                  <span>Miscellaneous</span>
                  <span className="font-semibold">{costs.other.misc}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="flex items-center gap-2 text-red-800 dark:text-red-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> SGD 35,000 - 65,000/year
              (before MOE grant)
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities in Singapore
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
            Salary Expectations (SGD)
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
            Useful Tools for Your Singapore Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Singapore 5.0 scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for Singapore employers
              </p>
            </Link>
            <Link
              href="/scholarships"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Scholarships</h3>
              <p className="text-sm text-muted-foreground">
                Find Singapore government scholarships
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
