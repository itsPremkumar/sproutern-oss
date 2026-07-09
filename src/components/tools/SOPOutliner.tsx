'use client';

import { useState, useActionState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { generateSOPAction } from '@/app/actions';
import type { SOPState } from '@/lib/types';
import { Loader2, BookOpen, Lightbulb, Copy, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const initialState: SOPState = {};

export function SOPOutliner() {
  const [state, formAction, isPending] = useActionState(
    generateSOPAction,
    initialState,
  );
  const [result, setResult] = useState<SOPState['data'] | null>(null);
  const [copiedSection, setCopiedSection] = useState<number | null>(null);

  useEffect(() => {
    if (state.data) {
      setResult(state.data);
    }
  }, [state]);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedSection(index);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input Form */}
      <div>
        <Card className="h-full border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Your Profile Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action={formAction}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="targetDegree">Target Degree</Label>
                <Input
                  id="targetDegree"
                  name="targetDegree"
                  placeholder="MS in Computer Science"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetUniversity">
                  Target University (Optional)
                </Label>
                <Input
                  id="targetUniversity"
                  name="targetUniversity"
                  placeholder="Stanford University"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="background">Current Background</Label>
                <Textarea
                  id="background"
                  name="background"
                  placeholder="Final year B.Tech student, 8.5 CGPA, 2 internships..."
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motivation">Why this course?</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  placeholder="Fascinated by AI, want to research in NLP..."
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experiences">Key Experiences / Projects</Label>
                <Textarea
                  id="experiences"
                  name="experiences"
                  placeholder="Built a chatbot using Python, Interned at startup X..."
                  rows={3}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="futureGoals">Future Goals</Label>
                <Textarea
                  id="futureGoals"
                  name="futureGoals"
                  placeholder="Become an AI researcher, start an edtech company..."
                  rows={2}
                  required
                />
              </div>

              <Button
                type="submit"
                className="h-12 w-full text-lg"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating
                    Structure...
                  </>
                ) : (
                  'Generate SOP Outline'
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
          <Card className="flex h-full items-center justify-center border-dashed bg-muted/20">
            <CardContent className="p-12 text-center text-muted-foreground">
              <BookOpen className="mx-auto mb-4 h-16 w-16 opacity-20" />
              <h3 className="mb-2 text-xl font-semibold">Ready to Draft</h3>
              <p>
                Fill out your details to generate a structured, personalized SOP
                outline.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4 duration-500 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{result.title}</h2>
              <span className="rounded bg-muted px-2 py-1 font-mono text-xs">
                AI Generated
              </span>
            </div>

            {result.sections.map((section, index) => (
              <Card
                key={index}
                className="overflow-hidden"
              >
                <CardHeader className="flex flex-row items-center justify-between bg-primary/5 py-3">
                  <CardTitle className="text-base font-semibold">
                    {section.title}
                  </CardTitle>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => copyToClipboard(section.content, index)}
                  >
                    {copiedSection === index ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {section.content}
                  </div>
                  <div className="flex items-start gap-2 rounded-md bg-yellow-50 p-2 text-xs text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
                    <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <p>
                      <strong>Tip:</strong> {section.tips}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
