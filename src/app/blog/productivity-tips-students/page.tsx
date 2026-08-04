import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  AdAfterFirstSection,
  AdMidContent,
} from '@/components/ads/ezoic-sections';

export const metadata: Metadata = {
  title: 'Productivity Tips for Students: Do More in Less Time',
  description:
    'Boost your efficiency with these proven productivity hacks tailored for students. Balance academics, internships, and social life effectively.',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/blog/productivity-tips-students',
  },
  openGraph: {
    title: 'Productivity Tips for Students: Do More in Less Time',
    description:
      'Boost your efficiency with these proven productivity hacks tailored for students. Balance academics, internships, and social life effectively.',
    url: 'https://sproutern.dpdns.org/blog/productivity-tips-students',
    type: 'article',
    publishedTime: '2025-01-12',
    authors: ['Sproutern Team'],
  },
};

export default function ProductivityTipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Productivity Tips for Students: Do More in Less Time',
    description:
      'Boost your efficiency with these proven productivity hacks tailored for students. Balance academics, internships, and social life effectively.',
    datePublished: '2025-01-12',
    author: {
      '@type': 'Organization',
      name: 'Sproutern Team',
      url: 'https://sproutern.dpdns.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sproutern.dpdns.org/logo.jpg',
        creditText: 'Sproutern',
        creator: {
          '@type': 'Organization',
          name: 'Sproutern',
        },
        copyrightNotice: '© 2026 Sproutern. All rights reserved.',
        license: 'https://sproutern.dpdns.org/terms',
        acquireLicensePage: 'https://sproutern.dpdns.org/contact',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://sproutern.dpdns.org/blog/productivity-tips-students',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Button
          asChild
          variant="ghost"
          className="mb-8"
        >
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="mx-auto max-w-4xl">
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                Productivity
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Productivity Tips for Students: Do More in Less Time
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Regularly updated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />8 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              Between assignments, exams, internships, and a social life, being
              a student often feels like a constant juggling act. The key isn't
              necessarily working harder, but working smarter. These
              productivity strategies are designed to help you regain control of
              your schedule.
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                The Myth of Multitasking
              </h2>
              <p className="mb-4 text-muted-foreground">
                Many students wear multitasking like a badge of honor. Research
                shows, however, that the brain cannot truly multitask; it only
                context-switches rapidly. This switching cost lowers your IQ and
                kills productivity.
              </p>
              <div className="rounded-lg border border-orange-100 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950/20">
                <p className="font-medium text-orange-800 dark:text-orange-300">
                  💡 Try "Deep Work":
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Focus intensely on a single task for a set period without
                  distractions. You'll accomplish in 2 hours what normally takes
                  6 hours of distracted work.
                </p>
              </div>
            </section>

            <AdAfterFirstSection />

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                4 Frameworks for Peak Efficiency
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    1. The Pomodoro Technique
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Work for 25 minutes, break for 5. After four cycles, take a
                    longer break. This prevents burnout and keeps mental agility
                    high. Great for "boring" tasks like reading textbooks.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">2. Time Blocking</h3>
                  <p className="text-sm text-muted-foreground">
                    Assign every hour of your day a specific job. Instead of a
                    to-do list, put tasks on your calendar. If it's not on the
                    calendar, it doesn't get done.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    3. The Eisenhower Matrix
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Categorize tasks into four quadrants: Urgent/Important,
                    Important/Not Urgent, etc. Focus on the "Important/Not
                    Urgent" box (planning, studying early) to prevent future
                    crises.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">4. Eat The Frog</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify your hardest, most important task (the "frog") and
                    do it first thing in the morning. Once it's done, the rest
                    of the day feels easy.
                  </p>
                </div>
              </div>
            </section>

            <AdMidContent />

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Digital Hygiene for Students
              </h2>
              <p className="mb-4 text-muted-foreground">
                Your phone is likely your biggest distraction. Take control:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <span>
                    <strong>Turn off non-human notifications:</strong> Keep
                    texts/calls, but disable Instagram, Snapchat, and News
                    alerts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <span>
                    <strong>Use Website Blockers:</strong> Tools like Cold
                    Turkey or Freedom can lock you out of distracting sites
                    during study hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <span>
                    <strong>Optimize your workspace:</strong> Your bed is for
                    sleeping, not studying. Train your brain to associate your
                    desk with focus.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                The Power of Review
              </h2>
              <p className="mb-4 text-muted-foreground">
                Productivity isn't just about doing; it's about reflecting.
                Spend 10 minutes every Sunday planning your week.
              </p>
              <div className="rounded-lg border bg-muted/50 p-4">
                <h4 className="mb-2 font-bold">Weekly Review Checklist:</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>What major assignments are due next week?</li>
                  <li>What small tasks fell through the cracks?</li>
                  <li>What is one goal I want to achieve next week?</li>
                  <li>Is my calendar updated?</li>
                </ul>
              </div>
            </section>

            <div className="mt-12 border-t pt-8">
              <h3 className="mb-4 text-2xl font-semibold">Read Next</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-2 font-semibold">
                      <Link
                        href="/blog/time-management-students-guide"
                        className="hover:text-primary"
                      >
                        Time Management for Students Guide
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Practical time management strategies for answering the
                      question "Where did the time go?".
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-2 font-semibold">
                      <Link
                        href="/blog/effective-study-techniques"
                        className="hover:text-primary"
                      >
                        Effective Study Techniques
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Stop re-reading notes. Learn active recall and spaced
                      repetition.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
