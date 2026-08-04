# 🌐 Google Search Console Setup for sproutern.dpdns.org

This guide explains how to configure your Firebase-hosted website (`sproutern.dpdns.org`) with Google
Search Console for indexing and SEO visibility.

---

## 📦 Prerequisites

- A live website hosted on Firebase Hosting
- Custom domain (e.g., sproutern.dpdns.org) purchased from Namecheap
- Firebase CLI installed
- Google Search Console access

---

## 🔗 Step 1: Add Custom Domain in Firebase Hosting

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (`sproutern`)
3. Go to **Hosting > Settings > Add custom domain**
4. Enter `sproutern.dpdns.org`
5. Firebase will provide **DNS records** (CNAME/TXT/A)
6. Copy those DNS records

---

## 🛠 Step 2: Update DNS in Namecheap

1. Go to [Namecheap Dashboard](https://namecheap.com)
2. Click on **Domain List > Manage** for `sproutern.dpdns.org`
3. Go to the **Advanced DNS** tab
4. Add the required **Firebase DNS records**
   - Type: CNAME, A, or TXT as provided
5. Save the changes

⏳ _Note: DNS changes can take up to 24 hours_

---

## ✅ Step 3: Verify Domain with Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **Domain** and enter: `sproutern.dpdns.org`
4. Google will give you a **TXT verification record**
5. Add it in **Namecheap > Advanced DNS** as a TXT record with:
   - **Host**: `@`
   - **Value**: `google-site-verification=xxxxxxx`
6. After saving, click **Verify** in Search Console

---

## 🧭 Step 4: Generate sitemap.xml

1. Go to: [https://www.xml-sitemaps.com](https://www.xml-sitemaps.com)
2. Enter: `https://sproutern.dpdns.org`
3. Click "Start"
4. After it's done, download the `sitemap.xml` file

---

## 🚀 Step 5: Upload sitemap.xml to Firebase Hosting

1. Place the `sitemap.xml` file inside the `public/` folder of your Firebase project

site:sproutern.dpdns.org
