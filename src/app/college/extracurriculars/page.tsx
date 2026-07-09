import { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Briefcase,
  Heart,
  Code,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Extracurricular Activities Guide for Students',
  description:
    'How extracurricular activities help your career - clubs, sports, volunteering, projects. What recruiters look for beyond academics.',
  keywords:
    'extracurricular activities, college clubs benefits, resume extracurriculars, placement preparation activities',
};

const activities = [
  {
    name: 'Technical Clubs',
    icon: Code,
    examples: ['Coding Club', 'Robotics', 'AI/ML Club', 'Open Source'],
    benefits: [
      'Projects for resume',
      'Technical skills',
      'Networking',
      'Industry exposure',
    ],
  },
  {
    name: 'Leadership Roles',
    icon: Star,
    examples: [
      'Student Council',
      'Club President',
      'Event Coordinator',
      'Team Lead',
    ],
    benefits: [
      'Leadership skills',
      'Management experience',
      'Communication',
      'Problem-solving',
    ],
  },
  {
    name: 'Sports & Fitness',
    icon: Target,
    examples: ['Team Sports', 'Athletics', 'Yoga/Fitness', 'Adventure Sports'],
    benefits: [
      'Teamwork',
      'Discipline',
      'Stress management',
      'Physical health',
    ],
  },
  {
    name: 'Volunteering',
    icon: Heart,
    examples: ['NGO Work', 'Teaching', 'Environment', 'Community Service'],
    benefits: ['Social awareness', 'Empathy', 'Giving back', 'Soft skills'],
  },
];

const howToShowcase = [
  {
    title: 'On Resume',
    tips: [
      'List position/role held',
      'Quantify achievements',
      'Mention key projects',
      'Use action verbs',
    ],
  },
  {
    title: 'In Interviews',
    tips: [
      'Connect to job requirements',
      'Share specific examples',
      'Highlight learning',
      'Show enthusiasm',
    ],
  },
  {
    title: 'LinkedIn Profile',
    tips: [
      'Add as experience',
      'Share posts about activities',
      'Get recommendations',
      'Show certifications',
    ],
  },
];

const recruiterTips = [
  'Recruiters value commitment over quantity - stick with few activities long-term',
  'Leadership roles matter more than just membership',
  'Activities should show skills relevant to the job',
  'Be ready to explain learnings in interviews',
  'Quality of contribution > number of activities',
];

export default function ExtracurricularsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Users className="mr-1 h-3 w-3" />
            Career Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Extracurricular Activities Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Why activities beyond academics matter for your career.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 text-2xl font-bold">
          Types of Activities & Benefits
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((a) => (
            <Card key={a.name}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{a.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-foreground">
                      Examples
                    </p>
                    <ul className="space-y-1 text-sm">
                      {a.examples.map((e, i) => (
                        <li key={i}>• {e}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-muted-foreground">
                      Benefits
                    </p>
                    <ul className="space-y-1 text-sm">
                      {a.benefits.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-1"
                        >
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold">
          How to Showcase Activities
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {howToShowcase.map((h) => (
            <Card key={h.title}>
              <CardContent className="p-6">
                <h3 className="mb-4 font-bold text-primary">{h.title}</h3>
                <ul className="space-y-2">
                  {h.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Briefcase className="h-6 w-6" />
          What Recruiters Look For
        </h2>
        <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-2">
          {recruiterTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 p-4">
                <Star className="h-5 w-5 text-yellow-600" />
                <span className="text-sm">{tip}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Target className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Build Your Profile</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/tools/resume-builder">
                  Resume Builder
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/college/first-year-guide">First Year Guide</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
