import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Briefcase,
  DollarSign,
  PiggyBank,
  CreditCard,
  Wallet,
  FileText,
  AlertCircle,
  Globe,
  Zap,
  Star,
  Shield,
  Heart,
  GraduationCap,
  Building,
  Calculator,
  BarChart3,
  Percent,
  Receipt,
  Landmark,
  BadgeIndianRupee,
  TrendingDown,
  Banknote,
  CircleDollarSign,
  LineChart,
  PieChart,
  Coins,
  HandCoins,
  IndianRupee,
  ChevronRight,
  XCircle,
  ThumbsUp,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Personal Finance for Students: Complete Guide | Sproutern',
  description:
    'Master personal finance as a student with our comprehensive guide. Learn budgeting, saving, investing, managing student loans, building credit, and achieving financial freedom. Expert tips for Indian students.',
  keywords: [
    'personal finance for students',
    'student money management',
    'budgeting for college students',
    'student investing India',
    'financial literacy students',
    'save money as student',
    'student budget tips',
    'money management college',
    'student financial planning',
    'first salary planning',
    'student savings tips',
    'investing for beginners India',
    'SIP for students',
    'mutual funds beginners',
    'student credit score',
    'education loan India',
    'financial independence students',
  ],
  openGraph: {
    title: 'Personal Finance for Students: Complete Guide ',
    description:
      'Your ultimate roadmap to financial freedom. Learn budgeting, saving, investing, and smart money management as a student.',
    type: 'article',
    publishedTime: '2025-01-02T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-green-600">
            <DollarSign className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Financial Literacy
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Personal Finance for Students: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your comprehensive roadmap to financial freedom. Master budgeting,
            saving, investing, and smart money management to build wealth from
            your student years. Everything you need to know about personal
            finance tailored for Indian students.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Finance Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>45 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Money management is one of the most crucial life skills you&apos;ll
            ever learn, yet it&apos;s rarely taught in schools or colleges. As a
            student, you&apos;re at the perfect stage to develop healthy
            financial habits that will serve you for a lifetime. The earlier you
            start, the greater advantage you&apos;ll have thanks to the power of
            compound interest.
          </p>
          <p>
            Whether you&apos;re receiving pocket money from parents, earning
            through part-time jobs, managing a scholarship stipend, or preparing
            for your first job, understanding personal finance is essential.
            This guide will take you from complete beginner to financially savvy
            individual, covering everything from basic budgeting to advanced
            investing.
          </p>
          <p>
            In India, financial literacy remains surprisingly low even among
            educated professionals. According to Standard &amp; Poor&apos;s
            Global Financial Literacy Survey, only 24% of Indian adults are
            financially literate. By reading this guide and implementing its
            principles, you&apos;ll be ahead of 76% of the population in
            understanding money.
          </p>
          <p>
            This comprehensive guide is specifically designed for Indian
            students and covers everything from opening your first bank account
            to building a diversified investment portfolio. We&apos;ll break
            down complex financial concepts into simple, actionable steps that
            you can start implementing today.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why-finance"
                className="text-primary hover:underline"
              >
                1. Why Financial Literacy Matters
              </a>
            </li>
            <li>
              <a
                href="#money-mindset"
                className="text-primary hover:underline"
              >
                2. Developing a Money Mindset
              </a>
            </li>
            <li>
              <a
                href="#banking-basics"
                className="text-primary hover:underline"
              >
                3. Banking Basics for Students
              </a>
            </li>
            <li>
              <a
                href="#budgeting"
                className="text-primary hover:underline"
              >
                4. Budgeting: Foundation of Finance
              </a>
            </li>
            <li>
              <a
                href="#saving-strategies"
                className="text-primary hover:underline"
              >
                5. Saving Strategies That Work
              </a>
            </li>
            <li>
              <a
                href="#emergency-fund"
                className="text-primary hover:underline"
              >
                6. Building an Emergency Fund
              </a>
            </li>
            <li>
              <a
                href="#income-sources"
                className="text-primary hover:underline"
              >
                7. Income Sources for Students
              </a>
            </li>
            <li>
              <a
                href="#understanding-debt"
                className="text-primary hover:underline"
              >
                8. Understanding Good vs Bad Debt
              </a>
            </li>
            <li>
              <a
                href="#education-loans"
                className="text-primary hover:underline"
              >
                9. Education Loans Demystified
              </a>
            </li>
            <li>
              <a
                href="#credit-score"
                className="text-primary hover:underline"
              >
                10. Building Your Credit Score
              </a>
            </li>
            <li>
              <a
                href="#investing-basics"
                className="text-primary hover:underline"
              >
                11. Investing Basics
              </a>
            </li>
            <li>
              <a
                href="#investment-options"
                className="text-primary hover:underline"
              >
                12. Investment Options in India
              </a>
            </li>
            <li>
              <a
                href="#sip-guide"
                className="text-primary hover:underline"
              >
                13. SIP: Start with ₹500/Month
              </a>
            </li>
            <li>
              <a
                href="#tax-basics"
                className="text-primary hover:underline"
              >
                14. Tax Basics for Students
              </a>
            </li>
            <li>
              <a
                href="#first-salary"
                className="text-primary hover:underline"
              >
                15. First Salary Planning
              </a>
            </li>
            <li>
              <a
                href="#money-mistakes"
                className="text-primary hover:underline"
              >
                16. Common Money Mistakes to Avoid
              </a>
            </li>
            <li>
              <a
                href="#apps-tools"
                className="text-primary hover:underline"
              >
                17. Best Apps and Tools
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                18. FAQs
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
                Start investing with as little as ₹500/month through SIPs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Follow the 50/30/20 rule: 50% needs, 30% wants, 20% savings
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Build an emergency fund covering 3-6 months of expenses
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                ₹1000 invested monthly at age 20 becomes ₹1.5 Crore by age 60
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Avoid lifestyle inflation - increase savings as income grows
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Your credit score starts at 18 - begin building it early
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why Financial Literacy Matters */}
        <section
          id="why-finance"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            1. Why Financial Literacy Matters for Students
          </h2>

          <p>
            Financial literacy is not just about knowing how to count money or
            balance a checkbook. It&apos;s about understanding how money works
            and making it work for you. As a student, developing financial
            literacy early gives you a significant advantage in life.
          </p>

          <h3>The Reality Check</h3>
          <p>
            Consider these eye-opening statistics about financial literacy and
            its impact:
          </p>
          <ul>
            <li>
              78% of Indians live paycheck to paycheck despite earning decent
              salaries
            </li>
            <li>
              Only 2% of Indians invest in the stock market compared to 55% of
              Americans
            </li>
            <li>
              The average Indian saves only 5-10% of income vs. the recommended
              20-30%
            </li>
            <li>
              60% of professionals have no retirement savings beyond mandatory
              PF
            </li>
            <li>
              Most Indians rely on traditional, low-return investments like FDs
              and gold
            </li>
          </ul>

          <h3>Why Start Early? The Power of Compound Interest</h3>
          <p>
            Albert Einstein allegedly called compound interest the &quot;eighth
            wonder of the world.&quot; Here&apos;s why time is your greatest
            asset when it comes to building wealth:
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Starting Age</th>
                  <th className="p-3 text-left">Monthly Investment</th>
                  <th className="p-3 text-left">Value at 60 (12% returns)</th>
                  <th className="p-3 text-left">Total Invested</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">20 years old</td>
                  <td className="p-3">₹5,000</td>
                  <td className="p-3 font-bold text-green-600">₹5.30 Crore</td>
                  <td className="p-3">₹24 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">25 years old</td>
                  <td className="p-3">₹5,000</td>
                  <td className="p-3 text-green-600">₹2.89 Crore</td>
                  <td className="p-3">₹21 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">30 years old</td>
                  <td className="p-3">₹5,000</td>
                  <td className="p-3 text-yellow-600">₹1.58 Crore</td>
                  <td className="p-3">₹18 Lakhs</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">35 years old</td>
                  <td className="p-3">₹5,000</td>
                  <td className="p-3 text-red-600">₹84 Lakhs</td>
                  <td className="p-3">₹15 Lakhs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Notice how starting just 5 years earlier at age 20 versus 25 nearly
            doubles your final wealth! This is the magic of compound interest -
            your money earns returns, and those returns earn more returns.
          </p>

          <h3>Benefits of Being Financially Literate</h3>
          <ul>
            <li>
              <strong>Freedom:</strong> Make life decisions without money being
              the limiting factor
            </li>
            <li>
              <strong>Security:</strong> Handle emergencies without panic or
              debt
            </li>
            <li>
              <strong>Opportunities:</strong> Take risks like starting a
              business or further studies
            </li>
            <li>
              <strong>Peace of Mind:</strong> Sleep better knowing your finances
              are in order
            </li>
            <li>
              <strong>Better Relationships:</strong> Money problems are a
              leading cause of stress and conflict
            </li>
            <li>
              <strong>Early Retirement:</strong> Achieve FIRE (Financial
              Independence, Retire Early)
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> The best time to learn about money was
              when you were a child. The second best time is now. Don&apos;t
              wait until you have &quot;more money&quot; to start learning -
              start today with whatever amount you have.
            </div>
          </div>
        </section>

        {/* Section 2: Developing a Money Mindset */}
        <section
          id="money-mindset"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Developing a Healthy Money Mindset
          </h2>

          <p>
            Before diving into practical strategies, it&apos;s crucial to
            develop the right mindset about money. Your beliefs and attitudes
            towards money significantly impact your financial decisions and
            outcomes.
          </p>

          <h3>Common Money Myths to Unlearn</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-4 w-4" /> Myth
              </p>
              <p className="text-sm">
                &quot;I&apos;m too young to think about money and
                investments.&quot;
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <p className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                <CheckCircle className="h-4 w-4" /> Reality
              </p>
              <p className="text-sm">
                Youth is your biggest advantage due to compound interest.
                Starting at 20 vs 30 can double your retirement wealth.
              </p>
            </div>
          </div>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-4 w-4" /> Myth
              </p>
              <p className="text-sm">
                &quot;I need a lot of money to start investing.&quot;
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <p className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                <CheckCircle className="h-4 w-4" /> Reality
              </p>
              <p className="text-sm">
                You can start SIPs with just ₹100-500 per month. Many apps allow
                investing with minimal amounts.
              </p>
            </div>
          </div>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="mb-2 flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-4 w-4" /> Myth
              </p>
              <p className="text-sm">
                &quot;Stock market is gambling and only for rich people.&quot;
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <p className="mb-2 flex items-center gap-2 font-bold text-green-700 dark:text-green-400">
                <CheckCircle className="h-4 w-4" /> Reality
              </p>
              <p className="text-sm">
                Long-term equity investments through mutual funds have given
                12-15% annual returns historically. It&apos;s about patience,
                not gambling.
              </p>
            </div>
          </div>

          <h3>The Abundance vs Scarcity Mindset</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-200 p-4">
              <h4 className="mb-2 font-bold text-red-600">Scarcity Mindset</h4>
              <ul className="space-y-1 text-sm">
                <li>• &quot;I can&apos;t afford that&quot;</li>
                <li>• Fear of losing money</li>
                <li>• Hoarding cash in savings accounts</li>
                <li>• Avoiding all financial risks</li>
                <li>• Believing wealth is fixed</li>
                <li>• Jealousy of others&apos; success</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 p-4">
              <h4 className="mb-2 font-bold text-green-600">
                Abundance Mindset
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• &quot;How can I afford that?&quot;</li>
                <li>• Focus on growing wealth</li>
                <li>• Investing for growth</li>
                <li>• Taking calculated risks</li>
                <li>• Believing wealth can be created</li>
                <li>• Learning from others&apos; success</li>
              </ul>
            </div>
          </div>

          <h3>Key Money Principles to Adopt</h3>
          <ul>
            <li>
              <strong>Pay Yourself First:</strong> Save before you spend, not
              after
            </li>
            <li>
              <strong>Live Below Your Means:</strong> Spend less than you earn,
              always
            </li>
            <li>
              <strong>Money is a Tool:</strong> It&apos;s not good or evil, it
              amplifies who you are
            </li>
            <li>
              <strong>Time is Money:</strong> Your time has value, invest it
              wisely
            </li>
            <li>
              <strong>Delayed Gratification:</strong> The ability to wait for
              rewards builds wealth
            </li>
            <li>
              <strong>Continuous Learning:</strong> Keep educating yourself
              about money
            </li>
          </ul>

          <h3>Setting Financial Goals</h3>
          <p>
            Without clear goals, managing money becomes directionless. Use the
            SMART framework:
          </p>
          <div className="not-prose my-6 rounded-lg border p-4">
            <h4 className="mb-3 font-bold">Example SMART Financial Goal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Specific:</strong> Save ₹50,000 for an emergency fund
              </li>
              <li>
                <strong>Measurable:</strong> Track monthly savings progress
              </li>
              <li>
                <strong>Achievable:</strong> Save ₹4,200/month for 12 months
              </li>
              <li>
                <strong>Relevant:</strong> Emergency fund provides financial
                security
              </li>
              <li>
                <strong>Time-bound:</strong> Complete by December
              </li>
            </ul>
          </div>

          <h3>Short, Medium, and Long-Term Goals</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Term</th>
                  <th className="p-3 text-left">Timeline</th>
                  <th className="p-3 text-left">Example Goals</th>
                  <th className="p-3 text-left">Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Short</td>
                  <td className="p-3">0-1 year</td>
                  <td className="p-3">Emergency fund, new phone, trip</td>
                  <td className="p-3">Savings account, FD</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Medium</td>
                  <td className="p-3">1-5 years</td>
                  <td className="p-3">Higher education, bike, wedding</td>
                  <td className="p-3">Debt funds, balanced funds</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Long</td>
                  <td className="p-3">5+ years</td>
                  <td className="p-3">House, retirement, children</td>
                  <td className="p-3">Equity funds, stocks, PPF</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Banking Basics */}
        <section
          id="banking-basics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Landmark className="h-6 w-6 text-primary" />
            3. Banking Basics for Students
          </h2>

          <p>
            Your bank account is the foundation of your financial life. As a
            student, understanding how to choose and use banking services
            efficiently is the first step towards financial management.
          </p>

          <h3>Types of Bank Accounts</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold text-primary">Savings Account</h4>
              <ul className="space-y-1 text-sm">
                <li>• Basic account for students</li>
                <li>• Earns 2.5-4% interest annually</li>
                <li>• Limited free transactions</li>
                <li>• Minimum balance requirements</li>
                <li>• Debit card included</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold text-primary">
                Zero Balance Account
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• No minimum balance required</li>
                <li>• Perfect for students</li>
                <li>• Basic banking features</li>
                <li>• Usually offered by digital banks</li>
                <li>• Limited to basic features</li>
              </ul>
            </div>
          </div>

          <h3>Best Banks for Students in India</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Bank</th>
                  <th className="p-3 text-left">Account Type</th>
                  <th className="p-3 text-left">Min Balance</th>
                  <th className="p-3 text-left">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">SBI</td>
                  <td className="p-3">Basic Savings</td>
                  <td className="p-3">₹0 (BSBDA)</td>
                  <td className="p-3">Widest ATM network</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Kotak 811</td>
                  <td className="p-3">Digital Account</td>
                  <td className="p-3">₹0</td>
                  <td className="p-3">6% interest on ₹1L+</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">HDFC</td>
                  <td className="p-3">Kids Advantage</td>
                  <td className="p-3">₹0 (minors)</td>
                  <td className="p-3">Financial literacy program</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">ICICI</td>
                  <td className="p-3">Campus Power</td>
                  <td className="p-3">₹0</td>
                  <td className="p-3">Special student benefits</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Fi Money</td>
                  <td className="p-3">Digital Neo-bank</td>
                  <td className="p-3">₹0</td>
                  <td className="p-3">Smart saving features</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Jupiter</td>
                  <td className="p-3">Digital Account</td>
                  <td className="p-3">₹0</td>
                  <td className="p-3">Expense tracking, rewards</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Essential Banking Services to Know</h3>
          <ul>
            <li>
              <strong>UPI (Unified Payments Interface):</strong> Free instant
              money transfers via apps like Google Pay, PhonePe, Paytm
            </li>
            <li>
              <strong>IMPS:</strong> Immediate Payment Service for instant
              transfers 24/7
            </li>
            <li>
              <strong>NEFT:</strong> National Electronic Fund Transfer for
              larger amounts
            </li>
            <li>
              <strong>Net Banking:</strong> Online access to account, bill
              payments, transfers
            </li>
            <li>
              <strong>Mobile Banking:</strong> Bank&apos;s official app for
              managing accounts
            </li>
            <li>
              <strong>Auto-Debit/Standing Instructions:</strong> Automatic
              payments for bills, SIPs
            </li>
          </ul>

          <h3>Documents Required to Open a Bank Account</h3>
          <ul>
            <li>Aadhaar Card (mandatory for KYC)</li>
            <li>PAN Card (for accounts with high limits)</li>
            <li>Passport-sized photographs</li>
            <li>Address proof (Aadhaar, passport, utility bill)</li>
            <li>College ID card (for student accounts)</li>
            <li>Parent&apos;s documents (if minor)</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Open a digital bank account (like Kotak
              811 or Fi Money) as your primary account for better interest rates
              and smart features. Keep a traditional bank account as backup for
              services like demand drafts or physical branch access.
            </div>
          </div>

          <h3>Banking Safety Tips for Students</h3>
          <ul>
            <li>Never share OTP, PIN, or password with anyone</li>
            <li>Use separate passwords for banking apps</li>
            <li>Enable SMS and email alerts for all transactions</li>
            <li>Check account statements regularly</li>
            <li>Use only official bank apps from app stores</li>
            <li>Avoid using public WiFi for banking</li>
            <li>Set daily transaction limits on your card</li>
            <li>Report lost cards immediately</li>
          </ul>
        </section>

        {/* Section 4: Budgeting */}
        <section
          id="budgeting"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calculator className="h-6 w-6 text-primary" />
            4. Budgeting: The Foundation of Personal Finance
          </h2>

          <p>
            A budget is simply a plan for your money. Without one, money has a
            tendency to disappear without you knowing where it went. Budgeting
            isn&apos;t about restricting yourself—it&apos;s about being
            intentional with your spending and aligning it with your goals.
          </p>

          <h3>Why Every Student Needs a Budget</h3>
          <ul>
            <li>Know exactly where your money goes</li>
            <li>Avoid running out of money before month-end</li>
            <li>Reduce financial stress and anxiety</li>
            <li>Save for goals that matter to you</li>
            <li>Avoid or reduce debt</li>
            <li>Build healthy money habits for life</li>
          </ul>

          <h3>The 50/30/20 Rule - Simplified Budgeting</h3>
          <p>
            This is the most popular budgeting framework and works great for
            beginners:
          </p>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <h4 className="mb-2 text-2xl font-bold text-blue-600">50%</h4>
              <h5 className="mb-2 font-bold">Needs</h5>
              <ul className="space-y-1 text-sm">
                <li>• Rent/Hostel fees</li>
                <li>• Food/Mess charges</li>
                <li>• Transportation</li>
                <li>• Phone/Internet</li>
                <li>• Study materials</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h4 className="mb-2 text-2xl font-bold text-green-600">30%</h4>
              <h5 className="mb-2 font-bold">Wants</h5>
              <ul className="space-y-1 text-sm">
                <li>• Entertainment</li>
                <li>• Eating out</li>
                <li>• Shopping</li>
                <li>• Subscriptions</li>
                <li>• Hobbies</li>
              </ul>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
              <h4 className="mb-2 text-2xl font-bold text-purple-600">20%</h4>
              <h5 className="mb-2 font-bold">Savings</h5>
              <ul className="space-y-1 text-sm">
                <li>• Emergency fund</li>
                <li>• Investments</li>
                <li>• Goal savings</li>
                <li>• Debt repayment</li>
                <li>• Future planning</li>
              </ul>
            </div>
          </div>

          <h3>Sample Student Budget (₹15,000/month)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">%</th>
                  <th className="p-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-blue-50 dark:bg-blue-950">
                  <td
                    className="p-3 font-medium"
                    colSpan={4}
                  >
                    NEEDS (50% = ₹7,500)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Hostel/PG Rent</td>
                  <td className="p-3">₹4,000</td>
                  <td className="p-3">27%</td>
                  <td className="p-3">Shared room</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Food/Mess</td>
                  <td className="p-3">₹2,000</td>
                  <td className="p-3">13%</td>
                  <td className="p-3">College mess + basics</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Transport</td>
                  <td className="p-3">₹500</td>
                  <td className="p-3">3%</td>
                  <td className="p-3">Bus pass</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Phone & Internet</td>
                  <td className="p-3">₹500</td>
                  <td className="p-3">3%</td>
                  <td className="p-3">Mobile plan</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Study Materials</td>
                  <td className="p-3">₹500</td>
                  <td className="p-3">3%</td>
                  <td className="p-3">Books, photocopies</td>
                </tr>
                <tr className="border-t bg-green-50 dark:bg-green-950">
                  <td
                    className="p-3 font-medium"
                    colSpan={4}
                  >
                    WANTS (30% = ₹4,500)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Entertainment</td>
                  <td className="p-3">₹1,500</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">Movies, outings</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Eating Out</td>
                  <td className="p-3">₹1,500</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">Restaurants, cafes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Shopping/Personal</td>
                  <td className="p-3">₹1,000</td>
                  <td className="p-3">7%</td>
                  <td className="p-3">Clothes, accessories</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Subscriptions</td>
                  <td className="p-3">₹500</td>
                  <td className="p-3">3%</td>
                  <td className="p-3">Netflix, Spotify etc.</td>
                </tr>
                <tr className="border-t bg-purple-50 dark:bg-purple-950">
                  <td
                    className="p-3 font-medium"
                    colSpan={4}
                  >
                    SAVINGS (20% = ₹3,000)
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Emergency Fund</td>
                  <td className="p-3">₹1,000</td>
                  <td className="p-3">7%</td>
                  <td className="p-3">Savings account</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">SIP Investment</td>
                  <td className="p-3">₹1,000</td>
                  <td className="p-3">7%</td>
                  <td className="p-3">Index fund</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Goal Savings</td>
                  <td className="p-3">₹1,000</td>
                  <td className="p-3">7%</td>
                  <td className="p-3">Laptop, travel etc.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Other Budgeting Methods</h3>
          <ul>
            <li>
              <strong>Zero-Based Budgeting:</strong> Every rupee has a job.
              Income minus all expenses equals zero.
            </li>
            <li>
              <strong>Envelope System:</strong> Put cash in labeled envelopes
              for each category. When it&apos;s empty, you&apos;re done
              spending.
            </li>
            <li>
              <strong>Pay Yourself First:</strong> Automatically transfer
              savings first, then spend what&apos;s left.
            </li>
            <li>
              <strong>Kakeibo (Japanese Method):</strong> Journal-based tracking
              that asks &quot;Can I live without this?&quot;
            </li>
          </ul>

          <h3>How to Track Your Spending</h3>
          <ol>
            <li>
              <strong>Week 1-2:</strong> Track every expense without judgment
            </li>
            <li>
              <strong>Week 3:</strong> Categorize expenses (needs, wants,
              savings)
            </li>
            <li>
              <strong>Week 4:</strong> Identify areas where you can cut back
            </li>
            <li>
              <strong>Month 2+:</strong> Create and follow your budget
            </li>
          </ol>

          <div className="not-prose my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
            <p className="flex items-center gap-2 font-bold text-yellow-700 dark:text-yellow-400">
              <AlertCircle className="h-5 w-5" />
              Common Budgeting Mistakes to Avoid
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Not including irregular expenses (festivals, birthdays)</li>
              <li>• Being too restrictive (leads to giving up)</li>
              <li>• Not tracking small expenses (they add up!)</li>
              <li>• Forgetting to adjust budget as income changes</li>
              <li>• Not having a buffer for unexpected expenses</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Saving Strategies */}
        <section
          id="saving-strategies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PiggyBank className="h-6 w-6 text-primary" />
            5. Saving Strategies That Actually Work
          </h2>
          <p>
            Saving money is simple in theory but challenging in practice. The
            key is to make saving automatic and painless.
          </p>
          <h3>The Pay Yourself First Principle</h3>
          <p>
            The moment you receive money, transfer your savings amount first.
            Don&apos;t wait to see what&apos;s left—there will never be anything
            left.
          </p>
          <h3>Practical Money-Saving Hacks</h3>
          <ul>
            <li>Cook in batches on weekends</li>
            <li>Use student discounts everywhere</li>
            <li>Buy used textbooks or PDFs</li>
            <li>Split OTT subscriptions with friends</li>
            <li>Wait 48 hours before non-essential purchases</li>
            <li>Use cashback apps like CRED and Magicpin</li>
          </ul>
          <h3>The 30-Day Rule</h3>
          <p>
            Before making any non-essential purchase over ₹1,000, wait 30 days.
            If you still want it after a month, go ahead.
          </p>
        </section>

        {/* Section 6: Emergency Fund */}
        <section
          id="emergency-fund"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            6. Building Your Emergency Fund
          </h2>
          <p>
            An emergency fund is your financial safety net for unexpected
            expenses.
          </p>
          <h3>How Much Should You Save?</h3>
          <ul>
            <li>
              Student (with parents): 1-2 months of expenses (₹10,000-₹20,000)
            </li>
            <li>
              Student (hostel/PG): 2-3 months of expenses (₹30,000-₹50,000)
            </li>
            <li>Working professional: 3-6 months of expenses</li>
          </ul>
          <h3>Real Emergencies vs Non-Emergencies</h3>
          <p>
            Medical expenses, lost phone/laptop, urgent travel home =
            emergencies. New iPhone launch, Amazon sale, friend&apos;s party =
            NOT emergencies.
          </p>
        </section>

        {/* Section 7: Income Sources */}
        <section
          id="income-sources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <HandCoins className="h-6 w-6 text-primary" />
            7. Income Sources for Students
          </h2>
          <p>
            While managing expenses is crucial, increasing income gives you more
            flexibility.
          </p>
          <h3>Part-Time Options</h3>
          <ul>
            <li>Tutoring (₹200-1000/hour)</li>
            <li>Content writing (₹1-5 per word)</li>
            <li>Social media management (₹5,000-20,000/month)</li>
            <li>Video editing (₹1,000-10,000/video)</li>
            <li>Web development (₹5,000-50,000/project)</li>
          </ul>
          <h3>Freelancing Platforms</h3>
          <p>Upwork, Fiverr, Freelancer, Internshala</p>
        </section>

        {/* Section 8: Understanding Debt */}
        <section
          id="understanding-debt"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-primary" />
            8. Understanding Good vs Bad Debt
          </h2>
          <p>
            <strong>Good Debt:</strong> Education loan, home loan, business loan
            (builds wealth).
            <strong>Bad Debt:</strong> Credit card debt, personal loans for
            lifestyle, BNPL for shopping.
          </p>
          <p>
            A ₹50,000 credit card balance at 36% interest can take 7+ years to
            repay and cost you ₹1,27,000+ total if you only pay minimum payment!
          </p>
        </section>

        {/* Section 9: Education Loans */}
        <section
          id="education-loans"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            9. Education Loans Demystified
          </h2>
          <p>Education loans are &quot;good debt&quot; when used wisely.</p>
          <h3>Key Terms to Know</h3>
          <ul>
            <li>Moratorium Period: Course duration + 6-12 months grace</li>
            <li>Section 80E: Interest is tax deductible with no limit</li>
            <li>Collateral: Required for loans above ₹7.5 Lakhs</li>
          </ul>
          <h3>Major Providers</h3>
          <p>SBI Scholar Loan, HDFC Credila, Avanse, Axis Bank, PNB</p>
        </section>

        {/* Section 10: Credit Score */}
        <section
          id="credit-score"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            10. Building Your Credit Score
          </h2>
          <p>
            Your credit score (300-900) determines loan approval and interest
            rates.
          </p>
          <h3>Score Ranges</h3>
          <ul>
            <li>750-900: Excellent - Best rates</li>
            <li>700-749: Good - Most loans approved</li>
            <li>650-699: Fair - Higher rates apply</li>
            <li>Below 650: Poor - Difficult to get credit</li>
          </ul>
          <h3>How to Build Credit as a Student</h3>
          <ol>
            <li>Get a student credit card with low limit</li>
            <li>Use only 10-30% of your limit</li>
            <li>ALWAYS pay full balance monthly</li>
            <li>Never miss a payment - set up auto-pay</li>
          </ol>
          <p>Check free: CIBIL, Paytm, CRED, BankBazaar</p>
        </section>

        {/* Section 11: Investing Basics */}
        <section
          id="investing-basics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            11. Investing Basics
          </h2>
          <p>Saving protects your money; investing grows it.</p>
          <h3>Key Concepts</h3>
          <ul>
            <li>
              <strong>Compound Interest:</strong> Earning returns on returns
            </li>
            <li>
              <strong>Diversification:</strong> Don&apos;t put all eggs in one
              basket
            </li>
            <li>
              <strong>Risk vs Return:</strong> Higher returns = higher risk
            </li>
            <li>
              <strong>Time Horizon:</strong> Longer time = can take more risk
            </li>
          </ul>
          <h3>Rule of 72</h3>
          <p>
            72 ÷ Interest Rate = Years to double your money. At 12% returns,
            money doubles in 6 years!
          </p>
        </section>

        {/* Section 12: Investment Options */}
        <section
          id="investment-options"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PieChart className="h-6 w-6 text-primary" />
            12. Investment Options in India
          </h2>
          <h3>Options by Risk Level</h3>
          <ul>
            <li>
              <strong>Low Risk:</strong> Savings Account (3-6%), FD (5-7%), PPF
              (7-8%)
            </li>
            <li>
              <strong>Medium Risk:</strong> Debt Funds (6-9%), Index Funds
              (10-12%)
            </li>
            <li>
              <strong>High Risk:</strong> Equity Mutual Funds (10-15%), Stocks
              (variable)
            </li>
          </ul>
          <h3>Best Starting Points for Students</h3>
          <ol>
            <li>Index Funds/ETFs - Low cost, diversified</li>
            <li>PPF - Tax-free, guaranteed, ₹500/year minimum</li>
            <li>Liquid Funds - Better than savings for short-term</li>
          </ol>
        </section>

        {/* Section 13: SIP Guide */}
        <section
          id="sip-guide"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <LineChart className="h-6 w-6 text-primary" />
            13. SIP: Start with ₹500/Month
          </h2>
          <p>
            A Systematic Investment Plan lets you invest small amounts
            regularly.
          </p>
          <h3>SIP Benefits</h3>
          <ul>
            <li>Start with just ₹100-500/month</li>
            <li>Rupee cost averaging reduces risk</li>
            <li>Automatic - builds discipline</li>
            <li>Flexible - increase, pause, or stop anytime</li>
          </ul>
          <h3>SIP Growth Example</h3>
          <p>
            ₹1,000/month for 20 years at 12% = ₹9.99 Lakhs (invested: ₹2.4
            Lakhs)
          </p>
          <h3>How to Start</h3>
          <ol>
            <li>Complete eKYC online (10 mins)</li>
            <li>Choose platform: Groww, Zerodha Coin, Kuvera</li>
            <li>Select fund: Start with Nifty 50 Index Fund</li>
            <li>Set up auto-debit for monthly investment</li>
          </ol>
        </section>

        {/* Section 14: Tax Basics */}
        <section
          id="tax-basics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Receipt className="h-6 w-6 text-primary" />
            14. Tax Basics for Students
          </h2>
          <h3>When to File Taxes?</h3>
          <p>
            File if annual income exceeds ₹2.5-3 Lakhs (depending on regime).
            New tax regime gives ₹7 Lakhs effective exemption with rebate.
          </p>
          <h3>Taxable Income for Students</h3>
          <ul>
            <li>Internship stipends (above exemption)</li>
            <li>Freelancing income</li>
            <li>Part-time job salary</li>
            <li>YouTube/Blog income</li>
          </ul>
          <h3>Tax-Saving Options</h3>
          <ul>
            <li>Section 80C: PPF, ELSS (up to ₹1.5 Lakh)</li>
            <li>Section 80E: Education loan interest (no limit)</li>
            <li>Section 80TTA: Savings interest (up to ₹10,000)</li>
          </ul>
        </section>

        {/* Section 15: First Salary Planning */}
        <section
          id="first-salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Banknote className="h-6 w-6 text-primary" />
            15. First Salary Planning
          </h2>
          <h3>First Salary Checklist</h3>
          <ol>
            <li>Celebrate (within limits)</li>
            <li>Understand CTC vs in-hand salary</li>
            <li>Set up auto-savings (20-30%)</li>
            <li>Build emergency fund first</li>
            <li>Start SIPs</li>
            <li>Get health insurance if not covered</li>
            <li>Begin education loan repayment</li>
          </ol>
          <h3>Avoid Lifestyle Inflation</h3>
          <p>
            When income increases, save 50% of the raise instead of increasing
            lifestyle.
          </p>
        </section>

        {/* Section 16: Money Mistakes */}
        <section
          id="money-mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            16. Common Money Mistakes to Avoid
          </h2>
          <ol>
            <li>Not starting early - delays cost crores</li>
            <li>Living beyond means with credit</li>
            <li>No emergency fund</li>
            <li>Ignoring health insurance</li>
            <li>Falling for get-rich-quick schemes</li>
            <li>Not tracking expenses</li>
            <li>Avoiding investments due to fear</li>
            <li>Lending to friends without limits</li>
            <li>Not reading loan terms</li>
            <li>Comparing to others financially</li>
          </ol>
        </section>

        {/* Section 17: Apps and Tools */}
        <section
          id="apps-tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            17. Best Finance Apps
          </h2>
          <h3>Expense Tracking</h3>
          <p>Walnut, Money Manager, Splitwise</p>
          <h3>Banking &amp; Payments</h3>
          <p>Google Pay, PhonePe, CRED, Fi Money</p>
          <h3>Investing</h3>
          <p>Groww, Zerodha, Kuvera, Paytm Money, INDMoney</p>
          <h3>Learning</h3>
          <p>Varsity by Zerodha, YouTube (Pranjal Kamra, CA Rachana)</p>
        </section>

        {/* Section 18: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            18. Frequently Asked Questions
          </h2>
          <h3>Q: How much should a student save?</h3>
          <p>
            Aim for 15-20% of any money you receive. Even ₹500/month develops
            the habit.
          </p>

          <h3>Q: Is 18-20 too early to invest?</h3>
          <p>
            Never too early! Starting at 20 vs 30 can double your retirement
            wealth.
          </p>

          <h3>Q: Should students get credit cards?</h3>
          <p>
            Yes, if used responsibly. Get a low-limit card and always pay full
            balance monthly.
          </p>

          <h3>Q: How to invest with no income?</h3>
          <p>
            Save from pocket money, gifts, festivals. Even ₹100/month in SIP
            counts.
          </p>

          <h3>Q: FD vs Mutual Funds?</h3>
          <p>
            FDs for short-term (under 3 years). Equity MFs for long-term (5+
            years).
          </p>

          <h3>Q: Minimum amount to start investing?</h3>
          <p>
            Some MFs accept ₹100. Most SIPs start at ₹500/month. PPF: ₹500/year.
          </p>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Conclusion: Start Today
          </h2>
          <p>
            You&apos;ve taken the first step by reading this guide. Now take
            action:
          </p>
          <ol>
            <li>
              <strong>This Week:</strong> Track every expense
            </li>
            <li>
              <strong>This Month:</strong> Create a 50/30/20 budget
            </li>
            <li>
              <strong>Next Month:</strong> Open a separate savings account
            </li>
            <li>
              <strong>In 3 Months:</strong> Start your first SIP
            </li>
            <li>
              <strong>In 6 Months:</strong> Have ₹10,000+ emergency fund
            </li>
          </ol>
          <div className="not-prose my-6 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
            <p className="font-bold text-green-700 dark:text-green-400">
              🌱 Remember: Financial freedom isn&apos;t about being
              rich—it&apos;s about money not being a constant source of stress.
              Start small, be consistent, and watch your financial future
              transform.
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="not-prose mt-12 rounded-lg border bg-muted/50 p-6">
          <h2 className="mb-4 text-xl font-bold">📚 Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/scholarship-applications-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ChevronRight className="h-4 w-4" />
              Scholarship Applications Guide
            </Link>
            <Link
              href="/blog/freelancing-students-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ChevronRight className="h-4 w-4" />
              Freelancing Guide for Students
            </Link>
            <Link
              href="/blog/part-time-jobs-college-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ChevronRight className="h-4 w-4" />
              Part-Time Jobs for College Students
            </Link>
            <Link
              href="/blog/salary-negotiation-freshers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ChevronRight className="h-4 w-4" />
              Salary Negotiation for Freshers
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
