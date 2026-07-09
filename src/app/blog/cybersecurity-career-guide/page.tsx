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
  Shield,
  Lock,
  Key,
  Eye,
  Bug,
  AlertTriangle,
  Network,
  Server,
  Fingerprint,
  Scan,
  Search,
  FileWarning,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Careers: Complete Guide',
  description:
    'Start your cybersecurity career. Learn about ethical hacking, security analysis, certifications, job opportunities, skills required, and salary expectations.',
  keywords: [
    'cybersecurity career',
    'ethical hacking',
    'security analyst',
    'penetration testing',
    'cybersecurity certification',
    'ceh certification',
    'oscp',
    'cybersecurity salary',
    'cyber security jobs',
    'information security',
  ],
  openGraph: {
    title: 'Cybersecurity Careers: Complete Guide',
    description:
      'Launch your cybersecurity career with this comprehensive guide.',
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
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Cybersecurity
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cybersecurity Careers: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Cybersecurity professionals are in critical demand as cyber threats
            grow. This comprehensive guide covers everything you need to protect
            organizations and build a rewarding career in security.
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
              <span>25 min read</span>
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
                1. What is Cybersecurity?
              </a>
            </li>
            <li>
              <a
                href="#domains"
                className="text-primary hover:underline"
              >
                2. Cybersecurity Domains
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
                href="#certifications"
                className="text-primary hover:underline"
              >
                5. Certifications
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-primary hover:underline"
              >
                6. Learning Roadmap
              </a>
            </li>
            <li>
              <a
                href="#tools"
                className="text-primary hover:underline"
              >
                7. Tools & Technologies
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
                10. Practice & Labs
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
        <div className="not-prose mb-10 rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-red-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
              <span>3.5 million unfilled cybersecurity jobs globally</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
              <span>
                Cybersecurity market worth $200+ billion, growing 12%+ annually
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
              <span>
                Salaries range from ₹6-50 LPA in India to $80K-250K in the US
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
              <span>
                Certifications like CISSP, CEH, and OSCP are highly valued
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-red-600" />
              <span>
                AI, cloud security, and zero trust are the fastest-growing areas
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: What is Cybersecurity */}
        <section
          id="what"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            1. What is Cybersecurity?
          </h2>

          <p>
            <strong>Cybersecurity</strong> is the practice of protecting
            systems, networks, and data from digital attacks, unauthorized
            access, and damage. As our world becomes more connected,
            cybersecurity becomes more critical.
          </p>

          <h3>The CIA Triad</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="border-l-4 border-blue-500 py-2 pl-4">
              <p className="font-bold">Confidentiality</p>
              <p className="text-muted-foreground">
                Ensuring only authorized people can access information.
                Encryption, access control.
              </p>
            </div>
            <div className="border-l-4 border-green-500 py-2 pl-4">
              <p className="font-bold">Integrity</p>
              <p className="text-muted-foreground">
                Ensuring data hasn't been tampered with. Hashing, digital
                signatures.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 py-2 pl-4">
              <p className="font-bold">Availability</p>
              <p className="text-muted-foreground">
                Ensuring systems are accessible when needed. Redundancy, DDoS
                protection.
              </p>
            </div>
          </div>

          <h3>The Threat Landscape</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Threat Type</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Ransomware</td>
                  <td className="p-3">Encrypts data, demands payment</td>
                  <td className="p-3 text-red-600">$30B+ annual damage</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Phishing</td>
                  <td className="p-3">
                    Tricks users into revealing credentials
                  </td>
                  <td className="p-3 text-red-600">Most common attack</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Data Breaches</td>
                  <td className="p-3">Unauthorized access to sensitive data</td>
                  <td className="p-3 text-red-600">$4.5M avg cost</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Supply Chain</td>
                  <td className="p-3">Attacks through third-party software</td>
                  <td className="p-3 text-red-600">Growing rapidly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Domains */}
        <section
          id="domains"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Layers className="h-6 w-6 text-primary" />
            2. Cybersecurity Domains
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Network className="h-5 w-5 text-blue-500" />
                <p className="font-bold text-blue-500">Network Security</p>
              </div>
              <p className="text-muted-foreground">
                Protecting network infrastructure—firewalls, IDS/IPS, VPNs,
                network monitoring. Foundation of security.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Code className="h-5 w-5 text-purple-500" />
                <p className="font-bold text-purple-500">
                  Application Security
                </p>
              </div>
              <p className="text-muted-foreground">
                Securing software applications—code review, SAST/DAST,
                DevSecOps, vulnerability management.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Server className="h-5 w-5 text-orange-500" />
                <p className="font-bold text-orange-500">Cloud Security</p>
              </div>
              <p className="text-muted-foreground">
                Securing cloud infrastructure—AWS/Azure/GCP security, CSPM,
                container security. Fastest-growing domain.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Bug className="h-5 w-5 text-red-500" />
                <p className="font-bold text-red-500">Offensive Security</p>
              </div>
              <p className="text-muted-foreground">
                Penetration testing, ethical hacking, red teaming. Find
                vulnerabilities before attackers do.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-500" />
                <p className="font-bold text-green-500">
                  Security Operations (SOC)
                </p>
              </div>
              <p className="text-muted-foreground">
                Monitoring and responding to threats—SIEM, threat hunting,
                incident response. 24/7 security monitoring.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <div className="mb-2 flex items-center gap-2">
                <FileWarning className="h-5 w-5 text-cyan-500" />
                <p className="font-bold text-cyan-500">
                  GRC (Governance, Risk, Compliance)
                </p>
              </div>
              <p className="text-muted-foreground">
                Security policies, risk management, regulatory compliance (GDPR,
                HIPAA, PCI-DSS). Less technical, business-focused.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Career Paths */}
        <section
          id="roles"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Career Paths & Job Roles
          </h2>

          <h3>Entry-Level Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-blue-500">
                Security Analyst (Most Common Entry Point)
              </p>
              <p className="mt-1 text-muted-foreground">
                Monitor security systems, analyze alerts, investigate incidents.
                Work in SOC team. Great starting point.
              </p>
              <p className="mt-2 text-xs">
                Skills: SIEM, networking, log analysis
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-green-500">
                IT Security Administrator
              </p>
              <p className="mt-1 text-muted-foreground">
                Manage security tools, implement policies, handle access
                control. Often evolves from IT admin roles.
              </p>
              <p className="mt-2 text-xs">
                Skills: System administration, firewalls, IAM
              </p>
            </div>
          </div>

          <h3>Mid-Level Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-red-500">
                Penetration Tester (Ethical Hacker)
              </p>
              <p className="mt-1 text-muted-foreground">
                Test systems for vulnerabilities, simulate attacks, report
                findings. High demand, exciting work.
              </p>
              <p className="mt-2 text-xs">
                Skills: Hacking tools, programming, networking
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-purple-500">Security Engineer</p>
              <p className="mt-1 text-muted-foreground">
                Build and implement security solutions, architect defenses,
                automate security processes.
              </p>
              <p className="mt-2 text-xs">
                Skills: Cloud security, automation, DevSecOps
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-orange-500">
                Threat Intelligence Analyst
              </p>
              <p className="mt-1 text-muted-foreground">
                Research threat actors, analyze malware, provide actionable
                intelligence to defend organizations.
              </p>
              <p className="mt-2 text-xs">
                Skills: Research, malware analysis, OSINT
              </p>
            </div>
          </div>

          <h3>Senior Roles</h3>
          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-cyan-500">Security Architect</p>
              <p className="mt-1 text-muted-foreground">
                Design organization-wide security architecture. Lead security
                strategy and major initiatives.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-500">
                CISO (Chief Information Security Officer)
              </p>
              <p className="mt-1 text-muted-foreground">
                Lead the security organization. Report to C-suite, own security
                budget and strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Essential Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            4. Essential Skills
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
                  <td className="p-3 font-medium">Networking</td>
                  <td className="p-3">TCP/IP, DNS, firewalls, protocols</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Linux</td>
                  <td className="p-3">Command line, system administration</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Python</td>
                  <td className="p-3">
                    Scripting, automation, tool development
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Security Tools</td>
                  <td className="p-3">
                    Wireshark, Nmap, Burp Suite, Metasploit
                  </td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Cloud Security</td>
                  <td className="p-3">AWS/Azure/GCP security services</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">SIEM</td>
                  <td className="p-3">Splunk, Elastic, Microsoft Sentinel</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Soft Skills</h3>
          <ul>
            <li>
              <strong>Analytical Thinking:</strong> Investigate complex security
              incidents
            </li>
            <li>
              <strong>Communication:</strong> Explain technical risks to
              non-technical stakeholders
            </li>
            <li>
              <strong>Continuous Learning:</strong> Threats evolve; you must too
            </li>
            <li>
              <strong>Attention to Detail:</strong> One missed vulnerability is
              all it takes
            </li>
          </ul>
        </section>

        {/* Section 5: Certifications */}
        <section
          id="certifications"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            5. Cybersecurity Certifications
          </h2>

          <h3>Entry-Level Certifications</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Provider</th>
                  <th className="p-3 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">CompTIA Security+</td>
                  <td className="p-3">CompTIA</td>
                  <td className="p-3 text-green-600">
                    ⭐ Best entry-level cert
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CompTIA Network+</td>
                  <td className="p-3">CompTIA</td>
                  <td className="p-3">Good networking foundation</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">
                    CC (Certified in Cybersecurity)
                  </td>
                  <td className="p-3">ISC2</td>
                  <td className="p-3">Free, good introduction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Mid-Level Certifications</h3>
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
                  <td className="p-3 font-medium">
                    CEH (Certified Ethical Hacker)
                  </td>
                  <td className="p-3">Ethical hacking</td>
                  <td className="p-3">Popular in India</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">OSCP (Offensive Security)</td>
                  <td className="p-3">Penetration testing</td>
                  <td className="p-3 text-green-600">
                    ⭐ Gold standard for pentest
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CySA+</td>
                  <td className="p-3">Security analyst</td>
                  <td className="p-3">Good for SOC roles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Senior-Level Certifications</h3>
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
                  <td className="p-3 font-medium">CISSP</td>
                  <td className="p-3">Security management</td>
                  <td className="p-3 text-green-600">
                    ⭐ Most prestigious, required for senior roles
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">CISM</td>
                  <td className="p-3">Security management</td>
                  <td className="p-3">Good alternative to CISSP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <strong>Recommended Path:</strong> Security+ → (CEH or CySA+) →
              OSCP (for pentest) or CISSP (for management). Focus on hands-on
              skills alongside certifications.
            </div>
          </div>
        </section>

        {/* Section 6: Learning Roadmap */}
        <section
          id="roadmap"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            6. 12-Month Learning Roadmap
          </h2>

          <h3>Phase 1: Foundations (Months 1-3)</h3>
          <ul>
            <li>
              <strong>Month 1:</strong> Learn networking fundamentals. TCP/IP,
              DNS, HTTP, routing, firewalls.
            </li>
            <li>
              <strong>Month 2:</strong> Master Linux. Command line, file system,
              permissions, processes.
            </li>
            <li>
              <strong>Month 3:</strong> Start Python scripting. Automation,
              simple security tools.
            </li>
          </ul>

          <h3>Phase 2: Security Fundamentals (Months 4-6)</h3>
          <ul>
            <li>
              <strong>Month 4:</strong> Study for CompTIA Security+. Core
              security concepts.
            </li>
            <li>
              <strong>Month 5:</strong> Learn security tools—Wireshark, Nmap,
              basic Metasploit.
            </li>
            <li>
              <strong>Month 6:</strong> Take Security+ exam. Start practicing on
              CTF platforms.
            </li>
          </ul>

          <h3>Phase 3: Specialization (Months 7-9)</h3>
          <ul>
            <li>
              <strong>Month 7:</strong> Choose path: offensive (pentesting) or
              defensive (SOC, blue team).
            </li>
            <li>
              <strong>Month 8:</strong> Deep dive into chosen area. Practice
              extensively on labs.
            </li>
            <li>
              <strong>Month 9:</strong> Start working on relevant certifications
              (CEH, CySA+, or OSCP prep).
            </li>
          </ul>

          <h3>Phase 4: Job Ready (Months 10-12)</h3>
          <ul>
            <li>
              <strong>Month 10:</strong> Build portfolio—CTF write-ups, home lab
              projects, bug bounty.
            </li>
            <li>
              <strong>Month 11:</strong> Complete certifications. Apply for
              entry-level positions.
            </li>
            <li>
              <strong>Month 12:</strong> Interview prep, continue learning, land
              your first security role.
            </li>
          </ul>
        </section>

        {/* Section 7: Tools */}
        <section
          id="tools"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            7. Tools & Technologies
          </h2>

          <h3>Essential Security Tools</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Tool</th>
                  <th className="p-3 text-left">Purpose</th>
                  <th className="p-3 text-left">Learn Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Wireshark</td>
                  <td className="p-3">Network packet analysis</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Nmap</td>
                  <td className="p-3">Network scanning, port discovery</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Burp Suite</td>
                  <td className="p-3">Web application security testing</td>
                  <td className="p-3 text-green-600">🟢 Essential</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Metasploit</td>
                  <td className="p-3">Exploitation framework</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Splunk/SIEM</td>
                  <td className="p-3">Log analysis, threat detection</td>
                  <td className="p-3 text-yellow-600">🟡 Important</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Operating Systems</h3>
          <ul>
            <li>
              <strong>Kali Linux:</strong> Penetration testing distro with
              pre-installed tools
            </li>
            <li>
              <strong>Parrot OS:</strong> Alternative to Kali, more lightweight
            </li>
            <li>
              <strong>Windows Security:</strong> Active Directory, PowerShell
              for security
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
                  <td className="p-3">Security Analyst</td>
                  <td className="p-3">₹5-10 LPA</td>
                  <td className="p-3">₹12-22 LPA</td>
                  <td className="p-3">₹25-40 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Penetration Tester</td>
                  <td className="p-3">₹6-12 LPA</td>
                  <td className="p-3">₹15-28 LPA</td>
                  <td className="p-3">₹32-55 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Security Engineer</td>
                  <td className="p-3">₹8-15 LPA</td>
                  <td className="p-3">₹18-35 LPA</td>
                  <td className="p-3">₹40-70 LPA</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Security Architect</td>
                  <td className="p-3">₹15-25 LPA</td>
                  <td className="p-3">₹30-50 LPA</td>
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
                  <td className="p-3">Security Analyst</td>
                  <td className="p-3">$70K-95K</td>
                  <td className="p-3">$100K-135K</td>
                  <td className="p-3">$140K-180K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Penetration Tester</td>
                  <td className="p-3">$80K-110K</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Security Architect</td>
                  <td className="p-3">$120K-160K</td>
                  <td className="p-3">$170K-220K</td>
                  <td className="p-3">$230K-300K</td>
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

          <h3>Security Vendors</h3>
          <ul>
            <li>
              <strong>Palo Alto Networks:</strong> Firewalls, SASE
            </li>
            <li>
              <strong>CrowdStrike:</strong> Endpoint security
            </li>
            <li>
              <strong>Fortinet:</strong> Network security
            </li>
            <li>
              <strong>Zscaler:</strong> Cloud security
            </li>
            <li>
              <strong>Splunk:</strong> SIEM, observability
            </li>
          </ul>

          <h3>Big Tech Security Teams</h3>
          <ul>
            <li>
              <strong>Google:</strong> Security engineering, threat analysis
            </li>
            <li>
              <strong>Microsoft:</strong> Azure security, threat intelligence
            </li>
            <li>
              <strong>Amazon:</strong> AWS security, incident response
            </li>
            <li>
              <strong>Meta:</strong> Product security, red team
            </li>
          </ul>

          <h3>Consulting & Services</h3>
          <ul>
            <li>
              <strong>Deloitte, KPMG, PwC:</strong> Security consulting
            </li>
            <li>
              <strong>Mandiant (Google):</strong> Incident response
            </li>
            <li>
              <strong>Rapid7, Tenable:</strong> Vulnerability management
            </li>
          </ul>

          <h3>Indian Security Companies</h3>
          <ul>
            <li>
              <strong>Paladion (Atos):</strong> MSSP services
            </li>
            <li>
              <strong>Quick Heal:</strong> Endpoint security
            </li>
            <li>
              <strong>TCS, Infosys, Wipro:</strong> Security practices
            </li>
          </ul>
        </section>

        {/* Section 10: Practice */}
        <section
          id="projects"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            10. Practice & Labs
          </h2>

          <h3>CTF Platforms (Capture The Flag)</h3>
          <ul>
            <li>
              <strong>TryHackMe:</strong> Beginner-friendly, guided learning
              paths
            </li>
            <li>
              <strong>HackTheBox:</strong> More challenging, realistic labs
            </li>
            <li>
              <strong>PicoCTF:</strong> Free, beginner CTF competitions
            </li>
            <li>
              <strong>OverTheWire:</strong> Linux and security wargames
            </li>
          </ul>

          <h3>Home Lab Ideas</h3>
          <ul>
            <li>
              <strong>Virtual Lab:</strong> Set up Windows/Linux VMs for
              practice
            </li>
            <li>
              <strong>SIEM Lab:</strong> Deploy Splunk or Elastic SIEM
            </li>
            <li>
              <strong>Vulnerable Apps:</strong> DVWA, OWASP WebGoat
            </li>
            <li>
              <strong>Active Directory Lab:</strong> Practice Windows security
            </li>
          </ul>

          <h3>Bug Bounty Programs</h3>
          <ul>
            <li>
              <strong>HackerOne:</strong> Largest bug bounty platform
            </li>
            <li>
              <strong>Bugcrowd:</strong> Various programs
            </li>
            <li>
              <strong>Individual programs:</strong> Google, Microsoft, Apple
            </li>
          </ul>
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
              <strong>Professor Messer (Security+):</strong> Free video course
            </li>
            <li>
              <strong>Cybrary:</strong> Free security courses
            </li>
            <li>
              <strong>SANS Cyber Aces:</strong> Free foundational training
            </li>
            <li>
              <strong>TryHackMe Free Rooms:</strong> Hands-on learning
            </li>
          </ul>

          <h3>Books</h3>
          <ul>
            <li>
              <strong>The Web Application Hacker's Handbook:</strong> Web
              security bible
            </li>
            <li>
              <strong>Penetration Testing (Georgia Weidman):</strong> Great
              intro
            </li>
            <li>
              <strong>CISSP Study Guide:</strong> For senior certification
            </li>
          </ul>

          <h3>YouTube Channels</h3>
          <ul>
            <li>
              <strong>IppSec:</strong> HackTheBox walkthroughs
            </li>
            <li>
              <strong>NetworkChuck:</strong> Networking and security
            </li>
            <li>
              <strong>John Hammond:</strong> CTF and malware analysis
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
              <p className="font-bold">Do I need a degree for cybersecurity?</p>
              <p className="mt-2 text-muted-foreground">
                Not strictly required. Certifications, skills, and practical
                experience matter more than degrees in security. Many successful
                professionals are self-taught.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is cybersecurity hard to learn?</p>
              <p className="mt-2 text-muted-foreground">
                It has a learning curve, but it's learnable. Start with
                fundamentals (networking, Linux), progress systematically, and
                practice hands-on.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                What's the best entry point into security?
              </p>
              <p className="mt-2 text-muted-foreground">
                SOC Analyst or IT with security focus. Security+ certification
                helps. Some transition from helpdesk or system administration.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">Is ethical hacking legal?</p>
              <p className="mt-2 text-muted-foreground">
                Yes, with permission. Only test systems you own or have written
                authorization to test. Bug bounty programs provide legal venues.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="scroll-mt-20">
          <h2 className="flex items-center gap-3">
            <Rocket className="h-6 w-6 text-primary" />
            Conclusion: Defend the Digital World
          </h2>

          <p>
            Cybersecurity offers meaningful, well-compensated work protecting
            organizations and individuals. With a massive talent shortage,
            there's never been a better time to enter the field.
          </p>

          <p>
            Start with fundamentals, get certified, practice on CTF platforms,
            and build your portfolio. The digital world needs defenders, and you
            could be one of them.
          </p>

          <div className="not-prose my-8 rounded-lg bg-primary/10 p-6">
            <h4 className="mb-4 font-bold">Ready to Start?</h4>
            <p className="mb-4 text-sm">
              Explore more security and tech career guides on Sproutern:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog/cloud-computing-career-guide"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                Cloud Security Guide →
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
                Helping students build careers in cybersecurity
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
