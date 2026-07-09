'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface ReactionButtonsProps {
  slug: string;
}

export function ReactionButtons({ slug }: ReactionButtonsProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleReaction = (type: string) => {
    if (selected === type) return; // Already selected

    setSelected(type);

    // Simulate analytics event (replace with actual tracking)
    console.log(`Reaction '${type}' for post: ${slug}`);

    // Show feedback
    toast({
      title: 'Thanks for your feedback!',
      description: 'We use this to improve our content.',
    });

    // In a real app, you would POST to an API here
    // fetch('/api/reactions', { method: 'POST', body: JSON.stringify({ slug, type }) });
  };

  return (
    <div className="my-8 rounded-lg border bg-muted/30 p-6 text-center">
      <h3 className="mb-4 text-lg font-semibold">Was this guide helpful?</h3>
      <div className="flex justify-center gap-4">
        <ReactionButton
          icon={<ThumbsUp className="h-5 w-5" />}
          label="Helpful"
          active={selected === 'helpful'}
          onClick={() => handleReaction('helpful')}
        />
        <ReactionButton
          icon={<Trophy className="h-5 w-5" />}
          label="Top Tier"
          active={selected === 'top-tier'}
          onClick={() => handleReaction('top-tier')}
        />
        <ReactionButton
          icon={<Heart className="h-5 w-5" />}
          label="Loved it"
          active={selected === 'love'}
          onClick={() => handleReaction('love')}
        />
        <ReactionButton
          icon={<ThumbsDown className="h-5 w-5" />}
          label="Not really"
          active={selected === 'not-helpful'}
          onClick={() => handleReaction('not-helpful')}
        />
      </div>
    </div>
  );
}

function ReactionButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={cn(
        'flex h-auto flex-col items-center gap-1 px-4 py-3 transition-all',
        active
          ? 'border-primary bg-primary/10 text-primary hover:bg-primary/20'
          : 'hover:border-primary/50',
      )}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}
