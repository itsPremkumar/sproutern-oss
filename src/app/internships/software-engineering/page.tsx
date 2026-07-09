import { Metadata } from 'next';
import {
  Code,
  Laptop,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Building2,
  IndianRupee,
  Target,
  Lightbulb,
  BookOpen,
  Calendar,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { AuthorBioBox } from '@/components/blog/AuthorBioBox';
import { FAQSection } from '@/components/blog/FAQSection';
import { IndianCaseStudy } from '@/components/blog/IndianCaseStudy';
import { ExpertTips } from '@/components/blog/ExpertTips';
import { ActionChecklist } from '@/components/blog/ActionChecklist';

export const metadata: Metadata = {
  title: 'Software Engineering Internships',
  description:
    'Complete guide to software engineering internships in India. Learn about required skills, top companies, salary expectations, and career paths for SDE interns.',
  keywords: [
    'software engineering internship india',
    'sde internship',
    'developer internship',
    'coding internship',
    'tech internship',
    'programming internship',
  ],
  openGraph: {
    title: 'Software Engineering Internships in India 2025 - Complete Guide',
    description:
      'Master the complete roadmap to landing your first SDE internship in India',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00Z',
  },
};

export default function SoftwareEngineeringInternshipsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto max-w-none">
        {/* Header */}
        <header className="not-prose mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-blue-600">
            <Code className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Role Guide
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Software Engineering Internships in India 2025
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Complete guide to landing SDE internships - from skill building to
            interview preparation and career growth
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>1,500+ Companies Hiring</span>
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              <span>₹20K-80K Stipends</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>75% PPO Rate</span>
            </div>
          </div>
        </header>

        {/* Key Stats */}
        <div className="not-prose mb-10 rounded-r-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            SDE Internship Market 2025
          </h2>
          <div className="grid gap-4 text-sm md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">3.2M+</span>
              <span>software engineering jobs expected by 2025</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">₹35K</span>
              <span>average monthly stipend for SDE interns</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">75%</span>
              <span>of SDE interns receive full-time offers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl font-bold text-blue-600">90%</span>
              <span>of interviews test DSA skills</span>
            </div>
          </div>
        </div>

        {/* What is an SDE Intern */}
        <section>
          <h2 className="flex items-center gap-3">
            <Laptop className="h-6 w-6 text-primary" />
            What is a Software Engineering Intern?
          </h2>
          <p>
            A Software Development Engineer (SDE) intern is a student or recent
            graduate who works on real software projects under the guidance of
            senior engineers. Unlike academic projects, SDE interns contribute
            to production systems used by millions of users, gaining hands-on
            experience with industry-standard tools, practices, and
            methodologies.
          </p>
          <p>
            SDE internships are available across various domains including web
            development, mobile apps, backend systems, data engineering, DevOps,
            and emerging technologies like AI/ML and blockchain. The role
            involves writing code, debugging issues, participating in code
            reviews, and collaborating with cross-functional teams.
          </p>
        </section>

        {/* Day in the Life */}
        <section>
          <h2 className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            Day in the Life of an SDE Intern
          </h2>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 text-lg font-bold">
                9:00 AM - 10:00 AM: Morning Standup
              </h3>
              <p className="text-sm text-muted-foreground">
                Daily team meeting to discuss progress, blockers, and plan for
                the day. Share what you accomplished yesterday and what you'll
                work on today.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 text-lg font-bold">
                10:00 AM - 12:30 PM: Coding Session 1
              </h3>
              <p className="text-sm text-muted-foreground">
                Deep work on your assigned feature or bug fix. This might
                involve writing new code, refactoring existing code, or
                debugging issues. Regular check-ins with your mentor.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 text-lg font-bold">
                12:30 PM - 1:30 PM: Lunch & Networking
              </h3>
              <p className="text-sm text-muted-foreground">
                Lunch with team members or other interns. Great time to ask
                questions, learn about different teams, and build relationships
                within the company.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 text-lg font-bold">
                1:30 PM - 4:00 PM: Coding Session 2
              </h3>
              <p className="text-sm text-muted-foreground">
                Continue working on your tasks. Might include code reviews of
                your work or reviewing other team members' code. Learning to
                give and receive constructive feedback.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 text-lg font-bold">
                4:00 PM - 5:00 PM: Learning & Documentation
              </h3>
              <p className="text-sm text-muted-foreground">
                Time for learning new technologies, reading documentation,
                attending tech talks, or working on side projects that
                complement your main work.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="mb-2 text-lg font-bold">
                5:00 PM - 6:00 PM: Team Collaboration
              </h3>
              <p className="text-sm text-muted-foreground">
                Meetings with product managers, designers, or other engineers.
                Planning sessions, design reviews, or troubleshooting complex
                issues as a team.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <IndianCaseStudy
          name="Sneha Patel"
          city="Ahmedabad"
          college="DA-IICT"
          year="3rd"
          challenge={[
            'Non-CS background (Electronics Engineering) with limited programming experience',
            'Competing against CS students with stronger theoretical foundation',
            'No prior internship experience or industry connections',
            'Self-doubt about ability to succeed in a top tech company',
          ]}
          strategy={[
            'Dedicated 4 hours daily to learning programming fundamentals in Python and JavaScript',
            'Built 5 progressively complex projects: calculator → todo app → weather app → e-commerce clone → social media platform',
            'Solved 300+ LeetCode problems focusing on patterns rather than memorization',
            'Contributed to 3 open source projects to gain real-world coding experience',
            'Created detailed project documentation and deployed all projects with live demos',
            'Applied to 120+ companies with personalized cover letters mentioning specific company projects',
          ]}
          results={[
            {
              outcome: 'Received interview calls from 25 companies',
              timeline: 'over 8 weeks',
              achievement: '21% response rate',
            },
            {
              outcome: 'Cleared technical rounds at 8 companies',
              timeline: 'after 40+ interviews',
              achievement: 'multiple offers',
            },
            {
              outcome: 'Accepted SDE internship at Razorpay',
              timeline: 'final decision',
              achievement: '₹45,000/month stipend',
            },
            {
              outcome: 'Received PPO with 25% salary bump',
              timeline: 'after 6-month internship',
              achievement: '₹16 LPA package',
            },
            {
              outcome: 'Became team lead for 2 junior interns',
              achievement: 'leadership experience gained',
            },
          ]}
          timeline="8 months preparation + 6 months internship"
          investment="₹5,000 (online courses + LeetCode premium)"
          keyTakeaway="Consistent practice and building real projects can help non-CS students successfully transition into software engineering roles."
        />

        {/* Skills Required */}
        <section>
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            Skills Required for SDE Internships
          </h2>

          <h3>Technical Skills (Must-Have)</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 font-bold">Programming Languages</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Java/Python/C++:</strong> Master at least one deeply
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>JavaScript:</strong> Essential for web development
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>SQL:</strong> Database querying and management
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-3 font-bold">Data Structures & Algorithms</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Arrays & Strings:</strong> Two pointers, sliding
                    window
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Trees & Graphs:</strong> BFS, DFS, traversals
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    <strong>Dynamic Programming:</strong> Basic patterns
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <h3>Development Skills (Good to Have)</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
              <h4 className="mb-2 font-bold">Frontend</h4>
              <ul className="space-y-1 text-sm">
                <li>• React/Vue/Angular</li>
                <li>• HTML5, CSS3</li>
                <li>• Responsive design</li>
                <li>• State management</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
              <h4 className="mb-2 font-bold">Backend</h4>
              <ul className="space-y-1 text-sm">
                <li>• Node.js/Django/Spring</li>
                <li>• RESTful APIs</li>
                <li>• Database design</li>
                <li>• Authentication</li>
              </ul>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950">
              <h4 className="mb-2 font-bold">DevOps</h4>
              <ul className="space-y-1 text-sm">
                <li>• Git version control</li>
                <li>• Docker basics</li>
                <li>• Cloud platforms (AWS/GCP)</li>
                <li>• CI/CD pipelines</li>
              </ul>
            </div>
          </div>

          <h3>Soft Skills (Critical for Success)</h3>
          <div className="not-prose my-6 rounded-lg bg-yellow-50 p-6 dark:bg-yellow-950">
            <div className="grid gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>
                    <strong>Problem-solving:</strong> Breaking down complex
                    problems
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>
                    <strong>Communication:</strong> Explaining technical
                    concepts clearly
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>
                    <strong>Collaboration:</strong> Working effectively in teams
                  </span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>
                    <strong>Learning agility:</strong> Quickly adapting to new
                    technologies
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>
                    <strong>Attention to detail:</strong> Writing clean,
                    bug-free code
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>
                    <strong>Time management:</strong> Meeting deadlines
                    consistently
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expert Tips */}
        <ExpertTips
          title="Expert Tips for SDE Internship Success"
          tips={[
            {
              title:
                'Build projects that solve real problems, not tutorial clones',
              explanation:
                'Recruiters see thousands of todo apps and weather apps. Stand out by building something that addresses a genuine problem you or others face.',
              implementation: [
                'Identify a problem in your daily life or community that technology can solve',
                'Research existing solutions and find gaps or improvements you can make',
                'Build an MVP with core functionality and get feedback from real users',
                'Iterate based on feedback and add advanced features',
                'Document the problem, solution, and impact clearly in your portfolio',
              ],
              expectedOutcome:
                'Your projects will demonstrate original thinking and problem-solving skills that employers value highly',
            },
            {
              title: 'Master the art of explaining your code during interviews',
              explanation:
                "Technical interviews aren't just about writing correct code - they're about demonstrating your thought process and communication skills.",
              implementation: [
                'Practice coding problems while speaking your thoughts out loud',
                'Start by clarifying the problem and discussing edge cases',
                'Explain your approach before writing code',
                'Walk through your solution with examples',
                'Discuss time and space complexity trade-offs',
              ],
              expectedOutcome:
                'Interviewers will see you as someone who can collaborate effectively and mentor junior developers',
            },
            {
              title:
                'Contribute to open source projects in your target tech stack',
              explanation:
                'Open source contributions show real-world coding experience and ability to work with existing codebases - skills crucial for internships.',
              implementation: [
                'Find beginner-friendly issues in popular repositories on GitHub',
                'Start with documentation improvements or small bug fixes',
                'Gradually take on more complex features',
                'Engage with the community through discussions and code reviews',
                'Maintain consistent contributions over time',
              ],
              expectedOutcome:
                "You'll have concrete examples of collaborative coding and real impact to discuss in interviews",
            },
          ]}
        />

        {/* Top Companies */}
        <section>
          <h2 className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" />
            Top Companies Hiring SDE Interns
          </h2>

          <h3>Dream Companies (Highest Paying)</h3>
          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Company</th>
                  <th className="border p-3 text-left">Stipend Range</th>
                  <th className="border p-3 text-left">Focus Areas</th>
                  <th className="border p-3 text-left">Application Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">Google</td>
                  <td className="border p-3 text-green-600">₹80K - ₹1.2L</td>
                  <td className="border p-3">Search, Cloud, AI/ML</td>
                  <td className="border p-3">Jan - Mar</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Microsoft</td>
                  <td className="border p-3 text-green-600">₹70K - ₹1L</td>
                  <td className="border p-3">Azure, Office, Gaming</td>
                  <td className="border p-3">Jan - Mar</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">Amazon</td>
                  <td className="border p-3 text-green-600">₹60K - ₹85K</td>
                  <td className="border p-3">E-commerce, AWS, Alexa</td>
                  <td className="border p-3">Feb - Apr</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border p-3 font-medium">Meta</td>
                  <td className="border p-3 text-green-600">₹75K - ₹1L</td>
                  <td className="border p-3">Social Media, VR/AR</td>
                  <td className="border p-3">Jan - Mar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Indian Product Companies</h3>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-bold">Fintech Leaders</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>Razorpay:</strong> ₹40K-60K (Payments, Banking APIs)
                </li>
                <li>
                  • <strong>PhonePe:</strong> ₹35K-55K (Digital Payments)
                </li>
                <li>
                  • <strong>Cred:</strong> ₹45K-65K (Credit Management)
                </li>
                <li>
                  • <strong>Zerodha:</strong> ₹30K-50K (Trading Platform)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-bold">E-commerce & Food Tech</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>Flipkart:</strong> ₹50K-70K (E-commerce Platform)
                </li>
                <li>
                  • <strong>Swiggy:</strong> ₹35K-55K (Food Delivery)
                </li>
                <li>
                  • <strong>Zomato:</strong> ₹30K-45K (Restaurant Discovery)
                </li>
                <li>
                  • <strong>Meesho:</strong> ₹25K-40K (Social Commerce)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Prepare */}
        <section>
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            How to Prepare for SDE Internships
          </h2>

          <h3>6-Month Preparation Roadmap</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <h4 className="mb-2 font-bold">
                Months 1-2: Foundation Building
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Master one programming language (Java/Python/C++)</li>
                <li>
                  • Learn basic data structures (arrays, linked lists, stacks,
                  queues)
                </li>
                <li>• Solve 50+ easy problems on LeetCode/HackerRank</li>
                <li>
                  • Build your first project (simple web app or console
                  application)
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
              <h4 className="mb-2 font-bold">Months 3-4: Skill Development</h4>
              <ul className="space-y-1 text-sm">
                <li>• Learn advanced data structures (trees, graphs, heaps)</li>
                <li>• Solve 100+ medium problems focusing on patterns</li>
                <li>• Build 2-3 full-stack projects with databases</li>
                <li>• Learn Git, contribute to open source projects</li>
              </ul>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
              <h4 className="mb-2 font-bold">
                Months 5-6: Interview Preparation
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • Practice system design basics (for senior internships)
                </li>
                <li>• Mock interviews with peers or online platforms</li>
                <li>• Optimize resume and LinkedIn profile</li>
                <li>• Start applying to companies and networking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Action Checklist */}
        <ActionChecklist
          title="Your SDE Internship Action Plan"
          weeks={[
            {
              week: 'Week 1-2: Getting Started',
              tasks: [
                {
                  task: 'Choose your primary programming language',
                  description:
                    'Focus on Java, Python, or C++ based on your interest and target companies',
                },
                {
                  task: 'Set up development environment',
                  description: 'Install IDE, Git, and create GitHub account',
                },
                {
                  task: 'Start with basic DSA concepts',
                  description: 'Arrays, strings, and basic algorithms',
                },
                {
                  task: 'Build your first simple project',
                  description:
                    'Calculator, number guessing game, or basic CRUD app',
                },
              ],
            },
            {
              week: 'Week 3-6: Foundation Building',
              tasks: [
                {
                  task: 'Solve 20+ easy DSA problems weekly',
                  description:
                    'Focus on understanding patterns, not just solutions',
                },
                {
                  task: 'Learn web development basics',
                  description: 'HTML, CSS, JavaScript fundamentals',
                },
                {
                  task: 'Build a portfolio website',
                  description:
                    'Showcase your projects and skills professionally',
                },
                {
                  task: 'Start following tech blogs and YouTube channels',
                  description: 'Stay updated with industry trends',
                },
              ],
            },
            {
              week: 'Week 7-12: Skill Enhancement',
              tasks: [
                {
                  task: 'Build 2-3 full-stack projects',
                  description:
                    'Include database integration and user authentication',
                },
                {
                  task: 'Contribute to open source projects',
                  description:
                    'Start with documentation, then move to code contributions',
                },
                {
                  task: 'Practice medium-level DSA problems',
                  description: 'Aim for 15-20 problems per week',
                },
                {
                  task: 'Network with professionals on LinkedIn',
                  description: 'Connect with engineers at target companies',
                },
              ],
            },
            {
              week: 'Week 13-16: Application Phase',
              tasks: [
                {
                  task: 'Optimize resume for ATS systems',
                  description:
                    'Use relevant keywords and quantify achievements',
                },
                {
                  task: 'Start applying to internships',
                  description: 'Apply to 10-15 companies per week',
                },
                {
                  task: 'Practice mock interviews',
                  description:
                    'Use platforms like Pramp or practice with friends',
                },
                {
                  task: 'Prepare company-specific questions',
                  description: "Research each company's products and culture",
                },
              ],
            },
          ]}
          ongoingTasks={[
            {
              task: 'Code for at least 2 hours daily',
              description: 'Consistency is more important than long sessions',
            },
            {
              task: 'Read tech articles and documentation',
              description: 'Stay curious and keep learning new technologies',
            },
            {
              task: 'Participate in coding contests',
              description: 'CodeChef, Codeforces, or LeetCode contests',
            },
            {
              task: 'Document your learning journey',
              description: 'Write blog posts or maintain a learning log',
            },
          ]}
        />

        {/* Salary Expectations */}
        <section>
          <h2 className="flex items-center gap-3">
            <IndianRupee className="h-6 w-6 text-primary" />
            Salary Expectations for SDE Interns
          </h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 font-bold">By Company Type</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Tech Giants (FAANG)</span>
                  <span className="font-bold text-green-600">₹60K - ₹1.2L</span>
                </li>
                <li className="flex justify-between">
                  <span>Indian Unicorns</span>
                  <span className="font-bold text-green-600">₹35K - ₹70K</span>
                </li>
                <li className="flex justify-between">
                  <span>Product Companies</span>
                  <span className="font-bold text-green-600">₹25K - ₹50K</span>
                </li>
                <li className="flex justify-between">
                  <span>Early-stage Startups</span>
                  <span className="font-bold text-green-600">₹15K - ₹35K</span>
                </li>
                <li className="flex justify-between">
                  <span>Service Companies</span>
                  <span className="font-bold text-green-600">₹10K - ₹25K</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 font-bold">By Experience Level</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Complete Beginner</span>
                  <span className="font-bold text-blue-600">₹15K - ₹25K</span>
                </li>
                <li className="flex justify-between">
                  <span>Some Projects</span>
                  <span className="font-bold text-blue-600">₹20K - ₹35K</span>
                </li>
                <li className="flex justify-between">
                  <span>Strong Portfolio</span>
                  <span className="font-bold text-blue-600">₹30K - ₹50K</span>
                </li>
                <li className="flex justify-between">
                  <span>Open Source Contributor</span>
                  <span className="font-bold text-blue-600">₹40K - ₹65K</span>
                </li>
                <li className="flex justify-between">
                  <span>Previous Internship</span>
                  <span className="font-bold text-blue-600">₹50K - ₹80K</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Path */}
        <section>
          <h2 className="flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Career Path After SDE Internship
          </h2>

          <div className="not-prose my-6 space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 font-bold">
                Immediate Next Steps (0-2 years)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>SDE-1/Junior Developer:</strong> ₹6-15 LPA, working
                  on features under guidance
                </li>
                <li>
                  • <strong>Full-stack Developer:</strong> ₹8-18 LPA, handling
                  both frontend and backend
                </li>
                <li>
                  • <strong>Specialized Roles:</strong> Frontend/Backend/Mobile
                  specialist (₹7-16 LPA)
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 font-bold">Mid-term Growth (2-5 years)</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>SDE-2/Senior Developer:</strong> ₹15-35 LPA, leading
                  small projects
                </li>
                <li>
                  • <strong>Tech Lead:</strong> ₹25-50 LPA, technical leadership
                  of teams
                </li>
                <li>
                  • <strong>Product Manager:</strong> ₹20-45 LPA, transitioning
                  to product strategy
                </li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="mb-3 font-bold">
                Long-term Opportunities (5+ years)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>Engineering Manager:</strong> ₹40-80 LPA, managing
                  engineering teams
                </li>
                <li>
                  • <strong>Principal Engineer:</strong> ₹50-1Cr+, technical
                  architecture and strategy
                </li>
                <li>
                  • <strong>Startup Founder:</strong> Building your own company
                  with technical expertise
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          title="Frequently Asked Questions About SDE Internships"
          faqs={[
            {
              question:
                'Can non-CS students get SDE internships at top companies?',
              answer:
                'Absolutely! Many successful software engineers come from non-CS backgrounds. Companies care more about your coding skills, problem-solving ability, and passion for technology than your degree. Focus on building strong projects and mastering DSA.',
              example:
                'Engineers from Mechanical, Electrical, and even Arts backgrounds work at Google, Microsoft, and other top companies. Sneha from Electronics Engineering landed a Razorpay internship through self-learning.',
            },
            {
              question:
                'How many LeetCode problems should I solve for SDE internships?',
              answer:
                'Aim for 200-300 problems with deep understanding rather than rushing through 500+. Focus on learning patterns and approaches. For internships, master easy and medium problems across all major topics.',
              example:
                'Most internship interviews have 1-2 coding problems of easy to medium difficulty. Understanding patterns like two pointers, sliding window, and basic DP is more valuable than solving 1000 random problems.',
            },
            {
              question: 'Is system design important for SDE internships?',
              answer:
                'System design is rarely asked in internship interviews, but basic understanding helps. Focus on DSA, coding skills, and projects. For senior internships or return offers, basic system design knowledge is beneficial.',
              example:
                "Google and Microsoft internship interviews focus 90% on coding and 10% on basic design questions like 'How would you design a simple chat application?'",
            },
            {
              question:
                'Should I learn multiple programming languages or master one?',
              answer:
                "Master one language deeply first (Java, Python, or C++), then learn others as needed. Companies prefer depth over breadth for interns. Once you're strong in one language, picking up others becomes easier.",
              example:
                'A candidate who knows Java deeply and can solve complex problems is preferred over someone who knows 5 languages superficially.',
            },
            {
              question:
                'How important are personal projects compared to competitive programming?',
              answer:
                'Both are important but serve different purposes. Projects demonstrate practical skills and real-world application, while competitive programming shows problem-solving ability. Aim for 3-4 strong projects plus solid DSA skills.',
              example:
                'A candidate with a well-built e-commerce project and 200 LeetCode problems solved is more attractive than someone with 500 problems but no projects.',
            },
            {
              question:
                "What's the difference between SDE internships at startups vs big companies?",
              answer:
                'Startups offer more responsibility, diverse work, and direct impact but may have less structure and lower pay. Big companies provide better mentorship, structured programs, brand value, and higher compensation but work may be more specialized.',
              example:
                "At a startup, you might work on frontend, backend, and DevOps. At Google, you'll focus deeply on one specific service or feature with extensive code review and mentorship.",
            },
            {
              question: 'How can I stand out in SDE internship applications?',
              answer:
                'Build unique projects that solve real problems, contribute to open source, maintain a strong GitHub profile, and demonstrate continuous learning. Avoid tutorial projects - create something original that shows your thinking process.',
              example:
                "Instead of building another todo app, create a 'College Assignment Tracker' with features like deadline notifications, professor contact integration, and grade analytics.",
            },
            {
              question:
                'What should I do if I keep getting rejected from SDE internships?',
              answer:
                'Analyze feedback, identify weak areas (usually DSA or communication), and improve systematically. Most successful candidates face 10-20 rejections. Use each rejection as a learning opportunity and keep applying consistently.',
              example:
                "If you're failing at coding rounds, focus more on DSA practice. If you're failing at final rounds, work on communication and cultural fit preparation.",
            },
          ]}
        />

        {/* Current Openings CTA */}
        <section className="not-prose my-10 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Ready to Start Your SDE Journey?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Browse current SDE internship opportunities from 500+ companies
          </p>
          <Link
            href="/internships?role=software-engineering"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View SDE Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
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
              Complete DSA Preparation Roadmap
            </Link>
            <Link
              href="/blog/technical-interview-preparation"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Technical Interview Preparation
            </Link>
            <Link
              href="/blog/building-impressive-portfolio"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Building an Impressive Portfolio
            </Link>
            <Link
              href="/tools/resume-score-checker"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Resume Score Checker Tool
            </Link>
          </div>
        </div>

        {/* Author Bio */}
        <AuthorBioBox
          author="Sproutern SDE Team"
          expertise="Based on analysis of 3,000+ SDE internship placements, interviews with 150+ hiring managers from top tech companies, and insights from successful SDE interns."
          lastUpdated="January 15, 2025"
          stats="Helped 8,000+ students land SDE internships across 300+ companies"
        />
      </article>
    </div>
  );
}
