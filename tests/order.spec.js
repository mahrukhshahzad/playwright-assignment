const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginpage');
const ProductPage = require('../pages/productpage');
const CartPage = require('../pages/CartPage');

test('Place Order Successfully', async ({ page }) => {

  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  // 1. Login
  await login.open();
  await login.login('standard_user', 'secret_sauce');

  // 2. Product add
  await product.addProduct();

  // 3. Cart open
  await product.openCart();

  // 4. Checkout
  await cart.checkout();

  // 5. Verify success
  
  await expect(page.locator('.complete-header')).toBeVisible({ timeout: 10000 });
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});