export class CartPage {
  constructor(page) {
    this.page = page;

    // page validation
    this.shoppingCartTitle = page.getByText("Shopping Cart");
    this.cartEmptyMessage = page.getByText(
      "Cart is empty! Click here to buy products.",
    );

    // CartPage constructor
    this.cartTable = page.locator("#cart_info_table");
    this.cartRows = page.locator("#cart_info_table tbody tr");

    // row-level locators (used inside one cart row)
    this.rowPrice = page.locator(".cart_price p");
    this.rowQuantity = page.locator(".cart_quantity button");
    this.rowTotal = page.locator(".cart_total_price");

    // column lists (page-wide, so all the CSS stays in the constructor)
    this.productNames = page.locator("#cart_info_table .cart_description h4 a");
    this.productPrices = page.locator("#cart_info_table .cart_price p");
    this.productQuantities = page.locator(
      "#cart_info_table .cart_quantity button",
    );
    this.productTotals = page.locator("#cart_info_table .cart_total_price");

    // actions and states
    this.emptyCartMessage = page.getByText("Cart is empty!");

    // actions
    this.deleteItemButton = page.locator(".cart_quantity_delete");
    this.proceedToCheckoutButton = page.getByRole("link", {
      name: "Proceed To Checkout",
    });
    this.clickHereLink = page.getByRole("link", { name: "here" });
  }

  async goto() {
    await this.page.goto("/view_cart");
  }

  cartRow(name) {
    return this.cartRows.filter({
      has: this.page.getByText(name, { exact: true }),
    });
  }

  quantityOf(name) {
    return this.cartRow(name).locator(this.rowQuantity);
  }

  priceOf(name) {
    return this.cartRow(name).locator(this.rowPrice);
  }

  totalOf(name) {
    return this.cartRow(name).locator(this.rowTotal);
  }

  async getProductNames() {
    await this.cartRows.first().waitFor();
    return this.productNames.allTextContents();
  }

  async deleteItem(name) {
    await this.cartRow(name).locator(this.deleteItemButton).click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async clickHere() {
    await this.clickHereLink.click();
  }
}
