# Bing IndexNow Implementation - Complete Documentation

## Overview

This document provides complete documentation for the Bing IndexNow implementation for
**sproutern.dpdns.org**. IndexNow is a protocol that enables website owners to instantly notify search
engines when content is added, updated, or deleted.

---

## Configuration Details

| Setting               | Value                                                            |
| --------------------- | ---------------------------------------------------------------- |
| **Domain**            | `sproutern.dpdns.org`                                              |
| **IndexNow Key**      | `YOUR_INDEXNOW_KEY`                               |
| **Key File Location** | `https://sproutern.dpdns.org/YOUR_INDEXNOW_KEY.txt` |
| **Key File Path**     | `public/YOUR_INDEXNOW_KEY.txt`                    |
| **Bing Endpoint**     | `https://www.bing.com/indexnow`                                  |

---

## Initial Submission Summary

**Date:** December 29, 2025

### Submission Results

| Batch     | URL Range    | Count   | Status               |
| --------- | ------------ | ------- | -------------------- |
| 1         | URLs 1-88    | 88      | ✅ Success           |
| 2         | URLs 89-176  | 88      | ✅ Success           |
| 3         | URLs 177-264 | 88      | ✅ Success           |
| 4         | URLs 265-352 | 88      | ✅ Success           |
| 5         | URLs 353-439 | 87      | ✅ Success           |
| **Total** |              | **439** | ✅ **All Submitted** |

---

## URLs Submitted by Category

### Core Pages (14 URLs)

- Homepage (`/`)
- About (`/about`)
- Blog (`/blog`)
- Contact (`/contact`)
- FAQ (`/faq`)
- Donate (`/donate`)
- Tools (`/tools`)
- Games (`/games`)
- Freshers (`/freshers`)
- Internships (`/internships`)
- Resources (`/resources`)
- Scholarships (`/scholarships`)
- Roadmaps (`/roadmaps`)
- Companies (`/companies`)

### Blog Posts (~180 URLs)

All blog articles including:

- Career guides
- Interview preparation
- Resume tips
- Internship guides
- MNC-specific content
- Technology career paths
- Soft skills development

### Tools (~58 URLs)

All student tools including:

- Resume Builder
- CGPA Converter
- Salary Calculator
- Cover Letter Generator
- Interview Questions
- And 50+ more tools

### Games (~72 URLs)

All educational games including:

- Logic puzzles
- Memory games
- Math challenges
- Pattern recognition
- And 60+ more games

### Company Pages (~30 URLs)

Company profiles and interview questions for:

- TCS
- Infosys
- Wipro
- Accenture
- Cognizant
- And more

### Country Guides (11 URLs)

International career guides for:

- USA, UK, Canada, Australia
- Germany, France, Ireland
- Japan, Singapore, Netherlands

### Interview Experiences (~22 URLs)

Real interview experiences from:

- Bank of America
- Optum
- Barclays
- Societe Generale
- Citi
- Verizon
- And more

### Other Sections

- College guides
- School guides
- Freshers guides
- Legal pages (Privacy, Terms, etc.)

---

## How IndexNow Works

### Step 1: Key Verification

Bing verifies ownership by fetching the key file:

```
https://sproutern.dpdns.org/YOUR_INDEXNOW_KEY.txt
```

The file must contain:

```
YOUR_INDEXNOW_KEY
```

### Step 2: URL Submission

URLs are submitted via POST request to Bing's IndexNow endpoint.

**Single URL:**

```
GET https://www.bing.com/indexnow?url=https://sproutern.dpdns.org/blog/example&key=YOUR_INDEXNOW_KEY
```

**Multiple URLs (POST):**

```json
{
  "host": "sproutern.dpdns.org",
  "key": "YOUR_INDEXNOW_KEY",
  "urlList": ["https://sproutern.dpdns.org/url1", "https://sproutern.dpdns.org/url2"]
}
```

### Step 3: Bing Processes URLs

Bing prioritizes crawling the submitted URLs, leading to faster indexing.

---

## Response Codes

| Code    | Meaning                             | Action Required                    |
| ------- | ----------------------------------- | ---------------------------------- |
| **200** | OK - URLs submitted successfully    | None                               |
| **202** | Accepted - Key validation pending   | Wait for Bing to validate          |
| **400** | Bad Request - Invalid format        | Check JSON syntax                  |
| **403** | Forbidden - Invalid key             | Verify key file exists and matches |
| **422** | Unprocessable Entity - URL mismatch | Ensure URLs belong to host         |
| **429** | Too Many Requests                   | Reduce submission frequency        |

---

## Automation Script

A PowerShell script is available at `scripts/submit-indexnow.ps1` for future bulk submissions.

### Usage

```powershell
# From project root
powershell -ExecutionPolicy Bypass -File "scripts/submit-indexnow.ps1"
```

### Manual Submission (Single URL)

```powershell
# Submit a single URL
curl "https://www.bing.com/indexnow?url=https://sproutern.dpdns.org/blog/new-post&key=YOUR_INDEXNOW_KEY"
```

### Manual Submission (Multiple URLs via PowerShell)

```powershell
$body = @{
    host = "sproutern.dpdns.org"
    key = "YOUR_INDEXNOW_KEY"
    urlList = @(
        "https://sproutern.dpdns.org/url1",
        "https://sproutern.dpdns.org/url2"
    )
} | ConvertTo-Json -Depth 3

Invoke-RestMethod -Uri "https://www.bing.com/indexnow" -Method Post -ContentType "application/json; charset=utf-8" -Body $body
```

---

## Best Practices

### Do's ✅

1. **Submit immediately** when content changes
2. **Use batch submission** for multiple URLs (up to 10,000 per request)
3. **Keep key file accessible** at root directory
4. **Monitor for 429 errors** to avoid rate limiting
5. **Submit only canonical URLs** (no duplicates)

### Don'ts ❌

1. **Don't submit unchanged URLs** - wastes quota
2. **Don't submit non-existent pages** - may flag as spam
3. **Don't share your key** publicly
4. **Don't submit faster than necessary** - respect rate limits
5. **Don't submit admin/login pages** - not useful for indexing

---

## Search Engines Supporting IndexNow

URLs submitted to Bing are automatically shared with:

- **Microsoft Bing**
- **Yandex**
- **Seznam.cz**
- **Naver** (South Korea)

One submission notifies multiple search engines!

---

## Monitoring & Verification

### Check Indexing Status in Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Navigate to **URL Inspection**
3. Enter a URL to check its indexing status

### Verify Key File

```bash
curl https://sproutern.dpdns.org/YOUR_INDEXNOW_KEY.txt
```

Expected output:

```
YOUR_INDEXNOW_KEY
```

---

## Future Automation Ideas

### Option 1: API Route in Next.js

Create an API endpoint that automatically submits URLs when content changes:

```typescript
// pages/api/indexnow.ts
export default async function handler(req, res) {
  const { url } = req.body;
  // Submit to IndexNow...
}
```

### Option 2: Build Hook

Add to your deployment pipeline to submit sitemap URLs after each deploy.

### Option 3: CMS Integration

Trigger IndexNow submission when blog posts are published/updated.

---

## Troubleshooting

### Key Not Found (403)

- Verify `public/YOUR_INDEXNOW_KEY.txt` exists
- Ensure file is deployed and accessible
- Check file contains exactly the key value

### Rate Limited (429)

- Wait before retrying
- Reduce batch size
- Add delay between submissions

### Invalid URL (422)

- Ensure URLs start with `https://sproutern.dpdns.org/`
- Use URL encoding for special characters
- Don't mix different domains

---

## References

- [IndexNow Official Documentation](https://www.indexnow.org/documentation)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [IndexNow FAQ](https://www.indexnow.org/faq)

---

## Audit Log

| Date       | Action                  | URLs | Status      |
| ---------- | ----------------------- | ---- | ----------- |
| 2025-12-29 | Initial bulk submission | 439  | ✅ Complete |

---

_Last Updated: December 29, 2025_
