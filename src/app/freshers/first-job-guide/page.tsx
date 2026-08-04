import { Metadata } from 'next';
import Link from 'next/link';
import {
  Briefcase,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Star,
  Users,
  TrendingUp,
  Calendar,
  Award,
  BookOpen,
  MessageSquare,
  Heart,
  Shield,
  Lightbulb,
  Building,
  DollarSign,
  Coffee,
  Laptop,
  FileText,
  Phone,
  MapPin,
  HelpCircle,
  Zap,
  Brain,
  ThumbsUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'First Job Guide for Freshers',
  description:
    'Comprehensive first job guide for freshers covering first 90 days roadmap, workplace expectations, manager relationships, performance reviews, and common mistakes to avoid when starting your career.',
  keywords:
    'first job tips, fresher career guide, first job expectations, first 90 days job, new job tips, workplace guide freshers, career start guide',
  openGraph: {
    title: 'First Job Guide - Complete Career Start Handbook',
    description: 'Everything you need to succeed in your first job.',
    type: 'article',
    url: 'https://sproutern.dpdns.org/freshers/first-job-guide',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/freshers/first-job-guide',
  },
};

const first90DaysDetailed = [
  {
    week: 'Week 1',
    title: 'The Foundation',
    priority: 'Observe & Learn',
    color: 'bg-green-500',
    tasks: [
      'Complete all joining formalities and documentation',
      'Set up your workstation, email, and essential tools',
      'Meet your immediate team and understand roles',
      'Attend all orientation sessions attentively',
      'Understand your manager expectations clearly',
      'Learn company communication tools (Slack, Teams, etc.)',
      'Locate important facilities (cafeteria, meeting rooms, etc.)',
    ],
    doNot: [
      'Dont try to impress by taking on too much',
      'Dont criticize existing processes',
      'Dont compare loudly with previous internships',
    ],
    tips: 'Listen 80%, speak 20%. Take notes. Ask questions. Be punctual.',
  },
  {
    week: 'Week 2-3',
    title: 'Building Momentum',
    priority: 'Learn & Contribute',
    color: 'bg-blue-500',
    tasks: [
      'Start on assigned training modules',
      'Understand team processes and workflows',
      'Take ownership of small tasks assigned',
      'Begin building relationships with teammates',
      'Set up 1:1 with your manager',
      'Learn the codebase/systems relevant to your role',
      'Document your learnings systematically',
    ],
    doNot: [
      'Dont hesitate to ask questions',
      'Dont work in isolation',
      'Dont commit to deadlines you cant keep',
    ],
    tips: 'Over-communicate status. Shadow seniors. Build rapport.',
  },
  {
    week: 'Week 4-6',
    title: 'Finding Your Groove',
    priority: 'Contribute & Grow',
    color: 'bg-purple-500',
    tasks: [
      'Complete initial training and certification',
      'Start contributing to actual projects',
      'Seek feedback proactively from manager',
      'Identify areas where you can add value',
      'Build cross-team relationships',
      'Start understanding business context',
      'Document achievements and learnings',
    ],
    doNot: [
      'Dont get complacent after initial success',
      'Dont avoid difficult tasks',
      'Dont forget to track your wins',
    ],
    tips: 'Quality work matters. Meet deadlines. Be reliable.',
  },
  {
    week: 'Week 7-12',
    title: 'Establishing Value',
    priority: 'Deliver & Shine',
    color: 'bg-orange-500',
    tasks: [
      'Take ownership of significant tasks',
      'Demonstrate consistent performance',
      'Build expertise in your area',
      'Network across the organization',
      'Seek stretch opportunities',
      'Prepare for probation completion',
      'Set goals for next quarter with manager',
    ],
    doNot: [
      'Dont become a one-trick pony',
      'Dont ignore feedback',
      'Dont forget to balance work-life',
    ],
    tips: 'Document achievements for review. Show initiative. Be visible.',
  },
];

const workplaceExpectations = [
  {
    expect: 'Structured Onboarding',
    reality:
      'Many companies have limited onboarding. Be proactive in seeking information and training.',
    tip: 'Create your own learning plan. Ask seniors for resources.',
  },
  {
    expect: 'Immediate Interesting Work',
    reality:
      'First few months involve mundane tasks, learning processes. Interesting work comes later.',
    tip: 'Master basics first. Prove reliability before asking for exciting work.',
  },
  {
    expect: 'Constant Guidance',
    reality:
      'Managers are busy. Youll need to figure out many things independently.',
    tip: 'Research before asking. Block manager time for 1:1s.',
  },
  {
    expect: 'Perfect Work Environment',
    reality:
      'Every workplace has politics, imperfect processes, and challenges.',
    tip: 'Focus on what you can control. Adapt and learn.',
  },
  {
    expect: 'Quick Promotions',
    reality:
      'Promotions take 1-2+ years. First year is about learning and proving yourself.',
    tip: 'Focus on learning, not titles. Build skills for long-term.',
  },
  {
    expect: 'Work-Life Balance Always',
    reality:
      'There will be crunch times, deadlines, and occasional long hours.',
    tip: 'Push during crunch. Set boundaries during normal times.',
  },
];

const managerRelationship = [
  {
    do: 'Schedule regular 1:1 meetings',
    why: 'Builds relationship. Gets feedback. Aligns expectations.',
    how: 'Request weekly 30-min 1:1. Come prepared with updates and questions.',
  },
  {
    do: 'Communicate proactively',
    why: 'No surprises. Builds trust. Shows professionalism.',
    how: 'Update on progress, blockers, and concerns before manager asks.',
  },
  {
    do: 'Ask for feedback',
    why: 'Shows growth mindset. Helps improve. Demonstrates maturity.',
    how: 'Ask specific questions: "How can I improve X?" not just "Any feedback?"',
  },
  {
    do: 'Understand their priorities',
    why: 'Helps align your work. Shows business awareness.',
    how: 'Ask what success looks like. Understand team goals and pressures.',
  },
  {
    do: 'Own your mistakes',
    why: 'Builds trust. Shows integrity. Everyone makes mistakes.',
    how: 'Admit quickly. Explain what happened. Share how youll prevent it.',
  },
  {
    do: 'Manage up effectively',
    why: 'Makes their job easier. Increases your visibility.',
    how: 'Provide status updates. Flag risks early. Suggest solutions not just problems.',
  },
];

const commonMistakes = [
  {
    mistake: 'Not asking questions',
    impact: 'Wasted time, wrong work, appears incompetent later',
    solution: 'Ask early. No stupid questions. Document answers for future.',
    severity: 'High',
  },
  {
    mistake: 'Over-promising deadlines',
    impact: 'Stress, poor quality, broken trust',
    solution: 'Add buffer. Ask for clarification. Update early if delayed.',
    severity: 'High',
  },
  {
    mistake: 'Living in comfort zone',
    impact: 'Limited growth, missed opportunities, stagnation',
    solution: 'Volunteer for new things. Say yes to challenges.',
    severity: 'Medium',
  },
  {
    mistake: 'Ignoring soft skills',
    impact: 'Limited career growth. Technical skills plateau.',
    solution: 'Work on communication, presentation, teamwork actively.',
    severity: 'High',
  },
  {
    mistake: 'Comparing with others',
    impact: 'Demotivation, unnecessary stress, poor decisions',
    solution: 'Focus on own growth. Everyone has different journeys.',
    severity: 'Medium',
  },
  {
    mistake: 'Not documenting work',
    impact: 'Forgotten achievements, weak performance reviews',
    solution: 'Keep weekly log. Note accomplishments. Quantify impact.',
    severity: 'Medium',
  },
  {
    mistake: 'Burning bridges',
    impact: 'Bad reputation, missed references, small industry',
    solution: 'Leave gracefully. Stay professional. Network matters.',
    severity: 'High',
  },
  {
    mistake: 'All work no network',
    impact: 'Limited opportunities, no visibility, isolation',
    solution: 'Attend events. Coffee chats. LinkedIn activity.',
    severity: 'Medium',
  },
  {
    mistake: 'Job hopping too quickly',
    impact: 'Resume red flags, limited depth, instability',
    solution: 'Stay minimum 1-2 years. Build depth before switching.',
    severity: 'High',
  },
  {
    mistake: 'Ignoring company culture',
    impact: 'Friction with colleagues, missed cues, poor fit',
    solution: 'Observe norms. Adapt communication. Respect traditions.',
    severity: 'Medium',
  },
];

const performanceReviewPrep = [
  {
    phase: 'Throughout Year',
    action: 'Keep achievement journal',
    tip: 'Weekly notes on wins, challenges overcome, and impact created. Quantify wherever possible.',
  },
  {
    phase: '1 Month Before',
    action: 'Compile accomplishments',
    tip: 'List all projects, initiatives, learning. Get data on impact. Prepare examples.',
  },
  {
    phase: '2 Weeks Before',
    action: 'Self-assessment',
    tip: 'Honest reflection on strengths and growth areas. Prepare to discuss both.',
  },
  {
    phase: '1 Week Before',
    action: 'Prepare talking points',
    tip: 'Key achievements, challenges, learnings, and goals for next period.',
  },
  {
    phase: 'During Review',
    action: 'Listen actively',
    tip: 'Dont be defensive. Ask clarifying questions. Take notes.',
  },
  {
    phase: 'After Review',
    action: 'Document and act',
    tip: 'Write down feedback. Create action plan. Follow up on agreed items.',
  },
];

const professionalEtiquette = [
  {
    area: 'Email Communication',
    dos: [
      'Use clear subject lines',
      'Keep it concise',
      'Proofread before sending',
      'Follow up appropriately',
    ],
    donts: [
      'Reply all unnecessarily',
      'Use casual language initially',
      'Ignore emails',
      'Forward without context',
    ],
  },
  {
    area: 'Meetings',
    dos: ['Be punctual', 'Come prepared', 'Listen actively', 'Take notes'],
    donts: [
      'Multitask',
      'Interrupt others',
      'Dominate discussion',
      'Show up late',
    ],
  },
  {
    area: 'Slack/Teams',
    dos: [
      'Use appropriate channels',
      'Respond timely',
      'Use threads',
      'Set status correctly',
    ],
    donts: [
      'Overuse @here/@channel',
      'Have personal chats in work channels',
      'Ignore messages',
      'Be always available',
    ],
  },
  {
    area: 'Dress Code',
    dos: [
      'Follow company norms',
      'Dress slightly above average',
      'Neat and clean always',
    ],
    donts: ['Too casual initially', 'Ignore hygiene', 'Flashy clothes'],
  },
];

const skillsToDevlop = [
  {
    skill: 'Communication',
    importance: 'Critical',
    how: 'Practice writing emails, give presentations, speak up in meetings. Articulate thoughts clearly.',
    timeline: 'Ongoing',
  },
  {
    skill: 'Time Management',
    importance: 'High',
    how: 'Use calendar, prioritize tasks, batch similar work. Learn to say no appropriately.',
    timeline: 'First 3 months',
  },
  {
    skill: 'Domain Knowledge',
    importance: 'High',
    how: 'Read documentation, understand business, learn industry trends. Ask questions.',
    timeline: 'First 6 months',
  },
  {
    skill: 'Technical Skills',
    importance: 'High',
    how: 'Practice coding, learn new tools, take online courses. Build side projects.',
    timeline: 'Continuous',
  },
  {
    skill: 'Networking',
    importance: 'Medium',
    how: 'Attend events, LinkedIn activity, coffee chats with colleagues. Build relationships.',
    timeline: 'Ongoing',
  },
  {
    skill: 'Problem Solving',
    importance: 'High',
    how: 'Break down problems, research solutions, propose options. Dont just escalate.',
    timeline: 'First 6 months',
  },
];

const careerGrowthTips = [
  {
    tip: 'Find a Mentor',
    description:
      'Someone 3-5 years ahead. Can be internal or external. Guide your career decisions.',
    icon: Users,
  },
  {
    tip: 'Build T-Shaped Skills',
    description:
      'Deep expertise in one area + basic knowledge in adjacent areas. Specialist who can collaborate.',
    icon: Brain,
  },
  {
    tip: 'Visibility Matters',
    description:
      'Great work unseen is invisible. Present in meetings, write updates, share wins appropriately.',
    icon: Star,
  },
  {
    tip: 'Network Internally',
    description:
      'Cross-team relationships open opportunities. Internal transfers are easier than external.',
    icon: Building,
  },
  {
    tip: 'External Learning',
    description:
      'Company training is limited. Invest in courses, certifications, side projects.',
    icon: BookOpen,
  },
  {
    tip: 'Track Career, Not Just Job',
    description:
      'Think 5-10 years ahead. Current job is a step. Make decisions for career, not just salary.',
    icon: TrendingUp,
  },
];

const preJoiningChecklist = [
  {
    category: 'Documents',
    items: [
      'Offer letter signed copy',
      'ID proof (Aadhar, PAN, Passport)',
      '10th, 12th, Degree certificates',
      'Address proof',
      'Passport photos',
      'Previous employment proof',
      'Bank account details',
      'Medical certificates if required',
    ],
  },
  {
    category: 'Preparation',
    items: [
      'Research company news and products',
      'LinkedIn profile updated',
      'Self-introduction pitch ready',
      'Understand role expectations',
      'Professional email signature',
      'Note down questions to ask',
      'Arrange professional attire',
      'Route to office planned',
    ],
  },
  {
    category: 'Logistics',
    items: [
      'Accommodation sorted (if relocating)',
      'Local SIM card if needed',
      'Banking setup in new city',
      'Emergency contacts saved',
      'Health insurance details understood',
      'First months budget planned',
      'Essential items packed',
      'Leave buffer days for settling',
    ],
  },
];

const dailyHabits = [
  {
    habit: 'Arrive 10 mins early',
    benefit: 'Sets positive tone. Time to settle. Shows reliability.',
    priority: 'High',
  },
  {
    habit: 'Plan your day',
    benefit: 'Focus on priorities. Avoid reactive work. Sense of progress.',
    priority: 'High',
  },
  {
    habit: 'Take breaks',
    benefit: 'Avoid burnout. Fresh perspective. Better productivity overall.',
    priority: 'Medium',
  },
  {
    habit: 'End-of-day review',
    benefit: 'Track progress. Plan tomorrow. Ensure nothing missed.',
    priority: 'Medium',
  },
  {
    habit: 'Learn something new',
    benefit: 'Continuous growth. Stay relevant. Build expertise.',
    priority: 'High',
  },
  {
    habit: 'Connect with 1 person',
    benefit: 'Build network. Learn from others. Visibility.',
    priority: 'Medium',
  },
];

const faqs = [
  {
    question: 'What should I wear on my first day?',
    answer:
      'Dress slightly more formal than company norm for first week. Business casual is usually safe. Observe what others wear and adapt. When in doubt, ask HR beforehand. First impressions matter.',
    category: 'First Day',
  },
  {
    question: 'How early should I reach on first day?',
    answer:
      'Reach 15-20 minutes early on first day. Gives you time to find your way, settle nerves, and meet security/reception. Shows punctuality. Plan for traffic or commute delays.',
    category: 'First Day',
  },
  {
    question: 'What questions should I ask in first week?',
    answer:
      'Ask about role expectations, team goals, preferred communication, onboarding resources, success metrics, and who to approach for what. Show eagerness to learn without overwhelming people.',
    category: 'First Week',
  },
  {
    question: 'How to handle feeling overwhelmed?',
    answer:
      'Its normal to feel overwhelmed initially. Take notes, ask questions, prioritize learning basics. Talk to manager if workload is truly excessive. It gets better after first month.',
    category: 'Challenges',
  },
  {
    question: 'What if I make mistakes early on?',
    answer:
      'Everyone makes mistakes, especially new joiners. Own up quickly, apologize genuinely, and share how youll prevent it. Managers respect honesty. Hiding mistakes is worse.',
    category: 'Challenges',
  },
  {
    question: 'How often should I meet my manager?',
    answer:
      'Weekly 1:1s are ideal, minimum bi-weekly. Come prepared with updates, questions, and discussion points. Use this to align expectations and get feedback.',
    category: 'Manager',
  },
  {
    question: 'When should I start taking initiatives?',
    answer:
      'After 2-3 months when you understand context. Start with small suggestions. Dont criticize existing systems too early. Build credibility first through reliable work.',
    category: 'Growth',
  },
  {
    question: 'How to deal with difficult colleagues?',
    answer:
      'Stay professional. Dont gossip or complain publicly. Focus on work. If persistent issues, discuss with manager. Document serious problems. HR is last resort.',
    category: 'Challenges',
  },
  {
    question: 'How long before I can ask for raise?',
    answer:
      'Typically after first performance review (usually 1 year). Document achievements, research market rates. Ask during review cycle. Exceptional performance might enable earlier conversation.',
    category: 'Compensation',
  },
  {
    question: 'When is it okay to start looking for new job?',
    answer:
      'Ideally after 1-2 years minimum. Earlier only if toxic environment or significantly better opportunity. Frequent job hops hurt resume. Build depth and relationships first.',
    category: 'Career',
  },
];

export default function FirstJobGuidePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Freshers',
        item: 'https://sproutern.dpdns.org/freshers',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'First Job Guide',
        item: 'https://sproutern.dpdns.org/freshers/first-job-guide',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-20">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Briefcase className="mr-1 h-3 w-3" />
            Complete Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            First Job Guide for Freshers
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Everything you need to succeed in your first job - from day one to
            your first anniversary. Navigate the corporate world with
            confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="#first90days">First 90 Days</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="#mistakes">Avoid Mistakes</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="#manager">Manager Tips</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Clock className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">90</p>
              <p className="text-xs text-muted-foreground">
                Days to Prove Yourself
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Target className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Actionable Tips</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Award className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">1-2 Yrs</p>
              <p className="text-xs text-muted-foreground">
                Stay for Best Results
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <TrendingUp className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">10x</p>
              <p className="text-xs text-muted-foreground">Growth Year 1</p>
            </div>
          </div>
        </div>
      </section>

      {/* First 90 Days */}
      <section
        id="first90days"
        className="container py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            First 90 Days
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Your First 90 Days Roadmap
          </h2>
          <p className="text-muted-foreground">What to do week by week</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {first90DaysDetailed.map((period, i) => (
            <Card
              key={i}
              className="overflow-hidden"
            >
              <CardHeader className={`${period.color} text-white`}>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {period.week}: {period.title}
                  </span>
                  <Badge className="bg-white/20">{period.priority}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Key Tasks
                    </h4>
                    <ul className="space-y-1">
                      {period.tasks.map((task, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="mt-1 h-3 w-3 flex-shrink-0 text-green-600" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-600">
                      <AlertTriangle className="h-4 w-4" />
                      Dont
                    </h4>
                    <ul className="space-y-1">
                      {period.doNot.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="border-t pt-3 text-sm italic text-primary">
                    💡 {period.tips}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Workplace Expectations */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Expectations vs Reality</h2>
          <p className="text-muted-foreground">
            Adjust your expectations for smoother transition
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {workplaceExpectations.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold text-primary">
                  Expectation: {item.expect}
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>Reality:</strong> {item.reality}
                </p>
                <p className="text-sm">
                  <strong>Tip:</strong>{' '}
                  <span className="text-primary">{item.tip}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Manager Relationship */}
      <section
        id="manager"
        className="container py-12"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Users className="h-4 w-4" />
            Manager Tips
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Building Strong Manager Relationship
          </h2>
          <p className="text-muted-foreground">
            Your manager is key to your success
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {managerRelationship.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-2 font-semibold">{item.do}</h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>Why:</strong> {item.why}
                </p>
                <p className="text-sm">
                  <strong>How:</strong>{' '}
                  <span className="text-primary">{item.how}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section
        id="mistakes"
        className="container bg-red-50/50 py-12 dark:bg-red-950/20"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">
            <AlertTriangle className="h-4 w-4" />
            Critical
          </div>
          <h2 className="mb-2 text-3xl font-bold">Common First Job Mistakes</h2>
          <p className="text-muted-foreground">
            Avoid these career-limiting errors
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {commonMistakes.map((item, i) => (
            <Card
              key={i}
              className={
                item.severity === 'High'
                  ? 'border-l-4 border-l-red-500'
                  : 'border-l-4 border-l-yellow-500'
              }
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 dark:bg-red-900">
                    {i + 1}
                  </span>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-semibold">{item.mistake}</h3>
                      <Badge
                        variant={
                          item.severity === 'High' ? 'destructive' : 'outline'
                        }
                      >
                        {item.severity}
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      <strong>Impact:</strong> {item.impact}
                    </p>
                    <p className="text-sm">
                      <strong className="text-green-600">Solution:</strong>{' '}
                      {item.solution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Performance Review */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Preparing for Performance Reviews
          </h2>
          <p className="text-muted-foreground">Your first appraisal matters</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {performanceReviewPrep.map((item, i) => (
              <Card key={i}>
                <CardContent className="flex items-start gap-4 p-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <Badge variant="outline">{item.phase}</Badge>
                      <h3 className="font-semibold">{item.action}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Etiquette */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Professional Etiquette</h2>
          <p className="text-muted-foreground">
            Unwritten rules of the workplace
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {professionalEtiquette.map((item, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-3 text-lg font-bold">{item.area}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-green-600">
                      ✓ Do
                    </h4>
                    <ul className="space-y-1">
                      {item.dos.map((d, j) => (
                        <li
                          key={j}
                          className="text-xs"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-red-600">
                      ✗ Dont
                    </h4>
                    <ul className="space-y-1">
                      {item.donts.map((d, j) => (
                        <li
                          key={j}
                          className="text-xs"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills to Develop */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Skills to Develop First Year
          </h2>
          <p className="text-muted-foreground">Beyond technical skills</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillsToDevlop.map((skill, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold">{skill.skill}</h3>
                  <Badge
                    variant={
                      skill.importance === 'Critical'
                        ? 'destructive'
                        : skill.importance === 'High'
                          ? 'default'
                          : 'secondary'
                    }
                  >
                    {skill.importance}
                  </Badge>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  {skill.how}
                </p>
                <p className="text-xs">
                  <strong>Timeline:</strong> {skill.timeline}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Career Growth Tips */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Long-Term Career Growth</h2>
          <p className="text-muted-foreground">Thinking beyond first year</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {careerGrowthTips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-3 p-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <tip.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{tip.tip}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pre-Joining Checklist */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Pre-Joining Checklist</h2>
          <p className="text-muted-foreground">Prepare before your first day</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {preJoiningChecklist.map((category, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2"
                    >
                      <input
                        type="checkbox"
                        className="mt-1"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Daily Habits */}
      <section className="container bg-muted/30 py-12">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Daily Success Habits</h2>
          <p className="text-muted-foreground">Small habits that compound</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dailyHabits.map((habit, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{habit.habit}</h3>
                  <Badge
                    variant={
                      habit.priority === 'High' ? 'default' : 'secondary'
                    }
                  >
                    {habit.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{habit.benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container py-12">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <HelpCircle className="h-4 w-4" />
            FAQs
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="mb-2 flex items-start gap-2">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <Badge
                      variant="outline"
                      className="mb-1"
                    >
                      {faq.category}
                    </Badge>
                    <h3 className="font-semibold">{faq.question}</h3>
                  </div>
                </div>
                <p className="pl-8 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-12">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Briefcase className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Ready for Your First Job?
            </h2>
            <p className="mb-6 opacity-90">
              Remember - first year is for learning. Be patient, stay curious,
              and build strong foundations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/freshers/salary-negotiation">
                  Salary Negotiation Tips
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/companies">Company Reviews</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
