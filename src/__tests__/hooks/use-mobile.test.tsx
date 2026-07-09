/**
 * Tests for useDevice and useIsMobile hooks
 * @jest-environment jsdom
 */

import { breakpoints, useDevice, useIsMobile } from '@/hooks/use-mobile';
import { renderHook, act } from '@testing-library/react';

describe('breakpoints', () => {
  it('should export breakpoints object', () => {
    expect(breakpoints).toBeDefined();
    expect(typeof breakpoints).toBe('object');
  });

  it('should have correct breakpoint values', () => {
    expect(breakpoints.mobile).toBe(480);
    expect(breakpoints.tablet).toBe(768);
    expect(breakpoints.laptop).toBe(1024);
    expect(breakpoints.desktop).toBe(1200);
  });

  it('should have breakpoints in ascending order', () => {
    expect(breakpoints.mobile).toBeLessThan(breakpoints.tablet);
    expect(breakpoints.tablet).toBeLessThan(breakpoints.laptop);
    expect(breakpoints.laptop).toBeLessThan(breakpoints.desktop);
  });
});

describe('useDevice', () => {
  // Mock window.innerWidth and innerHeight
  const mockWindowSize = (width: number, height: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height,
    });
  };

  beforeEach(() => {
    // Reset to desktop size
    mockWindowSize(1920, 1080);
  });

  it('should return DeviceInfo object', () => {
    const { result } = renderHook(() => useDevice());

    expect(result.current).toHaveProperty('isMobile');
    expect(result.current).toHaveProperty('isTablet');
    expect(result.current).toHaveProperty('isDesktop');
    expect(result.current).toHaveProperty('deviceType');
    expect(result.current).toHaveProperty('orientation');
    expect(result.current).toHaveProperty('width');
  });

  it('should detect desktop correctly', () => {
    mockWindowSize(1920, 1080);
    const { result } = renderHook(() => useDevice());

    expect(result.current.isDesktop).toBe(true);
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.deviceType).toBe('desktop');
  });

  it('should detect mobile correctly', () => {
    mockWindowSize(375, 667);
    const { result } = renderHook(() => useDevice());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
    expect(result.current.deviceType).toBe('mobile');
  });

  it('should detect tablet correctly', () => {
    mockWindowSize(800, 600);
    const { result } = renderHook(() => useDevice());

    expect(result.current.isTablet).toBe(true);
    expect(result.current.isMobile).toBe(false);
  });

  it('should detect landscape orientation', () => {
    mockWindowSize(1920, 1080);
    const { result } = renderHook(() => useDevice());

    expect(result.current.orientation).toBe('landscape');
  });

  it('should detect portrait orientation', () => {
    mockWindowSize(1080, 1920);
    const { result } = renderHook(() => useDevice());

    expect(result.current.orientation).toBe('portrait');
  });

  it('should return width value', () => {
    mockWindowSize(1024, 768);
    const { result } = renderHook(() => useDevice());

    expect(typeof result.current.width).toBe('number');
  });

  it('should update on window resize', () => {
    mockWindowSize(1920, 1080);
    const { result } = renderHook(() => useDevice());

    expect(result.current.isDesktop).toBe(true);

    // Simulate resize to mobile
    act(() => {
      mockWindowSize(375, 667);
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.isMobile).toBe(true);
  });
});

describe('useIsMobile', () => {
  const mockWindowSize = (width: number, height: number) => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: width,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: height,
    });
  };

  it('should return boolean', () => {
    mockWindowSize(1920, 1080);
    const { result } = renderHook(() => useIsMobile());

    expect(typeof result.current).toBe('boolean');
  });

  it('should return true for mobile viewport', () => {
    mockWindowSize(375, 667);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it('should return false for desktop viewport', () => {
    mockWindowSize(1920, 1080);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it('should maintain backwards compatibility', () => {
    // useIsMobile should work as a simpler wrapper
    mockWindowSize(500, 800);
    const { result: mobileResult } = renderHook(() => useIsMobile());
    const { result: deviceResult } = renderHook(() => useDevice());

    expect(mobileResult.current).toBe(deviceResult.current.isMobile);
  });
});
