import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  MessageCircle,
  Presentation,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Mic,
  Mail,
  PenLine,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Communication Skills for Interns: Complete Guide',
  description:
    'Master professional communication for internships. Learn email etiquette, meeting skills, giving updates, and building relationships at work.',
  keywords: [
    'communication skills internship',
    'workplace communication',
    'email etiquette',
    'professional communication',
    'intern soft skills',
  ],
  openGraph: {
    title: 'Communication Skills for Interns: Complete Guide',
    description:
      'Master professional communication to stand out at your internship.',
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
          <div className="mb-4 flex items-center gap-2 text-pink-600">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Soft Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Communication Skills for Interns: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Technical skills get you the internship. Communication skills get
            you the job offer. Master the art of professional communication.
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
              <span>16 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-pink-500 bg-pink-50 p-6 dark:bg-pink-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-pink-600" />
            Why Communication Matters
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">85%</span>
              <span>of career success comes from soft skills</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">93%</span>
              <span>of employers value communication skills</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">#1</span>
              <span>skill managers look for in PPO decisions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-pink-600">2x</span>
              <span>more likely to get hired with strong communication</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#email"
                className="text-primary hover:underline"
              >
                1. Email Etiquette
              </a>
            </li>
            <li>
              <a
                href="#meetings"
                className="text-primary hover:underline"
              >
                2. Meeting Communication
              </a>
            </li>
            <li>
              <a
                href="#slack"
                className="text-primary hover:underline"
              >
                3. Slack/Chat Communication
              </a>
            </li>
            <li>
              <a
                href="#updates"
                className="text-primary hover:underline"
              >
                4. Giving Status Updates
              </a>
            </li>
            <li>
              <a
                href="#asking"
                className="text-primary hover:underline"
              >
                5. Asking Questions
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                className="text-primary hover:underline"
              >
                6. Receiving Feedback
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
              <span>Over-communicate rather than under-communicate</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Written communication should be clear, concise, and actionable
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Ask questions early and often—it shows engagement</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Proactive updates build trust more than waiting to be asked
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Email */}
        <section
          id="email"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            1. Email Etiquette
          </h2>

          <h3>Professional Email Structure</h3>
          <ul>
            <li>
              <strong>Subject:</strong> Clear, specific, action-oriented
            </li>
            <li>
              <strong>Greeting:</strong> "Hi [Name]," or "Hello [Name],"
            </li>
            <li>
              <strong>Body:</strong> Get to the point in the first 2 sentences
            </li>
            <li>
              <strong>Call to action:</strong> What do you need from them?
            </li>
            <li>
              <strong>Sign-off:</strong> "Best," "Thanks," or "Regards,"
            </li>
          </ul>

          <h3>Example</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Quick Question - API Documentation
              Location
            </p>
            <p className="mt-2">Hi Priya,</p>
            <p className="mt-2">
              I'm working on the user authentication feature and need to
              reference the API docs. Could you point me to where they're
              stored?
            </p>
            <p className="mt-2">Thanks for your help!</p>
            <p className="mt-1">
              Best,
              <br />
              Rahul
            </p>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Read your email out loud before sending.
              If it sounds long or confusing, rewrite it.
            </div>
          </div>
        </section>

        {/* Section 2: Meetings */}
        <section
          id="meetings"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Presentation className="h-6 w-6 text-primary" />
            2. Meeting Communication
          </h2>

          <h3>Before Meetings</h3>
          <ul>
            <li>Review the agenda (or ask for one if none exists)</li>
            <li>Prepare questions or updates in advance</li>
            <li>Join 1-2 minutes early, especially for video calls</li>
          </ul>

          <h3>During Meetings</h3>
          <ul>
            <li>Mute when not speaking (on video calls)</li>
            <li>Take notes—don't rely on memory</li>
            <li>Ask clarifying questions if confused</li>
            <li>Summarize action items at the end</li>
          </ul>

          <h3>After Meetings</h3>
          <p>
            Send a quick follow-up email summarizing action items and deadlines,
            especially for important discussions.
          </p>
        </section>

        {/* Section 3: Slack */}
        <section
          id="slack"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            3. Slack/Chat Communication
          </h2>

          <h3>Best Practices</h3>
          <ul>
            <li>
              <strong>Thread replies:</strong> Keep conversations organized
            </li>
            <li>
              <strong>Don't just say "Hi":</strong> Put your message right away
            </li>
            <li>
              <strong>Use @mentions wisely:</strong> Only tag people who need to
              see it
            </li>
            <li>
              <strong>Be responsive:</strong> Aim to reply within a few hours
            </li>
          </ul>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold">❌ Don't</p>
              <p className="mt-1">
                "Hi"
                <br />
                [waits for response]
                <br />
                "Are you free?"
                <br />
                [waits for response]
                <br />
                "I have a question"
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">✅ Do</p>
              <p className="mt-1">
                "Hi! I'm working on the dashboard and running into an issue with
                the chart component. Could you help when you have 5 mins?"
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Updates */}
        <section
          id="updates"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenLine className="h-6 w-6 text-primary" />
            4. Giving Status Updates
          </h2>

          <p>Proactive updates build trust. Use this format:</p>

          <div className="not-prose my-4 rounded-lg bg-primary/10 p-4">
            <p className="text-sm font-bold">Daily/Weekly Update Template</p>
            <ul className="mt-2 text-sm">
              <li>
                <strong>Done:</strong> What I completed since last update
              </li>
              <li>
                <strong>Doing:</strong> What I'm currently working on
              </li>
              <li>
                <strong>Blockers:</strong> Any issues slowing me down
              </li>
              <li>
                <strong>Next:</strong> What I plan to work on next
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Asking */}
        <section
          id="asking"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Mic className="h-6 w-6 text-primary" />
            5. Asking Questions
          </h2>

          <p>
            Asking questions is good—it shows engagement. But ask smart
            questions:
          </p>

          <h3>Before Asking</h3>
          <ol>
            <li>Google/search documentation first (10-15 mins)</li>
            <li>Check if it's already answered in Slack/docs</li>
            <li>Try to solve it yourself (show effort)</li>
          </ol>

          <h3>How to Ask</h3>
          <ul>
            <li>Explain what you're trying to do</li>
            <li>Share what you've already tried</li>
            <li>Be specific about where you're stuck</li>
          </ul>
        </section>

        {/* Section 6: Feedback */}
        <section
          id="feedback"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            6. Receiving Feedback
          </h2>

          <ul>
            <li>
              <strong>Listen first:</strong> Don't get defensive
            </li>
            <li>
              <strong>Ask questions:</strong> Clarify what you should do
              differently
            </li>
            <li>
              <strong>Thank them:</strong> Feedback is a gift, even when hard to
              hear
            </li>
            <li>
              <strong>Act on it:</strong> Show you've incorporated the feedback
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Communicate Your Way to Success</h2>
          <p>
            Great communication is what separates good interns from great ones.
            Practice these skills daily, and you'll stand out for all the right
            reasons.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your ideas are only as good as your ability to communicate them. 💬
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/virtual-internships-complete-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Virtual Internship Guide
            </Link>
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Internship to Job
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking for Introverts
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
                Based on feedback from 100+ hiring managers and intern mentors.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
