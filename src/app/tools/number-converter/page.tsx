'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Binary, ArrowRightLeft, Copy, CheckCircle } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

type NumberSystem = 'decimal' | 'binary' | 'octal' | 'hexadecimal';

export default function NumberConverterPage() {
  const [inputValue, setInputValue] = useState('');
  const [fromSystem, setFromSystem] = useState<NumberSystem>('decimal');
  const [results, setResults] = useState<Record<NumberSystem, string>>({
    decimal: '',
    binary: '',
    octal: '',
    hexadecimal: '',
  });
  const [copied, setCopied] = useState<string | null>(null);
  const content = toolsSEOContent['number-converter'];

  const convert = () => {
    let decimalValue: number;

    try {
      switch (fromSystem) {
        case 'decimal':
          decimalValue = parseInt(inputValue, 10);
          break;
        case 'binary':
          decimalValue = parseInt(inputValue, 2);
          break;
        case 'octal':
          decimalValue = parseInt(inputValue, 8);
          break;
        case 'hexadecimal':
          decimalValue = parseInt(inputValue, 16);
          break;
      }

      if (isNaN(decimalValue)) {
        setResults({
          decimal: 'Invalid',
          binary: 'Invalid',
          octal: 'Invalid',
          hexadecimal: 'Invalid',
        });
        return;
      }

      setResults({
        decimal: decimalValue.toString(10),
        binary: decimalValue.toString(2),
        octal: decimalValue.toString(8),
        hexadecimal: decimalValue.toString(16).toUpperCase(),
      });
    } catch {
      setResults({
        decimal: 'Error',
        binary: 'Error',
        octal: 'Error',
        hexadecimal: 'Error',
      });
    }
  };

  const handleCopy = async (system: NumberSystem) => {
    await navigator.clipboard.writeText(results[system]);
    setCopied(system);
    setTimeout(() => setCopied(null), 2000);
  };

  const systems: {
    key: NumberSystem;
    label: string;
    placeholder: string;
    base: string;
  }[] = [
    { key: 'decimal', label: 'Decimal', placeholder: '42', base: 'Base 10' },
    { key: 'binary', label: 'Binary', placeholder: '101010', base: 'Base 2' },
    { key: 'octal', label: 'Octal', placeholder: '52', base: 'Base 8' },
    {
      key: 'hexadecimal',
      label: 'Hexadecimal',
      placeholder: '2A',
      base: 'Base 16',
    },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Binary className="h-4 w-4" />
            Programming Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">Number System Converter</h1>
          <p className="text-xl text-muted-foreground">
            Convert between Decimal, Binary, Octal, and Hexadecimal
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="space-y-4 pt-6">
            <div>
              <Label>Input Number System</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {systems.map((sys) => (
                  <Button
                    key={sys.key}
                    variant={fromSystem === sys.key ? 'default' : 'outline'}
                    onClick={() => setFromSystem(sys.key)}
                  >
                    {sys.label}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label>
                Enter {systems.find((s) => s.key === fromSystem)?.label} Number
              </Label>
              <Input
                placeholder={
                  systems.find((s) => s.key === fromSystem)?.placeholder
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="mt-1 font-mono"
              />
            </div>

            <Button
              onClick={convert}
              className="w-full"
            >
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Convert
            </Button>
          </CardContent>
        </Card>

        {results.decimal && (
          <div className="grid gap-4 md:grid-cols-2">
            {systems.map((sys) => (
              <Card
                key={sys.key}
                className={fromSystem === sys.key ? 'border-primary' : ''}
              >
                <CardContent className="pt-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{sys.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {sys.base}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(sys.key)}
                    >
                      {copied === sys.key ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="break-all font-mono text-lg">
                    {results[sys.key]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="number-converter"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
