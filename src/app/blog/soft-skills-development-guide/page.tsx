import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Heart,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  MessageCircle,
  Handshake,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Soft Skills Development: Complete Guide',
  description:
    'Master the soft skills that get you hired and promoted. Communication, teamwork, leadership, and more.',
  keywords: [
    'soft skills',
    'communication skills',
    'teamwork',
    'leadership skills',
    'interpersonal skills',
  ],
  openGraph: {
    title: 'Soft Skills Development: Complete Guide',
    description: 'Master the skills that matter.',
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
          <div className="mb-4 flex items-center gap-2 text-pink-600">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Skills Development
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Soft Skills Development: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Technical skills get you interviews. Soft skills get you offers—and
            promotions. Here's how to develop them.
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
              <span>14 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Soft Skills Matter
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-primary hover:underline"
              >
                2. Top 8 Soft Skills
              </a>
            </li>
            <li>
              <a
                href="#develop"
                className="text-primary hover:underline"
              >
                3. How to Develop Them
              </a>
            </li>
            <li>
              <a
                href="#practice"
                className="text-primary hover:underline"
              >
                4. Practice Opportunities
              </a>
            </li>
            <li>
              <a
                href="#showcase"
                className="text-primary hover:underline"
              >
                5. Showcasing in Interviews
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
              <span>
                Soft skills are the #1 factor in promotions and leadership roles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Communication is the most valued soft skill across industries
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Soft skills can be learned—they're not fixed traits</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Practice in low-stakes environments before high-stakes ones
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Why Soft Skills Matter
          </h2>

          <ul>
            <li>
              <strong>Hiring decisions:</strong> 91% of recruiters say soft
              skills matter as much as hard skills
            </li>
            <li>
              <strong>Team success:</strong> Technical projects fail for people
              reasons, not technical ones
            </li>
            <li>
              <strong>Career growth:</strong> Leadership roles require strong
              soft skills
            </li>
            <li>
              <strong>AI-proof:</strong> Human skills like empathy can't be
              automated
            </li>
          </ul>
        </section>

        {/* Section 2: Skills */}
        <section
          id="skills"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-primary" />
            2. Top 8 Soft Skills
          </h2>

          <div className="not-prose my-6 grid gap-4 text-sm md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">1. Communication</p>
              <p className="text-muted-foreground">
                Speaking, writing, listening, presenting
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">2. Teamwork</p>
              <p className="text-muted-foreground">
                Collaboration, conflict resolution, feedback
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">3. Adaptability</p>
              <p className="text-muted-foreground">
                Handling change, learning quickly, flexibility
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">4. Problem-Solving</p>
              <p className="text-muted-foreground">
                Critical thinking, creativity, analysis
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">5. Time Management</p>
              <p className="text-muted-foreground">
                Prioritization, deadlines, productivity
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">
                6. Emotional Intelligence
              </p>
              <p className="text-muted-foreground">
                Self-awareness, empathy, social skills
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">7. Leadership</p>
              <p className="text-muted-foreground">
                Influence, decision-making, accountability
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-bold text-pink-600">8. Work Ethic</p>
              <p className="text-muted-foreground">
                Reliability, initiative, professionalism
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Develop */}
        <section
          id="develop"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            3. How to Develop Them
          </h2>

          <h3>Communication</h3>
          <ul>
            <li>Practice public speaking (Toastmasters, college clubs)</li>
            <li>Write regularly (blog, LinkedIn posts)</li>
            <li>Listen more than you speak</li>
          </ul>

          <h3>Teamwork</h3>
          <ul>
            <li>Join group projects and clubs</li>
            <li>Take on collaborative roles</li>
            <li>Learn to give and receive feedback</li>
          </ul>

          <h3>Leadership</h3>
          <ul>
            <li>Take initiative in group settings</li>
            <li>Organize events or lead projects</li>
            <li>Mentor juniors</li>
          </ul>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> Pick ONE skill to focus on for 3 months.
              Deliberate practice beats scattered effort.
            </div>
          </div>
        </section>

        {/* Section 4: Practice */}
        <section
          id="practice"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Handshake className="h-6 w-6 text-primary" />
            4. Practice Opportunities
          </h2>

          <ul>
            <li>
              <strong>College clubs:</strong> Great low-stakes environment
            </li>
            <li>
              <strong>Part-time jobs:</strong> Customer service builds
              communication
            </li>
            <li>
              <strong>Volunteering:</strong> Leadership and teamwork practice
            </li>
            <li>
              <strong>Group projects:</strong> Real collaboration experience
            </li>
            <li>
              <strong>Online communities:</strong> Writing and networking
              practice
            </li>
          </ul>
        </section>

        {/* Section 5: Showcase */}
        <section
          id="showcase"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            5. Showcasing in Interviews
          </h2>

          <p>Use the STAR method to demonstrate soft skills:</p>
          <ul>
            <li>
              <strong>Situation:</strong> Set the context
            </li>
            <li>
              <strong>Task:</strong> What was your responsibility
            </li>
            <li>
              <strong>Action:</strong> What you specifically did
            </li>
            <li>
              <strong>Result:</strong> The outcome and what you learned
            </li>
          </ul>

          <p className="mt-4">Example prompts:</p>
          <ul>
            <li>"Tell me about a time you handled conflict in a team"</li>
            <li>"Describe a situation where you had to adapt quickly"</li>
            <li>"Give an example of leading a project"</li>
          </ul>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">
                I'm an introvert. Can I develop these skills?
              </p>
              <p className="mt-2 text-muted-foreground">
                Absolutely. Soft skills aren't about personality—they're about
                behavior. Introverts can be excellent communicators and leaders.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                How do I mention soft skills on my resume?
              </p>
              <p className="mt-2 text-muted-foreground">
                Don't just list them. Show them through achievements: "Led a
                team of 5" demonstrates leadership. "Increased engagement by
                50%" shows communication impact.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Develop Your Full Potential</h2>
          <p>
            Technical skills are the price of admission. Soft skills are what
            make you successful. Invest in both.
          </p>
          <p className="text-lg font-semibold text-primary">
            People want to work with people they like. Be someone people want to
            work with. 💪
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/communication-skills-interns"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Communication Skills
            </Link>
            <Link
              href="/blog/behavioral-interview-questions-answers"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Behavioral Interviews
            </Link>
            <Link
              href="/blog/networking-for-introverts"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Networking Guide
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

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on research on hiring trends and workplace success
                factors.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
