import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Calculator,
  CheckCircle,
  Lightbulb,
  Target,
  Users,
  Clock,
  Award,
  ArrowRight,
  BookOpen,
  Percent,
  TrendingUp,
  Clock4,
  DollarSign,
  BarChart2,
  Shapes,
  Sigma,
} from 'lucide-react';

export const metadata = getPageSEO('aptitudeFormulas');

export default function AptitudeFormulasPage() {
  const schemas = getPageSchema('aptitudeFormulas');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <Calculator className="h-4 w-4" />
          Complete Formula Reference
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Quantitative Aptitude Formulas
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Master placement exams with our comprehensive collection of
          quantitative aptitude formulas. Essential formulas, shortcuts, and
          examples for TCS, Infosys, Wipro, and all major campus placements.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">40K+ Downloads</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">Exam-Verified</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Updated</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
          <Award className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-medium">8+ Topics</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="mx-auto mb-12 max-w-4xl rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">Formula Categories</h2>
        <ol className="grid gap-2 text-sm md:grid-cols-2">
          <li>
            <a
              href="#percentage"
              className="text-primary hover:underline"
            >
              1. Percentage
            </a>
          </li>
          <li>
            <a
              href="#profit-loss"
              className="text-primary hover:underline"
            >
              2. Profit & Loss
            </a>
          </li>
          <li>
            <a
              href="#ratio"
              className="text-primary hover:underline"
            >
              3. Ratio & Proportion
            </a>
          </li>
          <li>
            <a
              href="#time-work"
              className="text-primary hover:underline"
            >
              4. Time & Work
            </a>
          </li>
          <li>
            <a
              href="#speed-distance"
              className="text-primary hover:underline"
            >
              5. Speed, Distance & Time
            </a>
          </li>
          <li>
            <a
              href="#interest"
              className="text-primary hover:underline"
            >
              6. Simple & Compound Interest
            </a>
          </li>
          <li>
            <a
              href="#algebra"
              className="text-primary hover:underline"
            >
              7. Algebra Essentials
            </a>
          </li>
          <li>
            <a
              href="#geometry"
              className="text-primary hover:underline"
            >
              8. Geometry Formulas
            </a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto max-w-5xl space-y-16">
        {/* Section 1: Percentage */}
        <section id="percentage">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Percent className="h-6 w-6 text-primary" />
            1. Percentage Formulas
          </h2>

          <div className="mb-6 space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-3 py-2 text-left font-semibold">
                          Formula
                        </th>
                        <th className="px-3 py-2 text-left font-semibold">
                          Explanation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="bg-muted/50 px-3 py-3 font-mono">
                          Percentage = (Part/Whole) × 100
                        </td>
                        <td className="px-3 py-3 text-muted-foreground">
                          Basic percentage calculation
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-muted/50 px-3 py-3 font-mono">
                          x% of y = (x/100) × y = y% of x
                        </td>
                        <td className="px-3 py-3 text-muted-foreground">
                          Percentage is commutative
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-muted/50 px-3 py-3 font-mono">
                          % Increase = [(New - Old)/Old] × 100
                        </td>
                        <td className="px-3 py-3 text-muted-foreground">
                          Calculate percentage increase
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-muted/50 px-3 py-3 font-mono">
                          % Decrease = [(Old - New)/Old] × 100
                        </td>
                        <td className="px-3 py-3 text-muted-foreground">
                          Calculate percentage decrease
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-muted/50 px-3 py-3 font-mono">
                          Net % Change = a + b + (ab/100)
                        </td>
                        <td className="px-3 py-3 text-muted-foreground">
                          Successive change of a% then b%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <Lightbulb className="h-4 w-4 text-blue-600" />
                Quick Shortcuts
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• 50% = 1/2, 25% = 1/4, 20% = 1/5, 10% = 1/10</li>
                <li>• 33.33% = 1/3, 16.66% = 1/6, 12.5% = 1/8, 11.11% = 1/9</li>
                <li>• To find 15% of a number: find 10% and add half of it</li>
              </ul>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">Example Problem</h4>
              <p className="mb-2 text-sm">
                <strong>Q:</strong> A salary increased by 20% and then decreased
                by 20%. What is the net change?
              </p>
              <p className="text-sm text-green-600">
                <strong>A:</strong> Net change = 20 + (-20) + (20 × -20)/100 = 0
                - 4 = <strong>-4%</strong> decrease
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Profit & Loss */}
        <section id="profit-loss">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <DollarSign className="h-6 w-6 text-primary" />
            2. Profit & Loss Formulas
          </h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-3 py-2 text-left font-semibold">
                        Formula
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Usage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Profit = SP - CP
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        When SP &gt; CP
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Loss = CP - SP
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        When CP &gt; SP
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Profit % = (Profit/CP) × 100
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Profit percentage on cost
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Loss % = (Loss/CP) × 100
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Loss percentage on cost
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        SP = CP × (100 + Profit%)/100
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Find SP from CP and profit %
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        SP = CP × (100 - Loss%)/100
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Find SP from CP and loss %
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        CP = SP × 100/(100 + Profit%)
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Find CP from SP and profit %
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Discount = MP - SP
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        MP = Marked Price
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <h4 className="mb-2 font-semibold">Key Terms</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>CP (Cost Price):</strong> Price at which an article is
                bought
              </li>
              <li>
                <strong>SP (Selling Price):</strong> Price at which an article
                is sold
              </li>
              <li>
                <strong>MP (Marked Price):</strong> Price labeled on the article
                (before discount)
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Ratio & Proportion */}
        <section id="ratio">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <BarChart2 className="h-6 w-6 text-primary" />
            3. Ratio & Proportion
          </h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-3 py-2 text-left font-semibold">
                        Concept
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Formula
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-3 py-3">Ratio</td>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        a:b = a/b
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-3">Proportion</td>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        a:b = c:d → a×d = b×c (cross multiply)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-3">Componendo</td>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        If a/b = c/d then (a+b)/b = (c+d)/d
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-3">Dividendo</td>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        If a/b = c/d then (a-b)/b = (c-d)/d
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-3 py-3">Componendo-Dividendo</td>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        If a/b = c/d then (a+b)/(a-b) = (c+d)/(c-d)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3">Mean Proportion</td>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        If a:b = b:c then b = √(a×c)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-2 font-semibold">Example Problem</h4>
            <p className="mb-2 text-sm">
              <strong>Q:</strong> If A:B = 2:3 and B:C = 4:5, find A:B:C
            </p>
            <p className="text-sm text-green-600">
              <strong>A:</strong> Make B common: A:B = 8:12, B:C = 12:15 → A:B:C
              = <strong>8:12:15</strong>
            </p>
          </div>
        </section>

        {/* Section 4: Time & Work */}
        <section id="time-work">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Clock4 className="h-6 w-6 text-primary" />
            4. Time & Work Formulas
          </h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-3 py-2 text-left font-semibold">
                        Formula
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Application
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Work = Rate × Time
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Basic work formula
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Rate = 1/Time (to complete 1 unit)
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Efficiency per unit time
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Time = Work/Rate
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Time to complete work
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Combined Rate = 1/A + 1/B
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        A and B working together
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Time Together = (A×B)/(A+B)
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        If A finishes in 'a' days, B in 'b' days
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        M₁D₁H₁/W₁ = M₂D₂H₂/W₂
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        M=Men, D=Days, H=Hours, W=Work
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 font-semibold">Shortcut Tips</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use LCM method for easier calculations</li>
                <li>• If A is 2x faster than B, A:B work rate = 2:1</li>
                <li>• More workers = Less time (inverse proportion)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">Example</h4>
              <p className="mb-2 text-sm">
                <strong>Q:</strong> A finishes in 10 days, B in 15 days.
                Together?
              </p>
              <p className="text-sm text-green-600">
                <strong>A:</strong> (10×15)/(10+15) = 150/25 ={' '}
                <strong>6 days</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Speed, Distance & Time */}
        <section id="speed-distance">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <TrendingUp className="h-6 w-6 text-primary" />
            5. Speed, Distance & Time
          </h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="px-3 py-2 text-left font-semibold">
                        Formula
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Distance = Speed × Time
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Basic formula (D = S × T)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Speed = Distance/Time
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Finding speed
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Time = Distance/Speed
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Finding time
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Avg Speed = Total Distance/Total Time
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        For varying speeds
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Avg Speed = 2ab/(a+b)
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Same distance at speeds a and b
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Relative Speed = (a+b)
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Objects moving towards each other
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-muted/50 px-3 py-3 font-mono">
                        Relative Speed = |a-b|
                      </td>
                      <td className="px-3 py-3 text-muted-foreground">
                        Objects moving same direction
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
              <h4 className="mb-2 font-semibold">Unit Conversions</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>km/hr to m/s:</strong> Multiply by 5/18
                </li>
                <li>
                  • <strong>m/s to km/hr:</strong> Multiply by 18/5
                </li>
                <li>• 1 hour = 3600 seconds</li>
                <li>• 1 km = 1000 meters</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="mb-2 font-semibold">Train Problems</h4>
              <ul className="space-y-1 text-sm">
                <li>• Time to pass pole = Length/Speed</li>
                <li>• Time to pass platform = (L₁+L₂)/Speed</li>
                <li>• Time for trains to cross = (L₁+L₂)/Relative Speed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Interest */}
        <section id="interest">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <TrendingUp className="h-6 w-6 text-primary" />
            6. Simple & Compound Interest
          </h2>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Simple Interest (SI)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="rounded bg-muted p-2 font-mono">
                    SI = (P × R × T)/100
                  </p>
                  <p className="rounded bg-muted p-2 font-mono">
                    Amount = P + SI = P(1 + RT/100)
                  </p>
                  <ul className="mt-4 space-y-1 text-muted-foreground">
                    <li>• P = Principal (initial amount)</li>
                    <li>• R = Rate of interest per annum</li>
                    <li>• T = Time in years</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Compound Interest (CI)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="rounded bg-muted p-2 font-mono">
                    Amount = P(1 + R/100)ⁿ
                  </p>
                  <p className="rounded bg-muted p-2 font-mono">
                    CI = Amount - P
                  </p>
                  <ul className="mt-4 space-y-1 text-muted-foreground">
                    <li>• n = number of time periods</li>
                    <li>• Half-yearly: n = 2T, R = R/2</li>
                    <li>• Quarterly: n = 4T, R = R/4</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <h4 className="mb-2 font-semibold">Quick Comparison</h4>
            <p className="mb-2 text-sm">
              Difference between CI and SI for 2 years:
            </p>
            <p className="rounded bg-background p-2 font-mono text-sm">
              CI - SI = P(R/100)² = PR²/10000
            </p>
          </div>
        </section>

        {/* Section 7: Algebra */}
        <section id="algebra">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Sigma className="h-6 w-6 text-primary" />
            7. Algebra Essentials
          </h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h4 className="mb-4 font-semibold">Important Identities</h4>
              <div className="grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded bg-muted p-2 font-mono">
                  (a + b)² = a² + 2ab + b²
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  (a - b)² = a² - 2ab + b²
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  (a + b)(a - b) = a² - b²
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  (a + b)³ = a³ + 3a²b + 3ab² + b³
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  (a - b)³ = a³ - 3a²b + 3ab² - b³
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  a³ + b³ = (a + b)(a² - ab + b²)
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  a³ - b³ = (a - b)(a² + ab + b²)
                </div>
                <div className="rounded bg-muted p-2 font-mono">
                  (a + b + c)² = a² + b² + c² + 2(ab + bc + ca)
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-2 font-semibold">
              Quadratic Equation: ax² + bx + c = 0
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="font-mono">x = (-b ± √(b² - 4ac)) / 2a</li>
              <li>• Sum of roots = -b/a</li>
              <li>• Product of roots = c/a</li>
              <li>• Discriminant (D) = b² - 4ac</li>
              <li className="text-muted-foreground">
                If D &gt; 0: Two real roots | D = 0: One root | D &lt; 0: No
                real roots
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: Geometry */}
        <section id="geometry">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Shapes className="h-6 w-6 text-primary" />
            8. Geometry Formulas
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2D Shapes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-b p-2">
                    <p className="font-semibold">Rectangle</p>
                    <p className="text-muted-foreground">
                      Area = l × b | Perimeter = 2(l + b)
                    </p>
                  </div>
                  <div className="border-b p-2">
                    <p className="font-semibold">Square</p>
                    <p className="text-muted-foreground">
                      Area = a² | Perimeter = 4a | Diagonal = a√2
                    </p>
                  </div>
                  <div className="border-b p-2">
                    <p className="font-semibold">Circle</p>
                    <p className="text-muted-foreground">
                      Area = πr² | Circumference = 2πr
                    </p>
                  </div>
                  <div className="border-b p-2">
                    <p className="font-semibold">Triangle</p>
                    <p className="text-muted-foreground">
                      Area = ½ × base × height
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="font-semibold">Trapezium</p>
                    <p className="text-muted-foreground">
                      Area = ½ × (a + b) × h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3D Shapes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-b p-2">
                    <p className="font-semibold">Cube</p>
                    <p className="text-muted-foreground">
                      Volume = a³ | Surface = 6a²
                    </p>
                  </div>
                  <div className="border-b p-2">
                    <p className="font-semibold">Cuboid</p>
                    <p className="text-muted-foreground">
                      Volume = l×b×h | Surface = 2(lb+bh+hl)
                    </p>
                  </div>
                  <div className="border-b p-2">
                    <p className="font-semibold">Cylinder</p>
                    <p className="text-muted-foreground">
                      Volume = πr²h | CSA = 2πrh
                    </p>
                  </div>
                  <div className="border-b p-2">
                    <p className="font-semibold">Cone</p>
                    <p className="text-muted-foreground">
                      Volume = (1/3)πr²h | CSA = πrl
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="font-semibold">Sphere</p>
                    <p className="text-muted-foreground">
                      Volume = (4/3)πr³ | Surface = 4πr²
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <h2 className="mb-6 text-2xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Which topics are most important for placement exams?',
                a: 'Percentage, Profit & Loss, Time & Work, and Speed-Distance-Time form the core of most aptitude tests. Master these first, then move to other topics. These topics typically account for 60-70% of questions.',
              },
              {
                q: 'How should I approach solving aptitude problems?',
                a: 'First, identify the topic and relevant formula. Then, check if any shortcuts apply. Practice mental math for simple calculations. Time yourself to improve speed. Always verify your answer if time permits.',
              },
              {
                q: 'How many questions can I expect in a placement exam?',
                a: 'Most placement exams (TCS, Infosys, Wipro) have 15-25 quantitative aptitude questions. Time limit is usually 1-2 minutes per question. Focus on accuracy first, then improve speed.',
              },
              {
                q: 'Should I memorize all formulas?',
                a: "Yes, but with understanding. Memorize the basic formulas, but understand when to apply each. Practice enough problems that formulas become second nature. Don't just memorize—know why each formula works.",
              },
              {
                q: "What's the best way to improve calculation speed?",
                a: 'Practice mental math daily. Learn tables up to 20, squares up to 30, and cubes up to 15. Master percentage-to-fraction conversions. Use approximation techniques for complex calculations.',
              },
              {
                q: 'How much time should I spend preparing for aptitude?',
                a: 'Dedicate 1-2 hours daily for 2-3 months before placements. Solve at least 10-15 problems per topic. Take weekly mock tests to track progress and identify weak areas.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Practice With Real Problems
          </h2>
          <p className="mb-6 text-muted-foreground">
            Knowing formulas is just the first step. Practice with our free
            aptitude test tool to apply these formulas and improve your speed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/aptitude-test">Take Aptitude Test</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/interview-prep">
                Interview Preparation
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/interview-cheatsheet"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Interview Cheat Sheet</h3>
              <p className="text-sm text-muted-foreground">
                HR questions with answers
              </p>
            </Link>
            <Link
              href="/resources/skill-development"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Skill Development</h3>
              <p className="text-sm text-muted-foreground">In-demand skills</p>
            </Link>
            <Link
              href="/tools/aptitude-test"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Aptitude Test Tool</h3>
              <p className="text-sm text-muted-foreground">
                Practice with timed tests
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
