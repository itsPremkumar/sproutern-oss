'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  BookOpen,
  Search,
} from 'lucide-react';
import Link from 'next/link';

interface ASCIIChar {
  dec: number;
  hex: string;
  oct: string;
  bin: string;
  char: string;
  description: string;
}

const generateASCIITable = (): ASCIIChar[] => {
  const descriptions: { [key: number]: string } = {
    0: 'NUL (Null)',
    1: 'SOH (Start of Header)',
    2: 'STX (Start of Text)',
    3: 'ETX (End of Text)',
    4: 'EOT (End of Transmission)',
    5: 'ENQ (Enquiry)',
    6: 'ACK (Acknowledge)',
    7: 'BEL (Bell)',
    8: 'BS (Backspace)',
    9: 'HT (Horizontal Tab)',
    10: 'LF (Line Feed)',
    11: 'VT (Vertical Tab)',
    12: 'FF (Form Feed)',
    13: 'CR (Carriage Return)',
    14: 'SO (Shift Out)',
    15: 'SI (Shift In)',
    16: 'DLE (Data Link Escape)',
    17: 'DC1 (Device Control 1)',
    18: 'DC2 (Device Control 2)',
    19: 'DC3 (Device Control 3)',
    20: 'DC4 (Device Control 4)',
    21: 'NAK (Negative Acknowledge)',
    22: 'SYN (Synchronous Idle)',
    23: 'ETB (End of Trans. Block)',
    24: 'CAN (Cancel)',
    25: 'EM (End of Medium)',
    26: 'SUB (Substitute)',
    27: 'ESC (Escape)',
    28: 'FS (File Separator)',
    29: 'GS (Group Separator)',
    30: 'RS (Record Separator)',
    31: 'US (Unit Separator)',
    32: 'Space',
    127: 'DEL (Delete)',
  };

  return Array.from({ length: 128 }, (_, i) => ({
    dec: i,
    hex: i.toString(16).toUpperCase().padStart(2, '0'),
    oct: i.toString(8).padStart(3, '0'),
    bin: i.toString(2).padStart(8, '0'),
    char: i >= 33 && i <= 126 ? String.fromCharCode(i) : '',
    description: descriptions[i] || String.fromCharCode(i),
  }));
};

const extendedASCII = Array.from({ length: 128 }, (_, i) => ({
  dec: i + 128,
  hex: (i + 128).toString(16).toUpperCase().padStart(2, '0'),
  char: String.fromCharCode(i + 128),
}));

export default function ASCIITableClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState<number | null>(null);
  const [showExtended, setShowExtended] = useState(false);
  const [selectedChar, setSelectedChar] = useState<ASCIIChar | null>(null);

  const asciiTable = useMemo(() => generateASCIITable(), []);

  const filteredTable = useMemo(() => {
    if (!searchQuery.trim()) return asciiTable;

    const query = searchQuery.toLowerCase();
    return asciiTable.filter(
      (item) =>
        item.dec.toString().includes(query) ||
        item.hex.toLowerCase().includes(query) ||
        item.char.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [asciiTable, searchQuery]);

  const copyChar = async (dec: number, char: string) => {
    await navigator.clipboard.writeText(char || dec.toString());
    setCopied(dec);
    setTimeout(() => setCopied(null), 1500);
  };

  const categories = [
    {
      name: 'Control Characters',
      range: [0, 31],
      color: 'bg-red-100 dark:bg-red-950',
    },
    { name: 'Numbers', range: [48, 57], color: 'bg-blue-100 dark:bg-blue-950' },
    {
      name: 'Uppercase Letters',
      range: [65, 90],
      color: 'bg-green-100 dark:bg-green-950',
    },
    {
      name: 'Lowercase Letters',
      range: [97, 122],
      color: 'bg-purple-100 dark:bg-purple-950',
    },
    {
      name: 'Symbols',
      range: [33, 47],
      color: 'bg-yellow-100 dark:bg-yellow-950',
    },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Table className="h-4 w-4" />
            Free Developer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">ASCII Table</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Complete ASCII character reference with decimal, hexadecimal, octal,
            and binary values.
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
            <span className="text-sm font-medium">128 Characters</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Quick Reference</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Copy to Clipboard</span>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardContent className="flex flex-wrap items-center gap-4 py-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by code, character, or description..."
                className="w-full rounded-lg border bg-muted/50 py-2 pl-10 pr-4 outline-none"
              />
            </div>
            <Button
              variant={showExtended ? 'default' : 'outline'}
              onClick={() => setShowExtended(!showExtended)}
            >
              Extended ASCII (128-255)
            </Button>
          </CardContent>
        </Card>

        {/* Selected Character Details */}
        {selectedChar && (
          <Card className="mb-6 border-primary">
            <CardContent className="py-4">
              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10 text-4xl font-bold">
                  {selectedChar.char || '?'}
                </div>
                <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-5">
                  <div>
                    <div className="text-sm text-muted-foreground">Decimal</div>
                    <div className="font-mono text-lg font-semibold">
                      {selectedChar.dec}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Hexadecimal
                    </div>
                    <div className="font-mono text-lg font-semibold">
                      0x{selectedChar.hex}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Octal</div>
                    <div className="font-mono text-lg font-semibold">
                      {selectedChar.oct}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Binary</div>
                    <div className="font-mono text-lg font-semibold">
                      {selectedChar.bin}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Description
                    </div>
                    <div className="font-semibold">
                      {selectedChar.description}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ASCII Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {showExtended
                ? 'Extended ASCII (128-255)'
                : 'Standard ASCII (0-127)'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!showExtended ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2 text-left">Dec</th>
                      <th className="border p-2 text-left">Hex</th>
                      <th className="border p-2 text-left">Oct</th>
                      <th className="border p-2 text-left">Bin</th>
                      <th className="border p-2 text-left">Char</th>
                      <th className="border p-2 text-left">Description</th>
                      <th className="border p-2 text-center">Copy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTable.map((item) => (
                      <tr
                        key={item.dec}
                        className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                          selectedChar?.dec === item.dec ? 'bg-primary/10' : ''
                        } ${
                          item.dec <= 31
                            ? 'text-red-600 dark:text-red-400'
                            : item.dec >= 48 && item.dec <= 57
                              ? 'text-blue-600 dark:text-blue-400'
                              : item.dec >= 65 && item.dec <= 90
                                ? 'text-green-600 dark:text-green-400'
                                : item.dec >= 97 && item.dec <= 122
                                  ? 'text-purple-600 dark:text-purple-400'
                                  : ''
                        }`}
                        onClick={() => setSelectedChar(item)}
                      >
                        <td className="border p-2 font-mono">{item.dec}</td>
                        <td className="border p-2 font-mono">0x{item.hex}</td>
                        <td className="border p-2 font-mono">{item.oct}</td>
                        <td className="border p-2 font-mono">{item.bin}</td>
                        <td className="border p-2 text-center text-lg font-bold">
                          {item.char}
                        </td>
                        <td className="border p-2">{item.description}</td>
                        <td className="border p-2 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyChar(item.dec, item.char);
                            }}
                          >
                            {copied === item.dec ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="md:grid-cols-16 grid grid-cols-8 gap-2">
                {extendedASCII.map((item) => (
                  <div
                    key={item.dec}
                    className="flex cursor-pointer flex-col items-center rounded-lg border p-2 text-center transition-colors hover:bg-muted"
                    onClick={() => copyChar(item.dec, item.char)}
                    title={`Dec: ${item.dec}, Hex: 0x${item.hex}`}
                  >
                    <span className="text-lg">{item.char}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.dec}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center gap-2"
            >
              <div className={`h-4 w-4 rounded ${cat.color}`} />
              <span className="text-sm">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            About ASCII
          </h2>
          <p>
            ASCII (American Standard Code for Information Interchange) is a
            character encoding standard that represents text in computers. It
            uses 7 bits to represent 128 characters including letters, numbers,
            punctuation, and control characters.
          </p>

          <h3>Character Categories</h3>
          <ul>
            <li>
              <strong>Control Characters (0-31, 127):</strong> Non-printable
              characters used for device control
            </li>
            <li>
              <strong>Printable Characters (32-126):</strong> Space, symbols,
              numbers, and letters
            </li>
            <li>
              <strong>Extended ASCII (128-255):</strong> Additional characters
              for various languages and symbols
            </li>
          </ul>

          <h3>Common Uses</h3>
          <ul>
            <li>Converting between character representations in code</li>
            <li>Understanding keyboard input and output</li>
            <li>Working with text files and encoding</li>
            <li>Debugging character-related issues</li>
          </ul>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Encryption Tool',
                href: '/tools/encryption-tool',
                desc: 'Encrypt and hash text',
              },
              {
                title: 'Number Converter',
                href: '/tools/number-converter',
                desc: 'Convert between number systems',
              },
              {
                title: 'Code Formatter',
                href: '/tools/code-formatter',
                desc: 'Format code',
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
