import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from 'playwright';

Given('I open the Playwright homepage', async function () {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  this.page = await context.newPage();
  await this.page.goto('https://playwright.dev');
});

Then('the title should contain Playwright', async function () {
  const title = await this.page.title();
  expect(title).toContain('Playwright');
});
