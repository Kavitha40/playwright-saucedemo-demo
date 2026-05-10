import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifyItemInCart() {
    const item = this.page.locator('.cart_item');
    await expect(item).toBeVisible();
  }
}


