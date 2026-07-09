/**
 * Tests for Badge Component
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Badge, badgeVariants } from '@/components/ui/badge';

describe('Badge Component', () => {
  it('should render correctly', () => {
    render(<Badge>Test Badge</Badge>);

    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('should render with default variant', () => {
    render(<Badge>Default</Badge>);

    const badge = screen.getByText('Default');
    expect(badge).toHaveClass('bg-primary');
  });

  it('should render with secondary variant', () => {
    render(<Badge variant="secondary">Secondary</Badge>);

    const badge = screen.getByText('Secondary');
    expect(badge).toHaveClass('bg-secondary');
  });

  it('should render with destructive variant', () => {
    render(<Badge variant="destructive">Destructive</Badge>);

    const badge = screen.getByText('Destructive');
    expect(badge).toHaveClass('bg-destructive');
  });

  it('should render with outline variant', () => {
    render(<Badge variant="outline">Outline</Badge>);

    const badge = screen.getByText('Outline');
    expect(badge).toHaveClass('text-foreground');
    expect(badge).not.toHaveClass('bg-primary');
  });

  it('should apply custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);

    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-class');
  });

  it('should merge custom className with variant styles', () => {
    render(
      <Badge
        variant="secondary"
        className="extra-style"
      >
        Merged
      </Badge>,
    );

    const badge = screen.getByText('Merged');
    expect(badge).toHaveClass('bg-secondary');
    expect(badge).toHaveClass('extra-style');
  });

  it('should pass through additional props', () => {
    render(
      <Badge
        data-testid="test-badge"
        id="badge-id"
      >
        Props
      </Badge>,
    );

    const badge = screen.getByTestId('test-badge');
    expect(badge).toHaveAttribute('id', 'badge-id');
  });

  it('should have base styles', () => {
    render(<Badge>Styled</Badge>);

    const badge = screen.getByText('Styled');
    expect(badge).toHaveClass('inline-flex');
    expect(badge).toHaveClass('rounded-full');
    expect(badge).toHaveClass('text-xs');
    expect(badge).toHaveClass('font-semibold');
  });
});

describe('badgeVariants', () => {
  it('should export badgeVariants function', () => {
    expect(typeof badgeVariants).toBe('function');
  });

  it('should generate correct classes for default variant', () => {
    const classes = badgeVariants({ variant: 'default' });
    expect(classes).toContain('bg-primary');
  });

  it('should generate correct classes for secondary variant', () => {
    const classes = badgeVariants({ variant: 'secondary' });
    expect(classes).toContain('bg-secondary');
  });

  it('should generate correct classes for destructive variant', () => {
    const classes = badgeVariants({ variant: 'destructive' });
    expect(classes).toContain('bg-destructive');
  });

  it('should generate correct classes for outline variant', () => {
    const classes = badgeVariants({ variant: 'outline' });
    expect(classes).toContain('text-foreground');
  });

  it('should default to default variant when no variant specified', () => {
    const classes = badgeVariants({});
    expect(classes).toContain('bg-primary');
  });
});
