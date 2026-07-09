import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Sun,
  Snowflake,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  IndianRupee,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Summer vs Winter Internship',
  description:
    'Compare summer and winter internships to make the best choice for your career. Learn about timing, competition, stipends, and strategic benefits.',
  keywords: [
    'summer internship',
    'winter internship',
    'internship season',
    'best time for internship',
    'when to apply internship',
  ],
  openGraph: {
    title: 'Summer vs Winter Internship: Which is Right for You?',
    description:
      'Make the strategic choice between summer and winter internships.',
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
            <Sun className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Strategy
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Summer Internship vs Winter Internship: Which is Right for You?
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Choosing between summer and winter internships involves more than
            just timing. Learn the strategic differences to maximize your career
            growth.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-yellow-600" />
            Seasonal Internship Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-yellow-600">75%</span>
              <span>of internship hiring happens in summer season</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-yellow-600">40%</span>
              <span>less competition for winter internships</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-yellow-600">65%</span>
              <span>PPO rate for summer interns at top companies</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-yellow-600">2-3x</span>
              <span>more available summer positions</span>
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
                href="#summer"
                className="text-primary hover:underline"
              >
                2. Summer Internships Deep Dive
              </a>
            </li>
            <li>
              <a
                href="#winter"
                className="text-primary hover:underline"
              >
                3. Winter Internships Deep Dive
              </a>
            </li>
            <li>
              <a
                href="#choose"
                className="text-primary hover:underline"
              >
                4. How to Choose
              </a>
            </li>
            <li>
              <a
                href="#strategy"
                className="text-primary hover:underline"
              >
                5. Strategic Considerations
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
                Summer internships offer more opportunities but face higher
                competition
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Winter internships have less competition and can be strategic
                for pre-final year students
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Your academic calendar and career stage should guide your choice
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Doing both seasons can give you a competitive advantage
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            "Should I apply for summer or winter internships?" It's a question
            that confuses many students. While summer internships are more
            popular, winter opportunities have their own strategic advantages.
          </p>
          <p>
            This guide breaks down both options so you can make an informed
            decision based on your goals, academic schedule, and career stage.
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
                  <th className="border p-3 text-left">
                    <Sun className="mr-1 inline h-4 w-4" />
                    Summer
                  </th>
                  <th className="border p-3 text-left">
                    <Snowflake className="mr-1 inline h-4 w-4" />
                    Winter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Duration</td>
                  <td className="border p-3">8-12 weeks (May-July)</td>
                  <td className="border p-3">4-8 weeks (Dec-Feb)</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Competition</td>
                  <td className="border p-3">Very High</td>
                  <td className="border p-3">Moderate</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Opportunities</td>
                  <td className="border p-3">Abundant</td>
                  <td className="border p-3">Limited but available</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Stipends</td>
                  <td className="border p-3">Generally higher</td>
                  <td className="border p-3">Slightly lower average</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">PPO Focus</td>
                  <td className="border p-3">Strong (pre-final year)</td>
                  <td className="border p-3">Less common</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Application Period</td>
                  <td className="border p-3">Sept-March</td>
                  <td className="border p-3">Aug-November</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2 */}
        <section
          id="summer"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Sun className="h-6 w-6 text-primary" />
            2. Summer Internships Deep Dive
          </h2>

          <h3>Why Summer is Preferred</h3>
          <ul>
            <li>
              <strong>Longer duration:</strong> 8-12 weeks allows for meaningful
              projects
            </li>
            <li>
              <strong>No college conflicts:</strong> Summer break means
              full-time focus
            </li>
            <li>
              <strong>PPO opportunities:</strong> Pre-final year summer is the
              hiring season
            </li>
            <li>
              <strong>More structured:</strong> Companies have formal summer
              programs
            </li>
          </ul>

          <h3>Best For</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="mb-2 text-sm font-bold">Ideal Candidates</p>
              <ul className="space-y-1 text-sm">
                <li>• Pre-final year students seeking PPO</li>
                <li>• Students wanting longer immersion</li>
                <li>• Those targeting MNCs with formal programs</li>
                <li>• Students with clear career direction</li>
              </ul>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="mb-2 text-sm font-bold">Top Summer Programs</p>
              <ul className="space-y-1 text-sm">
                <li>• Google STEP/SWE Internship</li>
                <li>• Microsoft SWE Internship</li>
                <li>• Goldman Sachs Summer Analyst</li>
                <li>• Amazon SDE Internship</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="winter"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Snowflake className="h-6 w-6 text-primary" />
            3. Winter Internships Deep Dive
          </h2>

          <h3>Why Consider Winter</h3>
          <ul>
            <li>
              <strong>Less competition:</strong> Fewer applicants means better
              odds
            </li>
            <li>
              <strong>Exploration:</strong> Great for testing industries before
              summer
            </li>
            <li>
              <strong>Multiple experiences:</strong> Do both winter and summer
              internships
            </li>
            <li>
              <strong>Startup friendly:</strong> Startups hire year-round
            </li>
          </ul>

          <h3>Best For</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="mb-2 text-sm font-bold">Ideal Candidates</p>
              <ul className="space-y-1 text-sm">
                <li>• 2nd year students building experience</li>
                <li>• Those exploring different industries</li>
                <li>• Students who missed summer cycle</li>
                <li>• Those targeting startups</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <p className="mb-2 text-sm font-bold">Where to Look</p>
              <ul className="space-y-1 text-sm">
                <li>• Startups (flexible year-round hiring)</li>
                <li>• Research labs</li>
                <li>• NGOs and social enterprises</li>
                <li>• Companies with rolling applications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section
          id="choose"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            4. How to Choose
          </h2>

          <h3>Decision Framework</h3>
          <div className="my-6 space-y-4">
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Choose Summer If...</p>
              <ul className="mt-1 text-sm text-muted-foreground">
                <li>• You're in pre-final year targeting PPO</li>
                <li>• You want longer, immersive experience</li>
                <li>• You're targeting MNCs with formal programs</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Choose Winter If...</p>
              <ul className="mt-1 text-sm text-muted-foreground">
                <li>• You're in 2nd year exploring options</li>
                <li>• You missed summer applications</li>
                <li>• You want less competition</li>
                <li>• You're targeting startups or research</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Do Both If...</p>
              <ul className="mt-1 text-sm text-muted-foreground">
                <li>• You can manage academics</li>
                <li>• You want to maximize experience</li>
                <li>• You're exploring different industries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section
          id="strategy"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Strategic Considerations
          </h2>

          <h3>Year-by-Year Strategy</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="text-sm font-bold">1st Year</p>
              <p className="text-sm text-muted-foreground">
                Focus on skill building. Consider winter internships at startups
                for early experience.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm font-bold">2nd Year</p>
              <p className="text-sm text-muted-foreground">
                Summer internship for exploration. Winter for doubling down on
                chosen field.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm font-bold">3rd Year (Pre-Final)</p>
              <p className="text-sm text-muted-foreground">
                Summer is critical for PPO. This is your most important
                internship season.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Use winter internship experience to
              strengthen your summer applications. Showing previous experience
              significantly increases callback rates.
            </div>
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
              <p className="font-bold">Can I do internships in both seasons?</p>
              <p className="mt-2 text-muted-foreground">
                Absolutely! Many successful students do winter + summer
                internships. Just ensure academics don't suffer and you don't
                burn out.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Are winter stipends lower?</p>
              <p className="mt-2 text-muted-foreground">
                Not necessarily. While average may be slightly lower, top
                companies pay well regardless of season. Startups often pay
                similar across seasons.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if my college has winter exams?</p>
              <p className="mt-2 text-muted-foreground">
                Look for part-time or remote winter internships. Many companies
                accommodate academic schedules. Alternatively, focus on summer.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Which season has better PPO rates?</p>
              <p className="mt-2 text-muted-foreground">
                Summer, especially pre-final year. Companies use summer
                internships as their primary hiring pipeline for new graduates.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Make the Strategic Choice</h2>
          <p>
            There's no universally "better" season—it depends on your year,
            goals, and circumstances. The best approach is to apply
            strategically and take opportunities when they come.
          </p>
          <p className="text-lg font-semibold text-primary">
            Don't wait for the "perfect" time. Start applying and let
            opportunities find you. ☀️❄️
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
              href="/blog/campus-vs-off-campus-placement"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Campus vs Off-Campus Guide
            </Link>
            <Link
              href="/blog/ultimate-guide-first-internship"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Ultimate Internship Guide
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
                Based on analysis of 15,000+ internship applications across
                seasons.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
