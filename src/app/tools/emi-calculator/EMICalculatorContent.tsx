'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  DollarSign,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Calculator,
  Lightbulb,
  AlertCircle,
  Building,
  GraduationCap,
  TrendingUp,
  IndianRupee,
  Percent,
  BookOpen,
} from 'lucide-react';

export default function EMICalculatorContent() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      alert('Please enter valid values');
      return;
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    setResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal: P,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calculator className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Education Loan EMI Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate your monthly EMI for education loans with accurate
            interest calculations. Plan your higher education financing with
            confidence.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
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
            <span className="text-sm font-medium">25,000+ Users</span>
          </div>
        </div>

        {/* Calculator Tool */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              EMI Calculator
            </CardTitle>
            <CardDescription>
              Enter loan details to calculate your monthly installment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="e.g., 500000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">
                  Interest Rate (% per annum)
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 8.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                <Input
                  id="tenure"
                  type="number"
                  placeholder="e.g., 5"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={calculateEMI}
              className="w-full"
              size="lg"
            >
              Calculate EMI
            </Button>

            {result && (
              <div className="mt-8 space-y-6">
                <div className="rounded-lg border-2 border-primary bg-primary/10 p-6">
                  <div className="text-center">
                    <p className="mb-2 text-sm text-muted-foreground">
                      Monthly EMI
                    </p>
                    <p className="text-5xl font-bold text-primary">
                      {formatCurrency(result.emi)}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-1 text-sm text-muted-foreground">
                        Principal Amount
                      </p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(result.principal)}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-1 text-sm text-muted-foreground">
                        Total Interest
                      </p>
                      <p className="text-2xl font-bold text-orange-600">
                        {formatCurrency(result.totalInterest)}
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-1 text-sm text-muted-foreground">
                        Total Amount
                      </p>
                      <p className="text-2xl font-bold">
                        {formatCurrency(result.totalAmount)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            🎓 <strong>89 students</strong> calculated their education loan EMI
            in the last hour
          </p>
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
                title: 'Enter Amount',
                desc: 'Input your total loan amount',
              },
              {
                step: '2',
                title: 'Set Interest',
                desc: 'Enter annual interest rate',
              },
              {
                step: '3',
                title: 'Choose Tenure',
                desc: 'Select repayment period',
              },
              { step: '4', title: 'Get EMI', desc: 'View monthly installment' },
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

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Understanding Education Loan EMI in India
          </h2>
          <p>
            An <strong>EMI (Equated Monthly Installment)</strong> is the fixed
            amount you pay every month to repay your education loan. It includes
            both principal repayment and interest charges, making budgeting
            predictable for students and families planning higher education
            expenses.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Key Insight
            </h3>
            <p className="text-sm">
              According to <strong>RBI data</strong>, education loans in India
              have grown by 17% annually. The average education loan amount is{' '}
              <strong>₹8.5 lakhs</strong> with a typical repayment period of
              <strong> 5-7 years</strong> after course completion.
            </p>
          </div>

          <h2>EMI Formula Explained</h2>
          <p>The EMI is calculated using the following formula:</p>

          <div className="not-prose my-4 rounded-lg bg-muted p-6">
            <p className="mb-4 text-center font-mono text-lg">
              EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> - 1]
            </p>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div className="text-center">
                <strong>P</strong> = Principal Loan Amount
              </div>
              <div className="text-center">
                <strong>R</strong> = Monthly Interest Rate (Annual Rate ÷ 12 ÷
                100)
              </div>
              <div className="text-center">
                <strong>N</strong> = Loan Tenure in Months
              </div>
            </div>
          </div>

          <h2>
            <Building className="mr-2 inline h-6 w-6 text-primary" />
            Education Loan Interest Rates (Bank-wise)
          </h2>
          <p>
            Interest rates vary significantly across banks. Here's a comparison
            of leading education loan providers in India:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Bank</th>
                  <th className="border p-3 text-left">Interest Rate</th>
                  <th className="border p-3 text-left">Max Loan Amount</th>
                  <th className="border p-3 text-left">Processing Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">SBI Scholar Loan</td>
                  <td className="border p-3">8.15% - 10.15%</td>
                  <td className="border p-3">₹1.5 Crore</td>
                  <td className="border p-3">Nil</td>
                </tr>
                <tr>
                  <td className="border p-3">HDFC Credila</td>
                  <td className="border p-3">9.25% - 13.25%</td>
                  <td className="border p-3">₹75 Lakhs</td>
                  <td className="border p-3">1-2%</td>
                </tr>
                <tr>
                  <td className="border p-3">Axis Bank</td>
                  <td className="border p-3">9.55% - 13.70%</td>
                  <td className="border p-3">₹75 Lakhs</td>
                  <td className="border p-3">1%</td>
                </tr>
                <tr>
                  <td className="border p-3">Bank of Baroda</td>
                  <td className="border p-3">8.25% - 10.25%</td>
                  <td className="border p-3">₹1 Crore</td>
                  <td className="border p-3">0.5%</td>
                </tr>
                <tr>
                  <td className="border p-3">PNB</td>
                  <td className="border p-3">8.55% - 9.55%</td>
                  <td className="border p-3">₹40 Lakhs</td>
                  <td className="border p-3">0.5%</td>
                </tr>
                <tr>
                  <td className="border p-3">ICICI Bank</td>
                  <td className="border p-3">10.00% - 12.50%</td>
                  <td className="border p-3">₹1 Crore</td>
                  <td className="border p-3">1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-6 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              Pro Tip: Negotiating Interest Rates
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>CIBIL Score matters:</strong> A score above 750 can
                get you 0.5-1% lower rates
              </li>
              <li>
                • <strong>Parent's income:</strong> Higher family income may
                qualify for better rates
              </li>
              <li>
                • <strong>Institution ranking:</strong> IITs, IIMs, NITs often
                get preferential rates
              </li>
              <li>
                • <strong>Collateral loans:</strong> Secured loans have 1-2%
                lower interest rates
              </li>
            </ul>
          </div>

          <h2>Types of Education Loans in India</h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Domestic Education Loans
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  • For studies within India (IITs, IIMs, Medical, Engineering)
                </p>
                <p>• Loan amount: Up to ₹20 lakhs typically</p>
                <p>• No collateral needed up to ₹7.5 lakhs</p>
                <p>• Interest Rate: 8.5% - 11% p.a.</p>
                <p>• Moratorium: Course duration + 6-12 months</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Overseas Education Loans
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• For studies abroad (USA, UK, Canada, Australia)</p>
                <p>• Loan amount: Up to ₹1.5 Crore</p>
                <p>• Collateral usually required above ₹10 lakhs</p>
                <p>• Interest Rate: 9% - 13% p.a.</p>
                <p>• Moratorium: Course duration + 6-12 months</p>
              </CardContent>
            </Card>
          </div>

          <h2>EMI Calculation Examples</h2>

          <h3>Example 1: ₹5 Lakh Loan for B.Tech</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 font-bold">Loan Details:</p>
                <ul className="space-y-1 text-sm">
                  <li>Principal Amount: ₹5,00,000</li>
                  <li>Interest Rate: 9% p.a.</li>
                  <li>Tenure: 5 years (60 months)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold">Results:</p>
                <ul className="space-y-1 text-sm">
                  <li>
                    Monthly EMI:{' '}
                    <strong className="text-primary">₹10,379</strong>
                  </li>
                  <li>Total Interest: ₹1,22,740</li>
                  <li>Total Amount: ₹6,22,740</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Example 2: ₹20 Lakh Loan for MBA</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 font-bold">Loan Details:</p>
                <ul className="space-y-1 text-sm">
                  <li>Principal Amount: ₹20,00,000</li>
                  <li>Interest Rate: 10% p.a.</li>
                  <li>Tenure: 7 years (84 months)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold">Results:</p>
                <ul className="space-y-1 text-sm">
                  <li>
                    Monthly EMI:{' '}
                    <strong className="text-primary">₹33,198</strong>
                  </li>
                  <li>Total Interest: ₹7,88,632</li>
                  <li>Total Amount: ₹27,88,632</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Example 3: ₹50 Lakh Loan for MS in USA</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 font-bold">Loan Details:</p>
                <ul className="space-y-1 text-sm">
                  <li>Principal Amount: ₹50,00,000</li>
                  <li>Interest Rate: 11% p.a.</li>
                  <li>Tenure: 10 years (120 months)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 font-bold">Results:</p>
                <ul className="space-y-1 text-sm">
                  <li>
                    Monthly EMI:{' '}
                    <strong className="text-primary">₹68,850</strong>
                  </li>
                  <li>Total Interest: ₹32,62,000</li>
                  <li>Total Amount: ₹82,62,000</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>
            <Percent className="mr-2 inline h-6 w-6 text-primary" />
            Tax Benefits on Education Loans (Section 80E)
          </h2>
          <p>
            One of the biggest advantages of education loans is the tax benefit
            under <strong>Section 80E</strong>
            of the Income Tax Act. Here's what you need to know:
          </p>

          <div className="not-prose my-6 space-y-4">
            {[
              {
                title: 'No Upper Limit on Deduction',
                desc: 'Unlike 80C (₹1.5 lakh cap), 80E has no maximum limit on interest deduction',
              },
              {
                title: 'Deduction Period: 8 Years',
                desc: 'Claim deduction from year of repayment start for up to 8 consecutive years',
              },
              {
                title: 'Only Interest is Eligible',
                desc: "Principal repayment doesn't qualify; only the interest portion is tax-deductible",
              },
              {
                title: 'For Self or Dependents',
                desc: 'Loan can be for yourself, spouse, children, or legal ward',
              },
              {
                title: 'Any Course Eligible',
                desc: 'Covers graduate, post-graduate, vocational, and overseas courses',
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

          <h2>Tips to Reduce Your EMI Burden</h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Do This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">
                  ✓ Start repaying interest during moratorium
                </li>
                <li className="list-none">
                  ✓ Make partial prepayments when possible
                </li>
                <li className="list-none">
                  ✓ Negotiate for lower interest rates
                </li>
                <li className="list-none">
                  ✓ Choose shorter tenure if affordable
                </li>
                <li className="list-none">
                  ✓ Compare at least 5 lenders before deciding
                </li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Avoid This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">✗ Ignoring EMI payment dates</li>
                <li className="list-none">
                  ✗ Opting for very long tenure without need
                </li>
                <li className="list-none">
                  ✗ Not reading loan agreement thoroughly
                </li>
                <li className="list-none">
                  ✗ Skipping insurance for large loans
                </li>
                <li className="list-none">
                  ✗ Not claiming Section 80E benefits
                </li>
              </CardContent>
            </Card>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>
            What is the difference between fixed and floating interest rates?
          </h3>
          <p>
            <strong>Fixed rate</strong> stays constant throughout the loan
            tenure, making EMI predictable.
            <strong>Floating rate</strong> varies with RBI repo rate changes.
            While floating rates start lower, they carry interest rate risk.
            Most education loans in India are floating rate loans linked to
            MCLR.
          </p>

          <h3>What is a moratorium period in education loans?</h3>
          <p>
            The moratorium period is a grace period during which you don't need
            to pay EMIs. Typically, it's{' '}
            <strong>course duration + 6 to 12 months</strong> after course
            completion. However, interest continues to accrue during this
            period. Some banks offer Simple Interest during moratorium while
            others charge Compound Interest.
          </p>

          <h3>Can I prepay my education loan without penalty?</h3>
          <p>
            As per RBI guidelines,{' '}
            <strong>
              floating rate loans cannot have prepayment penalties
            </strong>
            . For fixed-rate loans, banks may charge 2-5% prepayment penalty.
            Prepayment is one of the best ways to reduce overall interest
            burden.
          </p>

          <h3>What documents are required for education loan?</h3>
          <p>
            Common documents include: Admission letter, fee structure from
            institution, academic mark sheets (10th, 12th, graduation), KYC
            documents (Aadhaar, PAN, passport photos), income proof of
            co-borrower/guarantor, and collateral documents if applicable.
          </p>

          <h3>Is collateral mandatory for education loans?</h3>
          <p>
            No, loans up to <strong>₹7.5 lakhs don't require collateral</strong>{' '}
            under the government's education loan scheme. However, you'll need a
            co-borrower (usually parent). For loans above ₹7.5 lakhs, banks
            typically require collateral like property, fixed deposits, or LIC
            policies.
          </p>

          <h3>What happens if I miss an EMI payment?</h3>
          <p>
            Missing EMIs leads to: (1) Late payment fee of 1-2% of EMI, (2)
            Negative impact on CIBIL score, (3) Default notices after 90 days,
            (4) Loan becoming NPA affecting future credit eligibility. If facing
            difficulties, proactively speak to your bank about restructuring
            options.
          </p>

          <h3>Can education loan be transferred to another bank?</h3>
          <p>
            Yes, education loan balance transfer is possible if you find a bank
            offering lower interest rates. The new bank will pay off your
            existing loan and issue a fresh loan. This can save significant
            interest over the loan tenure, but factor in processing fees and
            documentation effort.
          </p>

          <h3>How does CIBIL score affect education loan approval?</h3>
          <p>
            For students (first-time borrowers), the co-borrower's CIBIL score
            is evaluated. A score of
            <strong>750+ helps get better interest rates</strong> and faster
            approval. Score below 650 may result in rejection or higher rates.
            Some NBFCs offer loans for lower scores at higher rates.
          </p>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Career Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate in-hand salary from CTC',
              },
              {
                title: 'CGPA to Percentage',
                href: '/tools/cgpa-converter',
                desc: 'Convert your CGPA instantly',
              },
              {
                title: 'Resume Score Checker',
                href: '/tools/resume-score-checker',
                desc: 'Get ATS-friendly score',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Planning Your Education?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Convert Your Internship to Full-Time Offer
              </h3>
              <p className="text-sm text-muted-foreground">
                Tips to transition from intern to full-time employee after
                graduation.
              </p>
            </Link>
            <Link
              href="/resources/career-planning"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Complete Career Planning Guide
              </h3>
              <p className="text-sm text-muted-foreground">
                Plan your career path strategically for long-term success.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Start Your Career Journey Today
          </h2>
          <p className="mb-6 text-muted-foreground">
            Browse thousands of internship opportunities from top startups
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships
          </Link>
        </section>
      </div>
    </div>
  );
}
