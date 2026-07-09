'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface TopPagesProps {
  isLoading: boolean;
}

// Representative top pages that would be tracked
const topPages = [
  { path: '/', title: 'Home', tracking: 'page_view' },
  {
    path: '/internships',
    title: 'Internships',
    tracking: 'page_view, search, filter',
  },
  { path: '/tools', title: 'Tools', tracking: 'page_view, tool_start' },
  { path: '/blog', title: 'Blog', tracking: 'page_view, blog_view' },
  {
    path: '/resources',
    title: 'Resources',
    tracking: 'page_view, resource_view',
  },
  {
    path: '/companies',
    title: 'Companies',
    tracking: 'page_view, company_view',
  },
  { path: '/signup', title: 'Sign Up', tracking: 'page_view, sign_up' },
  { path: '/signin', title: 'Sign In', tracking: 'page_view, login' },
  { path: '/profile', title: 'Profile', tracking: 'page_view, profile_update' },
  { path: '/about', title: 'About', tracking: 'page_view' },
];

export function TopPages({ isLoading }: TopPagesProps) {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-[100px]" />
          <Skeleton className="h-4 w-[180px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-[120px]" />
                </div>
                <Skeleton className="h-4 w-[80px]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Top Pages
        </CardTitle>
        <CardDescription>Key pages with tracking configured</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topPages.map((page, index) => (
            <div
              key={page.path}
              className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <span className="w-4 text-xs text-muted-foreground">
                  {index + 1}
                </span>
                <div>
                  <Link
                    href={page.path}
                    className="flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    {page.title}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </Link>
                  <p className="font-mono text-xs text-muted-foreground">
                    {page.path}
                  </p>
                </div>
              </div>
              <div className="max-w-[150px] text-right text-xs text-muted-foreground">
                {page.tracking}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
