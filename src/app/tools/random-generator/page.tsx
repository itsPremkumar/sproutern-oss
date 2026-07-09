'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Hash, Shuffle, Copy, CheckCircle, Dices } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export default function RandomGeneratorPage() {
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('100');
  const [count, setCount] = useState('1');
  const [results, setResults] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const content = toolsSEOContent['random-generator'];

  // Random Password
  const [passwordLength, setPasswordLength] = useState('12');
  const [password, setPassword] = useState('');

  // Random Color
  const [color, setColor] = useState('');

  const generateNumbers = () => {
    const minVal = parseInt(min) || 1;
    const maxVal = parseInt(max) || 100;
    const countVal = Math.min(parseInt(count) || 1, 100);

    const numbers: number[] = [];
    for (let i = 0; i < countVal; i++) {
      numbers.push(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
    }
    setResults(numbers);
  };

  const generatePassword = () => {
    const length = parseInt(passwordLength) || 12;
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const generateColor = () => {
    const hex = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    setColor(`#${hex.toUpperCase()}`);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Dices className="h-4 w-4" />
            Utility Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">Random Generator</h1>
          <p className="text-xl text-muted-foreground">
            Generate random numbers, passwords, and colors
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Random Number */}
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <Hash className="h-4 w-4" />
                Random Numbers
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-xs text-muted-foreground">Min</label>
                  <Input
                    type="number"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Max</label>
                  <Input
                    type="number"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground">Count</label>
                  <Input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    max="100"
                  />
                </div>
              </div>
              <Button
                onClick={generateNumbers}
                className="w-full"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Generate
              </Button>
              {results.length > 0 && (
                <div className="rounded-lg bg-primary/10 p-4 text-center">
                  <p className="break-all text-2xl font-bold text-primary">
                    {results.join(', ')}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={() => copyToClipboard(results.join(', '))}
                  >
                    <Copy className="mr-1 h-3 w-3" /> Copy
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Random Password */}
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="flex items-center gap-2 font-semibold">
                🔐 Random Password
              </h3>
              <div>
                <label className="text-xs text-muted-foreground">Length</label>
                <Input
                  type="number"
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                  min="4"
                  max="50"
                />
              </div>
              <Button
                onClick={generatePassword}
                className="w-full"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Generate Password
              </Button>
              {password && (
                <div className="rounded-lg bg-primary/10 p-4">
                  <p className="break-all font-mono text-lg">{password}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={() => copyToClipboard(password)}
                  >
                    {copied ? (
                      <CheckCircle className="mr-1 h-3 w-3" />
                    ) : (
                      <Copy className="mr-1 h-3 w-3" />
                    )}
                    Copy
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Random Color */}
          <Card className="md:col-span-2">
            <CardContent className="space-y-4 pt-6">
              <h3 className="flex items-center gap-2 font-semibold">
                🎨 Random Color
              </h3>
              <Button
                onClick={generateColor}
                className="w-full"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Generate Color
              </Button>
              {color && (
                <div className="flex items-center gap-4">
                  <div
                    className="h-20 w-20 rounded-lg border"
                    style={{ backgroundColor: color }}
                  />
                  <div>
                    <p className="font-mono text-2xl font-bold">{color}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(color)}
                    >
                      <Copy className="mr-1 h-3 w-3" /> Copy Hex
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="random-generator"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
