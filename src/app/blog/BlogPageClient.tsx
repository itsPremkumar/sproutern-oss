'use client';

import Link from 'next/link';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { CategoryTags } from '@/components/blog/CategoryTags';
import { SearchSuggestions } from '@/components/blog/SearchSuggestions';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

interface BlogPageClientProps {
  blogPosts: BlogPost[];
}

export default function BlogPageClient({ blogPosts }: BlogPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    ...Array.from(new Set(blogPosts.map((p) => p.category))),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
              <TrendingUp className="mr-1 inline h-4 w-4" />
              Latest Insights
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Sproutern Career Blog
            </h1>
            <p className="text-lg text-white/90">
              Expert advice, practical guides, and insider tips to accelerate
              your career journey. From resume writing to landing your dream
              internship, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        {/* Search Bar with Suggestions */}
        <div className="mx-auto mb-8 flex justify-center">
          <SearchSuggestions
            posts={blogPosts.map((p) => ({ ...p, excerpt: p.excerpt }))}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            placeholder="Search articles, topics..."
            maxSuggestions={6}
          />
        </div>

        {/* Category Filter with Color Coding */}
        <div className="mb-6">
          <CategoryTags
            categories={categories.filter((c) => c !== 'All')}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
            showAll={true}
          />
        </div>

        {/* Results Count */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Showing{' '}
            <span className="font-semibold text-foreground">
              {filteredPosts.length}
            </span>{' '}
            of {blogPosts.length}{' '}
            {filteredPosts.length === 1 ? 'article' : 'articles'}
            {(selectedCategory !== 'All' || searchQuery) && (
              <span>
                {selectedCategory !== 'All' && (
                  <>
                    {' '}
                    in{' '}
                    <span className="font-medium text-primary">
                      {selectedCategory}
                    </span>
                  </>
                )}
                {searchQuery && (
                  <>
                    {' '}
                    matching &ldquo;
                    <span className="font-medium">{searchQuery}</span>&rdquo;
                  </>
                )}
              </span>
            )}
          </p>
          {(selectedCategory !== 'All' || searchQuery) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 text-xs"
            >
              Clear all filters
            </Button>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Card
              key={`${post.slug}-${index}`}
              className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4">
                  <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                <h2 className="mb-3 text-xl font-bold leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="group h-auto self-start p-0 font-semibold"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No articles found matching your criteria.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Never Miss a Career Tip</h2>
            <p className="mb-8 text-muted-foreground">
              Subscribe to our newsletter and get weekly insights, exclusive
              internship opportunities, and expert advice delivered straight to
              your inbox.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="max-w-md flex-grow rounded-md border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Join 10,000+ students receiving weekly career insights.
              Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section> */}

      {/* Popular Resources */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Popular Resources</h2>
          <p className="text-muted-foreground">
            Explore our most-read guides and resources
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold">Resume Templates</h3>
              <p className="mb-4 text-muted-foreground">
                Download professional, ATS-friendly resume templates tailored
                for students and interns.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link href="/resources/resume-templates">Download Free</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold">
                Interview Cheat Sheet
              </h3>
              <p className="mb-4 text-muted-foreground">
                Quick reference guide with answers to 30 most common interview
                questions.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link href="/resources/interview-cheatsheet">
                  Get Cheat Sheet
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-xl font-semibold">Career Roadmaps</h3>
              <p className="mb-4 text-muted-foreground">
                Visualized career paths for different industries with skills and
                milestones.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
              >
                <Link href="/roadmaps">View Roadmaps</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
