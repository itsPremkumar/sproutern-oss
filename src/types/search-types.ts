// Search types for the advanced global search feature

export type SearchCategory =
  | 'tools'
  | 'games'
  | 'blog'
  | 'interview-experiences'
  | 'pages'
  | 'resources'
  | 'companies';

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  keywords: string[];
  href: string;
  icon?: string;
}

export interface SearchResult extends SearchItem {
  score?: number;
  matches?: {
    key: string;
    value: string;
    indices: [number, number][];
  }[];
}

export const SEARCH_CATEGORIES: Record<
  SearchCategory,
  { label: string; icon: string }
> = {
  tools: { label: 'Tools', icon: 'Wrench' },
  games: { label: 'Games', icon: 'Gamepad2' },
  blog: { label: 'Blog', icon: 'BookOpen' },
  'interview-experiences': {
    label: 'Interview Experiences',
    icon: 'Briefcase',
  },
  pages: { label: 'Pages', icon: 'FileText' },
  resources: { label: 'Resources', icon: 'Library' },
  companies: { label: 'Companies', icon: 'Building2' },
};
