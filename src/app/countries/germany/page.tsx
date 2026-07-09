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
  Plane,
  Home,
  Heart,
  Award,
  TrendingUp,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Germany',
  description:
    'Complete guide to studying in Germany for free. Learn about tuition-free public universities, Sperrkonto (blocked account), student visa, job seeker visa, EU Blue Card, DAAD scholarships, and career opportunities.',
  keywords:
    'study in Germany for free, free tuition Germany, DAAD scholarship, blocked account Germany, Sperrkonto, German student visa, job seeker visa Germany, TU Munich, RWTH Aachen, Studium in Deutschland, Werkstudent, international students Germany, universities in Germany, study abroad Germany, EU Blue Card, Semesterticket',
  openGraph: {
    title: 'Study & Work in Germany 2025 - Free Tuition Guide',
    description:
      'Study at world-class German universities for free. Complete guide to costs, blocked account, visas, scholarships, and careers.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/germany',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Germany for Free - Complete 2025 Guide',
    description:
      'Free tuition at German universities. Learn about blocked account, visas, DAAD scholarships.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/germany',
  },
};

const visaTypes = [
  {
    name: 'Student Visa (Study Purpose)',
    description: 'For international students enrolled in German universities',
    duration: 'Duration of study + preparation courses',
    workRights: '120 full days or 240 half days per year',
    path: 'Job Seeker Visa → EU Blue Card → PR',
  },
  {
    name: 'Job Seeker Visa',
    description: 'For graduates to find employment in Germany',
    duration: '18 months after graduation',
    workRights: 'Job search, not full employment',
    path: 'Find job → EU Blue Card → PR',
  },
  {
    name: 'EU Blue Card',
    description: 'Work visa for highly qualified professionals',
    duration: '4 years, renewable',
    workRights: 'Full-time work with sponsoring employer',
    path: 'PR after 21-33 months',
  },
  {
    name: 'Settlement Permit (Permanent)',
    description: 'Permanent residence after qualified period',
    duration: 'Permanent',
    workRights: 'Unrestricted work rights',
    path: 'After EU Blue Card: 21-33 months',
  },
];

const costs = {
  tuition: {
    public: '€0 - €500/semester (admin fee only)',
    private: '€10,000 - €30,000/year',
    note: 'Baden-Württemberg: €1,500/semester for non-EU',
  },
  living: {
    munich: '€12,000 - €15,000/year',
    berlin: '€10,000 - €12,000/year',
    smallerCities: '€8,000 - €10,000/year',
  },
  other: {
    blockedAccount: '€11,904/year (mandatory proof)',
    healthInsurance: '€110/month (public)',
    semesterTicket: '€150 - €350/semester',
  },
};

const topUniversities = [
  {
    name: 'TU Munich',
    location: 'Munich, Bavaria',
    ranking: '#1 Germany',
    programs: 'Engineering, CS, Physics',
    tuition: 'Free (€144/semester)',
  },
  {
    name: 'LMU Munich',
    location: 'Munich, Bavaria',
    ranking: '#2 Germany',
    programs: 'Medicine, Law, Sciences',
    tuition: 'Free (€144/semester)',
  },
  {
    name: 'Heidelberg University',
    location: 'Heidelberg',
    ranking: '#3 Germany',
    programs: 'Medicine, Natural Sciences',
    tuition: 'Free (€171/semester)',
  },
  {
    name: 'Humboldt University',
    location: 'Berlin',
    ranking: '#4 Germany',
    programs: 'Arts, Sciences, Social Sciences',
    tuition: 'Free (€315/semester)',
  },
  {
    name: 'RWTH Aachen',
    location: 'Aachen',
    ranking: '#5 Germany',
    programs: 'Engineering, Technology',
    tuition: 'Free (€310/semester)',
  },
  {
    name: 'Technical University Berlin',
    location: 'Berlin',
    ranking: '#6 Germany',
    programs: 'Engineering, Architecture',
    tuition: 'Free (€312/semester)',
  },
  {
    name: 'University of Freiburg',
    location: 'Freiburg',
    ranking: '#7 Germany',
    programs: 'Environmental Sciences, Medicine',
    tuition: 'Free (€155/semester)',
  },
  {
    name: 'KIT Karlsruhe',
    location: 'Karlsruhe',
    ranking: '#8 Germany',
    programs: 'Engineering, IT, Physics',
    tuition: '€1,500/semester (Non-EU)',
  },
  {
    name: 'University of Tübingen',
    location: 'Tübingen',
    ranking: '#9 Germany',
    programs: 'AI, Medicine, Humanities',
    tuition: '€1,500/semester (Non-EU)',
  },
  {
    name: 'University of Göttingen',
    location: 'Göttingen',
    ranking: '#10 Germany',
    programs: 'Sciences, Agriculture',
    tuition: 'Free (€386/semester)',
  },
  {
    name: 'TU Dresden',
    location: 'Dresden',
    ranking: '#11 Germany',
    programs: 'Engineering, Microelectronics',
    tuition: 'Free (€280/semester)',
  },
  {
    name: 'University of Bonn',
    location: 'Bonn',
    ranking: '#12 Germany',
    programs: 'Mathematics, Economics',
    tuition: 'Free (€314/semester)',
  },
];

const scholarships = [
  {
    name: 'DAAD Study Scholarships',
    amount: '€934/month + health insurance + travel',
    eligibility: "Graduates from all countries for Master's/PhD",
    deadline: 'October 15 (varies by country)',
    link: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
  },
  {
    name: 'Deutschlandstipendium',
    amount: '€300/month (€150 from Bund + €150 from sponsors)',
    eligibility: 'High-achieving students enrolled at German universities',
    deadline: 'Varies by university (usually April-July)',
    link: 'https://www.deutschlandstipendium.de/',
  },
  {
    name: 'Heinrich Böll Foundation',
    amount: '€992/month + €300 book allowance',
    eligibility: 'Students with social/political engagement (Green values)',
    deadline: 'March 1 / September 1',
    link: 'https://www.boell.de/en/foundation/study-work-scholarships',
  },
  {
    name: 'Friedrich Ebert Foundation',
    amount: "€992/month (Master's)",
    eligibility: 'Students with social-democratic engagement',
    deadline: 'Ongoing applications',
    link: 'https://www.fes.de/studienfoerderung/',
  },
  {
    name: 'Konrad Adenauer Foundation',
    amount: '€992/month + €300 book allowance',
    eligibility: 'Christian-democratic values, academic excellence',
    deadline: 'January 15 / July 15',
    link: 'https://www.kas.de/en/scholarship-programs',
  },
  {
    name: 'DAAD WISE (for Indian students)',
    amount: '€934/month for 2-3 months',
    eligibility: 'Indian UG students for research internships',
    deadline: 'November 1',
    link: 'https://www.daad.in/en/find-funding/scholarship-database/',
  },
  {
    name: 'Erasmus Mundus Joint Masters',
    amount: '€1,400/month + travel + tuition',
    eligibility: 'International students for joint EU programs',
    deadline: 'December-February (varies)',
    link: 'https://erasmus-plus.ec.europa.eu/',
  },
  {
    name: 'SBW Berlin Scholarship',
    amount: 'Living costs + mentoring',
    eligibility: 'Students from developing countries',
    deadline: 'February',
    link: 'https://www.sbw.berlin/',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: '€50,000 - €65,000',
    mid: '€70,000 - €100,000',
  },
  {
    role: 'Data Scientist',
    entry: '€50,000 - €60,000',
    mid: '€65,000 - €90,000',
  },
  {
    role: 'Mechanical Engineer',
    entry: '€48,000 - €58,000',
    mid: '€65,000 - €85,000',
  },
  {
    role: 'Automotive Engineer',
    entry: '€52,000 - €62,000',
    mid: '€70,000 - €95,000',
  },
  { role: 'Consultant', entry: '€50,000 - €65,000', mid: '€75,000 - €110,000' },
  {
    role: 'Financial Analyst',
    entry: '€45,000 - €55,000',
    mid: '€60,000 - €85,000',
  },
];

const faqs = [
  {
    question: 'Is studying in Germany really free?',
    answer:
      "Yes, most public universities in Germany don't charge tuition fees for international students. You only pay a semester contribution (€150-400) which usually includes a public transport ticket (Semesterticket). Exception: Baden-Württemberg charges €1,500/semester for non-EU students.",
  },
  {
    question: 'What is a blocked account (Sperrkonto)?',
    answer:
      'A blocked account is mandatory proof of financial resources for your visa. You must deposit €11,904 (as of 2024) and can withdraw €992/month. Popular providers: Fintiba (€89 fee, fastest setup), Expatrio (€49 fee), Deutsche Bank (€0 fee but slower). Open 8-12 weeks before visa application.',
  },
  {
    question: 'Do I need to know German to study in Germany?',
    answer:
      "Not necessarily. Over 2,000 Master's programs are taught entirely in English. However, learning German (A2-B1 level) is highly recommended for daily life, working student jobs (Werkstudent), and career opportunities. German-taught programs require TestDaF (TDN 4) or DSH-2.",
  },
  {
    question: 'How long can I stay in Germany after graduation?',
    answer:
      'Germany offers an 18-month Job Seeker Visa (Aufenthaltserlaubnis zur Arbeitsplatzsuche) after graduation to find employment. Once you find a job matching your qualification with minimum €45,300/year salary, you can apply for an EU Blue Card, which leads to permanent residence (Niederlassungserlaubnis) after 21-33 months.',
  },
  {
    question: 'What is the Bavarian Formula for grade conversion?',
    answer:
      'The Bavarian Formula (Modified Bavarian Formula) converts international grades to German grades: German Grade = 1 + 3 × (Nmax - Nd) / (Nmax - Nmin). Where Nmax is maximum grade, Nd is your grade, Nmin is minimum passing grade. Example: Indian 8.5/10 CGPA ≈ German 1.75. Use our GPA converter for automatic calculation.',
  },
  {
    question: 'Can I work while studying in Germany?',
    answer:
      "Yes! Students can work 120 full days OR 240 half days per year without additional permit. Working student (Werkstudent) jobs in tech pay €12-20/hour. During semester breaks, you can work full-time. Mini-jobs (€520/month) don't count towards the limit.",
  },
  {
    question: 'How do I find student housing in Germany?',
    answer:
      'Options: 1) Studentenwerk dormitories (€200-400/month, apply early via local Studierendenwerk), 2) WG (shared flat) on WG-Gesucht.de, 3) Private apartments on ImmoScout24. Munich is most expensive; smaller cities like Dresden, Leipzig are affordable. Start searching 3-4 months early.',
  },
  {
    question: 'Which health insurance do I need?',
    answer:
      'Public health insurance (gesetzliche Krankenversicherung) is mandatory and costs ~€110/month for students under 30. Main providers: TK (Techniker Krankenkasse), AOK, Barmer. Students over 30 or with private insurance from home may use private insurance (Mawista, Care Concept).',
  },
  {
    question: 'When are application deadlines for German universities?',
    answer:
      'Winter semester (October start): Deadline July 15 for international students. Summer semester (April start): Deadline January 15. Some programs via uni-assist have earlier deadlines (April-May for winter). Apply through uni-assist.de for most universities or directly for TU Munich, LMU.',
  },
  {
    question: 'Do I need uni-assist for applications?',
    answer:
      "Most German universities require applications through uni-assist.de (€75 first uni + €30 each additional). However, some universities accept direct applications: TU Munich, LMU Munich, Heidelberg. Check each university's website. Process takes 4-6 weeks.",
  },
];

export default function GermanyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-red-600 to-yellow-500 py-20 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇩🇪</span>
              <span className="font-semibold">Germany</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study in Germany for Free
            </h1>
            <p className="mb-8 text-xl text-white/90">
              World-class education at tuition-free public universities. Germany
              offers excellent engineering programs, strong industry
              connections, and a clear pathway to work and settle in Europe's
              largest economy.
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
                  DAAD Scholarships
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
              <Sparkles className="mx-auto mb-3 h-10 w-10 text-yellow-500" />
              <p className="text-3xl font-bold text-primary">€0</p>
              <p className="text-sm text-muted-foreground">
                Tuition at Public Unis
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-red-600" />
              <p className="text-3xl font-bold text-primary">400K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">18 Months</p>
              <p className="text-sm text-muted-foreground">Job Seeker Visa</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">2,000+</p>
              <p className="text-sm text-muted-foreground">English Programs</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Germany Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            Why Choose Germany?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Free Tuition',
                desc: 'No tuition fees at most public universities for international students',
              },
              {
                title: 'Industry Leaders',
                desc: 'Home to BMW, Siemens, SAP, Bosch, and world-leading industries',
              },
              {
                title: 'English Programs',
                desc: "2,000+ Master's programs taught entirely in English",
              },
              {
                title: 'Work While Studying',
                desc: '120 full days or 240 half days of work permitted per year',
              },
              {
                title: 'Post-Study Options',
                desc: '18-month job seeker visa to find employment after graduation',
              },
              {
                title: 'Central Location',
                desc: 'Easy access to travel across Europe with excellent infrastructure',
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
            Cost of Studying in Germany (EUR)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-yellow-500" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Public Universities</span>
                  <span className="font-semibold text-green-600">
                    {costs.tuition.public}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Private Universities</span>
                  <span className="font-semibold">{costs.tuition.private}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {costs.tuition.note}
                </p>
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
                  <span>Munich</span>
                  <span className="font-semibold">{costs.living.munich}</span>
                </div>
                <div className="flex justify-between">
                  <span>Berlin</span>
                  <span className="font-semibold">{costs.living.berlin}</span>
                </div>
                <div className="flex justify-between">
                  <span>Smaller Cities</span>
                  <span className="font-semibold">
                    {costs.living.smallerCities}
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  Mandatory Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Blocked Account</span>
                  <span className="font-semibold">
                    {costs.other.blockedAccount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Health Insurance</span>
                  <span className="font-semibold">
                    {costs.other.healthInsurance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Semester Ticket</span>
                  <span className="font-semibold">
                    {costs.other.semesterTicket}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <p className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
              <Sparkles className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> €10,000 - €15,000/year
              (mostly living expenses - tuition is free!)
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top 12 Universities in Germany
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
                  <p className="mb-2 text-sm">
                    <strong>Programs:</strong> {uni.programs}
                  </p>
                  <p
                    className={`text-sm font-medium ${uni.tuition.includes('Free') ? 'text-green-600' : 'text-orange-600'}`}
                  >
                    💰 {uni.tuition}
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
            Scholarships (DAAD & More)
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
        <section className="rounded-2xl bg-gradient-to-r from-black/10 via-red-600/10 to-yellow-500/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Germany Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                GPA Converter (Bavarian Formula)
              </h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to German 1.0-5.0 scale
              </p>
            </Link>
            <Link
              href="/tools/sop-outliner"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Motivation Letter</h3>
              <p className="text-sm text-muted-foreground">
                Create a compelling application letter
              </p>
            </Link>
            <Link
              href="/scholarships"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">DAAD Scholarships</h3>
              <p className="text-sm text-muted-foreground">
                Find German scholarships for your profile
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
