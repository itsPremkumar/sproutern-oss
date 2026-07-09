import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Cloud,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Server,
  DollarSign,
  Award,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Computing for Beginners: Complete Guide',
  description:
    'Start your cloud computing journey. Learn AWS, Azure, GCP basics, career paths, and how to land cloud internships.',
  keywords: [
    'cloud computing',
    'aws beginner',
    'azure certification',
    'cloud internship',
    'cloud career',
  ],
  openGraph: {
    title: 'Cloud Computing for Beginners: Complete Guide',
    description: 'Launch your cloud career.',
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
          <div className="mb-4 flex items-center gap-2 text-blue-600">
            <Cloud className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tech Deep Dive
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cloud Computing for Beginners: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Cloud is the backbone of modern technology. Here's everything you
            need to start your cloud journey.
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

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#what"
                className="text-primary hover:underline"
              >
                1. What is Cloud Computing
              </a>
            </li>
            <li>
              <a
                href="#providers"
                className="text-primary hover:underline"
              >
                2. Major Cloud Providers
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="text-primary hover:underline"
              >
                3. Career Paths
              </a>
            </li>
            <li>
              <a
                href="#learn"
                className="text-primary hover:underline"
              >
                4. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-primary hover:underline"
              >
                5. Top Certifications
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                6. FAQs
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
                Cloud skills are in massive demand—1.5M cloud jobs unfilled
                globally
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                AWS leads the market, but Azure and GCP are growing fast
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Start with AWS Cloud Practitioner—it's beginner-friendly
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Free tiers from all providers let you practice for free
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            1. What is Cloud Computing
          </h2>

          <p>
            Cloud computing = using someone else's computers (servers) over the
            internet instead of owning your own.
          </p>

          <h3>Key Service Models</h3>
          <ul>
            <li>
              <strong>IaaS:</strong> Infrastructure as a Service (Virtual
              machines, storage)
            </li>
            <li>
              <strong>PaaS:</strong> Platform as a Service (Development
              platforms)
            </li>
            <li>
              <strong>SaaS:</strong> Software as a Service (Gmail, Slack,
              Notion)
            </li>
          </ul>

          <h3>Why Cloud Matters</h3>
          <ul>
            <li>Scale up/down instantly</li>
            <li>Pay only for what you use</li>
            <li>No hardware maintenance</li>
            <li>Global reach in minutes</li>
          </ul>
        </section>

        {/* Section 2: Providers */}
        <section
          id="providers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Cloud className="h-6 w-6 text-primary" />
            2. Major Cloud Providers
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">AWS</p>
              <p className="text-muted-foreground">
                Market leader (~32%), most job openings
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-600">Azure</p>
              <p className="text-muted-foreground">
                Microsoft ecosystem, enterprise favorite
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">GCP</p>
              <p className="text-muted-foreground">
                Google's cloud, strong in AI/ML
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Start with AWS—it has the most resources
              and job opportunities for beginners.
            </div>
          </div>
        </section>

        {/* Section 3: Careers */}
        <section
          id="careers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            3. Career Paths
          </h2>

          <ul>
            <li>
              <strong>Cloud Engineer:</strong> Build and maintain cloud
              infrastructure (₹6-30 LPA)
            </li>
            <li>
              <strong>DevOps Engineer:</strong> Automate deployments, CI/CD
              pipelines (₹8-35 LPA)
            </li>
            <li>
              <strong>Cloud Architect:</strong> Design large-scale cloud
              solutions (₹25-60 LPA)
            </li>
            <li>
              <strong>SRE:</strong> Site Reliability Engineer (₹15-50 LPA)
            </li>
            <li>
              <strong>Cloud Security:</strong> Secure cloud environments (₹12-40
              LPA)
            </li>
          </ul>
        </section>

        {/* Section 4: Learn */}
        <section
          id="learn"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Learning Roadmap
          </h2>

          <ol>
            <li>
              <strong>Month 1-2:</strong> Linux basics, networking fundamentals
            </li>
            <li>
              <strong>Month 3-4:</strong> AWS/Azure basics, hands-on projects
            </li>
            <li>
              <strong>Month 5-6:</strong> Get your first certification
            </li>
            <li>
              <strong>Month 7+:</strong> Specialize (DevOps, Security, Data)
            </li>
          </ol>

          <h3>Free Resources</h3>
          <ul>
            <li>AWS Skill Builder (free courses)</li>
            <li>Microsoft Learn (Azure)</li>
            <li>Google Cloud Skills Boost</li>
            <li>YouTube: TechWorld with Nana, freeCodeCamp</li>
          </ul>
        </section>

        {/* Section 5: Certifications */}
        <section
          id="certifications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            5. Top Certifications
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">AWS Cloud Practitioner</td>
                  <td className="p-3">Beginner</td>
                  <td className="p-3">$100</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AWS Solutions Architect</td>
                  <td className="p-3">Intermediate</td>
                  <td className="p-3">$150</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Azure Fundamentals (AZ-900)</td>
                  <td className="p-3">Beginner</td>
                  <td className="p-3">$99</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">GCP Cloud Digital Leader</td>
                  <td className="p-3">Beginner</td>
                  <td className="p-3">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">Do I need coding skills for cloud?</p>
              <p className="mt-2 text-muted-foreground">
                Not to start. Basic scripting (Python, Bash) helps later. Cloud
                operations roles focus more on infrastructure.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Which cloud should I learn first?</p>
              <p className="mt-2 text-muted-foreground">
                AWS is recommended for beginners due to most job openings and
                resources. The concepts transfer across providers.
              </p>
            </div>
          </div>
        </section>

        {/* Hands-On Projects */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Beginner-Friendly Cloud Projects
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">
                Project 1: Static Website Hosting
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Host a personal portfolio on AWS S3 + CloudFront. Learn storage,
                CDN, and DNS basics. Cost: Free tier.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">
                Project 2: EC2 Web Server
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Launch a Linux VM, install Nginx, deploy a simple app. Learn
                compute, security groups, SSH. Cost: Free tier.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">
                Project 3: Serverless API
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Build a REST API using Lambda + API Gateway + DynamoDB. Learn
                serverless architecture. Cost: Free tier.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">
                Project 4: CI/CD Pipeline
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Use CodePipeline/CodeBuild to auto-deploy from GitHub. Learn
                DevOps fundamentals. Cost: Free tier.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <p className="font-semibold text-blue-600">
                Project 5: Container Deployment
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Deploy a Docker container on ECS or Fargate. Learn
                containerization and orchestration. Cost: Minimal.
              </p>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Cloud Engineer
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">9:00 AM - Check Monitoring</p>
              <p className="text-sm text-muted-foreground">
                Review CloudWatch dashboards, check overnight alerts, ensure all
                services are healthy.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">10:00 AM - Standup Meeting</p>
              <p className="text-sm text-muted-foreground">
                Team sync on infrastructure changes, deployments planned, and
                any issues from previous day.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">11:00 AM - Infrastructure Work</p>
              <p className="text-sm text-muted-foreground">
                Writing Terraform code to provision new EKS cluster. Testing in
                staging environment first.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">2:00 PM - Security Review</p>
              <p className="text-sm text-muted-foreground">
                Reviewing IAM policies, checking security group configurations,
                and AWS Security Hub findings.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">4:00 PM - Cost Optimization</p>
              <p className="text-sm text-muted-foreground">
                Analyzing AWS Cost Explorer, identifying unused resources, and
                recommending right-sizing opportunities.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
              <p className="font-semibold">6:00 PM - Documentation</p>
              <p className="text-sm text-muted-foreground">
                Updating runbooks, architecture diagrams, and incident response
                procedures before leaving.
              </p>
            </div>
          </div>
        </section>

        {/* AWS vs Azure vs GCP */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Cloud className="h-6 w-6 text-primary" />
            AWS vs Azure vs GCP Comparison
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Factor</th>
                  <th className="border p-3 text-left font-semibold">AWS</th>
                  <th className="border p-3 text-left font-semibold">Azure</th>
                  <th className="border p-3 text-left font-semibold">GCP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Market Share</td>
                  <td className="border p-3">32% (Leader)</td>
                  <td className="border p-3">22%</td>
                  <td className="border p-3">10%</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Best For</td>
                  <td className="border p-3">Startups, variety</td>
                  <td className="border p-3">Enterprise, Microsoft</td>
                  <td className="border p-3">AI/ML, Data</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Free Tier</td>
                  <td className="border p-3">12 months + always free</td>
                  <td className="border p-3">12 months + always free</td>
                  <td className="border p-3">$300 credits + always free</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Learning Curve</td>
                  <td className="border p-3">Medium</td>
                  <td className="border p-3">Easy (for MS users)</td>
                  <td className="border p-3">Medium</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">
                    Job Demand (India)
                  </td>
                  <td className="border p-3">Highest</td>
                  <td className="border p-3">High</td>
                  <td className="border p-3">Growing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Common Cloud Learning Mistakes
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Only watching tutorials
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Cloud is hands-on. Without building projects, you won't retain
                  knowledge. Use the free tier to practice.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Skipping Linux fundamentals
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Most cloud servers run Linux. Without Linux basics, you'll
                  struggle with real cloud work.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Ignoring networking
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  VPCs, subnets, security groups—networking is foundational.
                  Don't skip it even if it seems boring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Forgetting about cost
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Always clean up resources after practice. Set billing alerts.
                  Unexpected bills happen.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
              <span className="font-bold text-red-600">❌</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Learning too many clouds at once
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Master one cloud first (preferably AWS). Concepts transfer.
                  Learning 3 clouds at once leads to confusion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Success Stories
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "From zero to cloud job in 6 months..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Started with AWS Cloud Practitioner while in final year. Built
                10 projects using free tier. Got hired at a cloud consulting
                firm at ₹8 LPA." — Rahul, Bangalore
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Certification opened doors..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Got AWS Solutions Architect Associate in 3 months of
                self-study. Recruiters started reaching out on LinkedIn. Now at
                a MNC earning ₹15 LPA." — Priya, Hyderabad
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950">
              <p className="font-semibold text-green-900 dark:text-green-100">
                "Career switch from support role..."
              </p>
              <p className="mt-2 text-sm text-green-800 dark:text-green-200">
                "Was in IT support for 2 years. Studied cloud on weekends for a
                year. Passed 3 AWS certifications. Now a DevOps Engineer earning
                2x my previous salary." — Karan, Pune
              </p>
            </div>
          </div>
        </section>

        {/* More FAQs */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            More Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How much does it cost to learn cloud?
              </h3>
              <p className="text-muted-foreground">
                Almost nothing. Free tier accounts give 12 months of free
                resources. Certification exams cost $100-150 each. Many free
                learning resources exist.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Is cloud computing a good career in India?
              </h3>
              <p className="text-muted-foreground">
                Excellent. Indian IT services companies (TCS, Infosys, Wipro)
                are hiring cloud talent aggressively. Starting salaries are
                ₹6-10 LPA, going up to ₹30+ LPA with experience.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Do certifications guarantee jobs?
              </h3>
              <p className="text-muted-foreground">
                No, but they open doors. Certifications + hands-on projects +
                interview skills = job offers. Certifications alone are not
                enough.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Should I learn Docker and Kubernetes for cloud?
              </h3>
              <p className="text-muted-foreground">
                Yes, eventually. Containers are foundational to modern cloud.
                Learn cloud basics first, then add Docker/K8s.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Can I get a cloud job without an IT degree?
              </h3>
              <p className="text-muted-foreground">
                Yes. Cloud is skills-based. Certifications and hands-on
                experience matter more than formal education for many roles.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                How long to prepare for AWS Solutions Architect?
              </h3>
              <p className="text-muted-foreground">
                2-3 months of focused study with hands-on practice. If you have
                IT background, maybe less. Complete beginners may need 4-5
                months.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Checklist */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Cloud Learning Checklist
          </h2>

          <div className="not-prose my-6 space-y-2">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Learn Linux basics (file system, commands, users)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand networking (IP, DNS, TCP/UDP, HTTP)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Create free tier account on AWS/Azure/GCP</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Complete a cloud fundamentals course</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Build at least 5 hands-on projects</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Get your first cloud certification</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Learn basic scripting (Python or Bash)</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <input
                type="checkbox"
                className="h-4 w-4"
              />
              <span>Understand IaC basics (Terraform or CloudFormation)</span>
            </div>
          </div>
        </section>

        {/* Salary Guide */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            Cloud Salary Guide (India)
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-3 text-left font-semibold">Role</th>
                  <th className="border p-3 text-left font-semibold">
                    Fresher
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    3-5 Years
                  </th>
                  <th className="border p-3 text-left font-semibold">
                    5+ Years
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Cloud Engineer</td>
                  <td className="border p-3">₹6-10 LPA</td>
                  <td className="border p-3">₹15-25 LPA</td>
                  <td className="border p-3">₹25-40 LPA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">DevOps Engineer</td>
                  <td className="border p-3">₹8-12 LPA</td>
                  <td className="border p-3">₹18-30 LPA</td>
                  <td className="border p-3">₹30-50 LPA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Cloud Architect</td>
                  <td className="border p-3">N/A</td>
                  <td className="border p-3">₹25-40 LPA</td>
                  <td className="border p-3">₹40-80 LPA</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">SRE</td>
                  <td className="border p-3">₹10-15 LPA</td>
                  <td className="border p-3">₹20-35 LPA</td>
                  <td className="border p-3">₹35-60 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your Cloud Journey</h2>
          <p>
            Cloud computing is the foundation of modern tech. Start learning
            today, get certified, and ride the wave of digital transformation.
          </p>
          <p>
            Remember: the best time to start was yesterday. The second best time
            is now. Create that free tier account and start building.
          </p>
          <p className="text-lg font-semibold text-primary">
            The cloud is where the future lives. Join it. ☁️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/software-development-internships-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              SDE Internships
            </Link>
            <Link
              href="/blog/professional-certifications-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Certifications Guide
            </Link>
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation
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
                Based on insights from cloud engineers at top companies.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
