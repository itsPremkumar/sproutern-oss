import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Globe,
  Clock,
  DollarSign,
  Briefcase,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Study Abroad for School Students | Gap Year Programs',
  description:
    'Study abroad options for school students - exchange programs, gap year, foundation courses, and early admission pathways.',
  keywords:
    'study abroad school students, gap year programs, exchange programs India, foundation courses abroad',
};

const programs = [
  {
    name: 'Exchange Programs',
    duration: '6 months - 1 year',
    cost: '₹5-15 lakhs',
    description: 'AFS, YFU, Rotary - study at high school abroad',
    countries: 'USA, Germany, Japan, Brazil',
  },
  {
    name: 'Gap Year Programs',
    duration: '1 year',
    cost: '₹10-25 lakhs',
    description: 'Structured year of learning and travel',
    countries: 'UK, USA, Australia',
  },
  {
    name: 'Foundation Courses',
    duration: '1 year',
    cost: '₹15-30 lakhs',
    description: 'Pathway to top universities after 12th',
    countries: 'UK, Australia, Netherlands',
  },
  {
    name: 'Summer Programs',
    duration: '2-8 weeks',
    cost: '₹2-10 lakhs',
    description: 'Academic exposure during summer break',
    countries: 'USA, UK, Singapore',
  },
  {
    name: 'Language Programs',
    duration: '3-12 months',
    cost: '₹3-8 lakhs',
    description: 'Learn German, French, Japanese',
    countries: 'Germany, France, Japan',
  },
];

const benefits = [
  'Global exposure and cultural awareness',
  'Language skills development',
  'Independence and self-reliance',
  'Better college applications',
  'International network building',
  'Personal growth and maturity',
];

const howToApply = [
  {
    step: 1,
    title: 'Research Programs',
    desc: 'Start 12-18 months before intended start date',
  },
  {
    step: 2,
    title: 'Check Eligibility',
    desc: 'Age requirements, academic prerequisites, language tests',
  },
  {
    step: 3,
    title: 'Prepare Documents',
    desc: 'Transcripts, passport, essays, recommendations',
  },
  {
    step: 4,
    title: 'Apply for Programs',
    desc: 'Submit applications with fees and requirements',
  },
  {
    step: 5,
    title: 'Visa Process',
    desc: 'Apply for student visa after acceptance',
  },
  {
    step: 6,
    title: 'Pre-Departure',
    desc: 'Health checkups, insurance, travel booking',
  },
];

const scholarships = [
  {
    name: 'AFS Scholarship',
    coverage: 'Partial to Full',
    eligibility: 'Merit and need-based',
  },
  {
    name: 'YFU Scholarship',
    coverage: '50-100%',
    eligibility: 'Academic excellence',
  },
  {
    name: 'Rotary Youth Exchange',
    coverage: 'Program fees',
    eligibility: 'Community service',
  },
  {
    name: 'UWC Scholarship',
    coverage: 'Full',
    eligibility: 'Ages 16-18, highly competitive',
  },
];

export default function StudyAbroadSchoolPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Globe className="mr-1 h-3 w-3" />
            International Education
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Study Abroad for School Students
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Explore international opportunities before college.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Globe className="h-6 w-6" />
          Program Options
        </h2>
        <div className="grid gap-4">
          {programs.map((p) => (
            <Card key={p.name}>
              <CardContent className="p-4">
                <div className="grid items-center gap-4 md:grid-cols-4">
                  <div>
                    <h3 className="font-bold text-primary">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{p.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{p.cost}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {p.countries}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold">
          <CheckCircle className="h-6 w-6" />
          Benefits
        </h2>
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                {b}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Briefcase className="h-6 w-6" />
          How to Apply
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {howToApply.map((step) => (
            <Card key={step.step}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <GraduationCap className="h-6 w-6" />
          Scholarships
        </h2>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {scholarships.map((s) => (
            <Card key={s.name}>
              <CardContent className="p-4">
                <h3 className="mb-1 font-bold">{s.name}</h3>
                <p className="text-sm">
                  <span className="text-muted-foreground">Coverage:</span>{' '}
                  {s.coverage}
                </p>
                <p className="text-sm">
                  <span className="text-muted-foreground">Eligibility:</span>{' '}
                  {s.eligibility}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Globe className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Explore More Options</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/countries">
                  Country Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/scholarships">All Scholarships</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
