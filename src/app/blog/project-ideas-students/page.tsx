import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Github,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Star,
  ExternalLink,
  Code,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Project Ideas for Students: Portfolio Building Guide',
  description:
    'Build impressive projects for your portfolio. Get project ideas for web dev, data science, mobile apps, and more with implementation tips.',
  keywords: [
    'project ideas students',
    'portfolio projects',
    'web development projects',
    'data science projects',
    'resume projects',
    'beginner coding projects',
    'github portfolio',
    'full stack projects',
    'machine learning projects',
    'student developer projects',
  ],
  openGraph: {
    title: 'Top Project Ideas for Students',
    description: 'Build projects that get you hired.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-fuchsia-600">
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Portfolio Building
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Top Project Ideas for Students: Portfolio Building Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Building projects is the best way to learn and showcase your skills.
            Here are ideas across different tech stacks.
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
                Quality over quantity—3 polished projects beat 10 incomplete
                ones
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Solve real problems—projects with utility impress more
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Document well—README and live demo are essential</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Deploy your projects—show they work in production</span>
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 Project Categories</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#web"
                className="text-primary hover:underline"
              >
                1. Web Development
              </a>
            </li>
            <li>
              <a
                href="#mobile"
                className="text-primary hover:underline"
              >
                2. Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="#data"
                className="text-primary hover:underline"
              >
                3. Data Science & ML
              </a>
            </li>
            <li>
              <a
                href="#backend"
                className="text-primary hover:underline"
              >
                4. Backend & APIs
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                5. Project Tips
              </a>
            </li>
            <li>
              <a
                href="#showcase"
                className="text-primary hover:underline"
              >
                6. How to Showcase
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction */}
        <section>
          <p>
            Projects are the bridge between learning concepts and landing
            opportunities. Employers want to see what you can <em>build</em>,
            not just what you've studied. This guide covers project ideas across
            different skill levels and domains, with implementation tips to make
            your portfolio stand out.
          </p>
          <p>
            Remember: The goal isn't to build 50 projects. It's to build 3-5
            <strong> exceptional</strong> projects that demonstrate your skills,
            problem-solving ability, and attention to detail.
          </p>
        </section>

        {/* Section 1: Web */}
        <section
          id="web"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <ExternalLink className="h-6 w-6 text-primary" />
            1. Web Development Projects
          </h2>
          <p>
            Web development is the most accessible entry point. These projects
            demonstrate both frontend and backend skills that companies actively
            hire for.
          </p>

          <h3>Beginner Level Projects</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">💼 Personal Portfolio Website</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Your digital business card showcasing your work, skills, and
                story.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> HTML/CSS/JS, React/Next.js,
                Tailwind CSS
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Responsive design, project
                showcase, contact form, blog section
              </p>
              <p className="text-xs">
                <strong>Why It Matters:</strong> Every developer needs one. It's
                your first impression.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                🌤️ Weather App with API Integration
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Displays real-time weather data using a public API.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React, OpenWeatherMap API, CSS
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Search by city, current weather,
                5-day forecast, geolocation
              </p>
              <p className="text-xs">
                <strong>Learning Outcomes:</strong> API integration, async
                JavaScript, error handling
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">✅ Todo List with Persistence</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Task manager with local storage to save data.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Vanilla JS or React,
                LocalStorage/IndexedDB
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Add/edit/delete tasks, mark
                complete, filter by status, drag-and-drop
              </p>
              <p className="text-xs">
                <strong>Pro Tip:</strong> Add categories, due dates, and
                priority levels to stand out.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🎨 Landing Page Clone</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Recreate a professional landing page (Stripe, Linear, Vercel).
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> HTML/CSS, Tailwind CSS, GSAP for
                animations
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Pixel-perfect design, responsive
                layout, smooth animations
              </p>
              <p className="text-xs">
                <strong>Why It Matters:</strong> Shows attention to detail and
                design skills.
              </p>
            </div>
          </div>

          <h3>Intermediate Level Projects</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🛒 E-commerce Store</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Full-featured online store with shopping cart and checkout.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React/Next.js, Stripe,
                MongoDB/PostgreSQL
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Product catalog, cart,
                search/filter, payment integration, order history
              </p>
              <p className="text-xs">
                <strong>Bonus:</strong> Add admin dashboard, inventory
                management, email notifications
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">📝 Blog Platform with CMS</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Blogging platform where users can write and publish posts.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Next.js, Sanity/Contentful,
                Markdown support
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Rich text editor,
                categories/tags, comments, SEO optimization
              </p>
              <p className="text-xs">
                <strong>Learning Outcomes:</strong> CMS integration, SSG/SSR,
                SEO best practices
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">💬 Real-Time Chat Application</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Messaging app with real-time updates and user presence.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React, Socket.io/Firebase, Node.js
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Real-time messaging, typing
                indicators, seen receipts, file sharing
              </p>
              <p className="text-xs">
                <strong>Why It's Impressive:</strong> Demonstrates your
                understanding of WebSockets and real-time data.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                🔗 URL Shortener with Analytics
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Create short links like bit.ly with click tracking.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Node.js/Express, MongoDB, React
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Custom slugs, QR codes, click
                analytics, expiration dates
              </p>
              <p className="text-xs">
                <strong>Bonus:</strong> Add geographical data, device tracking,
                API for developers
              </p>
            </div>
          </div>

          <h3>Advanced Level Projects</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                📊 SaaS Dashboard with Authentication
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Multi-tenant dashboard with role-based access control.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Next.js, NextAuth.js/Clerk,
                PostgreSQL, Prisma
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> User signup/login, analytics
                charts, team management, billing integration
              </p>
              <p className="text-xs">
                <strong>Why It's Valuable:</strong> Shows you can build
                production-ready SaaS applications.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">📹 Video Conferencing App</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Zoom-like app with video/audio calls and screen sharing.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React, WebRTC, Socket.io, PeerJS
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Video/audio calls, screen
                sharing, chat, recording
              </p>
              <p className="text-xs">
                <strong>Challenge Level:</strong> High - requires understanding
                of P2P connections and media streams
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                🤖 AI-Powered Content Generator
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Tool that generates blog posts, social media content, or code
                snippets using AI.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Next.js, OpenAI API, Vercel AI SDK
              </p>
              <p className="mb-2 text-xs">
                <strong>Key Features:</strong> Content templates, customization
                options, export formats, usage tracking
              </p>
              <p className="text-xs">
                <strong>Market Relevance:</strong> AI integration is highly
                sought after.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mobile */}
        <section
          id="mobile"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Mobile App Projects
          </h2>
          <p>
            Mobile development skills are highly valued. These projects work for
            React Native, Flutter, or native iOS/Android development.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">💰 Expense Tracker</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Personal finance app with budget tracking and spending insights.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React Native/Flutter, SQLite/Realm,
                Chart.js
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Add expenses, categorize spending,
                budget alerts, visual charts, recurring expenses
              </p>
              <p className="text-xs">
                <strong>Bonus:</strong> Add receipt scanning with OCR, bank
                account sync, export to CSV
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">✅ Habit Tracker</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Build consistency with daily habit tracking and streaks.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React Native, AsyncStorage, Push
                Notifications
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Create habits, daily check-ins,
                streak tracking, reminders, progress charts
              </p>
              <p className="text-xs">
                <strong>Psychology Angle:</strong> Implement gamification
                (badges, levels) to increase engagement
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🍳 Recipe App</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Discover, save, and cook recipes with step-by-step instructions.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Flutter, Recipe API (Spoonacular),
                Firebase
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Recipe search, favorites, meal
                planning, shopping lists, nutritional info
              </p>
              <p className="text-xs">
                <strong>Advanced:</strong> Add cooking timer, ingredient
                substitutions, dietary filters
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">💪 Fitness Tracker</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Log workouts, track progress, and achieve fitness goals.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> React Native, HealthKit/Google Fit
                integration
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Exercise library, workout logging,
                progress photos, weight tracking, PR records
              </p>
              <p className="text-xs">
                <strong>Unique Feature:</strong> Add AI form checker using
                device camera and pose detection
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">📰 News Reader</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Curated news feed with offline reading support.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Flutter, News API, SQLite for
                offline
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Category filtering, save for later,
                offline reading, text-to-speech
              </p>
              <p className="text-xs">
                <strong>AI Integration:</strong> Add article summarization using
                GPT API
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Data */}
        <section
          id="data"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            3. Data Science & ML Projects
          </h2>
          <p>
            Data science projects demonstrate analytical thinking and technical
            skills with Python, statistics, and machine learning.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                📊 Exploratory Data Analysis (EDA)
              </h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Deep analysis of a real-world dataset from Kaggle.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Python, Pandas, Matplotlib/Seaborn,
                Jupyter
              </p>
              <p className="mb-2 text-xs">
                <strong>Good Datasets:</strong> Titanic, House Prices, Customer
                Churn, Netflix shows
              </p>
              <p className="mb-2 text-xs">
                <strong>What to Include:</strong> Data cleaning, visualization,
                correlation analysis, insights
              </p>
              <p className="text-xs">
                <strong>Presentation:</strong> Publish as Kaggle notebook or
                blog post with visualizations
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🎬 Movie Recommendation System</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Build a recommender that suggests movies based on user
                preferences.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Python, Scikit-learn, Surprise
                library, Flask API
              </p>
              <p className="mb-2 text-xs">
                <strong>Techniques:</strong> Collaborative filtering,
                content-based filtering, hybrid approach
              </p>
              <p className="text-xs">
                <strong>Dataset:</strong> MovieLens dataset (100k ratings
                available free)
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">😊 Sentiment Analysis</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Analyze sentiment of tweets, reviews, or comments.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Python, NLTK/TextBlob, Twitter
                API/Reddit API
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Real-time analysis, sentiment trends
                over time, word clouds
              </p>
              <p className="text-xs">
                <strong>Advanced:</strong> Train custom model with BERT or use
                GPT for nuanced sentiment
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">📈 Stock Price Prediction</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Time series forecasting with machine learning.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Python, TensorFlow/PyTorch, LSTM
                networks, yfinance
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Historical data visualization,
                prediction models, accuracy metrics
              </p>
              <p className="text-xs">
                <strong>Important Note:</strong> Include disclaimer about
                limitations—this is educational!
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🏃 Customer Churn Prediction</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Predict which customers are likely to leave a service.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Python, Scikit-learn, XGBoost,
                Pandas
              </p>
              <p className="mb-2 text-xs">
                <strong>ML Techniques:</strong> Logistic regression, random
                forest, feature importance
              </p>
              <p className="text-xs">
                <strong>Business Value:</strong> Show how your model could save
                companies money
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🖼️ Image Classification Model</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Train a CNN to classify images into categories.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Python, TensorFlow/Keras, OpenCV
              </p>
              <p className="mb-2 text-xs">
                <strong>Datasets:</strong> CIFAR-10, Fashion MNIST, or custom
                dataset
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Model training, accuracy
                visualization, real-time predictions
              </p>
              <p className="text-xs">
                <strong>Deploy:</strong> Use Streamlit or Gradio for interactive
                web demo
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Backend */}
        <section
          id="backend"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Github className="h-6 w-6 text-primary" />
            4. Backend & API Projects
          </h2>
          <p>
            Backend projects showcase your understanding of server-side logic,
            databases, and API design.
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">📝 RESTful Blog API</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Complete CRUD API for a blogging platform.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Node.js/Express,
                PostgreSQL/MongoDB, JWT
              </p>
              <p className="mb-2 text-xs">
                <strong>Endpoints:</strong> User auth, post CRUD, comments,
                likes, search
              </p>
              <p className="text-xs">
                <strong>Documentation:</strong> Use Swagger/Postman for API
                documentation
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🔐 Authentication System</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Secure user authentication with modern best practices.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Node.js, bcrypt, JWT, OAuth
                providers
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Signup, login, password reset, email
                verification, refresh tokens
              </p>
              <p className="text-xs">
                <strong>Security:</strong> Rate limiting, HTTPS, secure cookies,
                CSRF protection
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">📤 File Upload Service</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Service for uploading, storing, and serving files.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Node.js, AWS S3/Cloudinary, Multer
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Upload multiple files, image
                optimization, public/private URLs
              </p>
              <p className="text-xs">
                <strong>Advanced:</strong> Add virus scanning, file type
                validation, CDN integration
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">💳 Payment Integration</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Implement payment processing with Stripe or Razorpay.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Node.js, Stripe/Razorpay SDK,
                Webhook handlers
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> One-time payments, subscriptions,
                refunds, invoice generation
              </p>
              <p className="text-xs">
                <strong>Important:</strong> Use test mode keys, never commit
                secrets to Git
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🔄 GraphQL API</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Modern API using GraphQL instead of REST.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Apollo Server, GraphQL, TypeScript
              </p>
              <p className="mb-2 text-xs">
                <strong>Features:</strong> Queries, mutations, subscriptions
                (real-time), DataLoader
              </p>
              <p className="text-xs">
                <strong>Why It Matters:</strong> GraphQL is increasingly popular
                at tech companies
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">🏗️ Microservices Architecture</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Demonstrate microservices with multiple small services.
              </p>
              <p className="mb-2 text-xs">
                <strong>Tech Stack:</strong> Docker, Kubernetes/Docker Compose,
                Node.js/Go
              </p>
              <p className="mb-2 text-xs">
                <strong>Services:</strong> User service, product service, order
                service, API gateway
              </p>
              <p className="text-xs">
                <strong>Advanced Concepts:</strong> Service discovery, load
                balancing, message queues (RabbitMQ)
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Star className="h-6 w-6 text-primary" />
            5. Project Tips
          </h2>

          <ul>
            <li>
              <strong>Solve your own problems:</strong> Projects that help YOU
              are more authentic
            </li>
            <li>
              <strong>Add unique features:</strong> Add something the tutorial
              didn't cover
            </li>
            <li>
              <strong>Write tests:</strong> Even basic tests show
              professionalism
            </li>
            <li>
              <strong>Use version control:</strong> Proper Git commits matter
            </li>
            <li>
              <strong>Deploy everything:</strong> Vercel, Netlify, Railway are
              free
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Avoid tutorial projects that thousands
              of others have. Add your own twist or solve a unique problem.
            </div>
          </div>
        </section>

        {/* New comprehensive sections */}
        <section className="scroll-mt-20">
          <h2>Project Implementation Framework</h2>
          <p>
            Follow this step-by-step framework to ensure your projects are
            complete and professional.
          </p>

          <h3>Phase 1: Planning (Days 1-2)</h3>
          <ul>
            <li>
              <strong>Define the problem:</strong> What pain point does this
              solve?
            </li>
            <li>
              <strong>User stories:</strong> "As a [user], I want to [action] so
              that [benefit]"
            </li>
            <li>
              <strong>Feature list:</strong> Core features vs. nice-to-haves
            </li>
            <li>
              <strong>Tech stack decision:</strong> Choose based on learning
              goals and project needs
            </li>
            <li>
              <strong>Design mockups:</strong> Sketch or use Figma for basic
              wireframes
            </li>
          </ul>

          <h3>Phase 2: Setup (Day 3)</h3>
          <ul>
            <li>Initialize Git repository with meaningful .gitignore</li>
            <li>Set up project structure and folder organization</li>
            <li>Configure ESLint, Prettier for code quality</li>
            <li>Create README.md with project description</li>
            <li>Set up development environment and dependencies</li>
          </ul>

          <h3>Phase 3: Core Development (Days 4-10)</h3>
          <ul>
            <li>Build MVP with essential features first</li>
            <li>Write clean, commented code with consistent naming</li>
            <li>Make regular Git commits with descriptive messages</li>
            <li>Test features as you build them</li>
            <li>Handle errors and edge cases</li>
          </ul>

          <h3>Phase 4: Polish (Days 11-12)</h3>
          <ul>
            <li>Improve UI/UX based on user feedback</li>
            <li>Add loading states and error messages</li>
            <li>Optimize performance (lazy loading, caching)</li>
            <li>Make responsive for mobile devices</li>
            <li>
              Add accessibility features (ARIA labels, keyboard navigation)
            </li>
          </ul>

          <h3>Phase 5: Documentation & Deployment (Days 13-14)</h3>
          <ul>
            <li>Write comprehensive README</li>
            <li>Add code comments for complex logic</li>
            <li>Deploy to production (Vercel, Netlify, etc.)</li>
            <li>Test deployed version thoroughly</li>
            <li>Create demo video or screenshots</li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Perfect README Template</h2>
          <p>
            A great README can make the difference between your project getting
            noticed or ignored. Here's a proven template:
          </p>

          <div className="my-6 rounded-lg bg-muted p-6">
            <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
              {`# Project Name

![Demo Screenshot](link-to-screenshot.png)

## 🎯 Overview

Brief description of what your project does and why it exists.
Keep it to 2-3 sentences.

**Live Demo:** [yourdemo.com](https://yourdemo.com)

## ✨ Features

- 🔥 Feature 1 with benefit
- ⚡ Feature 2 with benefit  
- 🎨 Feature 3 with benefit
- 📱 Mobile responsive design

## 🛠️ Tech Stack

**Frontend:** React, TypeScript, Tailwind CSS
**Backend:** Node.js, Express, PostgreSQL
**Deployment:** Vercel, Railway
**Tools:** Prisma, NextAuth.js

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/project.git

# Navigate to project directory
cd project

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your API keys to .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## 📸 Screenshots

### Home Page
![Home](screenshots/home.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

## 🎓 What I Learned

- How to implement authentication with JWTs
- Working with real-time data using WebSockets
- PostgreSQL database design and optimization
- Deploying full-stack applications

## 🔮 Future Improvements

- [ ] Add notification system
- [ ] Implement dark mode
- [ ] Multi-language support
- [ ] Mobile app version

## 📝 License

MIT License - feel free to use this project for learning

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

## 🙏 Acknowledgments

- Thanks to [resource] for [help with specific feature]
- Inspired by [similar project]`}
            </pre>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Common Project Mistakes to Avoid</h2>

          <div className="my-6 space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Tutorial Hell
              </h4>
              <p className="mb-2 text-sm text-red-800 dark:text-red-200">
                Following tutorials step-by-step without understanding or adding
                your own features.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                <strong>Fix:</strong> Complete the tutorial, then add 3-5 unique
                features on your own.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Unfinished Projects
              </h4>
              <p className="mb-2 text-sm text-red-800 dark:text-red-200">
                GitHub profile full of abandoned, half-built projects.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                <strong>Fix:</strong> Pick 3-5 projects and finish them
                completely rather than starting 20.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ No Live Demo
              </h4>
              <p className="mb-2 text-sm text-red-800 dark:text-red-200">
                Projects only exist on localhost with "just run npm install"
                instructions.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                <strong>Fix:</strong> Deploy everything. Vercel and Netlify are
                free and take 5 minutes.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Poor Code Quality
              </h4>
              <p className="mb-2 text-sm text-red-800 dark:text-red-200">
                Messy code, no comments, inconsistent formatting, security
                issues.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                <strong>Fix:</strong> Use linters, write comments, follow
                conventions, never commit API keys.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Weak README
              </h4>
              <p className="mb-2 text-sm text-red-800 dark:text-red-200">
                One-line description or no README at all.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                <strong>Fix:</strong> Spend 2 hours on a comprehensive README.
                It's worth it.
              </p>
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-100">
                ❌ Copying Without Understanding
              </h4>
              <p className="mb-2 text-sm text-red-800 dark:text-red-200">
                Copy-pasting code you don't understand. Can't explain it in
                interviews.
              </p>
              <p className="text-xs text-red-700 dark:text-red-300">
                <strong>Fix:</strong> Only commit code you can explain. Add
                comments explaining complex sections.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-20">
          <h2>Portfolio Strategy: Quality Over Quantity</h2>
          <p>
            Recruiters spend 30 seconds on your GitHub. Make those 30 seconds
            count.
          </p>

          <h3>The "3 Project" Portfolio Strategy</h3>
          <p>Choose 3 projects that demonstrate different skills:</p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Project 1: Frontend Showcase</h4>
              <p className="mb-2 text-xs text-muted-foreground">
                Beautiful, responsive UI that demonstrates design skills
              </p>
              <p className="text-xs">
                <strong>Example:</strong> Landing page clone, Portfolio site,
                Design-heavy web app
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">
                Project 2: Full-Stack Application
              </h4>
              <p className="mb-2 text-xs text-muted-foreground">
                Complete CRUD app with database and authentication
              </p>
              <p className="text-xs">
                <strong>Example:</strong> E-commerce store, Blog platform, Task
                manager
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold">Project 3: Technical Deep Dive</h4>
              <p className="mb-2 text-xs text-muted-foreground">
                Complex project showing advanced technical skills
              </p>
              <p className="text-xs">
                <strong>Example:</strong> Real-time chat, ML model, API with
                microservices
              </p>
            </div>
          </div>

          <h3>Bonus Project Ideas for Stand Out</h3>
          <ul>
            <li>
              <strong>Open Source Contribution:</strong> Shows collaboration
              skills
            </li>
            <li>
              <strong>Popular Package/Library:</strong> If your npm package has
              downloads, huge plus
            </li>
            <li>
              <strong>Side Project with Users:</strong> Real users using your
              product is the ultimate validation
            </li>
            <li>
              <strong>Technical Blog:</strong> Write about what you learned
              building projects
            </li>
          </ul>
        </section>

        {/* Section 6: Showcase */}
        <section
          id="showcase"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. How to Showcase Projects
          </h2>
          <p>
            Building the project is half the battle. Showcasing it effectively
            is the other half.
          </p>

          <h3>GitHub Best Practices</h3>
          <ul>
            <li>
              <strong>Pin your best projects:</strong> GitHub lets you pin 6
              repositories
            </li>
            <li>
              <strong>Comprehensive README:</strong> Problem, solution,
              features, tech stack, screenshots
            </li>
            <li>
              <strong>Professional commits:</strong> Use conventional commits
              (feat:, fix:, docs:)
            </li>
            <li>
              <strong>Add topics/tags:</strong> Helps with GitHub
              discoverability
            </li>
            <li>
              <strong>Include LICENSE:</strong> Shows you understand software
              licensing
            </li>
          </ul>

          <h3>Live Demo Hosting</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Vercel (Frontend)</h4>
              <p className="text-xs text-muted-foreground">
                Perfect for Next.js, React, Vue. Auto-deploys from GitHub. Free
                tier is generous.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Netlify (Static Sites)</h4>
              <p className="text-xs text-muted-foreground">
                Great for static sites and SPAs. Easy custom domains, form
                handling.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Railway (Backend)</h4>
              <p className="text-xs text-muted-foreground">
                Deploy Node.js backends, databases, full-stack apps. $5/month
                free credit.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-1 font-semibold">Heroku / Render</h4>
              <p className="text-xs text-muted-foreground">
                Full-stack apps with database. Free tiers available with some
                limitations.
              </p>
            </div>
          </div>

          <h3>Portfolio Website Structure</h3>
          <p>Your portfolio should have:</p>
          <ul>
            <li>
              <strong>Hero Section:</strong> Name, title, brief intro, CTA
            </li>
            <li>
              <strong>Projects Section:</strong> 3-6 best projects with images,
              descriptions, tech stacks, links
            </li>
            <li>
              <strong>Skills Section:</strong> Tech stack organized by category
            </li>
            <li>
              <strong>About Section:</strong> Your story, interests, background
            </li>
            <li>
              <strong>Contact Section:</strong> Email, LinkedIn, GitHub,
              optional contact form
            </li>
          </ul>

          <h3>Leveraging LinkedIn</h3>
          <ul>
            <li>Post project announcements with screenshots/videos</li>
            <li>Share what you learned while building</li>
            <li>Tag relevant technologies (#React, #Python)</li>
            <li>Engage with tech communities and share insights</li>
            <li>Add projects to your LinkedIn "Featured" section</li>
          </ul>
        </section>

        <section className="scroll-mt-20">
          <h2>Frequently Asked Questions</h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How many projects should I have in my portfolio?
              </h3>
              <p className="text-muted-foreground">
                Quality over quantity. 3-5 well-executed, complete projects are
                better than 20 half-finished ones. Each project should
                demonstrate different skills.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I include tutorial projects?
              </h3>
              <p className="text-muted-foreground">
                Yes, but ONLY if you significantly extend them with unique
                features. Never just copy-paste a tutorial. Add 3-5 features the
                tutorial didn't cover, improve the UI, or solve a different
                problem.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I build projects related to my target job?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! If you're applying for frontend roles, showcase
                beautiful UIs. For backend roles, demonstrate API design and
                database optimization. For data science, show ML models with
                real datasets.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What if I don't have original project ideas?
              </h3>
              <p className="text-muted-foreground">
                Start with classic projects (todo list, weather app) but add
                unique twists. Or solve YOUR own problems—automation scripts,
                tools you wish existed, things that annoy you daily. Personal
                pain points make the best projects.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How long should a project take to build?
              </h3>
              <p className="text-muted-foreground">
                Beginner projects: 1-2 weeks. Intermediate: 2-4 weeks. Advanced:
                4-8 weeks. Don't rush—quality matters more than speed. It's
                better to spend 4 weeks on one amazing project than 1 week on
                four mediocre ones.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I work on group projects or solo projects?
              </h3>
              <p className="text-muted-foreground">
                Both! Solo projects show you can work independently. Group
                projects (hackathons, open source) demonstrate collaboration and
                Git workflow. Aim for a mix: 3 solo projects + 1-2 collaborative
                ones.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is it okay to rebuild existing apps (Twitter clone, etc.)?
              </h3>
              <p className="text-muted-foreground">
                Yes, rebuilding popular apps is a great learning exercise.
                However, don't stop at the clone—add features the original
                doesn't have. A "Twitter clone with AI content moderation" is
                way more interesting than just "Twitter clone."
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                What technologies should I use?
              </h3>
              <p className="text-muted-foreground">
                Use modern, in-demand tech stacks: React/Next.js for frontend,
                Node.js/Python for backend, PostgreSQL for databases. Avoid
                outdated tech unless targeting specific roles. Check job
                postings to see what's trending.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How do I make my projects stand out?
              </h3>
              <p className="text-muted-foreground">
                1) Solve real problems 2) Beautiful, responsive UI 3)
                Comprehensive README with demo 4) Deployed and accessible 5) Add
                testing 6) Clean code 7) Unique features. Do ALL of these, not
                just one or two.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Building Today</h2>
          <p>
            The best portfolio project is the one you actually complete. Pick
            one idea, start building, and iterate. Don't wait for the perfect
            idea.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your next project could be the one that lands you your dream job.
            Start now. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/git-github-beginners-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Git & GitHub Guide
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Website Guide
            </Link>
            <Link
              href="/blog/open-source-contribution-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Open Source Contributions
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
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
                Curated from hiring manager feedback and successful portfolio
                examples.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
