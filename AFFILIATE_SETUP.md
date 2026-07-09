# Affiliate Marketing Setup Guide

This guide outlines the division of labor between **You (Manual Setup)** and **Me (Code
Implementation)** to get Sproutern monetized with high-paying affiliate programs.

## 🛑 PART 1: Your Job (Manual Setup)

You need to register and get approved by the networks. Since you have **US & Singapore traffic**,
you should prioritize **Impact.com**.

### 1. Sign Up for Networks

- **[Impact.com (Partner)](https://app.impact.com/login.user)** - _Primary Priority_
  - **Why:** Hosts big brands like Canva, Semrush, Coursera, Udacity.
  - **Action:** Sign up as a "Partner" (Media/Content Creator).
- **[PartnerStack](https://partnerstack.com/)** - _Secondary Priority_
  - **Why:** Best for SaaS tools (Notion, Monday.com, various dev tools).
  - **Action:** Join the "PartnerStack Network".

### 2. Complete Your Profile (Critical for Approval)

When you sign up, they will ask for your "Media Kit" or "Traffic Methods". Use these answers to get
approved faster:

- **Website:** `https://www.sproutern.com`
- **Monthly Traffic:** "5,000 - 10,000 visitors" (Based on your analytics trend).
- **Top Geographies:** United States, Singapore, India. (Mentioning US/Singapore helps A LOT).
- **Content Type:** Educational content, Career Development, Developer Tools, and Student Resources.
- **Promotion Method:** "Contextual links in high-quality educational blog posts and resource
  guides."

### 3. Apply to Specific Programs

Once inside Impact.com, search for and apply to these specific programs. They match your content
perfectly:

| Program       | Niche          | Why it fits                                         | Est. Commission |
| :------------ | :------------- | :-------------------------------------------------- | :-------------- |
| **Coursera**  | Education      | Fits your "Skills" & "Certifications" guides.       | 10-45%          |
| **Udacity**   | Tech Education | Fits your "Data Science/AI" roadmaps.               | $50 per lead    |
| **Semrush**   | SEO/Marketing  | Fits your "Digital Marketing" or "Blogging" guides. | $200 per sale   |
| **Canva**     | Design         | Fits "Resume Building" & "Portfolio" tips.          | High for Pro    |
| **Resume.io** | Career         | Direct fit for your Resume tools.                   | Variable        |
| **Namecheap** | Hosting        | "How to build a portfolio website" guides.          | 20-30%          |

### 4. Get Your Tracking Links

- Once approved (takes 24-48 hours usually), go to the brand's dashboard.
- Click "Create Link".
- Copy the **long tracking link**.

---

## 💻 PART 2: My Job (Code Implementation)

Once you have the links, I will build the infrastructure to display them safely and effectively.

### 1. Centralized Affiliate Config

I will create a file `src/config/affiliates.ts` to manage all links in one place.

```typescript
export const AFFILIATE_PROGRAMS = {
  coursera: {
    name: 'Coursera',
    link: 'https://impact.com/track/...', // You paste this here later
    discount: '30% Off',
  },
  // ...
};
```

### 2. Reusable Components

I will create these components so you can drop affiliate links anywhere easily:

- **`<AffiliateCard />`**: A beautiful card for the "Tools" page.
- **`<InlineTextLink />`**: For blog posts (e.g., "We recommend _Coursera_ for this...").
- **`<Disclosure />`**: A legal requirement. "Contains affiliate links" text that automatically
  appears.

### 3. "Recommended Tools" Page

I will build a dedicated `/resources/tools` page listing all these partners, categorized by "Student
Tools", "Developer Tools", and "Career Growth".

---

## ✅ Checklist: What to do right now

1.  [ ] Go to **Impact.com** and sign up.
2.  [ ] Fill out the profile mentioning your **US/Singapore traffic**.
3.  [ ] Apply to **Coursera** and **Canva** first (easiest to get into).
4.  [ ] Let me know once you have your first link!
