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
  title: 'Career Advice & High-Paying Opportunities',
  description:
    'Discover high-paying career paths, MBA specializations, and professional development opportunities.',
  keywords: [
    'career advice',
    'high paying jobs',
    'MBA specializations',
    'career growth',
  ],
  canonical: '/blog/category/high-cpc',
});

const posts = [
  {
    slug: 'top-10-highest-paying-mba-specializations-in-india',
    title: 'Top 10 Highest Paying MBA Specializations in India',
    excerpt: 'Discover the most lucrative MBA specializations.',
  },
  {
    slug: 'is-a-data-science-certification-worth-it',
    title: 'Is a Data Science Certification Worth It?',
    excerpt: 'ROI analysis of data science certifications.',
  },
];

export default function HighCPCCategoryPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto mb-12 max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold">
          High-Growth Career Paths & Advice
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Explore the most lucrative and high-demand career opportunities in
          today's market. From specialized MBA programs to cutting-edge tech
          certifications, we analyze the ROI of various career moves to help you
          maximize your earning potential.
        </p>

        <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
          <h2 className="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-100">
            Navigating High-Value Careers
          </h2>
          <p className="mb-4 text-blue-800 dark:text-blue-200">
            Choosing a career path is an investment. Understanding market
            trends, salary benchmarks, and skill demand is crucial for making
            informed decisions that pay off in the long run.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded bg-background p-4 shadow-sm">
              <h3 className="mb-2 font-bold">Tech & Data</h3>
              <p className="text-sm text-muted-foreground">
                Data Science, AI/ML, and Cloud Computing continue to command top
                salaries due to high demand and specialized skill requirements.
              </p>
            </div>
            <div className="rounded bg-background p-4 shadow-sm">
              <h3 className="mb-2 font-bold">Management & Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Specialized MBAs in Finance, Analytics, and Consulting offer
                accelerated paths to leadership roles and significant
                compensation growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">
            Key Factors for Career Growth
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="h-fit rounded-full bg-primary/10 p-2">
                <span className="font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-bold">Continuous Upskilling</h3>
                <p className="text-sm text-muted-foreground">
                  The half-life of a learned skill is now only 5 years. Constant
                  learning is the new norm for high earners.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="h-fit rounded-full bg-primary/10 p-2">
                <span className="font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-bold">Strategic Networking</h3>
                <p className="text-sm text-muted-foreground">
                  Your network is your net worth. Building relationships in your
                  target industry is often more effective than cold applying.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="h-fit rounded-full bg-primary/10 p-2">
                <span className="font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-bold">Personal Branding</h3>
                <p className="text-sm text-muted-foreground">
                  Establishing yourself as a thought leader or expert in a niche
                  can attract opportunities to you.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="mb-6 text-3xl font-bold">Featured Career Guides</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="flex h-full flex-col transition-shadow hover:shadow-lg"
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
                Read Analysis →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
