import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Shield,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Ban,
  Eye,
  FileWarning,
  Search,
  Phone,
  Mail,
  Globe,
  AlertCircle,
  XCircle,
  DollarSign,
  MessageCircle,
  Building,
  Link2,
  UserX,
  Lock,
  Star,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Internship Scams to Avoid: Complete Guide',
  description:
    'Protect yourself from fake internships, MLM schemes, and work-from-home scams. Learn to identify red flags, verify companies, and report fraud effectively.',
  keywords: [
    'internship scam',
    'fake internship',
    'internship fraud',
    'job scam india',
    'avoid internship scam',
    'fake job offer',
    'internship scam warning signs',
    'how to verify internship',
    'internship fraud india',
    'report internship scam',
  ],
  openGraph: {
    title: 'Internship Scams to Avoid: Complete Guide',
    description:
      'Stay safe from fake opportunities. Learn to identify and avoid internship scams.',
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
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Safety Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Internship Scams to Avoid: The Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Thousands of students fall victim to internship scams every year.
            This comprehensive guide teaches you how to identify fake offers,
            verify legitimate opportunities, and protect yourself from
            fraudsters targeting job seekers.
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
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Critical Warning Box */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-950">
          <h2 className="mb-2 flex items-center gap-2 text-lg font-bold text-red-700 dark:text-red-400">
            <AlertTriangle className="h-5 w-5" />
            IMPORTANT WARNING
          </h2>
          <p className="mb-2 text-sm font-bold text-red-700 dark:text-red-400">
            Legitimate companies NEVER ask for money to give you an internship.
          </p>
          <p className="text-sm text-red-700 dark:text-red-400">
            If anyone asks for registration fees, training fees, security
            deposits, or payment for &quot;materials&quot;—it&apos;s a scam.
            Real companies pay YOU; you don&apos;t pay them.
          </p>
        </div>

        {/* Scam Statistics */}
        <div className="not-prose mb-10 rounded-lg bg-muted p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            The Scale of the Problem
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">₹1,000 Cr+</span>
              <span>lost to job scams in India annually</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">65%</span>
              <span>of fresher job scams target college students</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">3x</span>
              <span>increase in online job fraud since 2020</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-red-600">78%</span>
              <span>of victims don&apos;t report to authorities</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            The desperation to land an internship, combined with the pressure of
            placement season, makes students perfect targets for scammers. These
            fraudsters are sophisticated—they create convincing company
            profiles, conduct fake interviews, and use psychological tactics to
            extract money from unsuspecting victims.
          </p>
          <p>
            This guide arms you with the knowledge to identify scams before you
            become a victim. Learn the warning signs, verification steps, and
            what to do if you&apos;ve already been targeted.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Common Scam Types
              </a>
            </li>
            <li>
              <a
                href="#tactics"
                className="text-primary hover:underline"
              >
                2. Scammer Tactics Explained
              </a>
            </li>
            <li>
              <a
                href="#redflags"
                className="text-primary hover:underline"
              >
                3. Red Flags Checklist
              </a>
            </li>
            <li>
              <a
                href="#verify"
                className="text-primary hover:underline"
              >
                4. How to Verify Companies
              </a>
            </li>
            <li>
              <a
                href="#realexamples"
                className="text-primary hover:underline"
              >
                5. Real Scam Examples
              </a>
            </li>
            <li>
              <a
                href="#protection"
                className="text-primary hover:underline"
              >
                6. Protection Strategies
              </a>
            </li>
            <li>
              <a
                href="#already"
                className="text-primary hover:underline"
              >
                7. Already Scammed? What to Do
              </a>
            </li>
            <li>
              <a
                href="#report"
                className="text-primary hover:underline"
              >
                8. How to Report Scams
              </a>
            </li>
            <li>
              <a
                href="#safe"
                className="text-primary hover:underline"
              >
                9. Safe Platforms &amp; Resources
              </a>
            </li>
            <li>
              <a
                href="#legal"
                className="text-primary hover:underline"
              >
                10. Legal Rights
              </a>
            </li>
            <li>
              <a
                href="#prevention"
                className="text-primary hover:underline"
              >
                11. Prevention Habits
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
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
                NEVER pay for an internship—legitimate companies don&apos;t
                charge fees
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Verify company existence through LinkedIn, MCA portal, and
                official websites
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Official communications use corporate email domains, not
                Gmail/Yahoo
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>If it sounds too good to be true, it definitely is</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Report scams immediately—you might save someone else</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Ban className="h-6 w-6 text-primary" />
            1. Common Scam Types
          </h2>

          <p>
            Scammers use various tactics. Understanding these patterns helps you
            recognize fraud before falling victim:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-700 dark:text-red-400">
                <DollarSign className="mr-2 inline h-4 w-4" />
                Registration Fee Scam
              </h4>
              <p className="mt-2 text-sm">
                <strong>How it works:</strong> You receive an offer letter
                asking for ₹500-5000 as &quot;registration fee,&quot;
                &quot;processing charge,&quot; or &quot;security deposit&quot;
                to confirm your internship.
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                <strong>Reality:</strong> No legitimate company charges to hire
                you. This is pure theft.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-700 dark:text-red-400">
                <BookOpen className="mr-2 inline h-4 w-4" />
                Mandatory Training Scam
              </h4>
              <p className="mt-2 text-sm">
                <strong>How it works:</strong> &quot;Congratulations!
                You&apos;re selected, but you must complete our paid training
                program (₹5,000-50,000) before starting.&quot;
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                <strong>Reality:</strong> Companies train interns at their own
                cost. Mandatory paid training = scam.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-700 dark:text-red-400">
                <Users className="mr-2 inline h-4 w-4" />
                MLM/Pyramid Scheme
              </h4>
              <p className="mt-2 text-sm">
                <strong>How it works:</strong> &quot;Business development&quot;
                or &quot;marketing&quot; internship where your job is to recruit
                others, sell products to friends/family, or build a
                &quot;team.&quot;
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                <strong>Reality:</strong> MLM companies profit from recruits,
                not products. You&apos;ll lose money and relationships.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-700 dark:text-red-400">
                <Smartphone className="mr-2 inline h-4 w-4" />
                Fake Remote Work Scam
              </h4>
              <p className="mt-2 text-sm">
                <strong>How it works:</strong> &quot;Work from home, earn
                ₹50,000/month with just your phone! No experience needed!&quot;
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                <strong>Reality:</strong> Either asks for money upfront or
                involves illegal activities like money laundering.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-700 dark:text-red-400">
                <Building className="mr-2 inline h-4 w-4" />
                Fake Company Impersonation
              </h4>
              <p className="mt-2 text-sm">
                <strong>How it works:</strong> Scammers impersonate real
                companies (Google, TCS, Infosys) with fake emails and offer
                letters.
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                <strong>Reality:</strong> Real companies don&apos;t reach out
                via WhatsApp or ask for payments.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <h4 className="font-bold text-red-700 dark:text-red-400">
                <FileWarning className="mr-2 inline h-4 w-4" />
                Certificate Selling Scam
              </h4>
              <p className="mt-2 text-sm">
                <strong>How it works:</strong> &quot;Complete this
                &apos;internship&apos; online and get a certificate for
                ₹500&quot; with no real work or learning.
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                <strong>Reality:</strong> These certificates are worthless.
                Employers can spot fake credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Tactics */}
        <section
          id="tactics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <UserX className="h-6 w-6 text-primary" />
            2. Scammer Tactics Explained
          </h2>

          <p>Understanding the psychology scammers use helps you stay alert:</p>

          <h3>Urgency and Pressure</h3>
          <ul>
            <li>&quot;Offer expires in 24 hours!&quot;</li>
            <li>&quot;Only 2 seats left!&quot;</li>
            <li>&quot;Pay now or lose this opportunity!&quot;</li>
          </ul>
          <p>
            <strong>Why it works:</strong> Panic prevents logical thinking.
            Legitimate companies give you time to decide.
          </p>

          <h3>Too Good to Be True</h3>
          <ul>
            <li>₹30,000/month for a fresher with no skills</li>
            <li>&quot;Work 2 hours/day, earn ₹50,000&quot;</li>
            <li>Guaranteed placement with zero effort</li>
          </ul>
          <p>
            <strong>Why it works:</strong> Greed overrides judgment. Real
            entry-level stipends are ₹5,000-15,000/month.
          </p>

          <h3>Authority Exploitation</h3>
          <ul>
            <li>Fake official-looking emails and letterheads</li>
            <li>Claiming to be &quot;from Google/Microsoft HR&quot;</li>
            <li>Using real employee names (stolen from LinkedIn)</li>
          </ul>
          <p>
            <strong>Why it works:</strong> We trust perceived authority. Always
            verify through official channels.
          </p>

          <h3>Social Proof Manipulation</h3>
          <ul>
            <li>&quot;10,000 students already enrolled!&quot;</li>
            <li>Fake testimonials and reviews</li>
            <li>Stock photos of &quot;successful interns&quot;</li>
          </ul>
          <p>
            <strong>Why it works:</strong> We follow the crowd. But the crowd
            shown is fake.
          </p>
        </section>

        {/* Section 3: Red Flags */}
        <section
          id="redflags"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            3. Red Flags Checklist
          </h2>

          <p>Use this checklist to evaluate any internship offer:</p>

          <div className="not-prose my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  Any request for payment
                </p>
                <p className="text-sm text-muted-foreground">
                  Fees, deposits, training costs, materials—any payment = scam
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  Gmail/Yahoo/Outlook email addresses
                </p>
                <p className="text-sm text-muted-foreground">
                  Real companies use corporate domains (@google.com, @tcs.com)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">Vague job descriptions</p>
                <p className="text-sm text-muted-foreground">
                  &quot;Marketing,&quot; &quot;business development,&quot;
                  &quot;data entry&quot; with no specifics
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  Guaranteed high pay for no experience
                </p>
                <p className="text-sm text-muted-foreground">
                  ₹20,000+/month for freshers with &quot;no experience
                  required&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  Pressure to decide immediately
                </p>
                <p className="text-sm text-muted-foreground">
                  &quot;Reply within 24 hours or lose the offer&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">No interview process</p>
                <p className="text-sm text-muted-foreground">
                  Direct offer without any interview or assessment
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  Poor website or no website
                </p>
                <p className="text-sm text-muted-foreground">
                  No professional website, or a site with stock images and vague
                  content
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  WhatsApp-only communication
                </p>
                <p className="text-sm text-muted-foreground">
                  Professional companies use email / video calls, not just
                  WhatsApp
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border p-3">
              <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
              <div>
                <p className="font-bold text-red-600">
                  Request for bank details or OTPs
                </p>
                <p className="text-sm text-muted-foreground">
                  Never share OTP, CVV, bank passwords—companies don&apos;t need
                  these
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Verify */}
        <section
          id="verify"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            4. How to Verify Companies
          </h2>

          <p>Before accepting any offer, complete these verification steps:</p>

          <h3>Step 1: Check LinkedIn</h3>
          <ul>
            <li>Does the company have an official LinkedIn page?</li>
            <li>Do employees have real, active profiles?</li>
            <li>Are employees&apos; work histories consistent?</li>
            <li>How many real followers/employees are listed?</li>
          </ul>

          <h3>Step 2: Verify on MCA Portal</h3>
          <p>
            For Indian companies, check registration at{' '}
            <strong>mca.gov.in</strong>:
          </p>
          <ul>
            <li>
              Search company name in &quot;View Company/LLP Master Data&quot;
            </li>
            <li>Verify CIN (Corporate Identity Number)</li>
            <li>Check registration date and status (Active/Inactive)</li>
          </ul>

          <h3>Step 3: Examine the Website</h3>
          <ul>
            <li>Is it a professional, well-maintained website?</li>
            <li>Are there real team member photos and names?</li>
            <li>Is there a physical address and landline number?</li>
            <li>
              When was the domain registered? (Check whois.domaintools.com)
            </li>
          </ul>

          <h3>Step 4: Google Search</h3>
          <ul>
            <li>Search &quot;[Company name] scam&quot;</li>
            <li>Search &quot;[Company name] reviews&quot;</li>
            <li>Check Glassdoor for employee reviews</li>
            <li>Look for news articles about the company</li>
          </ul>

          <h3>Step 5: Call and Confirm</h3>
          <ul>
            <li>
              Find the official phone number from the company website (NOT from
              the email you received)
            </li>
            <li>
              Call and ask: &quot;Did you send me an internship offer?&quot;
            </li>
            <li>Verify the email address and contact person name</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Ask alumni from your college if anyone
              has worked at this company. Real experiences are the best
              verification.
            </div>
          </div>
        </section>

        {/* Section 5: Real Examples */}
        <section
          id="realexamples"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileWarning className="h-6 w-6 text-primary" />
            5. Real Scam Examples
          </h2>

          <p>Learn from these real-world examples reported by students:</p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Case 1: Fake Google Offer</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                A student received an email from
                &quot;google.hr.india@gmail.com&quot; (red flag: Gmail, not
                @google.com) offering a ₹40,000/month internship. Asked to pay
                ₹3,000 for &quot;background verification.&quot;
              </p>
              <p className="mt-2 text-sm text-red-600">
                <strong>Outcome:</strong> Lost ₹3,000. Real Google never uses
                Gmail for official communication.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Case 2: WhatsApp Interview Scam</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                A &quot;recruiter&quot; conducted an interview entirely via
                WhatsApp, sent an offer letter demanding ₹5,000 &quot;training
                fee.&quot;
              </p>
              <p className="mt-2 text-sm text-red-600">
                <strong>Outcome:</strong> Student reported to cybercrime.
                Legitimate interviews happen via video call or in-person.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Case 3: MLM Disguised as Internship</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                &quot;Marketing internship&quot; that turned out to be selling
                products door-to-door and recruiting friends to join the
                &quot;team&quot; for commission.
              </p>
              <p className="mt-2 text-sm text-red-600">
                <strong>Outcome:</strong> Student lost ₹10,000 on inventory and
                damaged friendships by recruiting them.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Protection */}
        <section
          id="protection"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lock className="h-6 w-6 text-primary" />
            6. Protection Strategies
          </h2>

          <h3>Before Applying</h3>
          <ul>
            <li>
              Use only trusted platforms (Internshala, LinkedIn, company sites)
            </li>
            <li>Research the company before applying</li>
            <li>Check if the job posting seems too good to be true</li>
          </ul>

          <h3>During Process</h3>
          <ul>
            <li>Verify all communication through official channels</li>
            <li>Never pay any amount for any reason</li>
            <li>Ask for video call interviews (scammers avoid showing face)</li>
            <li>Be suspicious of &quot;urgent&quot; deadlines</li>
          </ul>

          <h3>After Receiving Offer</h3>
          <ul>
            <li>Verify the offer with the company&apos;s official HR</li>
            <li>Check the offer letter against official templates online</li>
            <li>Have a trusted adult review the offer</li>
            <li>
              Take your time—legitimate offers don&apos;t expire overnight
            </li>
          </ul>

          <h3>Data Protection</h3>
          <ul>
            <li>
              Never share Aadhaar, PAN, or bank details until joining verified
              company
            </li>
            <li>Never share OTPs, passwords, or CVVs</li>
            <li>Be careful with resume details—limit personal information</li>
          </ul>
        </section>

        {/* Section 7: Already Scammed */}
        <section
          id="already"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            7. Already Scammed? What to Do Immediately
          </h2>

          <p>If you&apos;ve already paid or shared sensitive information:</p>

          <h3>Within 24 Hours</h3>
          <ol>
            <li>
              <strong>Contact your bank immediately:</strong> Request to freeze
              the transaction or reverse the payment
            </li>
            <li>
              <strong>Change all passwords:</strong> Email, banking, social
              media
            </li>
            <li>
              <strong>Screenshot everything:</strong> Messages, emails, payment
              receipts, website pages
            </li>
          </ol>

          <h3>Report the Scam</h3>
          <ol>
            <li>
              File complaint on <strong>cybercrime.gov.in</strong>
            </li>
            <li>
              Call National Cyber Crime Helpline: <strong>1930</strong>
            </li>
            <li>Visit local police station with evidence</li>
          </ol>

          <h3>Protect Yourself Further</h3>
          <ul>
            <li>Monitor your bank accounts for unusual activity</li>
            <li>Consider putting a fraud alert on your credit</li>
            <li>Report to the platform where you found the posting</li>
          </ul>
        </section>

        {/* Section 8: Report */}
        <section
          id="report"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-primary" />
            8. How to Report Scams
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-bold">National Cyber Crime Portal</h4>
              <p className="mt-1 text-sm">
                <strong>Website:</strong> cybercrime.gov.in
              </p>
              <p className="text-sm">
                <strong>Helpline:</strong> 1930 (toll-free)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                File detailed complaint with all evidence for online fraud
                cases.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">National Consumer Helpline</h4>
              <p className="mt-1 text-sm">
                <strong>Helpline:</strong> 1800-11-4000 (toll-free)
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                For consumer rights and fraud complaints.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Platform Reporting</h4>
              <p className="mt-1 text-sm">
                Report the posting/profile on LinkedIn, Internshala, or wherever
                you found it.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="font-bold">Warn Others</h4>
              <p className="mt-1 text-sm">
                Share details in college WhatsApp groups to alert peers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Safe Platforms */}
        <section
          id="safe"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            9. Safe Platforms &amp; Resources
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">✅ Internshala</p>
              <p className="text-muted-foreground">
                Verified companies, large database, refund policy
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">✅ LinkedIn Jobs</p>
              <p className="text-muted-foreground">
                Verified company pages, professional network
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">
                ✅ Company Career Pages
              </p>
              <p className="text-muted-foreground">
                Apply directly on official company websites
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">
                ✅ College Placement Cell
              </p>
              <p className="text-muted-foreground">
                Pre-vetted opportunities through official channels
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">✅ Sproutern</p>
              <p className="text-muted-foreground">
                Curated, verified internship listings
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">
                ✅ AngelList / Wellfound
              </p>
              <p className="text-muted-foreground">
                Verified startup opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Legal */}
        <section
          id="legal"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileWarning className="h-6 w-6 text-primary" />
            10. Your Legal Rights
          </h2>

          <p>Job fraud is a crime under Indian law. You have rights:</p>

          <ul>
            <li>
              <strong>IT Act, 2000 (Section 66D):</strong> Cheating by
              impersonation—punishment up to 3 years imprisonment and fine
            </li>
            <li>
              <strong>IPC Section 420:</strong> Cheating and dishonestly
              inducing delivery of property—punishment up to 7 years
            </li>
            <li>
              <strong>Consumer Protection Act:</strong> Right to seek
              compensation for unfair trade practices
            </li>
          </ul>

          <p>
            Filing a police complaint creates a paper trail that may help
            recover your money and prevent scammers from targeting others.
          </p>
        </section>

        {/* Section 11: Prevention */}
        <section
          id="prevention"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            11. Prevention Habits to Develop
          </h2>

          <ul>
            <li>
              <strong>Pause before paying:</strong> No legitimate opportunity
              requires upfront payment
            </li>
            <li>
              <strong>Verify everything:</strong> Don&apos;t trust, verify
            </li>
            <li>
              <strong>Trust your instincts:</strong> If something feels off, it
              probably is
            </li>
            <li>
              <strong>Ask for advice:</strong> Discuss offers with parents,
              professors, or trusted seniors
            </li>
            <li>
              <strong>Stay informed:</strong> Follow news about new scam tactics
            </li>
          </ul>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. FAQs
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">
                I already paid ₹2,000. Can I get it back?
              </p>
              <p className="mt-2 text-muted-foreground">
                Contact your bank immediately to attempt reversal. File a
                complaint on cybercrime.gov.in. Recovery chances are higher if
                you act within 24-48 hours.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Are all work-from-home internships scams?
              </p>
              <p className="mt-2 text-muted-foreground">
                No. Many legitimate companies offer remote internships. The key
                is verifying the company through the steps above. Red flags are
                payment requests and unrealistic promises.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                The recruiter called from an Indian number. Isn&apos;t that
                legitimate?
              </p>
              <p className="mt-2 text-muted-foreground">
                Scammers use Indian numbers easily. Phone calls prove nothing.
                Always verify through official company channels and websites.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                They said they&apos;ll refund after I complete training. Safe?
              </p>
              <p className="mt-2 text-muted-foreground">
                No. This is a common scam tactic. Real companies never ask you
                to pay and promise refunds later. Don&apos;t fall for it.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                I shared my Aadhaar number. What should I do?
              </p>
              <p className="mt-2 text-muted-foreground">
                Monitor your bank accounts closely. Consider locking your
                Aadhaar biometrics at uidai.gov.in. Report the incident to
                authorities to create a record.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                My friend got the same offer and it worked for them.
              </p>
              <p className="mt-2 text-muted-foreground">
                Scammers sometimes let early victims succeed to create
                testimonials, then defraud many more. Verify independently,
                don&apos;t rely on others&apos; experiences alone.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Stay Safe, Stay Smart</h2>
          <p>
            Scammers prey on students&apos; eagerness for opportunities. The
            pressure of placements, competition with peers, and financial needs
            make students vulnerable. But with awareness and caution, you can
            protect yourself.
          </p>
          <p>
            Remember: A legitimate opportunity will never require you to pay.
            Any company worth working for will never rush you into decisions.
            Trust your instincts, verify everything, and don&apos;t let
            desperation cloud your judgment.
          </p>
          <p className="text-lg font-semibold text-primary">
            A real opportunity never requires you to pay. Protect yourself. 🛡️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Internship Guide
            </Link>
            <Link
              href="/blog/hidden-internship-opportunities"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Hidden Opportunities
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
              Browse Verified Internships
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
                Based on reports from students, cybercrime awareness resources,
                and law enforcement advisories.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
