import { test, expect } from "../../fixtures/PageFixture.js";

test.describe("/login page validation", () => {
  test("Login with valid credentials", async ({
    homePage,
    loginPage,
    page,
  }) => {
    await homePage.goto();
    await homePage.openLoginPage();

    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    await expect(homePage.loggedInAsUser(process.env.LOGIN_NAME)).toBeVisible();
  });
  test("Login with Invalid credentials", async ({ homePage, loginPage }) => {
    await homePage.goto();
    await homePage.openLoginPage();

    await loginPage.login(`nouser_${Date.now()}@test.com`, "suvh89");
    await expect(loginPage.errorMessage).toBeVisible();
  });
  test("logout validation", async ({ homePage, loginPage, page }) => {
    await homePage.goto();
    await homePage.openLoginPage();

    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    await expect(homePage.loggedInAsUser(process.env.LOGIN_NAME)).toBeVisible();

    await homePage.logout();
    await expect(page).toHaveURL(/\/login$/);
  });
});
