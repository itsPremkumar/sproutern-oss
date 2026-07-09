/**
 * Related Content Widget Component
 * Displays contextually relevant content for internal linking
 */

'use client';

import { ArrowRight, BookOpen, Wrench, Globe } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface RelatedItem {
  title: string;
  description: string;
  url: string;
  category: 'blog' | 'tool' | 'country' | 'resource';
}

interface RelatedContentProps {
  items: RelatedItem[];
  title?: string;
}

export function RelatedContent({
  items,
  title = 'You Might Also Like',
}: RelatedContentProps) {
  if (!items || items.length === 0) return null;

  const getCategoryIcon = (category: RelatedItem['category']) => {
    switch (category) {
      case 'blog':
        return <BookOpen className="h-5 w-5" />;
      case 'tool':
        return <Wrench className="h-5 w-5" />;
      case 'country':
        return <Globe className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getCategoryLabel = (category: RelatedItem['category']) => {
    switch (category) {
      case 'blog':
        return 'Blog Post';
      case 'tool':
        return 'Tool';
      case 'country':
        return 'Country Guide';
      case 'resource':
        return 'Resource';
      default:
        return 'Content';
    }
  };

  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="group"
          >
            <Card className="h-full transition-all hover:border-primary hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  {getCategoryIcon(item.category)}
                  <span>{getCategoryLabel(item.category)}</span>
                </div>
                <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">
                  {item.description}
                </CardDescription>
                <div className="flex items-center text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

/**
 * Simplified version for sidebar
 */
export function RelatedContentSidebar({ items }: { items: RelatedItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <aside className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 font-bold">Related Content</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="group flex items-start gap-2 text-sm transition-colors hover:text-primary"
            >
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              <span className="line-clamp-2">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
