# Ezoic AdSense Integration Documentation

> Complete guide for the Ezoic ad monetization setup on Sproutern

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [Configuration](#configuration)
5. [Components Reference](#components-reference)
6. [Usage Guide](#usage-guide)
7. [Testing & Debugging](#testing--debugging)
8. [Troubleshooting](#troubleshooting)

---

## Overview

Sproutern uses **Ezoic's JavaScript integration** for ad monetization. This method provides:

- ✅ Quick setup without DNS changes
- ✅ Complete control over ad placement
- ✅ Compatible with Next.js dynamic routing
- ✅ Automatic ad refresh on page navigation

### Integration Status

| Component         | Status                         |
| ----------------- | ------------------------------ |
| Consent Scripts   | ✅ Configured                  |
| Main Ezoic Script | ✅ Configured                  |
| ads.txt Redirect  | ✅ Configured                  |
| Ad Placeholders   | ✅ 15 placements (IDs 101-115) |
| SPA Route Handler | ✅ Configured                  |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        layout.tsx                           │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │  EzoicScript    │  │   EzoicLogic    │                  │
│  │  (loads scripts)│  │ (route handler) │                  │
│  └─────────────────┘  └─────────────────┘                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Page Components                        │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │ EzoicPlaceholder│  │ ezoic-sections  │                  │
│  │   (base div)    │  │ (pre-configured)│                  │
│  └─────────────────┘  └─────────────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
src/
├── app/
│   └── layout.tsx           # Imports EzoicScript & EzoicLogic
├── components/
│   └── ads/
│       ├── ezoic-script.tsx      # Loads Ezoic & consent scripts
│       ├── ezoic-logic.tsx       # Handles SPA route changes
│       ├── ezoic-placeholder.tsx # Base placeholder component
│       └── ezoic-sections.tsx    # Pre-configured ad components
├── types/
│   └── ezoic.d.ts           # TypeScript definitions
└── next.config.ts           # ads.txt redirect configuration
```

---

## Configuration

### 1. ads.txt Redirect (next.config.ts)

```typescript
async redirects() {
  return [
    {
      source: '/ads.txt',
      destination: 'https://srv.adstxtmanager.com/YOUR_ACCOUNT_ID/sproutern.dpdns.org',
      permanent: true,
    },
  ];
}
```

### 2. Scripts (ezoic-script.tsx)

Three scripts are loaded in order:

1. `https://cmp.gatekeeperconsent.com/min.js` - Consent management
2. `https://the.gatekeeperconsent.com/cmp.min.js` - Privacy compliance
3. `//www.ezojs.com/ezoic/sa.min.js` - Main Ezoic script

### 3. Site Verification (layout.tsx)

```tsx
<meta
  name="ezoic-site-verification"
  content="YOUR_VERIFICATION_CODE"
/>
```

---

## Components Reference

### Available Ad Components

| Component                | Placeholder ID | Description          | Device  |
| ------------------------ | -------------- | -------------------- | ------- |
| `AdTopOfPage`            | 101            | Top of page          | All     |
| `AdUnderPageTitle`       | 102            | Under page title     | All     |
| `AdBottomOfPage`         | 103            | Bottom of page       | All     |
| `AdSidebar`              | 104            | Sidebar              | All     |
| `AdSidebarMiddle`        | 105            | Sidebar middle       | All     |
| `AdSidebarBottom`        | 106            | Sidebar bottom       | All     |
| `AdSidebarFloating1`     | 107            | Floating sidebar     | Desktop |
| `AdSidebarFloating2`     | 108            | Floating sidebar     | Desktop |
| `AdUnderFirstParagraph`  | 109            | After first section  | All     |
| `AdUnderSecondParagraph` | 110            | After second section | All     |
| `AdMidContent`           | 111            | Mid content          | All     |
| `AdLongContent`          | 112            | Long content         | All     |
| `AdLongerContent`        | 113            | Longer content       | All     |
| `AdLongestContent`       | 114            | Longest content      | All     |
| `AdInContent5`           | 115            | In-content #5        | All     |

### Aliases (Backward Compatibility)

- `AdAfterFirstSection` → `AdUnderFirstParagraph`
- `AdAfterSecondSection` → `AdUnderSecondParagraph`

---

## Usage Guide

### Basic Usage

```tsx
import { AdMidContent, AdSidebar } from '@/components/ads/ezoic-sections';

export default function MyPage() {
  return (
    <div>
      <h1>Page Title</h1>
      <p>First paragraph...</p>

      {/* Ad after first section */}
      <AdMidContent />

      <p>More content...</p>
    </div>
  );
}
```

### Using the Base Placeholder

```tsx
import { EzoicPlaceholder } from '@/components/ads/ezoic-placeholder';

// Use any placeholder ID from Ezoic dashboard
<EzoicPlaceholder id={101} />;
```

### Sidebar Layout Example

```tsx
<div className="flex">
  <main className="flex-1">{/* Main content */}</main>
  <aside className="w-64">
    <AdSidebar />
    <AdSidebarMiddle />
    <AdSidebarBottom />
  </aside>
</div>
```

---

## Testing & Debugging

### Enable Ezoic Debugger

Add `?ez_js_debugger=1` to any page URL:

```
https://sproutern.dpdns.org?ez_js_debugger=1
```

A green modal will appear showing:

- ✅ Script detection status
- ✅ Consent management status
- ✅ Detected placeholders
- ✅ Ad request status

### Verify ads.txt

Visit: `https://sproutern.dpdns.org/ads.txt`

Should redirect to Ezoic's ads.txt manager with authorized sellers.

### Check Scripts in Console

```javascript
// Check if ezstandalone is initialized
console.log(window.ezstandalone);

// Check defined placeholders
console.log(document.querySelectorAll('[id^="ezoic-pub-ad-placeholder"]'));
```

---

## Troubleshooting

### Ads Not Showing

1. **New integration**: Allow 24-48 hours for Ezoic to detect and optimize
2. **Check debugger**: Use `?ez_js_debugger=1` to see placeholder status
3. **Verify scripts**: Ensure all 3 scripts are loading (check Network tab)

### "Unused Placeholders" in Debugger

**This is normal** for new integrations. Ezoic will start serving ads once:

- Traffic is detected
- Placeholders are mapped in dashboard
- Optimization begins

### Script Loading Issues

Ensure scripts load in correct order:

1. Consent scripts first
2. Main Ezoic script after

Check for CSP (Content Security Policy) blocking scripts.

### SPA Navigation Issues

The `EzoicLogic` component handles this automatically by calling:

```javascript
window.ezstandalone.showAds();
```

on every route change.

---

## Ezoic Dashboard Links

- **Dashboard**: [Ezoic Dashboard](https://svc.ezoic.com/)
- **Ad Positions**: EzoicAds → Ad Positions → Placeholders
- **Analytics**: Analytics tab in dashboard
- **ads.txt Manager**: Settings → ads.txt

---

## Important Notes

> [!IMPORTANT] **DO NOT** add styling to placeholder divs. Ezoic handles sizing automatically.

> [!WARNING] Keep AdSense script in `layout.tsx` as Ezoic manages AdSense integration.

> [!TIP] Test with debugger after every deployment to ensure placeholders are detected.

---

## Quick Reference

```bash
# Test debugger
https://sproutern.dpdns.org?ez_js_debugger=1

# Check ads.txt
https://sproutern.dpdns.org/ads.txt

# Deploy changes
firebase deploy
```

---

_Last Updated: December 27, 2025_
