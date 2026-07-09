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
  Smartphone,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in South Korea',
  description:
    'Complete guide to studying and working in South Korea. Home to Samsung, KAIST, K-culture, D-10 job-seeker visa, and affordable education with growing opportunities.',
  keywords:
    'study in South Korea, work in South Korea, KAIST, Seoul National University, Korean Government Scholarship, D-10 visa, Samsung jobs, K-pop, study abroad Korea',
  openGraph: {
    title: 'Study & Work in South Korea - Complete Guide',
    description:
      'Everything you need to know about studying and working in South Korea.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/south-korea',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/south-korea',
  },
};

const visaTypes = [
  {
    name: 'D-2 Student Visa',
    description: 'For full-time students at Korean universities',
    duration: 'Duration of studies',
    workRights: '20 hrs/week (after 6 months)',
    path: 'D-10 Job Seeker → E-7 Work → F-2 Residence',
  },
  {
    name: 'D-10 Job Seeker Visa',
    description: 'For graduates looking for employment',
    duration: '6 months - 2 years',
    workRights: 'Limited (internship only)',
    path: 'Bridge between study and work visa',
  },
  {
    name: 'E-7 Professional Visa',
    description: 'For specialized professionals',
    duration: '1-3 years, renewable',
    workRights: 'Full work rights',
    path: 'Can lead to F-2 after 5 years',
  },
  {
    name: 'F-2 Residence Visa',
    description: 'Long-term residence for points holders',
    duration: '3 years, renewable',
    workRights: 'Full rights',
    path: 'Points-based, can lead to F-5 permanent',
  },
];

const costs = {
  tuition: {
    publicUndergrad: 'KRW 4-8 million/year (~$3-6K)',
    privateUndergrad: 'KRW 8-15 million/year (~$6-11K)',
    postgraduate: 'KRW 6-16 million/year (~$4.5-12K)',
  },
  living: {
    seoul: 'KRW 800,000 - 1,500,000/month (~$600-1,100)',
    busan: 'KRW 600,000 - 1,000,000/month (~$450-750)',
    otherCities: 'KRW 500,000 - 900,000/month (~$375-675)',
  },
  other: {
    healthInsurance: 'KRW 50,000/month (National)',
    visaFee: 'KRW 60,000 (~$45)',
    books: 'KRW 300,000-500,000/year',
  },
};

const topUniversities = [
  {
    name: 'Seoul National University (SNU)',
    location: 'Seoul',
    ranking: '#29 World (QS)',
    programs: 'Engineering, Medicine, Business',
    note: 'Most prestigious Korean university',
  },
  {
    name: 'KAIST',
    location: 'Daejeon',
    ranking: '#42 World (QS)',
    programs: 'Engineering, Technology, Sciences',
    note: 'MIT of Korea, many English programs',
  },
  {
    name: 'Yonsei University',
    location: 'Seoul',
    ranking: '#56 World (QS)',
    programs: 'Medicine, Business, Liberal Arts',
    note: 'Part of SKY universities',
  },
  {
    name: 'Korea University',
    location: 'Seoul',
    ranking: '#67 World (QS)',
    programs: 'Business, Law, Political Science',
    note: 'Part of SKY universities',
  },
  {
    name: 'POSTECH',
    location: 'Pohang',
    ranking: '#71 World (QS)',
    programs: 'Science, Technology, Engineering',
    note: 'Research-focused, full scholarships',
  },
  {
    name: 'Sungkyunkwan University',
    location: 'Seoul',
    ranking: '#99 World (QS)',
    programs: 'Business (Samsung), Engineering',
    note: 'Samsung-affiliated',
  },
];

const scholarships = [
  {
    name: 'Korean Government Scholarship (KGSP/GKS)',
    amount: 'Full funding (tuition + KRW 1M/month)',
    eligibility: 'Undergrad/Postgrad/PhD from any country',
    deadline: 'February-March',
  },
  {
    name: 'KAIST Scholarship',
    amount: 'Full tuition + KRW 350,000/month',
    eligibility: 'All admitted international students',
    deadline: 'Year-round',
  },
  {
    name: 'POSTECH Scholarship',
    amount: 'Full funding',
    eligibility: 'Graduate students',
    deadline: 'November',
  },
  {
    name: 'University Scholarships',
    amount: '30-100% tuition waiver',
    eligibility: 'Based on academic merit',
    deadline: 'Varies',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'KRW 45-60M/year (~$35-45K)',
    mid: 'KRW 80-120M/year (~$60-90K)',
  },
  {
    role: 'Data Scientist',
    entry: 'KRW 50-65M/year (~$38-50K)',
    mid: 'KRW 90-130M/year (~$68-100K)',
  },
  {
    role: 'Product Manager',
    entry: 'KRW 50-70M/year (~$38-53K)',
    mid: 'KRW 100-150M/year (~$75-115K)',
  },
  {
    role: 'Engineer (Samsung/LG)',
    entry: 'KRW 50-65M/year (~$38-50K)',
    mid: 'KRW 90-140M/year (~$68-105K)',
  },
  {
    role: 'Business Analyst',
    entry: 'KRW 40-55M/year (~$30-42K)',
    mid: 'KRW 70-100M/year (~$53-75K)',
  },
  {
    role: 'English Teacher',
    entry: 'KRW 24-30M/year (~$18-23K)',
    mid: 'KRW 30-45M/year (~$23-34K)',
  },
];

const faqs = [
  {
    question: 'What is the D-10 Job Seeker Visa?',
    answer:
      'After graduation, you can apply for D-10 visa (6 months - 2 years) to search for jobs without needing immediate employment. This gives you time to find a suitable professional position and transition to E-7 work visa.',
  },
  {
    question: 'Do I need to speak Korean?',
    answer:
      'Many graduate programs (especially at KAIST, POSTECH) are taught entirely in English. For jobs, English-only roles exist in tech and multinationals, but Korean proficiency significantly improves job prospects and daily life.',
  },
  {
    question: 'What is the Korean Government Scholarship (KGSP)?',
    answer:
      'One of the most generous scholarships globally! It covers: Full tuition, monthly allowance (KRW 1M+), airfare, Korean language training (1 year), settlement allowance, and research support for graduate students.',
  },
  {
    question: 'How is the tech industry in Korea?',
    answer:
      'Korea is a tech powerhouse with Samsung, LG, Naver, Kakao, and growing startups. The Pangyo Techno Valley near Seoul is called "Korean Silicon Valley". Strong demand for AI, semiconductor, and software engineers.',
  },
  {
    question: 'What about the K-culture opportunities?',
    answer:
      'Beyond K-pop and K-dramas, Korea offers opportunities in entertainment tech, gaming (Nexon, NCSoft), esports, and content creation. Many international students find opportunities in cultural industries.',
  },
];

export default function SouthKoreaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-blue-600 to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇰🇷</span>
              <span className="font-semibold">South Korea</span>
              <Smartphone className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in South Korea
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Home to Samsung, KAIST, and K-culture. Affordable education with
              generous government scholarships, D-10 job-seeker visa, and a
              thriving tech ecosystem.
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
              <p className="text-3xl font-bold text-primary">Top 100</p>
              <p className="text-sm text-muted-foreground">
                6 Universities World Ranked
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">KGSP</p>
              <p className="text-sm text-muted-foreground">
                Full Funding Scholarship
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Briefcase className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">D-10</p>
              <p className="text-sm text-muted-foreground">Job Seeker Visa</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Smartphone className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">Tech Hub</p>
              <p className="text-sm text-muted-foreground">
                Samsung, LG, Kakao
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Smartphone className="h-8 w-8 text-blue-600" /> Why Choose South
            Korea?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Generous Scholarships',
                desc: 'KGSP covers tuition + living + Korean training',
              },
              {
                title: 'Affordable Education',
                desc: 'Public unis: ~$3-6K/year tuition',
              },
              {
                title: 'D-10 Job Seeker Visa',
                desc: 'Up to 2 years to find employment after graduation',
              },
              {
                title: 'Tech Powerhouse',
                desc: 'Samsung, LG, Naver, Kakao headquarters',
              },
              {
                title: 'K-Culture Capital',
                desc: 'Entertainment, gaming, content opportunities',
              },
              {
                title: 'KAIST/POSTECH',
                desc: 'World-class tech universities with full funding',
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
            <FileText className="h-8 w-8 text-primary" /> Visa Types & Pathways
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
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
            <DollarSign className="h-8 w-8 text-primary" /> Cost of Studying
            (KRW)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" /> Tuition
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
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-green-500" /> Living (Monthly)
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
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" /> Other
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
            <Building2 className="h-8 w-8 text-primary" /> Top Universities (SKY
            + KAIST)
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

        <section
          id="scholarships"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Award className="h-8 w-8 text-primary" /> Scholarships
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {scholarships.map((s) => (
              <Card
                key={s.name}
                className="transition-all hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-lg font-bold">{s.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-green-500" />
                      <span>
                        <strong>Amount:</strong> {s.amount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span>
                        <strong>Eligibility:</strong> {s.eligibility}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>
                        <strong>Deadline:</strong> {s.deadline}
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
            <DollarSign className="h-8 w-8 text-primary" /> Salary Expectations
            (KRW)
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
                        Mid Level
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaries.map((s) => (
                      <tr
                        key={s.role}
                        className="border-b last:border-0"
                      >
                        <td className="py-3 font-medium">{s.role}</td>
                        <td className="py-3 text-sm text-green-600">
                          {s.entry}
                        </td>
                        <td className="py-3 text-sm text-blue-600">{s.mid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

        <section className="rounded-2xl bg-gradient-to-r from-red-600/10 to-blue-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Useful Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert grades for Korean universities
              </p>
            </Link>
            <Link
              href="/tools/scholarship-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Scholarship Checker</h3>
              <p className="text-sm text-muted-foreground">
                Find KGSP and other scholarships
              </p>
            </Link>
            <Link
              href="/tools/lor-sop-generator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">LOR/SOP Generator</h3>
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
