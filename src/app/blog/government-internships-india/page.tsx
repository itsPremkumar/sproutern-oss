import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Building2,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  FileText,
  Shield,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Internships in India: Complete Guide',
  description:
    'Land government internships at Niti Aayog, RBI, ministries, and PSUs. Complete guide with application process and tips.',
  keywords: [
    'government internship india',
    'niti aayog internship',
    'rbi internship',
    'psu internship',
    'ministry internship',
  ],
  openGraph: {
    title: 'Government Internships in India: Complete Guide',
    description: 'Start your public sector career.',
    type: 'article',
    publishedTime: '2024-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Government Internships in India: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Government internships offer unique exposure to policymaking and
            public service. Learn how to secure these competitive opportunities.
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
                1. Types of Govt Internships
              </a>
            </li>
            <li>
              <a
                href="#popular"
                className="text-primary hover:underline"
              >
                2. Popular Programs
              </a>
            </li>
            <li>
              <a
                href="#eligibility"
                className="text-primary hover:underline"
              >
                3. Eligibility Criteria
              </a>
            </li>
            <li>
              <a
                href="#apply"
                className="text-primary hover:underline"
              >
                4. Application Process
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                5. Selection Tips
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
              <span>
                Most government internships are stipend-based (₹10K-75K/month)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Applications open 3-4 months before the internship period
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Strong academic record is typically required (7.5+ CGPA)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>NITI Aayog and PMO internships are highly competitive</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            1. Types of Government Internships
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Central Ministries</p>
              <p className="text-muted-foreground">
                MoF, MoHFW, MEA, MoE, etc.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Policy Bodies</p>
              <p className="text-muted-foreground">
                NITI Aayog, PMO, Planning Commission
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Regulators</p>
              <p className="text-muted-foreground">RBI, SEBI, IRDAI, TRAI</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">PSUs</p>
              <p className="text-muted-foreground">
                ONGC, NTPC, SAIL, BHEL, IOCL
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Popular */}
        <section
          id="popular"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            2. Popular Programs
          </h2>

          <h3>NITI Aayog Internship</h3>
          <ul>
            <li>Duration: 6 weeks to 6 months</li>
            <li>Stipend: ₹10,000/month</li>
            <li>Work: Policy research and analysis</li>
          </ul>

          <h3>RBI Internship</h3>
          <ul>
            <li>Duration: 4-6 weeks</li>
            <li>Stipend: ₹15,000-35,000/month</li>
            <li>Work: Economic research, data analysis</li>
          </ul>

          <h3>PMO Internship</h3>
          <ul>
            <li>Highly competitive, limited seats</li>
            <li>Direct exposure to governance</li>
          </ul>
        </section>

        {/* Section 3: Eligibility */}
        <section
          id="eligibility"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            3. Eligibility Criteria
          </h2>

          <ul>
            <li>Usually for undergraduate and postgraduate students</li>
            <li>Minimum 7.0-7.5 CGPA typically required</li>
            <li>
              Some programs require specific courses (Economics, Law,
              Engineering)
            </li>
            <li>Indian citizenship is mandatory</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Check official government portals
              regularly. Application windows are short and often not widely
              advertised.
            </div>
          </div>
        </section>

        {/* Section 4: Apply */}
        <section
          id="apply"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Application Process
          </h2>

          <ol>
            <li>
              <strong>Official Portal:</strong> Apply through the
              ministry/organization's official website
            </li>
            <li>
              <strong>Documents:</strong> Resume, transcripts, ID proof, college
              letter
            </li>
            <li>
              <strong>SOP:</strong> Statement of purpose explaining your
              interest
            </li>
            <li>
              <strong>Timeline:</strong> Apply 3-4 months before your preferred
              period
            </li>
          </ol>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            5. Selection Tips
          </h2>

          <ul>
            <li>Maintain a strong academic record</li>
            <li>Highlight relevant coursework and projects</li>
            <li>Show genuine interest in public policy/governance</li>
            <li>Apply to multiple programs to increase chances</li>
            <li>Follow up politely if you don't hear back</li>
          </ul>
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
                Do government internships help in UPSC preparation?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes! They provide firsthand exposure to governance and make
                great examples for interviews and essays.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Can final year students apply?</p>
              <p className="mt-2 text-muted-foreground">
                Most programs accept final year students. Some also accept
                recent graduates within 1 year of graduation.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Ministry Guide */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            Detailed Ministry-Wise Internship Guide
          </h2>

          <h3>Ministry of Finance (MoF)</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-orange-600">Departments:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Department of Economic Affairs</li>
              <li>• Department of Revenue</li>
              <li>• Department of Expenditure</li>
              <li>• Department of Financial Services</li>
              <li>• Department of Investment and Public Asset Management</li>
            </ul>
            <p className="mt-3 font-bold">Work Areas:</p>
            <p className="text-sm text-muted-foreground">
              Economic policy analysis, tax research, budget preparation, fiscal
              policy, public finance, disinvestment strategies.
            </p>
            <p className="mt-3 font-bold">Ideal For:</p>
            <p className="text-sm text-muted-foreground">
              Economics, Commerce, CA, MBA (Finance), Public Policy students.
            </p>
          </div>

          <h3>Ministry of External Affairs (MEA)</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-orange-600">Focus Areas:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Bilateral relations and diplomacy</li>
              <li>• International organizations (UN, WTO)</li>
              <li>• Economic diplomacy</li>
              <li>• Public diplomacy and cultural relations</li>
              <li>• Consular services</li>
            </ul>
            <p className="mt-3 font-bold">Ideal For:</p>
            <p className="text-sm text-muted-foreground">
              International Relations, Political Science, Law, Languages, Public
              Policy students.
            </p>
          </div>

          <h3>Ministry of Health and Family Welfare (MoHFW)</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-orange-600">Work Areas:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Public health policy</li>
              <li>• Healthcare infrastructure planning</li>
              <li>• Disease surveillance and prevention</li>
              <li>• Ayushman Bharat implementation</li>
              <li>• Digital health initiatives</li>
            </ul>
            <p className="mt-3 font-bold">Ideal For:</p>
            <p className="text-sm text-muted-foreground">
              Public Health, Medicine, Healthcare Management, Social Work,
              Statistics students.
            </p>
          </div>

          <h3>Ministry of Education (MoE)</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="font-bold text-orange-600">Focus Areas:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• NEP 2020 implementation research</li>
              <li>• Higher education policy</li>
              <li>• Digital education initiatives</li>
              <li>• Skill development programs</li>
              <li>• Research and innovation policy</li>
            </ul>
            <p className="mt-3 font-bold">Ideal For:</p>
            <p className="text-sm text-muted-foreground">
              Education, Public Policy, Social Sciences, Technology students.
            </p>
          </div>
        </section>

        {/* Regulatory Bodies Deep Dive */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            Regulatory Body Internships
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Body</th>
                  <th className="border p-3 text-left font-semibold">
                    Duration
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Stipend
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Eligibility
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">RBI</td>
                  <td className="border p-3">4-6 weeks</td>
                  <td className="border p-3">₹15K-35K/month</td>
                  <td className="border p-3">Economics, Finance, Statistics</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">SEBI</td>
                  <td className="border p-3">3-6 months</td>
                  <td className="border p-3">₹20K-40K/month</td>
                  <td className="border p-3">Finance, Law, MBA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">IRDAI</td>
                  <td className="border p-3">8-12 weeks</td>
                  <td className="border p-3">₹15K-25K/month</td>
                  <td className="border p-3">Insurance, Actuarial, Finance</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">TRAI</td>
                  <td className="border p-3">4-8 weeks</td>
                  <td className="border p-3">₹10K-20K/month</td>
                  <td className="border p-3">Telecom, Engineering, Law</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">CCI</td>
                  <td className="border p-3">3-6 months</td>
                  <td className="border p-3">₹15K-30K/month</td>
                  <td className="border p-3">Law, Economics, MBA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PSU Internships */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Top PSU Internship Programs
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">ONGC Internship</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                India's largest oil and gas company offers internships in
                engineering, geology, finance, and HR.
              </p>
              <p className="text-xs">
                <strong>Duration:</strong> 4-8 weeks | <strong>Stipend:</strong>{' '}
                ₹25K-50K/month
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">NTPC Internship</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Power sector giant offering exposure to thermal, hydro, and
                renewable energy projects.
              </p>
              <p className="text-xs">
                <strong>Duration:</strong> 6-8 weeks | <strong>Stipend:</strong>{' '}
                ₹20K-40K/month
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">IOCL Internship</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                India's largest commercial oil company. Projects in refining,
                marketing, and R&D.
              </p>
              <p className="text-xs">
                <strong>Duration:</strong> 4-6 weeks | <strong>Stipend:</strong>{' '}
                ₹15K-35K/month
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">BHEL Internship</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Heavy electrical equipment manufacturer. Technical and
                management internships available.
              </p>
              <p className="text-xs">
                <strong>Duration:</strong> 4-8 weeks | <strong>Stipend:</strong>{' '}
                ₹15K-30K/month
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">SAIL Internship</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Steel Authority of India. Engineering, metallurgy, and
                management roles.
              </p>
              <p className="text-xs">
                <strong>Duration:</strong> 4-6 weeks | <strong>Stipend:</strong>{' '}
                ₹15K-25K/month
              </p>
            </div>
          </div>
        </section>

        {/* Sample SOP */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Statement of Purpose Template
          </h2>

          <p>
            Your SOP is crucial for government internship applications. Here's a
            proven structure:
          </p>

          <div className="my-6 rounded-lg border bg-muted p-5">
            <h4 className="mb-3 font-bold">Opening (50 words)</h4>
            <p className="text-sm italic text-muted-foreground">
              "As a third-year Economics student at [University] with a passion
              for public policy, I am applying for the NITI Aayog internship
              program. My academic focus on development economics and my
              volunteer work with [organization] have prepared me for this
              opportunity."
            </p>

            <h4 className="mb-3 mt-4 font-bold">
              Academic Background (75 words)
            </h4>
            <p className="text-sm italic text-muted-foreground">
              "My coursework in [relevant subjects] has given me a strong
              foundation in [skills]. My research paper on [topic] demonstrated
              my ability to analyze policy challenges. I have maintained a CGPA
              of [X] while actively participating in [activities]."
            </p>

            <h4 className="mb-3 mt-4 font-bold">Why This Program (75 words)</h4>
            <p className="text-sm italic text-muted-foreground">
              "I am particularly drawn to [specific initiative/program] at
              [organization]. The opportunity to contribute to [specific area]
              aligns with my career goal of [goal]. I am impressed by [recent
              work/policy] and would be honored to support such impactful
              initiatives."
            </p>

            <h4 className="mb-3 mt-4 font-bold">
              What You'll Contribute (50 words)
            </h4>
            <p className="text-sm italic text-muted-foreground">
              "I bring [specific skills], [relevant experience], and a genuine
              commitment to public service. I am eager to learn from experienced
              professionals and contribute meaningfully to [organization's]
              mission."
            </p>
          </div>
        </section>

        {/* Application Timeline */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            Annual Application Timeline
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">
                    Program
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Application Window
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Internship Period
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">
                    NITI Aayog - Summer
                  </td>
                  <td className="border p-3">December - February</td>
                  <td className="border p-3">May - July</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    NITI Aayog - Winter
                  </td>
                  <td className="border p-3">July - September</td>
                  <td className="border p-3">December - February</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">RBI</td>
                  <td className="border p-3">Rolling (check website)</td>
                  <td className="border p-3">Flexible</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Most Ministries</td>
                  <td className="border p-3">3-4 months before</td>
                  <td className="border p-3">Summer preferred</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">PSUs</td>
                  <td className="border p-3">December - March</td>
                  <td className="border p-3">Summer (May-July)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            Day in the Life: NITI Aayog Intern
          </h2>

          <div className="not-prose my-6 space-y-3">
            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                9
              </div>
              <div>
                <p className="font-semibold">9:00 AM - Arrive & Review</p>
                <p className="text-sm text-muted-foreground">
                  Reach office, check emails, review assigned readings and
                  policy documents.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                10
              </div>
              <div>
                <p className="font-semibold">10:00 AM - Research Work</p>
                <p className="text-sm text-muted-foreground">
                  Deep dive into assigned research topic, data collection,
                  literature review.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                12
              </div>
              <div>
                <p className="font-semibold">12:00 PM - Team Meeting</p>
                <p className="text-sm text-muted-foreground">
                  Weekly meeting with vertical head, discuss progress, get
                  feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                2
              </div>
              <div>
                <p className="font-semibold">2:00 PM - Report Writing</p>
                <p className="text-sm text-muted-foreground">
                  Draft policy briefs, prepare presentations, compile data.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                5
              </div>
              <div>
                <p className="font-semibold">5:00 PM - Networking</p>
                <p className="text-sm text-muted-foreground">
                  Connect with other interns, attend internal talks, wrap up
                  daily tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Missing Deadlines
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Government deadlines are strict. Set calendar reminders 3-4
                  months before typical application windows.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Generic SOP
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Using the same SOP for all applications. Customize for each
                  organization's specific work and mission.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Incomplete Documents
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Missing transcripts, college letters, or ID proofs. Prepare
                  all documents in advance.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
                ✗
              </div>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not Following Up
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Assuming no response means rejection. Politely follow up after
                  3-4 weeks if you haven't heard back.
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
                How competitive are NITI Aayog internships?
              </h3>
              <p className="text-muted-foreground">
                Very competitive. NITI Aayog receives 10,000+ applications for
                ~200 positions each cycle. Strong academics, relevant projects,
                and a compelling SOP are essential. Having research publications
                or policy-related experience helps significantly.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Do government internships lead to full-time jobs?
              </h3>
              <p className="text-muted-foreground">
                Not directly (government jobs require competitive exams).
                However, they provide excellent preparation for UPSC, add
                credibility to your profile, and help with references for future
                applications. PSU internships sometimes convert to PPOs.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I apply to multiple ministries simultaneously?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can and should apply to multiple programs. Each
                ministry has independent selection processes. Tailor your SOP
                for each application to show genuine interest in their specific
                work.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is there a dress code for government internships?
              </h3>
              <p className="text-muted-foreground">
                Yes, formal attire is expected. Men typically wear formal shirts
                and trousers (ties for important meetings). Women wear formals
                or sarees. Avoid casual wear, jeans, or bright colors.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I find government internship openings?
              </h3>
              <p className="text-muted-foreground">
                Check official websites regularly (internship.aicte-india.org,
                individual ministry sites). Follow social media handles of
                government bodies. Join Telegram groups and forums dedicated to
                government opportunities. Some openings are also on platforms
                like Internshala.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What happens during the selection process?
              </h3>
              <p className="text-muted-foreground">
                Most programs have: (1) Application screening based on academics
                and SOP (2) Shortlisting of candidates (3) Some conduct video
                interviews or written tests (4) Final selection announcement.
                The process takes 4-8 weeks typically.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can commerce or arts students apply?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Many ministries specifically need students from
                diverse backgrounds. MoF prefers commerce/economics, MEA values
                language skills, and policy bodies welcome all disciplines.
                Don't limit yourself to STEM-focused programs.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Are remote government internships available?
              </h3>
              <p className="text-muted-foreground">
                Some programs offer hybrid options post-COVID. However, most
                valuable experiences are in-person, as networking and observing
                government functioning firsthand is a key benefit. Check
                individual program details for work mode.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "My NITI Aayog internship was transformative..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I worked on the Aspirational Districts Programme and got to see
                how policy impacts ground-level development. The mentorship from
                senior advisors was invaluable. It solidified my decision to
                pursue UPSC." — Rahul, Economics, Delhi University
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "RBI internship opened doors to finance careers..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "The research exposure and working with economic data was
                incredible. My project on digital payments got published
                internally. Later, investment banks were impressed by this
                experience during placements." — Priya, Statistics, ISI Kolkata
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "ONGC internship converted to a PPO..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "I interned in their operations division and performed well.
                Three months later, I received a pre-placement offer. Now I'm
                working on offshore projects. PSU internships can lead to great
                careers." — Amit, Petroleum Engineering, ISM Dhanbad
              </p>
            </div>
          </div>
        </section>

        {/* Resources Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Application Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>
                Research target organizations and their current projects
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Prepare academic transcripts and mark sheets</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Get college bonafide/NOC letter from your institution</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Update and tailor your resume for public sector</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Write customized SOP for each organization</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Prepare ID proofs (Aadhaar, PAN, Passport)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Set calendar reminders for application deadlines</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Follow official social media accounts for updates</span>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Serve Your Nation</h2>
          <p>
            Government internships offer unique exposure to policymaking and
            public service. They're competitive but immensely rewarding.
          </p>
          <p>
            Whether you aspire to join the civil services, work in public
            policy, or simply understand how India is governed, these
            internships provide invaluable experience that no classroom can
            match.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best way to understand governance is to participate in it. Start
            today. 🇮🇳
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/research-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Research Internships
            </Link>
            <Link
              href="/blog/legal-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Legal Internships
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Internship Guide
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
                Based on insights from former government interns.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
