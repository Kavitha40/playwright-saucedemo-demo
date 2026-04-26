# Playwright Demo – SauceDemo E2E Test

This project contains an end-to-end Playwright test for the demo website https://www.saucedemo.com/.

## Scenario Covered
- Navigate to login page
- Login with valid credentials
- Verify Products page
- Add first product to cart
- Verify cart badge shows 1

## How to Run

```bash
npm install
npx playwright install
npx playwright test tests/saucedemo.spec.ts
