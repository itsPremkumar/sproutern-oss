'use client';

import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import {
  BrainCircuit,
  Loader2,
  Sparkles,
  Download,
  FileUp,
  Star,
} from 'lucide-react';

import { handleResumeOptimization } from '@/app/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import type { ResumeOptimizerState } from '@/lib/types';

const initialState: ResumeOptimizerState = {
  optimizedResumeText: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...
        </>
      ) : (
        <>
          <BrainCircuit className="mr-2 h-4 w-4" /> Optimize My Resume
        </>
      )}
    </Button>
  );
}

export function ResumeOptimizerForm() {
  const [state, formAction] = useActionState(
    handleResumeOptimization,
    initialState,
  );
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDownload = () => {
    if (!state?.optimizedResumeText) return;
    const blob = new Blob([state.optimizedResumeText], {
      type: 'text/plain;charset=utf-t',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optimized-resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Your Resume</CardTitle>
        <CardDescription>
          Upload your resume (PDF), and our AI will rewrite the content to be
          ATS-friendly. You can then download the new version as a text file.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          action={formAction}
          className="space-y-6"
        >
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="resumeFile">Resume PDF</Label>
            <div className="flex items-center gap-2 rounded-md border p-1.5 pr-3">
              <Label
                htmlFor="resumeFile"
                className="whitespace-nowrap"
              >
                <div className="inline-flex h-9 cursor-pointer items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  <FileUp className="mr-2 h-4 w-4" />
                  Choose File
                </div>
              </Label>
              <Input
                id="resumeFile"
                name="resumeFile"
                type="file"
                accept="application/pdf"
                required
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="w-full truncate text-sm text-muted-foreground">
                {fileName || 'No file chosen'}
              </span>
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea
              id="jobDescription"
              name="jobDescription"
              rows={8}
              placeholder="For even better results, paste the full job description here to tailor your resume to the role..."
            />
          </div>

          <SubmitButton />
        </form>

        {state?.error && (
          <Alert
            variant="destructive"
            className="mt-4"
          >
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        {state?.optimizedResumeText && (
          <div className="mt-6 space-y-6">
            {/* Rating Card */}
            {typeof state.rating !== 'undefined' && state.feedback && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="fill-amber-400 text-amber-400" /> Resume
                    Score & Feedback
                  </CardTitle>
                  <CardDescription>
                    Here is the AI's assessment of your original resume.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 flex items-center gap-4">
                    <span className="shrink-0 text-right text-xl font-bold">
                      {state.rating}/10
                    </span>
                    <Progress
                      value={state.rating * 10}
                      className="w-full"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {state.feedback}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Rewritten Resume Card */}
            <Card>
              <CardHeader className="flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-primary" /> Rewritten Resume
                  </CardTitle>
                  <CardDescription>
                    Download the ATS-friendly text below.
                  </CardDescription>
                </div>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  className="mt-2 w-full shrink-0 sm:mt-0 sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" /> Download (.txt)
                </Button>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border bg-secondary p-4 font-sans">
                  {state.optimizedResumeText}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
