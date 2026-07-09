import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  MessageSquare,
  Globe,
  Linkedin,
  Mail,
  Building2,
  Sparkles,
  Eye,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Find Hidden Internships That Aren't Posted Online",
  description:
    'Discover strategies to find unadvertised internships. Learn networking techniques, cold outreach, and insider methods to access the hidden job market.',
  keywords: [
    'hidden internships',
    'unadvertised jobs',
    'secret job market',
    'networking for internships',
    'cold email internship',
    'find internships',
  ],
  openGraph: {
    title: 'How to Find Hidden Internship Opportunities',
    description:
      'Access the 70% of opportunities that never get posted publicly.',
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
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Search className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Strategy
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Find Hidden Internship Opportunities That Aren't Posted
            Online
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            70% of jobs are never posted publicly. Learn how to tap into the
            hidden market and discover opportunities your competition doesn't
            even know exist.
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
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Eye className="h-5 w-5 text-orange-600" />
            The Hidden Job Market Reality
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">70%</span>
              <span>of positions filled without public posting</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">85%</span>
              <span>of jobs found through networking</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">3x</span>
              <span>higher success rate with referrals</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">60%</span>
              <span>of startups hire through personal networks</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why-hidden"
                className="text-primary hover:underline"
              >
                1. Why Jobs Stay Hidden
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                className="text-primary hover:underline"
              >
                2. LinkedIn Networking Strategies
              </a>
            </li>
            <li>
              <a
                href="#cold-outreach"
                className="text-primary hover:underline"
              >
                3. Cold Email That Works
              </a>
            </li>
            <li>
              <a
                href="#alumni"
                className="text-primary hover:underline"
              >
                4. Alumni Network Power
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-primary hover:underline"
              >
                5. Events & Communities
              </a>
            </li>
            <li>
              <a
                href="#direct"
                className="text-primary hover:underline"
              >
                6. Direct Company Outreach
              </a>
            </li>
            <li>
              <a
                href="#timing"
                className="text-primary hover:underline"
              >
                7. Timing Your Approach
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                8. FAQs
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
              <span>
                Most internships are filled through referrals before being
                posted publicly
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                LinkedIn outreach with personalized messages has 40% response
                rate
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                College alumni are 5x more likely to respond than random
                professionals
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Cold emails work when they provide value, not just ask for
                favors
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            You've applied to 50 internships on job portals. You've refreshed
            Internshala every day. Yet the interview calls aren't coming. Sound
            familiar? Here's the truth:{' '}
            <strong>you're fishing in the most crowded pond.</strong>
          </p>
          <p>
            The best opportunities—positions at fast-growing startups, roles
            with direct mentorship from founders, internships that convert to
            high-paying jobs—often never make it to public job boards. They're
            filled through networks, referrals, and proactive outreach.
          </p>
          <p>
            This guide will teach you exactly how to access this hidden market.
          </p>
        </section>

        {/* Section 1 */}
        <section
          id="why-hidden"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            1. Why Internships Stay Hidden
          </h2>

          <p>
            Before diving into strategies, understand why companies don't post
            every position:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Cost Savings</p>
              <p className="text-sm text-muted-foreground">
                Job postings cost money and time. Referrals are free and faster.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Quality Filter</p>
              <p className="text-sm text-muted-foreground">
                Referred candidates are pre-vetted, reducing hiring risk.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Speed</p>
              <p className="text-sm text-muted-foreground">
                Startups need people now, not after months of applications.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Flexibility</p>
              <p className="text-sm text-muted-foreground">
                They might create a role for exceptional candidates.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Mindset Shift:</strong> Stop waiting for jobs to be
              posted. Start creating opportunities by making yourself visible to
              the right people.
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="linkedin"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-primary" />
            2. LinkedIn Networking Strategies
          </h2>

          <p>
            LinkedIn is your most powerful tool for accessing hidden
            opportunities. Here's how to use it effectively:
          </p>

          <h3>Finding the Right People</h3>
          <ul>
            <li>
              <strong>HR/Talent Acquisition:</strong> Search "[Company Name] +
              HR" or "Talent Acquisition"
            </li>
            <li>
              <strong>Hiring Managers:</strong> Search for team leads in your
              target department
            </li>
            <li>
              <strong>Recent Hires:</strong> People who joined recently are
              often helpful to newcomers
            </li>
            <li>
              <strong>Alumni:</strong> Filter by education to find people from
              your college
            </li>
          </ul>

          <h3>Connection Request Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>Hi [Name],</p>
            <p className="mt-2">
              I'm a [Year] CS student at [College] fascinated by [Company's]
              work on [specific product/feature]. I noticed you're a [Role]
              there—would love to connect and learn about your journey.
            </p>
            <p className="mt-2">Best, [Your Name]</p>
          </div>

          <h3>After Connecting</h3>
          <p>Don't immediately ask for an internship. Follow this sequence:</p>
          <ol>
            <li>
              <strong>Week 1:</strong> Thank them, engage with their posts
            </li>
            <li>
              <strong>Week 2:</strong> Ask a genuine question about their work
            </li>
            <li>
              <strong>Week 3-4:</strong> Request a 15-min informational call
            </li>
            <li>
              <strong>After the call:</strong> Ask about internship
              opportunities or referrals
            </li>
          </ol>
        </section>

        {/* Section 3 */}
        <section
          id="cold-outreach"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            3. Cold Email That Actually Works
          </h2>

          <p>
            Cold emails work when done right. The key is{' '}
            <strong>providing value, not just asking for things.</strong>
          </p>

          <h3>The Winning Formula</h3>
          <div className="not-prose my-4 rounded-lg bg-primary/10 p-4">
            <ol className="space-y-2 text-sm">
              <li>
                <strong>1. Personalized hook:</strong> Show you've researched
                them/company
              </li>
              <li>
                <strong>2. Your value:</strong> What skills/projects make you
                useful
              </li>
              <li>
                <strong>3. Specific ask:</strong> One clear call-to-action
              </li>
              <li>
                <strong>4. Easy out:</strong> Make it easy to say no
              </li>
            </ol>
          </div>

          <h3>Example Cold Email</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              <strong>Subject:</strong> Quick question about [Company]'s
              [specific product] + internship inquiry
            </p>
            <br />
            <p>Hi [Name],</p>
            <p className="mt-2">
              I just read your blog post on [topic] and loved your point about
              [specific insight]. It made me rethink how I approach [related
              concept] in my own projects.
            </p>
            <p className="mt-2">
              I'm a 3rd year CS student at [College] who's built [relevant
              project - one line]. I'm looking to intern with a team working on
              [what they do], and [Company] keeps coming up in my research.
            </p>
            <p className="mt-2">
              Do you have 10 minutes for a quick call? I'd love to learn more
              about your team's work and see if there might be a fit for an
              internship.
            </p>
            <p className="mt-2">
              No worries if you're too busy—I know your time is valuable.
            </p>
            <p className="mt-2">
              Best,
              <br />
              [Name]
              <br />
              [LinkedIn] | [Portfolio/GitHub]
            </p>
          </div>

          <h3>Finding Emails</h3>
          <ul>
            <li>
              <strong>Hunter.io:</strong> Find email patterns for any company
            </li>
            <li>
              <strong>LinkedIn:</strong> Check "Contact info" section
            </li>
            <li>
              <strong>Company websites:</strong> Team pages often have emails
            </li>
            <li>
              <strong>Pattern guessing:</strong> firstname@company.com,
              first.last@company.com
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section
          id="alumni"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            4. Alumni Network Power
          </h2>

          <p>
            Alumni are <strong>5x more likely to respond</strong> to students
            from their college. Here's how to leverage this:
          </p>

          <h3>Finding Alumni</h3>
          <ul>
            <li>
              <strong>LinkedIn:</strong> Search → Filter by School → Filter by
              Company
            </li>
            <li>
              <strong>College Alumni Portal:</strong> Most colleges have alumni
              databases
            </li>
            <li>
              <strong>Alumni WhatsApp/Telegram Groups:</strong> Ask placement
              cell for access
            </li>
          </ul>

          <h3>Alumni Outreach Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>Hi [Name],</p>
            <p className="mt-2">
              I'm a fellow [College] alumnus (batch [Year], [Branch]). I came
              across your profile while researching careers in [field] and was
              inspired by your journey to [Company].
            </p>
            <p className="mt-2">
              As a senior who's been there, I'd be incredibly grateful for 15
              minutes of your time to get advice on breaking into the industry.
              I'm particularly interested in [specific area].
            </p>
            <p className="mt-2">
              Would you be open to a quick call sometime this week?
            </p>
            <p className="mt-2">
              Thanks for considering!
              <br />
              [Name]
            </p>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> After the call, always send a thank-you
              message. Update them on your progress later—this builds lasting
              relationships.
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section
          id="events"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            5. Events & Communities
          </h2>

          <p>
            In-person and online events are goldmines for hidden opportunities:
          </p>

          <h3>Where to Find Opportunities</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">Tech Events</p>
              <ul className="space-y-1">
                <li>• Hackathons (companies recruit winners)</li>
                <li>• Meetups (Mumbai Tech, Bangalore JS, etc.)</li>
                <li>• Conferences (nullcon, GDG DevFests)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">Online Communities</p>
              <ul className="space-y-1">
                <li>• Discord servers (specific tech communities)</li>
                <li>• Telegram groups (startup/tech focused)</li>
                <li>• Twitter/X tech community</li>
              </ul>
            </div>
          </div>

          <h3>Event Networking Tips</h3>
          <ul>
            <li>Prepare a 30-second intro about yourself</li>
            <li>Ask questions during sessions—it makes you visible</li>
            <li>Connect on LinkedIn same day while they remember you</li>
            <li>Follow up within 48 hours with a personalized message</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section
          id="direct"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            6. Direct Company Outreach
          </h2>

          <p>
            Sometimes the best approach is going directly to companies you want
            to work for:
          </p>

          <h3>Identify Target Companies</h3>
          <ul>
            <li>
              <strong>Recently funded startups:</strong> Check Inc42, YourStory
              for funding news
            </li>
            <li>
              <strong>Companies launching new products:</strong> They need hands
              on deck
            </li>
            <li>
              <strong>Companies hiring senior roles:</strong> They might need
              interns to support
            </li>
          </ul>

          <h3>The Proactive Application</h3>
          <p>Even if no internship is posted, reach out with:</p>
          <ol>
            <li>A brief pitch of what you can do</li>
            <li>1-2 relevant project examples</li>
            <li>Specific ideas on how you could help</li>
            <li>
              Offer to work on a trial project (paid or unpaid, short term)
            </li>
          </ol>

          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 text-sm font-bold">Success Story</p>
            <p className="text-sm">
              "I emailed 30 startups that weren't hiring. 8 responded. 3 offered
              short projects. 1 became a 6-month internship that converted to a
              full-time role." — Arjun, SDE at a Series B startup
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section
          id="timing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            7. Timing Your Approach
          </h2>

          <p>When you reach out matters as much as how you reach out:</p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Target</th>
                  <th className="border p-3 text-left">
                    Best Time to Reach Out
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Summer Internships</td>
                  <td className="border p-3">
                    October-January (4-6 months before)
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3">Startups (anytime)</td>
                  <td className="border p-3">
                    After funding announcements, product launches
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">LinkedIn Messages</td>
                  <td className="border p-3">
                    Tuesday-Thursday, 9-11 AM or 2-4 PM
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3">Cold Emails</td>
                  <td className="border p-3">Tuesday-Wednesday mornings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8 */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            8. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                How many messages should I send per day?
              </p>
              <p className="mt-2 text-muted-foreground">
                Quality over quantity. Send 5-10 highly personalized messages
                rather than 50 generic ones. LinkedIn may also restrict you if
                you send too many.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if no one responds?</p>
              <p className="mt-2 text-muted-foreground">
                Expected response rate is 20-30%. Follow up once after 5-7 days.
                If still no response, move on. Don't take it personally—people
                are busy.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is cold outreach too aggressive?</p>
              <p className="mt-2 text-muted-foreground">
                Not if done respectfully. Professionals expect it. The key is
                being genuine, providing value, and making it easy to say no.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I offer to work for free?</p>
              <p className="mt-2 text-muted-foreground">
                Offer a short trial project (1-2 weeks) if needed to prove
                yourself. But set expectations that longer work should be
                compensated.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Unlocking Hidden Opportunities</h2>
          <p>
            The hidden job market isn't really hidden—it's just accessed
            differently. While others spam job portals, you can build
            relationships, provide value, and create opportunities that don't
            exist yet.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your next internship might be one conversation away. Start reaching
            out today. 🎯
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization Guide
            </Link>
            <Link
              href="/blog/student-networking-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Complete Networking Guide
            </Link>
            <Link
              href="/blog/write-effective-cover-letter"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cover Letter Writing Guide
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
                Based on interviews with 50+ hiring managers and analysis of
                successful outreach strategies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
