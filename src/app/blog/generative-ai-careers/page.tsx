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
  Cpu,
  Zap,
  GraduationCap,
  Building2,
  Brain,
  MessageSquare,
  Image,
  Music,
  Video,
  FileText,
  Sparkles,
  Wand2,
  Bot,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Database,
  Network,
  PenTool,
  Palette,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Generative AI Careers: Complete Guide',
  description:
    'Start your generative AI career. Learn about LLMs, diffusion models, prompt engineering, job opportunities, required skills, and salary expectations in this revolutionary field.',
  keywords: [
    'generative ai career',
    'llm engineer',
    'ai developer jobs',
    'prompt engineering career',
    'chatgpt developer',
    'stable diffusion',
    'generative ai salary',
    'ai ml jobs',
    'openai careers',
    'langchain developer',
  ],
  openGraph: {
    title: 'Generative AI Careers: Complete Guide',
    description:
      'Launch your career in generative AI with this comprehensive guide covering skills, roadmap, and opportunities.',
    type: 'article',
    publishedTime: '2024-12-22T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-violet-600">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Emerging Technology
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Generative AI Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            From ChatGPT to Stable Diffusion, generative AI is the fastest-
            growing field in tech. This comprehensive guide will help you build
            a career in the AI revolution that's reshaping every industry.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>December 22, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">ðŸ“‹ What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. What is Generative AI?
              </a>
            </li>
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                2. Types of Generative AI
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                3. Career Paths & Job Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                4. Essential Skills Required
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                5. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-primary hover:underline"
              >
                6. Educational Pathways
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                7. Top Companies Hiring
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
                href="#projects"
                className="text-primary hover:underline"
              >
                9. Portfolio Projects
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="text-primary hover:underline"
              >
                10. Learning Resources
              </a>
            </li>
            <li>
              <a
                href="#ethics"
                className="text-primary hover:underline"
              >
                11. Ethics & Challenges
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
        <div className="not-prose mb-10 rounded-lg border border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-violet-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-violet-600" />
              <span>
                Generative AI market projected to reach $200+ billion by 2030
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-violet-600" />
              <span>
                LLM Engineers and Prompt Engineers are among the hottest new
                roles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-violet-600" />
              <span>
                Salaries range from â‚¹15-80 LPA in India to $150K-400K+ in the
                US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-violet-600" />
              <span>
                Python, PyTorch, and LangChain are the most important tools
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-violet-600" />
              <span>
                Both technical (ML/DL) and non-technical (prompt engineering)
                paths exist
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Generative AI */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            1. What is Generative AI?
          </h2>

          <p>
            <strong>Generative AI</strong> refers to artificial intelligence
            systems that can create new contentâ€”text, images, audio, video,
            code, and moreâ€”by learning patterns from existing data. Unlike
            traditional AI that classifies or predicts, generative AI creates.
          </p>

          <p>
            From ChatGPT writing essays to Midjourney creating art to GitHub
            Copilot writing code, generative AI is transforming how we work,
            create, and interact with technology.
          </p>

          <h3>Core Technologies</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-violet-500 py-2 pl-4">
              <p className="font-bold">Large Language Models (LLMs)</p>
              <p className="text-muted-foreground">
                Transformer-based models trained on massive text data to
                understand and generate human language. Examples: GPT-4, Claude,
                Llama, Gemini.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Diffusion Models</p>
              <p className="text-muted-foreground">
                Models that learn to generate images by reversing a noise
                process. Examples: Stable Diffusion, DALL-E 3, Midjourney.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Transformers</p>
              <p className="text-muted-foreground">
                The architecture behind modern AI. Self-attention mechanisms
                enable understanding of long-range dependencies in data.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Multimodal Models</p>
              <p className="text-muted-foreground">
                Models that understand and generate multiple types of content
                (text, images, audio). Examples: GPT-4V, Gemini Ultra.
              </p>
            </div>
          </div>

          <h3>Key Concepts</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Concept</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Importance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Prompt Engineering</td>
                  <td className="p-3">
                    Crafting effective inputs to get desired outputs from AI
                  </td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Critical</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Fine-tuning</td>
                  <td className="p-3">
                    Adapting pre-trained models to specific tasks or domains
                  </td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Critical</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">RAG</td>
                  <td className="p-3">
                    Retrieval-Augmented Generationâ€”combining LLMs with
                    external knowledge
                  </td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Critical</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Embeddings</td>
                  <td className="p-3">
                    Vector representations of text for semantic search and
                    similarity
                  </td>
                  <td className="p-3 text-yellow-600">ðŸŸ¡ Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">RLHF</td>
                  <td className="p-3">
                    Reinforcement Learning from Human Feedbackâ€”aligning AI
                    with human preferences
                  </td>
                  <td className="p-3 text-yellow-600">ðŸŸ¡ Important</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Types of Generative AI */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. Types of Generative AI
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-violet-500" />
                <p className="font-bold text-violet-500">Text Generation</p>
              </div>
              <p className="text-muted-foreground">
                Chatbots, content writing, code generation, summarization,
                translation. The largest segment led by ChatGPT, Claude, and
                Gemini. Most in-demand skill area.
              </p>
              <p className="mt-2 text-xs text-primary">
                Tools: OpenAI API, Anthropic Claude, LangChain, LlamaIndex
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Image className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">Image Generation</p>
              </div>
              <p className="text-muted-foreground">
                Art creation, design, product visualization, marketing assets.
                Midjourney, DALL-E 3, and Stable Diffusion lead the market.
              </p>
              <p className="mt-2 text-xs text-primary">
                Tools: Stable Diffusion, ComfyUI, Automatic1111, Replicate
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Code className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">Code Generation</p>
              </div>
              <p className="text-muted-foreground">
                AI-assisted programming, code completion, debugging,
                documentation. GitHub Copilot, Cursor, and Replit AI are
                transforming development.
              </p>
              <p className="mt-2 text-xs text-primary">
                Tools: GitHub Copilot, Cursor, Codeium, Amazon CodeWhisperer
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Video className="h-5 w-5 text-red-500" />
                <p className="font-bold text-red-500">Video Generation</p>
              </div>
              <p className="text-muted-foreground">
                Text-to-video, video editing, avatar generation. Emerging field
                with Sora, Runway, and Pika leading innovation.
              </p>
              <p className="mt-2 text-xs text-primary">
                Tools: Runway, Sora (OpenAI), Pika, Kling
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Music className="h-5 w-5 text-orange-500" />
                <p className="font-bold text-orange-500">Audio Generation</p>
              </div>
              <p className="text-muted-foreground">
                Music creation, voice synthesis, sound effects, podcasts. Suno,
                ElevenLabs, and Mubert are pioneers.
              </p>
              <p className="mt-2 text-xs text-primary">
                Tools: ElevenLabs, Suno, Mubert, Descript
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Bot className="h-5 w-5 text-purple-500" />
                <p className="font-bold text-purple-500">AI Agents</p>
              </div>
              <p className="text-muted-foreground">
                Autonomous AI systems that can plan, use tools, and complete
                complex tasks. The frontier of generative AI.
              </p>
              <p className="mt-2 text-xs text-primary">
                Tools: AutoGPT, CrewAI, LangGraph, OpenAI Assistants
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Career Paths & Job Roles
          </h2>

          <h3>Technical Roles (Engineering)</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-violet-500">
                LLM/AI Engineer (Hottest Role)
              </p>
              <p className="mt-1 text-muted-foreground">
                Build applications using LLMsâ€”chatbots, RAG systems, AI
                agents. Integrate models via APIs, optimize prompts, and deploy
                production systems.
              </p>
              <p className="mt-2 text-xs">
                Skills: Python, LangChain, OpenAI API, vector databases
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Machine Learning Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Train and fine-tune models, optimize for inference, deploy at
                scale. Work on the ML infrastructure powering AI products.
              </p>
              <p className="mt-2 text-xs">
                Skills: PyTorch, training infrastructure, MLOps
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">AI Research Scientist</p>
              <p className="mt-1 text-muted-foreground">
                Advance the state of the art in generative AI. Publish papers,
                develop new architectures, and explore frontiers.
              </p>
              <p className="mt-2 text-xs">
                Skills: Deep learning theory, research methodology, PhD
                preferred
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                MLOps/AI Infrastructure Engineer
              </p>
              <p className="mt-1 text-muted-foreground">
                Build and manage infrastructure for training and serving AI
                models at scale. GPU clusters, model serving, monitoring.
              </p>
              <p className="mt-2 text-xs">
                Skills: Kubernetes, GPU computing, model deployment
              </p>
            </div>
          </div>

          <h3>Applied/Product Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-500">
                Prompt Engineer (High Demand)
              </p>
              <p className="mt-1 text-muted-foreground">
                Craft and optimize prompts for AI applications. Understand model
                behaviors and design prompting strategies.
              </p>
              <p className="mt-2 text-xs">
                Skills: Prompt design, evaluation, linguistics, domain expertise
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">AI Product Manager</p>
              <p className="mt-1 text-muted-foreground">
                Define strategy and roadmap for AI products. Bridge technical
                teams with business needs and user requirements.
              </p>
              <p className="mt-2 text-xs">
                Skills: Product sense, AI understanding, stakeholder management
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-yellow-500">
                AI Solutions Architect
              </p>
              <p className="mt-1 text-muted-foreground">
                Design end-to-end AI solutions for enterprises. Evaluate
                vendors, architect systems, and guide implementation.
              </p>
              <p className="mt-2 text-xs">
                Skills: System design, cloud platforms, enterprise AI
              </p>
            </div>
          </div>

          <h3>Creative & Content Roles</h3>
          <ul>
            <li>
              <strong>AI Content Creator:</strong> Use AI tools to create
              marketing content, articles, and social media
            </li>
            <li>
              <strong>AI Artist/Designer:</strong> Create art and designs using
              Midjourney, Stable Diffusion, and other tools
            </li>
            <li>
              <strong>AI Video Producer:</strong> Create video content using AI
              generation and editing tools
            </li>
            <li>
              <strong>AI Ethics Specialist:</strong> Ensure responsible AI
              development and deployment
            </li>
          </ul>
        </section>

        {/* Section 4: Essential Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            4. Essential Skills Required
          </h2>

          <h3>For Engineering Roles</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Skill</th>
                  <th className="p-3 text-left">What to Learn</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Python</td>
                  <td className="p-3">
                    Primary language for AI development. Master thoroughly.
                  </td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">LangChain/LlamaIndex</td>
                  <td className="p-3">
                    Frameworks for building LLM applications
                  </td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">OpenAI/Anthropic APIs</td>
                  <td className="p-3">Working with commercial LLM APIs</td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Vector Databases</td>
                  <td className="p-3">
                    Pinecone, Weaviate, Chroma for semantic search
                  </td>
                  <td className="p-3 text-green-600">ðŸŸ¢ Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">PyTorch</td>
                  <td className="p-3">
                    Deep learning framework for training and fine-tuning
                  </td>
                  <td className="p-3 text-yellow-600">ðŸŸ¡ Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">HuggingFace</td>
                  <td className="p-3">
                    Ecosystem for open-source models and datasets
                  </td>
                  <td className="p-3 text-yellow-600">ðŸŸ¡ Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>For Prompt Engineering</h3>
          <ul>
            <li>
              <strong>Prompt Design:</strong> Crafting effective prompts,
              few-shot learning, chain-of-thought
            </li>
            <li>
              <strong>Model Behavior:</strong> Understanding capabilities and
              limitations of different models
            </li>
            <li>
              <strong>Evaluation:</strong> Measuring and comparing prompt
              effectiveness
            </li>
            <li>
              <strong>Domain Expertise:</strong> Deep knowledge in application
              areas (legal, medical, finance)
            </li>
          </ul>

          <h3>Foundation Knowledge</h3>
          <ul>
            <li>
              <strong>Transformers:</strong> Understand attention mechanisms and
              model architecture
            </li>
            <li>
              <strong>NLP Fundamentals:</strong> Tokenization, embeddings,
              language understanding
            </li>
            <li>
              <strong>ML Basics:</strong> Training, evaluation, overfitting,
              generalization
            </li>
            <li>
              <strong>Cloud Platforms:</strong> AWS, GCP, or Azure for
              deployment
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> You don't need to understand every
              detail of how transformers work to be an effective LLM engineer.
              Focus on practical skillsâ€”building RAG systems, prompt
              engineering, and integrating APIs. Go deeper into theory as
              needed.
            </div>
          </div>
        </section>

        {/* Section 5: Learning Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            5. 6-Month Learning Roadmap
          </h2>

          <p>
            Generative AI moves fastâ€”you can become job-ready in 6 months with
            focused effort.
          </p>

          <h3>Phase 1: Foundations (Month 1-2)</h3>
          <ul>
            <li>
              <strong>Week 1-2:</strong> Master Python (if needed). Learn APIs,
              JSON handling, and async programming.
            </li>
            <li>
              <strong>Week 3-4:</strong> Start using ChatGPT and Claude for
              various tasks. Understand capabilities and limitations.
            </li>
            <li>
              <strong>Week 5-6:</strong> Learn OpenAI API. Build your first
              chatbot with conversation memory.
            </li>
            <li>
              <strong>Week 7-8:</strong> Study prompt engineering. Learn
              zero-shot, few-shot, and chain-of-thought techniques.
            </li>
          </ul>

          <h3>Phase 2: Building Applications (Month 3-4)</h3>
          <ul>
            <li>
              <strong>Week 9-10:</strong> Learn LangChain or LlamaIndex. Build a
              RAG application with document Q&A.
            </li>
            <li>
              <strong>Week 11-12:</strong> Understand embeddings and vector
              databases. Implement semantic search.
            </li>
            <li>
              <strong>Week 13-14:</strong> Build an AI agent with tool use.
              Create a research assistant or coding helper.
            </li>
            <li>
              <strong>Week 15-16:</strong> Learn to deploy LLM applications.
              FastAPI, Streamlit, or Next.js frontends.
            </li>
          </ul>

          <h3>Phase 3: Specialization & Portfolio (Month 5-6)</h3>
          <ul>
            <li>
              <strong>Week 17-18:</strong> Choose specialization: chatbots, RAG,
              agents, or fine-tuning.
            </li>
            <li>
              <strong>Week 19-20:</strong> Build 2-3 polished portfolio
              projects. Deploy them publicly.
            </li>
            <li>
              <strong>Week 21-22:</strong> Learn about fine-tuning. Experiment
              with smaller open-source models.
            </li>
            <li>
              <strong>Week 23-24:</strong> Apply for jobs. Prepare for technical
              interviews.
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Accelerated Path:</strong> The field moves so fast that
              project-based learning trumps courses. Build something real every
              week. Share your progress on Twitter/X and LinkedIn.
            </div>
          </div>
        </section>

        {/* Section 6: Educational Pathways */}
        <section
          id="education"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            6. Educational Pathways
          </h2>

          <h3>Do You Need a Degree?</h3>
          <p>
            <strong>For Application Development (LLM Engineer):</strong> No
            degree required. Strong projects and practical skills matter most.
            Many successful LLM engineers are self-taught.
          </p>
          <p>
            <strong>For Research (AI Research Scientist):</strong> PhD is
            typically required for research roles at top labs. MS is minimum for
            most research positions.
          </p>

          <h3>Best Degrees for Gen AI</h3>
          <ul>
            <li>
              <strong>Computer Science:</strong> Strong programming and
              algorithms foundation
            </li>
            <li>
              <strong>Machine Learning/AI:</strong> Specialized degrees becoming
              more common
            </li>
            <li>
              <strong>Mathematics/Statistics:</strong> Strong theoretical
              foundation
            </li>
            <li>
              <strong>Computational Linguistics:</strong> For NLP-focused roles
            </li>
          </ul>

          <h3>Certifications Worth Pursuing</h3>
          <ul>
            <li>
              <strong>DeepLearning.AI Courses:</strong> Andrew Ng's short
              courses on LangChain, prompt engineering
            </li>
            <li>
              <strong>AWS/GCP ML Certifications:</strong> For infrastructure
              roles
            </li>
            <li>
              <strong>HuggingFace Courses:</strong> Free, comprehensive NLP and
              transformers
            </li>
          </ul>
        </section>

        {/* Section 7: Top Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            7. Top Companies Hiring
          </h2>

          <h3>AI-First Companies</h3>
          <ul>
            <li>
              <strong>OpenAI:</strong> ChatGPT, GPT-4, DALL-E, Sora
            </li>
            <li>
              <strong>Anthropic:</strong> Claude, constitutional AI
            </li>
            <li>
              <strong>Google DeepMind:</strong> Gemini, research
            </li>
            <li>
              <strong>Meta AI:</strong> Llama, open research
            </li>
            <li>
              <strong>Stability AI:</strong> Stable Diffusion
            </li>
            <li>
              <strong>Mistral AI:</strong> Open-weight models
            </li>
            <li>
              <strong>Cohere:</strong> Enterprise LLMs
            </li>
            <li>
              <strong>Hugging Face:</strong> Open-source ecosystem
            </li>
          </ul>

          <h3>Tech Giants</h3>
          <ul>
            <li>
              <strong>Microsoft:</strong> Azure OpenAI, Copilot
            </li>
            <li>
              <strong>Google:</strong> Bard, Search AI, Cloud AI
            </li>
            <li>
              <strong>Amazon:</strong> Bedrock, AWS AI services
            </li>
            <li>
              <strong>Apple:</strong> AI research, on-device ML
            </li>
            <li>
              <strong>NVIDIA:</strong> AI infrastructure, training
            </li>
          </ul>

          <h3>AI Startups (Well-Funded)</h3>
          <ul>
            <li>
              <strong>Inflection AI:</strong> Personal AI assistants
            </li>
            <li>
              <strong>Character.AI:</strong> Conversational AI
            </li>
            <li>
              <strong>Runway:</strong> Video generation
            </li>
            <li>
              <strong>Jasper:</strong> Marketing AI
            </li>
            <li>
              <strong>Copy.ai:</strong> Content generation
            </li>
            <li>
              <strong>Replit:</strong> AI-powered coding
            </li>
          </ul>

          <h3>Indian AI Companies</h3>
          <ul>
            <li>
              <strong>Krutrim (Ola):</strong> India's first AI unicorn
            </li>
            <li>
              <strong>Sarvam AI:</strong> Indian language models
            </li>
            <li>
              <strong>Fractal:</strong> Enterprise AI solutions
            </li>
            <li>
              <strong>Haptik (Jio):</strong> Conversational AI
            </li>
            <li>
              <strong>Yellow.ai:</strong> Enterprise chatbots
            </li>
            <li>
              <strong>Freshworks:</strong> AI-powered CRM
            </li>
          </ul>
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

          <p>
            <strong>Note:</strong> Generative AI salaries are among the highest
            in tech, often 50-100% above standard software engineering roles.
          </p>

          <h3>India Salary Ranges </h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry</th>
                  <th className="p-3 text-left">Mid (2-4 yrs)</th>
                  <th className="p-3 text-left">Senior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">LLM/AI Engineer</td>
                  <td className="p-3">â‚¹15-25 LPA</td>
                  <td className="p-3">â‚¹30-50 LPA</td>
                  <td className="p-3">â‚¹55-90 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Prompt Engineer</td>
                  <td className="p-3">â‚¹10-18 LPA</td>
                  <td className="p-3">â‚¹22-35 LPA</td>
                  <td className="p-3">â‚¹40-60 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">ML Engineer</td>
                  <td className="p-3">â‚¹12-22 LPA</td>
                  <td className="p-3">â‚¹28-45 LPA</td>
                  <td className="p-3">â‚¹50-80 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AI Research Scientist</td>
                  <td className="p-3">â‚¹18-30 LPA</td>
                  <td className="p-3">â‚¹35-55 LPA</td>
                  <td className="p-3">â‚¹60-100 LPA</td>
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
                  <td className="p-3">LLM/AI Engineer</td>
                  <td className="p-3">$150K-200K</td>
                  <td className="p-3">$200K-300K</td>
                  <td className="p-3">$300K-450K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Prompt Engineer</td>
                  <td className="p-3">$100K-150K</td>
                  <td className="p-3">$150K-200K</td>
                  <td className="p-3">$200K-300K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AI Research Scientist</td>
                  <td className="p-3">$180K-250K</td>
                  <td className="p-3">$250K-350K</td>
                  <td className="p-3">$350K-500K+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Portfolio Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            9. Portfolio Projects to Build
          </h2>

          <h3>Essential Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. RAG Document Q&A System</p>
              <p className="mt-1 text-muted-foreground">
                Build a system that answers questions about PDFs/documents using
                embeddings and retrieval. The most common LLM application.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: LangChain, vector databases, embeddings, prompt
                engineering
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Custom Chatbot with Memory</p>
              <p className="mt-1 text-muted-foreground">
                Create a chatbot for a specific domain (customer support, tutor,
                etc.) with conversation history and persona.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: OpenAI API, conversation management, prompt design
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. AI Agent with Tool Use</p>
              <p className="mt-1 text-muted-foreground">
                Build an agent that can browse the web, execute code, or perform
                specific tasks autonomously.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Function calling, agent frameworks, tool integration
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Fine-tuned Model for Specific Task</p>
              <p className="mt-1 text-muted-foreground">
                Fine-tune an open-source model (Llama, Mistral) for a specific
                use case with custom data.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: PyTorch, HuggingFace, training, evaluation
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Multi-Agent System</p>
              <p className="mt-1 text-muted-foreground">
                Create multiple AI agents that collaborate on complex tasks
                (research, coding, writing).
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Production AI Application</p>
              <p className="mt-1 text-muted-foreground">
                Deploy a full-stack AI app with authentication, rate limiting,
                caching, and monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Resources */}
        <section
          id="resources"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            10. Best Learning Resources
          </h2>

          <h3>Free Courses</h3>
          <ul>
            <li>
              <strong>DeepLearning.AI Short Courses:</strong> LangChain, ChatGPT
              prompt engineering, RAG (free)
            </li>
            <li>
              <strong>fast.ai:</strong> Practical deep learning and LLM courses
            </li>
            <li>
              <strong>HuggingFace Course:</strong> NLP and transformers
            </li>
            <li>
              <strong>OpenAI Documentation:</strong> Best source for API
              learning
            </li>
          </ul>

          <h3>YouTube Channels</h3>
          <ul>
            <li>
              <strong>Andrej Karpathy:</strong> Deep dives into LLM internals
            </li>
            <li>
              <strong>AI Jason:</strong> LLM application tutorials
            </li>
            <li>
              <strong>Two Minute Papers:</strong> Research summaries
            </li>
            <li>
              <strong>Yannic Kilcher:</strong> Paper explanations
            </li>
          </ul>

          <h3>Communities</h3>
          <ul>
            <li>
              <strong>Twitter/X AI Community:</strong> Where AI news happens
              first
            </li>
            <li>
              <strong>r/LocalLLaMA:</strong> Open-source LLM community
            </li>
            <li>
              <strong>LangChain Discord:</strong> Helpful for LLM development
            </li>
            <li>
              <strong>Hugging Face Forums:</strong> Model and training help
            </li>
          </ul>
        </section>

        {/* Section 11: Ethics */}
        <section
          id="ethics"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            11. Ethics & Challenges
          </h2>

          <h3>Key Ethical Considerations</h3>
          <ul>
            <li>
              <strong>Bias and Fairness:</strong> AI models can perpetuate and
              amplify societal biases present in training data
            </li>
            <li>
              <strong>Misinformation:</strong> Generative AI can create
              convincing but false content at scale
            </li>
            <li>
              <strong>Job Displacement:</strong> Automation of creative and
              knowledge work raises employment concerns
            </li>
            <li>
              <strong>Copyright:</strong> Training on copyrighted content and
              generating derivative works is legally unclear
            </li>
            <li>
              <strong>Privacy:</strong> Models may memorize and leak sensitive
              training data
            </li>
          </ul>

          <h3>Responsible AI Practices</h3>
          <ul>
            <li>Implement safety guardrails and content moderation</li>
            <li>Test for bias and harmful outputs before deployment</li>
            <li>Be transparent about AI use and limitations</li>
            <li>Consider societal impact of applications you build</li>
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
                Is it too late to get into generative AI?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely not. The field is still very early. Most applications
                are yet to be built. Entry now positions you as an early
                adopter.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need ML/deep learning knowledge to work with LLMs?
              </p>
              <p className="mt-2 text-muted-foreground">
                For application development (LLM Engineer), basic understanding
                helps but isn't required. For research or fine-tuning roles,
                yes.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Will AI replace programmers?</p>
              <p className="mt-2 text-muted-foreground">
                AI augments programmers rather than replacing them. Those who
                learn to work with AI tools will be more productive. Those who
                don't may fall behind.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I focus on open-source or commercial models?
              </p>
              <p className="mt-2 text-muted-foreground">
                Learn both. Commercial models (GPT-4, Claude) for best quality.
                Open-source (Llama, Mistral) for customization and cost control.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Conclusion: The AI Revolution Needs You
          </h2>

          <p>
            Generative AI is the most transformative technology since the
            internet. Every company is scrambling to integrate AI, creating
            unprecedented demand for skilled professionals.
          </p>

          <p>
            Start building today. Use the APIs. Create projects. Share your
            work. The best time to enter this field was 2022. The second best
            time is now.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more AI/ML resources on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/ai-ml-career-path"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                AI/ML Career Guide â†’
              </Link>
              <Link
                href="/tools/career-roadmap"
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Career Roadmap Tool â†’
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
                Helping students navigate emerging technology careers
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/blog"
                className="rounded-lg bg-muted px-4 py-2 text-sm hover:bg-muted/80"
              >
                â† All Articles
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
