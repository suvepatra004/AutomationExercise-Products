import { test, expect } from "../../fixtures/PageFixture.js";
import { addProductsAndViewCart } from "../../utils/cartHelpers.js";

test.describe("add to cart", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.goto();
  });

  test("shows a confirmation after adding a product", async ({
    productPage,
  }) => {
    const [name] = await productPage.getProductNames();

    await productPage.addToCart(name);

    await expect(productPage.addedMessage).toBeVisible();
  });

  test("Continue Shopping closes the confirmation and stays on the products page", async ({
    productPage,
    page,
  }) => {
    const [name] = await productPage.getProductNames();

    await productPage.addToCart(name);
    await expect(productPage.addedMessage).toBeVisible();
    await productPage.continueShopping();

    await expect(productPage.addedMessage).toBeHidden();
    await expect(page).toHaveURL(/\/products/);
  });

  test("View Cart opens the cart with the added product", async ({
    productPage,
    cartPage,
    page,
  }) => {
    const [name] = await productPage.getProductNames();

    await addProductsAndViewCart(productPage, [name]);

    await expect(page).toHaveURL(/view_cart/);
    await expect(cartPage.cartRow(name)).toBeVisible();
  });

  test("adding two different products shows both in the cart", async ({
    productPage,
    cartPage,
  }) => {
    const [first, second] = await productPage.getProductNames();

    await addProductsAndViewCart(productPage, [first, second]);

    await expect(cartPage.productNames).toHaveCount(2);
    await expect(cartPage.cartRow(first)).toBeVisible();
    await expect(cartPage.cartRow(second)).toBeVisible();
  });

  test("adding the same product twice increases its quantity", async ({
    productPage,
    cartPage,
  }) => {
    const [name] = await productPage.getProductNames();

    await addProductsAndViewCart(productPage, [name, name]);

    await expect(cartPage.cartRow(name)).toHaveCount(1);
    await expect(cartPage.quantityOf(name)).toHaveText("2");
  });
});
