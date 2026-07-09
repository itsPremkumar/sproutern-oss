'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Lock,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react';
import Link from 'next/link';

interface ChecklistCategory {
  name: string;
  icon: string;
  items: {
    id: string;
    title: string;
    description: string;
    priority: 'Critical' | 'Important' | 'Recommended';
  }[];
}

const checklistData: ChecklistCategory[] = [
  {
    name: 'Account Security',
    icon: '🔐',
    items: [
      {
        id: 'a1',
        title: 'Use unique passwords',
        description: 'Never reuse passwords across sites',
        priority: 'Critical',
      },
      {
        id: 'a2',
        title: 'Enable 2FA everywhere',
        description: 'Add two-factor authentication to all important accounts',
        priority: 'Critical',
      },
      {
        id: 'a3',
        title: 'Use a password manager',
        description: 'Store passwords securely in a password manager',
        priority: 'Critical',
      },
      {
        id: 'a4',
        title: 'Review connected apps',
        description: 'Remove unused third-party app permissions',
        priority: 'Important',
      },
      {
        id: 'a5',
        title: 'Check data breaches',
        description: 'Use haveibeenpwned.com to check if your email was leaked',
        priority: 'Important',
      },
    ],
  },
  {
    name: 'Social Media',
    icon: '📱',
    items: [
      {
        id: 's1',
        title: 'Review privacy settings',
        description: 'Check who can see your posts and profile',
        priority: 'Critical',
      },
      {
        id: 's2',
        title: 'Limit location sharing',
        description: 'Disable automatic location tagging',
        priority: 'Important',
      },
      {
        id: 's3',
        title: 'Audit friend lists',
        description: 'Remove unknown connections',
        priority: 'Recommended',
      },
      {
        id: 's4',
        title: 'Disable data sharing',
        description: 'Opt out of personalized ads where possible',
        priority: 'Important',
      },
      {
        id: 's5',
        title: 'Review tagged photos',
        description: 'Enable approval for tags before they appear',
        priority: 'Recommended',
      },
    ],
  },
  {
    name: 'Device Security',
    icon: '💻',
    items: [
      {
        id: 'd1',
        title: 'Update software regularly',
        description: 'Enable automatic updates for OS and apps',
        priority: 'Critical',
      },
      {
        id: 'd2',
        title: 'Use device encryption',
        description: 'Enable full disk encryption on all devices',
        priority: 'Critical',
      },
      {
        id: 'd3',
        title: 'Set strong screen locks',
        description: 'Use biometric or long PIN/password',
        priority: 'Critical',
      },
      {
        id: 'd4',
        title: 'Install antivirus',
        description: 'Use reputable security software',
        priority: 'Important',
      },
      {
        id: 'd5',
        title: 'Enable Find My Device',
        description: 'Track and wipe lost devices remotely',
        priority: 'Important',
      },
    ],
  },
  {
    name: 'Browsing Privacy',
    icon: '🌐',
    items: [
      {
        id: 'b1',
        title: 'Use HTTPS everywhere',
        description:
          'Install browser extension or use browsers that enforce HTTPS',
        priority: 'Important',
      },
      {
        id: 'b2',
        title: 'Clear cookies regularly',
        description: 'Or use private/incognito mode for sensitive browsing',
        priority: 'Recommended',
      },
      {
        id: 'b3',
        title: 'Use ad blockers',
        description: 'Block trackers and malicious ads',
        priority: 'Recommended',
      },
      {
        id: 'b4',
        title: 'Consider VPN',
        description: 'Use VPN on public WiFi',
        priority: 'Important',
      },
      {
        id: 'b5',
        title: 'Review browser permissions',
        description: 'Check which sites have camera/mic access',
        priority: 'Recommended',
      },
    ],
  },
  {
    name: 'Email & Communication',
    icon: '📧',
    items: [
      {
        id: 'e1',
        title: 'Watch for phishing',
        description: 'Verify sender before clicking links',
        priority: 'Critical',
      },
      {
        id: 'e2',
        title: 'Use email aliases',
        description: 'Create aliases for signups to track leaks',
        priority: 'Recommended',
      },
      {
        id: 'e3',
        title: 'Enable spam filters',
        description: 'Keep spam filters active and report spam',
        priority: 'Important',
      },
      {
        id: 'e4',
        title: 'Use encrypted messaging',
        description: 'Prefer Signal or WhatsApp for sensitive chats',
        priority: 'Recommended',
      },
      {
        id: 'e5',
        title: 'Verify before sharing',
        description: 'Confirm identity before sharing sensitive info',
        priority: 'Critical',
      },
    ],
  },
];

export default function PrivacyChecklistClient() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(checklistData.map((c) => c.name)),
  );

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const toggleCategory = (name: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(name)) {
      newExpanded.delete(name);
    } else {
      newExpanded.add(name);
    }
    setExpandedCategories(newExpanded);
  };

  const totalItems = checklistData.reduce(
    (sum, cat) => sum + cat.items.length,
    0,
  );
  const checkedCount = checkedItems.size;
  const progress = (checkedCount / totalItems) * 100;

  const priorityColors = {
    Critical: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
    Important:
      'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300',
    Recommended:
      'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  };

  const downloadChecklist = () => {
    const text = checklistData
      .map(
        (cat) =>
          `${cat.icon} ${cat.name}\n${cat.items
            .map(
              (item) =>
                `[${checkedItems.has(item.id) ? 'x' : ' '}] ${item.title} - ${item.description}`,
            )
            .join('\n')}`,
      )
      .join('\n\n');

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy-checklist.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Lock className="h-4 w-4" />
            Free Security Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Privacy Checklist
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Comprehensive privacy and security checklist to protect yourself
            online.
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
            <span className="text-sm font-medium">{totalItems} Items</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">5 Categories</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Downloadable</span>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">
                  {checkedCount} / {totalItems}
                </div>
                <div className="text-sm text-muted-foreground">
                  Items completed
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  {Math.round(progress)}%
                </div>
                <div className="text-sm text-muted-foreground">Complete</div>
              </div>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                onClick={downloadChecklist}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download Checklist
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Checklist */}
        <div className="space-y-4">
          {checklistData.map((category) => (
            <Card key={category.name}>
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span>{category.icon}</span>
                    {category.name}
                    <span className="text-sm font-normal text-muted-foreground">
                      (
                      {
                        category.items.filter((i) => checkedItems.has(i.id))
                          .length
                      }
                      /{category.items.length})
                    </span>
                  </CardTitle>
                  {expandedCategories.has(category.name) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </CardHeader>
              {expandedCategories.has(category.name) && (
                <CardContent className="space-y-2">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-all ${
                        checkedItems.has(item.id)
                          ? 'bg-green-50 dark:bg-green-950'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 ${
                          checkedItems.has(item.id)
                            ? 'border-green-600 bg-green-600'
                            : 'border-muted-foreground'
                        }`}
                      >
                        {checkedItems.has(item.id) && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-medium ${checkedItems.has(item.id) ? 'line-through opacity-60' : ''}`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs ${priorityColors[item.priority]}`}
                          >
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Password Generator',
                href: '/tools/password-generator',
                desc: 'Generate secure passwords',
              },
              {
                title: '2FA Guide',
                href: '/tools/2fa-guide',
                desc: 'Set up two-factor auth',
              },
              {
                title: 'Password Strength Checker',
                href: '/tools/password-strength-checker',
                desc: 'Check password security',
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
