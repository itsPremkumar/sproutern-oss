import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Brain,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Code,
  DollarSign,
  Award,
  Zap,
  Star,
  Layers,
  Database,
  Terminal,
  GitBranch,
  Cpu,
  LineChart,
  Network,
  Sparkles,
  GraduationCap,
  Rocket,
  BriefcaseBusiness,
  AlertTriangle,
  FileText,
  Globe,
  PenTool,
  Building2,
  Laptop,
  Coffee,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';
import { generateArticleSchema } from '@/lib/seo/schema-generators';
import { RelatedTools } from '@/components/blog/RelatedTools';

export const metadata: Metadata = {
  title: 'AI/ML Career Path: Complete Guide',
  description:
    'Start your AI and Machine Learning career. Learn skills, career paths, salary expectations, and how to land AI/ML internships and jobs. Complete roadmap with resources.',
  keywords: [
    'ai career',
    'machine learning career',
    'data science',
    'ai internship',
    'ml engineer',
    'deep learning',
    'ai jobs india',
    'ml roadmap',
    'ai salary',
    'tensorflow',
    'pytorch',
    'nlp career',
    'computer vision jobs',
  ],
  openGraph: {
    title: 'AI/ML Career Path: Complete Guide',
    description: 'Launch your AI career with this comprehensive roadmap.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  const jsonLd = generateArticleSchema({
    headline: 'AI/ML Career Path: Complete Guide',
    description:
      'Start your AI and Machine Learning career. Learn skills, career paths, salary expectations, and how to land AI/ML internships and jobs.',
    image: 'https://www.sproutern.com/opengraph.jpg',
    datePublished: '2025-12-01T00:00:00Z',
    dateModified: '2025-12-01T00:00:00Z',
    author: 'Sproutern Career Team',
    url: 'https://www.sproutern.com/blog/ai-ml-career-path',
    keywords: [
      'ai career',
      'machine learning career',
      'data science',
      'ai internship',
    ],
  });

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-purple-600">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tech Deep Dive
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            AI/ML Career Path: The Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Artificial Intelligence is reshaping every industry. This
            comprehensive guide covers everything you need to know to build a
            successful career in AI and Machine Learning—from foundational
            skills to landing your first job.
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

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            AI/ML Industry Statistics
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">$407B</span>
              <span>global AI market size by 2027</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">40%</span>
              <span>annual growth in AI job postings</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">₹15-50L</span>
              <span>average salary range for ML engineers in India</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-purple-600">77%</span>
              <span>of companies now use or explore AI</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10">
          <p>
            We&apos;re living in the age of AI. From ChatGPT revolutionizing how
            we work to autonomous vehicles transforming transportation,
            artificial intelligence is no longer science fiction—it&apos;s the
            defining technology of our generation.
          </p>
          <p>
            This creates an unprecedented opportunity for students and
            professionals. AI/ML roles are among the highest-paying in tech,
            with demand far exceeding supply. Companies from Google and OpenAI
            to Indian startups are competing for talent. The question isn&apos;t
            whether AI is the future—it&apos;s how fast you can position
            yourself to be part of it.
          </p>
          <p>
            This guide will give you a complete roadmap: understanding different
            AI roles, building foundational skills, creating a portfolio, and
            landing your first AI/ML job or internship.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You&apos;ll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#overview"
                className="text-primary hover:underline"
              >
                1. AI/ML Industry Overview
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                2. AI/ML Roles Explained
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                3. Required Skills
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                4. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#math"
                className="text-primary hover:underline"
              >
                5. Mathematics for ML
              </a>
            </li>
            <li>
              <a
                href="#programming"
                className="text-primary hover:underline"
              >
                6. Programming Skills
              </a>
            </li>
            <li>
              <a
                href="#specializations"
                className="text-primary hover:underline"
              >
                7. AI Specializations
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                8. Projects to Build
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-primary hover:underline"
              >
                9. Building Your Portfolio
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                10. Salaries & Companies
              </a>
            </li>
            <li>
              <a
                href="#jobs"
                className="text-primary hover:underline"
              >
                11. Getting Your First Job
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
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                AI/ML is one of the highest-paying and fastest-growing tech
                fields
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Strong math foundation (linear algebra, calculus, probability)
                is essential
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Python is the dominant language—master it with NumPy, Pandas,
                and ML frameworks
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Projects and research papers are valued more than certifications
                alone
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                You don&apos;t need a PhD for most industry roles—skills and
                projects matter more
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Kaggle competitions and open-source contributions build
                credibility
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Overview */}
        <section
          id="overview"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-primary" />
            1. AI/ML Industry Overview
          </h2>
          <p>
            Artificial Intelligence encompasses systems that can perform tasks
            typically requiring human intelligence. Machine Learning is a subset
            of AI focused on algorithms that learn from data. Deep Learning, a
            subset of ML, uses neural networks with multiple layers to learn
            complex patterns.
          </p>

          <h3>The AI Revolution Timeline</h3>
          <ul>
            <li>
              <strong>2012:</strong> AlexNet wins ImageNet, sparking deep
              learning revolution
            </li>
            <li>
              <strong>2017:</strong> Transformer architecture introduced (basis
              for GPT)
            </li>
            <li>
              <strong>2020:</strong> GPT-3 shows emergent capabilities in
              language
            </li>
            <li>
              <strong>2022:</strong> ChatGPT brings AI to mainstream
              consciousness
            </li>
            <li>
              <strong>2023-24:</strong> Multimodal AI, agents, and enterprise
              adoption explode
            </li>
            <li>
              <strong></strong> AI becomes integral to every industry and role
            </li>
          </ul>

          <h3>AI Applications by Industry</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Healthcare</p>
              <p className="text-sm text-muted-foreground">
                Drug discovery, medical imaging, diagnosis assistance,
                personalized medicine
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Finance</p>
              <p className="text-sm text-muted-foreground">
                Fraud detection, algorithmic trading, credit scoring, risk
                assessment
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">E-commerce</p>
              <p className="text-sm text-muted-foreground">
                Recommendation systems, demand forecasting, chatbots, visual
                search
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Transportation</p>
              <p className="text-sm text-muted-foreground">
                Autonomous vehicles, route optimization, predictive maintenance
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Manufacturing</p>
              <p className="text-sm text-muted-foreground">
                Quality control, supply chain optimization, predictive
                maintenance
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Entertainment</p>
              <p className="text-sm text-muted-foreground">
                Content recommendation, AI-generated content, game AI
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Key Insight:</strong> Unlike previous tech waves, AI
              isn&apos;t creating one industry—it&apos;s transforming every
              industry. This means AI skills are valuable regardless of which
              domain you work in.
            </div>
          </div>
        </section>

        {/* Section 2: Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. AI/ML Roles Explained
          </h2>
          <p>
            The AI/ML field has diverse roles with different skill requirements
            and career paths. Understanding these helps you choose the right
            direction.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-purple-600" />
                <p className="font-bold">Data Scientist</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Analyzes data, builds ML models, and derives business insights.
                Focuses on solving problems with data.
              </p>
              <p className="mt-2 text-xs">
                <strong>Skills:</strong> Python, SQL, Statistics, ML algorithms,
                Data visualization
              </p>
              <p className="text-xs">
                <strong>Salary:</strong> ₹8-25 LPA (entry) | ₹25-50 LPA (senior)
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-blue-600" />
                <p className="font-bold">ML Engineer</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Builds and deploys ML models at scale. Bridges data science and
                software engineering.
              </p>
              <p className="mt-2 text-xs">
                <strong>Skills:</strong> Python, ML frameworks, Software
                engineering, MLOps, Cloud
              </p>
              <p className="text-xs">
                <strong>Salary:</strong> ₹10-30 LPA (entry) | ₹30-60 LPA
                (senior)
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-green-600" />
                <p className="font-bold">AI Research Scientist</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Creates new AI algorithms and techniques. Often publishes papers
                and pushes the field forward.
              </p>
              <p className="mt-2 text-xs">
                <strong>Skills:</strong> Deep math, Research methodology, Deep
                learning, Publishing
              </p>
              <p className="text-xs">
                <strong>Salary:</strong> ₹15-40 LPA (entry) | ₹50 LPA - 1 Cr+
                (senior/top labs)
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-orange-600" />
                <p className="font-bold">MLOps Engineer</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Manages ML infrastructure—pipelines, monitoring, and deployment.
                DevOps for ML.
              </p>
              <p className="mt-2 text-xs">
                <strong>Skills:</strong> Docker, Kubernetes, CI/CD, Cloud, ML
                pipelines
              </p>
              <p className="text-xs">
                <strong>Salary:</strong> ₹12-25 LPA (entry) | ₹25-45 LPA
                (senior)
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-pink-500 bg-pink-50 p-4 dark:bg-pink-950">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-pink-600" />
                <p className="font-bold">Data Engineer</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Builds data pipelines and infrastructure. Enables data
                scientists to access clean data.
              </p>
              <p className="mt-2 text-xs">
                <strong>Skills:</strong> SQL, Python, Spark, ETL, Data
                warehousing
              </p>
              <p className="text-xs">
                <strong>Salary:</strong> ₹8-20 LPA (entry) | ₹20-40 LPA (senior)
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 dark:bg-teal-950">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal-600" />
                <p className="font-bold">AI Product Manager</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Manages AI product development. Bridges business and technical
                teams.
              </p>
              <p className="mt-2 text-xs">
                <strong>Skills:</strong> Product management, AI literacy,
                Strategy, Stakeholder management
              </p>
              <p className="text-xs">
                <strong>Salary:</strong> ₹15-30 LPA (entry) | ₹30-60 LPA
                (senior)
              </p>
            </div>
          </div>

          <h3>Which Role is Right for You?</h3>
          <ul>
            <li>Love math and theory? → Research Scientist</li>
            <li>Enjoy building production systems? → ML Engineer or MLOps</li>
            <li>Like analyzing data for insights? → Data Scientist</li>
            <li>Prefer infrastructure work? → Data Engineer or MLOps</li>
            <li>Want to lead products? → AI Product Manager</li>
          </ul>
        </section>

        {/* Section 3: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            3. Required Skills Overview
          </h2>
          <p>Here&apos;s what you need to break into AI/ML:</p>

          <h3>Core Skills (Required for All Roles)</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4 text-center">
              <p className="text-2xl">🧮</p>
              <p className="font-bold">Mathematics</p>
              <p className="text-xs text-muted-foreground">
                Linear algebra, calculus, probability, statistics
              </p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <p className="text-2xl">💻</p>
              <p className="font-bold">Programming</p>
              <p className="text-xs text-muted-foreground">
                Python, NumPy, Pandas, data structures
              </p>
            </div>
            <div className="rounded-lg border p-4 text-center">
              <p className="text-2xl">🤖</p>
              <p className="font-bold">ML Fundamentals</p>
              <p className="text-xs text-muted-foreground">
                Algorithms, model evaluation, optimization
              </p>
            </div>
          </div>

          <h3>Role-Specific Skills</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Key Skills</th>
                  <th className="p-3 text-left">Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Scientist</td>
                  <td className="p-3">Stats, ML, visualization, SQL</td>
                  <td className="p-3">Python, Jupyter, Tableau, SQL</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">ML Engineer</td>
                  <td className="p-3">SWE, deployment, scalability</td>
                  <td className="p-3">Docker, K8s, AWS/GCP, MLflow</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Research</td>
                  <td className="p-3">Deep math, research, writing</td>
                  <td className="p-3">PyTorch, LaTeX, arXiv</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">MLOps</td>
                  <td className="p-3">DevOps, pipelines, monitoring</td>
                  <td className="p-3">K8s, Airflow, MLflow, Prometheus</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Engineer</td>
                  <td className="p-3">ETL, data systems, SQL</td>
                  <td className="p-3">Spark, Airflow, Snowflake</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            4. Complete Learning Roadmap
          </h2>
          <p>A structured 12-month journey from beginner to job-ready:</p>

          <h3>Phase 1: Foundation (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Python fundamentals, data structures,
              basic algorithms
            </li>
            <li>
              <strong>Month 2:</strong> NumPy, Pandas, data manipulation,
              visualization (Matplotlib, Seaborn)
            </li>
            <li>
              <strong>Month 3:</strong> Math review—linear algebra, calculus,
              probability basics
            </li>
          </ul>

          <h3>Phase 2: Machine Learning (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Supervised learning—regression,
              classification, trees, SVMs
            </li>
            <li>
              <strong>Month 5:</strong> Unsupervised learning—clustering,
              dimensionality reduction, ensemble methods
            </li>
            <li>
              <strong>Month 6:</strong> Model evaluation, cross-validation,
              hyperparameter tuning, feature engineering
            </li>
          </ul>

          <h3>Phase 3: Deep Learning (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Neural networks fundamentals,
              backpropagation, PyTorch/TensorFlow basics
            </li>
            <li>
              <strong>Month 8:</strong> CNNs for computer vision, image
              classification, object detection
            </li>
            <li>
              <strong>Month 9:</strong> RNNs, LSTMs, Transformers, attention
              mechanisms
            </li>
          </ul>

          <h3>Phase 4: Specialization & Projects (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Choose specialization (NLP, CV, RL,
              etc.), deep dive
            </li>
            <li>
              <strong>Month 11:</strong> Build 2-3 substantial projects,
              participate in Kaggle competitions
            </li>
            <li>
              <strong>Month 12:</strong> Portfolio polish, job applications,
              interview preparation
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Don&apos;t wait until month 12 to start
              projects. Build small projects throughout your learning. Apply
              concepts immediately after learning them.
            </div>
          </div>
        </section>

        {/* Section 5: Mathematics */}
        <section
          id="math"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            5. Mathematics for Machine Learning
          </h2>
          <p>
            Math is the language of ML. You don&apos;t need to be a math genius,
            but you must understand these concepts intuitively.
          </p>

          <h3>Linear Algebra (Most Important)</h3>
          <ul>
            <li>
              <strong>Vectors and matrices:</strong> Data is represented as
              matrices in ML
            </li>
            <li>
              <strong>Matrix operations:</strong> Multiplication, transpose,
              inverse
            </li>
            <li>
              <strong>Eigenvalues/eigenvectors:</strong> Used in PCA, SVD
            </li>
            <li>
              <strong>Vector spaces:</strong> Understanding feature spaces
            </li>
          </ul>

          <h3>Calculus</h3>
          <ul>
            <li>
              <strong>Derivatives:</strong> Gradient descent optimization
            </li>
            <li>
              <strong>Partial derivatives:</strong> Multivariable optimization
            </li>
            <li>
              <strong>Chain rule:</strong> Backpropagation in neural networks
            </li>
            <li>
              <strong>Integration:</strong> Probability distributions
            </li>
          </ul>

          <h3>Probability & Statistics</h3>
          <ul>
            <li>
              <strong>Probability distributions:</strong> Normal, Bernoulli,
              Poisson
            </li>
            <li>
              <strong>Bayes&apos; theorem:</strong> Foundation of many ML
              algorithms
            </li>
            <li>
              <strong>Statistical testing:</strong> Hypothesis testing, p-values
            </li>
            <li>
              <strong>Expectation and variance:</strong> Understanding model
              behavior
            </li>
          </ul>

          <h3>Best Resources for Math</h3>
          <ul>
            <li>
              <strong>3Blue1Brown:</strong> Visual explanations of linear
              algebra and calculus
            </li>
            <li>
              <strong>Khan Academy:</strong> Fundamentals from scratch
            </li>
            <li>
              <strong>Mathematics for Machine Learning book:</strong> Free PDF,
              covers exactly what you need
            </li>
            <li>
              <strong>StatQuest:</strong> Statistics explained simply
            </li>
          </ul>
        </section>

        {/* Section 6: Programming */}
        <section
          id="programming"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            6. Programming Skills
          </h2>

          <h3>Python (Primary Language)</h3>
          <p>95% of ML work is done in Python. Master these libraries:</p>
          <ul>
            <li>
              <strong>NumPy:</strong> Numerical computing, array operations
            </li>
            <li>
              <strong>Pandas:</strong> Data manipulation and analysis
            </li>
            <li>
              <strong>Matplotlib/Seaborn:</strong> Data visualization
            </li>
            <li>
              <strong>Scikit-learn:</strong> Traditional ML algorithms
            </li>
            <li>
              <strong>PyTorch or TensorFlow:</strong> Deep learning frameworks
            </li>
            <li>
              <strong>Hugging Face:</strong> Pre-trained models and NLP
            </li>
          </ul>

          <h3>SQL (Essential for Data)</h3>
          <p>Every ML role requires data access. Learn:</p>
          <ul>
            <li>Basic queries: SELECT, WHERE, GROUP BY, JOIN</li>
            <li>Window functions for analytics</li>
            <li>Query optimization basics</li>
          </ul>

          <h3>Software Engineering Best Practices</h3>
          <ul>
            <li>
              <strong>Version control:</strong> Git and GitHub are mandatory
            </li>
            <li>
              <strong>Code organization:</strong> Modular, readable code
            </li>
            <li>
              <strong>Testing:</strong> Unit tests for ML pipelines
            </li>
            <li>
              <strong>Documentation:</strong> Good docstrings and READMEs
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Choose PyTorch for research/learning,
              TensorFlow for production deployments. PyTorch is more intuitive
              for beginners and preferred by researchers.
            </div>
          </div>
        </section>

        {/* Section 7: Specializations */}
        <section
          id="specializations"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-primary" />
            7. AI Specializations
          </h2>
          <p>After learning ML fundamentals, specialize in one area:</p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-bold">🗣️ Natural Language Processing (NLP)</p>
              <p className="text-sm text-muted-foreground">
                Text understanding, chatbots, translation, sentiment analysis
              </p>
              <p className="mt-2 text-xs">
                <strong>Hot topics:</strong> LLMs, RAG, prompt engineering,
                fine-tuning
              </p>
              <p className="text-xs">
                <strong>Job opportunities:</strong> Highest demand due to
                ChatGPT wave
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-bold">👁️ Computer Vision</p>
              <p className="text-sm text-muted-foreground">
                Image recognition, object detection, video analysis
              </p>
              <p className="mt-2 text-xs">
                <strong>Hot topics:</strong> Diffusion models, multimodal AI, 3D
                vision
              </p>
              <p className="text-xs">
                <strong>Job opportunities:</strong> Strong in autonomous
                vehicles, medical imaging
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-bold">🎮 Reinforcement Learning</p>
              <p className="text-sm text-muted-foreground">
                Decision making, robotics, game AI, optimization
              </p>
              <p className="mt-2 text-xs">
                <strong>Hot topics:</strong> RLHF (used in ChatGPT), multi-agent
                systems
              </p>
              <p className="text-xs">
                <strong>Job opportunities:</strong> More research-focused, fewer
                industry roles
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-bold">📊 Applied ML/Data Science</p>
              <p className="text-sm text-muted-foreground">
                Business analytics, forecasting, recommendation systems
              </p>
              <p className="mt-2 text-xs">
                <strong>Hot topics:</strong> AutoML, MLOps, explainable AI
              </p>
              <p className="text-xs">
                <strong>Job opportunities:</strong> Widest availability, every
                company needs this
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            8. Projects to Build
          </h2>
          <p>
            Projects are how you prove your skills. Here&apos;s a progression:
          </p>

          <h3>Beginner Projects (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Titanic Survival Prediction:</strong> Classic
              classification problem
            </li>
            <li>
              <strong>House Price Prediction:</strong> Regression with feature
              engineering
            </li>
            <li>
              <strong>Movie Recommendation System:</strong> Collaborative
              filtering basics
            </li>
            <li>
              <strong>Spam Email Classifier:</strong> NLP fundamentals
            </li>
          </ul>

          <h3>Intermediate Projects (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Image Classifier:</strong> CNN for image classification
              (CIFAR-10, custom dataset)
            </li>
            <li>
              <strong>Sentiment Analysis Pipeline:</strong> End-to-end NLP with
              deployment
            </li>
            <li>
              <strong>Object Detection:</strong> YOLO or Faster R-CNN
              implementation
            </li>
            <li>
              <strong>Time Series Forecasting:</strong> Stock prices or demand
              prediction
            </li>
          </ul>

          <h3>Advanced Projects (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Fine-tune an LLM:</strong> Custom chatbot using Hugging
              Face
            </li>
            <li>
              <strong>RAG Application:</strong> Document Q&A with vector
              databases
            </li>
            <li>
              <strong>Production ML System:</strong> End-to-end with monitoring
              and deployment
            </li>
            <li>
              <strong>Research Implementation:</strong> Reproduce a recent paper
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Key Advice:</strong> Quality over quantity. 2-3
              well-documented, substantial projects impress more than 10
              tutorial copies. Include problem statement, approach, results, and
              learnings in your documentation.
            </div>
          </div>
        </section>

        {/* Section 9: Portfolio */}
        <section
          id="portfolio"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            9. Building Your Portfolio
          </h2>

          <h3>GitHub Profile Essentials</h3>
          <ul>
            <li>Professional README with your bio and interests</li>
            <li>Pinned repositories showcasing best projects</li>
            <li>Clean, documented code with good READMEs</li>
            <li>Regular commit history showing consistency</li>
          </ul>

          <h3>Kaggle Profile</h3>
          <ul>
            <li>Participate in competitions (even if not top ranks)</li>
            <li>Contribute notebooks with analyses</li>
            <li>Aim for expert tier through contributions</li>
          </ul>

          <h3>Blog/Writing</h3>
          <ul>
            <li>Write about projects on Medium, Dev.to, or personal blog</li>
            <li>Explain concepts you&apos;ve learned</li>
            <li>Share insights from competitions or research</li>
          </ul>

          <h3>LinkedIn Presence</h3>
          <ul>
            <li>
              Optimized headline: &quot;ML Engineer | Python, PyTorch | Building
              AI solutions&quot;
            </li>
            <li>About section showcasing skills and projects</li>
            <li>Posts about learnings and achievements</li>
          </ul>
        </section>

        {/* Section 10: Salary */}
        <section
          id="salary"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            10. Salaries & Companies
          </h2>

          <h3>Salary Ranges (India)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Entry (0-2 yrs)</th>
                  <th className="p-3 text-left">Mid (3-5 yrs)</th>
                  <th className="p-3 text-left">Senior (5+ yrs)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Data Scientist</td>
                  <td className="p-3">₹6-15 LPA</td>
                  <td className="p-3">₹15-30 LPA</td>
                  <td className="p-3">₹30-50 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">ML Engineer</td>
                  <td className="p-3">₹8-20 LPA</td>
                  <td className="p-3">₹20-40 LPA</td>
                  <td className="p-3">₹40-70 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Research Scientist</td>
                  <td className="p-3">₹15-30 LPA</td>
                  <td className="p-3">₹30-60 LPA</td>
                  <td className="p-3">₹50 LPA - 1 Cr+</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">MLOps Engineer</td>
                  <td className="p-3">₹10-20 LPA</td>
                  <td className="p-3">₹20-35 LPA</td>
                  <td className="p-3">₹35-55 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Top Companies Hiring AI/ML</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Global Tech Giants</p>
              <p className="text-sm">
                Google, Microsoft, Meta, Amazon, OpenAI, Anthropic, DeepMind
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Indian IT/Product</p>
              <p className="text-sm">
                Flipkart, Swiggy, Zomato, PhonePe, Razorpay, CRED
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">AI Startups</p>
              <p className="text-sm">
                Ola, Nykaa, Meesho, MPL, Fractal, Tiger Analytics
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Consulting</p>
              <p className="text-sm">
                McKinsey, BCG, EY, Deloitte (all have AI practices)
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Getting Jobs */}
        <section
          id="jobs"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BriefcaseBusiness className="h-6 w-6 text-primary" />
            11. Getting Your First AI/ML Job
          </h2>

          <h3>Application Strategy</h3>
          <ul>
            <li>
              <strong>Resume:</strong> Highlight projects, skills, and
              quantified achievements
            </li>
            <li>
              <strong>Cover letter:</strong> Show genuine interest in the
              company&apos;s AI work
            </li>
            <li>
              <strong>Portfolio:</strong> Link to GitHub, Kaggle, and project
              demos
            </li>
          </ul>

          <h3>Interview Preparation</h3>
          <ul>
            <li>
              <strong>ML Theory:</strong> Algorithms, bias-variance,
              overfitting, regularization
            </li>
            <li>
              <strong>Coding:</strong> Python, data manipulation, basic DSA
            </li>
            <li>
              <strong>System Design:</strong> ML system design for senior roles
            </li>
            <li>
              <strong>Project Discussion:</strong> Deep dive into your projects
            </li>
          </ul>

          <h3>Alternative Entry Points</h3>
          <ul>
            <li>
              <strong>Internships:</strong> Best way to break in—many convert to
              full-time
            </li>
            <li>
              <strong>Freelancing:</strong> Build experience with Upwork or
              Toptal
            </li>
            <li>
              <strong>Open Source:</strong> Contribute to ML libraries
            </li>
            <li>
              <strong>Kaggle:</strong> Top performers get noticed by companies
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Trophy className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div className="text-sm">
              <strong>Success Tip:</strong> Apply to startups and mid-size
              companies initially. Big tech is competitive for entry-level.
              Build experience first, then aim for FAANG/top research labs.
            </div>
          </div>
        </section>

        {/* Section 12: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            12. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div className="border-b pb-4">
              <p className="font-bold">Do I need a PhD for AI/ML?</p>
              <p className="mt-2 text-muted-foreground">
                No for most industry roles. PhD helps for research positions at
                top labs (Google Research, OpenAI). For ML Engineer, Data
                Scientist—strong skills and projects matter more.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is AI/ML getting saturated?</p>
              <p className="mt-2 text-muted-foreground">
                Entry-level competition is high, but demand for skilled
                professionals exceeds supply. The key is differentiation—strong
                projects, specialization, and continuous learning.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Can I learn AI/ML without a CS degree?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Many successful ML engineers come from physics,
                math, economics, or self-study backgrounds. What matters is
                demonstrable skills and projects.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How long does it take to become job-ready?
              </p>
              <p className="mt-2 text-muted-foreground">
                With dedicated study (20-30 hours/week), 6-12 months to become
                competitive for entry-level roles. Speed depends on prior
                programming/math background.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Should I focus on TensorFlow or PyTorch?
              </p>
              <p className="mt-2 text-muted-foreground">
                PyTorch for learning and research (more intuitive).
                TensorFlow/Keras for production deployment. Most ML engineers
                know both eventually.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Are online certifications valuable?</p>
              <p className="mt-2 text-muted-foreground">
                They help for learning but aren&apos;t sufficient for hiring.
                Projects, Kaggle rankings, and GitHub contributions carry more
                weight than certificates alone.
              </p>
            </div>
          </div>
        </section>

        {/* Best Resources */}
        <section>
          <h2>Best Free Resources</h2>
          <ul>
            <li>
              <strong>Andrew Ng&apos;s ML Course (Coursera):</strong> The
              classic introduction
            </li>
            <li>
              <strong>fast.ai:</strong> Practical deep learning, top-down
              approach
            </li>
            <li>
              <strong>Stanford CS229 (YouTube):</strong> Mathematical ML
              foundations
            </li>
            <li>
              <strong>Kaggle Learn:</strong> Free micro-courses with practice
            </li>
            <li>
              <strong>3Blue1Brown:</strong> Visual math explanations
            </li>
            <li>
              <strong>Hugging Face courses:</strong> NLP and transformers
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Join the AI Revolution</h2>
          <p>
            AI is not just another tech trend—it&apos;s a fundamental shift in
            how we solve problems, create products, and advance society. The
            opportunities for those who master AI/ML are unprecedented.
          </p>
          <p>
            The path is clear: build your foundation, create projects, and keep
            learning. The field moves fast, but that&apos;s what makes it
            exciting. Start today, stay consistent, and you&apos;ll be building
            the future before you know it.
          </p>
          <p className="text-lg font-semibold text-primary">
            The future is intelligent. Be part of building it. 🤖
          </p>
        </section>

        {/* Related Tools - Engagement Widget */}
        <RelatedTools />

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/data-science-internships-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Data Science Internships
            </Link>
            <Link
              href="/blog/project-ideas-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Project Ideas
            </Link>
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation
            </Link>
            <Link
              href="/blog/top-5-programming-languages-for-web-development"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Programming Languages
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
                Based on insights from AI/ML professionals at Google, Microsoft,
                Meta, and leading startups.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
