import { test, expect } from '@playwright/test';

test('login and add product to cart', async ({ page }) => {

  // Navigate to login page
  await page.goto('/');

  // Enter valid credentials
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify user is on Products page (URL + text)
  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();

  // Add first product to cart
  const firstProductButton = page
    .locator('.inventory_item')
    .first()
    .getByRole('button', { name: /add to cart/i });

  await firstProductButton.click();

  // Verify button changed to "Remove"
  await expect(
    page.locator('.inventory_item').first().getByRole('button')
  ).toHaveText(/remove/i);

  // Verify cart badge shows 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

