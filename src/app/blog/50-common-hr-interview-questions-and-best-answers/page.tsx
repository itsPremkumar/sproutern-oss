import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  MessageSquare,
  Briefcase,
  Smile,
  Heart,
  Award,
  Shield,
  Zap,
  Coffee,
  Layout,
  Star,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '50 Common HR Interview Questions and Best Answers',
  description:
    'The ultimate guide to ace your HR interview. 50 common questions, expert tips, and word-for-word sample answers to help you land your dream job.',
  keywords: [
    'HR interview questions',
    'interview preparation',
    'common interview questions',
    'best interview answers',
    'behavioral interview questions',
    'STAR method',
    'job interview tips',
    'hiring process',
  ],
  openGraph: {
    title: '50 Common HR Interview Questions and Best Answers',
    description:
      'Master the art of the interview with our comprehensive guide.',
    type: 'article',
    publishedTime: '2025-01-10T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Interview Preparation
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            50 Common HR Interview Questions and Best Answers
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            The HR round is the gateway to your dream job. It's where culture
            fit, soft skills, and red flags are assessed. We've compiled the
            ultimate list of 50 questions with expert tips and{' '}
            <strong>sample answers</strong> for each.
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
              <span>45 min read</span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            You've cracked the coding test or the technical assignment. Now
            comes the HR Round. Many candidates dismiss this as a formality, but
            it is actually the most dangerous stage. One wrong answer about your
            "weakness" or "salary expectation" can disqualify you instantly.
          </p>
          <p>
            The secret to acing the HR interview is preparation. You shouldn't
            memorize answers, but you should have your stories ready. We have
            categorized these 50 questions to help you structure your prep. For
            each question, we provide a <strong>Strategy Tip</strong> and a
            <strong>Model Answer</strong> that you can adapt.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 Question Categories</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#intro"
                className="text-primary hover:underline"
              >
                1. Introduction & Icebreakers
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-primary hover:underline"
              >
                2. Experience & Qualifications
              </a>
            </li>
            <li>
              <a
                href="#behavioral"
                className="text-primary hover:underline"
              >
                3. Behavioral (STAR Method)
              </a>
            </li>
            <li>
              <a
                href="#culture"
                className="text-primary hover:underline"
              >
                4. Work Style & Culture
              </a>
            </li>
            <li>
              <a
                href="#goals"
                className="text-primary hover:underline"
              >
                5. Future Goals
              </a>
            </li>
            <li>
              <a
                href="#logistics"
                className="text-primary hover:underline"
              >
                6. Salary & Logistics
              </a>
            </li>
            <li>
              <a
                href="#tricky"
                className="text-primary hover:underline"
              >
                7. Tricky Questions to Watch Out For
              </a>
            </li>
            <li>
              <a
                href="#closing"
                className="text-primary hover:underline"
              >
                8. Closing Questions
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-indigo-600" />
            Golden Rules of Interviewing
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Be Honest, But Strategic:</strong> Don't lie, but frame
                negatives as learning opportunities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Use the STAR Method:</strong> For behavioral questions,
                explain the Situation, Task, Action, and Result.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Research is Key:</strong> Knowing the company's values
                allows you to tailor your answers.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Confidence Matters:</strong> How you say it is often as
                important as what you say.
              </span>
            </li>
          </ul>
        </div>

        {/* Category 1: Introduction */}
        <section
          id="intro"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Smile className="h-6 w-6 text-primary" />
            Category 1: Introduction & Icebreakers
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q1 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                1. Tell me about yourself.
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Use the "Present, Past, Future"
                formula. Start with your current role, mention relevant past
                experience, and end with why you're interested in this role.
                Keep it professional, not personal.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "Currently, I am a software engineer at TechCorp, where I
                  focus on backend scalability. Before that, I worked at a
                  startup where I built the entire payment infrastructure. I
                  enjoy solving complex engineering problems, which is why I'm
                  excited about this opportunity to work on your cloud
                  platform."
                </p>
              </div>
            </div>

            {/* Q2 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                2. How did you hear about this position?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Be honest. If it was a referral,
                name-drop immediately to establish trust. If it was a job board,
                mention what specific detail in the job description caught your
                eye.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "Your former colleague, Sarah Jenkins, recommended I apply.
                  She spoke highly of the engineering culture here and thought
                  my background in distributed systems would be a great fit."
                </p>
              </div>
            </div>

            {/* Q3 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                3. What do you know about our company?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Do your homework. Mention their
                mission, recent news, or specific products. Show that you are
                already invested in their success.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I know Sproutern is tackling the ed-tech gap by connecting
                  students with startups. I recently read about your Series A
                  funding and was impressed by your plan to expand into tier-2
                  cities."
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                4. Why do you want to work here?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Connect your personal values and
                career goals with the company's vision. Flattery works if it's
                sincere.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I've always been passionate about financial inclusion. Your
                  product has helped thousands of unbanked people get loans. I
                  want to use my coding skills to contribute to a mission that
                  has a tangible social impact."
                </p>
              </div>
            </div>

            {/* Q5 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                5. Why are you looking for a new job?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Always run <em>towards</em>{' '}
                something, not <em>away</em> from something. Never badmouth your
                current employer. Focus on seeking growth, new challenges, or a
                change in industry.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I've learned a lot in my current role, but I feel I've
                  reached a plateau. I'm looking for a position where I can take
                  on more leadership responsibilities and work with newer
                  technologies like AI."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 2: Experience */}
        <section
          id="experience"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Category 2: Experience & Qualifications
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q6 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                6. Why should we hire you?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Match your top 3 skills directly to
                the job description requirements. Be confident but not arrogant.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "You need someone who can scale your database and manage a
                  team of juniors. I have 5 years of experience sharding
                  Postgres databases and have mentored 3 interns into full-time
                  roles."
                </p>
              </div>
            </div>

            {/* Q7 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                7. What are your greatest strengths?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Choose strong, relevant adjectives
                (Adaptable, Detail-oriented, Persistent) and back them with a
                quick example.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "My greatest strength is my problem-solving ability under
                  pressure. When our server crashed on Cyber Monday, I diagnosed
                  the memory leak and patched it within 15 minutes while
                  communicating updates to stakeholders."
                </p>
              </div>
            </div>

            {/* Q8 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                8. What is your greatest weakness?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> The "fake strength" (I work too hard)
                is outdated. Be honest about a minor skill gap and explain how
                you are fixing it.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I sometimes struggle with public speaking. To improve this,
                  I've joined a local Toastmasters club and have started
                  volunteering to present our team's weekly sprint updates."
                </p>
              </div>
            </div>

            {/* Q9 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                9. Tell me about a time you failed.
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> They want to see resilience. Pick a
                real failure, take responsibility (don't blame others), and
                emphasize the lesson learned.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I once missed a critical deadline because I tried to do
                  everything myself instead of delegating. I learned that
                  teamwork is essential. Now, I use project management tools to
                  ensure tasks are distributed effectively."
                </p>
              </div>
            </div>

            {/* Q10 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                10. What is your greatest professional achievement?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Focus on impact—money saved, time
                saved, or revenue generated. Quantify it.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I redesigned our landing page which resulted in a 40%
                  increase in conversion rates, generating an extra $50,000 in
                  monthly revenue for the company."
                </p>
              </div>
            </div>

            {/* Q11 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                11. Tell me about a gap in your resume.
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Don't apologize. Explain it as a
                period of growth, caregiving, or intentional upskilling.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I took six months off to care for a family member. During
                  that time, I stayed active by completing a certification in
                  AWS and working on a few freelance web design projects."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 3: Behavioral */}
        <section
          id="behavioral"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            Category 3: Behavioral (STAR Method)
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q13 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                13. Describe a time you dealt with a difficult colleague.
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Focus on de-escalation and
                professionalism. Never badmouth the colleague.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "A colleague and I disagreed on the design of an API. Instead
                  of arguing, I scheduled a meeting to understand his
                  perspective. We realized we were both right about different
                  edge cases and merged our ideas into a robust solution."
                </p>
              </div>
            </div>

            {/* Q14 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                14. Tel me about a time you demonstrated leadership.
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Leadership isn't a title; it's an
                action. Talk about stepping up when no one asked you to.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "Our team lead was out sick during a critical launch. I took
                  the initiative to organize the daily standups and unblock
                  junior developers, ensuring we hit the deadline."
                </p>
              </div>
            </div>

            {/* Q15 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                15. How do you handle pressure?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Show that you have a system for
                prioritization and stress management.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I break down large tasks into smaller steps and prioritize
                  them using the Eisenhower Matrix. I also make sure to
                  communicate proactively if a deadline looks risky."
                </p>
              </div>
            </div>

            {/* Q16 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                16. Describe a time you disagreed with a decision.
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Show that you can disagree
                respectfully ("disagree and commit").
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "My manager wanted to use a specific vendor that I knew was
                  expensive. I prepared a cost-benefit analysis of three
                  alternatives. He appreciated the data, though we still went
                  with his choice for speed. I supported the implementation
                  fully."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 4: Work Style */}
        <section
          id="culture"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Coffee className="h-6 w-6 text-primary" />
            Category 4: Work Style & Culture
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q20 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                20. What is your ideal work environment?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Be honest, but try to align with the
                company's known culture.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I thrive in collaborative environments where feedback is
                  frequent. I also appreciate having dedicated quiet time for
                  deep work."
                </p>
              </div>
            </div>

            {/* Q21 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                21. Do you prefer working alone or in a team?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Say "both". Most jobs require a mix.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I enjoy brainstorming and planning with a team, as diverse
                  ideas lead to better solutions. However, for execution, I
                  enjoy heads-down focus time to write high-quality code."
                </p>
              </div>
            </div>

            {/* Q24 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                24. How do you handle feedback?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Feedback is a gift. Show you don't
                take it personally.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I actively seek feedback. In my last review, my boss noted my
                  documentation was sparse. I took that to heart and spent the
                  next week building a wiki for the team, which they now use
                  daily."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 5: Planning */}
        <section
          id="goals"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Category 5: Future Goals
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q26 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                26. Where do you see yourself in 5 years?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Show ambition but link it to the
                company. You want to grow <em>with</em> them.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I hope to have mastered the current tech stack and grown into
                  a Senior Developer role where I can mentor new hires and lead
                  architectural decisions for the product."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 6: Logistics */}
        <section
          id="logistics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layout className="h-6 w-6 text-primary" />
            Category 6: Salary & Logistics
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q30 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                30. What are your salary expectations?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Give a range based on market
                research. Use terms like "negotiable" or "depending on the total
                package."
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "Based on my research and experience, I'm looking for a range
                  between $80,000 and $90,000, but I am flexible depending on
                  the benefits and equity options."
                </p>
              </div>
            </div>

            {/* Q34 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                34. Do you have any other offers?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> It's okay to say yes to build
                scarcity, but reassure them they are your top choice to keep
                them interested.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I am in the final stages with two other companies, but
                  Sproutern is my top choice because of your mission and the
                  team I met."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 7: Tricky */}
        <section
          id="tricky"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            Category 7: Tricky Questions
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q35 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                35. What did you like least about your last job?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> Keep it professional. Don't complain
                about people. Focus on structural issues like "lack of growth"
                or "slow pace."
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "I loved the team, but the company was very large, which meant
                  decision-making was slow. I missed the agility of a smaller
                  startup environment."
                </p>
              </div>
            </div>

            {/* Q50 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                50. Why should we NOT hire you?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> A curveball! Frame it around fit. "If
                you want X, I might not be the best, but if you want Y, I'm your
                person."
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "If you are looking for someone who just follows orders
                  without questioning, I might not be a good fit. I tend to ask
                  'why' a lot to ensure we are building the right thing."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 8: Closing */}
        <section
          id="closing"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-primary" />
            Category 8: Closing Questions
          </h2>
          <div className="mt-6 space-y-8">
            {/* Q40 */}
            <div className="border-b pb-6">
              <h3 className="mb-2 text-xl font-bold">
                40. Do you have any questions for us?
              </h3>
              <p className="mb-4">
                <strong>Strategy:</strong> NEVER say no. Check the "Related
                Resources" for a guide on good questions to ask.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-muted p-4">
                <p className="mb-1 text-sm font-semibold text-primary">
                  Sample Answer:
                </p>
                <p className="italic text-muted-foreground">
                  "Yes! I'd love to know what the biggest challenge the team is
                  facing right now? Also, how does the team balance technical
                  debt with new feature development?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Final Thoughts: Practice Makes Perfect</h2>
          <p>
            Preparing for these questions isn't about memorizing lines like a
            robot. It's about knowing your own story well enough to adapt it to
            the conversation. Practice these answers in front of a mirror or
            with a friend. Good luck!
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/technical-interview-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Technical Interview Guide
            </Link>
            <Link
              href="/blog/salary-negotiation-freshers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Salary Negotiation Tips
            </Link>
            <Link
              href="/blog/body-language-in-interviews"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Body Language Tips
            </Link>
            <Link
              href="/blog/campus-placement-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Campus Placement Prep
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
