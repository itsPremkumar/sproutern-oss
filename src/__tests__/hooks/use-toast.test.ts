/**
 * Tests for useToast Hook
 * @jest-environment jsdom
 */

import { toast } from '@/hooks/use-toast';

describe('toast standalone function', () => {
  it('should be a function', () => {
    expect(typeof toast).toBe('function');
  });

  it('should return an object with required properties', () => {
    const result = toast({ title: 'Test Toast' });

    expect(result).toHaveProperty('id');
    expect(typeof result.id).toBe('string');
  });

  it('should return dismiss function', () => {
    const result = toast({ title: 'Test Toast' });

    expect(result).toHaveProperty('dismiss');
    expect(typeof result.dismiss).toBe('function');
  });

  it('should return update function', () => {
    const result = toast({ title: 'Test Toast' });

    expect(result).toHaveProperty('update');
    expect(typeof result.update).toBe('function');
  });

  it('should generate unique ids for each toast', () => {
    const toast1 = toast({ title: 'Toast 1' });
    const toast2 = toast({ title: 'Toast 2' });

    expect(toast1.id).not.toBe(toast2.id);
  });

  it('should accept title property', () => {
    const result = toast({ title: 'My Title' });

    expect(result.id).toBeDefined();
  });

  it('should accept description property', () => {
    const result = toast({
      title: 'Title',
      description: 'Description text',
    });

    expect(result.id).toBeDefined();
  });

  it('should accept variant property', () => {
    const result = toast({
      title: 'Error Toast',
      variant: 'destructive',
    });

    expect(result.id).toBeDefined();
  });

  it('should allow dismissing toast', () => {
    const result = toast({ title: 'Dismissable Toast' });

    // Should not throw when dismissing
    expect(() => result.dismiss()).not.toThrow();
  });

  it('should allow updating toast', () => {
    const result = toast({ title: 'Initial Title' });

    // Should not throw when updating
    expect(() =>
      result.update({ id: result.id, title: 'Updated Title' }),
    ).not.toThrow();
  });
});
