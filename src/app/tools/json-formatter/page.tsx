'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FileJson, Copy, CheckCircle, Wand2, AlertCircle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export default function JsonFormatterPage() {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const content = toolsSEOContent['json-formatter'];

  const formatJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      setOutputJson(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + (e as Error).message);
      setOutputJson('');
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      setOutputJson(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError('Invalid JSON: ' + (e as Error).message);
      setOutputJson('');
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(outputJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadSample = () => {
    setInputJson(
      JSON.stringify({
        name: 'John Doe',
        age: 22,
        email: 'john@example.com',
        skills: ['JavaScript', 'React', 'Node.js'],
        education: {
          degree: 'B.Tech',
          branch: 'Computer Science',
          year: 2024,
        },
      }),
    );
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FileJson className="h-4 w-4" />
            Developer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">
            JSON Formatter & Validator
          </h1>
          <p className="text-xl text-muted-foreground">
            Format, beautify, minify, and validate JSON data
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Input */}
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <Label>Input JSON</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={loadSample}
                >
                  Load Sample
                </Button>
              </div>
              <Textarea
                placeholder='Paste your JSON here...{"key": "value"}'
                value={inputJson}
                onChange={(e) => setInputJson(e.target.value)}
                className="min-h-[300px] font-mono text-sm"
              />
              <div className="flex gap-2">
                <Button
                  onClick={formatJson}
                  className="flex-1"
                >
                  <Wand2 className="mr-2 h-4 w-4" />
                  Beautify
                </Button>
                <Button
                  onClick={minifyJson}
                  variant="outline"
                  className="flex-1"
                >
                  Minify
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output */}
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <Label>Output</Label>
                {outputJson && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="mr-1 h-4 w-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1 h-4 w-4" /> Copy
                      </>
                    )}
                  </Button>
                )}
              </div>

              {error ? (
                <div className="flex items-start gap-2 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-950 dark:text-red-200">
                  <AlertCircle className="mt-0.5 h-5 w-5" />
                  <p className="text-sm">{error}</p>
                </div>
              ) : (
                <Textarea
                  value={outputJson}
                  readOnly
                  placeholder="Formatted output will appear here..."
                  className="min-h-[300px] bg-muted font-mono text-sm"
                />
              )}

              {outputJson && !error && (
                <div className="text-sm text-muted-foreground">
                  ✅ Valid JSON • {outputJson.length} characters
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="json-formatter"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
