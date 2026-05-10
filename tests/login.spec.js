const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginpage');

test('Login Test', async ({ page }) => {

  const login = new LoginPage(page);

  // Step 1: open website
  await login.open();

  // Step 2: login
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await expect(page.locator('.title')).toHaveText('Products');

   

});