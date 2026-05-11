import LoginPage from '../pages/LoginPage.js';
import { Given, When, Then } from '@cucumber/cucumber';

const loginPage = new LoginPage();

Given('I open the login page', async function () {
  await loginPage.open(this.page);
});


When('I login with valid credentials', async function () {
  await this.loginPage.login('standard_user', 'secret_sauce');
});


Then('I should see the Products page', async function () {
  this.productsPage = new ProductsPage(this.page);
  // Add a check here, for example:
  // await expect(this.page).toHaveURL(/inventory.html/);
});
