import { Metadata } from 'next';
import Link from 'next/link';
import {
  Palette,
  CheckCircle,
  Clock,
  BookOpen,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Target,
  Briefcase,
  GraduationCap,
  Zap,
  Award,
  Code,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'UI/UX Designer Roadmap | Complete Guide',
  description:
    'Complete roadmap to become a UI/UX Designer. Learn user research, wireframing, prototyping, Figma, and design systems.',
  keywords:
    'ui ux designer roadmap, ux design career, figma learning path, user research, wireframing prototyping, design systems',
  openGraph: {
    title: 'UI/UX Designer Roadmap',
    description: 'Step-by-step guide to becoming a UI/UX Designer.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/roadmaps/ui-ux-designer',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/roadmaps/ui-ux-designer',
  },
};

const phases = [
  {
    number: 1,
    title: 'Design Fundamentals',
    duration: '3-4 weeks',
    description: 'Learn core design principles and visual hierarchy.',
    skills: [
      { name: 'Design Principles', priority: 'Essential' },
      { name: 'Color Theory', priority: 'Essential' },
      { name: 'Typography', priority: 'Essential' },
      { name: 'Visual Hierarchy', priority: 'Essential' },
      { name: 'Grid Systems', priority: 'Important' },
      { name: 'Gestalt Principles', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Refactoring UI',
        url: 'https://www.refactoringui.com/',
        type: 'Paid',
      },
      {
        name: 'Design Principles',
        url: 'https://principles.design/',
        type: 'Free',
      },
    ],
    projects: ['Design Analysis', 'Color Palette Creation', 'Typography Study'],
  },
  {
    number: 2,
    title: 'UX Research',
    duration: '4-5 weeks',
    description: 'Master user research and understanding user needs.',
    skills: [
      { name: 'User Interviews', priority: 'Essential' },
      { name: 'User Personas', priority: 'Essential' },
      { name: 'Journey Mapping', priority: 'Essential' },
      { name: 'Competitive Analysis', priority: 'Essential' },
      { name: 'Surveys & Questionnaires', priority: 'Important' },
      { name: 'Usability Testing', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Nielsen Norman Group',
        url: 'https://www.nngroup.com/',
        type: 'Free',
      },
      {
        name: 'UX Research Methods',
        url: 'https://www.interaction-design.org/',
        type: 'Freemium',
      },
    ],
    projects: [
      'User Research Study',
      'Persona Development',
      'Journey Map Creation',
    ],
  },
  {
    number: 3,
    title: 'Wireframing & IA',
    duration: '3-4 weeks',
    description: 'Learn information architecture and wireframing.',
    skills: [
      { name: 'Information Architecture', priority: 'Essential' },
      { name: 'User Flows', priority: 'Essential' },
      { name: 'Low-fidelity Wireframes', priority: 'Essential' },
      { name: 'Sitemaps', priority: 'Important' },
      { name: 'Card Sorting', priority: 'Important' },
      { name: 'Sketching', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Balsamiq Wireframing',
        url: 'https://balsamiq.com/learn/',
        type: 'Free',
      },
    ],
    projects: ['App Wireframes', 'User Flow Diagram', 'Sitemap Design'],
  },
  {
    number: 4,
    title: 'UI Design & Figma',
    duration: '6-8 weeks',
    description: 'Master Figma and high-fidelity UI design.',
    skills: [
      { name: 'Figma Fundamentals', priority: 'Essential' },
      { name: 'Components & Variants', priority: 'Essential' },
      { name: 'Auto Layout', priority: 'Essential' },
      { name: 'High-fidelity Mockups', priority: 'Essential' },
      { name: 'Responsive Design', priority: 'Essential' },
      { name: 'Design Tokens', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Figma Learn',
        url: 'https://www.figma.com/resources/learn-design/',
        type: 'Free',
      },
      {
        name: 'Figma Academy',
        url: 'https://www.figma.com/community/',
        type: 'Free',
      },
    ],
    projects: ['Mobile App Design', 'Web Design', 'Component Library'],
  },
  {
    number: 5,
    title: 'Prototyping & Animation',
    duration: '3-4 weeks',
    description: 'Create interactive prototypes and micro-interactions.',
    skills: [
      { name: 'Interactive Prototyping', priority: 'Essential' },
      { name: 'Micro-interactions', priority: 'Essential' },
      { name: 'Animation Principles', priority: 'Important' },
      { name: 'Prototype Testing', priority: 'Important' },
      { name: 'Motion Design Basics', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Figma Prototyping',
        url: 'https://www.figma.com/prototyping/',
        type: 'Free',
      },
      {
        name: 'Principle App',
        url: 'https://principleformac.com/',
        type: 'Paid',
      },
    ],
    projects: [
      'Interactive Prototype',
      'Micro-interaction Design',
      'Clickable Demo',
    ],
  },
  {
    number: 6,
    title: 'Design Systems',
    duration: '4-5 weeks',
    description: 'Build and maintain scalable design systems.',
    skills: [
      { name: 'Design System Fundamentals', priority: 'Essential' },
      { name: 'Component Documentation', priority: 'Essential' },
      { name: 'Style Guides', priority: 'Essential' },
      { name: 'Token Architecture', priority: 'Important' },
      { name: 'Accessibility (a11y)', priority: 'Important' },
      { name: 'Design Ops', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Design Systems 101',
        url: 'https://www.designsystems.com/',
        type: 'Free',
      },
      { name: 'Material Design', url: 'https://material.io/', type: 'Free' },
    ],
    projects: ['Design System', 'Component Library', 'Documentation Site'],
  },
];

export default function UIUXDesignerRoadmapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gradient-to-r from-pink-600 to-rose-600">
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
              <Palette className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                UI/UX Designer Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              4-8 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Beginner
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹5-20 LPA
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
            This roadmap guides you to become a UI/UX Designer. You&apos;ll
            master design fundamentals, user research, Figma, prototyping, and
            design systems. Perfect for creative minds, completable in 4-8
            months.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Creativity & curiosity
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-pink-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    UI/UX Designer Role
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-bold">Resources</p>
                  <p className="text-sm text-muted-foreground">
                    Mostly free resources
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
              <div className="h-1 bg-gradient-to-r from-pink-500 to-rose-500" />
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
            <Link href="/roadmaps/cybersecurity">
              Cybersecurity Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
