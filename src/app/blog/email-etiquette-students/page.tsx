import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Mail,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  MessageSquare,
  AlertTriangle,
  Send,
  XCircle,
  Star,
  Search,
  Clock3,
  AlertCircle,
  Inbox,
  FileText,
  Smartphone,
  Globe,
  Zap,
  Eye,
  PenTool,
  Settings,
  Reply,
  Forward,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Email Etiquette for Students',
  description:
    'Master professional email etiquette for internship applications, follow-ups, cold outreach, and workplace communication. Complete guide with templates and examples.',
  keywords: [
    'email etiquette students',
    'professional email',
    'internship email',
    'email writing guide',
    'formal email',
    'cold email templates',
    'professional email templates',
    'email etiquette workplace',
    'how to write email to hr',
    'email communication skills',
  ],
  openGraph: {
    title: 'Email Etiquette for Students: Professional Communication Guide',
    description: 'Master professional email communication that gets responses.',
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
          <div className="mb-4 flex items-center gap-2 text-sky-600">
            <Mail className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Professional Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Email Etiquette for Students: The Complete Professional
            Communication Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your email is often the first impression you make on recruiters,
            professors, and professional connections. This comprehensive guide
            teaches you to write emails that get responses, build relationships,
            and advance your career.
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

        {/* Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-sky-500 bg-sky-50 p-6 dark:bg-sky-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-sky-600" />
            Why Email Matters
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-sky-600">47%</span>
              <span>
                of emails are opened or ignored based on subject line alone
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-sky-600">2.5 min</span>
              <span>average time spent on an email response</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-sky-600">86%</span>
              <span>
                of professionals prefer email for business communication
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-sky-600">3x</span>
              <span>higher response rates with personalized subject lines</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            In both academic and professional settings, email remains the
            primary mode of formal communication. A well-written email can open
            doors, while a careless one can close them forever.
          </p>
          <p>
            This guide covers everything from basic etiquette rules to advanced
            techniques for cold outreach, follow-ups, and workplace
            communication. By the end, you&apos;ll write emails that get read,
            get responses, and get results.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#basics"
                className="text-primary hover:underline"
              >
                1. Email Fundamentals
              </a>
            </li>
            <li>
              <a
                href="#subject"
                className="text-primary hover:underline"
              >
                2. Powerful Subject Lines
              </a>
            </li>
            <li>
              <a
                href="#structure"
                className="text-primary hover:underline"
              >
                3. Email Structure
              </a>
            </li>
            <li>
              <a
                href="#tone"
                className="text-primary hover:underline"
              >
                4. Tone and Formality
              </a>
            </li>
            <li>
              <a
                href="#templates"
                className="text-primary hover:underline"
              >
                5. Templates for Every Situation
              </a>
            </li>
            <li>
              <a
                href="#followup"
                className="text-primary hover:underline"
              >
                6. Follow-Up Strategy
              </a>
            </li>
            <li>
              <a
                href="#cold"
                className="text-primary hover:underline"
              >
                7. Cold Email Best Practices
              </a>
            </li>
            <li>
              <a
                href="#workplace"
                className="text-primary hover:underline"
              >
                8. Workplace Email Etiquette
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                9. Common Mistakes
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                10. Useful Tools
              </a>
            </li>
            <li>
              <a
                href="#mobile"
                className="text-primary hover:underline"
              >
                11. Mobile Email Tips
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
                Your subject line determines if your email gets opened—make it
                count
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Keep emails short and scannable—busy people skim, not read
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Always proofread before sending—typos destroy credibility
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Include a clear call-to-action—what do you want them to do?
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Follow up strategically—persistence pays, pestering doesn&apos;t
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Match your tone to the recipient and context</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Basics */}
        <section
          id="basics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Email Fundamentals
          </h2>

          <p>
            Before diving into templates and techniques, get these basics right:
          </p>

          <h3>Professional Email Address</h3>
          <ul>
            <li>
              <strong>Use:</strong> firstname.lastname@gmail.com or
              firstname@university.edu
            </li>
            <li>
              <strong>Avoid:</strong> coolboy2003@gmail.com,
              princessstar@yahoo.com
            </li>
            <li>
              If your name is taken, use initials or add a professional suffix
              (e.g., firstname.lastname.dev@gmail.com)
            </li>
          </ul>

          <h3>Email Signature</h3>
          <p>Create a professional signature that includes:</p>
          <ul>
            <li>Your full name</li>
            <li>
              Current role/major (e.g., &quot;Computer Science, IIT Delhi&quot;)
            </li>
            <li>Phone number (optional)</li>
            <li>LinkedIn profile URL</li>
            <li>Portfolio website (if applicable)</li>
          </ul>

          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">Example Signature:</p>
            <p>
              Best regards,
              <br />
              Rahul Sharma
              <br />
              B.Tech Computer Science, IIT Delhi (2024)
              <br />
              linkedin.com/in/rahulsharma | +91 98765 43210
            </p>
          </div>

          <h3>Reply Etiquette</h3>
          <ul>
            <li>Reply within 24 hours for professional emails</li>
            <li>
              Use &quot;Reply All&quot; only when everyone needs the information
            </li>
            <li>Keep the thread if context is needed, start fresh if not</li>
          </ul>
        </section>

        {/* Section 2: Subject Lines */}
        <section
          id="subject"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Inbox className="h-6 w-6 text-primary" />
            2. Powerful Subject Lines
          </h2>

          <p>
            Your subject line is the gatekeeper. A boring subject means your
            email may never be opened.
          </p>

          <h3>Subject Line Best Practices</h3>
          <ul>
            <li>
              <strong>Be specific:</strong> &quot;Application for SDE Intern -
              Rahul Sharma, IIT Delhi&quot;
            </li>
            <li>
              <strong>Keep it short:</strong> Under 50 characters displays fully
              on mobile
            </li>
            <li>
              <strong>Include key info:</strong> Role, your name, college
            </li>
            <li>
              <strong>Create urgency when appropriate:</strong> &quot;Quick
              question about...&quot;
            </li>
          </ul>

          <h3>Subject Line Formulas</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border p-3">
              <p className="font-bold">For Applications</p>
              <p className="text-sm text-muted-foreground">
                &quot;Application for [Role] - [Your Name], [College]&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">For Follow-Ups</p>
              <p className="text-sm text-muted-foreground">
                &quot;Following up: [Original Subject]&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">For Networking</p>
              <p className="text-sm text-muted-foreground">
                &quot;[Mutual Connection] suggested I reach out&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">For Cold Outreach</p>
              <p className="text-sm text-muted-foreground">
                &quot;Quick question about [specific topic at their
                company]&quot;
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">For Thank You Emails</p>
              <p className="text-sm text-muted-foreground">
                &quot;Thank you - [Role] Interview&quot;
              </p>
            </div>
          </div>

          <h3>Subject Lines to Avoid</h3>
          <ul>
            <li>❌ &quot;Hi&quot; (tells nothing)</li>
            <li>❌ &quot;Query&quot; (too vague)</li>
            <li>❌ &quot;URGENT!!!&quot; (looks spammy)</li>
            <li>❌ &quot;Please read this&quot; (desperate)</li>
            <li>❌ Blank subject (goes to spam)</li>
          </ul>
        </section>

        {/* Section 3: Structure */}
        <section
          id="structure"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            3. Email Structure
          </h2>

          <p>Every professional email should follow this structure:</p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 p-4">
              <h4 className="font-bold">1. Greeting (1 line)</h4>
              <p className="text-sm text-muted-foreground">
                &quot;Dear [Name],&quot; or &quot;Hi [Name],&quot; depending on
                formality
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 p-4">
              <h4 className="font-bold">2. Opening (1-2 sentences)</h4>
              <p className="text-sm text-muted-foreground">
                Who you are and why you&apos;re writing. Get to the point
                immediately.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-yellow-500 p-4">
              <h4 className="font-bold">3. Body (2-3 short paragraphs)</h4>
              <p className="text-sm text-muted-foreground">
                Main content with specific details. Use bullet points for
                readability.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 p-4">
              <h4 className="font-bold">4. Call-to-Action (1 sentence)</h4>
              <p className="text-sm text-muted-foreground">
                What do you want them to do? Be specific and make it easy to
                respond.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-purple-500 p-4">
              <h4 className="font-bold">5. Closing (1-2 sentences)</h4>
              <p className="text-sm text-muted-foreground">
                Express gratitude, offer to provide more info, sign off
                professionally.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> If your email is longer than 5
              sentences, consider if it should be a call instead. Long emails
              don&apos;t get read.
            </div>
          </div>
        </section>

        {/* Section 4: Tone */}
        <section
          id="tone"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            4. Tone and Formality
          </h2>

          <p>Match your tone to the recipient and the situation:</p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Situation</th>
                  <th className="p-3 text-left">Greeting</th>
                  <th className="p-3 text-left">Sign-off</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Very Formal</td>
                  <td className="p-3">&quot;Dear Mr./Ms. [Last Name],&quot;</td>
                  <td className="p-3">&quot;Respectfully,&quot;</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Formal (most business)</td>
                  <td className="p-3">&quot;Dear [First Name],&quot;</td>
                  <td className="p-3">&quot;Best regards,&quot;</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Semi-Formal</td>
                  <td className="p-3">&quot;Hi [First Name],&quot;</td>
                  <td className="p-3">
                    &quot;Best,&quot; or &quot;Thanks,&quot;
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Casual (colleagues)</td>
                  <td className="p-3">&quot;Hey [First Name],&quot;</td>
                  <td className="p-3">
                    &quot;Cheers,&quot; or &quot;Thanks!&quot;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Tone Tips</h3>
          <ul>
            <li>When in doubt, be more formal rather than less</li>
            <li>Match the recipient&apos;s tone after they reply</li>
            <li>Avoid ALL CAPS (reads as shouting)</li>
            <li>Use exclamation marks sparingly (one per email max)</li>
            <li>Be warm but professional—cold emails feel robotic</li>
          </ul>
        </section>

        {/* Section 5: Templates */}
        <section
          id="templates"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Send className="h-6 w-6 text-primary" />
            5. Templates for Every Situation
          </h2>

          <h3>Internship Application</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Application for [Role] Intern - [Your
              Name], [College]
            </p>
            <p className="mt-3">Dear [Hiring Manager Name/Team],</p>
            <p className="mt-2">
              I am a [Year] [Major] student at [College], and I am excited to
              apply for the [Role] internship at [Company].
            </p>
            <p className="mt-2">
              [1-2 sentences about why you&apos;re a fit—mention specific skills
              or projects relevant to their work]
            </p>
            <p className="mt-2">
              I&apos;ve attached my resume and would love the opportunity to
              discuss how I can contribute to your team.
            </p>
            <p className="mt-2">Thank you for considering my application.</p>
            <p className="mt-2">
              Best regards,
              <br />
              [Your Name]
              <br />
              [Phone] | [LinkedIn]
            </p>
          </div>

          <h3>Thank You After Interview</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Thank You - [Role] Interview
            </p>
            <p className="mt-3">Dear [Interviewer Name],</p>
            <p className="mt-2">
              Thank you for taking the time to speak with me today about the
              [Role] position. I genuinely enjoyed learning about [specific
              topic you discussed—shows you were listening].
            </p>
            <p className="mt-2">
              Our conversation reinforced my enthusiasm for the role and
              [Company]. I&apos;m particularly excited about [specific aspect of
              the role or company].
            </p>
            <p className="mt-2">
              Please don&apos;t hesitate to reach out if you need any additional
              information from me.
            </p>
            <p className="mt-2">
              Best regards,
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Professor Inquiry</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Research Opportunity Inquiry - [Your
              Name], [Course/Department]
            </p>
            <p className="mt-3">Dear Professor [Last Name],</p>
            <p className="mt-2">
              I am [Your Name], a [Year] [Major] student in your [Course Name]
              class. I have been fascinated by [specific topic from their
              research/lectures] and would love to explore opportunities to get
              involved in your research.
            </p>
            <p className="mt-2">
              I have experience in [relevant skills/coursework], and I believe I
              could contribute to [specific project or area].
            </p>
            <p className="mt-2">
              Would you be available for a brief meeting to discuss potential
              opportunities? I am flexible with timing.
            </p>
            <p className="mt-2">
              Thank you for your time.
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Networking Request</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> [Mutual Connection] suggested I reach
              out
            </p>
            <p className="mt-3">Hi [First Name],</p>
            <p className="mt-2">
              I hope this email finds you well. [Mutual Connection] mentioned
              that you might be a great person to connect with regarding
              [specific topic or career path].
            </p>
            <p className="mt-2">
              I&apos;m currently a [Role/Student] at [Company/University],
              exploring opportunities in [field]. I&apos;d love to learn about
              your experience at [Their Company].
            </p>
            <p className="mt-2">
              Would you have 15-20 minutes for a quick call in the coming weeks?
              I&apos;m happy to work around your schedule.
            </p>
            <p className="mt-2">
              Thanks so much for considering!
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Accepting a Job Offer</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Re: [Role] Offer - Acceptance
            </p>
            <p className="mt-3">Dear [Hiring Manager],</p>
            <p className="mt-2">
              Thank you very much for offering me the [Role] position at
              [Company]. I am thrilled to accept and excited to join the team.
            </p>
            <p className="mt-2">
              As discussed, I understand my start date will be [Date] with a
              starting salary of [Amount]. Please let me know if you need any
              documentation or if there are any next steps before my start date.
            </p>
            <p className="mt-2">
              I look forward to contributing to [Company] and working with the
              team.
            </p>
            <p className="mt-2">
              Best regards,
              <br />
              [Your Name]
            </p>
          </div>
        </section>

        {/* Section 6: Follow-Up */}
        <section
          id="followup"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Reply className="h-6 w-6 text-primary" />
            6. Follow-Up Strategy
          </h2>

          <p>
            Most emails don&apos;t get responses the first time. Strategic
            follow-ups are essential.
          </p>

          <h3>When to Follow Up</h3>
          <ul>
            <li>
              <strong>Applications:</strong> 5-7 business days after applying
            </li>
            <li>
              <strong>After interview:</strong> Send thank you within 24 hours
            </li>
            <li>
              <strong>Networking requests:</strong> 5-7 business days
            </li>
            <li>
              <strong>Cold emails:</strong> 3-5 business days
            </li>
          </ul>

          <h3>Follow-Up Template</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p>
              <strong>Subject:</strong> Following up: [Original Subject]
            </p>
            <p className="mt-3">Hi [Name],</p>
            <p className="mt-2">
              I wanted to follow up on my email from [date] regarding [topic]. I
              understand you&apos;re likely very busy.
            </p>
            <p className="mt-2">
              [Brief 1-line reminder of your original request]
            </p>
            <p className="mt-2">
              Please let me know if you need any additional information from me.
            </p>
            <p className="mt-2">
              Thanks,
              <br />
              [Your Name]
            </p>
          </div>

          <h3>Follow-Up Rules</h3>
          <ul>
            <li>Maximum 2-3 follow-ups total</li>
            <li>Space them 5-7 days apart</li>
            <li>Keep each follow-up shorter than the previous</li>
            <li>Add value if possible (new info, relevant article)</li>
            <li>Know when to stop—no response after 3 attempts = move on</li>
          </ul>
        </section>

        {/* Section 7: Cold Email */}
        <section
          id="cold"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Forward className="h-6 w-6 text-primary" />
            7. Cold Email Best Practices
          </h2>

          <p>Cold emails to people you don&apos;t know require special care:</p>

          <h3>Cold Email Formula (AIDA)</h3>
          <ul>
            <li>
              <strong>Attention:</strong> Hook with something specific about
              them
            </li>
            <li>
              <strong>Interest:</strong> Show you&apos;ve done research
            </li>
            <li>
              <strong>Desire:</strong> Explain why you&apos;re reaching out
              (what&apos;s in it for them)
            </li>
            <li>
              <strong>Action:</strong> Clear, easy ask
            </li>
          </ul>

          <h3>Tips for Higher Response Rates</h3>
          <ul>
            <li>
              Personalize the first line (mention their work, article, tweet)
            </li>
            <li>Keep it under 150 words</li>
            <li>Make the ask small (15-min call, vs hour-long meeting)</li>
            <li>Send Tuesday-Thursday mornings for best open rates</li>
            <li>Use their first name, not &quot;Dear Sir/Madam&quot;</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> The best cold emails feel like warm
              emails. Find a genuine connection—mutual contact, shared interest,
              their public work—and lead with that.
            </div>
          </div>
        </section>

        {/* Section 8: Workplace */}
        <section
          id="workplace"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-primary" />
            8. Workplace Email Etiquette
          </h2>

          <p>
            Once you&apos;re in a professional environment, additional rules
            apply:
          </p>

          <h3>Reply All Etiquette</h3>
          <ul>
            <li>Only use when everyone genuinely needs the information</li>
            <li>
              Never reply all for &quot;Thanks&quot; or &quot;Got it&quot;
            </li>
            <li>Be mindful of long CC lists</li>
          </ul>

          <h3>CC and BCC</h3>
          <ul>
            <li>
              <strong>CC:</strong> People who need to be informed but not take
              action
            </li>
            <li>
              <strong>BCC:</strong> Hiding recipients from each other (use
              sparingly)
            </li>
            <li>
              Don&apos;t CC someone&apos;s boss to &quot;escalate&quot; without
              warning them first
            </li>
          </ul>

          <h3>Response Time</h3>
          <ul>
            <li>
              Acknowledge receipt within 24 hours, even if full response will
              take longer
            </li>
            <li>
              &quot;Thanks for sending—I&apos;ll review and get back to you by
              [date]&quot;
            </li>
            <li>Set expectations if you need more time</li>
          </ul>

          <h3>Internal vs External</h3>
          <ul>
            <li>
              <strong>Internal:</strong> Can be more casual, depending on
              company culture
            </li>
            <li>
              <strong>External:</strong> Always err on the side of formality
            </li>
          </ul>
        </section>

        {/* Section 9: Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            9. Common Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Vague subject lines
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                &quot;Hi,&quot; &quot;Query,&quot; &quot;Help&quot; tell the
                recipient nothing about content.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Too long
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                People don&apos;t read long emails. Be concise.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Typos and grammar errors
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Shows carelessness. Always proofread.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Wrong recipient name
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Nothing says &quot;copy-paste&quot; like addressing someone by
                the wrong name.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ No call-to-action
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                If you don&apos;t ask for something specific, you won&apos;t get
                it.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Sending angry emails
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Never send an email when emotional. Draft it, wait a day, then
                revise.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
              <p className="font-bold text-red-700 dark:text-red-400">
                ❌ Forgetting attachments
              </p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                Mention attachments in the first line so you don&apos;t forget.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            10. Useful Tools
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-600">Grammarly</p>
              <p className="mt-1 text-muted-foreground">
                Catch typos, grammar errors, and tone issues
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Hemingway Editor</p>
              <p className="mt-1 text-muted-foreground">
                Simplify complex sentences for clarity
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-600">Boomerang</p>
              <p className="mt-1 text-muted-foreground">
                Schedule emails for optimal send times
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-600">Hunter.io</p>
              <p className="mt-1 text-muted-foreground">
                Find professional email addresses
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-600">Mailtrack</p>
              <p className="mt-1 text-muted-foreground">
                Track if and when emails are opened
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-gray-600">Calendly</p>
              <p className="mt-1 text-muted-foreground">
                Include in emails to simplify scheduling
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Mobile */}
        <section
          id="mobile"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smartphone className="h-6 w-6 text-primary" />
            11. Mobile Email Tips
          </h2>

          <p>Many professionals check email on phones. Optimize accordingly:</p>

          <ul>
            <li>Keep subject lines under 50 characters</li>
            <li>Put key information in the first 2-3 lines</li>
            <li>Use short paragraphs (2-3 sentences max)</li>
            <li>Avoid attachments when possible (link to cloud storage)</li>
            <li>Make phone numbers and links clickable</li>
            <li>Test how your signature looks on mobile</li>
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
              <p className="font-bold">When should I follow up on an email?</p>
              <p className="mt-2 text-muted-foreground">
                Wait 3-5 business days for normal inquiries, 5-7 days for job
                applications. Don&apos;t follow up more than 2-3 times total.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Should I use emojis in professional emails?
              </p>
              <p className="mt-2 text-muted-foreground">
                Avoid in first contact with professionals. Once you have
                rapport, occasional emojis may be okay depending on workplace
                culture.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">What if I sent an email with a typo?</p>
              <p className="mt-2 text-muted-foreground">
                If it&apos;s minor, let it go. If it&apos;s significant (wrong
                name, wrong company), send a brief apology and correction.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Should I use &quot;Dear Sir/Madam&quot;?
              </p>
              <p className="mt-2 text-muted-foreground">
                Avoid if possible. Take 2 minutes to find the person&apos;s
                name. If truly unknown, use &quot;Dear Hiring Team&quot; or
                &quot;Hello.&quot;
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                How long should a professional email be?
              </p>
              <p className="mt-2 text-muted-foreground">
                5-7 sentences is ideal. If longer is necessary, use bullet
                points and clear formatting so it&apos;s scannable.
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-bold">
                Is it okay to send emails late at night?
              </p>
              <p className="mt-2 text-muted-foreground">
                Generally avoid—it may set unrealistic expectations. Use
                scheduling tools to send during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Email Like a Professional</h2>
          <p>
            Every email you send is a reflection of your professionalism,
            attention to detail, and communication skills. In a world of instant
            messaging, a well-crafted email stands out.
          </p>
          <p>
            Take the extra minute to structure your thoughts, proofread your
            message, and consider how it will be received. It&apos;s a small
            investment that pays dividends throughout your career.
          </p>
          <p className="text-lg font-semibold text-primary">
            Great communication opens doors. Master it. 📧
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/cold-email-templates-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cold Email Templates
            </Link>
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
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
                Based on feedback from recruiters, hiring managers, and
                communication experts.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
