import Link from 'next/link';
import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Brain,
  Target,
  Eye,
  Users,
  BookOpen,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Award,
  MessageSquare,
  Heart,
  Shield,
  Zap,
  Compass,
  Star,
  ThumbsUp,
  FileText,
  Search,
  BarChart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Psychology of Job Applications',
  description:
    'Master the psychology behind successful job applications. Learn what hiring managers prioritize, cognitive biases that influence decisions, psychological triggers that make applications memorable, and proven strategies to stand out.',
  keywords:
    'psychology job applications, recruiter psychology, hiring manager mindset, cognitive biases recruitment, job application tips, resume psychology, cover letter psychology, interview psychology, first impression hiring, ATS psychology',
  openGraph: {
    title:
      'The Psychology of Job Applications: Understanding What Recruiters Look For',
    description:
      'Get inside the recruiter mind. Learn psychological principles that make applications memorable and land more interviews.',
    type: 'article',
    publishedTime: '2025-09-15T00:00:00.000Z',
    modifiedTime: '2025-12-26T00:00:00.000Z',
    authors: ['Sproutern Career Experts'],
    tags: [
      'Job Applications',
      'Psychology',
      'Career Development',
      'Hiring',
      'Recruitment',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Psychology of Job Applications',
    description:
      'Master the psychological principles that make recruiters say yes to your application.',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Category Badge */}
        <div className="mb-6 flex items-center gap-2">
          <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800">
            Career Psychology
          </span>
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            Job Search
          </span>
        </div>

        {/* Main Title */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
          The Psychology of Job Applications: Understanding What Recruiters Look
          For
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-xl leading-relaxed text-gray-600">
          Discover the hidden psychological factors that influence hiring
          decisions and learn how to leverage them to create compelling
          applications that resonate with recruiters and hiring managers.
        </p>

        {/* Author and Meta Info */}
        <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dr. Sarah Mitchell</p>
              <p className="text-sm text-gray-500">Career Psychology Expert</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-5 w-5" />
            <span>Regularly updated</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>25 min read</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Eye className="h-5 w-5" />
            <span>15.8K views</span>
          </div>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          {/* Key Takeaways Box */}
          <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              <h3 className="m-0 text-lg font-bold text-gray-900">
                Key Takeaways
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Recruiters spend only 6-7 seconds on initial resume scans -
                  first impressions are everything
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Understanding cognitive biases helps you craft applications
                  that naturally resonate
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Emotional triggers and storytelling are more persuasive than
                  facts alone
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Social proof and third-party validation significantly boost
                  credibility
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Reducing perceived hiring risk is more effective than
                  overselling qualifications
                </span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="not-prose mb-10 rounded-xl bg-gray-50 p-6">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-gray-700" />
              <h3 className="m-0 text-lg font-bold text-gray-900">
                Table of Contents
              </h3>
            </div>
            <nav className="grid gap-2 md:grid-cols-2">
              <a
                href="#introduction"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                1. Introduction
              </a>
              <a
                href="#recruiter-mindset"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                2. The Recruiter Mindset
              </a>
              <a
                href="#seven-second-scan"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                3. The 7-Second Scan
              </a>
              <a
                href="#cognitive-biases"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                4. Cognitive Biases in Hiring
              </a>
              <a
                href="#primacy-recency"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                5. Primacy and Recency Effects
              </a>
              <a
                href="#cognitive-load"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                6. Cognitive Load Theory
              </a>
              <a
                href="#confirmation-bias"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                7. Confirmation Bias
              </a>
              <a
                href="#halo-effect"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                8. The Halo Effect
              </a>
              <a
                href="#social-proof"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                9. Social Proof Psychology
              </a>
              <a
                href="#storytelling"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                10. Power of Storytelling
              </a>
              <a
                href="#loss-aversion"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                11. Loss Aversion
              </a>
              <a
                href="#emotional-triggers"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                12. Emotional Triggers
              </a>
              <a
                href="#pattern-recognition"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                13. Pattern Recognition
              </a>
              <a
                href="#authority-principle"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                14. Authority Principle
              </a>
              <a
                href="#scarcity-principle"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                15. Scarcity Principle
              </a>
              <a
                href="#common-mistakes"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                16. Common Psychological Mistakes
              </a>
              <a
                href="#action-plan"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                17. Action Plan
              </a>
              <a
                href="#faq"
                className="text-purple-600 hover:text-purple-800 hover:underline"
              >
                18. FAQ
              </a>
            </nav>
          </div>

          {/* Introduction Section */}
          <section
            id="introduction"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Introduction: The Hidden Science of Hiring
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              When you click that "Submit Application" button, your carefully
              crafted resume doesn't simply vanish into a digital void. It
              embarks on a fascinating journey through human psychology,
              cognitive filters, and emotional responses. Behind every hiring
              decision sits a real person - a recruiter or hiring manager whose
              brain is wired with the same psychological tendencies that
              influence all human decision-making.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Understanding the psychology of job applications isn't about
              manipulation or deception. It's about aligning your genuine
              qualifications and experiences with the natural ways human brains
              process information and make decisions. When you understand what
              happens inside a recruiter's mind, you can present yourself in
              ways that feel natural, memorable, and compelling.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              This comprehensive guide draws from decades of research in
              cognitive psychology, behavioral economics, and organizational
              behavior. We'll explore the mental shortcuts recruiters use, the
              biases that influence their decisions, and the psychological
              triggers that transform ordinary applications into interview
              invitations.
            </p>

            <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
              <div className="flex items-start gap-3">
                <BarChart className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    The Numbers Behind Hiring Decisions
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      • Average recruiter reviews <strong>250+ resumes</strong>{' '}
                      per job opening
                    </li>
                    <li>
                      • <strong>75% of applications</strong> are rejected before
                      a human ever sees them
                    </li>
                    <li>
                      • Only <strong>2-3% of applicants</strong> receive
                      interview invitations
                    </li>
                    <li>
                      • Recruiters make initial judgments in{' '}
                      <strong>under 7 seconds</strong>
                    </li>
                    <li>
                      • <strong>88% of hiring managers</strong> cite "cultural
                      fit" as crucial - a subjective, psychological assessment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              These statistics might seem daunting, but they also represent an
              opportunity. When most applicants ignore the psychological
              dimensions of job applications, understanding these principles
              gives you a significant competitive advantage. Let's dive deep
              into the recruiter's mind and discover what really drives hiring
              decisions.
            </p>
          </section>

          {/* Recruiter Mindset Section */}
          <section
            id="recruiter-mindset"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Understanding the Recruiter Mindset
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Before we explore specific psychological principles, it's
              essential to understand the mental state of the person reviewing
              your application. Recruiters and hiring managers aren't just
              looking for qualified candidates - they're solving problems,
              managing risks, and making decisions under significant
              constraints.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The Recruiter's Daily Reality
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Imagine starting your workday facing hundreds of applications for
              multiple open positions, each demanding careful evaluation. You
              have meetings, stakeholder demands, and deadlines pressing from
              all directions. Your success is measured by the quality of hires
              you make, but also by how quickly you can fill positions with
              candidates who won't become problems later.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 p-6">
                <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                  <Target className="h-5 w-5 text-orange-600" />
                  Recruiter Goals
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Find candidates who can do the job well</li>
                  <li>• Minimize risk of bad hires</li>
                  <li>• Fill positions quickly</li>
                  <li>• Please hiring managers</li>
                  <li>• Build a diverse candidate pipeline</li>
                  <li>• Maintain employer brand</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-pink-50 p-6">
                <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Recruiter Fears
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Making a costly bad hire</li>
                  <li>• Missing a great candidate</li>
                  <li>• Taking too long to fill roles</li>
                  <li>• Candidates who misrepresent themselves</li>
                  <li>• Bias accusations</li>
                  <li>• Candidate ghosting after offers</li>
                </ul>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The Psychology of Decision Fatigue
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Decision fatigue is a psychological phenomenon where the quality
              of decisions deteriorates after making many decisions. Recruiters
              experience this constantly. Research by social psychologist Roy
              Baumeister showed that humans have a limited supply of mental
              energy for making decisions - when it's depleted, we take
              shortcuts.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              This has profound implications for job seekers. Applications
              reviewed first thing in the morning may receive more careful
              consideration than those reviewed late in the day. Complex or
              confusing applications are quickly dismissed because the mental
              effort required to parse them exceeds available cognitive
              resources.
            </p>

            <div className="mb-6 rounded-xl border border-yellow-300 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    Pro Tip: Timing Your Application
                  </h4>
                  <p className="text-gray-700">
                    Consider submitting your application early in the morning
                    (before 10 AM in the recruiter's time zone) and early in the
                    week (Tuesday or Wednesday). Research suggests recruiters
                    are more thorough and generous in their evaluations when
                    cognitive resources are fresh. Avoid Friday afternoon
                    submissions when decision fatigue is at its peak.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The Two-System Brain Model
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Nobel laureate Daniel Kahneman's research describes two systems of
              thinking that influence all human decisions, including hiring:
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  System 1: Fast Thinking
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Automatic and effortless</li>
                  <li>• Based on intuition and pattern recognition</li>
                  <li>• Quick judgments and first impressions</li>
                  <li>• Influenced by emotions and biases</li>
                  <li>• Operates during the 7-second scan</li>
                </ul>
              </div>
              <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-teal-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  System 2: Slow Thinking
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deliberate and effortful</li>
                  <li>• Logical analysis and reasoning</li>
                  <li>• Careful evaluation of evidence</li>
                  <li>• More objective assessments</li>
                  <li>• Used for in-depth interviews</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Your application must first pass System 1's quick, intuitive
              filter before it earns the deeper System 2 analysis. This is why
              visual presentation, clear structure, and immediate impact matter
              so much - they're speaking directly to the fast-thinking brain
              that makes initial screening decisions.
            </p>
          </section>

          {/* 7-Second Scan Section */}
          <section
            id="seven-second-scan"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                The 7-Second Scan: Making Every Moment Count
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Multiple studies, including prominent research by TheLadders using
              eye-tracking technology, have confirmed that recruiters spend an
              average of just 6-7 seconds scanning a resume before making an
              initial "yes" or "no" decision. This finding has been replicated
              across industries and countries, making it one of the most
              reliable insights in recruitment psychology.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Seven seconds isn't much time. In fact, it's barely enough to read
              this paragraph. But understanding what happens during those
              critical seconds - and what draws the recruiter's eye - can
              transform your application's success rate.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Eye-Tracking Research Insights
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Eye-tracking studies reveal consistent patterns in how recruiters
              visually scan resumes. They don't read linearly from top to bottom
              - instead, they follow predictable visual pathways:
            </p>

            <div className="mb-8 rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                The F-Pattern Scan
              </h4>
              <p className="mb-4 text-gray-700">
                Most recruiters follow an "F-pattern" when scanning resumes:
              </p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm text-white">
                    1
                  </span>
                  <span>
                    <strong>Horizontal sweep across the top</strong> - Name,
                    contact info, and opening statement receive the most
                    attention
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm text-white">
                    2
                  </span>
                  <span>
                    <strong>Second horizontal sweep</strong> - Usually catching
                    the first job title and company name
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm text-white">
                    3
                  </span>
                  <span>
                    <strong>Vertical scan down the left side</strong> - Looking
                    for additional job titles, dates, and section headings
                  </span>
                </li>
              </ol>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              What Recruiters Look For First
            </h3>

            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg bg-white shadow">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Priority</th>
                    <th className="px-6 py-4 text-left">What They Look For</th>
                    <th className="px-6 py-4 text-left">Time Spent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-purple-600">
                      1st
                    </td>
                    <td className="px-6 py-4">Current/most recent job title</td>
                    <td className="px-6 py-4">2+ seconds</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-purple-600">
                      2nd
                    </td>
                    <td className="px-6 py-4">Current/most recent company</td>
                    <td className="px-6 py-4">1-2 seconds</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-purple-600">
                      3rd
                    </td>
                    <td className="px-6 py-4">Start and end dates</td>
                    <td className="px-6 py-4">1 second</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-purple-600">
                      4th
                    </td>
                    <td className="px-6 py-4">Education section</td>
                    <td className="px-6 py-4">1 second</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-purple-600">
                      5th
                    </td>
                    <td className="px-6 py-4">Skills and keywords</td>
                    <td className="px-6 py-4">&lt;1 second</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Optimizing for the Quick Scan
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Understanding the 7-second scan leads to specific, actionable
              strategies:
            </p>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Lead with Your Best
                </h4>
                <p className="text-gray-700">
                  Place your most impressive, relevant information at the top.
                  If you have a summary statement, make it count - it might be
                  the only thing that gets read.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Make Job Titles Prominent
                </h4>
                <p className="text-gray-700">
                  Use bold formatting for job titles and company names. These
                  are anchor points that the recruiter's eye naturally seeks.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Create Visual Hierarchy
                </h4>
                <p className="text-gray-700">
                  Use size, weight, and spacing to guide the eye. Section
                  headings should be clearly distinguishable from body text.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Embrace White Space
                </h4>
                <p className="text-gray-700">
                  Crowded resumes are visually overwhelming. Strategic white
                  space makes key information stand out and reduces cognitive
                  strain.
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    Common Mistakes That Kill Your 7 Seconds
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dense blocks of text with no breaks</li>
                    <li>
                      • Generic objective statements that waste prime real
                      estate
                    </li>
                    <li>• Burying job titles within paragraph text</li>
                    <li>• Using tiny fonts to cram in more information</li>
                    <li>• Inconsistent formatting that creates visual chaos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cognitive Biases Section */}
          <section
            id="cognitive-biases"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2">
                <Brain className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Cognitive Biases in Hiring Decisions
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Cognitive biases are systematic patterns of deviation from
              rational judgment. They're mental shortcuts (heuristics) that our
              brains use to process information quickly. In the context of
              hiring, these biases significantly influence which candidates
              advance and which are overlooked.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              While organizations work to minimize bias in hiring, complete
              elimination is impossible - these patterns are deeply wired into
              human cognition. As a job seeker, understanding these biases helps
              you present information in ways that work with, rather than
              against, the recruiter's natural thought patterns.
            </p>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                The Major Cognitive Biases Affecting Hiring
              </h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900">
                    Primacy Effect
                  </h5>
                  <p className="text-sm text-gray-600">
                    First information has outsized impact
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900">
                    Recency Effect
                  </h5>
                  <p className="text-sm text-gray-600">
                    Last information is more memorable
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900">Halo Effect</h5>
                  <p className="text-sm text-gray-600">
                    One positive trait colors overall perception
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900">
                    Confirmation Bias
                  </h5>
                  <p className="text-sm text-gray-600">
                    Seeking evidence that supports initial impression
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900">
                    Anchoring Bias
                  </h5>
                  <p className="text-sm text-gray-600">
                    First piece of information serves as reference point
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h5 className="font-semibold text-gray-900">
                    Similarity Bias
                  </h5>
                  <p className="text-sm text-gray-600">
                    Favoring candidates who seem similar to themselves
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              In the following sections, we'll explore each of these biases in
              detail and show you exactly how to leverage them ethically in your
              applications.
            </p>
          </section>

          {/* Primacy and Recency Section */}
          <section
            id="primacy-recency"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-indigo-100 p-2">
                <Compass className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Primacy and Recency Effects: The Power of Position
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The primacy effect refers to our tendency to remember and give
              more weight to information we encounter first. The recency effect
              is the flip side - we also have strong recall of what we
              encountered last. These twin phenomena create a psychological
              U-curve where beginnings and endings carry disproportionate
              influence.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              How This Affects Your Application
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              In a stack of 100 resumes, the first few and last few applications
              reviewed often receive the most favorable treatment, while those
              in the middle face "resume fatigue." Within your own resume, the
              top third and key closing elements leave the strongest
              impressions.
            </p>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                Strategic Placement Guidelines
              </h4>

              <div className="mb-6">
                <h5 className="mb-2 font-semibold text-gray-900">
                  Resume Top Section (Primacy Zone)
                </h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Put your most impressive achievement in the summary</li>
                  <li>• Lead with your current/most relevant title</li>
                  <li>
                    • Include quantifiable wins (e.g., "Increased revenue by
                    40%")
                  </li>
                  <li>• Match keywords from the job description immediately</li>
                </ul>
              </div>

              <div>
                <h5 className="mb-2 font-semibold text-gray-900">
                  Resume Ending (Recency Zone)
                </h5>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • End sections with strong bullet points, not weak ones
                  </li>
                  <li>
                    • Skills section at bottom reinforces key competencies
                  </li>
                  <li>
                    • Portfolio/LinkedIn link gives them a memorable next step
                  </li>
                  <li>• Certification or award can serve as a strong closer</li>
                </ul>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Application Timing Strategy
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              While you can't always control when your application lands in the
              review pile, you can optimize timing:
            </p>

            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg bg-white shadow">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Timing</th>
                    <th className="px-6 py-4 text-left">Effect</th>
                    <th className="px-6 py-4 text-left">Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      First 24-48 hours
                    </td>
                    <td className="px-6 py-4">
                      Benefits from primacy; fresh enthusiasm from recruiter
                    </td>
                    <td className="px-6 py-4">
                      Set job alerts for immediate notification
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Application deadline
                    </td>
                    <td className="px-6 py-4">
                      Benefits from recency; last reviewed before decisions
                    </td>
                    <td className="px-6 py-4">
                      Submit complete application just before cutoff
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Monday 10 AM</td>
                    <td className="px-6 py-4">
                      Fresh week, full cognitive resources
                    </td>
                    <td className="px-6 py-4">
                      Schedule submissions for Tuesday morning
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    Pro Tip: The Power of Following Up
                  </h4>
                  <p className="text-gray-700">
                    A well-timed follow-up email can leverage the recency
                    effect. Sending a brief, value-adding follow-up 3-5 days
                    after your application puts you back at the top of the
                    recruiter's mind just before they finalize screening
                    decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cognitive Load Section */}
          <section
            id="cognitive-load"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-teal-100 p-2">
                <Zap className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Cognitive Load Theory: Making It Easy to Say Yes
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Cognitive load refers to the mental effort required to process
              information. When we encounter information that demands too much
              cognitive effort, we tend to disengage, make errors, or simply
              give up. In the context of job applications, high cognitive load
              translates directly to rejection.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Educational psychologist John Sweller developed cognitive load
              theory to explain learning, but its principles apply perfectly to
              resume design. There are three types of cognitive load to
              consider:
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">Intrinsic Load</h4>
                <p className="text-sm text-gray-700">
                  The inherent complexity of the information itself. You can't
                  eliminate your experience, but you can present it clearly.
                </p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  Extraneous Load
                </h4>
                <p className="text-sm text-gray-700">
                  Unnecessary mental effort created by poor presentation. This
                  is entirely within your control and should be minimized.
                </p>
              </div>
              <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">Germane Load</h4>
                <p className="text-sm text-gray-700">
                  Mental effort that helps understanding. Good formatting helps
                  recruiters process and remember your qualifications.
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              High Cognitive Load Killers
            </h3>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✗ Dense Paragraphs
                </h4>
                <p className="text-gray-700">
                  Long blocks of text force the reader to do more work. Break
                  content into scannable bullet points with clear hierarchy.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✗ Inconsistent Formatting
                </h4>
                <p className="text-gray-700">
                  When fonts, spacing, or alignment vary randomly, the brain
                  must constantly readjust. Consistency reduces mental strain.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✗ Jargon Overload
                </h4>
                <p className="text-gray-700">
                  Industry acronyms and technical terms slow comprehension. Use
                  plain language, especially for non-technical reviewers.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✗ Missing Context
                </h4>
                <p className="text-gray-700">
                  When achievements lack context, recruiters must work to
                  understand significance. Provide brief context for impact.
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Low Cognitive Load Best Practices
            </h3>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Use F-Pattern Friendly Layout
                </h4>
                <p className="text-gray-700">
                  Align with natural eye movement patterns. Key information on
                  the left, scannable sections, clear headings.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Chunk Information
                </h4>
                <p className="text-gray-700">
                  Group related items together. Use 3-5 bullet points per
                  section - aligned with working memory limits.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Progressive Disclosure
                </h4>
                <p className="text-gray-700">
                  Lead with summary information, then provide details. Let
                  recruiters choose their depth of engagement.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  ✓ Visual Breathing Room
                </h4>
                <p className="text-gray-700">
                  White space isn't wasted space - it reduces cognitive overload
                  and makes content feel more approachable.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    The "Glance Test"
                  </h4>
                  <p className="text-gray-700">
                    Print your resume and look at it for just 3 seconds. What
                    stands out? Can you immediately identify the most important
                    information? If not, your cognitive load is too high. Revise
                    until key qualifications pop out instantly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Confirmation Bias Section */}
          <section
            id="confirmation-bias"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-pink-100 p-2">
                <Search className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Confirmation Bias: Working With Their Expectations
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Confirmation bias is our tendency to search for, interpret, and
              recall information that confirms our existing beliefs while
              ignoring contradictory evidence. In hiring, this means recruiters
              actively look for evidence that supports their initial impression
              - whether positive or negative.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              This bias works in two critical ways for job seekers. First, if
              you make a strong first impression, recruiters will unconsciously
              look for evidence to confirm you're a great candidate. Second, if
              something triggers a negative initial reaction, they'll find
              reasons to reject you even if your qualifications are excellent.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Creating Positive Expectations
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Your goal is to create positive expectations from the very first
              moment. Once a recruiter thinks "this could be a great candidate,"
              confirmation bias works in your favor:
            </p>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                Expectation-Setting Strategies
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Mirror job posting language</strong> - Use the exact
                    keywords and phrases from the job description. When
                    recruiters see familiar terms, they expect a good fit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Lead with relevance</strong> - Start with your most
                    directly applicable experience. First impressions trigger
                    the confirmation cascade.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Quantify achievements</strong> - Numbers create
                    concrete expectations that are easy to confirm ("increased
                    sales 40%" is memorable and verifiable).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>
                    <strong>Include recognizable names</strong> - Well-known
                    companies, schools, or certifications trigger positive
                    assumptions.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Avoiding Negative Confirmation Triggers
            </h3>

            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg bg-white shadow">
                <thead className="bg-pink-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Red Flag</th>
                    <th className="px-6 py-4 text-left">
                      What Recruiters Think
                    </th>
                    <th className="px-6 py-4 text-left">How to Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Employment gaps</td>
                    <td className="px-6 py-4">
                      "Were they fired? Unreliable?"
                    </td>
                    <td className="px-6 py-4">
                      Brief, honest explanation; frame productively
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Job hopping</td>
                    <td className="px-6 py-4">"Will they leave quickly?"</td>
                    <td className="px-6 py-4">
                      Show progression; explain strategic moves
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Typos/errors</td>
                    <td className="px-6 py-4">"Careless, unprofessional"</td>
                    <td className="px-6 py-4">
                      Multiple rounds of proofreading; external review
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Overqualification
                    </td>
                    <td className="px-6 py-4">"They'll be bored and leave"</td>
                    <td className="px-6 py-4">
                      Cover letter explaining genuine interest
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Career change</td>
                    <td className="px-6 py-4">"No relevant experience"</td>
                    <td className="px-6 py-4">
                      Highlight transferable skills prominently
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    The Pre-emptive Strike
                  </h4>
                  <p className="text-gray-700">
                    If you have potential red flags, address them before they're
                    discovered. A cover letter that proactively explains a
                    career gap shows self-awareness and prevents negative
                    speculation. The recruiter's confirmation bias then works to
                    validate your explanation rather than imagining worse
                    scenarios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Halo Effect Section */}
          <section
            id="halo-effect"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-yellow-100 p-2">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                The Halo Effect: One Light That Illuminates Everything
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The halo effect is a cognitive bias where a single positive
              characteristic creates a favorable overall impression that colors
              perception of other traits. It's the psychological phenomenon
              behind why we assume attractive people are more competent, or why
              a prestigious employer on your resume makes all your other
              experiences seem more impressive.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The term was coined by psychologist Edward Thorndike in 1920, who
              observed that military officers' ratings of soldiers in one area
              strongly influenced their ratings in completely unrelated areas. A
              soldier perceived as intelligent was also rated higher on
              leadership, physical ability, and character - even when there was
              no logical connection.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Halo Effect Triggers in Hiring
            </h3>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 p-6">
                <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                  <Award className="h-5 w-5 text-yellow-600" />
                  Prestige Signals
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Elite university degrees</li>
                  <li>• FAANG or Fortune 500 experience</li>
                  <li>• Industry awards or recognitions</li>
                  <li>• Published work or patents</li>
                  <li>• Board positions or advisory roles</li>
                </ul>
              </div>
              <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-6">
                <h4 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  Achievement Signals
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Quantified major accomplishments</li>
                  <li>• Promotions and career progression</li>
                  <li>• Successful projects with metrics</li>
                  <li>• Speaking engagements</li>
                  <li>• Open source contributions</li>
                </ul>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Creating Your Own Halo
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              You don't need a Harvard degree or Google on your resume to
              benefit from the halo effect. You can create halos from:
            </p>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Impressive Metrics
                </h4>
                <p className="text-gray-700">
                  "Led team that increased user retention by 47%" creates a
                  competence halo that extends to all your work. Always quantify
                  your best achievements.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Recognized Certifications
                </h4>
                <p className="text-gray-700">
                  Industry certifications (AWS, PMP, CFA) signal commitment and
                  create competence halos even for roles that don't require
                  them.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Thought Leadership
                </h4>
                <p className="text-gray-700">
                  Blog posts, conference talks, or podcast appearances position
                  you as an expert. The "author/speaker" halo extends to your
                  day-to-day capabilities.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Portfolio Presentation
                </h4>
                <p className="text-gray-700">
                  A beautifully designed portfolio creates a professionalism
                  halo. Even if design isn't your job, visual excellence
                  suggests excellence elsewhere.
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-xl border border-purple-200 bg-purple-50 p-6">
              <div className="flex items-start gap-3">
                <Star className="mt-1 h-6 w-6 flex-shrink-0 text-purple-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    Strategic Halo Placement
                  </h4>
                  <p className="text-gray-700">
                    Place your strongest halo trigger early in your resume -
                    ideally in the summary or first bullet point. Once the halo
                    is established, every subsequent item is viewed more
                    favorably. This is where primacy effect and halo effect
                    combine for maximum impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    Warning: The Horn Effect
                  </h4>
                  <p className="text-gray-700">
                    The opposite of the halo effect is the "horn effect" - where
                    one negative trait creates an unfavorable overall
                    impression. A single typo, an unprofessional email address,
                    or a poorly formatted resume can trigger the horn effect and
                    doom an otherwise strong application.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section
            id="social-proof"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Social Proof: The Power of Third-Party Validation
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Social proof is the psychological phenomenon where people look to
              the actions and opinions of others to determine their own
              behavior. In hiring, this translates to a powerful preference for
              candidates who come with external validation - recommendations,
              referrals, and social endorsements.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Robert Cialdini's research on influence identified social proof as
              one of the six core principles of persuasion. We trust what others
              trust. When a respected colleague vouches for a candidate, or when
              a company's track record speaks for itself, recruiters feel more
              confident in their decisions.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Forms of Social Proof in Job Applications
            </h3>

            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg bg-white shadow">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Type</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-left">Impact Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Employee Referral
                    </td>
                    <td className="px-6 py-4">
                      Current employee vouches for you
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-green-100 px-2 py-1 text-green-800">
                        Very High
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      LinkedIn Recommendations
                    </td>
                    <td className="px-6 py-4">
                      Public endorsements from colleagues/managers
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-green-100 px-2 py-1 text-green-800">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Reference Letters
                    </td>
                    <td className="px-6 py-4">
                      Written testimonials from past employers
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-green-100 px-2 py-1 text-green-800">
                        High
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Client Testimonials
                    </td>
                    <td className="px-6 py-4">
                      Positive feedback from clients in portfolio
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-yellow-100 px-2 py-1 text-yellow-800">
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Social Media Following
                    </td>
                    <td className="px-6 py-4">
                      Large, engaged professional audience
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-yellow-100 px-2 py-1 text-yellow-800">
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Awards/Recognitions
                    </td>
                    <td className="px-6 py-4">Industry or peer-voted awards</td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-green-100 px-2 py-1 text-green-800">
                        High
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The Referral Advantage
            </h3>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                Why Referrals Work So Well
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-gray-700">Referred candidates are:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 4x more likely to be hired</li>
                    <li>• Hired 55% faster than other candidates</li>
                    <li>• 46% more likely to stay beyond one year</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-gray-700">
                    From recruiter's perspective:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pre-vetted by trusted employee</li>
                    <li>• Lower perceived hiring risk</li>
                    <li>• Built-in accountability</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Building Social Proof
            </h3>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Request LinkedIn Recommendations Strategically
                </h4>
                <p className="text-gray-700">
                  Ask former managers and colleagues for specific, detailed
                  recommendations. Generic praise is less compelling than
                  stories about specific contributions.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Network Before You Need To
                </h4>
                <p className="text-gray-700">
                  Build relationships with people at target companies before
                  applying. Even a weak connection can provide a referral or
                  inside information.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Showcase Team Achievements
                </h4>
                <p className="text-gray-700">
                  "Led a cross-functional team of 8" shows others trusted your
                  leadership. It's social proof embedded in your experience
                  description.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Mention Notable Clients or Partners
                </h4>
                <p className="text-gray-700">
                  If you've worked with recognizable brands, mention them. Their
                  reputation creates reflected social proof.
                </p>
              </div>
            </div>
          </section>

          {/* Storytelling Section */}
          <section
            id="storytelling"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                The Power of Storytelling: Narrative Psychology in Applications
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Humans are hardwired for stories. From ancient cave paintings to
              modern Netflix binges, we process and remember narrative
              information far more effectively than raw facts. Neuroscience
              research shows that stories activate multiple brain regions
              simultaneously, creating emotional connections and improving
              recall.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              In the context of job applications, storytelling transforms you
              from a list of qualifications into a memorable character. A
              recruiter might forget your GPA, but they'll remember how you
              turned around a failing project or solved an impossible problem.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The Science Behind Story
            </h3>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                What Happens When We Hear Stories
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h5 className="mb-2 font-semibold text-gray-900">
                    Neurological Response
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Cortisol released during tension (attention)</li>
                    <li>• Dopamine at interesting moments (engagement)</li>
                    <li>• Oxytocin during connection (trust, empathy)</li>
                    <li>• Multiple brain areas activate (better encoding)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="mb-2 font-semibold text-gray-900">
                    Memory Impact
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Stories are 22x more memorable than facts</li>
                    <li>• Narrative structure aids recall</li>
                    <li>• Emotional content enhances memory</li>
                    <li>• Stories create "neural coupling" with listeners</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The STAR Method: Structured Storytelling
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The STAR method provides a framework for turning experiences into
              compelling stories:
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-bold text-purple-600">
                  S - Situation
                </h4>
                <p className="text-gray-700">
                  Set the scene. What was the context, challenge, or
                  opportunity?
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-bold text-purple-600">T - Task</h4>
                <p className="text-gray-700">
                  What was your specific responsibility or goal?
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-bold text-purple-600">A - Action</h4>
                <p className="text-gray-700">
                  What specific steps did you take? This is where you shine.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h4 className="mb-2 font-bold text-purple-600">R - Result</h4>
                <p className="text-gray-700">
                  What was the outcome? Quantify whenever possible.
                </p>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Storytelling in Different Application Components
            </h3>

            <div className="mb-8 space-y-6">
              <div className="rounded-xl bg-gray-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  Resume Bullets as Mini-Stories
                </h4>
                <div className="mb-4 rounded border border-gray-200 bg-white p-4">
                  <p className="mb-2 text-sm text-gray-500">Instead of:</p>
                  <p className="text-gray-700">
                    "Managed social media accounts"
                  </p>
                </div>
                <div className="rounded border border-green-200 bg-green-50 p-4">
                  <p className="mb-2 text-sm text-green-600">Try:</p>
                  <p className="text-gray-700">
                    "Transformed dormant social channels into primary lead
                    source, growing engagement 340% and generating $45K in
                    attributed revenue within 6 months"
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  Cover Letters as Personal Narratives
                </h4>
                <p className="text-gray-700">
                  Your cover letter is the perfect venue for longer-form
                  storytelling. Rather than restating your resume, tell the
                  story of why this role matters to you, how your journey led
                  here, and what unique perspective you bring.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    The Transformation Arc
                  </h4>
                  <p className="text-gray-700">
                    The most compelling career stories follow a transformation
                    arc: I was here (situation), faced this challenge
                    (conflict), did these things (action), and ended up here
                    (resolution/growth). This narrative structure is
                    psychologically satisfying and positions you as someone who
                    drives positive change.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Loss Aversion Section */}
          <section
            id="loss-aversion"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-red-100 p-2">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Loss Aversion: Reducing Perceived Risk
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Loss aversion is one of the most powerful cognitive biases: human
              beings feel the pain of losses roughly twice as intensely as the
              pleasure of equivalent gains. In hiring, this means the fear of
              making a bad hire is more powerful than the excitement of finding
              a great one.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Kahneman and Tversky's prospect theory demonstrated that people
              make decisions based on potential losses and gains relative to a
              reference point, rather than on absolute outcomes. For recruiters,
              the reference point is "no hire is better than a bad hire."
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              The Cost of a Bad Hire
            </h3>

            <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                Why Recruiters Are Risk-Averse
              </h4>
              <div className="grid gap-6 md:grid-cols-2">
                <ul className="space-y-2 text-gray-700">
                  <li>• Bad hire costs 30% of annual salary</li>
                  <li>• Training investment is lost</li>
                  <li>• Team morale suffers</li>
                  <li>• Projects are delayed</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Recruiter's reputation is damaged</li>
                  <li>• Second hiring round costs more</li>
                  <li>• Legal/HR complications possible</li>
                  <li>• Opportunity cost of wrong choice</li>
                </ul>
              </div>
            </div>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Positioning Yourself as Low-Risk
            </h3>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Demonstrate Track Record
                </h4>
                <p className="text-gray-700">
                  Previous success predicts future success. Highlight consistent
                  achievements across roles. Stability and progression signal
                  reliability.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Provide Strong References
                </h4>
                <p className="text-gray-700">
                  Third-party validation reduces uncertainty. Offer references
                  proactively. Choose people who can speak to your specific fit
                  for this role.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Show Domain Knowledge
                </h4>
                <p className="text-gray-700">
                  Understanding of the industry, company, and role suggests
                  shorter ramp-up time. Research the company deeply before
                  applying.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Address Concerns Directly
                </h4>
                <p className="text-gray-700">
                  If you have potential red flags (gaps, transitions, lack of
                  specific experience), address them head-on with confident
                  explanations.
                </p>
              </div>
            </div>
          </section>

          {/* Emotional Triggers Section */}
          <section
            id="emotional-triggers"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-pink-100 p-2">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Emotional Triggers: Beyond Logic
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              While recruiters use logical criteria to filter candidates, the
              final decision often comes down to emotional factors.
              Neuroscientist Antonio Damasio's research showed that people with
              damage to emotional brain centers couldn't make decisions at all -
              emotions are essential to choice-making.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  Positive Emotional Triggers
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enthusiasm and genuine interest</li>
                  <li>• Confidence without arrogance</li>
                  <li>• Cultural alignment signals</li>
                  <li>• Shared values or experiences</li>
                  <li>• Professional warmth</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 p-6">
                <h4 className="mb-3 font-bold text-gray-900">
                  Negative Emotional Triggers
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Desperation or neediness</li>
                  <li>• Negativity about past employers</li>
                  <li>• Entitlement or overconfidence</li>
                  <li>• Generic, impersonal applications</li>
                  <li>• Mismatch with company culture</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
                <div>
                  <h4 className="mb-2 font-bold text-gray-900">
                    The "Would I Want to Work With This Person?" Test
                  </h4>
                  <p className="text-gray-700">
                    Many hiring decisions ultimately come down to this gut-check
                    question. Your application should answer it positively
                    through professional tone, genuine enthusiasm, and evidence
                    of collaborative success.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pattern Recognition Section */}
          <section
            id="pattern-recognition"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-cyan-100 p-2">
                <BarChart className="h-6 w-6 text-cyan-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Pattern Recognition: How Recruiters Quickly Assess
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Experienced recruiters develop pattern recognition shortcuts that
              allow them to assess candidates quickly. These patterns are based
              on thousands of previous hiring decisions and candidate outcomes.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Common Patterns Recruiters Look For
            </h3>

            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-lg bg-white shadow">
                <thead className="bg-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Pattern</th>
                    <th className="px-6 py-4 text-left">What It Signals</th>
                    <th className="px-6 py-4 text-left">Your Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Progressive titles
                    </td>
                    <td className="px-6 py-4">Career growth, promotability</td>
                    <td className="px-6 py-4">Highlight promotions clearly</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Increasing scope
                    </td>
                    <td className="px-6 py-4">Expanding capabilities</td>
                    <td className="px-6 py-4">
                      Show bigger teams, budgets, impact
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Consistent tenure
                    </td>
                    <td className="px-6 py-4">Reliability, commitment</td>
                    <td className="px-6 py-4">2-4 years per role is ideal</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold">
                      Industry alignment
                    </td>
                    <td className="px-6 py-4">Relevant expertise</td>
                    <td className="px-6 py-4">
                      Connect dots to target industry
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Authority Section */}
          <section
            id="authority-principle"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-indigo-100 p-2">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                The Authority Principle: Expertise and Credibility
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The authority principle, another of Cialdini's influence
              principles, explains our tendency to comply with and defer to
              experts. In job applications, establishing yourself as an
              authority in your field significantly increases your perceived
              value.
            </p>

            <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-800">
              Building Authority Signals
            </h3>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Credentials and Certifications
                </h4>
                <p className="text-gray-700">
                  Industry-recognized certifications establish baseline
                  competency. List relevant ones prominently.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Thought Leadership
                </h4>
                <p className="text-gray-700">
                  Published articles, speaking engagements, and podcasts
                  position you as an expert.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Notable Affiliations
                </h4>
                <p className="text-gray-700">
                  Professional associations, advisory boards, and prestigious
                  alumni networks lend credibility.
                </p>
              </div>
            </div>
          </section>

          {/* Scarcity Section */}
          <section
            id="scarcity-principle"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                The Scarcity Principle: Being Valued for Uniqueness
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Scarcity increases perceived value. When something is rare, we
              want it more. In the job market, candidates who convey unique
              value propositions and aren't desperately available appear more
              desirable.
            </p>

            <div className="mb-8 rounded-xl border border-orange-200 bg-orange-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                Creating Healthy Scarcity Signals
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Highlight unique skill combinations</li>
                <li>• Mention other opportunities (without being crass)</li>
                <li>• Show selectivity in your job search</li>
                <li>• Demonstrate specific expertise in niche areas</li>
                <li>• Be responsive but not desperately available</li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section
            id="common-mistakes"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-red-100 p-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Common Psychological Mistakes to Avoid
              </h2>
            </div>

            <div className="mb-8 space-y-4">
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Mistake #1: The Curse of Knowledge
                </h4>
                <p className="text-gray-700">
                  Assuming recruiters know what you know. Acronyms and jargon
                  that are obvious to you may be meaningless to them. Explain
                  context.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Mistake #2: Overselling
                </h4>
                <p className="text-gray-700">
                  Excessive self-promotion triggers skepticism. Let achievements
                  speak for themselves. Show, don't tell.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Mistake #3: Neglecting Format
                </h4>
                <p className="text-gray-700">
                  Poor formatting creates negative first impressions that bias
                  everything that follows. Invest in presentation.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Mistake #4: Generic Applications
                </h4>
                <p className="text-gray-700">
                  One-size-fits-all applications feel impersonal. Tailor each
                  application to trigger positive confirmation bias.
                </p>
              </div>
              <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-2 font-bold text-gray-900">
                  Mistake #5: Ignoring the Human Element
                </h4>
                <p className="text-gray-700">
                  Treating applications as purely transactional misses the
                  emotional dimension of hiring decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Action Plan Section */}
          <section
            id="action-plan"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-green-100 p-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Your Psychology-Optimized Action Plan
              </h2>
            </div>

            <div className="mb-8 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6">
              <h4 className="mb-4 font-bold text-gray-900">
                Pre-Application Checklist
              </h4>
              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Researched company culture and values for tailoring
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Identified keywords from job posting to mirror
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Prepared strongest achievement for summary (halo effect)
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Checked for potential referral connections
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Performed the 7-second glance test on resume
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Proofread multiple times (horn effect prevention)
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1"
                  />
                  <span className="text-gray-700">
                    Prepared cover letter with compelling narrative
                  </span>
                </label>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="faq"
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: Is it manipulative to use psychology in job applications?
                </h3>
                <p className="text-gray-700">
                  No. Understanding psychology isn't about manipulation - it's
                  about effective communication. You're not deceiving anyone;
                  you're presenting your genuine qualifications in ways that
                  resonate with how humans naturally process information.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: How important is the cover letter really?
                </h3>
                <p className="text-gray-700">
                  While not all recruiters read cover letters, those who do
                  often use them for emotional and cultural assessment. A great
                  cover letter leverages storytelling and can create powerful
                  differentiation from candidates with similar qualifications.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: Can I overcome a lack of experience with psychology?
                </h3>
                <p className="text-gray-700">
                  Psychology can help you present transferable skills more
                  effectively and reduce perceived risk, but it can't substitute
                  for genuine qualifications. Use these principles to get your
                  foot in the door, then let your real abilities shine.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: What's the most impactful psychological principle?
                </h3>
                <p className="text-gray-700">
                  While all principles matter, creating a positive first
                  impression (combining primacy effect and halo effect) has the
                  greatest cascading impact. It triggers confirmation bias that
                  colors everything else in your application.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: How do ATS systems factor into psychology?
                </h3>
                <p className="text-gray-700">
                  ATS (Applicant Tracking Systems) are pre-filtering tools that
                  work before human psychology kicks in. Optimize for keywords
                  and formatting to pass ATS, then let psychological principles
                  work on the human reviewers who see your application
                  afterward.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: Should I follow up, and how does psychology affect that
                  decision?
                </h3>
                <p className="text-gray-700">
                  Yes, following up leverages the recency effect. A brief,
                  value-adding follow-up 3-5 days after application puts you
                  back in the recruiter's mind. Keep it professional - don't
                  trigger negative emotions through excessive contact.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-2 font-bold text-gray-900">
                  Q: How do I apply these principles in interviews?
                </h3>
                <p className="text-gray-700">
                  The same principles apply: create strong first impressions,
                  use storytelling for memorable answers, provide social proof
                  through references, and reduce perceived risk by demonstrating
                  domain knowledge and cultural fit.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-purple-100 p-2">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="m-0 text-3xl font-bold text-gray-900">
                Conclusion: The Psychologically Optimized Candidate
              </h2>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Understanding the psychology of job applications transforms the
              hiring process from a mysterious black box into a navigable
              system. Every element of your application - from resume formatting
              to cover letter stories to follow-up timing - can be optimized to
              work with the natural patterns of human cognition.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The key principles to remember: make strong first impressions that
              trigger positive confirmation bias, reduce cognitive load to make
              evaluation easy, create halos through strategic placement of
              achievements, leverage social proof through referrals and
              recommendations, tell compelling stories that activate emotional
              engagement, and reduce perceived risk through evidence of
              reliability.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              None of these techniques require deception or manipulation. They
              simply bridge the gap between your genuine qualifications and the
              recruiter's ability to recognize them quickly. In a world where
              hundreds of candidates compete for attention, understanding
              psychology isn't an unfair advantage - it's essential
              communication literacy.
            </p>

            <div className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">
                Start Applying These Principles Today
              </h3>
              <p className="mb-6 opacity-90">
                Your next application could be the one that lands your dream
                job. Use the psychology principles in this guide to present your
                best self in ways that resonate with how recruiters naturally
                think and decide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resources/resume-templates"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 transition hover:bg-gray-100"
                >
                  Get Resume Templates
                </a>
                <Link
                  href="/internships"
                  className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  Browse Opportunities
                </Link>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Related Resources
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/blog/star-method-for-answering-behavioral-questions"
                className="rounded-xl bg-gray-50 p-6 transition hover:bg-gray-100"
              >
                <h4 className="mb-2 font-bold text-gray-900">
                  STAR Method for Behavioral Questions
                </h4>
                <p className="text-gray-600">
                  Master the storytelling framework that impresses interviewers.
                </p>
              </Link>
              <Link
                href="/blog/how-to-answer-tell-me-about-yourself"
                className="rounded-xl bg-gray-50 p-6 transition hover:bg-gray-100"
              >
                <h4 className="mb-2 font-bold text-gray-900">
                  How to Answer "Tell Me About Yourself"
                </h4>
                <p className="text-gray-600">
                  Create a compelling personal narrative for interviews.
                </p>
              </Link>
              <Link
                href="/blog/the-ultimate-guide-to-getting-your-first-internship"
                className="rounded-xl bg-gray-50 p-6 transition hover:bg-gray-100"
              >
                <h4 className="mb-2 font-bold text-gray-900">
                  Ultimate Internship Guide
                </h4>
                <p className="text-gray-600">
                  Step-by-step process for landing your first internship.
                </p>
              </Link>
              <Link
                href="/blog/how-to-build-a-strong-personal-brand-as-a-student"
                className="rounded-xl bg-gray-50 p-6 transition hover:bg-gray-100"
              >
                <h4 className="mb-2 font-bold text-gray-900">
                  Building Your Personal Brand
                </h4>
                <p className="text-gray-600">
                  Create a professional identity that attracts opportunities.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
