import { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  CheckCircle,
  Clock,
  BookOpen,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Target,
  GraduationCap,
  Zap,
  Award,
  Code,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Product Manager Roadmap | Complete Guide',
  description:
    'Complete roadmap to become a Product Manager. Learn product strategy, user research, roadmap planning, and agile methodologies.',
  keywords:
    'product manager roadmap, pm career path, product management skills, product strategy, user research, agile product management',
  openGraph: {
    title: 'Product Manager Roadmap',
    description: 'Step-by-step guide to becoming a Product Manager.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/roadmaps/product-manager',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/roadmaps/product-manager',
  },
};

const phases = [
  {
    number: 1,
    title: 'Product Fundamentals',
    duration: '3-4 weeks',
    description: 'Understand the core concepts of product management.',
    skills: [
      { name: 'Product Lifecycle', priority: 'Essential' },
      { name: 'Product-Market Fit', priority: 'Essential' },
      { name: 'Value Proposition Design', priority: 'Essential' },
      { name: 'Competitive Analysis', priority: 'Important' },
      { name: 'Business Model Canvas', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Inspired by Marty Cagan',
        url: 'https://www.svpg.com/inspired-how-to-create-products-customers-love/',
        type: 'Paid',
      },
      {
        name: 'Product School',
        url: 'https://productschool.com/',
        type: 'Freemium',
      },
    ],
    projects: [
      'Product Teardown',
      'Competitive Analysis Report',
      'Value Proposition Canvas',
    ],
  },
  {
    number: 2,
    title: 'User Research & Discovery',
    duration: '4-5 weeks',
    description: 'Learn to understand users and identify their needs.',
    skills: [
      { name: 'User Interviews', priority: 'Essential' },
      { name: 'Survey Design', priority: 'Essential' },
      { name: 'User Personas', priority: 'Essential' },
      { name: 'Journey Mapping', priority: 'Essential' },
      { name: 'Jobs-to-be-Done Framework', priority: 'Important' },
      { name: 'Usability Testing', priority: 'Important' },
    ],
    resources: [
      {
        name: 'The Mom Test',
        url: 'https://www.momtestbook.com/',
        type: 'Paid',
      },
      {
        name: 'Nielsen Norman Group',
        url: 'https://www.nngroup.com/',
        type: 'Free',
      },
    ],
    projects: [
      'User Research Study',
      'Persona Development',
      'Customer Journey Map',
    ],
  },
  {
    number: 3,
    title: 'Product Strategy',
    duration: '4-5 weeks',
    description: 'Develop strategic thinking for product decisions.',
    skills: [
      { name: 'Product Vision & Mission', priority: 'Essential' },
      { name: 'OKRs & Goal Setting', priority: 'Essential' },
      { name: 'Prioritization Frameworks', priority: 'Essential' },
      { name: 'Roadmap Planning', priority: 'Essential' },
      { name: 'Feature Prioritization (RICE, MoSCoW)', priority: 'Important' },
      { name: 'Strategic Thinking', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Measure What Matters',
        url: 'https://www.whatmatters.com/',
        type: 'Paid',
      },
      {
        name: 'Product Roadmaps Relaunched',
        url: 'https://www.oreilly.com/',
        type: 'Paid',
      },
    ],
    projects: [
      'Product Strategy Document',
      'Roadmap Creation',
      'OKR Framework Implementation',
    ],
  },
  {
    number: 4,
    title: 'Technical Skills',
    duration: '4-6 weeks',
    description: 'Build technical understanding to work with engineering.',
    skills: [
      { name: 'Basic SQL', priority: 'Essential' },
      { name: 'Understanding APIs', priority: 'Essential' },
      { name: 'Reading Technical Documentation', priority: 'Essential' },
      { name: 'Data Analysis Basics', priority: 'Important' },
      { name: 'Wireframing & Prototyping', priority: 'Important' },
      { name: 'A/B Testing', priority: 'Important' },
    ],
    resources: [
      { name: 'SQLBolt', url: 'https://sqlbolt.com/', type: 'Free' },
      {
        name: 'Figma Tutorial',
        url: 'https://www.figma.com/resources/learn-design/',
        type: 'Free',
      },
    ],
    projects: ['Data Analysis Project', 'Prototype Design', 'A/B Test Plan'],
  },
  {
    number: 5,
    title: 'Agile & Execution',
    duration: '3-4 weeks',
    description: 'Master agile methodologies and product execution.',
    skills: [
      { name: 'Scrum Framework', priority: 'Essential' },
      { name: 'User Story Writing', priority: 'Essential' },
      { name: 'Sprint Planning', priority: 'Essential' },
      { name: 'Backlog Management', priority: 'Essential' },
      { name: 'Kanban', priority: 'Important' },
      { name: 'Stakeholder Management', priority: 'Important' },
    ],
    resources: [
      { name: 'Scrum Guide', url: 'https://scrumguides.org/', type: 'Free' },
      {
        name: 'Atlassian Agile',
        url: 'https://www.atlassian.com/agile',
        type: 'Free',
      },
    ],
    projects: [
      'Sprint Planning Exercise',
      'Backlog Refinement',
      'Scrum Simulation',
    ],
  },
  {
    number: 6,
    title: 'Analytics & Metrics',
    duration: '3-4 weeks',
    description: 'Learn to measure product success with data.',
    skills: [
      { name: 'Product Analytics Tools', priority: 'Essential' },
      { name: 'Key Metrics (DAU, MAU, Retention)', priority: 'Essential' },
      { name: 'Funnel Analysis', priority: 'Essential' },
      { name: 'Cohort Analysis', priority: 'Important' },
      { name: 'North Star Metric', priority: 'Important' },
      { name: 'Data-Driven Decision Making', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Google Analytics Academy',
        url: 'https://analytics.google.com/analytics/academy/',
        type: 'Free',
      },
      {
        name: 'Amplitude Academy',
        url: 'https://academy.amplitude.com/',
        type: 'Free',
      },
    ],
    projects: [
      'Analytics Dashboard',
      'Metrics Framework',
      'Product Health Report',
    ],
  },
];

export default function ProductManagerRoadmapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container py-16 md:py-24">
          <Link
            href="/roadmaps"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Roadmaps
          </Link>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Product Manager Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              6-10 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Intermediate
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹12-40 LPA
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <GraduationCap className="mr-2 h-4 w-4" />6 Phases
            </Badge>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="mb-6 text-muted-foreground">
            This roadmap guides you to become a Product Manager. You&apos;ll
            master product strategy, user research, agile methodologies, and
            data-driven decision making. Completable in 6-10 months.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Any degree + curiosity
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    Product Manager Role
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-bold">Resources</p>
                  <p className="text-sm text-muted-foreground">
                    Mix of free & paid
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-1 text-xl">
                      {phase.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Skills to Learn
                  </h4>
                  <ul className="space-y-2">
                    {phase.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Badge
                          variant={
                            skill.priority === 'Essential'
                              ? 'default'
                              : skill.priority === 'Important'
                                ? 'secondary'
                                : 'outline'
                          }
                          className="mt-0.5 flex-shrink-0 px-1.5 py-0 text-[10px]"
                        >
                          {skill.priority === 'Essential'
                            ? '★'
                            : skill.priority === 'Important'
                              ? '◆'
                              : '○'}
                        </Badge>
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {phase.resources.map((resource) => (
                      <li key={resource.name}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {resource.name}
                          <Badge
                            variant="outline"
                            className="px-1.5 py-0 text-[10px]"
                          >
                            {resource.type}
                          </Badge>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <Code className="h-4 w-4 text-purple-500" />
                    Projects to Build
                  </h4>
                  <ul className="space-y-2">
                    {phase.projects.map((project) => (
                      <li
                        key={project}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-primary">→</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/roadmaps">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Roadmaps
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
          >
            <Link href="/roadmaps/devops-engineer">
              DevOps Engineer Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
