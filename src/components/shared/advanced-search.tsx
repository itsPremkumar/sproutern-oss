'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import {
  Search,
  Wrench,
  Gamepad2,
  BookOpen,
  Briefcase,
  FileText,
  Library,
  Building2,
  ArrowRight,
  Clock,
  X,
  Command,
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { searchIndex } from '@/lib/search-index';
import { SearchItem } from '@/types/search-types';
import { cn } from '@/lib/utils';

// Icon mapping for categories
const categoryIcons: Record<string, React.ElementType> = {
  tools: Wrench,
  games: Gamepad2,
  blog: BookOpen,
  'interview-experiences': Briefcase,
  pages: FileText,
  resources: Library,
  companies: Building2,
};

const categoryLabels: Record<string, string> = {
  tools: 'Tools',
  games: 'Games',
  blog: 'Blog Posts',
  'interview-experiences': 'Interview Experiences',
  pages: 'Pages',
  resources: 'Resources',
  companies: 'Companies',
};

// Fuse.js configuration for fuzzy search
const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.25 },
    { name: 'keywords', weight: 0.35 },
  ],
  threshold: 0.4,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2,
};

const fuse = new Fuse(searchIndex, fuseOptions);

// Recent searches storage key
const RECENT_SEARCHES_KEY = 'sproutern-recent-searches';
const MAX_RECENT_SEARCHES = 5;

interface SearchResultGroup {
  category: string;
  items: (SearchItem & { score?: number })[];
}

export function AdvancedSearch() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [recentSearches, setRecentSearches] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (stored) {
        try {
          setRecentSearches(JSON.parse(stored));
        } catch {
          // Ignore parsing errors
        }
      }
    }
  }, []);

  // Handle keyboard shortcut to open search
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [open]);

  // Get search results
  const results = React.useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const fuseResults = fuse.search(query);
    return fuseResults.slice(0, 20).map((result) => ({
      ...result.item,
      score: result.score,
    }));
  }, [query]);

  // Group results by category
  const groupedResults = React.useMemo(() => {
    const groups: SearchResultGroup[] = [];
    const categoryMap = new Map<string, (SearchItem & { score?: number })[]>();

    results.forEach((item) => {
      const category = item.category;
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(item);
    });

    // Order categories: tools, games, blog, interview-experiences, pages, resources
    const categoryOrder = [
      'tools',
      'games',
      'blog',
      'interview-experiences',
      'pages',
      'resources',
      'companies',
    ];
    categoryOrder.forEach((category) => {
      const items = categoryMap.get(category);
      if (items && items.length > 0) {
        groups.push({ category, items: items.slice(0, 5) });
      }
    });

    return groups;
  }, [results]);

  // Flatten results for keyboard navigation
  const flatResults = React.useMemo(() => {
    return groupedResults.flatMap((group) => group.items);
  }, [groupedResults]);

  // Navigate to result
  const navigateTo = React.useCallback(
    (item: SearchItem) => {
      // Save to recent searches
      if (query.trim()) {
        const updatedRecent = [
          query,
          ...recentSearches.filter((s) => s !== query),
        ].slice(0, MAX_RECENT_SEARCHES);
        setRecentSearches(updatedRecent);
        localStorage.setItem(
          RECENT_SEARCHES_KEY,
          JSON.stringify(updatedRecent),
        );
      }

      setOpen(false);
      router.push(item.href);
    },
    [query, recentSearches, router],
  );

  // Handle keyboard navigation
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < flatResults.length - 1 ? prev + 1 : prev,
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && flatResults[selectedIndex]) {
        e.preventDefault();
        navigateTo(flatResults[selectedIndex]);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    },
    [flatResults, selectedIndex, navigateTo],
  );

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  // Scroll selected item into view
  React.useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`,
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="relative inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto sm:justify-between sm:px-4 sm:py-2 md:w-64"
      >
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Search className="h-4 w-4 shrink-0" />
          <span className="hidden sm:inline-flex">Search...</span>
        </span>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <Command className="h-3 w-3" />K
        </kbd>
      </button>

      {/* Search Dialog */}
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="max-w-2xl overflow-hidden p-0 shadow-2xl">
          <VisuallyHidden.Root>
            <DialogTitle>Search</DialogTitle>
          </VisuallyHidden.Root>

          {/* Search Input */}
          <div className="flex items-center border-b px-4">
            <Search className="mr-3 h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search tools, games, articles, and more..."
              className="flex h-14 w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="rounded-md p-1 hover:bg-accent"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Results */}
          <div
            ref={listRef}
            className="max-h-[400px] overflow-y-auto overflow-x-hidden"
          >
            {query.trim() === '' ? (
              // Show recent searches when no query
              <div className="p-4">
                {recentSearches.length > 0 ? (
                  <>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        Recent Searches
                      </span>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-accent"
                        >
                          <Search className="h-4 w-4 text-muted-foreground" />
                          <span>{search}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="py-8 text-center text-sm text-muted-foreground">
                    <p>Start typing to search...</p>
                    <p className="mt-2 text-xs">
                      Search across 200+ tools, games, articles, and resources
                    </p>
                  </div>
                )}
              </div>
            ) : groupedResults.length > 0 ? (
              // Show search results
              <div className="p-2">
                {groupedResults.map((group) => {
                  const Icon = categoryIcons[group.category] || FileText;
                  return (
                    <div
                      key={group.category}
                      className="mb-4 last:mb-0"
                    >
                      <div className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        <Icon className="h-3 w-3" />
                        {categoryLabels[group.category] || group.category}
                      </div>
                      <div className="space-y-1">
                        {group.items.map((item, index) => {
                          const globalIndex = flatResults.indexOf(item);
                          const isSelected = globalIndex === selectedIndex;
                          return (
                            <button
                              key={`${item.category}-${item.id}-${index}`}
                              data-index={globalIndex}
                              onClick={() => navigateTo(item)}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className={cn(
                                'flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left transition-colors',
                                isSelected
                                  ? 'bg-accent text-accent-foreground'
                                  : 'hover:bg-accent/50',
                              )}
                            >
                              <div className="flex-1 overflow-hidden">
                                <div className="font-medium">{item.title}</div>
                                <div className="truncate text-xs text-muted-foreground">
                                  {item.description}
                                </div>
                              </div>
                              {isSelected && (
                                <ArrowRight className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // No results
              <div className="py-12 text-center text-sm text-muted-foreground">
                <p>No results found for &quot;{query}&quot;</p>
                <p className="mt-1 text-xs">
                  Try searching for tools, games, or articles
                </p>
              </div>
            )}
          </div>

          {/* Footer with keyboard hints */}
          <div className="flex items-center justify-between border-t bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-background px-1.5 py-0.5">
                  ↑
                </kbd>
                <kbd className="rounded border bg-background px-1.5 py-0.5">
                  ↓
                </kbd>
                <span className="ml-1">Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-background px-1.5 py-0.5">
                  ↵
                </kbd>
                <span className="ml-1">Open</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-background px-1.5 py-0.5">
                  Esc
                </kbd>
                <span className="ml-1">Close</span>
              </span>
            </div>
            <span className="hidden sm:block">
              {flatResults.length} results
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
