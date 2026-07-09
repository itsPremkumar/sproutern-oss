'use client';

import { useState, useActionState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { generateGitHubReadmeAction } from '@/app/actions';
import type { GitHubReadmeState } from '@/lib/types';
import { Loader2, Copy, Check, Github, Eye, Code } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const initialState: GitHubReadmeState = {};

export function GitHubReadmeGenerator() {
  const [state, formAction, isPending] = useActionState(
    generateGitHubReadmeAction,
    initialState,
  );
  const [result, setResult] = useState<GitHubReadmeState['data'] | null>(null);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  useEffect(() => {
    if (state.data) {
      setResult(state.data);
    }
  }, [state]);

  const copyToClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result.markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input Form */}
      <div>
        <Card className="h-full border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Profile Details
            </CardTitle>
            <CardDescription>
              We'll use this to build a pro README.md
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={formAction}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Prem Kumar"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title / Role</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Full Stack Developer"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currentWork">
                  Currently Working On (Recommended)
                </Label>
                <Input
                  id="currentWork"
                  name="currentWork"
                  placeholder="Building a SaaS platform..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="learning">Currently Learning</Label>
                <Input
                  id="learning"
                  name="learning"
                  placeholder="Rust, WebAssembly..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Key Skills (Comma separated)</Label>
                <Textarea
                  id="skills"
                  name="skills"
                  placeholder="React, Node.js, Python, Firebase, AWS..."
                  rows={2}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="funFact">Fun Fact (Optional)</Label>
                <Input
                  id="funFact"
                  name="funFact"
                  placeholder="I collect vintage keyboards..."
                />
              </div>

              <div className="space-y-2">
                <Label>Social Handles (Optional)</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    name="github"
                    placeholder="GitHub Username"
                  />
                  <Input
                    name="twitter"
                    placeholder="Twitter Handle"
                  />
                  <Input
                    name="linkedin"
                    placeholder="LinkedIn URL"
                  />
                  <Input
                    name="portfolio"
                    placeholder="Portfolio URL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="style">Style</Label>
                <select
                  id="style"
                  name="style"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="creative">Creative (Emojis + Stats)</option>
                  <option value="minimal">Minimal (Clean Text)</option>
                  <option value="detailed">Detailed (Comprehensive)</option>
                  <option value="terminal">Terminal (Geeky)</option>
                </select>
              </div>

              <Button
                type="submit"
                className="h-12 w-full text-lg"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Magically
                    Generating...
                  </>
                ) : (
                  'Generate README.md'
                )}
              </Button>
              {state.error && (
                <p className="text-center text-sm text-red-500">
                  {state.error}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Output Display */}
      <div>
        {!result ? (
          <Card className="flex h-full min-h-[500px] items-center justify-center border-dashed bg-muted/20">
            <CardContent className="p-12 text-center text-muted-foreground">
              <Github className="mx-auto mb-4 h-16 w-16 opacity-20" />
              <h3 className="mb-2 text-xl font-semibold">Your README Awaits</h3>
              <p>
                Fill out the form to generate a copy-paste ready Markdown file.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="flex h-full flex-col gap-4 duration-500 animate-in fade-in slide-in-from-right-4">
            <Card className="flex flex-1 flex-col overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/50 py-3">
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'preview' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('preview')}
                    className="h-8"
                  >
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                  <Button
                    variant={viewMode === 'code' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('code')}
                    className="h-8"
                  >
                    <Code className="mr-2 h-4 w-4" /> Markdown Code
                  </Button>
                </div>
                <Button
                  size="sm"
                  onClick={copyToClipboard}
                  className="gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? 'Copied' : 'Copy Code'}
                </Button>
              </CardHeader>
              <CardContent className="flex-1 overflow-auto bg-background p-0">
                {viewMode === 'preview' ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none p-6">
                    <ReactMarkdown>{result.markdown}</ReactMarkdown>
                  </div>
                ) : (
                  <pre className="overflow-auto whitespace-pre-wrap p-6 font-mono text-sm">
                    {result.markdown}
                  </pre>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
