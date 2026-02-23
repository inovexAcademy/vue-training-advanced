import { expect, test } from '@playwright/test';

test('should allow chatting with Barack Olama', async ({ page }) => {
  await page.goto('localhost:5173/lama/1');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Chat with Barack Olama' }),
  ).toBeVisible();

  const chatMessages = page.locator('.chat-messages');
  await expect(chatMessages.locator('div')).toHaveCount(0);

  const chatInput = page.getByPlaceholder('Type a message...');
  await chatInput.fill('Hi Vue Training!');
  await chatInput.press('Enter');

  await expect(chatMessages.locator('.message-content')).toHaveCount(2);
  await expect(page.getByText('Hi Vue Training!')).toBeVisible();
  await expect(page.getByText('baah')).toBeVisible();

  // Second message
  await chatInput.fill('How are you?');
  await chatInput.press('Enter');

  await expect(chatMessages.locator('.message-content')).toHaveCount(4);
  await expect(page.getByText('How are you?')).toBeVisible();

  // Third message
  await chatInput.fill('Nice to meet you!');
  await chatInput.press('Enter');

  await expect(chatMessages.locator('.message-content')).toHaveCount(6);
  await expect(page.getByText('Nice to meet you!')).toBeVisible();
});
