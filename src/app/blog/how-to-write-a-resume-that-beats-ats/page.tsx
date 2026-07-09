import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  FileText,
  Search,
  LayoutTemplate,
  Lightbulb,
  AlertTriangle,
  Target,
  Download,
  Edit3,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  Award,
  BookOpen,
  Zap,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Write a Resume That Beats ATS | Sproutern Guide',
  description:
    'Master the art of writing an ATS-friendly resume. Learn expert tips on keywords, formatting, structure, and optimization strategies to get your resume past applicant tracking systems and into human hands. Complete guide with examples and templates.',
  keywords: [
    'ATS resume',
    'resume writing',
    'applicant tracking system',
    'resume tips',
    'job application guide',
    'student resume',
    'ATS-friendly resume',
    'resume keywords',
    'resume formatting',
    'applicant tracking software',
    'resume optimization',
    'beat ATS',
    'resume scanner',
    'ATS resume template',
    'resume best practices',
    'job search tips',
    'career advice',
    'resume mistakes',
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/blog"
              className="transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <span>/</span>
            <span>Career Advice</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            How to Write a Resume That Beats ATS
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Stop sending your resume into the void. Learn exactly how Applicant
            Tracking Systems work and how to optimize your application to ensure
            it gets seen by a human recruiter.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                S
              </div>
              <div>
                <p className="text-sm font-semibold">Sproutern Team</p>
                <p className="text-xs text-muted-foreground">
                  Here is the latest guide â€¢ 16 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p className="lead text-xl">
            You've spent hours crafting the perfect resume. You've listed your
            achievements, double-checked for typos, and tailored your cover
            letter. You hit "Apply" and... silence. Weeks go by without a word.
          </p>
          <p>
            The culprit? Likely the{' '}
            <strong>Applicant Tracking System (ATS)</strong>.
          </p>
          <p>
            Over 98% of Fortune 500 companies and a growing number of startups
            use ATS software to filter candidates. If your resume isn't
            optimized for these systems, it might be automatically rejected
            before a human ever lays eyes on it. But don't worryâ€”beating the
            ATS isn't rocket science. It's about understanding the rules of the
            game.
          </p>

          <div className="my-8 rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 mt-0 flex items-center gap-2 text-xl font-bold">
              <Search className="h-6 w-6 text-primary" />
              What is an ATS?
            </h3>
            <p className="mb-0 text-muted-foreground">
              An Applicant Tracking System is a software application that
              manages the recruitment process. It scans resumes for specific
              keywords, formats, and criteria set by the employer to rank and
              filter candidates. Think of it as a gatekeeper that decides which
              resumes are "worthy" of human review.
            </p>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            1. The Golden Rule: Keep It Simple
          </h2>
          <p>
            The biggest mistake students make is over-designing their resumes.
            While a creative, colorful resume might look great to you, it often
            confuses ATS parsers.
          </p>
          <div className="my-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-red-100 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/20">
              <h4 className="mt-0 flex items-center gap-2 font-bold text-red-600 dark:text-red-400">
                <XCircle className="h-5 w-5" /> Avoid These
              </h4>
              <ul className="mt-4 list-none space-y-2 pl-0 text-sm">
                <li>âŒ Text boxes and tables</li>
                <li>âŒ Graphics, icons, and logos</li>
                <li>âŒ Headers and footers (for contact info)</li>
                <li>âŒ Multi-column layouts (unless simple)</li>
                <li>âŒ Unusual fonts</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-100 bg-green-50 p-6 dark:border-green-900/50 dark:bg-green-950/20">
              <h4 className="mt-0 flex items-center gap-2 font-bold text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-5 w-5" /> Do These Instead
              </h4>
              <ul className="mt-4 list-none space-y-2 pl-0 text-sm">
                <li>âœ… Standard margins (1 inch)</li>
                <li>âœ… clear, standard headings</li>
                <li>âœ… Bullet points (standard circles)</li>
                <li>âœ… Common fonts (Arial, Calibri, Roboto)</li>
                <li>âœ… Reverse-chronological format</li>
              </ul>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            2. Keyword Optimization is Key
          </h2>
          <p>
            ATS algorithms work by matching keywords in your resume against the
            job description. If the job description asks for "Python," "Data
            Analysis," and "Project Management," and your resume doesn't contain
            these exact terms, you will likely be ranked lower.
          </p>

          <h3 className="mb-4 mt-8 text-2xl font-semibold">
            How to find the right keywords:
          </h3>
          <ol>
            <li>
              <strong>Analyze the Job Description:</strong> Read through the
              posting and highlight hard skills (e.g., "Java", "SEO", "Financial
              Modeling") and soft skills (e.g., "Leadership", "Communication").
            </li>
            <li>
              <strong>Use Exact Matches:</strong> If the job asks for "MS
              Excel," don't just write "Spreadsheets." Use the exact term.
            </li>
            <li>
              <strong>Context Matters:</strong> Don't just list keywords in a
              "Skills" section. Weave them into your work experience bullets.
              For example:{' '}
              <em>
                "Leveraged <strong>Python</strong> to automate data analysis
                tasks, reducing reporting time by 40%."
              </em>
            </li>
          </ol>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            3. Use Standard Section Headings
          </h2>
          <p>
            Don't get cute with your section titles. The ATS needs to know where
            to look for specific information.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="rounded-tl-lg p-4">Instead of...</th>
                  <th className="rounded-tr-lg p-4">Use...</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">"About Me" / "Bio"</td>
                  <td className="p-4 font-semibold text-primary">
                    "Professional Summary"
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">"Professional Journey"</td>
                  <td className="p-4 font-semibold text-primary">
                    "Work Experience"
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">"Academic Background"</td>
                  <td className="p-4 font-semibold text-primary">
                    "Education"
                  </td>
                </tr>
                <tr>
                  <td className="p-4">"Abilities" / "Competencies"</td>
                  <td className="p-4 font-semibold text-primary">"Skills"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            4. File Format Matters
          </h2>
          <p>
            Unless the application specifically asks for a different format,{' '}
            <strong>always submit your resume as a PDF</strong>. However, not
            all PDFs are created equal.
          </p>
          <p>
            Avoid "Print to PDF" from image files. The text must be selectable.
            A quick test: open your PDF and try to highlight the text with your
            mouse. If you can highlight individual words, the ATS can read it.
            If you can only select the whole page as an image, the ATS cannot
            read it.
          </p>
          <p>
            <em>
              Note: Some older ATS systems still prefer Word documents (.docx).
              If the application explicitly says "Upload Word Doc," follow their
              instructions!
            </em>
          </p>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            5. Quantify Your Achievements
          </h2>
          <p>
            ATS systems (and human recruiters) love numbers. They provide
            concrete proof of your capabilities.
          </p>
          <ul>
            <li>
              <strong>Weak:</strong> "Managed social media accounts."
            </li>
            <li>
              <strong>Strong:</strong> "Managed 3 social media accounts, growing
              follower count by <strong>200%</strong> in 6 months."
            </li>
            <li>
              <strong>Weak:</strong> "Improved website performance."
            </li>
            <li>
              <strong>Strong:</strong> "Optimized code to reduce page load time
              by <strong>1.5 seconds</strong>, increasing conversion rate by{' '}
              <strong>15%</strong>."
            </li>
          </ul>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            6. Tailor Your Resume for Each Application
          </h2>
          <p>
            One size does NOT fit all when it comes to resumes. The biggest
            advantage you can give yourself is customizing your resume for each
            position you apply to.
          </p>
          <div className="my-6 rounded-xl border bg-card p-6">
            <h4 className="mb-4 flex items-center gap-2 font-bold">
              <Target className="h-5 w-5 text-primary" />
              Tailoring Strategy
            </h4>
            <ol className="space-y-3">
              <li>
                <strong>1. Create a master resume:</strong> Include ALL your
                experiences, skills, and achievements
              </li>
              <li>
                <strong>2. Analyze the job posting:</strong> Identify 5-10 key
                requirements and skills
              </li>
              <li>
                <strong>3. Customize your summary:</strong> Mirror the language
                from the job description
              </li>
              <li>
                <strong>4. Reorder achievements:</strong> Put the most relevant
                experiences first
              </li>
              <li>
                <strong>5. Match their terminology:</strong> Use exact keywords
                and phrases from the listing
              </li>
            </ol>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            7. Write a Compelling Professional Summary
          </h2>
          <p>
            Your professional summary (2-3 sentences at the top of your resume)
            is prime real estate. It should immediately tell the ATS and
            recruiters why you're a perfect fit.
          </p>
          <div className="my-6 space-y-4">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <p className="mb-1 flex items-center gap-2 font-bold text-red-600 dark:text-red-400">
                <XCircle className="h-4 w-4" /> Weak Example
              </p>
              <p className="text-sm italic">
                "Recent graduate looking for opportunities in marketing. Hard
                worker with good communication skills."
              </p>
            </div>
            <div className="rounded-lg border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-950/20">
              <p className="mb-1 flex items-center gap-2 font-bold text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-4 w-4" /> Strong Example
              </p>
              <p className="text-sm italic">
                "Results-driven marketing graduate with hands-on experience in
                digital marketing, SEO, and social media management. Increased
                Instagram engagement by 300% during university internship.
                Proficient in Google Analytics, Hootsuite, and Adobe Creative
                Suite. Seeking to leverage data-driven marketing skills at
                [Company Name]."
              </p>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            8. Optimize Your Skills Section
          </h2>
          <p>
            Your skills section is critical for ATS matching. Include both hard
            and soft skills, but prioritize technical skills that match the job
            description.
          </p>
          <h3 className="mb-4 mt-6 text-xl font-semibold">
            Skills Section Best Practices:
          </h3>
          <ul>
            <li>
              <strong>Separate by category:</strong> "Technical Skills,"
              "Languages," "Tools & Software"
            </li>
            <li>
              <strong>Use exact tool names:</strong> "Adobe Photoshop" not just
              "Photo editing software"
            </li>
            <li>
              <strong>Include proficiency levels:</strong> "Python (Advanced),"
              "Spanish (Conversational)"
            </li>
            <li>
              <strong>Don't lie:</strong> If you list it, be prepared to discuss
              it in the interview
            </li>
            <li>
              <strong>Include relevant soft skills:</strong> But back them up
              with examples in your experience
            </li>
          </ul>

          <div className="my-8 rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 mt-0 flex items-center gap-2 text-xl font-bold">
              <Zap className="h-6 w-6 text-primary" />
              Common ATS Myths Debunked
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">
                  âŒ Myth: White text tricks fool the ATS
                </p>
                <p className="text-sm text-muted-foreground">
                  Truth: Modern ATS can detect hidden text. This practice can
                  get you blacklisted.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  âŒ Myth: You need to use ALL keywords from the job posting
                </p>
                <p className="text-sm text-muted-foreground">
                  Truth: Focus on the 10-15 most important keywords. Keyword
                  stuffing looks unnatural and hurts readability.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  âŒ Myth: Longer resumes perform better in ATS
                </p>
                <p className="text-sm text-muted-foreground">
                  Truth: Keep it to 1-2 pages. ATS doesn't care about length,
                  but human recruiters do.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  âŒ Myth: All ATS systems work the same way
                </p>
                <p className="text-sm text-muted-foreground">
                  Truth: Each ATS has different algorithms. That's why following
                  universal best practices is crucial.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            9. Format Dates Correctly
          </h2>
          <p>
            ATS systems parse dates to understand your work history timeline.
            Use a consistent, standard format throughout your resume.
          </p>
          <div className="my-6">
            <p className="mb-3 font-semibold">Recommended date formats:</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>January 2023 - Present</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>01/2023 - 12/2024</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Jan 2023 - Dec 2024</span>
              </li>
            </ul>
            <p className="mb-3 mt-4 font-semibold">Avoid these formats:</p>
            <ul className="list-none space-y-2 pl-0">
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span>Winter 2023</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span>2023-01 (ISO format confuses some ATS)</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-600" />
                <span>1/23 - 12/24 (too ambiguous)</span>
              </li>
            </ul>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            10. Include Relevant Volunteer Work & Projects
          </h2>
          <p>
            Especially for students and recent graduates, volunteer experience
            and personal projects can demonstrate skills that paid positions
            might not show.
          </p>
          <p>
            Treat these sections like work experience. Use action verbs,
            quantify results, and include relevant keywords. A volunteer social
            media management role is still social media management experience.
          </p>

          <div className="my-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="mt-0 font-bold text-blue-900 dark:text-blue-100">
                  Pro Tip: The "Projects" Section
                </h3>
                <p className="mb-0 text-sm text-blue-800 dark:text-blue-200">
                  GitHub projects, hackathon participation, and personal
                  websites all count! For tech roles especially, a strong
                  projects section can compensate for lack of formal work
                  experience. Include: project name, technologies used, and
                  measurable outcomes (users, downloads, performance metrics).
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Section-by-Section Guide
          </h2>
          <p>
            Let's break down each resume section and how to optimize it for ATS:
          </p>

          <h3 className="mb-4 mt-8 text-2xl font-semibold">
            Contact Information
          </h3>
          <ul>
            <li>
              <strong>Include:</strong> Full name, phone number, email, LinkedIn
              URL, location (city, state)
            </li>
            <li>
              <strong>Optional:</strong> GitHub, portfolio website, relevant
              social media
            </li>
            <li>
              <strong>Avoid:</strong> Full street address (privacy concerns),
              unprofessional email addresses
            </li>
            <li>
              <strong>Tip:</strong> Don't put contact info in headers/footers
              (some ATS can't read them)
            </li>
          </ul>

          <h3 className="mb-4 mt-8 text-2xl font-semibold">Work Experience</h3>
          <p>
            This is the most important section. Follow this formula for each
            bullet point:
          </p>
          <div className="my-4 rounded-lg bg-muted p-4">
            <p className="mb-2 font-mono text-sm">
              <strong>Action Verb</strong> + <strong>What You Did</strong> +{' '}
              <strong>Impact/Result</strong>
            </p>
            <p className="text-xs text-muted-foreground">
              Example: "Developed a Python automation script that reduced manual
              data entry time by 15 hours per week, improving team productivity
              by 40%."
            </p>
          </div>
          <ul>
            <li>Start each bullet with a strong action verb</li>
            <li>
              Use past tense for previous roles, present tense for current
            </li>
            <li>Include 3-5 bullets per position</li>
            <li>Quantify achievements whenever possible</li>
            <li>Match keywords from the job description</li>
          </ul>

          <h3 className="mb-4 mt-8 text-2xl font-semibold">Education</h3>
          <ul>
            <li>
              <strong>Format:</strong> Degree, Major, University, Graduation
              Date (or Expected)
            </li>
            <li>
              <strong>Include GPA?</strong> Yes, if 3.5 or higher
            </li>
            <li>
              <strong>Relevant coursework:</strong> List 4-6 courses that match
              the job requirements
            </li>
            <li>
              <strong>Honors:</strong> Dean's List, scholarships, academic
              awards
            </li>
            <li>
              <strong>Tip:</strong> Recent graduates can put education before
              experience
            </li>
          </ul>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Advanced ATS Optimization Strategies
          </h2>

          <h3 className="mb-4 mt-6 text-xl font-semibold">
            1. Use Both Acronyms and Full Terms
          </h3>
          <p>
            ATS systems might search for either the acronym or the full term.
            Cover your bases by including both on first mention.
          </p>
          <div className="my-4 rounded-lg bg-muted p-4">
            <p className="mb-2 text-sm">
              <strong>Example:</strong>
            </p>
            <p className="text-sm">
              "Bachelor of Science (B.S.) in Computer Science"
            </p>
            <p className="text-sm">"Search Engine Optimization (SEO)"</p>
            <p className="text-sm">"Certified Public Accountant (CPA)"</p>
          </div>

          <h3 className="mb-4 mt-6 text-xl font-semibold">
            2. Include Soft Skills with Context
          </h3>
          <p>
            While technical skills are more easily matched by ATS, soft skills
            matter tooâ€”but they need context.
          </p>
          <div className="my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <p className="mb-2 font-bold text-red-600 dark:text-red-400">
                âŒ Don't just list them:
              </p>
              <p className="text-sm">"Leadership, Communication, Teamwork"</p>
            </div>
            <div className="rounded-lg border border-green-100 bg-green-50 p-4 dark:border-green-900/50 dark:bg-green-950/20">
              <p className="mb-2 font-bold text-green-600 dark:text-green-400">
                âœ… Show them in action:
              </p>
              <p className="text-sm">
                "Led a cross-functional team of 5 to deliver project 2 weeks
                ahead of schedule"
              </p>
            </div>
          </div>

          <h3 className="mb-4 mt-6 text-xl font-semibold">
            3. Strategic Keyword Placement
          </h3>
          <p>Where you place keywords matters. ATS gives more weight to:</p>
          <ul>
            <li>Professional summary/objective</li>
            <li>Job titles</li>
            <li>First few bullets of each experience</li>
            <li>Skills section</li>
          </ul>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Industry-Specific ATS Tips
          </h2>

          <h3 className="mb-4 mt-6 text-xl font-semibold">
            Tech & Engineering
          </h3>
          <ul>
            <li>List specific programming languages, frameworks, and tools</li>
            <li>
              Include version numbers when relevant (React 18, Python 3.11)
            </li>
            <li>Mention methodologies (Agile, Scrum, DevOps)</li>
            <li>
              Quantify technical achievements (performance improvements, code
              coverage)
            </li>
          </ul>

          <h3 className="mb-4 mt-6 text-xl font-semibold">
            Marketing & Communications
          </h3>
          <ul>
            <li>
              Include platform names (Google Ads, Meta Business Suite, HubSpot)
            </li>
            <li>Quantify reach and engagement metrics</li>
            <li>
              List content types you've created (blogs, whitepapers, video)
            </li>
            <li>
              Mention marketing certifications (Google Analytics, HubSpot
              Inbound)
            </li>
          </ul>

          <h3 className="mb-4 mt-6 text-xl font-semibold">
            Finance & Accounting
          </h3>
          <ul>
            <li>Include software proficiency (QuickBooks, SAP, Oracle)</li>
            <li>List certifications prominently (CPA, CFA, Series 7)</li>
            <li>
              Quantify financial impact (revenue increased, costs reduced)
            </li>
            <li>
              Use industry-standard terminology (GAAP, financial modeling,
              reconciliation)
            </li>
          </ul>

          <h3 className="mb-4 mt-6 text-xl font-semibold">Healthcare</h3>
          <ul>
            <li>Include licenses and certifications with numbers</li>
            <li>List specific medical software/EMR systems</li>
            <li>Mention compliance standards (HIPAA, OSHA)</li>
            <li>Include patient volume or case load where appropriate</li>
          </ul>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Testing Your Resume Against ATS
          </h2>
          <p>
            Before submitting your resume, test it to see how well it performs.
            Here are free tools to check ATS compatibility:
          </p>
          <div className="my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Jobscan</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Upload your resume and the job description. Jobscan provides a
                match rate percentage and specific recommendations.
              </p>
              <p className="text-xs">
                <strong>Best for:</strong> Detailed keyword analysis
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Resume Worded</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                AI-powered feedback on content and ATS compatibility. Free basic
                scan available.
              </p>
              <p className="text-xs">
                <strong>Best for:</strong> Content improvement suggestions
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">ATS Resume Scanner</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Free tool that shows you exactly how ATS systems parse your
                resume.
              </p>
              <p className="text-xs">
                <strong>Best for:</strong> Seeing formatting issues
              </p>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Common ATS Mistakes to Avoid
          </h2>
          <div className="my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Using Images or Charts
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Skills bars, charts, and infographics look cool but ATS can't
                  read them. Stick to text.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Inconsistent Formatting
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Mixing date formats, bullet styles, or font sizes confuses
                  parsing algorithms.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Ignoring Job Description Language
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  If they say "customer service" don't say "client relations."
                  Match their exact terminology.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Spelling and Typos
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  ATS matches exact keywords. "Exel" won't match "Excel." Always
                  proofread!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Submitting as Image PDF
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always use text-based PDFs. Test by trying to highlight text
                  in your PDF.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            ATS-Friendly Resume Templates
          </h2>
          <p>
            Choose a clean, simple template designed with ATS in mind. Here's
            what to look for:
          </p>
          <div className="my-6 rounded-lg border bg-card p-6">
            <h4 className="mb-4 font-bold">Template Checklist:</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Single column layout (or simple two-column)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Standard section headings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>No text boxes or special formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Clean fonts (Arial, Calibri, Helvetica, Garamond)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Adequate white space for readability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Reverse chronological order</span>
              </li>
            </ul>
          </div>

          <p className="my-4">
            <strong>Free ATS-friendly template sources:</strong>
          </p>
          <ul>
            <li>Google Docs resume templates</li>
            <li>Microsoft Word resume templates</li>
            <li>Canva (filter for "ATS-friendly")</li>
            <li>Harvard Business School resume templates</li>
            <li>Zety Resume Builder (free templates)</li>
          </ul>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How long should my resume be?
              </h3>
              <p className="text-muted-foreground">
                One page for students and recent graduates (0-3 years
                experience). Two pages for experienced professionals is
                acceptable. Never exceed two pages unless you're in academia or
                have 15+ years of highly relevant experience.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I include a photo on my resume?
              </h3>
              <p className="text-muted-foreground">
                No, not for US companies. Photos can cause ATS parsing issues
                and may introduce unconscious bias. Some European and Asian
                countries expect photosâ€”research the local customs.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I don't have much work experience?
              </h3>
              <p className="text-muted-foreground">
                Focus on relevant coursework, academic projects, volunteer work,
                internships, and extracurricular activities. Use the same
                achievement-focused format. A leadership role in a student
                organization is still a leadership role.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I use color on my resume if I save it as PDF?
              </h3>
              <p className="text-muted-foreground">
                Use color sparingly. A subtle accent color for headings is fine,
                but keep the main text black. Avoid background colors entirely
                as they reduce readability and can cause parsing issues.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I include references on my resume?
              </h3>
              <p className="text-muted-foreground">
                No. "References available upon request" is outdated and wastes
                valuable space. Employers will ask for references if neededâ€”
                prepare a separate reference list to provide when requested.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How often should I update my resume?
              </h3>
              <p className="text-muted-foreground">
                Update your resume quarterly, even when not job searching. Add
                new achievements, skills, and completed projects while they're
                fresh. This makes tailoring for specific applications much
                easier.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the difference between a resume and a CV?
              </h3>
              <p className="text-muted-foreground">
                In the US, a resume is 1-2 pages for job applications, while a
                CV (curriculum vitae) is longer and used for academic positions,
                including publications and presentations. Outside the US, "CV"
                often means what Americans call a "resume."
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I use the same resume for every job?
              </h3>
              <p className="text-muted-foreground">
                Absolutely not. Tailoring your resume for each position
                significantly increases your chances of passing ATS and
                impressing recruiters. Focus on the experiences and skills most
                relevant to each specific role.
              </p>
            </div>
          </div>

          <h2 className="mb-6 mt-12 text-3xl font-bold">
            Final Checklist: Is Your Resume ATS-Ready?
          </h2>
          <div className="my-6 rounded-lg border bg-card p-6">
            <p className="mb-4 font-semibold">Before you hit submit, verify:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Saved as text-based PDF (or .docx if requested)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  File name is professional (FirstName_LastName_Resume.pdf)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Standard section headings used throughout</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  Keywords from job description incorporated naturally
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>All achievements quantified where possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>No images, charts, or graphics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Consistent date formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Proofread for typos and spelling errors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Contact information is accurate and professional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  Text is selectable in the PDF (test by highlighting)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Professional summary tailored to the specific role</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>Action verbs used to start each bullet point</span>
              </li>
            </ul>
          </div>

          <div className="my-12 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
            <h3 className="mb-3 mt-0 text-xl font-bold">
              Remember: ATS is Just the First Step
            </h3>
            <p className="mb-0 text-muted-foreground">
              Getting past the ATS is crucial, but it's not the end goal. Once
              your resume lands in front of a human recruiter, it needs to be
              compelling, clear, and showcase your unique value. Balance ATS
              optimization with readability and impact. A resume that passes ATS
              but bores human readers won't get you the interview.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              Ready to test your resume?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Don't leave your application to chance. Use our free tools to
              optimize your resume today.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
              >
                <Link href="/tools/resume-optimizer">
                  Check Resume Score <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/internships">Browse Internships</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
