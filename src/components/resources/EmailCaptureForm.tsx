'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Download } from 'lucide-react';

interface EmailCaptureFormProps {
  resourceTitle: string;
  resourceDescription: string;
  downloadUrl?: string;
}

export function EmailCaptureForm({
  resourceTitle,
  resourceDescription,
  downloadUrl,
}: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{resourceTitle}</CardTitle>
        <CardDescription>{resourceDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resource
            </Button>
          </form>
        ) : (
          <div className="py-4 text-center">
            <p className="font-semibold text-green-600">
              Thank you! Check your email for the download link.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
