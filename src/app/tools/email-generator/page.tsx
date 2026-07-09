'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

interface EmailTemplate {
  id: string;
  name: string;
  category: string;
  subject: string;
  body: string;
  variables: string[];
}

const emailTemplates: EmailTemplate[] = [
  {
    id: 'leave',
    name: 'Leave Application',
    category: 'HR',
    subject: 'Leave Application for [DATES]',
    body: `Dear [MANAGER_NAME],

I am writing to request leave from [START_DATE] to [END_DATE] for [REASON].

During my absence, [COLLEAGUE_NAME] will handle my responsibilities. I have ensured all pending work is up to date.

I will be reachable via email for any urgent matters.

Thank you for your consideration.

Best regards,
[YOUR_NAME]`,
    variables: [
      'MANAGER_NAME',
      'START_DATE',
      'END_DATE',
      'REASON',
      'COLLEAGUE_NAME',
      'YOUR_NAME',
    ],
  },
  {
    id: 'resignation',
    name: 'Resignation Letter',
    category: 'HR',
    subject: 'Resignation - [YOUR_NAME]',
    body: `Dear [MANAGER_NAME],

I am writing to formally notify you of my resignation from my position as [JOB_TITLE] at [COMPANY_NAME], effective [LAST_WORKING_DAY].

I am grateful for the opportunities I have had during my time here and appreciate the support from you and the team.

I am committed to ensuring a smooth transition and will complete all handover documentation before my departure.

Thank you for everything.

Sincerely,
[YOUR_NAME]`,
    variables: [
      'MANAGER_NAME',
      'JOB_TITLE',
      'COMPANY_NAME',
      'LAST_WORKING_DAY',
      'YOUR_NAME',
    ],
  },
  {
    id: 'followup',
    name: 'Interview Follow-up',
    category: 'Job Search',
    subject: 'Thank You - [JOB_TITLE] Interview',
    body: `Dear [INTERVIEWER_NAME],

Thank you for taking the time to interview me for the [JOB_TITLE] position at [COMPANY_NAME] yesterday.

I enjoyed learning more about the role and the team. Our conversation about [TOPIC_DISCUSSED] was particularly engaging, and I'm excited about the opportunity to contribute to [COMPANY_NAME].

Please let me know if you need any additional information.

Looking forward to hearing from you.

Best regards,
[YOUR_NAME]`,
    variables: [
      'INTERVIEWER_NAME',
      'JOB_TITLE',
      'COMPANY_NAME',
      'TOPIC_DISCUSSED',
      'YOUR_NAME',
    ],
  },
  {
    id: 'meeting',
    name: 'Meeting Request',
    category: 'Professional',
    subject: 'Meeting Request: [MEETING_TOPIC]',
    body: `Dear [RECIPIENT_NAME],

I hope this email finds you well. I would like to schedule a meeting to discuss [MEETING_TOPIC].

Could you please let me know your availability for a [DURATION]-minute meeting this week? I'm flexible with timing and can adjust to your schedule.

If you prefer, we can also have a quick call at your convenience.

Thank you for your time.

Best regards,
[YOUR_NAME]`,
    variables: ['RECIPIENT_NAME', 'MEETING_TOPIC', 'DURATION', 'YOUR_NAME'],
  },
  {
    id: 'intro',
    name: 'Professional Introduction',
    category: 'Networking',
    subject: 'Introduction - [YOUR_NAME]',
    body: `Dear [RECIPIENT_NAME],

I hope this email finds you well. My name is [YOUR_NAME], and I am a [YOUR_ROLE] at [YOUR_COMPANY].

I came across your profile on [PLATFORM] and was impressed by your work in [THEIR_FIELD]. I'm reaching out because [REASON_FOR_CONTACT].

I would love to connect and learn more about your experience.

Best regards,
[YOUR_NAME]`,
    variables: [
      'RECIPIENT_NAME',
      'YOUR_NAME',
      'YOUR_ROLE',
      'YOUR_COMPANY',
      'PLATFORM',
      'THEIR_FIELD',
      'REASON_FOR_CONTACT',
    ],
  },
  {
    id: 'apology',
    name: 'Professional Apology',
    category: 'Professional',
    subject: 'Apology for [ISSUE]',
    body: `Dear [RECIPIENT_NAME],

I am writing to sincerely apologize for [ISSUE]. I understand this may have caused inconvenience, and I take full responsibility.

To prevent this from happening again, I [CORRECTIVE_ACTION].

Please let me know if there's anything else I can do to make this right.

Thank you for your understanding.

Best regards,
[YOUR_NAME]`,
    variables: ['RECIPIENT_NAME', 'ISSUE', 'CORRECTIVE_ACTION', 'YOUR_NAME'],
  },
];

export default function EmailGeneratorClient() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<EmailTemplate | null>(emailTemplates[0]);
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const generateEmail = () => {
    if (!selectedTemplate) return { subject: '', body: '' };

    let subject = selectedTemplate.subject;
    let body = selectedTemplate.body;

    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`\\[${key}\\]`, 'g');
      subject = subject.replace(regex, value || `[${key}]`);
      body = body.replace(regex, value || `[${key}]`);
    });

    return { subject, body };
  };

  const { subject, body } = generateEmail();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = [...new Set(emailTemplates.map((t) => t.category))];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Mail className="h-4 w-4" />
            Free Productivity Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional Email Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Generate professional emails in seconds with customizable templates.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">
              {emailTemplates.length} Templates
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Customizable</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Copy & Paste</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
          {/* Template Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold">Select Template</h3>
            {categories.map((category) => (
              <div key={category}>
                <h4 className="mb-2 text-sm text-muted-foreground">
                  {category}
                </h4>
                <div className="space-y-2">
                  {emailTemplates
                    .filter((t) => t.category === category)
                    .map((template) => (
                      <button
                        key={template.id}
                        onClick={() => {
                          setSelectedTemplate(template);
                          setVariables({});
                        }}
                        className={`w-full rounded-lg border p-3 text-left transition-all ${
                          selectedTemplate?.id === template.id
                            ? 'border-primary bg-primary/5'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        {template.name}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Email Generator */}
          <div className="space-y-6">
            {selectedTemplate && (
              <>
                {/* Variables */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Customize Your Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-2">
                    {selectedTemplate.variables.map((variable) => (
                      <div key={variable}>
                        <label className="mb-1 block text-sm font-medium">
                          {variable.replace(/_/g, ' ')}
                        </label>
                        <input
                          type="text"
                          value={variables[variable] || ''}
                          onChange={(e) =>
                            setVariables({
                              ...variables,
                              [variable]: e.target.value,
                            })
                          }
                          placeholder={variable.replace(/_/g, ' ')}
                          className="w-full rounded-lg border bg-muted/50 p-2 outline-none"
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Preview */}
                <Card className="border-primary">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Email Preview</CardTitle>
                    <Button
                      onClick={copyEmail}
                      className="gap-2"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied ? 'Copied!' : 'Copy Email'}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">
                        Subject:{' '}
                      </span>
                      <span className="font-medium">{subject}</span>
                    </div>
                    <div className="whitespace-pre-wrap rounded-lg border p-4 font-mono text-sm">
                      {body}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Resume Builder',
                href: '/tools/resume-builder',
                desc: 'Create your resume',
              },
              {
                title: 'Lorem Ipsum Generator',
                href: '/tools/lorem-ipsum-generator',
                desc: 'Generate placeholder text',
              },
              {
                title: 'Job Application Tracker',
                href: '/tools/job-application-tracker',
                desc: 'Track applications',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
