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
  Cpu,
  Zap,
  Layers,
  Terminal,
  FileCode,
  Rocket,
  Users,
  Settings,
  Cloud,
  Server,
  Database,
  Shield,
  GitBranch,
  Package,
  Network,
  HardDrive,
  Lock,
  Activity,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud Computing: Complete Career Guide',
  description:
    'Start your cloud computing career. Learn AWS, Azure, GCP, DevOps, certifications, job opportunities, and salary expectations in this comprehensive guide.',
  keywords: [
    'cloud computing career',
    'aws career',
    'azure jobs',
    'cloud engineer salary',
    'cloud architect',
    'devops engineer',
    'cloud certifications',
    'aws certification',
    'cloud computing for beginners',
    'gcp career',
  ],
  openGraph: {
    title: 'Cloud Computing: Complete Career Guide',
    description: 'Launch your cloud computing career with AWS, Azure, and GCP.',
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
          <div className="mb-4 flex items-center gap-2 text-sky-600">
            <Cloud className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Cloud & DevOps
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cloud Computing: Complete Career Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Cloud computing powers modern technology. From startups to
            enterprises, every company runs on the cloud. This comprehensive
            guide will help you build a successful cloud computing career.
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
                1. What is Cloud Computing?
              </a>
            </li>
            <li>
              <a
                href="#providers"
                className="text-primary hover:underline"
              >
                2. Cloud Providers Comparison
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-primary hover:underline"
              >
                3. Cloud Services Explained
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                4. Career Paths & Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                5. Essential Skills
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-primary hover:underline"
              >
                6. Certifications
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
                10. Hands-On Projects
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
        <div className="not-prose mb-10 rounded-lg border border-sky-200 bg-sky-50 p-6 dark:border-sky-800 dark:bg-sky-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-sky-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                Cloud market exceeds $600 billion, growing 20%+ annually
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                AWS leads (32%), followed by Azure (23%) and GCP (11%)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                Salaries range from ₹8-50 LPA in India to $100K-220K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                Certifications significantly boost job prospects and salary
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-sky-600" />
              <span>
                Multi-cloud and cloud-native skills are increasingly in demand
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Cloud Computing */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Cloud className="h-6 w-6 text-primary" />
            1. What is Cloud Computing?
          </h2>

          <p>
            <strong>Cloud computing</strong> is the delivery of computing
            services—servers, storage, databases, networking, software,
            analytics, and more—over the internet ("the cloud"). Instead of
            owning physical hardware, you rent computing resources on-demand.
          </p>

          <h3>Cloud Service Models</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="border-l-4 border-sky-500 py-2 pl-4">
              <p className="font-bold">IaaS (Infrastructure)</p>
              <p className="text-muted-foreground">
                Virtual machines, storage, networks. You manage: OS, runtime,
                apps. Examples: EC2, Azure VMs.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">PaaS (Platform)</p>
              <p className="text-muted-foreground">
                Pre-configured environments for development. You manage: apps
                and data. Examples: Heroku, App Engine.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 py-2 pl-4">
              <p className="font-bold">SaaS (Software)</p>
              <p className="text-muted-foreground">
                Complete applications via browser. You manage: just use it.
                Examples: Gmail, Salesforce, Office 365.
              </p>
            </div>
          </div>

          <h3>Cloud Deployment Models</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Public Cloud</td>
                  <td className="p-3">AWS, Azure, GCP—shared infrastructure</td>
                  <td className="p-3">Most workloads, startups</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Private Cloud</td>
                  <td className="p-3">
                    Dedicated infrastructure, on-premise or hosted
                  </td>
                  <td className="p-3">Regulated industries, banks</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Hybrid Cloud</td>
                  <td className="p-3">Mix of public and private</td>
                  <td className="p-3">Enterprise, transition</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Multi-Cloud</td>
                  <td className="p-3">Multiple public clouds</td>
                  <td className="p-3">Large enterprises, resilience</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Cloud Providers */}
        <section
          id="providers"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            2. Cloud Providers Comparison
          </h2>

          <h3>The Big Three</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-orange-500 p-0.5 text-xs font-bold text-white">
                  A
                </div>
                <p className="font-bold text-orange-500">
                  AWS (Amazon Web Services)
                </p>
              </div>
              <p className="text-muted-foreground">
                Market leader (32% share). Most services, largest ecosystem.
                Best for: broad requirements, mature organizations.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key services: EC2, S3, Lambda, RDS, EKS
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500 p-0.5 text-xs font-bold text-white">
                  M
                </div>
                <p className="font-bold text-blue-500">Microsoft Azure</p>
              </div>
              <p className="text-muted-foreground">
                #2 provider (23% share). Strong enterprise integration,
                Microsoft stack. Best for: Windows shops, enterprises.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key services: VMs, Blob Storage, Functions, SQL, AKS
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-green-500 p-0.5 text-xs font-bold text-white">
                  G
                </div>
                <p className="font-bold text-green-500">
                  Google Cloud Platform (GCP)
                </p>
              </div>
              <p className="text-muted-foreground">
                #3 provider (11% share). Strong in data/ML, Kubernetes native.
                Best for: data analytics, ML, modern apps.
              </p>
              <p className="mt-2 text-xs text-primary">
                Key services: Compute Engine, GCS, BigQuery, GKE, Cloud Run
              </p>
            </div>
          </div>

          <h3>Which Provider to Learn First?</h3>
          <ul>
            <li>
              <strong>AWS:</strong> Most jobs, broadest skills, safe choice
            </li>
            <li>
              <strong>Azure:</strong> Best for enterprise/corporate positions
            </li>
            <li>
              <strong>GCP:</strong> Best for data/ML roles, startups
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Recommendation:</strong> Start with AWS (most jobs and
              resources). Once comfortable, learn a second cloud. The concepts
              transfer between providers.
            </div>
          </div>
        </section>

        {/* Section 3: Cloud Services */}
        <section
          id="services"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            3. Cloud Services Explained
          </h2>

          <h3>Core Service Categories</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">AWS</th>
                  <th className="p-3 text-left">Azure</th>
                  <th className="p-3 text-left">GCP</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Compute</td>
                  <td className="p-3">EC2</td>
                  <td className="p-3">VMs</td>
                  <td className="p-3">Compute Engine</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Object Storage</td>
                  <td className="p-3">S3</td>
                  <td className="p-3">Blob Storage</td>
                  <td className="p-3">Cloud Storage</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Serverless</td>
                  <td className="p-3">Lambda</td>
                  <td className="p-3">Functions</td>
                  <td className="p-3">Cloud Functions</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Kubernetes</td>
                  <td className="p-3">EKS</td>
                  <td className="p-3">AKS</td>
                  <td className="p-3">GKE</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Database</td>
                  <td className="p-3">RDS, DynamoDB</td>
                  <td className="p-3">SQL, CosmosDB</td>
                  <td className="p-3">Cloud SQL, Firestore</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Warehouse</td>
                  <td className="p-3">Redshift</td>
                  <td className="p-3">Synapse</td>
                  <td className="p-3">BigQuery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Modern Cloud Concepts</h3>
          <ul>
            <li>
              <strong>Serverless:</strong> Run code without managing servers
              (Lambda, Cloud Functions)
            </li>
            <li>
              <strong>Containers:</strong> Packaged applications (Docker,
              Kubernetes)
            </li>
            <li>
              <strong>Infrastructure as Code:</strong> Define infrastructure in
              code (Terraform, CloudFormation)
            </li>
            <li>
              <strong>CI/CD:</strong> Automated build, test, deploy pipelines
            </li>
            <li>
              <strong>Observability:</strong> Monitoring, logging, tracing
              (CloudWatch, Grafana)
            </li>
          </ul>
        </section>

        {/* Section 4: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            4. Career Paths & Job Roles
          </h2>

          <h3>Entry to Mid-Level Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-sky-500">Cloud Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Build and maintain cloud infrastructure. Deploy applications,
                manage resources, ensure reliability.
              </p>
              <p className="mt-2 text-xs">
                Skills: AWS/Azure/GCP, Linux, networking, scripting
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">DevOps Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Bridge development and operations. Build CI/CD pipelines,
                automate deployments, improve reliability.
              </p>
              <p className="mt-2 text-xs">
                Skills: Git, Jenkins/GitHub Actions, Docker, Kubernetes,
                Terraform
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                Site Reliability Engineer (SRE)
              </p>
              <p className="mt-1 text-muted-foreground">
                Ensure systems are reliable and scalable. Blend of software
                engineering and operations. High demand at tech companies.
              </p>
              <p className="mt-2 text-xs">
                Skills: Programming, monitoring, incident response, SLOs/SLIs
              </p>
            </div>
          </div>

          <h3>Senior & Specialist Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">
                Cloud Architect (Highest Paid)
              </p>
              <p className="mt-1 text-muted-foreground">
                Design cloud solutions and architecture. Lead technical
                decisions, work with multiple teams, ensure best practices.
              </p>
              <p className="mt-2 text-xs">
                Skills: Multi-cloud, security, compliance, cost optimization
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">Platform Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Build internal developer platforms. Enable developers to deploy
                and manage applications efficiently.
              </p>
              <p className="mt-2 text-xs">
                Skills: Kubernetes, GitOps, developer experience
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">Cloud Security Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Secure cloud infrastructure and applications. Identity
                management, compliance, vulnerability assessment.
              </p>
              <p className="mt-2 text-xs">
                Skills: IAM, security best practices, compliance frameworks
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Essential Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            5. Essential Skills
          </h2>

          <h3>Core Technical Skills</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Skill</th>
                  <th className="p-3 text-left">Why It Matters</th>
                  <th className="p-3 text-left">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Linux</td>
                  <td className="p-3">Most cloud workloads run on Linux</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Networking</td>
                  <td className="p-3">VPCs, subnets, DNS, load balancers</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Scripting (Python/Bash)</td>
                  <td className="p-3">Automation, tooling, glue code</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Docker</td>
                  <td className="p-3">Containerization is standard</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Kubernetes</td>
                  <td className="p-3">Container orchestration</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Terraform</td>
                  <td className="p-3">Infrastructure as Code standard</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CI/CD</td>
                  <td className="p-3">GitHub Actions, Jenkins, GitLab CI</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Cloud-Specific Knowledge</h3>
          <ul>
            <li>
              <strong>IAM:</strong> Identity and access management
            </li>
            <li>
              <strong>Cost Management:</strong> Optimize cloud spending
            </li>
            <li>
              <strong>High Availability:</strong> Multi-AZ, disaster recovery
            </li>
            <li>
              <strong>Security:</strong> Encryption, secrets management
            </li>
          </ul>
        </section>

        {/* Section 6: Certifications */}
        <section
          id="certifications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            6. Cloud Certifications
          </h2>

          <h3>AWS Certifications</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloud Practitioner</td>
                  <td className="p-3">Entry</td>
                  <td className="p-3">Good start, limited salary boost</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Solutions Architect Associate
                  </td>
                  <td className="p-3">Associate</td>
                  <td className="p-3 text-green-600">
                    ⭐ Most valuable, most common
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Developer Associate</td>
                  <td className="p-3">Associate</td>
                  <td className="p-3">Good for developers</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">SysOps Administrator</td>
                  <td className="p-3">Associate</td>
                  <td className="p-3">Good for ops roles</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    Solutions Architect Professional
                  </td>
                  <td className="p-3">Professional</td>
                  <td className="p-3">Highest salary boost</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Azure Certifications</h3>
          <ul>
            <li>
              <strong>AZ-900:</strong> Azure Fundamentals (entry)
            </li>
            <li>
              <strong>AZ-104:</strong> Azure Administrator (most common)
            </li>
            <li>
              <strong>AZ-305:</strong> Azure Solutions Architect Expert
            </li>
          </ul>

          <h3>GCP Certifications</h3>
          <ul>
            <li>
              <strong>Cloud Digital Leader:</strong> Entry level
            </li>
            <li>
              <strong>Associate Cloud Engineer:</strong> Hands-on practitioner
            </li>
            <li>
              <strong>Professional Cloud Architect:</strong> Senior level
            </li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Certification Strategy:</strong> Start with AWS Solutions
              Architect Associate—it's the most recognized and opens the most
              doors. Add Azure AZ-104 if targeting enterprise roles.
            </div>
          </div>
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
              <strong>Month 1:</strong> Learn Linux basics. Command line, file
              system, permissions, package management.
            </li>
            <li>
              <strong>Month 2:</strong> Learn networking fundamentals. IP, DNS,
              HTTP, subnets, firewalls.
            </li>
            <li>
              <strong>Month 3:</strong> Start AWS. Create free tier account.
              Learn EC2, S3, IAM basics.
            </li>
          </ul>

          <h3>Phase 2: Core Cloud (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Deep dive into AWS services. VPC, RDS,
              Lambda, CloudFormation.
            </li>
            <li>
              <strong>Month 5:</strong> Learn Docker and containers. Build and
              deploy containerized applications.
            </li>
            <li>
              <strong>Month 6:</strong> Study for AWS Solutions Architect
              Associate. Take practice exams.
            </li>
          </ul>

          <h3>Phase 3: DevOps & Automation (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Learn Terraform for Infrastructure as
              Code. Deploy real infrastructure.
            </li>
            <li>
              <strong>Month 8:</strong> Learn CI/CD with GitHub Actions or
              Jenkins. Build deployment pipelines.
            </li>
            <li>
              <strong>Month 9:</strong> Learn Kubernetes basics. Deploy apps on
              EKS or minikube.
            </li>
          </ul>

          <h3>Phase 4: Job Ready (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build portfolio projects. Document
              everything on GitHub.
            </li>
            <li>
              <strong>Month 11:</strong> Get AWS SAA certified. Start applying
              for jobs.
            </li>
            <li>
              <strong>Month 12:</strong> Interview preparation. System design,
              scenario-based questions.
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
                  <td className="p-3">Cloud Engineer</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-28 LPA</td>
                  <td className="p-3">₹32-50 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">DevOps Engineer</td>
                  <td className="p-3">₹8-15 LPA</td>
                  <td className="p-3">₹18-35 LPA</td>
                  <td className="p-3">₹40-65 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">SRE</td>
                  <td className="p-3">₹10-18 LPA</td>
                  <td className="p-3">₹22-40 LPA</td>
                  <td className="p-3">₹45-75 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Cloud Architect</td>
                  <td className="p-3">₹18-28 LPA</td>
                  <td className="p-3">₹35-55 LPA</td>
                  <td className="p-3">₹60-100 LPA</td>
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
                  <td className="p-3">Cloud Engineer</td>
                  <td className="p-3">$85K-115K</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">DevOps Engineer</td>
                  <td className="p-3">$90K-125K</td>
                  <td className="p-3">$130K-175K</td>
                  <td className="p-3">$180K-250K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Cloud Architect</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                  <td className="p-3">$230K-320K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Certification Salary Boost</h3>
          <ul>
            <li>AWS SAA: +15-25% salary boost</li>
            <li>AWS Professional: +25-40% boost</li>
            <li>Multiple cloud certs: +35-50% boost</li>
          </ul>
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
              <strong>Amazon Web Services:</strong> Largest employer of cloud
              talent
            </li>
            <li>
              <strong>Microsoft Azure:</strong> Enterprise cloud positions
            </li>
            <li>
              <strong>Google Cloud:</strong> Cutting-edge cloud work
            </li>
          </ul>

          <h3>Tech Giants</h3>
          <ul>
            <li>
              <strong>Netflix:</strong> AWS power user, SRE culture
            </li>
            <li>
              <strong>Airbnb:</strong> Cloud-native architecture
            </li>
            <li>
              <strong>Uber:</strong> Multi-cloud, massive scale
            </li>
            <li>
              <strong>Spotify:</strong> GCP heavy user
            </li>
          </ul>

          <h3>Indian IT Services</h3>
          <ul>
            <li>
              <strong>TCS:</strong> Large cloud practice
            </li>
            <li>
              <strong>Infosys:</strong> Cloud partnerships
            </li>
            <li>
              <strong>Wipro:</strong> Cloud transformation
            </li>
            <li>
              <strong>HCL:</strong> Enterprise cloud
            </li>
          </ul>

          <h3>Startups & Unicorns</h3>
          <ul>
            <li>
              <strong>Razorpay, Zerodha:</strong> Cloud-native fintech
            </li>
            <li>
              <strong>Swiggy, Zomato:</strong> High-scale cloud
            </li>
            <li>
              <strong>CRED, Groww:</strong> Modern cloud stacks
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
            10. Hands-On Projects
          </h2>

          <h3>Beginner Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">1. Static Website on S3 + CloudFront</p>
              <p className="mt-1 text-muted-foreground">
                Host a static website on S3 with CloudFront CDN and custom
                domain. Learn core AWS services.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                2. Serverless API with Lambda + API Gateway
              </p>
              <p className="mt-1 text-muted-foreground">
                Build a REST API without servers. Connect to DynamoDB for data
                storage.
              </p>
            </div>
          </div>

          <h3>Intermediate Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">3. Kubernetes Deployment with CI/CD</p>
              <p className="mt-1 text-muted-foreground">
                Deploy a containerized app to EKS/GKE with GitHub Actions CI/CD
                pipeline.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                4. Infrastructure as Code with Terraform
              </p>
              <p className="mt-1 text-muted-foreground">
                Define entire infrastructure (VPC, EC2, RDS, etc.) in Terraform.
                Version control your infrastructure.
              </p>
            </div>
          </div>

          <h3>Advanced Projects</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold">
                5. Multi-Region Highly Available Architecture
              </p>
              <p className="mt-1 text-muted-foreground">
                Design and implement a multi-region setup with auto-failover,
                RDS replication, and global load balancing.
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

          <h3>Free Resources</h3>
          <ul>
            <li>
              <strong>AWS Skill Builder:</strong> Official AWS training
            </li>
            <li>
              <strong>Microsoft Learn:</strong> Azure training
            </li>
            <li>
              <strong>Google Cloud Skills Boost:</strong> GCP training
            </li>
            <li>
              <strong>freeCodeCamp Cloud Courses:</strong> YouTube tutorials
            </li>
          </ul>

          <h3>Paid Courses</h3>
          <ul>
            <li>
              <strong>A Cloud Guru:</strong> Comprehensive cloud training
            </li>
            <li>
              <strong>Stephane Maarek (Udemy):</strong> Excellent AWS courses
            </li>
            <li>
              <strong>KodeKloud:</strong> DevOps and Kubernetes
            </li>
            <li>
              <strong>Linux Academy:</strong> In-depth cloud labs
            </li>
          </ul>

          <h3>Practice Platforms</h3>
          <ul>
            <li>
              <strong>AWS Free Tier:</strong> 12-month free access
            </li>
            <li>
              <strong>Qwiklabs/CloudSkillsBoost:</strong> Guided labs
            </li>
            <li>
              <strong>Tutorials Dojo:</strong> Practice exams
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
              <p className="font-bold">Which cloud should I learn first?</p>
              <p className="mt-2 text-muted-foreground">
                AWS for most opportunities. Azure if targeting large
                enterprises/Microsoft shops. GCP for data/ML focus or startups.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Do I need certifications to get a cloud job?
              </p>
              <p className="mt-2 text-muted-foreground">
                Not strictly required, but they significantly help—especially
                for entry-level roles. AWS SAA is highly valued.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is cloud computing saturated?</p>
              <p className="mt-2 text-muted-foreground">
                No. Demand continues to outpace supply. Cloud migration and
                modernization will continue for 10+ years.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">How much does the AWS free tier cost?</p>
              <p className="mt-2 text-muted-foreground">
                Free for 12 months within limits. Be careful with services
                outside free tier—set billing alerts!
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Build on the Cloud
          </h2>

          <p>
            Cloud computing is the foundation of modern technology. Every
            company needs cloud skills, and demand continues to grow. With free
            resources, certifications, and hands-on projects, there's never been
            a better time to start.
          </p>

          <p>
            Begin with AWS or Azure, get certified, build real projects, and
            start your cloud career. The infrastructure of the future needs
            engineers like you.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more technology career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/devops-engineer-roadmap"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                DevOps Career Guide →
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
                Helping students navigate technology careers
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
