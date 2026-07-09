import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Rocket,
  Zap,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Coffee,
  AlertCircle,
  Heart,
  Target,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Startup Culture for First-Time Interns',
  description:
    'Navigate startup culture with confidence. Learn what to expect in your first week, how to thrive in fast-paced environments, and avoid common mistakes.',
  keywords: [
    'startup culture',
    'startup internship',
    'first week at startup',
    'startup work environment',
    'startup tips',
    'startup mindset',
  ],
  openGraph: {
    title: 'Understanding Startup Culture: First-Time Intern Guide',
    description: 'Complete guide to thriving in your first startup internship.',
    type: 'article',
    publishedTime: '2025-09-25T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Rocket className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Startup Life
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Understanding Startup Culture: What to Expect in Your First Week
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Startup culture is unique—exciting, chaotic, and rewarding.
            Here&apos;s how to navigate your first week and thrive in this
            fast-paced environment.
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

        {/* Key Differences */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Zap className="h-5 w-5 text-orange-600" />
            Startup vs. Corporate: Quick Facts
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">10-50</span>
              <span>typical startup team size vs. 1000s at corporates</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">3-5x</span>
              <span>faster decision-making than large companies</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">Days</span>
              <span>to ship features that take months at enterprises</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">Direct</span>
              <span>access to founders and C-suite leadership</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#expect"
                className="text-primary hover:underline"
              >
                1. What to Expect Day 1-5
              </a>
            </li>
            <li>
              <a
                href="#culture"
                className="text-primary hover:underline"
              >
                2. Startup Culture Pillars
              </a>
            </li>
            <li>
              <a
                href="#mindset"
                className="text-primary hover:underline"
              >
                3. The Startup Mindset
              </a>
            </li>
            <li>
              <a
                href="#communication"
                className="text-primary hover:underline"
              >
                4. Communication Norms
              </a>
            </li>
            <li>
              <a
                href="#thrive"
                className="text-primary hover:underline"
              >
                5. How to Thrive
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                6. Common Mistakes
              </a>
            </li>
            <li>
              <a
                href="#questions"
                className="text-primary hover:underline"
              >
                7. Questions to Ask
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="text-primary hover:underline"
              >
                8. First Week Checklist
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            Starting at a startup can feel like stepping into a different
            universe compared to traditional corporate environments. The pace is
            faster, the rules are fewer, and the impact you can have is
            outsized.
          </p>
          <p>
            This guide will help you understand what makes startup culture
            unique and how to navigate your first week—and beyond.
          </p>
        </section>

        {/* Day by Day */}
        <section
          id="expect"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. What to Expect Day 1-5
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold">📅 Day 1: Orientation & Setup</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Get laptop, tools, and access set up</li>
                <li>• Meet your manager and immediate team</li>
                <li>• Get Slack/Discord invited to channels</li>
                <li>• Understand your first project or task</li>
              </ul>
            </div>
            <div className="rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="font-bold">📅 Day 2-3: Learning & Observing</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Attend team standups and meetings</li>
                <li>• Read documentation (if it exists!)</li>
                <li>• Schedule 1-on-1s with team members</li>
                <li>• Start small tasks to get familiar with codebase/tools</li>
              </ul>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">📅 Day 4-5: First Contribution</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>• Complete your first meaningful task</li>
                <li>• Ask lots of questions</li>
                <li>• Meet cross-functional team members</li>
                <li>• Get feedback on your initial work</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Don&apos;t wait for a perfect onboarding
              process. Startups often don&apos;t have one. Be proactive about
              finding the information you need.
            </div>
          </div>
        </section>

        {/* Culture Pillars */}
        <section
          id="culture"
          className="scroll-mt-20"
        >
          <h2>2. The 7 Pillars of Startup Culture</h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <Zap className="h-4 w-4 text-orange-500" />
                1. Speed Over Perfection
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Startups prioritize shipping quickly and iterating. &quot;Done
                is better than perfect&quot; is the mantra. Don&apos;t spend
                weeks perfecting something—get feedback early.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <Users className="h-4 w-4 text-blue-500" />
                2. Flat Hierarchy
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                You might sit next to the CEO and have lunch together. Ideas are
                valued regardless of title. Speak up, share your thoughts, and
                don&apos;t wait for permission.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <Rocket className="h-4 w-4 text-purple-500" />
                3. High Ownership
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                You own your work end-to-end. No one else is coming to fix your
                bugs or complete your tasks. With ownership comes
                responsibility—and visibility.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <Heart className="h-4 w-4 text-red-500" />
                4. Mission-Driven
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Startups are building something that doesn&apos;t exist.
                There&apos;s usually a strong mission that motivates the team.
                Understand it and connect personally with it.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <MessageSquare className="h-4 w-4 text-green-500" />
                5. Radical Transparency
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Many startups share financials, metrics, and strategy with the
                entire team. Don&apos;t be surprised if you see the
                company&apos;s burn rate in a team meeting.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <Coffee className="h-4 w-4 text-amber-500" />
                6. Wearing Many Hats
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Job descriptions are guidelines, not contracts. You might be
                hired as a developer but end up doing customer support, writing
                docs, or hiring.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="flex items-center gap-2 font-bold">
                <AlertCircle className="h-4 w-4 text-cyan-500" />
                7. Comfort with Ambiguity
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Things change constantly. Today&apos;s priority might not be
                tomorrow&apos;s. Learn to be comfortable with &quot;we&apos;ll
                figure it out as we go.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Mindset */}
        <section
          id="mindset"
          className="scroll-mt-20"
        >
          <h2>3. The Startup Mindset</h2>

          <p>Thriving at a startup requires a specific mental framework:</p>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 font-bold text-green-700">
                ✅ Think Like This
              </p>
              <ul className="space-y-1">
                <li>• &quot;How can I figure this out?&quot;</li>
                <li>• &quot;That&apos;s not my job&quot; doesn&apos;t exist</li>
                <li>• Failure is learning, not shame</li>
                <li>• Ask for forgiveness, not permission</li>
                <li>• Done today beats perfect next week</li>
              </ul>
            </div>
            <div className="rounded-lg border border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 font-bold text-red-700">
                ❌ Avoid This Mindset
              </p>
              <ul className="space-y-1">
                <li>• &quot;Someone should tell me what to do&quot;</li>
                <li>• Waiting for detailed instructions</li>
                <li>• Fear of making mistakes</li>
                <li>
                  • &quot;That&apos;s how we did it at my last internship&quot;
                </li>
                <li>• Perfectionism paralysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Communication */}
        <section
          id="communication"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            4. Communication Norms at Startups
          </h2>

          <h3>Tools You&apos;ll Likely Use</h3>
          <ul>
            <li>
              <strong>Slack/Discord:</strong> Instant messaging, the lifeblood
              of startup communication
            </li>
            <li>
              <strong>Notion/Coda:</strong> Documentation and knowledge base
            </li>
            <li>
              <strong>Linear/Jira:</strong> Task and project management
            </li>
            <li>
              <strong>GitHub:</strong> Code collaboration
            </li>
            <li>
              <strong>Figma:</strong> Design collaboration
            </li>
          </ul>

          <h3>Communication Tips</h3>
          <ul>
            <li>
              <strong>Default to public channels:</strong> Don&apos;t DM when a
              channel message works
            </li>
            <li>
              <strong>Over-communicate:</strong> Share what you&apos;re working
              on, what&apos;s blocking you
            </li>
            <li>
              <strong>Use async communication:</strong> Respect that not
              everyone is available real-time
            </li>
            <li>
              <strong>Be direct:</strong> Startup communication tends to be
              blunt and to-the-point
            </li>
            <li>
              <strong>Document decisions:</strong> Write things down so others
              can reference later
            </li>
          </ul>

          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">
              Sample Slack Message (Good vs. Bad)
            </p>
            <p className="text-red-600">❌ &quot;Hey, can you help me?&quot;</p>
            <p className="text-green-600">
              ✅ &quot;Hey @Sarah - I&apos;m stuck on the API integration.
              I&apos;ve tried X and Y but getting this error [screenshot]. Do
              you have 10 mins today to pair?&quot;
            </p>
          </div>
        </section>

        {/* Thrive */}
        <section
          id="thrive"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            5. How to Thrive in Your First Week
          </h2>

          <h3>1. Listen and Learn First</h3>
          <p>
            Resist the urge to suggest changes immediately. Spend your first
            week understanding how things work and why they work that way.
          </p>

          <h3>2. Ask Questions (Lots of Them)</h3>
          <p>
            There are no stupid questions. The only mistake is staying stuck and
            not asking. Batch your questions if possible to be respectful of
            others&apos; time.
          </p>

          <h3>3. Find Quick Wins</h3>
          <p>
            Look for small improvements you can make quickly. Fix a typo in
            docs. Improve an error message. Small wins build credibility fast.
          </p>

          <h3>4. Build Relationships Early</h3>
          <p>
            Schedule informal 1-on-1s with team members. Ask about their role,
            their challenges, and their journey to the company. These
            relationships will help you immensely.
          </p>

          <h3>5. Take Notes Obsessively</h3>
          <p>
            Write down everything. Names, processes, acronyms, context.
            You&apos;ll forget 90% of what you hear in week one. Notes are your
            safety net.
          </p>
        </section>

        {/* Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            6. Common First-Week Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Waiting for Formal Training</p>
              <p className="text-sm">
                Startups often don&apos;t have structured onboarding. Take
                initiative to learn on your own.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Staying Silent in Meetings</p>
              <p className="text-sm">
                Your perspective matters. Ask a question, share an observation.
                Visibility matters.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Being Afraid to Ask for Help</p>
              <p className="text-sm">
                Struggling alone for hours is inefficient. Ask for help after a
                reasonable attempt.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">
                ❌ Criticizing How Things Are Done
              </p>
              <p className="text-sm">
                Understand before you suggest changes. Ask &quot;why is it done
                this way?&quot; not &quot;this is wrong.&quot;
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Working in Isolation</p>
              <p className="text-sm">
                Startups are collaborative. Share your work early, get feedback
                often, don&apos;t disappear.
              </p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section
          id="questions"
          className="scroll-mt-20"
        >
          <h2>7. Great Questions to Ask in Week One</h2>

          <h3>Ask Your Manager</h3>
          <ul>
            <li>
              &quot;What does success look like for me in my first month?&quot;
            </li>
            <li>
              &quot;What are the team&apos;s biggest priorities right now?&quot;
            </li>
            <li>&quot;How do you prefer to receive updates from me?&quot;</li>
            <li>
              &quot;What&apos;s something you wish you knew when you started
              here?&quot;
            </li>
          </ul>

          <h3>Ask Your Teammates</h3>
          <ul>
            <li>
              &quot;What&apos;s the best way to get up to speed on
              [project/codebase]?&quot;
            </li>
            <li>
              &quot;What&apos;s something I should know that&apos;s not
              documented?&quot;
            </li>
            <li>
              &quot;What tools and processes do you find most helpful?&quot;
            </li>
            <li>&quot;Who else should I talk to understand [area]?&quot;</li>
          </ul>

          <h3>Ask the Founders (If Accessible)</h3>
          <ul>
            <li>
              &quot;What problem are we solving and why does it matter?&quot;
            </li>
            <li>
              &quot;What&apos;s the company&apos;s biggest challenge right
              now?&quot;
            </li>
            <li>&quot;What kind of person thrives here vs. struggles?&quot;</li>
          </ul>
        </section>

        {/* Checklist */}
        <section
          id="checklist"
          className="not-prose scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            8. First Week Survival Checklist
          </h2>

          <div className="space-y-2">
            {[
              'Get all tools, accounts, and access set up',
              'Understand the company mission and product',
              'Meet your immediate team and manager',
              'Schedule 1-on-1s with at least 3 teammates',
              'Attend your first team standup/meeting',
              'Read available documentation about your project area',
              'Complete at least one small, meaningful task',
              'Ask your manager what success looks like for you',
              'Join the key Slack/Discord channels',
              'Set up your development environment (if technical)',
              "Learn the team's communication norms",
              'Write down questions and get them answered',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Embrace the Chaos</h2>

          <p>
            Startup culture can feel chaotic, especially in your first week.
            Things change fast. Processes don&apos;t always exist. You might
            feel lost.
          </p>

          <p>
            But that&apos;s exactly what makes it exciting. You&apos;ll learn
            faster, have more impact, and grow in ways that structured
            environments can&apos;t offer.
          </p>

          <p className="text-lg font-semibold text-primary">
            Embrace the uncertainty. Take ownership. Move fast. You&apos;ll be
            amazed at how much you can accomplish. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/startup-vs-corporate-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Startup vs Corporate Internships
            </Link>
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Internship to Full-Time
            </Link>
            <Link
              href="/blog/skills-startup-recruiters-want"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Skills Startup Recruiters Want
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Startup Internships
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
                We&apos;ve placed thousands of interns at startups from pre-seed
                to unicorn stage across India.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
