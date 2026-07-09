import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MessageSquare,
  Lightbulb,
  CheckCircle,
  XCircle,
  TrendingUp,
  Globe,
  Briefcase,
  Users,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Group Discussion Topics - GD Topics for Placements & MBA',
  description:
    'Latest Group Discussion (GD) topics for campus placements and MBA admissions. 50+ current affair, business, technology, and abstract GD topics with tips.',
  keywords: [
    'gd topics',
    'group discussion topics',
    'gd topics for interviews',
    'mba gd topics',
    'placement gd topics',
    'current affairs gd topics',
  ],
  canonical: '/tools/gd-topics',
});

interface GDTopic {
  topic: string;
  category:
    | 'Current Affairs'
    | 'Technology'
    | 'Business'
    | 'Social'
    | 'Abstract';
  points?: string[];
}

const gdTopics: GDTopic[] = [
  // Current Affairs
  {
    topic: 'AI regulation - Should governments control AI development?',
    category: 'Current Affairs',
  },
  {
    topic:
      'UPI and Digital Payments - Is India leading the fintech revolution?',
    category: 'Current Affairs',
  },
  {
    topic:
      'Work from Home vs Work from Office - Which is better for productivity?',
    category: 'Current Affairs',
  },
  {
    topic: 'Electric Vehicles - Can India achieve 100% EV adoption by 2030?',
    category: 'Current Affairs',
  },
  {
    topic:
      'Startup layoffs - Are startups growing too fast without sustainability?',
    category: 'Current Affairs',
  },
  { topic: 'Social Media Influence on Elections', category: 'Current Affairs' },
  {
    topic: 'Climate Change - Carbon tax for developing nations',
    category: 'Current Affairs',
  },
  {
    topic: 'Cryptocurrency - Should India ban or regulate it?',
    category: 'Current Affairs',
  },
  {
    topic: 'One Nation One Election - Pros and Cons',
    category: 'Current Affairs',
  },
  {
    topic: 'India as a Manufacturing Hub - Make in India 2.0',
    category: 'Current Affairs',
  },

  // Technology
  {
    topic: 'ChatGPT and AI - Will it replace human jobs?',
    category: 'Technology',
  },
  { topic: 'Data Privacy vs National Security', category: 'Technology' },
  {
    topic: '5G Technology - Opportunities and Challenges for India',
    category: 'Technology',
  },
  { topic: 'Blockchain beyond Cryptocurrency', category: 'Technology' },
  {
    topic: 'Automation - Boon or bane for developing economies?',
    category: 'Technology',
  },
  {
    topic: 'Deepfakes and Misinformation - How to combat?',
    category: 'Technology',
  },
  { topic: 'Space Exploration - Necessity or luxury?', category: 'Technology' },
  {
    topic: 'Online Education vs Traditional Education',
    category: 'Technology',
  },
  {
    topic: 'Digital India - Bridging the urban-rural divide',
    category: 'Technology',
  },
  { topic: 'Cybersecurity threats in the digital age', category: 'Technology' },

  // Business
  {
    topic: 'Unicorn startups - Valuation hype or real value?',
    category: 'Business',
  },
  {
    topic: 'Gig Economy - Future of work or exploitation?',
    category: 'Business',
  },
  {
    topic: 'MNCs vs Indian Companies - Where should freshers work?',
    category: 'Business',
  },
  { topic: 'Service-based vs Product-based companies', category: 'Business' },
  {
    topic: 'Entrepreneurship vs Stable job - What should youth choose?',
    category: 'Business',
  },
  { topic: 'E-commerce killing traditional retail', category: 'Business' },
  {
    topic: 'Foreign Direct Investment - Benefits and risks',
    category: 'Business',
  },
  {
    topic: 'Corporate Social Responsibility - Genuine or marketing?',
    category: 'Business',
  },
  {
    topic: 'Quick Commerce - Is 10-minute delivery sustainable?',
    category: 'Business',
  },
  {
    topic: 'Moonlighting - Should employees be allowed multiple jobs?',
    category: 'Business',
  },

  // Social
  { topic: 'Mental Health awareness in workplaces', category: 'Social' },
  { topic: 'Gender equality in corporate leadership', category: 'Social' },
  {
    topic: 'Education System - Rote learning vs practical learning',
    category: 'Social',
  },
  { topic: 'Brain Drain - Is it really a loss for India?', category: 'Social' },
  {
    topic: 'Reservation System - Does it still serve its purpose?',
    category: 'Social',
  },
  {
    topic: 'Social Media - Connecting or dividing people?',
    category: 'Social',
  },
  {
    topic: 'Nuclear Family vs Joint Family in modern India',
    category: 'Social',
  },
  { topic: 'Population - Asset or liability for India?', category: 'Social' },
  { topic: 'Youth participation in politics', category: 'Social' },
  {
    topic: 'Influencer culture - Positive or negative impact on youth?',
    category: 'Social',
  },

  // Abstract
  { topic: 'Sky is the limit', category: 'Abstract' },
  { topic: 'A bird in hand is worth two in the bush', category: 'Abstract' },
  { topic: 'Black is beautiful', category: 'Abstract' },
  { topic: 'Colors of life', category: 'Abstract' },
  { topic: 'Zero', category: 'Abstract' },
  { topic: 'Time is money', category: 'Abstract' },
  { topic: 'Silence speaks louder than words', category: 'Abstract' },
  {
    topic: 'Innovation distinguishes leaders from followers',
    category: 'Abstract',
  },
  {
    topic: 'A chain is only as strong as its weakest link',
    category: 'Abstract',
  },
  { topic: 'Blue ocean vs Red ocean', category: 'Abstract' },
];

// Global Topics for International Appeal
const globalTopics = [
  {
    topic: 'Global AI Regulation - EU vs US vs China approaches',
    category: 'Technology',
  },
  {
    topic: 'Remote Work Culture - Future of global workforce',
    category: 'Business',
  },
  {
    topic: 'Climate Change - Developed vs Developing nations responsibility',
    category: 'Current Affairs',
  },
  {
    topic: 'Universal Basic Income - Solution for automation displacement?',
    category: 'Social',
  },
  {
    topic: 'Data Colonialism - Big Tech and developing nations',
    category: 'Technology',
  },
  {
    topic: 'Global Education Systems - Finland vs Singapore vs USA',
    category: 'Social',
  },
  {
    topic: 'Green Energy Transition - Economic vs Environmental priorities',
    category: 'Current Affairs',
  },
  {
    topic: 'Global Supply Chain Restructuring post-pandemic',
    category: 'Business',
  },
  {
    topic: 'Brain Drain vs Brain Circulation in Developing Economies',
    category: 'Social',
  },
  {
    topic: 'Digital Nomad Visa - Future of Work and Immigration',
    category: 'Current Affairs',
  },
  {
    topic: 'FAANG Layoffs - Big Tech Bubble or Market Correction?',
    category: 'Business',
  },
  {
    topic: 'Global Minimum Corporate Tax - Fair or Restrictive?',
    category: 'Business',
  },
  {
    topic: 'Space Race 2.0 - Government vs Private Companies',
    category: 'Technology',
  },
  {
    topic: 'De-dollarization - Impact on Global Economy',
    category: 'Current Affairs',
  },
  {
    topic: 'Healthcare Systems - Private vs Public - Global Perspectives',
    category: 'Social',
  },
];

const dosAndDonts = {
  dos: [
    'Listen actively to others before speaking',
    'Support your arguments with facts and examples',
    'Acknowledge good points made by others',
    'Maintain eye contact with the group',
    'Speak clearly and at moderate pace',
    'Summarize if you get the chance',
    'Stay calm and composed',
    'Use gestures appropriately',
  ],
  donts: [
    "Don't interrupt others while speaking",
    "Don't get aggressive or personal",
    "Don't dominate the conversation",
    "Don't repeat what others have said",
    "Don't look only at the moderator",
    "Don't use slang or informal language",
    "Don't go off-topic",
    "Don't sit quietly without participating",
  ],
};

const categoryColors: Record<string, string> = {
  'Current Affairs':
    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Technology:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  Business: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Social:
    'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  Abstract: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
};

export default function GDTopicsPage() {
  const categories = [
    'Current Affairs',
    'Technology',
    'Business',
    'Social',
    'Abstract',
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <MessageSquare className="h-4 w-4" />
            Interview Preparation
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Group Discussion Topics
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            50+ curated GD topics for campus placements and MBA admissions. Stay
            updated with the latest current affairs and trending topics.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`rounded-xl p-4 text-center ${categoryColors[cat]}`}
            >
              <p className="text-2xl font-bold">
                {gdTopics.filter((t) => t.category === cat).length}
              </p>
              <p className="text-xs">{cat}</p>
            </div>
          ))}
        </div>

        {/* Do's and Don'ts */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                Do&apos;s in GD
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dosAndDonts.dos.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <XCircle className="h-5 w-5" />
                Don&apos;ts in GD
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dosAndDonts.donts.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                  >
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Topics by Category */}
        {categories.map((category) => (
          <div
            key={category}
            className="mb-10"
          >
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Badge className={categoryColors[category]}>{category}</Badge>
              Topics
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {gdTopics
                .filter((t) => t.category === category)
                .map((topic, i) => (
                  <Card
                    key={i}
                    className="p-4 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {i + 1}
                      </span>
                      <p className="text-sm font-medium">{topic.topic}</p>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        {/* GD Strategies */}
        <Card className="mb-12 p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              GD Strategies That Work
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">🎯 How to Start a GD</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Define the topic clearly</li>
                  <li>• Give a brief background</li>
                  <li>• State multiple perspectives</li>
                  <li>• Ask a thought-provoking question</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">🔚 How to Conclude a GD</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Summarize key points discussed</li>
                  <li>• Acknowledge different viewpoints</li>
                  <li>• Give a balanced conclusion</li>
                  <li>• End with a forward-looking statement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global Topics Section */}
        <div className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Globe className="h-6 w-6 text-primary" />
            🌍 Global Topics for International Admissions
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            These topics are commonly discussed in MBA interviews at global
            business schools (Harvard, INSEAD, LBS, Wharton) and multinational
            company interviews.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {globalTopics.map((topic, i) => (
              <Card
                key={i}
                className="border-primary/20 p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                    🌍
                  </span>
                  <div>
                    <p className="text-sm font-medium">{topic.topic}</p>
                    <Badge className={`mt-2 ${categoryColors[topic.category]}`}>
                      {topic.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* International GD Tips */}
        <Card className="mb-12 border-blue-200 bg-blue-50/50 p-6 dark:bg-blue-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              🎓 GD Tips for International MBA & Consulting Interviews
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <h4 className="mb-2 font-semibold">
                  🇺🇸 US Business Schools (Harvard, Wharton, Stanford)
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Value unique perspectives and originality</li>
                  <li>• Expect data-driven arguments</li>
                  <li>• Appreciate structured frameworks</li>
                  <li>• Focus on impact and measurable outcomes</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <h4 className="mb-2 font-semibold">
                  🇬🇧 UK Business Schools (LBS, Oxford, Cambridge)
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Value nuanced arguments and counterpoints</li>
                  <li>• Appreciate global perspectives</li>
                  <li>• Focus on analytical depth</li>
                  <li>• Expect well-articulated communication</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <h4 className="mb-2 font-semibold">
                  🇪🇺 European Schools (INSEAD, HEC, ESADE)
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Value multicultural awareness</li>
                  <li>• Expect collaborative approach</li>
                  <li>• Appreciate diverse viewpoints</li>
                  <li>• Focus on ethical considerations</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-gray-900">
                <h4 className="mb-2 font-semibold">
                  🏢 MBB Consulting (McKinsey, BCG, Bain)
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Use structured problem-solving</li>
                  <li>• Apply MECE framework</li>
                  <li>• Balance analysis with synthesis</li>
                  <li>• Demonstrate leadership without dominating</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEO Content */}
        <div className="prose prose-lg mb-12 max-w-none">
          <h2>Why Group Discussion Matters in Placements?</h2>
          <p>
            Group Discussion (GD) is a crucial elimination round in most campus
            placements and MBA admissions. It tests your communication skills,
            leadership qualities, awareness, and ability to work in a team.
          </p>

          <h3>Skills Evaluated in GD</h3>
          <ul>
            <li>
              <strong>Communication:</strong> Clarity, articulation, language
              proficiency
            </li>
            <li>
              <strong>Leadership:</strong> Initiating, moderating, summarizing
            </li>
            <li>
              <strong>Knowledge:</strong> Awareness of current affairs and
              topics
            </li>
            <li>
              <strong>Teamwork:</strong> Listening, building on others&apos;
              points
            </li>
            <li>
              <strong>Critical Thinking:</strong> Analyzing multiple
              perspectives
            </li>
          </ul>
        </div>

        {/* Related Tools */}
        <div className="rounded-2xl bg-muted/50 p-8">
          <h3 className="mb-6 text-xl font-bold">More Preparation Tools</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/interview-questions"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Interview Questions</h4>
              <p className="text-sm text-muted-foreground">
                HR and Technical questions
              </p>
            </Link>
            <Link
              href="/tools/technical-quiz"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Technical Quiz</h4>
              <p className="text-sm text-muted-foreground">
                OS, DBMS, CN, OOPs MCQs
              </p>
            </Link>
            <Link
              href="/blog/group-discussion-tips"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">GD Tips Blog</h4>
              <p className="text-sm text-muted-foreground">
                Detailed strategies
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
