import { test, expect } from '@playwright/test';

test('Home has correct title', async ({ page }) => {
  await page.goto('localhost:5173');

  await expect(page).toHaveTitle('LamaChat | Home');
});

test('Lama page has correct title', async ({ page }) => {
  await page.goto('localhost:5173/lama/1');

  await expect(page).toHaveTitle(`LamaChat | Chat with Barack Olama`);

  await page.goto('localhost:5173/lama/2');

  await expect(page).toHaveTitle(`LamaChat | Chat with Dalai Lama`);
});
