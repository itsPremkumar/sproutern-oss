'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, CheckCircle, RotateCcw } from 'lucide-react';

type CaseType =
  | 'upper'
  | 'lower'
  | 'title'
  | 'sentence'
  | 'toggle'
  | 'camel'
  | 'pascal'
  | 'snake'
  | 'kebab'
  | 'constant';

export default function CaseConverterClient() {
  const [text, setText] = useState('');
  const [converted, setConverted] = useState('');
  const [copied, setCopied] = useState(false);
  const [lastCase, setLastCase] = useState<string>('');

  const convertCase = (type: CaseType) => {
    let result = '';
    const cleanText = text.trim();

    switch (type) {
      case 'upper':
        result = cleanText.toUpperCase();
        setLastCase('UPPERCASE');
        break;
      case 'lower':
        result = cleanText.toLowerCase();
        setLastCase('lowercase');
        break;
      case 'title':
        result = cleanText
          .toLowerCase()
          .replace(/\b\w/g, (c) => c.toUpperCase());
        setLastCase('Title Case');
        break;
      case 'sentence':
        result = cleanText
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        setLastCase('Sentence case');
        break;
      case 'toggle':
        result = cleanText
          .split('')
          .map((c) =>
            c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase(),
          )
          .join('');
        setLastCase('tOGGLE cASE');
        break;
      case 'camel':
        result = cleanText
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
          .replace(/^[A-Z]/, (c) => c.toLowerCase());
        setLastCase('camelCase');
        break;
      case 'pascal':
        result = cleanText
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
          .replace(/^[a-z]/, (c) => c.toUpperCase());
        setLastCase('PascalCase');
        break;
      case 'snake':
        result = cleanText
          .toLowerCase()
          .replace(/\s+/g, '_')
          .replace(/[^a-zA-Z0-9_]/g, '');
        setLastCase('snake_case');
        break;
      case 'kebab':
        result = cleanText
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-zA-Z0-9-]/g, '');
        setLastCase('kebab-case');
        break;
      case 'constant':
        result = cleanText
          .toUpperCase()
          .replace(/\s+/g, '_')
          .replace(/[^A-Z0-9_]/g, '');
        setLastCase('CONSTANT_CASE');
        break;
    }
    setConverted(result);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(converted || text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
    setConverted('');
    setLastCase('');
  };

  const stats = {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Enter your text
            </span>
            <span className="text-xs text-muted-foreground">
              {stats.words} words • {stats.characters} characters
            </span>
          </div>
          <Textarea
            placeholder="Enter or paste your text here to convert..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[150px] text-base"
          />
        </CardContent>
      </Card>

      {/* Conversion Buttons */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Common Cases
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => convertCase('upper')}
            variant="default"
          >
            UPPERCASE
          </Button>
          <Button
            onClick={() => convertCase('lower')}
            variant="default"
          >
            lowercase
          </Button>
          <Button
            onClick={() => convertCase('title')}
            variant="default"
          >
            Title Case
          </Button>
          <Button
            onClick={() => convertCase('sentence')}
            variant="default"
          >
            Sentence case
          </Button>
        </div>

        <p className="pt-2 text-sm font-medium text-muted-foreground">
          Developer Cases
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => convertCase('camel')}
            variant="outline"
          >
            camelCase
          </Button>
          <Button
            onClick={() => convertCase('pascal')}
            variant="outline"
          >
            PascalCase
          </Button>
          <Button
            onClick={() => convertCase('snake')}
            variant="outline"
          >
            snake_case
          </Button>
          <Button
            onClick={() => convertCase('kebab')}
            variant="outline"
          >
            kebab-case
          </Button>
          <Button
            onClick={() => convertCase('constant')}
            variant="outline"
          >
            CONSTANT_CASE
          </Button>
        </div>

        <p className="pt-2 text-sm font-medium text-muted-foreground">Other</p>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => convertCase('toggle')}
            variant="secondary"
          >
            tOGGLE cASE
          </Button>
        </div>
      </div>

      {/* Output Section */}
      {converted && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium">
                Converted to <span className="text-primary">{lastCase}</span>
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <CheckCircle className="mr-1 h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="whitespace-pre-wrap break-all rounded-lg border bg-background p-4 font-mono text-sm">
              {converted}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Clear Button */}
      <Button
        variant="outline"
        onClick={handleClear}
        className="w-full"
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Clear All
      </Button>
    </div>
  );
}
