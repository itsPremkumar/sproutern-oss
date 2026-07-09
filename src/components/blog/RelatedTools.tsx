import Link from 'next/link';
import {
  Calculator,
  FileText,
  DollarSign,
  Type,
  TrendingUp,
  Brain,
} from 'lucide-react';

interface RelatedTool {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: string;
}

const TOOLS: RelatedTool[] = [
  {
    name: 'Salary Calculator',
    description: 'Calculate your in-hand salary with tax breakdowns',
    href: '/tools/salary-calculator',
    icon: DollarSign,
    color: 'text-green-600',
  },
  {
    name: 'Resume Score Checker',
    description: 'Get instant AI feedback on your resume',
    href: '/tools/resume-score-checker',
    icon: FileText,
    color: 'text-blue-600',
  },
  {
    name: 'CGPA to Percentage',
    description: 'Convert your academic scores instantly',
    href: '/tools/cgpa-converter',
    icon: Calculator,
    color: 'text-purple-600',
  },
  {
    name: 'Typing Speed Test',
    description: 'Test and improve your typing WPM',
    href: '/tools/typing-test',
    icon: Type,
    color: 'text-orange-600',
  },
  {
    name: 'Career Roadmap',
    description: 'Generate a personalized learning path',
    href: '/tools/career-roadmap',
    icon: TrendingUp,
    color: 'text-red-600',
  },
  {
    name: 'Aptitude Test',
    description: 'Practice for your upcoming interviews',
    href: '/tools/aptitude-test',
    icon: Brain,
    color: 'text-indigo-600',
  },
];

export function RelatedTools() {
  // Randomly select 3 tools to keep it dynamic and not overwhelming
  // In a real app, this could be context-aware based on the blog post category
  const selectedTools = TOOLS.slice(0, 3);

  return (
    <div className="not-prose my-12 rounded-xl border border-muted bg-muted/30 p-6 md:p-8">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-bold text-foreground">
            Boost Your Career Preparation
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Free tools to help you land your dream job
          </p>
        </div>
        <Link
          href="/tools"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View All Tools
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {selectedTools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10">
              <tool.icon className={`h-5 w-5 ${tool.color}`} />
            </div>
            <h4 className="font-semibold text-foreground group-hover:text-primary">
              {tool.name}
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
