import { Metadata } from 'next';
import Link from 'next/link';
import {
  Smartphone,
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
  title: 'Mobile App Developer Roadmap | Guide',
  description:
    'Complete roadmap to become a Mobile Developer. Learn React Native, Flutter, iOS Swift, Android Kotlin, and cross-platform development.',
  keywords:
    'mobile developer roadmap, react native, flutter, ios development, android kotlin, cross platform apps',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/roadmaps/mobile-developer',
  },
};

const phases = [
  {
    number: 1,
    title: 'Programming Fundamentals',
    duration: '4-6 weeks',
    description: 'Master programming basics.',
    skills: [
      { name: 'JavaScript/TypeScript', priority: 'Essential' },
      { name: 'Dart Basics', priority: 'Essential' },
      { name: 'OOP Concepts', priority: 'Essential' },
      { name: 'Git Version Control', priority: 'Important' },
    ],
    resources: [
      {
        name: 'JavaScript.info',
        url: 'https://javascript.info/',
        type: 'Free',
      },
    ],
    projects: ['CLI App', 'To-Do Console App'],
  },
  {
    number: 2,
    title: 'React Native Development',
    duration: '6-8 weeks',
    description: 'Build cross-platform apps with React Native.',
    skills: [
      { name: 'React Fundamentals', priority: 'Essential' },
      { name: 'React Native Core', priority: 'Essential' },
      { name: 'Navigation', priority: 'Essential' },
      { name: 'State Management', priority: 'Important' },
    ],
    resources: [
      {
        name: 'React Native Docs',
        url: 'https://reactnative.dev/',
        type: 'Free',
      },
    ],
    projects: ['Weather App', 'Todo App', 'News App'],
  },
  {
    number: 3,
    title: 'Flutter Development',
    duration: '6-8 weeks',
    description: 'Build beautiful apps with Flutter.',
    skills: [
      { name: 'Dart Language', priority: 'Essential' },
      { name: 'Flutter Widgets', priority: 'Essential' },
      { name: 'State Management (Provider/Riverpod)', priority: 'Essential' },
      { name: 'Animations', priority: 'Important' },
    ],
    resources: [
      { name: 'Flutter Docs', url: 'https://flutter.dev/docs', type: 'Free' },
    ],
    projects: ['E-commerce App', 'Chat App', 'Finance Tracker'],
  },
  {
    number: 4,
    title: 'Native iOS (Optional)',
    duration: '4-6 weeks',
    description: 'Learn native iOS development.',
    skills: [
      { name: 'Swift Language', priority: 'Essential' },
      { name: 'SwiftUI', priority: 'Essential' },
      { name: 'UIKit Basics', priority: 'Important' },
      { name: 'Core Data', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Swift Docs',
        url: 'https://swift.org/documentation/',
        type: 'Free',
      },
    ],
    projects: ['iOS Native App', 'Widget Extension'],
  },
  {
    number: 5,
    title: 'Native Android (Optional)',
    duration: '4-6 weeks',
    description: 'Learn native Android development.',
    skills: [
      { name: 'Kotlin', priority: 'Essential' },
      { name: 'Jetpack Compose', priority: 'Essential' },
      { name: 'Android Architecture', priority: 'Important' },
      { name: 'Room Database', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Android Docs',
        url: 'https://developer.android.com/',
        type: 'Free',
      },
    ],
    projects: ['Android Native App', 'Compose UI'],
  },
  {
    number: 6,
    title: 'Backend & APIs',
    duration: '3-4 weeks',
    description: 'Integrate with backend services.',
    skills: [
      { name: 'REST APIs', priority: 'Essential' },
      { name: 'Firebase', priority: 'Essential' },
      { name: 'Authentication', priority: 'Essential' },
      { name: 'Push Notifications', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Firebase Docs',
        url: 'https://firebase.google.com/docs',
        type: 'Free',
      },
    ],
    projects: ['Auth Flow', 'Real-time Chat', 'Cloud Functions'],
  },
  {
    number: 7,
    title: 'Publishing & DevOps',
    duration: '2-3 weeks',
    description: 'Deploy apps to stores.',
    skills: [
      { name: 'App Store Deployment', priority: 'Essential' },
      { name: 'Play Store Deployment', priority: 'Essential' },
      { name: 'CI/CD for Mobile', priority: 'Important' },
      { name: 'App Monitoring', priority: 'Good to Have' },
    ],
    resources: [
      { name: 'Fastlane', url: 'https://fastlane.tools/', type: 'Free' },
    ],
    projects: ['Published App', 'CI/CD Pipeline'],
  },
];

export default function MobileDeveloperRoadmapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600">
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
              <Smartphone className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Mobile App Developer Roadmap
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
              ₹6-22 LPA
            </Badge>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="mb-4 text-2xl font-bold">Overview</h2>
        <p className="mb-6 text-muted-foreground">
          Master React Native, Flutter, and optionally native iOS/Android
          development in 6-10 months.
        </p>
      </section>
      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {phase.number}
                  </div>
                  <div>
                    <CardTitle>{phase.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      <Clock className="inline h-4 w-4" /> {phase.duration}
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h4 className="mb-3 font-semibold">
                    <CheckCircle className="inline h-4 w-4 text-green-500" />{' '}
                    Skills
                  </h4>
                  <ul className="space-y-1">
                    {phase.skills.map((s) => (
                      <li
                        key={s.name}
                        className="text-sm"
                      >
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold">
                    <BookOpen className="inline h-4 w-4 text-blue-500" />{' '}
                    Resources
                  </h4>
                  <ul className="space-y-1">
                    {phase.resources.map((r) => (
                      <li key={r.name}>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="inline h-3 w-3" /> {r.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold">
                    <Code className="inline h-4 w-4 text-purple-500" /> Projects
                  </h4>
                  <ul className="space-y-1">
                    {phase.projects.map((p) => (
                      <li
                        key={p}
                        className="text-sm"
                      >
                        → {p}
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
        <div className="flex justify-between gap-4">
          <Button
            asChild
            variant="outline"
          >
            <Link href="/roadmaps">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Roadmaps
            </Link>
          </Button>
          <Button asChild>
            <Link href="/roadmaps/software-engineer">
              Software Engineer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
