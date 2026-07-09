import { test, expect } from '@playwright/test';

test.describe('Tools Functionality', () => {
  test('should load salary calculator', async ({ page }) => {
    await page.goto('/tools/salary-calculator');
    await expect(page).toHaveTitle(/Salary/i);
    await expect(page.locator('h1')).toContainText(/Salary/i);

    // Check if input fields exist
    await expect(page.locator('input[type="number"]').first()).toBeVisible();
  });

  test('should load resume checker', async ({ page }) => {
    await page.goto('/tools/resume-score-checker');
    await expect(page).toHaveTitle(/Resume/i);
    await expect(page.locator('h1')).toContainText(/Resume/i);
  });
});
