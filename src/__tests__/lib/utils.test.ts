/**
 * Tests for utility functions
 * @jest-environment jsdom
 */

import { cn, getInitials } from '@/lib/utils';

describe('cn (class name utility)', () => {
  it('should merge class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const includeClass = true;
    const excludeClass = false;
    expect(
      cn('base', includeClass && 'included', excludeClass && 'excluded'),
    ).toBe('base included');
  });

  it('should merge tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('should handle undefined and null values', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('should handle empty strings', () => {
    expect(cn('foo', '', 'bar')).toBe('foo bar');
  });

  it('should return empty string for no arguments', () => {
    expect(cn()).toBe('');
  });

  it('should handle object syntax', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });
});

describe('getInitials', () => {
  it('should return initials from full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('should handle single name', () => {
    expect(getInitials('John')).toBe('JO');
  });

  it('should handle null value', () => {
    expect(getInitials(null)).toBe('S');
  });

  it('should handle undefined value', () => {
    expect(getInitials(undefined)).toBe('S');
  });

  it('should handle empty string', () => {
    expect(getInitials('')).toBe('S');
  });

  it('should return uppercase initials', () => {
    expect(getInitials('john doe')).toBe('JD');
  });

  it('should handle names with multiple parts', () => {
    expect(getInitials('John Michael Doe')).toBe('JM');
  });

  it('should handle single character names', () => {
    expect(getInitials('J')).toBe('J');
  });

  it('should handle names with extra spaces', () => {
    // Note: Current implementation splits on space, so 'John  Doe' becomes ['John', '', 'Doe']
    // The function returns first two characters of first part if second part is empty
    expect(getInitials('John  Doe')).toBe('JO');
  });

  it('should handle leading and trailing whitespace', () => {
    // Note: Current implementation splits on space but doesn't trim
    // Leading spaces create empty array elements
    expect(getInitials('  John Doe  ')).toBe('  ');
  });

  it('should handle names with special characters', () => {
    expect(getInitials("O'Connor McDonald")).toBe('OM');
  });

  it('should handle hyphenated names', () => {
    // Hyphenated first name is treated as one name
    expect(getInitials('Mary-Jane Watson')).toBe('MW');
  });
});
