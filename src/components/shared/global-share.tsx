'use client';

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ShareButtons } from '@/components/social/ShareButtons';
import { useState } from 'react';

export function GlobalShare() {
  const [open, setOpen] = useState(false);

  const handleShare = async () => {
    // Try native share first on mobile
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        return;
      } catch (err) {
        console.log('Native share cancelled or failed', err);
      }
    }
    // Fallback to dialog
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground hover:text-foreground"
        aria-label="Share this page"
        onClick={handleShare}
      >
        <Share2 className="h-5 w-5" />
      </Button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share this page</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <ShareButtons className="flex-wrap justify-center gap-4" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
