'use client';

import { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Palette,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  RefreshCw,
  Lock,
  Unlock,
} from 'lucide-react';
import Link from 'next/link';

interface Color {
  hex: string;
  locked: boolean;
}

export default function ColorPaletteGeneratorClient() {
  const [colors, setColors] = useState<Color[]>([
    { hex: '#FF6B6B', locked: false },
    { hex: '#4ECDC4', locked: false },
    { hex: '#45B7D1', locked: false },
    { hex: '#96CEB4', locked: false },
    { hex: '#FFEAA7', locked: false },
  ]);
  const [copied, setCopied] = useState<string | null>(null);
  const [harmonyType, setHarmonyType] = useState<
    'random' | 'complementary' | 'analogous' | 'triadic' | 'monochromatic'
  >('random');

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    h = h % 360;
    s = s / 100;
    l = l / 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
      g = 0,
      b = 0;
    if (h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }

    const toHex = (n: number) =>
      Math.round((n + m) * 255)
        .toString(16)
        .padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  const generatePalette = useCallback(() => {
    const baseColor = generateRandomColor();
    const baseHSL = hexToHSL(baseColor);

    let newColors: string[] = [];

    switch (harmonyType) {
      case 'complementary':
        newColors = [
          baseColor,
          hslToHex(baseHSL.h + 180, baseHSL.s, baseHSL.l),
          hslToHex(baseHSL.h, baseHSL.s - 20, baseHSL.l + 20),
          hslToHex(baseHSL.h + 180, baseHSL.s - 20, baseHSL.l + 20),
          hslToHex(baseHSL.h, baseHSL.s, baseHSL.l - 20),
        ];
        break;
      case 'analogous':
        newColors = [
          hslToHex(baseHSL.h - 30, baseHSL.s, baseHSL.l),
          hslToHex(baseHSL.h - 15, baseHSL.s, baseHSL.l),
          baseColor,
          hslToHex(baseHSL.h + 15, baseHSL.s, baseHSL.l),
          hslToHex(baseHSL.h + 30, baseHSL.s, baseHSL.l),
        ];
        break;
      case 'triadic':
        newColors = [
          baseColor,
          hslToHex(baseHSL.h + 120, baseHSL.s, baseHSL.l),
          hslToHex(baseHSL.h + 240, baseHSL.s, baseHSL.l),
          hslToHex(baseHSL.h, baseHSL.s - 30, baseHSL.l + 20),
          hslToHex(baseHSL.h + 120, baseHSL.s - 30, baseHSL.l + 20),
        ];
        break;
      case 'monochromatic':
        newColors = [
          hslToHex(baseHSL.h, baseHSL.s, 20),
          hslToHex(baseHSL.h, baseHSL.s, 35),
          hslToHex(baseHSL.h, baseHSL.s, 50),
          hslToHex(baseHSL.h, baseHSL.s, 65),
          hslToHex(baseHSL.h, baseHSL.s, 80),
        ];
        break;
      default:
        newColors = Array(5)
          .fill(null)
          .map(() => generateRandomColor());
    }

    setColors(
      colors.map((c, i) =>
        c.locked ? c : { hex: newColors[i], locked: false },
      ),
    );
  }, [colors, harmonyType]);

  const toggleLock = (index: number) => {
    setColors(
      colors.map((c, i) => (i === index ? { ...c, locked: !c.locked } : c)),
    );
  };

  const copyColor = async (hex: string) => {
    await navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1500);
  };

  const exportCSS = async () => {
    const css = `:root {\n${colors.map((c, i) => `  --color-${i + 1}: ${c.hex};`).join('\n')}\n}`;
    await navigator.clipboard.writeText(css);
    setCopied('css');
    setTimeout(() => setCopied(null), 1500);
  };

  const getContrastColor = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Palette className="h-4 w-4" />
            Free Design Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Color Palette Generator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Generate beautiful color palettes for your designs. Create
            harmonious color schemes instantly.
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
            <span className="text-sm font-medium">Instant Generate</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Color Theory</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Export CSS</span>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardContent className="flex flex-wrap items-center justify-center gap-4 py-4">
            <select
              value={harmonyType}
              onChange={(e) =>
                setHarmonyType(e.target.value as typeof harmonyType)
              }
              className="rounded-lg border bg-background px-4 py-2"
            >
              <option value="random">Random</option>
              <option value="complementary">Complementary</option>
              <option value="analogous">Analogous</option>
              <option value="triadic">Triadic</option>
              <option value="monochromatic">Monochromatic</option>
            </select>
            <Button
              onClick={generatePalette}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Generate Palette
            </Button>
            <Button
              variant="outline"
              onClick={exportCSS}
            >
              {copied === 'css' ? (
                <Check className="mr-2 h-4 w-4 text-green-600" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Export CSS
            </Button>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <div className="mb-8 grid grid-cols-5 gap-2 overflow-hidden rounded-xl md:h-64">
          {colors.map((color, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-end p-4 transition-all hover:scale-105"
              style={{ backgroundColor: color.hex }}
            >
              <button
                onClick={() => toggleLock(i)}
                className="absolute right-2 top-2 rounded-full bg-white/20 p-2 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: getContrastColor(color.hex) }}
              >
                {color.locked ? (
                  <Lock className="h-4 w-4" />
                ) : (
                  <Unlock className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => copyColor(color.hex)}
                className="rounded-lg px-3 py-1 font-mono text-sm font-bold transition-all hover:scale-110"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: getContrastColor(color.hex),
                }}
              >
                {copied === color.hex ? (
                  <Check className="inline h-4 w-4" />
                ) : (
                  color.hex
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Color Details */}
        <div className="grid gap-3 md:grid-cols-5">
          {colors.map((color, i) => {
            const hsl = hexToHSL(color.hex);
            return (
              <Card
                key={i}
                className="text-center"
              >
                <CardContent className="py-3">
                  <div
                    className="mx-auto mb-2 h-8 w-8 rounded-full border-2"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="font-mono text-xs">{color.hex}</div>
                  <div className="text-xs text-muted-foreground">
                    HSL: {Math.round(hsl.h)}°, {Math.round(hsl.s)}%,{' '}
                    {Math.round(hsl.l)}%
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Guide */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Color Harmony Types</h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Complementary',
                desc: 'Colors opposite on the color wheel. High contrast and vibrant.',
              },
              {
                title: 'Analogous',
                desc: 'Colors next to each other. Harmonious and pleasing to the eye.',
              },
              {
                title: 'Triadic',
                desc: 'Three colors evenly spaced. Balanced while maintaining contrast.',
              },
              {
                title: 'Monochromatic',
                desc: 'Variations of one hue. Sophisticated and cohesive.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'CSS Gradient Generator',
                href: '/tools/css-gradient-generator',
                desc: 'Create gradients',
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
