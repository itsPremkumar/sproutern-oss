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
  Sun,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Australia',
  description:
    'Complete guide to studying and working in Australia. Learn about student visa (Subclass 500), post-study work visa, Group of Eight universities, costs, scholarships, and PR pathways.',
  keywords:
    'study in Australia, work in Australia, Australian student visa, post-study work visa Australia, Group of Eight universities, Australia PR, international students Australia, study abroad Australia',
  openGraph: {
    title:
      'Study & Work in Australia - Complete Guide for International Students',
    description:
      'Everything you need to know about studying and working in Australia as an international student.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/australia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study & Work in Australia 2025',
    description:
      'Complete guide to Australian universities, visas, and career opportunities.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/australia',
  },
};

const visaTypes = [
  {
    name: 'Student Visa (Subclass 500)',
    description: 'Primary visa for international students in Australia',
    duration: 'Duration of course + 2-3 months',
    workRights: '48 hrs/fortnight during term, unlimited during breaks',
    path: 'Post-Study Work Visa → Skilled Migration → PR',
  },
  {
    name: 'Post-Study Work Visa (Subclass 485)',
    description: 'Temporary Graduate visa for recent graduates',
    duration: '2-4 years (based on qualification & location)',
    workRights: 'Unlimited work rights',
    path: 'Gain skilled work experience for PR',
  },
  {
    name: 'Skilled Independent Visa (Subclass 189)',
    description: 'Points-based permanent residence visa',
    duration: 'Permanent',
    workRights: 'Full work rights',
    path: 'Direct PR without state sponsorship',
  },
  {
    name: 'Skilled Nominated Visa (Subclass 190)',
    description: 'State-sponsored permanent residence',
    duration: 'Permanent',
    workRights: 'Full work rights',
    path: 'State nomination adds 5 points',
  },
];

const costs = {
  tuition: {
    undergraduate: 'AUD 20,000 - 45,000/year',
    postgraduate: 'AUD 22,000 - 50,000/year',
    mba: 'AUD 35,000 - 90,000/year',
  },
  living: {
    sydney: 'AUD 25,000 - 35,000/year',
    melbourne: 'AUD 22,000 - 30,000/year',
    otherCities: 'AUD 18,000 - 25,000/year',
  },
  other: {
    healthCover: 'AUD 500 - 700/year (OSHC mandatory)',
    visaFee: 'AUD 710 (Subclass 500)',
    books: 'AUD 500 - 1,000/year',
  },
};

const topUniversities = [
  {
    name: 'University of Melbourne',
    location: 'Melbourne, VIC',
    ranking: '#1 Australia',
    programs: 'Medicine, Law, Business',
    group: 'Go8',
  },
  {
    name: 'University of Sydney',
    location: 'Sydney, NSW',
    ranking: '#2 Australia',
    programs: 'Engineering, Arts, Health',
    group: 'Go8',
  },
  {
    name: 'UNSW Sydney',
    location: 'Sydney, NSW',
    ranking: '#3 Australia',
    programs: 'Engineering, Business, Law',
    group: 'Go8',
  },
  {
    name: 'Australian National University',
    location: 'Canberra, ACT',
    ranking: '#4 Australia',
    programs: 'Politics, Sciences, Law',
    group: 'Go8',
  },
  {
    name: 'Monash University',
    location: 'Melbourne, VIC',
    ranking: '#5 Australia',
    programs: 'Pharmacy, Engineering, IT',
    group: 'Go8',
  },
  {
    name: 'University of Queensland',
    location: 'Brisbane, QLD',
    ranking: '#6 Australia',
    programs: 'Biotech, Mining, Agriculture',
    group: 'Go8',
  },
  {
    name: 'University of Western Australia',
    location: 'Perth, WA',
    ranking: '#7 Australia',
    programs: 'Mining, Marine Science',
    group: 'Go8',
  },
  {
    name: 'University of Adelaide',
    location: 'Adelaide, SA',
    ranking: '#8 Australia',
    programs: 'Wine, Engineering, Health',
    group: 'Go8',
  },
];

const scholarships = [
  {
    name: 'Australia Awards Scholarships',
    amount: 'Full funding (tuition, living, travel)',
    eligibility: 'Students from eligible developing countries',
    deadline: 'April-May',
  },
  {
    name: 'Destination Australia Scholarships',
    amount: 'AUD 15,000/year',
    eligibility: 'Students studying in regional Australia',
    deadline: 'Varies by institution',
  },
  {
    name: 'Research Training Program (RTP)',
    amount: 'Full tuition + AUD 28,000+ stipend',
    eligibility: 'Research degree students (Masters/PhD)',
    deadline: 'Varies by university',
  },
  {
    name: 'University-Specific Scholarships',
    amount: 'AUD 5,000 - 50,000',
    eligibility: 'Based on academic merit',
    deadline: 'Varies',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: 'AUD 70,000 - 100,000',
    mid: 'AUD 120,000 - 180,000',
  },
  {
    role: 'Data Scientist',
    entry: 'AUD 75,000 - 95,000',
    mid: 'AUD 110,000 - 160,000',
  },
  {
    role: 'Registered Nurse',
    entry: 'AUD 65,000 - 80,000',
    mid: 'AUD 85,000 - 110,000',
  },
  {
    role: 'Civil Engineer',
    entry: 'AUD 65,000 - 85,000',
    mid: 'AUD 100,000 - 140,000',
  },
  {
    role: 'Accountant',
    entry: 'AUD 55,000 - 70,000',
    mid: 'AUD 85,000 - 120,000',
  },
  {
    role: 'Marketing Manager',
    entry: 'AUD 60,000 - 80,000',
    mid: 'AUD 100,000 - 150,000',
  },
];

const faqs = [
  {
    question: 'How long can I stay in Australia after graduation?',
    answer:
      "With the Temporary Graduate Visa (Subclass 485), you can stay 2-4 years depending on your qualification. Bachelor's: 2 years, Master's: 3 years, PhD: 4 years. Studying in regional Australia adds extra years.",
  },
  {
    question: 'What is OSHC and is it mandatory?',
    answer:
      'Overseas Student Health Cover (OSHC) is mandatory health insurance for international students. It costs AUD 500-700/year and covers medical expenses. Providers include Medibank, Allianz, BUPA, and NIB.',
  },
  {
    question: 'Can I work while studying in Australia?',
    answer:
      'Yes! International students can work up to 48 hours per fortnight (2 weeks) during term and unlimited hours during scheduled breaks. Minimum wage is AUD 23.23/hour (2024).',
  },
  {
    question: 'What is the Group of Eight (Go8)?',
    answer:
      "The Group of Eight is a coalition of Australia's leading research universities: Melbourne, Sydney, UNSW, ANU, Monash, Queensland, Western Australia, and Adelaide. They're similar to the Ivy League or Russell Group.",
  },
  {
    question: 'How can I get PR after studying in Australia?',
    answer:
      'Common pathways: 1) Post-Study Work Visa → Skills Assessment → Points-based visa (189/190). Australian education adds 5-20 points. Regional study and work add bonus points. Total points needed: 65+.',
  },
  {
    question: 'What are the benefits of studying in regional Australia?',
    answer:
      'Regional study offers: Lower living costs, extra 1-2 years on post-study visa, 5 extra PR points, Destination Australia scholarships (AUD 15,000/year), and less competition for jobs.',
  },
];

export default function AustraliaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-yellow-500 py-20 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇦🇺</span>
              <span className="font-semibold">Australia</span>
              <Sun className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Australia
            </h1>
            <p className="mb-8 text-xl text-white/90">
              World-class education with excellent post-study work rights.
              Australia offers high quality of life, strong job market, and
              clear pathways to permanent residence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-white/90"
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
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">750K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">43</p>
              <p className="text-sm text-muted-foreground">Universities</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">2-4 Years</p>
              <p className="text-sm text-muted-foreground">
                Post-Study Work Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Sun className="mx-auto mb-3 h-10 w-10 text-yellow-500" />
              <p className="text-3xl font-bold text-primary">Top 10</p>
              <p className="text-sm text-muted-foreground">Quality of Life</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Australia Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Sun className="h-8 w-8 text-yellow-500" />
            Why Choose Australia?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Work Rights',
                desc: '48 hrs/fortnight work allowed during studies',
              },
              {
                title: 'Post-Study Visa',
                desc: '2-4 years to work after graduation without sponsorship',
              },
              {
                title: 'PR Pathway',
                desc: 'Clear points-based immigration system',
              },
              {
                title: 'High Wages',
                desc: 'AUD 23.23/hr minimum wage, one of highest globally',
              },
              {
                title: 'Quality of Life',
                desc: 'Safe cities, great weather, multicultural society',
              },
              {
                title: 'Regional Benefits',
                desc: 'Extra visa years and PR points for regional study',
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
            Visa Types & PR Pathways
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
            Cost of Studying in Australia (AUD)
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
                  <span>Sydney</span>
                  <span className="font-semibold">{costs.living.sydney}</span>
                </div>
                <div className="flex justify-between">
                  <span>Melbourne</span>
                  <span className="font-semibold">
                    {costs.living.melbourne}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Regional Cities</span>
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
                  <span>OSHC (Health)</span>
                  <span className="font-semibold">
                    {costs.other.healthCover}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Visa Fee</span>
                  <span className="font-semibold">{costs.other.visaFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Books & Supplies</span>
                  <span className="font-semibold">{costs.other.books}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> AUD 45,000 - 75,000+ per
              year depending on course and city
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Group of Eight (Go8) Universities
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                      {uni.group}
                    </Badge>
                  </div>
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
            Salary Expectations (AUD)
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
        <section className="rounded-2xl bg-gradient-to-r from-blue-600/10 via-yellow-500/10 to-blue-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Australia Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Australian WAM/GPA
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Resume Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your resume for Australian employers
              </p>
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Salary Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Calculate take-home pay in Australia
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
