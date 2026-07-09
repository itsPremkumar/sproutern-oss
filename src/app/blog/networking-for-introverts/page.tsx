import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Users,
  UserPlus,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Target,
  MessageCircle,
  Heart,
  Coffee,
  Linkedin,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Networking for Introverts: A Complete Guide for Students',
  description:
    'Learn how to network effectively as an introvert. Get practical tips for building professional relationships without forcing yourself out of your comfort zone.',
  keywords: [
    'networking introverts',
    'introvert networking',
    'professional networking students',
    'build network quietly',
    'networking without small talk',
  ],
  openGraph: {
    title: 'Networking for Introverts: A Complete Guide',
    description: 'Build meaningful professional connections as an introvert.',
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
          <div className="mb-4 flex items-center gap-2 text-teal-600">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Professional Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Networking for Introverts: A Complete Guide for Students
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Hate small talk? Dread networking events? Good news: you can build a
            powerful network on your own terms. Here's how.
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
              <span>15 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#reframe"
                className="text-primary hover:underline"
              >
                1. Reframe Networking
              </a>
            </li>
            <li>
              <a
                href="#online"
                className="text-primary hover:underline"
              >
                2. Online Networking
              </a>
            </li>
            <li>
              <a
                href="#one-on-one"
                className="text-primary hover:underline"
              >
                3. 1-on-1 Connections
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="text-primary hover:underline"
              >
                4. Surviving Events
              </a>
            </li>
            <li>
              <a
                href="#maintain"
                className="text-primary hover:underline"
              >
                5. Maintaining Relationships
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
              <span>
                Depth beats breadth—5 strong connections is better than 100 weak
                ones
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Online networking is actually an introvert's superpower
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                1-on-1 coffee chats are more valuable than large networking
                events
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Give value first—networking is about helping, not asking
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Reframe */}
        <section
          id="reframe"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Reframe Networking
          </h2>

          <p>
            Networking isn't about being fake or collecting business cards. It's
            about building genuine relationships. As an introvert, this is
            actually your strength:
          </p>

          <ul>
            <li>
              <strong>Depth over breadth:</strong> You naturally prefer
              meaningful conversations
            </li>
            <li>
              <strong>Good listener:</strong> People love someone who actually
              listens
            </li>
            <li>
              <strong>Thoughtful:</strong> You think before you speak—valued in
              professional settings
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Mindset Shift:</strong> Instead of "How many people can I
              meet?", ask "How can I help 2-3 people today?"
            </div>
          </div>
        </section>

        {/* Section 2: Online */}
        <section
          id="online"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Linkedin className="h-6 w-6 text-primary" />
            2. Online Networking (Your Superpower)
          </h2>

          <p>
            The internet is built for introverts. You can network from home, on
            your own time, with time to think:
          </p>

          <h3>LinkedIn Strategies</h3>
          <ul>
            <li>
              Comment thoughtfully on posts by people in your target field
            </li>
            <li>
              Share your learnings and projects (it attracts connections to you)
            </li>
            <li>
              Send personalized connection requests with a specific reason
            </li>
            <li>React to posts before DM'ing—warm up the relationship</li>
          </ul>

          <h3>Twitter/X for Tech</h3>
          <ul>
            <li>Follow and engage with developers in your area</li>
            <li>Share what you're building (#buildinpublic)</li>
            <li>Join Twitter Spaces related to your field</li>
          </ul>
        </section>

        {/* Section 3: 1-on-1 */}
        <section
          id="one-on-one"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Coffee className="h-6 w-6 text-primary" />
            3. 1-on-1 Connections
          </h2>

          <p>
            Forget large events. The most valuable networking happens in 1-on-1
            conversations:
          </p>

          <h3>Coffee Chat Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              "Hi [Name], I'm a [year] student at [College] interested in [their
              field]. I've been following your work on [specific thing]. Would
              you have 15 minutes for a quick call? I'd love to learn about your
              journey."
            </p>
          </div>

          <h3>Questions to Ask</h3>
          <ul>
            <li>What's a typical day like in your role?</li>
            <li>What do you wish you knew when you were in college?</li>
            <li>What should I focus on to break into this field?</li>
          </ul>
        </section>

        {/* Section 4: Events */}
        <section
          id="events"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            4. Surviving Networking Events
          </h2>

          <p>Sometimes you have to attend. Here's how to survive:</p>

          <ul>
            <li>
              <strong>Set a goal:</strong> Talk to 2-3 people, then you can
              leave
            </li>
            <li>
              <strong>Arrive early:</strong> Easier to approach people before
              crowds form
            </li>
            <li>
              <strong>Find the other introverts:</strong> They're standing alone
              too
            </li>
            <li>
              <strong>Ask questions:</strong> People love talking about
              themselves
            </li>
            <li>
              <strong>Take breaks:</strong> Step outside for a few minutes to
              recharge
            </li>
          </ul>
        </section>

        {/* Section 5: Maintain */}
        <section
          id="maintain"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            5. Maintaining Relationships
          </h2>

          <ul>
            <li>
              <strong>Follow up:</strong> Send a message after meeting (within
              24 hours)
            </li>
            <li>
              <strong>Provide value:</strong> Share articles, job postings, or
              resources they'd like
            </li>
            <li>
              <strong>Check in occasionally:</strong> A simple "How are things
              going?" every few months
            </li>
            <li>
              <strong>Celebrate their wins:</strong> React to their
              announcements and achievements
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
              <p className="font-bold">What if I run out of things to say?</p>
              <p className="mt-2 text-muted-foreground">
                Ask questions. People love talking about themselves. "What are
                you working on?" or "What got you into this field?" are always
                good.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Is online networking really effective?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Many job referrals and opportunities come from
                online connections. Consistency is key.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Network on Your Terms</h2>
          <p>
            You don't have to become an extrovert to network effectively. Play
            to your strengths: deep conversations, online presence, and 1-on-1
            connections.
          </p>
          <p className="text-lg font-semibold text-primary">
            Quality over quantity. Always. 🤝
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
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills Guide
            </Link>
            <Link
              href="/blog/hidden-internship-opportunities"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Finding Hidden Opportunities
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
                Written by an introvert, for introverts.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
