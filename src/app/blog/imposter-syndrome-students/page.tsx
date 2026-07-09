import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Brain,
  Heart,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  AlertTriangle,
  Smile,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Imposter Syndrome in Students: How to Overcome It',
  description:
    'Feeling like a fraud despite your achievements? Learn to recognize and overcome imposter syndrome as a student or early-career professional.',
  keywords: [
    'imposter syndrome students',
    'feeling like fraud',
    'overcome imposter syndrome',
    'self doubt students',
    'imposter syndrome tech',
  ],
  openGraph: {
    title: 'Imposter Syndrome in Students: How to Overcome It',
    description: 'You belong here. Learn to silence the inner critic.',
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
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Mental Wellness
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Imposter Syndrome in Students: How to Overcome It
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            "I don't belong here." "I got lucky." "They'll find out I'm a
            fraud." Sound familiar? You're not alone—and you're wrong about
            yourself.
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
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Imposter Syndrome Facts
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">70%</span>
              <span>of people experience imposter syndrome</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">High</span>
              <span>achievers are MORE likely to feel it</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">Tech</span>
              <span>industry has especially high rates</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">Yes</span>
              <span>even CEOs and experts experience it</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. What is Imposter Syndrome
              </a>
            </li>
            <li>
              <a
                href="#signs"
                className="text-primary hover:underline"
              >
                2. Common Signs
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                3. The 5 Types
              </a>
            </li>
            <li>
              <a
                href="#overcome"
                className="text-primary hover:underline"
              >
                4. How to Overcome It
              </a>
            </li>
            <li>
              <a
                href="#reframe"
                className="text-primary hover:underline"
              >
                5. Reframing Thoughts
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
              <span>Imposter syndrome is common—you're not alone</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Feeling like an imposter doesn't mean you are one</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Keep a "brag file" of your achievements</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Talk about it—sharing reduces the power</span>
            </li>
          </ul>
        </div>

        {/* Section 1: What */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            1. What is Imposter Syndrome?
          </h2>

          <p>
            Imposter syndrome is the persistent feeling that you're a fraud
            despite evidence of your competence. You attribute success to luck,
            timing, or fooling others—not your actual abilities.
          </p>

          <h3>Common Thoughts</h3>
          <ul>
            <li>"I don't deserve to be here"</li>
            <li>"Everyone else is smarter than me"</li>
            <li>"I got lucky—it wasn't my skills"</li>
            <li>"They'll discover I'm not as good as they think"</li>
            <li>"I should know more by now"</li>
          </ul>
        </section>

        {/* Section 2: Signs */}
        <section
          id="signs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            2. Common Signs
          </h2>

          <ul>
            <li>
              <strong>Over-preparing:</strong> Working 3x harder than needed
              "just in case"
            </li>
            <li>
              <strong>Dismissing praise:</strong> "It wasn't that hard" or
              "Anyone could do it"
            </li>
            <li>
              <strong>Fear of asking questions:</strong> Worried others will
              think you're dumb
            </li>
            <li>
              <strong>Avoiding challenges:</strong> Not applying for
              opportunities you're qualified for
            </li>
            <li>
              <strong>Comparing constantly:</strong> Everyone seems smarter/more
              successful
            </li>
          </ul>
        </section>

        {/* Section 3: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. The 5 Types of Imposters
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">The Perfectionist</p>
              <p className="text-muted-foreground">
                99% isn't good enough. One small mistake = total failure
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">The Expert</p>
              <p className="text-muted-foreground">
                Must know everything before starting. Endless learning, never
                doing
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">The Natural Genius</p>
              <p className="text-muted-foreground">
                If it's hard, I must not be smart. Success should come easily
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">The Soloist</p>
              <p className="text-muted-foreground">
                Asking for help means I'm incompetent
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">The Superhero</p>
              <p className="text-muted-foreground">
                Must excel at everything—work, school, relationships—all at once
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Overcome */}
        <section
          id="overcome"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            4. How to Overcome It
          </h2>

          <h3>Practical Strategies</h3>
          <ul>
            <li>
              <strong>Keep a "brag file":</strong> Document wins, positive
              feedback, achievements
            </li>
            <li>
              <strong>Talk about it:</strong> Share with trusted friends—you'll
              discover everyone feels this way
            </li>
            <li>
              <strong>Celebrate small wins:</strong> Don't wait for perfection
            </li>
            <li>
              <strong>Normalize struggle:</strong> Learning is supposed to be
              hard
            </li>
            <li>
              <strong>Mentor someone:</strong> Teaching reveals how much you
              actually know
            </li>
          </ul>
        </section>

        {/* Section 5: Reframe */}
        <section
          id="reframe"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smile className="h-6 w-6 text-primary" />
            5. Reframing Your Thoughts
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold">❌ Imposter Thought</p>
              <p className="mt-1">"I don't deserve this opportunity"</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">✅ Reframe</p>
              <p className="mt-1">"I earned this through my work and skills"</p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold">❌ Imposter Thought</p>
              <p className="mt-1">"Everyone else knows more than me"</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">✅ Reframe</p>
              <p className="mt-1">
                "Everyone has different knowledge—I bring unique value"
              </p>
            </div>
          </div>
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
              <p className="font-bold">Does imposter syndrome ever go away?</p>
              <p className="mt-2 text-muted-foreground">
                It tends to reduce with experience and self-awareness, but can
                resurface with new challenges. The goal is to manage it, not
                eliminate it.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What's the difference between imposter syndrome and being
                unqualified?
              </p>
              <p className="mt-2 text-muted-foreground">
                Imposter syndrome involves doubting yourself despite evidence of
                competence. If you're genuinely unqualified, the solution is
                learning—not battling thoughts.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>You Belong Here</h2>
          <p>
            Imposter syndrome lies to you. The fact that you care about being
            competent shows you're exactly the kind of person who deserves to be
            where you are.
          </p>
          <p className="text-lg font-semibold text-primary">
            You're not an imposter. You're learning. And that's exactly what you
            should be doing. 💪
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/mental-health-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Mental Health Guide
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Internship Guide
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
                We've all felt like imposters. You're in good company.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
