/**
 * Tests for Input Component
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '@/components/ui/input';

describe('Input Component', () => {
  it('should render correctly', () => {
    render(<Input placeholder="Enter text" />);

    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('should accept user input', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');

    fireEvent.change(input, { target: { value: 'Hello World' } });

    expect(input).toHaveValue('Hello World');
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <Input
        disabled
        placeholder="Disabled"
      />,
    );

    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });

  it('should apply correct type attribute', () => {
    render(
      <Input
        type="email"
        placeholder="Email"
      />,
    );

    expect(screen.getByPlaceholderText('Email')).toHaveAttribute(
      'type',
      'email',
    );
  });

  it('should support password type', () => {
    render(
      <Input
        type="password"
        placeholder="Password"
      />,
    );

    expect(screen.getByPlaceholderText('Password')).toHaveAttribute(
      'type',
      'password',
    );
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <Input
        ref={ref}
        placeholder="Ref"
      />,
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should merge custom className', () => {
    render(
      <Input
        className="custom-class"
        placeholder="Custom"
      />,
    );

    expect(screen.getByPlaceholderText('Custom')).toHaveClass('custom-class');
  });

  it('should handle onChange events', () => {
    const handleChange = jest.fn();
    render(
      <Input
        onChange={handleChange}
        placeholder="Change"
      />,
    );

    fireEvent.change(screen.getByPlaceholderText('Change'), {
      target: { value: 'test' },
    });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should handle onBlur events', () => {
    const handleBlur = jest.fn();
    render(
      <Input
        onBlur={handleBlur}
        placeholder="Blur"
      />,
    );

    fireEvent.blur(screen.getByPlaceholderText('Blur'));

    expect(handleBlur).toHaveBeenCalled();
  });

  it('should handle onFocus events', () => {
    const handleFocus = jest.fn();
    render(
      <Input
        onFocus={handleFocus}
        placeholder="Focus"
      />,
    );

    fireEvent.focus(screen.getByPlaceholderText('Focus'));

    expect(handleFocus).toHaveBeenCalled();
  });

  it('should support readonly attribute', () => {
    render(
      <Input
        readOnly
        value="Read Only"
        placeholder="ReadOnly"
      />,
    );

    expect(screen.getByPlaceholderText('ReadOnly')).toHaveAttribute('readonly');
  });

  it('should support required attribute', () => {
    render(
      <Input
        required
        placeholder="Required"
      />,
    );

    expect(screen.getByPlaceholderText('Required')).toBeRequired();
  });

  it('should have correct display name', () => {
    expect(Input.displayName).toBe('Input');
  });
});
