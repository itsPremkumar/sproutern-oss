import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  IndianRupee,
  TrendingUp,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  Target,
  Calculator,
  Handshake,
  Building2,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MNC Salary Negotiation for Freshers - Complete Guide',
  description:
    'Learn how to negotiate your first MNC job offer professionally. Understand salary components, negotiation strategies, timing, common mistakes to avoid, and how to get better packages.',
  keywords: [
    'MNC salary negotiation',
    'salary negotiation freshers',
    'job offer negotiation',
    'CTC negotiation',
    'MNC salary',
    'negotiate offer letter',
  ],
  openGraph: {
    title: 'MNC Salary Negotiation for Freshers - Complete Guide',
    description: 'Master salary negotiation and get better MNC job offers.',
    type: 'article',
    publishedTime: '2025-12-21T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <IndianRupee className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC Salary Negotiation for Freshers - Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Many freshers accept the first offer without negotiating. Learn how
            to negotiate your MNC job offer professionally, understand when to
            negotiate, what to say, and how to get 10-20% higher packages.
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
              <span>13 min read</span>
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
              <span>
                Research market rates before negotiating - use salary data and
                our{' '}
                <Link
                  href="/tools/salary-calculator"
                  className="text-primary hover:underline"
                >
                  Salary Calculator
                </Link>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Timing matters - negotiate after offer, not during interview
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Be professional and respectful - never aggressive</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Justify your request with skills, achievements, and market data
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                10-20% increase is reasonable for freshers with strong profiles
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            Salary negotiation is often overlooked by freshers who are excited
            about their first job offer. However,{' '}
            <strong>
              negotiating can increase your starting salary by 10-20%
            </strong>
            , which compounds significantly over your career. Many MNCs expect
            some negotiation and have budget flexibility.
          </p>
          <p>
            This guide covers everything about salary negotiation for freshers:
            when to negotiate, how to negotiate, what to say, common mistakes,
            and strategies that work.
          </p>
        </section>

        {/* Section 1: Understanding Salary Components */}
        <section
          id="components"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            1. Understanding Salary Components
          </h2>

          <p>
            Before negotiating, understand what you're negotiating for. MNC
            salary packages include multiple components.
          </p>

          <h3>Salary Components Breakdown</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Component</th>
                  <th className="border p-3 text-left">Description</th>
                  <th className="border p-3 text-left">Typical % of CTC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Basic Salary</td>
                  <td className="border p-3">
                    Core salary, used for PF calculation
                  </td>
                  <td className="border p-3">40-50%</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">HRA</td>
                  <td className="border p-3">House Rent Allowance</td>
                  <td className="border p-3">40-50% of Basic</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">
                    Transport Allowance
                  </td>
                  <td className="border p-3">Commuting expenses</td>
                  <td className="border p-3">5-10%</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Medical Allowance</td>
                  <td className="border p-3">Health-related expenses</td>
                  <td className="border p-3">5-10%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Variable Pay</td>
                  <td className="border p-3">Performance-based bonus</td>
                  <td className="border p-3">10-20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Use our{' '}
              <Link
                href="/tools/salary-calculator"
                className="font-semibold text-primary hover:underline"
              >
                Salary Calculator
              </Link>{' '}
              to understand CTC breakdown and calculate your actual in-hand
              salary. Also check our{' '}
              <Link
                href="/companies/mnc-salary-guide"
                className="font-semibold text-primary hover:underline"
              >
                MNC Salary Guide
              </Link>{' '}
              for market rates.
            </p>
          </div>
        </section>

        {/* Section 2: When to Negotiate */}
        <section
          id="when"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            2. When to Negotiate Salary
          </h2>

          <h3>Best Time to Negotiate</h3>
          <div className="not-prose my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 font-semibold">✅ Negotiate When:</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>You receive the offer letter</li>
              <li>You have another offer (leverage)</li>
              <li>You have exceptional skills/projects</li>
              <li>Offer is below market rate</li>
              <li>You have relevant experience/internships</li>
            </ul>
          </div>

          <div className="not-prose my-4 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="mb-2 font-semibold">❌ Don't Negotiate When:</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>During the interview process</li>
              <li>If offer is already at market rate or above</li>
              <li>If you have no leverage (no other offers, weak profile)</li>
              <li>If company explicitly says "non-negotiable"</li>
            </ul>
          </div>

          <h3>Timing Strategy</h3>
          <ol>
            <li>
              <strong>Wait for Offer:</strong> Never negotiate before receiving
              formal offer
            </li>
            <li>
              <strong>Respond Within 2-3 Days:</strong> Show interest but take
              time to evaluate
            </li>
            <li>
              <strong>Express Gratitude First:</strong> Thank them for the offer
              before negotiating
            </li>
            <li>
              <strong>Be Professional:</strong> Frame as discussion, not demand
            </li>
          </ol>
        </section>

        {/* Section 3: How to Negotiate */}
        <section
          id="how"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Handshake className="h-6 w-6 text-primary" />
            3. How to Negotiate Salary - Step-by-Step
          </h2>

          <h3>Step 1: Research Market Rates</h3>
          <ul>
            <li>
              Check salary data for your role, location, and experience level
            </li>
            <li>Use salary websites, LinkedIn, and company-specific data</li>
            <li>Consider your skills, projects, and achievements</li>
            <li>
              Check our{' '}
              <Link
                href="/companies/mnc-salary-guide"
                className="text-primary hover:underline"
              >
                MNC Salary Guide
              </Link>{' '}
              for reference
            </li>
          </ul>

          <h3>Step 2: Prepare Your Justification</h3>
          <p>Build a case for why you deserve higher salary:</p>
          <ul>
            <li>
              <strong>Skills:</strong> Highlight unique or advanced skills
            </li>
            <li>
              <strong>Projects:</strong> Mention impressive projects and
              achievements
            </li>
            <li>
              <strong>Market Data:</strong> Reference market rates for similar
              profiles
            </li>
            <li>
              <strong>Value:</strong> Explain how you'll contribute to the
              company
            </li>
          </ul>

          <h3>Step 3: Craft Your Negotiation Email/Call</h3>
          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Sample Negotiation Email Template:
            </h4>
            <div className="rounded border bg-background p-3 text-sm">
              <p className="mb-2">Subject: Re: Job Offer - [Position Name]</p>
              <p className="mb-2">Dear [Hiring Manager Name],</p>
              <p className="mb-2">
                Thank you for offering me the [Position] role at [Company]. I'm
                excited about this opportunity and the chance to contribute to
                your team.
              </p>
              <p className="mb-2">
                After careful consideration, I would like to discuss the
                compensation package. Based on my research of market rates for
                similar roles and considering my [mention skills/achievements],
                I was hoping we could discuss a CTC of [X] LPA.
              </p>
              <p className="mb-2">
                I'm confident that my [specific skills/experience] will add
                significant value to [Company], and I'm very enthusiastic about
                joining your team.
              </p>
              <p className="mb-2">
                I'm open to discussing this further and finding a mutually
                beneficial arrangement.
              </p>
              <p>Thank you for your consideration.</p>
              <p className="mt-2">
                Best regards,
                <br />
                [Your Name]
              </p>
            </div>
          </div>

          <h3>Step 4: Handle the Response</h3>
          <ul>
            <li>
              <strong>If Accepted:</strong> Express gratitude, confirm next
              steps
            </li>
            <li>
              <strong>If Counter-Offered:</strong> Evaluate if it's acceptable,
              negotiate further if needed
            </li>
            <li>
              <strong>If Rejected:</strong> Thank them, ask if there's
              flexibility in other benefits
            </li>
            <li>
              <strong>Be Ready to Accept:</strong> Have a minimum acceptable
              salary in mind
            </li>
          </ul>
        </section>

        {/* Section 4: Negotiation Strategies */}
        <section
          id="strategies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Effective Negotiation Strategies
          </h2>

          <h3>Strategy 1: Anchor High (But Reasonably)</h3>
          <p>
            Start with a number 15-20% higher than offer. This gives room for
            negotiation while staying realistic.
          </p>

          <h3>Strategy 2: Use Market Data</h3>
          <p>
            Reference specific salary data: "Based on my research, the market
            rate for this role in [Location] is [X] LPA for candidates with
            similar skills."
          </p>

          <h3>Strategy 3: Highlight Unique Value</h3>
          <p>
            Emphasize what makes you special: "I bring [unique skill/project]
            which aligns perfectly with [Company's needs]."
          </p>

          <h3>Strategy 4: Consider Total Package</h3>
          <p>If base salary can't be increased, negotiate for:</p>
          <ul>
            <li>Higher variable pay</li>
            <li>Signing bonus</li>
            <li>Better benefits</li>
            <li>Faster promotion timeline</li>
            <li>Training/certification budget</li>
          </ul>

          <h3>Strategy 5: Leverage Multiple Offers</h3>
          <p>
            If you have other offers, mention them professionally: "I have
            another offer at [X] LPA, but I'm more interested in [Company]
            because [Reason]. Is there flexibility in the package?"
          </p>
        </section>

        {/* Section 5: Common Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            5. Common Negotiation Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 1: Being Too Aggressive</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Never make demands or ultimatums. Be respectful and
                professional. Frame as discussion, not negotiation.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 2: Not Researching Market Rates
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Always research before negotiating. Asking for unrealistic
                amounts shows lack of preparation.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 3: Negotiating Too Early</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Don't negotiate during interviews. Wait for formal offer.
                Premature negotiation can cost you the offer.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 4: Accepting First Counter-Offer Immediately
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Take time to evaluate counter-offers. Don't feel pressured to
                accept immediately.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 5: Not Having a Minimum Acceptable Salary
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Know your walk-away number. If offer is below your minimum and
                can't be negotiated, be ready to decline politely.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Company-Specific Negotiation Tips */}
        <section
          id="company-specific"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            6. Company-Specific Negotiation Tips
          </h2>

          <h3>Service-Based Companies (TCS, Infosys, Wipro)</h3>
          <ul>
            <li>Limited negotiation room - usually 5-10% maximum</li>
            <li>Focus on role/designation if salary can't be increased</li>
            <li>Emphasize skills and certifications</li>
            <li>Consider location preferences</li>
          </ul>

          <h3>Product-Based Companies (Amazon, Google, Microsoft)</h3>
          <ul>
            <li>More negotiation flexibility - 10-20% possible</li>
            <li>Can negotiate base salary, stock options, signing bonus</li>
            <li>Strong leverage if you have competing offers</li>
            <li>Focus on total compensation, not just base salary</li>
          </ul>
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
              <p className="font-bold">Can freshers negotiate salary?</p>
              <p className="mt-2 text-muted-foreground">
                Yes, but with limitations. If you have strong skills, projects,
                or other offers, you can negotiate. However, service-based
                companies have less flexibility than product companies.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How much can I negotiate as a fresher?
              </p>
              <p className="mt-2 text-muted-foreground">
                Typically 5-15% for service-based companies, 10-20% for product
                companies. Depends on your profile, market rates, and company
                policies.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">What if they reject my negotiation?</p>
              <p className="mt-2 text-muted-foreground">
                Thank them, ask if there's flexibility in other benefits, and
                evaluate if original offer is acceptable. Don't burn bridges -
                be professional.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I mention other offers?</p>
              <p className="mt-2 text-muted-foreground">
                Yes, but professionally. Frame it as: "I have another offer, but
                I'm more interested in your company. Is there flexibility?"
                Don't use it as threat.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Negotiate Professionally</h2>
          <p>
            Salary negotiation is a skill that can significantly impact your
            career earnings. With proper research, professional approach, and
            the right timing, you can successfully negotiate better MNC offers.
          </p>
          <p className="text-lg font-semibold text-primary">
            Research market rates with our{' '}
            <Link
              href="/tools/salary-calculator"
              className="hover:underline"
            >
              Salary Calculator
            </Link>{' '}
            and{' '}
            <Link
              href="/companies/mnc-salary-guide"
              className="hover:underline"
            >
              MNC Salary Guide
            </Link>
            , prepare your justification, and negotiate professionally. Good
            luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/companies/mnc-salary-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              MNC Salary Guide
            </Link>
            <Link
              href="/tools/salary-calculator"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Salary Calculator
            </Link>
            <Link
              href="/blog/salary-negotiation-freshers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Salary Negotiation Guide
            </Link>
            <Link
              href="/companies/mnc-placement-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              MNC Placement Guide
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
                Based on insights from HR managers and successful salary
                negotiations at top MNCs.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
