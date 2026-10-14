import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

export const test = base.extend({
  // page: async ({ page }, use) => {
  //   await page.route(/googlesyndication\.com|doubleclick\.net/, (route) =>
  //     route.abort(),
  //   );
  //   await use(page);
  // },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from "@playwright/test";
