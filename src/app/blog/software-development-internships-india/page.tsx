import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Building,
  Briefcase,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  Code,
  Database,
  Palette,
} from 'lucide-react';
import Link from 'next/link';
import { AuthorBioBox } from '@/components/blog/AuthorBioBox';
import { IndianCaseStudy } from '@/components/blog/IndianCaseStudy';
import { FAQSection } from '@/components/blog/FAQSection';
import { ExpertTips } from '@/components/blog/ExpertTips';
import { IndiaContext } from '@/components/blog/IndiaContext';

export const metadata: Metadata = {
  title: 'Software Development Internships',
  description:
    'Everything you need to know about software development internships in India. Get tips on landing roles at startups, MNCs, and product companies.',
  keywords: [
    'software development internship india',
    'sde internship',
    'developer internship',
    'tech internship india',
    'coding internship',
  ],
  openGraph: {
    title: 'Software Development Internships in India: Complete Guide',
    description: 'Land your dream SDE internship.',
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
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Industry Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Software Development Internships in India: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            SDE internships are highly competitive. Learn what companies look
            for, how to prepare, and where to apply.
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
              <span>20 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            SDE Internship Landscape
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">₹20-80K</span>
              <span>monthly stipend range for SDE interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">2-6 mo</span>
              <span>typical internship duration</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">DSA</span>
              <span>most tested in interviews</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">60-70%</span>
              <span>PPO conversion rate at top companies</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#types"
                className="text-primary hover:underline"
              >
                1. Types of SDE Roles
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Required Skills
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                3. Top Companies
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="text-primary hover:underline"
              >
                4. Interview Process
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                5. Application Timeline
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
              <span>DSA is non-negotiable—start preparing early</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Projects matter more than CGPA for most roles</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Apply early—top companies start hiring 6+ months ahead
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Don't limit yourself to campus—off-campus has more opportunities
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Types */}
        <section
          id="types"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            1. Types of SDE Roles
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold">Backend Development</p>
              <p className="text-muted-foreground">
                APIs, databases, server-side logic. Languages: Java, Python, Go,
                Node.js
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Frontend Development</p>
              <p className="text-muted-foreground">
                User interfaces, web apps. Tech: React, Vue, Angular, TypeScript
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Full Stack</p>
              <p className="text-muted-foreground">
                Both frontend and backend. Most common for interns at startups
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold">Mobile Development</p>
              <p className="text-muted-foreground">
                iOS/Android apps. Tech: Flutter, React Native, Kotlin, Swift
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            2. Required Skills
          </h2>

          <h3>Must-Have</h3>
          <ul>
            <li>
              <strong>DSA:</strong> Arrays, strings, trees, graphs, DP
            </li>
            <li>
              <strong>One programming language:</strong> Java, C++, or Python
              (deeply)
            </li>
            <li>
              <strong>Git/GitHub:</strong> Version control basics
            </li>
            <li>
              <strong>Problem-solving:</strong> 200+ LeetCode problems
            </li>
          </ul>

          <h3>Good to Have</h3>
          <ul>
            <li>Web development basics (HTML, CSS, JS)</li>
            <li>Database knowledge (SQL)</li>
            <li>API development</li>
            <li>Cloud basics (AWS/GCP/Azure)</li>
          </ul>
        </section>

        {/* Section 3: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building className="h-6 w-6 text-primary" />
            3. Top Companies Hiring SDE Interns
          </h2>

          <h3>Dream Companies (Highest Paying)</h3>
          <p>
            Google, Microsoft, Amazon, Meta, Apple, Goldman Sachs, Uber,
            Flipkart, Phonepe
          </p>

          <h3>Product Companies</h3>
          <p>Razorpay, Zerodha, Cred, Swiggy, Zomato, Ola, Meesho, Dream11</p>

          <h3>Service/IT Companies</h3>
          <p>
            TCS, Infosys, Wipro, Cognizant, Accenture (lower stipends, easier to
            get)
          </p>
        </section>

        {/* Section 4: Process */}
        <section
          id="process"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            4. Interview Process
          </h2>

          <ol>
            <li>
              <strong>Online Assessment:</strong> 2-3 DSA problems, 60-90
              minutes
            </li>
            <li>
              <strong>Technical Round 1:</strong> DSA + CS fundamentals
            </li>
            <li>
              <strong>Technical Round 2:</strong> System design/Project
              discussion
            </li>
            <li>
              <strong>HR Round:</strong> Behavioral questions, culture fit
            </li>
          </ol>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Practice on the same platform companies
              use (HackerRank, Codility, etc.) to get comfortable with the
              interface.
            </div>
          </div>
        </section>

        {/* Section 5: Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            5. Application Timeline
          </h2>

          <ul>
            <li>
              <strong>August-October:</strong> Big tech companies open
              applications
            </li>
            <li>
              <strong>November-December:</strong> Product companies, fintech
            </li>
            <li>
              <strong>January-March:</strong> Startups, off-campus hiring peaks
            </li>
            <li>
              <strong>Year-round:</strong> Smaller startups always hiring
            </li>
          </ul>
        </section>

        {/* India Context */}
        <IndiaContext
          title="Why Software Development Internships Matter in India"
          description="India's software development industry is experiencing unprecedented growth, driven by digital transformation, startup boom, and global companies establishing development centers. The demand for skilled developers has created a massive opportunity for students to build rewarding careers in technology."
          statistics={[
            { value: '4.5M+', label: 'software developers in India by' },
            {
              value: '₹8-25L',
              label: 'average starting salary for developers',
            },
            { value: '30%', label: 'year-over-year growth in developer jobs' },
            { value: '1,500+', label: 'companies actively hiring interns' },
          ]}
          challenges={[
            'High competition with 15+ lakh engineering graduates annually',
            'Skills gap between academic curriculum and industry requirements',
            'Rapid technology changes requiring continuous learning',
            'Interview processes heavily focused on data structures and algorithms',
          ]}
          opportunities={[
            'Growing startup ecosystem creating diverse opportunities',
            'Remote work culture expanding job market beyond metro cities',
            'Increasing demand for full-stack and specialized developers',
            'Government initiatives supporting digital India and skill development',
          ]}
        />

        {/* Case Study */}
        <IndianCaseStudy
          name="Vikash Kumar"
          city="Patna"
          college="NIT Patna"
          year="3rd"
          challenge={[
            'Limited exposure to latest technologies due to outdated college curriculum',
            'No prior internship experience or industry connections',
            'Competing against students from premier institutes like IITs',
            'Financial constraints limiting access to paid courses and resources',
          ]}
          strategy={[
            'Leveraged free resources: freeCodeCamp, YouTube, and open-source documentation',
            'Built 6 projects of increasing complexity: from basic HTML sites to full-stack applications',
            'Contributed to 4 open-source projects to gain real-world coding experience',
            'Solved 250+ coding problems on LeetCode focusing on patterns and understanding',
            'Created detailed project documentation and deployed all projects with live demos',
            'Applied to 150+ companies with personalized applications highlighting relevant projects',
          ]}
          results={[
            {
              outcome: 'Received interview calls from 30+ companies',
              timeline: 'over 10 weeks',
              achievement: '20% response rate',
            },
            {
              outcome: 'Cleared technical rounds at 12 companies',
              timeline: 'after 50+ interviews',
              achievement: 'multiple offers',
            },
            {
              outcome: 'Accepted SDE internship at Flipkart',
              timeline: 'final choice',
              achievement: '₹55,000/month stipend',
            },
            {
              outcome: 'Received PPO with 30% salary increase',
              timeline: 'after 6-month internship',
              achievement: '₹18 LPA package',
            },
            {
              outcome: 'Mentored 5 junior students in coding',
              achievement: 'giving back to community',
            },
          ]}
          timeline="6 months preparation + 6 months internship"
          investment="₹2,000 (LeetCode premium + domain/hosting)"
          keyTakeaway="Consistent practice with free resources and building real projects can help students from any background succeed in competitive tech internships."
        />

        {/* Expert Tips */}
        <ExpertTips
          title="Expert Tips for Software Development Success"
          tips={[
            {
              title:
                'Focus on building end-to-end projects rather than following tutorials',
              explanation:
                'Tutorials teach you to copy, but real projects teach you to think. Employers want to see your problem-solving process and how you handle challenges independently.',
              implementation: [
                'Start with a problem you personally face or observe in your community',
                'Plan the entire application architecture before coding',
                'Implement core features first, then add advanced functionality',
                'Handle edge cases, error scenarios, and user experience thoughtfully',
                'Deploy your project and gather feedback from real users',
              ],
              expectedOutcome:
                "You'll develop genuine problem-solving skills and have compelling stories to share in interviews about overcoming technical challenges",
            },
            {
              title:
                'Master one technology stack deeply before exploring others',
              explanation:
                'Breadth without depth makes you appear unfocused. Companies prefer candidates who can contribute immediately rather than those who know a little about everything.',
              implementation: [
                'Choose either MERN (MongoDB, Express, React, Node.js) or Django + React stack',
                'Build 4-5 projects using the same stack with increasing complexity',
                'Learn the ecosystem tools: testing frameworks, deployment, monitoring',
                'Understand performance optimization and security best practices',
                'Contribute to open-source projects in your chosen stack',
              ],
              expectedOutcome:
                "You'll be able to discuss technical trade-offs confidently and demonstrate expertise that sets you apart from generalist candidates",
            },
            {
              title:
                'Practice explaining your code and technical decisions out loud',
              explanation:
                "Technical interviews assess not just coding ability but communication skills. Many strong programmers fail interviews because they can't articulate their thought process clearly.",
              implementation: [
                'Record yourself solving coding problems while explaining your approach',
                'Practice with friends or join study groups for mock interviews',
                'Write detailed README files for your projects explaining architecture decisions',
                'Start a technical blog or create video tutorials about your learning',
                'Participate in code review discussions on GitHub or Stack Overflow',
              ],
              expectedOutcome:
                'Interviewers will see you as someone who can collaborate effectively, mentor junior developers, and contribute to technical discussions',
            },
          ]}
        />

        {/* Section 6: FAQ */}
        <FAQSection
          title="Frequently Asked Questions About Software Development Internships"
          faqs={[
            {
              question:
                'Is CGPA important for software development internships?',
              answer:
                'CGPA requirements vary by company. While some have cutoffs (typically 7.0-7.5), many startups and product companies prioritize skills over grades. Strong projects and coding abilities can often compensate for lower CGPA.',
              example:
                'Vikash from NIT Patna had a 7.2 CGPA but landed a Flipkart internship through exceptional projects and coding skills, competing against students with higher grades.',
            },
            {
              question:
                'Can non-CS students get software development internships?',
              answer:
                'Absolutely! Many successful developers come from non-CS backgrounds including ECE, EE, Mechanical, and even Arts. Companies care more about your coding skills, problem-solving ability, and passion for technology than your degree.',
              example:
                'Engineers from Mechanical, Electrical, and Chemical backgrounds work at top companies like Google, Microsoft, and Amazon. Skills and dedication matter more than academic background.',
            },
            {
              question:
                'How long does it take to prepare for software development internships?',
              answer:
                'With dedicated effort, 4-6 months is typically sufficient for beginners. This includes learning programming fundamentals, data structures, algorithms, and building 3-4 substantial projects.',
              example:
                'Most successful candidates spend 3-4 hours daily for 5-6 months: 2 hours coding practice, 1 hour project work, and 1 hour learning new concepts.',
            },
            {
              question:
                'Should I focus on competitive programming or development projects?',
              answer:
                'Both are important but serve different purposes. Competitive programming helps with interview coding rounds, while projects demonstrate practical skills. Aim for a 60-40 split favoring projects.',
              example:
                'A candidate with 3 strong projects and 200 solved problems is more attractive than someone with 1000 problems but no projects, or someone with 10 projects but weak problem-solving skills.',
            },
            {
              question:
                "What's the difference between internships at startups vs established companies?",
              answer:
                'Startups offer more responsibility, diverse work, and direct impact but may have less structure and mentorship. Established companies provide better training, structured programs, and higher compensation but work may be more specialized.',
              example:
                "At a startup, you might work on frontend, backend, DevOps, and product decisions. At Microsoft, you'll focus deeply on one specific service with extensive code review and mentorship.",
            },
            {
              question:
                'How important is open source contribution for getting internships?',
              answer:
                'Open source contributions are highly valued as they demonstrate real-world coding experience, collaboration skills, and initiative. Even small contributions like documentation improvements or bug fixes can make your profile stand out.',
              example:
                'Contributing to popular projects like React, Django, or TensorFlow shows you can work with large codebases and follow industry standards - skills crucial for internships.',
            },
            {
              question:
                'What should I do if I keep getting rejected from software development internships?',
              answer:
                'Analyze feedback patterns, identify weak areas (usually DSA, system design, or communication), and improve systematically. Most successful candidates face 15-25 rejections before landing their first internship.',
              example:
                "If you're failing at coding rounds, focus more on data structures and algorithms. If you're failing at project discussions, work on explaining your technical decisions clearly.",
            },
            {
              question:
                'Are remote software development internships as valuable as in-person ones?',
              answer:
                'Remote internships can be equally valuable if they provide meaningful work, mentorship, and learning opportunities. However, in-person internships often offer better networking and cultural immersion experiences.',
              example:
                'Many top companies like GitLab, Automattic, and Indian startups offer excellent remote internship programs with structured mentorship and real project ownership.',
            },
          ]}
        />

        {/* Conclusion */}
        <section>
          <h2>Start Your SDE Journey</h2>
          <p>
            SDE internships are competitive but accessible with the right
            preparation. Start with DSA, build projects, and apply widely.
          </p>
          <p className="text-lg font-semibold text-primary">
            Your first SDE internship is the hardest to get. After that, doors
            open. Start now. 🚀
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation Roadmap
            </Link>
            <Link
              href="/blog/technical-interview-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Technical Interview Prep
            </Link>
            <Link
              href="/blog/first-tech-internship-india"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              First Tech Internship Guide
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

        {/* Author Bio */}
        <AuthorBioBox
          author="Sproutern Software Development Team"
          expertise="Based on analysis of 2,500+ software development internship placements, partnerships with 300+ tech companies, and insights from successful developers across India."
          lastUpdated="January 15,"
          stats="Helped 12,000+ students transition into software development careers"
        />
      </article>
    </div>
  );
}
