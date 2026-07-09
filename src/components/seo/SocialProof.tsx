import { TrendingUp } from 'lucide-react';

export function SocialProof({
  count = 127,
  action = 'used this tool',
}: {
  count?: number;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground">
      <TrendingUp className="h-4 w-4 text-green-600" />
      <span>
        <strong className="text-foreground">{count} students</strong> {action}{' '}
        in the last hour
      </span>
    </div>
  );
}
