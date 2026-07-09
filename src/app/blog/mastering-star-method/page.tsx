import { Metadata } from 'next';
import { Calendar, Clock, User, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mastering the STAR Method for Behavioral Interviews',
  description:
    'A comprehensive guide for students and interns on using the STAR method to ace behavioral interview questions and effectively communicate their skills and experiences.',
  keywords: [
    'STAR method',
    'behavioral interviews',
    'interview tips',
    'internship interview',
    'career advice',
  ],
};

export default function BlogPostStarMethod() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <article className="prose lg:prose-lg mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Mastering the STAR Method for Behavioral Interviews
        </h1>
        <div className="mb-8 flex flex-wrap items-center space-x-4 text-muted-foreground">
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <User className="h-5 w-5" />
            <span>Sproutern Team</span>
          </div>
          <div className="mb-2 flex items-center space-x-2 sm:mb-0">
            <Calendar className="h-5 w-5" />
            <span>Regularly updated</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>6 min read</span>
          </div>
        </div>

        <p className="lead">
          Behavioral interview questions are a staple in modern hiring, yet they
          often trip up even the most qualified candidates. Questions like "Tell
          me about a time you faced a conflict" or "Describe a situation where
          you had to learn something new quickly" require more than a simple
          answer—they require a story. The STAR method is a structured framework
          that helps you tell that story clearly and effectively.
        </p>

        <h2>What is the STAR Method?</h2>
        <p>
          STAR is an acronym that stands for <strong>Situation</strong>,{' '}
          <strong>Task</strong>, <strong>Action</strong>, and{' '}
          <strong>Result</strong>. It provides a simple, compelling structure
          for your answers, ensuring you cover all the key aspects of your
          experience.
        </p>
        <div className="my-6 space-y-4">
          <div className="flex items-start">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              S
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Situation</h4>
              <p className="text-muted-foreground">
                Set the scene. Briefly describe the context of the story. Where
                were you working? What was the project? Who was involved?
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              T
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Task</h4>
              <p className="text-muted-foreground">
                Describe your specific responsibility or goal in that situation.
                What was the challenge you needed to overcome?
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              A
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Action</h4>
              <p className="text-muted-foreground">
                Explain the specific steps you took to address the task. Focus
                on your individual contributions and use strong action verbs.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              R
            </div>
            <div className="ml-4">
              <h4 className="font-bold">Result</h4>
              <p className="text-muted-foreground">
                Conclude by sharing the outcome of your actions. Quantify your
                success with numbers and data whenever possible. What did you
                achieve? What did you learn?
              </p>
            </div>
          </div>
        </div>

        <h2>
          Example: "Tell me about a time you worked under a tight deadline."
        </h2>

        <h3>
          <strong>Situation:</strong>
        </h3>
        <p>
          "In my previous internship at a tech startup, my team was tasked with
          developing a new feature for our mobile app. Two days before the
          scheduled release, we discovered a critical bug that could impact user
          data."
        </p>

        <h3>
          <strong>Task:</strong>
        </h3>
        <p>
          "My specific task was to identify the root cause of the bug, implement
          a fix, and ensure it passed all quality assurance tests within a
          36-hour window to avoid delaying the launch."
        </p>

        <h3>
          <strong>Action:</strong>
        </h3>
        <p>
          "I immediately initiated a code review, systematically analyzing
          recent commits. I coordinated with a senior developer to pair-program
          and debug the problematic module. After isolating the issue, I wrote
          the patch and then created a series of unit tests to validate the fix
          and check for any potential regressions."
        </p>

        <h3>
          <strong>Result:</strong>
        </h3>
        <p>
          "As a result, we successfully patched the bug 8 hours ahead of the
          deadline. The launch proceeded as planned with zero downtime, and the
          feature was well-received by users. The incident also led me to
          propose a new pre-release testing protocol, which the team adopted to
          prevent similar issues in the future."
        </p>

        <h2>Tips for Using the STAR Method Effectively</h2>
        <ul>
          <li>
            <strong>Be Specific and Concise:</strong> Provide enough detail to
            paint a clear picture, but avoid rambling.
          </li>
          <li>
            <strong>Focus on "I," not "We":</strong> The interviewer wants to
            know about your specific contributions, even if you were part of a
            team.
          </li>
          <li>
            <strong>Quantify Your Results:</strong> Numbers make your
            accomplishments more tangible and impressive (e.g., "increased
            efficiency by 15%," "reduced server costs by $500/month").
          </li>
          <li>
            <strong>Prepare Your Stories in Advance:</strong> Think about your
            key experiences and accomplishments and frame them in the STAR
            format before your interview.
          </li>
        </ul>

        <h2>Common Behavioral Interview Questions</h2>
        <p>
          Here are the most frequently asked behavioral questions. Prepare STAR
          responses for each category:
        </p>

        <h3>Leadership & Teamwork</h3>
        <ul>
          <li>
            Tell me about a time you led a team through a difficult project
          </li>
          <li>
            Describe a situation where you had to work with a difficult team
            member
          </li>
          <li>Give an example of when you motivated others</li>
          <li>Tell me about a time you gave someone constructive feedback</li>
          <li>Describe a situation where you had to delegate tasks</li>
        </ul>

        <h3>Problem Solving</h3>
        <ul>
          <li>Tell me about a time you solved a complex problem</li>
          <li>
            Describe a situation where you had to make a decision with
            incomplete information
          </li>
          <li>Give an example of an innovative solution you implemented</li>
          <li>
            Tell me about a time you identified a problem before others noticed
          </li>
          <li>Describe how you handled an unexpected obstacle</li>
        </ul>

        <h3>Conflict Resolution</h3>
        <ul>
          <li>Tell me about a time you resolved a conflict at work</li>
          <li>Describe a situation where you disagreed with your supervisor</li>
          <li>Give an example of how you handled criticism</li>
          <li>Tell me about a time you had to say no to someone</li>
          <li>
            Describe a situation where you had to manage competing priorities
          </li>
        </ul>

        <h3>Adaptability & Learning</h3>
        <ul>
          <li>Tell me about a time you had to learn something new quickly</li>
          <li>Describe a situation where you had to adapt to change</li>
          <li>Give an example of how you handled a setback or failure</li>
          <li>Tell me about a time you stepped outside your comfort zone</li>
          <li>Describe how you stay current with industry trends</li>
        </ul>

        <h2>More STAR Method Examples</h2>

        <div className="not-prose my-8 space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Example: Conflict Resolution
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Tell me about a time you resolved a conflict with a coworker"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "During my internship at a marketing
                agency, I was partnered with another intern on a client project.
                We had very different ideas about the campaign direction, and
                discussions were becoming tense."
              </p>
              <p>
                <strong>Task:</strong> "I needed to find a way to resolve our
                differences and deliver a cohesive campaign before the client
                presentation in two weeks."
              </p>
              <p>
                <strong>Action:</strong> "I suggested we each present our ideas
                formally to each other, listening without interruption. Then I
                proposed combining elements from both approaches—his data-driven
                targeting with my creative concept. I also established clear
                ownership of tasks to reduce friction."
              </p>
              <p>
                <strong>Result:</strong> "Our combined approach actually
                performed better than either original idea. The client loved it
                and extended their contract. My partner and I became great
                collaborators, and our supervisor praised our conflict
                resolution."
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Example: Learning Quickly
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Describe a time you had to learn something new quickly"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "In my first week at my data science
                internship, I was assigned to a project using Python and SQL—but
                I had only worked with R previously."
              </p>
              <p>
                <strong>Task:</strong> "I needed to become productive in Python
                within two weeks to contribute meaningfully to the team's
                analysis pipeline."
              </p>
              <p>
                <strong>Action:</strong> "I created an intensive self-study
                plan: 2 hours of Codecademy each morning before work, practicing
                by rewriting my R projects in Python, and asking my mentor for
                code reviews. I also joined the team's Slack channel for Python
                tips."
              </p>
              <p>
                <strong>Result:</strong> "Within 10 days, I completed my first
                Python script for the production pipeline. By the end of my
                internship, I'd written 15+ scripts and even created a training
                guide for future interns learning Python."
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Example: Leadership
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Tell me about a time you demonstrated leadership"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "During my college's annual tech
                fest, our team lead fell sick just one week before the main
                event. We had 50 volunteers and 5 major events to coordinate."
              </p>
              <p>
                <strong>Task:</strong> "Although I was just a core committee
                member, someone needed to step up and coordinate the remaining
                preparations."
              </p>
              <p>
                <strong>Action:</strong> "I volunteered to take charge. I
                created a shared task tracker, assigned clear responsibilities
                to each coordinator, held daily 15-minute standups, and
                personally handled the vendor negotiations that were stalled."
              </p>
              <p>
                <strong>Result:</strong> "The fest had record attendance of
                2,000+ participants. All events ran on time, and we stayed 10%
                under budget. The committee asked me to lead the next year's
                team."
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Example: Handling Failure
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Tell me about a time you failed and what you learned"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "In my second month at a content
                marketing internship, I was responsible for scheduling social
                media posts. I accidentally scheduled a promotional post on the
                wrong account—our client's competitor's page."
              </p>
              <p>
                <strong>Task:</strong> "I needed to fix the error immediately
                and ensure it never happened again."
              </p>
              <p>
                <strong>Action:</strong> "I deleted the post within 3 minutes,
                immediately informed my manager, and apologized to the client. I
                then created a pre-publish checklist and proposed a mandatory
                review process for all external posts."
              </p>
              <p>
                <strong>Result:</strong> "The client appreciated our
                transparency. My checklist was adopted team-wide and reduced
                scheduling errors by 95%. I learned that owning mistakes quickly
                and creating systems to prevent them builds more trust than
                avoiding blame."
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Example: Initiative
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Describe a time you went above and beyond"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "During my operations internship, I
                noticed that our team spent 2+ hours daily manually updating
                inventory spreadsheets from three different sources."
              </p>
              <p>
                <strong>Task:</strong> "While not part of my assigned work, I
                wanted to find a way to reduce this inefficient process."
              </p>
              <p>
                <strong>Action:</strong> "I taught myself Google Apps Script
                over a weekend and built an automation that pulled data from all
                three sources, cleaned it, and updated the master sheet
                automatically."
              </p>
              <p>
                <strong>Result:</strong> "The automation saved 10+ hours of
                manual work weekly. My manager was so impressed that she had me
                present to the director, and they implemented my solution across
                the entire department."
              </p>
            </div>
          </div>
        </div>

        <h2>Common STAR Method Mistakes to Avoid</h2>

        <div className="not-prose my-6 space-y-4">
          <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              ✗
            </div>
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">
                Being Too Vague
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                "I worked on a project and it went well" doesn't tell the
                interviewer anything specific about YOUR contribution.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              ✗
            </div>
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">
                Using "We" Instead of "I"
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                While you may have worked as a team, focus on YOUR specific
                actions and contributions. Say "I coordinated" not "we managed."
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              ✗
            </div>
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">
                Skipping the Result
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                Many candidates describe the situation and action but forget to
                share the outcome. Always quantify your results when possible.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              ✗
            </div>
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">
                Rambling Too Long
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                A good STAR answer is 1-2 minutes. Keep the Situation and Task
                brief (30 seconds), spend most time on Action, and conclude with
                a clear Result.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 font-bold text-white">
              ✗
            </div>
            <div>
              <p className="font-semibold text-red-900 dark:text-red-100">
                Using Hypotheticals
              </p>
              <p className="text-sm text-red-800 dark:text-red-200">
                "I would handle it by..." doesn't answer the question. Always
                use real examples from your experience, even if from academic
                projects or volunteer work.
              </p>
            </div>
          </div>
        </div>

        <h2>Building Your STAR Story Bank</h2>
        <p>
          Prepare 5-8 versatile stories that can be adapted for different
          questions. Here's how to build your story bank:
        </p>

        <h3>Step 1: Identify Key Experiences</h3>
        <p>Review your resume and think about:</p>
        <ul>
          <li>Projects where you made a significant impact</li>
          <li>Challenges you overcame</li>
          <li>Times you led or collaborated effectively</li>
          <li>Situations where you learned something valuable</li>
          <li>Conflicts you resolved</li>
          <li>Failures that taught you something</li>
        </ul>

        <h3>Step 2: Structure Each Story</h3>
        <p>For each experience, write out:</p>
        <ul>
          <li>Situation (2-3 sentences)</li>
          <li>Task (1-2 sentences)</li>
          <li>Action (3-5 bullet points)</li>
          <li>Result (1-2 sentences with numbers if possible)</li>
        </ul>

        <h3>Step 3: Practice Out Loud</h3>
        <ul>
          <li>Time yourself—aim for 1.5-2 minutes per story</li>
          <li>Practice with a friend or in front of a mirror</li>
          <li>Record yourself and review for filler words ("um," "like")</li>
          <li>Get feedback on clarity and engagement</li>
        </ul>

        <h2>Adapting STAR for Different Industries</h2>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-4">
            <h4 className="mb-2 font-bold">Technology / Engineering</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Emphasize technical problem-solving</li>
              <li>• Include specific technologies used</li>
              <li>• Quantify with metrics (latency, uptime, etc.)</li>
              <li>• Highlight debugging and optimization</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h4 className="mb-2 font-bold">Consulting / Business</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Focus on client impact and business outcomes</li>
              <li>• Highlight analytical frameworks used</li>
              <li>• Emphasize communication and stakeholder management</li>
              <li>• Include revenue/cost impact numbers</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h4 className="mb-2 font-bold">Marketing / Creative</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Highlight creative problem-solving</li>
              <li>• Include campaign metrics (engagement, reach)</li>
              <li>• Emphasize collaboration with stakeholders</li>
              <li>• Show brand impact and customer response</li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <h4 className="mb-2 font-bold">Operations / Supply Chain</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Focus on process improvement</li>
              <li>• Include efficiency metrics</li>
              <li>• Emphasize cross-functional coordination</li>
              <li>• Highlight cost savings and time reduction</li>
            </ul>
          </div>
        </div>

        <h2>STAR Method Variations</h2>
        <p>
          Sometimes interviewers use variations of behavioral questions. Here's
          how to adapt:
        </p>

        <h3>STAR + L (Learning)</h3>
        <p>
          Add a Learning component—what did this experience teach you? This is
          especially important for questions about failures or challenges.
        </p>

        <h3>CAR Method (Context, Action, Result)</h3>
        <p>
          Combines Situation and Task into Context. Use when you need to be
          extra concise or the situation is straightforward.
        </p>

        <h3>PAR Method (Problem, Action, Result)</h3>
        <p>
          Works well for problem-solving questions where the problem itself is
          the focus rather than the broader context.
        </p>

        <h2>Frequently Asked Questions</h2>

        <div className="my-6 space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              What if I don't have work experience?
            </h3>
            <p className="text-muted-foreground">
              Use examples from academic projects, volunteer work, sports teams,
              student organizations, or personal projects. The skills
              demonstrated (leadership, problem-solving, teamwork) transfer
              across contexts. What matters is how you structured your response
              and the results you achieved.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              How long should my STAR answer be?
            </h3>
            <p className="text-muted-foreground">
              Aim for 1.5-2 minutes. Keep Situation and Task to about 30
              seconds, spend 45-60 seconds on Action (the main content), and
              20-30 seconds on Result. If the interviewer wants more detail,
              they'll ask follow-up questions.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Can I use the same story for multiple questions?
            </h3>
            <p className="text-muted-foreground">
              Yes! A good story can demonstrate multiple skills. However, try
              not to repeat the same story more than twice in an interview.
              Prepare 5-8 versatile stories and adjust the emphasis based on
              what skill the question is assessing.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              What if I can't think of an example on the spot?
            </h3>
            <p className="text-muted-foreground">
              It's okay to pause and think. Say "That's a great question, let me
              think of a specific example..." Take 5-10 seconds to recall a
              relevant story. This is better than rambling with a weak example.
              This is also why preparation is so important.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              How do I handle "Tell me about a weakness" with STAR?
            </h3>
            <p className="text-muted-foreground">
              Use STAR to describe a situation where the weakness manifested,
              then focus your Action on what you did to address it, and your
              Result on how you've improved. Show self-awareness and growth, not
              just a humble-brag disguised as a weakness.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Should I memorize my STAR stories word-for-word?
            </h3>
            <p className="text-muted-foreground">
              No. Memorized answers sound robotic and can fall apart if the
              interviewer asks unexpected follow-ups. Instead, memorize the key
              points of each story and practice telling it naturally in your own
              words. This allows for flexibility and authenticity.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              How recent should my examples be?
            </h3>
            <p className="text-muted-foreground">
              Ideally within the last 2-3 years. For students, experiences from
              college are perfectly acceptable. Avoid examples from high school
              unless they're truly exceptional. More recent examples show
              current capabilities and are easier to discuss in detail.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              What if the result wasn't positive?
            </h3>
            <p className="text-muted-foreground">
              Still share it honestly, but focus on what you learned and how you
              would handle it differently. Interviewers appreciate
              self-awareness and growth mindset. A negative outcome with genuine
              learning can be more impressive than a perfect success story.
            </p>
          </div>
        </div>

        <h2>More STAR Examples by Skill Type</h2>

        <div className="not-prose my-8 space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Time Management Example
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "How do you prioritize when you have multiple deadlines?"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "During finals week of my third
                year, I had three major project deadlines within 48 hours, plus
                a part-time internship requiring 15 hours that week."
              </p>
              <p>
                <strong>Task:</strong> "I needed to complete all projects on
                time without compromising quality or my internship
                responsibilities."
              </p>
              <p>
                <strong>Action:</strong> "I created a detailed hour-by-hour
                schedule, identified which project required the most creative
                energy (did it first each day), batched similar tasks together,
                and communicated with my internship supervisor about adjusted
                hours. I also declined social invitations that week."
              </p>
              <p>
                <strong>Result:</strong> "I submitted all three projects on
                time—scoring A's on two and a B+ on the third. My internship
                deliverables were completed without delay. I've since used this
                prioritization system for every busy period."
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Customer Service Example
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Describe a time you went above and beyond for a customer"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "While working as a student
                ambassador at university, a prospective student's family arrived
                for a campus tour but their reserved tour guide hadn't shown up.
                They had traveled 6 hours and had a flight to catch."
              </p>
              <p>
                <strong>Task:</strong> "I needed to ensure they had a positive
                experience despite the scheduling failure."
              </p>
              <p>
                <strong>Action:</strong> "I immediately volunteered to conduct
                the tour myself, adjusted the route to prioritize their areas of
                interest (engineering labs), connected them with a current
                student in their prospective major, and arranged a meeting with
                an admissions officer during their lunch hour."
              </p>
              <p>
                <strong>Result:</strong> "The family sent a thank-you email to
                the admissions office praising the experience. The student
                enrolled the following year and mentioned my tour in their
                application essay."
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold text-primary">
              <Star className="h-5 w-5" />
              Analytical Thinking Example
            </h4>
            <p className="mb-2 text-sm font-semibold">
              "Tell me about a data-driven decision you made"
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Situation:</strong> "During my marketing internship, we
                were spending equally across three social media platforms but
                weren't tracking which generated the most leads."
              </p>
              <p>
                <strong>Task:</strong> "I wanted to identify which platforms
                delivered the best ROI so we could optimize our budget."
              </p>
              <p>
                <strong>Action:</strong> "I implemented UTM tracking on all
                links, created a dashboard to track conversions by source, and
                analyzed 8 weeks of data. I then presented findings to my
                manager with recommendations for budget reallocation."
              </p>
              <p>
                <strong>Result:</strong> "We discovered LinkedIn drove 60% of
                quality leads despite only 25% of spend. After reallocation,
                lead quality improved 40% while total ad spend decreased 15%."
              </p>
            </div>
          </div>
        </div>

        <h2>Interview Formats and How to Adapt STAR</h2>

        <h3>One-on-One Interviews</h3>
        <p>
          The most common format. You'll have time to build rapport and give
          detailed answers. Use the full STAR structure with 2-minute responses.
        </p>

        <h3>Panel Interviews</h3>
        <p>
          Multiple interviewers at once. Keep answers slightly shorter (90
          seconds) and make eye contact with all panelists, not just the person
          who asked. Each panelist may focus on different competencies.
        </p>

        <h3>Video Interviews (Recorded)</h3>
        <p>
          You record responses without a live interviewer. Prepare your stories
          extra well since you can't read interviewer reactions. Practice
          looking at the camera (not the screen) and keep energy high.
        </p>

        <h3>Speed/Rapid-Fire Interviews</h3>
        <p>
          Short interviews (15-20 minutes) with multiple interviewers. Use the
          CAR format (shorter version) and focus on your strongest 2-3 stories.
          Get to the Action and Result quickly.
        </p>

        <h2>Practice Exercises</h2>
        <p>
          Use these exercises to prepare for your next behavioral interview:
        </p>

        <div className="not-prose my-6 space-y-4">
          <div className="rounded-lg border bg-card p-5">
            <h4 className="mb-2 font-bold">Exercise 1: Story Bank Creation</h4>
            <p className="mb-2 text-sm text-muted-foreground">
              List 8 significant experiences from the past 3 years. For each,
              identify 3 different skills it demonstrates. This gives you 24
              potential story angles.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h4 className="mb-2 font-bold">Exercise 2: Timed Practice</h4>
            <p className="mb-2 text-sm text-muted-foreground">
              Record yourself answering 5 behavioral questions. Time each
              response. Watch back and note filler words, clarity issues, and
              missing elements. Re-record until answers are smooth.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h4 className="mb-2 font-bold">Exercise 3: Mock Interview</h4>
            <p className="mb-2 text-sm text-muted-foreground">
              Ask a friend to interview you with random behavioral questions.
              Have them give feedback on: clarity, confidence, specific vs
              generic answers, and whether you followed STAR.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-5">
            <h4 className="mb-2 font-bold">
              Exercise 4: Quantification Practice
            </h4>
            <p className="mb-2 text-sm text-muted-foreground">
              Take your top 5 stories and add numbers to each Result section.
              Think: percentages, dollar amounts, time saved, people impacted,
              efficiency gains.
            </p>
          </div>
        </div>

        <h2>STAR Method Cheat Sheet</h2>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="border p-3 text-left font-semibold">
                  Component
                </th>
                <th className="border p-3 text-left font-semibold">Time</th>
                <th className="border p-3 text-left font-semibold">Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Situation</td>
                <td className="border p-3">15-20 sec</td>
                <td className="border p-3">
                  Set context briefly. Who, what, when, where.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Task</td>
                <td className="border p-3">10-15 sec</td>
                <td className="border p-3">
                  Your specific responsibility or goal.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Action</td>
                <td className="border p-3">45-60 sec</td>
                <td className="border p-3">
                  Use "I" statements. 3-5 specific steps.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Result</td>
                <td className="border p-3">20-30 sec</td>
                <td className="border p-3">
                  Quantify outcomes. Add learnings if relevant.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Additional FAQs</h2>

        <div className="my-6 space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              How do I prepare for unexpected questions?
            </h3>
            <p className="text-muted-foreground">
              Build versatile stories that demonstrate multiple skills. A
              conflict resolution story can also show communication,
              problem-solving, and emotional intelligence. If asked something
              unexpected, think about which of your prepared stories best
              demonstrates the desired skill.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              What if my story involves confidential information?
            </h3>
            <p className="text-muted-foreground">
              Keep sensitive details vague. Say "a major client" instead of the
              name, "significant revenue impact" instead of exact amounts.
              Interviewers understand discretion—it's actually a positive
              signal.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Should I practice different stories for different companies?
            </h3>
            <p className="text-muted-foreground">
              Yes, adapt emphasis based on the company's values. If they
              emphasize innovation, highlight creative problem-solving. If they
              value teamwork, emphasize collaboration aspects of your stories.
              Research company culture before interviews.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              How do I recover if I mess up mid-story?
            </h3>
            <p className="text-muted-foreground">
              It's okay to pause and say "Let me rephrase that" or "To
              clarify..." Interviewers are human—they understand nervousness.
              The key is to stay calm, take a breath, and continue. Don't
              apologize excessively.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Can I use stories from group projects where I wasn't the leader?
            </h3>
            <p className="text-muted-foreground">
              Absolutely! Leadership isn't just about formal titles. Highlight
              how you contributed: taking initiative on a difficult task,
              supporting team members, bringing new ideas, or improving
              processes. Focus on YOUR specific impact within the group.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold">
              What's the biggest mistake candidates make with STAR?
            </h3>
            <p className="text-muted-foreground">
              Spending too long on Situation and Task, then rushing through
              Action and Result. The Action is the most important part—it shows
              HOW you think and work. Practice keeping S and T under 30 seconds
              total.
            </p>
          </div>
        </div>

        <h2>Conclusion</h2>
        <p>
          The STAR method is more than just an interview technique; it's a
          powerful storytelling tool. By mastering it, you can articulate your
          value to potential employers with confidence and clarity. Practice
          framing your experiences in this structure, and you'll be
          well-prepared to shine in any behavioral interview.
        </p>

        <p>
          Remember: the key to success is preparation. Build your story bank,
          practice out loud, and adapt your stories to each specific question.
          With these skills, you'll turn behavioral interviews from stressful
          experiences into opportunities to showcase your best work.
        </p>

        <div className="mt-12 rounded-lg bg-secondary p-6 text-center">
          <h3 className="mb-2 text-xl font-bold">
            Ready to Put Your Skills to the Test?
          </h3>
          <p className="mb-4 text-muted-foreground">
            Browse hundreds of internship opportunities from innovative
            startups.
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary/90"
          >
            Find Your Internship
          </Link>
        </div>

        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="text-primary hover:underline"
            >
              → 50 Common Behavioral Questions
            </Link>
            <Link
              href="/blog/how-to-answer-tell-me-about-yourself"
              className="text-primary hover:underline"
            >
              → How to Answer "Tell Me About Yourself"
            </Link>
            <Link
              href="/blog/interview-preparation-checklist"
              className="text-primary hover:underline"
            >
              → Interview Preparation Checklist
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="text-primary hover:underline"
            >
              → First Tech Internship Guide
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
