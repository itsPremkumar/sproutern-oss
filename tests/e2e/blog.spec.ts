import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('should list blog posts', async ({ page }) => {
    await page.goto('/blog');

    // Check key elements
    await expect(page.locator('h1')).toContainText(/Blog/i);

    // Should have blog cards
    // Assuming blog posts are in articles or links inside a grid
    const blogLinks = page.locator('a[href^="/blog/"]');
    await expect(blogLinks.first()).toBeVisible();
  });

  test('should navigate to a blog post', async ({ page }) => {
    await page.goto('/blog');

    // Click the first blog post
    // Filter to avoid clicking pagination or headers if possible, just take first content link
    const firstPost = page.locator('main a[href^="/blog/"]').first();
    const href = await firstPost.getAttribute('href');

    if (href) {
      await firstPost.click();
      await expect(page).toHaveURL(href as string);
      await expect(page.locator('h1')).toBeVisible();
    }
  });
});
