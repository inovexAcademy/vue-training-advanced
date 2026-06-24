import { getProducts } from '@/shared/products';
import { expect, test } from '@playwright/test';

const products = getProducts();

test.describe('Add to cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('given one product in the shopping cart', () => {
    const product = products.at(0)!;

    test.beforeEach(async ({ page }) => {
      const addToCartButton = page
        .getByRole('listitem')
        .filter({
          has: page.getByRole('heading', { name: product.title, exact: true }),
        })
        .getByRole('button', { name: 'Add to cart', exact: true });

      await addToCartButton.click();

      const shoppingCartItem = page
        .getByTestId('shopping-cart-list-item')
        .getByRole('heading', { name: product.title });

      await expect(shoppingCartItem).toBeVisible();
      await expect(page.getByTestId('shopping-cart-list-item')).toHaveCount(1);
    });

    test('removes the product from the shopping cart', async ({ page }) => {
      const removeButton = page
        .getByTestId('shopping-cart-list-item')
        .getByRole('button', { name: 'Remove' });

      await removeButton.click();

      await expect(page.getByTestId('shopping-cart-list-item')).toHaveCount(0);
    });

    // when adding another product of the same type
    // the quantity of the product in the shopping cart should increase
  });
});
