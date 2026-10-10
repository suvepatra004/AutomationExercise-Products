import { test, expect } from "../../fixtures/PageFixture.js";

test.describe("Validation of Navigation options", () => {
  test("Test Cases nav", async ({ homePage }) => {
    await homePage.goto();

    await homePage.testCasesLink.click();
    await expect(homePage.page).toHaveURL(/.*\/test_cases/);
  });
});
