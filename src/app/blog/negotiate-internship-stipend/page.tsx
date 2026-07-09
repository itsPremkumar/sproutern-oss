import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  IndianRupee,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Users,
  TrendingUp,
  Target,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Negotiate Your Internship Stipend',
  description:
    'Complete guide to negotiating internship stipends. Includes market rates by industry, email templates, and strategies to increase your offer without risking rejection.',
  keywords: [
    'internship stipend negotiation',
    'negotiate internship salary',
    'internship salary India',
    'stipend negotiation tips',
    'how to ask for more stipend',
  ],
  openGraph: {
    title: 'Negotiate Your Internship Stipend: Complete Guide',
    description:
      'Learn to professionally negotiate for a higher internship stipend.',
    type: 'article',
    publishedTime: '2025-10-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-emerald-600">
            <IndianRupee className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Negotiate Your Internship Stipend (Yes, You Can!)
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Most students accept the first offer without negotiating.
            Here&apos;s how to professionally ask for more—without jeopardizing
            your opportunity.
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
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Negotiation Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">70%</span>
              <span>of employers expect candidates to negotiate</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">85%</span>
              <span>of those who negotiate get some improvement</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">10-20%</span>
              <span>typical stipend increase through negotiation</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-emerald-600">
                Only 39%
              </span>
              <span>of students actually try to negotiate</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#can-you"
                className="text-primary hover:underline"
              >
                1. Can You Actually Negotiate?
              </a>
            </li>
            <li>
              <a
                href="#research"
                className="text-primary hover:underline"
              >
                2. Know Your Market Value
              </a>
            </li>
            <li>
              <a
                href="#timing"
                className="text-primary hover:underline"
              >
                3. Timing Is Everything
              </a>
            </li>
            <li>
              <a
                href="#build-case"
                className="text-primary hover:underline"
              >
                4. Build Your Case
              </a>
            </li>
            <li>
              <a
                href="#conversation"
                className="text-primary hover:underline"
              >
                5. The Conversation
              </a>
            </li>
            <li>
              <a
                href="#templates"
                className="text-primary hover:underline"
              >
                6. Email Templates
              </a>
            </li>
            <li>
              <a
                href="#beyond-money"
                className="text-primary hover:underline"
              >
                7. Beyond Money
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                8. Common Mistakes
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            The idea of negotiating your internship stipend can be intimidating.
            Many students worry about seeming greedy or losing the offer
            entirely. But with the right approach, you can professionally
            advocate for yourself—and often succeed.
          </p>
          <p>
            This guide will walk you through the exact process, with scripts and
            templates you can use.
          </p>
        </section>

        {/* Can You Negotiate */}
        <section
          id="can-you"
          className="scroll-mt-20"
        >
          <h2>1. Can You Actually Negotiate an Internship Stipend?</h2>

          <p>
            <strong>Short answer: Yes, in many cases.</strong>
          </p>

          <h3>When Negotiation Is Possible</h3>
          <ul>
            <li>Startups and smaller companies (more flexibility)</li>
            <li>Non-campus placements (direct applications)</li>
            <li>Roles requiring specialized skills (data science, ML, etc.)</li>
            <li>When you have competing offers</li>
            <li>Extended internships (6+ months)</li>
          </ul>

          <h3>When Negotiation Is Harder</h3>
          <ul>
            <li>Large corporate campus programs (fixed stipends)</li>
            <li>Government/PSU internships (standardized pay)</li>
            <li>Mass hiring programs</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Key Insight:</strong> Even if you can&apos;t negotiate
              stipend, you can often negotiate other benefits like flexible
              hours, remote work, or project assignments.
            </div>
          </div>
        </section>

        {/* Research */}
        <section
          id="research"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Know Your Market Value
          </h2>

          <p>
            Knowledge is power. Before negotiating, understand what&apos;s
            normal for your role and location.
          </p>

          <h3>Indian Internship Stipend Ranges </h3>
          <div className="my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-3 py-2 text-left">Industry/Role</th>
                  <th className="px-3 py-2 text-left">Average Stipend</th>
                  <th className="px-3 py-2 text-left">High End</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-3 py-2">Software Development</td>
                  <td className="px-3 py-2">₹15,000 - ₹40,000/month</td>
                  <td className="px-3 py-2">₹80,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">Data Science/ML</td>
                  <td className="px-3 py-2">₹20,000 - ₹50,000/month</td>
                  <td className="px-3 py-2">₹1,00,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">Marketing</td>
                  <td className="px-3 py-2">₹8,000 - ₹20,000/month</td>
                  <td className="px-3 py-2">₹35,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">Finance</td>
                  <td className="px-3 py-2">₹15,000 - ₹35,000/month</td>
                  <td className="px-3 py-2">₹60,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">Content/Writing</td>
                  <td className="px-3 py-2">₹5,000 - ₹15,000/month</td>
                  <td className="px-3 py-2">₹25,000+</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2">Design (UI/UX)</td>
                  <td className="px-3 py-2">₹12,000 - ₹30,000/month</td>
                  <td className="px-3 py-2">₹50,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Research Resources</h3>
          <ul>
            <li>
              <strong>Glassdoor/AmbitionBox:</strong> Search &quot;[Company]
              internship&quot;
            </li>
            <li>
              <strong>LinkedIn:</strong> Ask connections who&apos;ve interned at
              similar companies
            </li>
            <li>
              <strong>College seniors:</strong> Ask recent graduates about their
              internship pay
            </li>
            <li>
              <strong>Internshala/LetsIntern:</strong> Browse similar listings
              for ranges
            </li>
          </ul>
        </section>

        {/* Timing */}
        <section
          id="timing"
          className="scroll-mt-20"
        >
          <h2>3. Timing Is Everything</h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold text-green-700">
                ✅ Best Time to Negotiate
              </p>
              <p className="text-sm text-muted-foreground">
                After you have a written offer, but before you&apos;ve accepted
                it. This is when you have maximum leverage.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="font-bold text-yellow-700">⚠️ Okay to Negotiate</p>
              <p className="text-sm text-muted-foreground">
                During final interview stages when they ask about salary
                expectations.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="font-bold text-red-700">❌ Too Late</p>
              <p className="text-sm text-muted-foreground">
                After you&apos;ve already accepted the offer in writing. The
                deal is done.
              </p>
            </div>
          </div>

          <p>
            <strong>Golden rule:</strong> Never negotiate before you have an
            offer. Don&apos;t bring up money until they&apos;ve decided they
            want you.
          </p>
        </section>

        {/* Build Your Case */}
        <section
          id="build-case"
          className="scroll-mt-20"
        >
          <h2>4. Build Your Case</h2>

          <p>
            Negotiation isn&apos;t about what you want—it&apos;s about
            demonstrating your value. Here&apos;s how to build leverage:
          </p>

          <h3>Strong Leverage Points</h3>
          <ul>
            <li>
              <strong>Competing offers:</strong> &quot;I have another offer at
              ₹X, but I prefer your company because...&quot;
            </li>
            <li>
              <strong>Relevant experience:</strong> Previous internships,
              significant projects
            </li>
            <li>
              <strong>Specialized skills:</strong> Machine learning, cloud
              certifications, rare tech stacks
            </li>
            <li>
              <strong>Strong interview performance:</strong> They know
              you&apos;re valuable if interviews went well
            </li>
            <li>
              <strong>Market data:</strong> &quot;Similar roles at comparable
              companies pay ₹X...&quot;
            </li>
          </ul>

          <h3>Weak or Risky Arguments</h3>
          <ul>
            <li>
              ❌ &quot;I need more money for rent&quot; (personal expenses
              aren&apos;t their concern)
            </li>
            <li>
              ❌ &quot;My friend got more at another company&quot; (vague,
              unverifiable)
            </li>
            <li>❌ &quot;I deserve it&quot; without justification</li>
            <li>
              ❌ Threatening to walk away (unless you&apos;re truly willing to)
            </li>
          </ul>
        </section>

        {/* The Conversation */}
        <section
          id="conversation"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            5. The Conversation
          </h2>

          <h3>Key Principles</h3>
          <ul>
            <li>
              <strong>Express enthusiasm first:</strong> Make it clear you want
              the role
            </li>
            <li>
              <strong>Be collaborative, not adversarial:</strong> Frame it as
              working together
            </li>
            <li>
              <strong>Be specific:</strong> Ask for a specific number or range
            </li>
            <li>
              <strong>Give them time:</strong> Don&apos;t demand an immediate
              answer
            </li>
            <li>
              <strong>Be gracious regardless:</strong> Accept the outcome
              professionally
            </li>
          </ul>

          <h3>Sample Script (Phone/Call)</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              &quot;Hi [Name], thank you so much for the offer! I&apos;m really
              excited about the opportunity to work with [Company] on [specific
              project/team].
            </p>
            <br />
            <p>
              I did want to discuss the stipend. Based on my research of similar
              roles and my experience with [specific skill/project], I was
              hoping we could discuss a stipend closer to ₹[X].
            </p>
            <br />
            <p>Is there any flexibility on the compensation?&quot;</p>
          </div>

          <h3>If They Say No</h3>
          <p>
            Accept graciously. The goal was to try, not to win at all costs:
          </p>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              &quot;I completely understand. I appreciate you considering it.
              I&apos;m still very excited about this opportunity and would love
              to accept the offer as-is.&quot;
            </p>
          </div>
        </section>

        {/* Templates */}
        <section
          id="templates"
          className="scroll-mt-20"
        >
          <h2>6. Email Templates</h2>

          <h3>Template 1: Simple Negotiation Request</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Re: Internship Offer - [Your Name]
            </p>
            <br />
            <p>Dear [Recruiter Name],</p>
            <br />
            <p>
              Thank you so much for the internship offer for the [Role]
              position. I&apos;m genuinely excited about the opportunity to
              contribute to [Company] and work on [specific area].
            </p>
            <br />
            <p>
              Before I formally accept, I wanted to discuss the stipend. Based
              on my research of similar roles and my relevant experience in
              [skill/project], I was hoping we could explore a stipend of ₹[Y]
              per month.
            </p>
            <br />
            <p>
              I understand there may be constraints, and I&apos;m certainly open
              to discussing this further. Please let me know if there&apos;s any
              flexibility.
            </p>
            <br />
            <p>Looking forward to your response.</p>
            <br />
            <p>
              Best regards,
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Template 2: With Competing Offer</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Re: Internship Offer Discussion
            </p>
            <br />
            <p>Dear [Recruiter Name],</p>
            <br />
            <p>
              Thank you for extending the offer for the [Role] internship.
              [Company] is my first choice because of [genuine reason - team,
              product, culture].
            </p>
            <br />
            <p>
              I want to be transparent: I&apos;ve also received another offer
              with a stipend of ₹[X]. While compensation isn&apos;t my primary
              factor, I wanted to check if there&apos;s any possibility of
              matching or getting closer to that figure.
            </p>
            <br />
            <p>
              I&apos;m happy to discuss this further or provide any additional
              information.
            </p>
            <br />
            <p>
              Best regards,
              <br />
              [Your Name]
            </p>
          </div>
        </section>

        {/* Beyond Money */}
        <section
          id="beyond-money"
          className="scroll-mt-20"
        >
          <h2>7. Beyond Money: What Else to Negotiate</h2>

          <p>
            If they can&apos;t budge on stipend, consider negotiating other
            valuable benefits:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">🏠 Work Flexibility</p>
              <ul className="space-y-1 text-sm">
                <li>• Remote work options</li>
                <li>• Flexible hours</li>
                <li>• Compressed work week</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">📚 Learning & Development</p>
              <ul className="space-y-1 text-sm">
                <li>• Conference attendance</li>
                <li>• Online course budget</li>
                <li>• Certification reimbursement</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">💼 Experience</p>
              <ul className="space-y-1 text-sm">
                <li>• Work on specific projects</li>
                <li>• Mentorship from senior staff</li>
                <li>• Cross-team exposure</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">🚗 Practical Benefits</p>
              <ul className="space-y-1 text-sm">
                <li>• Transport allowance</li>
                <li>• Housing stipend</li>
                <li>• Meal allowance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            8. Common Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Negotiating Too Early</p>
              <p className="text-sm">
                Wait until you have an offer in hand. Bringing up money before
                they&apos;ve decided they want you weakens your position.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Being Aggressive or Demanding</p>
              <p className="text-sm">
                Negotiation is collaborative. Aggressive tactics can cost you
                the offer entirely.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Not Having a Number Ready</p>
              <p className="text-sm">
                Know exactly what you want to ask for. Vague requests like
                &quot;more&quot; aren&apos;t effective.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">❌ Lying About Competing Offers</p>
              <p className="text-sm">
                If caught, you&apos;ll lose the offer and damage your
                reputation. Only mention real offers.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-1 font-bold">
                ❌ Burning Bridges If They Say No
              </p>
              <p className="text-sm">
                Accept graciously. The experience matters too, and you might
                convert to full-time.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="not-prose">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            Negotiation Checklist
          </h2>

          <div className="space-y-2">
            {[
              'Research market rates for your role, industry, and location',
              'Identify your leverage points (skills, experience, competing offers)',
              'Know your minimum acceptable number and target number',
              'Wait until you have a written offer before negotiating',
              'Express enthusiasm for the role first',
              'Make a specific, justified ask',
              'Be prepared to negotiate non-monetary benefits',
              "Give them time to respond (don't pressure for immediate answer)",
              'Accept the outcome graciously regardless of result',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Always Ask</h2>

          <p>
            The worst they can say is no—and most employers respect candidates
            who professionally advocate for themselves. Negotiation is a
            valuable career skill that will serve you throughout your
            professional life.
          </p>

          <p>
            Even if you don&apos;t succeed this time, you&apos;ve practiced
            asserting your value. That&apos;s a win in itself.
          </p>

          <p className="text-lg font-semibold text-primary">
            Know your worth. Ask for it professionally. Accept the outcome
            gracefully. 💰
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
              href="/blog/50-common-interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              50 Interview Questions
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Salary Calculator Tool
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
                Our team has coached thousands of students through salary
                negotiations, helping them secure better offers across
                industries.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
