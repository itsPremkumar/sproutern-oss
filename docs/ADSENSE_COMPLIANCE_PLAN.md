# AdSense Compliance Plan

This document outlines the necessary steps to address the "Low value content" rejection from Google
AdSense. The issues are primarily architectural and related to trust signals, not just the quality
of individual articles.

## 1. Lack of Trust Signals

Your site is missing key pages that establish trust with users and Google.

**Recommendation:**

- **Create a "Terms of Service" page:** This is a critical page that outlines the rules and
  regulations for using your site. I will create a placeholder page for you, but you must fill it
  with your own terms.
- **Ensure `privacy-policy` and `contact` pages are up-to-date and easily accessible.** These pages
  exist but should be reviewed.

## 2. Flawed Blog Architecture

The current blog structure is the most significant issue. Each blog post is a separate folder in
`src/app/blog/`. This is not a scalable or standard practice and strongly signals to Google that the
content is thin or designed to manipulate search rankings.

**Recommendation:**

- **Refactor the blog to use dynamic routing:** We need to move from the current static structure to
  a dynamic one. This means:
  1.  Creating a single file: `src/app/blog/[slug]/page.tsx`.
  2.  This file will dynamically render blog posts based on the URL (the `slug`).
  3.  The content for each blog post will be stored in a more manageable format (e.g., Markdown
      files or a database).
  4.  I will handle this refactoring for you.

## 3. Suspicious Content Practices

The investigation revealed some practices that can be perceived as manipulative.

**Recommendations:**

- **Remove future dates from blog posts:** The file `src/lib/blog-data.ts` contains blog posts with
  future dates. This should be corrected to reflect the actual publication date.
- **Audit auto-generated content:** The script `scripts/gen-content.ts` suggests that some content
  might be programmatically generated. You must ensure that any auto-generated content is of high
  quality, unique, and provides real value to the user. I will investigate this script and report my
  findings.

## Action Plan

I will proceed with the following steps:

1.  **Create the "Terms of Service" page.**
2.  **Refactor the blog to use dynamic routing.**
3.  **Investigate the content generation script.**

By following this plan, we can address the root causes of the "Low value content" issue and
significantly improve your site's standing with Google AdSense.
