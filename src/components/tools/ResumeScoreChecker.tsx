'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function ResumeScoreChecker() {
  const [resumeText, setResumeText] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<
    { type: 'good' | 'bad' | 'warning'; text: string }[]
  >([]);

  const analyzeResume = () => {
    let points = 0;
    const newFeedback: typeof feedback = [];

    if (resumeText.length > 500) {
      points += 20;
      newFeedback.push({ type: 'good', text: 'Good resume length' });
    } else {
      newFeedback.push({ type: 'bad', text: 'Resume is too short' });
    }

    if (
      /\b(achieved|managed|led|developed|created|improved)\b/i.test(resumeText)
    ) {
      points += 20;
      newFeedback.push({ type: 'good', text: 'Uses strong action verbs' });
    } else {
      newFeedback.push({ type: 'warning', text: 'Add more action verbs' });
    }

    if (/\d+%|\d+\+|increased|decreased/i.test(resumeText)) {
      points += 20;
      newFeedback.push({
        type: 'good',
        text: 'Contains quantifiable achievements',
      });
    } else {
      newFeedback.push({ type: 'bad', text: 'Add numbers and metrics' });
    }

    if (/@|email|phone|linkedin/i.test(resumeText)) {
      points += 15;
      newFeedback.push({ type: 'good', text: 'Contact information present' });
    } else {
      newFeedback.push({ type: 'bad', text: 'Missing contact information' });
    }

    if (/skills|technical|proficient/i.test(resumeText)) {
      points += 15;
      newFeedback.push({ type: 'good', text: 'Skills section identified' });
    } else {
      newFeedback.push({ type: 'warning', text: 'Add a skills section' });
    }

    if (resumeText.split(/\s+/).length > 300) {
      points += 10;
      newFeedback.push({ type: 'good', text: 'Comprehensive content' });
    }

    setScore(points);
    setFeedback(newFeedback);
  };

  return (
    <div className="space-y-6">
      <Textarea
        placeholder="Paste your resume text here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        className="min-h-[300px]"
      />

      <Button
        onClick={analyzeResume}
        disabled={!resumeText}
        className="w-full"
      >
        Check Resume Score
      </Button>

      {score !== null && (
        <Card className="space-y-4 p-6">
          <div>
            <div className="mb-2 flex justify-between">
              <span className="font-semibold">Resume Score</span>
              <span className="text-2xl font-bold">{score}/100</span>
            </div>
            <Progress
              value={score}
              className="h-3"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Feedback:</h3>
            {feedback.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2"
              >
                {item.type === 'good' && (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                )}
                {item.type === 'bad' && (
                  <XCircle className="mt-0.5 h-5 w-5 text-red-500" />
                )}
                {item.type === 'warning' && (
                  <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-500" />
                )}
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
