'use client';

import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Image,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  Upload,
  FileImage,
  Download,
} from 'lucide-react';
import Link from 'next/link';

export default function ImageToBase64Client() {
  const [base64, setBase64] = useState('');
  const [dataUrl, setDataUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [imagePreview, setImagePreview] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<'base64' | 'dataurl'>(
    'dataurl',
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    setFileName(file.name);
    setFileSize(file.size);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setDataUrl(result);
      setBase64(result.split(',')[1]);
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      if (fileInputRef.current) {
        fileInputRef.current.files = dataTransfer.files;
        handleFileSelect({
          target: { files: dataTransfer.files },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadAsText = () => {
    const content = outputFormat === 'dataurl' ? dataUrl : base64;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName || 'image'}_${outputFormat}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const clearImage = () => {
    setBase64('');
    setDataUrl('');
    setFileName('');
    setFileSize(0);
    setImagePreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Image className="h-4 w-4" />
            Free Developer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Image to Base64
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Convert images to Base64 encoding instantly. Perfect for embedding
            images in HTML, CSS, or JSON.
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
            <span className="text-sm font-medium">Instant Convert</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">All Formats</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Client-Side Only</span>
          </div>
        </div>

        {/* Upload Area */}
        <Card className="mb-6">
          <CardContent className="py-6">
            <div
              className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:border-primary/50"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
            >
              {imagePreview ? (
                <div className="text-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto mb-4 max-h-32 rounded-lg"
                  />
                  <p className="font-medium">{fileName}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(fileSize)}
                  </p>
                </div>
              ) : (
                <>
                  <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="mb-2 font-medium">
                    Drop image here or click to upload
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports PNG, JPG, GIF, WebP, SVG
                  </p>
                </>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            {imagePreview && (
              <div className="mt-4 flex justify-center">
                <Button
                  variant="outline"
                  onClick={clearImage}
                >
                  Clear Image
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Output */}
        {base64 && (
          <>
            {/* Format Toggle */}
            <Card className="mb-6">
              <CardContent className="flex flex-wrap items-center justify-between gap-4 py-4">
                <div className="flex gap-2">
                  <Button
                    variant={outputFormat === 'dataurl' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setOutputFormat('dataurl')}
                  >
                    Data URL
                  </Button>
                  <Button
                    variant={outputFormat === 'base64' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setOutputFormat('base64')}
                  >
                    Base64 Only
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(
                        outputFormat === 'dataurl' ? dataUrl : base64,
                        'output',
                      )
                    }
                  >
                    {copied === 'output' ? (
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="mr-2 h-4 w-4" />
                    )}
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadAsText}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Output Text */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileImage className="h-5 w-5" />
                  {outputFormat === 'dataurl' ? 'Data URL' : 'Base64 String'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={outputFormat === 'dataurl' ? dataUrl : base64}
                  readOnly
                  className="h-40 w-full rounded-lg border bg-muted/50 p-4 font-mono text-xs outline-none"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  Output size:{' '}
                  {formatFileSize(
                    (outputFormat === 'dataurl' ? dataUrl : base64).length,
                  )}{' '}
                  (text)
                </p>
              </CardContent>
            </Card>

            {/* HTML Example */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">HTML Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-xs">
                  {`<img src="${dataUrl.substring(0, 50)}..." alt="Embedded image" />`}
                </pre>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() =>
                    copyToClipboard(
                      `<img src="${dataUrl}" alt="Embedded image" />`,
                      'html',
                    )
                  }
                >
                  {copied === 'html' ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
                  Copy HTML
                </Button>
              </CardContent>
            </Card>

            {/* CSS Example */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">CSS Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="overflow-auto rounded-lg bg-muted p-4 font-mono text-xs">
                  {`background-image: url('${dataUrl.substring(0, 50)}...');`}
                </pre>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() =>
                    copyToClipboard(
                      `background-image: url('${dataUrl}');`,
                      'css',
                    )
                  }
                >
                  {copied === 'css' ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
                  Copy CSS
                </Button>
              </CardContent>
            </Card>
          </>
        )}

        {/* Info */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>About Base64 Encoding</h2>
          <p>
            Base64 encoding converts binary data into ASCII text, allowing
            images to be embedded directly in HTML, CSS, or JSON without
            separate file requests. This can improve performance for small
            images but increases file size by ~33%.
          </p>

          <h3>When to Use</h3>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Small Icons',
                desc: 'Embed tiny icons to reduce HTTP requests',
              },
              {
                title: 'Email Templates',
                desc: 'Inline images that work across clients',
              },
              {
                title: 'Single-file HTML',
                desc: 'Create self-contained HTML files',
              },
              { title: 'Data URIs', desc: 'Use in CSS background images' },
            ].map((use) => (
              <Card key={use.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{use.title}</h3>
                  <p className="text-sm text-muted-foreground">{use.desc}</p>
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
                title: 'Image Placeholder',
                href: '/tools/image-placeholder',
                desc: 'Generate placeholder images',
              },
              {
                title: 'QR Code Generator',
                href: '/tools/qr-code-generator',
                desc: 'Create QR codes',
              },
              {
                title: 'Color Palette Generator',
                href: '/tools/color-palette-generator',
                desc: 'Create color schemes',
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
