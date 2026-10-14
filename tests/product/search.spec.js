import { test, expect } from "../../fixtures/PageFixture.js";

test.describe("search product validation", () => {
  test("search shows the matching product in the results", async ({
    productPage,
  }) => {
    await productPage.goto();
    const [productName] = await productPage.getProductNames();

    await productPage.search(productName);

    await expect(productPage.searchedProductsTitle).toBeVisible();
    await expect(productPage.productCard(productName)).toBeVisible();
  });
});
