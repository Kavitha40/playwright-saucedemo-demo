import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';

Given('I open the SauceDemo website', async function () {
  // MUST pass 'this.page' inside the brackets
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('I login with valid credentials', async function () {
  await this.loginPage.login('standard_user', 'secret_sauce');
});


Then('I should see the Products page', async function () {
  this.productsPage = new ProductsPage(this.page);
  // Add a check here, for example:
  // await expect(this.page).toHaveURL(/inventory.html/);
});
