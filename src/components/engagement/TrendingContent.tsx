import Link from 'next/link';
import {
  Calculator,
  FileText,
  MessageSquare,
  Clock,
  Target,
  Lightbulb,
  Gamepad2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface TrendingItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  tag: string;
}

const trendingItems: TrendingItem[] = [
  {
    title: 'CGPA to Percentage Calculator',
    description:
      'Convert your CGPA to percentage for 25+ universities including Anna, VTU, JNTU, and Mumbai.',
    href: '/tools/cgpa-converter',
    icon: Calculator,
    color: 'from-blue-500 to-cyan-500',
    tag: 'Most Popular',
  },
  {
    title: 'Typing Speed Test',
    description:
      'Practice your typing speed for TCS, Wipro, and Infosys assessments. Track WPM and accuracy.',
    href: '/tools/typing-test',
    icon: Clock,
    color: 'from-purple-500 to-pink-500',
    tag: 'Trending',
  },
  {
    title: 'Resume Score Checker',
    description:
      'Get your resume scored by AI. Check ATS compatibility, keyword density, and formatting.',
    href: '/tools/resume-score-checker',
    icon: FileText,
    color: 'from-green-500 to-emerald-500',
    tag: 'AI-Powered',
  },
  {
    title: 'Interview Questions Bank',
    description:
      'Company-specific interview questions for top MNCs with detailed solutions.',
    href: '/tools/interview-questions',
    icon: MessageSquare,
    color: 'from-orange-500 to-amber-500',
    tag: 'High Intent',
  },
  {
    title: 'Career Roadmap Generator',
    description:
      'Get a personalized learning path for Software Engineering, AI/ML, Data Science, and more.',
    href: '/tools/career-roadmap',
    icon: Target,
    color: 'from-red-500 to-rose-500',
    tag: 'Personalized',
  },
  {
    title: 'Brain Training Games',
    description:
      '162+ educational games for logical reasoning, memory training, and aptitude preparation.',
    href: '/games',
    icon: Gamepad2,
    color: 'from-indigo-500 to-violet-500',
    tag: '162+ Games',
  },
];

/**
 * TrendingContent - Shows popular/trending content across the site
 * Drives cross-navigation and increases pages per session.
 * Server component for zero JS overhead.
 */
export function TrendingContent() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div className="glass-strong mb-6 inline-flex items-center gap-3 rounded-full px-6 py-3 shadow-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-gradient text-sm font-bold tracking-wide">
                POPULAR WITH STUDENTS
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-black md:text-4xl">
              <span className="text-gradient">Popular Tools</span> Worth
              Opening Next
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore the tools students use most for interview preparation,
              career planning, and academic decision-making.
            </p>
          </div>

          {/* Trending Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trendingItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`}
                />

                {/* Tag badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${item.color} px-3 py-1`}
                  >
                    <Sparkles className="h-3 w-3 text-white" />
                    <span className="text-xs font-bold text-white">
                      {item.tag}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100" />
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <item.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold transition-colors duration-200 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
            >
              Explore 90+ Tools
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
            >
              Read Career Guides
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/interview-experiences"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
            >
              Real Interview Stories
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
