/**
 * AI Tools Category Definitions
 * Contains metadata for all AI tool categories
 */

import { CategoryInfo } from '@/types/ai-tools-types';

export const AI_TOOL_CATEGORIES: CategoryInfo[] = [
  {
    id: 'writing',
    name: 'AI Writing Tools',
    slug: 'writing',
    description:
      'AI-powered writing assistants for content creation, copywriting, and text generation. Perfect for bloggers, marketers, and students.',
    icon: 'PenTool',
    color: 'text-blue-600',
  },
  {
    id: 'image',
    name: 'AI Image Generators',
    slug: 'image',
    description:
      'Create stunning images, artwork, and graphics with AI. From text-to-image to photo editing.',
    icon: 'Image',
    color: 'text-purple-600',
  },
  {
    id: 'video',
    name: 'AI Video Tools',
    slug: 'video',
    description:
      'AI tools for video creation, editing, and enhancement. Create professional videos without expensive software.',
    icon: 'Video',
    color: 'text-red-600',
  },
  {
    id: 'coding',
    name: 'AI Coding Assistants',
    slug: 'coding',
    description:
      'AI-powered coding tools for developers. Autocomplete, code generation, debugging, and more.',
    icon: 'Code',
    color: 'text-green-600',
  },
  {
    id: 'seo',
    name: 'AI SEO Tools',
    slug: 'seo',
    description:
      'Optimize your content for search engines with AI. Keyword research, content optimization, and ranking analysis.',
    icon: 'Search',
    color: 'text-orange-600',
  },
  {
    id: 'resume',
    name: 'AI Resume Builders',
    slug: 'resume',
    description:
      'Create professional, ATS-friendly resumes with AI. Perfect for job seekers and career changers.',
    icon: 'FileText',
    color: 'text-teal-600',
  },
  {
    id: 'voice',
    name: 'AI Voice Tools',
    slug: 'voice',
    description:
      'Text-to-speech, voice cloning, and audio editing with AI. Create professional voiceovers instantly.',
    icon: 'Mic',
    color: 'text-pink-600',
  },
  {
    id: 'chatbots',
    name: 'AI Chatbots',
    slug: 'chatbots',
    description:
      'Conversational AI assistants for research, learning, and productivity. Chat with AI to get things done.',
    icon: 'MessageSquare',
    color: 'text-indigo-600',
  },
  {
    id: 'productivity',
    name: 'AI Productivity Tools',
    slug: 'productivity',
    description:
      'Boost your productivity with AI-powered tools for notes, scheduling, and task management.',
    icon: 'Zap',
    color: 'text-yellow-600',
  },
  {
    id: 'design',
    name: 'AI Design Tools',
    slug: 'design',
    description:
      'Create stunning designs with AI. Logos, presentations, social media graphics, and more.',
    icon: 'Palette',
    color: 'text-cyan-600',
  },
];

// Helper to get category by slug
export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return AI_TOOL_CATEGORIES.find((cat) => cat.slug === slug);
}

// Helper to get category by id
export function getCategoryById(id: string): CategoryInfo | undefined {
  return AI_TOOL_CATEGORIES.find((cat) => cat.id === id);
}
