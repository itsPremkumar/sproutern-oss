'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Info,
  XCircle,
  BookOpen,
  Target,
  TrendingUp,
  Users,
  Calendar,
  Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Custom components for rendering markdown elements with beautiful styling
export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div
      className={cn('prose prose-lg dark:prose-invert max-w-none', className)}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings with icons
          // Note: h1 in markdown is rendered as h2 to avoid duplicate h1 tags on the page
          // The page title is already an h1, so markdown "# Headings" become h2
          h1: ({ children }) => (
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-extrabold tracking-tight">
              <BookOpen className="h-7 w-7 text-primary" />
              {children}
            </h2>
          ),
          h2: ({ children }) => {
            const text = String(children);
            const Icon = getHeadingIcon(text);
            return (
              <h2 className="mb-4 mt-10 flex scroll-mt-20 items-center gap-3 text-2xl font-bold">
                {Icon && <Icon className="h-6 w-6 text-primary" />}
                {children}
              </h2>
            );
          },
          h3: ({ children }) => (
            <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-2 mt-4 text-lg font-semibold">{children}</h4>
          ),

          // Paragraphs
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {children}
            </p>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="my-4 space-y-2 pl-0">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 space-y-2 pl-0">{children}</ol>
          ),
          li: ({ children }) => {
            const text = String(children);
            // Check for emoji-prefixed items
            if (text.startsWith('✅') || text.startsWith('✓')) {
              return (
                <li className="flex items-start gap-2 pl-0">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{text.replace(/^[✅✓]\s*/, '')}</span>
                </li>
              );
            }
            if (text.startsWith('❌') || text.startsWith('✗')) {
              return (
                <li className="flex items-start gap-2 pl-0">
                  <XCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>{text.replace(/^[❌✗]\s*/, '')}</span>
                </li>
              );
            }
            return (
              <li className="flex items-start gap-2 pl-0">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{children}</span>
              </li>
            );
          },

          // Tables with beautiful styling
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          tr: ({ children }) => (
            <tr className="border-b last:border-b-0">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="p-3 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="p-3 text-muted-foreground">{children}</td>
          ),

          // Blockquotes for tips and callouts
          blockquote: ({ children }) => {
            const text = String(children);

            // Tip callout
            if (text.includes('💡') || text.toLowerCase().includes('tip:')) {
              return (
                <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                  <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    {children}
                  </div>
                </div>
              );
            }

            // Warning callout
            if (
              text.includes('⚠️') ||
              text.toLowerCase().includes('warning:')
            ) {
              return (
                <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
                  <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <div className="text-sm text-yellow-800 dark:text-yellow-200">
                    {children}
                  </div>
                </div>
              );
            }

            // Info callout
            if (text.includes('ℹ️') || text.toLowerCase().includes('note:')) {
              return (
                <div className="my-4 flex gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                  <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600" />
                  <div className="text-sm text-gray-800 dark:text-gray-200">
                    {children}
                  </div>
                </div>
              );
            }

            // Default blockquote
            return (
              <blockquote className="my-4 border-l-4 border-primary bg-muted/30 py-2 pl-4 italic">
                {children}
              </blockquote>
            );
          },

          // Code blocks
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
                  {children}
                </code>
              );
            }
            return (
              <code className="block overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-0">
              {children}
            </pre>
          ),

          // Strong and emphasis
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-muted-foreground">{children}</em>
          ),

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-primary underline-offset-4 hover:underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),

          // Horizontal rule
          hr: () => <hr className="my-8 border-t border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

// Helper function to get appropriate icon for heading based on content
function getHeadingIcon(text: string) {
  const lowerText = text.toLowerCase();

  if (lowerText.includes('takeaway') || lowerText.includes('summary')) {
    return CheckCircle;
  }
  if (lowerText.includes('tip') || lowerText.includes('advice')) {
    return Lightbulb;
  }
  if (lowerText.includes('step') || lowerText.includes('roadmap')) {
    return TrendingUp;
  }
  if (lowerText.includes('faq') || lowerText.includes('question')) {
    return Users;
  }
  if (lowerText.includes('goal') || lowerText.includes('objective')) {
    return Target;
  }
  if (lowerText.includes('schedule') || lowerText.includes('timeline')) {
    return Calendar;
  }
  if (lowerText.includes('time') || lowerText.includes('duration')) {
    return Clock;
  }

  // Check for emoji prefixes and return null (emoji is already in text)
  if (
    /^[\u{1F4CB}\u{1F4CC}\u{1F3AF}\u{1F4DA}\u{1F4AA}\u{1F91D}\u{1F4CA}\u274C\u2705\u{1F4A1}\u{1F680}\u26A0\u2139]/u.test(
      text,
    )
  ) {
    return null;
  }

  return null;
}

// Key Takeaways component for use in markdown
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-green-800 dark:text-green-200">
        <CheckCircle className="h-5 w-5" />
        Key Takeaways
      </h3>
      <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2"
          >
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Author bio component
export function AuthorBio({
  name = 'Sproutern Career Team',
  description = 'Our team of career experts helps students and freshers launch successful careers.',
}: {
  name?: string;
  description?: string;
}) {
  return (
    <section className="mb-8 rounded-lg border bg-muted/30 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
}
