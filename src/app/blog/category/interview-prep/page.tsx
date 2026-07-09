import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata } from '@/lib/seo/seo-utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = generateMetadata({
  title: 'Interview Preparation Tips & Guides - Sproutern Blog',
  description:
    'Master your interviews with expert tips, common questions, and proven strategies for success.',
  keywords: [
    'interview preparation',
    'interview tips',
    'interview questions',
    'job interview',
  ],
  canonical: '/blog/category/interview-prep',
});

const posts = [
  {
    slug: '50-common-hr-interview-questions-and-best-answers',
    title: '50 Common HR Interview Questions and Best Answers',
    excerpt:
      'Master the most common HR interview questions with our comprehensive guide.',
  },
  {
    slug: 'mastering-star-method',
    title: 'Mastering the STAR Method for Behavioral Interviews',
    excerpt: 'Learn how to structure perfect answers using the STAR technique.',
  },
  {
    slug: 'how-to-answer-tell-me-about-yourself',
    title: 'How to Answer "Tell Me About Yourself"',
    excerpt: 'Craft the perfect introduction for any interview.',
  },
];

export default function InterviewPrepCategoryPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto mb-12 max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">Interview Preparation Guide</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Master the art of interviewing with our comprehensive guides, expert
          tips, and proven strategies. Whether you're preparing for your first
          internship interview or aiming for a top-tier tech company, we have
          the resources you need to succeed.
        </p>

        <div className="mb-8 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">
            Why Interview Prep Matters
          </h2>
          <p className="mb-4">
            Interviewing is a skill distinct from doing the actual job. Even the
            most qualified candidates can fail if they can't effectively
            communicate their value. Proper preparation helps you:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Reduce Anxiety:</strong> Knowing what to expect makes you
              calmer and more confident.
            </li>
            <li>
              <strong>Structure Your Answers:</strong> Frameworks like STAR
              (Situation, Task, Action, Result) ensure your stories are
              impactful.
            </li>
            <li>
              <strong>Anticipate Questions:</strong> 80% of interview questions
              are predictable. Preparing for them gives you a huge advantage.
            </li>
            <li>
              <strong>Ask Better Questions:</strong> Showing genuine interest
              and insight sets you apart from other candidates.
            </li>
          </ul>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Behavioral Interviews
            </h3>
            <p className="mb-4 text-muted-foreground">
              Focus on your past experiences and soft skills. "Tell me about a
              time when..." questions assess your leadership, teamwork, and
              problem-solving abilities.
            </p>
            <ul className="space-y-1 text-sm text-primary">
              <li>• STAR Method Mastery</li>
              <li>• Conflict Resolution</li>
              <li>• Leadership Stories</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 text-xl font-semibold">Technical Interviews</h3>
            <p className="mb-4 text-muted-foreground">
              Assess your hard skills relevant to the role. For tech roles, this
              includes coding challenges, system design, and concept questions.
            </p>
            <ul className="space-y-1 text-sm text-primary">
              <li>• Data Structures & Algorithms</li>
              <li>• System Design Basics</li>
              <li>• Live Coding Tips</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mb-6 text-3xl font-bold">Latest Interview Guides</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="flex h-full flex-col"
          >
            <CardHeader>
              <CardTitle className="line-clamp-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between">
              <CardDescription className="mb-4 line-clamp-3">
                {post.excerpt}
              </CardDescription>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                Read Full Guide →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
