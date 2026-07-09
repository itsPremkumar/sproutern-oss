'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FileText, Copy, CheckCircle, RefreshCw } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export default function LoremIpsumGeneratorPage() {
  const [paragraphs, setParagraphs] = useState('3');
  const [generatedText, setGeneratedText] = useState('');
  const [copied, setCopied] = useState(false);
  const content = toolsSEOContent['lorem-ipsum-generator'];

  const loremWords = [
    'lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
    'eiusmod',
    'tempor',
    'incididunt',
    'ut',
    'labore',
    'et',
    'dolore',
    'magna',
    'aliqua',
    'enim',
    'ad',
    'minim',
    'veniam',
    'quis',
    'nostrud',
    'exercitation',
    'ullamco',
    'laboris',
    'nisi',
    'aliquip',
    'ex',
    'ea',
    'commodo',
    'consequat',
    'duis',
    'aute',
    'irure',
    'in',
    'reprehenderit',
    'voluptate',
    'velit',
    'esse',
    'cillum',
    'fugiat',
    'nulla',
    'pariatur',
    'excepteur',
    'sint',
    'occaecat',
    'cupidatat',
    'non',
    'proident',
    'sunt',
    'culpa',
    'qui',
    'officia',
    'deserunt',
    'mollit',
    'anim',
    'id',
    'est',
    'laborum',
    'perspiciatis',
    'unde',
    'omnis',
    'iste',
    'natus',
    'error',
    'voluptatem',
    'accusantium',
    'doloremque',
    'laudantium',
    'totam',
    'rem',
    'aperiam',
    'eaque',
    'ipsa',
    'quae',
    'ab',
    'illo',
    'inventore',
    'veritatis',
    'quasi',
    'architecto',
    'beatae',
    'vitae',
    'dicta',
    'explicabo',
    'nemo',
    'ipsam',
    'quia',
    'voluptas',
    'aspernatur',
    'aut',
    'odit',
    'fugit',
    'consequuntur',
    'magni',
    'dolores',
    'eos',
    'ratione',
    'sequi',
    'nesciunt',
    'dolores',
  ];

  const generateSentence = () => {
    const length = Math.floor(Math.random() * 10) + 8;
    const sentence = [];
    for (let i = 0; i < length; i++) {
      const word = loremWords[Math.floor(Math.random() * loremWords.length)];
      sentence.push(
        i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
      );
    }
    return sentence.join(' ') + '.';
  };

  const generateParagraph = () => {
    const sentenceCount = Math.floor(Math.random() * 4) + 4;
    const sentences = [];
    for (let i = 0; i < sentenceCount; i++) {
      sentences.push(generateSentence());
    }
    return sentences.join(' ');
  };

  const generate = () => {
    const count = parseInt(paragraphs) || 3;
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(
        i === 0
          ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
              generateParagraph().slice(generateSentence().length)
          : generateParagraph(),
      );
    }
    setGeneratedText(result.join('\n\n'));
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FileText className="h-4 w-4" />
            Design Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">Lorem Ipsum Generator</h1>
          <p className="text-xl text-muted-foreground">
            Generate placeholder text for your designs and mockups
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="space-y-4 pt-6">
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <Label>Number of Paragraphs</Label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={paragraphs}
                  onChange={(e) => setParagraphs(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button onClick={generate}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        {generatedText && (
          <Card>
            <CardContent className="space-y-4 pt-6">
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> Copy
                    </>
                  )}
                </Button>
              </div>
              <Textarea
                value={generatedText}
                readOnly
                className="min-h-[300px]"
              />
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{generatedText.split(/\s+/).length} words</span>
                <span>{generatedText.length} characters</span>
              </div>
            </CardContent>
          </Card>
        )}

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="lorem-ipsum-generator"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
