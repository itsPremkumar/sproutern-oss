import Link from 'next/link';
import { ArrowRight, Compass, Flame } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type SectionKey =
  | 'tools'
  | 'blog'
  | 'resources'
  | 'countries'
  | 'global-career-guide'
  | 'companies'
  | 'freshers'
  | 'college'
  | 'school'
  | 'internships'
  | 'interview-experiences'
  | 'roadmaps'
  | 'scholarships'
  | 'compare';

interface DiscoveryItem {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface DiscoveryConfig {
  eyebrow: string;
  title: string;
  description: string;
  items: DiscoveryItem[];
}

const popularLinks: DiscoveryItem[] = [
  {
    title: 'CGPA Converter',
    description: 'Convert grades using university-specific formulas.',
    href: '/tools/cgpa-converter',
    badge: 'Popular tool',
  },
  {
    title: 'Salary Calculator',
    description: 'Estimate in-hand salary and compare compensation.',
    href: '/tools/salary-calculator',
    badge: 'Decision support',
  },
  {
    title: 'Resume Score Checker',
    description: 'Improve ATS readiness before you apply.',
    href: '/tools/resume-score-checker',
    badge: 'High intent',
  },
  {
    title: 'Interview Prep Hub',
    description: 'Use guides, patterns, and practice resources together.',
    href: '/resources/interview-prep',
    badge: 'Placement prep',
  },
  {
    title: 'Study in USA Guide',
    description: 'Costs, visas, and job pathways in one place.',
    href: '/countries/usa',
    badge: 'Global traffic',
  },
];

const discoveryConfigs: Record<SectionKey, DiscoveryConfig> = {
  tools: {
    eyebrow: 'Related pages',
    title: 'Pair tools with the next action',
    description:
      'Students convert better when a calculator, checklist, and decision guide support the same task.',
    items: [
      {
        title: 'Resume Score Checker',
        description: 'Audit your resume before applying to internships or jobs.',
        href: '/tools/resume-score-checker',
        badge: 'ATS',
      },
      {
        title: 'Salary Calculator',
        description: 'Compare CTC, deductions, and take-home pay side by side.',
        href: '/tools/salary-calculator',
        badge: 'Offers',
      },
      {
        title: 'GPA Converter',
        description: 'Translate grades for international applications and admissions.',
        href: '/tools/gpa-converter',
        badge: 'Study abroad',
      },
      {
        title: 'Study Planner',
        description: 'Turn goals into a repeatable daily and weekly study system.',
        href: '/tools/study-planner',
        badge: 'Productivity',
      },
    ],
  },
  blog: {
    eyebrow: 'Keep reading',
    title: 'Move from advice to action',
    description:
      'Use supporting tools and destination pages to turn an article into a concrete next step.',
    items: [
      {
        title: 'Interview Prep Hub',
        description: 'Practice frameworks, question banks, and checklists in one place.',
        href: '/resources/interview-prep',
        badge: 'Prep',
      },
      {
        title: 'Resume Score Checker',
        description: 'Test whether your resume matches the role you want.',
        href: '/tools/resume-score-checker',
        badge: 'Tool',
      },
      {
        title: 'Company Guides',
        description: 'Review hiring patterns, salary ranges, and work culture.',
        href: '/companies',
        badge: 'Research',
      },
      {
        title: 'Interview Experiences',
        description: 'Read real candidate stories before your next round.',
        href: '/interview-experiences',
        badge: 'Stories',
      },
    ],
  },
  resources: {
    eyebrow: 'Related pages',
    title: 'Build a practical resource stack',
    description:
      'Strong evergreen hubs work better when templates, practice, and decision tools are linked together.',
    items: [
      {
        title: 'Resume Guide',
        description: 'Learn how to structure a recruiter-friendly resume from scratch.',
        href: '/resources/resume-guide',
        badge: 'Resume',
      },
      {
        title: 'Interview Preparation',
        description: 'Cover technical, HR, and behavioral rounds without scattered notes.',
        href: '/resources/interview-prep',
        badge: 'Interview',
      },
      {
        title: 'Career Planning',
        description: 'Map goals, milestones, and role transitions more clearly.',
        href: '/resources/career-planning',
        badge: 'Planning',
      },
      {
        title: 'Skill Development',
        description: 'Find learning paths for the skills employers actually screen for.',
        href: '/resources/skill-development',
        badge: 'Skills',
      },
    ],
  },
  countries: {
    eyebrow: 'Explore next',
    title: 'Compare countries with context',
    description:
      'Country pages perform better when budget, admissions, and career tools are only one click away.',
    items: [
      {
        title: 'Study in USA',
        description: 'Review tuition, visa flow, and job opportunities in the US.',
        href: '/countries/usa',
        badge: 'Top destination',
      },
      {
        title: 'Study in Germany',
        description: 'Compare public universities, blocked accounts, and work rights.',
        href: '/countries/germany',
        badge: 'High intent',
      },
      {
        title: 'Study in Canada',
        description: 'Check costs, PGWP routes, and student living considerations.',
        href: '/countries/canada',
        badge: 'Popular',
      },
      {
        title: 'GPA Converter',
        description: 'Translate grades before shortlisting universities abroad.',
        href: '/tools/gpa-converter',
        badge: 'Admissions',
      },
    ],
  },
  'global-career-guide': {
    eyebrow: 'Global career paths',
    title: 'Turn country research into a plan',
    description:
      'Global career content works best when role, destination, and qualification tools are connected.',
    items: [
      {
        title: 'USA Career Guide',
        description: 'Explore salaries, visas, and employer expectations in the US.',
        href: '/global-career-guide/usa',
        badge: 'Jobs abroad',
      },
      {
        title: 'Countries Hub',
        description: 'Compare study and work pathways across major destinations.',
        href: '/countries',
        badge: 'Compare',
      },
      {
        title: 'Germany Guide',
        description: 'Review Blue Card pathways, salaries, and relocation tradeoffs.',
        href: '/countries/germany',
        badge: 'EU option',
      },
      {
        title: 'GPA Converter',
        description: 'Prepare transcripts and conversions for international applications.',
        href: '/tools/gpa-converter',
        badge: 'Eligibility',
      },
    ],
  },
  companies: {
    eyebrow: 'Related pages',
    title: 'Research companies from multiple angles',
    description:
      'Interview pages rank better when comparison, salary, and practice intent stay tightly connected.',
    items: [
      {
        title: 'Company Comparisons',
        description: 'Compare salary, culture, and interview difficulty side by side.',
        href: '/compare',
        badge: 'Compare',
      },
      {
        title: 'Interview Experiences',
        description: 'Read real student experiences before a specific interview loop.',
        href: '/interview-experiences',
        badge: 'Real stories',
      },
      {
        title: 'Interview Question Generator',
        description: 'Generate role-specific questions to practice beyond static lists.',
        href: '/tools/interview-questions',
        badge: 'Practice',
      },
      {
        title: 'Google Guide',
        description: 'See how a top product-company guide is structured end to end.',
        href: '/companies/google',
        badge: 'Flagship',
      },
    ],
  },
  freshers: {
    eyebrow: 'Career basics',
    title: 'Turn fresher advice into a job-ready workflow',
    description:
      'Freshers need linked guides for offers, resumes, interviews, and the first 90 days at work.',
    items: [
      {
        title: 'First Job Guide',
        description: 'Learn what changes between campus placement and day one on the job.',
        href: '/freshers/first-job-guide',
        badge: 'Start here',
      },
      {
        title: 'Salary Negotiation',
        description: 'Use scripts and decision rules before accepting an offer.',
        href: '/freshers/salary-negotiation',
        badge: 'Offer stage',
      },
      {
        title: 'Resume Score Checker',
        description: 'Improve your resume before you send the next application.',
        href: '/tools/resume-score-checker',
        badge: 'ATS',
      },
      {
        title: 'Internship Listings',
        description: 'Build experience early if you are still converting from student to hire.',
        href: '/internships',
        badge: 'Pipeline',
      },
    ],
  },
  college: {
    eyebrow: 'College to career',
    title: 'Connect academics to placements',
    description:
      'Semester planning, internships, and skill-building work best as one linked journey instead of isolated pages.',
    items: [
      {
        title: 'Semester Planner',
        description: 'Organize credits, deadlines, and exam cycles in one place.',
        href: '/college/semester-planner',
        badge: 'Planning',
      },
      {
        title: 'First Year Guide',
        description: 'Build the right habits early instead of fixing them late.',
        href: '/college/first-year-guide',
        badge: 'Foundation',
      },
      {
        title: 'Internships',
        description: 'See current opportunities and prepare before application windows open.',
        href: '/internships',
        badge: 'Experience',
      },
      {
        title: 'Scholarships',
        description: 'Find funding support for academics, projects, and higher study.',
        href: '/scholarships',
        badge: 'Funding',
      },
    ],
  },
  school: {
    eyebrow: 'School planning',
    title: 'Keep academic choices connected to long-term outcomes',
    description:
      'Evergreen school content performs better when stream choice, exam prep, scholarships, and after-school options are tied together.',
    items: [
      {
        title: 'After 10th Guide',
        description: 'Compare streams based on interests, subjects, and career routes.',
        href: '/school/after-10th-guide',
        badge: 'Popular',
      },
      {
        title: 'After 12th Guide',
        description: 'Explore degree paths, entrance exams, and next-step decisions.',
        href: '/school/after-12th-guide',
        badge: 'Essential',
      },
      {
        title: 'Competitive Exams',
        description: 'Review recurring exam cycles and plan preparation windows early.',
        href: '/school/competitive-exams',
        badge: 'Exam prep',
      },
      {
        title: 'Scholarships',
        description: 'Reduce financial pressure by shortlisting relevant funding options.',
        href: '/scholarships',
        badge: 'Funding',
      },
    ],
  },
  internships: {
    eyebrow: 'Next steps',
    title: 'Use internships as part of a broader application system',
    description:
      'Listings convert better when resume, interview, and company research pages are linked from the same session.',
    items: [
      {
        title: 'Resume Score Checker',
        description: 'Improve your application before sending it to recruiters.',
        href: '/tools/resume-score-checker',
        badge: 'Resume',
      },
      {
        title: 'Application Tracker',
        description: 'Track responses, follow-ups, and interviews in one place.',
        href: '/tools/application-tracker',
        badge: 'Workflow',
      },
      {
        title: 'Company Guides',
        description: 'Study the hiring process before you apply to a target employer.',
        href: '/companies',
        badge: 'Research',
      },
      {
        title: 'Interview Prep',
        description: 'Practice common rounds before the internship process starts.',
        href: '/resources/interview-prep',
        badge: 'Prepare',
      },
    ],
  },
  'interview-experiences': {
    eyebrow: 'Interview preparation',
    title: 'Use stories together with practice pages',
    description:
      'Experience pages are strongest when readers can jump directly to tools, company guides, and comparison pages.',
    items: [
      {
        title: 'Company Guides',
        description: 'Review company-specific process, salary, and role context.',
        href: '/companies',
        badge: 'Company research',
      },
      {
        title: 'Interview Question Generator',
        description: 'Create a custom practice set after reading a real experience.',
        href: '/tools/interview-questions',
        badge: 'Practice',
      },
      {
        title: 'Aptitude Mock Test',
        description: 'Prepare for screening rounds before the interview loop begins.',
        href: '/tools/aptitude-test',
        badge: 'Test',
      },
      {
        title: 'Company Comparisons',
        description: 'Compare two employers if you are deciding between interview tracks.',
        href: '/compare',
        badge: 'Decision',
      },
    ],
  },
  roadmaps: {
    eyebrow: 'Career paths',
    title: 'Turn roadmaps into execution plans',
    description:
      'Career path pages get stronger when they connect learning plans, tools, and job-facing preparation.',
    items: [
      {
        title: 'Career Roadmap Tool',
        description: 'Generate a structured path instead of building one from scratch.',
        href: '/tools/career-roadmap',
        badge: 'Tool',
      },
      {
        title: 'Skill Development',
        description: 'Match a roadmap with curated learning resources and study focus.',
        href: '/resources/skill-development',
        badge: 'Learning',
      },
      {
        title: 'First Job Guide',
        description: 'See how roadmap decisions connect to the first role you accept.',
        href: '/freshers/first-job-guide',
        badge: 'Career launch',
      },
      {
        title: 'Interview Experiences',
        description: 'Study real hiring stories from the roles you want to target.',
        href: '/interview-experiences',
        badge: 'Examples',
      },
    ],
  },
  scholarships: {
    eyebrow: 'Funding support',
    title: 'Connect scholarships with destination and planning pages',
    description:
      'Scholarship traffic grows when eligibility, destination, and academic-planning pages are interlinked.',
    items: [
      {
        title: 'Countries Hub',
        description: 'Compare destination costs before shortlisting scholarships.',
        href: '/countries',
        badge: 'Study abroad',
      },
      {
        title: 'College Guide',
        description: 'See how scholarships fit into college planning and applications.',
        href: '/college',
        badge: 'College',
      },
      {
        title: 'School Study Abroad Guide',
        description: 'Plan international undergraduate options earlier in the journey.',
        href: '/school/study-abroad',
        badge: 'Undergrad',
      },
      {
        title: 'GPA Converter',
        description: 'Prepare academic conversions often needed for applications.',
        href: '/tools/gpa-converter',
        badge: 'Eligibility',
      },
    ],
  },
  compare: {
    eyebrow: 'Decision support',
    title: 'Compare employers with supporting evidence',
    description:
      'Comparison pages work better when interview stories, company guides, and practice tools sit next to them.',
    items: [
      {
        title: 'Company Guides',
        description: 'Open company-specific pages for deeper interview and culture context.',
        href: '/companies',
        badge: 'Deep dive',
      },
      {
        title: 'Interview Experiences',
        description: 'Use real student experiences to validate comparison patterns.',
        href: '/interview-experiences',
        badge: 'First-hand',
      },
      {
        title: 'Salary Calculator',
        description: 'Convert salary thinking into a practical take-home decision.',
        href: '/tools/salary-calculator',
        badge: 'Compensation',
      },
      {
        title: 'Interview Question Generator',
        description: 'Practice for whichever company you choose next.',
        href: '/tools/interview-questions',
        badge: 'Practice',
      },
    ],
  },
};

interface SectionDiscoveryLinksProps {
  section: SectionKey;
  className?: string;
  contentClassName?: string;
}

export function SectionDiscoveryLinks({
  section,
  className,
  contentClassName,
}: SectionDiscoveryLinksProps) {
  const config = discoveryConfigs[section];

  return (
    <section
      className={cn('border-t bg-gradient-to-b from-background to-muted/20 py-12', className)}
    >
      <div className={cn('container', contentClassName)}>
        <div className="mb-8 max-w-3xl">
          <Badge
            variant="secondary"
            className="mb-3 gap-2 px-3 py-1 text-xs font-semibold"
          >
            <Compass className="h-3.5 w-3.5" />
            {config.eyebrow}
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {config.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
            {config.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {config.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group"
            >
              <Card className="h-full border-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg transition-colors group-hover:text-primary">
                      {item.title}
                    </CardTitle>
                    {item.badge ? (
                      <Badge
                        variant="outline"
                        className="shrink-0"
                      >
                        {item.badge}
                      </Badge>
                    ) : null}
                  </div>
                  <CardDescription className="text-sm leading-6">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-background/80 p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <Flame className="h-4 w-4 text-primary" />
            Popular with students
          </div>
          <div className="flex flex-wrap gap-3">
            {popularLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <span>{item.title}</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
