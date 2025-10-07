import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    const menuButton = page.getByRole('button', { name: /Open main menu/i });
    await expect(menuButton).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    const menuButton = page.getByRole('button', { name: /Open main menu/i });
    await expect(menuButton).toBeHidden();

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('mobile menu should work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.getByRole('button', { name: /Open main menu/i });
    await menuButton.click();
    await page.getByRole('link', { name: 'About' }).first().click();
    await expect(page).toHaveURL('/about');
  });
});
