# Unlighthouse Documentation for Sproutern

> **Unlighthouse** is an automated tool that scans your entire website and runs Google Lighthouse
> audits on every page, providing comprehensive reports on Performance, Accessibility, SEO, and Best
> Practices.

---

## 📦 Installation

Unlighthouse is already installed in your project as a dev dependency:

```json
"unlighthouse": "^0.17.4"
```

---

## 🚀 How to Run Unlighthouse

### Method 1: Using NPM Script (Recommended)

```powershell
# Make sure your dev server is running first
npm run dev

# In a separate terminal, run the audit
npm run audit:site
```

The `audit:site` script runs:

```bash
npx unlighthouse --site http://localhost:3000
```

### Method 2: Direct CLI Usage

```powershell
# Basic usage (scans localhost:3000)
npx unlighthouse --site http://localhost:3000

# Scan production site
npx unlighthouse --site https://www.sproutern.com

# Scan with custom port (your dev server uses port 9002)
npx unlighthouse --site http://localhost:9002
```

### Method 3: CI Mode (For Automated Pipelines)

```powershell
# CI mode with budget thresholds
npx unlighthouse-ci --site http://localhost:9002

# CI mode with custom config
npx unlighthouse-ci --site http://localhost:9002 --config unlighthouse.config.ts
```

---

## ⚙️ Configuration

Your current configuration file: `unlighthouse.config.ts`

```typescript
import { defineConfig } from 'unlighthouse';

export default defineConfig({
  // Scanner settings
  scanner: {
    device: 'mobile', // Test on mobile viewport
    skipAfter: 50, // Limit pages scanned (increase as needed)
  },
  // CI budget thresholds (audits fail if scores are below these)
  ci: {
    budget: {
      performance: 90,
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
    },
  },
  // Target site
  site: 'http://localhost:9002',
  debug: true,
});
```

### Configuration Options

| Option                    | Description                     | Default    |
| ------------------------- | ------------------------------- | ---------- |
| `site`                    | URL to scan                     | Required   |
| `scanner.device`          | `'mobile'` or `'desktop'`       | `'mobile'` |
| `scanner.skipAfter`       | Max pages to scan               | `100`      |
| `scanner.throttle`        | Delay between requests (ms)     | `null`     |
| `scanner.dynamicSampling` | Number of dynamic route samples | `3`        |
| `ci.budget`               | Score thresholds for CI mode    | `{}`       |
| `debug`                   | Enable debug logging            | `false`    |

### Advanced Configuration

```typescript
import { defineConfig } from 'unlighthouse';

export default defineConfig({
  site: 'http://localhost:9002',

  scanner: {
    device: 'mobile',
    skipAfter: 100,
    throttle: true, // Enable throttling
    dynamicSampling: 5, // Sample 5 dynamic routes
    maxRoutes: 200, // Maximum routes to discover
    sitemap: true, // Use sitemap for discovery
    robotsTxt: true, // Respect robots.txt
    // Exclude patterns (regex)
    exclude: ['/api/*', '/admin/*', '/_next/*'],
    // Include only matching patterns
    include: ['/blog/*', '/tools/*'],
  },

  // Lighthouse options
  lighthouse: {
    output: 'html',
    maxWaitForFcp: 30000,
    maxWaitForLoad: 45000,
  },

  ci: {
    budget: {
      performance: 85,
      accessibility: 95,
      'best-practices': 90,
      seo: 95,
    },
    buildStatic: true, // Generate static report
    reporter: 'jsonExpanded', // CI report format
  },

  // Output settings
  outputPath: './unlighthouse-report',
  debug: true,
});
```

---

## 📊 Understanding Reports

### Report Location

After running Unlighthouse, reports are saved to:

- **Interactive Report**: `.unlighthouse/` (opens in browser automatically)
- **Full Report**: `unlighthouse-full-report/`
- **CLI Report**: `unlighthouse-report/`

### Report Structure

```
unlighthouse-report/
├── localhost/
│   ├── index.html          # Dashboard
│   ├── e29f/               # Page reports (hash-based)
│   │   ├── index.html      # Individual page report
│   │   └── ...
│   └── ...
```

### Viewing the Report

1. **Auto-open**: Reports auto-open at `http://localhost:5678` during scan
2. **Manual open**: Open `unlighthouse-report/localhost/index.html` in browser

### Score Categories

| Category           | What it Measures                                          |
| ------------------ | --------------------------------------------------------- |
| **Performance**    | Load speed, FCP, LCP, CLS, TBT, Speed Index               |
| **Accessibility**  | WCAG compliance, ARIA, color contrast, keyboard nav       |
| **Best Practices** | HTTPS, console errors, deprecated APIs, image formats     |
| **SEO**            | Meta tags, crawlability, mobile-friendly, structured data |

---

## 💡 Common Commands

```powershell
# 1. Start dev server (Terminal 1)
npm run dev

# 2. Run full site audit (Terminal 2)
npm run audit:site

# 3. Scan specific number of pages
npx unlighthouse --site http://localhost:9002 --scanner.skipAfter 10

# 4. Desktop audit instead of mobile
npx unlighthouse --site http://localhost:9002 --scanner.device desktop

# 5. Generate static report
npx unlighthouse --site http://localhost:9002 --build-static

# 6. Scan production
npx unlighthouse --site https://www.sproutern.com

# 7. Use custom config file
npx unlighthouse --site http://localhost:9002 --config ./unlighthouse.config.ts

# 8. Verbose debugging
npx unlighthouse --site http://localhost:9002 --debug
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. "Axios error response status: 500"

- **Cause**: Server-side rendering errors in pages
- **Fix**: Check Next.js server logs for errors, fix SSR issues

#### 2. "PAGE_HUNG" or timeout errors

- **Cause**: Pages taking too long to load
- **Fix**: Increase timeout in config:

```typescript
lighthouse: {
    maxWaitForLoad: 60000,  // 60 seconds
}
```

#### 3. Scan stops early

- **Cause**: `skipAfter` limit reached
- **Fix**: Increase `scanner.skipAfter` in config

#### 4. Pages not being discovered

- **Cause**: Missing links or sitemap
- **Fix**: Enable sitemap crawling:

```typescript
scanner: {
    sitemap: true,
    robotsTxt: true,
}
```

#### 5. Memory issues on large sites

- **Cause**: Too many concurrent audits
- **Fix**: Enable throttling:

```typescript
scanner: {
    throttle: true,
    workers: 2,  // Reduce workers
}
```

---

## 📈 Recommended Workflow

### Step 1: Run Initial Audit

```powershell
npm run dev          # Start server
npm run audit:site   # Run audit
```

### Step 2: Review Dashboard

- Open the report in browser
- Sort pages by lowest scores
- Identify critical issues

### Step 3: Fix Issues

Common improvements:

- **Performance**: Optimize images, reduce JavaScript, enable caching
- **Accessibility**: Add alt text, improve contrast, add ARIA labels
- **SEO**: Add meta descriptions, proper headings, structured data
- **Best Practices**: Use HTTPS, fix console errors, update dependencies

### Step 4: Re-run Audit

Verify improvements by running another audit.

---

## 📋 NPM Scripts Reference

| Script                      | Command                                         | Description            |
| --------------------------- | ----------------------------------------------- | ---------------------- |
| `npm run audit:site`        | `npx unlighthouse --site http://localhost:3000` | Scan localhost:3000    |
| `npm run audit:local`       | `npx lighthouse http://localhost:3000...`       | Single page Lighthouse |
| `npm run audit:performance` | `npx lighthouse https://www.sproutern.com...`   | Prod performance audit |

---

## 🎯 Best Practices

1. **Run regularly**: Audit before each deployment
2. **Set budgets**: Use CI mode with thresholds to prevent regressions
3. **Start with mobile**: Mobile-first auditing catches more issues
4. **Focus on critical pages**: Scan important user journeys first
5. **Track over time**: Compare scores between runs to measure improvements

---

## 📚 Resources

- [Unlighthouse Documentation](https://unlighthouse.dev/)
- [Lighthouse Scoring Guide](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Quick Reference Card

```powershell
# === MOST COMMON COMMANDS ===

# Start dev server (port 9002)
npm run dev

# Run site audit
npm run audit:site

# Or with custom port
npx unlighthouse --site http://localhost:9002

# Scan production
npx unlighthouse --site https://www.sproutern.com
```

---

_Last Updated: December 2024_

npm run dev

new terminal

# Using your configured port (9002)

npx unlighthouse --site http://localhost:9002
