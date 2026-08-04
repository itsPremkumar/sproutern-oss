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
  title: 'Cold Emailing Tips: Land Internships',
  description:
    'Master the art of cold emailing. Learn how to write subject lines that get opened and messages that get responses from recruiters and mentors.',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/blog/cold-emailing-tips',
  },
  openGraph: {
    title: 'Cold Emailing Tips: How to Land Internships and Mentorships',
    description:
      'Master the art of cold emailing. Learn how to write subject lines that get opened and messages that get responses from recruiters and mentors.',
    url: 'https://sproutern.dpdns.org/blog/cold-emailing-tips',
    type: 'article',
    publishedTime: '2025-01-10',
    authors: ['Sproutern Team'],
  },
};

export default function ColdEmailingTipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Cold Emailing Tips: How to Land Internships and Mentorships',
    description:
      'Master the art of cold emailing. Learn how to write subject lines that get opened and messages that get responses from recruiters and mentors.',
    datePublished: '2025-01-10',
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
      '@id': 'https://sproutern.dpdns.org/blog/cold-emailing-tips',
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
                Communication
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              Cold Emailing Tips: How to Land Internships and Mentorships
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Regularly updated
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                10 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              Cold emailing can be one of the most powerful tools in a student's
              arsenal. When done right, it bypasses automated application
              systems and puts you directly in front of decision-makers. This
              guide will teach you how to craft emails that get opened, read,
              and responded to.
            </p>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Why Cold Emailing Works
              </h2>
              <p className="mb-4 text-muted-foreground">
                In a competitive job market, applying via portals often feels
                like sending your resume into a black hole. Cold emailing allows
                you to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  <strong>Show Initiative:</strong> Reaching out proactively
                  demonstrates drive and genuine interest.
                </li>
                <li>
                  <strong>Build Relationships:</strong> Even if there isn't an
                  immediate opening, you're starting a professional connection.
                </li>
                <li>
                  <strong>Access Hidden Opportunities:</strong> Many internships
                  and roles are filled through networking before they are ever
                  advertised.
                </li>
              </ul>
            </section>

            <AdAfterFirstSection />

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                The Anatomy of a Perfect Cold Email
              </h2>

              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    1. The Subject Line: Make or Break
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Your subject line determines whether your email gets opened.
                    Keep it short, specific, and relevant.
                  </p>
                  <div className="rounded bg-muted p-4 font-mono text-sm">
                    <p className="text-green-600">
                      ✅ Good: "Student Inquiry: Internship Opportunities at
                      [Company]"
                    </p>
                    <p className="text-green-600">
                      ✅ Good: "Quick Question regarding [Specific
                      Project/Article]"
                    </p>
                    <p className="mt-2 text-red-500">❌ Bad: "Hello"</p>
                    <p className="text-red-500">❌ Bad: "Looking for job"</p>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    2. The Opening: Personalize It
                  </h3>
                  <p className="text-muted-foreground">
                    Never send a generic "To Whom It May Concern." Research the
                    recipient. Mention a specific project they worked on, a talk
                    they gave, or a mutual connection. This proves you're not a
                    spammer.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    3. The Hook: Your Value Proposition
                  </h3>
                  <p className="text-muted-foreground">
                    Briefly introduce yourself and explain <em>why</em> you are
                    contacting them. What can you offer? Why are you interested
                    in <em>their</em> work specifically? Keep this concise.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    4. The Call to Action (CTA)
                  </h3>
                  <p className="text-muted-foreground">
                    Be clear about what you want. A quick call? Advice? To pass
                    along your resume? Make it easy for them to say "yes".
                  </p>
                  <div className="mt-3 rounded bg-muted p-4 font-mono text-sm">
                    <p>
                      "Are you available for a brief 10-minute chat next week to
                      discuss your experience in [Field]?"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <AdMidContent />

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Templates You Can Use
              </h2>
              <p className="mb-6 text-muted-foreground">
                Use these as a starting point, but{' '}
                <strong>always customize them</strong>.
              </p>

              <div className="grid gap-6 md:grid-cols-1">
                <div className="rounded-xl border bg-muted/30 p-6">
                  <h3 className="mb-4 text-lg font-bold">
                    Template 1: Asking for an Internship
                  </h3>
                  <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground">
                    Subject: [Your Major] Student passionate about [Company's
                    Mission] - [Your Name] Dear [Name], I recently came across
                    [Company Name]'s work on [Specific Project] and was
                    impressed by [Specific Detail]. As a [Year] year student at
                    [University] majoring in [Major], your approach to [Topic]
                    resonates with my own interest in [Related Skill/Topic]. I
                    have experience with [Skill 1] and [Skill 2], which I
                    demonstrated by [Brief Achievement]. I would love to explore
                    potential internship opportunities where I could contribute
                    to your team's innovative work. I have attached my resume
                    for your review. Would you be open to a brief conversation
                    next week to discuss how I might add value to [Company
                    Name]? Best regards, [Your Name] [LinkedIn Profile Link]
                  </pre>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                Common Mistakes to Avoid
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                  <strong className="text-red-700 dark:text-red-400">
                    Being too long-winded:
                  </strong>{' '}
                  Recruiters are busy. Keep it under 200 words.
                </li>
                <li className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                  <strong className="text-red-700 dark:text-red-400">
                    Forgetting to attach files:
                  </strong>{' '}
                  If you say "Resume attached," make sure it is!
                </li>
                <li className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                  <strong className="text-red-700 dark:text-red-400">
                    Copy-pasting errors:
                  </strong>{' '}
                  Leaving in "[Company Name]" is an instant rejection.
                </li>
                <li className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20">
                  <strong className="text-red-700 dark:text-red-400">
                    Not following up:
                  </strong>{' '}
                  One email often isn't enough. Send a polite follow-up after
                  3-5 days.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">
                The Follow-Up Strategy
              </h2>
              <p className="mb-4 text-muted-foreground">
                If you don't hear back, don't take it personally. Inboxes are
                crowded. A polite nudge can make all the difference.
              </p>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/20">
                <p className="mb-2 font-medium text-blue-800 dark:text-blue-300">
                  The "Nudge" Email:
                </p>
                <p className="text-sm italic text-muted-foreground">
                  "Hi [Name], I just wanted to bubble this up to the top of your
                  inbox in case it got buried. I'm still very interested in
                  determining if my background in [Skill] could be useful to
                  [Company]. Best, [Your Name]"
                </p>
              </div>
            </section>

            <div className="mt-12 border-t pt-8">
              <h3 className="mb-4 text-2xl font-semibold">Read Next</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-2 font-semibold">
                      <Link
                        href="/blog/write-effective-cover-letter"
                        className="hover:text-primary"
                      >
                        How to Write a Cover Letter That Actually Gets Read
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Master the art of cover letter writing with proven
                      templates and strategies.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="mb-2 font-semibold">
                      <Link
                        href="/blog/linkedin-optimization-students"
                        className="hover:text-primary"
                      >
                        LinkedIn Optimization for Students
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Transform your LinkedIn profile into a powerful career
                      tool.
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
