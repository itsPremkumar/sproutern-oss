import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MessageSquare,
  CheckCircle,
  XCircle,
  Lightbulb,
  AlertTriangle,
  Target,
  Users,
  Clock,
  Award,
  ArrowRight,
  BookOpen,
  User,
  Building,
  DollarSign,
  ThumbsUp,
  ThumbsDown,
  Star,
  Smile,
} from 'lucide-react';

export const metadata = getPageSEO('interviewCheatsheet');

export default function InterviewCheatsheetPage() {
  const schemas = getPageSchema('interviewCheatsheet');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <MessageSquare className="h-4 w-4" />
          Complete Interview Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          HR Interview Cheat Sheet
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Master your next interview with our comprehensive guide. 50+ common HR
          questions with proven answers, body language tips, salary negotiation
          strategies, and post-interview follow-up templates.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
          <Users className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium">35K+ Downloads</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
          <CheckCircle className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">HR-Verified</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
          <Clock className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Updated</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
          <Award className="h-5 w-5 text-orange-600" />
          <span className="text-sm font-medium">50+ Questions</span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="mx-auto mb-12 max-w-4xl rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
        <ol className="grid gap-2 text-sm md:grid-cols-2">
          <li>
            <a
              href="#pre-interview"
              className="text-primary hover:underline"
            >
              1. Pre-Interview Preparation
            </a>
          </li>
          <li>
            <a
              href="#common-questions"
              className="text-primary hover:underline"
            >
              2. 25 Common HR Questions
            </a>
          </li>
          <li>
            <a
              href="#star-method"
              className="text-primary hover:underline"
            >
              3. STAR Method Explained
            </a>
          </li>
          <li>
            <a
              href="#body-language"
              className="text-primary hover:underline"
            >
              4. Body Language & Presentation
            </a>
          </li>
          <li>
            <a
              href="#salary"
              className="text-primary hover:underline"
            >
              5. Salary Negotiation Tips
            </a>
          </li>
          <li>
            <a
              href="#questions-to-ask"
              className="text-primary hover:underline"
            >
              6. Questions to Ask Interviewer
            </a>
          </li>
          <li>
            <a
              href="#follow-up"
              className="text-primary hover:underline"
            >
              7. Post-Interview Follow-Up
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-primary hover:underline"
            >
              8. Frequently Asked Questions
            </a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto max-w-4xl space-y-16">
        {/* Section 1: Pre-Interview Preparation */}
        <section id="pre-interview">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            1. Pre-Interview Preparation Checklist
          </h2>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building className="h-5 w-5" />
                  Research the Company
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Company mission, vision, and values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Recent news, product launches, achievements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Key competitors and market position</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Company culture (check Glassdoor reviews)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>LinkedIn profiles of interviewers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5" />
                  Prepare Yourself
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Review job description thoroughly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Prepare 3-5 STAR method stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Practice your "Tell me about yourself"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Prepare 5 questions to ask interviewer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Plan your outfit the night before</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <h4 className="mb-2 flex items-center gap-2 font-semibold">
              <Clock className="h-4 w-4 text-yellow-600" />
              Day Before Checklist
            </h4>
            <ul className="grid gap-2 text-sm md:grid-cols-2">
              <li>✓ Confirm interview time and location/link</li>
              <li>✓ Print 3 copies of your resume</li>
              <li>✓ Test video/audio if virtual interview</li>
              <li>✓ Plan to arrive 10-15 minutes early</li>
              <li>✓ Prepare a notepad and pen</li>
              <li>✓ Get 7-8 hours of sleep</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Common HR Questions */}
        <section id="common-questions">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <MessageSquare className="h-6 w-6 text-primary" />
            2. 25 Common HR Interview Questions with Answers
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Tell me about yourself',
                a: "Structure your answer as Present-Past-Future. Start with your current role/education, highlight relevant past experiences, and connect to why you're excited about this opportunity. Keep it under 2 minutes.",
                tip: 'This is NOT your life story. Focus on professional relevance to the role.',
              },
              {
                q: 'Why do you want to work here?',
                a: "Show you've researched the company. Mention specific aspects: their mission, recent projects, culture, or growth opportunities. Connect these to your career goals.",
                tip: "Never say 'for the money' or 'I need a job.' Show genuine interest.",
              },
              {
                q: 'What are your strengths?',
                a: "Choose 2-3 strengths relevant to the job. Provide specific examples for each. Use: 'I'm particularly strong in [skill], for example, at my last role I [specific achievement].'",
                tip: "Back up claims with evidence. 'I'm a hard worker' means nothing without proof.",
              },
              {
                q: 'What are your weaknesses?',
                a: "Be honest but strategic. Choose a genuine weakness you're actively improving. Explain what you're doing to address it. Never say 'I'm a perfectionist' or 'I work too hard.'",
                tip: "Example: 'I used to struggle with public speaking, so I joined Toastmasters and now lead team meetings.'",
              },
              {
                q: 'Where do you see yourself in 5 years?',
                a: "Show ambition aligned with the company's growth. Mention wanting to grow skills, take on more responsibility, and contribute meaningfully. Be realistic but aspirational.",
                tip: "Don't say 'in your chair' or mention unrelated goals like starting your own company.",
              },
              {
                q: 'Why are you leaving your current job?',
                a: 'Focus on positive reasons: seeking growth, new challenges, or better alignment with your goals. Never badmouth previous employers even if justified.',
                tip: "Turn negatives into positives: 'I'm looking for an environment where I can grow my leadership skills.'",
              },
              {
                q: 'Tell me about a challenge you overcame',
                a: 'Use the STAR method. Describe a real work challenge, the specific actions you took, and quantify the positive outcome. Choose challenges relevant to the role.',
                tip: "Pick a challenge that showcases skills they're hiring for.",
              },
              {
                q: 'Why should we hire you?',
                a: 'Summarize your unique value proposition: relevant skills, experience, and enthusiasm. Connect your background directly to their needs. Be confident, not arrogant.',
                tip: 'This is your closing pitch. Reference specific job requirements you meet.',
              },
              {
                q: 'Describe a time you worked in a team',
                a: "Use STAR to describe a team project. Explain your specific role, how you collaborated, handled conflicts, and the team's outcome. Show you're a team player.",
                tip: "Balance 'I' and 'we' – show individual contribution and team spirit.",
              },
              {
                q: 'How do you handle stress and pressure?',
                a: 'Share specific strategies: prioritization, breaking tasks down, staying calm, or asking for help when needed. Provide an example of staying effective under pressure.',
                tip: 'Show self-awareness and practical coping mechanisms.',
              },
              {
                q: 'What motivates you?',
                a: 'Be authentic. Common motivators: solving problems, learning new things, helping others, seeing impact of your work. Connect to what this role offers.',
                tip: "Avoid 'money' as the primary motivator – it signals short-term commitment.",
              },
              {
                q: 'Do you prefer working alone or in a team?',
                a: "Show flexibility: 'I enjoy both. I can focus deeply on solo tasks but also thrive on the energy and diverse perspectives of teamwork. It depends on what the task requires.'",
                tip: 'Never say you only work one way – jobs require both.',
              },
              {
                q: 'How do you handle criticism?',
                a: "Show maturity: 'I view criticism as an opportunity to improve. I listen carefully, ask clarifying questions if needed, and take actionable feedback seriously.'",
                tip: 'Give an example where feedback helped you grow.',
              },
              {
                q: 'What is your greatest achievement?',
                a: 'Choose an achievement relevant to the role. Quantify the impact, explain challenges you overcame, and what you learned. Make it memorable.',
                tip: 'Professional achievements are better, but academic/personal ones work for freshers.',
              },
              {
                q: 'How do you prioritize your work?',
                a: 'Explain your system: deadline urgency, impact priority, or using tools like to-do lists. Give an example of managing multiple priorities successfully.',
                tip: 'Mention specific tools if you use them: Trello, Notion, calendars.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h4 className="mb-2 text-lg font-semibold">Q: {item.q}</h4>
                <p className="mb-2 text-sm text-muted-foreground">{item.a}</p>
                <p className="flex items-start gap-2 rounded bg-primary/10 p-2 text-xs">
                  <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    <strong>Pro Tip:</strong> {item.tip}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-muted p-4">
            <p className="text-center text-sm">
              <strong>Want more questions?</strong> Download our complete cheat
              sheet with 50+ questions and sample answers.
            </p>
          </div>
        </section>

        {/* Section 3: STAR Method */}
        <section id="star-method">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Star className="h-6 w-6 text-primary" />
            3. The STAR Method Explained
          </h2>

          <p className="mb-6 text-muted-foreground">
            The STAR method is the gold standard for answering behavioral
            interview questions. It helps you structure responses that are
            clear, concise, and impactful.
          </p>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 text-lg font-bold">S - Situation</h4>
              <p className="text-sm">
                Set the scene. Briefly describe the context and background of
                the situation. Keep it concise—just enough for the interviewer
                to understand.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 text-lg font-bold">T - Task</h4>
              <p className="text-sm">
                Explain your responsibility. What was your specific role or goal
                in this situation? What were you trying to achieve?
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <h4 className="mb-2 text-lg font-bold">A - Action</h4>
              <p className="text-sm">
                Describe what YOU did. Be specific about the steps you took.
                This should be the longest part—focus on your actions, not the
                team's.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <h4 className="mb-2 text-lg font-bold">R - Result</h4>
              <p className="text-sm">
                Share the outcome. Quantify if possible (percentages, numbers,
                time saved). What did you learn? What would you do differently?
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">STAR Method Example</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-semibold">
                Question: "Tell me about a time you led a team"
              </p>
              <div className="space-y-3 text-sm">
                <div className="rounded bg-muted p-3">
                  <span className="font-semibold text-blue-600">
                    Situation:
                  </span>{' '}
                  "During my final year, our capstone project team was
                  struggling with unclear direction and missed deadlines."
                </div>
                <div className="rounded bg-muted p-3">
                  <span className="font-semibold text-green-600">Task:</span>{' '}
                  "As the most experienced coder, I stepped up to lead the team
                  and get us back on track for our presentation."
                </div>
                <div className="rounded bg-muted p-3">
                  <span className="font-semibold text-purple-600">Action:</span>{' '}
                  "I organized daily stand-ups, broke our project into weekly
                  sprints, created a shared Notion board for task tracking, and
                  paired struggling members with stronger ones. I also clarified
                  roles so everyone knew their responsibilities."
                </div>
                <div className="rounded bg-muted p-3">
                  <span className="font-semibold text-orange-600">Result:</span>{' '}
                  "We not only finished on time but received the highest grade
                  in our batch. Two team members said it was the most organized
                  project they'd worked on. I learned that proactive
                  communication is key to team success."
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: Body Language */}
        <section id="body-language">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <Smile className="h-6 w-6 text-primary" />
            4. Body Language & Presentation Tips
          </h2>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
                <ThumbsUp className="h-5 w-5" />
                Do This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Maintain eye contact (but don't stare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Sit up straight, lean slightly forward</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Offer a firm (not crushing) handshake</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Smile genuinely and nod when listening</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Use hand gestures naturally when speaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <span>Mirror the interviewer's energy level</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-red-700 dark:text-red-300">
                <ThumbsDown className="h-5 w-5" />
                Avoid This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Crossing arms (defensive body language)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Fidgeting, tapping, or touching your face</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Looking at your phone or watch</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Slouching or appearing disinterested</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Speaking too fast or mumbling</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 text-red-600" />
                  <span>Interrupting the interviewer</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <h4 className="mb-2 flex items-center gap-2 font-semibold">
              <Lightbulb className="h-4 w-4 text-blue-600" />
              Virtual Interview Tips
            </h4>
            <ul className="space-y-1 text-sm">
              <li>• Position camera at eye level, not looking down</li>
              <li>• Look at the camera (not the screen) when speaking</li>
              <li>• Ensure good lighting—face a window or use a ring light</li>
              <li>• Use a neutral, professional background</li>
              <li>• Test audio/video 30 minutes before</li>
              <li>• Keep notes nearby (but don't read from them obviously)</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Salary Negotiation */}
        <section id="salary">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <DollarSign className="h-6 w-6 text-primary" />
            5. Salary Negotiation Strategies
          </h2>

          <div className="mb-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-semibold">
                When Asked: "What are your salary expectations?"
              </h4>
              <div className="space-y-3 text-sm">
                <p className="rounded bg-green-50 p-3 dark:bg-green-950">
                  <strong>Option 1 (Deflect):</strong> "I'm open to discussing
                  compensation once I better understand the full scope of the
                  role. What's the budgeted range for this position?"
                </p>
                <p className="rounded bg-green-50 p-3 dark:bg-green-950">
                  <strong>Option 2 (Range):</strong> "Based on my research and
                  experience, I'm looking at a range of ₹X-Y LPA. I'm flexible
                  depending on the total compensation package."
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Do This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">
                  ✓ Research market rates on Glassdoor, AmbitionBox
                </li>
                <li className="list-none">
                  ✓ Consider total compensation (base + benefits)
                </li>
                <li className="list-none">
                  ✓ Wait for them to mention numbers first if possible
                </li>
                <li className="list-none">
                  ✓ Express enthusiasm before negotiating
                </li>
                <li className="list-none">
                  ✓ Get the offer in writing before accepting
                </li>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Avoid This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <li className="list-none">
                  ✗ Accepting the first offer immediately
                </li>
                <li className="list-none">
                  ✗ Bringing up salary too early in the process
                </li>
                <li className="list-none">
                  ✗ Giving a single number (always give a range)
                </li>
                <li className="list-none">✗ Lying about your current salary</li>
                <li className="list-none">✗ Making threats or ultimatums</li>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <h4 className="mb-2 font-semibold">Negotiation Script Example</h4>
            <p className="text-sm italic">
              "Thank you so much for the offer—I'm really excited about this
              opportunity. Based on my research and the value I can bring with
              my [specific skill], I was hoping for something closer to ₹X. Is
              there flexibility in the budget?"
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <h3 className="mb-2 text-lg font-bold">
              Need the full salary negotiation guide?
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Go deeper with offer checklists, compensation breakdown tips, and
              ready-to-use scripts for common negotiation scenarios.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/resources/salary-negotiation">
                  Read Salary Negotiation Guide
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link href="/tools/salary-negotiation">
                  Open Negotiation Tool
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 6: Questions to Ask */}
        <section id="questions-to-ask">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <MessageSquare className="h-6 w-6 text-primary" />
            6. Questions to Ask the Interviewer
          </h2>

          <p className="mb-6 text-muted-foreground">
            Asking thoughtful questions shows genuine interest and helps you
            evaluate if the role is right for you. Prepare 5-7 questions; you'll
            likely ask 2-3.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  About the Role
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  • What does success look like in this role after 6 months?
                </p>
                <p>
                  • What are the biggest challenges someone in this position
                  faces?
                </p>
                <p>• Can you describe a typical day or week in this role?</p>
                <p>
                  • How does this role contribute to the team/company goals?
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  About the Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Can you tell me about the team I'd be working with?</p>
                <p>• How does the team collaborate on projects?</p>
                <p>• What's the management style of the direct supervisor?</p>
                <p>• How does the team handle disagreements?</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  About Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  • What learning and development opportunities are available?
                </p>
                <p>• How do you support career progression?</p>
                <p>• Where have people in this role typically moved on to?</p>
                <p>• Are there mentorship programs available?</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  About the Company
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• What excites you most about the company's future?</p>
                <p>• How would you describe the company culture?</p>
                <p>
                  • What's the biggest challenge the company faces right now?
                </p>
                <p>• How has the company evolved over the past few years?</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <h4 className="mb-2 flex items-center gap-2 font-semibold">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              Questions to Avoid
            </h4>
            <ul className="space-y-1 text-sm">
              <li>✗ "What does the company do?" (Shows you didn't research)</li>
              <li>✗ "How soon can I take leave?" (Shows wrong priorities)</li>
              <li>✗ "When can I get promoted?" (Too presumptuous)</li>
              <li>✗ Questions answered on the job description or website</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Follow-Up */}
        <section id="follow-up">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <ArrowRight className="h-6 w-6 text-primary" />
            7. Post-Interview Follow-Up
          </h2>

          <div className="mb-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-semibold">
                Thank You Email Template (Send within 24 hours)
              </h4>
              <div className="rounded bg-muted p-4 font-mono text-sm">
                <p>Subject: Thank You - [Position] Interview</p>
                <br />
                <p>Dear [Interviewer Name],</p>
                <br />
                <p>
                  Thank you for taking the time to speak with me today about the
                  [Position] role at [Company]. I enjoyed learning more about
                  [specific topic discussed] and the exciting challenges the
                  team is working on.
                </p>
                <br />
                <p>
                  Our conversation reinforced my enthusiasm for the role,
                  particularly [specific aspect]. I'm confident that my
                  experience in [relevant skill] would allow me to contribute
                  meaningfully to [specific goal mentioned].
                </p>
                <br />
                <p>
                  Please don't hesitate to reach out if you need any additional
                  information. I look forward to hearing from you regarding the
                  next steps.
                </p>
                <br />
                <p>
                  Best regards,
                  <br />
                  [Your Name]
                  <br />
                  [Phone Number]
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <h4 className="mb-2 font-semibold">Follow-Up Timeline</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Within 24 hours:</strong> Send thank you email
              </li>
              <li>
                <strong>1 week later:</strong> If no response, polite follow-up
              </li>
              <li>
                <strong>2 weeks later:</strong> Final check-in (don't be pushy)
              </li>
              <li>
                <strong>After rejection:</strong> Thank them and ask for
                feedback
              </li>
            </ul>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq">
          <h2 className="mb-6 text-2xl font-bold">
            8. Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What should I wear to an interview?',
                a: "Dress one level above the company's dress code. For corporate roles: formal attire (suit or business formal). For startups: smart casual (neat jeans, collared shirt). When in doubt, err on the side of formal. Ensure clothes are clean, pressed, and fit well.",
              },
              {
                q: 'How early should I arrive?',
                a: 'Aim to arrive 10-15 minutes early. Arriving too early (30+ minutes) can inconvenience the interviewer. Use extra time to review notes in your car or a nearby café. For virtual interviews, join 5 minutes before.',
              },
              {
                q: "What if I don't know the answer to a question?",
                a: "Be honest: 'That's a great question. I don't have direct experience with that, but based on my knowledge of [related area], I would approach it by...' It's better to admit gaps than to lie.",
              },
              {
                q: 'How long should my answers be?',
                a: "Aim for 1-2 minutes per answer. Use the 'headline and detail' approach: give a brief answer, then elaborate. If unsure, ask: 'Would you like me to elaborate on that?'",
              },
              {
                q: 'Should I bring anything to the interview?',
                a: 'Yes: 3 copies of your resume, a notepad and pen, a list of references, portfolio (if relevant), and 5 prepared questions. Put everything in a professional folder or bag.',
              },
              {
                q: 'How do I handle illegal or inappropriate questions?',
                a: "Questions about age, religion, marital status, or family planning are illegal in many countries. Politely redirect: 'I prefer to focus on my professional qualifications. Can you tell me more about the role's requirements?'",
              },
              {
                q: 'What if the interviewer is running late?',
                a: "Wait patiently for at least 15-20 minutes. If no communication, politely check with reception or send a brief email. Don't show frustration—it's a test of your professionalism.",
              },
              {
                q: 'How do I calm interview nerves?',
                a: 'Prepare thoroughly—confidence comes from preparation. Practice deep breathing before the interview. Remember: the interviewer wants you to succeed. Visualize a successful interview. Arrive early to settle in.',
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

        {/* CTA Section */}
        <section className="rounded-2xl bg-secondary p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Ace Your Interview?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Practice makes perfect. Use our interview preparation tools and
            resources to build confidence before your next interview.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/resources/interview-prep">Full Interview Guide</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/resume-guide">Resume Writing Guide</Link>
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
              <h3 className="mb-1 font-semibold">Interview Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Complete interview guide
              </p>
            </Link>
            <Link
              href="/resources/aptitude-formulas"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Aptitude Formulas</h3>
              <p className="text-sm text-muted-foreground">
                Ace quantitative tests
              </p>
            </Link>
            <Link
              href="/resources/networking"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Networking Guide</h3>
              <p className="text-sm text-muted-foreground">
                Build professional connections
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
