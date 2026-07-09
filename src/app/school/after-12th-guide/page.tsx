import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Code,
  Heart,
  Calculator,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Globe,
  Building,
  Scale,
  Plane,
  Stethoscope,
  Laptop,
  Palette,
  Microscope,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Career Options After 12th Class for All Streams',
  description:
    'Complete guide to career options after 12th class for Science, Commerce, and Arts students. Explore engineering, medicine, CA, law, design, and more career paths in India.',
  keywords:
    'career options after 12th, what to do after 12th, courses after 12th science, courses after 12th commerce, courses after 12th arts, JEE, NEET, CA, CLAT, MBA, study abroad',
  openGraph: {
    title: 'Career Options After 12th Class - Complete Guide 2025',
    description:
      'Explore 100+ career options after 12th for Science, Commerce, and Arts students.',
    type: 'article',
    url: 'https://www.sproutern.com/school/after-12th-guide',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/school/after-12th-guide',
  },
};

const sciencePCMOptions = [
  {
    name: 'Engineering (B.Tech/B.E.)',
    duration: '4 Years',
    icon: Code,
    description:
      "Bachelor's degree in various engineering branches. India's most popular career choice.",
    entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'State CETs'],
    topColleges: ['IITs', 'NITs', 'BITS Pilani', 'IIITs', 'VIT', 'SRM'],
    salary: '₹4-25 LPA (Entry Level)',
    careers: [
      'Software Engineer',
      'Data Scientist',
      'AI/ML Engineer',
      'Civil Engineer',
      'Mechanical Engineer',
    ],
  },
  {
    name: 'Architecture (B.Arch)',
    duration: '5 Years',
    icon: Building,
    description:
      'Design buildings and spaces. Requires creative and technical skills.',
    entranceExams: ['JEE Main Paper 2', 'NATA'],
    topColleges: ['SPA Delhi', 'IIT Kharagpur', 'CEPT', 'NIT Trichy'],
    salary: '₹3-10 LPA (Entry Level)',
    careers: [
      'Architect',
      'Urban Planner',
      'Interior Designer',
      'Landscape Architect',
    ],
  },
  {
    name: 'Bachelor of Science (B.Sc)',
    duration: '3 Years',
    icon: Microscope,
    description:
      'Pure sciences degree. Opens doors to research, teaching, and specialized fields.',
    entranceExams: ['CUET', 'University-specific tests'],
    topColleges: [
      'St. Stephens',
      'Hindu College',
      'Loyola',
      'Christ University',
    ],
    salary: '₹3-8 LPA (Entry Level)',
    careers: ['Research Scientist', 'Data Analyst', 'Lab Manager', 'Professor'],
  },
  {
    name: 'Aviation & Pilot Training',
    duration: '2-3 Years',
    icon: Plane,
    description:
      'Become a commercial pilot or aviation professional. High investment but rewarding.',
    entranceExams: ['IGRUA', 'NDA (for Air Force)', 'Airline selection tests'],
    topColleges: [
      'IGRUA',
      'Rajiv Gandhi Academy',
      'Indira Gandhi Rashtriya Uran Akademi',
    ],
    salary: '₹5-50+ LPA (Pilot)',
    careers: ['Commercial Pilot', 'Air Traffic Controller', 'Flight Engineer'],
  },
];

const sciencePCBOptions = [
  {
    name: 'MBBS (Medicine)',
    duration: '5.5 Years',
    icon: Stethoscope,
    description:
      'Become a doctor. Most competitive and respected career in India.',
    entranceExams: ['NEET UG (Only exam for MBBS)'],
    topColleges: [
      'AIIMS',
      'CMC Vellore',
      'JIPMER',
      'AFMC',
      'Government Medical Colleges',
    ],
    salary: '₹5-20 LPA (After Internship)',
    careers: ['Doctor', 'Surgeon', 'Specialist', 'Medical Researcher'],
  },
  {
    name: 'BDS (Dentistry)',
    duration: '5 Years',
    icon: Heart,
    description:
      'Bachelor of Dental Surgery. Shorter than MBBS with good career prospects.',
    entranceExams: ['NEET UG'],
    topColleges: ['DCI Approved Colleges', 'Government Dental Colleges'],
    salary: '₹4-12 LPA',
    careers: ['Dentist', 'Orthodontist', 'Oral Surgeon', 'Cosmetic Dentist'],
  },
  {
    name: 'Pharmacy (B.Pharm)',
    duration: '4 Years',
    icon: Microscope,
    description:
      'Study drug development, formulation, and pharmaceutical sciences.',
    entranceExams: ['State Pharmacy Entrances', 'GPAT (for M.Pharm)'],
    topColleges: ['NIPER', 'Jamia Hamdard', 'BITS Pilani', 'ICT Mumbai'],
    salary: '₹3-8 LPA',
    careers: [
      'Pharmacist',
      'Drug Inspector',
      'Clinical Research',
      'Pharma Sales',
    ],
  },
  {
    name: 'Nursing (B.Sc Nursing)',
    duration: '4 Years',
    icon: Heart,
    description:
      'Healthcare profession with global demand. Excellent abroad opportunities.',
    entranceExams: ['AIIMS Nursing', 'State Nursing Entrances'],
    topColleges: ['AIIMS', 'CMC Vellore', 'NIMHANS', 'State Nursing Colleges'],
    salary: '₹3-8 LPA (India), Higher abroad',
    careers: [
      'Staff Nurse',
      'ICU Nurse',
      'Nurse Educator',
      'International Nursing',
    ],
  },
];

const commerceOptions = [
  {
    name: 'Chartered Accountancy (CA)',
    duration: '3-5 Years',
    icon: Calculator,
    description:
      'Most prestigious commerce career. Audit, taxation, and financial expertise.',
    entranceExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
    topColleges: ['ICAI (only authority)', 'Articleship with firms'],
    salary: '₹7-20 LPA (After CA)',
    careers: [
      'Chartered Accountant',
      'Tax Consultant',
      'CFO',
      'Partner at Big 4',
    ],
  },
  {
    name: 'Company Secretary (CS)',
    duration: '3-4 Years',
    icon: Scale,
    description:
      'Corporate compliance, governance, and legal affairs specialist.',
    entranceExams: ['CSEET', 'CS Executive', 'CS Professional'],
    topColleges: ['ICSI (only authority)'],
    salary: '₹5-15 LPA',
    careers: ['Company Secretary', 'Compliance Officer', 'Legal Advisor'],
  },
  {
    name: 'B.Com + CFA/CPA',
    duration: '3-4 Years',
    icon: TrendingUp,
    description:
      'Commerce graduation with international certifications. Finance career path.',
    entranceExams: ['CUET', 'DU Entrance', 'CFA Levels'],
    topColleges: ['SRCC', 'St. Xaviers', 'Christ University', 'Symbiosis'],
    salary: '₹5-25 LPA (with CFA)',
    careers: ['Investment Banker', 'Equity Analyst', 'Portfolio Manager'],
  },
  {
    name: 'BBA + MBA',
    duration: '3 + 2 Years',
    icon: Briefcase,
    description:
      "Bachelor's in Business Administration followed by MBA. Management track.",
    entranceExams: ['IPM (IIMs)', 'SET', 'CAT/XAT (for MBA)'],
    topColleges: ['IIM Indore (IPM)', 'NMIMS', 'Christ', 'Symbiosis'],
    salary: '₹6-20 LPA (Post MBA)',
    careers: [
      'Management Consultant',
      'Business Analyst',
      'Entrepreneur',
      'Marketing Manager',
    ],
  },
];

const artsOptions = [
  {
    name: 'Law (BA LLB / LLB)',
    duration: '5 Years (Integrated) / 3 Years',
    icon: Scale,
    description:
      'Become a lawyer. Integrated programs after 12th or LLB after graduation.',
    entranceExams: ['CLAT', 'AILET', 'LSAT India', 'DU LLB'],
    topColleges: [
      'NLUs',
      'NLSIU Bangalore',
      'NALSAR',
      'NLU Delhi',
      'Faculty of Law DU',
    ],
    salary: '₹5-25 LPA (Top firms)',
    careers: ['Advocate', 'Corporate Lawyer', 'Judge', 'Legal Consultant'],
  },
  {
    name: 'Civil Services (UPSC)',
    duration: 'After Graduation',
    icon: Building,
    description:
      "IAS, IPS, IFS, and more. India's most prestigious administrative career.",
    entranceExams: ['UPSC CSE (After graduation)'],
    topColleges: ['Any graduation', 'LBSNAA (Training after selection)'],
    salary: '₹6-8 LPA + Perks + Power',
    careers: ['IAS Officer', 'IPS Officer', 'IFS Officer', 'IRS Officer'],
  },
  {
    name: 'Journalism & Mass Communication',
    duration: '3 Years',
    icon: Users,
    description: 'Media, journalism, PR, and communication careers.',
    entranceExams: ['IIMC', 'XIC', 'ACJ', 'Symbiosis'],
    topColleges: ['IIMC', 'ACJ Chennai', 'Symbiosis', 'XIC Mumbai'],
    salary: '₹3-10 LPA',
    careers: ['Journalist', 'News Anchor', 'PR Manager', 'Content Creator'],
  },
  {
    name: 'Design (B.Des)',
    duration: '4 Years',
    icon: Palette,
    description:
      'Product, fashion, graphic, UX/UI design. Creative and lucrative field.',
    entranceExams: ['UCEED', 'NID DAT', 'NIFT', 'CEED'],
    topColleges: ['NID', 'NIFT', 'IIT IDC', 'MIT Institute of Design'],
    salary: '₹4-15 LPA',
    careers: [
      'UX Designer',
      'Product Designer',
      'Fashion Designer',
      'Graphic Designer',
    ],
  },
];

const globalOptions = [
  {
    country: 'USA',
    programs: 'Undergraduate degrees (4-year)',
    exams: 'SAT/ACT, TOEFL/IELTS',
    cost: '$30k-80k/year',
    pros: 'Top universities, OPT work visa, diverse programs',
  },
  {
    country: 'UK',
    programs: '3-year undergraduate degrees',
    exams: 'UCAS, IELTS',
    cost: '£15k-35k/year',
    pros: 'Shorter duration, graduate route visa, prestigious universities',
  },
  {
    country: 'Canada',
    programs: '4-year degrees, Co-op programs',
    exams: 'SAT (some), IELTS/TOEFL',
    cost: 'CAD 20k-50k/year',
    pros: 'PR pathway, work while studying, diverse communities',
  },
  {
    country: 'Germany',
    programs: 'Free public universities',
    exams: 'TestAS, German language (some programs)',
    cost: 'Minimal tuition, €10k/year living',
    pros: 'Free education, engineering excellence, EU access',
  },
  {
    country: 'Australia',
    programs: '3-year degrees',
    exams: 'IELTS, some require SAT',
    cost: 'AUD 25k-45k/year',
    pros: 'Post-study work rights, quality of life, research opportunities',
  },
];

const faqs = [
  {
    question: 'Can I study medicine abroad after 12th?',
    answer:
      'Yes! Many students study MBBS in Russia, Ukraine, China, Philippines, and other countries. Costs are lower, and NEET qualification is required. After returning, you must clear FMGE (Foreign Medical Graduate Exam) to practice in India. Some countries like UK, USA, and Australia have different pathways.',
  },
  {
    question: 'Is B.Tech better than B.Sc?',
    answer:
      'They serve different purposes. B.Tech is professional training for engineering jobs with higher starting salaries. B.Sc is for those interested in pure sciences, research, or academia. B.Sc + M.Sc can lead to research careers. Choose based on your interest, not just salary.',
  },
  {
    question: 'Can I do MBA directly after 12th?',
    answer:
      "Integrated programs like BBA+MBA (5 years) or IIM IPM (5 years) allow MBA-level education from 12th. For regular MBA (CAT), you need a graduation degree. Integrated programs are good if you're sure about management.",
  },
  {
    question: 'What are the highest-paying careers after 12th?',
    answer:
      'High-paying careers include: Engineering (IITs) → ₹15-50 LPA, Medicine (Specialists) → ₹20-50 LPA, CA/CS → ₹10-25 LPA, Law (Top NLUs) → ₹15-30 LPA, Design (NID/NIFT) → ₹8-20 LPA, Aviation (Pilots) → ₹30-50+ LPA. However, salary depends on skills, college, and experience.',
  },
  {
    question: 'Is a gap year advisable for competitive exams?',
    answer:
      "A gap year (drop year) can be beneficial if you're serious about JEE/NEET and need focused preparation. Many IIT and AIIMS toppers took drop years. However, have a backup plan and consider partial drops (attempting exams while studying).",
  },
  {
    question: 'Can Arts students do engineering?',
    answer:
      'Generally no, as engineering requires Physics and Mathematics in 12th. However, some private universities may have bridge courses. Arts students can explore BCA (for IT), Design, Architecture (requires some math), or other interdisciplinary programs.',
  },
];

export default function After12thGuidePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <GraduationCap className="h-4 w-4" />
            Complete Career Guide 2025
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What To Do After 12th Class?
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Your comprehensive guide to 100+ career options after 12th. Whether
            you're from Science, Commerce, or Arts background, discover the
            perfect career path for your future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#science">Science Options</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#commerce">Commerce Options</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#arts">Arts Options</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#abroad">Study Abroad</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">100+ Courses</p>
              <p className="text-xs text-muted-foreground">
                UG programs available
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Briefcase className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">50+ Exams</p>
              <p className="text-xs text-muted-foreground">Entrance tests</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Globe className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">20+ Countries</p>
              <p className="text-xs text-muted-foreground">
                Study abroad options
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Target className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Salary ₹3-50 LPA</p>
              <p className="text-xs text-muted-foreground">
                Based on career choice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science PCM Section */}
      <section
        id="science"
        className="container py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Calculator className="h-4 w-4" />
            Science (PCM) Options
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Career Options for PCM Students
          </h2>
          <p className="text-muted-foreground">
            Physics, Chemistry, Mathematics opens doors to engineering,
            technology, and more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sciencePCMOptions.map((option, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                    <option.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: {option.duration}
                    </p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {option.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Exams:</span>{' '}
                    {option.entranceExams.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold">Top Colleges:</span>{' '}
                    {option.topColleges.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">
                      Salary:
                    </span>{' '}
                    {option.salary}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {option.careers.map((career, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-muted px-2 py-1 text-xs"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Science PCB Section */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
            <Heart className="h-4 w-4" />
            Science (PCB) Options
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Career Options for PCB Students
          </h2>
          <p className="text-muted-foreground">
            Physics, Chemistry, Biology leads to medicine, healthcare, and life
            sciences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sciencePCBOptions.map((option, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <option.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: {option.duration}
                    </p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {option.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Exams:</span>{' '}
                    {option.entranceExams.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold">Top Colleges:</span>{' '}
                    {option.topColleges.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">
                      Salary:
                    </span>{' '}
                    {option.salary}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Commerce Section */}
      <section
        id="commerce"
        className="container py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
            <TrendingUp className="h-4 w-4" />
            Commerce Options
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Career Options for Commerce Students
          </h2>
          <p className="text-muted-foreground">
            Accounting, business, finance, and entrepreneurship pathways.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {commerceOptions.map((option, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
                    <option.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: {option.duration}
                    </p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {option.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Exams:</span>{' '}
                    {option.entranceExams.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold">Top Colleges:</span>{' '}
                    {option.topColleges.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">
                      Salary:
                    </span>{' '}
                    {option.salary}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Arts Section */}
      <section
        id="arts"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            <Palette className="h-4 w-4" />
            Arts/Humanities Options
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Career Options for Arts Students
          </h2>
          <p className="text-muted-foreground">
            Law, civil services, journalism, design, and creative fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {artsOptions.map((option, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                    <option.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Duration: {option.duration}
                    </p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {option.description}
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Exams:</span>{' '}
                    {option.entranceExams.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold">Top Colleges:</span>{' '}
                    {option.topColleges.join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold text-green-600">
                      Salary:
                    </span>{' '}
                    {option.salary}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Abroad Section */}
      <section
        id="abroad"
        className="container py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Globe className="h-4 w-4" />
            Study Abroad
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            International Education Options
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore undergraduate programs in top destinations worldwide.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {globalOptions.map((option, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">{option.country}</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold">Programs:</span>{' '}
                    {option.programs}
                  </p>
                  <p>
                    <span className="font-semibold">Exams:</span> {option.exams}
                  </p>
                  <p>
                    <span className="font-semibold">Cost:</span> {option.cost}
                  </p>
                  <p className="text-primary">{option.pros}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            asChild
          >
            <Link href="/global-career-guide">
              <Globe className="mr-2 h-4 w-4" />
              Explore Complete Global Career Guide
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section className="container bg-muted/30 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <div className="mx-auto max-w-2xl rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Need More Guidance?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore our scholarships, career tools, and resources
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/scholarships">
                <GraduationCap className="mr-2 h-4 w-4" />
                Explore Scholarships
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/tools">
                <Lightbulb className="mr-2 h-4 w-4" />
                Career Tools
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
