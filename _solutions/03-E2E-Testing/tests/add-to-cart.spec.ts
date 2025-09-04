import { getProducts } from '@/shared/products';
import { test, expect } from '@playwright/test';

const products = getProducts();

test.describe('Add to cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('given an empty shopping cart', () => {
    test.beforeEach(async ({ page }) => {
      await expect(page.getByTestId('shopping-cart-list-item')).toHaveCount(0);
    });

    products.forEach(product => {
      test.describe(`when add-to-cart button of ${product.title} is clicked`, () => {
        test.beforeEach(async ({ page }) => {
          const addToCartButton = page
            .getByRole('listitem')
            .filter({ hasText: product.title })
            .getByRole('button')
            .filter({ hasText: 'Add to cart' })
            .first();

          await addToCartButton.click();
        });

        test(`then displays it in the shopping cart`, async ({ page }) => {
          const shoppingCartItem = page
            .getByTestId('shopping-cart-list-item')
            .getByRole('heading', { name: product.title });

          await expect(shoppingCartItem).toBeVisible();
        });

        test(`then displays the quantity 1`, async ({ page }) => {
          const shoppingCartItem = page
            .getByTestId('shopping-cart')
            .getByText('Quantity: 1');

          await expect(shoppingCartItem).toBeVisible();
        });

        test(`then displays the correct total`, async ({ page }) => {
          const shoppingCartTotal = page
            .getByTestId('shopping-cart')
            .filter({ hasText: `Total price: ${product.price.toFixed(2)}` });

          await expect(shoppingCartTotal).toBeVisible();
        });
      });

      test.describe(`when add-to-cart button of ${product.title} is clicked twice`, () => {
        test.beforeEach(async ({ page }) => {
          const addToCartButton = page
            .getByRole('listitem')
            .filter({ hasText: product.title })
            .getByRole('button')
            .filter({ hasText: 'Add to cart' })
            .first();

          await addToCartButton.click();
          await addToCartButton.click();
        });

        test(`then displays it in the shopping cart once`, async ({ page }) => {
          const shoppingCartItems = page
            .getByTestId('shopping-cart-list-item')
            .getByRole('heading', { name: product.title });

          await expect(shoppingCartItems).toHaveCount(1);
          await expect(shoppingCartItems).toBeVisible();
        });

        test(`then displays the quantity 2`, async ({ page }) => {
          const shoppingCartItem = page
            .getByTestId('shopping-cart')
            .getByText('Quantity: 2');

          await expect(shoppingCartItem).toBeVisible();
        });

        test(`then displays the correct total`, async ({ page }) => {
          const expectedTotal = (product.price * 2).toFixed(2);
          const shoppingCartTotal = page
            .getByTestId('shopping-cart')
            .filter({ hasText: `Total price: ${expectedTotal}` });

          await expect(shoppingCartTotal).toBeVisible();
        });
      });
    });
  });

  test.describe('given one product in the shopping cart', () => {
    const product = products.at(0);

    test.beforeEach(async ({ page }) => {
      await expect(page.getByTestId('shopping-cart-list-item')).toHaveCount(0);
      const addToCartButton = page
        .getByRole('listitem')
        .filter({ hasText: product.title })
        .getByRole('button')
        .filter({ hasText: 'Add to cart' })
        .first();

      await addToCartButton.click();

      const shoppingCartItem = page
        .getByTestId('shopping-cart-list-item')
        .getByRole('heading', { name: product.title });

      await expect(shoppingCartItem).toBeVisible();
    });

    test.describe(`when remove button is clicked`, () => {
      test.beforeEach(async ({ page }) => {
        const removeButton = page.getByRole('button', { name: 'Remove' });

        await removeButton.click();
      });

      test(`then removes the product from the shopping cart`, async ({
        page,
      }) => {
        const shoppingCartItem = page
          .getByTestId('shopping-cart-list-item')
          .getByRole('heading', { name: product.title });

        await expect(shoppingCartItem).toHaveCount(0);
      });

      test(`then displays the correct total (0.00)`, async ({ page }) => {
        const shoppingCartTotal = page
          .getByTestId('shopping-cart')
          .filter({ hasText: `Total price: 0.00 $` });

        await expect(shoppingCartTotal).toBeVisible();
      });
    });
  });
});
