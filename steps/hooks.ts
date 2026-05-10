import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';

let browser: Browser;

Before(async function () {
    // These two lines MUST be inside the Before function
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    
    this.page = await context.newPage();
});


After(async function ({ result }) {
    if (result?.status === Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
    if (this.page) await this.page.close();
    if (browser) await browser.close();
});
