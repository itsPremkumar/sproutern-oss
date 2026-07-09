import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Target,
  Heart,
  Briefcase,
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HR Internships: Complete Guide',
  description:
    'Break into Human Resources with this comprehensive guide. Learn about HR roles, skills, and how to land your first HR internship.',
  keywords: [
    'hr internship',
    'human resources internship',
    'hr career india',
    'hr skills',
    'talent acquisition internship',
  ],
  openGraph: {
    title: 'HR Internships: Complete Guide',
    description: 'Start your HR career with the right internship.',
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
          <div className="mb-4 flex items-center gap-2 text-teal-600">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            HR Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Human Resources is the backbone of any organization. Learn how to
            break into this people-focused career path.
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
                1. Types of HR Roles
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
                href="#tasks"
                className="text-primary hover:underline"
              >
                3. What HR Interns Do
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
              <span>HR is evolving—tech skills are increasingly valuable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>People skills and empathy are non-negotiable</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>HR internships often lead to full-time offers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Start with recruitment—it's the most common entry point
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            1. Types of HR Roles
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Talent Acquisition</p>
              <p className="text-muted-foreground">
                Sourcing, screening, interviewing candidates
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">HR Operations</p>
              <p className="text-muted-foreground">
                Payroll, compliance, employee records
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Employee Engagement</p>
              <p className="text-muted-foreground">
                Culture, events, retention programs
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-teal-600">Learning & Development</p>
              <p className="text-muted-foreground">
                Training programs, skill development
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>Communication:</strong> Clear written and verbal skills
            </li>
            <li>
              <strong>Empathy:</strong> Understanding people's perspectives
            </li>
            <li>
              <strong>Organization:</strong> Managing multiple tasks and
              deadlines
            </li>
            <li>
              <strong>Discretion:</strong> Handling confidential information
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>HRMS tools (Zoho People, Darwinbox, etc.)</li>
            <li>Excel for data analysis</li>
            <li>Basic employment law knowledge</li>
            <li>LinkedIn Recruiter familiarity</li>
          </ul>
        </section>

        {/* Section 3: Tasks */}
        <section
          id="tasks"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            3. What HR Interns Do
          </h2>

          <ul>
            <li>Source candidates on LinkedIn and job portals</li>
            <li>Screen resumes and schedule interviews</li>
            <li>Assist with onboarding new employees</li>
            <li>Help organize employee engagement activities</li>
            <li>Maintain HR databases and records</li>
            <li>Support payroll and attendance management</li>
          </ul>
        </section>

        {/* Section 4: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <UserPlus className="h-6 w-6 text-primary" />
            4. Top Companies
          </h2>

          <h3>Tech Companies</h3>
          <p>TCS, Infosys, Wipro, Accenture, Cognizant (large HR teams)</p>

          <h3>Startups</h3>
          <p>Swiggy, Zomato, CRED, Razorpay (fast-paced, diverse exposure)</p>

          <h3>HR Consulting</h3>
          <p>Mercer, Aon, Korn Ferry, Michael Page</p>
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
              <strong>Resume Screen:</strong> Communication skills and relevant
              experience
            </li>
            <li>
              <strong>HR Interview:</strong> Behavioral questions, situation
              handling
            </li>
            <li>
              <strong>Case Study:</strong> How would you handle X employee
              situation?
            </li>
            <li>
              <strong>Final Round:</strong> Culture fit with HR team
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Prepare examples of when you resolved
              conflicts or helped people—these stories matter in HR interviews.
            </div>
          </div>
        </section>

        {/* New comprehensive sections */}
        <section className="scroll-mt-20">
          <h2>Deep Dive: HR Specializations</h2>
          <p>
            HR is a diverse field with many career paths. Here's what each
            specialization involves:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                🎯 Talent Acquisition / Recruitment
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Finding and attracting the best candidates for open positions.
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Activities:</strong> Job posting, sourcing
                candidates, screening resumes, conducting interviews, offer
                negotiations
              </p>
              <p className="mb-2 text-xs">
                <strong>Tools Used:</strong> LinkedIn Recruiter, Naukri,
                Greenhouse, Lever, ATS systems
              </p>
              <p className="text-xs">
                <strong>Best For:</strong> People-oriented individuals who enjoy
                networking and sales-like work
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">⚙️ HR Operations</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Managing day-to-day HR processes and employee lifecycle.
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Activities:</strong> Payroll processing, attendance
                management, employee records, compliance, documentation
              </p>
              <p className="mb-2 text-xs">
                <strong>Tools Used:</strong> Zoho People, Darwinbox, BambooHR,
                greytHR, Excel
              </p>
              <p className="text-xs">
                <strong>Best For:</strong> Detail-oriented people who enjoy
                systematic work and process improvement
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🎉 Employee Engagement</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Creating positive workplace culture and keeping employees happy.
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Activities:</strong> Events planning, pulse surveys,
                recognition programs, wellness initiatives, team building
              </p>
              <p className="mb-2 text-xs">
                <strong>Tools Used:</strong> Culture Amp, Officevibe, Slack,
                event management tools
              </p>
              <p className="text-xs">
                <strong>Best For:</strong> Creative, energetic people who love
                organizing and making others feel valued
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                📚 Learning & Development (L&D)
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Designing and delivering training programs for skill
                development.
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Activities:</strong> Training needs analysis, course
                design, workshop facilitation, LMS management
              </p>
              <p className="mb-2 text-xs">
                <strong>Tools Used:</strong> LMS platforms, Articulate,
                Skillsoft, Coursera for Business
              </p>
              <p className="text-xs">
                <strong>Best For:</strong> Those who enjoy teaching and helping
                others grow professionally
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">💰 Compensation & Benefits</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Designing fair and competitive pay structures and benefits.
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Activities:</strong> Salary benchmarking, benefits
                design, bonus structures, equity planning
              </p>
              <p className="mb-2 text-xs">
                <strong>Tools Used:</strong> PayScale, Glassdoor, Excel,
                compensation software
              </p>
              <p className="text-xs">
                <strong>Best For:</strong> Analytical minds who like data and
                financial modeling
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                📊 HR Analytics / People Analytics
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Using data to make better HR decisions.
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Activities:</strong> Attrition analysis, hiring
                metrics, engagement score tracking, predictive models
              </p>
              <p className="mb-2 text-xs">
                <strong>Tools Used:</strong> Excel, SQL, Tableau, Power BI,
                Python
              </p>
              <p className="text-xs">
                <strong>Best For:</strong> Data enthusiasts who want to bring
                analytics to HR
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Essential HR Tools</h2>
          <p>
            Modern HR relies heavily on technology. Familiarize yourself with
            these tools to stand out:
          </p>

          <h3>HR Management Systems (HRMS)</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Zoho People</h4>
              <p className="text-xs text-muted-foreground">
                Popular in Indian startups. Handles attendance, leave,
                performance, and employee database. User-friendly interface.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Darwinbox</h4>
              <p className="text-xs text-muted-foreground">
                Leading HRMS in India. Used by Swiggy, Myntra, JioMart. Covers
                entire employee lifecycle from hire to retire.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Workday</h4>
              <p className="text-xs text-muted-foreground">
                Enterprise-grade HCM used by large MNCs. Industry standard for
                global companies.
              </p>
            </div>
          </div>

          <h3>Recruitment Tools</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">LinkedIn Recruiter</h4>
              <p className="text-xs text-muted-foreground">
                Premium tool for sourcing candidates. InMail, advanced search,
                and candidate tracking features.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Naukri / Indeed</h4>
              <p className="text-xs text-muted-foreground">
                Job posting and resume database. Essential for India market
                recruitment.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Greenhouse / Lever</h4>
              <p className="text-xs text-muted-foreground">
                ATS (Applicant Tracking System) for managing hiring pipeline.
                Popular in tech companies.
              </p>
            </div>
          </div>

          <h3>Productivity & Analytics</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">
                Microsoft Excel / Google Sheets
              </h4>
              <p className="text-xs text-muted-foreground">
                Still essential! Used for reporting, data analysis, and quick
                calculations. Master pivot tables and VLOOKUP.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Slack / Microsoft Teams</h4>
              <p className="text-xs text-muted-foreground">
                Internal communication. HR often manages company-wide
                announcements and channels.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Day in the Life: HR Intern</h2>
          <p>
            Here's what a typical day looks like for HR interns at different
            types of companies:
          </p>

          <h3>Talent Acquisition Intern at Tech Startup</h3>
          <div className="my-6 rounded-lg border bg-muted p-5">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>9:30 AM</strong> - Team standup: review open positions
                and hiring pipeline
              </li>
              <li>
                <strong>10:00 AM</strong> - Source candidates on LinkedIn for
                engineering roles
              </li>
              <li>
                <strong>11:30 AM</strong> - Screen resumes and shortlist
                candidates
              </li>
              <li>
                <strong>12:30 PM</strong> - Schedule interviews, coordinate with
                hiring managers
              </li>
              <li>
                <strong>1:00 PM</strong> - Lunch break
              </li>
              <li>
                <strong>2:00 PM</strong> - Conduct phone screening calls
              </li>
              <li>
                <strong>4:00 PM</strong> - Update ATS with candidate status
              </li>
              <li>
                <strong>5:00 PM</strong> - Reach out to new passive candidates
              </li>
              <li>
                <strong>6:00 PM</strong> - EOD report on hiring metrics
              </li>
            </ul>
          </div>

          <h3>HR Operations Intern at Corporate</h3>
          <div className="my-6 rounded-lg border bg-muted p-5">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>9:00 AM</strong> - Review attendance and leave requests
              </li>
              <li>
                <strong>10:00 AM</strong> - Process employee documentation for
                new joiners
              </li>
              <li>
                <strong>11:00 AM</strong> - Respond to employee queries (email,
                HRMS tickets)
              </li>
              <li>
                <strong>12:00 PM</strong> - Update employee database records
              </li>
              <li>
                <strong>1:00 PM</strong> - Lunch
              </li>
              <li>
                <strong>2:00 PM</strong> - Work on payroll data preparation
              </li>
              <li>
                <strong>3:30 PM</strong> - Coordinate with finance on
                reimbursements
              </li>
              <li>
                <strong>4:30 PM</strong> - Prepare onboarding materials for next
                batch
              </li>
              <li>
                <strong>5:30 PM</strong> - Document process improvements
              </li>
            </ul>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>How to Land HR Internships</h2>

          <h3>Step 1: Build Foundation</h3>
          <ul>
            <li>
              <strong>Learn HR basics:</strong> Read about HR functions,
              employment law basics, and current trends
            </li>
            <li>
              <strong>Get certified:</strong> Free courses on Coursera/LinkedIn
              Learning for HR fundamentals
            </li>
            <li>
              <strong>Master communication:</strong> Both written and
              verbal—practice professional emails and conversations
            </li>
          </ul>

          <h3>Step 2: Gain Experience</h3>
          <ul>
            <li>
              <strong>College clubs:</strong> Event organization shows planning
              and people skills
            </li>
            <li>
              <strong>Volunteer work:</strong> Any role involving coordination
              demonstrates HR-relevant skills
            </li>
            <li>
              <strong>Start a blog:</strong> Write about HR topics, share on
              LinkedIn to build credibility
            </li>
          </ul>

          <h3>Step 3: Apply Strategically</h3>
          <ul>
            <li>Tech startups: Fast-paced learning, diverse exposure</li>
            <li>IT services: Large scale, structured training programs</li>
            <li>HR consultancies: Learn best practices across industries</li>
            <li>Look for "HR Intern" or "Talent Acquisition Intern" roles</li>
          </ul>

          <h3>Step 4: Nail The Application</h3>
          <ul>
            <li>
              Highlight people-focused experiences (even non-work ones count)
            </li>
            <li>Show empathy and conflict resolution examples</li>
            <li>
              Mention any relevant tools or skills (Excel, LinkedIn, etc.)
            </li>
            <li>Customize cover letter for each company's culture</li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>HR Interview Preparation</h2>
          <p>
            HR interviews focus heavily on behavioral questions and situational
            judgment. Here's how to prepare:
          </p>

          <h3>Common HR Interview Questions</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">
                Why do you want to work in HR?
              </h4>
              <p className="text-xs text-muted-foreground">
                Show genuine interest in people, workplace culture, and
                organizational development. Connect it to your experiences.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">
                Tell me about a conflict you resolved.
              </h4>
              <p className="text-xs text-muted-foreground">
                Use STAR format. Show empathy, listening skills, and fair
                resolution. Focus on how everyone's needs were addressed.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">
                How would you handle confidential information?
              </h4>
              <p className="text-xs text-muted-foreground">
                Emphasize discretion, understanding of privacy importance, and
                ethical handling. Give concrete examples if possible.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">
                What HR trends interest you?
              </h4>
              <p className="text-xs text-muted-foreground">
                Discuss remote work, employee wellness, DEI initiatives, people
                analytics, or AI in recruitment. Show you follow industry news.
              </p>
            </div>
          </div>

          <h3>HR Case Study Examples</h3>
          <div className="my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-6 dark:bg-teal-950">
              <h4 className="mb-2 font-bold text-teal-900 dark:text-teal-100">
                Case 1: Employee Performance Issue
              </h4>
              <p className="mb-2 text-sm text-teal-800 dark:text-teal-200">
                "A high-performing employee's performance has dropped
                significantly in the last 3 months. How would you handle this?"
              </p>
              <p className="text-xs text-teal-700 dark:text-teal-300">
                <strong>Approach:</strong> Investigate causes (personal issues,
                workload, conflict), have empathetic conversation, create
                support plan, document appropriately while being supportive.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-6 dark:bg-teal-950">
              <h4 className="mb-2 font-bold text-teal-900 dark:text-teal-100">
                Case 2: Hiring Dilemma
              </h4>
              <p className="mb-2 text-sm text-teal-800 dark:text-teal-200">
                "Two candidates are equally qualified for a role. One has more
                experience, the other has better culture fit. Who do you
                choose?"
              </p>
              <p className="text-xs text-teal-700 dark:text-teal-300">
                <strong>Approach:</strong> Consider role requirements, team
                needs, growth potential. Usually culture fit + potential beats
                pure experience. Explain your reasoning.
              </p>
            </div>
          </div>

          <h3>Questions to Ask HR Interviewers</h3>
          <ul>
            <li>What does a successful HR intern look like in your team?</li>
            <li>What's the biggest HR challenge the company is facing?</li>
            <li>How does the HR team contribute to company strategy?</li>
            <li>What learning opportunities are available for interns?</li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>HR Career Growth Path</h2>
          <p>Here's the typical career progression in HR:</p>

          <div className="my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Level 1: HR Intern / Trainee</h4>
              <p className="text-sm text-muted-foreground">
                Salary: ₹10K-25K/month (internship) | Learn basics across HR
                functions
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">
                Level 2: HR Executive / Associate
              </h4>
              <p className="text-sm text-muted-foreground">
                Salary: ₹3-6 LPA | Handle specific function (recruitment,
                operations)
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Level 3: HR Manager</h4>
              <p className="text-sm text-muted-foreground">
                Salary: ₹8-15 LPA | Lead a team, own HR function for business
                unit
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">
                Level 4: Senior HR Manager / HR BP
              </h4>
              <p className="text-sm text-muted-foreground">
                Salary: ₹15-25 LPA | Strategic HR partner to business leaders
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="font-semibold">Level 5: HR Director / CHRO</h4>
              <p className="text-sm text-muted-foreground">
                Salary: ₹30L-1Cr+ | Lead entire HR function, shape company
                culture
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>HR Trends to Watch</h2>
          <p>Stay ahead by understanding where HR is heading:</p>

          <h3>AI in HR</h3>
          <ul>
            <li>
              <strong>AI Resume Screening:</strong> Automated candidate
              filtering and ranking
            </li>
            <li>
              <strong>Chatbots for HR:</strong> 24/7 employee query resolution
            </li>
            <li>
              <strong>Predictive Analytics:</strong> Forecasting attrition and
              engagement
            </li>
            <li>
              <strong>Personalized L&D:</strong> Customized learning
              recommendations
            </li>
          </ul>

          <h3>Remote Work Evolution</h3>
          <ul>
            <li>
              <strong>Hybrid policies:</strong> Balancing office and remote work
            </li>
            <li>
              <strong>Virtual onboarding:</strong> Integrating new hires
              remotely
            </li>
            <li>
              <strong>Remote engagement:</strong> Building culture across
              distances
            </li>
            <li>
              <strong>Digital collaboration:</strong> Managing distributed teams
            </li>
          </ul>

          <h3>Employee Wellbeing</h3>
          <ul>
            <li>
              <strong>Mental health support:</strong> EAPs, counseling, mental
              health days
            </li>
            <li>
              <strong>Financial wellness:</strong> Salary advances, financial
              literacy programs
            </li>
            <li>
              <strong>Work-life balance:</strong> Flexible hours, unlimited PTO
              experiments
            </li>
            <li>
              <strong>Physical health:</strong> Fitness benefits, ergonomic
              setups
            </li>
          </ul>

          <h3>DEI (Diversity, Equity, Inclusion)</h3>
          <ul>
            <li>
              <strong>Inclusive hiring:</strong> Removing bias from recruitment
              processes
            </li>
            <li>
              <strong>Pay equity:</strong> Transparent compensation practices
            </li>
            <li>
              <strong>Representation:</strong> Diverse leadership and boards
            </li>
            <li>
              <strong>Belonging:</strong> Creating inclusive workplace cultures
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>HR Certifications & Learning Paths</h2>

          <h3>Entry-Level (Free/Low Cost)</h3>
          <ul>
            <li>
              <strong>LinkedIn Learning:</strong> HR foundations, recruiting,
              employment law basics
            </li>
            <li>
              <strong>Coursera:</strong> HR management courses from top
              universities
            </li>
            <li>
              <strong>SHRM eLearning:</strong> Various introductory HR programs
            </li>
            <li>
              <strong>AIHR (Academy to Innovate HR):</strong> Digital HR
              programs
            </li>
          </ul>

          <h3>Professional Certifications</h3>
          <ul>
            <li>
              <strong>SHRM-CP/SCP:</strong> Most recognized global HR credential
            </li>
            <li>
              <strong>PHR/SPHR (HRCI):</strong> Industry-standard certifications
            </li>
            <li>
              <strong>LinkedIn Recruiter Certification:</strong> For recruitment
              specialists
            </li>
            <li>
              <strong>People Analytics Certificate:</strong> For data-focused HR
              roles
            </li>
          </ul>

          <h3>Recommended Reading</h3>
          <ul>
            <li>
              <strong>"Work Rules!"</strong> by Laszlo Bock - Google's HR
              philosophy
            </li>
            <li>
              <strong>"Powerful"</strong> by Patty McCord - Netflix culture
              insights
            </li>
            <li>
              <strong>"The HR Answer Book"</strong> - Practical HR solutions
            </li>
            <li>
              <strong>"Drive"</strong> by Daniel Pink - Understanding motivation
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Building Your HR Network</h2>
          <p>
            Networking is especially important in HR since it's a people-focused
            field:
          </p>

          <h3>LinkedIn Best Practices</h3>
          <ul>
            <li>
              Follow HR leaders and influencers (Dave Ulrich, Josh Bersin)
            </li>
            <li>Share learnings from your HR journey</li>
            <li>Engage thoughtfully on HR discussions</li>
            <li>Connect with HR professionals at target companies</li>
          </ul>

          <h3>Communities to Join</h3>
          <ul>
            <li>
              <strong>SHRM:</strong> Society for Human Resource Management
              (global)
            </li>
            <li>
              <strong>NHRD:</strong> National HRD Network (India)
            </li>
            <li>
              <strong>HR Slack communities:</strong> Various online groups
            </li>
            <li>
              <strong>College HR clubs:</strong> Build network during studies
            </li>
          </ul>

          <h3>Events and Conferences</h3>
          <ul>
            <li>SHRM Annual Conference</li>
            <li>People Matters TechHR</li>
            <li>NHRD National Conference</li>
            <li>Virtual HR webinars and summits</li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-teal-500 bg-teal-50 p-6 dark:bg-teal-950">
            <h4 className="mb-2 font-bold text-teal-900 dark:text-teal-100">
              Mentorship Matters
            </h4>
            <p className="mb-0 text-sm text-teal-800 dark:text-teal-200">
              Find an HR mentor early in your career. This could be your
              internship supervisor, a professor, or a senior HR professional
              you connect with. A good mentor can accelerate your learning,
              provide guidance on tough situations, and open doors to
              opportunities.
            </p>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Do I need an MBA in HR to start?
              </h3>
              <p className="text-muted-foreground">
                Not for internships or entry-level roles. Skills, attitude, and
                people orientation matter more initially. An MBA can help for
                senior positions and wider opportunities, but many successful HR
                professionals built careers without it.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is HR a good career in India?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Every company needs HR. With digital transformation,
                HR roles are becoming more strategic and well-compensated.
                People analytics, HR tech, and employee experience are hot areas
                with great growth potential.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the work-life balance like in HR?
              </h3>
              <p className="text-muted-foreground">
                Generally good compared to many other fields. Can get busy
                during hiring sprees, annual reviews, or policy changes.
                Corporate HR tends to be more stable; startup HR can be more
                demanding but offers faster learning.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is HR only for women?
              </h3>
              <p className="text-muted-foreground">
                No! While HR has traditionally had more women, this is changing.
                Diversity in HR teams brings better perspectives. Many
                successful CHROs are men. What matters is people skills, not
                gender.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I move from HR to other functions?
              </h3>
              <p className="text-muted-foreground">
                Yes! HR skills transfer well to operations, customer success,
                consulting, and general management. People analytics can lead to
                data roles. Many founders and CEOs have HR backgrounds.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How important are certifications in HR?
              </h3>
              <p className="text-muted-foreground">
                For entry-level, not critical—experience matters more.
                Certifications like SHRM, HRCI, or specific tool certifications
                can help later in career. Free LinkedIn Learning courses are a
                good start.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the difference between HR and recruiting?
              </h3>
              <p className="text-muted-foreground">
                Recruiting (Talent Acquisition) is one function within HR.
                Recruiting focuses on hiring; HR encompasses the entire employee
                lifecycle—onboarding, development, engagement, compensation,
                compliance, and exit. Many start in recruiting and expand.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I specialize or be a generalist in HR?
              </h3>
              <p className="text-muted-foreground">
                Start as a generalist to understand all functions. After 2-3
                years, specializing (recruiting, L&D, analytics) can boost your
                career. HR Business Partner roles require generalist experience.
                Specialization pays more but generalists have more flexibility.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What's the biggest challenge for new HR professionals?
              </h3>
              <p className="text-muted-foreground">
                Balancing employee advocacy with business needs. HR serves both
                employees and the organization—sometimes these conflict.
                Learning to navigate this tension while maintaining trust from
                both sides is the core challenge. Also, building credibility as
                a young professional in a field that deals with senior
                employees.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How can I show HR skills if I have no HR experience?
              </h3>
              <p className="text-muted-foreground">
                (1) Event organization demonstrates planning and coordination
                (2) Conflict resolution in any setting shows people skills (3)
                Teaching or mentoring shows training ability (4) Any customer-
                facing role demonstrates communication (5) Data analysis in any
                field is relevant (6) Volunteer work shows empathy and service.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What technology should HR professionals learn?
              </h3>
              <p className="text-muted-foreground">
                Basic: Excel, HRMS platforms (Zoho People, Darwinbox), LinkedIn.
                Intermediate: ATS systems, data visualization basics. Advanced:
                People analytics, Python for HR, AI tools for recruitment. Focus
                on being comfortable with technology—it's essential for modern
                HR.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I handle difficult conversations as an HR intern?
              </h3>
              <p className="text-muted-foreground">
                (1) Prepare thoroughly—know the facts (2) Stay calm and neutral
                (3) Listen more than you speak (4) Ask clarifying questions (5)
                Avoid taking sides (6) Document everything (7) Escalate to
                senior HR when needed (8) Maintain confidentiality always.
                Practice difficult conversations with mentors.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your HR Journey</h2>
          <p>
            HR is about understanding and supporting people. If you're
            empathetic, organized, and love working with people, HR is a great
            career choice.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best HR professionals started by caring about people. Start
            there. 💼
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Behavioral Interview Guide
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
                Based on insights from HR professionals across industries.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
