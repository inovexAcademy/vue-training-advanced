import { test, expect } from '@playwright/test';

test.describe('given the product details page of Product 1', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/product/1');
    await expect(
      page.getByRole('heading', { name: 'Product 1' }),
    ).toBeVisible();
  });

  // When "Go Back to Products" link is clicked...
  // Then displays the Product List page...
});
