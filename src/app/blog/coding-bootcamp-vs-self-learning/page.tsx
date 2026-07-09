import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Code,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Laptop,
  Zap,
  DollarSign,
  XCircle,
  AlertCircle,
  Star,
  GraduationCap,
  Heart,
  Timer,
  Brain,
  Rocket,
  Shield,
  Award,
  Globe,
  MessageCircle,
  Play,
  Headphones,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coding Bootcamps vs Self-Learning: Comparison',
  description:
    'Comprehensive comparison of coding bootcamps and self-learning. Analyze costs, timelines, career outcomes, and find the best path to become a developer in India.',
  keywords: [
    'coding bootcamp india',
    'learn to code',
    'self taught programmer',
    'bootcamp vs self learning',
    'programming career',
    'coding bootcamp cost india',
    'best coding bootcamp',
    'scaler vs crio',
    'masai school review',
    'learn programming free',
    'become developer without degree',
  ],
  openGraph: {
    title: 'Coding Bootcamps vs Self-Learning: The Ultimate Guide',
    description:
      'Complete comparison to choose the right path for your programming career.',
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
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Learning Path
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Coding Bootcamps vs Self-Learning: Which Path is Right for You?
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Both paths can lead to successful tech careers, but they suit
            different situations. This comprehensive guide breaks down costs,
            timelines, learning styles, career outcomes, and helps you make an
            informed decision.
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
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Quick Comparison Table */}
        <div className="not-prose mb-10 overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left">Factor</th>
                <th className="p-3 text-left">Bootcamp</th>
                <th className="p-3 text-left">Self-Learning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Cost</td>
                <td className="p-3">₹50K - ₹3L</td>
                <td className="p-3">Free - ₹15K</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Duration</td>
                <td className="p-3">3-9 months (full-time)</td>
                <td className="p-3">6-18 months (flexible)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Structure</td>
                <td className="p-3">High (fixed curriculum)</td>
                <td className="p-3">Low (you design it)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Accountability</td>
                <td className="p-3">Built-in (peers + mentors)</td>
                <td className="p-3">Self-driven only</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Job Support</td>
                <td className="p-3">Usually included</td>
                <td className="p-3">None (you&apos;re on your own)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Flexibility</td>
                <td className="p-3">Low (fixed schedule)</td>
                <td className="p-3">High (learn anytime)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Depth of Learning</td>
                <td className="p-3">Broad, job-focused</td>
                <td className="p-3">Can go very deep</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            &quot;Should I join a coding bootcamp or learn on my own?&quot; This
            is one of the most common questions aspiring developers ask, and the
            answer isn&apos;t one-size-fits-all.
          </p>
          <p>
            Both paths have produced successful software engineers, product
            managers, and tech entrepreneurs. The right choice depends on your
            financial situation, learning style, timeline, career goals, and
            personal discipline.
          </p>
          <p>
            In this guide, we&apos;ll provide an honest, data-driven comparison
            to help you make the decision that&apos;s right for your specific
            situation. No marketing fluff—just facts and real considerations.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#bootcamp"
                className="text-primary hover:underline"
              >
                1. Bootcamp: Deep Dive
              </a>
            </li>
            <li>
              <a
                href="#self"
                className="text-primary hover:underline"
              >
                2. Self-Learning: Deep Dive
              </a>
            </li>
            <li>
              <a
                href="#costs"
                className="text-primary hover:underline"
              >
                3. Real Cost Comparison
              </a>
            </li>
            <li>
              <a
                href="#outcomes"
                className="text-primary hover:underline"
              >
                4. Career Outcomes
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                5. Types of Learners
              </a>
            </li>
            <li>
              <a
                href="#bootcamps-list"
                className="text-primary hover:underline"
              >
                6. Popular Bootcamps in India
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                7. Self-Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                8. Self-Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#hybrid"
                className="text-primary hover:underline"
              >
                9. The Hybrid Approach
              </a>
            </li>
            <li>
              <a
                href="#red-flags"
                className="text-primary hover:underline"
              >
                10. Red Flags to Watch
              </a>
            </li>
            <li>
              <a
                href="#decision"
                className="text-primary hover:underline"
              >
                11. Decision Framework
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
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
                Bootcamps work best when you need structure, accountability, and
                fast career transition
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Self-learning works best when budget is tight and you have
                strong self-discipline
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Both paths can lead to ₹6-15 LPA starting salaries for dedicated
                learners
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                The hybrid approach (free resources + targeted paid courses)
                offers best ROI
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Beware of bootcamps with misleading job placement claims
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Your portfolio and projects matter more than certificates
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Bootcamp Deep Dive */}
        <section
          id="bootcamp"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            1. Bootcamp: Deep Dive
          </h2>

          <p>
            Coding bootcamps are intensive, structured programs designed to take
            you from beginner to job-ready in a short time. They emerged as an
            alternative to traditional CS degrees and have gained popularity for
            their practical, career-focused approach.
          </p>

          <h3>Pros of Bootcamps</h3>

          <h4 className="text-lg">
            <Star className="mr-2 inline h-4 w-4 text-yellow-500" />
            Structured Curriculum
          </h4>
          <p>
            Bootcamps provide a carefully designed learning path created by
            industry experts. You don&apos;t waste time wondering what to learn
            next—the curriculum guides you step by step from basics to advanced
            topics.
          </p>

          <h4 className="text-lg">
            <Users className="mr-2 inline h-4 w-4 text-blue-500" />
            Accountability & Community
          </h4>
          <p>
            Learning with a cohort of peers creates healthy competition and
            mutual support. Teaching assistants and mentors hold you
            accountable. You&apos;re less likely to give up when others are
            counting on you.
          </p>

          <h4 className="text-lg">
            <MessageCircle className="mr-2 inline h-4 w-4 text-green-500" />
            Direct Access to Mentors
          </h4>
          <p>
            When you&apos;re stuck on a problem, you can get help immediately.
            Industry-experienced mentors provide guidance that&apos;s hard to
            find in self-learning. This dramatically reduces frustration and
            speeds up learning.
          </p>

          <h4 className="text-lg">
            <Award className="mr-2 inline h-4 w-4 text-purple-500" />
            Job Placement Support
          </h4>
          <p>
            Most reputable bootcamps offer resume reviews, mock interviews, job
            referrals, and career counseling. Some have partnerships with hiring
            companies. This support can significantly boost your job search.
          </p>

          <h4 className="text-lg">
            <Timer className="mr-2 inline h-4 w-4 text-red-500" />
            Faster Time to Job
          </h4>
          <p>
            Intensive programs can make you job-ready in 3-6 months. If you need
            to switch careers quickly or start earning soon, this compressed
            timeline is valuable.
          </p>

          <h3>Cons of Bootcamps</h3>

          <h4 className="text-lg">
            <DollarSign className="mr-2 inline h-4 w-4 text-red-500" />
            High Cost
          </h4>
          <p>
            Premium bootcamps cost ₹1.5L - ₹3L+ in India. This is a significant
            investment, especially for students or career changers without
            savings. Some offer ISA (Income Share Agreements) but these come
            with their own complexities.
          </p>

          <h4 className="text-lg">
            <AlertCircle className="mr-2 inline h-4 w-4 text-orange-500" />
            Fixed Pace
          </h4>
          <p>
            You can&apos;t speed up if you&apos;re advanced or slow down if you
            need more time. The cohort moves together, which can be frustrating
            if the pace doesn&apos;t match your learning speed.
          </p>

          <h4 className="text-lg">
            <XCircle className="mr-2 inline h-4 w-4 text-red-500" />
            Quality Varies Wildly
          </h4>
          <p>
            Not all bootcamps are equal. Some have outdated curriculum, poor
            mentors, or misleading job placement stats. Due diligence before
            enrolling is crucial.
          </p>

          <h4 className="text-lg">
            <Brain className="mr-2 inline h-4 w-4 text-purple-500" />
            Surface-Level Understanding
          </h4>
          <p>
            The fast pace means you might learn &quot;how&quot; without fully
            understanding &quot;why.&quot; Computer science fundamentals might
            be glossed over in favor of practical skills.
          </p>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Reality Check:</strong> Bootcamp job placement rates are
              often inflated. A &quot;90% placement rate&quot; might only count
              students who completed the program AND responded to surveys. Ask
              for specifics before enrolling.
            </div>
          </div>
        </section>

        {/* Section 2: Self-Learning Deep Dive */}
        <section
          id="self"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Laptop className="h-6 w-6 text-primary" />
            2. Self-Learning: Deep Dive
          </h2>

          <p>
            Self-learning means teaching yourself to code using free or low-cost
            resources—YouTube tutorials, documentation, online courses, books,
            and practice projects. Many successful developers took this path.
          </p>

          <h3>Pros of Self-Learning</h3>

          <h4 className="text-lg">
            <DollarSign className="mr-2 inline h-4 w-4 text-green-500" />
            Nearly Free
          </h4>
          <p>
            The internet has democratized programming education. You can learn
            full-stack development, data science, or mobile development using
            only free resources. Even premium courses on Udemy cost ₹400-1500
            during sales.
          </p>

          <h4 className="text-lg">
            <Timer className="mr-2 inline h-4 w-4 text-blue-500" />
            Complete Flexibility
          </h4>
          <p>
            Learn at 2 AM or 6 AM, on weekends or lunch breaks. You set the
            schedule around your existing job, college, or family
            responsibilities. No fixed class timings to attend.
          </p>

          <h4 className="text-lg">
            <Target className="mr-2 inline h-4 w-4 text-purple-500" />
            Customized Learning Path
          </h4>
          <p>
            Want to focus on React and skip Angular? Interested in AI but not
            web development? Self-learning lets you design your own curriculum
            based on your goals and interests.
          </p>

          <h4 className="text-lg">
            <Brain className="mr-2 inline h-4 w-4 text-orange-500" />
            Deeper Understanding (If Done Right)
          </h4>
          <p>
            Without time pressure, you can dig into fundamentals, read
            documentation thoroughly, and truly understand concepts. This often
            leads to stronger foundations than bootcamp graduates.
          </p>

          <h4 className="text-lg">
            <Award className="mr-2 inline h-4 w-4 text-green-500" />
            Proves Self-Motivation
          </h4>
          <p>
            Successfully teaching yourself to code demonstrates discipline,
            initiative, and problem-solving ability. Employers value these
            traits, especially in startups.
          </p>

          <h3>Cons of Self-Learning</h3>

          <h4 className="text-lg">
            <AlertCircle className="mr-2 inline h-4 w-4 text-red-500" />
            No Structure
          </h4>
          <p>
            It&apos;s easy to get lost in &quot;tutorial hell&quot;—endlessly
            watching videos without building real projects. Without a clear
            roadmap, you might waste months on the wrong topics.
          </p>

          <h4 className="text-lg">
            <Users className="mr-2 inline h-4 w-4 text-red-500" />
            No Accountability
          </h4>
          <p>
            When motivation drops (and it will), there&apos;s no one to push
            you. Studies show 90%+ of online course enrollees never complete
            them. The dropout rate in self-learning is extremely high.
          </p>

          <h4 className="text-lg">
            <MessageCircle className="mr-2 inline h-4 w-4 text-orange-500" />
            No Mentorship
          </h4>
          <p>
            Stuck on a bug for hours? No one to ask. Making architectural
            mistakes you don&apos;t even realize? No one to correct you. The
            lack of guidance can lead to bad habits and prolonged frustration.
          </p>

          <h4 className="text-lg">
            <Timer className="mr-2 inline h-4 w-4 text-red-500" />
            Takes Longer
          </h4>
          <p>
            Without intensity and structure, self-learning typically takes 12-24
            months to become job-ready. If you&apos;re in a hurry to switch
            careers, this extended timeline can be frustrating.
          </p>

          <h4 className="text-lg">
            <Rocket className="mr-2 inline h-4 w-4 text-orange-500" />
            No Job Placement Support
          </h4>
          <p>
            You&apos;re alone in the job search. No referrals, no mock
            interviews, no company partnerships. Building your own network
            becomes essential—but also time-consuming.
          </p>
        </section>

        {/* Section 3: Real Cost Comparison */}
        <section
          id="costs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            3. Real Cost Comparison
          </h2>

          <p>
            Let&apos;s break down the true costs of both paths, including hidden
            expenses:
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Expense</th>
                  <th className="p-3 text-left">Bootcamp</th>
                  <th className="p-3 text-left">Self-Learning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tuition/Courses</td>
                  <td className="p-3 text-red-600">₹50K - ₹3L</td>
                  <td className="p-3 text-green-600">₹0 - ₹15K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Laptop/Equipment</td>
                  <td className="p-3">₹40K - ₹80K</td>
                  <td className="p-3">₹40K - ₹80K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Internet (Monthly)</td>
                  <td className="p-3">₹800 - ₹1500</td>
                  <td className="p-3">₹800 - ₹1500</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Opportunity Cost (Lost Income)
                  </td>
                  <td className="p-3 text-red-600">₹2-5L (6 months)</td>
                  <td className="p-3 text-green-600">
                    ₹0 (Learn while working)
                  </td>
                </tr>
                <tr className="border-t bg-muted">
                  <td className="p-3 font-bold">TOTAL INVESTMENT</td>
                  <td className="p-3 font-bold text-red-600">₹3L - ₹8L+</td>
                  <td className="p-3 font-bold text-green-600">₹40K - ₹1L</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>ISA (Income Share Agreements) Reality</h3>
          <p>
            Some bootcamps offer ISAs where you pay nothing upfront but share a
            percentage of your salary after getting a job (typically 15-20% for
            2-3 years). While this reduces initial risk, you could end up paying
            significantly more than the upfront cost, especially if you land a
            high-paying job.
          </p>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Example:</strong> If you pay 17% of your ₹8 LPA salary for
              2 years under ISA, that&apos;s ₹2.72L total—nearly the same as
              upfront fees, but you&apos;d pay more if your salary grows.
            </div>
          </div>
        </section>

        {/* Section 4: Career Outcomes */}
        <section
          id="outcomes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            4. Career Outcomes
          </h2>

          <p>
            What matters most: Can you get a job? Here&apos;s what the data
            shows:
          </p>

          <h3>Bootcamp Graduates</h3>
          <ul>
            <li>
              <strong>Average starting salary:</strong> ₹4-8 LPA (varies widely
              by bootcamp quality)
            </li>
            <li>
              <strong>Job placement timeline:</strong> 3-6 months after
              completing program
            </li>
            <li>
              <strong>Common roles:</strong> Junior Developer, Frontend
              Developer, QA Engineer
            </li>
            <li>
              <strong>Top bootcamp grads:</strong> ₹10-15 LPA (at companies like
              Amazon, Google, startups)
            </li>
          </ul>

          <h3>Self-Taught Developers</h3>
          <ul>
            <li>
              <strong>Average starting salary:</strong> ₹3-6 LPA (similar range
              but more variance)
            </li>
            <li>
              <strong>Job placement timeline:</strong> 6-12 months after
              starting to apply
            </li>
            <li>
              <strong>Common roles:</strong> Junior Developer, Freelancer,
              Intern → Full-time
            </li>
            <li>
              <strong>Top self-taught:</strong> ₹8-20 LPA (exceptional
              portfolios + preparation)
            </li>
          </ul>

          <div className="not-prose my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
            <p className="flex items-center gap-2 font-bold text-yellow-700 dark:text-yellow-400">
              <AlertCircle className="h-5 w-5" />
              The Uncomfortable Truth
            </p>
            <p className="mt-2 text-sm">
              Your portfolio and interview skills matter more than how you
              learned. A self-taught developer with excellent projects and
              communication skills will beat a bootcamp graduate with no
              portfolio every time.
            </p>
          </div>
        </section>

        {/* Section 5: Types of Learners */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            5. Which Learner Are You?
          </h2>

          <h3>
            <Zap className="mr-2 inline h-5 w-5 text-orange-500" />
            Choose Bootcamp If:
          </h3>
          <ul>
            <li>You have the budget (or access to loans/ISA)</li>
            <li>
              You struggle with self-discipline and need external accountability
            </li>
            <li>You want to switch careers quickly (within 6 months)</li>
            <li>You learn better in structured environments with mentors</li>
            <li>You value networking with peers and industry connections</li>
            <li>You can commit full-time (8-10 hours/day)</li>
          </ul>

          <h3>
            <Laptop className="mr-2 inline h-5 w-5 text-blue-500" />
            Choose Self-Learning If:
          </h3>
          <ul>
            <li>Budget is a constraint (you can&apos;t afford ₹1L+)</li>
            <li>You&apos;re highly disciplined and self-motivated</li>
            <li>You have more time (12-18 months is okay for you)</li>
            <li>You already have some programming exposure</li>
            <li>You can&apos;t leave your current job for full-time study</li>
            <li>You want to go deeper into specific areas</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Honest Self-Assessment:</strong> Ask yourself—have you
              ever completed a long online course (50+ hours) without external
              pressure? If yes, you might succeed at self-learning. If no,
              consider bootcamp for accountability.
            </div>
          </div>
        </section>

        {/* Section 6: Popular Bootcamps */}
        <section
          id="bootcamps-list"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            6. Popular Coding Bootcamps in India
          </h2>

          <p>
            Here&apos;s an honest overview of major bootcamps in India. Research
            thoroughly before enrolling.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Scaler Academy</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Cost:</strong> ₹2.5L - ₹3.5L |{' '}
                <strong>Duration:</strong> 9-12 months
              </p>
              <p className="mt-2 text-sm">
                Premium bootcamp with strong alumni network. Focus on DSA and
                system design. Good for working professionals. High cost but
                reportedly good outcomes for dedicated students.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Crio.Do</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Cost:</strong> ₹1.5L - ₹2L | <strong>Duration:</strong>{' '}
                6-9 months
              </p>
              <p className="mt-2 text-sm">
                Project-based learning approach. You build real products, not
                toy projects. Good for practical skill development. Mid-range
                pricing with decent outcomes.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Newton School / Masai School</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Cost:</strong> ISA (17% of salary for 3 years) |{' '}
                <strong>Duration:</strong> 6-9 months
              </p>
              <p className="mt-2 text-sm">
                Pay-after-placement model. Intensive full-time programs. Lower
                upfront barrier but read ISA terms carefully. Outcomes vary
                significantly.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Coding Ninjas</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Cost:</strong> ₹30K - ₹80K | <strong>Duration:</strong>{' '}
                3-6 months
              </p>
              <p className="mt-2 text-sm">
                More affordable option with good community. Various tracks
                available (DSA, development, etc.). Good for college students.
                Less hand-holding than premium bootcamps.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Pesto Tech</h4>
              <p className="text-sm text-muted-foreground">
                <strong>Cost:</strong> ISA model | <strong>Duration:</strong>{' '}
                6-8 months
              </p>
              <p className="mt-2 text-sm">
                Focused on getting you remote/international jobs. Good for
                experienced developers looking to upgrade. Selective admissions
                process.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Self-Learning Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            7. Best Self-Learning Resources
          </h2>

          <h3>
            <Globe className="mr-2 inline h-5 w-5 text-green-500" />
            Free Resources
          </h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Complete Curricula</p>
              <ul className="mt-2 space-y-1">
                <li>• freeCodeCamp (full-stack + certifications)</li>
                <li>• The Odin Project (web development)</li>
                <li>• CS50 by Harvard (CS fundamentals)</li>
                <li>• Full Stack Open (modern React)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">YouTube Channels</p>
              <ul className="mt-2 space-y-1">
                <li>• Traversy Media (web dev)</li>
                <li>• Fireship (quick concepts)</li>
                <li>• Net Ninja (tutorials)</li>
                <li>• Akshay Saini (JavaScript)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Practice Platforms</p>
              <ul className="mt-2 space-y-1">
                <li>• LeetCode (DSA)</li>
                <li>• HackerRank (general coding)</li>
                <li>• Frontend Mentor (UI projects)</li>
                <li>• Exercism (language practice)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Documentation</p>
              <ul className="mt-2 space-y-1">
                <li>• MDN Web Docs (web fundamentals)</li>
                <li>• React.dev (official React)</li>
                <li>• JavaScript.info (deep JS)</li>
                <li>• DevDocs.io (unified docs)</li>
              </ul>
            </div>
          </div>

          <h3>
            <DollarSign className="mr-2 inline h-5 w-5 text-orange-500" />
            Paid Resources (Budget-Friendly)
          </h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">High-Value Courses</p>
              <ul className="mt-2 space-y-1">
                <li>• Udemy (₹400-500 on sale)</li>
                <li>• Coursera (financial aid available)</li>
                <li>• Frontend Masters (₹1500/month)</li>
                <li>• Educative.io (text-based learning)</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">DSA Focused</p>
              <ul className="mt-2 space-y-1">
                <li>• Striver&apos;s SDE Sheet (free)</li>
                <li>• NeetCode courses</li>
                <li>• AlgoExpert (₹8K/year)</li>
                <li>• Take U Forward (YouTube)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Self-Learning Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            8. Self-Learning Roadmap (12 Months)
          </h2>

          <p>Here&apos;s a realistic roadmap for becoming job-ready:</p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 p-4">
              <h4 className="font-bold">Month 1-2: Foundations</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• HTML, CSS basics (freeCodeCamp)</li>
                <li>• JavaScript fundamentals (JavaScript.info)</li>
                <li>• Git & GitHub basics</li>
                <li>• Build 2-3 simple static websites</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 p-4">
              <h4 className="font-bold">Month 3-4: Frontend Deep Dive</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Advanced JavaScript (closures, async)</li>
                <li>• React fundamentals (official docs)</li>
                <li>• CSS frameworks (Tailwind recommended)</li>
                <li>• Build 2-3 React projects</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold">Month 5-6: Backend + Databases</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Node.js & Express</li>
                <li>• MongoDB or PostgreSQL</li>
                <li>• REST API design</li>
                <li>• Build 1 full-stack project</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 p-4">
              <h4 className="font-bold">Month 7-8: DSA & CS Fundamentals</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Data structures (arrays, trees, graphs)</li>
                <li>• Algorithms (sorting, searching, DP)</li>
                <li>• Solve 100+ LeetCode problems</li>
                <li>• Focus on medium difficulty</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 p-4">
              <h4 className="font-bold">Month 9-10: Advanced Projects</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Build a complex portfolio project</li>
                <li>• Implement authentication, payments</li>
                <li>• Deploy to production</li>
                <li>• Write clean, documented code</li>
              </ul>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 p-4">
              <h4 className="font-bold">Month 11-12: Job Preparation</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Polish resume and portfolio</li>
                <li>• Practice mock interviews</li>
                <li>• Apply to 50+ positions</li>
                <li>• Network on LinkedIn</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: Hybrid Approach */}
        <section
          id="hybrid"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            9. The Hybrid Approach (Best of Both)
          </h2>

          <p>Many successful developers combine both paths. Here&apos;s how:</p>

          <h3>Strategy 1: Free Foundation + Paid Polish</h3>
          <ul>
            <li>Learn fundamentals through free resources (6-8 months)</li>
            <li>
              Join affordable bootcamp/course for interview prep (2-3 months)
            </li>
            <li>Total cost: ₹15K-40K instead of ₹2L+</li>
          </ul>

          <h3>Strategy 2: Self-Learn + Paid Mentorship</h3>
          <ul>
            <li>Follow free curriculum (The Odin Project, freeCodeCamp)</li>
            <li>Pay for 1:1 mentorship (₹2K-5K/month)</li>
            <li>Get personalized guidance without full bootcamp cost</li>
          </ul>

          <h3>Strategy 3: Short Bootcamp + Self Practice</h3>
          <ul>
            <li>Join a shorter, cheaper bootcamp (3 months, ₹30-50K)</li>
            <li>Continue self-learning for depth and projects</li>
            <li>Get structure without massive investment</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> The hybrid approach gives you best ROI.
              Use free resources for fundamentals, invest money only for
              accountability, mentorship, or job placement support.
            </div>
          </div>
        </section>

        {/* Section 10: Red Flags */}
        <section
          id="red-flags"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            10. Red Flags to Watch For
          </h2>

          <h3>Bootcamp Red Flags</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
              <p className="text-sm font-bold text-red-800 dark:text-red-300">
                ❌ &quot;100% job guarantee&quot; claims
              </p>
              <p className="text-xs text-red-700 dark:text-red-400">
                Read the fine print. Often requires maintaining attendance,
                completing all assignments, applying to X jobs, accepting offers
                within salary range, etc.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
              <p className="text-sm font-bold text-red-800 dark:text-red-300">
                ❌ Aggressive sales tactics
              </p>
              <p className="text-xs text-red-700 dark:text-red-400">
                &quot;Last 2 seats left!&quot; or &quot;Offer expires
                today!&quot; are manipulation tactics. Good programs don&apos;t
                need high-pressure sales.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
              <p className="text-sm font-bold text-red-800 dark:text-red-300">
                ❌ No verifiable alumni outcomes
              </p>
              <p className="text-xs text-red-700 dark:text-red-400">
                Ask to speak with recent graduates. Search LinkedIn for alumni.
                If they can&apos;t provide references, be suspicious.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
              <p className="text-sm font-bold text-red-800 dark:text-red-300">
                ❌ Outdated curriculum
              </p>
              <p className="text-xs text-red-700 dark:text-red-400">
                Teaching jQuery, Angular 1, or technologies no longer used in
                industry. Ask to see the curriculum before paying.
              </p>
            </div>
          </div>

          <h3>Self-Learning Red Flags (Signs You Need Help)</h3>
          <ul>
            <li>
              You&apos;ve been &quot;learning&quot; for 6+ months with no
              projects
            </li>
            <li>You watch tutorials but can&apos;t build without them</li>
            <li>You&apos;ve restarted multiple times without finishing</li>
            <li>You feel completely stuck and don&apos;t know next steps</li>
          </ul>
        </section>

        {/* Section 11: Decision Framework */}
        <section
          id="decision"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            11. Decision Framework
          </h2>

          <p>Use this checklist to make your decision:</p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-950">
              <h4 className="flex items-center gap-2 font-bold text-orange-800 dark:text-orange-300">
                <Zap className="h-5 w-5" />
                Bootcamp Scorecard
              </h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>☐ I can afford ₹1L+ or qualify for ISA</li>
                <li>☐ I need a job within 6-9 months</li>
                <li>☐ I struggle with self-motivation</li>
                <li>☐ I learn better with structure</li>
                <li>☐ I can commit full-time (8+ hrs/day)</li>
                <li>☐ I value mentorship and networking</li>
              </ul>
              <p className="mt-2 text-xs text-orange-700 dark:text-orange-400">
                4+ checks? Bootcamp might be right for you.
              </p>
            </div>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-300">
                <Laptop className="h-5 w-5" />
                Self-Learning Scorecard
              </h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>☐ I have limited budget (&lt;₹50K)</li>
                <li>☐ I have 12-18 months to become job-ready</li>
                <li>☐ I&apos;m highly self-disciplined</li>
                <li>☐ I&apos;ve completed courses independently before</li>
                <li>☐ I can&apos;t quit my current job</li>
                <li>☐ I prefer learning at my own pace</li>
              </ul>
              <p className="mt-2 text-xs text-blue-700 dark:text-blue-400">
                4+ checks? Self-learning might work for you.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">Are bootcamp job guarantees real?</p>
              <p className="mt-2 text-muted-foreground">
                Read the fine print carefully. Most have conditions: attendance
                requirements, completing all assignments, applying to a minimum
                number of jobs, accepting offers within a salary range.
                &quot;Guarantee&quot; often just means refund if conditions are
                met.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Can self-taught developers get good jobs?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Many developers at top companies are self-taught.
                Your portfolio, projects, and interview skills matter more than
                how you learned. It just requires more discipline and takes
                longer.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Which bootcamp has the best placement rate?
              </p>
              <p className="mt-2 text-muted-foreground">
                Be skeptical of published rates—they&apos;re often calculated in
                misleading ways. Instead, ask to speak with recent graduates,
                check LinkedIn for alumni careers, and research reviews on
                Reddit and Quora.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How do I stay motivated while self-learning?
              </p>
              <p className="mt-2 text-muted-foreground">
                Join online communities (Discord, Reddit), find an
                accountability partner, set daily/weekly goals, build projects
                you&apos;re excited about, and celebrate small wins. Consider
                paid mentorship if you keep quitting.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Should I do bootcamp after B.Tech?</p>
              <p className="mt-2 text-muted-foreground">
                If you already have a CS degree, bootcamp might be redundant.
                Focus on projects, DSA practice, and interview prep. Bootcamps
                are more valuable for non-CS backgrounds looking for structure.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Do employers care about bootcamp certificates?
              </p>
              <p className="mt-2 text-muted-foreground">
                Most employers care more about what you can build than where you
                learned. Certificates from reputable bootcamps can help get past
                initial screening, but your portfolio and interview performance
                matter more.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Choose Your Path</h2>
          <p>
            Both bootcamps and self-learning can lead to successful tech
            careers. The right choice depends on your specific situation—your
            budget, timeline, learning style, and career goals.
          </p>
          <p>
            Don&apos;t let marketing hype or fear of making the
            &quot;wrong&quot; choice paralyze you. The best path is the one
            you&apos;ll actually follow through. Start today, adjust as you
            learn, and keep building.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best path is the one you&apos;ll actually complete. Start today.
            💻
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation Roadmap
            </Link>
            <Link
              href="/blog/git-github-beginners-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Git & GitHub Guide
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building Guide
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
                Based on interviews with bootcamp alumni, self-taught
                developers, and hiring managers at tech companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
