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
  Home,
  Heart,
  Award,
  TrendingUp,
  AlertTriangle,
  Wine,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in France 2025 | Affordable Education Guide',
  description:
    'Complete guide to studying in France. Low tuition fees, post-study work visa, top business schools, and engineering grandes écoles. Learn about Campus France, costs, and careers.',
  keywords:
    'study in France, work in France, French universities, Campus France, grandes écoles, HEC Paris, study abroad France, post-study visa France, tuition fees France',
  openGraph: {
    title: 'Study & Work in France - Affordable Education Guide',
    description:
      'Study at world-class French universities with low tuition fees. Complete guide to visas, costs, and careers.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/countries/france',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/countries/france',
  },
};

const visaTypes = [
  {
    name: 'Student Visa (VLS-TS)',
    description: 'Long-stay student visa validated as residence permit',
    duration: 'Duration of study (renewable annually)',
    workRights: '964 hrs/year (~20 hrs/week)',
    path: 'Post-Study Visa → Talent Passport → Long-term',
  },
  {
    name: 'Post-Study Visa (APS)',
    description: 'Autorisation Provisoire de Séjour for job search',
    duration: "1 year after Master's, 2 years after PhD",
    workRights: 'Unlimited work rights',
    path: 'Find job → Change status → Talent Passport',
  },
  {
    name: 'Talent Passport',
    description: 'Multi-year visa for skilled workers',
    duration: '4 years, renewable',
    workRights: 'Full work rights',
    path: 'Long-term residence after 5 years',
  },
  {
    name: 'Long-term EU Residence',
    description: 'Permanent residence after 5 years',
    duration: 'Permanent',
    workRights: 'Unrestricted',
    path: 'French citizenship option after 5 years',
  },
];

const costs = {
  tuition: {
    publicEU: '€170 - €380/year (License/Master)',
    publicNonEU: '€2,770 - €3,770/year',
    grandesEcoles: '€10,000 - €50,000/year',
  },
  living: {
    paris: '€12,000 - €18,000/year',
    lyon: '€10,000 - €14,000/year',
    otherCities: '€8,000 - €12,000/year',
  },
  other: {
    healthInsurance: '€20-50/month (CVEC: €100/year)',
    visaFee: '€99',
    housing: 'CAF subsidy available (€100-300/month)',
  },
};

const topUniversities = [
  {
    name: 'HEC Paris',
    location: 'Paris',
    ranking: '#1 Business School',
    programs: 'MBA, Management, Finance',
    type: 'Grande École',
  },
  {
    name: 'École Polytechnique',
    location: 'Paris',
    ranking: '#1 Engineering',
    programs: 'Engineering, Sciences, Math',
    type: 'Grande École',
  },
  {
    name: 'Sciences Po',
    location: 'Paris',
    ranking: 'Top Political Science',
    programs: 'Political Science, IR, Economics',
    type: 'Grande École',
  },
  {
    name: 'INSEAD',
    location: 'Fontainebleau',
    ranking: '#1 MBA globally',
    programs: 'MBA, Executive Education',
    type: 'Business School',
  },
  {
    name: 'Paris-Saclay University',
    location: 'Paris',
    ranking: '#1 France (QS)',
    programs: 'Sciences, Engineering, Medicine',
    type: 'Public',
  },
  {
    name: 'Sorbonne University',
    location: 'Paris',
    ranking: 'Top 50 globally',
    programs: 'Arts, Sciences, Medicine',
    type: 'Public',
  },
  {
    name: 'ESSEC Business School',
    location: 'Paris',
    ranking: 'Top 10 MBA Europe',
    programs: 'Business, Management',
    type: 'Grande École',
  },
  {
    name: 'CentraleSupélec',
    location: 'Paris',
    ranking: 'Top 3 Engineering',
    programs: 'Engineering, AI, Data Science',
    type: 'Grande École',
  },
];

const scholarships = [
  {
    name: 'Eiffel Excellence Scholarship',
    amount: '€1,181/month (Master) + travel + housing',
    eligibility: 'Non-French students for Master/PhD',
    deadline: 'January (via institution)',
  },
  {
    name: 'Campus France Scholarships',
    amount: 'Varies by program',
    eligibility: 'Based on country of origin',
    deadline: 'Varies',
  },
  {
    name: 'Erasmus+ (for EU students)',
    amount: '€250 - €700/month',
    eligibility: 'EU students for exchange',
    deadline: 'Varies by home university',
  },
  {
    name: 'Regional Scholarships',
    amount: '€200 - €600/month',
    eligibility: 'Based on region of study',
    deadline: 'September',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: '€38,000 - €50,000',
    mid: '€55,000 - €80,000',
  },
  {
    role: 'Data Scientist',
    entry: '€40,000 - €50,000',
    mid: '€55,000 - €85,000',
  },
  { role: 'Consultant', entry: '€42,000 - €55,000', mid: '€65,000 - €100,000' },
  {
    role: 'Financial Analyst',
    entry: '€38,000 - €48,000',
    mid: '€55,000 - €80,000',
  },
  {
    role: 'Marketing Manager',
    entry: '€35,000 - €45,000',
    mid: '€50,000 - €70,000',
  },
  {
    role: 'Engineer (Industry)',
    entry: '€38,000 - €48,000',
    mid: '€55,000 - €80,000',
  },
];

const faqs = [
  {
    question: 'How affordable is studying in France?',
    answer:
      'France offers some of the most affordable higher education in the developed world. Public university fees are €170-380/year for EU students and €2,770-3,770/year for non-EU. Plus, students get access to subsidized housing (CAF), cheap transport, and student discounts.',
  },
  {
    question: 'What is Campus France?',
    answer:
      'Campus France is the official agency for French higher education promotion. Most non-EU students must apply through the "Études en France" portal on Campus France. They help with university selection, application, and visa process.',
  },
  {
    question: 'Do I need to speak French to study in France?',
    answer:
      "Not necessarily. Over 1,500 programs are taught entirely in English, especially at business schools and for Master's programs. However, learning French (A2-B1) significantly improves daily life and job prospects.",
  },
  {
    question: 'What is a Grande École?',
    answer:
      "Grandes Écoles are prestigious French institutions specializing in business, engineering, or political science. They're highly selective, offer excellent career prospects, but have higher tuition than public universities. Examples: HEC, Polytechnique, Sciences Po.",
  },
  {
    question: 'How long can I stay after graduation?',
    answer:
      "France offers a post-study visa (APS) for 1 year after Master's and 2 years after PhD, allowing you to work while searching for a job. Once employed, you can switch to a Talent Passport valid for 4 years.",
  },
  {
    question: 'What is CAF housing subsidy?',
    answer:
      "CAF (Caisse d'Allocations Familiales) provides housing benefits to students in France, typically €100-300/month depending on rent and location. All students, including international students, are eligible. Apply online after arrival.",
  },
];

export default function FrancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-white to-red-600 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-blue-700/90 to-blue-800/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇫🇷</span>
              <span className="font-semibold">France</span>
              <Wine className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in France
            </h1>
            <p className="mb-8 text-xl text-white/90">
              World-class education at affordable prices. France offers
              prestigious Grandes Écoles, low tuition at public universities,
              and excellent post-study work opportunities.
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
                  Eiffel Scholarship
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
              <Euro className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">€170</p>
              <p className="text-sm text-muted-foreground">
                Min Tuition (Public)
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-red-600" />
              <p className="text-3xl font-bold text-primary">370K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">1-2 Years</p>
              <p className="text-sm text-muted-foreground">Post-Study Visa</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building2 className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">1,500+</p>
              <p className="text-sm text-muted-foreground">English Programs</p>
            </CardContent>
          </Card>
        </div>

        {/* Why France Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Wine className="h-8 w-8 text-red-600" />
            Why Choose France?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Affordable Tuition',
                desc: 'Public universities from €170-380/year for EU, €2,770 for non-EU',
              },
              {
                title: 'CAF Housing Subsidy',
                desc: '€100-300/month housing benefit for all students',
              },
              {
                title: 'Top Business Schools',
                desc: "HEC, INSEAD, ESSEC - among world's best MBAs",
              },
              {
                title: 'Post-Study Work',
                desc: '1-2 year visa to find work after graduation',
              },
              {
                title: 'Student Discounts',
                desc: 'Up to 50% off transport, museums, restaurants',
              },
              {
                title: 'EU Gateway',
                desc: 'Schengen area access, easy Europe travel',
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
            Cost of Studying in France (EUR)
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
                  <span>Public (EU)</span>
                  <span className="font-semibold text-green-600">
                    {costs.tuition.publicEU}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Public (Non-EU)</span>
                  <span className="font-semibold">
                    {costs.tuition.publicNonEU}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Grandes Écoles</span>
                  <span className="font-semibold">
                    {costs.tuition.grandesEcoles}
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
                  <span>Paris</span>
                  <span className="font-semibold">{costs.living.paris}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lyon</span>
                  <span className="font-semibold">{costs.living.lyon}</span>
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
                  Other Costs & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Health (CVEC)</span>
                  <span className="font-semibold">
                    {costs.other.healthInsurance}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Visa Fee</span>
                  <span className="font-semibold">{costs.other.visaFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>CAF Subsidy</span>
                  <span className="font-semibold text-green-600">
                    {costs.other.housing}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> €10,000 - €18,000/year
              (after CAF subsidy)
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities & Grandes Écoles
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
                      variant={
                        uni.type === 'Grande École' ? 'default' : 'outline'
                      }
                      className="text-xs"
                    >
                      {uni.type}
                    </Badge>
                  </div>
                  <p className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {uni.location}
                  </p>
                  <p className="mb-1 text-xs text-primary">{uni.ranking}</p>
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
        <section className="rounded-2xl bg-gradient-to-r from-blue-600/10 via-white/5 to-red-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your France Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to French 20-point scale
              </p>
            </Link>
            <Link
              href="/tools/cover-letter-generator"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Motivation Letter</h3>
              <p className="text-sm text-muted-foreground">
                Create a compelling lettre de motivation
              </p>
            </Link>
            <Link
              href="/scholarships"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Scholarships</h3>
              <p className="text-sm text-muted-foreground">
                Find Eiffel and other French scholarships
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
