'use client';

import { EzoicPlaceholder } from './ezoic-placeholder';

const isAdSenseReviewMode =
  process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false';

function renderAdPlaceholder(id: number, className: string) {
  if (isAdSenseReviewMode) {
    return null;
  }

  return (
    <div className={className}>
      <EzoicPlaceholder id={id} />
    </div>
  );
}

/**
 * Ezoic Ad Sections - All placeholders from Ezoic Dashboard
 *
 * Placeholder IDs:
 * - 101: top_of_page
 * - 102: under_page_title
 * - 103: bottom_of_page
 * - 104: sidebar
 * - 105: sidebar_middle_1
 * - 106: sidebar_bottom
 * - 107: sidebar_floating_1 (Desktop only)
 * - 108: sidebar_floating_2 (Desktop only)
 * - 109: under_first_paragraph
 * - 110: under_second_paragraph
 * - 111: mid_content
 * - 112: long_content
 * - 113: longer_content
 * - 114: longest_content
 * - 115: incontent_5
 */

// === PAGE POSITION ADS ===

// Top of page ad (101)
export function AdTopOfPage() {
  return renderAdPlaceholder(101, 'my-4');
}

// Under page title (102)
export function AdUnderPageTitle() {
  return renderAdPlaceholder(102, 'my-4');
}

// Bottom of page (103)
export function AdBottomOfPage() {
  return renderAdPlaceholder(103, 'my-8');
}

// === SIDEBAR ADS ===

// Sidebar (104)
export function AdSidebar() {
  return renderAdPlaceholder(104, 'my-4');
}

// Sidebar middle (105)
export function AdSidebarMiddle() {
  return renderAdPlaceholder(105, 'my-4');
}

// Sidebar bottom (106)
export function AdSidebarBottom() {
  return renderAdPlaceholder(106, 'my-4');
}

// Sidebar floating 1 - Desktop only (107)
export function AdSidebarFloating1() {
  return renderAdPlaceholder(107, 'my-4 hidden lg:block');
}

// Sidebar floating 2 - Desktop only (108)
export function AdSidebarFloating2() {
  return renderAdPlaceholder(108, 'my-4 hidden lg:block');
}

// === IN-CONTENT ADS ===

// Under first paragraph (109)
export function AdUnderFirstParagraph() {
  return renderAdPlaceholder(109, 'my-8');
}

// Under second paragraph (110)
export function AdUnderSecondParagraph() {
  return renderAdPlaceholder(110, 'my-8');
}

// Mid content (111)
export function AdMidContent() {
  return renderAdPlaceholder(111, 'my-8');
}

// Long content (112)
export function AdLongContent() {
  return renderAdPlaceholder(112, 'my-8');
}

// Longer content (113)
export function AdLongerContent() {
  return renderAdPlaceholder(113, 'my-8');
}

// Longest content (114)
export function AdLongestContent() {
  return renderAdPlaceholder(114, 'my-8');
}

// In-content 5 (115)
export function AdInContent5() {
  return renderAdPlaceholder(115, 'my-8');
}

// === LEGACY ALIASES (for backward compatibility) ===
export const AdAfterFirstSection = AdUnderFirstParagraph;
export const AdAfterSecondSection = AdUnderSecondParagraph;

// === BUNDLED EXPORT ===
export const EzoicAds = {
  // Page positions
  TopOfPage: AdTopOfPage,
  UnderPageTitle: AdUnderPageTitle,
  BottomOfPage: AdBottomOfPage,
  // Sidebar
  Sidebar: AdSidebar,
  SidebarMiddle: AdSidebarMiddle,
  SidebarBottom: AdSidebarBottom,
  SidebarFloating1: AdSidebarFloating1,
  SidebarFloating2: AdSidebarFloating2,
  // In-content
  UnderFirstParagraph: AdUnderFirstParagraph,
  UnderSecondParagraph: AdUnderSecondParagraph,
  MidContent: AdMidContent,
  LongContent: AdLongContent,
  LongerContent: AdLongerContent,
  LongestContent: AdLongestContent,
  InContent5: AdInContent5,
};
