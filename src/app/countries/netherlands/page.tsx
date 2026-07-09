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
  Bike,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study & Work in Netherlands',
  description:
    'Complete guide to studying in the Netherlands. Learn about English-taught programs, orientation year visa, TU Delft, Erasmus University, costs, and job opportunities.',
  keywords:
    'study in Netherlands, work in Netherlands, Dutch universities, orientation year Netherlands, TU Delft, University of Amsterdam, English programs Netherlands, study abroad Europe',
  openGraph: {
    title: 'Study & Work in Netherlands - Complete Guide',
    description:
      'Study at top Dutch universities with English-taught programs. Complete guide to visas, costs, and careers.',
    type: 'website',
    url: 'https://www.sproutern.com/countries/netherlands',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/countries/netherlands',
  },
};

const visaTypes = [
  {
    name: 'Student Residence Permit',
    description: 'For students enrolled in Dutch higher education',
    duration: 'Duration of study + 3 months',
    workRights: '16 hrs/week or full-time in June-August',
    path: 'Orientation Year → Work Permit → EU Long-term',
  },
  {
    name: 'Orientation Year (Zoekjaar)',
    description: 'Post-graduation permit to find skilled work',
    duration: '1 year after graduation',
    workRights: 'Unlimited work rights',
    path: 'Find highly skilled job → HSM permit',
  },
  {
    name: 'Highly Skilled Migrant (HSM)',
    description: 'Work permit for skilled professionals',
    duration: '5 years, renewable',
    workRights: 'Full work rights, employer-sponsored',
    path: 'Long-term EU residence after 5 years',
  },
  {
    name: 'EU Long-term Residence',
    description: 'Permanent residence after 5 years',
    duration: 'Permanent',
    workRights: 'Unrestricted',
    path: 'Dutch citizenship option',
  },
];

const costs = {
  tuition: {
    euEea: '€2,530/year (statutory fee)',
    nonEU: '€8,000 - €20,000/year',
    mba: '€25,000 - €60,000/year',
  },
  living: {
    amsterdam: '€14,000 - €18,000/year',
    rotterdam: '€12,000 - €15,000/year',
    otherCities: '€10,000 - €13,000/year',
  },
  other: {
    healthInsurance: '€50-120/month',
    visaFee: '€210 (MVV + residence)',
    bike: '€50 - €200 (essential!)',
  },
};

const topUniversities = [
  {
    name: 'TU Delft',
    location: 'Delft',
    ranking: '#1 Netherlands',
    programs: 'Engineering, Architecture, CS',
  },
  {
    name: 'University of Amsterdam',
    location: 'Amsterdam',
    ranking: '#2 Netherlands',
    programs: 'AI, Business, Social Sciences',
  },
  {
    name: 'Erasmus University Rotterdam',
    location: 'Rotterdam',
    ranking: '#3 Netherlands',
    programs: 'Business, Economics, Medicine',
  },
  {
    name: 'Utrecht University',
    location: 'Utrecht',
    ranking: '#4 Netherlands',
    programs: 'Sciences, Humanities, Law',
  },
  {
    name: 'Leiden University',
    location: 'Leiden',
    ranking: '#5 Netherlands',
    programs: 'Law, International Relations',
  },
  {
    name: 'University of Groningen',
    location: 'Groningen',
    ranking: '#6 Netherlands',
    programs: 'Sciences, Arts, Medicine',
  },
  {
    name: 'Wageningen University',
    location: 'Wageningen',
    ranking: '#7 Netherlands',
    programs: 'Agriculture, Food Science, Environment',
  },
  {
    name: 'Eindhoven Uni of Technology',
    location: 'Eindhoven',
    ranking: '#8 Netherlands',
    programs: 'Engineering, Design, Innovation',
  },
];

const scholarships = [
  {
    name: 'Holland Scholarship',
    amount: '€5,000 one-time',
    eligibility: "Non-EEA students for Bachelor's or Master's",
    deadline: 'February 1 - May 1',
  },
  {
    name: 'Erasmus Mundus Joint Masters',
    amount: 'Full tuition + €1,400/month',
    eligibility: 'International students for joint EU programs',
    deadline: 'December-February',
  },
  {
    name: 'Orange Tulip Scholarship',
    amount: 'Varies (partial to full)',
    eligibility: 'Students from select countries including India',
    deadline: 'Varies by university',
  },
  {
    name: 'University Excellence Scholarships',
    amount: '€5,000 - Full tuition',
    eligibility: 'Top academic performers',
    deadline: 'Varies (typically February)',
  },
];

const salaries = [
  {
    role: 'Software Engineer',
    entry: '€40,000 - €55,000',
    mid: '€60,000 - €90,000',
  },
  {
    role: 'Data Scientist',
    entry: '€45,000 - €55,000',
    mid: '€65,000 - €95,000',
  },
  {
    role: 'Business Analyst',
    entry: '€38,000 - €48,000',
    mid: '€55,000 - €75,000',
  },
  {
    role: 'Mechanical Engineer',
    entry: '€40,000 - €50,000',
    mid: '€55,000 - €80,000',
  },
  {
    role: 'Marketing Manager',
    entry: '€35,000 - €45,000',
    mid: '€55,000 - €75,000',
  },
  { role: 'Consultant', entry: '€45,000 - €60,000', mid: '€70,000 - €100,000' },
];

const faqs = [
  {
    question: 'Are programs in Netherlands taught in English?',
    answer:
      'Yes! The Netherlands has 2,100+ programs fully taught in English, making it one of the best non-English speaking countries for international students. Almost everyone speaks English fluently.',
  },
  {
    question: 'What is the Orientation Year (Zoekjaar)?',
    answer:
      'The Orientation Year is a 1-year permit for graduates of Dutch universities (and top-200 global universities) to stay and find skilled employment. No work restrictions during this period.',
  },
  {
    question: 'Do I need to learn Dutch?',
    answer:
      'Not for daily life or most jobs in international companies. However, learning Dutch (A2-B1) significantly improves job prospects in local companies and social integration.',
  },
  {
    question: 'What is the 30% ruling tax benefit?',
    answer:
      'Highly skilled migrants can receive 30% of their salary tax-free for up to 5 years, significantly increasing take-home pay. This makes Netherlands very attractive for international professionals.',
  },
  {
    question: 'How affordable is student life in Netherlands?',
    answer:
      'Budget €1,000-1,500/month total. Student housing is the biggest challenge - apply through university housing early. Bikes are essential and free transport (public bike-sharing available).',
  },
];

export default function NetherlandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-white to-blue-700 py-20 text-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 via-orange-600/90 to-orange-500/90" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <span className="text-3xl">🇳🇱</span>
              <span className="font-semibold">Netherlands</span>
              <Bike className="h-4 w-4" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Study & Work in Netherlands
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Europe's innovation hub with 2,100+ English-taught programs. The
              Netherlands offers excellent post-study work opportunities, high
              English proficiency, and the 30% tax ruling benefit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-white/90"
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
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-orange-500" />
              <p className="text-3xl font-bold text-primary">115K+</p>
              <p className="text-sm text-muted-foreground">
                International Students
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="mx-auto mb-3 h-10 w-10 text-blue-600" />
              <p className="text-3xl font-bold text-primary">2,100+</p>
              <p className="text-sm text-muted-foreground">English Programs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="mx-auto mb-3 h-10 w-10 text-purple-600" />
              <p className="text-3xl font-bold text-primary">1 Year</p>
              <p className="text-sm text-muted-foreground">
                Orientation Year Visa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="mx-auto mb-3 h-10 w-10 text-green-600" />
              <p className="text-3xl font-bold text-primary">30%</p>
              <p className="text-sm text-muted-foreground">Tax-Free Ruling</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Netherlands Section */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Bike className="h-8 w-8 text-orange-500" />
            Why Choose Netherlands?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'English Everywhere',
                desc: '95% English proficiency, 2,100+ English programs',
              },
              {
                title: 'Orientation Year',
                desc: '1-year post-study work visa without sponsorship',
              },
              {
                title: '30% Tax Ruling',
                desc: 'Highly skilled migrants get 30% salary tax-free',
              },
              {
                title: 'Innovation Hub',
                desc: 'Headquarters of ASML, Shell, Philips, Booking.com',
              },
              {
                title: 'Work-Life Balance',
                desc: 'Part-time work culture, 25+ vacation days',
              },
              {
                title: 'EU Gateway',
                desc: 'Easy travel across Europe, central location',
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
            Cost of Studying in Netherlands (EUR)
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-orange-500" />
                  Tuition Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>EU/EEA Students</span>
                  <span className="font-semibold text-green-600">
                    {costs.tuition.euEea}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Non-EU Students</span>
                  <span className="font-semibold">{costs.tuition.nonEU}</span>
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
                  <span>Amsterdam</span>
                  <span className="font-semibold">
                    {costs.living.amsterdam}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Rotterdam</span>
                  <span className="font-semibold">
                    {costs.living.rotterdam}
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
                  <span>Visa Fee</span>
                  <span className="font-semibold">{costs.other.visaFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Bicycle 🚲</span>
                  <span className="font-semibold">{costs.other.bike}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 rounded-lg bg-orange-50 p-4 dark:bg-orange-950">
            <p className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
              <AlertTriangle className="h-5 w-5" />
              <strong>Total Estimated Cost:</strong> €15,000 - €25,000/year for
              non-EU students
            </p>
          </div>
        </section>

        {/* Top Universities */}
        <section className="mb-16">
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <Building2 className="h-8 w-8 text-primary" />
            Top Universities in Netherlands
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
                      variant="outline"
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
        <section className="rounded-2xl bg-gradient-to-r from-orange-500/10 via-white/5 to-blue-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Useful Tools for Your Netherlands Journey
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/gpa-converter"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">GPA Converter</h3>
              <p className="text-sm text-muted-foreground">
                Convert your grades to Dutch 10-point scale
              </p>
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">CV Checker</h3>
              <p className="text-sm text-muted-foreground">
                Optimize your CV for Dutch employers
              </p>
            </Link>
            <Link
              href="/scholarships"
              className="block rounded-lg bg-background p-4 shadow transition-all hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">Scholarships</h3>
              <p className="text-sm text-muted-foreground">
                Find Holland Scholarships and more
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
