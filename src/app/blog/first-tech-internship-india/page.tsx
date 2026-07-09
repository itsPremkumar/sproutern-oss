import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Code,
  Briefcase,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Laptop,
  Building2,
  GraduationCap,
  MapPin,
  IndianRupee,
  FileText,
  MessageSquare,
  Star,
  Zap,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';
import { AuthorBioBox } from '@/components/blog/AuthorBioBox';
import { IndianCaseStudy } from '@/components/blog/IndianCaseStudy';
import { FAQSection } from '@/components/blog/FAQSection';
import { ExpertTips } from '@/components/blog/ExpertTips';
import { CommonMistakes } from '@/components/blog/CommonMistakes';
import { ActionChecklist } from '@/components/blog/ActionChecklist';
import { IndiaContext } from '@/components/blog/IndiaContext';

export const metadata: Metadata = {
  title: 'How to Get Your First Tech Internship',
  description:
    'Step-by-step guide on landing your first tech internship in India. Learn about required skills, top companies, application strategies, and interview tips.',
  keywords: [
    'tech internship India',
    'first internship',
    'software engineering internship',
    'IT internship India',
    'fresher internship',
    'coding internship',
  ],
  openGraph: {
    title: 'How to Get Your First Tech Internship in India: Complete Guide',
    description:
      'Master the complete roadmap to landing your first tech internship in India.',
    type: 'article',
    publishedTime: '2024-12-01T00:00:00Z',
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
              Career Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            How to Get Your First Tech Internship in India: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Everything you need to know about landing your first tech internship
            in Indiaâ€”from building skills to cracking interviews at top
            companies.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>December 1, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            India's Tech Internship Landscape
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">5.4M+</span>
              <span>tech jobs expected in India</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">â‚¹15-40K</span>
              <span>average monthly stipend for tech interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">72%</span>
              <span>of tech interns receive PPO offers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">1,200+</span>
              <span>startups actively hiring interns</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">ðŸ“‹ What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#landscape"
                className="text-primary hover:underline"
              >
                1. Tech Internship Landscape
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Essential Skills You Need
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-primary hover:underline"
              >
                3. Top Companies Hiring
              </a>
            </li>
            <li>
              <a
                href="#finding"
                className="text-primary hover:underline"
              >
                4. Finding Opportunities
              </a>
            </li>
            <li>
              <a
                href="#application"
                className="text-primary hover:underline"
              >
                5. Crafting Applications
              </a>
            </li>
            <li>
              <a
                href="#interviews"
                className="text-primary hover:underline"
              >
                6. Cracking Interviews
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-primary hover:underline"
              >
                7. Preparation Timeline
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
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Start preparing 6 months before your target internship date
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>Focus on DSAâ€”90% of tech interviews test this</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Build 2-3 solid projects that demonstrate problem-solving
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Apply to both MNCs and startups for diverse opportunities
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                Tier-2/3 college students can land top internships with right
                preparation
              </span>
            </li>
          </ul>
        </div>

        {/* India Context */}
        <IndiaContext
          description="The Indian tech ecosystem is experiencing unprecedented growth. With over 5.4 million tech jobs expected in the near future and the rise of unicorn startups, opportunities have never been better. However, competition is fierce, and students need strategic preparation to stand out. The key is understanding what companies actually look for and preparing accordingly."
          statistics={[
            {
              value: '5.4M+',
              label: 'tech jobs expected',
              icon: <Building2 className="h-5 w-5" />,
            },
            {
              value: 'â‚¹15-40K',
              label: 'average monthly stipend range',
              icon: <IndianRupee className="h-5 w-5" />,
            },
            {
              value: '72%',
              label: 'of tech interns get PPO offers',
              icon: <TrendingUp className="h-5 w-5" />,
            },
            {
              value: '1,200+',
              label: 'startups actively hiring',
              icon: <Users className="h-5 w-5" />,
            },
          ]}
          challenges={[
            'Intense competition from 15+ lakh engineering graduates annually',
            'Skills gap between college curriculum and industry needs',
            'Limited awareness about off-campus opportunities',
            'Lack of structured preparation guidance',
          ]}
          opportunities={[
            'Growing startup ecosystem creating more internship roles',
            'Remote work culture opening geographic barriers',
            'Increased focus on skill-based hiring over college brands',
            'Government initiatives supporting tech education',
          ]}
        />

        {/* Introduction */}
        <section>
          <p className="lead">
            Landing your first tech internship in India can feel daunting. With
            thousands competing for limited positions, the pressure is real. But
            here's the truth:{' '}
            <strong>
              students who land great internships aren't the smartestâ€”they're
              the most strategic.
            </strong>
          </p>
          <p>
            Whether you're at an IIT or a tier-3 college, this guide provides
            the exact roadmap based on data from 10,000+ successful applications
            on Sproutern.
          </p>
        </section>

        {/* Case Study */}
        <IndianCaseStudy
          name="Priya Sharma"
          city="Jaipur"
          college="Rajasthan Technical University"
          year="3rd"
          challenge={[
            'No prior coding experience beyond college curriculum',
            'Coming from a tier-3 college with limited placement opportunities',
            'Family pressure to focus only on studies, not practical skills',
            'Limited financial resources for paid courses',
          ]}
          strategy={[
            'Started with free resources: FreeCodeCamp and YouTube tutorials for web development basics',
            'Dedicated 2 hours daily to coding practice, focusing on JavaScript and React',
            'Built 3 projects: a todo app, weather app, and e-commerce clone with real functionality',
            'Created a strong GitHub profile with clean, documented code',
            'Applied to 50+ startups through AngelList and direct company websites',
            'Prepared thoroughly for technical interviews using LeetCode and system design basics',
          ]}
          results={[
            {
              outcome: 'Landed internship at Bangalore-based fintech startup',
              timeline: '4 months',
              achievement: 'â‚¹25,000/month stipend',
            },
            {
              outcome: 'Received pre-placement offer (PPO)',
              timeline: 'after 3-month internship',
              achievement: 'â‚¹8 LPA starting salary',
            },
            {
              outcome: 'Built network of 200+ tech professionals on LinkedIn',
              achievement: 'ongoing mentorship',
            },
          ]}
          timeline="6 months preparation + 3 months internship"
          investment="â‚¹0 (used only free resources)"
          keyTakeaway="Consistent daily practice and building real projects matters more than college brand or expensive courses."
        />

        {/* Section 1: Landscape */}
        <section
          id="landscape"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            1. Understanding the Tech Internship Landscape
          </h2>

          <p>
            India's tech ecosystem has transformed dramatically. The industry is
            projected to add <strong>5.4 million jobs</strong> (NASSCOM).
            High-demand areas include:
          </p>
          <ul>
            <li>
              <strong>Full-stack development</strong> â€” Companies need
              engineers across the stack
            </li>
            <li>
              <strong>Data science and ML</strong> â€” AI adoption is
              accelerating
            </li>
            <li>
              <strong>Cloud and DevOps</strong> â€” Every company is moving to
              cloud
            </li>
            <li>
              <strong>Mobile development</strong> â€” India has 700M+ smartphone
              users
            </li>
          </ul>

          <h3>Types of Internships</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 text-sm font-bold">MNC Internships</h4>
              <ul className="space-y-1 text-sm">
                <li>â€¢ Structured programs (2-6 months)</li>
                <li>â€¢ High stipends (â‚¹40K-80K/month)</li>
                <li>â€¢ Brand recognition</li>
                <li>â€¢ Examples: Google, Microsoft, Amazon</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 text-sm font-bold">Startup Internships</h4>
              <ul className="space-y-1 text-sm">
                <li>â€¢ More hands-on responsibility</li>
                <li>â€¢ Variable stipends (â‚¹10K-50K/month)</li>
                <li>â€¢ Faster learning curve</li>
                <li>â€¢ Examples: Razorpay, Cred, Groww</li>
              </ul>
            </div>
          </div>

          <h3>Internship Seasons</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Season</th>
                  <th className="border p-3 text-left">Duration</th>
                  <th className="border p-3 text-left">Apply By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Summer</td>
                  <td className="border p-3">May-July</td>
                  <td className="border p-3">Jan-March</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3">Winter</td>
                  <td className="border p-3">Dec-Feb</td>
                  <td className="border p-3">Sept-Nov</td>
                </tr>
                <tr>
                  <td className="border p-3">Rolling</td>
                  <td className="border p-3">Year-round</td>
                  <td className="border p-3">Anytime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Code className="h-6 w-6 text-primary" />
            2. Essential Skills You Need
          </h2>

          <h3>Programming Fundamentals</h3>
          <p>Master at least one language based on your target role:</p>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">SDE/Backend</p>
              <p className="text-sm">
                Java or Python, OOP concepts, clean code
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Frontend/Full-stack</p>
              <p className="text-sm">
                JavaScript/TypeScript, React or Vue, CSS
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Data Science</p>
              <p className="text-sm">Python, NumPy, Pandas, SQL</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 text-sm font-bold">Mobile</p>
              <p className="text-sm">Kotlin/Swift or React Native/Flutter</p>
            </div>
          </div>

          <h3>Data Structures and Algorithms (DSA)</h3>
          <p>
            Non-negotiable. <strong>90%+ of tech interviews</strong> test DSA.
            Must master:
          </p>
          <ul>
            <li>
              <strong>Arrays/Strings:</strong> Two pointers, sliding window
            </li>
            <li>
              <strong>Trees/Graphs:</strong> BFS, DFS, traversals
            </li>
            <li>
              <strong>Dynamic Programming:</strong> Knapsack, subsequences
            </li>
            <li>
              <strong>Linked Lists:</strong> Reversal, cycle detection
            </li>
          </ul>

          <div className="not-prose my-6 rounded-lg bg-primary/10 p-4">
            <h4 className="mb-2 font-bold">DSA Preparation Path</h4>
            <ol className="space-y-1 text-sm">
              <li>
                <strong>Month 1-2:</strong> Complete Striver's A2Z or NeetCode
                150
              </li>
              <li>
                <strong>Month 3-4:</strong> Solve 150-200 LeetCode problems
              </li>
              <li>
                <strong>Month 5-6:</strong> Contests + company-specific problems
              </li>
            </ol>
          </div>

          <h3>Projects That Impress</h3>
          <div className="my-4 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <p className="mb-2 text-sm font-bold">What Makes a Good Project</p>
            <ul className="space-y-1 text-sm">
              <li>â€¢ Solves a real problem (not just a tutorial clone)</li>
              <li>â€¢ Has a working demo/live deployment</li>
              <li>â€¢ Clean, documented code on GitHub</li>
              <li>â€¢ Shows measurable impact ("reduced latency by 40%")</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Companies */}
        <section
          id="companies"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            3. Top Companies Hiring Tech Interns
          </h2>

          <h3>Global Tech Giants</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Company</th>
                  <th className="border p-3 text-left">Stipend</th>
                  <th className="border p-3 text-left">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Google</td>
                  <td className="border p-3">â‚¹80K-1.2L</td>
                  <td className="border p-3">Strong DSA, projects</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3">Microsoft</td>
                  <td className="border p-3">â‚¹70K-1L</td>
                  <td className="border p-3">DSA, system design</td>
                </tr>
                <tr>
                  <td className="border p-3">Amazon</td>
                  <td className="border p-3">â‚¹60K-85K</td>
                  <td className="border p-3">LPs + DSA</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3">Adobe</td>
                  <td className="border p-3">â‚¹55K-75K</td>
                  <td className="border p-3">Strong fundamentals</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Indian Unicorns & Startups</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg border p-3">
              <p className="font-bold">Fintech</p>
              <p className="text-muted-foreground">
                Razorpay, Zerodha, Cred, Groww
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">E-commerce</p>
              <p className="text-muted-foreground">
                Flipkart, Meesho, Swiggy, Zomato
              </p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="font-bold">SaaS</p>
              <p className="text-muted-foreground">Freshworks, Zoho, Postman</p>
            </div>
          </div>
        </section>

        {/* Section 4: Finding */}
        <section
          id="finding"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            4. Where to Find Opportunities
          </h2>

          <h3>1. Company Career Pages</h3>
          <p>
            Most effective method. Bookmark and check weekly:
            careers.google.com, careers.microsoft.com, amazon.jobs
          </p>

          <h3>2. Internship Platforms</h3>
          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">General</p>
              <p>Internshala, LinkedIn Jobs, Unstop, Sproutern</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-bold">Tech-Specific</p>
              <p>AngelList, Cutshort, GitHub Jobs</p>
            </div>
          </div>

          <h3>3. Networking & Referrals</h3>
          <p>
            <strong>70% of jobs are filled through networking.</strong> Use
            LinkedIn, college alumni, and tech communities.
          </p>

          <h3>4. Coding Competitions</h3>
          <p>
            Google Kickstart, CodeChef, LeetCode contestsâ€”top performers get
            interview shortlists.
          </p>
        </section>

        {/* Section 5: Application */}
        <section
          id="application"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            5. Crafting Applications That Get Noticed
          </h2>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <p className="mb-2 text-sm font-bold">âœ… Resume Must-Haves</p>
              <ul className="space-y-1 text-sm">
                <li>â€¢ Skills relevant to role</li>
                <li>â€¢ Projects with GitHub/demo links</li>
                <li>â€¢ Quantified achievements</li>
                <li>â€¢ Coding profiles (LeetCode rating)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950">
              <p className="mb-2 text-sm font-bold">âŒ Avoid</p>
              <ul className="space-y-1 text-sm">
                <li>â€¢ Generic objectives</li>
                <li>â€¢ Irrelevant skills (MS Office)</li>
                <li>â€¢ Walls of text</li>
                <li>â€¢ More than 1 page</li>
              </ul>
            </div>
          </div>

          <h3>GitHub Optimization</h3>
          <ul>
            <li>Pin best 6 repositories</li>
            <li>Write clear README files</li>
            <li>Maintain consistent activity</li>
          </ul>
        </section>

        {/* Section 6: Interviews */}
        <section
          id="interviews"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            6. Cracking Technical Interviews
          </h2>

          <h3>Interview Structure</h3>
          <div className="not-prose my-6 space-y-3 text-sm">
            <div className="rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-3 pl-4 dark:bg-blue-950">
              <p className="font-bold">Round 1: Online Assessment</p>
              <p>
                2-3 coding problems, 60-90 minutes. Focus: DSA fundamentals.
              </p>
            </div>
            <div className="rounded-r-lg border-l-4 border-green-500 bg-green-50 p-3 pl-4 dark:bg-green-950">
              <p className="font-bold">Round 2-3: Technical Interviews</p>
              <p>1-2 DSA problems + project discussion. 45-60 minutes each.</p>
            </div>
            <div className="rounded-r-lg border-l-4 border-orange-500 bg-orange-50 p-3 pl-4 dark:bg-orange-950">
              <p className="font-bold">Round 4: HR/Behavioral</p>
              <p>Culture fit, motivation, teamwork questions.</p>
            </div>
          </div>

          <h3>Approach for Coding Problems</h3>
          <ol>
            <li>
              <strong>Understand:</strong> Ask clarifying questions
            </li>
            <li>
              <strong>Plan:</strong> Think out loud before coding
            </li>
            <li>
              <strong>Brute force first:</strong> Get working solution
            </li>
            <li>
              <strong>Optimize:</strong> Improve time/space complexity
            </li>
            <li>
              <strong>Test:</strong> Walk through with examples
            </li>
          </ol>
        </section>

        {/* Section 7: Timeline */}
        <section
          id="timeline"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            7. 6-Month Preparation Timeline
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <span className="rounded bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                Month 1-2
              </span>
              <p className="mt-2 text-sm">
                Master one language, start DSA course, solve 50 easy problems,
                start first project
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <span className="rounded bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                Month 3-4
              </span>
              <p className="mt-2 text-sm">
                Medium DSA problems, complete 2-3 projects, participate in
                contests, build LinkedIn
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <span className="rounded bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                Month 5-6
              </span>
              <p className="mt-2 text-sm">
                Finalize resume, start applying, mock interviews,
                company-specific preparation
              </p>
            </div>
          </div>
        </section>

        {/* Expert Tips */}
        <ExpertTips
          tips={[
            {
              title: 'Start with one technology stack and master it deeply',
              explanation:
                'Many students try to learn everything at once and end up being mediocre at all. Companies prefer depth over breadth for interns.',
              implementation: [
                'Choose either MERN (MongoDB, Express, React, Node.js) or Django + React',
                'Build 3-4 progressively complex projects in the same stack',
                'Learn the ecosystem tools (testing, deployment, version control)',
                'Contribute to open source projects in your chosen stack',
              ],
              expectedOutcome:
                "You'll be able to confidently discuss architecture decisions and debug complex issues during interviews",
            },
            {
              title: 'Apply the 50-20-30 rule for internship applications',
              explanation:
                'Strategic application distribution maximizes your chances while managing effort efficiently.',
              implementation: [
                '50% applications to startups (higher acceptance rate, more learning)',
                '20% to mid-size product companies (good balance of brand and opportunity)',
                "30% to dream companies (Google, Microsoft, etc. - aim high but don't rely on these)",
                'Track all applications in a spreadsheet with follow-up dates',
              ],
              expectedOutcome:
                'Higher overall success rate and multiple offers to choose from',
            },
            {
              title: "Create a 'problem-solution-impact' portfolio narrative",
              explanation:
                'Recruiters want to see how you think about real problems, not just technical skills.',
              implementation: [
                'For each project, clearly document: What problem does this solve?',
                'Explain your technical approach and why you chose it',
                "Quantify the impact: 'Reduced loading time by 40%' or 'Handles 1000+ concurrent users'",
                'Include challenges faced and how you overcame them',
              ],
              expectedOutcome:
                'Interviewers will see you as a problem-solver, not just a coder',
            },
          ]}
        />

        {/* Common Mistakes */}
        <CommonMistakes
          mistakes={[
            {
              mistake: 'Focusing only on campus placements',
              whyWrong:
                "Campus placements are limited and highly competitive. Many great companies don't visit all colleges, especially tier-2/3 institutions.",
              correctApproach:
                'Apply 70% off-campus and 30% on-campus. Off-campus gives you more options and better negotiation power.',
              realExample:
                'Rahul from a tier-3 college in Indore got rejected in campus placements but landed a â‚¹12 LPA offer at Razorpay through off-campus applications.',
            },
            {
              mistake: 'Building projects by following tutorials exactly',
              whyWrong:
                "Tutorial projects are common and don't demonstrate original thinking. Recruiters can easily spot copy-paste work.",
              correctApproach:
                'Use tutorials to learn concepts, then build something unique. Add your own features, solve a different problem, or improve the original.',
              realExample:
                "Instead of building another todo app, Sneha built a 'College Assignment Tracker' with deadline notifications and professor contact integration - got her noticed immediately.",
            },
            {
              mistake: 'Neglecting soft skills and communication',
              whyWrong:
                'Technical skills get you the interview, but communication skills get you the job. Many technically strong candidates fail due to poor articulation.',
              correctApproach:
                'Practice explaining your projects in simple terms. Record yourself, join tech communities, write blog posts about your learning.',
              realExample:
                "Arjun was excellent at coding but couldn't explain his approach clearly. After 3 months of practice presentations, he cleared 5 consecutive interviews.",
            },
            {
              mistake: 'Applying without researching the company',
              whyWrong:
                "Generic applications show lack of genuine interest. Companies can tell when you've mass-applied without understanding their business.",
              correctApproach:
                'Spend 15 minutes researching each company. Understand their product, recent news, tech stack. Customize your application accordingly.',
              realExample:
                "Kavya mentioned Swiggy's recent expansion to tier-2 cities in her cover letter and suggested a feature idea - got an interview call within 2 days.",
            },
            {
              mistake: 'Giving up after initial rejections',
              whyWrong:
                'The first few rejections are learning experiences. Most successful candidates face 10-20 rejections before landing their dream internship.',
              correctApproach:
                'Treat each rejection as feedback. Ask for specific reasons, improve those areas, and keep applying. Persistence is key.',
              realExample:
                'Vikash got rejected 15 times before landing an internship at Flipkart. Each rejection taught him something new about interview preparation.',
            },
          ]}
        />

        {/* Action Checklist */}
        <ActionChecklist
          weeks={[
            {
              week: 'Week 1-2',
              tasks: [
                {
                  task: 'Choose your primary programming language',
                  description:
                    'Focus on Java, Python, or JavaScript based on your interest',
                },
                {
                  task: 'Set up development environment',
                  description: 'Install IDE, Git, and necessary tools',
                },
                {
                  task: 'Start first project',
                  description:
                    'Begin with a simple web application or console program',
                },
                {
                  task: 'Create GitHub account and LinkedIn profile',
                  description: 'Professional online presence is crucial',
                },
              ],
            },
            {
              week: 'Week 3-4',
              tasks: [
                {
                  task: 'Complete first project and deploy it',
                  description:
                    'Use Netlify, Vercel, or Heroku for free hosting',
                },
                {
                  task: 'Start DSA preparation',
                  description: 'Begin with arrays and strings on LeetCode',
                },
                {
                  task: 'Join tech communities',
                  description:
                    'Discord servers, Reddit communities, local meetups',
                },
                {
                  task: 'Research 20 target companies',
                  description:
                    'Mix of startups, product companies, and dream companies',
                },
              ],
            },
            {
              week: 'Week 5-8',
              tasks: [
                {
                  task: 'Build second project with database',
                  description:
                    'Learn backend development and database integration',
                },
                {
                  task: 'Solve 50+ DSA problems',
                  description:
                    'Focus on understanding patterns, not just solutions',
                },
                {
                  task: 'Start networking on LinkedIn',
                  description:
                    'Connect with professionals, engage with content',
                },
                {
                  task: 'Create first version of resume',
                  description: 'Use ATS-friendly format, highlight projects',
                },
              ],
            },
            {
              week: 'Week 9-12',
              tasks: [
                {
                  task: 'Complete third project (most complex)',
                  description:
                    'Full-stack application with authentication and real features',
                },
                {
                  task: 'Start applying to internships',
                  description: 'Begin with 5-10 applications per week',
                },
                {
                  task: 'Practice mock interviews',
                  description:
                    'Use Pramp, InterviewBit, or practice with friends',
                },
                {
                  task: 'Optimize GitHub and LinkedIn profiles',
                  description:
                    'Professional photos, detailed project descriptions',
                },
              ],
            },
          ]}
          ongoingTasks={[
            {
              task: 'Code for at least 2 hours daily',
              description: 'Consistency is more important than intensity',
            },
            {
              task: 'Follow tech news and trends',
              description: 'Stay updated with industry developments',
            },
            {
              task: 'Engage with tech community',
              description: 'Answer questions, share learnings, build network',
            },
            {
              task: 'Track and analyze application responses',
              description: 'Learn from feedback and improve approach',
            },
          ]}
        />

        {/* Section 8: FAQ */}
        <FAQSection
          faqs={[
            {
              question: 'Can tier-3 college students get top internships?',
              answer:
                'Absolutely! Off-campus hiring is primarily skill-based. Companies evaluate your coding ability, projects, and problem-solving skills rather than your college name. Many successful engineers from tier-3 colleges work at top companies.',
              example:
                'Priya from Rajasthan Technical University landed an internship at a Bangalore fintech startup and later got a PPO with â‚¹8 LPA package.',
            },
            {
              question:
                'How many LeetCode problems should I solve for internships?',
              answer:
                'Aim for 150-200 problems with deep understanding rather than rushing through 500+ problems. Focus on learning patterns and approaches. Quality over quantity is key for internship-level interviews.',
              example:
                'Most internship interviews have 1-2 medium-level problems. Mastering common patterns like two pointers, sliding window, and basic DP is sufficient.',
            },
            {
              question: 'Is CGPA important for tech internships?',
              answer:
                'Some companies have CGPA cutoffs (usually 7.0+), but many startups and product companies prioritize skills over grades. If your CGPA is low, compensate with strong projects and coding skills.',
              example:
                'Rahul had a 6.8 CGPA but showcased 4 impressive projects and cleared technical rounds at multiple startups.',
            },
            {
              question: 'How do I get referrals for internship applications?',
              answer:
                'Use LinkedIn strategically: connect with employees, engage with their content genuinely, then politely ask for referrals. Alumni from your college are usually most helpful. Join tech communities where professionals are active.',
              example:
                'Sneha connected with 50+ professionals on LinkedIn, engaged with their posts for 2 weeks, then got 8 referrals which led to 3 interview calls.',
            },
            {
              question: 'What if I keep getting rejected from internships?',
              answer:
                'Rejection is part of the process. Most successful candidates face 10-20 rejections before landing their first internship. Use each rejection as learning feedback, improve your weak areas, and keep applying consistently.',
              example:
                'Vikash got rejected 15 times but used feedback to improve his communication skills and DSA preparation. Eventually landed an internship at Flipkart.',
            },
            {
              question:
                'Should I focus on web development or mobile development for internships?',
              answer:
                "Web development generally has more internship opportunities, especially full-stack roles. However, if you're passionate about mobile development, there are good opportunities in startups building mobile-first products.",
              example:
                '70% of tech internships are web development related, while 20% are mobile development and 10% are other specializations like data science or DevOps.',
            },
            {
              question:
                'How important are personal projects compared to academic projects?',
              answer:
                "Personal projects are much more valuable as they demonstrate initiative, real-world problem-solving, and passion for coding. Academic projects are often similar across students and don't stand out.",
              example:
                "A student's personal project solving local transportation issues got more attention than their final year project on a common topic like library management.",
            },
            {
              question:
                "What's the difference between internship interviews and full-time job interviews?",
              answer:
                'Internship interviews are generally less intense, focus more on fundamentals and potential rather than deep expertise. System design is usually not asked, and DSA problems are easier (easy to medium level).',
              example:
                'Internship interviews typically have 1-2 coding rounds + 1 HR round, while full-time interviews may have 3-4 technical rounds including system design.',
            },
          ]}
        />

        {/* Conclusion */}
        <section>
          <h2>Start Your Journey Now</h2>
          <p>
            Landing your first tech internship is challenging but achievable.
            The students who succeed start early, stay consistent, and don't
            give up after rejections.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best time to start was yesterday. The second best time is now.
            Good luck! ðŸš€
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">ðŸ“š Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/how-to-write-a-resume-that-beats-ats"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              ATS-Friendly Resume Guide
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              LinkedIn Optimization Guide
            </Link>
            <Link
              href="/blog/startup-vs-corporate-internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Startup vs Corporate Internships
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Tech Internships
            </Link>
          </div>
        </div>

        {/* Author Bio */}
        <AuthorBioBox
          author="Sproutern Career Team"
          expertise="Based on analysis of 10,000+ successful internship applications, interviews with 200+ hiring managers, and data from India's top tech companies."
          lastUpdated="January 15,"
          stats="Helped 50,000+ students land internships across 500+ companies"
        />
      </article>
    </div>
  );
}
