import { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
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
  title: 'Cybersecurity Analyst Roadmap | Guide',
  description:
    'Complete roadmap to become a Cybersecurity Analyst. Learn networking, ethical hacking, SIEM, and cloud security.',
  keywords:
    'cybersecurity roadmap, security analyst career, ethical hacking, penetration testing, siem tools',
  alternates: { canonical: 'https://www.sproutern.com/roadmaps/cybersecurity' },
};

const phases = [
  {
    number: 1,
    title: 'IT & Networking Fundamentals',
    duration: '4-6 weeks',
    description: 'Build strong foundation in networking.',
    skills: [
      { name: 'TCP/IP, OSI Model', priority: 'Essential' },
      { name: 'DNS, DHCP, HTTP', priority: 'Essential' },
      { name: 'Subnetting', priority: 'Essential' },
      { name: 'Firewalls', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Professor Messer',
        url: 'https://www.professormesser.com/',
        type: 'Free',
      },
    ],
    projects: ['Home Lab Network', 'Packet Analysis'],
  },
  {
    number: 2,
    title: 'Linux & OS Security',
    duration: '4-5 weeks',
    description: 'Master Linux and OS security.',
    skills: [
      { name: 'Linux CLI', priority: 'Essential' },
      { name: 'File Permissions', priority: 'Essential' },
      { name: 'Shell Scripting', priority: 'Important' },
    ],
    resources: [
      { name: 'OverTheWire', url: 'https://overthewire.org/', type: 'Free' },
    ],
    projects: ['Server Hardening', 'Security Scripts'],
  },
  {
    number: 3,
    title: 'Security Fundamentals',
    duration: '4-6 weeks',
    description: 'Learn core security concepts.',
    skills: [
      { name: 'CIA Triad', priority: 'Essential' },
      { name: 'Cryptography', priority: 'Essential' },
      { name: 'Security Frameworks', priority: 'Important' },
    ],
    resources: [
      { name: 'Cybrary', url: 'https://www.cybrary.it/', type: 'Freemium' },
    ],
    projects: ['Security Policy', 'Risk Assessment'],
  },
  {
    number: 4,
    title: 'Ethical Hacking',
    duration: '8-10 weeks',
    description: 'Learn penetration testing.',
    skills: [
      { name: 'Reconnaissance', priority: 'Essential' },
      { name: 'Vulnerability Scanning', priority: 'Essential' },
      { name: 'OWASP Top 10', priority: 'Essential' },
      { name: 'Metasploit', priority: 'Important' },
    ],
    resources: [
      { name: 'TryHackMe', url: 'https://tryhackme.com/', type: 'Freemium' },
      {
        name: 'HackTheBox',
        url: 'https://www.hackthebox.com/',
        type: 'Freemium',
      },
    ],
    projects: ['CTF Challenges', 'Pentest Report'],
  },
  {
    number: 5,
    title: 'Security Operations & SIEM',
    duration: '4-6 weeks',
    description: 'Learn security monitoring.',
    skills: [
      { name: 'SIEM Tools', priority: 'Essential' },
      { name: 'Incident Response', priority: 'Essential' },
      { name: 'Threat Hunting', priority: 'Important' },
    ],
    resources: [
      {
        name: 'Splunk Training',
        url: 'https://www.splunk.com/en_us/training.html',
        type: 'Free',
      },
    ],
    projects: ['SIEM Dashboard', 'IR Playbook'],
  },
  {
    number: 6,
    title: 'Cloud Security',
    duration: '4-6 weeks',
    description: 'Secure cloud infrastructure.',
    skills: [
      { name: 'AWS/Azure Security', priority: 'Essential' },
      { name: 'IAM', priority: 'Essential' },
      { name: 'Container Security', priority: 'Important' },
    ],
    resources: [
      {
        name: 'AWS Security',
        url: 'https://aws.amazon.com/security/',
        type: 'Free',
      },
    ],
    projects: ['Cloud Audit', 'Secure Architecture'],
  },
];

export default function CybersecurityRoadmapPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-gradient-to-r from-red-600 to-orange-600">
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Cybersecurity Analyst Roadmap
              </h1>
              <p className="mt-2 text-lg text-white/80">
                Complete learning path
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Clock className="mr-2 h-4 w-4" />
              10-14 Months
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Target className="mr-2 h-4 w-4" />
              Advanced
            </Badge>
            <Badge className="border-none bg-white/20 px-3 py-1 text-sm text-white">
              <Briefcase className="mr-2 h-4 w-4" />
              ₹6-25 LPA
            </Badge>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <h2 className="mb-4 text-2xl font-bold">Overview</h2>
        <p className="mb-6 text-muted-foreground">
          Master networking, ethical hacking, SIEM tools, and cloud security in
          10-14 months.
        </p>
      </section>
      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Learning Phases</h2>
        <div className="space-y-8">
          {phases.map((phase) => (
            <Card
              key={phase.number}
              className="overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500" />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                    {phase.number}
                  </div>
                  <div>
                    <CardTitle>{phase.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      <Clock className="inline h-4 w-4" /> {phase.duration}
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h4 className="mb-3 font-semibold">
                    <CheckCircle className="inline h-4 w-4 text-green-500" />{' '}
                    Skills
                  </h4>
                  <ul className="space-y-1">
                    {phase.skills.map((s) => (
                      <li
                        key={s.name}
                        className="text-sm"
                      >
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold">
                    <BookOpen className="inline h-4 w-4 text-blue-500" />{' '}
                    Resources
                  </h4>
                  <ul className="space-y-1">
                    {phase.resources.map((r) => (
                      <li key={r.name}>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="inline h-3 w-3" /> {r.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold">
                    <Code className="inline h-4 w-4 text-purple-500" /> Projects
                  </h4>
                  <ul className="space-y-1">
                    {phase.projects.map((p) => (
                      <li
                        key={p}
                        className="text-sm"
                      >
                        → {p}
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
        <div className="flex justify-between gap-4">
          <Button
            asChild
            variant="outline"
          >
            <Link href="/roadmaps">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Roadmaps
            </Link>
          </Button>
          <Button asChild>
            <Link href="/roadmaps/mobile-developer">
              Mobile Developer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
