import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  LineChart,
  PieChart,
  BarChart,
  Brain,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Science & Analytics Internships: Complete Guide',
  description:
    'Break into data science and analytics with this comprehensive internship guide. Learn required skills, tools, and how to build a strong portfolio.',
  keywords: [
    'data science internship',
    'analytics internship india',
    'data analyst internship',
    'machine learning internship',
    'data science career',
  ],
  openGraph: {
    title: 'Data Science & Analytics Internships: Complete Guide',
    description: 'Start your data career with the right internship.',
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
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <LineChart className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Data Science & Analytics Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Data roles are booming. Learn how to break into data science or
            analytics with the right skills, projects, and internship strategy.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Data Careers in India
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">₹15-50K</span>
              <span>monthly stipend range for data interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">30%</span>
              <span>YoY growth in data job openings</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">Python</span>
              <span>most required skill</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-orange-600">SQL</span>
              <span>second most required skill</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                1. Data Analyst vs Data Scientist
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
                href="#portfolio"
                className="text-primary hover:underline"
              >
                3. Building Your Portfolio
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
              <span>Python + SQL + Excel are the foundational skills</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Start with Data Analyst roles—easier entry point</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Kaggle projects and competitions boost your profile</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Visualization skills (Tableau/Power BI) are highly valued
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Data Analyst vs Data Scientist
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Data Analyst</p>
              <ul className="mt-2 space-y-1">
                <li>• Analyze existing data for insights</li>
                <li>• Create reports and dashboards</li>
                <li>• SQL, Excel, Tableau/Power BI</li>
                <li>• Easier entry point</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Data Scientist</p>
              <ul className="mt-2 space-y-1">
                <li>• Build predictive models</li>
                <li>• Machine learning & statistics</li>
                <li>• Python, ML libraries, math</li>
                <li>• Requires more technical depth</li>
              </ul>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Recommendation:</strong> Start with Data Analyst
              internships, then transition to Data Science as you build ML
              skills.
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Python:</strong> Pandas, NumPy, Matplotlib, Seaborn
            </li>
            <li>
              <strong>SQL:</strong> Joins, aggregations, window functions
            </li>
            <li>
              <strong>Excel:</strong> Pivot tables, VLOOKUP, basic analysis
            </li>
            <li>
              <strong>Statistics:</strong> Mean, median, distributions,
              hypothesis testing
            </li>
          </ul>

          <h3>For Data Science Roles</h3>
          <ul>
            <li>Machine learning (Scikit-learn)</li>
            <li>Deep learning basics (TensorFlow/PyTorch)</li>
            <li>Feature engineering</li>
            <li>Linear algebra and calculus</li>
          </ul>
        </section>

        {/* Section 3: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BarChart className="h-6 w-6 text-primary" />
            3. Building Your Portfolio
          </h2>

          <h3>Project Ideas</h3>
          <ul>
            <li>
              <strong>EDA Project:</strong> Analyze a public dataset (COVID,
              IPL, movies)
            </li>
            <li>
              <strong>Dashboard:</strong> Build a Tableau/Power BI dashboard
            </li>
            <li>
              <strong>ML Project:</strong> Predict house prices, churn, etc.
            </li>
            <li>
              <strong>Kaggle:</strong> Compete and earn rankings
            </li>
          </ul>

          <h3>Where to Showcase</h3>
          <ul>
            <li>GitHub (Jupyter notebooks)</li>
            <li>Kaggle profile</li>
            <li>Personal portfolio website</li>
            <li>LinkedIn posts about your projects</li>
          </ul>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PieChart className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>Product Companies</h3>
          <p>Flipkart, Swiggy, Zomato, Meesho, CRED, Razorpay, Ola, Uber</p>

          <h3>Analytics Firms</h3>
          <p>
            Mu Sigma, Fractal Analytics, Tiger Analytics, LatentView, Lemnisk
          </p>

          <h3>Tech Giants</h3>
          <p>Google, Microsoft, Amazon (more competitive)</p>
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
              <strong>SQL Test:</strong> Write queries on the spot
            </li>
            <li>
              <strong>Case Study:</strong> Analyze a business problem
            </li>
            <li>
              <strong>Technical:</strong> Stats, Python, ML concepts
            </li>
            <li>
              <strong>Project Discussion:</strong> Walk through your portfolio
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
              <p className="font-bold">
                Do I need a statistics/math background?
              </p>
              <p className="mt-2 text-muted-foreground">
                Helpful but not required. Many successful data professionals
                come from non-math backgrounds but learned statistics along the
                way.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I get a certification?</p>
              <p className="mt-2 text-muted-foreground">
                Projects matter more than certificates, but Google Data
                Analytics or IBM certifications can help for entry-level roles.
              </p>
            </div>
          </div>
        </section>

        {/* Role Deep Dives */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Data Roles: Deep Dive
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-orange-600">Data Analyst</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Analyze data to answer business questions. Create reports,
                dashboards, and insights that drive decisions.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹15K-35K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    SQL, Excel, Tableau/Power BI
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">
                    Sr. Analyst → Lead → Manager
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-orange-600">
                Business Analyst
              </h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Bridge between business and data teams. Translate business
                requirements into data solutions.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹20K-40K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">
                    SQL, Communication, Domain
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">
                    Sr. BA → Product Manager
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-orange-600">Data Scientist</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Build predictive models and machine learning solutions. More
                technical, requires programming and ML expertise.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹30K-60K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Python, ML, Statistics</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">
                    Sr. DS → Lead → Chief DS
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-3 font-bold text-orange-600">ML Engineer</h4>
              <p className="mb-3 text-sm text-muted-foreground">
                Deploy ML models to production. Focus on scalability, MLOps, and
                engineering best practices.
              </p>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Typical Stipend:</span>
                  <span className="font-semibold">₹40K-80K/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Key Skills:</span>
                  <span className="font-semibold">Python, MLOps, Cloud</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Path:</span>
                  <span className="font-semibold">
                    Sr. MLE → Staff → Principal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Table */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Data Internship Stipends
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Company Type
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
                  <td className="border p-3 font-semibold">FAANG/Top Tech</td>
                  <td className="border p-3">₹50K-1L+/month</td>
                  <td className="border p-3">2-3 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Funded Startups</td>
                  <td className="border p-3">₹25K-50K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Analytics Firms</td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">2-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Product Companies
                  </td>
                  <td className="border p-3">₹25K-45K/month</td>
                  <td className="border p-3">3-6 months</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Early Startups</td>
                  <td className="border p-3">₹10K-25K/month</td>
                  <td className="border p-3">Variable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SQL Interview Prep */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BarChart className="h-6 w-6 text-primary" />
            SQL Interview Questions
          </h2>

          <p>
            SQL is tested in almost every data interview. Here are common
            patterns:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Basic: Filter and Aggregate</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "Find total sales by region for Q1"
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-xs">
                SELECT region, SUM(sales) FROM orders{'\n'}
                WHERE order_date BETWEEN '2025-01-01' AND '2025-03-31'{'\n'}
                GROUP BY region
              </pre>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Intermediate: Joins</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "Find customers who placed orders but never received delivery"
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-xs">
                SELECT c.name FROM customers c{'\n'}
                JOIN orders o ON c.id = o.customer_id{'\n'}
                LEFT JOIN deliveries d ON o.id = d.order_id{'\n'}
                WHERE d.id IS NULL
              </pre>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold">Advanced: Window Functions</p>
              <p className="mt-2 text-sm text-muted-foreground">
                "Find month-over-month growth in revenue"
              </p>
              <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-xs">
                SELECT month, revenue,{'\n'}
                LAG(revenue) OVER (ORDER BY month) as prev,{'\n'}
                (revenue - LAG(revenue) OVER (ORDER BY month)) / {'\n'}
                LAG(revenue) OVER (ORDER BY month) * 100 as growth_pct{'\n'}
                FROM monthly_sales
              </pre>
            </div>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            12-Week Learning Roadmap
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                1-2
              </div>
              <div>
                <p className="font-semibold">Weeks 1-2: Python Basics</p>
                <p className="text-sm text-muted-foreground">
                  Variables, loops, functions, data structures. Practice on
                  HackerRank or LeetCode (easy problems).
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                3-4
              </div>
              <div>
                <p className="font-semibold">Weeks 3-4: Data Manipulation</p>
                <p className="text-sm text-muted-foreground">
                  Pandas, NumPy fundamentals. Work through tutorials with real
                  datasets. Practice filtering, grouping, merging.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                5-6
              </div>
              <div>
                <p className="font-semibold">Weeks 5-6: SQL Mastery</p>
                <p className="text-sm text-muted-foreground">
                  Joins, aggregations, subqueries, window functions. Practice on
                  SQLZoo, LeetCode, and StrataScratch.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                7-8
              </div>
              <div>
                <p className="font-semibold">Weeks 7-8: Visualization</p>
                <p className="text-sm text-muted-foreground">
                  Matplotlib, Seaborn, and Tableau or Power BI. Build your first
                  interactive dashboard.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                9-10
              </div>
              <div>
                <p className="font-semibold">
                  Weeks 9-10: Statistics & ML Basics
                </p>
                <p className="text-sm text-muted-foreground">
                  Probability, distributions, hypothesis testing. Intro to
                  Scikit-learn: regression, classification.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                11-12
              </div>
              <div>
                <p className="font-semibold">Weeks 11-12: Portfolio Projects</p>
                <p className="text-sm text-muted-foreground">
                  Build 2-3 complete projects. EDA, ML model, and a business
                  dashboard. Host on GitHub and Kaggle.
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
                Should I learn R or Python?
              </h3>
              <p className="text-muted-foreground">
                Python. It's more versatile, has better ML libraries, and is
                more commonly used in industry. R is mainly for academia and
                specific statistical roles.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How important is deep learning?
              </h3>
              <p className="text-muted-foreground">
                Not essential for most data analyst/scientist roles. Focus on
                classical ML first. Deep learning is needed mainly for
                specialized roles (NLP, computer vision).
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I transition from software engineering?
              </h3>
              <p className="text-muted-foreground">
                Yes! SWEs often make great data engineers and ML engineers.
                Learn SQL, statistics, and ML concepts. Your coding skills are a
                major advantage.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Which is better: product company or analytics firm?
              </h3>
              <p className="text-muted-foreground">
                Product companies: work on internal problems, see business
                impact. Analytics firms: exposure to multiple clients and
                industries. Both are valuable.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I stand out on Kaggle?
              </h3>
              <p className="text-muted-foreground">
                Write clean, well-documented notebooks. Enter competitions and
                aim for top 20%. Publish datasets and kernels. Engage with the
                community.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the salary growth like?
              </h3>
              <p className="text-muted-foreground">
                Entry-level: ₹6-12 LPA. After 3-5 years: ₹18-35 LPA. Senior data
                scientists at top companies: ₹50L+. ML engineers often earn even
                more.
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
            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5 dark:bg-orange-950">
              <p className="font-semibold text-orange-900 dark:text-orange-100">
                "From mechanical engineering to data science..."
              </p>
              <p className="mt-2 text-sm text-orange-800 dark:text-orange-200">
                "I was a mechanical engineering student with zero coding
                background. Spent 6 months learning Python and SQL on my own.
                Built 5 Kaggle projects. Got a data analyst internship at
                Flipkart." — Arjun, IIT Roorkee
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5 dark:bg-orange-950">
              <p className="font-semibold text-orange-900 dark:text-orange-100">
                "Kaggle competitions opened doors..."
              </p>
              <p className="mt-2 text-sm text-orange-800 dark:text-orange-200">
                "I'm from a tier-3 college. But I was a Kaggle Expert with 3
                competition medals. That got me interviews at companies that
                wouldn't normally look at my college. Now at Tiger Analytics." —
                Priya, Pune
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5 dark:bg-orange-950">
              <p className="font-semibold text-orange-900 dark:text-orange-100">
                "Started as analyst, now ML Engineer..."
              </p>
              <p className="mt-2 text-sm text-orange-800 dark:text-orange-200">
                "I started as a data analyst intern at a small startup. Learned
                ML on the job and gradually transitioned. 3 years later, I'm an
                ML Engineer at a Series C startup earning 3x my first salary." —
                Rohit, Bengaluru
              </p>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Data Internship Readiness Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Comfortable with Python (Pandas, NumPy)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can write complex SQL queries</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand basic statistics</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have 2+ portfolio projects on GitHub/Kaggle</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Can create visualizations (Tableau/Power BI)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Know how to explain insights to non-technical people</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Have practiced SQL interview questions</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Resume highlights data projects with metrics</span>
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
              <h4 className="mb-2 font-bold">Free Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Google Data Analytics Certificate (Coursera)</li>
                <li>• CS50's Introduction to Data Science (Harvard)</li>
                <li>• Kaggle Courses (Python, Pandas, ML)</li>
                <li>• freeCodeCamp Data Analysis with Python</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Practice Platforms</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• StrataScratch (SQL interview questions)</li>
                <li>• Mode Analytics SQL Tutorial</li>
                <li>• LeetCode Database (SQL)</li>
                <li>• Kaggle (competitions and datasets)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Books</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Python for Data Analysis - Wes McKinney</li>
                <li>• Naked Statistics - Charles Wheelan</li>
                <li>• Hands-On Machine Learning - Aurélien Géron</li>
                <li>• Storytelling with Data - Cole Nussbaumer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Interview Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not explaining your thought process
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Interviewers want to see how you think, not just the final
                  answer. Verbalize your approach.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Forgetting to ask clarifying questions
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Data problems have many interpretations. Ask about data
                  quality, definitions, and edge cases.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Overcomplicating solutions
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Start simple. A basic working solution is better than an
                  incomplete complex one. Iterate from there.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not connecting to business impact
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always tie your analysis back to business outcomes. "So what?"
                  is the key question to answer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Data Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-orange-600">
                9:00
              </div>
              <div>
                <p className="font-semibold">Team Standup</p>
                <p className="text-sm text-muted-foreground">
                  Share progress on current analysis, discuss blockers, and
                  align on priorities for the day.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-orange-600">
                10:00
              </div>
              <div>
                <p className="font-semibold">
                  Query Writing & Data Exploration
                </p>
                <p className="text-sm text-muted-foreground">
                  Write SQL queries, explore data, understand patterns. This is
                  the core of daily work.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-orange-600">
                14:00
              </div>
              <div>
                <p className="font-semibold">Stakeholder Meeting</p>
                <p className="text-sm text-muted-foreground">
                  Present findings to product/business teams. Learn to
                  communicate insights to non-technical audiences.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-orange-600">
                16:00
              </div>
              <div>
                <p className="font-semibold">Dashboard Building</p>
                <p className="text-sm text-muted-foreground">
                  Create or update dashboards in Tableau/Power BI. Visualize
                  data to make it actionable.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <div className="flex-shrink-0 font-bold text-orange-600">
                17:30
              </div>
              <div>
                <p className="font-semibold">Documentation & Learning</p>
                <p className="text-sm text-muted-foreground">
                  Document your work, learn new techniques. Great time to take
                  online courses or read documentation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Conclusion */}
        <section>
          <h2>Start Your Data Journey</h2>
          <p>
            Data careers offer great growth potential. Start with the
            fundamentals, build projects, and don't stress about knowing
            everything—learn as you go.
          </p>
          <p>
            The field is vast, but every expert started as a beginner. Pick one
            skill, master it, then move to the next. Consistency beats
            intensity.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best time to start was yesterday. The second best time is now.
            📊
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/software-development-internships-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              SDE Internship Guide
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building Guide
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Tech Internship
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
                Based on data industry insights and successful placements.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
