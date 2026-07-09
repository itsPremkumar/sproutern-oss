'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  CheckCircle,
  Clock,
  Users,
  Eye,
  EyeOff,
  AlertTriangle,
  Check,
  X,
} from 'lucide-react';
import Link from 'next/link';

interface PasswordAnalysis {
  score: number;
  strength: 'Very Weak' | 'Weak' | 'Fair' | 'Strong' | 'Very Strong';
  color: string;
  timeToCrack: string;
  checks: {
    name: string;
    passed: boolean;
    message: string;
  }[];
  suggestions: string[];
}

export default function PasswordStrengthCheckerClient() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const analysis = useMemo((): PasswordAnalysis => {
    if (!password) {
      return {
        score: 0,
        strength: 'Very Weak',
        color: 'bg-gray-300',
        timeToCrack: '-',
        checks: [],
        suggestions: ['Enter a password to check its strength'],
      };
    }

    const checks = [
      {
        name: 'Length',
        passed: password.length >= 8,
        message:
          password.length >= 12
            ? '12+ characters (excellent!)'
            : password.length >= 8
              ? '8+ characters (good)'
              : 'Less than 8 characters',
      },
      {
        name: 'Lowercase',
        passed: /[a-z]/.test(password),
        message: 'Contains lowercase letters',
      },
      {
        name: 'Uppercase',
        passed: /[A-Z]/.test(password),
        message: 'Contains uppercase letters',
      },
      {
        name: 'Numbers',
        passed: /[0-9]/.test(password),
        message: 'Contains numbers',
      },
      {
        name: 'Special Characters',
        passed: /[!@#$%^&*()_+\-=[\]{};:'",.<>?/\\|`~]/.test(password),
        message: 'Contains special characters (!@#$%...)',
      },
      {
        name: 'No Common Patterns',
        passed:
          !/^(123|abc|qwerty|password|admin|letmein)/i.test(password) &&
          !/(.)\1{2,}/.test(password),
        message: 'Avoids common patterns and repeated characters',
      },
    ];

    let score = 0;
    checks.forEach((check) => {
      if (check.passed) score += 1;
    });
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;

    const strengthMap: Record<
      number,
      { strength: PasswordAnalysis['strength']; color: string }
    > = {
      0: { strength: 'Very Weak', color: 'bg-red-500' },
      1: { strength: 'Very Weak', color: 'bg-red-500' },
      2: { strength: 'Weak', color: 'bg-orange-500' },
      3: { strength: 'Fair', color: 'bg-yellow-500' },
      4: { strength: 'Fair', color: 'bg-yellow-500' },
      5: { strength: 'Strong', color: 'bg-green-500' },
      6: { strength: 'Strong', color: 'bg-green-500' },
      7: { strength: 'Very Strong', color: 'bg-emerald-500' },
      8: { strength: 'Very Strong', color: 'bg-emerald-500' },
    };

    const { strength, color } = strengthMap[Math.min(score, 8)];

    // Estimate time to crack (simplified)
    const charsetSize =
      (/[a-z]/.test(password) ? 26 : 0) +
      (/[A-Z]/.test(password) ? 26 : 0) +
      (/[0-9]/.test(password) ? 10 : 0) +
      (/[^a-zA-Z0-9]/.test(password) ? 32 : 0);

    const combinations = Math.pow(charsetSize, password.length);
    const attemptsPerSecond = 1000000000; // 1 billion attempts/sec
    const seconds = combinations / attemptsPerSecond;

    let timeToCrack = 'Instantly';
    if (seconds > 31536000000) timeToCrack = 'Centuries';
    else if (seconds > 31536000)
      timeToCrack = `${Math.floor(seconds / 31536000)} years`;
    else if (seconds > 86400)
      timeToCrack = `${Math.floor(seconds / 86400)} days`;
    else if (seconds > 3600)
      timeToCrack = `${Math.floor(seconds / 3600)} hours`;
    else if (seconds > 60) timeToCrack = `${Math.floor(seconds / 60)} minutes`;
    else if (seconds > 1) timeToCrack = `${Math.floor(seconds)} seconds`;

    const suggestions: string[] = [];
    if (password.length < 12) suggestions.push('Use at least 12 characters');
    if (!/[A-Z]/.test(password)) suggestions.push('Add uppercase letters');
    if (!/[0-9]/.test(password)) suggestions.push('Add numbers');
    if (!/[^a-zA-Z0-9]/.test(password))
      suggestions.push('Add special characters');
    if (/(.)\1{2,}/.test(password))
      suggestions.push('Avoid repeated characters');

    return { score, strength, color, timeToCrack, checks, suggestions };
  }, [password]);

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Shield className="h-4 w-4" />
            Free Security Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Password Strength Checker
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Check how strong your password is and get tips to make it more
            secure.
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
            <span className="text-sm font-medium">Instant Analysis</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Client-Side Only</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Never Stored</span>
          </div>
        </div>

        {/* Password Input */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <label className="mb-2 block text-sm font-medium">
              Enter Password to Check
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password..."
                className="w-full rounded-lg border bg-muted/50 p-4 pr-12 text-xl outline-none"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Strength Bar */}
            <div className="mt-4">
              <div className="mb-2 flex justify-between text-sm">
                <span>Strength</span>
                <span className="font-semibold">{analysis.strength}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full transition-all ${analysis.color}`}
                  style={{ width: `${(analysis.score / 8) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {password && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysis.checks.map((check, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 rounded-lg p-3 ${
                      check.passed
                        ? 'bg-green-50 dark:bg-green-950'
                        : 'bg-red-50 dark:bg-red-950'
                    }`}
                  >
                    {check.passed ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <X className="h-5 w-5 text-red-600" />
                    )}
                    <div>
                      <div className="font-medium">{check.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {check.message}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    Time to Crack
                  </div>
                  <div className="text-3xl font-bold">
                    {analysis.timeToCrack}
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    Character Count
                  </div>
                  <div className="text-3xl font-bold">{password.length}</div>
                </div>

                {analysis.suggestions.length > 0 && (
                  <div className="rounded-lg border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
                    <div className="mb-2 flex items-center gap-2 font-medium text-yellow-800 dark:text-yellow-200">
                      <AlertTriangle className="h-4 w-4" />
                      Suggestions
                    </div>
                    <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                      {analysis.suggestions.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Privacy Notice */}
        <Card className="mt-6 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardContent className="flex items-start gap-3 py-4">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <div className="text-sm">
              <p className="font-semibold text-blue-800 dark:text-blue-200">
                Your Password is Safe
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                This tool runs entirely in your browser. Your password is never
                sent to any server or stored anywhere.
              </p>
            </div>
          </CardContent>
        </Card>

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
                title: 'Encryption Tool',
                href: '/tools/encryption-tool',
                desc: 'Encrypt your data',
              },
              {
                title: '2FA Guide',
                href: '/tools/2fa-guide',
                desc: 'Learn about 2FA',
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
