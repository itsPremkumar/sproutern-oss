'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, CheckCircle, RotateCcw } from 'lucide-react';

export default function WordCounterClient() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.split(/[.!?]+/).filter((s) => s.trim()).length,
    paragraphs: text.split(/\n\n+/).filter((p) => p.trim()).length,
    lines: text.split(/\n/).filter((l) => l.trim()).length,
    readingTime: Math.ceil(
      (text.trim() ? text.trim().split(/\s+/).length : 0) / 200,
    ),
    speakingTime: Math.ceil(
      (text.trim() ? text.trim().split(/\s+/).length : 0) / 150,
    ),
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
        <Card className="border-primary/20 bg-primary/5 text-center">
          <CardContent className="pb-3 pt-4">
            <div className="text-3xl font-bold text-primary">{stats.words}</div>
            <div className="text-sm font-medium">Words</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pb-3 pt-4">
            <div className="text-3xl font-bold text-primary">
              {stats.characters}
            </div>
            <div className="text-sm font-medium">Characters</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pb-3 pt-4">
            <div className="text-3xl font-bold">{stats.charactersNoSpaces}</div>
            <div className="text-sm text-muted-foreground">No Spaces</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pb-3 pt-4">
            <div className="text-3xl font-bold">{stats.sentences}</div>
            <div className="text-sm text-muted-foreground">Sentences</div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-4 gap-3">
        <Card className="text-center">
          <CardContent className="pb-2 pt-3">
            <div className="text-xl font-bold">{stats.paragraphs}</div>
            <div className="text-xs text-muted-foreground">Paragraphs</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pb-2 pt-3">
            <div className="text-xl font-bold">{stats.lines}</div>
            <div className="text-xs text-muted-foreground">Lines</div>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 text-center dark:bg-blue-950">
          <CardContent className="pb-2 pt-3">
            <div className="text-xl font-bold text-blue-600">
              {stats.readingTime}
            </div>
            <div className="text-xs text-muted-foreground">Min Read</div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 text-center dark:bg-green-950">
          <CardContent className="pb-2 pt-3">
            <div className="text-xl font-bold text-green-600">
              {stats.speakingTime}
            </div>
            <div className="text-xs text-muted-foreground">Min Speak</div>
          </CardContent>
        </Card>
      </div>

      {/* Text Input */}
      <Card>
        <CardContent className="pt-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Enter or paste your text
            </span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Twitter: {280 - stats.characters} left</span>
              <span>•</span>
              <span>LinkedIn: {3000 - stats.characters} left</span>
            </div>
          </div>
          <Textarea
            placeholder="Start typing or paste your text here to see real-time word and character count..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[300px] text-base"
          />
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={handleClear}
          className="flex-1"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Clear
        </Button>
        <Button
          variant="outline"
          onClick={handleCopy}
          className="flex-1"
        >
          {copied ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Text
            </>
          )}
        </Button>
      </div>

      {/* Quick Reference */}
      {stats.characters > 0 && (
        <Card className="bg-muted/50">
          <CardContent className="pt-4">
            <h4 className="mb-2 font-semibold">Quick Check</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span>Twitter/X (280)</span>
                <span
                  className={
                    stats.characters <= 280 ? 'text-green-600' : 'text-red-600'
                  }
                >
                  {stats.characters <= 280 ? '✓ OK' : '✗ Over'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Meta Description (160)</span>
                <span
                  className={
                    stats.characters <= 160 ? 'text-green-600' : 'text-red-600'
                  }
                >
                  {stats.characters <= 160 ? '✓ OK' : '✗ Over'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Instagram (2,200)</span>
                <span
                  className={
                    stats.characters <= 2200 ? 'text-green-600' : 'text-red-600'
                  }
                >
                  {stats.characters <= 2200 ? '✓ OK' : '✗ Over'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>LinkedIn (3,000)</span>
                <span
                  className={
                    stats.characters <= 3000 ? 'text-green-600' : 'text-red-600'
                  }
                >
                  {stats.characters <= 3000 ? '✓ OK' : '✗ Over'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
