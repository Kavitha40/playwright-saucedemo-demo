import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;

Before(async function (this: any) {
  browser = await chromium.launch({ headless: false }); // Set to true for CI
  const context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function (this: any, { result }) {
  // 5) Screenshot for failed scenarios
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
  await this.page.close();
  await browser.close();
});