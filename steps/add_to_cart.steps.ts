import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage.js';     // Added .js
import { ProductsPage } from '../pages/ProductsPage.js'; // Added .js
import { CartPage } from '../pages/CartPage.js';         // Added .js


let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;

Given('the user is on the login page', async function (this: any) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});
When('the user adds a product to the cart', async function (this: any) {
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
  cartPage = new CartPage(this.page);
});

Then('the product should appear in the cart', async function (this: any) {
  await cartPage.verifyItemInCart();
});
