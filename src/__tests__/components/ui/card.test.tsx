/**
 * Tests for Card Component
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

describe('Card Component', () => {
  it('should render Card correctly', () => {
    render(<Card data-testid="card">Content</Card>);

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should apply default styles', () => {
    render(<Card data-testid="card">Content</Card>);

    expect(screen.getByTestId('card')).toHaveClass('rounded-lg', 'border');
  });

  it('should merge custom className', () => {
    render(
      <Card
        data-testid="card"
        className="custom-class"
      >
        Content
      </Card>,
    );

    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Content</Card>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardHeader Component', () => {
  it('should render CardHeader correctly', () => {
    render(<CardHeader data-testid="header">Header Content</CardHeader>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('should apply padding styles', () => {
    render(<CardHeader data-testid="header">Header</CardHeader>);

    expect(screen.getByTestId('header')).toHaveClass('p-6');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<CardHeader ref={ref}>Header</CardHeader>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardTitle Component', () => {
  it('should render CardTitle correctly', () => {
    render(<CardTitle>Test Title</CardTitle>);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should apply heading styles', () => {
    render(<CardTitle data-testid="title">Title</CardTitle>);

    expect(screen.getByTestId('title')).toHaveClass(
      'text-2xl',
      'font-semibold',
    );
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<CardTitle ref={ref}>Title</CardTitle>);

    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });
});

describe('CardDescription Component', () => {
  it('should render CardDescription correctly', () => {
    render(<CardDescription>Test Description</CardDescription>);

    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should apply muted text styles', () => {
    render(<CardDescription data-testid="desc">Description</CardDescription>);

    expect(screen.getByTestId('desc')).toHaveClass('text-muted-foreground');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLParagraphElement>();
    render(<CardDescription ref={ref}>Description</CardDescription>);

    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });
});

describe('CardContent Component', () => {
  it('should render CardContent correctly', () => {
    render(<CardContent data-testid="content">Content Area</CardContent>);

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Content Area')).toBeInTheDocument();
  });

  it('should apply padding styles', () => {
    render(<CardContent data-testid="content">Content</CardContent>);

    expect(screen.getByTestId('content')).toHaveClass('p-6', 'pt-0');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<CardContent ref={ref}>Content</CardContent>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('CardFooter Component', () => {
  it('should render CardFooter correctly', () => {
    render(<CardFooter data-testid="footer">Footer Content</CardFooter>);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('should apply flex styles', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>);

    expect(screen.getByTestId('footer')).toHaveClass('flex', 'items-center');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<CardFooter ref={ref}>Footer</CardFooter>);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Card Composition', () => {
  it('should render full card structure correctly', () => {
    render(
      <Card data-testid="full-card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByTestId('full-card')).toBeInTheDocument();
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });
});
