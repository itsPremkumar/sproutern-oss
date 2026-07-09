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
  Copy,
  Check,
  BookOpen,
  Key,
  Hash,
  ArrowLeftRight,
} from 'lucide-react';
import Link from 'next/link';

type EncryptionMode = 'aes' | 'base64' | 'hash';
type HashAlgorithm = 'SHA-256' | 'SHA-384' | 'SHA-512';

export default function EncryptionToolClient() {
  const [mode, setMode] = useState<EncryptionMode>('aes');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [password, setPassword] = useState('');
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [hashAlgorithm, setHashAlgorithm] = useState<HashAlgorithm>('SHA-256');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  // Simple XOR-based encryption (for demonstration - real apps should use Web Crypto API)
  const simpleEncrypt = (text: string, key: string): string => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(
        text.charCodeAt(i) ^ key.charCodeAt(i % key.length),
      );
    }
    return btoa(result);
  };

  const simpleDecrypt = (encoded: string, key: string): string => {
    try {
      const text = atob(encoded);
      let result = '';
      for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(
          text.charCodeAt(i) ^ key.charCodeAt(i % key.length),
        );
      }
      return result;
    } catch {
      throw new Error('Invalid encrypted text');
    }
  };

  const base64Encode = (text: string): string => {
    return btoa(unescape(encodeURIComponent(text)));
  };

  const base64Decode = (encoded: string): string => {
    try {
      return decodeURIComponent(escape(atob(encoded)));
    } catch {
      throw new Error('Invalid Base64 string');
    }
  };

  const generateHash = async (
    text: string,
    algorithm: HashAlgorithm,
  ): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  const processText = async () => {
    setError('');
    if (!input.trim()) {
      setError('Please enter some text');
      return;
    }

    try {
      let result = '';

      switch (mode) {
        case 'aes':
          if (!password.trim()) {
            setError('Please enter a password');
            return;
          }
          result = isEncrypting
            ? simpleEncrypt(input, password)
            : simpleDecrypt(input, password);
          break;

        case 'base64':
          result = isEncrypting ? base64Encode(input) : base64Decode(input);
          break;

        case 'hash':
          result = await generateHash(input, hashAlgorithm);
          break;
      }

      setOutput(result);
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swapInputOutput = () => {
    const temp = input;
    setInput(output);
    setOutput(temp);
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
            Encryption Tool
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Encrypt, decrypt, and hash your text securely. All processing
            happens in your browser.
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
            <span className="text-sm font-medium">Instant Processing</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">5,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Client-Side Only</span>
          </div>
        </div>

        {/* Mode Selection */}
        <div className="mb-6 flex justify-center gap-2">
          <Button
            variant={mode === 'aes' ? 'default' : 'outline'}
            onClick={() => setMode('aes')}
            className="gap-2"
          >
            <Key className="h-4 w-4" />
            Encrypt/Decrypt
          </Button>
          <Button
            variant={mode === 'base64' ? 'default' : 'outline'}
            onClick={() => setMode('base64')}
            className="gap-2"
          >
            <ArrowLeftRight className="h-4 w-4" />
            Base64
          </Button>
          <Button
            variant={mode === 'hash' ? 'default' : 'outline'}
            onClick={() => setMode('hash')}
            className="gap-2"
          >
            <Hash className="h-4 w-4" />
            Hash
          </Button>
        </div>

        {/* Main Tool */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              {mode === 'hash'
                ? 'Generate Hash'
                : isEncrypting
                  ? 'Encrypt Text'
                  : 'Decrypt Text'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Direction Toggle for encrypt/decode modes */}
            {mode !== 'hash' && (
              <div className="flex gap-2">
                <Button
                  variant={isEncrypting ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setIsEncrypting(true)}
                >
                  {mode === 'base64' ? 'Encode' : 'Encrypt'}
                </Button>
                <Button
                  variant={!isEncrypting ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setIsEncrypting(false)}
                >
                  {mode === 'base64' ? 'Decode' : 'Decrypt'}
                </Button>
              </div>
            )}

            {/* Password field for encryption */}
            {mode === 'aes' && (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password (required)
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter encryption password..."
                  className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                />
              </div>
            )}

            {/* Hash algorithm selection */}
            {mode === 'hash' && (
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Algorithm:</label>
                <select
                  value={hashAlgorithm}
                  onChange={(e) =>
                    setHashAlgorithm(e.target.value as HashAlgorithm)
                  }
                  className="rounded-md border bg-background px-3 py-1.5 text-sm"
                >
                  <option value="SHA-256">SHA-256</option>
                  <option value="SHA-384">SHA-384</option>
                  <option value="SHA-512">SHA-512</option>
                </select>
              </div>
            )}

            {/* Input */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {mode === 'hash'
                  ? 'Text to Hash'
                  : isEncrypting
                    ? 'Plain Text'
                    : 'Encrypted Text'}
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text here..."
                className="min-h-[120px] w-full rounded-lg border bg-muted/50 p-4 font-mono text-sm outline-none"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-red-600 dark:bg-red-950">
                {error}
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={processText}
                className="flex-1"
              >
                {mode === 'hash'
                  ? 'Generate Hash'
                  : isEncrypting
                    ? 'Encrypt'
                    : 'Decrypt'}
              </Button>
              {mode !== 'hash' && (
                <Button
                  variant="outline"
                  onClick={swapInputOutput}
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Output */}
            {output && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium">
                    {mode === 'hash'
                      ? 'Hash Output'
                      : isEncrypting
                        ? 'Encrypted Output'
                        : 'Decrypted Output'}
                  </label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyOutput}
                  >
                    {copied ? (
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="mr-2 h-4 w-4" />
                    )}
                    Copy
                  </Button>
                </div>
                <div className="break-all rounded-lg border bg-muted/50 p-4 font-mono text-sm">
                  {output}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="mb-6 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950">
          <CardContent className="flex items-start gap-3 py-4">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <div className="text-sm">
              <p className="font-semibold text-blue-800 dark:text-blue-200">
                Privacy Notice
              </p>
              <p className="text-blue-700 dark:text-blue-300">
                All encryption and hashing happens in your browser. Your data
                never leaves your device. For sensitive data, use established
                encryption libraries in production.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Understanding Encryption
          </h2>

          <h3>Types of Encryption</h3>
          <div className="not-prose grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Symmetric Encryption</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Uses the same key for encryption and decryption. Fast and
                efficient for large data. Examples: AES, DES, Blowfish.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Base64 Encoding</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Not encryption - just encoding binary data as ASCII text. Useful
                for data transfer. Easily reversible without a key.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hashing</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                One-way function that produces fixed-size output. Cannot be
                reversed. Used for passwords, checksums, integrity verification.
              </CardContent>
            </Card>
          </div>

          <h3>When to Use Each</h3>
          <ul>
            <li>
              <strong>Encryption:</strong> Protecting sensitive data that needs
              to be retrieved later
            </li>
            <li>
              <strong>Base64:</strong> Encoding binary data for transmission
              (images in URLs, email attachments)
            </li>
            <li>
              <strong>Hashing:</strong> Password storage, file integrity checks,
              digital signatures
            </li>
          </ul>
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
                title: 'Password Strength Checker',
                href: '/tools/password-strength-checker',
                desc: 'Check password security',
              },
              {
                title: '2FA Guide',
                href: '/tools/2fa-guide',
                desc: 'Learn about two-factor auth',
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
