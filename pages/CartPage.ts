import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page; // Explicitly declare the property

  constructor(page: Page) {
    this.page = page; // Manually assign it
  }

  async verifyItemInCart() {
    const item = this.page.locator('.cart_item');
    await expect(item).toBeVisible();
  }
}

