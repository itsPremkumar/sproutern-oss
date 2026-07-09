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
  title: 'Resume Writing Tips & Templates - Sproutern Blog',
  description:
    'Learn how to write ATS-friendly resumes that get you interviews. Expert tips and templates.',
  keywords: ['resume writing', 'resume tips', 'ATS resume', 'resume template'],
  canonical: '/blog/category/resume-writing',
});

const posts = [
  {
    slug: 'how-to-write-a-resume-that-beats-ats',
    title: 'How to Write a Resume That Beats ATS',
    excerpt: 'Complete guide to creating ATS-friendly resumes.',
  },
  {
    slug: 'resume-mistakes-students-avoid',
    title: 'Common Resume Mistakes Students Must Avoid',
    excerpt: "Don't let these mistakes cost you interviews.",
  },
  {
    slug: 'write-effective-cover-letter',
    title: 'How to Write an Effective Cover Letter',
    excerpt: 'Stand out with a compelling cover letter.',
  },
];

export default function ResumeWritingCategoryPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-4 text-4xl font-bold">Resume Writing</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Create resumes that get you hired
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
