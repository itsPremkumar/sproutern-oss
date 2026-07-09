'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MessageCircle,
  Users,
  Send,
  ExternalLink,
  CheckCircle,
  Loader2,
  Mail,
  Bell,
  Sparkles,
} from 'lucide-react';

// Discord Widget Component
export function DiscordWidget() {
  return (
    <Card className="overflow-hidden border-[#5865F2]/30 bg-gradient-to-br from-[#5865F2]/5 to-[#5865F2]/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5865F2]">
            <MessageCircle className="h-4 w-4 text-white" />
          </div>
          Join Our Discord Community
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Connect with 1,000+ students, get placement tips, share resources, and
          find study partners.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1 rounded-full bg-[#5865F2]/10 px-3 py-1 text-xs font-medium text-[#5865F2]">
            <Users className="h-3 w-3" />
            1,000+ Members
          </span>
          <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
            <CheckCircle className="h-3 w-3" />
            Active Support
          </span>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#5865F2]" />
            Daily placement updates & off-campus drives
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#5865F2]" />
            Interview experience sharing
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#5865F2]" />
            Doubts resolution by seniors
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#5865F2]" />
            Resource sharing & study groups
          </li>
        </ul>

        <Button
          asChild
          className="w-full bg-[#5865F2] hover:bg-[#4752C4]"
        >
          <a
            href="https://discord.gg/sproutern"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Join Discord Server
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

// Newsletter Signup Component
export function NewsletterSignup({
  variant = 'default',
}: {
  variant?: 'default' | 'compact' | 'hero';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call - In production, integrate with Buttondown/Substack
    // For Buttondown: https://api.buttondown.email/v1/subscribers
    // For Substack: Use their embed form or API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, replace with actual API integration:
    // const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Token ${process.env.NEXT_PUBLIC_BUTTONDOWN_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // });

    setStatus('success');
    setMessage("🎉 You're in! Check your email to confirm subscription.");
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  if (variant === 'compact') {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex gap-2"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={status === 'loading' || status === 'success'}
        />
        <Button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === 'success' ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Bell className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Stay Ahead of the Curve</h3>
          <p className="mb-6 text-muted-foreground">
            Get weekly placement updates, interview tips, and exclusive
            resources delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 text-base"
              disabled={status === 'loading' || status === 'success'}
            />
            <Button
              type="submit"
              size="lg"
              className="h-12"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe Free
                </>
              )}
            </Button>
          </form>

          {message && (
            <p
              className={`mt-3 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}
            >
              {message}
            </p>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Join 5,000+ students. Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Mail className="h-4 w-4 text-primary-foreground" />
          </div>
          Weekly Career Newsletter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Get weekly placement updates, interview tips, and exclusive resources.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Users className="h-3 w-3" />
            5,000+ Subscribers
          </span>
          <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600">
            <Sparkles className="h-3 w-3" />
            Weekly Updates
          </span>
        </div>

        <ul className="space-y-1 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            Off-campus drive alerts
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            Interview tips & tricks
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            Exclusive downloadable resources
          </li>
        </ul>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Subscribed!
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe Free
              </>
            )}
          </Button>
        </form>

        {message && (
          <p
            className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-xs text-muted-foreground">
          No spam. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
}

// Combined Community Section for pages
export function CommunitySection() {
  return (
    <section className="container py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold">Join Our Community</h2>
        <p className="text-muted-foreground">
          Connect with thousands of students preparing for placements
        </p>
      </div>
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <DiscordWidget />
        <NewsletterSignup />
      </div>
    </section>
  );
}
