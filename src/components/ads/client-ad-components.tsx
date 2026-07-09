'use client';

import dynamic from 'next/dynamic';

const isAdSenseReviewMode =
  process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false';

// Lazy load ad components that require ssr: false
const AdAfterFirstSectionDynamic = dynamic(
  () =>
    import('@/components/ads/ezoic-sections').then((mod) => ({
      default: mod.AdAfterFirstSection,
    })),
  { ssr: false },
);
const AdMidContentDynamic = dynamic(
  () =>
    import('@/components/ads/ezoic-sections').then((mod) => ({
      default: mod.AdMidContent,
    })),
  { ssr: false },
);
const AdLongContentDynamic = dynamic(
  () =>
    import('@/components/ads/ezoic-sections').then((mod) => ({
      default: mod.AdLongContent,
    })),
  { ssr: false },
);
const AdLongerContentDynamic = dynamic(
  () =>
    import('@/components/ads/ezoic-sections').then((mod) => ({
      default: mod.AdLongerContent,
    })),
  { ssr: false },
);
const AdBottomOfPageDynamic = dynamic(
  () =>
    import('@/components/ads/ezoic-sections').then((mod) => ({
      default: mod.AdBottomOfPage,
    })),
  { ssr: false },
);
const AdUnderSecondParagraphDynamic = dynamic(
  () =>
    import('@/components/ads/ezoic-sections').then((mod) => ({
      default: mod.AdUnderSecondParagraph,
    })),
  { ssr: false },
);
const DownloadAppBanner = dynamic(
  () =>
    import('@/components/shared/download-app-banner').then((mod) => ({
      default: mod.DownloadAppBanner,
    })),
  { ssr: false },
);

const Noop = () => null;

const AdAfterFirstSection = isAdSenseReviewMode
  ? Noop
  : AdAfterFirstSectionDynamic;
const AdMidContent = isAdSenseReviewMode ? Noop : AdMidContentDynamic;
const AdLongContent = isAdSenseReviewMode ? Noop : AdLongContentDynamic;
const AdLongerContent = isAdSenseReviewMode ? Noop : AdLongerContentDynamic;
const AdBottomOfPage = isAdSenseReviewMode ? Noop : AdBottomOfPageDynamic;
const AdUnderSecondParagraph = isAdSenseReviewMode
  ? Noop
  : AdUnderSecondParagraphDynamic;

// Export individual components for use in page.tsx
export {
  AdAfterFirstSection,
  AdMidContent,
  AdLongContent,
  AdLongerContent,
  AdBottomOfPage,
  AdUnderSecondParagraph,
  DownloadAppBanner,
};
