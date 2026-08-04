import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Keyboard Shortcuts | Productivity Shortcuts',
  description:
    'Essential keyboard shortcuts for Windows, Mac, VS Code, Chrome, and popular applications to boost your productivity.',
  keywords:
    'keyboard shortcuts, windows shortcuts, mac shortcuts, vs code shortcuts, productivity tips',
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/keyboard-shortcuts',
  },
};

const shortcuts = [
  {
    app: 'Windows',
    shortcuts: [
      { keys: 'Ctrl + C', action: 'Copy' },
      { keys: 'Ctrl + V', action: 'Paste' },
      { keys: 'Ctrl + Z', action: 'Undo' },
      { keys: 'Alt + Tab', action: 'Switch windows' },
      { keys: 'Win + D', action: 'Show desktop' },
    ],
  },
  {
    app: 'VS Code',
    shortcuts: [
      { keys: 'Ctrl + P', action: 'Quick file open' },
      { keys: 'Ctrl + Shift + P', action: 'Command palette' },
      { keys: 'Ctrl + /', action: 'Toggle comment' },
      { keys: 'Alt + Up/Down', action: 'Move line' },
    ],
  },
  {
    app: 'Chrome',
    shortcuts: [
      { keys: 'Ctrl + T', action: 'New tab' },
      { keys: 'Ctrl + W', action: 'Close tab' },
      { keys: 'Ctrl + Shift + T', action: 'Reopen tab' },
      { keys: 'Ctrl + L', action: 'Focus address bar' },
    ],
  },
];

export default function KeyboardShortcutsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <Keyboard className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="mb-2 text-3xl font-bold">Keyboard Shortcuts</h1>
          <p className="text-muted-foreground">
            Essential shortcuts to boost productivity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {shortcuts.map((cat) => (
            <Card key={cat.app}>
              <CardHeader>
                <CardTitle>{cat.app}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cat.shortcuts.map((s) => (
                    <div
                      key={s.keys}
                      className="flex items-center justify-between"
                    >
                      <Badge
                        variant="outline"
                        className="font-mono"
                      >
                        {s.keys}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {s.action}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
