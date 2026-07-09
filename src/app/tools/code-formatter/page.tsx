'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code2,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  BookOpen,
  Minimize2,
  Maximize2,
} from 'lucide-react';
import Link from 'next/link';

type Language = 'javascript' | 'html' | 'css' | 'json' | 'xml' | 'sql' | 'auto';

const languages: { value: Language; label: string }[] = [
  { value: 'auto', label: 'Auto-detect' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'json', label: 'JSON' },
  { value: 'xml', label: 'XML' },
  { value: 'sql', label: 'SQL' },
];

export default function CodeFormatterClient() {
  const [code, setCode] = useState('');
  const [formattedCode, setFormattedCode] = useState('');
  const [language, setLanguage] = useState<Language>('auto');
  const [indentSize, setIndentSize] = useState(2);
  const [useTabs, setUseTabs] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const detectLanguage = (code: string): Language => {
    if (code.trim().startsWith('{') || code.trim().startsWith('['))
      return 'json';
    if (
      code.includes('<!DOCTYPE') ||
      code.includes('<html') ||
      /<[a-z][\s\S]*>/i.test(code)
    )
      return 'html';
    if (
      code.includes('{') &&
      code.includes('}') &&
      code.includes(':') &&
      !code.includes('function')
    ) {
      if (
        code.includes('px') ||
        code.includes('color') ||
        code.includes('@media')
      )
        return 'css';
    }
    if (code.includes('<?xml') || (code.startsWith('<') && code.includes('/>')))
      return 'xml';
    if (/\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE)\b/i.test(code))
      return 'sql';
    return 'javascript';
  };

  const formatJSON = (code: string, indent: string): string => {
    const parsed = JSON.parse(code);
    return JSON.stringify(parsed, null, indent);
  };

  const formatHTML = (code: string, indent: string): string => {
    let formatted = '';
    let indentLevel = 0;
    const lines = code.replace(/>\s*</g, '>\n<').split('\n');

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('</')) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      formatted += indent.repeat(indentLevel) + trimmed + '\n';

      if (
        trimmed.startsWith('<') &&
        !trimmed.startsWith('</') &&
        !trimmed.startsWith('<!') &&
        !trimmed.endsWith('/>') &&
        !trimmed.includes('</')
      ) {
        indentLevel++;
      }
    });

    return formatted.trim();
  };

  const formatCSS = (code: string, indent: string): string => {
    let formatted = code
      .replace(/\s*{\s*/g, ' {\n')
      .replace(/\s*}\s*/g, '\n}\n\n')
      .replace(/;\s*/g, ';\n')
      .replace(/,\s*/g, ',\n');

    let indentLevel = 0;
    const lines = formatted.split('\n');
    formatted = lines
      .map((line) => {
        const trimmed = line.trim();
        if (!trimmed) return '';

        if (trimmed === '}') {
          indentLevel = Math.max(0, indentLevel - 1);
        }

        const result = indent.repeat(indentLevel) + trimmed;

        if (trimmed.endsWith('{')) {
          indentLevel++;
        }

        return result;
      })
      .filter((l) => l)
      .join('\n');

    return formatted.trim();
  };

  const formatJS = (code: string, indent: string): string => {
    // Basic JS formatting
    let formatted = code
      .replace(/\s*{\s*/g, ' {\n')
      .replace(/\s*}\s*/g, '\n}\n')
      .replace(/;\s*/g, ';\n')
      .replace(/,\s*(?=\n|$)/g, ',\n');

    let indentLevel = 0;
    const lines = formatted.split('\n');
    formatted = lines
      .map((line) => {
        const trimmed = line.trim();
        if (!trimmed) return '';

        if (
          trimmed.startsWith('}') ||
          trimmed.startsWith(']') ||
          trimmed.startsWith(')')
        ) {
          indentLevel = Math.max(0, indentLevel - 1);
        }

        const result = indent.repeat(indentLevel) + trimmed;

        if (
          trimmed.endsWith('{') ||
          trimmed.endsWith('[') ||
          trimmed.endsWith('(')
        ) {
          indentLevel++;
        }

        return result;
      })
      .filter((l) => l)
      .join('\n');

    return formatted.trim();
  };

  const formatSQL = (code: string, indent: string): string => {
    const keywords = [
      'SELECT',
      'FROM',
      'WHERE',
      'AND',
      'OR',
      'ORDER BY',
      'GROUP BY',
      'HAVING',
      'JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'INNER JOIN',
      'ON',
      'INSERT INTO',
      'VALUES',
      'UPDATE',
      'SET',
      'DELETE',
    ];

    let formatted = code.toUpperCase();
    keywords.forEach((keyword) => {
      formatted = formatted.replace(
        new RegExp(`\\b${keyword}\\b`, 'gi'),
        `\n${keyword}`,
      );
    });

    return formatted
      .trim()
      .split('\n')
      .map((line) => line.trim())
      .filter((l) => l)
      .join('\n');
  };

  const formatCode = () => {
    setError('');
    const indent = useTabs ? '\t' : ' '.repeat(indentSize);
    const lang = language === 'auto' ? detectLanguage(code) : language;

    try {
      let result = '';
      switch (lang) {
        case 'json':
          result = formatJSON(code, indent);
          break;
        case 'html':
        case 'xml':
          result = formatHTML(code, indent);
          break;
        case 'css':
          result = formatCSS(code, indent);
          break;
        case 'sql':
          result = formatSQL(code, indent);
          break;
        default:
          result = formatJS(code, indent);
      }
      setFormattedCode(result);
    } catch (e) {
      setError(`Error formatting: ${(e as Error).message}`);
      setFormattedCode('');
    }
  };

  const minifyCode = () => {
    setError('');
    const lang = language === 'auto' ? detectLanguage(code) : language;

    try {
      let result = '';
      if (lang === 'json') {
        result = JSON.stringify(JSON.parse(code));
      } else {
        result = code
          .replace(/\s+/g, ' ')
          .replace(/\s*([{}();,:])\s*/g, '$1')
          .replace(/;\s*}/g, '}')
          .trim();
      }
      setFormattedCode(result);
    } catch (e) {
      setError(`Error minifying: ${(e as Error).message}`);
    }
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(formattedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Code2 className="h-4 w-4" />
            Free Developer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Code Formatter
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Format and beautify your code instantly. Supports JavaScript, HTML,
            CSS, JSON, and more.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Instant Format</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">12,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Client-Side Only</span>
          </div>
        </div>

        {/* Options */}
        <Card className="mb-6">
          <CardContent className="flex flex-wrap items-center gap-4 py-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Language:</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="rounded-md border bg-background px-3 py-1.5 text-sm"
              >
                {languages.map((lang) => (
                  <option
                    key={lang.value}
                    value={lang.value}
                  >
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Indent:</label>
              <select
                value={useTabs ? 'tab' : indentSize.toString()}
                onChange={(e) => {
                  if (e.target.value === 'tab') {
                    setUseTabs(true);
                  } else {
                    setUseTabs(false);
                    setIndentSize(parseInt(e.target.value));
                  }
                }}
                className="rounded-md border bg-background px-3 py-1.5 text-sm"
              >
                <option value="2">2 spaces</option>
                <option value="4">4 spaces</option>
                <option value="tab">Tab</option>
              </select>
            </div>
            <div className="ml-auto flex gap-2">
              <Button
                onClick={formatCode}
                className="gap-2"
              >
                <Maximize2 className="h-4 w-4" />
                Format
              </Button>
              <Button
                variant="outline"
                onClick={minifyCode}
                className="gap-2"
              >
                <Minimize2 className="h-4 w-4" />
                Minify
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Code Areas */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Input Code</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                className="min-h-[400px] w-full rounded-lg border bg-muted/50 p-4 font-mono text-sm outline-none"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Formatted Output</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={copyCode}
                disabled={!formattedCode}
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copy
              </Button>
            </CardHeader>
            <CardContent>
              {error ? (
                <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-red-200 bg-red-50 p-4 text-red-600 dark:border-red-900 dark:bg-red-950">
                  {error}
                </div>
              ) : (
                <pre className="min-h-[400px] overflow-auto rounded-lg border bg-muted/50 p-4 font-mono text-sm">
                  {formattedCode || 'Formatted code will appear here...'}
                </pre>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Why Format Your Code?
          </h2>
          <p>
            Code formatting is essential for readability, maintainability, and
            collaboration. Well-formatted code is easier to understand, debug,
            and review.
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Benefits of Formatting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <ul className="space-y-1">
                  <li>• Improved code readability</li>
                  <li>• Easier debugging and maintenance</li>
                  <li>• Consistent code style across team</li>
                  <li>• Faster code reviews</li>
                  <li>• Reduced cognitive load</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">When to Minify</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <ul className="space-y-1">
                  <li>• Production deployment</li>
                  <li>• Reducing file size</li>
                  <li>• Faster page load times</li>
                  <li>• CDN optimization</li>
                  <li>• API response compression</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'JSON Formatter',
                href: '/tools/json-formatter',
                desc: 'Format JSON data',
              },
              {
                title: 'Regex Tester',
                href: '/tools/regex-tester',
                desc: 'Test regular expressions',
              },
              {
                title: 'Diff Checker',
                href: '/tools/diff-checker',
                desc: 'Compare two texts',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
