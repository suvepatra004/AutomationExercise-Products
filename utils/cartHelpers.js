import { expect } from "@playwright/test";

export async function addProductsAndViewCart(productPage, names) {
  for (const [index, name] of names.entries()) {
    await productPage.addToCart(name);
    await expect(productPage.addedMessage).toBeVisible();

    if (index < names.length - 1) {
      await productPage.continueShopping();
      // Wait for the confirmation to close. Without this, the next
      // visibility check can pass on the previous confirmation.
      await expect(productPage.addedMessage).toBeHidden();
    } else {
      await productPage.viewCart();
    }
  }
}
