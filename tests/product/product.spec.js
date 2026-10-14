import { test, expect } from "../../fixtures/PageFixture.js";

test.describe("all products page", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.goto();
  });

  test("shows the All Products heading", async ({ productPage }) => {
    await expect(productPage.allProductsTitle).toBeVisible();
  });

  test("lists at least one product", async ({ productPage }) => {
    await expect(productPage.productCards.first()).toBeVisible();
  });

  test("every product card shows a name", async ({ productPage }) => {
    const names = await productPage.getProductNames();

    expect(names.length).toBeGreaterThan(0);
    for (const name of names) {
      expect(name.trim()).not.toBe("");
    }
  });

  test("View Product opens the product detail page", async ({
    productPage,
    page,
  }) => {
    const [name] = await productPage.getProductNames();

    await productPage.viewProduct(name);

    await expect(page).toHaveURL(/product_details/);
  });
});
