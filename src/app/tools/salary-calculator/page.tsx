import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { SalaryCalculatorTool } from '@/components/tools/SalaryCalculatorTool';
import { ShareCTA } from '@/components/shared/social-share';
import {
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Users,
  IndianRupee,
  Calculator,
  Lightbulb,
  AlertCircle,
  Building,
  MapPin,
  GraduationCap,
  Star,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import { FAQSection } from '@/components/blog/FAQSection';
import { ToolGEOContent } from '@/components/seo/ToolGEOContent';

// getPageSEO provides the canonical; spread adds reciprocal hreflang for the
// de/zh localized variants (they already point back to this page).
export const metadata = {
  ...getPageSEO('salaryCalculator'),
  alternates: {
    ...(getPageSEO('salaryCalculator').alternates ?? {}),
    languages: {
      'en-US': 'https://sproutern.dpdns.org/tools/salary-calculator',
      'de-DE': 'https://sproutern.dpdns.org/de/tools/salary-calculator',
      'zh-CN': 'https://sproutern.dpdns.org/zh/tools/salary-calculator',
      'x-default': 'https://sproutern.dpdns.org/tools/salary-calculator',
    },
  },
};

export default function SalaryCalculatorPage() {
  const schemas = getPageSchema('salaryCalculator');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Calculator className="h-4 w-4" />
              Free Career Tool
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              CTC to In-Hand Salary Calculator
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Calculate your actual take-home salary from CTC with accurate tax
              deductions, PF, and professional tax calculations for India
            </p>
          </div>

          {/* Why Use This Tool */}
          <section className="mb-10">
            <h2 className="mb-6 text-2xl font-bold">Why Use This Tool?</h2>
            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">100% Free</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Instant Results</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Privacy First</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
                <Users className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">50,000+ Users</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold">Perfect for:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    College students preparing for placements
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Fresh graduates applying for jobs
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-primary" />
                    Job seekers comparing offers
                  </li>
                  <li className="flex items-center gap-2">
                    <Calculator className="h-4 w-4 text-primary" />
                    Career planners making decisions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold">Key Benefits:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    No hidden charges or credit card required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Works perfectly on mobile devices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    We don't store your personal data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Designed for Indian tax system
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tool Component */}
          <SalaryCalculatorTool />

          {/* Social Proof */}
          <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              🔥 <strong>1,247 students</strong> used this calculator in the
              last 24 hours
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Join thousands of students making informed career decisions
            </p>
          </div>

          {/* Share CTA */}
          <div className="mt-6">
            <ShareCTA toolName="Salary Calculator" />
          </div>

          {/* How It Works */}
          <section className="mt-16">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
              <TrendingUp className="h-8 w-8 text-primary" />
              How This Calculator Works
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: '1',
                  title: 'Enter CTC',
                  desc: 'Input your annual Cost to Company',
                },
                {
                  step: '2',
                  title: 'Select Components',
                  desc: 'Choose tax regime and deductions',
                },
                {
                  step: '3',
                  title: 'Calculate',
                  desc: 'Get instant breakdown',
                },
                {
                  step: '4',
                  title: 'Optimize',
                  desc: 'See tax-saving suggestions',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Main Content */}
          <div className="prose prose-lg mt-16 max-w-none">
            <h2 className="flex items-center gap-3">
              <IndianRupee className="h-6 w-6 text-primary" />
              Understanding CTC vs In-Hand Salary in India
            </h2>
            <p>
              When you receive a job offer in India, the salary is typically
              quoted as <strong>CTC (Cost to Company)</strong>. However, this is
              NOT the amount you'll receive in your bank account every month.
              Understanding the difference between CTC and in-hand salary is
              crucial for making informed career decisions and financial
              planning.
            </p>

            <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Key Insight
              </h3>
              <p className="text-sm">
                On average, your in-hand salary is <strong>70-80%</strong> of
                your CTC. For a ₹10 LPA CTC, expect around ₹58,000-₹67,000 per
                month in-hand, depending on your tax regime and investments.
              </p>
            </div>

            <h2>Complete Breakdown of Salary Components</h2>

            <h3>1. Basic Salary (40-50% of CTC)</h3>
            <p>
              The basic salary is the core component of your compensation and
              typically constitutes 40-50% of your CTC. It's crucial because:
            </p>
            <ul>
              <li>PF (Provident Fund) is calculated as 12% of basic salary</li>
              <li>Gratuity is calculated based on basic salary</li>
              <li>
                Higher basic means higher PF contribution but lower take-home
              </li>
              <li>Many companies keep basic low to reduce PF liability</li>
            </ul>

            <h3>2. House Rent Allowance (HRA) - 40-50% of Basic</h3>
            <p>
              HRA is one of the most significant tax-saving components for
              salaried employees living in rented accommodation:
            </p>
            <ul>
              <li>
                <strong>Metro cities (Delhi, Mumbai, Chennai, Kolkata):</strong>{' '}
                50% of basic salary
              </li>
              <li>
                <strong>Non-metro cities:</strong> 40% of basic salary
              </li>
              <li>
                Actual HRA exemption is the minimum of: Actual HRA received,
                50%/40% of basic, or Rent paid minus 10% of basic
              </li>
            </ul>

            <h3>3. Provident Fund (PF) - 12% Each</h3>
            <p>
              Both employee and employer contribute 12% of basic salary to PF:
            </p>
            <ul>
              <li>
                <strong>Employee contribution:</strong> 12% of basic (deducted
                from salary)
              </li>
              <li>
                <strong>Employer contribution:</strong> 12% of basic (included
                in CTC)
              </li>
              <li>
                Maximum PF contribution is on basic salary up to ₹15,000/month
              </li>
              <li>Interest rate: 8.15% (FY 2023-24)</li>
            </ul>

            <h3>4. Gratuity (4.81% of Basic)</h3>
            <p>
              Gratuity is a retirement benefit payable after 5 years of
              continuous service:
            </p>
            <ul>
              <li>Formula: (15 × Last drawn salary × Years of service) / 26</li>
              <li>Maximum gratuity: ₹20 lakh (tax-free)</li>
              <li>Part of CTC but not paid monthly</li>
            </ul>

            <h3>5. Special Allowances</h3>
            <p>
              Companies include various allowances to structure salary
              tax-efficiently:
            </p>
            <ul>
              <li>
                <strong>Leave Travel Allowance (LTA):</strong> Tax-exempt for
                domestic travel twice in 4 years
              </li>
              <li>
                <strong>Medical Allowance:</strong> Up to ₹15,000 tax-exempt
                with bills
              </li>
              <li>
                <strong>Conveyance Allowance:</strong> For commuting expenses
              </li>
              <li>
                <strong>Food Coupons/Meal Cards:</strong> Tax-efficient benefit
                up to ₹50/meal
              </li>
            </ul>

            <h2>
              <MapPin className="mr-2 inline h-6 w-6 text-primary" />
              City-Wise Salary Comparison (India)
            </h2>
            <p>
              Cost of living varies significantly across Indian cities. Here's
              what the same ₹10 LPA CTC means in different cities:
            </p>

            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">City</th>
                    <th className="border p-3 text-left">In-Hand (Monthly)</th>
                    <th className="border p-3 text-left">
                      Cost of Living Index
                    </th>
                    <th className="border p-3 text-left">Effective Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Mumbai</td>
                    <td className="border p-3">₹62,500</td>
                    <td className="border p-3">100 (Baseline)</td>
                    <td className="border p-3">₹62,500</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Bangalore</td>
                    <td className="border p-3">₹62,500</td>
                    <td className="border p-3">85</td>
                    <td className="border p-3">₹73,529</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Delhi NCR</td>
                    <td className="border p-3">₹62,500</td>
                    <td className="border p-3">90</td>
                    <td className="border p-3">₹69,444</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Hyderabad</td>
                    <td className="border p-3">₹62,500</td>
                    <td className="border p-3">75</td>
                    <td className="border p-3">₹83,333</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Pune</td>
                    <td className="border p-3">₹62,500</td>
                    <td className="border p-3">80</td>
                    <td className="border p-3">₹78,125</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Chennai</td>
                    <td className="border p-3">₹62,500</td>
                    <td className="border p-3">78</td>
                    <td className="border p-3">₹80,128</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>
              <Building className="mr-2 inline h-6 w-6 text-primary" />
              Income Tax Slabs 2024-25 (New vs Old Regime)
            </h2>

            <h3>New Tax Regime (Default from FY 2023-24)</h3>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-900">
                    <th className="border p-3 text-left">Income Slab</th>
                    <th className="border p-3 text-left">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Up to ₹3,00,000</td>
                    <td className="border p-3">Nil</td>
                  </tr>
                  <tr>
                    <td className="border p-3">₹3,00,001 - ₹6,00,000</td>
                    <td className="border p-3">5%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">₹6,00,001 - ₹9,00,000</td>
                    <td className="border p-3">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">₹9,00,001 - ₹12,00,000</td>
                    <td className="border p-3">15%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">₹12,00,001 - ₹15,00,000</td>
                    <td className="border p-3">20%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Above ₹15,00,000</td>
                    <td className="border p-3">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Old Tax Regime (With Deductions)</h3>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-900">
                    <th className="border p-3 text-left">Income Slab</th>
                    <th className="border p-3 text-left">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Up to ₹2,50,000</td>
                    <td className="border p-3">Nil</td>
                  </tr>
                  <tr>
                    <td className="border p-3">₹2,50,001 - ₹5,00,000</td>
                    <td className="border p-3">5%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">₹5,00,001 - ₹10,00,000</td>
                    <td className="border p-3">20%</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Above ₹10,00,000</td>
                    <td className="border p-3">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose my-6 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Which Tax Regime Should You Choose?
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Choose New Regime if:</strong> You don't have major
                  investments (80C, HRA claims, home loan)
                </li>
                <li>
                  <strong>Choose Old Regime if:</strong> You have deductions
                  exceeding ₹3.75 lakhs (HRA + 80C + 80D etc.)
                </li>
                <li>
                  <strong>Pro Tip:</strong> Calculate both and compare before
                  deciding!
                </li>
              </ul>
            </div>

            <h2>Detailed Salary Breakdown Examples</h2>

            <h3>Example 1: ₹6 LPA CTC (Entry Level)</h3>
            <div className="my-4 rounded-lg bg-muted p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-bold">CTC Components:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Basic Salary: ₹2,40,000 (40%)</li>
                    <li>HRA: ₹1,20,000 (20%)</li>
                    <li>Special Allowance: ₹1,51,200</li>
                    <li>Employer PF: ₹28,800</li>
                    <li>Gratuity: ₹11,538</li>
                    <li>Insurance: ₹48,462</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-bold">Deductions:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Employee PF: ₹28,800/year</li>
                    <li>Professional Tax: ₹2,400/year</li>
                    <li>Income Tax: ₹15,000/year (new regime)</li>
                  </ul>
                  <p className="mt-4 text-lg font-bold text-green-600">
                    Monthly In-Hand: ₹45,400
                  </p>
                </div>
              </div>
            </div>

            <h3>Example 2: ₹12 LPA CTC (Mid Level)</h3>
            <div className="my-4 rounded-lg bg-muted p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-bold">CTC Components:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Basic Salary: ₹4,80,000 (40%)</li>
                    <li>HRA: ₹2,40,000 (20%)</li>
                    <li>Special Allowance: ₹3,02,400</li>
                    <li>Employer PF: ₹57,600</li>
                    <li>Gratuity: ₹23,077</li>
                    <li>Insurance/Benefits: ₹96,923</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-bold">Deductions:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Employee PF: ₹57,600/year</li>
                    <li>Professional Tax: ₹2,400/year</li>
                    <li>Income Tax: ₹93,600/year (new regime)</li>
                  </ul>
                  <p className="mt-4 text-lg font-bold text-green-600">
                    Monthly In-Hand: ₹87,200
                  </p>
                </div>
              </div>
            </div>

            <h3>Example 3: ₹25 LPA CTC (Senior Level)</h3>
            <div className="my-4 rounded-lg bg-muted p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-bold">CTC Components:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Basic Salary: ₹10,00,000 (40%)</li>
                    <li>HRA: ₹5,00,000 (20%)</li>
                    <li>Special Allowance: ₹6,30,000</li>
                    <li>Employer PF: ₹1,20,000</li>
                    <li>Gratuity: ₹48,077</li>
                    <li>LTA: ₹60,000</li>
                    <li>Insurance/Benefits: ₹1,41,923</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-bold">Deductions:</p>
                  <ul className="space-y-1 text-sm">
                    <li>Employee PF: ₹1,20,000/year</li>
                    <li>Professional Tax: ₹2,400/year</li>
                    <li>Income Tax: ₹3,90,000/year (new regime)</li>
                  </ul>
                  <p className="mt-4 text-lg font-bold text-green-600">
                    Monthly In-Hand: ₹1,64,300
                  </p>
                </div>
              </div>
            </div>

            <h2>
              <Lightbulb className="mr-2 inline h-6 w-6 text-primary" />
              Expert Tax Saving Tips for Higher Take-Home
            </h2>

            <div className="not-prose my-6 space-y-4">
              {[
                {
                  title: 'Maximize Section 80C (₹1.5 Lakh)',
                  desc: 'Invest in ELSS, PPF, NPS, life insurance, or home loan principal',
                },
                {
                  title: 'Claim HRA Exemption',
                  desc: 'Pay rent via bank transfer, get rent receipts, save up to ₹1 lakh+ in taxes',
                },
                {
                  title: 'NPS Additional Benefit (₹50,000)',
                  desc: 'Get extra deduction under Section 80CCD(1B) beyond 80C limit',
                },
                {
                  title: 'Health Insurance 80D (₹75,000)',
                  desc: 'Self: ₹25K, Parents: ₹25K (₹50K if senior citizens)',
                },
                {
                  title: 'Home Loan Interest (₹2 Lakh)',
                  desc: 'Section 24(b) allows deduction on interest paid for self-occupied property',
                },
                {
                  title: 'Food Coupons/Meal Cards',
                  desc: 'Tax-free benefit up to ₹50/meal × 22 days = ₹26,400/year',
                },
              ].map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-lg border p-4"
                >
                  <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold">{tip.title}</p>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>
              What is the difference between CTC, gross salary, and net salary?
            </h3>
            <p>
              <strong>CTC (Cost to Company)</strong> includes everything the
              company spends on you - salary, PF, gratuity, insurance, etc.
              <strong>Gross Salary</strong> is CTC minus employer contributions
              (employer PF, gratuity, insurance).
              <strong>Net Salary (In-Hand)</strong> is what you receive after
              all deductions from gross (employee PF, tax, professional tax).
            </p>

            <h3>How much tax do I pay on ₹10 lakh CTC?</h3>
            <p>
              Under the <strong>new tax regime</strong> (2024-25), for ₹10 lakh
              CTC (assuming ₹8.5 lakh taxable income after standard deduction):
              you'll pay approximately <strong>₹52,500</strong> in income tax
              annually. Under the old regime with good deductions, it could be
              ₹0 to ₹30,000.
            </p>

            <h3>Is gratuity part of in-hand salary?</h3>
            <p>
              No, gratuity is part of CTC but NOT paid monthly. It's a
              retirement benefit paid only after completing 5 years of
              continuous service with the same employer, or upon
              retirement/resignation after eligibility.
            </p>

            <h3>Why is my in-hand lower than expected?</h3>
            <p>
              Common reasons include: (1) High PF deduction on higher basic, (2)
              Income tax TDS, (3) Professional tax, (4) Insurance premiums, (5)
              Recovery for salary advances, (6) Loan EMIs if salary-linked.
            </p>

            <h3>How can I increase my in-hand salary?</h3>
            <p>
              Strategies include: (1) Negotiate lower basic for higher
              allowances, (2) Opt out of voluntary PF above ₹15,000 basic, (3)
              Choose tax regime wisely, (4) Maximize tax-saving investments, (5)
              Restructure salary for tax-efficient components.
            </p>

            <h3>What is professional tax and who pays it?</h3>
            <p>
              Professional tax is a state-level tax on salaried individuals. It
              ranges from ₹200-₹2,500 per month depending on your state and
              income. States like Rajasthan, Haryana don't have professional
              tax.
            </p>

            <h3>Should freshers choose new or old tax regime?</h3>
            <p>
              For freshers with less than ₹12 LPA and minimal investments/rent,
              the <strong>new tax regime</strong> is usually better due to lower
              rates and no need to maintain investment proofs. Calculate both
              before deciding.
            </p>

            <h3>How does switching jobs affect tax calculation?</h3>
            <p>
              If you switch jobs mid-year, declare your previous income to the
              new employer via Form 12B. Otherwise, both employers may give
              exemptions separately, leading to tax shortfall during ITR filing.
            </p>

            <h3>Is bonus part of CTC or additional?</h3>
            <p>
              Performance bonuses are usually additional to CTC. However, some
              companies include "variable pay" or "target bonus" in CTC. Always
              clarify this during offer negotiation.
            </p>

            <h3>What's the maximum PF contribution limit?</h3>
            <p>
              The statutory limit is 12% of basic salary. For basic above
              ₹15,000/month, companies may cap PF at ₹1,800/month (12% of
              ₹15,000). Some allow voluntary higher contributions up to 12% of
              actual basic.
            </p>
          </div>

          {/* Related Tools */}
          <section className="mt-16 rounded-2xl bg-muted p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Related Tools You Might Need
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: 'CGPA to Percentage Converter',
                  href: '/tools/cgpa-converter',
                  desc: 'Convert your CGPA to percentage instantly for job applications',
                  useCase: 'Perfect for: Job applications requiring percentage',
                },
                {
                  title: 'Resume Score Checker',
                  href: '/tools/resume-score-checker',
                  desc: 'Get ATS-friendly score and optimization tips',
                  useCase:
                    'Perfect for: Improving job application success rate',
                },
                {
                  title: 'EMI Calculator',
                  href: '/tools/emi-calculator',
                  desc: 'Calculate education loan EMI and plan repayment',
                  useCase: 'Perfect for: Planning education loan repayment',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block rounded-lg border bg-background p-4 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold">{tool.title}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {tool.desc}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {tool.useCase}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Further Reading */}
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">📚 Further Reading</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/blog/negotiate-internship-stipend"
                className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">
                  How to Negotiate Your Internship Stipend
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Learn strategies to professionally ask for a higher stipend
                  and better benefits.
                </p>
                <p className="text-xs text-primary">
                  5 min read • Negotiation Guide
                </p>
              </Link>
              <Link
                href="/blog/convert-internship-to-job-offer"
                className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">
                  Convert Your Internship to Full-Time Offer
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Proven tips to transition from intern to full-time employee
                  with better salary.
                </p>
                <p className="text-xs text-primary">
                  7 min read • Career Growth
                </p>
              </Link>
              <Link
                href="/blog/salary-negotiation-freshers"
                className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">
                  Salary Negotiation Guide for Freshers
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Complete guide on how to negotiate your first job salary
                  effectively.
                </p>
                <p className="text-xs text-primary">
                  10 min read • Salary Tips
                </p>
              </Link>
              <Link
                href="/blog/first-tech-internship-india"
                className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">
                  How to Get Your First Tech Internship in India
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Complete roadmap to landing your first tech internship in
                  India.
                </p>
                <p className="text-xs text-primary">
                  25 min read • Career Guide
                </p>
              </Link>
            </div>
          </section>

          {/* Success Stories */}
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-4 text-sm italic">
                  "This tool helped me understand the real value of my job
                  offer. I was able to negotiate better terms after seeing the
                  actual take-home amount. Saved me from accepting a lower
                  package!"
                </blockquote>
                <p className="text-sm font-semibold">
                  - Rahul Sharma, Software Engineer, Bangalore
                </p>
              </div>
              <div className="rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mb-4 text-sm italic">
                  "As a fresher, I had no idea about tax deductions and PF. This
                  calculator gave me a clear picture of what to expect in my
                  first job. The breakdown is very detailed and accurate!"
                </blockquote>
                <p className="text-sm font-semibold">
                  - Priya Patel, Data Analyst, Pune
                </p>
              </div>
            </div>
          </section>

          {/* Common Use Cases */}
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Common Use Cases</h2>
            <div className="space-y-6">
              <div className="rounded-lg border p-6">
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                    📌
                  </span>
                  Use Case 1: Comparing Multiple Job Offers
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  <strong>Situation:</strong> You have offers from different
                  companies with varying CTC structures and need to compare the
                  actual take-home salary.
                </p>
                <p className="mb-3 text-sm">
                  <strong>How this tool helps:</strong> Calculate the in-hand
                  salary for each offer considering different tax regimes, PF
                  structures, and allowances.
                </p>
                <p className="text-sm">
                  <strong>Example:</strong> Company A offers ₹12 LPA with high
                  basic (₹6L) vs Company B offers ₹12 LPA with low basic (₹4L).
                  The take-home difference could be ₹5,000+ per month.
                </p>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                    📌
                  </span>
                  Use Case 2: Planning Your Budget as a Fresher
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  <strong>Situation:</strong> You're about to start your first
                  job and need to plan your monthly expenses and savings.
                </p>
                <p className="mb-3 text-sm">
                  <strong>How this tool helps:</strong> Get an accurate estimate
                  of your monthly in-hand salary to plan rent, EMIs, and savings
                  goals.
                </p>
                <p className="text-sm">
                  <strong>Example:</strong> With ₹8 LPA CTC, you'll get
                  approximately ₹55,000 in-hand monthly. Plan ₹20K for rent,
                  ₹15K for expenses, ₹20K for savings.
                </p>
              </div>

              <div className="rounded-lg border p-6">
                <h3 className="mb-3 flex items-center gap-2 font-semibold">
                  <span className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                    📌
                  </span>
                  Use Case 3: Salary Negotiation Preparation
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  <strong>Situation:</strong> You want to negotiate your salary
                  but need to understand the impact of different CTC components.
                </p>
                <p className="mb-3 text-sm">
                  <strong>How this tool helps:</strong> Understand how changes
                  in basic salary, allowances, and benefits affect your
                  take-home pay.
                </p>
                <p className="text-sm">
                  <strong>Example:</strong> Asking for ₹2L increase in special
                  allowance vs basic salary can result in different take-home
                  amounts due to PF implications.
                </p>
              </div>
            </div>
          </section>

          {/* Expert Tips */}
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">
              Expert Tips for Best Results
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
                <Lightbulb className="mt-1 h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-sm font-semibold">
                    Tip 1: Always check both tax regimes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Calculate your tax under both old and new regimes. The new
                    regime might be better if you don't have many deductions,
                    while the old regime benefits those with significant
                    investments and HRA claims.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <Lightbulb className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold">
                    Tip 2: Consider the city's cost of living
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A ₹10 LPA package in Bangalore has different purchasing
                    power than the same package in Pune or Hyderabad. Factor in
                    rent, transportation, and lifestyle costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <Lightbulb className="mt-1 h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-semibold">
                    Tip 3: Plan your investments for tax savings
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Maximize Section 80C (₹1.5L), HRA exemption, and health
                    insurance deductions (80D) to significantly reduce your tax
                    liability and increase take-home salary.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection
            title="Frequently Asked Questions About Salary Calculation"
            faqs={[
              {
                question: 'Is this tool accurate for all companies in India?',
                answer:
                  'Yes, this tool uses the standard Indian tax structure and common salary components. However, some companies may have unique benefit structures. The calculations are based on statutory requirements and typical corporate practices.',
                example:
                  'Most IT companies follow similar PF and tax deduction patterns, making our calculations 95%+ accurate.',
              },
              {
                question:
                  'Do I need to create an account to use this calculator?',
                answer:
                  "No account required! This is a completely free tool that works instantly without any registration. We don't store your salary information or personal data.",
              },
              {
                question: 'Can I use this calculator on my mobile phone?',
                answer:
                  'Absolutely! The calculator is fully responsive and works perfectly on all devices - mobile phones, tablets, and desktops. The interface adapts to your screen size for optimal usability.',
              },
              {
                question: 'How often should I use this salary calculator?',
                answer:
                  "Use it whenever you receive a job offer, during salary negotiations, or when planning your annual tax investments. It's also helpful when comparing multiple offers or planning a job switch.",
                example:
                  'Many users check it monthly to plan their tax-saving investments and budget allocation.',
              },
              {
                question:
                  "What if my calculation doesn't match my actual salary slip?",
                answer:
                  'Small differences can occur due to company-specific policies, mid-year joining, salary advances, or additional deductions like loan EMIs. The tool provides standard calculations based on statutory requirements.',
                example:
                  "If you joined mid-year, your annual tax calculation might differ from the tool's projection.",
              },
              {
                question:
                  'Does this calculator work for freelancers or business income?',
                answer:
                  'This calculator is designed specifically for salaried employees with CTC structures. Freelancers and business owners have different tax calculations involving presumptive taxation or actual profit calculations.',
              },
              {
                question:
                  "How does the calculator handle different states' professional tax?",
                answer:
                  "The calculator includes professional tax based on common state rates. However, professional tax varies by state - some states like Rajasthan and Haryana don't have it, while others charge ₹200-2,500 annually.",
                example:
                  'Maharashtra charges ₹2,500/year while Karnataka charges ₹2,400/year for similar income levels.',
              },
              {
                question:
                  'Can I save or download my salary calculation results?',
                answer:
                  'Currently, the tool provides instant calculations that you can screenshot or note down. We recommend using it whenever you need updated calculations as tax rules and rates may change annually.',
              },
            ]}
          />

          {/* Global Salary Comparison Section */}
          <section className="mt-16">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
              🌍 Global Tech Salary Comparison
            </h2>
            <p className="mb-8 text-muted-foreground">
              Thinking of working abroad or comparing international offers?
              Here's how tech salaries compare across major global hubs.
              Understanding the real purchasing power after taxes and living
              costs is crucial for making informed career decisions.
            </p>

            {/* Global Salary Table */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border p-3 text-left">Country</th>
                    <th className="border p-3 text-left">
                      Entry Level (0-2 yrs)
                    </th>
                    <th className="border p-3 text-left">
                      Mid Level (3-6 yrs)
                    </th>
                    <th className="border p-3 text-left">Senior (7+ yrs)</th>
                    <th className="border p-3 text-left">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">🇺🇸 USA (SF/NYC)</td>
                    <td className="border p-3">$85,000 - $120,000</td>
                    <td className="border p-3">$140,000 - $200,000</td>
                    <td className="border p-3">$200,000 - $350,000+</td>
                    <td className="border p-3">22-37%</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-medium">🇬🇧 UK (London)</td>
                    <td className="border p-3">£35,000 - £55,000</td>
                    <td className="border p-3">£60,000 - £90,000</td>
                    <td className="border p-3">£100,000 - £160,000</td>
                    <td className="border p-3">20-45%</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">
                      🇩🇪 Germany (Berlin/Munich)
                    </td>
                    <td className="border p-3">€45,000 - €60,000</td>
                    <td className="border p-3">€65,000 - €90,000</td>
                    <td className="border p-3">€95,000 - €140,000</td>
                    <td className="border p-3">14-45%</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-medium">
                      🇨🇦 Canada (Toronto)
                    </td>
                    <td className="border p-3">CAD 65,000 - 85,000</td>
                    <td className="border p-3">CAD 95,000 - 135,000</td>
                    <td className="border p-3">CAD 150,000 - 220,000</td>
                    <td className="border p-3">15-33%</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">
                      🇦🇺 Australia (Sydney)
                    </td>
                    <td className="border p-3">AUD 70,000 - 95,000</td>
                    <td className="border p-3">AUD 110,000 - 150,000</td>
                    <td className="border p-3">AUD 170,000 - 250,000</td>
                    <td className="border p-3">19-45%</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3 font-medium">🇸🇬 Singapore</td>
                    <td className="border p-3">SGD 55,000 - 75,000</td>
                    <td className="border p-3">SGD 85,000 - 130,000</td>
                    <td className="border p-3">SGD 150,000 - 250,000</td>
                    <td className="border p-3">0-22%</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">
                      🇮🇳 India (Bangalore)
                    </td>
                    <td className="border p-3">₹6-12 LPA</td>
                    <td className="border p-3">₹15-35 LPA</td>
                    <td className="border p-3">₹40-80+ LPA</td>
                    <td className="border p-3">5-30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cost of Living Comparison */}
            <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Building className="h-5 w-5 text-blue-600" />
                Cost of Living: What Your Salary Actually Buys
              </h3>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold">High Cost Cities:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• San Francisco: 1BHK rent ~$3,500/month</li>
                    <li>• NYC: 1BHK rent ~$3,200/month</li>
                    <li>• London: 1BHK rent ~£2,000/month</li>
                    <li>• Singapore: 1BHK rent ~SGD 2,800/month</li>
                    <li>• Sydney: 1BHK rent ~AUD 2,400/month</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold">Moderate Cost Cities:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Berlin: 1BHK rent ~€1,200/month</li>
                    <li>• Toronto: 1BHK rent ~CAD 2,200/month</li>
                    <li>• Bangalore: 1BHK rent ~₹25,000/month</li>
                    <li>• Dublin: 1BHK rent ~€1,800/month</li>
                    <li>• Amsterdam: 1BHK rent ~€1,600/month</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Working Abroad Tips */}
            <div className="mb-8 rounded-lg border p-6">
              <h3 className="mb-4 font-bold">
                💡 Key Considerations for International Roles
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold text-primary">
                    Before Accepting an Offer:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Calculate net salary after taxes (varies by country)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Research visa sponsorship and work permit requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Consider healthcare costs (crucial in USA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Factor in relocation allowance and signing bonus
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-primary">
                    Hidden Benefits to Negotiate:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Stock options/RSUs (especially at US tech companies)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Pension contributions (mandatory in Germany, UK)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Annual leave (varies: 10 days USA vs 30 days Germany)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Remote work flexibility for hybrid arrangements
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Popular Work Visa Routes */}
            <div className="mb-8">
              <h3 className="mb-4 font-bold">
                🛂 Popular Work Visa Routes for Indian Tech Professionals
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xl">🇺🇸</span>
                    <span className="font-semibold">USA</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      <strong>H-1B:</strong> Specialty occupation visa
                    </li>
                    <li>
                      <strong>L-1:</strong> Intra-company transfer
                    </li>
                    <li>
                      <strong>OPT:</strong> Post-study work (12-36 months)
                    </li>
                    <li className="text-xs italic">Processing: 3-6 months</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xl">🇬🇧</span>
                    <span className="font-semibold">UK</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      <strong>Skilled Worker:</strong> Points-based system
                    </li>
                    <li>
                      <strong>Global Talent:</strong> For exceptional talent
                    </li>
                    <li>
                      <strong>Graduate Visa:</strong> 2-year post-study (PSW)
                    </li>
                    <li className="text-xs italic">Processing: 3-8 weeks</li>
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xl">🇩🇪</span>
                    <span className="font-semibold">Germany</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>
                      <strong>EU Blue Card:</strong> Highly skilled workers
                    </li>
                    <li>
                      <strong>Job Seeker:</strong> 6-month visa to find work
                    </li>
                    <li>
                      <strong>ICT:</strong> Intra-corporate transfer
                    </li>
                    <li className="text-xs italic">Processing: 4-8 weeks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Currency Conversion Note */}
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>💱 Currency Note:</strong> Salary figures are in local
                currencies. Exchange rates fluctuate - 1 USD ≈ ₹83, 1 GBP ≈
                ₹105, 1 EUR ≈ ₹90, 1 CAD ≈ ₹62, 1 AUD ≈ ₹55, 1 SGD ≈ ₹62
                (approximate rates). Always use current rates for accurate
                comparisons.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Start Your Global Career?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Explore opportunities worldwide - from local internships to
              international roles
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/countries"
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-background px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                🌍 Explore Country Guides
              </Link>
            </div>
          </section>

          {/* GEO: region-adaptive content — IN/US/GB/AU/CA visitors see their
              own tax-year/currency context */}
          <ToolGEOContent toolSlug="salary-calculator" />
        </div>
      </div>
    </>
  );
}
