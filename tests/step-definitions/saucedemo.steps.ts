import { Given, When, Then } from '@cucumber/cucumber';
//import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I open the Saucedemo website', async function () {
  await this.page.goto('/');
});

When('I login with valid credentials', async function () {
  await this.page.getByPlaceholder('Username').fill('standard_user');
  await this.page.getByPlaceholder('Password').fill('secret_sauce');
  await this.page.getByRole('button', { name: 'Login' }).click();

  await expect(this.page).toHaveURL(/.*inventory\.html/);
  await expect(this.page.getByText('Products')).toBeVisible();
});

When('I add the first product to the cart', async function () {
  const firstProductButton = this.page
    .locator('.inventory_item')
    .first()
    .getByRole('button', { name: /add to cart/i });

  await firstProductButton.click();
});

Then('the cart should show 1 item', async function () {
  await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
});
