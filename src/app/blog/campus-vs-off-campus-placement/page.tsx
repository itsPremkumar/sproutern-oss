import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  GraduationCap,
  Building2,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Briefcase,
  Trophy,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campus Placement vs Off-Campus: Complete Comparison Guide',
  description:
    'Compare campus placements with off-campus job applications. Learn the pros, cons, and strategies for both approaches to maximize your job search success.',
  keywords: [
    'campus placement',
    'off campus placement',
    'campus vs off campus',
    'job placement India',
    'college placement',
    'direct hiring',
  ],
  openGraph: {
    title: 'Campus Placement vs Off-Campus: Complete Guide',
    description:
      'Make informed choices between campus and off-campus hiring paths.',
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
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Strategy
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Campus Placement vs Off-Campus: Complete Comparison Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Should you rely on campus placements or take your job search
            off-campus? Understanding both paths helps you maximize
            opportunities.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-indigo-500 bg-indigo-50 p-6 dark:bg-indigo-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            Placement Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">55%</span>
              <span>of tech jobs filled through off-campus hiring</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">3x</span>
              <span>more opportunities available off-campus</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">70%</span>
              <span>of tier-1 college students get placed on-campus</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-indigo-600">15%</span>
              <span>higher avg package often for off-campus hires</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#comparison"
                className="text-primary hover:underline"
              >
                1. Side-by-Side Comparison
              </a>
            </li>
            <li>
              <a
                href="#campus"
                className="text-primary hover:underline"
              >
                2. Campus Placements Explained
              </a>
            </li>
            <li>
              <a
                href="#offcampus"
                className="text-primary hover:underline"
              >
                3. Off-Campus Strategies
              </a>
            </li>
            <li>
              <a
                href="#when"
                className="text-primary hover:underline"
              >
                4. When to Choose Which
              </a>
            </li>
            <li>
              <a
                href="#both"
                className="text-primary hover:underline"
              >
                5. The Best Approach: Both
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
                Don't rely solely on campus placements—off-campus opens 3x more
                opportunities
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Tier-2/3 college students benefit most from off-campus
                applications
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Off-campus often leads to higher packages through negotiation
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>The best strategy is pursuing both simultaneously</span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            For decades, campus placements were THE way to get hired in India.
            Companies would visit colleges, conduct drives, and students would
            get jobs without leaving campus. But the landscape has changed
            dramatically.
          </p>
          <p>
            Today, <strong>55% of tech hiring happens off-campus</strong>.
            Limiting yourself to only campus placements means missing out on
            most opportunities. Let's understand both paths and how to navigate
            them strategically.
          </p>
        </section>

        {/* Section 1 */}
        <section
          id="comparison"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Side-by-Side Comparison
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Factor</th>
                  <th className="border p-3 text-left">Campus Placement</th>
                  <th className="border p-3 text-left">Off-Campus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Opportunities</td>
                  <td className="border p-3">Limited to visiting companies</td>
                  <td className="border p-3">All companies, unlimited</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Competition</td>
                  <td className="border p-3">Only batchmates</td>
                  <td className="border p-3">Pan-India candidates</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Support</td>
                  <td className="border p-3">T&P cell guidance</td>
                  <td className="border p-3">Self-driven</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Negotiation</td>
                  <td className="border p-3">Fixed package (limited)</td>
                  <td className="border p-3">Full flexibility</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Timeline</td>
                  <td className="border p-3">Fixed placement season</td>
                  <td className="border p-3">Year-round</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Referrals</td>
                  <td className="border p-3">Not applicable</td>
                  <td className="border p-3">Game-changer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="campus"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            2. Campus Placements Explained
          </h2>

          <h3>How It Works</h3>
          <ol>
            <li>
              Companies register with your college's T&P (Training & Placement)
              cell
            </li>
            <li>Eligible students apply based on criteria (CGPA, branch)</li>
            <li>Selection process: PPT → Online test → Interviews</li>
            <li>Offers made; acceptance locks you out of other drives</li>
          </ol>

          <h3>Advantages</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <ul className="space-y-1 text-sm">
                <li>✅ Structured process with T&P support</li>
                <li>✅ Less competition (only batchmates)</li>
                <li>✅ Companies are actively hiring</li>
                <li>✅ No need for extensive networking</li>
                <li>✅ Quick resolution (offers in weeks)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <ul className="space-y-1 text-sm">
                <li>❌ Limited to visiting companies</li>
                <li>❌ Fixed packages (no negotiation)</li>
                <li>❌ CGPA cutoffs exclude many</li>
                <li>❌ One-strike rules (some colleges)</li>
                <li>❌ Better companies go to better colleges</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Reality Check:</strong> The quality of campus placements
              heavily depends on your college tier. IITs/NITs get Dream and
              Super-Dream companies. Many tier-2/3 colleges get limited or
              lower-paying companies.
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="offcampus"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            3. Off-Campus Strategies
          </h2>

          <p>
            Off-campus means applying directly to companies, regardless of
            college partnerships:
          </p>

          <h3>Where to Find Off-Campus Opportunities</h3>
          <ul>
            <li>
              <strong>Company career pages:</strong> Direct applications
            </li>
            <li>
              <strong>LinkedIn Jobs:</strong> Rich with off-campus postings
            </li>
            <li>
              <strong>Job portals:</strong> Naukri, Indeed, Instahyre
            </li>
            <li>
              <strong>Startup platforms:</strong> AngelList, YC Jobs
            </li>
            <li>
              <strong>Referrals:</strong> The secret weapon (more on this below)
            </li>
          </ul>

          <h3>The Referral Advantage</h3>
          <p>
            <strong>Referrals increase interview chances by 3x.</strong> Here's
            how to get them:
          </p>
          <ul>
            <li>Connect with alumni on LinkedIn</li>
            <li>Engage genuinely (don't just ask for referrals)</li>
            <li>Provide your resume and target roles clearly</li>
            <li>Join company-specific communities and Discord servers</li>
          </ul>

          <h3>Advantages of Off-Campus</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <ul className="space-y-1 text-sm">
                <li>✅ Access to ALL companies</li>
                <li>✅ Negotiate your package</li>
                <li>✅ No CGPA cutoffs (skill-based)</li>
                <li>✅ Apply anytime, year-round</li>
                <li>✅ College name matters less</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <ul className="space-y-1 text-sm">
                <li>❌ More competition (pan-India)</li>
                <li>❌ Self-driven (no T&P support)</li>
                <li>❌ Longer process (months)</li>
                <li>❌ Need strong networking skills</li>
                <li>❌ Can feel overwhelming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section
          id="when"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. When to Choose Which
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-indigo-500 py-2 pl-4">
              <p className="font-bold">Rely MORE on Campus If...</p>
              <ul className="mt-1 text-sm text-muted-foreground">
                <li>• You're at a top-tier college (IIT/NIT/BITS)</li>
                <li>• Your target companies visit campus</li>
                <li>• You have good CGPA and meet criteria</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Focus MORE on Off-Campus If...</p>
              <ul className="mt-1 text-sm text-muted-foreground">
                <li>• You're at a tier-2/3 college</li>
                <li>• Dream companies don't visit your campus</li>
                <li>• You have low CGPA but strong skills</li>
                <li>• You want higher package through negotiation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section
          id="both"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            5. The Best Approach: Both
          </h2>

          <p>
            <strong>Don't choose—do both.</strong> The most successful
            candidates:
          </p>
          <ul>
            <li>Participate in all campus drives they're eligible for</li>
            <li>Simultaneously apply off-campus to dream companies</li>
            <li>Build referral network while preparing for campus tests</li>
            <li>
              Use campus offers as backup while pursuing better opportunities
            </li>
          </ul>

          <div className="not-prose my-4 rounded-lg bg-primary/10 p-4">
            <p className="mb-2 text-sm font-bold">Strategy Timeline</p>
            <ol className="space-y-1 text-sm">
              <li>
                <strong>6 months before:</strong> Start DSA prep, apply
                off-campus to build interview experience
              </li>
              <li>
                <strong>3 months before:</strong> Intensify prep, network for
                referrals
              </li>
              <li>
                <strong>Placement season:</strong> Attempt campus drives,
                continue off-campus
              </li>
              <li>
                <strong>After campus:</strong> If not satisfied, keep applying
                off-campus
              </li>
            </ol>
          </div>
        </section>

        {/* Section 6 */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I apply off-campus after accepting a campus offer?
              </p>
              <p className="mt-2 text-muted-foreground">
                Depends on your college policy. Some have strict rules against
                this. Check with your T&P cell. Even if allowed, be ethical
                about it.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do companies prefer campus or off-campus hires?
              </p>
              <p className="mt-2 text-muted-foreground">
                Companies don't differentiate once you're hired. What matters is
                skills and performance. Some actually prefer off-campus as it
                shows initiative.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is off-campus harder?</p>
              <p className="mt-2 text-muted-foreground">
                More competitive (pan-India applicants) but more opportunity.
                The key is persistence and referrals. It's not harder—just
                different.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How long does off-campus hiring take?</p>
              <p className="mt-2 text-muted-foreground">
                Typically 4-8 weeks from application to offer. Larger companies
                take longer. Startups can be faster (1-2 weeks).
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Maximize Your Opportunities</h2>
          <p>
            The campus vs off-campus debate is outdated., smart candidates
            pursue both paths simultaneously. Campus gives you structured
            opportunities; off-campus gives you unlimited possibilities.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your dream job might come from either path. Keep both doors open. 🚀
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
              href="/blog/hidden-internship-opportunities"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Finding Hidden Opportunities
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization Guide
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Opportunities
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
                Based on data from 10,000+ placements across tier-1, tier-2, and
                tier-3 colleges.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
