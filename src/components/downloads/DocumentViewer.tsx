'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import {
  Eye,
  Download,
  Copy,
  X,
  Maximize2,
  Minimize2,
  Check,
  FileText,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface DocumentViewerProps {
  content: string;
  title: string;
  onDownloadPdf?: () => void;
  onCopy?: () => void;
  format?: string;
}

export function DocumentViewer({
  content,
  title,
  onDownloadPdf,
  onCopy,
  format = 'PDF',
}: DocumentViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLocal = () => {
    if (onCopy) {
      onCopy();
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="secondary"
          className="gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 dark:bg-blue-950/50 dark:text-blue-200 dark:hover:bg-blue-900/50"
        >
          <Eye className="h-5 w-5" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn(
          'flex flex-col gap-0 p-0 transition-all duration-300',
          isFullscreen
            ? 'h-[100dvh] w-[100vw] max-w-none rounded-none border-0'
            : 'h-[85vh] w-[95vw] max-w-5xl rounded-xl',
        )}
      >
        {/* Toolbar Header */}
        <div className="flex flex-shrink-0 items-center justify-between border-b bg-muted/30 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="overflow-hidden">
              <DialogTitle className="truncate text-base font-semibold leading-tight sm:text-lg">
                {title}
              </DialogTitle>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-[10px] font-normal"
                >
                  Read Only
                </Badge>
                {format && (
                  <span className="text-xs text-muted-foreground">
                    {format}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {onCopy && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopyLocal}
                className="h-9 w-9 text-muted-foreground hover:text-foreground"
                title="Copy Content"
              >
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            )}

            {onDownloadPdf && (
              <Button
                size="sm"
                onClick={onDownloadPdf}
                className="hidden gap-2 sm:flex"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            )}

            <div className="mx-1 h-6 w-px bg-border" />

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>

            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
        </div>

        {/* Content Body */}
        {/* Content Body - Paper View Implementation */}
        <div className="flex-1 overflow-y-auto bg-zinc-100/50 dark:bg-zinc-950/50">
          <div className="flex justify-center p-4 sm:p-8">
            <div className="min-h-[800px] w-full max-w-[800px] bg-white px-8 py-10 text-slate-900 shadow-xl ring-1 ring-slate-900/5 sm:rounded-sm sm:px-12 sm:py-14">
              <div className="prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-h1:text-2xl prose-h1:border-b-2 prose-h1:border-slate-200 prose-h1:pb-2 prose-h1:mb-6 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3 prose-h2:border-b prose-h2:border-slate-100 prose-h3:text-base prose-h3:mt-4 prose-p:text-sm prose-p:leading-6 prose-p:text-slate-700 prose-li:text-sm prose-li:text-slate-700 prose-strong:text-slate-900 prose-code:text-xs prose-code:bg-slate-100 prose-code:text-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200 prose-pre:p-3 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-slate-700 prose-blockquote:italic max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({ ...props }) => (
                      <div className="my-6 w-full overflow-hidden rounded border border-slate-200">
                        <table
                          className="w-full text-left text-sm"
                          {...props}
                        />
                      </div>
                    ),
                    thead: ({ ...props }) => (
                      <thead
                        className="bg-slate-50 font-semibold text-slate-900"
                        {...props}
                      />
                    ),
                    th: ({ ...props }) => (
                      <th
                        className="border-b border-slate-200 px-4 py-2"
                        {...props}
                      />
                    ),
                    td: ({ ...props }) => (
                      <td
                        className="border-b border-slate-100 px-4 py-2 text-slate-600"
                        {...props}
                      />
                    ),
                    tr: ({ ...props }) => (
                      <tr
                        className="transition-colors hover:bg-slate-50"
                        {...props}
                      />
                    ),
                    ul: ({ ...props }) => (
                      <ul
                        className="my-4 list-disc space-y-1 pl-5"
                        {...props}
                      />
                    ),
                    ol: ({ ...props }) => (
                      <ol
                        className="my-4 list-decimal space-y-1 pl-5"
                        {...props}
                      />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>

                {/* Document Footer Marker */}
                <div className="mt-16 flex items-center justify-between border-t border-slate-100 pt-8 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  <span>Sproutern Resources</span>
                  <span>
                    {format} • {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Download Footer */}
        <div className="flex border-t bg-muted/10 p-4 sm:hidden">
          {onDownloadPdf && (
            <Button
              size="lg"
              onClick={onDownloadPdf}
              className="w-full gap-2"
            >
              <Download className="h-4 w-4" />
              Download Original PDF
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
