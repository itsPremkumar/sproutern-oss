import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Brain,
  Heart,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Users,
  Shield,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Overcoming Imposter Syndrome',
  description:
    'Learn to recognize and overcome imposter syndrome with evidence-based strategies. Includes common thought patterns, reframing techniques, and real student stories.',
  keywords: [
    'imposter syndrome',
    'imposter syndrome tips',
    'intern confidence',
    'feeling like a fraud',
    'first job anxiety',
    'workplace confidence',
  ],
  openGraph: {
    title: 'Overcoming Imposter Syndrome: Student & Intern Guide',
    description:
      'Evidence-based strategies to build confidence and thrive in your career.',
    type: 'article',
    publishedTime: '2025-09-08T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-rose-600">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Mental Wellness
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Overcoming Imposter Syndrome: A Guide for First-Time Interns
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            That voice telling you &quot;you don&apos;t belong here&quot;? 70%
            of people experience it. Here&apos;s how to silence it.
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
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-rose-500 bg-rose-50 p-6 dark:bg-rose-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-rose-600" />
            Imposter Syndrome Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">70%</span>
              <span>of people experience imposter syndrome at some point</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">84%</span>
              <span>of entrepreneurs report experiencing it</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">#1</span>
              <span>trigger: starting a new job or role</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-rose-600">
                High achievers
              </span>
              <span>are MORE likely to experience it, not less</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what-is"
                className="text-primary hover:underline"
              >
                1. What Is Imposter Syndrome?
              </a>
            </li>
            <li>
              <a
                href="#signs"
                className="text-primary hover:underline"
              >
                2. Signs You Have It
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
                href="#reframe"
                className="text-primary hover:underline"
              >
                4. Reframing Techniques
              </a>
            </li>
            <li>
              <a
                href="#strategies"
                className="text-primary hover:underline"
              >
                5. Practical Strategies
              </a>
            </li>
            <li>
              <a
                href="#growth"
                className="text-primary hover:underline"
              >
                6. Growth Mindset Shift
              </a>
            </li>
            <li>
              <a
                href="#stories"
                className="text-primary hover:underline"
              >
                7. Real Stories
              </a>
            </li>
            <li>
              <a
                href="#daily"
                className="text-primary hover:underline"
              >
                8. Daily Practices
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            You landed the internship. You made it through interviews, and they
            chose you. But now that you&apos;re here, a nagging voice whispers,
            &quot;You don&apos;t belong here. They&apos;re going to find out
            you&apos;re a fraud.&quot;
          </p>
          <p>
            This is imposter syndrome, and it&apos;s incredibly
            common—especially for first-time interns. The good news? It&apos;s
            manageable. Here&apos;s how to recognize it and fight back.
          </p>
        </section>

        {/* What Is */}
        <section
          id="what-is"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            1. What Is Imposter Syndrome?
          </h2>

          <p>
            Imposter syndrome is the persistent feeling of being a fraud,
            despite evidence of your accomplishments. It&apos;s the belief that
            you&apos;ve only succeeded due to luck—not talent or hard work.
          </p>

          <div className="my-6 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">The Imposter Syndrome Paradox:</p>
            <p>
              The more competent you become, the more you realize how much you
              don&apos;t know. This creates a gap between your perceived ability
              and actual expertise—even when others see you as highly capable.
            </p>
          </div>

          <h3>Common Thoughts</h3>
          <ul>
            <li>&quot;I got lucky—they made a mistake hiring me&quot;</li>
            <li>
              &quot;Everyone else knows what they&apos;re doing except me&quot;
            </li>
            <li>
              &quot;If I ask a question, they&apos;ll realize I&apos;m not smart
              enough&quot;
            </li>
            <li>&quot;My success was just timing, not skill&quot;</li>
            <li>&quot;Soon everyone will figure out I&apos;m a fraud&quot;</li>
          </ul>
        </section>

        {/* Signs */}
        <section
          id="signs"
          className="scroll-mt-20"
        >
          <h2>2. Signs You Might Have Imposter Syndrome</h2>

          <div className="not-prose my-6 space-y-3">
            {[
              'You attribute success to luck, timing, or external factors',
              'You dismiss compliments or positive feedback',
              "You overwork to 'prove' you deserve to be there",
              'You avoid asking questions for fear of looking dumb',
              'You compare yourself to others constantly',
              'You set impossibly high standards for yourself',
              "You fear being 'found out' despite evidence of competence",
              'You downplay your achievements when discussing them',
            ].map((sign, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{sign}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            If you checked 3 or more, you likely experience imposter syndrome.
            Don&apos;t worry—you&apos;re in excellent company.
          </p>
        </section>

        {/* Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2>3. The 5 Types of Imposter Syndrome</h2>

          <p>
            Psychologist Dr. Valerie Young identified five imposter archetypes.
            Understanding your type helps you address it:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-bold">🎯 The Perfectionist</p>
              <p className="text-sm text-muted-foreground">
                Sets impossibly high standards. Even 99% success feels like
                failure. Never satisfied with their work.
              </p>
              <p className="mt-2 text-sm">
                <strong>Antidote:</strong> Celebrate progress, not perfection.
                &quot;Done is better than perfect.&quot;
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">🦸 The Superhero</p>
              <p className="text-sm text-muted-foreground">
                Overworks to cover perceived inadequacy. First to arrive, last
                to leave. Burns out quickly.
              </p>
              <p className="mt-2 text-sm">
                <strong>Antidote:</strong> Your worth isn&apos;t tied to
                productivity. Set boundaries.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <p className="font-bold">🧠 The Natural Genius</p>
              <p className="text-sm text-muted-foreground">
                Believes success should come easily. If you have to work hard at
                something, you must not be good at it.
              </p>
              <p className="mt-2 text-sm">
                <strong>Antidote:</strong> Mastery requires effort. Struggle is
                part of growth.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="font-bold">🎓 The Expert</p>
              <p className="text-sm text-muted-foreground">
                Must know everything before feeling confident. Hesitates to
                speak up unless 100% certain.
              </p>
              <p className="mt-2 text-sm">
                <strong>Antidote:</strong> You don&apos;t need to know
                everything. Learn as you go.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold">🏝️ The Soloist</p>
              <p className="text-sm text-muted-foreground">
                Feels asking for help is weakness. Must accomplish everything
                alone to prove capability.
              </p>
              <p className="mt-2 text-sm">
                <strong>Antidote:</strong> Asking for help is a strength.
                Collaboration is expected.
              </p>
            </div>
          </div>
        </section>

        {/* Reframe */}
        <section
          id="reframe"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            4. Reframing Negative Thoughts
          </h2>

          <p>
            The key to managing imposter syndrome is catching and reframing
            negative self-talk:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-3 py-2 text-left">❌ Imposter Thought</th>
                  <th className="px-3 py-2 text-left">✅ Reframed Thought</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2">
                    &quot;I have no idea what I&apos;m doing&quot;
                  </td>
                  <td className="px-3 py-2">
                    &quot;I&apos;m new and learning—that&apos;s expected&quot;
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">&quot;I got lucky&quot;</td>
                  <td className="px-3 py-2">
                    &quot;I prepared well and performed in the interview&quot;
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">
                    &quot;Everyone is smarter than me&quot;
                  </td>
                  <td className="px-3 py-2">
                    &quot;Everyone has different strengths and experience&quot;
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">
                    &quot;I&apos;ll be exposed as a fraud&quot;
                  </td>
                  <td className="px-3 py-2">
                    &quot;Most people feel this way; it&apos;s normal&quot;
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">
                    &quot;I don&apos;t deserve this opportunity&quot;
                  </td>
                  <td className="px-3 py-2">
                    &quot;I earned this through my efforts&quot;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Practice:</strong> When you notice an imposter thought,
              write it down. Then write the reframed version. Over time, the
              reframe becomes automatic.
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section
          id="strategies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            5. Practical Strategies That Work
          </h2>

          <h3>Keep a &quot;Brag Document&quot;</h3>
          <p>
            Document every accomplishment, no matter how small. When imposter
            feelings hit, review this list. Evidence beats emotions.
          </p>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">Sample Brag Doc Entry:</p>
            <p>
              📅 <strong>Oct 5:</strong> Fixed the checkout bug that blocked 3
              other developers. Manager said &quot;great catch!&quot;
            </p>
            <p>
              📅 <strong>Oct 8:</strong> Led my first standup meeting. Team said
              it was well-organized.
            </p>
            <p>
              📅 <strong>Oct 12:</strong> Finished project 2 days early. Mentor
              was impressed with code quality.
            </p>
          </div>

          <h3>You&apos;re Supposed to Be Learning</h3>
          <p>
            Companies hire interns TO LEARN. You&apos;re not expected to know
            everything. Your job is to grow, ask questions, and develop skills.
          </p>

          <h3>Talk About It</h3>
          <p>
            You&apos;re not alone. Talk to fellow interns, your mentor, or
            friends. You&apos;ll find most successful people have felt the same
            way.
          </p>

          <h3>Stop Comparing Highlight Reels</h3>
          <p>
            That confident senior developer? They were terrified on their first
            day too. You&apos;re comparing your behind-the-scenes to everyone
            else&apos;s highlight reel.
          </p>

          <h3>Remember: They Chose YOU</h3>
          <p>
            You went through an application and interview process. The company
            evaluated you against other candidates and chose YOU. Trust their
            judgment.
          </p>
        </section>

        {/* Growth Mindset */}
        <section
          id="growth"
          className="scroll-mt-20"
        >
          <h2>6. Embracing a Growth Mindset</h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold text-red-600">❌ Fixed Mindset</p>
              <ul className="space-y-1">
                <li>• &quot;I&apos;m either smart or I&apos;m not&quot;</li>
                <li>• &quot;Failure means I&apos;m not good enough&quot;</li>
                <li>
                  • &quot;If I have to try hard, I must not be talented&quot;
                </li>
                <li>• Avoids challenges</li>
                <li>• Gives up easily</li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 font-bold text-green-700">✅ Growth Mindset</p>
              <ul className="space-y-1">
                <li>• &quot;I can develop my abilities&quot;</li>
                <li>• &quot;Failure is a learning opportunity&quot;</li>
                <li>• &quot;Effort is how I get better&quot;</li>
                <li>• Embraces challenges</li>
                <li>• Persists despite setbacks</li>
              </ul>
            </div>
          </div>

          <p>
            Instead of seeing a difficult task as a threat that will
            &quot;expose&quot; you, see it as an opportunity to stretch and
            grow.
          </p>
        </section>

        {/* Stories */}
        <section
          id="stories"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            7. Famous People Who&apos;ve Experienced It
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4 italic">
              <p>
                &quot;I have written 11 books but each time I think &apos;Uh-oh,
                they&apos;re going to find out now. I&apos;ve run a game on
                everybody.&quot;
              </p>
              <p className="mt-2 text-sm font-bold not-italic">
                — Maya Angelou, Author & Poet
              </p>
            </div>
            <div className="rounded-lg border p-4 italic">
              <p>
                &quot;There are still days when I wake up feeling like a fraud,
                not sure I should be where I am.&quot;
              </p>
              <p className="mt-2 text-sm font-bold not-italic">
                — Sheryl Sandberg, COO of Meta
              </p>
            </div>
            <div className="rounded-lg border p-4 italic">
              <p>
                &quot;The beauty of the imposter syndrome is you vacillate
                between extreme egomania and a complete feeling of
                &apos;I&apos;m a fraud!&apos;&quot;
              </p>
              <p className="mt-2 text-sm font-bold not-italic">
                — Tina Fey, Comedian & Writer
              </p>
            </div>
          </div>

          <p>
            If Maya Angelou, Sheryl Sandberg, and countless successful people
            feel this way, you&apos;re in good company.
          </p>
        </section>

        {/* Daily Practices */}
        <section
          id="daily"
          className="not-prose scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Heart className="h-6 w-6 text-primary" />
            8. Daily Confidence Practices
          </h2>

          <div className="space-y-2">
            {[
              "Morning: Write 3 things you're good at or accomplished recently",
              'Before meetings: Remind yourself you belong and your input is valuable',
              'After success: Acknowledge YOUR role, not just luck or timing',
              'When struggling: Remind yourself that learning is uncomfortable but temporary',
              'End of day: Note one thing you learned or contributed',
              'Weekly: Review your brag document and add new wins',
              'Monthly: Ask for feedback to get an external perspective',
            ].map((practice, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>{practice}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: You Belong Here</h2>

          <p>
            Imposter syndrome is a sign that you care about doing well and that
            you&apos;re pushing yourself into new territory. It&apos;s
            uncomfortable but ultimately temporary.
          </p>

          <p>
            The feelings don&apos;t completely disappear, but they become
            manageable. The more evidence you collect that you&apos;re capable,
            the quieter the imposter voice becomes.
          </p>

          <p className="text-lg font-semibold text-primary">
            You were chosen for a reason. You belong here. Now go prove it—to
            yourself. 💪
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Internship to Full-Time
            </Link>
            <Link
              href="/blog/time-management-for-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Time Management for Interns
            </Link>
            <Link
              href="/blog/student-networking-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking Guide
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
                Our team includes career coaches with backgrounds in psychology
                who have helped thousands of students build workplace
                confidence.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
