import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Crown,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Star,
  Megaphone,
  ClipboardList,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leadership Skills for Interns: Complete Guide',
  description:
    'Develop leadership skills as an intern. Learn to take initiative, influence without authority, and stand out for promotions.',
  keywords: [
    'leadership skills',
    'intern leadership',
    'take initiative',
    'influence without authority',
    'leadership development',
  ],
  openGraph: {
    title: 'Leadership Skills for Interns: Complete Guide',
    description: 'Lead even as an intern.',
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
          <div className="mb-4 flex items-center gap-2 text-yellow-600">
            <Crown className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Leadership
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Leadership Skills for Interns: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            You don't need a title to be a leader. Learn how to demonstrate
            leadership as an intern and stand out.
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

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. What Leadership Means
              </a>
            </li>
            <li>
              <a
                href="#behaviors"
                className="text-primary hover:underline"
              >
                2. Leadership Behaviors
              </a>
            </li>
            <li>
              <a
                href="#initiative"
                className="text-primary hover:underline"
              >
                3. Taking Initiative
              </a>
            </li>
            <li>
              <a
                href="#influence"
                className="text-primary hover:underline"
              >
                4. Influence Without Authority
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                5. Common Mistakes
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
              <span>Leadership is about behaviors, not titles</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Taking ownership and initiative is what separates leaders
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>You can influence without formal authority</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Leaders make others better, not just themselves</span>
            </li>
          </ul>
        </div>

        {/* Section 1: What */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            1. What Leadership Means
          </h2>

          <p>Leadership isn't about:</p>
          <ul>
            <li>❌ Having a fancy title</li>
            <li>❌ Telling others what to do</li>
            <li>❌ Being the loudest voice in the room</li>
          </ul>

          <p>Leadership IS about:</p>
          <ul>
            <li>✅ Taking ownership of outcomes</li>
            <li>✅ Making others around you better</li>
            <li>✅ Stepping up when no one else will</li>
            <li>✅ Communicating clearly and inspiring action</li>
          </ul>
        </section>

        {/* Section 2: Behaviors */}
        <section
          id="behaviors"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <ClipboardList className="h-6 w-6 text-primary" />
            2. Leadership Behaviors
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Ownership</p>
              <p className="text-muted-foreground">
                "This is my responsibility"—not "This isn't my job"
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Proactivity</p>
              <p className="text-muted-foreground">
                See problems → Suggest solutions → Implement them
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Reliability</p>
              <p className="text-muted-foreground">
                Do what you say. Every time.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Growth Mindset</p>
              <p className="text-muted-foreground">
                Seek feedback. Learn from failures. Improve constantly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Initiative */}
        <section
          id="initiative"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. Taking Initiative
          </h2>

          <ul>
            <li>
              <strong>Identify gaps:</strong> What's falling through the cracks?
              Fill that gap.
            </li>
            <li>
              <strong>Propose solutions:</strong> Don't just point out
              problems—suggest fixes.
            </li>
            <li>
              <strong>Volunteer:</strong> Raise your hand for challenging
              projects.
            </li>
            <li>
              <strong>Document:</strong> Create guides, SOPs, or resources that
              help the team.
            </li>
            <li>
              <strong>Connect dots:</strong> Bring ideas from one area to
              improve another.
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Ask your manager: "What's one thing that
              would make a big impact but no one has time for?" Then do it.
            </div>
          </div>
        </section>

        {/* Section 4: Influence */}
        <section
          id="influence"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Megaphone className="h-6 w-6 text-primary" />
            4. Influence Without Authority
          </h2>

          <p>You can influence even without being the boss:</p>
          <ul>
            <li>
              <strong>Build relationships:</strong> People help those they like
              and trust
            </li>
            <li>
              <strong>Be the expert:</strong> Deep knowledge earns respect
            </li>
            <li>
              <strong>Ask great questions:</strong> Questions can shift thinking
            </li>
            <li>
              <strong>Give credit:</strong> Highlight others' contributions
            </li>
            <li>
              <strong>Be consistent:</strong> Reliability builds credibility
            </li>
          </ul>
        </section>

        {/* Section 5: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Common Mistakes
          </h2>

          <ul>
            <li>❌ Overstepping—know your boundaries as an intern</li>
            <li>❌ Taking credit for team work</li>
            <li>❌ Not asking for help when stuck</li>
            <li>❌ Focusing only on tasks, not relationships</li>
            <li>❌ Waiting to be told what to do</li>
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
              <p className="font-bold">
                I'm just an intern. Can I really lead?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Leadership is demonstrated through actions, not
                titles. Some of the most impactful leaders start as interns who
                take initiative.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if I'm wrong or make mistakes?</p>
              <p className="mt-2 text-muted-foreground">
                Leaders make mistakes. What matters is owning them, learning
                from them, and improving. That's how you build trust.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Styles */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-primary" />
            Leadership Styles for Interns
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-yellow-600">
                Servant Leadership
              </h4>
              <p className="text-sm text-muted-foreground">
                Focus on helping others succeed. Ask "How can I help?" rather
                than "What can I get?" This builds trust and respect naturally.
              </p>
              <p className="mt-2 text-xs font-semibold">
                Best for: Building relationships, earning trust quickly
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-yellow-600">
                Lead by Example
              </h4>
              <p className="text-sm text-muted-foreground">
                Show high standards in your own work. Work ethic, attention to
                detail, and professionalism are contagious.
              </p>
              <p className="mt-2 text-xs font-semibold">
                Best for: Demonstrating competence, inspiring others
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-yellow-600">
                Collaborative Leadership
              </h4>
              <p className="text-sm text-muted-foreground">
                Bring people together. Facilitate discussions, gather input, and
                help build consensus.
              </p>
              <p className="mt-2 text-xs font-semibold">
                Best for: Cross-functional projects, team building
              </p>
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Leadership in Action: Real Examples
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-5 dark:bg-yellow-950">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                Creating a Documentation System
              </p>
              <p className="mt-2 text-sm text-yellow-800 dark:text-yellow-200">
                "I noticed our team kept asking the same onboarding questions. I
                created a simple Notion wiki with FAQs and guides. Now new
                members get up to speed 50% faster, and my manager mentioned it
                in my review."
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-5 dark:bg-yellow-950">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                Starting a Weekly Sync
              </p>
              <p className="mt-2 text-sm text-yellow-800 dark:text-yellow-200">
                "I proposed a 15-minute Friday sync for interns to share
                learnings. It became so valuable that full-time employees
                started joining. I didn't ask for permission—I just invited
                people and made it happen."
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-5 dark:bg-yellow-950">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                Identifying a Process Gap
              </p>
              <p className="mt-2 text-sm text-yellow-800 dark:text-yellow-200">
                "I noticed our code reviews were getting stuck. I created a
                rotation system and a Slack reminder. Reduced review time from 2
                days to 4 hours. This became standard process for the team."
              </p>
            </div>
          </div>
        </section>

        {/* Communication Skills */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Megaphone className="h-6 w-6 text-primary" />
            Communication for Leaders
          </h2>

          <p>
            Leadership requires effective communication. Here are key skills:
          </p>

          <h3>1. Active Listening</h3>
          <ul>
            <li>Give full attention—put away devices</li>
            <li>Ask clarifying questions</li>
            <li>Summarize what you heard before responding</li>
            <li>Show empathy before offering solutions</li>
          </ul>

          <h3>2. Giving Constructive Feedback</h3>
          <ul>
            <li>
              Be specific, not vague ("This line could be clearer" vs "This is
              confusing")
            </li>
            <li>Focus on behavior/work, not personality</li>
            <li>Offer suggestions, not just criticism</li>
            <li>Use "I noticed" instead of "You always"</li>
          </ul>

          <h3>3. Asking for What You Need</h3>
          <ul>
            <li>Be direct and specific</li>
            <li>Explain the "why" behind your request</li>
            <li>Propose solutions, not just problems</li>
            <li>Follow up and express gratitude</li>
          </ul>
        </section>

        {/* Stakeholder Management */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            Managing Up and Sideways
          </h2>

          <h3>Managing Your Manager</h3>
          <div className="not-prose my-4 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">
                Understand their priorities and pressures
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">
                Communicate proactively—don't make them chase you
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">
                Come with solutions, not just problems
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">Ask for feedback regularly</span>
            </div>
          </div>

          <h3>Building Peer Relationships</h3>
          <div className="not-prose my-4 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">
                Be genuinely helpful—offer assistance proactively
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">Share credit generously</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">
                Connect people who could benefit from knowing each other
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm">
                Be reliable—follow through on commitments
              </span>
            </div>
          </div>
        </section>

        {/* Daily Leadership Habits */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Daily Leadership Habits
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Time</th>
                  <th className="border p-3 text-left font-semibold">Habit</th>
                  <th className="border p-3 text-left font-semibold">
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Morning</td>
                  <td className="border p-3">Review priorities for the day</td>
                  <td className="border p-3">
                    Stay focused on high-impact work
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Meetings</td>
                  <td className="border p-3">
                    Prepare agenda/questions in advance
                  </td>
                  <td className="border p-3">Show you value others' time</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">During Work</td>
                  <td className="border p-3">Document as you go</td>
                  <td className="border p-3">Create institutional knowledge</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">After Work</td>
                  <td className="border p-3">Reflect on what you learned</td>
                  <td className="border p-3">
                    Accelerate growth through reflection
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Weekly</td>
                  <td className="border p-3">Check in with key stakeholders</td>
                  <td className="border p-3">
                    Build relationships proactively
                  </td>
                </tr>
              </tbody>
            </table>
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
                How do I lead without overstepping as an intern?
              </h3>
              <p className="text-muted-foreground">
                Focus on your sphere of influence first. Excel at your assigned
                work, then gradually expand. Always frame suggestions
                respectfully: "I noticed X, would it be helpful if I tried Y?"
                Ask permission for bigger initiatives.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if my ideas are ignored or rejected?
              </h3>
              <p className="text-muted-foreground">
                It's normal and not personal. Leaders face rejection constantly.
                Ask for feedback on why, learn from it, and keep contributing.
                Your persistence itself demonstrates leadership.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I handle conflicts with teammates?
              </h3>
              <p className="text-muted-foreground">
                Address issues directly but privately. Focus on the work, not
                personalities. Seek to understand their perspective first. Find
                common ground and propose solutions together.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can introverts be leaders?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. Introverts often excel at deep listening, thoughtful
                analysis, and one-on-one relationships. Leadership isn't about
                being the loudest voice—it's about making impact.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I know if I'm ready for more responsibility?
              </h3>
              <p className="text-muted-foreground">
                When your current work is consistently excellent and you're
                looking for more, you're ready. Don't wait to be asked—propose
                what you'd like to take on and why you're the right person.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What books should I read on leadership?
              </h3>
              <p className="text-muted-foreground">
                Start with: "The Making of a Manager" (Julie Zhuo), "Radical
                Candor" (Kim Scott), "Leaders Eat Last" (Simon Sinek), and "The
                First 90 Days" (Michael Watkins). These are practical and
                accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Intern Leadership Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "From intern to team lead in 2 years..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I started as a marketing intern. I noticed our content calendar
                was chaotic, so I built a simple system to track it. That small
                initiative got noticed. I was offered a full-time role, and two
                years later I'm leading the content team." — Priya, EdTech
                Startup
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Speaking up in meetings changed everything..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I was terrified of speaking in meetings. Then I prepared one
                insight about our competitors before each meeting. People
                started asking for my opinion. That visibility led to my
                conversion offer." — Rahul, Amazon
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Helping others helped me stand out..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I spent time helping other interns debug their code and
                understand processes. My manager noticed I was a 'multiplier'
                who made others better. That was mentioned as a key reason for
                my PPO." — Ankita, Flipkart
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <ClipboardList className="h-6 w-6 text-primary" />
            Weekly Leadership Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Took initiative on at least one thing</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Helped a teammate without being asked</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Proposed a solution to a problem</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Asked for feedback on my work</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Gave genuine recognition to someone</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Documented something for future reference</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Reflected on what I learned this week</span>
            </div>
          </div>
        </section>

        {/* Leadership Mindset Shifts */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Mindset Shifts for Leaders
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    From (Follower)
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    To (Leader)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">"That's not my job"</td>
                  <td className="border p-3 font-semibold text-green-600">
                    "How can I help?"
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">"I wasn't told to do that"</td>
                  <td className="border p-3 font-semibold text-green-600">
                    "I noticed an opportunity"
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">"Here's the problem"</td>
                  <td className="border p-3 font-semibold text-green-600">
                    "Here's a potential solution"
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">"I did my part"</td>
                  <td className="border p-3 font-semibold text-green-600">
                    "Is there anything else needed?"
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">"I got credit"</td>
                  <td className="border p-3 font-semibold text-green-600">
                    "We succeeded together"
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">"I failed"</td>
                  <td className="border p-3 font-semibold text-green-600">
                    "I learned something valuable"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Step Back */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Knowing When to Step Back
          </h2>

          <p>Good leaders also know when NOT to lead:</p>

          <ul>
            <li>
              <strong>When someone else is better suited:</strong> Let experts
              lead in their domain
            </li>
            <li>
              <strong>When you're overextended:</strong> Don't sacrifice quality
              by taking on too much
            </li>
            <li>
              <strong>When it's not your place:</strong> Respect organizational
              hierarchy when appropriate
            </li>
            <li>
              <strong>When you need to learn:</strong> Sometimes being a
              follower teaches you more
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Balance is key:</strong> The best leaders know when to
              step forward and when to create space for others to lead. As an
              intern, this discernment will earn you respect.
            </div>
          </div>
        </section>

        {/* Building Your Leadership Brand */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Building Your Leadership Brand
          </h2>

          <p>
            What do you want to be known for? Build a reputation intentionally:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Be Known For Quality</h4>
              <p className="text-sm text-muted-foreground">
                Deliver excellent work consistently. Double-check your output.
                Ask for reviews before final submission.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Be Known For Reliability</h4>
              <p className="text-sm text-muted-foreground">
                Never miss deadlines. Communicate early if you foresee issues.
                Follow through on every commitment, big or small.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Be Known For Positivity</h4>
              <p className="text-sm text-muted-foreground">
                Focus on solutions, not complaints. Be the person who lifts team
                morale. Celebrate others' wins.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Be Known For Initiative</h4>
              <p className="text-sm text-muted-foreground">
                Don't wait to be told. See gaps and fill them. Propose
                improvements before they're asked for.
              </p>
            </div>
          </div>
        </section>

        {/* Long-Term Career Impact */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Long-Term Career Impact
          </h2>

          <p>
            Developing leadership skills as an intern pays dividends throughout
            your career:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4 text-center">
              <p className="text-3xl font-bold text-yellow-600">2x</p>
              <p className="text-sm text-muted-foreground">
                Higher conversion rates for interns who demonstrate leadership
              </p>
            </div>

            <div className="rounded-lg border p-4 text-center">
              <p className="text-3xl font-bold text-yellow-600">50%</p>
              <p className="text-sm text-muted-foreground">
                Faster promotions for those with early leadership experience
              </p>
            </div>

            <div className="rounded-lg border p-4 text-center">
              <p className="text-3xl font-bold text-yellow-600">3x</p>
              <p className="text-sm text-muted-foreground">
                Better references and recommendations
              </p>
            </div>

            <div className="rounded-lg border p-4 text-center">
              <p className="text-3xl font-bold text-yellow-600">∞</p>
              <p className="text-sm text-muted-foreground">
                Lifelong skill that compounds with experience
              </p>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Your Next 7 Days: Action Plan
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                1
              </div>
              <div>
                <p className="font-semibold">Day 1: Identify One Problem</p>
                <p className="text-sm text-muted-foreground">
                  Find one small problem your team faces that you could help
                  solve.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                2
              </div>
              <div>
                <p className="font-semibold">Day 2: Propose a Solution</p>
                <p className="text-sm text-muted-foreground">
                  Suggest a solution to your manager or team. Frame it
                  positively.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                3
              </div>
              <div>
                <p className="font-semibold">Day 3: Help a Peer</p>
                <p className="text-sm text-muted-foreground">
                  Proactively offer help to someone on your team.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                4
              </div>
              <div>
                <p className="font-semibold">Day 4: Ask for Feedback</p>
                <p className="text-sm text-muted-foreground">
                  Request specific feedback on your recent work from your
                  manager.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                5
              </div>
              <div>
                <p className="font-semibold">Day 5: Document Something</p>
                <p className="text-sm text-muted-foreground">
                  Create a guide or FAQ for something you've learned.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                6
              </div>
              <div>
                <p className="font-semibold">Day 6: Give Recognition</p>
                <p className="text-sm text-muted-foreground">
                  Publicly thank someone who helped you this week.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
                7
              </div>
              <div>
                <p className="font-semibold">Day 7: Reflect and Plan</p>
                <p className="text-sm text-muted-foreground">
                  Review what you learned this week. Set leadership goals for
                  next week.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Lead From Where You Are</h2>
          <p>
            Leadership isn't about position—it's about action. Start leading
            today, wherever you are, and watch opportunities follow.
          </p>
          <p>
            The most impactful leaders aren't born—they're made through daily
            choices. Every time you take ownership, help a teammate, or propose
            a solution, you're building your leadership muscle.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best time to start leading is now. Begin today. 👑
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/soft-skills-development-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Soft Skills Development
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/convert-internship-to-job"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Internship to Job
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
                Based on insights from managers and successful interns.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
