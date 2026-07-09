import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  IndianRupee,
  DollarSign,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  AlertTriangle,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Salary Negotiation for Freshers: Complete Guide',
  description:
    'Learn how to negotiate your first salary as a fresher. Get scripts, strategies, and tips for maximizing your starting package.',
  keywords: [
    'salary negotiation freshers',
    'negotiate first job salary',
    'fresher salary india',
    'how to negotiate salary',
    'entry level salary negotiation',
  ],
  openGraph: {
    title: 'Salary Negotiation for Freshers: Complete Guide',
    description: 'Get paid what you deserve from day one.',
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
          <div className="mb-4 flex items-center gap-2 text-green-600">
            <IndianRupee className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Growth
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Salary Negotiation for Freshers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Yes, freshers can negotiate. Learn how to advocate for yourself and
            maximize your starting package.
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
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Negotiation Reality
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">70%</span>
              <span>of companies expect candidates to negotiate</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">15%</span>
              <span>average increase when freshers negotiate</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">₹1-3L</span>
              <span>potential annual difference from one negotiation</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">95%</span>
              <span>of offers NOT rescinded due to negotiation</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#can"
                className="text-primary hover:underline"
              >
                1. Can Freshers Negotiate?
              </a>
            </li>
            <li>
              <a
                href="#research"
                className="text-primary hover:underline"
              >
                2. Research & Preparation
              </a>
            </li>
            <li>
              <a
                href="#timing"
                className="text-primary hover:underline"
              >
                3. When to Negotiate
              </a>
            </li>
            <li>
              <a
                href="#how"
                className="text-primary hover:underline"
              >
                4. How to Negotiate
              </a>
            </li>
            <li>
              <a
                href="#beyond"
                className="text-primary hover:underline"
              >
                5. Beyond Base Salary
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
                Yes, freshers can and should negotiate when appropriate
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Research market rates before the conversation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Negotiate after getting the offer, not before</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Think beyond salary—benefits and growth matter too</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Can */}
        <section
          id="can"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Can Freshers Negotiate?
          </h2>

          <p>
            Short answer: <strong>Yes, in most cases.</strong>
          </p>

          <h3>When You CAN Negotiate</h3>
          <ul>
            <li>Startups and smaller companies</li>
            <li>Off-campus placements</li>
            <li>When you have multiple offers</li>
            <li>Roles with high demand/low supply</li>
          </ul>

          <h3>When It's Harder</h3>
          <ul>
            <li>Large MNC campus hiring (fixed bands)</li>
            <li>Government jobs (fixed pay scales)</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Even if base salary is fixed, you can
              often negotiate joining bonus, location, or start date.
            </div>
          </div>
        </section>

        {/* Section 2: Research */}
        <section
          id="research"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            2. Research & Preparation
          </h2>

          <h3>Know Market Rates</h3>
          <ul>
            <li>
              <strong>Glassdoor:</strong> Check salaries for similar roles
            </li>
            <li>
              <strong>AmbitionBox:</strong> India-specific salary data
            </li>
            <li>
              <strong>LinkedIn:</strong> Ask connections in similar roles
            </li>
            <li>
              <strong>College placement data:</strong> What did seniors get?
            </li>
          </ul>

          <h3>Know Your Value</h3>
          <p>List your leverage points:</p>
          <ul>
            <li>Relevant internship experience</li>
            <li>Strong projects or portfolio</li>
            <li>Specific skills they need</li>
            <li>Other offers in hand</li>
          </ul>
        </section>

        {/* Section 3: Timing */}
        <section
          id="timing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            3. When to Negotiate
          </h2>

          <ul>
            <li>
              <strong>Wait for the offer:</strong> Never negotiate before you
              have a written offer
            </li>
            <li>
              <strong>Express enthusiasm first:</strong> Show you want the job,
              then discuss compensation
            </li>
            <li>
              <strong>Within 24-48 hours:</strong> Don't wait too long after
              receiving the offer
            </li>
            <li>
              <strong>During call, not email:</strong> Negotiate over
              phone/video for better outcomes
            </li>
          </ul>
        </section>

        {/* Section 4: How */}
        <section
          id="how"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            4. How to Negotiate
          </h2>

          <h3>Script Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              "Thank you so much for the offer! I'm really excited about the
              opportunity to join [Company] and contribute to [specific
              project/team].
            </p>
            <p className="mt-2">
              Based on my research and the skills I bring—[mention 1-2 specific
              things]—I was hoping we could discuss the compensation. Is there
              flexibility to go up to [X amount]?"
            </p>
          </div>

          <h3>Key Principles</h3>
          <ul>
            <li>Be polite and professional</li>
            <li>Give a specific number, not a range</li>
            <li>Justify with data, not emotions</li>
            <li>Be prepared to hear "no"</li>
          </ul>
        </section>

        {/* Section 5: Beyond */}
        <section
          id="beyond"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            5. Beyond Base Salary
          </h2>

          <p>If salary is fixed, negotiate these:</p>
          <ul>
            <li>
              <strong>Joining bonus:</strong> One-time payment
            </li>
            <li>
              <strong>Work from home days:</strong> Remote flexibility
            </li>
            <li>
              <strong>Start date:</strong> More time for preparation
            </li>
            <li>
              <strong>Learning budget:</strong> Courses, certifications
            </li>
            <li>
              <strong>Relocation allowance:</strong> If moving cities
            </li>
            <li>
              <strong>Earlier performance review:</strong> Faster path to raise
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
              <p className="font-bold">
                Will they rescind my offer if I negotiate?
              </p>
              <p className="mt-2 text-muted-foreground">
                Almost never. If done respectfully, the worst case is they say
                "this is the best we can do."
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if I have no other offers?</p>
              <p className="mt-2 text-muted-foreground">
                You can still negotiate based on market data and your skills.
                You don't have to reveal that you don't have other offers.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Advocate for Yourself</h2>
          <p>
            Negotiating is a professional skill, not confrontation. Companies
            expect it. Do your research, be respectful, and ask for what you
            deserve.
          </p>
          <p className="text-lg font-semibold text-primary">
            You'll never get what you don't ask for. 💰
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Tech Internship Guide
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Interview Questions Guide
            </Link>
            <Link
              href="/blog/campus-vs-off-campus-placement"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Campus vs Off-Campus
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
                Based on real negotiation experiences from freshers across
                India.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
