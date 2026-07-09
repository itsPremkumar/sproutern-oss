import { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Building2,
  Users,
  MapPin,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Clock,
  CheckCircle,
  TrendingUp,
  Award,
  Heart,
  Globe,
  Code,
  Shield,
  MessageSquare,
  Target,
  BookOpen,
  Coffee,
  Laptop,
  Calendar,
  ArrowRight,
  Lock,
  Eye,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'NortonLifeLock Careers India',
  description:
    'Complete guide to NortonLifeLock/Gen Digital careers in India. Explore salary structure, interview process, cybersecurity roles, and tips to get hired.',
  keywords:
    'nortonlifelock careers, gen digital jobs, norton antivirus, cybersecurity careers india, norton pune, norton chennai, cyber security jobs',
  openGraph: {
    title: 'NortonLifeLock Careers India',
    description:
      'Everything you need to know about working at NortonLifeLock India.',
    url: 'https://www.sproutern.com/companies/nortonlifelock',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/companies/nortonlifelock',
  },
};

const salaryData = [
  {
    role: 'Software Engineer',
    level: 'E1-E2',
    experience: '0-3 years',
    ctc: '₹10-20 LPA',
    base: '₹9-17 LPA',
    bonus: '₹1-3 LPA',
  },
  {
    role: 'Senior Engineer',
    level: 'E3',
    experience: '3-6 years',
    ctc: '₹20-35 LPA',
    base: '₹17-28 LPA',
    bonus: '₹3-6 LPA',
  },
  {
    role: 'Staff Engineer',
    level: 'E4',
    experience: '6-10 years',
    ctc: '₹35-55 LPA',
    base: '₹28-42 LPA',
    bonus: '₹6-10 LPA',
  },
  {
    role: 'Principal Engineer',
    level: 'E5',
    experience: '10+ years',
    ctc: '₹55-80 LPA',
    base: '₹42-60 LPA',
    bonus: '₹10-18 LPA',
  },
  {
    role: 'Security Researcher',
    level: 'E2-E3',
    experience: '2-5 years',
    ctc: '₹18-32 LPA',
    base: '₹15-26 LPA',
    bonus: '₹3-6 LPA',
  },
  {
    role: 'Threat Analyst',
    level: 'E2-E3',
    experience: '2-5 years',
    ctc: '₹15-28 LPA',
    base: '₹12-22 LPA',
    bonus: '₹3-5 LPA',
  },
  {
    role: 'Product Manager',
    level: 'E3-E4',
    experience: '4-8 years',
    ctc: '₹28-50 LPA',
    base: '₹22-38 LPA',
    bonus: '₹5-10 LPA',
  },
  {
    role: 'QA Engineer',
    level: 'E2-E3',
    experience: '2-5 years',
    ctc: '₹12-25 LPA',
    base: '₹10-20 LPA',
    bonus: '₹2-5 LPA',
  },
  {
    role: 'Engineering Manager',
    level: 'M1-M2',
    experience: '10+ years',
    ctc: '₹60-90 LPA',
    base: '₹45-65 LPA',
    bonus: '₹12-20 LPA',
  },
];

const interviewRounds = [
  {
    round: 1,
    name: 'Recruiter Screen',
    duration: '20-30 mins',
    description:
      'Initial call discussing background, role expectations, and process overview.',
    tips: [
      'Research Gen Digital brands',
      'Know your resume',
      'Ask about timeline',
      'Show cybersecurity interest',
    ],
  },
  {
    round: 2,
    name: 'Technical Round 1',
    duration: '60 mins',
    description:
      'Coding and problem-solving round covering DSA and basic system design.',
    tips: [
      'Practice coding problems',
      'Know security basics',
      'Explain your approach',
      'Write clean code',
    ],
  },
  {
    round: 3,
    name: 'Technical Round 2',
    duration: '60 mins',
    description:
      'Deep dive into security concepts, architecture, or domain-specific knowledge.',
    tips: [
      'Know threat models',
      'Understand security tools',
      'Discuss past projects',
      'System design for seniors',
    ],
  },
  {
    round: 4,
    name: 'Hiring Manager Round',
    duration: '45 mins',
    description:
      'Discussion about team fit, career goals, and behavioral questions.',
    tips: [
      'Prepare STAR stories',
      'Show passion for security',
      'Ask about the team',
      'Demonstrate ownership',
    ],
  },
  {
    round: 5,
    name: 'HR Discussion',
    duration: '30 mins',
    description: 'Final round on compensation, benefits, and joining details.',
    tips: [
      'Know market rates',
      'Discuss expectations',
      'Clarify notice period',
      'Ask about perks',
    ],
  },
];

const teams = [
  {
    name: 'Norton Security',
    icon: Shield,
    description:
      'Build consumer security products including Norton 360, antivirus, and VPN solutions.',
    roles: ['Software Engineer', 'Security Engineer', 'QA'],
    tech: ['C++', 'Python', 'Windows', 'macOS'],
  },
  {
    name: 'Identity Protection',
    icon: Lock,
    description:
      'Develop LifeLock identity theft protection services and dark web monitoring.',
    roles: ['Backend Engineer', 'Data Engineer', 'ML Engineer'],
    tech: ['Java', 'Python', 'Big Data', 'ML'],
  },
  {
    name: 'Threat Intelligence',
    icon: Eye,
    description:
      'Research and analyze cyber threats, malware, and attack patterns globally.',
    roles: ['Security Researcher', 'Threat Analyst', 'Reverse Engineer'],
    tech: ['Python', 'Assembly', 'Malware Analysis', 'YARA'],
  },
  {
    name: 'Privacy Products',
    icon: Globe,
    description:
      'Build privacy-focused tools including VPN, password managers, and privacy monitors.',
    roles: ['Full Stack', 'Mobile Dev', 'Security Engineer'],
    tech: ['React', 'Swift', 'Kotlin', 'Networking'],
  },
  {
    name: 'AI & Machine Learning',
    icon: Cpu,
    description:
      'Apply ML to threat detection, behavioral analysis, and automated security.',
    roles: ['ML Engineer', 'Data Scientist', 'Research Scientist'],
    tech: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
  },
  {
    name: 'Platform Engineering',
    icon: Code,
    description:
      'Build cloud infrastructure, DevOps pipelines, and platform services.',
    roles: ['Platform Engineer', 'DevOps', 'SRE'],
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Go'],
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health',
    items: [
      'Medical coverage',
      'Mental health support',
      'Wellness programs',
      'Fitness reimbursement',
      'Health check-ups',
      'Life insurance',
    ],
  },
  {
    icon: Calendar,
    title: 'Time Off',
    items: [
      'Flexible PTO',
      'Paid parental leave',
      'Sick leave',
      'Holidays',
      'Volunteer time',
      'Work from home',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Compensation',
    items: [
      'Competitive salary',
      'Annual bonus',
      'Stock options',
      'Retirement benefits',
      'Referral bonus',
      'Spot awards',
    ],
  },
  {
    icon: BookOpen,
    title: 'Growth',
    items: [
      'Training programs',
      'Certification support',
      'Conference attendance',
      'Internal mobility',
      'Security certifications',
      'Leadership programs',
    ],
  },
  {
    icon: Laptop,
    title: 'Work Setup',
    items: [
      'Hybrid work',
      'Latest equipment',
      'Home office allowance',
      'Modern offices',
      'Tech support',
      'Ergonomic setup',
    ],
  },
  {
    icon: Coffee,
    title: 'Perks',
    items: [
      'Free Norton products',
      'Cafeteria',
      'Team events',
      'Employee discounts',
      'Transportation',
      'Recognition programs',
    ],
  },
];

const faqs = [
  {
    question: 'What is Gen Digital / NortonLifeLock?',
    answer:
      'Gen Digital (formerly NortonLifeLock and Symantec) is a global cyber safety company. Brands include Norton, Avira, LifeLock, AVG, CCleaner, and Avast. They focus on consumer cybersecurity and identity protection.',
  },
  {
    question: 'What is the salary for freshers at NortonLifeLock India?',
    answer:
      'Entry-level engineers (E1-E2) can expect ₹10-20 LPA. This includes base salary and annual bonus. Security-focused roles may offer slightly higher compensation.',
  },
  {
    question: 'What skills are needed for NortonLifeLock?',
    answer:
      'General: C++, Python, Java for development roles. Security-specific: malware analysis, threat intelligence, network security. Understanding of security concepts like encryption, authentication, and threat models is valuable.',
  },
  {
    question: 'Where are NortonLifeLock offices in India?',
    answer:
      'Primary offices in Pune and Chennai. Pune is the larger engineering center. Some roles may also be remote-friendly depending on team requirements.',
  },
  {
    question: 'Is security background required?',
    answer:
      'Not necessarily for all roles. General software engineering roles accept candidates without security background. Security researcher and threat analyst roles prefer candidates with relevant experience or certifications.',
  },
  {
    question: 'What certifications help for NortonLifeLock?',
    answer:
      'Security certifications like CEH, OSCP, CompTIA Security+, or CISSP add value. Cloud certifications (AWS/Azure) are helpful for platform roles. These aren&apos;t mandatory but demonstrate commitment to the field.',
  },
];

const hiringTips = [
  {
    icon: Shield,
    title: 'Security Fundamentals',
    description:
      'Understand security basics: encryption, authentication, common vulnerabilities, and threat models. Even for non-security roles, this context helps.',
  },
  {
    icon: Code,
    title: 'Strong Programming',
    description:
      'C++ and Python are primary languages. Know memory management, performance optimization, and system-level programming for security products.',
  },
  {
    icon: Target,
    title: 'Passion for Cybersecurity',
    description:
      'Show genuine interest in security. Follow threat reports, know recent breaches, understand the cybersecurity landscape.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Skills',
    description:
      'Security requires explaining complex concepts clearly. Practice articulating technical ideas to non-technical audiences.',
  },
  {
    icon: Globe,
    title: 'Stay Current',
    description:
      'Cybersecurity evolves rapidly. Demonstrate awareness of emerging threats, new attack vectors, and industry trends.',
  },
  {
    icon: TrendingUp,
    title: 'Problem-Solving',
    description:
      'Security is about anticipating and solving problems. Show analytical thinking and creative problem-solving in interviews.',
  },
];

export default function NortonLifeLockCareersPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-600">
        <div className="container relative py-16 md:py-24">
          <Link
            href="/companies"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            ← Back to Companies
          </Link>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                Cybersecurity Leader
              </Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                NortonLifeLock Careers India
              </h1>
              <p className="mb-2 text-sm text-white/70">
                Now part of Gen Digital
              </p>
              <p className="mb-6 text-lg text-white/90 md:text-xl">
                Protect 500 million+ users worldwide. Join a leading
                cybersecurity company and make the digital world safer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-yellow-600 hover:bg-white/90"
                >
                  <a
                    href="https://www.gendigital.com/careers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Open Positions
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <a href="#salaries">View Salaries</a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Building2 className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Founded</p>
                <p className="text-2xl font-bold text-white">1982</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Users className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Users Protected</p>
                <p className="text-2xl font-bold text-white">500M+</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">India Offices</p>
                <p className="text-2xl font-bold text-white">Pune, Chennai</p>
              </Card>
              <Card className="bg-white/10 p-4 backdrop-blur-sm">
                <Award className="mb-2 h-8 w-8 text-white" />
                <p className="text-sm text-white/70">Brands</p>
                <p className="text-2xl font-bold text-white">
                  Norton, Avast, AVG
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted/30 py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">₹10-90 LPA</p>
              <p className="text-sm text-muted-foreground">Salary Range</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2-4 Weeks</p>
              <p className="text-sm text-muted-foreground">Interview Process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4-5 Rounds</p>
              <p className="text-sm text-muted-foreground">Interview Rounds</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">Hybrid</p>
              <p className="text-sm text-muted-foreground">Work Model</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">
            About Gen Digital (NortonLifeLock)
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Gen Digital (formerly NortonLifeLock) is a global leader in
              consumer cyber safety. Created through the merger of Norton and
              Avast, Gen provides security, privacy, and identity protection to
              over 500 million users worldwide.
            </p>
            <p>
              The company&apos;s portfolio of trusted brands includes Norton,
              Avira, LifeLock, AVG, CCleaner, and Avast. These products protect
              consumers from viruses, malware, identity theft, and online
              threats across all devices.
            </p>
            <p>
              Gen Digital India teams in Pune and Chennai work on core product
              development, threat research, and platform engineering. Engineers
              here build security solutions that protect millions of users
              globally.
            </p>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Teams at NortonLifeLock India
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <Card
                  key={team.name}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900">
                      <team.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle>{team.name}</CardTitle>
                    <CardDescription>{team.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {team.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section
        id="salaries"
        className="container py-16"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              NortonLifeLock India Salary Structure
            </h2>
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <Card className="border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
              <GraduationCap className="mb-2 h-8 w-8 text-green-600" />
              <p className="text-sm text-green-700 dark:text-green-400">
                Entry Level
              </p>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                ₹10-20 LPA
              </p>
            </Card>
            <Card className="border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
              <Briefcase className="mb-2 h-8 w-8 text-blue-600" />
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Senior (E3-E4)
              </p>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                ₹25-55 LPA
              </p>
            </Card>
            <Card className="border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950">
              <TrendingUp className="mb-2 h-8 w-8 text-purple-600" />
              <p className="text-sm text-purple-700 dark:text-purple-400">
                Principal/Manager
              </p>
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                ₹55-90 LPA
              </p>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Salary by Role & Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left">Level</th>
                      <th className="p-3 text-left">Exp</th>
                      <th className="p-3 text-left">Total CTC</th>
                      <th className="p-3 text-left">Base</th>
                      <th className="p-3 text-left">Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryData.map((row, i) => (
                      <tr
                        key={row.role}
                        className={i % 2 === 0 ? 'bg-muted/20' : ''}
                      >
                        <td className="p-3 font-medium">{row.role}</td>
                        <td className="p-3">
                          <Badge variant="outline">{row.level}</Badge>
                        </td>
                        <td className="p-3 text-muted-foreground">
                          {row.experience}
                        </td>
                        <td className="p-3 font-semibold text-green-600">
                          {row.ctc}
                        </td>
                        <td className="p-3">{row.base}</td>
                        <td className="p-3">{row.bonus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interview */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Interview Process</h2>
            </div>
            <div className="space-y-6">
              {interviewRounds.map((round) => (
                <Card
                  key={round.round}
                  className="overflow-hidden"
                >
                  <div className="flex">
                    <div className="flex w-16 flex-shrink-0 items-center justify-center bg-yellow-500 text-white">
                      <span className="text-2xl font-bold">{round.round}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{round.name}</h3>
                        <Badge variant="outline">
                          <Clock className="mr-1 h-3 w-3" />
                          {round.duration}
                        </Badge>
                      </div>
                      <p className="mb-4 text-muted-foreground">
                        {round.description}
                      </p>
                      <ul className="grid gap-1 sm:grid-cols-2">
                        {round.tips.map((tip) => (
                          <li
                            key={tip}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="container py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">Tips to Get Hired</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hiringTips.map((tip) => (
              <Card
                key={tip.title}
                className="p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900">
                  <tip.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-3xl font-bold">Benefits</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((cat) => (
                <Card
                  key={cat.title}
                  className="p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                      <cat.icon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Join Gen Digital?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Help protect millions of users worldwide. Start your cybersecurity
              career today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-yellow-600 hover:bg-white/90"
              >
                <a
                  href="https://www.gendigital.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Open Positions
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/roadmaps/cybersecurity">
                  Explore Cybersecurity Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
