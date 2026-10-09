import { test as base } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
});

export { expect } from "@playwright/test";
