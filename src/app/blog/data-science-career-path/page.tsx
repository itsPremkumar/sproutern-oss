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
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Database,
  BarChart,
  LineChart,
  PieChart,
  Brain,
  Cpu,
  FlaskConical,
  GitBranch,
  Table,
  Calculator,
  Puzzle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Science Career Path: Complete Guide',
  description:
    'Start your data science career. Learn Python, machine learning, statistics, SQL, visualization, job opportunities, and salary expectations in this comprehensive guide.',
  keywords: [
    'data science career',
    'data scientist salary',
    'data science roadmap',
    'machine learning career',
    'python data science',
    'data analyst vs data scientist',
    'data science skills',
    'data science certifications',
    'data science jobs',
    'become data scientist',
  ],
  openGraph: {
    title: 'Data Science Career Path: Complete Guide',
    description:
      'Master data science and build a successful career in analytics.',
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
            <BarChart className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Data & Analytics
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Data Science Career Path: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Data science remains one of the most in-demand and well-paid careers
            in tech. This comprehensive guide covers everything you need to
            transition into data science or advance your existing career.
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
              <span>26 min read</span>
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
                1. What is Data Science?
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                2. Data Roles Explained
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                3. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#python"
                className="text-primary hover:underline"
              >
                4. Python for Data Science
              </a>
            </li>
            <li>
              <a
                href="#ml"
                className="text-primary hover:underline"
              >
                5. Machine Learning
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                6. Tools & Technologies
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                7. Learning Roadmap
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
                href="#companies"
                className="text-primary hover:underline"
              >
                9. Top Companies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                10. Portfolio Projects
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
                Data science job market growing 35% through 2032 (BLS)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Python, SQL, and statistics are the core foundational skills
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Salaries range from ₹6-50 LPA in India to $90K-200K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Machine learning and deep learning skills command premium
                salaries
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                Generative AI skills are now highly valued addition to data
                science
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Data Science */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Brain className="h-6 w-6 text-primary" />
            1. What is Data Science?
          </h2>

          <p>
            <strong>Data Science</strong> is the interdisciplinary field that
            uses scientific methods, algorithms, and systems to extract
            knowledge and insights from structured and unstructured data. It
            combines statistics, programming, and domain expertise.
          </p>

          <h3>The Data Science Process</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">1. Problem Definition</p>
              <p className="text-muted-foreground">
                Understand the business question. What decision needs to be
                made? What outcome do we want to predict?
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">2. Data Collection</p>
              <p className="text-muted-foreground">
                Gather relevant data from databases, APIs, files, web scraping.
                Often the most time-consuming step.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">3. Data Cleaning</p>
              <p className="text-muted-foreground">
                Handle missing values, outliers, duplicates. Transform data into
                usable format. 80% of the work.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">4. Exploratory Analysis</p>
              <p className="text-muted-foreground">
                Visualize data, find patterns, test hypotheses. Understand the
                data before modeling.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">5. Modeling</p>
              <p className="text-muted-foreground">
                Build predictive models using machine learning or statistical
                methods. Train, tune, validate.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">6. Communication</p>
              <p className="text-muted-foreground">
                Present findings to stakeholders. Visualizations, dashboards,
                reports that drive decisions.
              </p>
            </div>
          </div>

          <h3>Why Data Science Matters</h3>
          <ul>
            <li>Companies generate massive amounts of data daily</li>
            <li>Data-driven decisions outperform intuition</li>
            <li>AI and ML capabilities built on data science</li>
            <li>Competitive advantage from data insights</li>
          </ul>
        </section>

        {/* Section 2: Data Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            2. Data Roles Explained
          </h2>

          <h3>Core Data Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Data Analyst</p>
              <p className="mt-1 text-muted-foreground">
                Analyze data to answer business questions. Create reports and
                dashboards. Entry point for many data careers.
              </p>
              <p className="mt-2 text-xs">
                Skills: SQL, Excel, Tableau/Power BI, basic Python
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-emerald-500">Data Scientist</p>
              <p className="mt-1 text-muted-foreground">
                Build predictive models, perform advanced analysis, communicate
                insights. The "full stack" of data. Most versatile role.
              </p>
              <p className="mt-2 text-xs">
                Skills: Python, ML, statistics, SQL, visualization
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Data Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Build data pipelines and infrastructure. Move data from sources
                to warehouses. Enable data scientists and analysts.
              </p>
              <p className="mt-2 text-xs">
                Skills: SQL, Python, Spark, Airflow, cloud platforms
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">ML Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Deploy and operationalize ML models. Build ML systems at scale.
                Bridge between data science and software engineering.
              </p>
              <p className="mt-2 text-xs">
                Skills: Python, MLOps, cloud, Docker, APIs
              </p>
            </div>
          </div>

          <h3>Role Comparison</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Factor</th>
                  <th className="p-3 text-left">Analyst</th>
                  <th className="p-3 text-left">Scientist</th>
                  <th className="p-3 text-left">Engineer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Focus</td>
                  <td className="p-3">Reporting</td>
                  <td className="p-3">Modeling</td>
                  <td className="p-3">Infrastructure</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Coding</td>
                  <td className="p-3">Light</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">Heavy</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Math</td>
                  <td className="p-3">Basic</td>
                  <td className="p-3">Advanced</td>
                  <td className="p-3">Medium</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Entry Difficulty</td>
                  <td className="p-3">Easier</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">Harder</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Career Path Tip:</strong> Many start as Data Analysts,
              then move to Data Scientist or Data Engineer based on interest
              (more modeling vs. more engineering).
            </div>
          </div>
        </section>

        {/* Section 3: Essential Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            3. Essential Skills
          </h2>

          <h3>Technical Skills</h3>
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
                  <td className="p-3 font-medium">Python</td>
                  <td className="p-3">Primary data science language</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">SQL</td>
                  <td className="p-3">Database querying</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Statistics</td>
                  <td className="p-3">Probability, hypothesis testing</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Machine Learning</td>
                  <td className="p-3">Algorithms, model building</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Visualization</td>
                  <td className="p-3">Matplotlib, Tableau, communication</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Deep Learning</td>
                  <td className="p-3">Neural networks, PyTorch/TensorFlow</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Big Data</td>
                  <td className="p-3">Spark, distributed computing</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Mathematics Foundation</h3>
          <ul>
            <li>
              <strong>Linear Algebra:</strong> Vectors, matrices,
              transformations
            </li>
            <li>
              <strong>Probability:</strong> Distributions, Bayesian thinking
            </li>
            <li>
              <strong>Statistics:</strong> Hypothesis testing, regression
            </li>
            <li>
              <strong>Calculus:</strong> Optimization (for ML understanding)
            </li>
          </ul>

          <h3>Soft Skills</h3>
          <ul>
            <li>
              <strong>Communication:</strong> Explain findings to non-technical
              stakeholders
            </li>
            <li>
              <strong>Problem Solving:</strong> Frame questions, approach
              systematically
            </li>
            <li>
              <strong>Business Acumen:</strong> Understand context and impact
            </li>
            <li>
              <strong>Curiosity:</strong> Always asking "why?" with data
            </li>
          </ul>
        </section>

        {/* Section 4: Python for Data Science */}
        <section
          id="python"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            4. Python for Data Science
          </h2>

          <p>
            Python is the undisputed king of data science. Its simple syntax,
            rich ecosystem, and community make it the go-to language.
          </p>

          <h3>Essential Libraries</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Library</th>
                  <th className="p-3 text-left">Purpose</th>
                  <th className="p-3 text-left">Must Know</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">NumPy</td>
                  <td className="p-3">Numerical computing, arrays</td>
                  <td className="p-3 text-green-600">✓ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Pandas</td>
                  <td className="p-3">Data manipulation, DataFrames</td>
                  <td className="p-3 text-green-600">✓ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Matplotlib/Seaborn</td>
                  <td className="p-3">Data visualization</td>
                  <td className="p-3 text-green-600">✓ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Scikit-learn</td>
                  <td className="p-3">Machine learning</td>
                  <td className="p-3 text-green-600">✓ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Jupyter</td>
                  <td className="p-3">Interactive notebooks</td>
                  <td className="p-3 text-green-600">✓ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">TensorFlow/PyTorch</td>
                  <td className="p-3">Deep learning</td>
                  <td className="p-3 text-yellow-600">For DL roles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>SQL Essentials</h3>
          <ul>
            <li>
              <strong>SELECT, WHERE, GROUP BY:</strong> Basic querying
            </li>
            <li>
              <strong>JOINs:</strong> Combining tables
            </li>
            <li>
              <strong>Window Functions:</strong> Advanced analytics
            </li>
            <li>
              <strong>Subqueries & CTEs:</strong> Complex queries
            </li>
          </ul>
        </section>

        {/* Section 5: Machine Learning */}
        <section
          id="ml"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Cpu className="h-6 w-6 text-primary" />
            5. Machine Learning
          </h2>

          <h3>ML Algorithm Categories</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Supervised Learning</p>
              <p className="mt-1 text-muted-foreground">
                Learn from labeled data. Predict outcomes for new data.
              </p>
              <p className="mt-2 text-xs">
                Algorithms: Linear Regression, Random Forest, XGBoost, Neural
                Networks
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Unsupervised Learning</p>
              <p className="mt-1 text-muted-foreground">
                Find patterns in unlabeled data. Clustering, dimensionality
                reduction.
              </p>
              <p className="mt-2 text-xs">
                Algorithms: K-Means, DBSCAN, PCA, t-SNE
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Reinforcement Learning</p>
              <p className="mt-1 text-muted-foreground">
                Learn through trial and error. Agents maximize rewards.
              </p>
              <p className="mt-2 text-xs">
                Applications: Games, robotics, recommendation systems
              </p>
            </div>
          </div>

          <h3>Essential ML Algorithms to Know</h3>
          <ul>
            <li>
              <strong>Linear/Logistic Regression:</strong> Foundation of ML
            </li>
            <li>
              <strong>Decision Trees:</strong> Interpretable, foundation for
              ensembles
            </li>
            <li>
              <strong>Random Forest:</strong> Powerful ensemble method
            </li>
            <li>
              <strong>XGBoost/LightGBM:</strong> Competition-winning gradient
              boosting
            </li>
            <li>
              <strong>K-Means:</strong> Basic clustering
            </li>
            <li>
              <strong>Neural Networks:</strong> Deep learning foundation
            </li>
          </ul>

          <h3>ML Workflow</h3>
          <ol>
            <li>Define the problem (classification, regression, clustering)</li>
            <li>Prepare data (clean, feature engineering)</li>
            <li>Split data (train/validation/test)</li>
            <li>Train models (try multiple algorithms)</li>
            <li>Evaluate (metrics: accuracy, F1, RMSE)</li>
            <li>Tune hyperparameters (grid search, cross-validation)</li>
            <li>Deploy and monitor</li>
          </ol>
        </section>

        {/* Section 6: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-primary" />
            6. Tools & Technologies
          </h2>

          <h3>Development Environment</h3>
          <ul>
            <li>
              <strong>Jupyter Notebook/Lab:</strong> Interactive exploration
            </li>
            <li>
              <strong>VS Code:</strong> Full IDE for production code
            </li>
            <li>
              <strong>Google Colab:</strong> Free cloud notebooks with GPU
            </li>
            <li>
              <strong>Anaconda:</strong> Python distribution for data science
            </li>
          </ul>

          <h3>Visualization Tools</h3>
          <ul>
            <li>
              <strong>Tableau:</strong> Industry standard BI tool
            </li>
            <li>
              <strong>Power BI:</strong> Microsoft's BI solution
            </li>
            <li>
              <strong>Plotly/Dash:</strong> Interactive Python visualizations
            </li>
            <li>
              <strong>Streamlit:</strong> Quick ML app prototyping
            </li>
          </ul>

          <h3>Cloud Platforms</h3>
          <ul>
            <li>
              <strong>AWS SageMaker:</strong> ML platform on AWS
            </li>
            <li>
              <strong>Google Cloud AI:</strong> Vertex AI, BigQuery ML
            </li>
            <li>
              <strong>Azure ML:</strong> Microsoft's ML platform
            </li>
            <li>
              <strong>Databricks:</strong> Unified analytics platform
            </li>
          </ul>
        </section>

        {/* Section 7: Learning Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            7. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Python basics—variables, loops,
              functions, OOP. Practice daily.
            </li>
            <li>
              <strong>Month 2:</strong> NumPy and Pandas. Data manipulation and
              analysis. Many exercises.
            </li>
            <li>
              <strong>Month 3:</strong> SQL fundamentals. Practice on LeetCode
              or HackerRank. Statistics basics.
            </li>
          </ul>

          <h3>Phase 2: Core Data Science (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Statistics and probability. Hypothesis
              testing. Distributions.
            </li>
            <li>
              <strong>Month 5:</strong> Data visualization—Matplotlib, Seaborn,
              Plotly. Storytelling with data.
            </li>
            <li>
              <strong>Month 6:</strong> Machine learning fundamentals with
              scikit-learn. Supervised learning.
            </li>
          </ul>

          <h3>Phase 3: Advanced Topics (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Advanced ML—ensemble methods, feature
              engineering, model tuning.
            </li>
            <li>
              <strong>Month 8:</strong> Deep learning basics with PyTorch or
              TensorFlow.
            </li>
            <li>
              <strong>Month 9:</strong> Choose specialization: NLP, computer
              vision, time series, or recommender systems.
            </li>
          </ul>

          <h3>Phase 4: Job Ready (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build 3-4 portfolio projects.
              End-to-end, well-documented.
            </li>
            <li>
              <strong>Month 11:</strong> Kaggle competitions. Real-world problem
              solving. MLOps basics.
            </li>
            <li>
              <strong>Month 12:</strong> Interview prep—ML concepts, case
              studies, coding. Apply for jobs.
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
                  <td className="p-3">Data Analyst</td>
                  <td className="p-3">₹4-8 LPA</td>
                  <td className="p-3">₹10-18 LPA</td>
                  <td className="p-3">₹20-35 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Data Scientist</td>
                  <td className="p-3">₹6-14 LPA</td>
                  <td className="p-3">₹16-32 LPA</td>
                  <td className="p-3">₹35-60 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Data Engineer</td>
                  <td className="p-3">₹7-15 LPA</td>
                  <td className="p-3">₹18-35 LPA</td>
                  <td className="p-3">₹40-70 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">ML Engineer</td>
                  <td className="p-3">₹8-18 LPA</td>
                  <td className="p-3">₹22-42 LPA</td>
                  <td className="p-3">₹48-85 LPA</td>
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
                  <td className="p-3">Data Analyst</td>
                  <td className="p-3">$60K-85K</td>
                  <td className="p-3">$90K-120K</td>
                  <td className="p-3">$130K-160K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Data Scientist</td>
                  <td className="p-3">$90K-120K</td>
                  <td className="p-3">$130K-170K</td>
                  <td className="p-3">$180K-250K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">ML Engineer</td>
                  <td className="p-3">$100K-140K</td>
                  <td className="p-3">$150K-200K</td>
                  <td className="p-3">$210K-300K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            9. Top Companies Hiring
          </h2>

          <h3>FAANG & Big Tech</h3>
          <ul>
            <li>
              <strong>Google:</strong> Search, YouTube, Cloud AI research
            </li>
            <li>
              <strong>Meta:</strong> Recommendations, ads, research
            </li>
            <li>
              <strong>Amazon:</strong> Recommendations, logistics, AWS
            </li>
            <li>
              <strong>Microsoft:</strong> Azure ML, Office analytics
            </li>
            <li>
              <strong>Apple:</strong> Siri, personalization
            </li>
          </ul>

          <h3>Indian Companies</h3>
          <ul>
            <li>
              <strong>Flipkart:</strong> E-commerce analytics
            </li>
            <li>
              <strong>Swiggy/Zomato:</strong> Food delivery optimization
            </li>
            <li>
              <strong>Razorpay:</strong> Fintech analytics, fraud detection
            </li>
            <li>
              <strong>Jio:</strong> Telecom analytics
            </li>
            <li>
              <strong>Ola/Uber India:</strong> Ride-sharing optimization
            </li>
          </ul>

          <h3>Consulting & Analytics Firms</h3>
          <ul>
            <li>
              <strong>McKinsey, BCG, Bain:</strong> Strategy analytics
            </li>
            <li>
              <strong>Mu Sigma, Fractal:</strong> Analytics services
            </li>
            <li>
              <strong>Accenture, Deloitte:</strong> Data consulting
            </li>
          </ul>
        </section>

        {/* Section 10: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            10. Portfolio Projects to Build
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Exploratory Data Analysis</p>
              <p className="mt-1 text-muted-foreground">
                Analyze a dataset (Titanic, housing prices). Clean data,
                visualize patterns, tell a story.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. Regression Project</p>
              <p className="mt-1 text-muted-foreground">
                Predict house prices or sales. Feature engineering, model
                comparison, evaluation.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                3. Classification with Imbalanced Data
              </p>
              <p className="mt-1 text-muted-foreground">
                Credit card fraud or churn prediction. Handle class imbalance,
                optimize for business metrics.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. NLP Sentiment Analysis</p>
              <p className="mt-1 text-muted-foreground">
                Analyze product reviews or tweets. Text preprocessing,
                classification, word embeddings.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. End-to-End ML Pipeline</p>
              <p className="mt-1 text-muted-foreground">
                Build a complete project with data pipeline, model training, and
                API deployment using FastAPI or Streamlit.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Kaggle Competition</p>
              <p className="mt-1 text-muted-foreground">
                Participate in a competition. Learn from top solutions.
                Demonstrate competitive skills.
              </p>
            </div>
          </div>
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
              <strong>Kaggle Learn:</strong> Free micro-courses
            </li>
            <li>
              <strong>freeCodeCamp:</strong> Data science curriculum
            </li>
            <li>
              <strong>Google ML Crash Course:</strong> ML fundamentals
            </li>
            <li>
              <strong>Fast.ai:</strong> Deep learning for coders
            </li>
          </ul>

          <h3>Paid Courses</h3>
          <ul>
            <li>
              <strong>Coursera - Andrew Ng:</strong> ML specialization
              (Stanford)
            </li>
            <li>
              <strong>DataCamp:</strong> Interactive learning
            </li>
            <li>
              <strong>Udemy - Jose Portilla:</strong> Python for data science
            </li>
          </ul>

          <h3>Books</h3>
          <ul>
            <li>
              <strong>Python for Data Analysis (Wes McKinney):</strong> Pandas
              creator's book
            </li>
            <li>
              <strong>Hands-On Machine Learning (Aurélien Géron):</strong>{' '}
              Practical ML
            </li>
            <li>
              <strong>The Hundred-Page Machine Learning Book:</strong> Quick
              reference
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
              <p className="font-bold">Do I need a PhD for data science?</p>
              <p className="mt-2 text-muted-foreground">
                No. While helpful for research roles, most industry positions
                value skills and projects over advanced degrees. A bachelor's
                with strong portfolio works.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Data Analyst or Data Scientist—which first?
              </p>
              <p className="mt-2 text-muted-foreground">
                Analyst is a more accessible entry point. Build SQL and
                visualization skills, then add ML for scientist roles.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is data science saturated?</p>
              <p className="mt-2 text-muted-foreground">
                Entry-level is competitive, but demand for experienced
                professionals remains strong. Stand out with projects and
                specialized skills.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Python or R for data science?</p>
              <p className="mt-2 text-muted-foreground">
                Python. It has more jobs, better ML ecosystem, and works for
                deployment. R is fine for statistics-heavy academic roles.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Turn Data into Insights
          </h2>

          <p>
            Data science offers an incredible opportunity to solve meaningful
            problems and build a well-paid career. The field continues to evolve
            with AI advancements, making it more exciting than ever.
          </p>

          <p>
            Start with Python and SQL, build your statistical foundation,
            practice on real datasets, and create a portfolio that demonstrates
            your ability to extract insights from data. The data-driven future
            needs scientists like you.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more data career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/python-full-stack-developer-guide"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Python Developer Guide →
              </Link>
              <Link
                href="/tools/career-roadmap"
                className="rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
              >
                Career Roadmap Tool →
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
                Helping students build data science careers
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
