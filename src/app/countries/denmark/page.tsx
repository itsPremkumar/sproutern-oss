import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  DollarSign,
  FileText,
  Building2,
  CheckCircle,
  BookOpen,
  Users,
  Clock,
  MapPin,
  Home,
  Heart,
  Award,
  TrendingUp,
  Wind,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Denmark',
  description:
    'Complete guide to studying and working in Denmark. Free tuition for EU, world-class work-life balance, green energy focus, and Copenhagen innovation hub.',
  keywords:
    'study in Denmark, work in Denmark, Copenhagen universities, Denmark student visa, Danish Green Card, free tuition Denmark, Copenhagen jobs, study abroad Denmark',
  openGraph: {
    title: 'Study & Work in Denmark - Complete Guide',
    description:
      'Everything you need to know about studying and working in Denmark.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/denmark',
  },
  alternates: { canonical: 'https://www.sproutern.com/countries/denmark' },
};

const visaTypes = [
  {
    name: 'Student Residence Permit',
    description: 'For enrolled students (Non-EU)',
    duration: 'Duration of studies',
    workRights: '20 hrs/week, full-time Jun-Aug',
    path: 'Job Search Visa (6 mo) → Work Permit → PR',
  },
  {
    name: 'Establishment Card',
    description: 'Post-graduation job search permit',
    duration: '6 months - 2 years',
    workRights: 'Full work rights',
    path: 'Bridge to work permit',
  },
  {
    name: 'Work Permit',
    description: 'For employment (Pay Limit Scheme popular)',
    duration: '4 years',
    workRights: 'Full rights',
    path: '4 years continuous → Permanent Residence',
  },
];

const costs = {
  tuition: {
    eu: 'FREE (EU/EEA citizens)',
    nonEuBachelor: 'DKK 45,000-120,000/year (~$6.5-17K)',
    nonEuMaster: 'DKK 50,000-130,000/year (~$7-19K)',
  },
  living: {
    copenhagen: 'DKK 9,000-12,000/month (~$1,300-1,700)',
    aarhus: 'DKK 7,500-10,000/month (~$1,100-1,450)',
    otherCities: 'DKK 6,500-9,000/month (~$950-1,300)',
  },
  other: {
    healthInsurance: 'Free (via Danish system)',
    permitFee: 'DKK 2,655 (~$385)',
    books: 'DKK 4,000-8,000/year',
  },
};

const topUniversities = [
  {
    name: 'University of Copenhagen',
    location: 'Copenhagen',
    ranking: '#82 World (QS)',
    programs: 'Medicine, Sciences, Humanities',
    note: 'Oldest and largest Danish university',
  },
  {
    name: 'Technical University of Denmark (DTU)',
    location: 'Copenhagen',
    ranking: '#104 World (QS)',
    programs: 'Engineering, Technology',
    note: "Denmark's leading tech university",
  },
  {
    name: 'Aarhus University',
    location: 'Aarhus',
    ranking: '#148 World (QS)',
    programs: 'Business, Psychology, Sciences',
    note: "Denmark's second-largest university",
  },
  {
    name: 'Copenhagen Business School',
    location: 'Copenhagen',
    ranking: 'Top 10 Europe (Business)',
    programs: 'Business, Economics, IT Management',
    note: 'One of largest business schools in Europe',
  },
  {
    name: 'Aalborg University',
    location: 'Aalborg',
    ranking: '#343 World (QS)',
    programs: 'Engineering, IT, Sustainable Design',
    note: 'Famous for problem-based learning',
  },
];

const scholarships = [
  {
    name: 'Danish Government Scholarships',
    amount: 'Full/partial tuition waiver + DKK 6,242/month',
    eligibility: 'Non-EU high-achieving students',
    deadline: 'March',
  },
  {
    name: 'DTU Scholarships',
    amount: 'Full tuition waiver',
    eligibility: 'Masters at DTU',
    deadline: 'January',
  },
  {
    name: 'Erasmus Mundus',
    amount: 'Full funding',
    eligibility: 'Joint programs with EU',
    deadline: 'January',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'DKK 45,000-55,000/month',
    mid: 'DKK 60,000-85,000/month',
  },
  {
    role: 'Data Scientist',
    entry: 'DKK 48,000-58,000/month',
    mid: 'DKK 65,000-90,000/month',
  },
  {
    role: 'Engineer',
    entry: 'DKK 42,000-52,000/month',
    mid: 'DKK 55,000-75,000/month',
  },
  {
    role: 'Finance Professional',
    entry: 'DKK 40,000-50,000/month',
    mid: 'DKK 55,000-80,000/month',
  },
  {
    role: 'PhD Researcher',
    entry: 'DKK 36,000-40,000/month',
    mid: 'DKK 42,000-50,000/month',
  },
];

const faqs = [
  {
    question: 'Is tuition free in Denmark?',
    answer:
      'Yes, for EU/EEA citizens! Non-EU students pay tuition (DKK 45,000-130,000/year), but generous scholarships are available including full tuition waivers and monthly stipends.',
  },
  {
    question: 'What is the Establishment Card?',
    answer:
      'After graduation, non-EU students can apply for an Establishment Card (6 months - 2 years) to search for employment. Once you find a job meeting the Pay Limit (DKK 475,000+/year), you can get a work permit.',
  },
  {
    question: 'Why is Denmark known for work-life balance?',
    answer:
      'Denmark consistently ranks #1-3 for work-life balance globally. Standard work week is 37.5 hours, 5-6 weeks paid vacation, generous parental leave. "Hygge" culture emphasizes comfort and well-being.',
  },
  {
    question: 'What industries are strong in Denmark?',
    answer:
      'Denmark excels in: Renewable energy (Vestas, Ørsted), pharma/biotech (Novo Nordisk), shipping (Maersk), design/architecture, gaming, and sustainable tech. Copenhagen has a growing startup scene.',
  },
];

export default function DenmarkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇩🇰</span>
              <span className="font-semibold">Denmark</span>
              <Wind className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Denmark
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Free tuition for EU students, world-leading work-life balance,
              green energy leadership, and one of the happiest countries on
              Earth.
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
                  <FileText className="h-5 w-5" /> Visa Guide
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
                  <Award className="h-5 w-5" /> Scholarships
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16">
        <div className="mb-16 grid gap-4 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-red-600" />
              <p className="text-3xl font-bold text-primary">FREE</p>
              <p className="text-sm text-muted-foreground">EU Tuition</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">#1</p>
              <p className="text-sm text-muted-foreground">Work-Life Balance</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Wind className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">Green</p>
              <p className="text-sm text-muted-foreground">Energy Leader</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">2 Years</p>
              <p className="text-sm text-muted-foreground">Job Search Visa</p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Wind className="h-8 w-8 text-red-500" /> Why Choose Denmark?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Free EU Tuition',
                desc: 'EU/EEA students pay zero tuition fees',
              },
              {
                title: 'Work-Life Balance',
                desc: '37.5hr weeks, 5-6 weeks vacation, hygge culture',
              },
              {
                title: 'Establishment Card',
                desc: 'Up to 2 years post-study job search',
              },
              {
                title: 'Green Tech Leader',
                desc: 'Vestas, Ørsted, sustainable innovation',
              },
              {
                title: 'English Friendly',
                desc: '86% Danes speak English fluently',
              },
              {
                title: 'Happy Country',
                desc: 'Consistently top 3 in world happiness rankings',
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

        <section
          id="visa-guide"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <FileText className="h-8 w-8 text-primary" /> Visa & Permits
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {visaTypes.map((visa) => (
              <Card
                key={visa.name}
                className="transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle>
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
                        <strong>Work:</strong> {visa.workRights}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="mt-0.5 h-4 w-4 text-purple-500" />
                      <span>
                        <strong>Path:</strong> {visa.path}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" /> Costs (DKK)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>
                  <GraduationCap className="mr-2 inline h-5 w-5 text-blue-500" />
                  Tuition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(costs.tuition).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between"
                  >
                    <span className="capitalize">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-sm font-semibold">{v}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Home className="mr-2 inline h-5 w-5 text-green-500" />
                  Living (Monthly)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(costs.living).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between"
                  >
                    <span className="capitalize">{k}</span>
                    <span className="text-sm font-semibold">{v}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Heart className="mr-2 inline h-5 w-5 text-red-500" />
                  Other
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(costs.other).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between"
                  >
                    <span className="capitalize">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-sm font-semibold">{v}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" /> Top Universities
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topUniversities.map((uni) => (
              <Card
                key={uni.name}
                className="hover:border-primary"
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

        <section
          id="scholarships"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Award className="h-8 w-8 text-primary" /> Scholarships
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {scholarships.map((s) => (
              <Card key={s.name}>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-bold">{s.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <span>{s.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>{s.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>{s.deadline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <DollarSign className="h-8 w-8 text-primary" /> Salaries (DKK/month)
          </h2>
          <Card>
            <CardContent className="pt-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-left font-semibold">Role</th>
                    <th className="pb-3 text-left font-semibold">Entry</th>
                    <th className="pb-3 text-left font-semibold">Mid</th>
                  </tr>
                </thead>
                <tbody>
                  {salaries.map((s) => (
                    <tr
                      key={s.role}
                      className="border-b last:border-0"
                    >
                      <td className="py-3 font-medium">{s.role}</td>
                      <td className="py-3 text-green-600">{s.entry}</td>
                      <td className="py-3 text-blue-600">{s.mid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <BookOpen className="h-8 w-8 text-primary" /> FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
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

        <section className="rounded-2xl bg-gradient-to-r from-red-600/10 to-white/20 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Useful Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/scholarship-checker"
              className="block rounded-lg bg-background p-4 shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Scholarship Checker</h3>
              <p className="text-sm text-muted-foreground">
                Find Danish scholarships
              </p>
            </Link>
            <Link
              href="/tools/cost-of-living"
              className="block rounded-lg bg-background p-4 shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Cost of Living</h3>
              <p className="text-sm text-muted-foreground">
                Copenhagen costs comparison
              </p>
            </Link>
            <Link
              href="/tools/lor-sop-generator"
              className="block rounded-lg bg-background p-4 shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">LOR/SOP Generator</h3>
              <p className="text-sm text-muted-foreground">
                Create application docs
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
