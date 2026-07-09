import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Target,
  DollarSign,
  Code,
  Briefcase,
  Award,
  Globe,
  GraduationCap,
  Building2,
  Brain,
  MessageSquare,
  Sparkles,
  Wand2,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Zap,
  PenTool,
  Type,
  List,
  AlignLeft,
  Repeat,
  GitBranch,
  Shield,
  MessageCircle,
  Edit3,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prompt Engineering: Complete Career Guide',
  description:
    'Master prompt engineering for AI careers. Learn techniques, frameworks, best practices, job opportunities, and salary expectations for working with LLMs like ChatGPT and Claude.',
  keywords: [
    'prompt engineering',
    'prompt engineer salary',
    'chatgpt prompts',
    'ai prompt design',
    'llm prompting',
    'prompt engineering career',
    'prompt engineering jobs',
    'few shot prompting',
    'chain of thought',
    'prompt engineering techniques',
  ],
  openGraph: {
    title: 'Prompt Engineering: Complete Career Guide',
    description:
      'Master prompt engineering and launch your career working with AI.',
    type: 'article',
    publishedTime: '2025-12-22T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-emerald-600">
            <Wand2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              AI Skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Prompt Engineering: Complete Career Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Prompt engineering is the art and science of communicating
            effectively with AI. This comprehensive guide covers everything you
            need to master this essential skill and build a career in the AI
            age.
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
              <span>22 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. What is Prompt Engineering?
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                2. Why It Matters
              </a>
            </li>
            <li>
              <a
                href="#techniques"
                className="text-primary hover:underline"
              >
                3. Core Techniques
              </a>
            </li>
            <li>
              <a
                href="#advanced"
                className="text-primary hover:underline"
              >
                4. Advanced Strategies
              </a>
            </li>
            <li>
              <a
                href="#frameworks"
                className="text-primary hover:underline"
              >
                5. Prompting Frameworks
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                6. Career Paths & Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                7. Skills Required
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                8. Salary Expectations
              </a>
            </li>
            <li>
              <a
                href="#practice"
                className="text-primary hover:underline"
              >
                9. Practice Projects
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                10. Companies Hiring
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                11. Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                12. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-emerald-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Prompt engineering can improve AI output quality by 50-300%
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Salaries range from ₹8-35 LPA in India to $80K-200K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>No coding required for many prompt engineering roles</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Chain-of-thought and few-shot learning are the most important
                techniques
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Every professional will need basic prompt skills—specialists
                will be in high demand
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Prompt Engineering */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Edit3 className="h-6 w-6 text-primary" />
            1. What is Prompt Engineering?
          </h2>

          <p>
            <strong>Prompt engineering</strong> is the practice of designing and
            optimizing inputs (prompts) to AI systems like ChatGPT, Claude, or
            Gemini to get the best possible outputs. It's the bridge between
            human intent and AI capability.
          </p>

          <p>
            A prompt can be as simple as a question or as complex as a
            multi-page system specification. The difference between a good
            prompt and a great prompt can mean the difference between useless
            output and transformative results.
          </p>

          <h3>The Anatomy of a Prompt</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-emerald-500 py-2 pl-4">
              <p className="font-bold">Role/Persona</p>
              <p className="text-muted-foreground">
                Who is the AI? "You are an expert Python developer with 10 years
                of experience..."
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Context</p>
              <p className="text-muted-foreground">
                Background information the AI needs. User data, constraints,
                requirements, examples.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Task/Instruction</p>
              <p className="text-muted-foreground">
                What do you want the AI to do? Be specific and clear about the
                desired action.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Format/Output Structure</p>
              <p className="text-muted-foreground">
                How should the response be structured? JSON, markdown, code,
                bullet points, etc.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Constraints</p>
              <p className="text-muted-foreground">
                What should the AI avoid? Length limits, topics to exclude,
                style guidelines.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">Examples (Few-Shot)</p>
              <p className="text-muted-foreground">
                Show the AI what you want with input-output examples before
                asking for the actual task.
              </p>
            </div>
          </div>

          <h3>Simple vs Engineered Prompt</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Simple Prompt</th>
                  <th className="p-3 text-left">Engineered Prompt</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">"Write a cover letter"</td>
                  <td className="p-3">
                    "You are a career coach helping a recent CS graduate apply
                    for a software engineering role at Google. Write a cover
                    letter that: 1) Opens with a hook, 2) Highlights 2 specific
                    projects, 3) Shows cultural fit, 4) Is under 300 words. Use
                    confident but not arrogant tone."
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Why It Matters */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            2. Why Prompt Engineering Matters
          </h2>

          <h3>The Impact of Good Prompting</h3>
          <ul>
            <li>
              <strong>Quality:</strong> Well-crafted prompts can improve output
              quality by 50-300%
            </li>
            <li>
              <strong>Consistency:</strong> Structured prompts produce more
              reliable, repeatable results
            </li>
            <li>
              <strong>Efficiency:</strong> Reduce iterations and back-and-forth
              with better initial outputs
            </li>
            <li>
              <strong>Cost:</strong> Fewer tokens = lower API costs for
              production applications
            </li>
            <li>
              <strong>Safety:</strong> Well-designed prompts reduce harmful or
              off-topic responses
            </li>
          </ul>

          <h3>Who Needs Prompt Engineering?</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-500">
                Everyone (Basic Level)
              </p>
              <p className="mt-1 text-muted-foreground">
                Every knowledge worker will use AI tools. Basic prompt skills
                will be as essential as email or spreadsheets.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Professionals (Intermediate)
              </p>
              <p className="mt-1 text-muted-foreground">
                Marketers, writers, designers, analysts, developers—domain
                experts who integrate AI into their work.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Specialists (Advanced)
              </p>
              <p className="mt-1 text-muted-foreground">
                Dedicated prompt engineers who design AI systems, optimize
                prompts for production, and solve complex problems.
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Market Reality:</strong> As AI becomes commoditized, the
              ability to effectively use it becomes the differentiator. Prompt
              engineering is the new literacy.
            </div>
          </div>
        </section>

        {/* Section 3: Core Techniques */}
        <section
          id="techniques"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-primary" />
            3. Core Prompting Techniques
          </h2>

          <h3>1. Zero-Shot Prompting</h3>
          <p>
            Asking the AI to perform a task without any examples. Relies on the
            model's pre-trained knowledge.
          </p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Example:</p>
            <p className="mt-2 italic">
              "Classify the sentiment of this review as positive, negative, or
              neutral: 'The food was amazing but the service was slow'"
            </p>
          </div>

          <h3>2. Few-Shot Prompting (Critical Technique)</h3>
          <p>
            Providing examples of input-output pairs before the actual task.
            Dramatically improves accuracy and consistency.
          </p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Example:</p>
            <p className="mt-2 italic">
              "Classify sentiment:
              <br />
              Review: 'Loved it!' → Positive
              <br />
              Review: 'Terrible experience' → Negative
              <br />
              Review: 'It was okay' → Neutral
              <br />
              Review: 'The food was amazing but service was slow' → ?"
            </p>
          </div>

          <h3>3. Chain-of-Thought (CoT) Prompting (Most Important)</h3>
          <p>
            Asking the AI to show its reasoning step by step. Dramatically
            improves performance on complex tasks.
          </p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Example:</p>
            <p className="mt-2 italic">
              "Solve this problem step by step: If a train travels at 60 mph and
              needs to cover 150 miles, but stops for 30 minutes midway, how
              long is the total journey?"
            </p>
            <p className="mt-2 font-semibold">Trigger phrases:</p>
            <p>
              "Let's think step by step" / "Show your reasoning" / "Explain your
              thought process"
            </p>
          </div>

          <h3>4. Role Prompting</h3>
          <p>
            Assigning a specific persona or role to the AI to shape its
            responses.
          </p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li>• "You are a senior software engineer at Google..."</li>
              <li>• "Act as a Socratic tutor who asks guiding questions..."</li>
              <li>
                • "You are a legal expert specializing in contract law..."
              </li>
            </ul>
          </div>

          <h3>5. Output Formatting</h3>
          <p>Explicitly specifying the structure and format of the response.</p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Techniques:</p>
            <ul className="mt-2 space-y-1">
              <li>• Request JSON for structured data</li>
              <li>• Use markdown headers for organization</li>
              <li>• Specify tables for comparative information</li>
              <li>• Define schemas for consistent outputs</li>
            </ul>
          </div>

          <h3>6. Constraint Setting</h3>
          <p>Defining boundaries and limitations for the response.</p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Examples:</p>
            <ul className="mt-2 space-y-1">
              <li>• "Keep response under 200 words"</li>
              <li>• "Only use information from the provided context"</li>
              <li>• "Do not use technical jargon"</li>
              <li>• "Avoid speculation; state facts only"</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Advanced Strategies */}
        <section
          id="advanced"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            4. Advanced Prompting Strategies
          </h2>

          <h3>Self-Consistency</h3>
          <p>
            Generate multiple responses and take the majority answer. Useful for
            reasoning tasks.
          </p>

          <h3>Tree of Thoughts (ToT)</h3>
          <p>
            Have the AI explore multiple reasoning paths, evaluate them, and
            choose the best one. For complex problem-solving.
          </p>

          <h3>ReAct (Reasoning + Acting)</h3>
          <p>
            Combine reasoning with tool use. The AI thinks, acts (uses tools),
            observes results, and continues.
          </p>

          <h3>Recursive Prompting</h3>
          <p>
            Break complex tasks into subtasks. Use output from one prompt as
            input to the next.
          </p>

          <h3>Meta-Prompting</h3>
          <p>Ask the AI to help you write better prompts for a task.</p>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-semibold">Example:</p>
            <p className="mt-2 italic">
              "I want to use AI to summarize research papers. What would be the
              ideal prompt structure? Consider tone, format, and key information
              to extract."
            </p>
          </div>

          <h3>Prompt Chaining</h3>
          <p>
            Link multiple prompts in sequence, where each builds on the previous
            output.
          </p>
          <div className="not-prose my-4 space-y-2 text-sm">
            <p>1. Generate outline → </p>
            <p>2. Expand each section → </p>
            <p>3. Add examples → </p>
            <p>4. Review and refine</p>
          </div>
        </section>

        {/* Section 5: Frameworks */}
        <section
          id="frameworks"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            5. Prompting Frameworks
          </h2>

          <h3>CRISPE Framework</h3>
          <div className="not-prose my-4 space-y-2 text-sm">
            <p>
              <strong>C</strong>apacity: What role should the AI take?
            </p>
            <p>
              <strong>R</strong>esult: What output do you want?
            </p>
            <p>
              <strong>I</strong>nformation: What context is needed?
            </p>
            <p>
              <strong>S</strong>tyle: What tone/format?
            </p>
            <p>
              <strong>P</strong>ersonalization: Who is the audience?
            </p>
            <p>
              <strong>E</strong>xperiment: Iterate and refine
            </p>
          </div>

          <h3>RACE Framework</h3>
          <div className="not-prose my-4 space-y-2 text-sm">
            <p>
              <strong>R</strong>ole: Define the AI's persona
            </p>
            <p>
              <strong>A</strong>ction: Specify the task
            </p>
            <p>
              <strong>C</strong>ontext: Provide background
            </p>
            <p>
              <strong>E</strong>xpectation: Define success criteria
            </p>
          </div>

          <h3>System Prompt Template (For Chatbots)</h3>
          <div className="not-prose my-4 rounded-lg bg-muted p-4 text-sm">
            <p className="font-mono">
              You are [role] that [core function].
              <br />
              <br />
              Your key responsibilities:
              <br />
              - [Responsibility 1]
              <br />
              - [Responsibility 2]
              <br />
              <br />
              Guidelines:
              <br />
              - [Guideline 1]
              <br />
              - [Guideline 2]
              <br />
              <br />
              You should NOT:
              <br />
              - [Constraint 1]
              <br />
              - [Constraint 2]
              <br />
              <br />
              Response format: [Format specification]
            </p>
          </div>
        </section>

        {/* Section 6: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            6. Career Paths & Job Roles
          </h2>

          <h3>Dedicated Prompt Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-500">Prompt Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Design, test, and optimize prompts for AI applications. Work
                with product teams to improve AI features.
              </p>
              <p className="mt-2 text-xs">
                Skills: Prompt techniques, evaluation, A/B testing, domain
                expertise
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">AI Content Specialist</p>
              <p className="mt-1 text-muted-foreground">
                Use AI to create content at scale. Develop templates and
                workflows for content teams.
              </p>
              <p className="mt-2 text-xs">
                Skills: Content strategy, prompt design, editing, brand voice
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Conversational AI Designer
              </p>
              <p className="mt-1 text-muted-foreground">
                Design chatbot personalities, conversation flows, and system
                prompts for customer-facing AI.
              </p>
              <p className="mt-2 text-xs">
                Skills: Dialogue design, UX writing, prompt engineering
              </p>
            </div>
          </div>

          <h3>Hybrid Roles (Prompt + Domain)</h3>
          <ul>
            <li>
              <strong>Legal Prompt Specialist:</strong> AI for contracts,
              research
            </li>
            <li>
              <strong>Medical AI Specialist:</strong> Healthcare AI applications
            </li>
            <li>
              <strong>Financial AI Analyst:</strong> AI for research, reports
            </li>
            <li>
              <strong>Marketing AI Manager:</strong> AI content, campaigns
            </li>
            <li>
              <strong>Technical Writer + AI:</strong> Documentation with AI
            </li>
          </ul>

          <h3>Technical Roles Using Prompts</h3>
          <ul>
            <li>
              <strong>LLM Engineer:</strong> Build applications with prompts +
              code
            </li>
            <li>
              <strong>AI Solutions Architect:</strong> Design prompt systems
            </li>
            <li>
              <strong>ML Engineer:</strong> Optimize prompts for fine-tuning
            </li>
          </ul>
        </section>

        {/* Section 7: Skills Required */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            7. Skills Required
          </h2>

          <h3>Core Skills</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Skill</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Clear Writing</td>
                  <td className="p-3">
                    Express ideas precisely and unambiguously
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Structured Thinking</td>
                  <td className="p-3">Break down complex tasks logically</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Experimentation Mindset</td>
                  <td className="p-3">
                    Test, iterate, and optimize systematically
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">AI Model Understanding</td>
                  <td className="p-3">
                    Know capabilities and limitations of different models
                  </td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Domain Expertise</td>
                  <td className="p-3">Deep knowledge in a specific field</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Technical Skills (Helpful But Not Required)</h3>
          <ul>
            <li>
              <strong>Python:</strong> For automating prompt workflows
            </li>
            <li>
              <strong>API Usage:</strong> Working with OpenAI/Anthropic APIs
            </li>
            <li>
              <strong>Data Analysis:</strong> Evaluating prompt performance
            </li>
            <li>
              <strong>Version Control:</strong> Managing prompt libraries
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Career Advantage:</strong> The best prompt engineers
              combine prompting skills with deep domain expertise. A legal
              expert who masters prompts is more valuable than a generalist.
            </div>
          </div>
        </section>

        {/* Section 8: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            8. Salary Expectations
          </h2>

          <h3>India Salary Ranges </h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Prompt Engineer</td>
                  <td className="p-3">₈-15 LPA</td>
                  <td className="p-3">₹18-30 LPA</td>
                  <td className="p-3">₹35-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AI Content Specialist</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-25 LPA</td>
                  <td className="p-3">₹30-45 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Conversational AI Designer</td>
                  <td className="p-3">₹8-14 LPA</td>
                  <td className="p-3">₹16-28 LPA</td>
                  <td className="p-3">₹32-50 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>US Salary Ranges</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Prompt Engineer</td>
                  <td className="p-3">$80K-120K</td>
                  <td className="p-3">$130K-175K</td>
                  <td className="p-3">$180K-250K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AI Content Specialist</td>
                  <td className="p-3">$60K-90K</td>
                  <td className="p-3">$100K-140K</td>
                  <td className="p-3">$150K-200K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Note:</strong> Early reports of $300K+ prompt engineer
            salaries were outliers. Typical ranges are above, but still premium
            compared to traditional roles.
          </p>
        </section>

        {/* Section 9: Practice */}
        <section
          id="practice"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            9. Practice Projects
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Personal Writing Assistant</p>
              <p className="mt-1 text-muted-foreground">
                Create a system prompt for an AI that writes in your style.
                Include examples of your writing, tone preferences, and topics.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Domain-Specific Explainer</p>
              <p className="mt-1 text-muted-foreground">
                Build prompts that explain complex topics (finance, law,
                medicine) to different audiences (expert, student, child).
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Interview Preparation Bot</p>
              <p className="mt-1 text-muted-foreground">
                Design prompts for an AI that conducts mock interviews, provides
                feedback, and adapts to different roles/industries.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Content Generation Pipeline</p>
              <p className="mt-1 text-muted-foreground">
                Create a chain of prompts: research → outline → draft → edit →
                optimize. Build a complete content workflow.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Prompt Testing Framework</p>
              <p className="mt-1 text-muted-foreground">
                Build a system to A/B test different prompts, measure quality
                metrics, and track improvements over time.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Custom GPT / Claude Project</p>
              <p className="mt-1 text-muted-foreground">
                Create a specialized AI assistant using Custom GPTs or Claude
                Projects. Publish and get user feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            10. Companies Hiring Prompt Engineers
          </h2>

          <h3>AI Companies</h3>
          <ul>
            <li>
              <strong>OpenAI:</strong> ChatGPT optimization, safety
            </li>
            <li>
              <strong>Anthropic:</strong> Claude training, red-teaming
            </li>
            <li>
              <strong>Google:</strong> Gemini, Bard teams
            </li>
            <li>
              <strong>Inflection AI:</strong> Pi personal AI
            </li>
            <li>
              <strong>Character.AI:</strong> Character creators
            </li>
          </ul>

          <h3>Enterprise & Startups</h3>
          <ul>
            <li>
              <strong>Jasper:</strong> Marketing AI platform
            </li>
            <li>
              <strong>Copy.ai:</strong> Content generation
            </li>
            <li>
              <strong>Scale AI:</strong> Data and prompt work
            </li>
            <li>
              <strong>Cohere:</strong> Enterprise LLM applications
            </li>
            <li>
              <strong>Writer.com:</strong> Enterprise content AI
            </li>
          </ul>

          <h3>Traditional Companies (AI Teams)</h3>
          <ul>
            <li>Major banks and financial institutions</li>
            <li>Consulting firms (McKinsey, BCG, Deloitte)</li>
            <li>Healthcare companies</li>
            <li>E-commerce (Amazon, Shopify)</li>
            <li>Media companies</li>
          </ul>
        </section>

        {/* Section 11: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            11. Learning Resources
          </h2>

          <h3>Free Courses</h3>
          <ul>
            <li>
              <strong>DeepLearning.AI - ChatGPT Prompt Engineering:</strong>
              Andrew Ng's free course with OpenAI
            </li>
            <li>
              <strong>OpenAI Prompt Engineering Guide:</strong> Official
              documentation and best practices
            </li>
            <li>
              <strong>Anthropic Prompt Library:</strong> Claude-specific
              techniques and examples
            </li>
            <li>
              <strong>Learn Prompting:</strong> Community-driven comprehensive
              guide
            </li>
          </ul>

          <h3>Books & Guides</h3>
          <ul>
            <li>
              <strong>Prompt Engineering Guide (DAIR.AI):</strong> Open-source
              reference
            </li>
            <li>
              <strong>The Art of Prompt Engineering:</strong> Practical
              techniques
            </li>
          </ul>

          <h3>Practice Platforms</h3>
          <ul>
            <li>
              <strong>ChatGPT/Claude:</strong> Daily practice (free tiers)
            </li>
            <li>
              <strong>Prompt Golf:</strong> Competitive prompting challenges
            </li>
            <li>
              <strong>GPT Playground:</strong> Parameter experimentation
            </li>
          </ul>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                Is prompt engineering a real career or just a fad?
              </p>
              <p className="mt-2 text-muted-foreground">
                Real career. While the job title may evolve, the skill of
                effectively working with AI will remain essential. It's becoming
                integrated into many roles.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Do I need to know programming?</p>
              <p className="mt-2 text-muted-foreground">
                No for pure prompt roles. Yes if you want to build applications
                or automate workflows. Programming expands your opportunities.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How long to become job-ready?</p>
              <p className="mt-2 text-muted-foreground">
                2-3 months of focused practice can get you to intermediate
                level. Combine with domain expertise for best opportunities.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Will AI automate prompt engineering?</p>
              <p className="mt-2 text-muted-foreground">
                Partially. AI can help optimize prompts, but human judgment for
                goals, evaluation, and edge cases remains essential.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: Master the AI Language
          </h2>

          <p>
            Prompt engineering is how we communicate with AI. As AI becomes
            ubiquitous, this skill becomes essential. Whether you pursue it as a
            specialty or integrate it into another role, mastering prompts will
            define your effectiveness in the AI age.
          </p>

          <p>
            Start practicing today. Use ChatGPT and Claude daily. Study
            techniques. Build a portfolio of prompts that solve real problems.
            The future belongs to those who can speak the language of AI.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more AI career resources on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/generative-ai-careers"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Generative AI Careers →
              </Link>
              <Link
                href="/blog/ai-ml-career-path"
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                AI/ML Career Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="not-prose mt-12 border-t pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Written by Sproutern Career Team</p>
              <p className="text-sm text-muted-foreground">
                Helping students master AI skills for modern careers
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/blog"
                className="rounded-lg bg-muted px-4 py-2 text-sm hover:bg-muted/80"
              >
                ← All Articles
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
