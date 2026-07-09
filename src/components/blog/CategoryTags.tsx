'use client';

import { Tag, X } from 'lucide-react';

interface CategoryTagsProps {
  /** Available categories */
  categories: string[];
  /** Currently selected category */
  selectedCategory: string;
  /** Callback when category is selected */
  onSelect: (category: string) => void;
  /** Show "All" option */
  showAll?: boolean;
  /** Compact mode for smaller displays */
  compact?: boolean;
}

// Category colors for visual distinction
const categoryColors: Record<
  string,
  { bg: string; text: string; hover: string }
> = {
  'Interview Preparation': {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    hover: 'hover:bg-blue-200 dark:hover:bg-blue-900/50',
  },
  Resume: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-700 dark:text-green-300',
    hover: 'hover:bg-green-200 dark:hover:bg-green-900/50',
  },
  Internships: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-700 dark:text-purple-300',
    hover: 'hover:bg-purple-200 dark:hover:bg-purple-900/50',
  },
  Career: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-300',
    hover: 'hover:bg-amber-200 dark:hover:bg-amber-900/50',
  },
  Technical: {
    bg: 'bg-rose-100 dark:bg-rose-900/30',
    text: 'text-rose-700 dark:text-rose-300',
    hover: 'hover:bg-rose-200 dark:hover:bg-rose-900/50',
  },
  'Career Guidance': {
    bg: 'bg-teal-100 dark:bg-teal-900/30',
    text: 'text-teal-700 dark:text-teal-300',
    hover: 'hover:bg-teal-200 dark:hover:bg-teal-900/50',
  },
  'Job Search': {
    bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    text: 'text-cyan-700 dark:text-cyan-300',
    hover: 'hover:bg-cyan-200 dark:hover:bg-cyan-900/50',
  },
  Skills: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-700 dark:text-indigo-300',
    hover: 'hover:bg-indigo-200 dark:hover:bg-indigo-900/50',
  },
  default: {
    bg: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-gray-700 dark:text-gray-300',
    hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
  },
};

function getCategoryStyle(category: string) {
  return categoryColors[category] || categoryColors.default;
}

/**
 * CategoryTags Component
 * Visually appealing filterable category tags with color coding
 */
export function CategoryTags({
  categories,
  selectedCategory,
  onSelect,
  showAll = true,
  compact = false,
}: CategoryTagsProps) {
  const allCategories = showAll ? ['All', ...categories] : categories;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {/* Header Icon */}
      {!compact && (
        <div className="mr-2 flex items-center gap-1 text-sm font-medium text-muted-foreground">
          <Tag className="h-4 w-4" />
          <span>Filter:</span>
        </div>
      )}

      {/* Category Tags */}
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category;
        const isAll = category === 'All';
        const style = getCategoryStyle(category);

        return (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`group relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${compact ? 'px-3 py-1 text-xs' : ''} ${
              isSelected
                ? isAll
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : `${style.bg} ${style.text} shadow-sm ring-2 ring-current ring-offset-1`
                : isAll
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  : `${style.bg} ${style.text} ${style.hover}`
            } `}
          >
            {/* Category Name */}
            <span>{category}</span>

            {/* Clear indicator for selected non-All category */}
            {isSelected && !isAll && (
              <X className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100" />
            )}

            {/* Hover effect dot */}
            <span
              className={`absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full transition-all duration-200 ${isSelected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} ${isAll ? 'bg-white' : style.text.replace('text-', 'bg-')} `}
            />
          </button>
        );
      })}
    </div>
  );
}

/**
 * Category count badge for showing article counts
 */
interface CategoryWithCount {
  name: string;
  count: number;
}

interface CategoryTagsWithCountProps {
  categories: CategoryWithCount[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryTagsWithCount({
  categories,
  selectedCategory,
  onSelect,
}: CategoryTagsWithCountProps) {
  const totalCount = categories.reduce((acc, cat) => acc + cat.count, 0);
  const allCategories = [{ name: 'All', count: totalCount }, ...categories];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {allCategories.map(({ name, count }) => {
        const isSelected = selectedCategory === name;
        const isAll = name === 'All';
        const style = getCategoryStyle(name);

        return (
          <button
            key={name}
            onClick={() => onSelect(name)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isSelected
                ? isAll
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : `${style.bg} ${style.text} ring-2 ring-current ring-offset-2`
                : isAll
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                  : `${style.bg} ${style.text} ${style.hover}`
            } `}
          >
            <span>{name}</span>
            <span
              className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                isSelected
                  ? isAll
                    ? 'bg-white/20 text-white'
                    : 'bg-white/50 dark:bg-black/20'
                  : 'bg-black/10 dark:bg-white/10'
              } `}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryTags;
