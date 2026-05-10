import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    // Selects the first 'Add to cart' button found on the page
    await this.page.locator('button[data-test^="add-to-cart"]').first().click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}

