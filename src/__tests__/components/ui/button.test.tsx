/**
 * Tests for Button Component
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, buttonVariants } from '@/components/ui/button';

describe('Button Component', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should apply default variant classes', () => {
    render(<Button>Default</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-primary');
  });

  it('should apply destructive variant classes', () => {
    render(<Button variant="destructive">Delete</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-destructive');
  });

  it('should apply outline variant classes', () => {
    render(<Button variant="outline">Outline</Button>);

    expect(screen.getByRole('button')).toHaveClass('border');
  });

  it('should apply secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-secondary');
  });

  it('should apply ghost variant classes', () => {
    render(<Button variant="ghost">Ghost</Button>);

    expect(screen.getByRole('button')).toHaveClass('hover:bg-accent');
  });

  it('should apply link variant classes', () => {
    render(<Button variant="link">Link</Button>);

    expect(screen.getByRole('button')).toHaveClass('underline-offset-4');
  });

  it('should apply small size classes', () => {
    render(<Button size="sm">Small</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-9');
  });

  it('should apply large size classes', () => {
    render(<Button size="lg">Large</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-11');
  });

  it('should apply icon size classes', () => {
    render(<Button size="icon">Icon</Button>);

    expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should render as slot when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('should merge custom className', () => {
    render(<Button className="custom-class">Custom</Button>);

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('should spread additional props', () => {
    render(<Button data-testid="test-button">Test</Button>);

    expect(screen.getByTestId('test-button')).toBeInTheDocument();
  });

  it('should have correct display name', () => {
    expect(Button.displayName).toBe('Button');
  });
});

describe('buttonVariants', () => {
  it('should return default variant classes', () => {
    const classes = buttonVariants();

    expect(classes).toContain('bg-primary');
    expect(classes).toContain('h-10');
  });

  it('should return specific variant classes', () => {
    const classes = buttonVariants({ variant: 'destructive', size: 'lg' });

    expect(classes).toContain('bg-destructive');
    expect(classes).toContain('h-11');
  });

  it('should include base classes', () => {
    const classes = buttonVariants();

    expect(classes).toContain('inline-flex');
    expect(classes).toContain('items-center');
    expect(classes).toContain('justify-center');
  });
});
