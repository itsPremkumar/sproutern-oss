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
  Server,
  Cloud,
  GitBranch,
  Container,
  Activity,
  RefreshCw,
  Workflow,
  Shield,
  Gauge,
  Package,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DevOps Engineer: Complete Career Guide',
  description:
    'Start your DevOps career. Learn CI/CD, Docker, Kubernetes, cloud platforms, automation, job opportunities, and salary expectations in this comprehensive guide.',
  keywords: [
    'devops engineer',
    'devops career',
    'devops salary',
    'ci cd pipeline',
    'docker kubernetes',
    'devops roadmap',
    'devops certifications',
    'sre career',
    'devops tools',
    'infrastructure as code',
  ],
  openGraph: {
    title: 'DevOps Engineer: Complete Career Guide',
    description:
      'Master DevOps and build a successful career in modern software delivery.',
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
          <div className="mb-4 flex items-center gap-2 text-orange-600">
            <RefreshCw className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              DevOps & Infrastructure
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            DevOps Engineer: Complete Career Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            DevOps has transformed how software is built and delivered. This
            comprehensive guide covers everything you need to become a
            successful DevOps engineer or SRE.
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
              <span>24 min read</span>
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
                1. What is DevOps?
              </a>
            </li>
            <li>
              <a
                href="#culture"
                className="text-primary hover:underline"
              >
                2. DevOps Culture & Practices
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                3. Career Paths & Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                4. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                5. Tools & Technologies
              </a>
            </li>
            <li>
              <a
                href="#cicd"
                className="text-primary hover:underline"
              >
                6. CI/CD Deep Dive
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
                href="#certifications"
                className="text-primary hover:underline"
              >
                11. Certifications
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
        <div className="not-prose mb-10 rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-orange-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>DevOps is about culture & automation, not just tools</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>Docker, Kubernetes, and CI/CD are core DevOps skills</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                Cloud skills (AWS/Azure/GCP) are essential for modern DevOps
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                Salaries range from ₹8-60 LPA in India to $100K-250K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                Platform Engineering is the emerging evolution of DevOps
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is DevOps */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <RefreshCw className="h-6 w-6 text-primary" />
            1. What is DevOps?
          </h2>

          <p>
            <strong>DevOps</strong> is a set of practices, tools, and cultural
            philosophy that automates and integrates the processes between
            software development (Dev) and IT operations (Ops). The goal is to
            deliver software faster, more reliably, and with better quality.
          </p>

          <h3>The DevOps Lifecycle</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Plan</p>
              <p className="text-muted-foreground">
                Define requirements, track work. Tools: Jira, Azure Boards.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Code</p>
              <p className="text-muted-foreground">
                Write and review code. Tools: Git, GitHub, GitLab.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Build</p>
              <p className="text-muted-foreground">
                Compile and package. Tools: Maven, npm, Docker.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Test</p>
              <p className="text-muted-foreground">
                Automated testing. Tools: Jest, Selenium, pytest.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Deploy</p>
              <p className="text-muted-foreground">
                Release to production. Tools: Kubernetes, ArgoCD.
              </p>
            </div>
            <div className="border-l-4 border-red-500 py-2 pl-4">
              <p className="font-bold">Operate</p>
              <p className="text-muted-foreground">
                Run and manage. Tools: Terraform, Ansible.
              </p>
            </div>
            <div className="border-l-4 border-pink-500 py-2 pl-4">
              <p className="font-bold">Monitor</p>
              <p className="text-muted-foreground">
                Track metrics and logs. Tools: Prometheus, Grafana, Datadog.
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 py-2 pl-4">
              <p className="font-bold">Feedback</p>
              <p className="text-muted-foreground">
                Learn and improve. Close the loop back to Plan.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Culture */}
        <section
          id="culture"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            2. DevOps Culture & Practices
          </h2>

          <h3>Key DevOps Practices</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Continuous Integration (CI)
              </p>
              <p className="mt-1 text-muted-foreground">
                Merge code frequently. Run automated tests on every commit.
                Catch bugs early.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                Continuous Delivery (CD)
              </p>
              <p className="mt-1 text-muted-foreground">
                Code is always deployable. Automated pipelines to staging.
                One-click production releases.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Infrastructure as Code (IaC)
              </p>
              <p className="mt-1 text-muted-foreground">
                Define infrastructure in code (Terraform, CloudFormation).
                Version control, reproducible, auditable.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                Monitoring & Observability
              </p>
              <p className="mt-1 text-muted-foreground">
                Metrics, logs, traces. Understand system behavior. Detect issues
                before users notice.
              </p>
            </div>
          </div>

          <h3>DevOps vs Traditional IT</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Aspect</th>
                  <th className="p-3 text-left">Traditional</th>
                  <th className="p-3 text-left">DevOps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Deployment</td>
                  <td className="p-3">Monthly/quarterly</td>
                  <td className="p-3">Daily/hourly</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Teams</td>
                  <td className="p-3">Siloed Dev & Ops</td>
                  <td className="p-3">Collaborative</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Infrastructure</td>
                  <td className="p-3">Manual setup</td>
                  <td className="p-3">Automated IaC</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Failure</td>
                  <td className="p-3">Blame culture</td>
                  <td className="p-3">Blameless postmortems</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Roles */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Career Paths & Job Roles
          </h2>

          <h3>DevOps Career Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                DevOps Engineer (Most Common)
              </p>
              <p className="mt-1 text-muted-foreground">
                Build CI/CD pipelines, manage infrastructure, automate
                processes. The core DevOps role in most companies.
              </p>
              <p className="mt-2 text-xs">
                Skills: CI/CD, Docker, Kubernetes, cloud, scripting
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Site Reliability Engineer (SRE)
              </p>
              <p className="mt-1 text-muted-foreground">
                Focus on reliability and scalability. More software engineering
                focus. Popularized by Google.
              </p>
              <p className="mt-2 text-xs">
                Skills: Programming, monitoring, incident response, SLOs
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Platform Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Build internal developer platforms. Enable developers to
                self-serve infrastructure. Emerging hot role.
              </p>
              <p className="mt-2 text-xs">
                Skills: Kubernetes, GitOps, developer experience
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Cloud Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Design and manage cloud infrastructure. AWS/Azure/GCP focused.
                Often overlaps with DevOps.
              </p>
              <p className="mt-2 text-xs">
                Skills: Cloud platforms, networking, security, IaC
              </p>
            </div>
          </div>

          <h3>Career Progression</h3>
          <ul>
            <li>
              <strong>Junior DevOps Engineer:</strong> 0-2 years experience
            </li>
            <li>
              <strong>DevOps Engineer:</strong> 2-5 years
            </li>
            <li>
              <strong>Senior DevOps Engineer:</strong> 5-8 years
            </li>
            <li>
              <strong>Staff/Principal Engineer:</strong> 8+ years
            </li>
            <li>
              <strong>DevOps Manager/Director:</strong> Leadership track
            </li>
          </ul>
        </section>

        {/* Section 4: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            4. Essential Skills
          </h2>

          <h3>Technical Skills Matrix</h3>
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
                  <td className="p-3 font-medium">Linux</td>
                  <td className="p-3">
                    Command line, shell scripting, system admin
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Git</td>
                  <td className="p-3">Version control, branching strategies</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Docker</td>
                  <td className="p-3">
                    Containerization, Dockerfile, Docker Compose
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CI/CD</td>
                  <td className="p-3">Jenkins, GitHub Actions, GitLab CI</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloud (AWS/Azure/GCP)</td>
                  <td className="p-3">At least one cloud platform</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Kubernetes</td>
                  <td className="p-3">Container orchestration</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Terraform</td>
                  <td className="p-3">Infrastructure as Code</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Python/Bash</td>
                  <td className="p-3">Scripting and automation</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Networking Knowledge</h3>
          <ul>
            <li>
              <strong>TCP/IP:</strong> How networks communicate
            </li>
            <li>
              <strong>DNS:</strong> Domain name resolution
            </li>
            <li>
              <strong>Load Balancing:</strong> Distribute traffic
            </li>
            <li>
              <strong>VPNs & Firewalls:</strong> Network security
            </li>
          </ul>
        </section>

        {/* Section 5: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Wrench className="h-6 w-6 text-primary" />
            5. Tools & Technologies
          </h2>

          <h3>DevOps Toolchain</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Popular Tools</th>
                  <th className="p-3 text-left">Learn First</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Version Control</td>
                  <td className="p-3">Git, GitHub, GitLab, Bitbucket</td>
                  <td className="p-3 text-green-600">Git + GitHub</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CI/CD</td>
                  <td className="p-3">
                    GitHub Actions, Jenkins, GitLab CI, CircleCI
                  </td>
                  <td className="p-3 text-green-600">GitHub Actions</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Containers</td>
                  <td className="p-3">Docker, Podman, containerd</td>
                  <td className="p-3 text-green-600">Docker</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Orchestration</td>
                  <td className="p-3">Kubernetes, Docker Swarm, ECS</td>
                  <td className="p-3 text-green-600">Kubernetes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">IaC</td>
                  <td className="p-3">Terraform, Pulumi, CloudFormation</td>
                  <td className="p-3 text-green-600">Terraform</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Config Management</td>
                  <td className="p-3">Ansible, Chef, Puppet</td>
                  <td className="p-3 text-green-600">Ansible</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Monitoring</td>
                  <td className="p-3">
                    Prometheus, Grafana, Datadog, New Relic
                  </td>
                  <td className="p-3 text-green-600">Prometheus + Grafana</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: CI/CD */}
        <section
          id="cicd"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Workflow className="h-6 w-6 text-primary" />
            6. CI/CD Deep Dive
          </h2>

          <p>
            CI/CD is the heart of DevOps. It enables frequent, reliable software
            releases through automation.
          </p>

          <h3>CI/CD Pipeline Stages</h3>
          <ol>
            <li>
              <strong>Source:</strong> Trigger on code push (Git webhook)
            </li>
            <li>
              <strong>Build:</strong> Compile code, create artifacts
            </li>
            <li>
              <strong>Test:</strong> Unit, integration, security tests
            </li>
            <li>
              <strong>Deploy to Staging:</strong> Automated deployment
            </li>
            <li>
              <strong>Acceptance Tests:</strong> E2E, smoke tests
            </li>
            <li>
              <strong>Deploy to Production:</strong> Blue-green, canary
            </li>
            <li>
              <strong>Monitor:</strong> Track metrics, alerts
            </li>
          </ol>

          <h3>Deployment Strategies</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">Blue-Green Deployment</p>
              <p className="mt-1 text-muted-foreground">
                Two identical environments. Switch traffic from blue to green.
                Instant rollback by switching back.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-yellow-500">Canary Deployment</p>
              <p className="mt-1 text-muted-foreground">
                Release to small percentage of users first. Monitor, then
                gradually increase. Reduces risk.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">Rolling Deployment</p>
              <p className="mt-1 text-muted-foreground">
                Update instances one by one. No downtime. Slower rollback.
                Common in Kubernetes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Roadmap */}
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
              <strong>Month 1:</strong> Linux fundamentals—command line, file
              system, permissions, processes, scripting.
            </li>
            <li>
              <strong>Month 2:</strong> Networking basics—TCP/IP, DNS, HTTP,
              firewalls, load balancing.
            </li>
            <li>
              <strong>Month 3:</strong> Git mastery—branching, merging, PRs,
              workflows. Start with one cloud (AWS recommended).
            </li>
          </ul>

          <h3>Phase 2: Core DevOps (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Docker—containers, images, Dockerfile,
              Docker Compose, registries.
            </li>
            <li>
              <strong>Month 5:</strong> CI/CD with GitHub Actions or Jenkins.
              Build complete pipelines.
            </li>
            <li>
              <strong>Month 6:</strong> Cloud services deep dive—EC2, S3, VPC,
              IAM, RDS, Lambda.
            </li>
          </ul>

          <h3>Phase 3: Advanced (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Kubernetes—pods, deployments, services,
              ingress, helm.
            </li>
            <li>
              <strong>Month 8:</strong> Terraform—IaC concepts, providers,
              modules, state management.
            </li>
            <li>
              <strong>Month 9:</strong> Monitoring—Prometheus, Grafana,
              alerting, dashboards.
            </li>
          </ul>

          <h3>Phase 4: Job Ready (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build portfolio projects. Document
              everything on GitHub.
            </li>
            <li>
              <strong>Month 11:</strong> Get certified (AWS SAA or CKA). Apply
              for jobs.
            </li>
            <li>
              <strong>Month 12:</strong> Interview prep—scenario questions,
              system design, hands-on.
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
                  <td className="p-3">DevOps Engineer</td>
                  <td className="p-3">₹8-15 LPA</td>
                  <td className="p-3">₹18-35 LPA</td>
                  <td className="p-3">₹40-70 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">SRE</td>
                  <td className="p-3">₹10-18 LPA</td>
                  <td className="p-3">₹22-45 LPA</td>
                  <td className="p-3">₹50-90 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Platform Engineer</td>
                  <td className="p-3">₹12-20 LPA</td>
                  <td className="p-3">₹25-50 LPA</td>
                  <td className="p-3">₹55-100 LPA</td>
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
                  <td className="p-3">DevOps Engineer</td>
                  <td className="p-3">$95K-130K</td>
                  <td className="p-3">$140K-180K</td>
                  <td className="p-3">$190K-260K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">SRE</td>
                  <td className="p-3">$110K-150K</td>
                  <td className="p-3">$160K-210K</td>
                  <td className="p-3">$220K-300K</td>
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

          <h3>Cloud Providers</h3>
          <ul>
            <li>
              <strong>AWS:</strong> Largest cloud employer
            </li>
            <li>
              <strong>Microsoft Azure:</strong> Enterprise focus
            </li>
            <li>
              <strong>Google Cloud:</strong> Kubernetes pioneers
            </li>
          </ul>

          <h3>Tech Giants</h3>
          <ul>
            <li>
              <strong>Netflix:</strong> SRE culture leaders
            </li>
            <li>
              <strong>Meta:</strong> Massive infrastructure
            </li>
            <li>
              <strong>Uber:</strong> Complex distributed systems
            </li>
            <li>
              <strong>Spotify:</strong> Platform engineering pioneers
            </li>
          </ul>

          <h3>Indian Companies</h3>
          <ul>
            <li>
              <strong>Razorpay, Zerodha:</strong> Cloud-native fintech
            </li>
            <li>
              <strong>Swiggy, Zomato:</strong> High-scale infrastructure
            </li>
            <li>
              <strong>Flipkart, Myntra:</strong> E-commerce scale
            </li>
            <li>
              <strong>Atlassian:</strong> DevOps tool makers
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
            10. Portfolio Projects
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Dockerize an Application</p>
              <p className="mt-1 text-muted-foreground">
                Take any app, create Dockerfile, multi-stage builds, Docker
                Compose for local development.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">2. CI/CD Pipeline</p>
              <p className="mt-1 text-muted-foreground">
                Build a complete pipeline with GitHub Actions—test, build,
                deploy to cloud.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Kubernetes Deployment</p>
              <p className="mt-1 text-muted-foreground">
                Deploy app to Kubernetes with deployments, services, ingress,
                and Helm charts.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">4. Infrastructure as Code</p>
              <p className="mt-1 text-muted-foreground">
                Define AWS infrastructure with Terraform—VPC, EC2, RDS, S3. Full
                environment setup.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">5. Complete Platform</p>
              <p className="mt-1 text-muted-foreground">
                End-to-end: Terraform for infra, GitOps with ArgoCD, monitoring
                with Prometheus/Grafana.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Certifications */}
        <section
          id="certifications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            11. Certifications
          </h2>

          <h3>Recommended Certifications</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Focus</th>
                  <th className="p-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">AWS SAA</td>
                  <td className="p-3">AWS cloud architecture</td>
                  <td className="p-3 text-green-600">⭐ Highly valued</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    CKA (Certified Kubernetes Admin)
                  </td>
                  <td className="p-3">Kubernetes</td>
                  <td className="p-3 text-green-600">⭐ Top K8s cert</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Terraform Associate</td>
                  <td className="p-3">Infrastructure as Code</td>
                  <td className="p-3">Good for IaC</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Azure Administrator</td>
                  <td className="p-3">Azure cloud</td>
                  <td className="p-3">For Azure shops</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                Do I need to be a developer to become DevOps?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not required, but helpful. Many come from sysadmin or IT
                backgrounds. You will need scripting skills (Python, Bash).
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">DevOps vs SRE—what's the difference?</p>
              <p className="mt-2 text-muted-foreground">
                DevOps is broader (culture + tools). SRE is more specific—
                applying software engineering to operations. SRE often pays
                more.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Which cloud should I learn first?</p>
              <p className="mt-2 text-muted-foreground">
                AWS for most jobs. Azure if targeting enterprises. Concepts
                transfer between clouds.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is DevOps a good career?</p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Demand continues to grow. Companies can't hire fast
                enough. Evolving into Platform Engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Build the Future of Software Delivery
          </h2>

          <p>
            DevOps is not just a job—it's a movement that has fundamentally
            changed how software is built and operated. With strong demand and
            excellent compensation, it's a rewarding career path.
          </p>

          <p>
            Start with Linux and Git, master Docker and CI/CD, learn a cloud
            platform, and build your portfolio. The software industry needs
            engineers who can bridge development and operations.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more DevOps and cloud career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/cloud-computing-career-guide"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Cloud Computing Guide →
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
                Helping students build DevOps and cloud careers
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
