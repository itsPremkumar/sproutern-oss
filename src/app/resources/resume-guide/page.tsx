import { generateMetadata } from '@/lib/seo/seo-utils';
import Link from 'next/link';
import {
  CheckCircle,
  XCircle,
  FileText,
  Target,
  Lightbulb,
  AlertTriangle,
  BookOpen,
  Download,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = generateMetadata({
  title: 'Complete Resume Writing Guide',
  description:
    'Master resume writing with our comprehensive guide. Learn ATS optimization, industry-specific tips, action verbs, common mistakes to avoid, and get your resume noticed by recruiters.',
  keywords: [
    'resume guide',
    'resume writing',
    'job application',
    'career tips',
    'ATS resume',
    'resume format',
    'resume template',
  ],
  canonical: '/resources/resume-guide',
});

export default function ResumeGuidePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <BookOpen className="h-4 w-4" />
          Complete Guide
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Complete Resume Writing Guide
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Master the art of creating a resume that gets you noticed by
          recruiters and lands interviews. Updated with the latest ATS
          requirements and industry trends.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">50K+ Users</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">ATS-Optimized</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Updated</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
          <Award className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-medium">HR Verified</span>
        </div>
      </div>

      {/* Why This Guide Exists - Human Written Section */}
      <section className="mb-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-blue-900 dark:from-blue-950/30 dark:to-indigo-950/30">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Heart className="h-6 w-6 text-red-500" />
          Why This Guide Exists
        </h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            <strong>
              Let me tell you about a mistake that cost me three internship
              opportunities.
            </strong>{' '}
            In my third year, I had a resume that I thought was perfect — it
            listed every skill I knew, mentioned my CGPA, and included a photo
            (because that's what I saw in templates online). I applied to over
            fifty positions. Response rate? Zero.
          </p>
          <p>
            It wasn't until a senior from my college, who was working at TCS,
            reviewed my resume that I understood the problem. "Your resume looks
            like everyone else's," she said. "There's nothing here that tells me
            what you actually accomplished, or why I should pick you over the
            200 other applicants with the same CGPA and the same list of
            skills."
          </p>
          <p>
            That feedback was a turning point. I spent the next two weeks
            completely rebuilding my resume using the principles you'll find in
            this guide. Instead of listing "Python" as a skill, I wrote about
            the automation script I built that reduced data processing time by
            70%. Instead of "good communication skills," I mentioned the
            workshop I organized for 50+ students.{' '}
            <strong>The difference was night and day</strong> — I started
            getting callbacks within the first week.
          </p>
          <p>
            This guide compiles everything I learned from that experience, plus
            insights from reviewing hundreds of student resumes through
            Sproutern. Every tip here has been tested by real students who went
            from getting rejected to landing interviews at companies like
            Infosys, Wipro, TCS, Amazon, and countless startups. If your resume
            isn't getting responses, chances are you're making one of the
            mistakes we cover below.
          </p>
          <p className="font-medium text-foreground">
            Remember: Your resume isn't a list of what you did — it's a
            marketing document that sells your potential value to an employer.
            Every word should earn its place.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="mb-12 rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
        <ol className="grid gap-2 text-sm md:grid-cols-2">
          <li>
            <a
              href="#structure"
              className="text-primary hover:underline"
            >
              1. Resume Structure & Sections
            </a>
          </li>
          <li>
            <a
              href="#writing-tips"
              className="text-primary hover:underline"
            >
              2. Content Writing Tips
            </a>
          </li>
          <li>
            <a
              href="#action-verbs"
              className="text-primary hover:underline"
            >
              3. Power Action Verbs
            </a>
          </li>
          <li>
            <a
              href="#ats-optimization"
              className="text-primary hover:underline"
            >
              4. ATS Optimization Guide
            </a>
          </li>
          <li>
            <a
              href="#industry-tips"
              className="text-primary hover:underline"
            >
              5. Industry-Specific Tips
            </a>
          </li>
          <li>
            <a
              href="#mistakes"
              className="text-primary hover:underline"
            >
              6. Common Mistakes to Avoid
            </a>
          </li>
          <li>
            <a
              href="#examples"
              className="text-primary hover:underline"
            >
              7. Before/After Examples
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-primary hover:underline"
            >
              8. FAQs
            </a>
          </li>
        </ol>
      </nav>

      <div className="space-y-12">
        {/* Section 1: Structure */}
        <section id="structure">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <FileText className="h-6 w-6 text-primary" />
            1. Resume Structure & Essential Sections
          </h2>
          <p className="mb-6 text-muted-foreground">
            A well-structured resume makes it easy for recruiters to find
            relevant information quickly. For students and freshers, keep your
            resume to 1 page. Experienced professionals can extend to 2 pages.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'Contact Information',
                desc: 'Full name (bold, larger font), phone number, professional email, LinkedIn URL, portfolio/GitHub (if relevant)',
                tip: 'Use professional email like firstname.lastname@gmail.com, never funny123@yahoo.com',
              },
              {
                title: 'Professional Summary / Objective',
                desc: '2-3 lines highlighting your key strengths, experience level, and career goals. Tailored for each job.',
                tip: 'Freshers: Focus on skills and what you bring. Experienced: Quantify achievements.',
              },
              {
                title: 'Education',
                desc: 'Degree name, institution, graduation year, CGPA (if above 7.5/10 or 3.0/4.0). Include honors, relevant coursework.',
                tip: "Place this section first if you're a fresher, after experience if you have 2+ years work history.",
              },
              {
                title: 'Skills',
                desc: 'Technical skills, programming languages, tools, frameworks, soft skills. Group by category for readability.',
                tip: 'Match skills to job description keywords. List proficiency levels if honest (Expert/Proficient/Familiar).',
              },
              {
                title: 'Experience / Projects',
                desc: 'Internships, jobs, academic projects, hackathons. Use bullet points with measurable achievements.',
                tip: 'Use STAR format: Situation, Task, Action, Result. Quantify wherever possible.',
              },
              {
                title: 'Certifications & Achievements',
                desc: 'Online courses (Coursera, Udemy), competitions, scholarships, publications, patents.',
                tip: 'Include only relevant and recent certifications. Add issue date and credential ID.',
              },
              {
                title: 'Extra-Curriculars (Optional)',
                desc: 'Leadership roles, clubs, volunteer work, sports. Shows personality and soft skills.',
                tip: 'Include only if relevant or impressive. Quality over quantity.',
              },
            ].map((section, i) => (
              <div
                key={i}
                className="border-l-4 border-primary py-2 pl-4"
              >
                <h3 className="mb-1 text-lg font-semibold">{section.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {section.desc}
                </p>
                <p className="flex items-start gap-2 rounded bg-primary/10 p-2 text-xs">
                  <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Pro Tip:</strong> {section.tip}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Writing Tips */}
        <section id="writing-tips">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            2. Content Writing Tips
          </h2>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
                <CheckCircle className="h-5 w-5" />
                Do This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    Use action verbs: "Developed," "Led," "Optimized,"
                    "Increased"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>
                    Quantify achievements: "Increased sales by 30%," "Managed
                    team of 5"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Tailor resume for each job application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Use consistent formatting throughout</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Include keywords from job description</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Save as PDF to preserve formatting</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-700 dark:text-red-300">
                <XCircle className="h-5 w-5" />
                Avoid This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>
                    Generic objectives: "Seeking a challenging position..."
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Listing duties instead of achievements</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>
                    Including personal info (age, marital status, photo)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Using multiple fonts or colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Typos and grammatical errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Lying or exaggerating skills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 font-bold">The Quantification Formula</h3>
            <p className="mb-4 text-sm">
              Transform vague statements into powerful achievements using this
              formula:
            </p>
            <div className="rounded-lg bg-background p-4 font-mono text-sm">
              <span className="text-red-500 line-through">
                Responsible for handling customer complaints
              </span>
              <br />
              <span className="text-green-600">
                → Resolved 50+ customer complaints daily, maintaining 98%
                satisfaction rate
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Formula:</strong> Action Verb + Task + Quantified Result +
              Timeframe (optional)
            </p>
          </div>
        </section>

        {/* Section 3: Action Verbs */}
        <section id="action-verbs">
          <h2 className="mb-6 text-2xl font-bold">
            3. Power Action Verbs by Category
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold text-blue-600">
                💡 Technical/Development
              </h3>
              <p className="text-sm text-muted-foreground">
                Developed, Engineered, Programmed, Designed, Implemented,
                Optimized, Automated, Debugged, Deployed, Integrated, Built,
                Architected, Configured, Maintained, Tested
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold text-green-600">
                📈 Leadership/Management
              </h3>
              <p className="text-sm text-muted-foreground">
                Led, Managed, Supervised, Coordinated, Directed, Mentored,
                Trained, Delegated, Motivated, Facilitated, Chaired, Guided,
                Spearheaded, Pioneered, Orchestrated
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold text-purple-600">
                📊 Analysis/Research
              </h3>
              <p className="text-sm text-muted-foreground">
                Analyzed, Researched, Evaluated, Assessed, Identified,
                Investigated, Examined, Diagnosed, Interpreted, Calculated,
                Surveyed, Measured, Forecasted, Discovered
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold text-orange-600">
                📝 Communication
              </h3>
              <p className="text-sm text-muted-foreground">
                Presented, Negotiated, Persuaded, Collaborated, Communicated,
                Authored, Drafted, Edited, Published, Translated, Advocated,
                Mediated, Publicized, Promoted
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold text-red-600">
                🎯 Achievement/Results
              </h3>
              <p className="text-sm text-muted-foreground">
                Achieved, Exceeded, Improved, Increased, Reduced, Saved,
                Generated, Maximized, Delivered, Completed, Accelerated,
                Transformed, Revamped, Streamlined, Enhanced
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-3 font-semibold text-teal-600">
                🔧 Problem Solving
              </h3>
              <p className="text-sm text-muted-foreground">
                Resolved, Solved, Troubleshot, Diagnosed, Fixed, Addressed,
                Corrected, Rectified, Remedied, Overhauled, Restructured,
                Redesigned, Revitalized, Renovated
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: ATS Optimization */}
        <section id="ats-optimization">
          <h2 className="mb-6 text-2xl font-bold">
            4. ATS (Applicant Tracking System) Optimization
          </h2>

          <div className="mb-6 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              Why ATS Matters
            </h3>
            <p className="text-sm">
              Over 90% of Fortune 500 companies use ATS to filter resumes before
              human review. If your resume isn't ATS-friendly, it may never
              reach a recruiter. Up to 75% of resumes are rejected by ATS before
              being seen by a human.
            </p>
          </div>

          <h3 className="mb-4 font-semibold">ATS-Friendly Resume Checklist</h3>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            {[
              'Use standard section headings (Experience, Education, Skills)',
              'Avoid tables, columns, text boxes, and graphics',
              'Use common fonts (Arial, Calibri, Times New Roman)',
              'Include keywords from the job description',
              'Use standard bullet points (•) not custom symbols',
              'Save as .docx or .pdf (check job requirements)',
              "Use full words and abbreviations (e.g., 'JavaScript (JS)')",
              'Avoid headers and footers for critical info',
              'Use standard date formats (MM/YYYY or Month YYYY)',
              'Keep file size under 2MB',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border p-3"
              >
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-muted p-6">
            <h3 className="mb-3 font-bold">Keyword Optimization Strategy</h3>
            <ol className="list-inside list-decimal space-y-2 text-sm">
              <li>
                Copy the job description into a word cloud tool or text analyzer
              </li>
              <li>Identify the most frequently used keywords and phrases</li>
              <li>Naturally incorporate these keywords into your resume</li>
              <li>
                Use both full terms and abbreviations (e.g., "Machine Learning
                (ML)")
              </li>
              <li>Include keywords in multiple sections for better matching</li>
            </ol>
          </div>

          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="mb-2 text-lg font-bold">
              Need help with ATS keywords and technical profile links?
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Go deeper with our dedicated ATS keyword guide and GitHub profile
              guide so your resume matches job descriptions and your project
              links feel stronger too.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/resources/ats-resume-keywords">
                  Read ATS Keywords Guide
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link href="/resources/github-profile">
                  Read GitHub Profile Guide
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 5: Industry Tips */}
        <section id="industry-tips">
          <h2 className="mb-6 text-2xl font-bold">
            5. Industry-Specific Resume Tips
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">
                💻 Software Development / IT
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Include GitHub profile and portfolio website</li>
                <li>List programming languages with proficiency levels</li>
                <li>Highlight specific technologies, frameworks, and tools</li>
                <li>Showcase projects with links to live demos or repos</li>
                <li>Mention Agile/Scrum experience if applicable</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">
                📊 Data Science / Analytics
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Include Kaggle profile and competition rankings</li>
                <li>List ML frameworks (TensorFlow, PyTorch, Scikit-learn)</li>
                <li>Highlight statistical methods and visualization skills</li>
                <li>Quantify impact of models (accuracy, revenue impact)</li>
                <li>Mention cloud platforms (AWS, GCP, Azure)</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">📈 Marketing / Business</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Focus on metrics: ROI, conversion rates, engagement</li>
                <li>Include Google Analytics, HubSpot certifications</li>
                <li>Highlight campaign results with specific numbers</li>
                <li>Showcase budget management experience</li>
                <li>Mention CRM and marketing automation tools</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">🎨 Design / Creative</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Link to portfolio (Behance, Dribbble, personal site)</li>
                <li>List design tools (Figma, Adobe Creative Suite)</li>
                <li>Include UX research and user testing experience</li>
                <li>
                  Highlight collaboration with developers and stakeholders
                </li>
                <li>Showcase before/after design impact metrics</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="mb-2 font-semibold">💰 Finance / Consulting</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Include CFA, FRM, or relevant certifications</li>
                <li>Highlight financial modeling and Excel expertise</li>
                <li>Quantify deal sizes, portfolio values managed</li>
                <li>Mention specific industries or sectors covered</li>
                <li>Include relevant coursework and case competitions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Common Mistakes */}
        <section id="mistakes">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            6. Common Resume Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {[
              {
                mistake: 'Using an unprofessional email address',
                example: 'coolboy123@yahoo.com or princess_angel@gmail.com',
                fix: 'Use firstname.lastname@gmail.com or similar professional format',
              },
              {
                mistake: 'Including a photo (in India/US)',
                example: 'Adding passport photo in corner of resume',
                fix: 'Remove photo entirely. Save space for content that matters.',
              },
              {
                mistake: 'Listing responsibilities instead of achievements',
                example: 'Responsible for managing social media accounts',
                fix: 'Managed social media accounts, growing followers by 150% in 6 months',
              },
              {
                mistake: 'Using generic objective statement',
                example: 'Seeking a challenging position to utilize my skills',
                fix: 'Aspiring data scientist with expertise in ML, seeking to apply NLP skills at [Company Name]',
              },
              {
                mistake: 'Including irrelevant personal information',
                example:
                  "Father's name, date of birth, marital status, religion",
                fix: "Remove all personal details except contact info. They're not relevant and can lead to bias.",
              },
              {
                mistake: 'Poor formatting and inconsistent styling',
                example: 'Mixed fonts, random bold text, varying bullet styles',
                fix: 'Use one font family, consistent heading sizes, and uniform bullet points throughout',
              },
              {
                mistake: 'Exceeding appropriate length',
                example:
                  '3-4 page resume for a fresher or entry-level position',
                fix: 'Freshers: 1 page strictly. Experienced (5+ years): 2 pages maximum.',
              },
              {
                mistake: 'Not proofreading for errors',
                example: "Typos like 'pyhton', 'experiance', 'responsiblities'",
                fix: 'Proofread multiple times. Use Grammarly. Have a friend review.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 font-semibold text-red-600">
                  ❌ {item.mistake}
                </h4>
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="line-through">{item.example}</span>
                </p>
                <p className="text-sm text-green-600">✅ {item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Examples */}
        <section id="examples">
          <h2 className="mb-6 text-2xl font-bold">
            7. Before/After Resume Examples
          </h2>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg border">
              <div className="bg-red-50 p-4 dark:bg-red-950">
                <h3 className="font-semibold text-red-600">❌ Before (Weak)</h3>
                <div className="mt-2 rounded bg-background p-4 text-sm">
                  <p className="font-semibold">Experience</p>
                  <p className="text-muted-foreground">Intern at ABC Company</p>
                  <ul className="list-inside list-disc text-muted-foreground">
                    <li>Did website development work</li>
                    <li>Worked on various projects</li>
                    <li>Team member</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 p-4 dark:bg-green-950">
                <h3 className="font-semibold text-green-600">
                  ✅ After (Strong)
                </h3>
                <div className="mt-2 rounded bg-background p-4 text-sm">
                  <p className="font-semibold">
                    Software Development Intern | ABC Company
                  </p>
                  <p className="text-muted-foreground">
                    June 2024 - August 2024 | Mumbai, India
                  </p>
                  <ul className="mt-2 list-inside list-disc text-muted-foreground">
                    <li>
                      Developed responsive e-commerce website using React.js and
                      Node.js, serving 5,000+ daily users
                    </li>
                    <li>
                      Reduced page load time by 40% through code optimization
                      and lazy loading implementation
                    </li>
                    <li>
                      Collaborated with 4-member design team to implement 15+
                      new UI features
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <div className="bg-red-50 p-4 dark:bg-red-950">
                <h3 className="font-semibold text-red-600">
                  ❌ Before (Weak Summary)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  "I am a hard-working and dedicated student looking for a
                  challenging opportunity where I can utilize my skills and grow
                  professionally."
                </p>
              </div>
              <div className="bg-green-50 p-4 dark:bg-green-950">
                <h3 className="font-semibold text-green-600">
                  ✅ After (Strong Summary)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  "Computer Science graduate from IIT Bombay with expertise in
                  full-stack development (React, Node.js, MongoDB). Built 5
                  production-ready applications with 10,000+ combined users.
                  Seeking a Software Engineer role to contribute to scalable web
                  applications at innovative startups."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQs */}
        <section id="faq">
          <h2 className="mb-6 text-2xl font-bold">
            8. Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How long should my resume be?',
                a: 'For freshers and students with less than 2 years experience: strictly 1 page. For professionals with 2-10 years: 1-2 pages. Senior professionals with 10+ years: 2 pages maximum. Quality over quantity always.',
              },
              {
                q: 'Should I include my CGPA?',
                a: "Include CGPA only if it's above 7.5/10 (or 3.0/4.0). If your CGPA is lower, focus on projects, skills, and achievements instead. Some companies have CGPA cutoffs, so check requirements.",
              },
              {
                q: 'Do I need a different resume for each job?',
                a: 'Yes! Tailor your resume for each application by adjusting the summary, highlighting relevant skills, and using keywords from the job description. The core content can remain similar.',
              },
              {
                q: 'Should I include a photo on my resume?',
                a: "No, don't include a photo for jobs in India, US, UK, and most countries. Photos can lead to unconscious bias. Some European countries (Germany, France) may expect photos, so research local norms.",
              },
              {
                q: 'What file format should I use?',
                a: 'PDF is generally best as it preserves formatting across devices. Some ATS systems require .docx, so check the job posting. Never send .pages, .odt, or image files.',
              },
              {
                q: 'How far back should my experience go?',
                a: 'For freshers: include all relevant experience. For experienced professionals: focus on the last 10-15 years. Older experience can be summarized or omitted if not directly relevant.',
              },
              {
                q: 'Should I include hobbies and interests?',
                a: "Only if they're relevant to the job, demonstrate leadership, or add unique value. 'Reading and watching movies' adds nothing. 'Captain of college cricket team' or 'Published author' can help.",
              },
              {
                q: 'How do I handle employment gaps?',
                a: 'Be honest but strategic. Highlight any productive activities during gaps (freelancing, courses, volunteering). Address gaps briefly in cover letter if significant. Focus on what you learned.',
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

        {/* Resources CTA */}
        <section className="rounded-2xl bg-muted p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Create Your Perfect Resume?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Use our free tools and resources to build a resume that gets you
            noticed:
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link
                href="/tools/resume-score-checker"
                className="flex items-center gap-2"
              >
                <Target className="h-4 w-4" />
                Check Resume Score
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <Link
                href="/resume-optimizer"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                AI Resume Optimizer
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <Link
                href="/resources/resume-templates"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Resume Templates
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/interview-prep"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Interview Prep Guide</h3>
              <p className="text-sm text-muted-foreground">
                Ace your next interview
              </p>
            </Link>
            <Link
              href="/resources/cover-letters"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Cover Letter Guide</h3>
              <p className="text-sm text-muted-foreground">
                Complement your resume
              </p>
            </Link>
            <Link
              href="/blog/write-effective-cover-letter"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Cover Letter Blog</h3>
              <p className="text-sm text-muted-foreground">Tips and examples</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
