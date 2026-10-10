export class CartPage {
  constructor(page) {
    this.page = page;

    // page validation
    this.shoppingCartTitle = page.getByText("Shopping Cart");
    this.cartEmptyMessage = page.getByText(
      "Cart is empty! Click here to buy products.",
    );

    // cart table / items
    this.cartTable = page.locator("#cart_info_table");
    this.cartItems = page.locator("#cart_info_table tbody tr");
    this.cartProductImage = page.locator("#cart_info_table tbody tr td img");
    this.cartProductName = page.locator(
      "#cart_info_table tbody tr td:nth-child(2) a",
    );
    this.cartProductPrice = page.locator(
      "#cart_info_table tbody tr td:nth-child(3)",
    );
    this.cartProductQuantity = page.locator(
      "#cart_info_table tbody tr td:nth-child(4) button",
    );
    this.cartTotalPrice = page.locator(
      "#cart_info_table tbody tr td:nth-child(5)",
    );

    // actions
    this.deleteItemButton = page.locator(".cart_quantity_delete");
    this.proceedToCheckoutButton = page.getByRole("link", {
      name: "Proceed To Checkout",
    });
    this.clickHereLink = page.getByRole("link", { name: "here" });
  }
}
