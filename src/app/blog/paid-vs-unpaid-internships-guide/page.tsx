import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Scale,
  Briefcase,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  IndianRupee,
  AlertTriangle,
  Shield,
  Award,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paid vs Unpaid Internships: What Students Need to Know in',
  description:
    'Complete guide comparing paid and unpaid internships. Learn when unpaid internships are worth it, legal considerations, and how to make the right choice for your career.',
  keywords: [
    'paid internship',
    'unpaid internship',
    'internship stipend',
    'free internship',
    'internship salary',
    'intern pay India',
  ],
  openGraph: {
    title: 'Paid vs Unpaid Internships: What Students Need to Know',
    description:
      'Make an informed decision between paid and unpaid internships with our comprehensive guide.',
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
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Advice
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Paid vs Unpaid Internships: What Students Need to Know
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Should you accept an unpaid internship? When is it worth it, and
            when should you walk away? A comprehensive analysis to help you make
            the right decision.
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

        {/* Quick Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            Internship Compensation Trends
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">67%</span>
              <span>of internships in India now offer stipends</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">₹15K</span>
              <span>average monthly stipend across industries</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">85%</span>
              <span>of tech internships are paid</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">42%</span>
              <span>of NGO/media internships remain unpaid</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 In This Guide</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#reality"
                className="text-primary hover:underline"
              >
                1. The Reality of Unpaid Internships
              </a>
            </li>
            <li>
              <a
                href="#comparison"
                className="text-primary hover:underline"
              >
                2. Paid vs Unpaid: Key Differences
              </a>
            </li>
            <li>
              <a
                href="#when-worth"
                className="text-primary hover:underline"
              >
                3. When Unpaid Might Be Worth It
              </a>
            </li>
            <li>
              <a
                href="#red-flags"
                className="text-primary hover:underline"
              >
                4. Red Flags to Watch For
              </a>
            </li>
            <li>
              <a
                href="#negotiate"
                className="text-primary hover:underline"
              >
                5. How to Negotiate Stipends
              </a>
            </li>
            <li>
              <a
                href="#legal"
                className="text-primary hover:underline"
              >
                6. Legal Considerations in India
              </a>
            </li>
            <li>
              <a
                href="#alternatives"
                className="text-primary hover:underline"
              >
                7. Alternatives to Unpaid Work
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                8. FAQs
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
                Paid internships should be your default choice—your time has
                value
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Unpaid internships can be justified in specific situations
                (research, niche fields, exceptional learning)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Always negotiate—even "unpaid" positions often have flexibility
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Watch for red flags: no learning, menial tasks, extended unpaid
                periods
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            "Should I take this unpaid internship?" It's one of the most common
            questions we receive at Sproutern. The answer isn't black and
            white—it depends on your circumstances, career goals, and what the
            internship actually offers.
          </p>
          <p>
            In this comprehensive guide, we'll help you make an informed
            decision by examining both sides, understanding when unpaid work
            makes sense, and knowing when to walk away.
          </p>
        </section>

        {/* Section 1: Reality */}
        <section
          id="reality"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            1. The Reality of Unpaid Internships
          </h2>

          <p>
            Let's start with some honest truths about unpaid internships in
            India:
          </p>

          <h3>Why Companies Offer Unpaid Internships</h3>
          <ul>
            <li>
              <strong>Resource constraints:</strong> Startups and NGOs may
              genuinely lack budget
            </li>
            <li>
              <strong>Training costs:</strong> Companies invest in training,
              which has value
            </li>
            <li>
              <strong>Supply-demand imbalance:</strong> More students than
              positions means some accept free work
            </li>
            <li>
              <strong>Exploitation:</strong> Some organizations simply take
              advantage of desperate students
            </li>
          </ul>

          <h3>The Hidden Costs of "Free" Work</h3>
          <p>Unpaid internships aren't actually free—you pay with:</p>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <IndianRupee className="mb-2 h-5 w-5 text-red-500" />
              <p className="text-sm font-bold">Opportunity Cost</p>
              <p className="text-sm text-muted-foreground">
                Time spent could be used for paid work, skill-building, or
                better opportunities
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <IndianRupee className="mb-2 h-5 w-5 text-red-500" />
              <p className="text-sm font-bold">Direct Expenses</p>
              <p className="text-sm text-muted-foreground">
                Commute, food, professional clothing—costs add up quickly
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Reality Check:</strong> The average student spends
              ₹3,000-5,000/month on commute and food during an internship. Over
              3 months, that's ₹9,000-15,000 you're essentially paying the
              company.
            </div>
          </div>
        </section>

        {/* Section 2: Comparison */}
        <section
          id="comparison"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-primary" />
            2. Paid vs Unpaid: Key Differences
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Factor</th>
                  <th className="border p-3 text-left">Paid Internship</th>
                  <th className="border p-3 text-left">Unpaid Internship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Commitment Level</td>
                  <td className="border p-3">
                    Company is invested in your success
                  </td>
                  <td className="border p-3">
                    May treat interns as disposable
                  </td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Quality of Work</td>
                  <td className="border p-3">Real projects with impact</td>
                  <td className="border p-3">
                    Varies widely—often administrative
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Mentorship</td>
                  <td className="border p-3">Usually structured programs</td>
                  <td className="border p-3">Often lacks formal mentorship</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">PPO Chances</td>
                  <td className="border p-3">
                    Higher (company has budget for hires)
                  </td>
                  <td className="border p-3">
                    Lower (budget constraints remain)
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Resume Value</td>
                  <td className="border p-3">Strong signal of capability</td>
                  <td className="border p-3">Depends on brand and learning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Industry-Wise Breakdown</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <ThumbsUp className="h-4 w-4 text-green-600" />
                Mostly Paid Industries
              </p>
              <ul className="space-y-1">
                <li>• Technology/IT (85% paid)</li>
                <li>• Finance/Banking (80% paid)</li>
                <li>• Consulting (75% paid)</li>
                <li>• E-commerce (70% paid)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 flex items-center gap-2 font-bold">
                <ThumbsDown className="h-4 w-4 text-red-600" />
                Often Unpaid Industries
              </p>
              <ul className="space-y-1">
                <li>• NGOs/Non-profits (60% unpaid)</li>
                <li>• Media/Journalism (55% unpaid)</li>
                <li>• Fashion/Entertainment (50% unpaid)</li>
                <li>• Politics/Government (45% unpaid)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: When Worth It */}
        <section
          id="when-worth"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            3. When Unpaid Might Be Worth It
          </h2>

          <p>
            Despite our recommendation to prioritize paid work, there are
            scenarios where unpaid internships can be valuable:
          </p>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">✅ Dream Company Access</p>
              <p className="text-sm text-muted-foreground">
                If it's your dream company and this is the only way in, a short
                unpaid stint might open doors.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">✅ Exceptional Learning Opportunity</p>
              <p className="text-sm text-muted-foreground">
                Working directly with industry leaders, access to exclusive
                training, or cutting-edge projects.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">✅ Research/Academic Positions</p>
              <p className="text-sm text-muted-foreground">
                University research positions, especially if pursuing higher
                studies, can be valuable even without stipend.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">✅ Career Pivot</p>
              <p className="text-sm text-muted-foreground">
                Switching industries and need experience to prove capability in
                new field.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">✅ Short Duration (1-4 weeks)</p>
              <p className="text-sm text-muted-foreground">
                Brief exposure for exploration is acceptable; extended unpaid
                work is not.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>The Rule of Three:</strong> An unpaid internship is only
              worth it if it offers at least three of these: valuable skills,
              strong mentorship, portfolio-worthy projects, networking
              opportunities, clear path to paid role, prestigious brand name.
            </div>
          </div>
        </section>

        {/* Section 4: Red Flags */}
        <section
          id="red-flags"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            4. Red Flags to Watch For
          </h2>

          <p>
            Walk away from unpaid internships that show these warning signs:
          </p>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Menial Tasks Only</p>
              <p className="text-sm text-muted-foreground">
                If you're only doing data entry, filing, or coffee runs, you're
                being exploited, not trained.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 No Clear Learning Objectives</p>
              <p className="text-sm text-muted-foreground">
                Legitimate internships have structured learning goals. "You'll
                learn on the job" isn't enough.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Long Duration Without Pay</p>
              <p className="text-sm text-muted-foreground">
                3+ months unpaid is almost never acceptable. That's employment,
                not training.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Replacing Paid Employees</p>
              <p className="text-sm text-muted-foreground">
                If you're doing work that would otherwise go to paid staff, it's
                exploitation.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 Promise of "Future Pay"</p>
              <p className="text-sm text-muted-foreground">
                Vague promises of payment later rarely materialize. Get it in
                writing or walk away.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">🚩 No Mentorship Access</p>
              <p className="text-sm text-muted-foreground">
                If seniors aren't investing time in your development, you're
                just free labor.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Negotiate */}
        <section
          id="negotiate"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <IndianRupee className="h-6 w-6 text-primary" />
            5. How to Negotiate Stipends
          </h2>

          <p>
            Many "unpaid" positions have flexibility. Here's how to negotiate:
          </p>

          <h3>Before Negotiating</h3>
          <ul>
            <li>
              Research market rates for similar roles (use Glassdoor, Ambition
              Box)
            </li>
            <li>Know your value—list skills and what you bring to the table</li>
            <li>
              Understand company constraints (startup vs. established company)
            </li>
          </ul>

          <h3>Negotiation Script</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              "Thank you for this opportunity. I'm very excited about the role
              and learning from your team.
            </p>
            <p className="mt-2">
              I wanted to discuss the compensation. I understand you may have
              budget constraints, but I'm hoping we could find a middle ground.
              Even a modest stipend to cover commute and meals would help me
              focus fully on delivering great work.
            </p>
            <p className="mt-2">
              Would ₹10,000 per month be possible? I'm flexible and open to
              discussing what works for both of us."
            </p>
          </div>

          <h3>Alternatives to Request</h3>
          <ul>
            <li>Transport/meal allowance instead of full stipend</li>
            <li>Performance bonus at end of internship</li>
            <li>Remote work option (saves your commute costs)</li>
            <li>Shorter duration with more intense learning</li>
            <li>Letter of recommendation guaranteed</li>
          </ul>
        </section>

        {/* Section 6: Legal */}
        <section
          id="legal"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            6. Legal Considerations in India
          </h2>

          <p>
            India's labor laws around internships are evolving but still
            somewhat unclear:
          </p>

          <div className="my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="mb-2 text-sm font-bold">Current Legal Status</p>
            <ul className="space-y-1 text-sm">
              <li>
                • No specific law mandates internship pay in private sector
              </li>
              <li>
                • Government internships (NITI Aayog, etc.) typically offer
                stipends
              </li>
              <li>
                • Extended "internships" doing regular work may violate labor
                laws
              </li>
              <li>
                • Companies must not replace employees with unpaid interns
              </li>
            </ul>
          </div>

          <h3>Protect Yourself</h3>
          <ul>
            <li>
              Get everything in writing (offer letter, duration, learning
              objectives)
            </li>
            <li>Clarify working hours and expectations upfront</li>
            <li>Keep records of work done and skills learned</li>
            <li>
              Report exploitative practices to labor authorities if necessary
            </li>
          </ul>
        </section>

        {/* Section 7: Alternatives */}
        <section
          id="alternatives"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            7. Alternatives to Unpaid Internships
          </h2>

          <p>
            Instead of accepting an unpaid position, consider these
            alternatives:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Freelancing</p>
              <p className="text-sm text-muted-foreground">
                Build skills while earning. Platforms: Upwork, Fiverr,
                Freelancer
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Open Source Contribution</p>
              <p className="text-sm text-muted-foreground">
                Work on real codebases, build portfolio, get noticed by
                companies
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Personal Projects</p>
              <p className="text-sm text-muted-foreground">
                Build your own apps, websites, or solutions. Complete ownership.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Paid Part-Time Work</p>
              <p className="text-sm text-muted-foreground">
                Tutoring, content writing, virtual assistance—earn while
                learning
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            8. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Is it illegal for companies to not pay interns in India?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not strictly illegal for short-term educational internships, but
                extended unpaid work doing regular employee tasks may violate
                labor laws. The legal framework is still evolving.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I mention unpaid internships on my resume?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes, if you gained valuable skills. Don't mention the pay
                status—just list the experience, your responsibilities, and
                achievements.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How long is too long for an unpaid internship?
              </p>
              <p className="mt-2 text-muted-foreground">
                Generally, anything beyond 1-2 months unpaid should raise
                concerns. If they can't afford ₹10K/month after 2 months, the
                learning opportunity better be exceptional.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I negotiate pay after accepting an unpaid role?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! After proving your value (1-2 weeks), you can request a
                stipend. Frame it as enabling you to contribute more
                effectively.
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            More Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I can't afford to work for free?
              </h3>
              <p className="text-muted-foreground">
                Then don't. There's no shame in prioritizing financial
                stability. Look for paid alternatives, freelance work, or
                part-time jobs that can help you build skills while earning.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Do unpaid internships lead to jobs?
              </h3>
              <p className="text-muted-foreground">
                Sometimes, but at a lower rate than paid internships. Companies
                with budget constraints for interns often have similar
                constraints for junior hires. Paid internships indicate hiring
                capacity.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I do multiple unpaid internships?
              </h3>
              <p className="text-muted-foreground">
                Rarely. One strategic unpaid internship might be acceptable, but
                multiple unpaid positions suggest you're not valuing yourself.
                After one, demand compensation.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I compare two offers—paid but boring vs. unpaid but
                exciting?
              </h3>
              <p className="text-muted-foreground">
                Consider: How "boring" is boring? Can you make it interesting?
                How "exciting" is exciting? Will it actually help your career?
                Often, the paid boring option teaches you more about real work.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is remote unpaid work better than on-site?
              </h3>
              <p className="text-muted-foreground">
                Slightly, since you save commute costs. But if you're not
                learning or getting mentorship, remote or on-site doesn't
                matter—it's still exploitation.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I quit an unpaid internship early?
              </h3>
              <p className="text-muted-foreground">
                Yes, especially if you're not learning. Give reasonable notice
                (1-2 weeks) and leave professionally. You don't owe extended
                commitment to an organization not investing in you.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Real Student Experiences
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Negotiated and got paid..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Applied for an 'unpaid' marketing internship. After the
                interview, I politely asked about stipend. They offered
                ₹8K/month—they just didn't advertise it! Always ask." — Sneha,
                Mumbai
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-5 dark:bg-yellow-950">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                "Unpaid was worth it once..."
              </p>
              <p className="mt-2 text-sm text-yellow-800 dark:text-yellow-200">
                "Took a 4-week unpaid internship at a research lab. Got
                published as co-author, which helped my grad school applications
                immensely. That specific opportunity was worth it." — Arjun,
                Delhi
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950">
              <p className="font-semibold text-red-900 dark:text-red-100">
                "Should have walked away..."
              </p>
              <p className="mt-2 text-sm text-red-800 dark:text-red-200">
                "Did a 3-month unpaid internship at a 'startup'. Just data
                entry. No learning, no mentorship, no certificate even. Complete
                waste of time. Listen to the red flags." — Priya, Bengaluru
              </p>
            </div>
          </div>
        </section>

        {/* Decision Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Decision Checklist
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="mb-3 font-semibold">
                Before Accepting an Unpaid Internship, Check:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>I can financially afford to work without pay</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>There are clear learning objectives defined</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>A mentor is assigned to guide me</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>The duration is reasonable (under 2 months)</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>
                    I'll work on meaningful projects, not just admin tasks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>The company brand or learning is exceptional</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>I've tried negotiating and they can't pay</span>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />
                  <span>No better paid alternatives are available</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                If you can't check at least 6 of these, reconsider accepting.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Stipend Guide */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <IndianRupee className="h-6 w-6 text-primary" />
            Expected Stipends by Industry
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Industry
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Entry Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Mid-Range
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Top Tier
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Tech/IT</td>
                  <td className="border p-3">₹10-20K</td>
                  <td className="border p-3">₹25-50K</td>
                  <td className="border p-3">₹60K-1.5L</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Finance</td>
                  <td className="border p-3">₹15-25K</td>
                  <td className="border p-3">₹30-60K</td>
                  <td className="border p-3">₹70K-1.2L</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Consulting</td>
                  <td className="border p-3">₹20-35K</td>
                  <td className="border p-3">₹40-70K</td>
                  <td className="border p-3">₹80K-1L</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Marketing</td>
                  <td className="border p-3">₹5-10K</td>
                  <td className="border p-3">₹12-25K</td>
                  <td className="border p-3">₹30-50K</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Content/Media</td>
                  <td className="border p-3">₹0-8K</td>
                  <td className="border p-3">₹10-20K</td>
                  <td className="border p-3">₹25-40K</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">NGO/Social</td>
                  <td className="border p-3">₹0-5K</td>
                  <td className="border p-3">₹8-15K</td>
                  <td className="border p-3">₹18-30K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Making Your Decision</h2>
          <p>
            The bottom line: <strong>your time has value</strong>. In most
            cases, paid internships should be your priority. However, if an
            unpaid opportunity offers exceptional learning, access, or career
            advancement—and you can afford it—it might be worth considering.
          </p>
          <p>
            Always negotiate, watch for red flags, and never let desperation
            push you into exploitative situations. There are plenty of
            opportunities that will value your contributions properly.
          </p>
          <p>
            Remember: companies that don't pay often don't value interns. Find
            organizations that invest in their people from day one.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your skills are worth something. Make sure the world knows it. 💪
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/negotiate-internship-stipend"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              How to Negotiate Your Stipend
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Tech Internship Guide
            </Link>
            <Link
              href="/blog/startup-vs-corporate-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Startup vs Corporate Internships
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Paid Internships
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
                Research based on survey of 5,000+ students and analysis of
                internship compensation data across industries.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
