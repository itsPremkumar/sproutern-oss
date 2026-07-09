'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ImageIcon,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  Download,
} from 'lucide-react';
import Link from 'next/link';

export default function ImagePlaceholderClient() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [bgColor, setBgColor] = useState('#CCCCCC');
  const [textColor, setTextColor] = useState('#666666');
  const [text, setText] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const displayText = text || `${width} × ${height}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Text
    ctx.fillStyle = textColor;
    const fontSize = Math.min(width, height) / 8;
    ctx.font = `${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(displayText, width / 2, height / 2);

    // Border
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, width - 2, height - 2);
  }, [width, height, bgColor, textColor, displayText]);

  const getDataUrl = () => {
    const canvas = canvasRef.current;
    return canvas?.toDataURL('image/png') || '';
  };

  const copyUrl = async (type: string) => {
    let content = '';
    if (type === 'dataurl') {
      content = getDataUrl();
    } else if (type === 'html') {
      content = `<img src="${getDataUrl()}" alt="Placeholder ${width}x${height}" width="${width}" height="${height}" />`;
    } else if (type === 'markdown') {
      content = `![Placeholder ${width}x${height}](${getDataUrl()})`;
    }
    await navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = `placeholder-${width}x${height}.png`;
    link.href = getDataUrl();
    link.click();
  };

  const presets = [
    { name: 'Thumbnail', w: 150, h: 150 },
    { name: 'Banner', w: 1200, h: 300 },
    { name: 'Social', w: 1200, h: 630 },
    { name: 'Square', w: 500, h: 500 },
    { name: 'Portrait', w: 400, h: 600 },
    { name: 'HD', w: 1920, h: 1080 },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <ImageIcon className="h-4 w-4" />
            Free Design Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Image Placeholder Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Generate custom placeholder images for your designs and mockups.
            Download or embed directly.
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
            <span className="text-sm font-medium">Instant</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Custom Size</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">PNG Export</span>
          </div>
        </div>

        {/* Preview */}
        <Card className="mb-6 overflow-hidden">
          <CardContent className="flex items-center justify-center bg-[repeating-conic-gradient(#80808020_0%_25%,transparent_0%_50%)] bg-[length:20px_20px] p-8">
            <canvas
              ref={canvasRef}
              className="max-w-full shadow-lg"
              style={{ maxHeight: 400 }}
            />
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dimensions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Width (px)
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) =>
                      setWidth(
                        Math.min(
                          2000,
                          Math.max(10, parseInt(e.target.value) || 100),
                        ),
                      )
                    }
                    min="10"
                    max="2000"
                    className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Height (px)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) =>
                      setHeight(
                        Math.min(
                          2000,
                          Math.max(10, parseInt(e.target.value) || 100),
                        ),
                      )
                    }
                    min="10"
                    max="2000"
                    className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                  />
                </div>
              </div>

              {/* Presets */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Presets
                </label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setWidth(preset.w);
                        setHeight(preset.h);
                      }}
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Appearance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Background
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-10 w-16 cursor-pointer rounded border"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1 rounded-lg border bg-muted/50 p-2 font-mono text-sm outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Text Color
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="h-10 w-16 cursor-pointer rounded border"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 rounded-lg border bg-muted/50 p-2 font-mono text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Custom Text (optional)
                </label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={`Default: ${width} × ${height}`}
                  className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="mt-6">
          <CardContent className="flex flex-wrap items-center justify-center gap-4 py-6">
            <Button
              onClick={downloadImage}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download PNG
            </Button>
            <Button
              variant="outline"
              onClick={() => copyUrl('dataurl')}
            >
              {copied === 'dataurl' ? (
                <Check className="mr-2 h-4 w-4 text-green-600" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copy Data URL
            </Button>
            <Button
              variant="outline"
              onClick={() => copyUrl('html')}
            >
              {copied === 'html' ? (
                <Check className="mr-2 h-4 w-4 text-green-600" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copy HTML
            </Button>
            <Button
              variant="outline"
              onClick={() => copyUrl('markdown')}
            >
              {copied === 'markdown' ? (
                <Check className="mr-2 h-4 w-4 text-green-600" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copy Markdown
            </Button>
          </CardContent>
        </Card>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Image to Base64',
                href: '/tools/image-to-base64',
                desc: 'Convert images',
              },
              {
                title: 'Color Palette Generator',
                href: '/tools/color-palette-generator',
                desc: 'Create palettes',
              },
              {
                title: 'Lorem Ipsum Generator',
                href: '/tools/lorem-ipsum-generator',
                desc: 'Generate text',
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
