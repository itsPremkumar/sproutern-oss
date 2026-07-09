import * as React from 'react';

export const breakpoints = {
  mobile: 480, // For mobile phones
  tablet: 768, // For tablets
  laptop: 1024, // For laptops
  desktop: 1200, // For desktop screens
} as const;

type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop';
type Orientation = 'portrait' | 'landscape';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: DeviceType;
  orientation: Orientation;
  width: number;
}

export function useDevice(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = React.useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    deviceType: 'desktop',
    orientation: 'landscape',
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  React.useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const deviceType: DeviceType =
        width < breakpoints.mobile
          ? 'mobile'
          : width < breakpoints.tablet
            ? 'mobile'
            : width < breakpoints.laptop
              ? 'tablet'
              : width < breakpoints.desktop
                ? 'laptop'
                : 'desktop';

      setDeviceInfo({
        isMobile: width < breakpoints.tablet,
        isTablet: width >= breakpoints.tablet && width < breakpoints.laptop,
        isDesktop: width >= breakpoints.laptop,
        deviceType,
        orientation: height > width ? 'portrait' : 'landscape',
        width,
      });
    };

    // Initial check
    updateDeviceInfo();

    // Add event listeners for resize and orientation change
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
}

// Backwards compatibility
export function useIsMobile() {
  const { isMobile } = useDevice();
  return isMobile;
}

// import * as React from "react"

// const MOBILE_BREAKPOINT = 768

// export function useIsMobile() {
//   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

//   React.useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
//     const onChange = () => {
//       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     }
//     mql.addEventListener("change", onChange)
//     setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     return () => mql.removeEventListener("change", onChange)
//   }, [])

//   return !!isMobile
// }
