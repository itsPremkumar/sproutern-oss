import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Briefcase,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Heart,
  Star,
  Handshake,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Internship Exit: How to Leave on Good Terms',
  description:
    'Learn how to end your internship professionally. Get tips on last day etiquette, feedback requests, and maintaining relationships.',
  keywords: [
    'internship exit',
    'leaving internship',
    'internship last day',
    'internship resignation',
    'professional exit',
  ],
  openGraph: {
    title: 'Internship Exit: How to Leave on Good Terms',
    description: 'End your internship on a high note.',
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
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <Handshake className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Growth
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Internship Exit: How to Leave on Good Terms
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            How you end an internship matters as much as how you started. Leave
            lasting positive impressions for future opportunities.
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
              <span>12 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Exits Matter
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                2. Exit Timeline
              </a>
            </li>
            <li>
              <a
                href="#handover"
                className="text-primary hover:underline"
              >
                3. Knowledge Transfer
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                className="text-primary hover:underline"
              >
                4. Asking for Feedback
              </a>
            </li>
            <li>
              <a
                href="#lastday"
                className="text-primary hover:underline"
              >
                5. Last Day Checklist
              </a>
            </li>
            <li>
              <a
                href="#after"
                className="text-primary hover:underline"
              >
                6. Staying Connected
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
              <span>Your last impression is as important as your first</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Document your work for easy handover</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Request LinkedIn recommendations before leaving</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Stay connected—these contacts matter for years</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Why Exits Matter
          </h2>

          <p>Professional exits matter because:</p>
          <ul>
            <li>Former colleagues become future references</li>
            <li>Industries are smaller than you think—reputation travels</li>
            <li>Burning bridges closes doors forever</li>
            <li>You might return as a full-time employee later</li>
          </ul>
        </section>

        {/* Section 2: Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            2. Exit Timeline
          </h2>

          <ul>
            <li>
              <strong>2 weeks before:</strong> Confirm end date with manager
            </li>
            <li>
              <strong>1 week before:</strong> Start documentation and handover
            </li>
            <li>
              <strong>3 days before:</strong> Request feedback and
              recommendations
            </li>
            <li>
              <strong>Last day:</strong> Final handover, thank you notes,
              farewell
            </li>
          </ul>
        </section>

        {/* Section 3: Handover */}
        <section
          id="handover"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            3. Knowledge Transfer
          </h2>

          <p>Create a handover document with:</p>
          <ul>
            <li>Projects you worked on and their status</li>
            <li>Access and credentials (to be shared securely)</li>
            <li>Pending tasks and next steps</li>
            <li>Key contacts and resources</li>
            <li>Documentation of any processes you created</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> A good handover document shows
              professionalism. Managers remember this.
            </div>
          </div>
        </section>

        {/* Section 4: Feedback */}
        <section
          id="feedback"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            4. Asking for Feedback
          </h2>

          <p>Before you leave, ask your manager:</p>
          <ul>
            <li>"What did I do well?"</li>
            <li>"What could I have done better?"</li>
            <li>"What skills should I develop for my next role?"</li>
            <li>
              "Would you be willing to write me a LinkedIn recommendation?"
            </li>
          </ul>
        </section>

        {/* Section 5: Last Day */}
        <section
          id="lastday"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            5. Last Day Checklist
          </h2>

          <ul>
            <li>Submit final handover document</li>
            <li>Return any company property (laptop, ID, etc.)</li>
            <li>Send thank you email to manager and team</li>
            <li>Connect on LinkedIn with key people</li>
            <li>Exchange personal contact info with close colleagues</li>
            <li>Collect experience certificate if applicable</li>
          </ul>
        </section>

        {/* Section 6: After */}
        <section
          id="after"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            6. Staying Connected
          </h2>

          <ul>
            <li>Send a personal thank you message to key mentors</li>
            <li>Share updates on LinkedIn occasionally</li>
            <li>Reach out on work anniversaries or achievements</li>
            <li>Offer to help if they reach out later</li>
          </ul>
        </section>

        {/* New comprehensive sections */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Giving Proper Notice
          </h2>
          <p>
            Even though internships have end dates, professional courtesy
            requires confirming your departure plans. Here's how to handle
            various scenarios:
          </p>

          <h3>When Your Internship Has a Set End Date</h3>
          <ul>
            <li>
              <strong>Two weeks before:</strong> Confirm with your manager that
              you'll be completing as scheduled
            </li>
            <li>
              <strong>Discuss transition:</strong> Ask how they'd like you to
              wrap up and what documentation they need
            </li>
            <li>
              <strong>Don't just disappear:</strong> Some interns assume "the
              date is known" and don't communicate—this is a mistake
            </li>
          </ul>

          <h3>When You Need to Leave Early</h3>
          <p>Life happens. If you need to end your internship early:</p>
          <ul>
            <li>
              Give as much notice as possible (minimum 2 weeks if unpaid, more
              for paid positions)
            </li>
            <li>
              Have a conversation (don't email or text)—explain your situation
              honestly
            </li>
            <li>
              Offer solutions: Can you work part-time? Complete critical tasks
              remotely?
            </li>
            <li>
              Be apologetic but professional: "I've had an unexpected
              opportunity that I need to pursue. I want to make this transition
              as smooth as possible."
            </li>
          </ul>

          <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-950">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-yellow-900 dark:text-yellow-100">
              <Lightbulb className="h-5 w-5" />
              Important: Don't Burn Bridges
            </h4>
            <p className="mb-0 text-sm text-yellow-800 dark:text-yellow-200">
              Leaving early can damage relationships, but how you handle it
              makes all the difference. Be honest, grateful, and helpful. Most
              managers will understand if you communicate professionally.
            </p>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Creating Your Handover Documentation
          </h2>
          <p>
            A comprehensive handover document is your legacy. It shows
            professionalism and makes you memorable for the right reasons.
          </p>

          <h3>Essential Components of a Handover Document</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">1. Project Overview</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                List all projects you worked on with:
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Project name and objective</li>
                <li>• Current status (completed, in-progress, on-hold)</li>
                <li>• Key stakeholders</li>
                <li>• Important dates and deadlines</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">2. Access & Credentials</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Document all tools and systems you had access to:
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Software platforms and login details</li>
                <li>• Shared drives and folder locations</li>
                <li>• Email groups or distribution lists</li>
                <li>• API keys or access tokens (share securely)</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">3. Process Documentation</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                If you created or managed any processes:
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Step-by-step instructions</li>
                <li>• Screenshots or diagrams</li>
                <li>• Common issues and solutions</li>
                <li>• Tips for optimization</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">4. Contacts & Resources</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Create a reference guide with:
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Key internal contacts and their roles</li>
                <li>• External vendors or partners</li>
                <li>• Useful internal documentation links</li>
                <li>• Relevant Slack channels or Teams groups</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">5. Pending Items</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                List what's not finished:
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Tasks in progress and their priority</li>
                <li>• Blockers or dependencies</li>
                <li>• Recommended next steps</li>
                <li>• Who to hand off to</li>
              </ul>
            </div>
          </div>

          <h3>Sample Handover Document Template</h3>
          <div className="my-6 rounded-lg bg-muted p-6">
            <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
              {`INTERNSHIP HANDOVER DOCUMENT
Intern: [Your Name]
Department: [Department]
Period: [Start Date] - [End Date]
Manager: [Manager Name]

=== PROJECTS COMPLETED ===

Project: [Project Name]
Status: Completed
Description: [Brief description]
Deliverables: [What you delivered]
Location: [Where files are stored]

=== ONGOING PROJECTS ===

Project: [Project Name]
Status: 75% complete
Next Steps: 
  1. [Next action item]
  2. [Second action item]
Owner: [Who should take over]
Deadline: [Important date]

=== ACCESS & TOOLS ===

- Platform Name: [Login/Access details]
- Shared Drive: [Path/Link]
- Important Files: [Links to key documents]

=== KEY CONTACTS ===

- [Name] - [Role] - [What they help with]
- [Name] - [Role] - [What they help with]

=== RECOMMENDATIONS ===

[Any suggestions for improvements or things to watch out for]

=== QUESTIONS? ===

Feel free to reach out: [Your personal email]`}
            </pre>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            Writing Thank You Messages
          </h2>
          <p>
            Gratitude goes a long way. Send personalized thank you messages to
            key people who helped you during your internship.
          </p>

          <h3>Thank You Email Template for Your Manager</h3>
          <div className="my-6 rounded-lg bg-muted p-6">
            <p className="mb-2 text-xs font-semibold">
              Subject: Thank You - [Your Name] Internship
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
              {`Dear [Manager Name],

As my internship comes to an end, I wanted to express my sincere gratitude for the opportunity to work with [Team Name] at [Company].

Over the past [X months], I've learned invaluable skills including [specific skill 1], [specific skill 2], and [specific skill 3]. Your mentorship on [specific project or situation] was particularly impactful and has significantly shaped my career direction.

I'm especially grateful for [specific opportunity or experience they provided—e.g., "the chance to present to senior leadership" or "your patient guidance on the XYZ project"].

I've left comprehensive documentation for all my projects and would be happy to answer any questions during the transition. Please feel free to reach out anytime at [your personal email].

Thank you again for everything. I look forward to staying in touch!

Best regards,
[Your Name]`}
            </pre>
          </div>

          <h3>LinkedIn Thank You Post Template</h3>
          <div className="my-6 rounded-lg bg-muted p-6">
            <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
              {`As my internship at [Company] comes to an end, I'm incredibly grateful 
for the experience and the amazing people I've worked with.

Key learnings:
📊 [Skill or experience 1]
💡 [Skill or experience 2]
🚀 [Skill or experience 3]

Special thanks to [Manager Name], [Mentor Name], and the entire 
[Team Name] for your guidance and support.

Looking forward to applying these skills in my next role!

#Internship #[Industry] #CareerGrowth #[Company]`}
            </pre>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Requesting LinkedIn Recommendations
          </h2>
          <p>
            LinkedIn recommendations are powerful social proof. Request them
            before you leave when the experience is fresh.
          </p>

          <h3>When to Ask</h3>
          <ul>
            <li>3-5 days before your last day (not on the last day)</li>
            <li>After completing a major project successfully</li>
            <li>When you've received positive feedback</li>
          </ul>

          <h3>How to Ask</h3>
          <div className="my-6 rounded-lg bg-muted p-6">
            <p className="mb-2 text-xs font-semibold">
              Sample Request Message:
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
              {`Hi [Manager/Colleague Name],

I hope you're doing well! As my internship is wrapping up, I've been 
reflecting on everything I've learned while working with you on [Team/Project].

Would you be willing to write me a brief LinkedIn recommendation? Your 
perspective on [specific skill or project] would mean a lot to me as I 
continue my career.

I'd be happy to write one for you as well, or if you'd prefer, I can draft 
something for your review to make it easier.

Thank you for everything!

Best,
[Your Name]`}
            </pre>
          </div>

          <h3>Pro Tips for Recommendations</h3>
          <ul>
            <li>
              <strong>Make it easy:</strong> Offer to draft a recommendation for
              them to review/edit
            </li>
            <li>
              <strong>Be specific:</strong> Mention particular projects or
              skills you'd like them to highlight
            </li>
            <li>
              <strong>Reciprocate:</strong> Offer to write one for them too
            </li>
            <li>
              <strong>Follow up gently:</strong> If they agree but forget, send
              a kind reminder after a week
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Exit Interview Best Practices
          </h2>
          <p>
            Some companies conduct exit interviews with interns. This is your
            chance to provide constructive feedback that helps future interns.
          </p>

          <h3>What to Share</h3>
          <ul>
            <li>
              <strong>Be honest but diplomatic:</strong> Share genuine feedback
              without being harsh
            </li>
            <li>
              <strong>Focus on systemic issues:</strong> Not individual
              personalities
            </li>
            <li>
              <strong>Offer solutions:</strong> Don't just complain; suggest
              improvements
            </li>
            <li>
              <strong>Highlight positives:</strong> Balance any criticisms with
              what worked well
            </li>
          </ul>

          <h3>Sample Feedback Areas</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">Onboarding Process</h4>
              <p className="text-xs text-muted-foreground">
                "The first week orientation was helpful, but access to tools
                took too long. Suggest preparing accounts before Day 1."
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">Learning Opportunities</h4>
              <p className="text-xs text-muted-foreground">
                "Weekly lunch-and-learns were excellent. More shadowing
                opportunities would enhance learning."
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">Management & Mentorship</h4>
              <p className="text-xs text-muted-foreground">
                "My manager was supportive. Regular 1:1s helped track progress.
                Peer mentorship could be formalized."
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-semibold">Project Assignments</h4>
              <p className="text-xs text-muted-foreground">
                "Projects were meaningful and challenging. Clearer success
                metrics would help interns understand expectations."
              </p>
            </div>
          </div>

          <h3>What NOT to Say</h3>
          <ul>
            <li>Personal attacks on individuals</li>
            <li>Complaints without context or solutions</li>
            <li>Confidential information about other interns</li>
            <li>Anything you wouldn't want your manager to hear</li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Common Exit Mistakes to Avoid
          </h2>
          <p>
            Learn from others' mistakes. Here are the most common ways interns
            damage their reputation during exits:
          </p>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Ghosting on the Last Day
              </h4>
              <p className="mb-1 text-sm text-red-800 dark:text-red-200">
                Some interns just... disappear. No goodbye, no handover,
                nothing.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Impact: You'll never get a reference from this company.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Badmouthing the Company
              </h4>
              <p className="mb-1 text-sm text-red-800 dark:text-red-200">
                Posting negative reviews or venting on social media about your
                experience.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Impact: This can follow you. Industries are smaller than you
                think.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Slacking Off in the Final Week
              </h4>
              <p className="mb-1 text-sm text-red-800 dark:text-red-200">
                Mentally checking out and doing minimal work during your last
                days.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Impact: Your last impression erases months of good work.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Taking Company Property
              </h4>
              <p className="mb-1 text-sm text-red-800 dark:text-red-200">
                "Borrowing" company swag, equipment, or anything else
                permanently.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Impact: This is theft. Legal consequences possible.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Not Responding After You Leave
              </h4>
              <p className="mb-1 text-sm text-red-800 dark:text-red-200">
                Ignoring questions about your work or handover after your last
                day.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Impact: Burning bridges. They remember this.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Overpromising to Stay in Touch
              </h4>
              <p className="mb-1 text-sm text-red-800 dark:text-red-200">
                Saying "let's grab coffee!" to everyone then never following
                through.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                Impact: Better to say less and follow through than promise
                everything.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            Building Long-Term Professional Relationships
          </h2>
          <p>
            Your internship colleagues are now part of your professional
            network. Here's how to maintain those relationships long-term:
          </p>

          <h3>Immediate Post-Internship (First Month)</h3>
          <ul>
            <li>
              Send personalized thank you messages to 5-10 key people (not
              generic)
            </li>
            <li>Connect on LinkedIn with thoughtful connection notes</li>
            <li>
              Share your next steps (new job, school, etc.) in a brief update
            </li>
            <li>Respond promptly if anyone reaches out</li>
          </ul>

          <h3>Short-Term (2-6 Months)</h3>
          <ul>
            <li>
              Engage with their LinkedIn posts occasionally (genuine comments,
              not just likes)
            </li>
            <li>
              Share relevant articles or opportunities that might interest them
            </li>
            <li>
              If you attended an event or conference, send a quick "thought of
              you when I heard about X"
            </li>
            <li>Congratulate them on work anniversaries or promotions</li>
          </ul>

          <h3>Long-Term (6+ Months)</h3>
          <ul>
            <li>Check in 2-3 times per year with updates on your progress</li>
            <li>
              Attend company events if invited (alumni mixers, networking
              events)
            </li>
            <li>
              Offer help when you can ("I saw your company is hiring for X - I
              know someone perfect")
            </li>
            <li>
              Meet for coffee if you're in the same city (but don't take up too
              much time)
            </li>
          </ul>

          <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
            <h4 className="mb-2 flex items-center gap-2 font-bold text-blue-900 dark:text-blue-100">
              <Lightbulb className="h-5 w-5" />
              The "Give First" Mentality
            </h4>
            <p className="mb-0 text-sm text-blue-800 dark:text-blue-200">
              Don't only reach out when you need something. Share interesting
              articles, make introductions, or offer help before asking for
              favors. Networking is about building genuine relationships, not
              transactional exchanges.
            </p>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Converting Your Internship to a Full-Time Offer
          </h2>
          <p>
            Many internships lead to full-time positions. Here's how to maximize
            your chances during your exit:
          </p>

          <h3>Indicators You Might Get an Offer</h3>
          <ul>
            <li>Your manager asks about your post-graduation plans</li>
            <li>You're invited to "extended stay" conversations</li>
            <li>They ask you to train other interns or new hires</li>
            <li>You're included in long-term project planning</li>
            <li>HR reaches out to discuss your experience</li>
          </ul>

          <h3>How to Express Interest (If No Offer Yet)</h3>
          <p>In your final 1:1 with your manager:</p>
          <div className="my-6 rounded-lg bg-muted p-6">
            <p className="text-sm italic">
              "I've absolutely loved my time here and learned so much from you
              and the team. I'm graduating in [Month/Year], and [Company Name]
              would be my top choice for a full-time role. If there's a
              possibility of that, I'd love to discuss what that might look
              like."
            </p>
          </div>

          <h3>If They Can't Offer Now</h3>
          <ul>
            <li>Ask about staying in touch for future openings</li>
            <li>Request to be notified when positions open</li>
            <li>
              Ask what you should work on to be a stronger candidate later
            </li>
            <li>Maintain the relationship—timing matters in hiring</li>
          </ul>

          <h3>If You Get an Offer</h3>
          <ul>
            <li>
              <strong>Express gratitude:</strong> Even if negotiating, start
              with appreciation
            </li>
            <li>
              <strong>Ask for time:</strong> Request 1-2 weeks to consider (this
              is normal)
            </li>
            <li>
              <strong>Negotiate professionally:</strong> Research market rates
              and make data-driven requests
            </li>
            <li>
              <strong>Get it in writing:</strong> Verbal offers aren't official
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Leveraging Alumni Networks
          </h2>
          <p>
            Many companies have intern alumni networks or groups. These can be
            valuable for your career.
          </p>

          <h3>Benefits of Intern Alumni Networks</h3>
          <ul>
            <li>
              <strong>Job opportunities:</strong> Many companies recruit from
              former interns first
            </li>
            <li>
              <strong>Industry connections:</strong> Your cohort disperses
              across the industry
            </li>
            <li>
              <strong>Mentorship:</strong> Senior alumni can guide your career
            </li>
            <li>
              <strong>Social proof:</strong> "Former X Intern" on LinkedIn
              carries weight
            </li>
          </ul>

          <h3>How to Stay Active</h3>
          <ul>
            <li>
              Join official intern alumni Slack/Discord channels if they exist
            </li>
            <li>Attend alumni events (virtual or in-person)</li>
            <li>Contribute to alumni mentorship programs</li>
            <li>
              Share job opportunities with the network when you find good roles
            </li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Frequently Asked Questions</h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I give a gift to my manager or team?
              </h3>
              <p className="text-muted-foreground">
                A small, thoughtful gift is nice but not required. A handwritten
                thank you note often means more than a gift. If you do give
                something, keep it under $25 and company-appropriate (no alcohol
                unless you know the culture well).
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I had a bad internship experience?
              </h3>
              <p className="text-muted-foreground">
                Still exit professionally. You can maintain boundaries without
                burning bridges. Be polite, complete your handover, and move on.
                You don't have to pretend it was perfect, but don't trash-talk
                the company publicly.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I ask for a reference letter?
              </h3>
              <p className="text-muted-foreground">
                LinkedIn recommendations are more common than formal letters
                now. If you need a letter, ask 3-5 days before your last day,
                explain what it's for, and offer to draft something they can
                edit. Give them 1-2 weeks to complete it.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I connect with everyone on LinkedIn?
              </h3>
              <p className="text-muted-foreground">
                Connect with people you actually worked with or built
                relationships with. Quality over quantity. Add a personalized
                note reminding them how you know each other.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I list the internship on my resume before it ends?
              </h3>
              <p className="text-muted-foreground">
                Yes! Use "Present" as the end date and update it after you
                finish. Just make sure the description accurately reflects the
                work you've completed so far.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if my manager never gave me feedback during the internship?
              </h3>
              <p className="text-muted-foreground">
                Still ask! Schedule a dedicated exit meeting specifically for
                feedback. Frame it as: "I'd love to hear your perspective on my
                performance and what I should focus on developing for my next
                role."
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How long should I wait before reaching out to my former
                colleagues?
              </h3>
              <p className="text-muted-foreground">
                For thank you messages, within the first week after leaving. For
                other outreach, wait 2-4 weeks so they don't feel immediately
                bombarded. After that, periodic check-ins every 2-3 months are
                appropriate.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What should I do with company files and work I created?
              </h3>
              <p className="text-muted-foreground">
                Do NOT take confidential company files with you. If you created
                work samples you want for your portfolio, ask permission first
                and remove any confidential information. Many companies prohibit
                taking work products.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is it OK to post about my internship ending on social media?
              </h3>
              <p className="text-muted-foreground">
                Yes, a gracious LinkedIn post is actually recommended! Keep it
                positive, grateful, and professional. Thank the company and
                people by name, share what you learned, and tag the company's
                official page.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Leave Your Mark</h2>
          <p>
            A great exit is your last chance to make a lasting impression. Be
            professional, grateful, and thorough. These relationships will serve
            you throughout your career.
          </p>
          <p className="text-lg font-semibold text-primary">
            The end of one chapter is the beginning of another. End well. 🤝
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/convert-internship-to-job-offer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Convert Internship to Job
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking Guide
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
                Based on feedback from HR managers and successful interns.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
