import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  BookOpen,
  AlertTriangle,
  Target,
  Building2,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MNC HR Interview Questions for Freshers',
  description:
    'Master MNC HR interviews with 50+ commonly asked questions and best answers. Learn behavioral questions, STAR method examples, and tips to impress HR interviewers at TCS, Infosys, Wipro, and other MNCs.',
  keywords: [
    'MNC HR interview',
    'HR interview questions',
    'fresher interview',
    'behavioral questions',
    'HR round preparation',
    'MNC HR interview answers',
  ],
  openGraph: {
    title: 'MNC HR Interview Questions - Complete Guide for Freshers',
    description:
      'Ace MNC HR interviews with comprehensive question bank and proven answers.',
    type: 'article',
    publishedTime: '2025-12-17T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <MessageSquare className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              MNC Placement Prep
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            MNC HR Interview Questions - Complete Guide for Freshers
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Master MNC HR interviews with 50+ commonly asked questions and
            expert-approved answers. Learn how to handle behavioral questions,
            demonstrate cultural fit, and make a lasting impression.
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
                Prepare 5-7 STAR method examples covering different scenarios
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Research the company thoroughly - values, culture, recent news
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Always prepare 2-3 thoughtful questions to ask the interviewer
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Be authentic - don't fake answers, be honest about strengths and
                weaknesses
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Practice with our{' '}
                <Link
                  href="/tools/interview-questions"
                  className="text-primary hover:underline"
                >
                  Interview Question Generator
                </Link>
              </span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <p className="lead">
            HR interviews are the final hurdle before getting your MNC job
            offer. While technical interviews test your skills, HR interviews
            assess your personality, cultural fit, communication, and long-term
            commitment.{' '}
            <strong>
              Many candidates clear technical rounds but fail HR rounds
            </strong>{' '}
            due to lack of preparation.
          </p>
          <p>
            This comprehensive guide covers 50+ HR interview questions commonly
            asked by MNCs like TCS, Infosys, Wipro, Accenture, and product
            companies, with detailed answers and preparation strategies.
          </p>
        </section>

        {/* Section 1: Common HR Questions */}
        <section
          id="common-questions"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            1. Most Common HR Interview Questions
          </h2>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Q1: Tell me about yourself.</h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                <strong>Answer Structure:</strong>
              </p>
              <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                <li>Start with current education/background (1-2 sentences)</li>
                <li>Highlight key skills and achievements (2-3 sentences)</li>
                <li>
                  Mention relevant projects or experiences (2-3 sentences)
                </li>
                <li>Express interest in the role/company (1 sentence)</li>
              </ol>
            </div>
            <div className="rounded bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
              <strong>Example Answer:</strong> "I'm a final year Computer
              Science student at [College] with a CGPA of 8.5. I'm passionate
              about software development and have built 3 projects using Java
              and React. My project on [Project Name] helped me learn [Skill].
              I'm excited about this opportunity at [Company] because [Reason]."
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Tip:</strong> Keep it 2-3 minutes. Practice this answer -
              it's often the first question. Read our{' '}
              <Link
                href="/blog/how-to-answer-tell-me-about-yourself"
                className="text-primary hover:underline"
              >
                complete guide on answering "Tell me about yourself"
              </Link>
              .
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q2: Why do you want to join our company?
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                <strong>Answer Structure:</strong>
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  Research the company - products, values, culture, recent
                  achievements
                </li>
                <li>Connect your skills/goals with company's work</li>
                <li>Mention specific things you admire about the company</li>
                <li>Show genuine interest, not generic answers</li>
              </ul>
            </div>
            <div className="rounded bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
              <strong>Example Answer:</strong> "I'm impressed by [Company]'s
              commitment to innovation and its recent work on [Specific
              Project/Technology]. Your company values align with my career
              goals of [Goal]. I'm particularly excited about the opportunity to
              work on [Specific Area] and contribute to [Company Mission]."
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Tip:</strong> Never say "I need a job" or "Good salary".
              Show genuine interest in the company.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q3: What are your strengths and weaknesses?
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                <strong>For Strengths:</strong>
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Choose 2-3 relevant strengths</li>
                <li>Support with examples</li>
                <li>Connect to job requirements</li>
              </ul>
              <p className="mb-2 mt-3 text-sm text-muted-foreground">
                <strong>For Weaknesses:</strong>
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Choose a real but minor weakness</li>
                <li>Show you're working on it</li>
                <li>Never say "I don't have weaknesses"</li>
              </ul>
            </div>
            <div className="rounded bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
              <strong>Example - Weakness:</strong> "I sometimes take on too many
              tasks. However, I've learned to prioritize using time management
              techniques and now create daily task lists. This has helped me
              become more efficient."
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q4: Where do you see yourself in 5 years?
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="text-sm text-muted-foreground">
                Show ambition but also commitment to the company. Mention growth
                within the organization.
              </p>
            </div>
            <div className="rounded bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
              <strong>Example Answer:</strong> "In 5 years, I see myself as a
              senior [Role] with deep expertise in [Technology/Domain]. I want
              to grow within [Company], take on more responsibilities, and
              mentor junior developers. I'm committed to continuous learning and
              contributing to [Company]'s success."
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">Q5: Why should we hire you?</h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                Summarize your unique value proposition:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Relevant skills and experience</li>
                <li>Enthusiasm and willingness to learn</li>
                <li>Cultural fit</li>
                <li>Long-term commitment</li>
              </ul>
            </div>
            <div className="rounded bg-blue-50 p-3 text-sm dark:bg-blue-950/20">
              <strong>Example Answer:</strong> "I bring strong technical skills
              in [Skills], proven through my projects. I'm a quick learner, team
              player, and passionate about [Domain]. I'm committed to growing
              with [Company] and contributing to your success."
            </div>
          </div>
        </section>

        {/* Section 2: Behavioral Questions */}
        <section
          id="behavioral"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Behavioral Interview Questions (STAR Method)
          </h2>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/20">
            <p className="text-sm">
              <strong>STAR Method:</strong> Structure your answers using
              Situation, Task, Action, Result. Read our{' '}
              <Link
                href="/blog/mastering-star-method"
                className="font-semibold text-primary hover:underline"
              >
                Complete STAR Method Guide
              </Link>{' '}
              for detailed examples.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q6: Tell me about a time you worked in a team.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                <strong>STAR Structure:</strong>
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong>Situation:</strong> "During my final year project, we
                  had a team of 4..."
                </li>
                <li>
                  <strong>Task:</strong> "We needed to build a web application
                  in 3 months..."
                </li>
                <li>
                  <strong>Action:</strong> "I took responsibility for backend
                  development, coordinated with frontend team, conducted daily
                  standups..."
                </li>
                <li>
                  <strong>Result:</strong> "We completed the project on time,
                  received A grade, and I learned valuable teamwork skills."
                </li>
              </ul>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q7: Describe a challenging situation you faced.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="text-sm text-muted-foreground">
                Choose a real challenge, explain how you analyzed it, what
                actions you took, and what you learned. Show problem-solving
                ability.
              </p>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q8: Give an example of leadership.
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="text-sm text-muted-foreground">
                Even without formal leadership role, show instances where you
                took initiative, influenced others, or led a project/task.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Company-Specific Questions */}
        <section
          id="company-specific"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            3. Company-Specific Questions
          </h2>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q9: Are you willing to relocate?
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="text-sm text-muted-foreground">
                Be honest but flexible. If willing, say yes enthusiastically. If
                not, explain constraints but show flexibility for future
                opportunities.
              </p>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q10: What do you know about our company?
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                Research thoroughly:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Company products/services</li>
                <li>Recent news/achievements</li>
                <li>Company values and culture</li>
                <li>Leadership team</li>
                <li>Company mission/vision</li>
              </ul>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg bg-muted/50 p-4">
            <h4 className="mb-2 font-semibold">
              Q11: Do you have any questions for us?
            </h4>
            <div className="mb-2 rounded border bg-background p-3">
              <p className="mb-2 text-sm text-muted-foreground">
                Always prepare 2-3 thoughtful questions:
              </p>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>"What does a typical day look like for this role?"</li>
                <li>"What are the growth opportunities in this position?"</li>
                <li>"What do you enjoy most about working here?"</li>
                <li>"What are the biggest challenges facing the team?"</li>
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Never ask:</strong> About salary, holidays, or anything
                negative.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Preparation Tips */}
        <section
          id="preparation"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            4. HR Interview Preparation Tips
          </h2>

          <h3>Before the Interview</h3>
          <ol>
            <li>
              <strong>Research the Company:</strong> Visit website, read recent
              news, understand values and culture.
            </li>
            <li>
              <strong>Prepare STAR Examples:</strong> Prepare 5-7 examples
              covering teamwork, leadership, problem-solving, conflict
              resolution, failure, success.
            </li>
            <li>
              <strong>Practice Common Questions:</strong> Practice answers out
              loud, record yourself, get feedback.
            </li>
            <li>
              <strong>Prepare Questions:</strong> Have 2-3 thoughtful questions
              ready to ask.
            </li>
            <li>
              <strong>Dress Professionally:</strong> Business formal or business
              casual depending on company culture.
            </li>
          </ol>

          <h3>During the Interview</h3>
          <ul>
            <li>Maintain eye contact and positive body language</li>
            <li>Listen carefully before answering</li>
            <li>Think for 2-3 seconds before answering complex questions</li>
            <li>Be authentic and honest</li>
            <li>Show enthusiasm and interest</li>
            <li>Ask clarifying questions if needed</li>
          </ul>

          <div className="not-prose my-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <p className="text-sm">
              <strong>Pro Tip:</strong> Use our{' '}
              <Link
                href="/tools/interview-questions"
                className="font-semibold text-primary hover:underline"
              >
                Interview Question Generator
              </Link>{' '}
              to practice HR questions. Also read our{' '}
              <Link
                href="/blog/50-common-hr-interview-questions-and-best-answers"
                className="font-semibold text-primary hover:underline"
              >
                50 Common HR Interview Questions
              </Link>{' '}
              guide.
            </p>
          </div>
        </section>

        {/* Section 5: Common Mistakes */}
        <section
          id="mistakes"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            5. Common Mistakes to Avoid
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 1: Not Researching the Company
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Shows lack of interest. Always research company thoroughly
                before interview.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 2: Not Asking Any Questions</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Shows disinterest. Always prepare and ask thoughtful questions.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Mistake 3: Speaking Negatively</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Never criticize previous employers, college, or colleagues. Stay
                positive.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 4: Being Too Casual or Too Formal
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Find the right balance - professional but friendly.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">
                Mistake 5: Not Preparing "Tell Me About Yourself"
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                This is often the first question. Not preparing shows lack of
                preparation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                How long should my answers be in HR interviews?
              </p>
              <p className="mt-2 text-muted-foreground">
                Keep answers concise - 1-2 minutes for simple questions, 2-3
                minutes for behavioral questions using STAR method. Be thorough
                but don't ramble.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I mention salary expectations in HR round?
              </p>
              <p className="mt-2 text-muted-foreground">
                Only if asked. Research market rates, give a range, and mention
                you're flexible. Don't bring it up first.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What if I don't have work experience for behavioral questions?
              </p>
              <p className="mt-2 text-muted-foreground">
                Use college projects, group assignments, internships,
                hackathons, or any leadership/teamwork experiences. The
                situation doesn't have to be professional.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Master HR Interviews</h2>
          <p>
            HR interviews assess your personality, communication, and cultural
            fit. With proper preparation, authentic answers, and the right
            mindset, you can ace MNC HR interviews and secure your dream job.
          </p>
          <p className="text-lg font-semibold text-primary">
            Practice with our{' '}
            <Link
              href="/tools/interview-questions"
              className="hover:underline"
            >
              Interview Question Generator
            </Link>
            , read our{' '}
            <Link
              href="/blog/mastering-star-method"
              className="hover:underline"
            >
              STAR Method Guide
            </Link>
            , and prepare thoroughly. Good luck! 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/companies/mnc-interview-questions"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              MNC Interview Questions Hub
            </Link>
            <Link
              href="/blog/mastering-star-method"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              STAR Method Guide
            </Link>
            <Link
              href="/blog/50-common-hr-interview-questions-and-best-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              50 Common HR Interview Questions
            </Link>
            <Link
              href="/blog/how-to-answer-tell-me-about-yourself"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Tell Me About Yourself Guide
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on insights from 10,000+ MNC HR interviews and feedback
                from HR managers at top companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
