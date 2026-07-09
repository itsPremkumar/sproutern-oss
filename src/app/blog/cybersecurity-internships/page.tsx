import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Shield,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Lock,
  Award,
  AlertTriangle,
  TrendingUp,
  Lightbulb,
  Code,
  Server,
  Database,
  Terminal,
  FileSearch,
  Bug,
  Eye,
  Zap,
  GraduationCap,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Internships: Complete Guide',
  description:
    'Break into cybersecurity with this comprehensive guide. Learn about security roles, essential skills, certifications, CTF competitions, interview prep, and complete career paths for cybersecurity internships.',
  keywords: [
    'cybersecurity internship',
    'security analyst internship',
    'ethical hacking',
    'infosec career',
    'penetration testing internship',
    'SOC analyst',
    'cybersecurity jobs',
    'security certifications',
    'CTF competitions',
    'cybersecurity skills',
    'information security',
    'network security',
    'application security',
    'cloud security',
    'CompTIA Security+',
    'CEH certification',
    'cybersecurity career path',
  ],
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tech Deep Dive
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cybersecurity Internships: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            3.5 million unfilled cybersecurity jobs globally. Here's your
            complete roadmap to start your security career and land your first
            cybersecurity internship.
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

        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Massive demand—3.5M unfilled jobs globally with six-figure
                salaries
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Start with networking and Linux fundamentals before diving into
                security tools
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                CTF competitions are the best way to practice and build your
                portfolio
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                CompTIA Security+ is the most valuable entry-level certification
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Build a home lab to practice real-world security scenarios
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Document your journey through blogs and GitHub repositories
              </span>
            </li>
          </ul>
        </div>

        <nav className="not-prose mb-10 rounded-lg border bg-muted/30 p-6">
          <h2 className="mb-4 text-lg font-bold">Table of Contents</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a
                href="#intro"
                className="text-primary hover:underline"
              >
                Why Cybersecurity Now?
              </a>
            </li>
            <li>
              <a
                href="#landscape"
                className="text-primary hover:underline"
              >
                The Cybersecurity Landscape
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="text-primary hover:underline"
              >
                Security Roles Explained
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                Essential Technical Skills
              </a>
            </li>
            <li>
              <a
                href="#soft-skills"
                className="text-primary hover:underline"
              >
                Critical Soft Skills
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="text-primary hover:underline"
              >
                Certifications That Matter
              </a>
            </li>
            <li>
              <a
                href="#learning"
                className="text-primary hover:underline"
              >
                Learning Path & Resources
              </a>
            </li>
            <li>
              <a
                href="#ctf"
                className="text-primary hover:underline"
              >
                CTF Competitions & Practice
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-primary hover:underline"
              >
                Building Your Security Portfolio
              </a>
            </li>
            <li>
              <a
                href="#home-lab"
                className="text-primary hover:underline"
              >
                Setting Up Your Home Lab
              </a>
            </li>
            <li>
              <a
                href="#finding"
                className="text-primary hover:underline"
              >
                Finding Internship Opportunities
              </a>
            </li>
            <li>
              <a
                href="#application"
                className="text-primary hover:underline"
              >
                Application Process
              </a>
            </li>
            <li>
              <a
                href="#interviews"
                className="text-primary hover:underline"
              >
                Interview Preparation
              </a>
            </li>
            <li>
              <a
                href="#mistakes"
                className="text-primary hover:underline"
              >
                Common Mistakes to Avoid
              </a>
            </li>
            <li>
              <a
                href="#salary"
                className="text-primary hover:underline"
              >
                Salary Expectations
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                Frequently Asked Questions
              </a>
            </li>
          </ol>
        </nav>

        <section id="intro">
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            Why Cybersecurity Now?
          </h2>
          <p>
            The cybersecurity industry is experiencing unprecedented growth.
            With digital transformation accelerating across every sector, the
            attack surface for cybercriminals has expanded exponentially. From
            ransomware attacks crippling hospitals to data breaches exposing
            millions of customer records, the cost of inadequate security has
            never been higher.
          </p>
          <p>
            According to Cybersecurity Ventures, cybercrime damages are
            projected to reach $10.5 trillion annually by 2025. Yet the
            cybersecurity workforce gap continues to widen, with 3.5 million
            unfilled positions globally. This creates an extraordinary
            opportunity for aspiring security professionals.
          </p>
          <p>
            Starting your career with a cybersecurity internship gives you
            practical experience, professional connections, and a significant
            competitive advantage. Many organizations now offer structured
            internship programs specifically designed to cultivate the next
            generation of security talent.
          </p>
          <div className="not-prose my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-100">
                  Pro Tip
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  The best time to start was yesterday. The second best time is
                  now. Cybersecurity doesn't require a computer science
                  degree—just curiosity, persistence, and hands-on practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="landscape">
          <h2 className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            The Cybersecurity Landscape
          </h2>
          <p>
            Cybersecurity is a vast field with multiple domains, each requiring
            specialized knowledge and skills. Understanding this landscape helps
            you identify where your interests and strengths align.
          </p>

          <h3>Major Security Domains</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <h4 className="font-bold">Network Security</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Protecting network infrastructure, monitoring traffic,
                implementing firewalls, and preventing intrusions.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <h4 className="font-bold">Application Security</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Securing software applications, code reviews, vulnerability
                testing, and implementing secure development practices.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                <h4 className="font-bold">Data Security</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Protecting sensitive data through encryption, access controls,
                data loss prevention, and compliance management.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <h4 className="font-bold">Security Operations</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                24/7 monitoring, incident response, threat hunting, and security
                orchestration through Security Operations Centers (SOCs).
              </p>
            </div>
          </div>

          <h3>Emerging Specializations</h3>
          <ul>
            <li>
              <strong>Cloud Security:</strong> Securing AWS, Azure, GCP
              infrastructure and services
            </li>
            <li>
              <strong>DevSecOps:</strong> Integrating security into CI/CD
              pipelines
            </li>
            <li>
              <strong>IoT Security:</strong> Protecting connected devices and
              smart systems
            </li>
            <li>
              <strong>AI/ML Security:</strong> Adversarial machine learning and
              AI system protection
            </li>
            <li>
              <strong>Blockchain Security:</strong> Smart contract auditing and
              cryptocurrency security
            </li>
          </ul>
        </section>

        <section id="roles">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Security Roles Explained
          </h2>
          <p>
            Cybersecurity offers diverse career paths. Here are the most common
            entry-level and intern-accessible roles with detailed
            responsibilities:
          </p>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <FileSearch className="h-5 w-5 text-primary" />
                Security Analyst
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                The front-line defender monitoring systems for suspicious
                activity and investigating security incidents.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Key Responsibilities:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Monitor SIEM dashboards for security alerts</li>
                  <li>Investigate and triage security incidents</li>
                  <li>Analyze logs and network traffic</li>
                  <li>Document findings and create incident reports</li>
                  <li>Implement security controls and policies</li>
                </ul>
                <p className="mt-2">
                  <strong>Average Salary:</strong> $55,000 - $75,000 for
                  entry-level
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <Bug className="h-5 w-5 text-primary" />
                Penetration Tester (Ethical Hacker)
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Authorized hackers who find vulnerabilities before malicious
                actors do.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Key Responsibilities:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>
                    Conduct authorized penetration tests on systems and networks
                  </li>
                  <li>Identify and exploit vulnerabilities ethically</li>
                  <li>
                    Create detailed reports with remediation recommendations
                  </li>
                  <li>Stay updated on latest attack techniques and tools</li>
                  <li>Perform web application security assessments</li>
                </ul>
                <p className="mt-2">
                  <strong>Average Salary:</strong> $70,000 - $95,000 for
                  entry-level
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <Lock className="h-5 w-5 text-primary" />
                Security Engineer
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Build and maintain security infrastructure and tools to protect
                organizations.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Key Responsibilities:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Design and implement security solutions</li>
                  <li>Configure firewalls, VPNs, and IDS/IPS systems</li>
                  <li>Automate security processes and tasks</li>
                  <li>Conduct security architecture reviews</li>
                  <li>Develop security standards and best practices</li>
                </ul>
                <p className="mt-2">
                  <strong>Average Salary:</strong> $75,000 - $100,000 for
                  entry-level
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <Eye className="h-5 w-5 text-primary" />
                SOC Analyst (Security Operations Center)
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                24/7 threat monitoring and rapid incident response within a
                Security Operations Center.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Key Responsibilities:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Real-time monitoring of security events</li>
                  <li>Threat detection and analysis</li>
                  <li>Incident escalation and coordination</li>
                  <li>Malware analysis and reverse engineering</li>
                  <li>Collaboration with incident response teams</li>
                </ul>
                <p className="mt-2">
                  <strong>Average Salary:</strong> $50,000 - $70,000 for
                  entry-level
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold">
                <Shield className="h-5 w-5 text-primary" />
                Governance, Risk, and Compliance (GRC) Analyst
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Ensure organizations meet regulatory requirements and manage
                security risks.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Key Responsibilities:</strong>
                </p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Conduct security risk assessments</li>
                  <li>
                    Ensure compliance with regulations (GDPR, HIPAA, PCI-DSS)
                  </li>
                  <li>Develop and maintain security policies</li>
                  <li>Coordinate security audits</li>
                  <li>Create risk management frameworks</li>
                </ul>
                <p className="mt-2">
                  <strong>Average Salary:</strong> $55,000 - $75,000 for
                  entry-level
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2 className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-primary" />
            Essential Technical Skills
          </h2>
          <p>
            Landing a cybersecurity internship requires a solid foundation in
            several technical areas. Here's what you need to know and how to
            learn it:
          </p>

          <h3>1. Networking Fundamentals</h3>
          <p>
            Understanding how data moves across networks is critical for
            identifying and preventing attacks.
          </p>
          <ul>
            <li>
              <strong>TCP/IP Stack:</strong> Learn the OSI model and how
              protocols work at each layer
            </li>
            <li>
              <strong>Common Protocols:</strong> HTTP/HTTPS, DNS, SMTP, FTP,
              SSH, and their security implications
            </li>
            <li>
              <strong>Network Tools:</strong> Wireshark for packet analysis,
              nmap for network scanning
            </li>
            <li>
              <strong>Firewalls & Routing:</strong> Understanding network
              architecture and traffic filtering
            </li>
          </ul>
          <div className="not-prose my-4 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-950">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-semibold text-orange-900 dark:text-orange-100">
                  Learning Resource
                </p>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  Complete the "Network+" course on Professor Messer's YouTube
                  channel. It's free and comprehensive. Then practice with
                  Wireshark on your own network traffic.
                </p>
              </div>
            </div>
          </div>

          <h3>2. Linux System Administration</h3>
          <p>
            Most security tools run on Linux. Proficiency with the command line
            is non-negotiable.
          </p>
          <ul>
            <li>
              <strong>Command Line:</strong> File manipulation, process
              management, system monitoring
            </li>
            <li>
              <strong>Bash Scripting:</strong> Automate tasks and security
              checks
            </li>
            <li>
              <strong>Permissions & Users:</strong> Understanding file
              permissions and user management
            </li>
            <li>
              <strong>Log Analysis:</strong> Reading and analyzing system logs
            </li>
          </ul>

          <h3>3. Programming & Scripting</h3>
          <p>
            You don't need to be a software engineer, but coding skills are
            increasingly important.
          </p>
          <ul>
            <li>
              <strong>Python:</strong> The #1 language for security automation
              and tool development
            </li>
            <li>
              <strong>Bash:</strong> Shell scripting for Linux automation
            </li>
            <li>
              <strong>PowerShell:</strong> Windows security automation
            </li>
            <li>
              <strong>JavaScript:</strong> Understanding web vulnerabilities
              (XSS, CSRF)
            </li>
          </ul>

          <h3>4. Web Application Security</h3>
          <p>
            Most attacks target web applications. Understanding how they work
            and fail is crucial.
          </p>
          <ul>
            <li>
              <strong>OWASP Top 10:</strong> The most critical web application
              security risks
            </li>
            <li>
              <strong>SQL Injection:</strong> How to exploit and prevent
              database attacks
            </li>
            <li>
              <strong>XSS & CSRF:</strong> Client-side attack vectors
            </li>
            <li>
              <strong>Authentication & Authorization:</strong> Common flaws in
              access control
            </li>
          </ul>

          <h3>5. Security Tools Ecosystem</h3>
          <p>
            Familiarity with industry-standard tools demonstrates practical
            experience.
          </p>
          <ul>
            <li>
              <strong>SIEM Platforms:</strong> Splunk, ELK Stack, QRadar
            </li>
            <li>
              <strong>Vulnerability Scanners:</strong> Nessus, OpenVAS, Qualys
            </li>
            <li>
              <strong>Penetration Testing:</strong> Metasploit, Burp Suite, Kali
              Linux
            </li>
            <li>
              <strong>Packet Analysis:</strong> Wireshark, tcpdump
            </li>
            <li>
              <strong>Forensics:</strong> Autopsy, Volatility
            </li>
          </ul>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 p-3 text-left">
                    Skill Category
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Priority
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Time to Learn
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Best Resources
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Networking</td>
                  <td className="border border-gray-300 p-3">🔴 Critical</td>
                  <td className="border border-gray-300 p-3">2-3 months</td>
                  <td className="border border-gray-300 p-3">
                    Professor Messer, Cisco NetAcad
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">Linux</td>
                  <td className="border border-gray-300 p-3">🔴 Critical</td>
                  <td className="border border-gray-300 p-3">2-3 months</td>
                  <td className="border border-gray-300 p-3">
                    Linux Journey, OverTheWire
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Python</td>
                  <td className="border border-gray-300 p-3">🟡 High</td>
                  <td className="border border-gray-300 p-3">1-2 months</td>
                  <td className="border border-gray-300 p-3">
                    Automate the Boring Stuff
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">Web Security</td>
                  <td className="border border-gray-300 p-3">🟡 High</td>
                  <td className="border border-gray-300 p-3">1-2 months</td>
                  <td className="border border-gray-300 p-3">
                    PortSwigger Web Academy
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Security Tools</td>
                  <td className="border border-gray-300 p-3">🟢 Medium</td>
                  <td className="border border-gray-300 p-3">Ongoing</td>
                  <td className="border border-gray-300 p-3">
                    TryHackMe, HackTheBox
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="soft-skills">
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            Critical Soft Skills
          </h2>
          <p>
            Technical skills get you in the door, but soft skills advance your
            career. Cybersecurity professionals must communicate complex issues
            to non-technical stakeholders.
          </p>
          <ul>
            <li>
              <strong>Communication:</strong> Explaining technical
              vulnerabilities to executives, writing clear reports, presenting
              findings
            </li>
            <li>
              <strong>Problem-Solving:</strong> Creative thinking to identify
              and mitigate novel threats
            </li>
            <li>
              <strong>Attention to Detail:</strong> Missing one vulnerability
              can be catastrophic
            </li>
            <li>
              <strong>Continuous Learning:</strong> The threat landscape changes
              daily; staying current is essential
            </li>
            <li>
              <strong>Ethics & Integrity:</strong> Working with sensitive data
              requires absolute trustworthiness
            </li>
            <li>
              <strong>Teamwork:</strong> Security is a team sport requiring
              collaboration across departments
            </li>
          </ul>
        </section>

        <section id="certifications">
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications That Matter
          </h2>
          <p>
            While not always required for internships, certifications validate
            your knowledge and demonstrate commitment to the field.
          </p>

          <h3>Entry-Level Certifications</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-primary">CompTIA Security+</h4>
              <p className="mb-2 text-sm">
                <strong>Cost:</strong> $370 | <strong>Difficulty:</strong>{' '}
                Beginner
              </p>
              <p className="text-sm text-muted-foreground">
                The gold standard entry-level certification. Covers network
                security, threats, cryptography, and risk management. Many
                government and defense contractors require it.
              </p>
              <p className="mt-2 text-sm">
                <strong>Study Time:</strong> 2-3 months with no prior experience
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-primary">
                Certified Ethical Hacker (CEH)
              </h4>
              <p className="mb-2 text-sm">
                <strong>Cost:</strong> $1,199 | <strong>Difficulty:</strong>{' '}
                Intermediate
              </p>
              <p className="text-sm text-muted-foreground">
                Focuses on penetration testing methodologies and tools.
                Recognized globally but criticized for being expensive and
                theoretical.
              </p>
              <p className="mt-2 text-sm">
                <strong>Study Time:</strong> 3-4 months
              </p>
            </div>

            <div className="rounded-lg border bg-card p-5">
              <h4 className="mb-2 font-bold text-primary">
                CompTIA CySA+ (Cybersecurity Analyst)
              </h4>
              <p className="mb-2 text-sm">
                <strong>Cost:</strong> $370 | <strong>Difficulty:</strong>{' '}
                Intermediate
              </p>
              <p className="text-sm text-muted-foreground">
                Focuses on behavioral analytics, threat detection, and incident
                response. Great for aspiring SOC analysts.
              </p>
              <p className="mt-2 text-sm">
                <strong>Study Time:</strong> 2-3 months
              </p>
            </div>
          </div>

          <h3>Advanced Certifications (For Later)</h3>
          <ul>
            <li>
              <strong>OSCP (Offensive Security Certified Professional):</strong>{' '}
              Hands-on penetration testing, highly respected
            </li>
            <li>
              <strong>
                CISSP (Certified Information Systems Security Professional):
              </strong>{' '}
              Management-level, requires 5 years experience
            </li>
            <li>
              <strong>GIAC Certifications:</strong> Specialized certifications
              for specific domains
            </li>
          </ul>

          <div className="not-prose my-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="font-semibold text-yellow-900 dark:text-yellow-100">
                  Important Note
                </p>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  For internship applications, practical skills demonstrated
                  through CTFs and projects often matter more than
                  certifications. Don't delay applications just to get
                  certified.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="learning">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Learning Path & Resources
          </h2>
          <p>
            Here's a structured 6-month roadmap to build cybersecurity skills
            from scratch:
          </p>

          <h3>Month 1-2: Foundation Building</h3>
          <ul>
            <li>
              Complete "Professor Messer's Network+ Course" on YouTube (free)
            </li>
            <li>
              Install Linux (Ubuntu or Kali) and practice command-line basics
              daily
            </li>
            <li>
              Learn Python fundamentals through "Automate the Boring Stuff"
            </li>
            <li>Start OverTheWire Bandit challenges for Linux practice</li>
          </ul>

          <h3>Month 3-4: Security Fundamentals</h3>
          <ul>
            <li>Study for CompTIA Security+ (even if not taking the exam)</li>
            <li>Complete TryHackMe's "Complete Beginner" path</li>
            <li>
              Learn web application basics and complete OWASP Top 10 module
            </li>
            <li>Practice on PicoCTF and CTFlearn</li>
          </ul>

          <h3>Month 5-6: Specialization & Practice</h3>
          <ul>
            <li>
              Choose a focus area (pentesting, SOC analysis, or application
              security)
            </li>
            <li>Complete HackTheBox "Starting Point" machines</li>
            <li>Build a home lab and document it on GitHub</li>
            <li>Write blog posts about what you're learning</li>
            <li>Start applying for internships</li>
          </ul>

          <h3>Top Free Learning Resources</h3>
          <div className="not-prose my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-bold">TryHackMe</h4>
                <p className="text-sm text-muted-foreground">
                  Gamified cybersecurity training with guided paths. Perfect for
                  absolute beginners. Free tier is generous.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Terminal className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-bold">HackTheBox</h4>
                <p className="text-sm text-muted-foreground">
                  Real-world vulnerable machines to practice penetration
                  testing. More challenging than TryHackMe. Free tier available.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Code className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-bold">PortSwigger Web Security Academy</h4>
                <p className="text-sm text-muted-foreground">
                  Completely free, comprehensive web application security
                  training from the creators of Burp Suite.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <h4 className="font-bold">PicoCTF</h4>
                <p className="text-sm text-muted-foreground">
                  Beginner-friendly CTF platform created by Carnegie Mellon
                  University. Always available.
                </p>
              </div>
            </div>
          </div>

          <h3>Recommended YouTube Channels</h3>
          <ul>
            <li>
              <strong>Professor Messer:</strong> CompTIA certification prep
            </li>
            <li>
              <strong>IppSec:</strong> HackTheBox walkthrough videos
            </li>
            <li>
              <strong>John Hammond:</strong> CTF solutions and security concepts
            </li>
            <li>
              <strong>NetworkChuck:</strong> Networking and security tutorials
            </li>
            <li>
              <strong>LiveOverflow:</strong> Advanced security topics and CTF
            </li>
          </ul>
        </section>

        <section id="ctf">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            CTF Competitions & Practice
          </h2>
          <p>
            Capture The Flag (CTF) competitions are the best way to develop
            practical cybersecurity skills. They simulate real-world scenarios
            and teach you to think like an attacker.
          </p>

          <h3>What Are CTFs?</h3>
          <p>
            CTFs are cybersecurity competitions where participants solve
            security-related challenges to find "flags" (secret strings).
            Challenges cover categories like:
          </p>
          <ul>
            <li>
              <strong>Web Exploitation:</strong> Finding and exploiting web
              vulnerabilities
            </li>
            <li>
              <strong>Cryptography:</strong> Breaking encryption and encoding
              schemes
            </li>
            <li>
              <strong>Reverse Engineering:</strong> Analyzing compiled binaries
            </li>
            <li>
              <strong>Forensics:</strong> Investigating files and network
              captures
            </li>
            <li>
              <strong>Binary Exploitation:</strong> Finding and exploiting
              buffer overflows
            </li>
            <li>
              <strong>Steganography:</strong> Finding hidden messages in files
            </li>
          </ul>

          <h3>Beginner-Friendly CTF Platforms</h3>
          <ol>
            <li>
              <strong>PicoCTF:</strong> Permanent beginner-friendly challenges
            </li>
            <li>
              <strong>TryHackMe:</strong> Guided learning with CTF-style rooms
            </li>
            <li>
              <strong>OverTheWire:</strong> War games for learning Linux and
              security
            </li>
            <li>
              <strong>CTFlearn:</strong> Community-created challenges sorted by
              difficulty
            </li>
          </ol>

          <h3>How to Get Started with CTFs</h3>
          <ol>
            <li>Start with PicoCTF's "Picogyms" - sorted by difficulty</li>
            <li>Join a CTF team at your university or find one online</li>
            <li>
              Document your solutions - create write-ups after solving
              challenges
            </li>
            <li>Don't get discouraged - everyone struggles initially</li>
            <li>Learn one new concept from each challenge</li>
          </ol>

          <div className="not-prose my-6 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100">
                  Career Advantage
                </p>
                <p className="text-sm text-green-800 dark:text-green-200">
                  Including CTF rankings (like top 5% on TryHackMe or HackTheBox
                  points) on your resume demonstrates practical skills better
                  than any certification.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="security-tools">
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            Security Tools Deep Dive
          </h2>
          <p>
            Mastering industry-standard security tools is essential for
            internship success. Here's a comprehensive guide to the most
            important tools and how to use them.
          </p>

          <h3>SIEM Platforms (Security Information and Event Management)</h3>
          <p>
            SIEM tools aggregate and analyze log data from across an
            organization's infrastructure to detect security threats in
            real-time.
          </p>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">Splunk</h4>
            <p className="mb-3 text-sm text-muted-foreground">
              The most popular SIEM platform in the enterprise. Free training
              available through Splunk Fundamentals.
            </p>
            <div className="rounded bg-muted p-3">
              <p className="mb-2 text-xs font-semibold">
                Sample Splunk Search Query:
              </p>
              <code className="text-xs">
                index=security sourcetype=firewall action=blocked | stats count
                by src_ip | sort -count | head 10
              </code>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              This query finds the top 10 blocked IP addresses in firewall logs.
            </p>
          </div>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">
              ELK Stack (Elasticsearch, Logstash, Kibana)
            </h4>
            <p className="text-sm text-muted-foreground">
              Open-source alternative to Splunk. Widely used in modern security
              operations. Free to deploy in your own environment.
            </p>
          </div>

          <h3>Vulnerability Scanners</h3>
          <p>
            These tools automatically identify security weaknesses in systems
            and applications.
          </p>

          <div className="not-prose my-4 space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-bold">Nessus</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Industry-standard vulnerability scanner. Free "Nessus
                Essentials" version available for home use (up to 16 IPs).
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Automated vulnerability detection</li>
                <li>• Compliance auditing</li>
                <li>• Network discovery</li>
                <li>• Detailed remediation guidance</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-bold">OpenVAS</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Completely free and open-source vulnerability scanner.{' '}
              </p>
              <ul className="space-y-1 text-sm">
                <li>• 50,000+ vulnerability tests</li>
                <li>• Regularly updated feeds</li>
                <li>• Comprehensive reporting</li>
                <li>• Great for home lab practice</li>
              </ul>
            </div>
          </div>

          <h3>Penetration Testing Tools</h3>
          <p>
            These are the tools ethical hackers use to find and exploit
            vulnerabilities.
          </p>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">
              Metasploit Framework
            </h4>
            <p className="mb-3 text-sm text-muted-foreground">
              The world's most popular penetration testing framework. Included
              by default in Kali Linux.
            </p>
            <div className="rounded bg-muted p-3">
              <p className="mb-2 text-xs font-semibold">
                Basic Metasploit Workflow:
              </p>
              <pre className="overflow-x-auto text-xs">
                {`# Start Metasploit console
msfconsole

# Search for exploits
search ms17-010

# Use an exploit
use exploit/windows/smb/ms17_010_eternalblue

# Show required options
show options

# Set target
set RHOSTS 192.168.1.10

# Run the exploit
exploit`}
              </pre>
            </div>
          </div>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">Burp Suite</h4>
            <p className="mb-3 text-sm text-muted-foreground">
              Essential tool for web application security testing. Free
              "Community Edition" available.
            </p>
            <p className="text-sm">
              <strong>Key Features:</strong>
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Intercept and modify HTTP/HTTPS requests</li>
              <li>• Automated vulnerability scanning (Pro version)</li>
              <li>• Fuzzing and brute-force attacks</li>
              <li>• Session management testing</li>
            </ul>
          </div>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">
              Nmap (Network Mapper)
            </h4>
            <p className="mb-3 text-sm text-muted-foreground">
              The essential network scanning tool. Every security professional
              should master Nmap.
            </p>
            <div className="rounded bg-muted p-3">
              <p className="mb-2 text-xs font-semibold">
                Common Nmap Commands:
              </p>
              <pre className="overflow-x-auto text-xs">
                {`# Basic scan
nmap 192.168.1.1

# Scan with service detection
nmap -sV 192.168.1.1

# Scan with OS detection
nmap -O 192.168.1.1

# Aggressive scan (combines multiple options)
nmap -A 192.168.1.1

# Scan specific ports
nmap -p 80,443,8080 192.168.1.1

# Scan entire subnet
nmap 192.168.1.0/24

# Stealth SYN scan
nmap -sS 192.168.1.1`}
              </pre>
            </div>
          </div>

          <h3>Network Analysis Tools</h3>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">Wireshark</h4>
            <p className="mb-3 text-sm text-muted-foreground">
              The world's foremost network protocol analyzer. Essential for
              understanding how network attacks work.
            </p>
            <div className="rounded bg-muted p-3">
              <p className="mb-2 text-xs font-semibold">
                Useful Wireshark Filters:
              </p>
              <pre className="overflow-x-auto text-xs">
                {`# Filter HTTP traffic
http

# Filter specific IP address
ip.addr == 192.168.1.1

# Filter TCP traffic on port 443
tcp.port == 443

# Follow TCP stream
tcp.stream eq 0

# Find failed login attempts
http.request.method == "POST" && http contains "login"

# Display only SYN packets
tcp.flags.syn == 1 && tcp.flags.ack == 0`}
              </pre>
            </div>
          </div>

          <h3>Password Cracking & Hash Analysis</h3>

          <div className="not-prose my-4 space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-bold">John the Ripper</h4>
              <p className="text-sm text-muted-foreground">
                Fast password cracker for offline password auditing.
              </p>
              <div className="mt-2 rounded bg-muted p-3">
                <code className="text-xs">
                  john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt
                </code>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-2 font-bold">Hashcat</h4>
              <p className="text-sm text-muted-foreground">
                GPU-accelerated password cracking. Extremely fast for
                brute-force attacks.
              </p>
              <div className="mt-2 rounded bg-muted p-3">
                <code className="text-xs">
                  hashcat -m 0 -a 0 hashes.txt wordlist.txt
                </code>
              </div>
            </div>
          </div>

          <h3>Social Engineering & Phishing</h3>

          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <h4 className="mb-3 font-bold text-primary">Gophish</h4>
            <p className="text-sm text-muted-foreground">
              Open-source phishing simulation framework. Organizations use this
              to train employees to recognize phishing attempts. Great for
              understanding social engineering attacks.
            </p>
          </div>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 p-3 text-left">
                    Tool Category
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Free Options
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Paid/Enterprise
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Learning Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">SIEM</td>
                  <td className="border border-gray-300 p-3">
                    ELK Stack, Wazuh
                  </td>
                  <td className="border border-gray-300 p-3">Splunk, QRadar</td>
                  <td className="border border-gray-300 p-3">🔴 High</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">Vuln Scanner</td>
                  <td className="border border-gray-300 p-3">OpenVAS, Nikto</td>
                  <td className="border border-gray-300 p-3">Nessus, Qualys</td>
                  <td className="border border-gray-300 p-3">🔴 High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Web Testing</td>
                  <td className="border border-gray-300 p-3">
                    Burp Community, OWASP ZAP
                  </td>
                  <td className="border border-gray-300 p-3">Burp Pro</td>
                  <td className="border border-gray-300 p-3">🔴 High</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">Network Scan</td>
                  <td className="border border-gray-300 p-3">Nmap, Masscan</td>
                  <td className="border border-gray-300 p-3">N/A</td>
                  <td className="border border-gray-300 p-3">🔴 Critical</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    Packet Analysis
                  </td>
                  <td className="border border-gray-300 p-3">
                    Wireshark, tcpdump
                  </td>
                  <td className="border border-gray-300 p-3">N/A</td>
                  <td className="border border-gray-300 p-3">🔴 Critical</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">Exploitation</td>
                  <td className="border border-gray-300 p-3">
                    Metasploit, ExploitDB
                  </td>
                  <td className="border border-gray-300 p-3">
                    Core Impact, Canvas
                  </td>
                  <td className="border border-gray-300 p-3">🟡 Medium</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Forensics</td>
                  <td className="border border-gray-300 p-3">
                    Autopsy, Volatility
                  </td>
                  <td className="border border-gray-300 p-3">EnCase, FTK</td>
                  <td className="border border-gray-300 p-3">🟢 Low</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="not-prose my-4 rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-semibold text-purple-900 dark:text-purple-100">
                  Hands-On Learning
                </p>
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  Don't just read about tools—use them! Set up a home lab with
                  vulnerable VMs (Metasploitable, DVWA) and practice with each
                  tool. Document your experiments on GitHub to show practical
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="day-in-life">
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />A Day in the Life of a
            Security Intern
          </h2>
          <p>
            Wondering what you'll actually do during a cybersecurity internship?
            Here's a realistic look at different roles:
          </p>

          <h3>SOC Analyst Intern</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="mb-3 text-sm font-semibold">Typical Day:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">9:00 AM:</span>
                <span>
                  Morning briefing - review overnight alerts and ongoing
                  incidents
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">9:30 AM:</span>
                <span>
                  Monitor SIEM dashboard for anomalies and security events
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">10:30 AM:</span>
                <span>
                  Investigate high-priority alert - potential phishing email
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">12:00 PM:</span>
                <span>
                  Document findings and escalate confirmed threat to senior
                  analyst
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">1:00 PM:</span>
                <span>Lunch and learning - read latest security bulletins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">2:00 PM:</span>
                <span>Tune SIEM rules to reduce false positives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">3:30 PM:</span>
                <span>Participate in incident response tabletop exercise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">4:30 PM:</span>
                <span>
                  Update ticket system and prepare incident summary report
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">5:30 PM:</span>
                <span>Handoff to evening shift team</span>
              </li>
            </ul>
          </div>

          <h3>Penetration Testing Intern</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="mb-3 text-sm font-semibold">Typical Day:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">9:00 AM:</span>
                <span>
                  Review scope of work for new penetration test engagement
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">10:00 AM:</span>
                <span>
                  Reconnaissance - gather information on target systems
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">11:00 AM:</span>
                <span>Run automated vulnerability scans with Nessus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">1:00 PM:</span>
                <span>
                  Manual testing - attempt SQL injection on web application
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">3:00 PM:</span>
                <span>
                  Successfully exploit vulnerability (in authorized test
                  environment!)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">4:00 PM:</span>
                <span>
                  Document findings with screenshots and proof of concept
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">5:00 PM:</span>
                <span>Begin drafting penetration test report</span>
              </li>
            </ul>
          </div>

          <h3>Application Security Intern</h3>
          <div className="not-prose my-4 rounded-lg border bg-card p-5">
            <p className="mb-3 text-sm font-semibold">Typical Day:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">9:30 AM:</span>
                <span>Stand-up meeting with development team</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">10:00 AM:</span>
                <span>Security code review of pull request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">11:30 AM:</span>
                <span>Configure static analysis tools (SonarQube, Bandit)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">1:00 PM:</span>
                <span>
                  Pair programming session - implementing input validation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">3:00 PM:</span>
                <span>
                  Research new vulnerabilities (CVEs) affecting our tech stack
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">4:00 PM:</span>
                <span>Create security training material for developers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-primary">5:00 PM:</span>
                <span>Update security documentation and threat models</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="portfolio">
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Building Your Security Portfolio
          </h2>
          <p>
            A strong portfolio differentiates you from other candidates. Here's
            how to build one:
          </p>

          <h3>Essential Portfolio Components</h3>
          <ol>
            <li>
              <strong>GitHub Repository:</strong> Document your learning
              journey, share scripts, host CTF write-ups
            </li>
            <li>
              <strong>Blog:</strong> Write about security concepts you're
              learning, tools you're exploring, or challenges you've solved
            </li>
            <li>
              <strong>Home Lab Documentation:</strong> Show your practical setup
              and experiments
            </li>
            <li>
              <strong>CTF Write-ups:</strong> Document your approach to solving
              challenges
            </li>
            <li>
              <strong>Bug Bounty Participation:</strong> Even if you don't find
              bugs, trying shows initiative
            </li>
            <li>
              <strong>Security Projects:</strong> Build a vulnerability scanner,
              create a honeypot, develop a security tool
            </li>
          </ol>

          <h3>Project Ideas for Your Portfolio</h3>
          <ul>
            <li>Build a password strength analyzer with Python</li>
            <li>Create a network packet sniffer</li>
            <li>Develop a simple intrusion detection system</li>
            <li>Set up a honeypot and analyze attacks</li>
            <li>Perform a security audit on your own website</li>
            <li>Create a phishing awareness training module</li>
            <li>Build a log analyzer for security events</li>
          </ul>
        </section>

        <section id="home-lab">
          <h2 className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            Setting Up Your Home Lab
          </h2>
          <p>
            A home lab allows you to practice security concepts safely and
            legally. You don't need expensive equipment—a decent computer is
            enough.
          </p>

          <h3>Basic Home Lab Setup</h3>
          <ol>
            <li>
              <strong>Hypervisor:</strong> Install VirtualBox or VMware (both
              free)
            </li>
            <li>
              <strong>Kali Linux VM:</strong> Your primary penetration testing
              platform
            </li>
            <li>
              <strong>Vulnerable VMs:</strong> Download Metasploitable, DVWA, or
              VulnHub images
            </li>
            <li>
              <strong>Windows VM:</strong> Practice Windows security and Active
              Directory
            </li>
            <li>
              <strong>Monitoring Tools:</strong> Set up Splunk or ELK stack for
              log analysis
            </li>
          </ol>

          <h3>What to Practice in Your Lab</h3>
          <ul>
            <li>Network scanning with nmap</li>
            <li>Vulnerability scanning with Nessus or OpenVAS</li>
            <li>Web application testing on DVWA</li>
            <li>Privilege escalation techniques</li>
            <li>Network traffic analysis with Wireshark</li>
            <li>Malware analysis in isolated VMs</li>
          </ul>

          <div className="not-prose my-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-950">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-semibold text-red-900 dark:text-red-100">
                  Legal Warning
                </p>
                <p className="text-sm text-red-800 dark:text-red-200">
                  ONLY practice on systems you own or have explicit permission
                  to test. Unauthorized testing is illegal and can result in
                  criminal charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="finding">
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Finding Internship Opportunities
          </h2>
          <p>
            Cybersecurity internships are available across various industries
            and company sizes.
          </p>

          <h3>Where to Look</h3>
          <ul>
            <li>
              <strong>Sproutern:</strong> Curated internships from Indian
              startups
            </li>
            <li>
              <strong>LinkedIn Jobs:</strong> Filter for "cybersecurity intern"
              or "security analyst intern"
            </li>
            <li>
              <strong>Indeed & Glassdoor:</strong> Large databases of internship
              postings
            </li>
            <li>
              <strong>Company Career Pages:</strong> Directly check tech
              companies, banks, and consultancies
            </li>
            <li>
              <strong>Government Programs:</strong> NSA, FBI, and CISA offer
              cybersecurity internships
            </li>
            <li>
              <strong>University Career Centers:</strong> Many companies recruit
              exclusively through universities
            </li>
          </ul>

          <h3>Top Companies Hiring Security Interns</h3>
          <div className="not-prose my-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded border bg-card p-3">
              <p className="text-sm font-semibold">Tech Giants</p>
              <p className="text-xs text-muted-foreground">
                Google, Microsoft, Amazon, Meta, Apple
              </p>
            </div>
            <div className="rounded border bg-card p-3">
              <p className="text-sm font-semibold">Financial Services</p>
              <p className="text-xs text-muted-foreground">
                JPMorgan, Goldman Sachs, Capital One
              </p>
            </div>
            <div className="rounded border bg-card p-3">
              <p className="text-sm font-semibold">Security Vendors</p>
              <p className="text-xs text-muted-foreground">
                Palo Alto, CrowdStrike, Rapid7
              </p>
            </div>
            <div className="rounded border bg-card p-3">
              <p className="text-sm font-semibold">Consulting</p>
              <p className="text-xs text-muted-foreground">
                Deloitte, PwC, EY, KPMG
              </p>
            </div>
          </div>

          <h3>Application Timeline</h3>
          <p>
            Many companies recruit on a rolling basis, but large organizations
            follow schedules:
          </p>
          <ul>
            <li>
              <strong>September - November:</strong> Summer internship
              applications open
            </li>
            <li>
              <strong>January - February:</strong> Final wave of summer
              positions
            </li>
            <li>
              <strong>Year-round:</strong> Startups and mid-size companies
            </li>
          </ul>
        </section>

        <section id="application">
          <h2 className="flex items-center gap-3">
            <FileSearch className="h-6 w-6 text-primary" />
            Application Process
          </h2>
          <p>
            Your application materials need to demonstrate both technical
            competence and genuine interest in cybersecurity.
          </p>

          <h3>Resume Essentials</h3>
          <ul>
            <li>
              <strong>Skills Section:</strong> List specific tools and
              technologies
            </li>
            <li>
              <strong>Projects:</strong> Highlight security-related projects
              with GitHub links
            </li>
            <li>
              <strong>CTF Achievements:</strong> Include rankings and notable
              solves
            </li>
            <li>
              <strong>Certifications:</strong> Security+, CEH, or even
              in-progress certifications
            </li>
            <li>
              <strong>Relevant Coursework:</strong> Computer networks,
              cryptography, security principles
            </li>
          </ul>

          <h3>Cover Letter Strategy</h3>
          <ol>
            <li>Show you understand the company's security challenges</li>
            <li>
              Demonstrate genuine passion through specific examples (CTFs,
              personal projects)
            </li>
            <li>Connect your skills to their job requirements</li>
            <li>Keep it concise—under one page</li>
          </ol>

          <h3>Common Application Mistakes</h3>
          <ul>
            <li>Generic resumes not tailored to cybersecurity</li>
            <li>
              Listing skills without evidence (no projects or certifications)
            </li>
            <li>Typos and poor formatting</li>
            <li>Not including portfolio or GitHub links</li>
            <li>Applying without basic understanding of the role</li>
          </ul>
        </section>

        <section id="interviews">
          <h2 className="flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" />
            Interview Preparation
          </h2>
          <p>
            Cybersecurity interviews typically include technical questions,
            practical exercises, and behavioral questions.
          </p>

          <h3>Technical Interview Topics</h3>
          <ul>
            <li>OSI model and networking fundamentals</li>
            <li>
              Common vulnerabilities (SQL injection, XSS, buffer overflow)
            </li>
            <li>Cryptography basics (symmetric vs asymmetric, hashing)</li>
            <li>Incident response procedures</li>
            <li>Security tools and their use cases</li>
            <li>Linux commands and scripting</li>
          </ul>

          <h3>Sample Interview Questions</h3>
          <ol>
            <li>"Explain what happens when you type a URL into a browser."</li>
            <li>"What's the difference between encryption and hashing?"</li>
            <li>
              "How would you detect and respond to a potential data breach?"
            </li>
            <li>
              "Describe the OWASP Top 10. Pick one and explain it in detail."
            </li>
            <li>"What is the CIA triad in information security?"</li>
            <li>"How does a SQL injection attack work?"</li>
            <li>"Explain the difference between IDS and IPS."</li>
          </ol>

          <h3>Practical Exercises You Might Face</h3>
          <ul>
            <li>Analyzing a packet capture file</li>
            <li>Identifying vulnerabilities in sample code</li>
            <li>
              Walking through your approach to penetration testing a system
            </li>
            <li>Explaining how you'd investigate on a security log</li>
          </ul>

          <h3>Behavioral Questions</h3>
          <p>Use the STAR method to structure answers about:</p>
          <ul>
            <li>Times you solved a difficult technical problem</li>
            <li>How you handle learning new technologies quickly</li>
            <li>Examples of attention to detail</li>
            <li>Experiences working on teams</li>
            <li>How you stay current with security trends</li>
          </ul>
        </section>

        <section id="mistakes">
          <h2 className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Common Mistakes to Avoid
          </h2>
          <ul>
            <li>
              <strong>Waiting until you feel "ready":</strong> Start applying
              once you have basic networking and Linux knowledge
            </li>
            <li>
              <strong>Only focusing on certifications:</strong> Practical skills
              matter more for internships
            </li>
            <li>
              <strong>Not networking:</strong> Attend security conferences, join
              online communities, connect with practitioners
            </li>
            <li>
              <strong>Ignoring fundamentals:</strong> Don't jump straight to
              advanced topics without understanding networking and systems
            </li>
            <li>
              <strong>Not documenting your work:</strong> Keep CTF write-ups and
              project documentation
            </li>
            <li>
              <strong>Giving up after rejections:</strong> Persistence is
              key—even one internship can launch your career
            </li>
          </ul>
        </section>

        <section id="salary">
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            Salary Expectations
          </h2>
          <p>
            Cybersecurity internships are among the highest-paying internships
            available.
          </p>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 p-3 text-left">
                    Company Type
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Monthly Salary (INR)
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    Hourly (US)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">FAANG/Big Tech</td>
                  <td className="border border-gray-300 p-3">
                    ₹80,000 - ₹1,50,000
                  </td>
                  <td className="border border-gray-300 p-3">$35-55/hr</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">
                    Financial Services
                  </td>
                  <td className="border border-gray-300 p-3">
                    ₹60,000 - ₹1,00,000
                  </td>
                  <td className="border border-gray-300 p-3">$28-45/hr</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    Security Vendors
                  </td>
                  <td className="border border-gray-300 p-3">
                    ₹50,000 - ₹80,000
                  </td>
                  <td className="border border-gray-300 p-3">$25-40/hr</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-gray-300 p-3">Startups</td>
                  <td className="border border-gray-300 p-3">
                    ₹30,000 - ₹60,000
                  </td>
                  <td className="border border-gray-300 p-3">$18-30/hr</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    Government/Non-Profit
                  </td>
                  <td className="border border-gray-300 p-3">
                    ₹20,000 - ₹40,000
                  </td>
                  <td className="border border-gray-300 p-3">$15-25/hr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Full-time entry-level cybersecurity positions typically start at
            ₹6-12 LPA in India or $60,000-90,000 in the US, making it one of the
            most lucrative career paths.
          </p>
        </section>

        <section id="faq">
          <h2>Frequently Asked Questions</h2>

          <h3>
            Do I need a degree in computer science for a cybersecurity
            internship?
          </h3>
          <p>
            No. While helpful, many successful security professionals come from
            diverse backgrounds. Demonstrated skills through CTFs, projects, and
            certifications matter more than your degree.
          </p>

          <h3>
            Can I get a cybersecurity internship with no prior experience?
          </h3>
          <p>
            Yes, but you need to demonstrate initiative. Complete TryHackMe
            paths, solve CTF challenges, build a home lab, and document
            everything. This shows you're self-motivated and capable.
          </p>

          <h3>How long does it take to become "ready" for an internship?</h3>
          <p>
            With focused study, 3-6 months is realistic. Spend the first 2
            months on fundamentals (networking, Linux, Python), then 2-4 months
            on security-specific skills and practice.
          </p>

          <h3>Are cybersecurity bootcamps worth it?</h3>
          <p>
            It depends. Some bootcamps provide structured learning and job
            placement assistance. However, most skills can be learned for free
            through online resources. Evaluate carefully based on curriculum,
            outcomes, and cost.
          </p>

          <h3>What's more important: breadth or depth?</h3>
          <p>
            For internships, breadth is initially more important. Understand the
            fundamentals across multiple domains before specializing. Depth can
            come during and after your internship.
          </p>

          <h3>
            Should I specialize in offensive (red team) or defensive (blue team)
            security?
          </h3>
          <p>
            Don't limit yourself early. Learn both perspectives—understanding
            how attacks work makes you a better defender, and vice versa. Many
            roles (purple team) require both skillsets.
          </p>

          <h3>How important is networking in landing an internship?</h3>
          <p>
            Very important. Attend conferences (BSides, DEFCON, etc.), join
            Discord servers, engage on LinkedIn, and participate in local
            security meetups. Many internships are filled through referrals.
          </p>

          <h3>What if I can't afford paid certifications?</h3>
          <p>
            Focus on free resources and practical demonstrations. TryHackMe,
            HackTheBox, and CTF participation cost nothing and prove your
            skills. Study using free Security+ materials even if you don't take
            the exam.
          </p>

          <h3>How do I explain gaps in my resume?</h3>
          <p>
            Fill them with self-directed learning. "Completed 100+ TryHackMe
            rooms and ranked in top 10%" or "Built a home lab and documented
            security experiments on GitHub" are impressive gap-fillers.
          </p>

          <h3>
            Can international students get cybersecurity internships in the US?
          </h3>
          <p>
            Yes, but it's challenging. Many security positions require
            citizenship or clearance. Focus on commercial tech companies and
            startups rather than defense contractors or government agencies.
          </p>
        </section>

        <section>
          <h2>Defend the Digital World</h2>
          <p>
            Cybersecurity is one of the most critical and rewarding career paths
            available today. The demand is real, the work is challenging, and
            the impact is meaningful. Every organization—from startups to
            governments—needs skilled defenders.
          </p>
          <p>
            Start with the fundamentals, practice on CTFs, build your home lab,
            and document your journey. Don't wait until you feel "ready"—apply
            to internships while you're still learning. The field needs
            passionate people who are willing to learn and adapt.
          </p>
          <p className="text-lg font-semibold text-primary">
            Every organization needs defenders. Be one. 🛡️
          </p>
        </section>

        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/cloud-computing-beginners"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Cloud Computing for Beginners
            </Link>
            <Link
              href="/blog/software-development-internships-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Software Development Internships
            </Link>
            <Link
              href="/blog/mastering-star-method"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              STAR Method for Interviews
            </Link>
            <Link
              href="/blog/how-to-write-a-resume-that-beats-ats"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Write an ATS-Beating Resume
            </Link>
          </div>
        </div>

        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
