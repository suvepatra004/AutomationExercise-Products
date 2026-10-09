import { test, expect } from "../../fixtures/PageFixture.js";
import { createUser } from "../../utils/testData.js";

test.describe("/signup validation", () => {
  test("Register a new user", async ({
    homePage,
    signupPage,
    loginPage,
    page,
  }) => {
    const user = createUser();

    await homePage.goto();
    await homePage.openLoginPage();
    await loginPage.startSignup(user.name, user.email);
    await page.waitForTimeout(3000);

    await signupPage.register(user);
    await expect(signupPage.accountCreated).toBeVisible();
    await page.waitForTimeout(3000);
  });

  test("Already exists user validation", async ({
    homePage,
    loginPage,
    page,
  }) => {
    const user = createUser();

    await homePage.goto();
    await homePage.openLoginPage();
    await loginPage.startSignup(user.name, process.env.EMAIL);
    await expect(loginPage.existingEmailError).toBeVisible();
  });
});
