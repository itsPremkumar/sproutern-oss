/**
 * Tests for Skeleton Component
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Skeleton } from '@/components/ui/skeleton';

describe('Skeleton Component', () => {
  it('should render correctly', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('should have base animation class', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse');
  });

  it('should have rounded corners', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).toHaveClass('rounded-md');
  });

  it('should have muted background', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton')).toHaveClass('bg-muted');
  });

  it('should apply custom className', () => {
    render(
      <Skeleton
        className="h-4 w-full"
        data-testid="skeleton"
      />,
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('w-full');
    expect(skeleton).toHaveClass('h-4');
  });

  it('should merge custom className with base styles', () => {
    render(
      <Skeleton
        className="custom-class"
        data-testid="skeleton"
      />,
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('animate-pulse');
    expect(skeleton).toHaveClass('custom-class');
  });

  it('should pass through additional props', () => {
    render(
      <Skeleton
        data-testid="skeleton"
        id="test-id"
        aria-label="Loading"
      />,
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveAttribute('id', 'test-id');
    expect(skeleton).toHaveAttribute('aria-label', 'Loading');
  });

  it('should render as a div element', () => {
    render(<Skeleton data-testid="skeleton" />);

    expect(screen.getByTestId('skeleton').tagName).toBe('DIV');
  });

  it('should support inline styles', () => {
    render(
      <Skeleton
        data-testid="skeleton"
        style={{ width: '100px', height: '20px' }}
      />,
    );

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveStyle({ width: '100px', height: '20px' });
  });

  it('should render with children if provided', () => {
    render(
      <Skeleton data-testid="skeleton">
        <span>Hidden content</span>
      </Skeleton>,
    );

    expect(screen.getByText('Hidden content')).toBeInTheDocument();
  });
});

describe('Skeleton usage patterns', () => {
  it('should work as text placeholder', () => {
    render(
      <Skeleton
        className="h-4 w-[250px]"
        data-testid="text-skeleton"
      />,
    );

    const skeleton = screen.getByTestId('text-skeleton');
    expect(skeleton).toHaveClass('h-4');
    expect(skeleton).toHaveClass('w-[250px]');
  });

  it('should work as avatar placeholder', () => {
    render(
      <Skeleton
        className="h-12 w-12 rounded-full"
        data-testid="avatar-skeleton"
      />,
    );

    const skeleton = screen.getByTestId('avatar-skeleton');
    expect(skeleton).toHaveClass('h-12');
    expect(skeleton).toHaveClass('w-12');
    expect(skeleton).toHaveClass('rounded-full');
  });

  it('should work as card placeholder', () => {
    render(
      <div className="flex flex-col space-y-3">
        <Skeleton
          className="h-[125px] w-[250px]"
          data-testid="card-image"
        />
        <Skeleton
          className="h-4 w-[250px]"
          data-testid="card-title"
        />
        <Skeleton
          className="h-4 w-[200px]"
          data-testid="card-description"
        />
      </div>,
    );

    expect(screen.getByTestId('card-image')).toBeInTheDocument();
    expect(screen.getByTestId('card-title')).toBeInTheDocument();
    expect(screen.getByTestId('card-description')).toBeInTheDocument();
  });
});
