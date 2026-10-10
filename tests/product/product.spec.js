import { test, expect } from "../../fixtures/PageFixture.js";

test.describe("/products validation", () => {
  test("goto /product page", async ({ productPage }) => {
    await productPage.goto();
    await expect(productPage.allProductsTitle).toBeVisible();
  });
});
