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
  title: 'Student Lifestyle & Personal Development - Sproutern Blog',
  description:
    'Tips for student life, personal branding, networking, and work-life balance.',
  keywords: [
    'student life',
    'personal development',
    'networking',
    'student tips',
  ],
  canonical: '/blog/category/student-lifestyle',
});

const posts = [
  {
    slug: 'how-to-build-a-strong-personal-brand-as-a-student',
    title: 'How to Build a Strong Personal Brand as a Student',
    excerpt: 'Stand out in the digital age.',
  },
  {
    slug: 'student-networking-guide',
    title: 'The Ultimate Student Networking Guide',
    excerpt: 'Build meaningful professional connections.',
  },
  {
    slug: 'time-management-for-interns',
    title: 'Time Management Tips for Interns',
    excerpt: 'Balance work, study, and life effectively.',
  },
];

export default function StudentLifestyleCategoryPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-4 text-4xl font-bold">Student Lifestyle</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Personal development and lifestyle tips for students
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{post.excerpt}</CardDescription>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm text-primary"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
