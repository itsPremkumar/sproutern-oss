'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl">Join 50,000+ Students</CardTitle>
        </div>
        <CardDescription className="text-base">
          Get the latest internship updates, placement tips, and free resources
          delivered to your inbox weekly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center py-4 text-center animate-in fade-in zoom-in">
            <CheckCircle className="mb-2 h-12 w-12 text-green-600" />
            <h3 className="text-lg font-bold">You're subscribed!</h3>
            <p className="text-muted-foreground">
              Check your email for a welcome gift.
            </p>
            <Button
              variant="link"
              onClick={() => setStatus('idle')}
              className="mt-2"
            >
              Subscribe another email
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Subscribe for Free'
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              No spam, unsubscribe anytime.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
