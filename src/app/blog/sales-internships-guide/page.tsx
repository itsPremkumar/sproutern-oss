import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Handshake,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Phone,
  DollarSign,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sales & Business Development Internships',
  description:
    'Break into sales and BD with this comprehensive guide. Learn required skills and how to land your first sales internship.',
  keywords: [
    'sales internship',
    'business development internship',
    'bdr intern',
    'sdr internship',
    'sales career',
  ],
  openGraph: {
    title: 'Sales & BD Internships: Complete Guide',
    description: 'Start your sales career.',
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
          <div className="mb-4 flex items-center gap-2 text-emerald-600">
            <Handshake className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Sales & Business Development Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Sales is the lifeblood of every business. Learn how to break into
            this high-earning career path.
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

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Sales vs BD: What's Different
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills
              </a>
            </li>
            <li>
              <a
                href="#tasks"
                className="text-primary hover:underline"
              >
                3. What Sales Interns Do
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                4. Top Companies
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                5. Salary & Commissions
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
              <span>Sales skills are transferable to any industry</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                High-performance sales roles have uncapped earning potential
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Rejection handling is the #1 skill to develop</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>SaaS sales is the fastest-growing segment</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Sales vs BD: What's Different
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">Sales (SDR/BDR)</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• Closing deals with customers</li>
                <li>• Meeting targets and quotas</li>
                <li>• Product demos and pitches</li>
                <li>• Direct revenue generation</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-600">Business Development</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• Building partnerships</li>
                <li>• Market expansion</li>
                <li>• Strategic relationships</li>
                <li>• Long-term growth focus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Communication:</strong> Clear, persuasive, confident
            </li>
            <li>
              <strong>Resilience:</strong> Handling rejection positively
            </li>
            <li>
              <strong>Listening:</strong> Understanding customer needs
            </li>
            <li>
              <strong>Goal orientation:</strong> Driven by targets
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>CRM tools (Salesforce, HubSpot)</li>
            <li>Cold calling experience</li>
            <li>Negotiation basics</li>
            <li>Industry knowledge (tech, finance, etc.)</li>
          </ul>
        </section>

        {/* Section 3: Tasks */}
        <section
          id="tasks"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-primary" />
            3. What Sales Interns Do
          </h2>

          <ul>
            <li>Cold calling and cold emailing prospects</li>
            <li>Qualifying leads and scheduling demos</li>
            <li>CRM data entry and management</li>
            <li>Assisting in sales presentations</li>
            <li>Market research and lead generation</li>
            <li>Following up with prospects</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Track your numbers from day one. "I made
              500 calls and generated 20 qualified leads" is powerful on a
              resume.
            </div>
          </div>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>SaaS Companies</h3>
          <p>Freshworks, Zoho, Chargebee, Razorpay, Salesforce</p>

          <h3>Startups</h3>
          <p>Most startups need sales—search for "SDR" or "BDR" roles</p>

          <h3>Traditional</h3>
          <p>FMCG (HUL, P&G), Insurance, Banking</p>
        </section>

        {/* Section 5: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            5. Salary & Commissions
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Fixed</th>
                  <th className="p-3 text-left">Variable (OTE)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Intern</td>
                  <td className="p-3">₹10K-20K/month</td>
                  <td className="p-3">Sometimes incentives</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">SDR (0-2 yrs)</td>
                  <td className="p-3">₹4-8 LPA</td>
                  <td className="p-3">₹2-4 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AE (2-5 yrs)</td>
                  <td className="p-3">₹10-20 LPA</td>
                  <td className="p-3">₹10-20 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Sales Manager</td>
                  <td className="p-3">₹20-40 LPA</td>
                  <td className="p-3">₹20-40 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                Is sales a good career for introverts?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! Many top salespeople are introverts. Good listening and
                preparation can outperform extroversion.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Do I need an MBA for sales?</p>
              <p className="mt-2 text-muted-foreground">
                No. Sales is results-driven. Your performance matters more than
                your degree.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Sales Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-emerald-600">
                SDR (Sales Development Rep)
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Entry-level role focused on generating qualified leads through
                cold outreach. The starting point for most sales careers.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹10K-25K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Metric:</span>
                  <span className="font-semibold">
                    Qualified meetings booked
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">SDR → AE → Manager</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-emerald-600">
                BDR (Business Development Rep)
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Similar to SDR but may focus on enterprise or strategic
                accounts. Sometimes includes partnership development.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹15K-30K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Metric:</span>
                  <span className="font-semibold">Pipeline generated</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">BDR → Enterprise AE</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-emerald-600">
                Account Executive (AE)
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Closes deals. After 1-2 years as SDR, you move to AE where you
                own the full sales cycle and quota.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical CTC:</span>
                  <span className="font-semibold">
                    ₹15-40 LPA (with variable)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Key Metric:</span>
                  <span className="font-semibold">Revenue closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">
                    AE → Sr. AE → Sales Manager
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cold Call Script */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-primary" />
            Sample Cold Call Script
          </h2>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <h4 className="mb-3 font-bold">Opening (10 seconds)</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              "Hi [Name], this is [Your name] from [Company]. Did I catch you at
              a bad time?"
            </p>

            <h4 className="mb-3 font-bold">Permission (5 seconds)</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              "I'm reaching out because we help companies like yours [solve
              specific problem]. Can I take 30 seconds to explain why I'm
              calling?"
            </p>

            <h4 className="mb-3 font-bold">Value Proposition (30 seconds)</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              "We work with [similar companies] who were struggling with [pain
              point]. After using our solution, they achieved [specific result].
              I'm wondering if you're facing similar challenges?"
            </p>

            <h4 className="mb-3 font-bold">Qualifying Question</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              "Are you currently doing anything to address [pain point]?"
            </p>

            <h4 className="mb-3 font-bold">Close for Meeting</h4>
            <p className="text-sm text-muted-foreground">
              "Would it make sense to schedule a 15-minute call to explore if we
              could help? How does [specific day/time] look?"
            </p>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Objections & Responses
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">"I'm not interested"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "I understand. May I ask what you're currently using to solve
                [problem]? Many of our customers felt the same way initially,
                but found our approach different because..."
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">"We don't have budget"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "I appreciate that. Budget is always a consideration. If I could
                show you how our clients typically save/earn more than they
                spend, would that be worth a quick conversation?"
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">"Send me an email"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "I'd be happy to. What specifically would you like me to include
                so you can evaluate if this is worth exploring?" (Get qualifying
                info first)
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "We're already using a competitor"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                "Great, that shows you understand the importance of solving
                this. Many of our customers switched from [competitor] because
                of [key differentiator]. Would you be open to learning what made
                them switch?"
              </p>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Sales Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                9:00
              </div>
              <div>
                <p className="font-semibold">Team Standup</p>
                <p className="text-sm text-muted-foreground">
                  Share yesterday's numbers, discuss pipeline, align on daily
                  targets.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                9:30
              </div>
              <div>
                <p className="font-semibold">Cold Calling Block</p>
                <p className="text-sm text-muted-foreground">
                  2-3 hour focused calling session. This is where the magic
                  happens. Aim for 50-100 dials.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                12:30
              </div>
              <div>
                <p className="font-semibold">Email Follow-ups</p>
                <p className="text-sm text-muted-foreground">
                  Follow up on yesterday's conversations, send personalized
                  sequences to new leads.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                14:00
              </div>
              <div>
                <p className="font-semibold">CRM & Admin</p>
                <p className="text-sm text-muted-foreground">
                  Update Salesforce/HubSpot, log activities, research prospects
                  for tomorrow.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                15:00
              </div>
              <div>
                <p className="font-semibold">Second Calling Block</p>
                <p className="text-sm text-muted-foreground">
                  Afternoon calls—sometimes better connection rates. Focus on
                  callbacks and warm leads.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-emerald-600">
                17:30
              </div>
              <div>
                <p className="font-semibold">Learning & Prep</p>
                <p className="text-sm text-muted-foreground">
                  Review recordings, practice scripts, prepare for tomorrow.
                  Best time to improve skills.
                </p>
              </div>
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
                How many calls should I make per day?
              </h3>
              <p className="text-muted-foreground">
                Most SDRs aim for 50-100 dials per day, resulting in 5-15
                conversations and 1-3 meetings booked. Quality matters, but
                volume is essential early on.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is cold calling still effective?
              </h3>
              <p className="text-muted-foreground">
                Yes! While harder than before, cold calling remains one of the
                highest-converting channels when done right. The key is
                research, personalization, and value-first messaging.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the typical SDR-to-AE promotion timeline?
              </h3>
              <p className="text-muted-foreground">
                12-24 months for top performers. Some companies have faster
                tracks (6-12 months) for high achievers. Consistently hitting
                quota accelerates promotion.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I learn Salesforce?
              </h3>
              <p className="text-muted-foreground">
                Yes, it's the most used CRM. Get Trailhead (free) certified.
                Also learn HubSpot—many startups use it. CRM proficiency is
                expected.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What industries pay the best for sales?
              </h3>
              <p className="text-muted-foreground">
                SaaS and enterprise software pay highest (₹30-60 LPA OTE for
                senior AEs). Fintech, cybersecurity, and cloud sales also pay
                well. FMCG and traditional industries pay less but offer
                stability.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I handle rejection?
              </h3>
              <p className="text-muted-foreground">
                Reframe it: you're not being rejected personally—the timing or
                fit isn't right. Track your conversion rates so you know that
                100 "no"s lead to 10 "yes"es. It's just math.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-5 dark:bg-emerald-950">
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                "From 0 to ₹50L+ in 3 years..."
              </p>
              <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
                "Started as an SDR intern at a SaaS startup. Made 100 calls/day,
                got promoted to AE in 14 months. Closed my first ₹1 Cr deal at
                24. Now earning ₹50L+ with variable comp." — Akash, Bengaluru
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-5 dark:bg-emerald-950">
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                "Arts background, now in tech sales..."
              </p>
              <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
                "I was an English literature graduate with no 'technical'
                skills. But I could communicate well. Got an SDR internship at
                Freshworks. My ability to explain complex products simply became
                my superpower." — Meera, Chennai
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-5 dark:bg-emerald-950">
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">
                "Rejected 10 times, then hired..."
              </p>
              <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
                "I was rejected by 10 companies for sales roles. Finally got an
                internship at a small startup. 2 years later, I'm a top
                performer at Razorpay. The rejections taught me resilience—the
                core sales skill." — Rahul, Mumbai
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Sales Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Comfortable making cold calls</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can handle rejection without getting discouraged</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know basic CRM (Salesforce/HubSpot)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have a good phone presence</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand the product/industry you'll be selling</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can write clear, persuasive emails</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Goal-oriented and competitive</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Prepared to track and improve your numbers daily</span>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Best Learning Resources
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Fanatical Prospecting - Jeb Blount</li>
                <li>• SPIN Selling - Neil Rackham</li>
                <li>• The Challenger Sale - Matthew Dixon</li>
                <li>• Never Split the Difference - Chris Voss</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Podcasts</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• The Sales Hacker Podcast</li>
                <li>• Revenue Builders</li>
                <li>• Make It Happen Mondays</li>
                <li>• 30 Minutes to President's Club</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Free Certifications</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Salesforce Trailhead</li>
                <li>• HubSpot Sales Software</li>
                <li>• LinkedIn Sales Navigator</li>
                <li>• Gong.io Resources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sales Metrics */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Key Sales Metrics to Track
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Metric</th>
                  <th className="border p-3 text-left font-semibold">
                    What It Measures
                  </th>
                  <th className="border p-3 text-left font-semibold">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Dials/Day</td>
                  <td className="border p-3">Activity volume</td>
                  <td className="border p-3">50-100</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Connect Rate</td>
                  <td className="border p-3">% of dials answered</td>
                  <td className="border p-3">10-20%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Conversations/Day
                  </td>
                  <td className="border p-3">Actual talks</td>
                  <td className="border p-3">5-15</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Meetings Booked</td>
                  <td className="border p-3">Qualified demos</td>
                  <td className="border p-3">1-3/day</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Show Rate</td>
                  <td className="border p-3">% of meetings attended</td>
                  <td className="border p-3">70-80%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">SQL Rate</td>
                  <td className="border p-3">% that become qualified</td>
                  <td className="border p-3">30-50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Email Templates */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Cold Email Templates
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-semibold">Template 1: Pain Point Focus</p>
              <div className="rounded bg-muted p-3 text-sm text-muted-foreground">
                <p>
                  <strong>Subject:</strong> [Company] + [Pain Point]?
                </p>
                <p className="mt-2">Hi [Name],</p>
                <p className="mt-2">
                  I noticed [specific observation about their company]. Many
                  [role] I talk to struggle with [pain point].
                </p>
                <p className="mt-2">
                  We help companies like [similar customer] achieve [specific
                  result].
                </p>
                <p className="mt-2">
                  Worth a 15-min call this week to see if we can help?
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <p className="mb-2 font-semibold">Template 2: Social Proof</p>
              <div className="rounded bg-muted p-3 text-sm text-muted-foreground">
                <p>
                  <strong>Subject:</strong> How [Similar Company] did [X]
                </p>
                <p className="mt-2">Hi [Name],</p>
                <p className="mt-2">
                  Just helped [Similar Company] achieve [specific result in
                  timeframe].
                </p>
                <p className="mt-2">
                  Given [Company's] focus on [relevant priority], thought this
                  might be relevant.
                </p>
                <p className="mt-2">Can I share how they did it?</p>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <p className="mb-2 font-semibold">Template 3: Breakup Email</p>
              <div className="rounded bg-muted p-3 text-sm text-muted-foreground">
                <p>
                  <strong>Subject:</strong> Should I close your file?
                </p>
                <p className="mt-2">Hi [Name],</p>
                <p className="mt-2">
                  I've reached out a few times but haven't heard back. Usually
                  that means one of three things:
                </p>
                <p className="mt-2">
                  1. Wrong timing
                  <br />
                  2. Not the right person
                  <br />
                  3. Not relevant at all
                </p>
                <p className="mt-2">
                  If #3, no worries—just let me know and I'll close your file.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Sales Intern Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Talking too much, listening too little
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  The best salespeople listen 70% of the time. Ask questions,
                  understand needs, then present solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not following up enough
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  80% of sales require 5+ follow-ups. Most give up after 2.
                  Persistence pays off—be helpful, not annoying.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Taking rejection personally
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  It's not about you—it's about fit and timing. Learn from each
                  "no" and move on quickly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not tracking metrics
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  What gets measured gets improved. Track everything so you know
                  where to focus improvement efforts.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Your Sales Career</h2>
          <p>
            Sales is one of the fastest paths to high income. Learn to handle
            rejection, track your numbers, and always be closing.
          </p>
          <p>
            The best part? Sales skills transfer to everything—entrepreneurship,
            leadership, even life. The ability to persuade and negotiate is
            invaluable.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best salespeople are problem-solvers in disguise. Be one. 💰
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/cold-email-templates-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cold Email Templates
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking Guide
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
                Based on insights from sales professionals at SaaS companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
