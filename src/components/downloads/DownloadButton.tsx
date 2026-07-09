'use client';

import { Button } from '@/components/ui/button';
import { Download, Copy, FileText, Check, Loader2 } from 'lucide-react';
import { marked } from 'marked';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DocumentViewer } from './DocumentViewer';

interface DownloadButtonProps {
  content: string;
  filename: string;
  format: string;
}

export function DownloadButton({
  content,
  filename,
  format,
}: DownloadButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  // PDF Generation Logic
  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const htmlContent = await marked.parse(content);
      const container = document.createElement('div');

      // PDF Styles and Structure
      const pdfStyles = `
                h1 { color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 20px; }
                h2 { color: #1f2937; margin-top: 30px; margin-bottom: 15px; }
                ul, ol { padding-left: 20px; margin-bottom: 15px; }
                li { margin-bottom: 5px; }
                p { margin-bottom: 15px; }
                code { background: #f3f4f6; padding: 2px 5px; border-radius: 4px; font-family: monospace; }
                pre { background: #f3f4f6; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
                table { border-collapse: collapse; width: 100%; margin: 20px 0; }
                th, td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; }
                th { background-color: #f9fafb; }
            `;

      container.innerHTML = `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 40px; color: #333; width: 794px; background: white;">
                    <style>${pdfStyles}</style>
                    ${htmlContent}
                    <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #999;">
                        Downloaded from Sproutern - The Career Growth Platform
                    </div>
                </div>
            `;

      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      document.body.appendChild(container);

      const canvas = await html2canvas(
        container.firstElementChild as HTMLElement,
        {
          scale: 2,
          useCORS: true,
          logging: false,
        },
      );

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(filename);
      document.body.removeChild(container);

      toast({
        title: 'Download Started',
        description: 'Your PDF is being generated and downloaded.',
      });
    } catch (error) {
      toast({
        title: 'Download Failed',
        description:
          'Could not generate PDF directly via canvas. Try text download.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast({
        title: 'Copied to clipboard!',
        description: 'The template content is ready to paste.',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: 'Failed to copy text',
        description: 'Please try manually copying.',
        variant: 'destructive',
      });
    }
  };

  const handleDownloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(file);
    element.href = url;
    // Ensure .txt extension
    const txtFilename = filename.replace(/\.(pdf|docx)/, '') + '.txt';
    element.download = txtFilename;
    document.body.appendChild(element);
    element.click();

    // Cleanup in finally block logic (synchronous here but good practice to structure cleanly)
    setTimeout(() => {
      document.body.removeChild(element);
      URL.revokeObjectURL(url);
    }, 0);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        size="lg"
        className="gap-2"
        onClick={handleDownloadPDF}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Download className="h-5 w-5" />
        )}
        {isGenerating ? 'Generating...' : `Download Guide (PDF)`}
      </Button>

      <DocumentViewer
        content={content}
        title={filename.replace(/\.(pdf|docx|-)/g, ' ')}
        format={format}
        onCopy={handleCopy}
        onDownloadPdf={handleDownloadPDF}
      />

      <Button
        size="lg"
        variant="secondary"
        className="gap-2"
        onClick={handleDownloadText}
      >
        <FileText className="h-5 w-5" />
        Download Text
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="gap-2"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-5 w-5 text-green-600" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
        {copied ? 'Copied' : 'Copy Text'}
      </Button>
    </div>
  );
}
