'use client';

import { useState, useRef, useCallback } from 'react';
import Editor, { OnMount, Monaco } from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/providers/theme-provider';
import {
  Play,
  Send,
  RotateCcw,
  Loader2,
  Clock,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type Language = 'javascript' | 'python' | 'typescript';

interface CodeEditorProps {
  defaultCode: string;
  language: Language;
  onRun?: (code: string) => Promise<RunResult>;
  onSubmit?: (code: string) => Promise<SubmitResult>;
  readOnly?: boolean;
  height?: string;
  showLineNumbers?: boolean;
}

export interface RunResult {
  output: string;
  error?: string;
  executionTime: number;
}

export interface SubmitResult {
  passed: boolean;
  testResults: TestResult[];
  executionTime: number;
  score?: number;
}

export interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
}

export function CodeEditor({
  defaultCode,
  language,
  onRun,
  onSubmit,
  readOnly = false,
  height = '400px',
  showLineNumbers = true,
}: CodeEditorProps) {
  const { resolvedTheme } = useTheme();
  const [code, setCode] = useState(defaultCode);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runResult, setRunResult] = useState<RunResult | null>(null);
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);
  const editorRef = useRef<any>(null);

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    // Configure editor settings
    editor.updateOptions({
      minimap: { enabled: false },
      fontSize: 14,
      lineNumbers: showLineNumbers ? 'on' : 'off',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      wordWrap: 'on',
      padding: { top: 16, bottom: 16 },
    });
  };

  const handleReset = useCallback(() => {
    setCode(defaultCode);
    setRunResult(null);
    setSubmitResult(null);
    if (editorRef.current) {
      editorRef.current.setValue(defaultCode);
    }
  }, [defaultCode]);

  const handleRun = useCallback(async () => {
    if (!onRun || isRunning) return;
    setIsRunning(true);
    setRunResult(null);
    setSubmitResult(null);
    try {
      const result = await onRun(code);
      setRunResult(result);
    } catch (error: any) {
      setRunResult({
        output: '',
        error: error.message || 'Execution failed',
        executionTime: 0,
      });
    } finally {
      setIsRunning(false);
    }
  }, [code, onRun, isRunning]);

  const handleSubmit = useCallback(async () => {
    if (!onSubmit || isSubmitting) return;
    setIsSubmitting(true);
    setRunResult(null);
    setSubmitResult(null);
    try {
      const result = await onSubmit(code);
      setSubmitResult(result);
    } catch (error: any) {
      setSubmitResult({
        passed: false,
        testResults: [],
        executionTime: 0,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [code, onSubmit, isSubmitting]);

  const getLanguageId = (lang: Language): string => {
    const map: Record<Language, string> = {
      javascript: 'javascript',
      python: 'python',
      typescript: 'typescript',
    };
    return map[lang];
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-card">
      {/* Header with language and buttons */}
      <div className="flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold uppercase text-primary">
            {language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Reset Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            disabled={isRunning || isSubmitting || readOnly}
            className="gap-1 text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </Button>

          {/* Run Button */}
          {onRun && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleRun}
              disabled={isRunning || isSubmitting || readOnly}
              className="gap-1 text-xs"
            >
              {isRunning ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Play className="h-3.5 w-3.5" />
              )}
              Run
            </Button>
          )}

          {/* Submit Button */}
          {onSubmit && (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={isRunning || isSubmitting || readOnly}
              className="gap-1 text-xs"
            >
              {isSubmitting ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Send className="h-3.5 w-3.5" />
              )}
              Submit
            </Button>
          )}
        </div>
      </div>

      {/* Monaco Editor */}
      <div style={{ height }}>
        <Editor
          defaultValue={defaultCode}
          language={getLanguageId(language)}
          theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
          onChange={(value) => setCode(value || '')}
          onMount={handleEditorMount}
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: showLineNumbers ? 'on' : 'off',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
          }}
        />
      </div>

      {/* Output Panel */}
      {(runResult || submitResult) && (
        <div className="border-t bg-muted/20 p-4">
          {/* Execution Time */}
          <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>
              Executed in{' '}
              <strong>
                {(
                  runResult?.executionTime ||
                  submitResult?.executionTime ||
                  0
                ).toFixed(2)}
                ms
              </strong>
            </span>
          </div>

          {/* Run Result */}
          {runResult && (
            <div className="space-y-2">
              <div className="text-sm font-medium">Output:</div>
              <pre
                className={cn(
                  'overflow-auto rounded-lg p-3 font-mono text-sm',
                  runResult.error
                    ? 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                    : 'bg-background',
                )}
              >
                {runResult.error || runResult.output || '(no output)'}
              </pre>
            </div>
          )}

          {/* Submit Result */}
          {submitResult && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {submitResult.passed ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-600">
                      All Tests Passed!
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-red-600">
                      Some Tests Failed
                    </span>
                  </>
                )}
                {submitResult.score !== undefined && (
                  <span className="ml-auto rounded bg-primary/10 px-2 py-1 text-sm font-bold text-primary">
                    +{submitResult.score} XP
                  </span>
                )}
              </div>

              {/* Test Results */}
              <div className="space-y-2">
                {submitResult.testResults.map((test, i) => (
                  <div
                    key={i}
                    className={cn(
                      'rounded-lg border p-3 text-sm',
                      test.passed
                        ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                        : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      {test.passed ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                      <span className="font-medium">Test Case {i + 1}</span>
                    </div>
                    {!test.passed && (
                      <div className="mt-2 space-y-1 font-mono text-xs">
                        <div>
                          <span className="text-muted-foreground">Input:</span>{' '}
                          {test.input}
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Expected:
                          </span>{' '}
                          {test.expected}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Got:</span>{' '}
                          {test.actual}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
