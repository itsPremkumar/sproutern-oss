import { test, expect } from '@playwright/test';

test.describe('Game SEO Elements', () => {
  test('typing-speed page has proper SEO elements', async ({ page }) => {
    await page.goto('/games/typing-speed');

    // Verify H1 heading exists
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('Typing Speed Test');

    // Verify meta description exists
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /typing speed/i);

    // Verify JSON-LD schema script exists
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Verify OpenGraph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /typing/i);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /.+/);
  });

  test('typing-speed game has functional controls', async ({ page }) => {
    await page.goto('/games/typing-speed');

    // Verify mode buttons exist
    await expect(page.getByRole('button', { name: 'Sentences' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Code/i })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Words' })).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Paragraphs' }),
    ).toBeVisible();

    // Verify duration buttons exist
    await expect(page.getByRole('button', { name: '30s' })).toBeVisible();
    await expect(page.getByRole('button', { name: '60s' })).toBeVisible();
    await expect(page.getByRole('button', { name: '120s' })).toBeVisible();

    // Verify start button exists
    await expect(
      page.getByRole('button', { name: /Start Test/i }),
    ).toBeVisible();
  });

  test('games hub page has proper heading structure', async ({ page }) => {
    await page.goto('/games');

    // Verify H1 exists
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Verify meta description exists
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  });
});
