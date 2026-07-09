'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Search, TrendingUp, Clock, ArrowRight, X } from 'lucide-react';

interface SearchResult {
  title: string;
  slug: string;
  category: string;
  excerpt?: string;
}

interface SearchSuggestionsProps {
  /** Blog posts to search through */
  posts: SearchResult[];
  /** Current search query (controlled) */
  searchQuery: string;
  /** Callback when search query changes */
  onSearchChange: (query: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Maximum suggestions to show */
  maxSuggestions?: number;
}

// Popular/Trending searches to show when empty
const TRENDING_SEARCHES = [
  'Resume Tips',
  'Interview Questions',
  'Internship Guide',
  'CGPA Calculator',
  'Salary Negotiation',
  'LinkedIn Profile',
];

// Recent searches (in production, this would come from localStorage)
const RECENT_SEARCHES = [
  'How to prepare for interviews',
  'Resume templates',
  'Remote internships',
];

/**
 * Debounce hook for search
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * SearchSuggestions Component
 * Live search dropdown with suggestions and trending searches
 */
export function SearchSuggestions({
  posts,
  searchQuery,
  onSearchChange,
  placeholder = 'Search articles...',
  maxSuggestions = 5,
}: SearchSuggestionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(searchQuery, 200);

  // Filter posts based on search query - wrapped in useMemo for stable reference
  const suggestions = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return posts
      .filter(
        (post) =>
          post.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(debouncedQuery.toLowerCase()),
      )
      .slice(0, maxSuggestions);
  }, [debouncedQuery, posts, maxSuggestions]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset highlighted index when suggestions change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [suggestions.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'Enter') {
          setIsOpen(true);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < suggestions.length - 1 ? prev + 1 : 0,
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : suggestions.length - 1,
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
            window.location.href = `/blog/${suggestions[highlightedIndex].slug}`;
          }
          break;
        case 'Escape':
          setIsOpen(false);
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, highlightedIndex, suggestions],
  );

  // Handle trending search click
  const handleTrendingClick = (term: string) => {
    onSearchChange(term);
    inputRef.current?.focus();
  };

  // Clear search
  const handleClear = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  const showDropdown =
    isOpen && (suggestions.length > 0 || !debouncedQuery.trim());

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          aria-label="Search articles"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
          role="combobox"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800"
          role="listbox"
        >
          {/* Search Results */}
          {suggestions.length > 0 ? (
            <div className="p-2">
              <div className="mb-2 flex items-center gap-1 px-2 text-xs font-medium text-muted-foreground">
                <Search className="h-3 w-3" />
                Results
              </div>
              {suggestions.map((result, index) => (
                <Link
                  key={result.slug}
                  href={`/blog/${result.slug}`}
                  className={`group flex items-start gap-3 rounded-lg p-3 transition-colors ${
                    index === highlightedIndex
                      ? 'bg-indigo-50 dark:bg-indigo-900/30'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                  role="option"
                  aria-selected={index === highlightedIndex}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-1 font-medium text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                      {result.title}
                    </p>
                    <p className="line-clamp-1 text-xs text-muted-foreground">
                      {result.category}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          ) : (
            /* Empty State - Show Trending */
            <div className="p-4">
              {/* Trending Searches */}
              <div className="mb-4">
                <div className="mb-2 flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  Trending Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {TRENDING_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleTrendingClick(term)}
                      className="rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-1 text-sm text-indigo-700 transition-all hover:from-indigo-100 hover:to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 dark:text-indigo-300"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              <div>
                <div className="mb-2 flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Recent Searches
                </div>
                <div className="space-y-1">
                  {RECENT_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleTrendingClick(term)}
                      className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 text-center dark:border-gray-700 dark:bg-gray-900/50">
            <span className="text-xs text-muted-foreground">
              Press{' '}
              <kbd className="rounded bg-gray-200 px-1 font-mono dark:bg-gray-700">
                ↑
              </kbd>{' '}
              <kbd className="rounded bg-gray-200 px-1 font-mono dark:bg-gray-700">
                ↓
              </kbd>{' '}
              to navigate,{' '}
              <kbd className="rounded bg-gray-200 px-1 font-mono dark:bg-gray-700">
                Enter
              </kbd>{' '}
              to select
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSuggestions;
