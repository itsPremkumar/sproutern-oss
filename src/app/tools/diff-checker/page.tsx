'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileSearch,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  BookOpen,
  ArrowLeftRight,
  Plus,
  Minus,
  Equal,
} from 'lucide-react';
import Link from 'next/link';

type DiffType = 'added' | 'removed' | 'unchanged';

interface DiffLine {
  type: DiffType;
  content: string;
  lineNumber: { left?: number; right?: number };
}

export default function DiffCheckerClient() {
  const [leftText, setLeftText] = useState('');
  const [rightText, setRightText] = useState('');
  const [viewMode, setViewMode] = useState<'split' | 'unified'>('split');
  const [copied, setCopied] = useState(false);
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(false);

  const diffResult = useMemo(() => {
    const leftLines = leftText.split('\n');
    const rightLines = rightText.split('\n');

    const processLine = (line: string) => {
      let processed = line;
      if (ignoreWhitespace) processed = processed.replace(/\s+/g, ' ').trim();
      if (ignoreCase) processed = processed.toLowerCase();
      return processed;
    };

    // Simple LCS-based diff
    const result: DiffLine[] = [];
    let leftIdx = 0;
    let rightIdx = 0;
    let leftLineNum = 0;
    let rightLineNum = 0;

    while (leftIdx < leftLines.length || rightIdx < rightLines.length) {
      const leftLine = leftLines[leftIdx];
      const rightLine = rightLines[rightIdx];

      if (leftIdx >= leftLines.length) {
        result.push({
          type: 'added',
          content: rightLine,
          lineNumber: { right: ++rightLineNum },
        });
        rightIdx++;
      } else if (rightIdx >= rightLines.length) {
        result.push({
          type: 'removed',
          content: leftLine,
          lineNumber: { left: ++leftLineNum },
        });
        leftIdx++;
      } else if (processLine(leftLine) === processLine(rightLine)) {
        result.push({
          type: 'unchanged',
          content: leftLine,
          lineNumber: { left: ++leftLineNum, right: ++rightLineNum },
        });
        leftIdx++;
        rightIdx++;
      } else {
        // Check if the line exists later in the other text
        const leftInRight = rightLines
          .slice(rightIdx)
          .findIndex((l) => processLine(l) === processLine(leftLine));
        const rightInLeft = leftLines
          .slice(leftIdx)
          .findIndex((l) => processLine(l) === processLine(rightLine));

        if (
          leftInRight === -1 ||
          (rightInLeft !== -1 && rightInLeft < leftInRight)
        ) {
          result.push({
            type: 'removed',
            content: leftLine,
            lineNumber: { left: ++leftLineNum },
          });
          leftIdx++;
        } else {
          result.push({
            type: 'added',
            content: rightLine,
            lineNumber: { right: ++rightLineNum },
          });
          rightIdx++;
        }
      }
    }

    return result;
  }, [leftText, rightText, ignoreWhitespace, ignoreCase]);

  const stats = useMemo(() => {
    const added = diffResult.filter((d) => d.type === 'added').length;
    const removed = diffResult.filter((d) => d.type === 'removed').length;
    const unchanged = diffResult.filter((d) => d.type === 'unchanged').length;
    return { added, removed, unchanged };
  }, [diffResult]);

  const copyDiff = async () => {
    const text = diffResult
      .map((d) => {
        const prefix =
          d.type === 'added' ? '+ ' : d.type === 'removed' ? '- ' : '  ';
        return prefix + d.content;
      })
      .join('\n');
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swapTexts = () => {
    const temp = leftText;
    setLeftText(rightText);
    setRightText(temp);
  };

  const clearAll = () => {
    setLeftText('');
    setRightText('');
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FileSearch className="h-4 w-4" />
            Free Developer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Diff Checker</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Compare two texts and find differences instantly. Perfect for
            comparing code, documents, or any text content.
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
            <span className="text-sm font-medium">Instant Comparison</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">10,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Privacy First</span>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardContent className="flex flex-wrap items-center gap-4 py-4">
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'split' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('split')}
              >
                Split View
              </Button>
              <Button
                variant={viewMode === 'unified' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('unified')}
              >
                Unified View
              </Button>
            </div>
            <div className="flex gap-4">
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={ignoreWhitespace}
                  onChange={(e) => setIgnoreWhitespace(e.target.checked)}
                  className="h-4 w-4"
                />
                Ignore whitespace
              </label>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={ignoreCase}
                  onChange={(e) => setIgnoreCase(e.target.checked)}
                  className="h-4 w-4"
                />
                Ignore case
              </label>
            </div>
            <div className="ml-auto flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={swapTexts}
              >
                <ArrowLeftRight className="mr-2 h-4 w-4" />
                Swap
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
              >
                Clear
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={copyDiff}
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copy Diff
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Input Areas */}
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Original Text</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={leftText}
                onChange={(e) => setLeftText(e.target.value)}
                placeholder="Paste original text here..."
                className="min-h-[200px] w-full rounded-lg border bg-muted/50 p-4 font-mono text-sm outline-none"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Modified Text</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={rightText}
                onChange={(e) => setRightText(e.target.value)}
                placeholder="Paste modified text here..."
                className="min-h-[200px] w-full rounded-lg border bg-muted/50 p-4 font-mono text-sm outline-none"
              />
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center gap-2 rounded-lg bg-green-50 p-4 dark:bg-green-950">
            <Plus className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-600">
              {stats.added} Added
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-red-50 p-4 dark:bg-red-950">
            <Minus className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-600">
              {stats.removed} Removed
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
            <Equal className="h-5 w-5 text-gray-600" />
            <span className="font-semibold text-gray-600">
              {stats.unchanged} Unchanged
            </span>
          </div>
        </div>

        {/* Diff Output */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Differences</CardTitle>
          </CardHeader>
          <CardContent>
            {diffResult.length === 0 ? (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                Enter text in both fields to see differences
              </div>
            ) : viewMode === 'split' ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 overflow-auto rounded-lg border p-2 font-mono text-sm">
                  {diffResult
                    .filter((d) => d.type !== 'added')
                    .map((line, i) => (
                      <div
                        key={i}
                        className={`flex ${
                          line.type === 'removed'
                            ? 'bg-red-100 dark:bg-red-950'
                            : ''
                        }`}
                      >
                        <span className="w-10 shrink-0 border-r pr-2 text-right text-muted-foreground">
                          {line.lineNumber.left || ''}
                        </span>
                        <span className="whitespace-pre pl-2">
                          {line.content}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="space-y-1 overflow-auto rounded-lg border p-2 font-mono text-sm">
                  {diffResult
                    .filter((d) => d.type !== 'removed')
                    .map((line, i) => (
                      <div
                        key={i}
                        className={`flex ${
                          line.type === 'added'
                            ? 'bg-green-100 dark:bg-green-950'
                            : ''
                        }`}
                      >
                        <span className="w-10 shrink-0 border-r pr-2 text-right text-muted-foreground">
                          {line.lineNumber.right || ''}
                        </span>
                        <span className="whitespace-pre pl-2">
                          {line.content}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="max-h-[400px] space-y-1 overflow-auto rounded-lg border p-2 font-mono text-sm">
                {diffResult.map((line, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      line.type === 'added'
                        ? 'bg-green-100 dark:bg-green-950'
                        : line.type === 'removed'
                          ? 'bg-red-100 dark:bg-red-950'
                          : ''
                    }`}
                  >
                    <span className="w-6 shrink-0 text-center">
                      {line.type === 'added'
                        ? '+'
                        : line.type === 'removed'
                          ? '-'
                          : ' '}
                    </span>
                    <span className="whitespace-pre">{line.content}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            About Text Comparison
          </h2>
          <p>
            A diff checker compares two texts line by line and highlights the
            differences between them. This is essential for code review,
            document comparison, and tracking changes.
          </p>

          <h3>Common Use Cases</h3>
          <ul>
            <li>
              <strong>Code Review:</strong> Compare different versions of code
              files
            </li>
            <li>
              <strong>Document Editing:</strong> Track changes in documents
            </li>
            <li>
              <strong>Configuration Files:</strong> Spot differences in config
              files
            </li>
            <li>
              <strong>Data Comparison:</strong> Compare CSV or JSON data
            </li>
            <li>
              <strong>Debugging:</strong> Find what changed between working and
              broken code
            </li>
          </ul>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Regex Tester',
                href: '/tools/regex-tester',
                desc: 'Test regular expressions',
              },
              {
                title: 'Code Formatter',
                href: '/tools/code-formatter',
                desc: 'Format and beautify code',
              },
              {
                title: 'Word Counter',
                href: '/tools/word-counter',
                desc: 'Count words and characters',
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
