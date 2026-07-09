'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Download, Gift, TrendingUp } from 'lucide-react';

interface EmailCaptureEnhancedProps {
  title?: string;
  description?: string;
  incentive?: string;
  showSocialProof?: boolean;
  showBenefits?: boolean;
  buttonText?: string;
  source?: string;
}

export function EmailCaptureEnhanced({
  title = 'Get Free Career Resources',
  description = 'Join 50,000+ students accelerating their careers',
  incentive = 'resume-templates',
  showSocialProof = true,
  showBenefits = true,
  buttonText = 'Get Instant Access',
  source = 'general',
}: EmailCaptureEnhancedProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const benefits = {
    'resume-templates': [
      '5 ATS-Friendly Resume Templates',
      'Cover Letter Samples',
      'Interview Cheat Sheet (50 Questions)',
    ],
    'interview-guide': [
      'Complete Interview Preparation Guide',
      'STAR Method Templates',
      'Salary Negotiation Scripts',
    ],
    'career-toolkit': [
      'Resume Templates & Examples',
      'Interview Question Bank',
      'Career Planning Workbook',
    ],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <Card className="border-green-200 bg-green-50 p-8 text-center dark:bg-green-950">
        <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-600" />
        <h3 className="mb-2 text-2xl font-bold">Check Your Email!</h3>
        <p className="text-muted-foreground">
          We've sent your free resources to <strong>{email}</strong>
        </p>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20 p-6 shadow-lg md:p-8">
      <div className="mb-6 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Gift className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {showBenefits && (
        <div className="mb-6 space-y-2">
          {benefits[incentive as keyof typeof benefits]?.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-2"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span className="text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 text-base"
        />
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full text-base"
          disabled={loading}
        >
          {loading ? (
            'Sending...'
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              {buttonText}
            </>
          )}
        </Button>
      </form>

      {showSocialProof && (
        <div className="mt-6 border-t pt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span>
              <strong className="text-foreground">127 students</strong>{' '}
              downloaded this in the last hour
            </span>
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        🔒 We respect your privacy. Unsubscribe anytime.
      </p>
    </Card>
  );
}
