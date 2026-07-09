import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  Target,
  CheckCircle,
  Star,
  Users,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Convert Your Internship to Job Offer',
  description:
    'Proven strategies to turn your internship into a job offer. Learn exactly what managers look for, how to stand out, and when to make your move for full-time conversion.',
  keywords: [
    'convert internship to job',
    'internship to full time',
    'get job offer from internship',
    'internship conversion',
    'PPO',
    'pre-placement offer',
  ],
  openGraph: {
    title: 'From Intern to Full-Time: Complete Conversion Guide',
    description:
      'Proven strategies to convert your internship into a job offer.',
    type: 'article',
    publishedTime: '2025-09-28T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-green-600">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Career Growth
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            From Intern to Full-Time: How to Convert Your Internship into a Job
            Offer
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Your internship is a 3-6 month interview. Learn the exact strategies
            that lead to PPO (Pre-Placement Offers) at top companies.
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
              <span>18 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Internship Conversion Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">60-70%</span>
              <span>average conversion rate at top tech companies</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">90%+</span>
              <span>conversion rate for top-performing interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">Week 4-6</span>
              <span>when managers form their initial assessment</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-green-600">
                ₹8-25 LPA
              </span>
              <span>typical full-time offers at startups/MNCs</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                1. The Conversion Timeline
              </a>
            </li>
            <li>
              <a
                href="#first-week"
                className="text-primary hover:underline"
              >
                2. Nailing Your First Week
              </a>
            </li>
            <li>
              <a
                href="#stand-out"
                className="text-primary hover:underline"
              >
                3. How to Stand Out
              </a>
            </li>
            <li>
              <a
                href="#relationships"
                className="text-primary hover:underline"
              >
                4. Building Key Relationships
              </a>
            </li>
            <li>
              <a
                href="#visibility"
                className="text-primary hover:underline"
              >
                5. Getting Visible
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                className="text-primary hover:underline"
              >
                6. Seeking & Acting on Feedback
              </a>
            </li>
            <li>
              <a
                href="#conversation"
                className="text-primary hover:underline"
              >
                7. The Conversion Conversation
              </a>
            </li>
            <li>
              <a
                href="#checklist"
                className="text-primary hover:underline"
              >
                8. Complete Checklist
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            An internship is more than just a temporary job—it's a months-long
            interview for a full-time position. Companies use internships to
            evaluate potential hires in real-world settings. If you love the
            company and want to stay, your goal should be to make yourself so
            valuable that they can't imagine letting you go.
          </p>
          <p>
            This guide covers the exact strategies that lead to PPO
            (Pre-Placement Offers) at companies like Google, Amazon, Flipkart,
            and hundreds of startups we work with.
          </p>
        </section>

        {/* Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. The Conversion Timeline
          </h2>

          <p>
            Understanding when and how decisions are made helps you strategize:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-bold">
                📅 Week 1-2: Onboarding & First Impressions
              </p>
              <p className="text-sm text-muted-foreground">
                Set up your environment, meet the team, understand the
                codebase/processes. First impressions matter!
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
              <p className="font-bold">📅 Week 3-6: Proving Yourself</p>
              <p className="text-sm text-muted-foreground">
                Deliver your first meaningful contribution. Managers form their
                initial assessment during this period.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <p className="font-bold">📅 Week 7-10: Building Momentum</p>
              <p className="text-sm text-muted-foreground">
                Take on bigger projects. Start having informal conversations
                about your future.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <p className="font-bold">📅 Final 2 Weeks: Conversion Decision</p>
              <p className="text-sm text-muted-foreground">
                Formal review happens. Have the explicit conversation about
                full-time opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* First Week */}
        <section
          id="first-week"
          className="scroll-mt-20"
        >
          <h2>2. Nailing Your First Week</h2>

          <p>
            The first week sets the tone for your entire internship. Here's how
            to start strong:
          </p>

          <h3>Do's</h3>
          <ul>
            <li>
              <strong>Arrive early</strong> (or log in early if remote)
            </li>
            <li>
              <strong>Dress appropriately</strong> - match or slightly exceed
              the team's dress code
            </li>
            <li>
              <strong>Take extensive notes</strong> - you'll forget 90% of what
              you hear
            </li>
            <li>
              <strong>Learn names quickly</strong> - use memory techniques if
              needed
            </li>
            <li>
              <strong>Set up your environment</strong> - get all tools,
              accesses, and systems ready ASAP
            </li>
            <li>
              <strong>Ask your manager</strong> what success looks like for your
              internship
            </li>
          </ul>

          <h3>Don'ts</h3>
          <ul>
            <li>
              ❌ Don't stay silent in meetings - ask at least one question
            </li>
            <li>
              ❌ Don't wait to be told everything - take initiative to learn
            </li>
            <li>
              ❌ Don't decline social invitations - join lunches and coffee
              chats
            </li>
            <li>❌ Don't work in isolation - sit near your team if possible</li>
          </ul>
        </section>

        {/* Stand Out */}
        <section
          id="stand-out"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            3. How to Stand Out as an Intern
          </h2>

          <p>
            Most interns do good work. To get a full-time offer, you need to be{' '}
            <strong>exceptional</strong>. Here's what separates converts from
            non-converts:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">Average Intern</h4>
              <ul className="space-y-1 text-sm">
                <li>• Completes assigned tasks</li>
                <li>• Waits for instructions</li>
                <li>• Asks how to do things</li>
                <li>• Focuses only on their project</li>
                <li>• Leaves at 5pm sharp</li>
              </ul>
            </div>
            <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 font-bold text-green-700">
                Exceptional Intern (Gets Offer)
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Exceeds expectations on tasks</li>
                <li>• Anticipates needs and proposes solutions</li>
                <li>• Asks why things are done a certain way</li>
                <li>• Helps teammates and learns adjacent areas</li>
                <li>• Stays when needed, leaves when not</li>
              </ul>
            </div>
          </div>

          <h3>The 3 Things Managers Look For</h3>
          <ol>
            <li>
              <strong>Technical/Functional Competence:</strong> Can you do the
              job well?
            </li>
            <li>
              <strong>Cultural Fit:</strong> Do you work well with the team?
            </li>
            <li>
              <strong>Growth Potential:</strong> Will you become a valuable
              long-term asset?
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Under-promise and over-deliver. If you
              think a task will take 3 days, say 4. Then deliver in 2.5. This
              builds a reputation for reliability.
            </div>
          </div>
        </section>

        {/* Relationships */}
        <section
          id="relationships"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            4. Building Key Relationships
          </h2>

          <p>
            Your network within the company significantly impacts your
            conversion chances:
          </p>

          <h3>Key People to Connect With</h3>
          <ul>
            <li>
              <strong>Your Manager:</strong> Primary decision-maker for your
              offer
            </li>
            <li>
              <strong>Your Mentor/Buddy:</strong> Often consulted during review
            </li>
            <li>
              <strong>Team Members:</strong> Their feedback matters in team
              discussions
            </li>
            <li>
              <strong>Skip-Level Manager:</strong> Builds broader visibility
            </li>
            <li>
              <strong>Other Interns:</strong> Support system and potential
              future colleagues
            </li>
            <li>
              <strong>HR/People Team:</strong> Handles the actual offer process
            </li>
          </ul>

          <h3>How to Build Relationships</h3>
          <ul>
            <li>Schedule 1-on-1 coffee chats (15-20 mins)</li>
            <li>Ask about their career path and learnings</li>
            <li>Offer to help when you see opportunities</li>
            <li>Share interesting articles/resources relevant to their work</li>
            <li>
              Remember personal details they share (hobbies, family, etc.)
            </li>
          </ul>
        </section>

        {/* Visibility */}
        <section
          id="visibility"
          className="scroll-mt-20"
        >
          <h2>5. Getting Visible (Without Being Annoying)</h2>

          <p>
            Good work that nobody knows about won't help you get converted.
            Here's how to build visibility authentically:
          </p>

          <h3>High-Visibility Strategies</h3>
          <ul>
            <li>
              <strong>Present your work:</strong> Volunteer to present in team
              meetings
            </li>
            <li>
              <strong>Document and share:</strong> Write internal blog posts,
              documentation
            </li>
            <li>
              <strong>Join company events:</strong> Hackathons, town halls,
              volunteer activities
            </li>
            <li>
              <strong>Solve visible problems:</strong> Fix bugs that affect the
              whole team
            </li>
            <li>
              <strong>Help others:</strong> Answer questions in Slack, pair with
              teammates
            </li>
          </ul>

          <h3>Keep a "Brag Document"</h3>
          <div className="my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="mb-2 font-bold">Weekly Log Template:</p>
            <p>
              <strong>Week of:</strong> Oct 15-19
            </p>
            <p>
              <strong>Completed:</strong> Implemented payment integration, wrote
              40% of unit tests
            </p>
            <p>
              <strong>Impact:</strong> Reduced checkout time by 2 seconds, 3
              bugs prevented
            </p>
            <p>
              <strong>Positive Feedback:</strong> "Great attention to edge
              cases" - Senior Dev
            </p>
            <p>
              <strong>Learnings:</strong> Learned Redis caching from tech lead
              session
            </p>
          </div>
        </section>

        {/* Feedback */}
        <section
          id="feedback"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            6. Seeking & Acting on Feedback
          </h2>

          <p>
            Don't wait for your mid-internship review. Proactive
            feedback-seeking shows maturity and growth mindset.
          </p>

          <h3>How to Ask for Feedback</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              "Hey [Manager], I'm really enjoying my internship and want to make
              sure I'm meeting your expectations. Could we schedule 15 minutes
              this week for some feedback? I'd love to know:
            </p>
            <p className="mt-2">
              1. What's going well that I should keep doing?
            </p>
            <p>2. What could I improve on?</p>
            <p>3. Any skills I should focus on developing?"</p>
          </div>

          <h3>Acting on Feedback</h3>
          <ol>
            <li>
              <strong>Listen without defensiveness</strong> - Don't explain or
              justify
            </li>
            <li>
              <strong>Take notes</strong> - Shows you take it seriously
            </li>
            <li>
              <strong>Ask clarifying questions</strong> - "Can you give me an
              example?"
            </li>
            <li>
              <strong>Create an action plan</strong> - What will you do
              differently?
            </li>
            <li>
              <strong>Follow up</strong> - "I worked on X you mentioned. How am
              I doing?"
            </li>
          </ol>

          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 text-sm font-bold">
              ✅ The Follow-Up That Gets Noticed
            </p>
            <p className="text-sm">
              "Last week you mentioned I could be more proactive in meetings.
              I've started preparing 2-3 questions before each standup and
              volunteered to present our sprint demo. How is that landing?"
            </p>
          </div>
        </section>

        {/* Conversation */}
        <section
          id="conversation"
          className="scroll-mt-20"
        >
          <h2>7. The Conversion Conversation</h2>

          <p>
            Towards the end of your internship, you need to have an explicit
            conversation about your future. Don't leave it to chance.
          </p>

          <h3>Timing</h3>
          <ul>
            <li>Ideally 2-3 weeks before your internship ends</li>
            <li>After your formal performance review if there is one</li>
            <li>Schedule a dedicated 1-on-1 (not a quick hallway chat)</li>
          </ul>

          <h3>How to Have The Conversation</h3>
          <div className="my-4 rounded-lg bg-muted p-4 font-mono text-sm">
            <p>
              "[Manager], I've really enjoyed my time here at [Company]. The
              work, the team, and the culture have exceeded my expectations. I'd
              love to explore the possibility of returning full-time after I
              graduate.
            </p>
            <br />
            <p>
              Could you tell me about the conversion process? What would it take
              for me to receive a full-time offer?"
            </p>
          </div>

          <h3>If There's No Opening</h3>
          <ul>
            <li>Ask for a strong recommendation letter</li>
            <li>Request to stay connected for future opportunities</li>
            <li>
              Ask what skills would make you a stronger candidate next time
            </li>
            <li>
              Leave on excellent terms - you never know when paths cross again
            </li>
          </ul>
        </section>

        {/* Checklist */}
        <section
          id="checklist"
          className="not-prose scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <CheckCircle className="h-6 w-6 text-primary" />
            8. Complete Conversion Checklist
          </h2>

          <div className="space-y-2">
            {[
              'Set up 1-on-1s with your manager (weekly or bi-weekly)',
              'Schedule coffee chats with 5+ team members',
              'Ask your manager what success looks like for your internship',
              'Complete your first meaningful task within 2-3 weeks',
              'Volunteer to present your work in a team meeting',
              'Ask for mid-point feedback (not just end-of-internship)',
              'Document your accomplishments weekly in a brag doc',
              'Learn something beyond your immediate project scope',
              'Help at least 2 teammates with their work',
              'Join at least one company event/hackathon/social',
              'Have the explicit conversion conversation 2-3 weeks before end',
              'Leave with strong relationships regardless of outcome',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Mistakes That Kill Conversion Chances
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Treating it like a temp job
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Working just enough to get by. Companies notice when interns
                  are not invested. Act like you already have the job.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Staying invisible
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Doing good work but never sharing it. If decision-makers don't
                  know your contributions, they can't advocate for you.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Waiting until the last week
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Deciding in the final days that you want to stay. By then,
                  decisions are often already made. Start early.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Not building relationships
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Focusing only on work and not connecting with people. Hiring
                  decisions often include "would I want to work with them
                  daily?"
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Being defensive about feedback
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Explaining or justifying when given feedback. This signals low
                  coachability—a red flag for full-time hiring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Converted by solving the right problem..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Noticed the team struggled with a manual process. Built a small
                tool in my spare time that saved 2 hours/week. My manager was so
                impressed he created a position for me." — Rohan, Flipkart
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Relationships made the difference..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "My direct team couldn't hire, but a coffee chat with another PM
                led to a referral. Got an offer from a different team at the
                same company. Network pays off!" — Priya, Google
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Feedback was the key..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Asked for feedback at week 4. Manager said I was too quiet in
                meetings. Changed my behavior immediately. At the end-review, he
                specifically mentioned my improvement as why I got the offer." —
                Amit, Amazon
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            More Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if my manager doesn't have hiring authority?
              </h3>
              <p className="text-muted-foreground">
                Find out who does. Ask your manager to connect you with hiring
                decision-makers. Their recommendation still carries weight.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How many interns typically get converted?
              </h3>
              <p className="text-muted-foreground">
                Varies by company and team. At top tech companies, 60-70% of
                interns get offers. At startups, it depends on funding and
                headcount needs.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I negotiate the PPO offer?
              </h3>
              <p className="text-muted-foreground">
                Yes, but carefully. Negotiation is expected, but don't be
                aggressive for entry-level roles. Focus on significant gaps from
                market rate, not minor differences.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I'm not sure I want to stay?
              </h3>
              <p className="text-muted-foreground">
                Still aim for the offer. It's easier to decline an offer than to
                not have one. The offer validates your work and gives you
                options.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Does my college/branch matter for conversion?
              </h3>
              <p className="text-muted-foreground">
                Less than you think. Once you're in, performance matters most.
                Managers evaluate you on your work, not your degree.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I made mistakes during the internship?
              </h3>
              <p className="text-muted-foreground">
                Everyone makes mistakes. What matters is how you handle them.
                Acknowledge, learn, improve, and don't repeat. Managers expect
                learning curves.
              </p>
            </div>
          </div>
        </section>

        {/* Week-by-Week Focus */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            Week-by-Week Focus Areas
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Week</th>
                  <th className="border p-3 text-left font-semibold">
                    Primary Focus
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    Key Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">1-2</td>
                  <td className="border p-3">Learning & Setup</td>
                  <td className="border p-3">
                    Learn codebase, meet team, clarify expectations
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">3-4</td>
                  <td className="border p-3">First Delivery</td>
                  <td className="border p-3">
                    Complete first task, ask for feedback
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">5-6</td>
                  <td className="border p-3">Building Momentum</td>
                  <td className="border p-3">
                    Take ownership, volunteer for more
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">7-8</td>
                  <td className="border p-3">Visibility</td>
                  <td className="border p-3">
                    Present work, help others, network
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">9-10</td>
                  <td className="border p-3">Conversion</td>
                  <td className="border p-3">
                    Have the conversation, close strong
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Conclusion: Make Them Want to Keep You</h2>

          <p>
            Converting an internship isn't about luck—it's about strategy. Treat
            your internship as an extended interview, build genuine
            relationships, exceed expectations, and make your intentions clear.
          </p>

          <p>
            Even if you don't get an offer, a well-executed internship gives you
            skills, experience, and references that will accelerate your career.
            But if you follow this guide, you'll give yourself the best possible
            chance.
          </p>

          <p>
            Remember: companies don't just hire for skills. They hire for
            potential, attitude, and cultural fit. Show them you have all three,
            and the offer will follow.
          </p>

          <p className="text-lg font-semibold text-primary">
            Make yourself so valuable they can't imagine the team without you.
            🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ultimate-guide-first-internship"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Ultimate Internship Guide
            </Link>
            <Link
              href="/blog/time-management-for-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Time Management for Interns
            </Link>
            <Link
              href="/blog/student-networking-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking Guide
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
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Our team has helped 5,000+ interns convert to full-time roles at
                companies ranging from early-stage startups to Fortune 500s.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
