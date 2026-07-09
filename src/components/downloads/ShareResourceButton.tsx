'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareResourceButtonProps {
  title: string;
  description: string;
}

export function ShareResourceButton({
  title,
  description,
}: ShareResourceButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title,
      text: description,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or failed
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url);
        toast({
          title: 'Link copied!',
          description: 'Resource link copied to clipboard.',
        });
      } catch (err) {
        toast({
          title: 'Failed to copy',
          description: 'Could not copy link to clipboard.',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="gap-2"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4" />
      Share Resource
    </Button>
  );
}
