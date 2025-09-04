import { test, expect } from '@playwright/test';

test.describe('Product details navigation', () => {
  test.describe('given the product list page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test.describe('when the card of Product 1 is clicked', () => {
      test.beforeEach(async ({ page }) => {
        const productCard = page
          .getByRole('listitem')
          .filter({ hasText: 'Product 1' }); // hasText supports regular expressions!

        await productCard.click();
      });

      test('then displays the product details page of Product 1', async ({
        page,
      }) => {
        await expect(page).toHaveURL('/product/1');
        await expect(
          page.getByRole('heading', { name: 'Product 1' }),
        ).toBeVisible();
      });
    });
  });

  test.describe('given the product details page of Product 1', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/product/1');
      await expect(
        page.getByRole('heading', { name: 'Product 1' }),
      ).toBeVisible();
    });

    test.describe('when "Go Back to Products" link is clicked', () => {
      test.beforeEach(async ({ page }) => {
        const backToProductsLink = page.getByRole('link', {
          name: 'Go back to products',
        });

        await backToProductsLink.click();
      });

      test('then displays the product list page', async ({ page }) => {
        await expect(page).toHaveURL('/');
        await expect(
          page.getByRole('heading', { name: 'Available Products' }),
        ).toBeVisible();
      });
    });
  });
});
