'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Clock, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RecommendedArticle {
  title: string;
  slug: string;
  category: string;
  readingTime?: number;
  description?: string;
  relevanceScore?: number;
}

interface YouMayAlsoLikeProps {
  /** Current article slug to exclude */
  currentSlug?: string;
  /** Current article category for relevance */
  currentCategory?: string;
  /** Current article keywords for matching */
  keywords?: string[];
  /** Maximum articles to display */
  limit?: number;
}

// Extended article database with more metadata
const articleDatabase: RecommendedArticle[] = [
  // Interview Preparation
  {
    title: '50 Common HR Interview Questions and Best Answers',
    slug: '50-common-hr-interview-questions-and-best-answers',
    category: 'Interview Preparation',
    readingTime: 45,
    description: 'Master HR interviews with expert tips and sample answers',
  },
  {
    title: 'How to Answer "Tell Me About Yourself"',
    slug: 'how-to-answer-tell-me-about-yourself',
    category: 'Interview Preparation',
    readingTime: 10,
    description: 'Perfect your elevator pitch for interviews',
  },
  {
    title: 'Mastering the STAR Method for Behavioral Questions',
    slug: 'mastering-star-method',
    category: 'Interview Preparation',
    readingTime: 15,
    description: 'Structure your answers to behavioral questions effectively',
  },
  {
    title: 'Technical Interview Preparation Guide',
    slug: 'technical-interview-preparation',
    category: 'Interview Preparation',
    readingTime: 25,
    description: 'Complete guide to cracking technical rounds',
  },
  {
    title: 'Top 10 Interview Mistakes to Avoid',
    slug: 'top-interview-mistakes-to-avoid',
    category: 'Interview Preparation',
    readingTime: 12,
    description: 'Common pitfalls and how to dodge them',
  },
  // Resume & Career
  {
    title: 'How to Write a Resume That Beats ATS',
    slug: 'how-to-write-a-resume-that-beats-ats',
    category: 'Resume',
    readingTime: 20,
    description: 'Get past automated screening systems',
  },
  {
    title: 'Resume Mistakes Students Should Avoid',
    slug: 'resume-mistakes-students-avoid',
    category: 'Resume',
    readingTime: 12,
    description: 'Common errors that cost you interviews',
  },
  {
    title: 'One Page Resume Guide for Freshers',
    slug: 'one-page-resume-guide',
    category: 'Resume',
    readingTime: 15,
    description: 'Create a compelling one-page resume',
  },
  {
    title: 'Action Verbs for Your Resume',
    slug: 'action-verbs-for-resume',
    category: 'Resume',
    readingTime: 8,
    description: 'Power words that make your resume stand out',
  },
  // Internships
  {
    title: 'Ultimate Guide to Your First Internship',
    slug: 'ultimate-guide-first-internship',
    category: 'Internships',
    readingTime: 30,
    description: 'Everything you need to know about landing internships',
  },
  {
    title: 'Remote Internships Complete Guide',
    slug: 'remote-internships-complete-guide',
    category: 'Internships',
    readingTime: 20,
    description: 'Find and succeed in remote internships',
  },
  {
    title: 'Cold Email Templates for Internships',
    slug: 'cold-email-templates-internships',
    category: 'Internships',
    readingTime: 15,
    description: 'Outreach templates that get responses',
  },
  {
    title: 'Internship vs Job: Which to Choose?',
    slug: 'internship-vs-job',
    category: 'Internships',
    readingTime: 10,
    description: 'Making the right choice for your career stage',
  },
  // Career Development
  {
    title: 'Campus Placement Preparation Guide',
    slug: 'campus-placement-preparation',
    category: 'Career',
    readingTime: 35,
    description: 'Complete guide to crack campus placements',
  },
  {
    title: 'LinkedIn Optimization for Students',
    slug: 'linkedin-optimization-students',
    category: 'Career',
    readingTime: 18,
    description: 'Build a profile that attracts recruiters',
  },
  {
    title: 'Salary Negotiation for Freshers',
    slug: 'salary-negotiation-freshers',
    category: 'Career',
    readingTime: 15,
    description: 'Negotiate your first salary confidently',
  },
  {
    title: 'Building Your Personal Brand',
    slug: 'building-personal-brand',
    category: 'Career',
    readingTime: 20,
    description: 'Stand out in a competitive job market',
  },
  // Technical
  {
    title: 'DSA Preparation Roadmap',
    slug: 'dsa-preparation-roadmap',
    category: 'Technical',
    readingTime: 25,
    description: 'Master data structures and algorithms',
  },
  {
    title: 'System Design Interview Guide',
    slug: 'system-design-interview-guide',
    category: 'Technical',
    readingTime: 30,
    description: 'Ace system design rounds with this guide',
  },
  {
    title: 'Git and GitHub Beginner Guide',
    slug: 'git-github-beginners-guide',
    category: 'Technical',
    readingTime: 20,
    description: 'Version control fundamentals for students',
  },
  {
    title: 'Learn Python for Placements',
    slug: 'learn-python-placements',
    category: 'Technical',
    readingTime: 35,
    description: 'Python programming for interviews',
  },
];

/**
 * Calculate relevance score based on category match and random factor
 */
function calculateRelevance(
  article: RecommendedArticle,
  currentCategory?: string,
): number {
  let score = Math.random() * 30; // Base random factor (0-30)

  // Category match bonus
  if (currentCategory && article.category === currentCategory) {
    score += 50;
  }

  // Popular articles get a slight boost
  if (article.readingTime && article.readingTime >= 20) {
    score += 10;
  }

  return score;
}

/**
 * YouMayAlsoLike Component
 * Personalized article recommendations with modern design
 */
export function YouMayAlsoLike({
  currentSlug,
  currentCategory,
  keywords = [],
  limit = 4,
}: YouMayAlsoLikeProps) {
  // Filter out current article and calculate relevance scores
  const recommendations = articleDatabase
    .filter((article) => article.slug !== currentSlug)
    .map((article) => ({
      ...article,
      relevanceScore: calculateRelevance(article, currentCategory),
    }))
    .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
    .slice(0, limit);

  if (recommendations.length === 0) return null;

  return (
    <section className="my-12 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 md:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            You May Also Like
          </h3>
          <p className="text-sm text-muted-foreground">
            Handpicked articles just for you
          </p>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recommendations.map((article, index) => (
          <Card
            key={article.slug}
            className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/70"
          >
            {/* Relevance indicator */}
            {index === 0 && (
              <div className="absolute right-2 top-2 z-10">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  Top Pick
                </Badge>
              </div>
            )}

            <CardContent className="flex h-full flex-col p-4">
              {/* Category Badge */}
              <Badge
                variant="secondary"
                className="mb-2 w-fit text-xs"
              >
                {article.category}
              </Badge>

              {/* Title */}
              <Link
                href={`/blog/${article.slug}`}
                className="group/link flex-1"
              >
                <h4 className="mb-2 line-clamp-2 font-semibold leading-snug text-gray-900 transition-colors group-hover/link:text-indigo-600 dark:text-white dark:group-hover/link:text-indigo-400">
                  {article.title}
                </h4>
              </Link>

              {/* Description */}
              {article.description && (
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {article.description}
                </p>
              )}

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between">
                {article.readingTime && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{article.readingTime} min</span>
                  </div>
                )}
                <Link
                  href={`/blog/${article.slug}`}
                  className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
                >
                  Read
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-6 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-white hover:shadow-md dark:bg-gray-800 dark:text-gray-200"
        >
          Browse All Articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default YouMayAlsoLike;
