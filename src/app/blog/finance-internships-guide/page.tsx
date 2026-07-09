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
  Users,
  Target,
  Building,
  Calculator,
  PieChart,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finance Internships: Complete Guide',
  description:
    'Break into finance with this comprehensive internship guide. Learn about investment banking, equity research, corporate finance, and more.',
  keywords: [
    'finance internship india',
    'investment banking internship',
    'equity research internship',
    'ca internship',
    'finance career',
  ],
  openGraph: {
    title: 'Finance Internships: Complete Guide',
    description: 'Start your finance career with the right internship.',
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
              Finance Career
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Finance Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Finance offers diverse career paths from investment banking to
            fintech. Learn how to break into this competitive field.
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
              <span>18 min read</span>
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
                1. Types of Finance Roles
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
                href="#prep"
                className="text-primary hover:underline"
              >
                3. How to Prepare
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
                href="#interview"
                className="text-primary hover:underline"
              >
                5. Interview Process
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
              <span>Excel is non-negotiable—master it before applying</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Financial modeling skills set you apart</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                CFA/FRM certifications help but aren't required for internships
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Fintech is disrupting traditional finance—learn Python
              </span>
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
            1. Types of Finance Roles
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Investment Banking</p>
              <p className="text-muted-foreground">
                M&A, IPOs, deal-making. High-pressure, high-reward.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Equity Research</p>
              <p className="text-muted-foreground">
                Analyze stocks, write reports, make recommendations.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Corporate Finance</p>
              <p className="text-muted-foreground">
                FP&A, budgeting, internal financial planning.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Fintech</p>
              <p className="text-muted-foreground">
                Tech-first finance: payments, lending, wealthtech.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Excel:</strong> Advanced formulas, pivot tables, macros
            </li>
            <li>
              <strong>Financial statements:</strong> Read and analyze P&L,
              balance sheet, cash flow
            </li>
            <li>
              <strong>Valuation basics:</strong> DCF, comparables, precedents
            </li>
            <li>
              <strong>Attention to detail:</strong> Finance is unforgiving of
              errors
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>Python for data analysis</li>
            <li>PowerPoint for presentations</li>
            <li>Bloomberg terminal knowledge</li>
            <li>SQL for fintech roles</li>
          </ul>
        </section>

        {/* Section 3: Prep */}
        <section
          id="prep"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PieChart className="h-6 w-6 text-primary" />
            3. How to Prepare
          </h2>

          <ul>
            <li>
              <strong>Excel bootcamp:</strong> Take WSO/CFI courses
            </li>
            <li>
              <strong>Stock pitch:</strong> Prepare 1-2 stock analyses
            </li>
            <li>
              <strong>Read financial news:</strong> Economic Times, Mint,
              Bloomberg
            </li>
            <li>
              <strong>Mock interviews:</strong> Practice technical questions
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Build 1-2 financial models from scratch.
              It's the best way to learn and impress interviewers.
            </div>
          </div>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>Investment Banks</h3>
          <p>
            Goldman Sachs, Morgan Stanley, JPMorgan, Citi, HSBC, Kotak IB,
            Avendus
          </p>

          <h3>Asset Management</h3>
          <p>Blackrock, HDFC AMC, SBI MF, ICICI Prudential, Nippon India</p>

          <h3>Fintech</h3>
          <p>Razorpay, PhonePe, Zerodha, CRED, Groww, Paytm, Jupiter</p>
        </section>

        {/* Section 5: Interview */}
        <section
          id="interview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Interview Process
          </h2>

          <ol>
            <li>
              <strong>Resume Screen:</strong> CGPA matters more in finance
            </li>
            <li>
              <strong>Technical Round:</strong> Valuation, accounting, market
              questions
            </li>
            <li>
              <strong>Case Study/Stock Pitch:</strong> Analyze a company
            </li>
            <li>
              <strong>Fit Interview:</strong> Why finance? Why this firm?
            </li>
          </ol>
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
              <p className="font-bold">Is a commerce background required?</p>
              <p className="mt-2 text-muted-foreground">
                Helpful but not required. Many engineers work in finance. You'll
                need to learn accounting basics.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I pursue CA or CFA?</p>
              <p className="mt-2 text-muted-foreground">
                CA for audit/tax path. CFA for investment roles. For
                internships, focus on skills first; certifications can come
                later.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            Finance Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-green-600">
                Investment Banking Analyst
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                The most prestigious and demanding path. You'll work on mergers,
                acquisitions, IPOs, and debt offerings.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Work Hours:</span>
                  <span className="font-semibold">80-100+ hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹60K-1.2L/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Financial modeling, valuation
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-green-600">
                Equity Research Associate
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Analyze companies, write research reports, and make buy/sell
                recommendations. More analytical, less transactional.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Work Hours:</span>
                  <span className="font-semibold">50-70 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹40K-80K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Stock analysis, report writing
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-green-600">
                Corporate Finance (FP&A)
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Work within companies on budgeting, forecasting, and internal
                financial planning. Better work-life balance.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Work Hours:</span>
                  <span className="font-semibold">45-55 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹25K-50K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Budgeting, forecasting, Excel
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-green-600">
                Fintech Product/Analytics
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Blend of finance and technology. Work on payments, lending, or
                wealth management products.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Work Hours:</span>
                  <span className="font-semibold">45-55 hours/week</span>
                </div>
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹40K-80K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    Python, SQL, product sense
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Data */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <IndianRupee className="h-6 w-6 text-primary" />
            Finance Internship Stipends
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Role/Company Type
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend Range
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Bulge Bracket IB</td>
                  <td className="border p-3">₹80K-1.5L/month</td>
                  <td className="border p-3">10-12 weeks</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Domestic IB (Kotak, Avendus)
                  </td>
                  <td className="border p-3">₹50K-80K/month</td>
                  <td className="border p-3">8-12 weeks</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Big 4 (Deals/Advisory)
                  </td>
                  <td className="border p-3">₹40K-60K/month</td>
                  <td className="border p-3">8-12 weeks</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Asset Management</td>
                  <td className="border p-3">₹30K-50K/month</td>
                  <td className="border p-3">8-12 weeks</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Fintech Companies
                  </td>
                  <td className="border p-3">₹40K-80K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Corporate Finance
                  </td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">2-6 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Financial Modeling Skills */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            Financial Modeling Essentials
          </h2>

          <p>
            Financial modeling is THE core skill for most finance roles. Here's
            what you need to learn:
          </p>

          <h3>1. Three-Statement Model</h3>
          <ul>
            <li>Connect Income Statement, Balance Sheet, Cash Flow</li>
            <li>Understand how changes flow through</li>
            <li>Practice building from scratch</li>
          </ul>

          <h3>2. DCF (Discounted Cash Flow)</h3>
          <ul>
            <li>Project future cash flows (5-10 years)</li>
            <li>Calculate terminal value</li>
            <li>Apply appropriate discount rate (WACC)</li>
          </ul>

          <h3>3. Comparable Company Analysis</h3>
          <ul>
            <li>Identify similar companies</li>
            <li>Calculate trading multiples (EV/EBITDA, P/E)</li>
            <li>Apply multiples to target company</li>
          </ul>

          <h3>4. Precedent Transactions</h3>
          <ul>
            <li>Find similar M&A deals</li>
            <li>Calculate transaction multiples</li>
            <li>Adjust for deal-specific factors</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Build a complete model for a real Indian
              company (TCS, Reliance, HDFC). This becomes your portfolio piece
              for interviews.
            </div>
          </div>
        </section>

        {/* Technical Interview Questions */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Technical Questions
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "Walk me through the 3 financial statements"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Income statement shows profitability. Balance sheet shows assets
                and liabilities at a point in time. Cash flow shows actual cash
                movements. They're connected through net income and changes in
                working capital.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "If depreciation increases by ₹10, what happens to each
                statement?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Income: Operating income ↓ ₹10, Net income ↓ ₹7 (after 30% tax).
                Cash flow: Add back ₹10 depreciation. Net cash up ₹3. Balance
                sheet: PP&E ↓ ₹10, Retained earnings ↓ ₹7, Cash ↑ ₹3.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">"How do you value a company?"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Three main methods: 1) DCF (intrinsic value based on future cash
                flows), 2) Comparable companies (relative value using trading
                multiples), 3) Precedent transactions (M&A deal multiples).
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">"What is WACC?"</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Weighted Average Cost of Capital. It's the blended cost of a
                company's debt and equity financing. Used as the discount rate
                in DCF. Formula: (E/V × Re) + (D/V × Rd × (1-T))
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">
                "Company A has ₹100Cr revenue, 20% EBITDA margin. What's
                enterprise value at 10x EBITDA?"
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                EBITDA = ₹100Cr × 20% = ₹20Cr. Enterprise Value = ₹20Cr × 10 =
                ₹200Cr.
              </p>
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
              <h4 className="mb-2 font-bold">Free Resources</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Investopedia (conceptual understanding)</li>
                <li>• Wall Street Oasis forums (interview prep)</li>
                <li>• YouTube: Aswath Damodaran (valuation master)</li>
                <li>• Zerodha Varsity (Indian markets)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Paid Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • CFI (Corporate Finance Institute) - Financial modeling
                </li>
                <li>• WSO Premium - Investment banking prep</li>
                <li>• Udemy: Excel for Finance professionals</li>
                <li>• IMS Proschool - Financial modeling India</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Investment Banking: Valuation, LBO, M&A - Rosenbaum</li>
                <li>• The Intelligent Investor - Benjamin Graham</li>
                <li>• Financial Modeling - Simon Benninga</li>
                <li>• Monkey Business - Rolfe & Troob (IB culture)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Certifications: What's Worth It?
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Certification
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Best For
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Time/Cost
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Worth It?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">CFA</td>
                  <td className="border p-3">Equity research, asset mgmt</td>
                  <td className="border p-3">3 levels, ₹4-5L total</td>
                  <td className="border p-3 text-green-600">
                    Yes for investment roles
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">CA</td>
                  <td className="border p-3">Audit, tax, CFO track</td>
                  <td className="border p-3">3-4 years</td>
                  <td className="border p-3 text-green-600">
                    Yes for accounting path
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">FRM</td>
                  <td className="border p-3">Risk management</td>
                  <td className="border p-3">2 levels, ₹1-1.5L</td>
                  <td className="border p-3 text-yellow-600">Nice to have</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">FMVA</td>
                  <td className="border p-3">Financial modeling</td>
                  <td className="border p-3">Self-paced, ₹30-40K</td>
                  <td className="border p-3 text-green-600">
                    Great for skills
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>For internships:</strong> Focus on skills first.
              Certifications matter more for full-time roles. Passing CFA L1
              before graduation does help signal commitment.
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
                Can engineers get into investment banking?
              </h3>
              <p className="text-muted-foreground">
                Yes! IITs and NITs place well into IB. Your quantitative skills
                are valued. You'll need to learn accounting and valuation, but
                that's learnable. Many top IB analysts are engineers.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How important is college brand in finance?
              </h3>
              <p className="text-muted-foreground">
                Very important for IB/PE. Top banks recruit heavily from IIMs,
                ISB, IITs, SRCC. But fintech and corporate finance are more
                accessible. Skills + certifications can compensate.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the work-life balance like in IB?
              </h3>
              <p className="text-muted-foreground">
                Demanding. Expect 80-100 hour weeks during deals. Weekends often
                aren't free. It's a 2-3 year grind, then exit opportunities open
                up (PE, hedge funds, corporate roles with better hours).
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I prepare a stock pitch?
              </h3>
              <p className="text-muted-foreground">
                Pick a company you know well. Analyze financials (3 years),
                understand the business model, identify 2-3 key catalysts,
                calculate fair value using DCF/comparables, and have a clear
                Buy/Sell recommendation with target price.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I get a Big 4 internship vs IB?
              </h3>
              <p className="text-muted-foreground">
                Big 4 (Deals/Transaction Services) is a solid path to IB. Many
                people lateral from Big 4 to banks after 2-3 years. It's a
                longer route but very common. Audit is harder to transition
                from.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is fintech better than traditional finance?
              </h3>
              <p className="text-muted-foreground">
                Different, not better. Fintech offers faster growth, more
                innovation, better work-life balance, and tech exposure.
                Traditional finance offers deeper financial training, clearer
                career paths, and higher prestige for some roles.
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
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "From engineering to Goldman Sachs..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I'm a mechanical engineer from IIT Roorkee. Spent 6 months
                learning financial modeling, did 2 boutique IB internships, and
                landed Goldman M&A. The technical skills from engineering helped
                a lot." — Arjun
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Fintech changed my trajectory..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I joined Razorpay as a product intern straight from college.
                The combination of finance domain and tech skills was perfect
                for me. Now leading a payments product team at 25." — Sneha, IIM
                Calcutta
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "CFA + persistence paid off..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I'm from a Tier-2 college. Passed CFA L1 while in final year,
                did 3 internships at smaller funds, and finally got into HDFC
                AMC for equity research. College brand matters less if you have
                skills and persistence." — Vikram
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Finance Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Advanced Excel skills (pivot tables, VLOOKUP, macros)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can read and analyze financial statements</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Built at least 1 financial model from scratch</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Prepared 1-2 stock pitches</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand basic valuation methods (DCF, comparables)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Read financial news regularly</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Resume highlights finance-relevant skills</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Practiced answering technical interview questions</span>
            </div>
          </div>
        </section>

        {/* 30-Day Action Plan */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Your 30-Day Finance Prep Plan
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                W1
              </div>
              <div>
                <p className="font-semibold">Week 1: Excel Foundations</p>
                <p className="text-sm text-muted-foreground">
                  Master VLOOKUP, pivot tables, and basic charts. Take a free
                  Excel course on YouTube or Coursera.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                W2
              </div>
              <div>
                <p className="font-semibold">Week 2: Financial Statements</p>
                <p className="text-sm text-muted-foreground">
                  Learn to read and analyze P&L, Balance Sheet, Cash Flow. Pick
                  3 companies and study their annual reports.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                W3
              </div>
              <div>
                <p className="font-semibold">Week 3: Valuation Basics</p>
                <p className="text-sm text-muted-foreground">
                  Understand DCF, comparable companies, and precedent
                  transactions. Watch Aswath Damodaran's valuation lectures.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                W4
              </div>
              <div>
                <p className="font-semibold">Week 4: Build Your First Model</p>
                <p className="text-sm text-muted-foreground">
                  Create a 3-statement model for a company. Prepare a stock
                  pitch. Start applying for internships.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Your Finance Journey</h2>
          <p>
            Finance rewards those who are detail-oriented, analytical, and
            hungry to learn. Start with Excel, understand the basics, and apply
            widely.
          </p>
          <p>
            Whether you choose the high-intensity IB path or the tech-forward
            fintech route, building strong fundamentals now will pay dividends
            throughout your career.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best time to start learning finance is now. Open that Excel
            sheet. 💰
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/salary-negotiation-freshers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Salary Negotiation Guide
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Behavioral Interview Prep
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization
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
                Based on insights from finance professionals across India.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
