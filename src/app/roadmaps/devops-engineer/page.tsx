import { Metadata } from 'next';
import Link from 'next/link';
import {
  Cloud,
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
  title: 'DevOps Engineer Roadmap | Complete Guide',
  description:
    'Complete roadmap to become a DevOps Engineer. Learn Linux, Docker, Kubernetes, CI/CD, AWS, and infrastructure as code.',
  keywords:
    'devops roadmap, devops engineer career, docker kubernetes path, ci cd pipeline, aws devops, terraform ansible, sre roadmap',
  openGraph: {
    title: 'DevOps Engineer Roadmap',
    description: 'Step-by-step guide to becoming a DevOps Engineer.',
    type: 'article',
    url: 'https://www.sproutern.com/roadmaps/devops-engineer',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/roadmaps/devops-engineer',
  },
};

const phases = [
  {
    number: 1,
    title: 'Linux & Scripting',
    duration: '4-6 weeks',
    description: 'Master Linux fundamentals and shell scripting.',
    skills: [
      { name: 'Linux Commands & Navigation', priority: 'Essential' },
      { name: 'File Permissions & Users', priority: 'Essential' },
      { name: 'Process Management', priority: 'Essential' },
      { name: 'Bash Scripting', priority: 'Essential' },
      { name: 'Package Management', priority: 'Important' },
      { name: 'Cron Jobs & Automation', priority: 'Important' },
    ],
    resources: [
      { name: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'Free' },
      {
        name: 'Bash Scripting Tutorial',
        url: 'https://www.shellscript.sh/',
        type: 'Free',
      },
    ],
    projects: [
      'Automated Backup Script',
      'System Monitoring Script',
      'Log Analyzer',
    ],
  },
  {
    number: 2,
    title: 'Networking & Security',
    duration: '3-4 weeks',
    description: 'Understand networking concepts and security basics.',
    skills: [
      { name: 'TCP/IP, DNS, HTTP/HTTPS', priority: 'Essential' },
      { name: 'Firewalls & Security Groups', priority: 'Essential' },
      { name: 'SSH & Key Management', priority: 'Essential' },
      { name: 'Load Balancers', priority: 'Important' },
      { name: 'VPNs & Networking', priority: 'Important' },
      { name: 'SSL/TLS Certificates', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Networking Fundamentals',
        url: 'https://www.cloudflare.com/learning/',
        type: 'Free',
      },
    ],
    projects: ['Network Diagram Design', 'Firewall Configuration', 'SSL Setup'],
  },
  {
    number: 3,
    title: 'Version Control & Git',
    duration: '2-3 weeks',
    description: 'Master Git for code versioning and collaboration.',
    skills: [
      { name: 'Git Commands & Workflows', priority: 'Essential' },
      { name: 'Branching Strategies', priority: 'Essential' },
      { name: 'Pull Requests & Code Review', priority: 'Essential' },
      { name: 'Git Hooks', priority: 'Important' },
      { name: 'GitOps Concepts', priority: 'Good to Have' },
    ],
    resources: [
      { name: 'Pro Git Book', url: 'https://git-scm.com/book/', type: 'Free' },
      {
        name: 'GitHub Skills',
        url: 'https://skills.github.com/',
        type: 'Free',
      },
    ],
    projects: [
      'Git Workflow Implementation',
      'Pre-commit Hooks Setup',
      'Branching Strategy Doc',
    ],
  },
  {
    number: 4,
    title: 'Containers & Docker',
    duration: '4-5 weeks',
    description: 'Learn containerization with Docker.',
    skills: [
      { name: 'Docker Basics', priority: 'Essential' },
      { name: 'Dockerfile Writing', priority: 'Essential' },
      { name: 'Docker Compose', priority: 'Essential' },
      { name: 'Container Networking', priority: 'Important' },
      { name: 'Docker Registry', priority: 'Important' },
      { name: 'Multi-stage Builds', priority: 'Good to Have' },
    ],
    resources: [
      { name: 'Docker Docs', url: 'https://docs.docker.com/', type: 'Free' },
      {
        name: 'Docker Curriculum',
        url: 'https://docker-curriculum.com/',
        type: 'Free',
      },
    ],
    projects: [
      'Containerize Application',
      'Multi-container Setup',
      'Custom Docker Image',
    ],
  },
  {
    number: 5,
    title: 'Kubernetes',
    duration: '6-8 weeks',
    description: 'Master container orchestration with Kubernetes.',
    skills: [
      { name: 'Kubernetes Architecture', priority: 'Essential' },
      { name: 'Pods, Deployments, Services', priority: 'Essential' },
      { name: 'ConfigMaps & Secrets', priority: 'Essential' },
      { name: 'Helm Charts', priority: 'Essential' },
      { name: 'Ingress Controllers', priority: 'Important' },
      { name: 'RBAC & Security', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Kubernetes Docs',
        url: 'https://kubernetes.io/docs/',
        type: 'Free',
      },
      { name: 'KodeKloud', url: 'https://kodekloud.com/', type: 'Freemium' },
    ],
    projects: ['Deploy App to K8s', 'Helm Chart Creation', 'K8s Cluster Setup'],
  },
  {
    number: 6,
    title: 'CI/CD Pipelines',
    duration: '4-5 weeks',
    description: 'Implement continuous integration and deployment.',
    skills: [
      { name: 'GitHub Actions', priority: 'Essential' },
      { name: 'Jenkins', priority: 'Essential' },
      { name: 'Pipeline as Code', priority: 'Essential' },
      { name: 'GitLab CI', priority: 'Important' },
      { name: 'Artifact Management', priority: 'Important' },
      { name: 'Blue-Green Deployments', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'GitHub Actions Docs',
        url: 'https://docs.github.com/en/actions',
        type: 'Free',
      },
      {
        name: 'Jenkins Documentation',
        url: 'https://www.jenkins.io/doc/',
        type: 'Free',
      },
    ],
    projects: [
      'CI/CD Pipeline',
      'Automated Testing Pipeline',
      'Multi-environment Deploy',
    ],
  },
  {
    number: 7,
    title: 'Cloud Platforms',
    duration: '6-8 weeks',
    description: 'Master cloud services and infrastructure.',
    skills: [
      { name: 'AWS Core Services', priority: 'Essential' },
      { name: 'EC2, S3, RDS, VPC', priority: 'Essential' },
      { name: 'IAM & Security', priority: 'Essential' },
      { name: 'CloudFormation/CDK', priority: 'Important' },
      { name: 'GCP/Azure Basics', priority: 'Important' },
      { name: 'Cost Optimization', priority: 'Good to Have' },
    ],
    resources: [
      {
        name: 'AWS Free Tier',
        url: 'https://aws.amazon.com/free/',
        type: 'Free',
      },
      {
        name: 'AWS Skill Builder',
        url: 'https://skillbuilder.aws/',
        type: 'Freemium',
      },
    ],
    projects: [
      'Cloud Infrastructure Setup',
      'Serverless Application',
      'Multi-region Deployment',
    ],
  },
  {
    number: 8,
    title: 'Infrastructure as Code',
    duration: '4-5 weeks',
    description: 'Automate infrastructure with Terraform and Ansible.',
    skills: [
      { name: 'Terraform Fundamentals', priority: 'Essential' },
      { name: 'Terraform State Management', priority: 'Essential' },
      { name: 'Ansible Playbooks', priority: 'Essential' },
      { name: 'Pulumi', priority: 'Good to Have' },
      { name: 'Configuration Management', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Terraform Docs',
        url: 'https://developer.hashicorp.com/terraform',
        type: 'Free',
      },
      { name: 'Ansible Docs', url: 'https://docs.ansible.com/', type: 'Free' },
    ],
    projects: [
      'Terraform Infrastructure',
      'Ansible Automation',
      'Full IaC Pipeline',
    ],
  },
];

export default function DevOpsEngineerRoadmapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gradient-to-r from-orange-600 to-red-600">
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
              <Cloud className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                DevOps Engineer Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              8-12 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Advanced
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹8-28 LPA
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <GraduationCap className="mr-2 h-4 w-4" />8 Phases
            </Badge>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="mb-6 text-muted-foreground">
            This roadmap guides you to become a DevOps Engineer. You&apos;ll
            master Linux, containerization, Kubernetes, CI/CD, cloud platforms,
            and infrastructure as code. Completable in 8-12 months.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <div>
                  <p className="font-bold">Prerequisites</p>
                  <p className="text-sm text-muted-foreground">
                    Basic programming
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="font-bold">Outcome</p>
                  <p className="text-sm text-muted-foreground">
                    DevOps Engineer Role
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

      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500" />
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
            <Link href="/roadmaps/ui-ux-designer">
              UI/UX Designer Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
