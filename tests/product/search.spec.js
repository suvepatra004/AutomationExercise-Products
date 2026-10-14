import { test, expect } from "../../fixtures/PageFixture.js";

test.describe("search product validation", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.goto();
  });

  test("search shows the matching product in the results", async ({
    productPage,
  }) => {
    const [productName] = await productPage.getProductNames();

    await productPage.search(productName);

    await expect(productPage.searchedProductsTitle).toBeVisible();
    await expect(productPage.productCard(productName)).toBeVisible();
  });

  test("search by one word of the name finds the product", async ({
    productPage,
  }) => {
    const [productName] = await productPage.getProductNames();
    const firstWord = productName.split(" ")[0];

    await productPage.search(firstWord);

    await expect(productPage.searchedProductsTitle).toBeVisible();
    await expect(productPage.productCard(productName)).toBeVisible();
  });

  test("search ignores letter case", async ({ productPage }) => {
    const [productName] = await productPage.getProductNames();

    await productPage.search(productName.toLowerCase());

    await expect(productPage.searchedProductsTitle).toBeVisible();
    await expect(productPage.productCard(productName)).toBeVisible();
  });

  test("search with no match shows no products", async ({ productPage }) => {
    await productPage.search(`nomatch${Date.now()}`);

    await expect(productPage.searchedProductsTitle).toBeVisible();
    await expect(productPage.productCards).toHaveCount(0);
  });
});
