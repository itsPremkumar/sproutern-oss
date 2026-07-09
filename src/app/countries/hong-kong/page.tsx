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
  Landmark,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Hong Kong',
  description:
    'Complete guide to studying and working in Hong Kong. Top Asian universities, IANG visa, global finance hub, gateway to Asia, and high salaries.',
  keywords:
    'study in Hong Kong, work in Hong Kong, HKU, HKUST, Hong Kong universities, IANG visa, finance jobs Hong Kong, study abroad Hong Kong',
  openGraph: {
    title: 'Study & Work in Hong Kong - Complete Guide',
    description:
      'Everything you need to know about studying and working in Hong Kong.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/hong-kong',
  },
  alternates: { canonical: 'https://www.sproutern.com/countries/hong-kong' },
};

const visaTypes = [
  {
    name: 'Student Visa',
    description: 'For students at Hong Kong institutions',
    duration: 'Duration of studies',
    workRights: 'Part-time on campus, internships, summer work',
    path: 'IANG Visa → Work Visa → Permanent Residence',
  },
  {
    name: 'IANG Visa (Immigration Arrangements for Non-local Graduates)',
    description: 'For fresh graduates to stay and work',
    duration: '12 months (first time), then 2-3 years',
    workRights: 'Full work rights, no sponsorship needed',
    path: 'Most liberal post-study visa in Asia',
  },
  {
    name: 'Employment Visa',
    description: 'For professionals with job offers',
    duration: '1-3 years, renewable',
    workRights: 'Full rights',
    path: '7 years continuous residence → Permanent Residence',
  },
];

const costs = {
  tuition: {
    undergraduate: 'HKD 140,000-180,000/year (~$18-23K)',
    postgraduate: 'HKD 120,000-200,000/year (~$15-26K)',
    mba: 'HKD 300,000-700,000 total (~$38-90K)',
  },
  living: {
    hongKongIsland: 'HKD 15,000-25,000/month (~$1,900-3,200)',
    kowloon: 'HKD 12,000-20,000/month (~$1,500-2,600)',
    newTerritories: 'HKD 10,000-15,000/month (~$1,300-1,900)',
  },
  other: {
    healthInsurance: 'HKD 3,000-5,000/year',
    visaFee: 'HKD 230',
    transport: 'HKD 500-1,000/month',
  },
};

const topUniversities = [
  {
    name: 'University of Hong Kong (HKU)',
    location: 'Hong Kong Island',
    ranking: '#26 World (QS)',
    programs: 'Law, Medicine, Business, Engineering',
    note: 'Oldest and most prestigious',
  },
  {
    name: 'Hong Kong University of Science and Technology (HKUST)',
    location: 'Clear Water Bay',
    ranking: '#47 World (QS)',
    programs: 'Technology, Business, Science',
    note: 'Young but highly ranked, strong in tech',
  },
  {
    name: 'Chinese University of Hong Kong (CUHK)',
    location: 'New Territories',
    ranking: '#36 World (QS)',
    programs: 'Medicine, Business, Sciences',
    note: 'Beautiful campus, bilingual education',
  },
  {
    name: 'City University of Hong Kong',
    location: 'Kowloon',
    ranking: '#62 World (QS)',
    programs: 'Engineering, Creative Media, Business',
    note: 'Rising star, innovative programs',
  },
  {
    name: 'Hong Kong Polytechnic University',
    location: 'Hung Hom',
    ranking: '#65 World (QS)',
    programs: 'Design, Hotel Management, Engineering',
    note: 'Strong in applied sciences',
  },
];

const scholarships = [
  {
    name: 'Hong Kong PhD Fellowship Scheme',
    amount: 'HKD 27,600/month + conference allowance',
    eligibility: 'PhD applicants worldwide',
    deadline: 'December',
  },
  {
    name: 'Belt and Road Scholarships',
    amount: 'Full tuition + living',
    eligibility: 'Students from Belt and Road countries',
    deadline: 'Varies',
  },
  {
    name: 'University Scholarships',
    amount: 'HKD 50,000 - Full tuition',
    eligibility: 'Based on academic merit',
    deadline: 'Varies by university',
  },
  {
    name: 'HKSAR Government Scholarships',
    amount: 'HKD 80,000/year',
    eligibility: 'Outstanding students',
    deadline: 'April',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'HKD 25,000-40,000/month',
    mid: 'HKD 50,000-80,000/month',
  },
  {
    role: 'Investment Banking',
    entry: 'HKD 40,000-60,000/month',
    mid: 'HKD 80,000-150,000+/month',
  },
  {
    role: 'Data Scientist',
    entry: 'HKD 30,000-45,000/month',
    mid: 'HKD 55,000-90,000/month',
  },
  {
    role: 'Accountant',
    entry: 'HKD 18,000-28,000/month',
    mid: 'HKD 35,000-60,000/month',
  },
  {
    role: 'Marketing Manager',
    entry: 'HKD 20,000-35,000/month',
    mid: 'HKD 45,000-80,000/month',
  },
  {
    role: 'Engineer',
    entry: 'HKD 18,000-30,000/month',
    mid: 'HKD 40,000-65,000/month',
  },
];

const faqs = [
  {
    question: 'What is the IANG Visa?',
    answer:
      'The Immigration Arrangements for Non-local Graduates (IANG) is one of the most liberal post-study visas in Asia. It allows graduates to stay and work for 12-24 months without needing employer sponsorship. You can work in ANY job - no restrictions on field or employer.',
  },
  {
    question: 'How can I get permanent residence in Hong Kong?',
    answer:
      'After 7 years of continuous residence (including student time), you can apply for permanent residence. This grants you the right to abode, no work restrictions, and access to most benefits.',
  },
  {
    question: 'Is Hong Kong expensive for students?',
    answer:
      "Yes, Hong Kong is one of the world's most expensive cities, mainly due to housing. Students typically live in on-campus accommodation (cheaper) or shared apartments. Budget HKD 10,000-20,000/month for living expenses depending on lifestyle and location.",
  },
  {
    question: 'What industries are strong in Hong Kong?',
    answer:
      'Hong Kong excels in: Finance & Banking (global financial center), Legal services, Trade & Logistics, Professional services, Fintech, and increasingly Tech startups. It serves as the gateway to Mainland China business.',
  },
  {
    question: 'Is English enough in Hong Kong?',
    answer:
      'Hong Kong is officially bilingual (English and Chinese). English is widely used in business, education, and government. While Cantonese is the main spoken language, English proficiency is high, especially in professional settings. Many programs are fully in English.',
  },
];

export default function HongKongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇭🇰</span>
              <span className="font-semibold">Hong Kong SAR</span>
              <Landmark className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Hong Kong
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Asia's global city with top-ranked universities, the IANG visa for
              graduates, world financial center, and gateway to China and Asia.
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
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">
                Top 100 Universities
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Briefcase className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">IANG</p>
              <p className="text-sm text-muted-foreground">
                Liberal Post-Study Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Landmark className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">#3</p>
              <p className="text-sm text-muted-foreground">
                Global Financial Center
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">7 Years</p>
              <p className="text-sm text-muted-foreground">
                To Permanent Residence
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Landmark className="h-8 w-8 text-red-600" /> Why Choose Hong Kong?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Top Asian Universities',
                desc: '5 universities in QS Top 100 globally',
              },
              {
                title: 'IANG Visa',
                desc: 'Work freely after graduation, no sponsorship required',
              },
              {
                title: 'Global Finance Hub',
                desc: 'Wall Street of Asia, top banks and firms',
              },
              {
                title: 'Gateway to China',
                desc: 'Access to mainland China opportunities',
              },
              {
                title: 'International Environment',
                desc: 'English is official, global culture',
              },
              {
                title: 'High Salaries',
                desc: 'Competitive pay, low tax rates (15%)',
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
            <FileText className="h-8 w-8 text-primary" /> Visa Types & IANG
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
            <DollarSign className="h-8 w-8 text-primary" /> Costs (HKD)
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
          <div className="grid gap-6 md:grid-cols-2">
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
            <DollarSign className="h-8 w-8 text-primary" /> Salaries (HKD/month)
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
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert grades for HK universities
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate HK take-home pay
              </p>
            </Link>
            <Link
              href="/tools/lor-sop-generator"
              className="block rounded-lg bg-background p-4 shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">SOP Generator</h3>
              <p className="text-sm text-muted-foreground">
                Create application documents
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
