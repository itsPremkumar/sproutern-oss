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
  Leaf,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Canada',
  description:
    'Complete guide to studying and working in Canada. Learn about Study Permit, PGWP, Express Entry, top universities, costs, scholarships, and PR pathway for international students.',
  keywords:
    'study in Canada, work in Canada, PGWP, Study Permit, Express Entry, Canadian universities, international students Canada, PR Canada, study abroad Canada',
  openGraph: {
    title: 'Study & Work in Canada - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in Canada as an international student.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/canada',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/canada',
  },
};

const visaTypes = [
  {
    name: 'Study Permit',
    description:
      'Required for international students studying in Canada for more than 6 months',
    duration: 'Duration of study program + 90 days',
    workRights: '20 hrs/week during term, full-time during breaks',
    path: 'PGWP → Express Entry → PR',
  },
  {
    name: 'PGWP (Post-Graduation Work Permit)',
    description:
      'Open work permit for graduates of eligible Canadian institutions',
    duration: '8 months to 3 years (based on study length)',
    workRights: 'Full-time work, no employer restrictions',
    path: 'Gain Canadian work experience for PR',
  },
  {
    name: 'Express Entry',
    description: 'Points-based immigration system for skilled workers',
    duration: 'Permanent Residence',
    workRights: 'Full work rights as PR',
    path: 'PR → Citizenship after 3 years',
  },
  {
    name: 'Provincial Nominee Program (PNP)',
    description: 'Pathway to PR through provincial nomination',
    duration: 'Permanent Residence',
    workRights: 'Full work rights',
    path: 'Additional 600 CRS points → PR',
  },
];

const costs = {
  tuition: {
    undergraduate: 'CAD 20,000 - 35,000/year',
    postgraduate: 'CAD 18,000 - 40,000/year',
    mba: 'CAD 30,000 - 80,000/year',
  },
  living: {
    toronto: 'CAD 15,000 - 20,000/year',
    vancouver: 'CAD 14,000 - 18,000/year',
    otherCities: 'CAD 10,000 - 14,000/year',
  },
  other: {
    healthInsurance: 'CAD 600 - 900/year',
    visaFee: 'CAD 150 (Study Permit)',
    books: 'CAD 500 - 1,000/year',
  },
};

const topUniversities = [
  {
    name: 'University of Toronto',
    location: 'Toronto, ON',
    ranking: '#1 Canada',
    programs: 'Engineering, CS, Medicine',
  },
  {
    name: 'UBC',
    location: 'Vancouver, BC',
    ranking: '#2 Canada',
    programs: 'CS, Business, Sciences',
  },
  {
    name: 'McGill University',
    location: 'Montreal, QC',
    ranking: '#3 Canada',
    programs: 'Medicine, Law, Arts',
  },
  {
    name: 'University of Waterloo',
    location: 'Waterloo, ON',
    ranking: '#4 Canada',
    programs: 'CS, Engineering, Co-op',
  },
  {
    name: 'University of Alberta',
    location: 'Edmonton, AB',
    ranking: '#5 Canada',
    programs: 'AI, Engineering, Energy',
  },
  {
    name: 'McMaster University',
    location: 'Hamilton, ON',
    ranking: '#6 Canada',
    programs: 'Health Sciences, Engineering',
  },
];

const scholarships = [
  {
    name: 'Vanier Canada Graduate Scholarships',
    amount: 'CAD 50,000/year for 3 years',
    eligibility: 'Doctoral students with academic excellence',
    deadline: 'November',
  },
  {
    name: 'Lester B. Pearson Scholarships (UofT)',
    amount: 'Full tuition + living for 4 years',
    eligibility: 'Exceptional international undergraduate students',
    deadline: 'November',
  },
  {
    name: 'University-Specific Scholarships',
    amount: 'CAD 2,000 - Full tuition',
    eligibility: 'Varies by university',
    deadline: 'January - March',
  },
  {
    name: 'Canada Graduate Scholarships (CGS)',
    amount: 'CAD 17,500 - 35,000/year',
    eligibility: "Master's and doctoral students",
    deadline: 'December',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'CAD 70,000 - 100,000',
    mid: 'CAD 110,000 - 160,000',
  },
  {
    role: 'Data Scientist',
    entry: 'CAD 65,000 - 90,000',
    mid: 'CAD 100,000 - 140,000',
  },
  {
    role: 'Product Manager',
    entry: 'CAD 80,000 - 110,000',
    mid: 'CAD 120,000 - 170,000',
  },
  {
    role: 'Financial Analyst',
    entry: 'CAD 55,000 - 75,000',
    mid: 'CAD 85,000 - 120,000',
  },
  {
    role: 'Registered Nurse',
    entry: 'CAD 60,000 - 80,000',
    mid: 'CAD 80,000 - 100,000',
  },
  {
    role: 'Accountant',
    entry: 'CAD 50,000 - 65,000',
    mid: 'CAD 75,000 - 100,000',
  },
];

const faqs = [
  {
    question: 'How long can I stay in Canada after graduation?',
    answer:
      'With the Post-Graduation Work Permit (PGWP), you can stay and work in Canada for up to 3 years after graduation. The duration depends on your program length: 8 months for programs of 8+ months, and up to 3 years for programs of 2+ years.',
  },
  {
    question: 'What is Express Entry and how does it work?',
    answer:
      "Express Entry is Canada's main immigration system using a points-based Comprehensive Ranking System (CRS). Points are awarded for age, education, language skills (English/French), work experience, and Canadian connections. Candidates with the highest scores receive Invitations to Apply (ITA) for PR.",
  },
  {
    question: 'Can I work while studying in Canada?',
    answer:
      'Yes, international students with a valid Study Permit can work up to 20 hours per week during academic sessions and full-time during scheduled breaks like winter and summer holidays. Co-op and internship programs may allow additional work hours.',
  },
  {
    question: 'What are the language requirements for Canadian universities?',
    answer:
      'Most English-speaking universities require IELTS (6.5+ overall) or TOEFL (90+ iBT). French-speaking universities in Quebec may require French proficiency tests like TEF or TCF. Some universities accept Duolingo English Test scores.',
  },
  {
    question: 'How long does it take to get Canadian PR after studying?',
    answer:
      'Many students transition to PR within 2-4 years after graduation. The typical pathway is: Complete studies → Get PGWP → Work 1+ year → Apply via Express Entry or PNP. Canadian education and work experience significantly boost your CRS score.',
  },
];

export default function CanadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-white to-red-600 py-20 text-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 via-red-700/90 to-red-600/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇨🇦</span>
              <span className="font-semibold">Canada</span>
              <Leaf className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Canada
            </h1>
            <p className="mb-8 text-xl text-white/90">
              One of the most immigrant-friendly countries with a clear pathway
              to Permanent Residency. Canada offers world-class education,
              multicultural environment, and excellent post-study work
              opportunities.
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
                  PR Pathway Guide
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
              <p className="text-3xl font-bold text-primary">800K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">
                Universities & Colleges
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">3 Years</p>
              <p className="text-sm text-muted-foreground">Max PGWP Duration</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="mx-auto mb-3 h-10 w-10 text-orange-600" />
              <p className="text-3xl font-bold text-primary">Clear</p>
              <p className="text-sm text-muted-foreground">PR Pathway</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Canada Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Leaf className="h-8 w-8 text-red-600" />
            Why Choose Canada?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'PR Pathway',
                desc: 'Clear immigration pathway through Express Entry and PNP programs',
              },
              {
                title: 'Affordable Education',
                desc: 'Lower tuition than USA/UK with high-quality education',
              },
              {
                title: '3-Year PGWP',
                desc: 'Up to 3 years of post-study work permit without sponsorship',
              },
              {
                title: 'Work While Studying',
                desc: '20 hrs/week during term, full-time during breaks',
              },
              {
                title: 'Multicultural',
                desc: 'Welcoming, diverse society with strong immigrant communities',
              },
              {
                title: 'Quality of Life',
                desc: 'Safe cities, healthcare, and excellent work-life balance',
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
            Immigration Pathways & Work Authorization
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
            Cost of Studying in Canada (CAD)
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
                  <span>MBA</span>
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
                  <span>Toronto</span>
                  <span className="font-semibold">{costs.living.toronto}</span>
                </div>
                <div className="flex justify-between">
                  <span>Vancouver</span>
                  <span className="font-semibold">
                    {costs.living.vancouver}
                  </span>
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
                  <span className="font-semibold">
                    {costs.other.healthInsurance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Study Permit Fee</span>
                  <span className="font-semibold">{costs.other.visaFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Books & Supplies</span>
                  <span className="font-semibold">{costs.other.books}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="flex items-center gap-2 text-red-800 dark:text-red-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> CAD 30,000 - 55,000+ per
              year depending on program and city
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities in Canada
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
            Salary Expectations (CAD)
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
            Useful Tools for Your Canada Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Canadian 4.0 GPA scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your resume for Canadian employers
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate take-home pay in Canada
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
