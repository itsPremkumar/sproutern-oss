'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, X, TrendingUp } from 'lucide-react';

interface ReadNextItem {
  title: string;
  href: string;
  emoji: string;
}

// Content recommendations based on current page category
const RECOMMENDATIONS: Record<string, ReadNextItem[]> = {
  '/blog': [
    {
      title: 'Free Career Tools',
      href: '/tools',
      emoji: '🛠️',
    },
    {
      title: 'Interview Experiences',
      href: '/interview-experiences',
      emoji: '💼',
    },
    {
      title: 'Career Roadmaps',
      href: '/roadmaps',
      emoji: '🗺️',
    },
  ],
  '/tools': [
    {
      title: 'Career Blog',
      href: '/blog',
      emoji: '📝',
    },
    {
      title: 'Interview Prep Resources',
      href: '/resources/interview-prep',
      emoji: '🎯',
    },
    {
      title: 'Brain Training Games',
      href: '/games',
      emoji: '🎮',
    },
  ],
  '/games': [
    {
      title: 'Typing Speed Test',
      href: '/tools/typing-test',
      emoji: '⌨️',
    },
    {
      title: 'Aptitude Practice',
      href: '/tools/aptitude-test',
      emoji: '🧠',
    },
    {
      title: 'Career Tools',
      href: '/tools',
      emoji: '🛠️',
    },
  ],
  '/interview-experiences': [
    {
      title: 'Company Guides',
      href: '/companies',
      emoji: '🏢',
    },
    {
      title: 'Interview Questions',
      href: '/tools/interview-questions',
      emoji: '❓',
    },
    {
      title: 'Resume Checker',
      href: '/tools/resume-score-checker',
      emoji: '📄',
    },
  ],
  '/resources': [
    {
      title: 'Free Tools',
      href: '/tools',
      emoji: '🛠️',
    },
    {
      title: 'Blog Articles',
      href: '/blog',
      emoji: '📝',
    },
    {
      title: 'Country Guides',
      href: '/countries',
      emoji: '🌍',
    },
  ],
  '/companies': [
    {
      title: 'Interview Experiences',
      href: '/interview-experiences',
      emoji: '💼',
    },
    {
      title: 'Salary Calculator',
      href: '/tools/salary-calculator',
      emoji: '💰',
    },
    {
      title: 'Resume Guide',
      href: '/resources/resume-guide',
      emoji: '📄',
    },
  ],
  '/countries': [
    {
      title: 'Scholarships',
      href: '/scholarships',
      emoji: '🎓',
    },
    {
      title: 'Career Roadmaps',
      href: '/roadmaps',
      emoji: '🗺️',
    },
    {
      title: 'Blog',
      href: '/blog',
      emoji: '📝',
    },
  ],
  default: [
    {
      title: 'Free Career Tools',
      href: '/tools',
      emoji: '🛠️',
    },
    {
      title: 'Interview Experiences',
      href: '/interview-experiences',
      emoji: '💼',
    },
    {
      title: 'Brain Training Games',
      href: '/games',
      emoji: '🎮',
    },
  ],
};

function getRecommendations(pathname: string): ReadNextItem[] {
  // Find the best matching category
  for (const [prefix, items] of Object.entries(RECOMMENDATIONS)) {
    if (prefix !== 'default' && pathname.startsWith(prefix)) {
      return items;
    }
  }
  return RECOMMENDATIONS.default;
}

/**
 * ReadNextBar - Sticky bottom bar that appears after 40% scroll
 * Shows contextual "Read Next" suggestions to reduce bounce rate.
 */
export function ReadNextBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  const recommendations = getRecommendations(pathname);

  useEffect(() => {
    // Reset dismissed state on route change
    setIsDismissed(false);
    setIsVisible(false);
  }, [pathname]);

  useEffect(() => {
    if (isDismissed) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setIsVisible(scrollPercent > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  // Don't show on homepage (it has its own CTAs)
  if (pathname === '/') return null;
  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="border-t border-border/50 bg-background/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <div className="container mx-auto flex items-center gap-4">
          {/* Label */}
          <div className="hidden items-center gap-2 sm:flex">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">
              Explore More
            </span>
          </div>

          {/* Recommendations */}
          <div className="flex flex-1 items-center gap-2 overflow-x-auto sm:gap-3">
            {recommendations.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex shrink-0 items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
              >
                <span>{item.emoji}</span>
                <span>{item.title}</span>
                <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Dismiss suggestions"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
