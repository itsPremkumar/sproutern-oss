'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  BookOpen,
  Info,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

interface Match {
  match: string;
  index: number;
  groups: string[];
}

const commonPatterns = [
  {
    name: 'Email',
    pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
    desc: 'Match email addresses',
  },
  {
    name: 'Phone (US)',
    pattern: '\\(?\\d{3}\\)?[-.]?\\d{3}[-.]?\\d{4}',
    desc: 'Match US phone numbers',
  },
  {
    name: 'Phone (India)',
    pattern: '[6-9]\\d{9}',
    desc: 'Match Indian mobile numbers',
  },
  {
    name: 'URL',
    pattern: 'https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$',
    desc: 'Match URLs',
  },
  {
    name: 'IPv4 Address',
    pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b',
    desc: 'Match IPv4 addresses',
  },
  {
    name: 'Date (DD/MM/YYYY)',
    pattern: '(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\\d{4}',
    desc: 'Match dates',
  },
  {
    name: 'Time (HH:MM)',
    pattern: '([01]?[0-9]|2[0-3]):[0-5][0-9]',
    desc: 'Match 24-hour time',
  },
  {
    name: 'Hex Color',
    pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})',
    desc: 'Match hex color codes',
  },
  {
    name: 'Username',
    pattern: '^[a-zA-Z0-9_]{3,16}$',
    desc: 'Alphanumeric username (3-16 chars)',
  },
  {
    name: 'Password (Strong)',
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$',
    desc: 'Min 8 chars, upper, lower, digit',
  },
];

const cheatsheet = [
  {
    category: 'Character Classes',
    items: [
      { pattern: '.', desc: 'Any character except newline' },
      { pattern: '\\d', desc: 'Digit (0-9)' },
      { pattern: '\\D', desc: 'Non-digit' },
      { pattern: '\\w', desc: 'Word character (a-z, A-Z, 0-9, _)' },
      { pattern: '\\W', desc: 'Non-word character' },
      { pattern: '\\s', desc: 'Whitespace' },
      { pattern: '\\S', desc: 'Non-whitespace' },
    ],
  },
  {
    category: 'Anchors',
    items: [
      { pattern: '^', desc: 'Start of string' },
      { pattern: '$', desc: 'End of string' },
      { pattern: '\\b', desc: 'Word boundary' },
    ],
  },
  {
    category: 'Quantifiers',
    items: [
      { pattern: '*', desc: 'Zero or more' },
      { pattern: '+', desc: 'One or more' },
      { pattern: '?', desc: 'Zero or one' },
      { pattern: '{n}', desc: 'Exactly n times' },
      { pattern: '{n,}', desc: 'n or more times' },
      { pattern: '{n,m}', desc: 'Between n and m times' },
    ],
  },
  {
    category: 'Groups',
    items: [
      { pattern: '(abc)', desc: 'Capturing group' },
      { pattern: '(?:abc)', desc: 'Non-capturing group' },
      { pattern: 'a|b', desc: 'Match a or b' },
      { pattern: '[abc]', desc: 'Match a, b, or c' },
      { pattern: '[^abc]', desc: 'Not a, b, or c' },
      { pattern: '[a-z]', desc: 'Range a to z' },
    ],
  },
];

export default function RegexTesterClient() {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [flags, setFlags] = useState({ g: true, i: false, m: false, s: false });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const flagString = useMemo(() => {
    return Object.entries(flags)
      .filter(([, enabled]) => enabled)
      .map(([flag]) => flag)
      .join('');
  }, [flags]);

  const { matches, highlightedText } = useMemo(() => {
    if (!pattern || !testString) {
      return { matches: [], highlightedText: testString };
    }

    try {
      const regex = new RegExp(pattern, flagString);
      setError('');

      const foundMatches: Match[] = [];
      let match;

      if (flags.g) {
        while ((match = regex.exec(testString)) !== null) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
          if (match[0].length === 0) regex.lastIndex++;
        }
      } else {
        match = regex.exec(testString);
        if (match) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }

      // Create highlighted text
      let highlighted = testString;
      let offset = 0;
      foundMatches.forEach((m, i) => {
        const start = m.index + offset;
        const end = start + m.match.length;
        const before = highlighted.slice(0, start);
        const matchText = highlighted.slice(start, end);
        const after = highlighted.slice(end);
        const safeMatch = matchText
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        const replacement = `<mark class="bg-yellow-300 dark:bg-yellow-600 px-0.5 rounded">${safeMatch}</mark>`;
        highlighted = before + replacement + after;
        offset += replacement.length - m.match.length;
      });

      return { matches: foundMatches, highlightedText: highlighted };
    } catch (e) {
      setError((e as Error).message);
      return { matches: [], highlightedText: testString };
    }
  }, [pattern, testString, flagString, flags.g]);

  const copyPattern = async () => {
    await navigator.clipboard.writeText(`/${pattern}/${flagString}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const applyPattern = (p: string) => {
    setPattern(p);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Code className="h-4 w-4" />
            Free Developer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Regex Tester</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Test and debug regular expressions in real-time. See matches
            highlighted instantly with detailed match information.
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
            <span className="text-sm font-medium">Real-time Testing</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">8,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Client-Side Only</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Tool */}
          <div className="space-y-6 lg:col-span-2">
            {/* Pattern Input */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Regular Expression</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex flex-1 items-center rounded-lg border bg-muted/50">
                    <span className="px-3 text-muted-foreground">/</span>
                    <input
                      type="text"
                      value={pattern}
                      onChange={(e) => setPattern(e.target.value)}
                      placeholder="Enter regex pattern..."
                      className="flex-1 bg-transparent py-3 outline-none"
                    />
                    <span className="px-3 text-muted-foreground">
                      /{flagString}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyPattern}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>

                {/* Flags */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { key: 'g', label: 'Global (g)', desc: 'Find all matches' },
                    {
                      key: 'i',
                      label: 'Case Insensitive (i)',
                      desc: 'Ignore case',
                    },
                    {
                      key: 'm',
                      label: 'Multiline (m)',
                      desc: '^ and $ match line start/end',
                    },
                    {
                      key: 's',
                      label: 'Dotall (s)',
                      desc: '. matches newlines',
                    },
                  ].map(({ key, label }) => (
                    <label
                      key={key}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={flags[key as keyof typeof flags]}
                        onChange={(e) =>
                          setFlags({ ...flags, [key]: e.target.checked })
                        }
                        className="h-4 w-4"
                      />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-red-600 dark:bg-red-950">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Test String */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Test String</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={testString}
                  onChange={(e) => setTestString(e.target.value)}
                  placeholder="Enter text to test against the regex..."
                  className="min-h-[150px] w-full rounded-lg border bg-muted/50 p-4 outline-none"
                />
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5" />
                  Match Results
                  <span className="ml-auto text-sm font-normal text-muted-foreground">
                    {matches.length} match{matches.length !== 1 ? 'es' : ''}{' '}
                    found
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Highlighted Text */}
                <div
                  className="min-h-[100px] whitespace-pre-wrap rounded-lg border bg-muted/30 p-4 font-mono text-sm"
                  dangerouslySetInnerHTML={{
                    __html:
                      highlightedText ||
                      '<span class="text-muted-foreground">Matches will be highlighted here...</span>',
                  }}
                />

                {/* Match Details */}
                {matches.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Match Details:</h4>
                    <div className="max-h-[200px] space-y-2 overflow-auto">
                      {matches.map((m, i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-muted/50 p-3 text-sm"
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">Match {i + 1}:</span>
                            <span className="text-muted-foreground">
                              Index: {m.index}
                            </span>
                          </div>
                          <code className="text-primary">
                            &quot;{m.match}&quot;
                          </code>
                          {m.groups.length > 0 && (
                            <div className="mt-1 text-muted-foreground">
                              Groups:{' '}
                              {m.groups.map((g, j) => (
                                <span
                                  key={j}
                                  className="mx-1 rounded bg-muted px-1"
                                >
                                  {g || '(empty)'}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Common Patterns */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common Patterns</CardTitle>
              </CardHeader>
              <CardContent className="max-h-[300px] overflow-auto">
                <div className="space-y-2">
                  {commonPatterns.map((p) => (
                    <button
                      key={p.name}
                      onClick={() => applyPattern(p.pattern)}
                      className="w-full rounded-lg border p-2 text-left text-sm transition-colors hover:bg-muted"
                    >
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {p.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cheatsheet */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Reference</CardTitle>
              </CardHeader>
              <CardContent className="max-h-[400px] overflow-auto">
                <div className="space-y-4">
                  {cheatsheet.map((cat) => (
                    <div key={cat.category}>
                      <h4 className="mb-2 text-sm font-medium">
                        {cat.category}
                      </h4>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <div
                            key={item.pattern}
                            className="flex justify-between text-xs"
                          >
                            <code className="font-mono text-primary">
                              {item.pattern}
                            </code>
                            <span className="text-muted-foreground">
                              {item.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Regular Expressions Guide
          </h2>
          <p>
            Regular expressions (regex) are powerful patterns used to match
            character combinations in strings. They are essential for text
            processing, validation, and search-and-replace operations in
            programming.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li>
              <strong>Form Validation:</strong> Validate emails, phone numbers,
              passwords
            </li>
            <li>
              <strong>Data Extraction:</strong> Extract specific patterns from
              text
            </li>
            <li>
              <strong>Search and Replace:</strong> Find and modify text patterns
            </li>
            <li>
              <strong>Log Analysis:</strong> Parse log files for specific events
            </li>
            <li>
              <strong>Web Scraping:</strong> Extract data from HTML/text
            </li>
          </ul>

          <h3>Tips for Writing Regex</h3>
          <ul>
            <li>Start simple and build complexity gradually</li>
            <li>
              Use non-capturing groups <code>(?:...)</code> when you don&apos;t
              need the match
            </li>
            <li>
              Escape special characters with backslash: <code>\.</code>,{' '}
              <code>\*</code>, <code>\?</code>
            </li>
            <li>
              Use anchors <code>^</code> and <code>$</code> to match exact
              strings
            </li>
            <li>Test with multiple edge cases</li>
          </ul>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Diff Checker',
                href: '/tools/diff-checker',
                desc: 'Compare two texts',
              },
              {
                title: 'Code Formatter',
                href: '/tools/code-formatter',
                desc: 'Format and beautify code',
              },
              {
                title: 'JSON Formatter',
                href: '/tools/json-formatter',
                desc: 'Format JSON data',
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

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Looking for Developer Opportunities?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explore internship opportunities in software development
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships
          </Link>
        </section>
      </div>
    </div>
  );
}
