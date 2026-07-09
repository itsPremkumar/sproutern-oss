import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { ColdEmailGenerator } from '@/components/tools/ColdEmailGenerator';
import Link from 'next/link';
import {
  Mail,
  CheckCircle,
  Shield,
  Users,
  BookOpen,
  Target,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = getPageSEO('coldEmailGenerator');

const tips = [
  'Keep subject lines under 50 characters for mobile readability',
  'Personalize the first line—mention something specific about them or their company',
  "Keep emails under 150 words—busy people don't read long emails",
  'Include a clear, specific call-to-action (15-min call, quick question, etc.)',
  'Send follow-ups—most responses come after 2-3 touches',
  'Best times to send: Tuesday-Thursday, 10am-12pm local time',
];

const faqs = [
  {
    q: 'How do I find the right person to email?',
    a: 'Use LinkedIn to find people with relevant titles (hiring managers, team leads, recruiters). For startups, the founder or CTO often reviews intern applications. Look for company employees who have posted about hiring or their team recently.',
  },
  {
    q: "What's the ideal cold email length?",
    a: "Aim for 100-150 words. Executives and busy professionals often read emails on mobile. If your email requires scrolling, you've lost them. Make every word count.",
  },
  {
    q: 'How many follow-ups should I send?',
    a: "Send 2-3 follow-ups spaced 5-7 days apart. Most responses come on the second or third email. After that, move on—you don't want to be annoying.",
  },
  {
    q: 'Should I attach my resume?',
    a: "For internship emails, yes—but keep file size small. For networking emails, don't attach unless asked. For referral requests, offer to send it separately if they're interested.",
  },
  {
    q: 'What response rate should I expect?',
    a: 'A good cold email to strangers gets 5-15% response rate. To increase this: target the right people, personalize heavily, and optimize timing. Some people do much better by focusing on warm introductions instead.',
  },
];

export default function ColdEmailGeneratorPage() {
  const schemas = getPageSchema('coldEmailGenerator');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Mail className="h-4 w-4" />
              Free Career Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Cold Email Generator
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Professional email templates for internships, referrals, and
              networking. Customize and copy with one click.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">8 Templates</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">4 Email Types</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">10,000+ Used</span>
            </div>
          </div>

          {/* Tool Component */}
          <ColdEmailGenerator />

          {/* Tips */}
          <section className="mt-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              <Lightbulb className="h-6 w-6 text-primary" />
              Cold Email Best Practices
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {tips.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-muted/50 p-4"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Content */}
          <section className="prose prose-lg mt-16 max-w-none">
            <h2 className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              The Ultimate Guide to Cold Emailing
            </h2>

            <p>
              Cold emailing is a superpower for students and job seekers. It
              allows you to bypass the "black hole" of online application
              portals and connect directly with the people who have the power to
              hire you.
            </p>

            <h3>Why Cold Emailing Works</h3>
            <p>
              Most unadvertised jobs (the "hidden job market") are filled
              through networking and referrals. A well-crafted cold email
              demonstrates initiative, communication skills, and genuine
              interest—qualities every employer looks for.
            </p>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6">
                <h4 className="mb-2 flex items-center gap-2 font-bold">
                  <Target className="h-4 w-4 text-primary" />
                  The Strategy
                </h4>
                <p className="text-sm text-muted-foreground">
                  Don't ask for a job. Ask for advice, perspective, or a brief
                  conversation. Build the relationship first, then ask for the
                  opportunity.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h4 className="mb-2 flex items-center gap-2 font-bold">
                  <Users className="h-4 w-4 text-primary" />
                  The Target
                </h4>
                <p className="text-sm text-muted-foreground">
                  Target specific individuals: Alumni from your college, hiring
                  managers for your role, or peers 1-2 years ahead of you.
                </p>
              </div>
            </div>

            <h3>The Anatomy of a Perfect Cold Email</h3>
            <div className="not-prose my-6 rounded-lg border border-primary/10 bg-primary/5 p-6">
              <div className="space-y-4">
                <div>
                  <span className="mb-1 block font-bold text-primary">
                    1. The Subject Line (The Hook)
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Needs to be short, relevant, and non-spammy. <br />
                    <em>
                      Good: "Question about your work at Google", "Student from
                      [University] - Quick Question"
                    </em>
                  </p>
                </div>
                <div>
                  <span className="mb-1 block font-bold text-primary">
                    2. The Opening (The Connection)
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Establish common ground immediately. Mention a shared
                    connection, a recent article they wrote, or a specific
                    project of theirs you admire.
                  </p>
                </div>
                <div>
                  <span className="mb-1 block font-bold text-primary">
                    3. The Pitch (The Value)
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Briefly state who you are and why you're reaching out. Focus
                    on your curiosity and potential value, not your desperation
                    for a job.
                  </p>
                </div>
                <div>
                  <span className="mb-1 block font-bold text-primary">
                    4. The Ask (The Call to Action)
                  </span>
                  <p className="text-sm text-muted-foreground">
                    Keep it low friction. "15 minutes of your time" or "Advice
                    on X". Make it easy for them to say yes.
                  </p>
                </div>
              </div>
            </div>

            <h3>5 Rules for Cold Email Success</h3>
            <ul className="space-y-2">
              <li>
                <strong>1. Research is Non-Negotiable:</strong> If you could
                send the same email to 100 people, it's a bad email. Personalize
                every single one.
              </li>
              <li>
                <strong>2. Keep it Short:</strong> Aim for 100-150 words max.
                Mobile screens are small, and attention spans are short.
              </li>
              <li>
                <strong>3. Follow Up:</strong> 50% of responses come from the
                follow-up. Send a polite nudge 3-5 days later if you don't hear
                back.
              </li>
              <li>
                <strong>4. Don't Attach Files:</strong> Unless specifically
                relevant, avoid attachments in the first email to prevent
                hitting spam filters.
              </li>
              <li>
                <strong>5. Proofread Obsessively:</strong> Typos signal
                carelessness. Use tools like Grammarly or Hemingway.
              </li>
            </ul>

            <div className="not-prose my-6 flex gap-3 rounded-lg border border-yellow-100 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950/30">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div className="text-sm">
                <strong>Pro Tip:</strong> The goal of a cold email is NOT to get
                a job offer. It's to get a <em>conversation</em>. The job offer
                comes later.
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* International Email Tips */}
          <section className="mt-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              🌍 International Outreach Tips
            </h2>
            <p className="mb-6 text-muted-foreground">
              Cold email etiquette varies across cultures. Here's how to adapt
              your approach:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🇺🇸 US Professors & Researchers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    • Address as "Professor [Last Name]" or "Dr. [Last Name]"
                  </p>
                  <p>• Mention specific research papers you've read</p>
                  <p>• Be direct about what you're asking for</p>
                  <p>• Keep email under 100 words</p>
                  <p>• Best time: Tuesday-Thursday, 10am-2pm their timezone</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🇪🇺 European Companies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• More formal tone than US emails</p>
                  <p>• Germans expect detailed qualifications mentioned</p>
                  <p>• Include earliest available start date</p>
                  <p>• Mention visa status upfront if applicable</p>
                  <p>• Allow more time for response (holidays vary)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    🌏 Remote Job Outreach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Highlight timezone overlap capacity</p>
                  <p>• Mention async communication experience</p>
                  <p>• Share examples of remote collaboration</p>
                  <p>• Link to online portfolio/GitHub prominently</p>
                  <p>• Consider founder/hiring manager DMs on Twitter</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    💼 LinkedIn Connection Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Always include a personalized note</p>
                  <p>• Mention mutual connection or shared interest</p>
                  <p>• Don't pitch immediately - build relationship first</p>
                  <p>• Follow up with value (article, resource)</p>
                  <p>• Best for warm introductions before cold email</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'LinkedIn Generator',
                  href: '/tools/linkedin-generator',
                  desc: 'Optimize your LinkedIn profile',
                },
                {
                  title: 'Cover Letter Generator',
                  href: '/tools/cover-letter-generator',
                  desc: 'Create cover letters fast',
                },
                {
                  title: 'Resume Score Checker',
                  href: '/tools/resume-score-checker',
                  desc: 'Check your resume ATS score',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1 font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Start Outreaching?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Generate your personalized email now
            </p>
            <Link
              href="/resources/networking"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Networking Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
