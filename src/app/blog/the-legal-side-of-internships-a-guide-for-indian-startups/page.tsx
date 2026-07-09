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
  FileText,
  Scale,
  Shield,
  Award,
  AlertCircle,
  Globe,
  Zap,
  Star,
  Building,
  GraduationCap,
  ClipboardList,
  IndianRupee,
  Gavel,
  FileCheck,
  Lock,
  XCircle,
  CheckSquare,
  HelpCircle,
  Landmark,
  ScrollText,
  BadgeCheck,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Side of Internships (Startups)',
  description:
    'Comprehensive guide to legal requirements for hiring interns in India. Learn about labor laws, stipends, contracts, compliance, and best practices for running a legal internship program.',
  keywords: [
    'internship law India',
    'legal internship requirements',
    'intern labor laws',
    'startup internship compliance',
    'intern stipend law',
    'internship agreement India',
    'hiring interns legally',
    'intern rights India',
    'EPF for interns',
    'internship contract template',
    'apprenticeship act',
    'intern working hours',
  ],
  openGraph: {
    title: 'The Legal Side of Internships: A Guide for Indian Startups',
    description:
      'Everything you need to know about running a compliant internship program.',
    type: 'article',
    publishedTime: '2025-01-25T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-amber-600">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Legal & Compliance
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            The Legal Side of Internships: A Complete Guide for Indian Startups
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Hiring interns can transform your startup, but navigating
            India&apos;s legal landscape is crucial. This comprehensive guide
            covers everything from labor laws and stipends to contracts and
            compliance—ensuring your internship program is both effective and
            legally sound.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Legal Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>30 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            Internships are a win-win: startups get eager talent and fresh
            perspectives, while students gain real-world experience and industry
            exposure. But in the excitement of building your team, it&apos;s
            easy to overlook the legal requirements that govern internship
            programs in India.
          </p>
          <p>
            The consequences of non-compliance can be severe—from hefty fines
            and back-payment claims to reputational damage and even criminal
            liability in extreme cases. Many startup founders assume that
            &quot;we&apos;re just a small company&quot; or &quot;interns
            aren&apos;t real employees&quot; provides some legal cover. It
            doesn&apos;t.
          </p>
          <p>
            This guide demystifies the legal framework surrounding internships
            in India. Whether you&apos;re hiring your first intern or scaling
            your internship program, you&apos;ll find actionable guidance on
            staying compliant while creating a great experience for your
            interns.
          </p>
          <p>
            <strong>Disclaimer:</strong> This article provides general
            information and should not be considered legal advice. Consult with
            a qualified labor law attorney for advice specific to your
            situation.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#legal-status"
                className="text-primary hover:underline"
              >
                1. Legal Status of Interns
              </a>
            </li>
            <li>
              <a
                href="#applicable-laws"
                className="text-primary hover:underline"
              >
                2. Applicable Labor Laws
              </a>
            </li>
            <li>
              <a
                href="#stipend-requirements"
                className="text-primary hover:underline"
              >
                3. Stipend & Compensation
              </a>
            </li>
            <li>
              <a
                href="#working-hours"
                className="text-primary hover:underline"
              >
                4. Working Hours & Conditions
              </a>
            </li>
            <li>
              <a
                href="#internship-agreement"
                className="text-primary hover:underline"
              >
                5. Internship Agreement
              </a>
            </li>
            <li>
              <a
                href="#statutory-compliance"
                className="text-primary hover:underline"
              >
                6. Statutory Compliance
              </a>
            </li>
            <li>
              <a
                href="#apprenticeship-act"
                className="text-primary hover:underline"
              >
                7. Apprenticeship Act
              </a>
            </li>
            <li>
              <a
                href="#remote-interns"
                className="text-primary hover:underline"
              >
                8. Remote/Virtual Interns
              </a>
            </li>
            <li>
              <a
                href="#unpaid-internships"
                className="text-primary hover:underline"
              >
                9. Unpaid Internships
              </a>
            </li>
            <li>
              <a
                href="#termination"
                className="text-primary hover:underline"
              >
                10. Termination & Exit
              </a>
            </li>
            <li>
              <a
                href="#ip-confidentiality"
                className="text-primary hover:underline"
              >
                11. IP & Confidentiality
              </a>
            </li>
            <li>
              <a
                href="#best-practices"
                className="text-primary hover:underline"
              >
                12. Best Practices
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="text-primary hover:underline"
              >
                13. Compliance Checklist
              </a>
            </li>
            <li>
              <a
                href="#common-mistakes"
                className="text-primary hover:underline"
              >
                14. Common Mistakes
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                15. FAQs
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
                Interns may be considered &quot;workmen&quot; under Indian labor
                law if doing productive work
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Stipends are not legally mandatory but are highly recommended;
                minimum wage may apply
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                A written internship agreement is essential for legal protection
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Remote internships have specific considerations and should still
                have contracts
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Sexual harassment prevention (POSH Act) applies to interns
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                The Apprentices Act is an alternative for structured training
                programs
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Legal Status */}
        <section
          id="legal-status"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Gavel className="h-6 w-6 text-primary" />
            1. Legal Status of Interns in India
          </h2>

          <p>
            The first question every startup founder asks: Are interns
            considered employees under Indian law? The answer is nuanced and
            depends on several factors.
          </p>

          <h3>Intern vs. Employee: The Key Distinction</h3>
          <p>
            India&apos;s labor laws don&apos;t specifically define
            &quot;intern.&quot; However, courts have generally held that:
          </p>
          <ul>
            <li>
              <strong>Training-focused internships:</strong> If the primary
              purpose is education and learning, interns may not be classified
              as employees
            </li>
            <li>
              <strong>Work-focused internships:</strong> If interns are doing
              productive work similar to employees, they may be treated as
              &quot;workmen&quot; under labor law
            </li>
          </ul>

          <h3>The &quot;Control Test&quot;</h3>
          <p>
            Courts apply the &quot;control test&quot; to determine employee
            status:
          </p>
          <ul>
            <li>
              Does the employer control how the work is done (not just what
              work)?
            </li>
            <li>
              Is the relationship ongoing or for a specific project/duration?
            </li>
            <li>Does the person work only for this organization?</li>
            <li>
              Is the person integrated into the organization&apos;s workflow?
            </li>
          </ul>

          <p>
            If most answers are &quot;yes,&quot; the intern may be classified as
            an employee, triggering full labor law compliance.
          </p>

          <h3>Practical Implications</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Scenario</th>
                  <th className="p-3 text-left">Likely Classification</th>
                  <th className="p-3 text-left">Legal Implications</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    College credit internship (learning-focused)
                  </td>
                  <td className="p-3">Trainee</td>
                  <td className="p-3">Fewer compliance requirements</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Project-based work with deliverables
                  </td>
                  <td className="p-3">May be workman</td>
                  <td className="p-3">Consider minimum wage, working hours</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Full-time, 6+ month engagement
                  </td>
                  <td className="p-3">Likely employee</td>
                  <td className="p-3">Full labor law compliance needed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Risk Alert:</strong> Many startups incorrectly assume all
              interns are exempt from labor laws. This is a dangerous
              assumption. When in doubt, treat interns with the same care you
              would treat employees to stay safe.
            </div>
          </div>
        </section>

        {/* Section 2: Applicable Laws */}
        <section
          id="applicable-laws"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <ScrollText className="h-6 w-6 text-primary" />
            2. Applicable Labor Laws
          </h2>

          <p>
            Several central and state laws may apply to internships in India.
            Understanding which ones affect your startup is crucial.
          </p>

          <h3>Key Central Legislations</h3>
          <ul>
            <li>
              <strong>The Minimum Wages Act, 1948:</strong> May apply if intern
              is doing work that falls under scheduled employment
            </li>
            <li>
              <strong>The Payment of Wages Act, 1936:</strong> Governs timely
              payment of wages if applicable
            </li>
            <li>
              <strong>The Contract Labour Act, 1970:</strong> May apply for
              certain types of intern engagements
            </li>
            <li>
              <strong>The Apprentices Act, 1961:</strong> Provides a formal
              framework for apprenticeships (more structured than internships)
            </li>
            <li>
              <strong>
                The Sexual Harassment of Women at Workplace Act, 2013 (POSH):
              </strong>
              Applies to all workplaces, including interns
            </li>
            <li>
              <strong>The Employees&apos; State Insurance Act, 1948:</strong>{' '}
              May apply if intern receives &quot;wages&quot; under the
              Act&apos;s definition
            </li>
            <li>
              <strong>The Employees&apos; Provident Fund Act, 1952:</strong>{' '}
              Generally not applicable to short-term interns
            </li>
          </ul>

          <h3>The New Labor Codes (2020)</h3>
          <p>
            India has enacted four new labor codes that consolidate 29 central
            labor laws. While not yet fully implemented, they will impact
            internships:
          </p>
          <ul>
            <li>
              <strong>Code on Wages, 2019:</strong> Broadens minimum wage
              coverage
            </li>
            <li>
              <strong>Code on Social Security, 2020:</strong> May extend social
              security to gig and platform workers
            </li>
            <li>
              <strong>
                Occupational Safety, Health and Working Conditions Code, 2020:
              </strong>{' '}
              Working hours and safety provisions
            </li>
            <li>
              <strong>Industrial Relations Code, 2020:</strong> Dispute
              resolution and employment terms
            </li>
          </ul>

          <h3>State-Specific Requirements</h3>
          <p>
            Labor is a concurrent subject in India, meaning states can have
            their own laws. Key state-level considerations include:
          </p>
          <ul>
            <li>State minimum wage rates (vary significantly)</li>
            <li>Shops and Establishments Act (registration requirements)</li>
            <li>
              State-specific internship guidelines (some states have issued
              these)
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Register your company under the Shops
              and Establishments Act of your state. This provides a legal
              framework for your workplace and is often required before hiring
              anyone, including interns.
            </div>
          </div>
        </section>

        {/* Section 3: Stipend Requirements */}
        <section
          id="stipend-requirements"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <IndianRupee className="h-6 w-6 text-primary" />
            3. Stipend & Compensation
          </h2>

          <p>
            The question of whether you must pay interns is one of the most
            common queries from startups. Here&apos;s what you need to know.
          </p>

          <h3>Is a Stipend Mandatory?</h3>
          <p>
            There is no specific law mandating that interns must be paid.
            However:
          </p>
          <ul>
            <li>
              If the intern qualifies as a &quot;workman,&quot; minimum wage
              laws apply
            </li>
            <li>
              Unpaid internships are legally risky if the intern is doing
              productive work
            </li>
            <li>
              Paid internships attract better talent and reduce legal exposure
            </li>
          </ul>

          <h3>Minimum Wage Considerations</h3>
          <p>Minimum wages in India vary by:</p>
          <ul>
            <li>State (Maharashtra vs. Karnataka vs. Delhi, etc.)</li>
            <li>Industry/scheduled employment category</li>
            <li>
              Skill level (unskilled, semi-skilled, skilled, highly skilled)
            </li>
          </ul>

          <h3>Current Minimum Wage Examples (2024-25)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">State</th>
                  <th className="p-3 text-left">
                    Unskilled (per month approx.)
                  </th>
                  <th className="p-3 text-left">Skilled (per month approx.)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Delhi</td>
                  <td className="p-3">₹17,494</td>
                  <td className="p-3">₹20,903</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Maharashtra</td>
                  <td className="p-3">₹10,000-12,000</td>
                  <td className="p-3">₹12,000-15,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Karnataka</td>
                  <td className="p-3">₹11,500-13,000</td>
                  <td className="p-3">₹14,000-16,000</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Tamil Nadu</td>
                  <td className="p-3">₹9,000-11,000</td>
                  <td className="p-3">₹12,000-14,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm italic">
            Note: These are approximate figures. Check the latest state
            notifications for accurate rates.
          </p>

          <h3>Recommended Stipend Ranges</h3>
          <p>Based on industry standards for startups:</p>
          <ul>
            <li>
              <strong>Short-term (1-2 months):</strong> ₹5,000-15,000/month
            </li>
            <li>
              <strong>Standard (3-6 months):</strong> ₹10,000-25,000/month
            </li>
            <li>
              <strong>Technical roles:</strong> ₹15,000-40,000/month
            </li>
            <li>
              <strong>Pre-placement internships:</strong> ₹20,000-50,000/month
            </li>
          </ul>

          <h3>Tax Implications of Stipends</h3>
          <ul>
            <li>Stipends are taxable income for interns</li>
            <li>
              TDS may be applicable if stipend exceeds threshold (currently ₹2.5
              lakh annually)
            </li>
            <li>Keep records of all payments for compliance</li>
          </ul>
        </section>

        {/* Section 4: Working Hours */}
        <section
          id="working-hours"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            4. Working Hours & Conditions
          </h2>

          <p>
            Even if labor laws don&apos;t strictly apply, following standard
            working conditions is good practice and reduces risk.
          </p>

          <h3>Standard Working Hours</h3>
          <ul>
            <li>
              <strong>Daily limit:</strong> 8-9 hours (including breaks)
            </li>
            <li>
              <strong>Weekly limit:</strong> 48 hours
            </li>
            <li>
              <strong>Overtime:</strong> Generally discouraged for interns; if
              required, compensate appropriately
            </li>
            <li>
              <strong>Night shifts:</strong> Additional considerations for women
              interns (safety, transport)
            </li>
          </ul>

          <h3>Rest Periods & Leave</h3>
          <ul>
            <li>
              <strong>Lunch break:</strong> Minimum 30 minutes for 5+ hour shift
            </li>
            <li>
              <strong>Weekly off:</strong> At least one day per week
            </li>
            <li>
              <strong>Casual leave:</strong> Pro-rata based on internship
              duration (industry practice)
            </li>
            <li>
              <strong>Sick leave:</strong> Reasonable accommodation recommended
            </li>
          </ul>

          <h3>Workplace Safety</h3>
          <p>
            The Occupational Safety, Health and Working Conditions Code
            provisions apply. Ensure:
          </p>
          <ul>
            <li>Safe and hygienic workplace</li>
            <li>Adequate lighting and ventilation</li>
            <li>First-aid facilities</li>
            <li>Fire safety measures</li>
            <li>Ergonomic workstations</li>
            <li>
              Safe transport options for late hours (especially for women)
            </li>
          </ul>

          <h3>Work-From-Home Considerations</h3>
          <p>For remote interns:</p>
          <ul>
            <li>Define expected working hours clearly</li>
            <li>Right to disconnect after work hours</li>
            <li>Provide necessary equipment or reimbursement</li>
            <li>Mental health considerations</li>
          </ul>
        </section>

        {/* Section 5: Internship Agreement */}
        <section
          id="internship-agreement"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCheck className="h-6 w-6 text-primary" />
            5. The Internship Agreement
          </h2>

          <p>
            A written internship agreement is your most important legal
            protection. It sets clear expectations and documents the nature of
            the relationship.
          </p>

          <h3>Essential Clauses</h3>
          <ul>
            <li>
              <strong>Parties:</strong> Full legal names and addresses
            </li>
            <li>
              <strong>Duration:</strong> Start date, end date, and total period
            </li>
            <li>
              <strong>Role & Responsibilities:</strong> Clear description of
              work
            </li>
            <li>
              <strong>Learning Objectives:</strong> Educational purpose of
              internship
            </li>
            <li>
              <strong>Stipend:</strong> Amount, payment frequency, and method
            </li>
            <li>
              <strong>Working Hours:</strong> Expected hours and location
            </li>
            <li>
              <strong>Supervision:</strong> Who the intern reports to
            </li>
            <li>
              <strong>Confidentiality:</strong> Protection of company
              information
            </li>
            <li>
              <strong>IP Assignment:</strong> Ownership of work created
            </li>
            <li>
              <strong>Termination:</strong> Notice period and grounds
            </li>
            <li>
              <strong>Non-compete:</strong> If applicable and reasonable
            </li>
            <li>
              <strong>Governing Law:</strong> Jurisdiction for disputes
            </li>
          </ul>

          <h3>Sample Agreement Framework</h3>
          <div className="rounded-lg bg-muted p-4 text-sm">
            <p className="font-bold">INTERNSHIP AGREEMENT</p>
            <p className="mt-2">This Agreement is made on [Date] between:</p>
            <p className="mt-2">
              <strong>Company:</strong> [Legal Name], having its registered
              office at [Address] (&quot;Company&quot;)
            </p>
            <p className="mt-2">
              <strong>Intern:</strong> [Full Name], residing at [Address]
              (&quot;Intern&quot;)
            </p>
            <p className="mt-4">
              <strong>RECITALS:</strong>
            </p>
            <p>
              WHEREAS the Intern desires to gain practical experience in
              [field], and the Company is willing to provide such training
              opportunity under the terms set forth herein...
            </p>
            <p className="mt-4 italic">
              [Continue with numbered clauses covering all essential terms]
            </p>
          </div>

          <h3>What NOT to Include</h3>
          <ul>
            <li>
              Clauses that classify the relationship as employment if it
              isn&apos;t
            </li>
            <li>Unreasonable non-compete clauses (may be unenforceable)</li>
            <li>Waiver of statutory rights</li>
            <li>One-sided penalty clauses</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Have your internship agreement reviewed
              by a labor law attorney. The cost (₹5,000-15,000 one-time) is
              minimal compared to potential legal problems from using a poorly
              drafted template.
            </div>
          </div>
        </section>

        {/* Section 6: Statutory Compliance */}
        <section
          id="statutory-compliance"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <ClipboardList className="h-6 w-6 text-primary" />
            6. Statutory Compliance Requirements
          </h2>

          <p>
            Depending on how your internship is structured, various statutory
            compliances may apply.
          </p>

          <h3>POSH Act Compliance (Mandatory)</h3>
          <p>
            The Sexual Harassment of Women at Workplace Act, 2013 applies to all
            workplaces:
          </p>
          <ul>
            <li>Interns are covered under the Act</li>
            <li>
              Companies must have an Internal Complaints Committee (ICC) if 10+
              employees
            </li>
            <li>Anti-sexual harassment policy must be displayed</li>
            <li>Regular awareness sessions are recommended</li>
            <li>Complaints from interns must be addressed per the Act</li>
          </ul>

          <h3>PF & ESI (Generally Not Applicable)</h3>
          <p>For short-term internships (under 6 months):</p>
          <ul>
            <li>
              <strong>EPF:</strong> Generally not applicable as intern is not an
              &quot;employee&quot; per the Act
            </li>
            <li>
              <strong>ESI:</strong> May not apply if internship is genuinely
              training-focused
            </li>
          </ul>
          <p>
            However, if the internship is long-term (6+ months) and resembles
            employment, consult with a compliance expert.
          </p>

          <h3>TDS on Stipend</h3>
          <ul>
            <li>If stipend exceeds TDS threshold for contractual payments</li>
            <li>
              Deduct TDS at applicable rate (typically 10% after threshold)
            </li>
            <li>Issue Form 16A to the intern</li>
            <li>Include in quarterly TDS returns</li>
          </ul>

          <h3>Insurance Considerations</h3>
          <p>While not legally mandatory, consider providing:</p>
          <ul>
            <li>
              <strong>Group Personal Accident Insurance:</strong> Covers
              incidents during work
            </li>
            <li>
              <strong>Health Insurance:</strong> Basic coverage during
              internship period
            </li>
            <li>
              <strong>Liability Insurance:</strong> Protects company from claims
            </li>
          </ul>
        </section>

        {/* Section 7: Apprenticeship Act */}
        <section
          id="apprenticeship-act"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            7. The Apprentices Act Alternative
          </h2>

          <p>
            The Apprentices Act, 1961 (amended in 2014 and 2019) provides a
            formal framework for workplace training that offers legal clarity.
          </p>

          <h3>Internship vs. Apprenticeship</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">Internship</th>
                  <th className="p-3 text-left">Apprenticeship</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Legal Framework</td>
                  <td className="p-3">No specific law</td>
                  <td className="p-3">Apprentices Act, 1961</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Duration</td>
                  <td className="p-3">Flexible (weeks to months)</td>
                  <td className="p-3">6 months to 3 years</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Stipend</td>
                  <td className="p-3">Negotiable</td>
                  <td className="p-3">Minimum prescribed by government</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Registration</td>
                  <td className="p-3">Not required</td>
                  <td className="p-3">Mandatory with Regional Directorate</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Certification</td>
                  <td className="p-3">Company-issued</td>
                  <td className="p-3">Government-recognized certificate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Benefits of Apprenticeship Model</h3>
          <ul>
            <li>Clear legal status—apprentice is not an employee</li>
            <li>Government-prescribed minimum stipends (provides certainty)</li>
            <li>No EPF/ESI obligation for apprentices</li>
            <li>Government subsidies available (up to 25% of stipend)</li>
            <li>Can engage apprentices up to 15% of workforce</li>
          </ul>

          <h3>How to Register Apprentices</h3>
          <ol>
            <li>
              Register your establishment on the National Apprenticeship Portal
            </li>
            <li>Post apprenticeship opportunities</li>
            <li>Select candidates and generate contracts</li>
            <li>Submit contracts for approval by Regional Directorate</li>
            <li>Commence training and maintain records</li>
            <li>Apply for government reimbursements if eligible</li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Recommendation:</strong> If you plan to have a structured,
              long-term training program (6+ months), consider the
              Apprenticeship route. It provides legal clarity and can even save
              you money through government subsidies.
            </div>
          </div>
        </section>

        {/* Section 8: Remote Interns */}
        <section
          id="remote-interns"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            8. Remote/Virtual Internships
          </h2>

          <p>
            Post-COVID, remote internships have become common. They come with
            their own legal considerations.
          </p>

          <h3>Key Considerations</h3>
          <ul>
            <li>
              <strong>Jurisdiction:</strong> Which state&apos;s laws apply if
              intern is in different state?
            </li>
            <li>
              <strong>Equipment:</strong> Who provides laptop, internet,
              software?
            </li>
            <li>
              <strong>Data Security:</strong> How to protect company data on
              personal devices?
            </li>
            <li>
              <strong>Working Hours:</strong> How to track without
              micromanaging?
            </li>
            <li>
              <strong>Communication:</strong> Clear protocols for availability
              and response times
            </li>
          </ul>

          <h3>Remote Internship Agreement Additions</h3>
          <ul>
            <li>Specify that work location is intern&apos;s residence</li>
            <li>Define equipment provision and reimbursement policy</li>
            <li>Include data protection and confidentiality clauses</li>
            <li>Specify communication tools and availability expectations</li>
            <li>Address return of any company property upon completion</li>
          </ul>

          <h3>Cross-Border Considerations</h3>
          <p>If hiring interns from other countries:</p>
          <ul>
            <li>Check if visa/work permit requirements apply</li>
            <li>Understand tax implications in both countries</li>
            <li>Specify governing law in agreement</li>
            <li>Consider currency and payment method</li>
          </ul>
        </section>

        {/* Section 9: Unpaid Internships */}
        <section
          id="unpaid-internships"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            9. Unpaid Internships: Proceed with Caution
          </h2>

          <p>
            Unpaid internships exist in India, but they carry significant legal
            risks. Here&apos;s what you need to know.
          </p>

          <h3>When Unpaid May Be Acceptable</h3>
          <ul>
            <li>Genuine academic internships for college credit</li>
            <li>Short-term shadowing or observation programs</li>
            <li>Non-profit organizations (limited circumstances)</li>
            <li>
              Training where intern doesn&apos;t produce value for the company
            </li>
          </ul>

          <h3>When Unpaid Is Legally Risky</h3>
          <ul>
            <li>Intern is doing work that employees would otherwise do</li>
            <li>Company directly benefits from intern&apos;s work product</li>
            <li>Long-duration unpaid engagements</li>
            <li>No meaningful training or educational component</li>
          </ul>

          <h3>The &quot;Primary Beneficiary&quot; Test</h3>
          <p>
            US courts use this test, and Indian courts may adopt similar
            reasoning:
          </p>
          <ul>
            <li>Who benefits more—the intern or the company?</li>
            <li>If the company benefits more, it resembles employment</li>
            <li>
              If the intern benefits more (through learning), it&apos;s more
              like training
            </li>
          </ul>

          <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
            <p className="flex items-center gap-2 font-bold text-red-700 dark:text-red-400">
              <XCircle className="h-5 w-5" />
              Risk Warning
            </p>
            <p className="mt-2 text-sm">
              A disgruntled unpaid intern can file a complaint claiming they
              were an employee who was denied minimum wage. If authorities
              agree, you may face: back-payment of wages with interest,
              penalties under the Payment of Wages Act, and potential criminal
              liability in severe cases.
            </p>
          </div>

          <h3>Best Practice Recommendation</h3>
          <p>Pay at least a nominal stipend. Even ₹5,000-10,000/month:</p>
          <ul>
            <li>Shows good faith and fair treatment</li>
            <li>Attracts better candidates</li>
            <li>Reduces legal risk significantly</li>
            <li>Is often tax-deductible for the company</li>
          </ul>
        </section>

        {/* Section 10: Termination */}
        <section
          id="termination"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <XCircle className="h-6 w-6 text-primary" />
            10. Termination & Exit Process
          </h2>

          <p>
            Sometimes internships don&apos;t work out. Having clear termination
            procedures protects both parties.
          </p>

          <h3>Grounds for Termination</h3>
          <ul>
            <li>
              <strong>By Company:</strong> Misconduct, poor performance, breach
              of agreement, business reasons
            </li>
            <li>
              <strong>By Intern:</strong> Personal reasons, accepting another
              opportunity, academic requirements
            </li>
            <li>
              <strong>Mutual:</strong> Agreed early termination
            </li>
          </ul>

          <h3>Notice Period</h3>
          <p>Typical notice periods for internships:</p>
          <ul>
            <li>Short-term (1-2 months): 3-7 days</li>
            <li>Standard (3-6 months): 7-14 days</li>
            <li>Long-term (6+ months): 14-30 days</li>
          </ul>

          <h3>Exit Checklist</h3>
          <ul>
            <li>Return of company property (laptop, ID card, etc.)</li>
            <li>Handover of work and documentation</li>
            <li>Final stipend payment</li>
            <li>Experience certificate issuance</li>
            <li>Exit interview (optional but recommended)</li>
            <li>Reminder of ongoing confidentiality obligations</li>
            <li>LinkedIn recommendation (if appropriate)</li>
          </ul>

          <h3>The Experience Certificate</h3>
          <p>
            Every intern is entitled to a certificate upon completion. Include:
          </p>
          <ul>
            <li>Company letterhead</li>
            <li>Intern&apos;s full name</li>
            <li>Duration of internship</li>
            <li>Role/department</li>
            <li>Brief description of work (optional)</li>
            <li>Performance assessment (optional)</li>
            <li>Date and authorized signatory</li>
          </ul>
        </section>

        {/* Section 11: IP & Confidentiality */}
        <section
          id="ip-confidentiality"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lock className="h-6 w-6 text-primary" />
            11. Intellectual Property & Confidentiality
          </h2>

          <p>
            Protecting your company&apos;s IP when using interns is crucial,
            especially for tech startups.
          </p>

          <h3>IP Assignment</h3>
          <p>
            Under Indian law, the creator of original work owns the copyright by
            default. Your internship agreement MUST include:
          </p>
          <ul>
            <li>Clear assignment of all work product to the company</li>
            <li>Waiver of moral rights (to the extent permitted)</li>
            <li>Cooperation in executing any documents for IP registration</li>
            <li>Assignment of patents, inventions, and discoveries</li>
          </ul>

          <h3>Sample IP Clause</h3>
          <div className="rounded-lg bg-muted p-4 text-sm">
            <p>
              &quot;The Intern hereby assigns to the Company all right, title,
              and interest in any and all intellectual property created,
              developed, or conceived by the Intern during the internship period
              in connection with the Company&apos;s business, including but not
              limited to inventions, works of authorship, software, designs, and
              trade secrets...&quot;
            </p>
          </div>

          <h3>Confidentiality Obligations</h3>
          <ul>
            <li>Define what constitutes confidential information</li>
            <li>Prohibition on disclosure during and after internship</li>
            <li>Exceptions for publicly available information</li>
            <li>Return or destruction of confidential materials upon exit</li>
            <li>Reasonable duration (typically 2-5 years post-internship)</li>
          </ul>

          <h3>Practical Protections</h3>
          <ul>
            <li>Limit access to sensitive information on need-to-know basis</li>
            <li>Use NDAs for particularly sensitive projects</li>
            <li>Implement technical controls (access management, logging)</li>
            <li>Regular reminders about confidentiality obligations</li>
          </ul>
        </section>

        {/* Section 12: Best Practices */}
        <section
          id="best-practices"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BadgeCheck className="h-6 w-6 text-primary" />
            12. Best Practices for Legal Compliance
          </h2>

          <p>
            Follow these best practices to run a compliant and successful
            internship program:
          </p>

          <h3>Documentation</h3>
          <ul>
            <li>Always use written internship agreements</li>
            <li>Keep copies of all signed documents</li>
            <li>Maintain attendance and working hour records</li>
            <li>Document stipend payments with receipts</li>
            <li>Keep performance evaluation records</li>
          </ul>

          <h3>Treat Interns Fairly</h3>
          <ul>
            <li>Pay competitive stipends within your budget</li>
            <li>Provide genuine learning opportunities</li>
            <li>Assign meaningful work, not just busy work</li>
            <li>Provide mentorship and feedback</li>
            <li>Include interns in team activities</li>
          </ul>

          <h3>Create Proper Structure</h3>
          <ul>
            <li>Designate an internship coordinator</li>
            <li>Create onboarding documentation</li>
            <li>Set clear learning objectives</li>
            <li>Schedule regular check-ins</li>
            <li>Plan mid-point and final evaluations</li>
          </ul>

          <h3>Stay Updated</h3>
          <ul>
            <li>Monitor changes in labor laws</li>
            <li>Review and update agreements annually</li>
            <li>Consult legal counsel for complex situations</li>
            <li>Attend HR/legal compliance webinars</li>
          </ul>
        </section>

        {/* Section 13: Checklist */}
        <section
          id="checklist"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckSquare className="h-6 w-6 text-primary" />
            13. Compliance Checklist
          </h2>

          <p>Use this checklist before, during, and after each internship:</p>

          <div className="not-prose my-6 rounded-lg bg-muted p-6">
            <h4 className="mb-4 font-bold">Pre-Internship</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Written internship agreement prepared and signed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Intern&apos;s ID proof and address collected</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Bank details for stipend payment obtained</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Emergency contact information collected</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>
                  Confidentiality/NDA clauses included or separate NDA signed
                </span>
              </li>
            </ul>

            <h4 className="mb-4 mt-6 font-bold">During Internship</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Attendance and hours tracked</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Stipend paid on time (retain proof)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>POSH policy communicated</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Regular feedback provided</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Safe working conditions ensured</span>
              </li>
            </ul>

            <h4 className="mb-4 mt-6 font-bold">Post-Internship</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Company property returned</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Final stipend settled</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Experience certificate issued</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Access to systems revoked</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Exit interview conducted</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 14: Common Mistakes */}
        <section
          id="common-mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-primary" />
            14. Common Mistakes to Avoid
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ No Written Agreement</p>
              <p className="text-sm text-muted-foreground">
                Operating on verbal agreements creates ambiguity and exposes you
                to legal risk. Always have a signed document.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Treating Interns as Free Labor</p>
              <p className="text-sm text-muted-foreground">
                Using unpaid interns for productive work that employees would do
                is legally risky and ethically problematic.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Ignoring Working Hours</p>
              <p className="text-sm text-muted-foreground">
                Making interns work excessive hours without breaks or
                compensation can lead to complaints and health issues.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ No POSH Compliance</p>
              <p className="text-sm text-muted-foreground">
                Failing to have sexual harassment prevention measures in place
                is a legal violation and puts all employees at risk.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Missing IP Assignment</p>
              <p className="text-sm text-muted-foreground">
                Without proper IP assignment, the intern may own the work they
                create, causing problems later.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">❌ Delayed or Missing Certificates</p>
              <p className="text-sm text-muted-foreground">
                Not providing experience certificates or delaying them damages
                your reputation and the intern&apos;s career.
              </p>
            </div>
          </div>
        </section>

        {/* Section 15: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary" />
            15. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">
                Is it legal to have unpaid interns in India?
              </p>
              <p className="mt-2 text-muted-foreground">
                There&apos;s no explicit prohibition, but it&apos;s legally
                risky. If the intern is doing productive work, minimum wage laws
                may apply. Paid internships are strongly recommended.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">Do I need to pay EPF/ESI for interns?</p>
              <p className="mt-2 text-muted-foreground">
                Generally not for short-term, training-focused internships.
                However, if the internship looks like employment (long duration,
                full-time productive work), these benefits may apply. Consult a
                compliance expert.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Can I terminate an intern before the end date?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes, if your internship agreement includes termination
                provisions. Follow the notice period and grounds specified in
                the agreement. Document the reasons for termination.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                What if an intern gets injured at work?
              </p>
              <p className="mt-2 text-muted-foreground">
                Workmen&apos;s Compensation Act may apply in severe cases.
                Having insurance coverage is recommended. Report serious
                injuries to appropriate authorities and ensure the intern
                receives necessary medical care.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Can interns file complaints with labor authorities?
              </p>
              <p className="mt-2 text-muted-foreground">
                Yes. If an intern believes they&apos;ve been treated as an
                employee without proper compensation or rights, they can file
                complaints with labor departments. This is why proper
                documentation and compliance matter.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How do I handle interns from other states?
              </p>
              <p className="mt-2 text-muted-foreground">
                For on-site interns, your state&apos;s laws generally apply. For
                remote interns, specify governing law in the agreement. Be aware
                of Interstate Migrant Workmen Act if applicable.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Build a Compliant Internship Program</h2>
          <p>
            Running a legally compliant internship program isn&apos;t just about
            avoiding problems—it&apos;s about building a sustainable talent
            pipeline and a reputation as a great place to work.
          </p>
          <p>
            The key takeaways: always use written agreements, pay fair stipends,
            respect working hours, protect your IP, and treat interns as
            valuable members of your team. These practices not only keep you
            compliant but also help you attract and retain the best intern
            talent.
          </p>
          <p>
            When in doubt, invest in professional legal advice. The cost of
            getting it right upfront is far less than the cost of defending a
            complaint or lawsuit later.
          </p>
          <p>
            Now go build an internship program that benefits your startup and
            the next generation of professionals! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/how-to-create-a-killer-internship-program-from-scratch"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Create an Internship Program
            </Link>
            <Link
              href="/blog/why-your-startup-should-hire-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Why Hire Interns
            </Link>
            <Link
              href="/blog/from-intern-to-full-time-how-to-convert-top-talent"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Interns to Full-Time
            </Link>
            <Link
              href="/blog/unlocking-gen-z-how-to-attract-and-retain-young-talent"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Attracting Gen Z Talent
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
