import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  BookOpen,
  MessageSquare,
  Users,
  Star,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '50 Common Interview Questions with Expert Answers',
  description:
    'Master your next interview with this comprehensive guide to 50 common questions. Includes expert-approved answers, STAR method examples, and tips for behavioral, technical, and HR rounds.',
  keywords: [
    'interview questions',
    'common interview questions',
    'behavioral interview',
    'technical interview',
    'HR interview',
    'STAR method',
    'interview preparation',
    'job interview tips',
  ],
  openGraph: {
    title: '50 Common Interview Questions with Expert Answers',
    description:
      'Complete interview preparation guide with sample answers and expert tips for every type of question.',
    type: 'article',
    publishedTime: '2025-10-15T00:00:00Z',
    authors: ['Sproutern Career Team'],
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Article Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Interview Preparation
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            50 Common Interview Questions with Expert-Approved Answers
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            The complete interview playbook: behavioral, technical, situational,
            and HR questions with detailed answers and strategies to help you
            stand out.
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
              <span>35 min read</span>
            </div>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-primary bg-primary/5 p-6">
          <h2 className="mb-4 text-lg font-bold">📌 Quick Reference</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Use STAR Method</strong> - Structure behavioral answers
                with Situation, Task, Action, Result
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Prepare 5-7 stories</strong> - Reusable stories that
                showcase different skills
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Research the company</strong> - Reference specific
                details in your answers
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span>
                <strong>Practice out loud</strong> - Rehearse until answers feel
                natural, not memorized
              </span>
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 Table of Contents</h2>
          <ol className="columns-2 space-y-2 text-sm">
            <li>
              <a
                href="#behavioral"
                className="text-primary hover:underline"
              >
                Behavioral Questions (1-15)
              </a>
            </li>
            <li>
              <a
                href="#situational"
                className="text-primary hover:underline"
              >
                Situational Questions (16-25)
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-primary hover:underline"
              >
                Experience & Skills (26-32)
              </a>
            </li>
            <li>
              <a
                href="#company"
                className="text-primary hover:underline"
              >
                Company & Role (33-40)
              </a>
            </li>
            <li>
              <a
                href="#technical"
                className="text-primary hover:underline"
              >
                Technical Questions (41-45)
              </a>
            </li>
            <li>
              <a
                href="#questions-for-them"
                className="text-primary hover:underline"
              >
                Questions to Ask (46-50)
              </a>
            </li>
            <li>
              <a
                href="#star-method"
                className="text-primary hover:underline"
              >
                The STAR Method Explained
              </a>
            </li>
            <li>
              <a
                href="#preparation-tips"
                className="text-primary hover:underline"
              >
                Preparation Strategies
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p className="lead">
            The interview is where your preparation meets opportunity. While you
            can't predict every question, you can prepare for the most common
            ones and develop a framework for handling surprises. This guide
            provides 50 essential questions with expert-approved answers, real
            examples, and strategies that have helped thousands of candidates
            succeed.
          </p>

          <div className="my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h4 className="mb-3 font-bold">📊 Interview Success Statistics</h4>
            <ul className="space-y-1 text-sm">
              <li>
                • Candidates who prepare answers to common questions are{' '}
                <strong>3x more likely</strong> to receive offers
              </li>
              <li>
                • <strong>85%</strong> of interview questions fall into
                predictable categories
              </li>
              <li>
                • The average interviewer decides on a candidate within{' '}
                <strong>7 minutes</strong>
              </li>
              <li>
                • <strong>33%</strong> of hiring managers know within 90 seconds
                if they'll hire someone
              </li>
            </ul>
          </div>
        </section>

        {/* STAR Method Section */}
        <section id="star-method">
          <h2>The STAR Method: Your Secret Weapon</h2>

          <p>
            Before we dive into the questions, let's master the STAR method -
            the framework that will help you structure 80% of your answers.
          </p>

          <div className="my-6 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    S
                  </span>
                  <div>
                    <p className="font-bold">Situation</p>
                    <p className="text-sm text-muted-foreground">
                      Set the context and background (1-2 sentences)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    T
                  </span>
                  <div>
                    <p className="font-bold">Task</p>
                    <p className="text-sm text-muted-foreground">
                      What was your specific responsibility?
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    A
                  </span>
                  <div>
                    <p className="font-bold">Action</p>
                    <p className="text-sm text-muted-foreground">
                      What steps did YOU take? (60% of answer)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    R
                  </span>
                  <div>
                    <p className="font-bold">Result</p>
                    <p className="text-sm text-muted-foreground">
                      What was the outcome? Quantify if possible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Behavioral Questions */}
        <section id="behavioral">
          <h2>Behavioral Questions (1-15)</h2>
          <p>
            These questions assess your past performance to predict future
            behavior. They typically start with "Tell me about a time when..."
            or "Describe a situation where..."
          </p>

          <div className="space-y-8">
            {/* Question 1 */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="mb-2 text-xl font-bold">
                1. "Tell me about yourself."
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Why they ask: To see how you present yourself and understand
                your background quickly.
              </p>

              <div className="mb-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="mb-2 text-sm font-bold">
                  ✅ Strong Answer Framework (Present-Past-Future):
                </p>
                <p className="text-sm">
                  "I'm a third-year Computer Science student at IIT Delhi,
                  currently focusing on machine learning and data science. I've
                  built several projects including a recommendation engine that
                  improved product discovery by 40% for a college startup.
                  Previously, I interned at a fintech startup where I developed
                  a fraud detection system that reduced false positives by 25%.
                  I'm now looking to apply these skills at [Company] because I'm
                  excited about your work in [specific area]."
                </p>
              </div>

              <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                <div className="text-sm">
                  <strong>Pro Tip:</strong> Keep it under 2 minutes. Focus on
                  professional aspects, not personal life. Tailor the answer to
                  the role you're applying for.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="mb-2 text-xl font-bold">
                2. "What are your greatest strengths?"
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Why they ask: To assess self-awareness and see if your strengths
                align with the role.
              </p>

              <div className="mb-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="mb-2 text-sm font-bold">✅ Strong Answer:</p>
                <p className="text-sm">
                  "My greatest strength is my ability to break down complex
                  problems into manageable parts. For example, in my final year
                  project on natural language processing, I was initially
                  overwhelmed by the scope. I created a detailed roadmap,
                  identified key milestones, and tackled each component
                  systematically. This approach helped me complete the project
                  two weeks early and earn the highest grade in my class."
                </p>
              </div>

              <p className="text-sm">
                <strong>Best strengths to mention:</strong> Problem-solving,
                adaptability, communication, technical skills relevant to role,
                teamwork, attention to detail, quick learning.
              </p>
            </div>

            {/* Question 3 */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="mb-2 text-xl font-bold">
                3. "What is your greatest weakness?"
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Why they ask: To assess self-awareness and honesty. They want to
                see growth mindset.
              </p>

              <div className="mb-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="mb-2 text-sm font-bold">✅ Strong Answer:</p>
                <p className="text-sm">
                  "I used to struggle with delegating tasks because I wanted to
                  ensure everything was perfect. During a group project last
                  semester, I tried to do most of the work myself and ended up
                  stressed and behind schedule. I've since learned to trust my
                  teammates more. Now, I focus on clear communication and
                  regular check-ins rather than taking everything on myself. Our
                  last project was our most successful because everyone
                  contributed their strengths."
                </p>
              </div>

              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
                <p className="mb-2 text-sm font-bold">❌ Avoid:</p>
                <ul className="space-y-1 text-sm">
                  <li>• "I'm a perfectionist" (overused and sounds fake)</li>
                  <li>• "I work too hard" (not genuine)</li>
                  <li>• Weaknesses that are critical to the role</li>
                  <li>• Saying "I don't have any weaknesses"</li>
                </ul>
              </div>
            </div>

            {/* Question 4 */}
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="mb-2 text-xl font-bold">
                4. "Tell me about a time you failed."
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Why they ask: To assess resilience, accountability, and learning
                ability.
              </p>

              <div className="mb-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="mb-2 text-sm font-bold">✅ STAR Example:</p>
                <p className="text-sm">
                  <strong>Situation:</strong> "In my second year, I was leading
                  a team for a hackathon."
                  <br />
                  <strong>Task:</strong> "We had 24 hours to build a working
                  prototype."
                  <br />
                  <strong>Action:</strong> "I was so focused on building
                  features that I didn't prioritize properly. We tried to
                  implement too many things and ended up with a buggy,
                  incomplete product."
                  <br />
                  <strong>Result:</strong> "We didn't place in the top 10. But
                  this taught me a crucial lesson: starting with an MVP and
                  iterating is better than trying to build everything at once.
                  In the next hackathon, I used this approach and our team won
                  second place."
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="mb-2 text-xl font-bold">
                5. "Describe a time you worked with a difficult person."
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Why they ask: To assess interpersonal skills and conflict
                resolution.
              </p>

              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="mb-2 text-sm font-bold">✅ Strong Answer:</p>
                <p className="text-sm">
                  "During a group project, one teammate consistently missed
                  deadlines and didn't respond to messages. Instead of
                  escalating to the professor, I had a private conversation with
                  them. I learned they were dealing with family issues.
                  Together, we restructured their responsibilities to smaller,
                  manageable tasks. I also set up a buddy system where we'd
                  check in daily. They ended up contributing meaningfully, and
                  we all earned high marks."
                </p>
              </div>
            </div>

            {/* Question 6 */}
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="mb-2 text-xl font-bold">
                6. "Tell me about a time you demonstrated leadership."
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Why they ask: Leadership potential is valued at all levels.
              </p>

              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm">
                  <strong>Key elements to include:</strong> Taking initiative,
                  motivating others, making decisions, taking responsibility,
                  achieving results through the team.
                </p>
              </div>
            </div>

            {/* Question 7-10 Brief */}
            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 font-bold">Questions 7-10: Quick Guide</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold">
                    7. "How do you handle pressure or stress?"
                  </p>
                  <p className="text-muted-foreground">
                    Share a specific example + your coping mechanisms
                    (prioritization, breaking tasks down, taking breaks)
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    8. "Tell me about a time you had to learn something
                    quickly."
                  </p>
                  <p className="text-muted-foreground">
                    Highlight your learning process, resources used, and
                    successful outcome
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    9. "Describe your biggest achievement."
                  </p>
                  <p className="text-muted-foreground">
                    Choose something relevant to the role, quantify impact, show
                    your specific contribution
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    10. "How do you prioritize tasks when everything seems
                    urgent?"
                  </p>
                  <p className="text-muted-foreground">
                    Discuss your prioritization framework (Eisenhower Matrix),
                    give a real example
                  </p>
                </div>
              </div>
            </div>

            {/* Questions 11-15 */}
            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 font-bold">Questions 11-15</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold">
                    11. "Tell me about a time you went above and beyond."
                  </p>
                  <p className="text-muted-foreground">
                    Show initiative and commitment to excellence beyond basic
                    requirements
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    12. "Describe a time you had to persuade someone to see your
                    point of view."
                  </p>
                  <p className="text-muted-foreground">
                    Focus on listening, understanding their perspective, then
                    presenting your case with evidence
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    13. "Tell me about a time you received constructive
                    criticism."
                  </p>
                  <p className="text-muted-foreground">
                    Show openness to feedback and concrete actions you took to
                    improve
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    14. "Describe a complex project you worked on."
                  </p>
                  <p className="text-muted-foreground">
                    Walk through your role, challenges faced, and how you
                    overcame them
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    15. "Tell me about a time you made a mistake at
                    work/school."
                  </p>
                  <p className="text-muted-foreground">
                    Take ownership, explain what you learned, describe
                    preventive measures for the future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Situational Questions */}
        <section id="situational">
          <h2>Situational Questions (16-25)</h2>
          <p>
            These hypothetical questions assess your problem-solving and
            decision-making approach. Start answers with "I would..." and
            explain your reasoning.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="mb-2 font-bold">
                16. "What would you do if you were assigned a task you didn't
                know how to complete?"
              </h3>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm">
                  "I'd first try to understand the requirements thoroughly. Then
                  I'd research online resources, documentation, and tutorials.
                  If still stuck, I'd identify who in the team has relevant
                  expertise and ask specific questions. I believe in attempting
                  problems independently first to learn, but also knowing when
                  to ask for help to avoid wasted time."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h3 className="mb-2 font-bold">
                17. "How would you handle a disagreement with your manager?"
              </h3>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm">
                  "I'd first make sure I fully understand their perspective.
                  Then, I'd schedule a private conversation to share my
                  viewpoint with specific examples and data. If we still
                  disagree, I'd accept their decision while documenting my
                  concerns. Ultimately, I believe in respectful communication
                  and trusting that my manager has context I might not have."
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 font-bold">
                Questions 18-25: Quick Reference
              </h4>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <p className="font-bold">18. Missing a project deadline?</p>
                  <p className="text-muted-foreground">
                    Communicate early, propose solutions
                  </p>
                </div>
                <div>
                  <p className="font-bold">19. Team member not contributing?</p>
                  <p className="text-muted-foreground">
                    Private conversation first, understand reasons
                  </p>
                </div>
                <div>
                  <p className="font-bold">20. Given conflicting priorities?</p>
                  <p className="text-muted-foreground">
                    Clarify with stakeholders, document decisions
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    21. You discovered a mistake you made?
                  </p>
                  <p className="text-muted-foreground">
                    Report immediately, propose fix
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    22. Asked to do something unethical?
                  </p>
                  <p className="text-muted-foreground">
                    Express concerns clearly, escalate if needed
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    23. Unclear requirements from client?
                  </p>
                  <p className="text-muted-foreground">
                    Ask clarifying questions, document assumptions
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    24. New technology to learn quickly?
                  </p>
                  <p className="text-muted-foreground">
                    Structured learning plan, hands-on practice
                  </p>
                </div>
                <div>
                  <p className="font-bold">25. Overwhelmed with workload?</p>
                  <p className="text-muted-foreground">
                    Prioritize, communicate, ask for help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Skills Questions */}
        <section id="experience">
          <h2>Experience & Skills Questions (26-32)</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="mb-2 font-bold">
                26. "Walk me through your resume."
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Structure: Start with education, move to relevant experiences
                chronologically, end with why you're excited about this role.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h3 className="mb-2 font-bold">
                27. "What is the most interesting project you've worked on?"
              </h3>
              <p className="text-sm text-muted-foreground">
                Choose a project relevant to the role. Explain the problem, your
                approach, technical decisions, challenges, and impact.
              </p>
            </div>

            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 font-bold">Questions 28-32</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>28.</strong> "Tell me about [specific skill on
                  resume]" - Be ready to go deep on anything listed
                </li>
                <li>
                  <strong>29.</strong> "How do you stay updated with industry
                  trends?" - Mention specific sources, communities
                </li>
                <li>
                  <strong>30.</strong> "What's your experience with [specific
                  technology]?" - Be honest about proficiency level
                </li>
                <li>
                  <strong>31.</strong> "Describe your ideal work environment" -
                  Align with company culture
                </li>
                <li>
                  <strong>32.</strong> "What skills are you currently
                  developing?" - Show growth mindset
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Company & Role Questions */}
        <section id="company">
          <h2>Company & Role Questions (33-40)</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="mb-2 font-bold">
                33. "Why do you want to work at [Company]?"
              </h3>
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                <p className="text-sm">
                  <strong>Formula:</strong> Company's mission + Specific
                  product/project you admire + How your skills align + What
                  you'll contribute
                  <br />
                  <br />
                  "I've been following [Company]'s work on [specific
                  product/initiative] for the past year. What excites me is
                  [specific aspect]. With my background in [relevant skill], I
                  believe I can contribute to [specific area] while learning
                  from your experienced team in [growth area]."
                </p>
              </div>
            </div>

            <div className="border-l-4 border-secondary pl-4">
              <h3 className="mb-2 font-bold">
                34. "What do you know about our company?"
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Research: Products/services, recent news, company values,
                culture, competitors, founders/leadership, financial status (if
                public)
              </p>
            </div>

            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-4 font-bold">Questions 35-40</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>35.</strong> "Why are you interested in this specific
                  role?" - Connect skills to JD requirements
                </li>
                <li>
                  <strong>36.</strong> "Where do you see yourself in 5 years?" -
                  Show ambition aligned with company growth
                </li>
                <li>
                  <strong>37.</strong> "What do you hope to gain from this
                  internship?" - Learning goals + contribution
                </li>
                <li>
                  <strong>38.</strong> "What makes you unique among other
                  candidates?" - Your specific value proposition
                </li>
                <li>
                  <strong>39.</strong> "Why should we hire you?" - Summarize key
                  strengths + enthusiasm
                </li>
                <li>
                  <strong>40.</strong> "Do you have any concerns about the
                  role?" - Ask clarifying questions or say none
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Questions */}
        <section id="technical">
          <h2>Technical Questions (41-45)</h2>
          <p>These vary by role. Here are examples for common fields:</p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">💻 Software Engineering</h4>
              <ul className="space-y-1 text-sm">
                <li>41. Explain OOP concepts</li>
                <li>42. Difference between stack and queue</li>
                <li>43. How does REST API work?</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-bold">📊 Data Science</h4>
              <ul className="space-y-1 text-sm">
                <li>44. Explain bias-variance tradeoff</li>
                <li>45. When to use SQL vs NoSQL?</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> It's okay to say "I don't know, but
              here's how I'd approach finding the answer..." This shows humility
              and problem-solving ability.
            </div>
          </div>
        </section>

        {/* Questions to Ask */}
        <section id="questions-for-them">
          <h2>Questions to Ask the Interviewer (46-50)</h2>
          <p>
            Always have 3-5 thoughtful questions prepared. This shows genuine
            interest and helps you evaluate the opportunity.
          </p>

          <div className="my-6 rounded-lg bg-gradient-to-r from-primary/10 to-transparent p-6">
            <h4 className="mb-4 font-bold">🎯 High-Impact Questions</h4>
            <ol className="space-y-3 text-sm">
              <li>
                <strong>46.</strong> "What does success look like for an intern
                in this role after 3 months?"
              </li>
              <li>
                <strong>47.</strong> "What's the biggest challenge the team is
                currently facing?"
              </li>
              <li>
                <strong>48.</strong> "How would you describe the team culture?"
              </li>
              <li>
                <strong>49.</strong> "What opportunities are there for interns
                to present their work or get feedback?"
              </li>
              <li>
                <strong>50.</strong> "What do you personally enjoy most about
                working here?"
              </li>
            </ol>
          </div>

          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <p className="mb-2 text-sm font-bold">❌ Questions to Avoid:</p>
            <ul className="space-y-1 text-sm">
              <li>• "What does your company do?" (shows lack of research)</li>
              <li>• Salary/benefits questions in early rounds</li>
              <li>• "Did I get the job?"</li>
              <li>• Questions easily answered on the website</li>
            </ul>
          </div>
        </section>

        {/* Preparation Tips */}
        <section id="preparation-tips">
          <h2>Interview Preparation Strategies</h2>

          <h3>1-Week Preparation Plan</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-muted p-2 text-left">Day</th>
                  <th className="bg-muted p-2 text-left">Focus Area</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-2">
                    <strong>Day 1-2</strong>
                  </td>
                  <td className="border-b p-2">
                    Research company + prepare 5 STAR stories
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2">
                    <strong>Day 3-4</strong>
                  </td>
                  <td className="border-b p-2">
                    Practice behavioral questions out loud
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2">
                    <strong>Day 5</strong>
                  </td>
                  <td className="border-b p-2">
                    Technical preparation (if applicable)
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-2">
                    <strong>Day 6</strong>
                  </td>
                  <td className="border-b p-2">
                    Mock interview with friend/mentor
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <strong>Day 7</strong>
                  </td>
                  <td className="p-2">Light review, rest, prepare logistics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Day-of Checklist</h3>
          <div className="not-prose">
            <ul className="space-y-2">
              <li className="flex items-center gap-3 rounded-lg border p-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  Arrive 10-15 minutes early (or log in 5 minutes early for
                  virtual)
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-lg border p-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Bring copies of resume, notebook, and pen</span>
              </li>
              <li className="flex items-center gap-3 rounded-lg border p-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>
                  Dress professionally (business casual for most tech companies)
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-lg border p-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Test technology for virtual interviews</span>
              </li>
              <li className="flex items-center gap-3 rounded-lg border p-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Have questions prepared for the interviewer</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Final Thoughts</h2>

          <p>
            Remember: interviews are a two-way street. While the company is
            evaluating you, you're also evaluating them. The goal isn't to give
            "perfect" answers but to authentically represent yourself while
            demonstrating your potential value.
          </p>

          <p>
            Practice these questions until the answers feel natural, not
            memorized. Record yourself, do mock interviews, and refine your
            answers based on feedback. Every interview is a learning
            opportunity, whether you get the offer or not.
          </p>

          <p className="text-lg font-semibold text-primary">
            You've got this. Go show them what you're made of! 💪
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Continue Your Preparation</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/ultimate-guide-first-internship"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Ultimate Internship Guide
            </Link>
            <Link
              href="/blog/mastering-star-method"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Mastering the STAR Method
            </Link>
            <Link
              href="/resources/interview-prep"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Interview Preparation Resources
            </Link>
            <Link
              href="/tools/interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Practice Interview Questions
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
                Our interview preparation experts have conducted over 500 mock
                interviews and analyzed thousands of candidate experiences to
                distill the most effective strategies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
