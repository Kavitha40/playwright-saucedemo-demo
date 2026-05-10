import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItem = this.page.locator('.cart_item');

  async verifyItemInCart() {
    await expect(this.cartItem).toBeVisible();
  }
}

