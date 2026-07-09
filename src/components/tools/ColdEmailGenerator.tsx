'use client';

import { useState, useActionState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Copy,
  Check,
  RefreshCw,
  Mail,
  Briefcase,
  Users,
  Handshake,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { generateColdEmailAction } from '@/app/actions';
import type { ColdEmailState } from '@/lib/types';

type EmailType = 'internship' | 'referral' | 'networking' | 'followup';

const emailTypeInfo = {
  internship: {
    icon: Briefcase,
    label: 'Internship Outreach',
    color: 'text-blue-600',
  },
  referral: {
    icon: Handshake,
    label: 'Referral Request',
    color: 'text-green-600',
  },
  networking: { icon: Users, label: 'Networking', color: 'text-purple-600' },
  followup: { icon: Mail, label: 'Follow-up', color: 'text-orange-600' },
};

const initialState: ColdEmailState = {};

export function ColdEmailGenerator() {
  const [emailType, setEmailType] = useState<EmailType>('internship');
  const [tone, setTone] = useState('professional');
  const [state, formAction, isPending] = useActionState(
    generateColdEmailAction,
    initialState,
  );

  const [generatedEmail, setGeneratedEmail] = useState<{
    subject: string;
    body: string;
  } | null>(null);
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  useEffect(() => {
    if (state.data) {
      setGeneratedEmail(state.data);
    }
  }, [state]);

  const copySubject = async () => {
    if (generatedEmail) {
      await navigator.clipboard.writeText(generatedEmail.subject);
      setCopiedSubject(true);
      setTimeout(() => setCopiedSubject(false), 2000);
    }
  };

  const copyBody = async () => {
    if (generatedEmail) {
      await navigator.clipboard.writeText(generatedEmail.body);
      setCopiedBody(true);
      setTimeout(() => setCopiedBody(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Input Form */}
        <div className="flex-1">
          <Card className="h-full border-2 border-primary/10 shadow-lg">
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Wand2 className="h-5 w-5 text-primary" />
                AI Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form
                action={formAction}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="emailType"
                  value={emailType}
                />
                <input
                  type="hidden"
                  name="tone"
                  value={tone}
                />

                <div className="space-y-2">
                  <Label>Email Purpose</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(emailTypeInfo) as EmailType[]).map((type) => {
                      const { icon: Icon, label, color } = emailTypeInfo[type];
                      return (
                        <div
                          key={type}
                          onClick={() => setEmailType(type)}
                          className={`flex cursor-pointer items-center gap-2 rounded-md border p-2 text-sm transition-all ${
                            emailType === type
                              ? 'border-primary bg-primary/10 font-medium'
                              : 'hover:bg-muted'
                          }`}
                        >
                          <Icon className={`h-4 w-4 ${color}`} />
                          <span
                            className={emailType === type ? 'text-primary' : ''}
                          >
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="senderName">Your Name</Label>
                    <Input
                      id="senderName"
                      name="senderName"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="senderCollege">College (Optional)</Label>
                    <Input
                      id="senderCollege"
                      name="senderCollege"
                      placeholder="MIT, Chennai"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Target Company</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      placeholder="Google"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Target Role</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="Software Intern"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipientName">
                      Recipient Name (Optional)
                    </Label>
                    <Input
                      id="recipientName"
                      name="recipientName"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tone">Tone</Label>
                    <select
                      id="tone"
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="professional">Professional</option>
                      <option value="enthusiastic">Enthusiastic</option>
                      <option value="direct">Direct</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specificContext">
                    Extra Context / Hook (Recommended)
                  </Label>
                  <Textarea
                    id="specificContext"
                    name="specificContext"
                    placeholder="E.g. I saw your recent post about AI agents... OR I built a similar project using Next.js..."
                    className="h-24 resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    The AI uses this to make your email unique.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />{' '}
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" /> Generate Email with AI
                    </>
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

        {/* Output Preview */}
        <div className="flex-1">
          <Card className="h-full bg-muted/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Result</CardTitle>
                {generatedEmail && (
                  <span className="text-xs text-muted-foreground">
                    Generated just now
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!generatedEmail ? (
                <div className="flex h-64 flex-col items-center justify-center text-center text-muted-foreground">
                  <Mail className="mb-4 h-12 w-12 opacity-20" />
                  <p>Fill the details and click Generate.</p>
                  <p className="text-sm">
                    Your AI-crafted email will appear here.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-muted-foreground">Subject</Label>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={copySubject}
                      >
                        {copiedSubject ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className="rounded-md border bg-background p-3 font-medium shadow-sm">
                      {generatedEmail.subject}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-muted-foreground">Body</Label>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={copyBody}
                      >
                        {copiedBody ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                    <div className="min-h-[300px] whitespace-pre-wrap rounded-md border bg-background p-4 text-sm leading-relaxed shadow-sm">
                      {generatedEmail.body}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
