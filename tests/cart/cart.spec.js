import { test, expect } from "../../fixtures/PageFixture.js";
import { addProductsAndViewCart } from "../../utils/cartHelpers.js";

// Reads the first number in a text such as "Rs. 500" or "$1,200.50".
const toNumber = (text) =>
  Number(text.replace(/,/g, "").match(/\d+(\.\d+)?/)[0]);

// Every test gets a fresh browser context, so its guest cart starts empty.
test.describe("empty cart", () => {
  test("shows the empty cart message", async ({ cartPage }) => {
    await cartPage.goto();

    await expect(cartPage.emptyCartMessage).toBeVisible();
  });

  test("Click here opens the products page", async ({ cartPage, page }) => {
    await cartPage.goto();

    await cartPage.clickHere();

    await expect(page).toHaveURL(/\/products/);
  });
});

test.describe("cart with products", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.goto();
  });

  test("lists the added product with its price, quantity and total", async ({
    productPage,
    cartPage,
  }) => {
    const [name] = await productPage.getProductNames();

    await addProductsAndViewCart(productPage, [name]);

    await expect(cartPage.priceOf(name)).toBeVisible();
    await expect(cartPage.quantityOf(name)).toHaveText("1");
    await expect(cartPage.totalOf(name)).toBeVisible();
  });

  test("total equals price times quantity", async ({
    productPage,
    cartPage,
  }) => {
    const [name] = await productPage.getProductNames();

    await addProductsAndViewCart(productPage, [name, name]);

    const price = toNumber(await cartPage.priceOf(name).textContent());
    const quantity = toNumber(await cartPage.quantityOf(name).textContent());
    const total = toNumber(await cartPage.totalOf(name).textContent());

    expect(total).toBe(price * quantity);
  });

  test("deleting the only product shows the empty cart message", async ({
    productPage,
    cartPage,
  }) => {
    const [name] = await productPage.getProductNames();
    await addProductsAndViewCart(productPage, [name]);

    await cartPage.deleteItem(name);

    await expect(cartPage.cartRow(name)).toHaveCount(0);
    // VERIFY: the empty message appears right after deleting the last item
    await expect(cartPage.emptyCartMessage).toBeVisible();
  });

  test("deleting one of two products keeps the other", async ({
    productPage,
    cartPage,
  }) => {
    const [first, second] = await productPage.getProductNames();
    await addProductsAndViewCart(productPage, [first, second]);

    await cartPage.deleteItem(first);

    await expect(cartPage.cartRow(first)).toHaveCount(0);
    await expect(cartPage.cartRow(second)).toBeVisible();
  });

  test("cart keeps its products after leaving and returning", async ({
    productPage,
    cartPage,
  }) => {
    const [name] = await productPage.getProductNames();
    await addProductsAndViewCart(productPage, [name]);

    await productPage.goto();
    await cartPage.goto();

    await expect(cartPage.cartRow(name)).toBeVisible();
  });

  test("Proceed To Checkout is available when the cart has products", async ({
    productPage,
    cartPage,
  }) => {
    const [name] = await productPage.getProductNames();

    await addProductsAndViewCart(productPage, [name]);

    await expect(cartPage.proceedToCheckoutButton).toBeVisible();
  });
});
