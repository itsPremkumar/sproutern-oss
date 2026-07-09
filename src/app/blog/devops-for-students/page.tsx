import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Settings,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  GitBranch,
  Cloud,
  Award,
  Server,
  Terminal,
  Code,
  DollarSign,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DevOps for Students: Complete Career Guide',
  description:
    'Master DevOps as a student. Learn CI/CD, Docker, Kubernetes, cloud platforms, and infrastructure automation. Complete roadmap with salary insights and career paths.',
  keywords: [
    'devops for students',
    'devops internship',
    'docker kubernetes',
    'ci cd pipeline',
    'devops career',
    'devops roadmap',
    'devops engineer salary',
    'learn devops',
  ],
  openGraph: {
    title: 'DevOps for Students: Complete Career Guide',
    description: 'Launch your DevOps career with this comprehensive guide.',
    type: 'article',
    publishedTime: '2025-12-28T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-indigo-600">
            <Settings className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tech Deep Dive
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            DevOps for Students: Complete Career Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            DevOps bridges development and operations, creating faster and more
            reliable software delivery. Here's everything you need to start your
            DevOps career as a student.
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
              <span>18 min read</span>
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
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                3. DevOps Tools Deep Dive
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                4. 12-Month Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-primary hover:underline"
              >
                5. Portfolio Projects
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="text-primary hover:underline"
              >
                6. Career Paths & Salary
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-primary hover:underline"
              >
                7. Top Certifications
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                8. FAQs
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
                DevOps engineers are among the highest-paid tech professionals
                (₹8-40 LPA in India)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Start with Linux, networking basics, and Git—these are
                non-negotiable foundations
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Docker and Kubernetes are the most in-demand containerization
                skills
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Hands-on projects matter more than certifications for landing
                your first role
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Cloud platforms (AWS/Azure/GCP) are essential—pick one and
                master it first
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
            <Target className="h-6 w-6 text-primary" />
            1. What is DevOps?
          </h2>

          <p>
            DevOps is a combination of <strong>Development</strong> and{' '}
            <strong>Operations</strong>—a set of practices, tools, and cultural
            philosophies that automate and integrate the processes between
            software development and IT teams.
          </p>

          <p>
            Before DevOps, development and operations teams worked in silos.
            Developers would write code, throw it "over the wall" to operations,
            and hope it worked in production. This led to slow releases, bugs,
            and finger-pointing.
          </p>

          <h3>The DevOps Philosophy</h3>
          <p>DevOps is built on these core principles:</p>
          <ul>
            <li>
              <strong>Collaboration:</strong> Breaking down silos between dev,
              ops, and QA teams
            </li>
            <li>
              <strong>Automation:</strong> Automating repetitive tasks to reduce
              errors and speed up delivery
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Constantly measuring and
              optimizing processes
            </li>
            <li>
              <strong>Customer Focus:</strong> Delivering value to users faster
              and more reliably
            </li>
          </ul>

          <h3>The DevOps Lifecycle</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Plan & Code</p>
              <p className="text-muted-foreground">
                Define requirements, write code, use version control (Git)
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Build & Test</p>
              <p className="text-muted-foreground">
                Compile code, run automated tests, check for vulnerabilities
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 py-2 pl-4">
              <p className="font-bold">Release & Deploy</p>
              <p className="text-muted-foreground">
                Package applications, deploy to staging/production environments
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">Operate & Monitor</p>
              <p className="text-muted-foreground">
                Manage infrastructure, monitor performance, respond to incidents
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Why DevOps Matters:</strong> Companies using DevOps
              practices deploy code 46x more frequently and have 7x lower change
              failure rates than traditional organizations. (Source: DORA State
              of DevOps Report)
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            2. Essential DevOps Skills
          </h2>

          <h3>Foundational Skills (Must Have)</h3>
          <ul>
            <li>
              <strong>Linux Administration:</strong> 90% of servers run Linux.
              You must master the command line, file permissions, process
              management, and shell scripting.
            </li>
            <li>
              <strong>Networking Basics:</strong> TCP/IP, DNS, HTTP/HTTPS, load
              balancing, firewalls—understanding how the internet works is
              crucial.
            </li>
            <li>
              <strong>Git & Version Control:</strong> Branching strategies,
              merge conflicts, Git workflows (GitFlow, trunk-based development).
            </li>
            <li>
              <strong>Scripting:</strong> At minimum, learn Bash scripting.
              Python is a huge plus for automation.
            </li>
          </ul>

          <h3>Core DevOps Skills</h3>
          <ul>
            <li>
              <strong>Containerization (Docker):</strong> Creating images,
              managing containers, Docker Compose for multi-container apps.
            </li>
            <li>
              <strong>Container Orchestration (Kubernetes):</strong> Pods,
              deployments, services, ingress, Helm charts.
            </li>
            <li>
              <strong>CI/CD Pipelines:</strong> Jenkins, GitHub Actions, GitLab
              CI, CircleCI—automating build, test, and deployment.
            </li>
            <li>
              <strong>Infrastructure as Code (IaC):</strong> Terraform for cloud
              infrastructure, Ansible for configuration management.
            </li>
            <li>
              <strong>Cloud Platforms:</strong> AWS, Azure, or GCP—compute,
              storage, networking, and managed services.
            </li>
          </ul>

          <h3>Advanced Skills (Senior Roles)</h3>
          <ul>
            <li>
              <strong>Monitoring & Observability:</strong> Prometheus, Grafana,
              ELK Stack, Datadog
            </li>
            <li>
              <strong>Security (DevSecOps):</strong> Container security, secrets
              management, vulnerability scanning
            </li>
            <li>
              <strong>Service Mesh:</strong> Istio, Linkerd for microservices
              communication
            </li>
            <li>
              <strong>GitOps:</strong> ArgoCD, Flux for declarative
              infrastructure
            </li>
          </ul>
        </section>

        {/* Section 3: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            3. DevOps Tools Deep Dive
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Primary Tool</th>
                  <th className="p-3 text-left">Alternatives</th>
                  <th className="p-3 text-left">Learning Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Version Control</td>
                  <td className="p-3 font-medium">Git + GitHub</td>
                  <td className="p-3">GitLab, Bitbucket</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Containerization</td>
                  <td className="p-3 font-medium">Docker</td>
                  <td className="p-3">Podman, containerd</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Orchestration</td>
                  <td className="p-3 font-medium">Kubernetes</td>
                  <td className="p-3">Docker Swarm, ECS</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">CI/CD</td>
                  <td className="p-3 font-medium">GitHub Actions</td>
                  <td className="p-3">Jenkins, GitLab CI</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">IaC</td>
                  <td className="p-3 font-medium">Terraform</td>
                  <td className="p-3">Pulumi, CloudFormation</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Config Management</td>
                  <td className="p-3 font-medium">Ansible</td>
                  <td className="p-3">Chef, Puppet</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Monitoring</td>
                  <td className="p-3 font-medium">Prometheus + Grafana</td>
                  <td className="p-3">Datadog, New Relic</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Cloud Platform</td>
                  <td className="p-3 font-medium">AWS</td>
                  <td className="p-3">Azure, GCP</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Don't try to learn everything at once.
              Master Docker and GitHub Actions first—they're the foundation for
              everything else. You can run a complete CI/CD pipeline with just
              these two tools.
            </div>
          </div>
        </section>

        {/* Section 4: Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            4. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Linux fundamentals—command line, file
              system, permissions, package management
            </li>
            <li>
              <strong>Month 2:</strong> Networking basics—TCP/IP, DNS, HTTP,
              SSH. Learn Bash scripting.
            </li>
            <li>
              <strong>Month 3:</strong> Git mastery—branches, merges, rebasing,
              Git workflows. Set up GitHub profile.
            </li>
          </ul>

          <h3>Phase 2: Core DevOps (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Docker—images, containers, Dockerfile,
              Docker Compose, networking
            </li>
            <li>
              <strong>Month 5:</strong> CI/CD—GitHub Actions pipelines,
              automated testing, deployment workflows
            </li>
            <li>
              <strong>Month 6:</strong> Cloud basics—AWS EC2, S3, VPC, IAM.
              Deploy your first application.
            </li>
          </ul>

          <h3>Phase 3: Advanced Tools (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Kubernetes fundamentals—pods,
              deployments, services, configmaps
            </li>
            <li>
              <strong>Month 8:</strong> Infrastructure as Code—Terraform to
              provision cloud resources
            </li>
            <li>
              <strong>Month 9:</strong> Configuration management with Ansible.
              Monitoring with Prometheus/Grafana.
            </li>
          </ul>

          <h3>Phase 4: Real-World Experience (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build a complete project using all
              skills. Document everything.
            </li>
            <li>
              <strong>Month 11:</strong> Contribute to open-source DevOps
              projects
            </li>
            <li>
              <strong>Month 12:</strong> Get certified (AWS Cloud Practitioner
              or CKA). Start applying for internships.
            </li>
          </ul>

          <div className="my-6 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <BookOpen className="h-5 w-5 text-primary" />
              Free Learning Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                • <strong>Linux:</strong> Linux Journey (linuxjourney.com),
                Linux Upskill Challenge
              </li>
              <li>
                • <strong>Docker:</strong> Docker's official "Getting Started"
                guide, TechWorld with Nana (YouTube)
              </li>
              <li>
                • <strong>Kubernetes:</strong> Kubernetes.io tutorials,
                KubeAcademy by VMware
              </li>
              <li>
                • <strong>CI/CD:</strong> GitHub Actions documentation,
                freeCodeCamp tutorials
              </li>
              <li>
                • <strong>AWS:</strong> AWS Skill Builder (free tier), Stephane
                Maarek courses
              </li>
              <li>
                • <strong>Comprehensive:</strong> DevOps Roadmap (roadmap.sh),
                90DaysOfDevOps (GitHub)
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Projects */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GitBranch className="h-6 w-6 text-primary" />
            5. Portfolio Projects to Build
          </h2>

          <p>
            Theory alone won't land you a job. Here are hands-on projects that
            demonstrate real DevOps skills:
          </p>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Dockerized Web Application</p>
              <p className="mt-1 text-muted-foreground">
                Containerize a simple Node.js or Python Flask app. Write a
                Dockerfile, use multi-stage builds, push to Docker Hub.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Docker, Linux, Git
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                2. CI/CD Pipeline for a Static Website
              </p>
              <p className="mt-1 text-muted-foreground">
                Use GitHub Actions to automatically build and deploy a website
                to GitHub Pages on every push.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: GitHub Actions, Git, HTML/CSS
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Full CI/CD Pipeline with Testing</p>
              <p className="mt-1 text-muted-foreground">
                Build a pipeline that runs unit tests, builds Docker image,
                scans for vulnerabilities, and deploys to AWS EC2.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: GitHub Actions, Docker, AWS EC2, Testing
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                4. Infrastructure as Code with Terraform
              </p>
              <p className="mt-1 text-muted-foreground">
                Provision AWS infrastructure (VPC, EC2, RDS) using Terraform.
                Version control your infrastructure.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Terraform, AWS, IaC concepts
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                5. Kubernetes Microservices Deployment
              </p>
              <p className="mt-1 text-muted-foreground">
                Deploy a multi-service application on Kubernetes with proper
                networking, load balancing, and auto-scaling.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Kubernetes, Docker, Helm, Networking
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">6. Complete Monitoring Stack</p>
              <p className="mt-1 text-muted-foreground">
                Set up Prometheus, Grafana, and alerting for a production-like
                environment. Create dashboards and alerts.
              </p>
              <p className="mt-2 text-xs text-primary">
                Skills: Prometheus, Grafana, Alertmanager
              </p>
            </div>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Portfolio Tip:</strong> Document each project with a
              detailed README explaining the problem, your solution,
              architecture diagrams, and what you learned. This is often more
              impressive than the code itself.
            </div>
          </div>
        </section>

        {/* Section 6: Careers */}
        <section
          id="careers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            6. Career Paths & Salary
          </h2>

          <h3>DevOps Career Ladder</h3>
          <ul>
            <li>
              <strong>DevOps Intern/Trainee:</strong> Learn tools, assist senior
              engineers, work on internal projects
            </li>
            <li>
              <strong>Junior DevOps Engineer:</strong> Manage CI/CD pipelines,
              handle deployments, monitor systems
            </li>
            <li>
              <strong>DevOps Engineer:</strong> Design infrastructure, implement
              automation, lead projects
            </li>
            <li>
              <strong>Senior DevOps Engineer:</strong> Architect solutions,
              mentor juniors, make technical decisions
            </li>
            <li>
              <strong>DevOps Architect/SRE Lead:</strong> Define strategy, lead
              teams, drive reliability at scale
            </li>
          </ul>

          <h3>Salary Expectations (India)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Experience</th>
                  <th className="p-3 text-left">Salary Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Intern</td>
                  <td className="p-3">0 years</td>
                  <td className="p-3">₹15,000 - ₹40,000/month</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Junior</td>
                  <td className="p-3">0-2 years</td>
                  <td className="p-3">₹6-12 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Mid-Level</td>
                  <td className="p-3">2-5 years</td>
                  <td className="p-3">₹12-25 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Senior</td>
                  <td className="p-3">5-8 years</td>
                  <td className="p-3">₹25-45 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Lead/Architect</td>
                  <td className="p-3">8+ years</td>
                  <td className="p-3">₹45-80+ LPA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Top Companies Hiring DevOps Engineers</h3>
          <p>
            <strong>Product Companies:</strong> Google, Microsoft, Amazon, Meta,
            Flipkart, Ola, Swiggy, Razorpay, Zerodha
          </p>
          <p>
            <strong>Startups:</strong> Postman, Freshworks, Chargebee,
            Browserstack, Hasura
          </p>
          <p>
            <strong>Services:</strong> TCS, Infosys, Wipro, Cognizant, Accenture
          </p>
        </section>

        {/* Section 7: Certifications */}
        <section
          id="certifications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            7. Top DevOps Certifications
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Provider</th>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">AWS Cloud Practitioner</td>
                  <td className="p-3">Amazon</td>
                  <td className="p-3">Beginner</td>
                  <td className="p-3">$100</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AWS Solutions Architect Associate</td>
                  <td className="p-3">Amazon</td>
                  <td className="p-3">Intermediate</td>
                  <td className="p-3">$150</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">AWS DevOps Professional</td>
                  <td className="p-3">Amazon</td>
                  <td className="p-3">Advanced</td>
                  <td className="p-3">$300</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Certified Kubernetes Admin (CKA)</td>
                  <td className="p-3">CNCF</td>
                  <td className="p-3">Intermediate</td>
                  <td className="p-3">$395</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Docker Certified Associate</td>
                  <td className="p-3">Docker</td>
                  <td className="p-3">Intermediate</td>
                  <td className="p-3">$195</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Terraform Associate</td>
                  <td className="p-3">HashiCorp</td>
                  <td className="p-3">Beginner</td>
                  <td className="p-3">$70</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Certification Strategy:</strong> For students, start with
              AWS Cloud Practitioner (free learning resources, affordable exam).
              It validates cloud fundamentals and helps with job applications.
              CKA is valuable but more advanced—target it after 6 months of
              Kubernetes experience.
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            8. Frequently Asked Questions
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">Do I need a CS degree for DevOps?</p>
              <p className="mt-2 text-muted-foreground">
                No. DevOps is one of the most accessible tech fields. While a CS
                degree helps, many successful DevOps engineers come from IT,
                networking, or even non-tech backgrounds. Hands-on skills and
                certifications matter more than degrees.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Should I learn AWS, Azure, or GCP?</p>
              <p className="mt-2 text-muted-foreground">
                Start with AWS—it has the largest market share (~32%) and most
                job postings. The concepts are transferable across platforms, so
                once you know one, learning others is much easier.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Is DevOps only for experienced developers?
              </p>
              <p className="mt-2 text-muted-foreground">
                No! Many companies hire DevOps interns with no prior experience.
                Focus on Linux, Docker, and CI/CD basics. Your willingness to
                learn and hands-on projects matter more than years of
                experience.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How long does it take to become job-ready?
              </p>
              <p className="mt-2 text-muted-foreground">
                With dedicated effort (3-4 hours daily), you can become
                internship-ready in 6-9 months. Full-time positions typically
                require 9-12 months of learning plus some project experience.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What's the difference between DevOps and SRE?
              </p>
              <p className="mt-2 text-muted-foreground">
                DevOps is a broader methodology focused on collaboration and
                automation. SRE (Site Reliability Engineering) is a specific
                role that applies software engineering to operations problems.
                SREs typically work on larger-scale systems and focus heavily on
                reliability. Many skills overlap.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Start Your DevOps Journey Today</h2>
          <p>
            DevOps is one of the most rewarding career paths in tech. The
            combination of coding, infrastructure, and automation creates a role
            that's constantly evolving and never boring.
          </p>
          <p>
            Start small: install Linux (or use WSL on Windows), learn the
            command line, and containerize your first application with Docker.
            Every expert was once a beginner.
          </p>
          <p className="text-lg font-semibold text-primary">
            Automate everything. Break things in staging. Learn from incidents.
            Welcome to DevOps. ⚙️
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/cloud-computing-beginners"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cloud Computing Guide
            </Link>
            <Link
              href="/blog/git-github-beginners-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Git & GitHub Basics
            </Link>
            <Link
              href="/blog/software-development-internships-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              SDE Internships Guide
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse DevOps Internships
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
                Based on insights from DevOps engineers at companies like AWS,
                Google Cloud, and leading startups. Our team helps thousands of
                students launch their tech careers.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
