import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TrendingUp,
  DollarSign,
  Building2,
  Zap,
  CheckCircle,
  MapPin,
  Users,
  Briefcase,
  Clock,
  Award,
  Target,
  Lightbulb,
} from 'lucide-react';

export const metadata = getPageSEO('industryInsights');

export default function IndustryInsightsPage() {
  const schemas = getPageSchema('industryInsights');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <TrendingUp className="h-4 w-4" />
          Market Report
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Industry Insights & Trends
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Stay informed with the latest data on startup growth, salary
          benchmarks, and emerging sectors in the Indian ecosystem.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Key Stats Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="mb-1 text-3xl font-bold">3rd</div>
              <p className="text-sm text-muted-foreground">
                Largest Startup Ecosystem Globally
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <Building2 className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="mb-1 text-3xl font-bold">110+</div>
              <p className="text-sm text-muted-foreground">
                Unicorns in India (2024)
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="mb-1 text-3xl font-bold">₹6-15L</div>
              <p className="text-sm text-muted-foreground">
                Avg. Fresher Salary (Product Startups)
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <Zap className="mx-auto mb-2 h-8 w-8 text-primary" />
              <div className="mb-1 text-3xl font-bold">AI/ML</div>
              <p className="text-sm text-muted-foreground">
                Fastest Growing Sector
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Booming Sectors */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            Booming Sectors
          </h2>
          <p>
            The Indian startup landscape is shifting rapidly. While E-commerce
            and Fintech remain strong, new players are emerging with massive
            hiring potential.
          </p>

          <div className="not-prose mt-6 space-y-6">
            {[
              {
                name: 'CleanTech & EV',
                color: 'border-green-500 bg-green-50 dark:bg-green-950',
                desc: 'With government push and consumer awareness, Electric Vehicles and sustainable energy startups are hiring aggressively for engineering and R&D roles.',
                roles: [
                  'EV Battery Engineer',
                  'Sustainability Analyst',
                  'Hardware Engineer',
                ],
                salary: '₹6-20 LPA',
              },
              {
                name: 'DeepTech & AI',
                color: 'border-blue-500 bg-blue-50 dark:bg-blue-950',
                desc: 'Generative AI is transforming every industry. Startups building LLM applications, semiconductor design, and space tech are attracting massive funding.',
                roles: ['ML Engineer', 'Prompt Engineer', 'AI Product Manager'],
                salary: '₹10-40 LPA',
              },
              {
                name: 'HealthTech',
                color: 'border-purple-500 bg-purple-50 dark:bg-purple-950',
                desc: 'Post-pandemic, digital health, telemedicine, and personalized nutrition startups continue to grow, requiring both tech and medical expertise.',
                roles: [
                  'Health Data Analyst',
                  'Telemedicine PM',
                  'HealthTech Developer',
                ],
                salary: '₹6-18 LPA',
              },
              {
                name: 'B2B SaaS',
                color: 'border-orange-500 bg-orange-50 dark:bg-orange-950',
                desc: 'India is becoming a global SaaS hub. B2B software companies are scaling rapidly with product, engineering, and customer success roles.',
                roles: [
                  'Product Manager',
                  'Customer Success Manager',
                  'Solution Architect',
                ],
                salary: '₹8-30 LPA',
              },
              {
                name: 'Fintech 2.0',
                color: 'border-teal-500 bg-teal-50 dark:bg-teal-950',
                desc: 'Beyond payments—wealth management, insurance tech, and embedded finance are the new frontier. Strong demand for product and compliance roles.',
                roles: ['Risk Analyst', 'Fintech PM', 'Compliance Officer'],
                salary: '₹7-25 LPA',
              },
            ].map((sector, i) => (
              <div
                key={i}
                className={`rounded-r-lg border-l-4 p-5 ${sector.color}`}
              >
                <h3 className="mb-2 text-xl font-bold">{sector.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {sector.desc}
                </p>
                <div className="mb-2 flex flex-wrap gap-2">
                  {sector.roles.map((role, j) => (
                    <span
                      key={j}
                      className="rounded-full bg-background px-2 py-1 text-xs"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-semibold text-primary">
                  Salary Range: {sector.salary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* City-wise Comparison */}
        <section className="mb-16">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <MapPin className="h-6 w-6 text-primary" />
            Startup Hubs: City-wise Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="rounded-tl-lg p-3">City</th>
                  <th className="p-3">Startup Count</th>
                  <th className="p-3">Avg. Salary (SDE)</th>
                  <th className="p-3">Cost of Living</th>
                  <th className="rounded-tr-lg p-3">Top Sectors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    city: 'Bangalore',
                    count: '15,000+',
                    salary: '₹12-25 LPA',
                    cost: 'High',
                    sectors: 'Tech, AI, SaaS',
                  },
                  {
                    city: 'Delhi NCR',
                    count: '8,000+',
                    salary: '₹10-22 LPA',
                    cost: 'High',
                    sectors: 'Fintech, EdTech, D2C',
                  },
                  {
                    city: 'Mumbai',
                    count: '6,000+',
                    salary: '₹11-24 LPA',
                    cost: 'Very High',
                    sectors: 'Fintech, Media, Fashion',
                  },
                  {
                    city: 'Hyderabad',
                    count: '4,000+',
                    salary: '₹9-20 LPA',
                    cost: 'Medium',
                    sectors: 'Enterprise, Pharma, AI',
                  },
                  {
                    city: 'Pune',
                    count: '3,000+',
                    salary: '₹8-18 LPA',
                    cost: 'Medium',
                    sectors: 'SaaS, Auto, Manufacturing',
                  },
                  {
                    city: 'Chennai',
                    count: '2,500+',
                    salary: '₹8-17 LPA',
                    cost: 'Medium',
                    sectors: 'HealthTech, Auto, Hardware',
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-muted/50"
                  >
                    <td className="p-3 font-medium">{item.city}</td>
                    <td className="p-3">{item.count}</td>
                    <td className="p-3">{item.salary}</td>
                    <td className="p-3">{item.cost}</td>
                    <td className="p-3">{item.sectors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            *Data compiled from multiple industry reports (2024). Actual figures
            may vary.
          </p>
        </section>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Salary Benchmarks */}
            <section className="prose prose-lg mb-12 max-w-none">
              <h2>Salary Benchmarks (Fresher) by Role</h2>
              <p>
                Compensation varies significantly based on the type of startup
                (Bootstrapped vs. Funded) and role. Here's what to expect:
              </p>
              <div className="not-prose overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary text-left">
                      <th className="rounded-tl-lg p-3">Role</th>
                      <th className="p-3">Early Stage (Seed)</th>
                      <th className="rounded-tr-lg p-3">
                        Growth Stage (Series A+)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        role: 'Software Engineer',
                        early: '₹4L - ₹8L',
                        growth: '₹8L - ₹20L',
                      },
                      {
                        role: 'Data Scientist',
                        early: '₹5L - ₹9L',
                        growth: '₹10L - ₹25L',
                      },
                      {
                        role: 'Product Designer',
                        early: '₹3L - ₹6L',
                        growth: '₹6L - ₹14L',
                      },
                      {
                        role: 'Product Manager',
                        early: '₹6L - ₹10L',
                        growth: '₹12L - ₹25L',
                      },
                      {
                        role: 'Digital Marketer',
                        early: '₹3L - ₹5L',
                        growth: '₹5L - ₹12L',
                      },
                      {
                        role: 'Data Analyst',
                        early: '₹4L - ₹7L',
                        growth: '₹7L - ₹15L',
                      },
                      {
                        role: 'Business Development',
                        early: '₹3L - ₹6L',
                        growth: '₹6L - ₹12L',
                      },
                    ].map((item, i) => (
                      <tr
                        key={i}
                        className="border-b"
                      >
                        <td className="p-3 font-medium">{item.role}</td>
                        <td className="p-3">{item.early}</td>
                        <td className="p-3">{item.growth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                *Note: These are approximate ranges for Tier-1 cities
                (Bangalore, Gurgaon, Mumbai). Startups often offer ESOPs
                (Equity) over and above the salary.
              </p>
            </section>

            {/* Startup Stages */}
            <section className="mb-12">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                <Building2 className="h-6 w-6 text-primary" />
                Understanding Startup Stages
              </h2>

              <div className="space-y-4">
                {[
                  {
                    stage: 'Pre-Seed / Bootstrapped',
                    size: '2-10 employees',
                    risk: 'Very High',
                    pros: [
                      'Massive learning opportunity',
                      'Wear multiple hats',
                      'High ownership',
                    ],
                    cons: [
                      'Below-market salary',
                      'No job security',
                      'No structured processes',
                    ],
                  },
                  {
                    stage: 'Seed Funded',
                    size: '10-50 employees',
                    risk: 'High',
                    pros: [
                      'Still early to shape culture',
                      'Good equity potential',
                      'Fast growth',
                    ],
                    cons: [
                      'Still uncertain future',
                      'Lean resources',
                      'Unpredictable workload',
                    ],
                  },
                  {
                    stage: 'Series A',
                    size: '50-150 employees',
                    risk: 'Medium-High',
                    pros: [
                      'Product-market fit achieved',
                      'Better salaries',
                      'Some structure emerging',
                    ],
                    cons: [
                      'Equity less impactful',
                      'Politics may start',
                      'More specialization',
                    ],
                  },
                  {
                    stage: 'Series B+',
                    size: '150-500 employees',
                    risk: 'Medium',
                    pros: [
                      'Competitive salaries',
                      'Clear growth paths',
                      'Established processes',
                    ],
                    cons: [
                      'Less startup feel',
                      'Slower decision making',
                      'More bureaucracy',
                    ],
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border p-5"
                  >
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg font-bold">{item.stage}</h3>
                      <div className="flex gap-2 text-xs">
                        <span className="rounded bg-muted px-2 py-1">
                          {item.size}
                        </span>
                        <span className="rounded bg-red-100 px-2 py-1 text-red-700">
                          Risk: {item.risk}
                        </span>
                      </div>
                    </div>
                    <div className="grid gap-4 text-sm md:grid-cols-2">
                      <div>
                        <p className="mb-1 font-semibold text-green-600">
                          Pros:
                        </p>
                        <ul className="space-y-1">
                          {item.pros.map((pro, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-1"
                            >
                              <CheckCircle className="h-3 w-3 text-green-600" />{' '}
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-1 font-semibold text-red-600">Cons:</p>
                        <ul className="space-y-1">
                          {item.cons.map((con, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-1"
                            >
                              <span className="text-red-500">✗</span> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Startup vs. Corporate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1 text-sm font-bold">Learning Curve</h4>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-[95%] bg-primary"></div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Startups: Extremely Steep
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold">Structure</h4>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-[40%] bg-primary"></div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Startups: Fluid/Chaotic
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold">Impact</h4>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-[90%] bg-primary"></div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Startups: High Visibility
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-bold">
                      Work-Life Balance
                    </h4>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-[35%] bg-primary"></div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Startups: Often Challenging
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="pt-6">
                <h3 className="mb-2 text-lg font-bold">Calculate Your Worth</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Use our salary calculator to understand your take-home pay
                  based on these benchmarks.
                </p>
                <Button
                  className="w-full"
                  asChild
                >
                  <Link href="/tools/salary-calculator">Open Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Pro Tips
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>
                      Always ask about ESOPs/equity—it can be worth millions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>
                      Check Glassdoor/AmbitionBox for real salary data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>
                      Funded startups pay 20-40% more than bootstrapped ones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>
                      Research the founders' background before joining
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQs */}
        <section className="prose prose-lg mb-16 max-w-none">
          <h2>Frequently Asked Questions</h2>

          <div className="not-prose space-y-4">
            {[
              {
                q: 'Is it better to join a startup or a big company as a fresher?',
                a: "It depends on your personality. Startups offer faster learning, more responsibility, and variety but come with uncertainty and lower initial pay. Big companies offer stability, structured training, and brand value but slower growth. If you're entrepreneurial and can handle ambiguity, startups are great. If you prefer structure and mentorship, start with a bigger company.",
              },
              {
                q: 'What is ESOP and is it worth it?',
                a: "ESOP (Employee Stock Ownership Plan) gives you company shares at a fixed price. If the company grows, your shares become valuable. At successful startups, ESOPs have made early employees millionaires. However, most startups fail. Evaluate ESOPs as a lottery ticket—don't rely on them, but they can be a huge bonus.",
              },
              {
                q: 'How do I verify if a startup is legitimate?',
                a: 'Check: (1) Funding on Crunchbase/LinkedIn (2) Founder backgrounds (3) Glassdoor reviews (4) News articles (5) Talk to current/former employees. Red flags: unrealistic promises, vague business model, bad Glassdoor reviews, founders with no track record.',
              },
              {
                q: 'Should I negotiate salary at a startup?',
                a: 'Absolutely! Startups expect negotiation. Research market rates beforehand. Besides base salary, negotiate: ESOPs, joining bonus, learning budget, flexible work, job title. Early-stage startups may offer equity instead of higher salary—evaluate based on your financial situation.',
              },
              {
                q: "What's the typical work-life balance at startups?",
                a: 'Honestly, work-life balance at early-stage startups can be challenging. 50-60 hour weeks are common during crunch times. However, many startups offer flexibility (remote work, no strict timings). As startups mature (Series B+), work-life balance typically improves. Ask directly during interviews.',
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
        <section className="rounded-2xl bg-secondary p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Start Your Startup Journey?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Browse thousands of internship and job opportunities at top
            startups. Let us help you find your perfect match.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/internships">Browse Internships</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/tools/salary-calculator">Calculate Salary</Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/skill-development"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Skill Development</h3>
              <p className="text-sm text-muted-foreground">In-demand skills</p>
            </Link>
            <Link
              href="/resources/career-planning"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Career Planning</h3>
              <p className="text-sm text-muted-foreground">
                Map your professional journey
              </p>
            </Link>
            <Link
              href="/blog/understanding-startup-culture"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Startup Culture Blog</h3>
              <p className="text-sm text-muted-foreground">
                What to expect at startups
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
