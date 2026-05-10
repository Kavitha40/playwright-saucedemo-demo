import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
//import { LoginPage } from '../pages/LoginPage.js';
//import { ProductsPage } from '../pages/ProductsPage.js';
//import { CartPage } from '../pages/CartPage.js';
import { Given, When, Then } from '@cucumber/cucumber';
//import { LoginPage } from '../pages/LoginPage';
//import { ProductsPage } from '../pages/ProductsPage';
//import { CartPage } from '../pages/CartPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;

Given('the user is on the login page', async function (this: any) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('the user logs in with valid credentials', async function (this: any) {
  await loginPage.login('standard_user', 'secret_sauce');
  productsPage = new ProductsPage(this.page);
});

When('the user adds a product to the cart', async function (this: any) {
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
  cartPage = new CartPage(this.page);
});

Then('the product should appear in the cart', async function (this: any) {
  await cartPage.verifyItemInCart();
});
