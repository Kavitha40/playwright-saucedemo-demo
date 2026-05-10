import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
// ✅ Correct for ESM
import { CustomWorld } from '../support/world.js'; 


Given('I am on {string}', async function (this: CustomWorld, url: string) {
  await this.page?.goto(url);
});

Then('the title should contain {string}', async function (this: CustomWorld, text: string) {
  const title = await this.page?.title();
  expect(title).toContain(text);
});
