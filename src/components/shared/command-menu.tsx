'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  FileText,
  LayoutDashboard,
  Search,
  Laptop,
  BookOpen,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Code2,
  Bug,
  Swords,
  Blocks,
  Terminal,
  Gamepad2,
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative inline-flex hidden h-9 w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:w-64 md:flex-none lg:flex"
      >
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Search className="h-4 w-4" />
          <span className="hidden lg:inline-flex">Search...</span>
        </span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent className="overflow-hidden p-0 shadow-2xl">
          <VisuallyHidden.Root>
            <DialogTitle>Command Menu</DialogTitle>
          </VisuallyHidden.Root>
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <div
              className="flex items-center border-b px-3"
              cmdk-input-wrapper=""
            >
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Command.Input
                placeholder="Type a command or search..."
                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
              <Command.Empty>No results found.</Command.Empty>

              <Command.Group heading="Suggestions">
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/interview-experiences'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>Interview Experiences</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/tools'))}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Tools Dashboard</span>
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/resources'))}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span>Resources</span>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Tools">
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/tools/roi-calculator'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  <span>College ROI Calculator</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/tools/cgpa-converter'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>CGPA Converter</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/tools/resume-score-checker'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Resume Score Checker</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/tools/aptitude-test'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>Aptitude Test</span>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Coding Games">
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/games/coding'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  <span>All Coding Games</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/games/coding/code-battle'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Swords className="mr-2 h-4 w-4" />
                  <span>Code Battle</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/games/coding/debug-arena'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Bug className="mr-2 h-4 w-4" />
                  <span>Debug Arena</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() =>
                      router.push('/games/coding/algorithm-builder'),
                    )
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Blocks className="mr-2 h-4 w-4" />
                  <span>Algorithm Builder</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() =>
                      router.push('/games/coding/output-prediction'),
                    )
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  <span>Output Prediction</span>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="General">
                <Command.Item
                  onSelect={() => runCommand(() => router.push('/about'))}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <User className="mr-2 h-4 w-4" />
                  <span>About Us</span>
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => router.push('/scholarships'))
                  }
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  <span>Scholarships</span>
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
