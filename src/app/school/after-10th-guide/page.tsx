import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Code,
  Heart,
  Calculator,
  Palette,
  Scale,
  Building,
  FlaskConical,
  Laptop,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Users,
  Globe,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Career Options After 10th Class',
  description:
    'Comprehensive guide to career options after 10th class. Explore Science, Commerce, Arts streams, diploma courses, ITI, polytechnic, and vocational training options in India.',
  keywords:
    'career options after 10th, what to do after 10th, stream selection after 10th, science vs commerce vs arts, diploma after 10th, ITI courses, polytechnic courses, vocational training',
  openGraph: {
    title: 'Career Options After 10th Class - Complete Guide 2025',
    description:
      'Explore all career options after 10th class including streams, diploma courses, ITI, and more.',
    type: 'article',
    url: 'https://www.sproutern.com/school/after-10th-guide',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/school/after-10th-guide',
  },
};

const streams = [
  {
    name: 'Science (PCM)',
    fullName: 'Physics, Chemistry, Mathematics',
    icon: Calculator,
    color: 'bg-blue-500',
    description:
      'For students interested in engineering, technology, architecture, and research.',
    careers: [
      'Engineering (B.Tech/B.E.)',
      'Architecture (B.Arch)',
      'Data Science',
      'Aviation',
      'Merchant Navy',
      'Research Scientist',
    ],
    exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'State CETs'],
    suitedFor: 'Strong in mathematics, logical thinking, problem-solving',
  },
  {
    name: 'Science (PCB)',
    fullName: 'Physics, Chemistry, Biology',
    icon: Heart,
    color: 'bg-green-500',
    description:
      'For students interested in medicine, healthcare, biotechnology, and life sciences.',
    careers: [
      'MBBS/MD (Doctor)',
      'BDS (Dentist)',
      'BAMS/BHMS',
      'Pharmacy (B.Pharm)',
      'Nursing (B.Sc)',
      'Biotechnology',
    ],
    exams: ['NEET UG', 'AIIMS', 'JIPMER', 'State Medical Entrances'],
    suitedFor: 'Interest in biology, healthcare, helping others',
  },
  {
    name: 'Commerce',
    fullName: 'Commerce with/without Maths',
    icon: TrendingUp,
    color: 'bg-amber-500',
    description:
      'For students interested in business, finance, accounting, and management.',
    careers: [
      'Chartered Accountant (CA)',
      'Company Secretary (CS)',
      'MBA',
      'Banking & Finance',
      'Stock Market Analyst',
      'Business Owner',
    ],
    exams: [
      'CA Foundation',
      'CS Foundation',
      'CLAT (for Law)',
      'CAT/XAT (for MBA)',
    ],
    suitedFor: 'Interest in business, numbers, economics, management',
  },
  {
    name: 'Arts/Humanities',
    fullName: 'History, Political Science, Geography, etc.',
    icon: Palette,
    color: 'bg-purple-500',
    description:
      'For students interested in civil services, law, journalism, and creative fields.',
    careers: [
      'Civil Services (IAS/IPS)',
      'Lawyer (LLB)',
      'Journalist',
      'Psychologist',
      'Teacher/Professor',
      'Foreign Service',
    ],
    exams: ['UPSC CSE', 'CLAT', 'Mass Communication Entrances'],
    suitedFor: 'Strong communication, interest in society, reading, writing',
  },
];

const alternativeOptions = [
  {
    name: 'Diploma Courses',
    duration: '3 Years',
    icon: Laptop,
    description:
      'Technical diploma in engineering branches. Leads to lateral entry in B.Tech.',
    examples: [
      'Diploma in Computer Science',
      'Diploma in Mechanical',
      'Diploma in Electronics',
    ],
    pros: [
      'Early technical education',
      'Lateral entry to B.Tech',
      'Industry-ready skills',
    ],
  },
  {
    name: 'ITI (Industrial Training Institute)',
    duration: '1-2 Years',
    icon: Building,
    description:
      'Vocational training for skilled trades. Government and private ITIs available.',
    examples: ['Electrician', 'Fitter', 'Mechanic', 'Welder', 'COPA'],
    pros: [
      'Quick job entry',
      'Government certifications',
      'Apprenticeship opportunities',
    ],
  },
  {
    name: 'Polytechnic',
    duration: '3 Years',
    icon: FlaskConical,
    description:
      'Technical education with practical focus. Diploma with industry exposure.',
    examples: [
      'Civil Engineering',
      'Electrical Engineering',
      'Automobile Engineering',
    ],
    pros: [
      'Affordable education',
      'PSU job eligibility',
      'Direct industry entry',
    ],
  },
  {
    name: 'Vocational Courses',
    duration: '6 Months - 2 Years',
    icon: Briefcase,
    description:
      'Skill-based courses focused on specific trades and professions.',
    examples: [
      'Fashion Design',
      'Hotel Management',
      'Animation',
      'Photography',
    ],
    pros: [
      'Industry-specific skills',
      'Entrepreneurship options',
      'Creative careers',
    ],
  },
];

const faqs = [
  {
    question: 'Which stream should I choose after 10th?',
    answer:
      "Choose based on your interests, not just peer pressure or expected salary. If you love solving problems and math, consider Science PCM. If you're fascinated by biology and healthcare, choose Science PCB. If business and finance interest you, go for Commerce. If you love reading, writing, and understanding society, choose Arts.",
  },
  {
    question: 'Can I change my stream after 11th?',
    answer:
      "While technically possible, changing streams after 11th is challenging and not recommended. You would need to restart from 11th or pursue graduation in a different field. It's better to take time to choose the right stream initially.",
  },
  {
    question: 'Is diploma better than 12th?',
    answer:
      'Both have different purposes. 12th (regular schooling) is needed for most higher education. Diploma provides technical skills and allows lateral entry to B.Tech 2nd year. If you want to enter the workforce quickly with technical skills, diploma is good. For professional degrees (engineering, medicine), 12th is required.',
  },
  {
    question: 'What if I have low marks in 10th?',
    answer:
      "Low marks don't close all doors. You can pursue diploma courses (usually 35-40% cutoff), ITI courses, vocational training, or open schooling (NIOS). Many successful professionals started with average marks. Focus on finding your interests and developing skills.",
  },
  {
    question: 'Can I do both Science and Commerce?',
    answer:
      'Some state boards allow optional subjects from other streams. You can take Commerce subjects as additional subjects while studying Science. However, this increases workload. After 12th, you can pursue courses like B.Com after Science 12th or vice versa.',
  },
  {
    question: 'Is Arts a good career option?',
    answer:
      'Absolutely! Arts leads to diverse careers including Civil Services (IAS/IPS/IFS), Law, Journalism, Psychology, Teaching, Foreign Services, and creative fields. Many successful administrators, lawyers, and media professionals have Arts backgrounds. The key is to excel in your chosen field.',
  },
];

export default function After10thGuidePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <GraduationCap className="h-4 w-4" />
            Complete Career Guide
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            What To Do After 10th Class?
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Your comprehensive guide to choosing the right career path after
            10th. Explore streams, diploma courses, vocational training, and
            discover what suits your interests and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#streams">Explore Streams</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#alternatives">Alternative Options</a>
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
              <p className="font-bold">4 Main Streams</p>
              <p className="text-xs text-muted-foreground">
                Science, Commerce, Arts
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Briefcase className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">100+ Career Options</p>
              <p className="text-xs text-muted-foreground">
                Across all streams
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Target className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Diploma Courses</p>
              <p className="text-xs text-muted-foreground">
                Quick skill development
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Globe className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Global Opportunities</p>
              <p className="text-xs text-muted-foreground">
                Study abroad options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Streams */}
      <section
        id="streams"
        className="container py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" />
            Choose Your Stream
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Main Academic Streams After 10th
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The stream you choose shapes your career options. Understand each
            stream before deciding.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {streams.map((stream, index) => (
            <Card
              key={index}
              className="overflow-hidden"
            >
              <CardHeader className={`${stream.color} text-white`}>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <stream.icon className="h-6 w-6" />
                  {stream.name}
                </CardTitle>
                <p className="text-sm text-white/90">{stream.fullName}</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-sm text-muted-foreground">
                  {stream.description}
                </p>

                <div className="mb-4">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Career Options
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.careers.map((career, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 flex items-center gap-2 font-semibold">
                    <Target className="h-4 w-4 text-primary" />
                    Key Entrance Exams
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stream.exams.join(', ')}
                  </p>
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">
                    <span className="font-semibold">Best suited for: </span>
                    {stream.suitedFor}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alternative Options */}
      <section
        id="alternatives"
        className="container bg-muted/30 py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Lightbulb className="h-4 w-4" />
            Alternative Pathways
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Beyond Traditional Streams
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Not interested in traditional 11-12th? Explore diploma, ITI,
            polytechnic, and vocational courses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {alternativeOptions.map((option, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{option.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Duration: {option.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {option.description}
                </p>
                <div className="mb-3">
                  <p className="text-sm font-semibold">Examples:</p>
                  <p className="text-sm text-muted-foreground">
                    {option.examples.join(', ')}
                  </p>
                </div>
                <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950">
                  <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                    Advantages:
                  </p>
                  <ul className="mt-1 space-y-1">
                    {option.pros.map((pro, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-green-700 dark:text-green-300"
                      >
                        <CheckCircle className="h-3 w-3" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Decision Making Tips */}
      <section className="container py-12">
        <h2 className="mb-8 text-center text-2xl font-bold">
          How to Choose the Right Path?
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {[
            {
              title: 'Follow Your Interests',
              desc: 'Choose subjects you enjoy studying. Forced choices lead to burnout.',
            },
            {
              title: 'Assess Your Strengths',
              desc: 'Are you better at memorizing or problem-solving? Analytical or creative?',
            },
            {
              title: 'Research Career Prospects',
              desc: 'Understand job market trends before committing. Talk to professionals.',
            },
            {
              title: 'Consider Long-term Goals',
              desc: 'Where do you see yourself in 10 years? Work backwards from there.',
            },
            {
              title: 'Talk to Counselors',
              desc: 'School counselors and career guidance experts can provide valuable insights.',
            },
            {
              title: "Don't Follow the Crowd",
              desc: "Just because friends are choosing Science doesn't mean you should too.",
            },
          ].map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border p-4"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </div>
            </div>
          ))}
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
          <h2 className="mb-4 text-2xl font-bold">Ready for the Next Step?</h2>
          <p className="mb-6 text-muted-foreground">
            Also explore our guide for what to do after 12th class
          </p>
          <Button
            size="lg"
            asChild
          >
            <Link href="/school/after-12th-guide">
              Explore After 12th Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
