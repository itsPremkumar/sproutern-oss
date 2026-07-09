'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Paintbrush,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  Plus,
  Trash2,
  RotateCw,
} from 'lucide-react';
import Link from 'next/link';

interface ColorStop {
  color: string;
  position: number;
}

export default function CSSGradientGeneratorClient() {
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>(
    'linear',
  );
  const [angle, setAngle] = useState(90);
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { color: '#667eea', position: 0 },
    { color: '#764ba2', position: 100 },
  ]);
  const [copied, setCopied] = useState(false);

  const generateCSS = () => {
    const stops = colorStops
      .sort((a, b) => a.position - b.position)
      .map((s) => `${s.color} ${s.position}%`)
      .join(', ');

    if (gradientType === 'linear') {
      return `linear-gradient(${angle}deg, ${stops})`;
    }
    return `radial-gradient(circle, ${stops})`;
  };

  const copyCSS = async () => {
    const css = `background: ${generateCSS()};`;
    await navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addColorStop = () => {
    if (colorStops.length < 8) {
      const lastPos = colorStops[colorStops.length - 1]?.position || 0;
      setColorStops([
        ...colorStops,
        { color: '#ffffff', position: Math.min(lastPos + 20, 100) },
      ]);
    }
  };

  const removeColorStop = (index: number) => {
    if (colorStops.length > 2) {
      setColorStops(colorStops.filter((_, i) => i !== index));
    }
  };

  const updateColorStop = (
    index: number,
    field: 'color' | 'position',
    value: string | number,
  ) => {
    setColorStops(
      colorStops.map((stop, i) =>
        i === index ? { ...stop, [field]: value } : stop,
      ),
    );
  };

  const randomGradient = () => {
    const randomColor = () =>
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    setColorStops([
      { color: randomColor(), position: 0 },
      { color: randomColor(), position: 100 },
    ]);
    setAngle(Math.floor(Math.random() * 360));
  };

  const presets = [
    {
      name: 'Sunset',
      colors: [
        { color: '#ff7e5f', position: 0 },
        { color: '#feb47b', position: 100 },
      ],
    },
    {
      name: 'Ocean',
      colors: [
        { color: '#2193b0', position: 0 },
        { color: '#6dd5ed', position: 100 },
      ],
    },
    {
      name: 'Purple',
      colors: [
        { color: '#667eea', position: 0 },
        { color: '#764ba2', position: 100 },
      ],
    },
    {
      name: 'Forest',
      colors: [
        { color: '#134e5e', position: 0 },
        { color: '#71b280', position: 100 },
      ],
    },
    {
      name: 'Fire',
      colors: [
        { color: '#f12711', position: 0 },
        { color: '#f5af19', position: 100 },
      ],
    },
    {
      name: 'Aurora',
      colors: [
        { color: '#00c6ff', position: 0 },
        { color: '#0072ff', position: 50 },
        { color: '#7c3aed', position: 100 },
      ],
    },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Paintbrush className="h-4 w-4" />
            Free Design Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            CSS Gradient Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Create beautiful CSS gradients visually. Generate linear and radial
            gradients with ease.
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
            <span className="text-sm font-medium">Live Preview</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">8 Colors Max</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Copy CSS</span>
          </div>
        </div>

        {/* Preview */}
        <div
          className="mb-6 h-64 rounded-2xl shadow-lg transition-all"
          style={{ background: generateCSS() }}
        />

        {/* Controls */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gradient Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant={gradientType === 'linear' ? 'default' : 'outline'}
                  onClick={() => setGradientType('linear')}
                  className="flex-1"
                >
                  Linear
                </Button>
                <Button
                  variant={gradientType === 'radial' ? 'default' : 'outline'}
                  onClick={() => setGradientType('radial')}
                  className="flex-1"
                >
                  Radial
                </Button>
              </div>

              {gradientType === 'linear' && (
                <div>
                  <label className="mb-2 flex justify-between text-sm">
                    <span>Angle</span>
                    <span className="font-mono">{angle}°</span>
                  </label>
                  <input
                    type="range"
                    value={angle}
                    onChange={(e) => setAngle(parseInt(e.target.value))}
                    min="0"
                    max="360"
                    className="w-full"
                  />
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={randomGradient}
                  className="flex-1 gap-2"
                >
                  <RotateCw className="h-4 w-4" />
                  Random
                </Button>
                <Button
                  onClick={copyCSS}
                  className="flex-1 gap-2"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  Copy CSS
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Color Stops</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={addColorStop}
                disabled={colorStops.length >= 8}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {colorStops.map((stop, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                >
                  <input
                    type="color"
                    value={stop.color}
                    onChange={(e) =>
                      updateColorStop(i, 'color', e.target.value)
                    }
                    className="h-10 w-16 cursor-pointer rounded border"
                  />
                  <input
                    type="number"
                    value={stop.position}
                    onChange={(e) =>
                      updateColorStop(
                        i,
                        'position',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    min="0"
                    max="100"
                    className="w-20 rounded border bg-muted/50 p-2 text-center"
                  />
                  <span className="text-sm text-muted-foreground">%</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeColorStop(i)}
                    disabled={colorStops.length <= 2}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Presets */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Preset Gradients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
              {presets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setColorStops(preset.colors)}
                  className="group"
                >
                  <div
                    className="h-16 rounded-lg shadow transition-transform group-hover:scale-105"
                    style={{
                      background: `linear-gradient(90deg, ${preset.colors.map((c) => `${c.color} ${c.position}%`).join(', ')})`,
                    }}
                  />
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {preset.name}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CSS Output */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Generated CSS</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-sm">
              background: {generateCSS()};
            </pre>
          </CardContent>
        </Card>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Color Palette Generator',
                href: '/tools/color-palette-generator',
                desc: 'Create color palettes',
              },
              {
                title: 'Font Pairings',
                href: '/tools/font-pairings',
                desc: 'Find font combinations',
              },
              {
                title: 'Image Placeholder',
                href: '/tools/image-placeholder',
                desc: 'Generate placeholders',
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
