import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  MessageSquare,
  User,
  Briefcase,
  Target,
  Lightbulb,
  Clock,
  AlertTriangle,
  Star,
  Users,
  BookOpen,
  Video,
  Mic,
  Monitor,
  Brain,
  ThumbsUp,
  XCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Calendar,
  Building2,
  Code,
  Heart,
  Sparkles,
} from 'lucide-react';

export const metadata = getPageSEO('interviewPrep');

// Interview statistics for credibility
const interviewStats = [
  { value: '7 seconds', label: 'First impression formed', icon: Clock },
  {
    value: '5-8',
    label: 'Average interviews before offer',
    icon: MessageSquare,
  },
  { value: '93%', label: 'Importance of body language', icon: User },
  {
    value: '47%',
    label: 'Fail due to lack of company knowledge',
    icon: Building2,
  },
];

// Common HR questions with detailed answers
const hrQuestions = [
  {
    question: 'Tell me about yourself.',
    tip: "Use the Present-Past-Future formula. Start with your current role/studies, mention relevant past experience, and explain why you're interested in this role.",
    example:
      "I'm a final-year Computer Science student at Delhi University, currently working on a machine learning project for sentiment analysis. Previously, I interned at a fintech startup where I developed RESTful APIs using Python. I'm excited about this role because it combines my passion for ML with real-world product development.",
    mistakes: [
      'Sharing personal life stories',
      'Reciting your entire resume',
      'Being too brief or too long',
    ],
  },
  {
    question: 'Why do you want to work here?',
    tip: "Show you've done your research. Mention specific projects, company values, or recent news that excites you. Connect their mission with your career goals.",
    example:
      "I've been following Razorpay's journey since your Series D, and I'm impressed by how you've democratized payments for small businesses. Your recent launch of Razorpay Capital aligns with my interest in fintech innovation. I want to be part of a team that's solving real problems for Indian entrepreneurs.",
    mistakes: [
      "Generic answers like 'great company'",
      "Focusing only on what you'll gain",
      'Not mentioning anything specific',
    ],
  },
  {
    question: 'What are your greatest strengths?',
    tip: 'Choose strengths relevant to the job. Back them up with specific examples using the STAR method.',
    example:
      'My greatest strength is problem-solving under pressure. During my internship, our production server crashed on a Friday evening. I methodically debugged the issue, identified a memory leak in our new feature, and deployed a fix within 2 hours, preventing weekend downtime for 10,000 users.',
    mistakes: [
      'Listing generic traits without examples',
      'Being too humble',
      'Mentioning irrelevant strengths',
    ],
  },
  {
    question: 'What is your greatest weakness?',
    tip: "Choose a real weakness that isn't critical to the job. Most importantly, explain what steps you're taking to improve. Show self-awareness and growth.",
    example:
      "I used to struggle with public speaking. In my second year, I'd get nervous presenting to even small groups. I joined my college's debate club and volunteered to present in every team meeting. Now I can confidently present to 50+ people, though I still prepare extensively.",
    mistakes: [
      "Fake weaknesses like 'I work too hard'",
      'Critical weaknesses for the role',
      'Not mentioning improvement efforts',
    ],
  },
  {
    question: 'Where do you see yourself in 5 years?',
    tip: "Be ambitious but realistic. Align your goals with the company's growth. It's okay to say you want to master your current role and take on more responsibility.",
    example:
      "In 5 years, I see myself as a senior engineer who has deep expertise in distributed systems. I want to lead technical projects and mentor junior developers. I'm excited about growing with a company like yours where I can take on increasing responsibility as I develop.",
    mistakes: [
      "Saying 'in your job'",
      'Being too vague',
      'Showing no ambition',
    ],
  },
  {
    question: 'Why should we hire you?',
    tip: 'Summarize your unique value proposition. Connect your skills, experience, and enthusiasm to their specific needs.',
    example:
      "You should hire me because I bring three things: First, hands-on experience building scalable web applications with React and Node.js. Second, a proven track record of learning quickly—I went from zero to deployed production code in my first month at my internship. Third, genuine passion for fintech—I've built two personal projects in this space.",
    mistakes: [
      'Being generic',
      'Not connecting to their needs',
      'Underselling yourself',
    ],
  },
  {
    question: 'Tell me about a time you failed.',
    tip: 'Choose a real failure but focus on what you learned. Show self-reflection and growth.',
    example:
      "In my third year, I led a hackathon team that didn't finish our project. I had underestimated the complexity and didn't allocate tasks effectively. We had three people working on the frontend while backend was falling behind. I learned to assess project scope more realistically and now always start with a clear task breakdown and daily standups.",
    mistakes: [
      'Blaming others',
      'Choosing a trivial failure',
      'Not explaining what you learned',
    ],
  },
  {
    question: 'Do you have any questions for us?',
    tip: 'Always ask thoughtful questions. This shows genuine interest and helps you evaluate the company.',
    example:
      "Yes, I have a few questions: 1) What does success look like in this role in the first 3 months? 2) What's the team structure and how does collaboration work? 3) What's the biggest challenge the team is currently facing?",
    mistakes: [
      "Saying 'no questions'",
      'Asking about salary in first round',
      'Asking things easily found online',
    ],
  },
];

// Behavioral questions with STAR examples
const behavioralQuestions = [
  {
    question: 'Tell me about a time you showed leadership.',
    situation:
      'Our college technical fest was understaffed with only 3 weeks until the event.',
    task: 'As event coordinator, I needed to recruit and motivate 20+ volunteers quickly.',
    action:
      'I created a compelling pitch about the experience value, reached out through class WhatsApp groups, and designed a tiered responsibility system so even busy students could contribute a few hours.',
    result:
      'Recruited 25 volunteers, delegated effectively, and the event had 500+ attendees—30% more than the previous year.',
  },
  {
    question: 'Describe a time you handled conflict in a team.',
    situation:
      'During a group project, two team members disagreed on the database choice—one wanted SQL, the other NoSQL.',
    task: 'As team lead, I needed to resolve this quickly without damaging relationships.',
    action:
      'I organized a 30-minute meeting where each person presented their reasoning. I asked clarifying questions and proposed we evaluate both options against our specific requirements: query complexity, scalability needs, and team familiarity.',
    result:
      'We chose PostgreSQL based on objective criteria. Both members felt heard, and we completed the project on time with an A grade.',
  },
  {
    question: 'Tell me about a time you went above and beyond.',
    situation:
      'During my internship, I noticed our customer support team was spending hours manually categorizing tickets.',
    task: 'Though not part of my job, I wanted to help automate this process.',
    action:
      'I built a simple ML classifier using Python and scikit-learn during my lunch breaks over two weeks. I trained it on historical ticket data and created a simple API the support team could use.',
    result:
      'The tool reduced manual categorization time by 60%, and my manager featured it in the quarterly review. I received a PPO offer partly due to this initiative.',
  },
  {
    question: 'Describe a time you had to learn something quickly.',
    situation:
      'My internship required me to work with Kubernetes, which I had never used before.',
    task: 'I needed to deploy our new microservice within my first two weeks.',
    action:
      'I spent evenings going through the official documentation and Udemy courses. I set up a local Minikube cluster to practice. I also asked a senior engineer to review my deployment configurations.',
    result:
      'Successfully deployed the service on time. By the end of my internship, I was helping onboard other interns to Kubernetes.',
  },
];

// Technical interview tips
const technicalTips = [
  {
    category: 'Before the Interview',
    tips: [
      'Review core DSA concepts: arrays, trees, graphs, dynamic programming',
      'Practice on LeetCode/HackerRank—aim for 150+ problems',
      "Study the company's tech stack and recent engineering blogs",
      'Prepare to discuss your projects in technical depth',
      'Review system design basics for senior roles',
    ],
  },
  {
    category: 'During the Interview',
    tips: [
      'Clarify the problem before jumping into code',
      'Think out loud—interviewers want to see your thought process',
      'Start with a brute force solution, then optimize',
      'Test your code with sample inputs before submitting',
      "If stuck, ask for hints—it's better than silence",
    ],
  },
  {
    category: 'After the Interview',
    tips: [
      'Send a thank-you email within 24 hours',
      'Reflect on questions you struggled with and study them',
      'Note down questions asked for future reference',
      "Ask for feedback if you're rejected",
      'Keep practicing regardless of outcome',
    ],
  },
];

// Virtual interview tips
const virtualInterviewTips = [
  {
    icon: Monitor,
    title: 'Technical Setup',
    tips: [
      'Test your camera, microphone, and internet beforehand',
      'Use a laptop/desktop, not a phone',
      'Have a backup device ready',
      'Close unnecessary apps to prevent notifications',
      'Use wired internet if possible',
    ],
  },
  {
    icon: Video,
    title: 'Environment',
    tips: [
      'Choose a quiet, well-lit space',
      'Position light in front of you, not behind',
      'Use a plain, professional background',
      'Ensure your face is clearly visible',
      'Remove distracting items from view',
    ],
  },
  {
    icon: Mic,
    title: 'Communication',
    tips: [
      'Look at the camera, not the screen',
      'Nod and react to show engagement',
      'Pause slightly before answering (account for lag)',
      "Mute when not speaking if there's background noise",
      'Keep your browser/notes for reference',
    ],
  },
  {
    icon: User,
    title: 'Presentation',
    tips: [
      'Dress professionally (full outfit, not just top)',
      'Sit up straight and maintain good posture',
      'Keep water nearby',
      'Have your resume and job description ready',
      'Join 5 minutes early to settle in',
    ],
  },
];

// Industry-specific interview tips
const industryTips = [
  {
    industry: 'Tech/IT',
    icon: Code,
    preparation: [
      'Master DSA—90%+ of tech interviews test this',
      'Practice system design for senior roles',
      'Be ready to code on whiteboard/shared screen',
      'Know your projects inside out',
      'Understand Big O notation',
    ],
    commonQuestions: [
      'Design a URL shortener',
      'Implement LRU cache',
      'Explain your most challenging project',
      'How would you scale this system?',
    ],
  },
  {
    industry: 'Finance/Banking',
    icon: TrendingUp,
    preparation: [
      'Review financial modeling concepts',
      'Brush up on Excel and VBA',
      'Understand current market trends',
      "Know about the company's recent deals",
      'Practice case studies',
    ],
    commonQuestions: [
      'Walk me through a DCF model',
      'What would you invest in and why?',
      'Explain a recent market event',
      'How do you stay updated on finance?',
    ],
  },
  {
    industry: 'Consulting',
    icon: Brain,
    preparation: [
      'Practice case interviews extensively',
      "Learn frameworks (Porter's 5, SWOT, etc.)",
      'Work on mental math',
      'Prepare structured answers',
      'Read business news daily',
    ],
    commonQuestions: [
      'Estimate the market size for X',
      "A client's profits are declining. What would you do?",
      'Tell me about a time you influenced someone',
      'Why consulting?',
    ],
  },
  {
    industry: 'Marketing',
    icon: Target,
    preparation: [
      'Know digital marketing tools and metrics',
      'Prepare a portfolio of campaigns',
      "Understand the company's brand positioning",
      'Follow industry trends and case studies',
      'Be creative in your answers',
    ],
    commonQuestions: [
      'How would you market this product to Gen Z?',
      'Analyze our recent campaign',
      "What's your favorite marketing campaign and why?",
      'How do you measure marketing success?',
    ],
  },
];

// FAQs
const faqs = [
  {
    question: 'How early should I start preparing for interviews?',
    answer:
      "Start at least 2-3 months before your target interview date. For technical roles, you may need 3-6 months of consistent DSA practice. Even if you don't have interviews scheduled, regular preparation keeps you ready for unexpected opportunities.",
  },
  {
    question: 'How many mock interviews should I do?',
    answer:
      'Aim for at least 5-10 mock interviews before your real ones. Use platforms like Pramp for free peer practice, or ask friends/seniors in the industry. Record yourself to identify verbal tics and body language issues.',
  },
  {
    question: 'What should I wear to an interview?',
    answer:
      'For tech/startup: Business casual (neat shirt, proper pants, no ties). For corporate/finance: Business formal (suit, tie). When in doubt, err on the side of more formal. Virtual interviews: Dress professionally from head to toe—you might need to stand up.',
  },
  {
    question: 'How do I handle stress during interviews?',
    answer:
      "Practice deep breathing before the interview. Prepare thoroughly—the more prepared you are, the less anxious you'll feel. Remember that interviewers want you to succeed. If you feel nervous, it's okay to take a moment to think before answering.",
  },
  {
    question: "What if I don't know the answer to a question?",
    answer:
      "Be honest. Say 'I'm not entirely sure, but here's how I would approach it...' Interviewers appreciate honesty and problem-solving ability over pretending to know. Ask clarifying questions to buy time and demonstrate your thought process.",
  },
  {
    question: 'Should I follow up after an interview?',
    answer:
      "Yes, always send a thank-you email within 24 hours. Reference specific conversation points, reiterate your interest, and keep it brief. If you don't hear back within the stated timeline, a polite follow-up after one week is appropriate.",
  },
  {
    question: 'How do I negotiate salary after getting an offer?',
    answer:
      "Research market rates first (use Glassdoor, LinkedIn Salary). Express enthusiasm about the offer, then say 'Based on my research and experience, I was hoping for [X]. Is there flexibility?' Be prepared with justification and be ready to accept the original offer if negotiation fails.",
  },
  {
    question: 'What if I have a gap in my resume?',
    answer:
      "Be honest but strategic. Highlight any productive activities during the gap: learning new skills, freelancing, volunteering, personal projects. Frame the gap as a period of growth and show how you're now better prepared for the role.",
  },
];

export default function InterviewPrepPage() {
  const schemas = getPageSchema('interviewPrep');

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <BookOpen className="h-4 w-4" />
          Complete Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Master Your Interview Preparation
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          A comprehensive guide to cracking internship and job interviews in
          India. From common HR questions to behavioral frameworks and technical
          tips—everything you need to succeed.
        </p>
      </div>

      {/* My Interview Journey - Personal Story Section */}
      <section className="mx-auto mb-12 max-w-4xl rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:border-indigo-900 dark:from-indigo-950/30 dark:to-purple-950/30">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Heart className="h-6 w-6 text-red-500" />
          My Interview Journey: From Rejection to Multiple Offers
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Let me be honest with you:{' '}
            <strong>I was terrible at interviews</strong>. During my third year
            at MIT Chennai, I went to my first placement interview so nervous
            that I forgot my own introduction. The interviewer asked me to "tell
            me about yourself" — arguably the easiest question — and I went
            completely blank. I mumbled something about my CGPA, listed some
            random skills, and the whole thing lasted about 5 minutes before
            they politely ended it.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            That rejection hurt. But what hurt more was not understanding{' '}
            <em>why</em> I failed. I knew my technical concepts. I had prepared
            answers. So what went wrong? It took me three more rejections and a
            lot of self-reflection to realize the truth:{' '}
            <strong>
              interviews aren't exams where you recite memorized answers
            </strong>
            . They're conversations where you demonstrate your thinking, your
            personality, and your potential value to a team.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Over the next few months, I became obsessed with cracking the
            interview code. I watched over 50 mock interview videos on YouTube,
            read books on psychology and communication, practiced with friends,
            and most importantly — I failed a few more times and learned from
            each one. By the time placement season ended, I had offers from
            three companies, including one that had rejected me earlier in the
            year.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            This guide is everything I wish I had known before that first
            disastrous interview. It's not just a collection of questions and
            answers — it's a complete system for understanding how interviews
            work, what interviewers are really looking for, and how to present
            yourself authentically while still making a strong impression.
            Whether you're preparing for your very first interview or trying to
            improve after some rejections, I've been where you are.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            <strong>Remember this:</strong> Interview skills can be learned. The
            nervous student who forgot their own introduction became confident
            enough to handle curveball questions from senior managers. If I
            could transform my interview performance, so can you.
          </p>
        </div>
      </section>

      {/* What Most Interview Advice Gets Wrong */}
      <section className="mx-auto mb-12 max-w-4xl rounded-2xl border-2 border-orange-200 bg-white p-8 dark:border-orange-800 dark:bg-slate-900">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          What Most Interview Advice Gets Wrong
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Before we dive into the questions and frameworks, I need to address
            something that bothered me when I was preparing:{' '}
            <strong>most interview advice is generic and outdated</strong>.
            You've probably seen the same "top 50 interview questions" list
            recycled across every website. But here's the problem — memorizing
            scripted answers is exactly what interviewers are trained to detect.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold">
            Myth 1: "You need the perfect answer"
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I used to think interviews were about finding the "right" answer.
            They're not. Interviewers have heard thousands of polished
            responses. What catches their attention is{' '}
            <strong>authentic thinking</strong>. When I started being honest
            about my experiences — including mistakes and failures — my success
            rate improved dramatically. One interviewer even told me, "Your
            answer wasn't perfect, but your thought process was impressive."
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold">
            Myth 2: "Use formal, corporate language"
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            "I am a highly motivated individual seeking to leverage my skill set
            to contribute to your esteemed organization." Please, don't talk
            like this. It sounds rehearsed and insincere. Modern interviewers,
            especially at startups and tech companies, prefer conversational
            language. Talk like you're explaining something to a smart friend.
            Professional doesn't mean robotic.
          </p>

          <h3 className="mb-3 mt-6 text-lg font-semibold">
            Myth 3: "Never admit weaknesses"
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            The old advice was to disguise strengths as weaknesses ("I'm a
            perfectionist"). This backfires spectacularly today. Interviewers
            see right through it. What works is being genuinely self-aware:
            acknowledge a real area where you're working to improve, explain the
            specific steps you're taking, and show growth.{' '}
            <strong>Vulnerability, when handled maturely, builds trust</strong>.
          </p>
        </div>
      </section>

      {/* How This Guide Is Different */}
      <section className="mx-auto mb-12 max-w-4xl">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="h-6 w-6 text-purple-500" />
          How This Guide Is Different
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          There are countless interview preparation resources online. So why
          should you trust this one? Here's what makes our approach unique,
          based on real experiences from students who've cracked interviews at
          companies across India:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                1
              </span>
              Built for Indian Interview Culture
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Western interview advice often doesn't translate well to Indian
              companies. The expected level of formality, the types of questions
              asked, and the evaluation criteria differ significantly. Our tips
              are specifically designed for MNCs hiring in India, Indian
              startups, and public sector units — each with their own distinct
              interview styles.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 dark:bg-green-900 dark:text-green-300">
                2
              </span>
              Real Examples, Not Generic Scripts
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every example answer in this guide is based on actual responses
              that have worked in real interviews. We've collected feedback from
              over 300 students who've gone through placement processes at
              companies like TCS, Infosys, Wipro, Amazon, and various startups.
              The examples are specific, detailed, and adaptable to your own
              experiences.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                3
              </span>
              Complete Interview Lifecycle Coverage
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most guides focus only on answering questions. But interview
              success depends on everything: your body language, how you enter
              the room, your follow-up emails, salary negotiation, and even how
              you handle rejection. We cover the entire journey from preparation
              to offer negotiation, because every step matters.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                4
              </span>
              Updated for Hiring Trends
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Interview practices have evolved significantly, especially
              post-pandemic. Virtual interviews are now standard, AI-based
              screening is becoming common, and behavioral questions carry more
              weight than ever. Our content reflects current hiring practices at
              companies actively recruiting in India right now.
            </p>
          </div>
        </div>
      </section>

      {/* A Note Before You Start */}
      <section className="mx-auto mb-12 max-w-4xl rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/30">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
          <Lightbulb className="h-5 w-5 text-blue-600" />A Note Before You Start
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          This guide is comprehensive — probably more detailed than anything
          else you'll find for free. But please don't try to memorize
          everything. Instead, I recommend this approach:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
            <span>
              <strong>First pass:</strong> Read through everything once to
              understand the concepts and frameworks.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
            <span>
              <strong>Second pass:</strong> Focus on sections relevant to your
              target industry and interview type.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
            <span>
              <strong>Practice phase:</strong> Use the example answers as
              inspiration to craft your own authentic responses.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
            <span>
              <strong>Mock interviews:</strong> Practice out loud with friends
              or record yourself. Reading and speaking are very different
              skills.
            </span>
          </li>
        </ul>
      </section>

      {/* Statistics */}
      <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {interviewStats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4 text-center"
          >
            <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      <div className="mx-auto mb-12 max-w-4xl rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          Key Takeaways
        </h2>
        <ul className="grid gap-2 text-sm md:grid-cols-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Prepare at least 2-3 months before target interviews</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Practice the STAR method for behavioral questions</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Research the company thoroughly before each interview</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Do at least 5-10 mock interviews before real ones</span>
          </li>
        </ul>
      </div>

      {/* Table of Contents */}
      <nav className="mx-auto mb-12 max-w-4xl rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
        <div className="grid gap-2 text-sm md:grid-cols-2">
          <a
            href="#hr-questions"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <MessageSquare className="h-4 w-4" /> 1. Top HR Interview Questions
          </a>
          <a
            href="#star-method"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Star className="h-4 w-4" /> 2. STAR Method for Behavioral Questions
          </a>
          <a
            href="#technical-tips"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Code className="h-4 w-4" /> 3. Technical Interview Tips
          </a>
          <a
            href="#virtual-tips"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Video className="h-4 w-4" /> 4. Virtual Interview Guide
          </a>
          <a
            href="#industry-tips"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Briefcase className="h-4 w-4" /> 5. Industry-Specific Tips
          </a>
          <a
            href="#body-language"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <User className="h-4 w-4" /> 6. Body Language & Communication
          </a>
          <a
            href="#preparation-timeline"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Calendar className="h-4 w-4" /> 7. Preparation Timeline
          </a>
          <a
            href="#faqs"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Lightbulb className="h-4 w-4" /> 8. FAQs
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl">
        {/* Quick Navigation Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Master the 10 most frequently asked interview questions with
                expert tips and examples.
              </p>
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <Link href="#hr-questions">View Questions</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Behavioral Prep
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Learn the STAR method with real examples to nail behavioral
                questions.
              </p>
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <Link href="#star-method">Learn STAR Method</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Technical Prep
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Strategies for technical interviews, coding rounds, and system
                design.
              </p>
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <Link href="#technical-tips">Technical Tips</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* HR Questions Section */}
        <section
          id="hr-questions"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <MessageSquare className="h-6 w-6 text-primary" />
            Top HR Interview Questions & Expert Answers
          </h2>
          <p className="mb-8 text-muted-foreground">
            These questions appear in almost every interview. Master them and
            you'll be ahead of 80% of candidates. Each question includes tips,
            example answers, and common mistakes to avoid.
          </p>

          <div className="space-y-6">
            {hrQuestions.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border p-6"
              >
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {item.question}
                </h3>

                <div className="space-y-4">
                  {/* Tip */}
                  <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                        Strategy:
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {item.tip}
                      </p>
                    </div>
                  </div>

                  {/* Example Answer */}
                  <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                        Example Answer:
                      </span>
                      <p className="text-sm italic text-muted-foreground">
                        "{item.example}"
                      </p>
                    </div>
                  </div>

                  {/* Mistakes to Avoid */}
                  <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <span className="text-sm font-semibold text-red-700 dark:text-red-300">
                        Avoid:
                      </span>
                      <ul className="list-inside list-disc text-sm text-muted-foreground">
                        {item.mistakes.map((mistake, j) => (
                          <li key={j}>{mistake}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STAR Method Section */}
        <section
          id="star-method"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Star className="h-6 w-6 text-primary" />
            Mastering the STAR Method
          </h2>
          <p className="mb-8 text-muted-foreground">
            The STAR method is the gold standard for answering behavioral
            interview questions (e.g., "Tell me about a time when..."). It
            ensures your stories are structured, compelling, and complete.
          </p>

          {/* STAR Explanation */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                S
              </div>
              <h3 className="mb-2 font-bold">Situation</h3>
              <p className="text-sm text-muted-foreground">
                Set the scene. Provide context with specific details about the
                situation you were in.
              </p>
            </div>
            <div className="rounded-xl border p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                T
              </div>
              <h3 className="mb-2 font-bold">Task</h3>
              <p className="text-sm text-muted-foreground">
                Describe your specific responsibility or what challenge you
                needed to address.
              </p>
            </div>
            <div className="rounded-xl border p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                A
              </div>
              <h3 className="mb-2 font-bold">Action</h3>
              <p className="text-sm text-muted-foreground">
                Explain exactly what steps YOU took. Be specific and focus on
                your contributions.
              </p>
            </div>
            <div className="rounded-xl border p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                R
              </div>
              <h3 className="mb-2 font-bold">Result</h3>
              <p className="text-sm text-muted-foreground">
                Share the outcomes. Quantify when possible. What did you achieve
                or learn?
              </p>
            </div>
          </div>

          {/* STAR Examples */}
          <h3 className="mb-4 text-lg font-bold">Real STAR Examples</h3>
          <div className="space-y-6">
            {behavioralQuestions.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-muted/30 p-6"
              >
                <h4 className="mb-4 font-bold text-primary">{item.question}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                      S
                    </span>
                    <p className="text-sm">{item.situation}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                      T
                    </span>
                    <p className="text-sm">{item.task}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      A
                    </span>
                    <p className="text-sm">{item.action}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                      R
                    </span>
                    <p className="text-sm font-medium">{item.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Interview Tips */}
        <section
          id="technical-tips"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Code className="h-6 w-6 text-primary" />
            Technical Interview Tips
          </h2>
          <p className="mb-8 text-muted-foreground">
            For technical roles, the interview process often involves coding
            challenges, system design discussions, or take-home assignments.
            Here's how to excel at each stage.
          </p>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {technicalTips.map((category, i) => (
              <div
                key={i}
                className="rounded-xl border p-6"
              >
                <h3 className="mb-4 font-bold">{category.category}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Coding Problem Approach */}
          <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-950/30">
            <h3 className="mb-4 font-bold">
              🧠 The 5-Step Approach for Coding Problems
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <span className="font-medium">Understand:</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Ask clarifying questions. Repeat the problem back. Confirm
                    edge cases.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <span className="font-medium">Plan:</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Think out loud. Discuss your approach before coding.
                    Consider time/space complexity.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <span className="font-medium">Brute Force:</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Get a working solution first. It's better than an incomplete
                    optimal solution.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                  4
                </span>
                <div>
                  <span className="font-medium">Optimize:</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Once working, improve time/space complexity. Discuss
                    trade-offs.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                  5
                </span>
                <div>
                  <span className="font-medium">Test:</span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Walk through with examples. Check edge cases. Debug before
                    the interviewer does.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Interview Tips */}
        <section
          id="virtual-tips"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Video className="h-6 w-6 text-primary" />
            Virtual Interview Guide
          </h2>
          <p className="mb-8 text-muted-foreground">
            Virtual interviews are now the norm. Master the technical and
            presentation aspects to make a great impression.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {virtualInterviewTips.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <section.icon className="h-5 w-5 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.tips.map((tip, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industry-Specific Tips */}
        <section
          id="industry-tips"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Briefcase className="h-6 w-6 text-primary" />
            Industry-Specific Interview Tips
          </h2>
          <p className="mb-8 text-muted-foreground">
            Different industries have different interview styles. Prepare
            accordingly based on your target field.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {industryTips.map((industry, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <industry.icon className="h-5 w-5 text-primary" />
                    {industry.industry}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Preparation Focus:
                    </h4>
                    <ul className="space-y-1">
                      {industry.preparation.map((tip, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-1 h-3 w-3 flex-shrink-0 text-green-500" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">
                      Common Questions:
                    </h4>
                    <ul className="space-y-1">
                      {industry.commonQuestions.map((q, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <MessageSquare className="mt-1 h-3 w-3 flex-shrink-0 text-blue-500" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Body Language Section */}
        <section
          id="body-language"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <User className="h-6 w-6 text-primary" />
            Body Language & Communication
          </h2>
          <p className="mb-8 text-muted-foreground">
            Studies show that 93% of communication is non-verbal. Master these
            fundamentals to make a strong impression.
          </p>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
                <ThumbsUp className="h-5 w-5" />
                Do This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Maintain eye contact (60-70% of the time)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>
                    Smile genuinely when greeting and at appropriate moments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Sit up straight with shoulders back</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Nod occasionally to show engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Use hand gestures naturally while speaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>Mirror the interviewer's energy subtly</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-6 dark:bg-red-950">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-red-700 dark:text-red-300">
                <XCircle className="h-5 w-5" />
                Avoid This
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>Crossing arms (appears defensive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>Fidgeting or playing with hair/pen</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>Slouching or leaning back too much</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>Looking at the floor or ceiling when thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>Speaking too fast when nervous</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>Checking phone or watch</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Voice Tips */}
          <div className="rounded-xl border p-6">
            <h3 className="mb-4 font-bold">🎤 Voice & Speech Tips</h3>
            <div className="grid gap-4 text-sm md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-semibold">Pace</h4>
                <p className="text-muted-foreground">
                  Speak at a moderate pace. Pause briefly between points.
                  Rushing makes you seem nervous.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Tone</h4>
                <p className="text-muted-foreground">
                  Vary your tone to maintain interest. Avoid monotone delivery.
                  Show enthusiasm where appropriate.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Filler Words</h4>
                <p className="text-muted-foreground">
                  Minimize "um," "like," "you know." It's okay to pause silently
                  instead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Timeline */}
        <section
          id="preparation-timeline"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Calendar className="h-6 w-6 text-primary" />
            Interview Preparation Timeline
          </h2>
          <p className="mb-8 text-muted-foreground">
            Follow this timeline for systematic interview preparation. Adjust
            based on your target interview date.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                2-3M
              </div>
              <div className="flex-1 rounded-lg border p-4">
                <h4 className="mb-2 font-semibold">2-3 Months Before</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Start DSA practice (LeetCode, HackerRank)</li>
                  <li>• Research target companies and roles</li>
                  <li>• Update and optimize your resume</li>
                  <li>• Begin mock interviewing with peers</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 font-bold text-white">
                1M
              </div>
              <div className="flex-1 rounded-lg border p-4">
                <h4 className="mb-2 font-semibold">1 Month Before</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Intensify DSA practice (medium/hard problems)</li>
                  <li>• Practice STAR method with real stories</li>
                  <li>• Research each company's interview process</li>
                  <li>• Do formal mock interviews</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                1W
              </div>
              <div className="flex-1 rounded-lg border p-4">
                <h4 className="mb-2 font-semibold">1 Week Before</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Review top company-specific questions</li>
                  <li>• Practice common HR questions out loud</li>
                  <li>• Prepare thoughtful questions to ask</li>
                  <li>• Test technical setup for virtual interviews</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 font-bold text-white">
                1D
              </div>
              <div className="flex-1 rounded-lg border p-4">
                <h4 className="mb-2 font-semibold">Day Before</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Review your resume and projects</li>
                  <li>• Prepare outfit and documents</li>
                  <li>• Get proper sleep (7-8 hours)</li>
                  <li>• Do light review, don't cram</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faqs"
          className="mb-16 scroll-mt-20"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-lg border p-4"
              >
                <h3 className="mb-2 font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Ace Your Interview?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Use our AI-powered tools to practice interview questions, check your
            resume, and find opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/interview-questions">
                <MessageSquare className="mr-2 h-4 w-4" />
                Generate Questions
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/tools/resume-score-checker">
                <Target className="mr-2 h-4 w-4" />
                Check Resume Score
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/internships">
                <ArrowRight className="mr-2 h-4 w-4" />
                Find Internships
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/resources/resume-guide"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Resume Writing Guide</h3>
              <p className="text-sm text-muted-foreground">
                Create an ATS-friendly resume
              </p>
            </Link>
            <Link
              href="/resources/email-templates"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Email Templates</h3>
              <p className="text-sm text-muted-foreground">
                Cold emails and follow-ups
              </p>
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-semibold">Behavioral Questions Guide</h3>
              <p className="text-sm text-muted-foreground">
                50+ questions with answers
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
