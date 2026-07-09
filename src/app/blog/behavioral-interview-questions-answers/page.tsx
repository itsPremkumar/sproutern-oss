import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  MessageCircle,
  Target,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Briefcase,
  Brain,
  Star,
  AlertTriangle,
  XCircle,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 30 Behavioral Interview Questions with STAR Answers',
  description:
    'Master behavioral interviews with our comprehensive guide. Get 30 common questions with detailed STAR method answers, preparation tips, and real-world examples.',
  keywords: [
    'behavioral interview questions',
    'STAR method',
    'HR interview questions',
    'tell me about yourself',
    'strengths weaknesses interview',
    'interview preparation data',
    'soft skills interview',
  ],
  openGraph: {
    title: 'Top 30 Behavioral Interview Questions with STAR Answers',
    description:
      'Ace your next interview with proven behavioral question answers and strategies.',
    type: 'article',
    publishedTime: '2025-12-09T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        {/* Header */}
        <header className="not-prose mb-12 border-b pb-12">
          <div className="mb-4 flex items-center gap-2 text-violet-600 dark:text-violet-400">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Interview Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Top 30 Behavioral Interview Questions with STAR Answers
          </h1>
          <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
            Behavioral questions are designed to predict future performance
            based on past behavior. Learn the STAR method and get ready-to-adapt
            answers for the most common questions recruiters ask.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
              <Clock className="h-4 w-4" />
              <span>35 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-12 rounded-xl bg-slate-50 p-8 shadow-sm dark:bg-slate-900/50">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            📋 What You'll Learn
          </h2>
          <ol className="grid gap-4 text-sm md:grid-cols-2 lg:text-base">
            <li>
              <Link
                href="#star"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  1
                </div>
                The STAR Method Explained
              </Link>
            </li>
            <li>
              <Link
                href="#why-behavioral"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  2
                </div>
                Why Companies Ask These Questions
              </Link>
            </li>
            <li>
              <Link
                href="#general"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  3
                </div>
                General Questions (Top 10)
              </Link>
            </li>
            <li>
              <Link
                href="#teamwork"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  4
                </div>
                Teamwork & Collaboration
              </Link>
            </li>
            <li>
              <Link
                href="#problem"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  5
                </div>
                Problem-Solving & Adaptability
              </Link>
            </li>
            <li>
              <Link
                href="#leadership"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  6
                </div>
                Leadership Qualities
              </Link>
            </li>
            <li>
              <Link
                href="#failure"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  7
                </div>
                Handling Failure & Weaknesses
              </Link>
            </li>
            <li>
              <Link
                href="#mistakes"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  8
                </div>
                Common Mistakes to Avoid
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="flex items-center gap-2 text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  9
                </div>
                Frequently Asked Questions
              </Link>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-12 rounded-xl border border-green-200 bg-green-50/50 p-8 shadow-sm dark:border-green-800 dark:bg-green-950/20">
          <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-green-800 dark:text-green-300">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/40">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span className="text-green-900 dark:text-green-100">
                <strong>Structure is King:</strong> Always use the STAR method
                (Situation, Task, Action, Result) to keep answers focused.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/40">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span className="text-green-900 dark:text-green-100">
                <strong>Story Bank:</strong> Prepare 5-7 versatile stories that
                can be adapted to answer multiple different questions.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/40">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span className="text-green-900 dark:text-green-100">
                <strong>Data Wins:</strong> Quantify your results whenever
                possible (e.g., "improved efficiency by 20%").
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-lg bg-green-50 p-3 dark:bg-green-950/40">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span className="text-green-900 dark:text-green-100">
                <strong>Authenticity:</strong> Be honest about failures, but
                focus on what you learned and how you improved.
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">Introduction</h2>
          <p className="lead mb-6 text-xl text-gray-600 dark:text-gray-300">
            You've aced the technical screening. You have the skills. Now comes
            the moment that terrifies even the most qualified candidates: the
            behavioral interview.
          </p>
          <p className="mb-4">
            "Tell me about a time you failed." "Describe a conflict you had with
            a coworker." These questions aren't just small talk; they are
            calculated tests designed to reveal your soft skills, emotional
            intelligence, and cultural fit.
          </p>
          <p className="mb-4">
            The good news? Behavioral interviews are remarkably predictable.
            With the right preparation strategy—specifically the{' '}
            <strong>STAR method</strong>—you can turn these potentially awkward
            questions into your strongest selling points.
          </p>
          <p>
            In this guide, we'll break down the top 30 behavioral interview
            questions, explain exactly what interviewers are looking for, and
            provide high-quality STAR answers you can adapt for your own
            experiences.
          </p>
        </section>

        {/* Section 1: STAR */}
        <section
          id="star"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Star className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              1. The STAR Method Explained
            </h2>
          </div>

          <p className="mb-8">
            The STAR method is the industry-standard framework for answering
            behavioral questions. It ensures your story has a beginning, middle,
            and end, preventing you from rambling or missing key details.
          </p>

          <div className="not-prose mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                <span className="text-xl font-bold">S</span>
              </div>
              <h3 className="mb-2 text-lg font-bold">Situation</h3>
              <p className="text-sm text-muted-foreground">
                Set the scene. Briefly explain the context, the challenge, or
                the opportunity. Be concise here.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="text-xl font-bold">T</span>
              </div>
              <h3 className="mb-2 text-lg font-bold">Task</h3>
              <p className="text-sm text-muted-foreground">
                Clarify your specific responsibility. What goal were you working
                toward? usage: "I was tasked with..."
              </p>
            </div>
            <div className="rounded-xl border border-primary/20 bg-card bg-primary/5 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <span className="text-xl font-bold">A</span>
              </div>
              <h3 className="mb-2 text-lg font-bold">Action</h3>
              <p className="text-sm text-muted-foreground">
                The most important part. Describe the specific steps YOU took.
                Use active verbs. Focus on "I", not "We".
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                <span className="text-xl font-bold">R</span>
              </div>
              <h3 className="mb-2 text-lg font-bold">Result</h3>
              <p className="text-sm text-muted-foreground">
                Share the outcome. Quantify it if possible (numbers, %, $).
                Mention what you learned.
              </p>
            </div>
          </div>

          <div className="my-8 rounded-xl border border-yellow-100 bg-yellow-50 p-6 dark:border-yellow-900/20 dark:bg-yellow-900/10">
            <div className="flex gap-4">
              <Lightbulb className="h-6 w-6 flex-shrink-0 text-yellow-600" />
              <div>
                <h4 className="mb-2 font-bold text-yellow-900 dark:text-yellow-200">
                  Pro Tip: The 10-10-60-20 Rule
                </h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Structure your answer by time:
                  <ul className="mb-0 ml-4 mt-2 list-disc">
                    <li>
                      <strong>10% Situation:</strong> Don't clear your throat
                      for too long.
                    </li>
                    <li>
                      <strong>10% Task:</strong> Briefly state the goal.
                    </li>
                    <li>
                      <strong>60% Action:</strong> Dig deep here. This is where
                      your skills shine.
                    </li>
                    <li>
                      <strong>20% Result:</strong> Land the plane with a strong
                      finish.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Behavioral */}
        <section
          id="why-behavioral"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Brain className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              2. Why Companies Ask These Questions
            </h2>
          </div>

          <p className="mb-6">
            Many candidates dislike these questions because they feel "fluffy."
            However, they serve critical purposes for hiring managers:
          </p>

          <div className="not-prose grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-slate-50 p-6 dark:bg-slate-900">
              <h3 className="mb-2 flex items-center gap-2 font-bold">
                <Target className="h-5 w-5 text-red-500" />
                Predicting Future Behavior
              </h3>
              <p className="text-sm text-muted-foreground">
                Psychology suggests that past behavior is the best predictor of
                future performance. If you handled stress well before, you
                likely will again.
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-6 dark:bg-slate-900">
              <h3 className="mb-2 flex items-center gap-2 font-bold">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                Testing Communication
              </h3>
              <p className="text-sm text-muted-foreground">
                Can you tell a coherent story? Can you synthesize complex
                information? Communication is a top skill for every role.
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-6 dark:bg-slate-900">
              <h3 className="mb-2 flex items-center gap-2 font-bold">
                <Users className="h-5 w-5 text-green-500" />
                Cultural Awareness
              </h3>
              <p className="text-sm text-muted-foreground">
                Your answers reveal your values. Do you blame others? Do you
                take ownership? Do you prefer solo work or teams?
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-6 dark:bg-slate-900">
              <h3 className="mb-2 flex items-center gap-2 font-bold">
                <Zap className="h-5 w-5 text-yellow-500" />
                Self-Awareness
              </h3>
              <p className="text-sm text-muted-foreground">
                Can you critically evaluate your own performance? Do you learn
                from mistakes?
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: General Questions */}
        <section
          id="general"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              3. General Questions (Top 10)
            </h2>
          </div>

          <p className="mb-8">
            These are the "greatest hits" of interviewing. You will almost
            certainly face at least one of these.
          </p>

          <div className="space-y-12">
            {/* Q1 */}
            <div className="overflow-hidden rounded-xl border bg-card">
              <div className="border-b bg-muted/50 p-4">
                <h3 className="align-middle text-xl font-bold">
                  1. "Tell me about yourself"
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Why they ask
                </p>
                <p className="mb-4 text-sm">
                  To get a snapshot of your professional identity and see if you
                  can communicate concisely. It sets the tone for the interview.
                </p>

                <div className="mb-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
                  <h4 className="mb-2 text-sm font-bold uppercase text-blue-700 dark:text-blue-300">
                    The Formula: Present, Past, Future
                  </h4>
                  <ul className="mb-0 space-y-1 text-sm">
                    <li>
                      <strong>Present:</strong> Who you are now (Role, Student
                      status).
                    </li>
                    <li>
                      <strong>Past:</strong> Relevant experience/skills you've
                      built.
                    </li>
                    <li>
                      <strong>Future:</strong> Why you are here for *this* role.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-red-600">
                      <ThumbsDown className="h-4 w-4" /> Weak Answer
                    </h4>
                    <p className="rounded bg-red-50 p-3 text-sm italic text-muted-foreground dark:bg-red-950/20">
                      "Well, I was born in Delhi, and I have two brothers. I
                      like playing cricket and watching movies. I went to
                      [College] and studied CS. I learned Java there and now I
                      want a job."
                    </p>
                    <p className="mt-1 text-xs text-red-500">
                      Too personal, unstructured, lacks professional focus.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-green-600">
                      <ThumbsUp className="h-4 w-4" /> Strong Answer
                    </h4>
                    <p className="rounded bg-green-50 p-3 text-sm italic text-muted-foreground dark:bg-green-950/20">
                      "I'm a final-year CS student passionate about backend
                      systems. Over the last year, I interned at [Company],
                      where I helped optimize API response times by 30%. I've
                      built several full-stack projects using Node.js and AWS.
                      I'm excited about this role because your company's work in
                      scalable cloud infrastructure aligns perfectly with my
                      skills and interests."
                    </p>
                    <p className="mt-1 text-xs text-green-500">
                      Professional, relevant metrics, connects to the company.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="overflow-hidden rounded-xl border bg-card">
              <div className="border-b bg-muted/50 p-4">
                <h3 className="align-middle text-xl font-bold">
                  2. "What are your greatest strengths?"
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Why they ask
                </p>
                <p className="mb-4 text-sm">
                  To see if your core skills align with the job requirements and
                  if you are self-aware.
                </p>

                <div className="mb-6">
                  <p className="text-sm">
                    <strong>Strategy:</strong> Choose strings that are directly
                    relevant to the Job Description (JD). If the JD mentions
                    "fast-paced environment," highlight adaptability.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-green-600">
                    <ThumbsUp className="h-4 w-4" /> Strong Answer
                  </h4>
                  <p className="rounded bg-green-50 p-3 text-sm italic text-muted-foreground dark:bg-green-950/20">
                    "I believe my greatest strength is my ability to simplify
                    complex technical concepts. At my last internship, I was
                    often tasked with explaining our data model to the sales
                    team. I created a series of diagrams that are now part of
                    the company's onboarding kit. This skill helps me bridge the
                    gap between engineering and non-technical stakeholders."
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="overflow-hidden rounded-xl border bg-card">
              <div className="border-b bg-muted/50 p-4">
                <h3 className="align-middle text-xl font-bold">
                  3. "What is your biggest weakness?"
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Why they ask
                </p>
                <p className="mb-4 text-sm">
                  To test your honesty and self-improvement mindset.
                </p>

                <div className="mb-4 rounded bg-yellow-50 p-4 dark:bg-yellow-950/20">
                  <p className="text-sm font-bold text-yellow-800 dark:text-yellow-200">
                    Avoid the "Humble Brag"
                  </p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    "I work too hard" or "I'm a perfectionist" are cliché and
                    interviewers hate them.
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-green-600">
                    <ThumbsUp className="h-4 w-4" /> Strong Answer
                  </h4>
                  <p className="mb-2 rounded bg-green-50 p-3 text-sm italic text-muted-foreground dark:bg-green-950/20">
                    "I sometimes struggle with public speaking. In college, I
                    would get very nervous presenting my projects. To overcome
                    this, I joined a local Toastmasters club six months ago.
                    I've since given four speeches, and while I still get
                    butterflies, I'm much more confident and structured in my
                    delivery now."
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Key Elements:</strong> Real weakness + Action taken
                    + Improvement shown.
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="overflow-hidden rounded-xl border bg-card">
              <div className="border-b bg-muted/50 p-4">
                <h3 className="align-middle text-xl font-bold">
                  4. "Why do you want to work here?"
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Why they ask
                </p>
                <p className="mb-4 text-sm">
                  To verify you've done your research and aren't just
                  spam-applying.
                </p>

                <p className="mb-4 text-sm">
                  <strong>Do's:</strong> Mention specific products, recent news,
                  company values, or culture.
                </p>
                <p className="mb-4 text-sm">
                  <strong>Don'ts:</strong> "I need a job" or "You pay well."
                </p>

                <div className="rounded bg-muted p-4">
                  <p className="text-sm italic">
                    "I've followed [Company] since you launched the [Product
                    Name]. I was impressed by how you solved the [Specific
                    Problem] using AI. As someone who is passionate about [My
                    Interest], I want to work in an environment that prioritizes
                    innovation. I also really admire your commitment to
                    open-source contribution, which aligns with my values."
                  </p>
                </div>
              </div>
            </div>

            {/* Q5 - Q10 Brief List */}
            <div className="rounded-xl border bg-card p-6">
              <h3 className="mb-4 text-xl font-bold">More General Classics</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-bold text-primary">
                    5. "Where do you see yourself in 5 years?"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Show ambition, but keep it realistic and aligned with the
                    company's potential growth paths.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary">
                    6. "Why should we hire you?"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your 30-second sales pitch. Summarize your top 3 relevant
                    skills/experiences.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary">
                    7. "What motivates you?"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Be honest—solving problems, learning new tech, helping
                    users. Avoid saying "money" directly.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary">
                    8. "How do you handle stress?"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Mention specific techniques: prioritization, lists,
                    exercise, deep work breaks.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary">
                    9. "What are your salary expectations?"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Do market research. Give a range. Say you're flexible for
                    the right opportunity.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary">
                    10. "Do you have any questions for us?"
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    ALWAYS say yes. "What does success look like in this role?"
                    or "How is the team structured?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Teamwork */}
        <section
          id="teamwork"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              4. Teamwork & Collaboration
            </h2>
          </div>

          <p className="mb-8">
            No one works in a silo. Can you get along with others, even when
            it's hard?
          </p>

          <div className="space-y-8">
            {/* Teamwork STAR Example */}
            <div className="rounded-xl border-l-4 border-violet-500 bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <h3 className="mb-4 text-lg font-bold">
                11. "Tell me about a time you worked on a team."
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-violet-600">S</span>
                  <p className="text-sm">
                    In my Operating Systems class, I was part of a 4-person team
                    tasked with building a file system in C++ over 8 weeks.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-violet-600">T</span>
                  <p className="text-sm">
                    We needed to coordinate complex coding tasks, but our
                    schedules were conflicting, leading to poor communication
                    early on.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-violet-600">A</span>
                  <p className="text-sm">
                    I proposed adopting a Trello board to track tasks
                    asynchronously. I also set up a recurring 15-minute standup
                    on Discord every evening. I took the lead on the core inode
                    structure and helped a struggling teammate debug their
                    memory allocation code.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-violet-600">R</span>
                  <p className="text-sm">
                    We finished the project 5 days early, allowing time for
                    extra testing. Our project received an 'A' grade and the
                    professor praised our modular code structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-bold">
                  12. "Describe a conflict with a coworker/classmate."
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>Focus:</strong> Resolution, not drama. Don't badmouth
                  the other person.
                </p>
                <p className="rounded bg-muted p-3 text-sm italic">
                  "My teammate wanted to use MongoDB while I suggested
                  PostgreSQL for our relational data. Instead of arguing, I
                  proposed we prototype the schema in both. Data showed SQL was
                  cleaner for our use case. He agreed, and we moved forward
                  without hard feelings."
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-bold">
                  13. "Tell me about a time you stepped up to lead."
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>Focus:</strong> Initiative. You don't need a manager
                  title to lead.
                </p>
                <p className="rounded bg-muted p-3 text-sm italic">
                  "Our team leader fell ill days before a hackathon deadline. I
                  organized a quick meeting, redistributed the remaining tasks
                  based on everyone's strengths, and kept morale high. We
                  successfully submitted the project on time."
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 text-sm font-bold">
                Other Common Teamwork Questions:
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>14. "What role do you usually take in a team?"</li>
                <li>
                  15. "How do you handle a teammate who isn't doing their share
                  of work?"
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Problem Solving */}
        <section
          id="problem"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              5. Problem-Solving & Adaptability
            </h2>
          </div>

          <div className="space-y-8">
            {/* Problem STAR Example */}
            <div className="rounded-xl border-l-4 border-orange-500 bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
              <h3 className="mb-4 text-lg font-bold">
                16. "Tell me about a time you solved a difficult problem."
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-orange-600">S</span>
                  <p className="text-sm">
                    During my internship, the mobile app load time was
                    increasing, causing user drop-off.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-orange-600">T</span>
                  <p className="text-sm">
                    I needed to identify the bottleneck and reduce load time by
                    at least 20%.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-orange-600">A</span>
                  <p className="text-sm">
                    I used the Chrome DevTools profiler to analyze the bundle
                    size. I found that we were importing a massive library
                    (Moment.js) for simple date formatting. I refactored the
                    code to use a lighter alternative (date-fns) and implemented
                    lazy loading for images.
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-bold text-orange-600">R</span>
                  <p className="text-sm">
                    Load time decreased by 40%, significantly improving the user
                    experience and feedback scores.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-bold">
                  17. "Describe a time you had to learn something quickly."
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>Focus:</strong> Learning agility.
                </p>
                <p className="rounded bg-muted p-3 text-sm italic">
                  "I joined a hackathon team using Flutter, which I had never
                  used. I spent the Friday night reading documentation and
                  building a 'Hello World' app. By Sunday, I had built the UI
                  for our project entirely in Flutter."
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-bold">
                  18. "How do you handle tight deadlines?"
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>Focus:</strong> Prioritization and calm under
                  pressure.
                </p>
                <p className="rounded bg-muted p-3 text-sm italic">
                  "I break the project down into smallest viable tasks. I
                  prioritize the 'must-haves' and communicate early if I foresee
                  delays. Last semester, this helped me deliver 3 major
                  assignments in the same week without burnout."
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 text-sm font-bold">
                More Problem Solving Questions:
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm">
                <li>
                  19. "Tell me about a time you made a decision with incomplete
                  information."
                </li>
                <li>20. "Describe a creative solution you came up with."</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Failure */}
        <section
          id="failure"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              6. Handling Failure & Weaknesses
            </h2>
          </div>

          <p className="mb-6">
            These are "trap" questions if you aren't prepared. The key is{' '}
            <strong>Growth Mindset</strong>.
          </p>

          <div className="mb-8 rounded-xl border-l-4 border-red-500 bg-slate-50 p-6 shadow-sm dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-bold">
              21. "Tell me about a time you failed."
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-bold text-red-600">S</span>
                <p className="text-sm">
                  In my sophomore year, I organized a coding workshop for
                  freshmen.
                </p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-bold text-red-600">T</span>
                <p className="text-sm">
                  My goal was to have 50 attendees and teach them Python basics.
                </p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-bold text-red-600">A</span>
                <p className="text-sm">
                  I focused heavily on the curriculum but neglected marketing. I
                  only posted once on social media a day before.
                </p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-bold text-red-600">R</span>
                <p className="text-sm">
                  Only 5 people showed up. I felt terrible.{' '}
                  <span className="font-semibold text-green-600">
                    However, I learned that even great content needs promotion.
                  </span>{' '}
                  For the next event, I formed a marketing team and we sold out
                  all 100 seats.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-bold text-primary">
                22. "What is your biggest regret?"
              </h3>
              <p className="text-sm">
                Focus on a professional regret, not personal. Pivot quickly to
                what you learned.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-bold text-primary">
                23. "Tell me about a time you received critical feedback."
              </h3>
              <p className="text-sm">
                Do NOT get defensive. Show you listened and changed your
                behavior.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-bold text-primary">
                24. "Describe a time you missed a deadline."
              </h3>
              <p className="text-sm">
                Explain why, how you handled it (communication), and how you
                prevent it now (better estimation).
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-bold text-primary">
                25. "Have you ever made a mistake that affected a customer?"
              </h3>
              <p className="text-sm">
                Show empathy for the user and a quick fix.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Mistakes */}
        <section
          id="mistakes"
          className="mb-16 scroll-mt-24"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <XCircle className="h-6 w-6" />
            </div>
            <h2 className="m-0 text-3xl font-bold">
              7. Common Mistakes to Avoid
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-red-50 p-6 dark:bg-red-950/20">
              <h3 className="mb-2 font-bold text-red-800 dark:text-red-300">
                The Rambler
              </h3>
              <p className="text-sm">
                Talking for 5 minutes without a point. <strong>Fix:</strong>{' '}
                Stick to STAR. Keep answers under 2 minutes.
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-6 dark:bg-red-950/20">
              <h3 className="mb-2 font-bold text-red-800 dark:text-red-300">
                The "We" Guy
              </h3>
              <p className="text-sm">
                "We did this, we did that." The interviewer wants to know what
                YOU did. <strong>Fix:</strong> Use "I" statements.
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-6 dark:bg-red-950/20">
              <h3 className="mb-2 font-bold text-red-800 dark:text-red-300">
                The Blamer
              </h3>
              <p className="text-sm">
                Blaming teammates or bosses for failures. <strong>Fix:</strong>{' '}
                Focus on the situation, not the person. Be professional.
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-6 dark:bg-red-950/20">
              <h3 className="mb-2 font-bold text-red-800 dark:text-red-300">
                The Robot
              </h3>
              <p className="text-sm">
                Memorizing answers word-for-word. <strong>Fix:</strong> Remember
                bullet points of your story, not a script.
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-6 dark:bg-red-950/20">
              <h3 className="mb-2 font-bold text-red-800 dark:text-red-300">
                The Vague
              </h3>
              <p className="text-sm">
                "I usually work hard." <strong>Fix:</strong> Give a specific
                example. "Last Tuesday, I worked until..."
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-6 dark:bg-red-950/20">
              <h3 className="mb-2 font-bold text-red-800 dark:text-red-300">
                The Perfectionist
              </h3>
              <p className="text-sm">
                Claiming you have no weaknesses. <strong>Fix:</strong> Be human.
                Vulnerability (with growth) shows maturity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Preparation Checklist */}
        <section className="mb-16 rounded-xl border border-indigo-100 bg-indigo-50 p-8 dark:border-indigo-900 dark:bg-indigo-950/30">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            Your Interview Prep Checklist
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm md:text-base">
                Review the Job Description and circle key required soft skills.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm md:text-base">
                Select 5-7 stories from your past (projects, internships,
                classes).
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm md:text-base">
                Write them out in STAR format (bullet points only).
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm md:text-base">
                Record yourself answering "Tell me about yourself" (Listen for
                'ums' and 'likes').
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm md:text-base">
                Research the company (News, Values, Products).
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm md:text-base">
                Prepare 3 thoughtful questions to ask the interviewer.
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mb-16"
        >
          <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
            <BookOpen className="h-8 w-8 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-bold">
                What if I don't have work experience?
              </h3>
              <p className="text-muted-foreground">
                Use academic projects, volunteer work, extracurriculars, or even
                sports. Leadership is leadership, whether it's in a boardroom or
                on a soccer field.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-bold">Can I repeat a story?</h3>
              <p className="text-muted-foreground">
                Try to avoid it. If you must, frame it from a different angle
                (e.g., focus on the technical challenge first, then the teamwork
                aspect later). But ideally, have enough stories to avoid
                repetition.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-bold">
                What if I can't think of an answer?
              </h3>
              <p className="text-muted-foreground">
                It's okay to say, "That's a great question. Let me take a moment
                to think." Take a sip of water. Silence is better than rambling.
                If you really can't recall, ask if you can come back to it or
                offer a related example.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-bold">
                How do I handle "negative" questions?
              </h3>
              <p className="text-muted-foreground">
                Always pivot to the positive. "I struggled with X, so I did Y,
                and now I am better at Z." Never dwell on the negative part.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 rounded-2xl bg-muted/30 p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Crush Your Interview?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground">
            Preparation is the antidote to nervousness. You have the stories;
            you just need to shape them. Practice these questions, trust your
            preparation, and walk into that room with confidence.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/internships"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Browse Internships
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              More Career Tips
            </Link>
          </div>
        </section>

        {/* Related Resources */}
        <div className="not-prose rounded-xl bg-slate-50 p-8 dark:bg-slate-900">
          <h3 className="mb-6 text-xl font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/blog/technical-interview-preparation"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                Technical Interview Prep Guide
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/questions-to-ask-interviewer"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                20 Smart Questions to Ask Interviewers
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/interview-dress-code"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                What to Wear to Your Interview
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/remote-interview-tips"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                Acing Remote/Zoom Interviews
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/salary-negotiation-freshers"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                Salary Negotiation for Freshers
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
            <Link
              href="/blog/follow-up-email-templates"
              className="group flex flex-col justify-between rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <span className="mb-2 font-semibold text-primary group-hover:underline">
                Post-Interview Follow Up Templates
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                Read Article <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-12 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold">
                Written by Sproutern Career Team
              </p>
              <p className="mb-2 text-sm text-muted-foreground">
                Compiled from 500+ interview experiences, HR insights, and
                industry best practices.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
