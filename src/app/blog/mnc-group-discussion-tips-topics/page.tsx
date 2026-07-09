import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  Target,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'MNC Group Discussion Tips and Topics',
  description:
    "Ace MNC group discussions with proven tips, common topics, evaluation criteria, and do's and don'ts. Learn how to stand out in GD rounds at TCS, Infosys, Wipro, and other MNCs.",
  keywords: [
    'MNC group discussion',
    'GD tips',
    'group discussion topics',
    'GD preparation',
    'MNC GD round',
    'group discussion skills',
  ],
  openGraph: {
    title: 'MNC Group Discussion Tips and Topics',
    description: 'Master group discussions and impress MNC recruiters.',
    type: 'article',
    publishedTime: '2025-12-19T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC Group Discussion Tips and Topics
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Group Discussions (GD) are common in MNC hiring processes. Learn
            proven strategies, common topics, evaluation criteria, and how to
            stand out in GD rounds at TCS, Infosys, Wipro, and other top
            companies.
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
              <span>12 min read</span>
            </div>
          </div>
        </header>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Speak 3-4 times during GD - quality over quantity</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Listen actively and build on others' points</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Structure your points logically with examples</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Maintain eye contact and positive body language</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Practice with our{' '}
                <Link
                  href="/blog/group-discussion-tips"
                  className="text-primary hover:underline"
                >
                  Group Discussion Tips Guide
                </Link>
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Group Discussions (GD) test your communication, leadership,
            teamwork, and analytical skills. Many MNCs like Infosys, Wipro, and
            some TCS roles include GD rounds to assess how you interact in group
            settings.
          </p>
          <p>
            This guide covers everything you need to ace MNC group discussions:
            preparation strategies, common topics, evaluation criteria, do's and
            don'ts, and proven tips from students who cleared GD rounds.
          </p>
        </section>

        {/* Section 1: Understanding GD */}
        <section
          id="understanding"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            1. Understanding Group Discussions
          </h2>

          <h3>What is a Group Discussion?</h3>
          <p>
            A Group Discussion is a group activity where 8-12 candidates discuss
            a topic for 15-20 minutes. Evaluators observe communication skills,
            leadership, teamwork, and analytical thinking.
          </p>

          <h3>Why Do MNCs Conduct GD?</h3>
          <ul>
            <li>
              <strong>Communication Skills:</strong> Assess how clearly you
              express ideas
            </li>
            <li>
              <strong>Teamwork:</strong> See if you can work collaboratively
            </li>
            <li>
              <strong>Leadership:</strong> Identify potential leaders
            </li>
            <li>
              <strong>Analytical Thinking:</strong> Evaluate problem-solving
              approach
            </li>
            <li>
              <strong>Confidence:</strong> Assess confidence and presence of
              mind
            </li>
          </ul>

          <h3>GD Format</h3>
          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Topic Announcement:</strong> Evaluator announces topic
                (2 minutes preparation time)
              </li>
              <li>
                <strong>Discussion Phase:</strong> 15-20 minutes of free
                discussion
              </li>
              <li>
                <strong>Conclusion:</strong> Sometimes asked to summarize or
                conclude
              </li>
            </ol>
          </div>
        </section>

        {/* Section 2: Common GD Topics */}
        <section
          id="topics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            2. Common MNC Group Discussion Topics
          </h2>

          <h3>Current Affairs & Social Issues</h3>
          <ul>
            <li>"Impact of AI on employment"</li>
            <li>"Social media: Boon or Bane?"</li>
            <li>"Climate change: Individual vs Government responsibility"</li>
            <li>"Online education vs Traditional education"</li>
            <li>"Work from home: Future of work"</li>
          </ul>

          <h3>Technology & Business</h3>
          <ul>
            <li>"Startups vs MNCs: Which is better for career?"</li>
            <li>"Digital India: Progress and challenges"</li>
            <li>"E-commerce vs Traditional retail"</li>
            <li>"Data privacy in digital age"</li>
            <li>"Cryptocurrency: Future of money?"</li>
          </ul>

          <h3>Abstract Topics</h3>
          <ul>
            <li>"Success is a journey, not a destination"</li>
            <li>"Change is the only constant"</li>
            <li>"Knowledge is power"</li>
            <li>"Hard work vs Smart work"</li>
          </ul>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Stay updated with current affairs. Read
              newspapers, follow news apps, and be aware of recent developments
              in technology, business, and social issues.
            </p>
          </div>
        </section>

        {/* Section 3: GD Tips & Strategies */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. Proven GD Tips & Strategies
          </h2>

          <h3>Before Speaking</h3>
          <ol>
            <li>
              <strong>Listen First:</strong> Understand what others are saying
              before speaking
            </li>
            <li>
              <strong>Structure Your Thoughts:</strong> Organize points
              logically (Introduction → Points → Examples → Conclusion)
            </li>
            <li>
              <strong>Wait for Right Moment:</strong> Don't interrupt, wait for
              natural pauses
            </li>
          </ol>

          <h3>While Speaking</h3>
          <ul>
            <li>
              <strong>Be Clear and Concise:</strong> Express ideas clearly in
              30-60 seconds
            </li>
            <li>
              <strong>Use Examples:</strong> Support points with real-world
              examples
            </li>
            <li>
              <strong>Maintain Eye Contact:</strong> Look at all participants,
              not just evaluator
            </li>
            <li>
              <strong>Body Language:</strong> Sit straight, use hand gestures
              appropriately, nod when others speak
            </li>
            <li>
              <strong>Speak 3-4 Times:</strong> Quality over quantity - make
              meaningful contributions
            </li>
          </ul>

          <h3>Advanced Strategies</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Initiator Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Start the discussion by defining the topic, setting context, and
                presenting first point. Shows leadership.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Moderator Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Summarize points, bring discussion back on track, ensure
                everyone gets chance to speak.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Content Contributor</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Add valuable points, provide examples, build on others' ideas.
                Most common and safe strategy.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Concluder Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Summarize all points discussed, provide balanced conclusion.
                Shows analytical thinking.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4: Evaluation Criteria */}
        <section
          id="evaluation"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            4. GD Evaluation Criteria
          </h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Communication (25%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Clarity of expression</li>
                  <li>Fluency and confidence</li>
                  <li>Grammar and vocabulary</li>
                  <li>Listening skills</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Content (25%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Relevance of points</li>
                  <li>Depth of knowledge</li>
                  <li>Use of examples</li>
                  <li>Logical structure</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Teamwork (25%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Respect for others</li>
                  <li>Building on others' points</li>
                  <li>Encouraging participation</li>
                  <li>Conflict resolution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Leadership (25%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-inside list-disc space-y-1">
                  <li>Initiating discussion</li>
                  <li>Moderating when needed</li>
                  <li>Taking initiative</li>
                  <li>Influencing others</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5: Do's and Don'ts */}
        <section
          id="dos-donts"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            5. Do's and Don'ts in GD
          </h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-base text-green-700 dark:text-green-400">
                  ✅ Do's
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Listen actively to others</li>
                  <li>Speak clearly and confidently</li>
                  <li>Support points with examples</li>
                  <li>Respect others' opinions</li>
                  <li>Build on others' points</li>
                  <li>Maintain positive body language</li>
                  <li>Stay on topic</li>
                  <li>Summarize when appropriate</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
              <CardHeader>
                <CardTitle className="text-base text-red-700 dark:text-red-400">
                  ❌ Don'ts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Don't interrupt others</li>
                  <li>Don't dominate the discussion</li>
                  <li>Don't be aggressive or rude</li>
                  <li>Don't go off-topic</li>
                  <li>Don't repeat same points</li>
                  <li>Don't use slang or informal language</li>
                  <li>Don't make personal attacks</li>
                  <li>Don't remain silent throughout</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 6: Preparation Tips */}
        <section
          id="preparation"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            6. GD Preparation Tips
          </h2>

          <h3>Daily Practice</h3>
          <ol>
            <li>
              <strong>Read Daily:</strong> Newspapers, news apps, business
              magazines to stay updated
            </li>
            <li>
              <strong>Practice Speaking:</strong> Discuss topics with friends,
              practice articulating thoughts
            </li>
            <li>
              <strong>Join GD Groups:</strong> Participate in college GD clubs
              or online groups
            </li>
            <li>
              <strong>Record Yourself:</strong> Practice speaking and analyze
              your performance
            </li>
            <li>
              <strong>Mock GDs:</strong> Participate in mock group discussions
            </li>
          </ol>

          <h3>Topic Preparation</h3>
          <ul>
            <li>Prepare 2-3 points for common topics</li>
            <li>Read about current affairs regularly</li>
            <li>Understand both sides of controversial topics</li>
            <li>Collect examples and statistics</li>
          </ul>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Read our{' '}
              <Link
                href="/blog/group-discussion-tips"
                className="font-semibold text-primary hover:underline"
              >
                Complete Group Discussion Tips Guide
              </Link>{' '}
              for more detailed strategies and practice techniques.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                How many times should I speak in a GD?
              </p>
              <p className="mt-2 text-muted-foreground">
                Aim for 3-4 meaningful contributions. Quality matters more than
                quantity. Don't speak just for the sake of speaking.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I don't know much about the topic?
              </p>
              <p className="mt-2 text-muted-foreground">
                Listen carefully to others, build on their points, ask
                clarifying questions, and contribute based on general knowledge
                and logic.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I take a strong stand or be neutral?
              </p>
              <p className="mt-2 text-muted-foreground">
                Either is fine, but support your stand with logical arguments.
                Being neutral and presenting both sides also shows balanced
                thinking.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if someone interrupts me?</p>
              <p className="mt-2 text-muted-foreground">
                Politely say "Let me complete my point" and continue. Don't get
                aggressive. If interrupted multiple times, wait for your turn.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Master Group Discussions</h2>
          <p>
            Group Discussions test your communication, teamwork, and analytical
            skills. With proper preparation, active participation, and the right
            approach, you can excel in MNC GD rounds.
          </p>
          <p className="text-lg font-semibold text-primary">
            Practice regularly, stay updated with current affairs, and read our{' '}
            <Link
              href="/blog/group-discussion-tips"
              className="hover:underline"
            >
              Group Discussion Tips Guide
            </Link>{' '}
            for comprehensive preparation. Good luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/group-discussion-tips"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Group Discussion Tips Guide
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills Guide
            </Link>
            <Link
              href="/companies/mnc-placement-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              MNC Placement Guide
            </Link>
            <Link
              href="/blog/soft-skills-development-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Soft Skills Development
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on insights from 5,000+ GD rounds and feedback from MNC
                evaluators.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
