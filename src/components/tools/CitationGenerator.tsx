'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Copy, BookOpen, FileText, Globe, Users } from 'lucide-react';

interface Source {
  type: 'book' | 'journal' | 'website' | 'interview';
  authors: string;
  title: string;
  year: string;
  publisher?: string;
  journal?: string;
  url?: string;
  accessDate?: string;
  pages?: string;
  volume?: string;
  issue?: string;
}

export default function CitationGenerator() {
  const [source, setSource] = useState<Source>({
    type: 'book',
    authors: '',
    title: '',
    year: '',
    publisher: '',
    journal: '',
    url: '',
    accessDate: '',
    pages: '',
    volume: '',
    issue: '',
  });

  const [citations, setCitations] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<'APA' | 'MLA' | 'Chicago'>(
    'APA',
  );

  const generateCitation = () => {
    let citation = '';

    switch (selectedStyle) {
      case 'APA':
        citation = generateAPA();
        break;
      case 'MLA':
        citation = generateMLA();
        break;
      case 'Chicago':
        citation = generateChicago();
        break;
    }

    if (citation) {
      setCitations((prev) => [...prev, citation]);
    }
  };

  const generateAPA = (): string => {
    const {
      type,
      authors,
      title,
      year,
      publisher,
      journal,
      url,
      pages,
      volume,
      issue,
    } = source;

    if (!authors || !title || !year) return '';

    const authorList = authors
      .split(',')
      .map((author) => author.trim())
      .join(', ');
    const citationYear = year ? `(${year}).` : '';

    switch (type) {
      case 'book':
        return `${authorList} ${citationYear} *${title}*. ${publisher || ''}.`;
      case 'journal':
        return `${authorList} ${citationYear} ${title}. *${journal}*, ${volume || ''}${issue ? `(${issue})` : ''}, ${pages || ''}.`;
      case 'website':
        return `${authorList} ${citationYear} *${title}*. Retrieved from ${url || ''}`;
      case 'interview':
        return `${authorList} (Personal interview, ${year}).`;
      default:
        return '';
    }
  };

  const generateMLA = (): string => {
    const {
      type,
      authors,
      title,
      year,
      publisher,
      journal,
      url,
      pages,
      volume,
      issue,
    } = source;

    if (!authors || !title) return '';

    const authorList = authors
      .split(',')
      .map((author) => author.trim())
      .join('. ');
    const citationYear = year ? `${year}.` : '';

    switch (type) {
      case 'book':
        return `${authorList}. *${title}*. ${publisher || ''}, ${year}.`;
      case 'journal':
        return `${authorList}. "${title}." *${journal}*, vol. ${volume || ''}, no. ${issue || ''}, ${year}, pp. ${pages || ''}.`;
      case 'website':
        return `${authorList}. "${title}." *${publisher || 'Website'}*, ${year}, ${url || ''}. Accessed ${source.accessDate || ''}.`;
      case 'interview':
        return `${authorList}. Personal interview. ${year}.`;
      default:
        return '';
    }
  };

  const generateChicago = (): string => {
    const {
      type,
      authors,
      title,
      year,
      publisher,
      journal,
      url,
      pages,
      volume,
      issue,
    } = source;

    if (!authors || !title) return '';

    const authorList = authors
      .split(',')
      .map((author) => author.trim())
      .join(', ');

    switch (type) {
      case 'book':
        return `${authorList}. *${title}*. ${publisher || ''}, ${year}.`;
      case 'journal':
        return `${authorList}. "${title}." *${journal}* ${volume || ''}, no. ${issue || ''} (${year}): ${pages || ''}.`;
      case 'website':
        return `${authorList}. "${title}." Last modified ${year}. ${url || ''}.`;
      case 'interview':
        return `${authorList}, interview by ${authorList}, ${year}.`;
      default:
        return '';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const clearAll = () => {
    setCitations([]);
    setSource({
      type: 'book',
      authors: '',
      title: '',
      year: '',
      publisher: '',
      journal: '',
      url: '',
      accessDate: '',
      pages: '',
      volume: '',
      issue: '',
    });
  };

  const sourceTypes = [
    { value: 'book', label: 'Book', icon: BookOpen },
    { value: 'journal', label: 'Journal Article', icon: FileText },
    { value: 'website', label: 'Website', icon: Globe },
    { value: 'interview', label: 'Interview', icon: Users },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold">Citation Generator</h2>
        <p className="text-muted-foreground">
          Generate citations in APA, MLA, or Chicago format
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Source Information</CardTitle>
            <CardDescription>Enter the details of your source</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="source-type">Source Type</Label>
              <Select
                value={source.type}
                onValueChange={(value: any) =>
                  setSource((prev) => ({ ...prev, type: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sourceTypes.map(({ value, label, icon: Icon }) => (
                    <SelectItem
                      key={value}
                      value={value}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="authors">Author(s)</Label>
                <Input
                  id="authors"
                  placeholder="Smith, John, Doe, Jane"
                  value={source.authors}
                  onChange={(e) =>
                    setSource((prev) => ({ ...prev, authors: e.target.value }))
                  }
                />
              </div>
              <div>
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  placeholder="2024"
                  value={source.year}
                  onChange={(e) =>
                    setSource((prev) => ({ ...prev, year: e.target.value }))
                  }
                />
              </div>
            </div>

            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter the title"
                value={source.title}
                onChange={(e) =>
                  setSource((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>

            {source.type === 'book' && (
              <div>
                <Label htmlFor="publisher">Publisher</Label>
                <Input
                  id="publisher"
                  placeholder="Oxford University Press"
                  value={source.publisher}
                  onChange={(e) =>
                    setSource((prev) => ({
                      ...prev,
                      publisher: e.target.value,
                    }))
                  }
                />
              </div>
            )}

            {source.type === 'journal' && (
              <>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="journal">Journal</Label>
                    <Input
                      id="journal"
                      placeholder="Nature"
                      value={source.journal}
                      onChange={(e) =>
                        setSource((prev) => ({
                          ...prev,
                          journal: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="volume">Volume</Label>
                    <Input
                      id="volume"
                      placeholder="12"
                      value={source.volume}
                      onChange={(e) =>
                        setSource((prev) => ({
                          ...prev,
                          volume: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="issue">Issue</Label>
                    <Input
                      id="issue"
                      placeholder="3"
                      value={source.issue}
                      onChange={(e) =>
                        setSource((prev) => ({
                          ...prev,
                          issue: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="pages">Pages</Label>
                  <Input
                    id="pages"
                    placeholder="123-145"
                    value={source.pages}
                    onChange={(e) =>
                      setSource((prev) => ({ ...prev, pages: e.target.value }))
                    }
                  />
                </div>
              </>
            )}

            {source.type === 'website' && (
              <>
                <div>
                  <Label htmlFor="url">URL</Label>
                  <Input
                    id="url"
                    placeholder="https://example.com"
                    value={source.url}
                    onChange={(e) =>
                      setSource((prev) => ({ ...prev, url: e.target.value }))
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="access-date">Access Date</Label>
                  <Input
                    id="access-date"
                    placeholder="January 15, 2024"
                    value={source.accessDate}
                    onChange={(e) =>
                      setSource((prev) => ({
                        ...prev,
                        accessDate: e.target.value,
                      }))
                    }
                  />
                </div>
              </>
            )}

            <div className="flex gap-2">
              <Button
                onClick={generateCitation}
                className="flex-1"
              >
                Generate Citation
              </Button>
              <Button
                variant="outline"
                onClick={clearAll}
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Citation Style</CardTitle>
            <CardDescription>Choose your citation format</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={selectedStyle}
              onValueChange={(value: any) => setSelectedStyle(value)}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="APA">APA</TabsTrigger>
                <TabsTrigger value="MLA">MLA</TabsTrigger>
                <TabsTrigger value="Chicago">Chicago</TabsTrigger>
              </TabsList>

              <TabsContent
                value="APA"
                className="mt-4"
              >
                <div className="space-y-2">
                  <Badge variant="outline">APA 7th Edition</Badge>
                  <p className="text-sm text-muted-foreground">
                    Used in social sciences, education, and psychology
                  </p>
                </div>
              </TabsContent>

              <TabsContent
                value="MLA"
                className="mt-4"
              >
                <div className="space-y-2">
                  <Badge variant="outline">MLA 9th Edition</Badge>
                  <p className="text-sm text-muted-foreground">
                    Used in humanities, literature, and arts
                  </p>
                </div>
              </TabsContent>

              <TabsContent
                value="Chicago"
                className="mt-4"
              >
                <div className="space-y-2">
                  <Badge variant="outline">Chicago 17th Edition</Badge>
                  <p className="text-sm text-muted-foreground">
                    Used in history, business, and fine arts
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {citations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Citations</CardTitle>
            <CardDescription>Click to copy any citation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {citations.map((citation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-muted p-3"
                >
                  <span className="mt-1 text-sm font-medium text-muted-foreground">
                    {index + 1}.
                  </span>
                  <p className="flex-1 text-sm">{citation}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(citation)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <Button
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(citations.join('\n\n'))
                }
              >
                Copy All Citations
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
