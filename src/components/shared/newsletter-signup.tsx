'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full max-w-md">
      <h3 className="mb-2 text-lg font-semibold">
        Subscribe to Our Newsletter
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Get weekly career tips, internship alerts, and exclusive resources.
      </p>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex gap-2"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </form>
      ) : (
        <p className="font-semibold text-green-600">Thanks for subscribing!</p>
      )}
    </div>
  );
}
