import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Mail,
  Send,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  FileText,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cold Email Templates for Internships That Actually Work',
  description:
    'Get proven cold email templates for internships. Learn the structure, examples, and follow-up strategies that land interviews.',
  keywords: [
    'cold email internship',
    'internship outreach',
    'cold email template',
    'cold emailing for jobs',
    'how to cold email',
  ],
  openGraph: {
    title: 'Cold Email Templates for Internships',
    description: 'Templates that get replies, not silence.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Outreach
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cold Email Templates for Internships That Actually Work
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Most cold emails get ignored. Here's how to write ones that get
            responses and land you interviews.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>14 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-6 dark:bg-indigo-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            Cold Email Reality
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">5-10%</span>
              <span>typical response rate for good cold emails</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">30%</span>
              <span>higher response with personalization</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">80%</span>
              <span>of replies come after follow-ups</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">&lt;100</span>
              <span>words for best open rates</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#structure"
                className="text-primary hover:underline"
              >
                1. Perfect Email Structure
              </a>
            </li>
            <li>
              <a
                href="#templates"
                className="text-primary hover:underline"
              >
                2. Ready-to-Use Templates
              </a>
            </li>
            <li>
              <a
                href="#subject"
                className="text-primary hover:underline"
              >
                3. Subject Lines
              </a>
            </li>
            <li>
              <a
                href="#followup"
                className="text-primary hover:underline"
              >
                4. Follow-Up Strategy
              </a>
            </li>
            <li>
              <a
                href="#find"
                className="text-primary hover:underline"
              >
                5. Finding Email Addresses
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                6. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Personalization is everything—generic emails fail</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Keep it under 100 words</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Focus on what you can offer, not what you want</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Always follow up—most replies come after follow-ups</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Structure */}
        <section
          id="structure"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            1. Perfect Email Structure
          </h2>

          <ol>
            <li>
              <strong>Subject line:</strong> Short, specific, curiosity-inducing
            </li>
            <li>
              <strong>Opening (1 line):</strong> Personalized hook—show you did
              research
            </li>
            <li>
              <strong>Value (2-3 lines):</strong> What you can offer them
            </li>
            <li>
              <strong>Ask (1 line):</strong> Clear, low-commitment CTA
            </li>
            <li>
              <strong>Sign-off:</strong> Professional close with links
            </li>
          </ol>
        </section>

        {/* Section 2: Templates */}
        <section
          id="templates"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            2. Ready-to-Use Templates
          </h2>

          <h3>Template 1: The Researcher</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Quick question about [specific
              project/product]
            </p>
            <p className="mt-2">Hi [Name],</p>
            <p className="mt-2">
              I saw [specific thing they did/said]—really interesting approach
              to [topic]. I've been working on similar problems and built [brief
              project description].
            </p>
            <p className="mt-2">
              Would you have 15 mins to chat about internship opportunities at
              [Company]? I'd love to contribute to [specific area].
            </p>
            <p className="mt-2">
              Thanks!
              <br />
              [Your Name]
              <br />
              [Portfolio] | [LinkedIn] | [Resume]
            </p>
          </div>

          <h3>Template 2: The Value-First</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Idea for [company's specific challenge]
            </p>
            <p className="mt-2">Hi [Name],</p>
            <p className="mt-2">
              I noticed [specific observation about their product/website]. I
              recently built [relevant project] that addressed a similar issue.
            </p>
            <p className="mt-2">
              Would love to share some ideas and explore if there's a fit for an
              internship. Open to a quick call?
            </p>
            <p className="mt-2">
              [Your Name]
              <br />
              [Portfolio Link]
            </p>
          </div>

          <h3>Template 3: The Alumni Connection</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Fellow [College] student interested in
              [Company]
            </p>
            <p className="mt-2">Hi [Name],</p>
            <p className="mt-2">
              I'm a [year] at [College] and saw you're a fellow alum now at
              [Company]. Really impressive work on [specific thing]!
            </p>
            <p className="mt-2">
              I'm looking for internships in [area] and would love to learn
              about your experience. Would you have 15 mins for a quick chat?
            </p>
            <p className="mt-2">[Your Name]</p>
          </div>
        </section>

        {/* Section 3: Subject */}
        <section
          id="subject"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            3. Subject Lines That Get Opened
          </h2>

          <h3>Good Subject Lines</h3>
          <ul>
            <li>"Quick question about [specific product]"</li>
            <li>"[College Name] student + [their product] idea"</li>
            <li>"Loved your talk on [topic]—quick question"</li>
            <li>"[Mutual connection] suggested I reach out"</li>
          </ul>

          <h3>Bad Subject Lines</h3>
          <ul>
            <li>"Seeking internship opportunity" (too generic)</li>
            <li>"Application for internship" (sounds automated)</li>
            <li>"Hi" or blank (unprofessional)</li>
          </ul>
        </section>

        {/* Section 4: Follow-up */}
        <section
          id="followup"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Send className="h-6 w-6 text-primary" />
            4. Follow-Up Strategy
          </h2>

          <ul>
            <li>
              <strong>Wait 5-7 days</strong> before first follow-up
            </li>
            <li>
              <strong>Max 2-3 follow-ups</strong> for the same person
            </li>
            <li>
              <strong>Add value:</strong> Don't just ask "did you see my email?"
            </li>
          </ul>

          <h3>Follow-Up Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Re: [Original Subject]
            </p>
            <p className="mt-2">Hi [Name],</p>
            <p className="mt-2">
              Just following up on my previous email. Since then, I also [new
              relevant update—project shipped, skill learned, etc.].
            </p>
            <p className="mt-2">
              Still very interested in exploring opportunities. Happy to work
              around your schedule!
            </p>
            <p className="mt-2">[Your Name]</p>
          </div>
        </section>

        {/* Section 5: Find */}
        <section
          id="find"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Finding Email Addresses
          </h2>

          <ul>
            <li>
              <strong>Hunter.io:</strong> Email finder by domain
            </li>
            <li>
              <strong>LinkedIn:</strong> Some profiles show emails
            </li>
            <li>
              <strong>Company website:</strong> About/Team pages
            </li>
            <li>
              <strong>Pattern guessing:</strong> firstname@company.com is common
            </li>
          </ul>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">How many cold emails should I send?</p>
              <p className="mt-2 text-muted-foreground">
                Aim for 20-30 personalized emails per week. Quality over
                quantity—10 good emails beat 100 generic ones.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if I don't hear back?</p>
              <p className="mt-2 text-muted-foreground">
                That's normal. 5-10% response rate is good. Follow up, then move
                on. Don't take it personally.
              </p>
            </div>
          </div>
        </section>

        {/* More Templates */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            More Cold Email Templates
          </h2>

          <h3>Template 4: The Specific Role</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> [Role] intern who [specific skill]
            </p>
            <p className="mt-2">Hi [Name],</p>
            <p className="mt-2">
              I'm a [year] [major] student looking for a [role] internship. I've
              built [specific relevant project] that [specific outcome].
            </p>
            <p className="mt-2">
              I noticed [Company] is [expanding/launching/improving] in [area].
              My experience with [skill] could help accelerate that.
            </p>
            <p className="mt-2">
              Would a 15-min call this week work? Happy to share my portfolio.
            </p>
            <p className="mt-2">
              Best,
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Template 5: The Referral Request</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Advice from a [Company] insider?
            </p>
            <p className="mt-2">Hi [Name],</p>
            <p className="mt-2">
              I'm very interested in [Company] and noticed you're in [their
              department]. Your background in [area] is impressive.
            </p>
            <p className="mt-2">
              Would you have 10 mins to answer a few questions about your team
              and what they look for in interns? I promise to keep it brief.
            </p>
            <p className="mt-2">
              Thanks so much,
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Template 6: The Direct CEO/Founder</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> [Specific idea] for [their startup]
            </p>
            <p className="mt-2">Hi [Founder Name],</p>
            <p className="mt-2">
              I've been following [Startup] since [when]. Love what you're
              building in [space]. I noticed [specific observation].
            </p>
            <p className="mt-2">
              I'm a [year] student with skills in [relevant areas]. I'd love to
              help—even as an unpaid trial to prove value.
            </p>
            <p className="mt-2">
              Would you consider a quick chat?
              <br />
              [Your Name]
              <br />
              [Portfolio]
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Cold Email Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Writing an essay
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Nobody reads long cold emails. Keep it under 100 words.
                  Respect their time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Generic opening line
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  "I hope this email finds you well" = instant delete. Start
                  with something specific about them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Focusing on yourself
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  "I want to learn..." is about you. "I can help with..." is
                  about them. Focus on value you bring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  No clear CTA
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  What should they do? Be specific: "Would a 15-min call Tuesday
                  work?" instead of "Let me know."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  No follow-up
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  80% of replies come after follow-ups. People are busy. One
                  email is not enough.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Cold email got me into my dream startup..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Emailed the CTO of a YC startup with a specific bug fix I'd
                noticed. He replied in 2 hours. Interned there for 4 months,
                then got a full-time offer." — Arjun, IIT Delhi
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "100 emails, 8 replies, 3 interviews, 1 offer..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Sent personalized emails to 100 companies. Got 8 replies, 3
                converted to interviews, landed an internship at a Series B
                startup. Numbers game!" — Priya, NIT Trichy
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Alumni connection opened doors..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Filtered LinkedIn for alumni at target companies. Cold emailed
                15 of them. 4 replied, 2 referred me internally. Got offers from
                both companies." — Karan, BITS Pilani
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            More Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I email the HR or the hiring manager?
              </h3>
              <p className="text-muted-foreground">
                Always prefer the hiring manager (PM, engineering lead, etc.).
                HR often filters emails. Decision-makers can bypass the process.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is it okay to email CEOs/founders?
              </h3>
              <p className="text-muted-foreground">
                For startups (under 100 employees), absolutely. Many founders
                personally review inbound emails. Bigger companies—go for team
                leads instead.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What time should I send cold emails?
              </h3>
              <p className="text-muted-foreground">
                Tuesday-Thursday, 9-11 AM in the recipient's timezone. Avoid
                Mondays (inbox overload) and Fridays (weekend mindset).
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I attach my resume?
              </h3>
              <p className="text-muted-foreground">
                Include a portfolio/LinkedIn link in signature. Offer to send
                resume if interested. Attachments can trigger spam filters and
                reduce reply rates.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I personalize at scale?
              </h3>
              <p className="text-muted-foreground">
                Create a spreadsheet with company, contact name, their project,
                and your relevant experience. Customize the first 2 sentences
                for each; keep the rest templated.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if they say no?
              </h3>
              <p className="text-muted-foreground">
                Thank them for the response. Ask if they know anyone else who
                might be hiring. Leave the door open for the future. A "no" now
                isn't "no forever."
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Cold Email Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Subject line is specific and curiosity-inducing</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Opening line shows you researched them</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Email is under 100 words</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Focus is on value you provide, not what you want</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>CTA is clear and low-commitment</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Signature includes portfolio/LinkedIn link</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Follow-up scheduled for 5-7 days later</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Proofread for grammar and typos</span>
            </div>
          </div>
        </section>

        {/* Industry-Specific Tips */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Industry-Specific Tips
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">Tech/Startups</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Link to GitHub, show code. Mention specific products you've
                used. Technical details matter more than generic enthusiasm.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">Marketing/Content</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Show portfolio of campaigns, writing samples. Offer a specific
                content idea for their brand to demonstrate capability.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">Finance/Consulting</p>
              <p className="mt-2 text-sm text-muted-foreground">
                More formal tone. Mention competitions, clubs, relevant
                coursework. Connect via alumni network when possible.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">Design/Creative</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Visual portfolio is essential. Offer a small free design sample
                for their brand. Show you understand their aesthetic.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Reaching Out</h2>
          <p>
            Cold emailing works when done right. Personalize, keep it short, and
            be persistent with follow-ups.
          </p>
          <p>
            Remember: every reply starts with one email. Most successful people
            got opportunities by reaching out when nobody asked them to.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your next internship might be one email away. Send it. 📧
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/cover-letter-internship-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cover Letter Guide
            </Link>
            <Link
              href="/blog/hidden-internship-opportunities"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Finding Hidden Opportunities
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on analysis of 1,000+ successful cold emails.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
