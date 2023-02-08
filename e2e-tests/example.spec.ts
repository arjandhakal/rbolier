import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await page.getByRole('button', { name: 'count+' }).click();
  await page.getByRole('button', { name: 'count+' }).click();
  await page.getByRole('button', { name: 'count+' }).click();
  await expect(page.getByText('3')).toBeVisible();
});
