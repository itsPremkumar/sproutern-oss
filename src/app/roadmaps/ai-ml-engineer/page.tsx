import { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  CheckCircle,
  Clock,
  BookOpen,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Target,
  Briefcase,
  GraduationCap,
  Zap,
  Award,
  Code,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'AI/ML Engineer Roadmap | Complete Guide',
  description:
    'Complete roadmap to become an AI/ML Engineer. Learn Python, machine learning, deep learning, NLP, computer vision, and MLOps with free resources.',
  keywords:
    'ai engineer roadmap, ml engineer roadmap, machine learning career, deep learning roadmap, nlp career path, computer vision engineer, mlops roadmap, ai career guide',
  openGraph: {
    title: 'AI/ML Engineer Roadmap',
    description:
      'Step-by-step guide to becoming an AI/ML Engineer with skills, projects, and free resources.',
    type: 'article',
    url: 'https://www.sproutern.com/roadmaps/ai-ml-engineer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI/ML Engineer Roadmap',
    description: 'Complete learning path for AI/ML engineering career.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/roadmaps/ai-ml-engineer',
  },
};

const phases = [
  {
    number: 1,
    title: 'Python & Programming Fundamentals',
    duration: '4-6 weeks',
    description:
      'Build a strong foundation in Python programming, the primary language for AI/ML.',
    skills: [
      {
        name: 'Python Basics (variables, loops, functions)',
        priority: 'Essential',
      },
      { name: 'Object-Oriented Programming', priority: 'Essential' },
      { name: 'NumPy for Numerical Computing', priority: 'Essential' },
      { name: 'Pandas for Data Manipulation', priority: 'Essential' },
      { name: 'Matplotlib & Seaborn for Visualization', priority: 'Essential' },
      { name: 'Jupyter Notebooks', priority: 'Essential' },
      { name: 'Virtual Environments (conda, venv)', priority: 'Important' },
      { name: 'Git Version Control', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Python.org Tutorial',
        url: 'https://docs.python.org/3/tutorial/',
        type: 'Free',
      },
      {
        name: 'Kaggle Python Course',
        url: 'https://www.kaggle.com/learn/python',
        type: 'Free',
      },
      {
        name: 'NumPy Documentation',
        url: 'https://numpy.org/doc/',
        type: 'Free',
      },
      {
        name: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs/',
        type: 'Free',
      },
    ],
    projects: [
      'Data Analysis with Pandas on a real dataset',
      'Visualization dashboard with Matplotlib',
      'Automate file processing with Python',
    ],
  },
  {
    number: 2,
    title: 'Mathematics for ML',
    duration: '6-8 weeks',
    description:
      'Master the mathematical foundations essential for understanding ML algorithms.',
    skills: [
      {
        name: 'Linear Algebra (vectors, matrices, eigenvalues)',
        priority: 'Essential',
      },
      {
        name: 'Calculus (derivatives, gradients, chain rule)',
        priority: 'Essential',
      },
      { name: 'Probability & Statistics', priority: 'Essential' },
      { name: 'Probability Distributions', priority: 'Essential' },
      { name: 'Hypothesis Testing', priority: 'Important' },
      { name: 'Optimization Theory', priority: 'Important' },
      { name: 'Information Theory Basics', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: '3Blue1Brown Linear Algebra',
        url: 'https://www.3blue1brown.com/topics/linear-algebra',
        type: 'Free',
      },
      {
        name: 'Khan Academy Statistics',
        url: 'https://www.khanacademy.org/math/statistics-probability',
        type: 'Free',
      },
      {
        name: 'MIT OpenCourseWare',
        url: 'https://ocw.mit.edu/courses/mathematics/',
        type: 'Free',
      },
      {
        name: 'StatQuest YouTube',
        url: 'https://www.youtube.com/@statquest',
        type: 'Free',
      },
    ],
    projects: [
      'Implement matrix operations from scratch',
      'Statistical analysis on a dataset',
      'Gradient descent visualization',
    ],
  },
  {
    number: 3,
    title: 'Machine Learning Fundamentals',
    duration: '8-10 weeks',
    description:
      'Learn core ML concepts, algorithms, and how to build predictive models.',
    skills: [
      {
        name: 'Supervised Learning (Regression, Classification)',
        priority: 'Essential',
      },
      {
        name: 'Unsupervised Learning (Clustering, Dimensionality Reduction)',
        priority: 'Essential',
      },
      { name: 'Model Evaluation & Metrics', priority: 'Essential' },
      { name: 'Feature Engineering', priority: 'Essential' },
      { name: 'Scikit-learn Library', priority: 'Essential' },
      {
        name: 'Cross-Validation & Hyperparameter Tuning',
        priority: 'Essential',
      },
      {
        name: 'Ensemble Methods (Random Forest, XGBoost)',
        priority: 'Important',
      },
      { name: 'Handling Imbalanced Data', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Scikit-learn Documentation',
        url: 'https://scikit-learn.org/stable/',
        type: 'Free',
      },
      {
        name: 'Kaggle ML Course',
        url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
        type: 'Free',
      },
      {
        name: 'Google ML Crash Course',
        url: 'https://developers.google.com/machine-learning/crash-course',
        type: 'Free',
      },
      {
        name: 'Hands-On ML Book',
        url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
        type: 'Paid',
      },
    ],
    projects: [
      'House Price Prediction (Regression)',
      'Customer Churn Prediction (Classification)',
      'Customer Segmentation (Clustering)',
      'Kaggle Competition Participation',
    ],
  },
  {
    number: 4,
    title: 'Deep Learning',
    duration: '8-12 weeks',
    description:
      'Master neural networks, architectures, and deep learning frameworks.',
    skills: [
      { name: 'Neural Network Fundamentals', priority: 'Essential' },
      { name: 'Backpropagation & Optimization', priority: 'Essential' },
      { name: 'TensorFlow or PyTorch', priority: 'Essential' },
      { name: 'CNNs for Computer Vision', priority: 'Essential' },
      { name: 'RNNs & LSTMs for Sequences', priority: 'Essential' },
      { name: 'Transfer Learning', priority: 'Essential' },
      { name: 'Regularization Techniques', priority: 'Important' },
      { name: 'GPU Training', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Deep Learning Specialization',
        url: 'https://www.deeplearning.ai/courses/deep-learning-specialization/',
        type: 'Freemium',
      },
      {
        name: 'PyTorch Tutorials',
        url: 'https://pytorch.org/tutorials/',
        type: 'Free',
      },
      {
        name: 'TensorFlow Documentation',
        url: 'https://www.tensorflow.org/tutorials',
        type: 'Free',
      },
      { name: 'Fast.ai Course', url: 'https://www.fast.ai/', type: 'Free' },
    ],
    projects: [
      'Image Classification with CNNs',
      'Sentiment Analysis with RNNs',
      'Transfer Learning for Custom Dataset',
      'Build a Neural Network from Scratch',
    ],
  },
  {
    number: 5,
    title: 'Natural Language Processing',
    duration: '6-8 weeks',
    description:
      'Learn to process and understand human language using ML/DL techniques.',
    skills: [
      { name: 'Text Preprocessing & Tokenization', priority: 'Essential' },
      { name: 'Word Embeddings (Word2Vec, GloVe)', priority: 'Essential' },
      { name: 'Transformers Architecture', priority: 'Essential' },
      { name: 'BERT, GPT, and LLMs', priority: 'Essential' },
      { name: 'Hugging Face Transformers', priority: 'Essential' },
      { name: 'Named Entity Recognition', priority: 'Important' },
      { name: 'Text Generation', priority: 'Important' },
      { name: 'Question Answering Systems', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'Hugging Face Course',
        url: 'https://huggingface.co/course',
        type: 'Free',
      },
      {
        name: 'Stanford NLP Course',
        url: 'https://web.stanford.edu/class/cs224n/',
        type: 'Free',
      },
      { name: 'spaCy Documentation', url: 'https://spacy.io/', type: 'Free' },
      { name: 'NLTK Book', url: 'https://www.nltk.org/book/', type: 'Free' },
    ],
    projects: [
      'Sentiment Analysis on Reviews',
      'Text Classification with Transformers',
      'Chatbot with LLM',
      'Document Summarization',
    ],
  },
  {
    number: 6,
    title: 'Computer Vision',
    duration: '6-8 weeks',
    description:
      'Learn to process and analyze visual data using deep learning.',
    skills: [
      { name: 'Image Processing (OpenCV)', priority: 'Essential' },
      { name: 'Object Detection (YOLO, Faster R-CNN)', priority: 'Essential' },
      { name: 'Image Segmentation', priority: 'Essential' },
      { name: 'Face Recognition', priority: 'Important' },
      { name: 'Video Analysis', priority: 'Important' },
      { name: 'GANs for Image Generation', priority: 'Important' },
      { name: 'Vision Transformers (ViT)', priority: 'Good to Have' },
      { name: 'Diffusion Models', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'OpenCV Documentation',
        url: 'https://docs.opencv.org/',
        type: 'Free',
      },
      {
        name: 'CS231n Stanford',
        url: 'http://cs231n.stanford.edu/',
        type: 'Free',
      },
      {
        name: 'PyTorch Vision',
        url: 'https://pytorch.org/vision/',
        type: 'Free',
      },
      {
        name: 'Papers With Code',
        url: 'https://paperswithcode.com/',
        type: 'Free',
      },
    ],
    projects: [
      'Object Detection System',
      'Face Recognition Application',
      'Image Generation with GANs',
      'Real-time Video Analysis',
    ],
  },
  {
    number: 7,
    title: 'MLOps & Deployment',
    duration: '4-6 weeks',
    description:
      'Learn to deploy, monitor, and maintain ML models in production.',
    skills: [
      { name: 'Model Serialization (pickle, ONNX)', priority: 'Essential' },
      { name: 'REST APIs for ML (FastAPI, Flask)', priority: 'Essential' },
      { name: 'Docker Containerization', priority: 'Essential' },
      { name: 'Cloud ML Services (AWS, GCP, Azure)', priority: 'Essential' },
      { name: 'ML Pipelines (MLflow, Kubeflow)', priority: 'Important' },
      { name: 'Model Monitoring & Logging', priority: 'Important' },
      { name: 'A/B Testing for Models', priority: 'Good to Have' },
      { name: 'Model Versioning', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'MLflow Documentation',
        url: 'https://mlflow.org/',
        type: 'Free',
      },
      {
        name: 'FastAPI Tutorial',
        url: 'https://fastapi.tiangolo.com/',
        type: 'Free',
      },
      {
        name: 'AWS SageMaker',
        url: 'https://aws.amazon.com/sagemaker/',
        type: 'Freemium',
      },
      { name: 'Made With ML', url: 'https://madewithml.com/', type: 'Free' },
    ],
    projects: [
      'Deploy ML Model as REST API',
      'Containerize ML Application',
      'Build ML Pipeline with MLflow',
      'Deploy to Cloud Platform',
    ],
  },
  {
    number: 8,
    title: 'Advanced Topics & Specialization',
    duration: '6-8 weeks',
    description:
      'Explore cutting-edge AI topics and choose your specialization area.',
    skills: [
      { name: 'Reinforcement Learning', priority: 'Important' },
      { name: 'Generative AI & LLMs', priority: 'Essential' },
      { name: 'Prompt Engineering', priority: 'Essential' },
      { name: 'RAG (Retrieval Augmented Generation)', priority: 'Essential' },
      { name: 'AI Ethics & Responsible AI', priority: 'Important' },
      { name: 'AutoML & Neural Architecture Search', priority: 'Good to Have' },
      { name: 'Federated Learning', priority: 'Good to Have' },
      { name: 'Edge AI & Model Optimization', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'OpenAI Documentation',
        url: 'https://platform.openai.com/docs',
        type: 'Free',
      },
      {
        name: 'LangChain Documentation',
        url: 'https://python.langchain.com/',
        type: 'Free',
      },
      {
        name: 'Spinning Up in RL',
        url: 'https://spinningup.openai.com/',
        type: 'Free',
      },
      {
        name: 'Google AI Blog',
        url: 'https://ai.googleblog.com/',
        type: 'Free',
      },
    ],
    projects: [
      'Build RAG Application',
      'Fine-tune an LLM',
      'Reinforcement Learning Agent',
      'Contribute to Open Source AI Project',
    ],
  },
];

export default function AIMLEngineerRoadmapPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Career Roadmaps',
        item: 'https://www.sproutern.com/roadmaps',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'AI/ML Engineer',
        item: 'https://www.sproutern.com/roadmaps/ai-ml-engineer',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI/ML Engineer Roadmap - Complete Learning Path',
    description:
      'Step-by-step guide to becoming an AI/ML Engineer with skills, projects, and resources.',
    author: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
    },
    datePublished: '2024-12-01',
    dateModified: '2024-12-30',
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="container py-16 md:py-24">
          <Link
            href="/roadmaps"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Roadmaps
          </Link>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                AI/ML Engineer Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              12-18 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Advanced
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹10-35 LPA
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <GraduationCap className="mr-2 h-4 w-4" />8 Phases
            </Badge>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container py-12">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="mb-6 text-muted-foreground">
            This roadmap will guide you through becoming an AI/ML Engineer.
            You&apos;ll master Python, mathematics fundamentals, machine
            learning algorithms, deep learning, NLP, computer vision, and MLOps.
            This path is designed for those with basic programming knowledge and
            can be completed in 12-18 months with dedicated effort (4-5 hours
            daily).
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Basic Python knowledge
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    AI/ML Engineer Role
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-bold">Resources</p>
                  <p className="text-sm text-muted-foreground">
                    Mostly free resources
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-1 text-xl">
                      {phase.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {phase.duration}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-3">
                {/* Skills */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Skills to Learn
                  </h4>
                  <ul className="space-y-2">
                    {phase.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Badge
                          variant={
                            skill.priority === 'Essential'
                              ? 'default'
                              : skill.priority === 'Important'
                                ? 'secondary'
                                : 'outline'
                          }
                          className="mt-0.5 flex-shrink-0 px-1.5 py-0 text-[10px]"
                        >
                          {skill.priority === 'Essential'
                            ? '★'
                            : skill.priority === 'Important'
                              ? '◆'
                              : '○'}
                        </Badge>
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    Resources
                  </h4>
                  <ul className="space-y-2">
                    {phase.resources.map((resource) => (
                      <li key={resource.name}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {resource.name}
                          <Badge
                            variant="outline"
                            className="px-1.5 py-0 text-[10px]"
                          >
                            {resource.type}
                          </Badge>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-semibold">
                    <Code className="h-4 w-4 text-purple-500" />
                    Projects to Build
                  </h4>
                  <ul className="space-y-2">
                    {phase.projects.map((project) => (
                      <li
                        key={project}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="text-primary">→</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="container bg-muted/30 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Tips for Success
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">🧮 Master the Math</h4>
              <p className="text-sm text-muted-foreground">
                Don&apos;t skip linear algebra and calculus - they&apos;re
                crucial for understanding ML.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">🏆 Compete on Kaggle</h4>
              <p className="text-sm text-muted-foreground">
                Participate in Kaggle competitions to gain practical experience.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">📚 Read Research Papers</h4>
              <p className="text-sm text-muted-foreground">
                Stay updated with latest research from arXiv and top
                conferences.
              </p>
            </Card>
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">🔧 Build Real Projects</h4>
              <p className="text-sm text-muted-foreground">
                Theory alone isn&apos;t enough - build and deploy real ML
                applications.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container py-12">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/roadmaps">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Roadmaps
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
          >
            <Link href="/roadmaps/data-scientist">
              Data Scientist Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
