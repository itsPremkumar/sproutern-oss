import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  BookOpen,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  Star,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Landing Your First Internship',
  description:
    'A comprehensive step-by-step guide covering everything from resume building to acing interviews. Learn proven strategies that helped thousands of students secure their dream internships at top companies.',
  keywords: [
    'first internship',
    'internship guide',
    'how to get internship',
    'internship tips',
    'resume for internship',
    'internship interview',
    'student internship',
    'career guide',
  ],
  openGraph: {
    title: 'The Ultimate Guide to Landing Your First Internship',
    description:
      'Complete roadmap to securing your dream internship - from resume building to interview success.',
    type: 'article',
    publishedTime: '2024-11-01T00:00:00Z',
    authors: ['Sproutern Career Team'],
    url: 'https://sproutern.dpdns.org/blog/ultimate-guide-first-internship',
    siteName: 'Sproutern',
    images: [
      {
        url: 'https://sproutern.dpdns.org/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'The Ultimate Guide to Landing Your First Internship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Landing Your First Internship',
    description:
      'Complete roadmap to securing your dream internship - from resume building to interview success.',
    images: ['https://sproutern.dpdns.org/twitter.jpg'],
  },
  alternates: {
    canonical: './',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Article Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            The Ultimate Guide to Landing Your First Internship
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            A comprehensive, step-by-step roadmap that has helped over 10,000
            students secure internships at companies like Google, Microsoft,
            Flipkart, and innovative startups.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>November 1, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-primary bg-primary/5 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Target className="h-5 w-5 text-primary" />
            Key Takeaways (TL;DR)
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Start 6 months early</strong> - Begin preparing in your
                2nd year for summer internships
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Projects over grades</strong> - 3 solid projects matter
                more than a 9.5 CGPA
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Apply to 50+ companies</strong> - Treat job hunting as a
                numbers game
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Network intentionally</strong> - 70% of internships come
                through referrals
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Practice mock interviews</strong> - 10 mock interviews =
                80% better performance
              </span>
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">ðŸ“‹ Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a
                href="#introduction"
                className="text-primary hover:underline"
              >
                Introduction: Why Internships Matter More Than Ever
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                The Perfect Internship Timeline
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="text-primary hover:underline"
              >
                Crafting a Killer Resume (With Examples)
              </a>
            </li>
            <li>
              <a
                href="#online-presence"
                className="text-primary hover:underline"
              >
                Building Your Online Presence
              </a>
            </li>
            <li>
              <a
                href="#networking"
                className="text-primary hover:underline"
              >
                The Art of Networking
              </a>
            </li>
            <li>
              <a
                href="#applications"
                className="text-primary hover:underline"
              >
                Strategic Application Process
              </a>
            </li>
            <li>
              <a
                href="#interviews"
                className="text-primary hover:underline"
              >
                Mastering the Interview
              </a>
            </li>
            <li>
              <a
                href="#negotiation"
                className="text-primary hover:underline"
              >
                Negotiating Your Offer
              </a>
            </li>
            <li>
              <a
                href="#success-stories"
                className="text-primary hover:underline"
              >
                Real Success Stories
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="text-primary hover:underline"
              >
                Complete Action Checklist
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                Frequently Asked Questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section id="introduction">
          <h2>Introduction: Why Internships Matter More Than Ever</h2>

          <p className="lead">
            The job market has fundamentally changed. According to recent data
            from the National Association of Colleges and Employers (NACE),{' '}
            <strong>72% of employers now require internship experience</strong>{' '}
            even for entry-level positions. This guide will show you exactly how
            to stand out in this competitive landscape.
          </p>

          <p>
            Whether you're a first-year student just starting to think about
            your career or a final-year student who hasn't had an internship
            yet, this guide is designed for you. We've distilled insights from
            over 500 successful interns and 100+ hiring managers to create the
            most comprehensive internship guide available.
          </p>

          <div className="my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Internship Market Statistics
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                â€¢ <strong>68%</strong> of interns receive full-time offers
                from their internship company
              </li>
              <li>
                â€¢ Average stipend for software engineering interns:{' '}
                <strong>â‚¹25,000 - â‚¹80,000/month</strong>
              </li>
              <li>
                â€¢ <strong>3.5x</strong> more likely to get a job if you have
                internship experience
              </li>
              <li>
                â€¢ <strong>85%</strong> of companies increased their intern
                hiring
              </li>
            </ul>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <h2>The Perfect Internship Timeline</h2>

          <p>
            Timing is everything when it comes to landing internships. Many
            students make the mistake of starting their search too late. Here's
            the ideal timeline based on when you want your internship:
          </p>

          <h3>For Summer Internships (May-July)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-muted p-2 text-left">When</th>
                  <th className="bg-muted p-2 text-left">What to Do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2">
                    <strong>August-September</strong>
                  </td>
                  <td className="border-b p-2">
                    Build projects, update resume, start networking
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2">
                    <strong>October-November</strong>
                  </td>
                  <td className="border-b p-2">
                    Apply to early-deadline companies (Big Tech, consulting)
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2">
                    <strong>December-January</strong>
                  </td>
                  <td className="border-b p-2">
                    Peak application season - apply to 30-50 companies
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2">
                    <strong>February-March</strong>
                  </td>
                  <td className="border-b p-2">
                    Interview season - practice daily, follow up
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <strong>April</strong>
                  </td>
                  <td className="p-2">Final offers and negotiations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-6 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div>
              <strong>Pro Tip:</strong> Top companies like Google, Microsoft,
              and Amazon often have application deadlines in September-October.
              Don't miss these early deadlines!
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume">
          <h2>Crafting a Killer Resume (With Real Examples)</h2>

          <p>
            Your resume is often the only thing standing between you and an
            interview. With AI-powered Applicant Tracking Systems (ATS)
            filtering out 75% of resumes before a human sees them, you need to
            be strategic.
          </p>

          <h3>The Anatomy of a Winning Resume</h3>

          <h4>1. Contact Information & Header</h4>
          <p>Keep this clean and professional:</p>
          <ul>
            <li>Full Name (use your professional name)</li>
            <li>Phone Number (with country code)</li>
            <li>Professional Email (firstname.lastname@gmail.com)</li>
            <li>LinkedIn URL (customized, e.g., linkedin.com/in/yourname)</li>
            <li>GitHub/Portfolio (for tech roles)</li>
            <li>Location (City, State is sufficient)</li>
          </ul>

          <h4>2. Education Section</h4>
          <p>For students, this should be near the top:</p>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              <strong>Bachelor of Technology in Computer Science</strong>
            </p>
            <p>
              Indian Institute of Technology, Delhi | Expected Graduation: May
            </p>
            <p>
              CGPA: 8.5/10 | Relevant Coursework: Data Structures, Algorithms,
              Machine Learning
            </p>
          </div>

          <h4>3. Projects Section (Most Important for Students)</h4>
          <p>
            Use the PAR format: <strong>Problem â†’ Action â†’ Result</strong>
          </p>

          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 font-bold">âœ… Good Example:</p>
            <p className="text-sm">
              <strong>E-Commerce Recommendation Engine</strong> | Python,
              TensorFlow, AWS
              <br />
              â€¢ Built a collaborative filtering recommendation system that
              increased product discovery by <strong>40%</strong>
              <br />
              â€¢ Processed <strong>1M+ user interactions</strong> using Apache
              Spark, reducing recommendation latency by 60%
              <br />
              â€¢ Deployed on AWS Lambda, handling{' '}
              <strong>10,000+ daily requests</strong> with 99.9% uptime
            </p>
          </div>

          <div className="my-4 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="mb-2 font-bold">âŒ Bad Example:</p>
            <p className="text-sm">
              <strong>E-Commerce Project</strong>
              <br />
              â€¢ Made a recommendation system
              <br />
              â€¢ Used Python and machine learning
              <br />
              â€¢ Deployed it online
            </p>
          </div>

          <h4>4. Skills Section</h4>
          <p>Be specific and honest:</p>
          <ul>
            <li>
              <strong>Languages:</strong> Python (Advanced), JavaScript
              (Intermediate), Java (Beginner)
            </li>
            <li>
              <strong>Frameworks:</strong> React, Node.js, TensorFlow, Django
            </li>
            <li>
              <strong>Tools:</strong> Git, Docker, AWS, MongoDB, PostgreSQL
            </li>
            <li>
              <strong>Soft Skills:</strong> Team Leadership, Public Speaking,
              Technical Writing
            </li>
          </ul>

          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <Lightbulb className="h-5 w-5 text-primary" />
              Resume Optimization Tips
            </h4>
            <ol className="space-y-2 text-sm">
              <li>
                <strong>1. Use numbers everywhere:</strong> "Improved app
                performance" â†’ "Improved app load time by 45%"
              </li>
              <li>
                <strong>2. Match keywords:</strong> Mirror the job description's
                language in your resume
              </li>
              <li>
                <strong>3. One page only:</strong> For students, never exceed
                one page
              </li>
              <li>
                <strong>4. Simple formatting:</strong> Use standard fonts
                (Arial, Calibri), avoid tables and graphics
              </li>
              <li>
                <strong>5. PDF format:</strong> Always submit as PDF to preserve
                formatting
              </li>
            </ol>
          </div>

          <p>
            <strong>Need help with your resume?</strong> Use our free{' '}
            <Link
              href="/resume-optimizer"
              className="text-primary underline"
            >
              AI Resume Optimizer
            </Link>{' '}
            to get instant feedback and suggestions.
          </p>
        </section>

        {/* Online Presence Section */}
        <section id="online-presence">
          <h2>Building Your Online Presence</h2>

          <p>
            87% of recruiters check candidates' online profiles before making
            hiring decisions. Your digital footprint can make or break your
            internship chances.
          </p>

          <h3>LinkedIn Optimization Checklist</h3>
          <ul>
            <li>
              <strong>Professional Photo:</strong> Headshot with neutral
              background, business casual attire
            </li>
            <li>
              <strong>Compelling Headline:</strong> Not just "Student at XYZ" -
              try "Aspiring Data Scientist | Python Developer | Machine Learning
              Enthusiast"
            </li>
            <li>
              <strong>About Section:</strong> 3-4 paragraphs covering your
              passion, skills, and career goals
            </li>
            <li>
              <strong>Featured Section:</strong> Showcase your best projects,
              articles, or achievements
            </li>
            <li>
              <strong>Skills:</strong> Add 30+ skills and get endorsements from
              classmates and professors
            </li>
            <li>
              <strong>Recommendations:</strong> Get 2-3 recommendations from
              professors or internship supervisors
            </li>
          </ul>

          <h3>GitHub for Tech Roles</h3>
          <p>
            Your GitHub profile is your portfolio. Here's how to make it shine:
          </p>
          <ol>
            <li>
              <strong>Pin your best repositories:</strong> Choose 4-6 projects
              that showcase different skills
            </li>
            <li>
              <strong>Write detailed READMEs:</strong> Include problem
              statement, solution, tech stack, and setup instructions
            </li>
            <li>
              <strong>Contribute to open source:</strong> Even small
              contributions show initiative
            </li>
            <li>
              <strong>Maintain consistency:</strong> Regular commits show
              dedication (aim for 3-4 commits per week)
            </li>
          </ol>

          <h3>Personal Portfolio Website</h3>
          <p>
            For design, product, and creative roles, a portfolio website is
            essential. For developers, it's a strong differentiator. Include:
          </p>
          <ul>
            <li>About Me section with your story</li>
            <li>Project showcase with case studies</li>
            <li>Blog (shows thought leadership)</li>
            <li>Contact form</li>
            <li>Resume download option</li>
          </ul>
        </section>

        {/* Networking Section */}
        <section id="networking">
          <h2>The Art of Networking</h2>

          <p>
            Here's a truth that might surprise you:{' '}
            <strong>
              70% of jobs are filled through networking, and only 30% come from
              cold applications
            </strong>
            . Yet most students spend 95% of their time on job portals and only
            5% on networking.
          </p>

          <h3>Strategic Networking Framework</h3>

          <h4>1. Identify Your Targets</h4>
          <p>Make a list of:</p>
          <ul>
            <li>15-20 companies you'd love to intern at</li>
            <li>Alumni from your college at these companies</li>
            <li>People you've met at events or online communities</li>
            <li>Professors with industry connections</li>
          </ul>

          <h4>2. The Warm Outreach Template</h4>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              Subject: Fellow [College Name] Student - Quick Question About
              [Company]
            </p>
            <br />
            <p>Hi [Name],</p>
            <br />
            <p>
              I'm [Your Name], a [Year] [Major] student at [College]. I came
              across your profile and was impressed by your journey from
              [College] to [Their Current Role] at [Company].
            </p>
            <br />
            <p>
              I'm really interested in [Specific Area] and would love to learn
              about your experience. Would you have 15 minutes for a quick call
              this week or next?
            </p>
            <br />
            <p>
              I understand you're busy, so no pressure at all. Either way, thank
              you for the inspiration!
            </p>
            <br />
            <p>
              Best,
              <br />
              [Your Name]
            </p>
          </div>

          <h4>3. Informational Interview Questions</h4>
          <p>When you get a call, ask questions like:</p>
          <ul>
            <li>
              What does a typical day look like for an intern at [Company]?
            </li>
            <li>What skills do you wish you had before starting?</li>
            <li>What's the best way to prepare for interviews at [Company]?</li>
            <li>What separates good candidates from great ones?</li>
            <li>Is there anyone else you'd recommend I speak with?</li>
          </ul>

          <h4>4. Follow Up and Maintain Relationships</h4>
          <ul>
            <li>Send a thank you note within 24 hours</li>
            <li>Connect on LinkedIn</li>
            <li>
              Update them on your progress (e.g., when you apply, get an
              interview)
            </li>
            <li>Share relevant articles or resources occasionally</li>
          </ul>
        </section>

        {/* Application Strategy */}
        <section id="applications">
          <h2>Strategic Application Process</h2>

          <p>
            Applying to internships is a numbers game, but it's not just about
            quantity. Here's the strategic approach that maximizes your chances:
          </p>

          <h3>The 50-30-20 Application Strategy</h3>
          <ul>
            <li>
              <strong>50% Safe Applications:</strong> Companies where you meet
              all requirements and have a good chance
            </li>
            <li>
              <strong>30% Target Applications:</strong> Dream companies where
              you meet most requirements
            </li>
            <li>
              <strong>20% Reach Applications:</strong> Top-tier companies, even
              if you're slightly underqualified
            </li>
          </ul>

          <h3>Where to Find Internships</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">ðŸŒ Job Portals</h4>
              <ul className="space-y-1 text-sm">
                <li>â€¢ Sproutern (startup-focused)</li>
                <li>â€¢ LinkedIn Jobs</li>
                <li>â€¢ Internshala</li>
                <li>â€¢ AngelList (for startups)</li>
                <li>â€¢ Indeed</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">ðŸ¢ Direct Applications</h4>
              <ul className="space-y-1 text-sm">
                <li>â€¢ Company career pages</li>
                <li>â€¢ University career portals</li>
                <li>â€¢ Startup incubators</li>
                <li>â€¢ GitHub job boards</li>
              </ul>
            </div>
          </div>

          <h3>Application Tracking System</h3>
          <p>
            Create a spreadsheet to track all your applications with these
            columns:
          </p>
          <ul>
            <li>Company Name</li>
            <li>Position</li>
            <li>Application Date</li>
            <li>Application Status</li>
            <li>Contact Person (if any)</li>
            <li>Follow-up Date</li>
            <li>Interview Dates</li>
            <li>Notes</li>
          </ul>
        </section>

        {/* Interview Section */}
        <section id="interviews">
          <h2>Mastering the Interview</h2>

          <p>
            Congratulations on getting the interview! Now comes the crucial
            part. Let's break down each type of interview and how to ace them.
          </p>

          <h3>Types of Interviews</h3>

          <h4>1. Phone/Video Screen (15-30 minutes)</h4>
          <p>First filter, usually with HR or a recruiter. Focus on:</p>
          <ul>
            <li>Clear, concise answers about your background</li>
            <li>Genuine enthusiasm for the company</li>
            <li>Basic understanding of the role</li>
            <li>
              Professional setup (quiet room, good lighting, stable internet)
            </li>
          </ul>

          <h4>2. Technical Interview (45-60 minutes)</h4>
          <p>
            For tech roles, expect coding problems or case studies. Preparation:
          </p>
          <ul>
            <li>Practice 100+ LeetCode problems (focus on Easy and Medium)</li>
            <li>Master data structures: Arrays, Trees, Graphs, Hash Tables</li>
            <li>Know algorithms: Sorting, Searching, Dynamic Programming</li>
            <li>System design basics for senior internships</li>
          </ul>

          <h4>3. Behavioral Interview (45-60 minutes)</h4>
          <p>Uses the STAR Method. Prepare stories for:</p>
          <ul>
            <li>A time you showed leadership</li>
            <li>A conflict you resolved</li>
            <li>A failure and what you learned</li>
            <li>Your biggest achievement</li>
            <li>A time you went above and beyond</li>
          </ul>

          <h3>The STAR Method Explained</h3>
          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <p>
              <strong>S - Situation:</strong> Set the context (1-2 sentences)
            </p>
            <p>
              <strong>T - Task:</strong> What was your responsibility?
            </p>
            <p>
              <strong>A - Action:</strong> What specific steps did YOU take?
              (This should be 60% of your answer)
            </p>
            <p>
              <strong>R - Result:</strong> What was the outcome? Quantify if
              possible.
            </p>
          </div>

          <h3>Questions to Ask the Interviewer</h3>
          <p>Always prepare 3-5 thoughtful questions:</p>
          <ul>
            <li>
              "What does success look like for an intern in this role after 3
              months?"
            </li>
            <li>
              "What's the biggest challenge the team is currently facing?"
            </li>
            <li>"How would you describe the team culture?"</li>
            <li>"What's your favorite part about working here?"</li>
            <li>
              "What are the opportunities for interns to present their work?"
            </li>
          </ul>
        </section>

        {/* Negotiation Section */}
        <section id="negotiation">
          <h2>Negotiating Your Offer</h2>

          <p>
            Yes, you can negotiate internship offers! Many students leave money
            on the table because they don't know this. Here's how to do it
            professionally:
          </p>

          <h3>What's Negotiable</h3>
          <ul>
            <li>
              <strong>Stipend:</strong> 10-20% increase is often possible
            </li>
            <li>
              <strong>Start/End Dates:</strong> Flexibility for exams or prior
              commitments
            </li>
            <li>
              <strong>Remote Work:</strong> Hybrid or fully remote options
            </li>
            <li>
              <strong>Housing Stipend:</strong> If relocating to expensive
              cities
            </li>
            <li>
              <strong>Equipment:</strong> Laptop, monitor, etc.
            </li>
          </ul>

          <h3>Negotiation Script</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              "Thank you so much for this offer - I'm really excited about the
              opportunity to join [Company]. Before I formally accept, I wanted
              to discuss the compensation. Based on my research and the skills I
              bring, I was hoping we could discuss a stipend closer to [X
              amount]. Is there any flexibility here?"
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section id="success-stories">
          <h2>Real Success Stories</h2>

          <div className="my-6 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6 dark:from-green-950 dark:to-blue-950">
            <h4 className="mb-2 flex items-center gap-2 font-bold">
              <Star className="h-5 w-5 text-yellow-500" />
              Priya S. - From Zero Experience to Google Intern
            </h4>
            <p className="mb-3 text-sm">
              "I had no internship experience and a 7.5 CGPA. I thought I had no
              chance at big tech. But I followed the project-first approach,
              built 3 solid projects, and practiced 150 LeetCode problems. I
              applied to 67 companies and got 4 offers, including Google."
            </p>
            <p className="text-xs text-muted-foreground">
              B.Tech Computer Science, IIT Roorkee | Now at Google
            </p>
          </div>

          <div className="my-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-6 dark:from-purple-950 dark:to-pink-950">
            <h4 className="mb-2 flex items-center gap-2 font-bold">
              <Star className="h-5 w-5 text-yellow-500" />
              Rahul M. - The Power of Networking
            </h4>
            <p className="mb-3 text-sm">
              "I was applying to 10+ jobs every day with no response. Then I
              shifted my strategy to networking. I reached out to 50 alumni on
              LinkedIn, had 15 conversations, and got 3 referrals. One of those
              referrals led to my current internship at Razorpay."
            </p>
            <p className="text-xs text-muted-foreground">
              B.Tech Electrical, NIT Trichy | Now at Razorpay
            </p>
          </div>
        </section>

        {/* Action Checklist */}
        <section id="checklist">
          <h2>Your Complete Action Checklist</h2>

          <div className="not-prose">
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>
                  Update resume using the PAR format with quantified
                  achievements
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>
                  Complete 2-3 meaningful projects and add them to GitHub
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>
                  Optimize LinkedIn profile with professional photo and detailed
                  sections
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Create a list of 50 target companies</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Reach out to 20 alumni for informational interviews</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Practice 50+ LeetCode problems (for tech roles)</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Prepare 5 STAR stories for behavioral interviews</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Do 3-5 mock interviews with friends or mentors</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Set up application tracking spreadsheet</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>Apply to 50+ companies using the 50-30-20 strategy</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <h2>Frequently Asked Questions</h2>

          <h4>Q: I have no prior experience. Can I still get an internship?</h4>
          <p>
            Absolutely! Focus on personal projects, open-source contributions,
            and coursework. Many students get their first internship without any
            prior experience. The key is demonstrating potential and eagerness
            to learn.
          </p>

          <h4>Q: How many companies should I apply to?</h4>
          <p>
            We recommend applying to at least 50 companies. The average
            conversion rate from application to interview is about 5-10%, and
            from interview to offer is about 20-30%. So you need volume.
          </p>

          <h4>Q: When should I start preparing?</h4>
          <p>
            For summer internships, start at least 6 months in advance.
            September is ideal for summer internships starting in May. However,
            it's never too late to start - opportunities exist year-round.
          </p>

          <h4>Q: What if I keep getting rejected?</h4>
          <p>
            Rejection is part of the process. Analyze what's going wrong - is it
            your resume (not getting interviews) or your interview skills
            (getting interviews but no offers)? Focus on improving that specific
            area.
          </p>

          <h4>Q: Should I take an unpaid internship?</h4>
          <p>
            It depends. If it's a valuable learning opportunity at a reputable
            company and you can afford it, it might be worth it. However, paid
            internships are generally preferable. All internships on Sproutern
            clearly indicate compensation details.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Your Journey Starts Now</h2>

          <p>
            Landing your first internship is a marathon, not a sprint. It
            requires persistence, preparation, and a willingness to learn from
            every rejection. The students who succeed are not just the most
            talented - they're the ones who are most strategic and consistent in
            their efforts.
          </p>

          <p>
            Remember: every Google engineer, every startup founder, every
            industry leader once stood where you stand now - wondering how to
            get their foot in the door. They did it, and so can you.
          </p>

          <p>
            Start today. Update your resume, reach out to one person on
            LinkedIn, or solve one coding problem. Small consistent actions
            compound into life-changing results.
          </p>

          <p className="text-lg font-semibold text-primary">
            Your dream internship is waiting. Go get it. ðŸš€
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">ðŸ“š Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/50-common-interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              50 Common Interview Questions
            </Link>
            <Link
              href="/blog/resume-mistakes-students-avoid"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              10 Resume Mistakes to Avoid
            </Link>
            <Link
              href="/resume-optimizer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              AI Resume Optimizer Tool
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internship Opportunities
            </Link>
          </div>
        </div>

        {/* Author Box */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Our career experts have helped over 10,000 students land
                internships at companies ranging from startups to Fortune 500
                giants. We're passionate about making career guidance accessible
                to everyone.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
