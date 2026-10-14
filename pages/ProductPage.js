// pages/ProductPage.js
export class ProductPage {
  constructor(page) {
    this.page = page;

    // page validation
    this.allProductsTitle = page.getByRole("heading", { name: "All Products" });

    // search
    this.searchInput = page.getByPlaceholder("Search Product");
    this.searchButton = page.locator("#submit_search"); // icon-only button, no accessible name
    this.searchedProductsTitle = page.getByRole("heading", {
      name: "Searched Products",
    });

    // product list (the only CSS in the class)
    this.productCards = page.locator(".features_items .product-image-wrapper");
    this.productNames = page.locator(".features_items .productinfo p");

    // modal after Add to cart
    this.addedMessage = page.getByText("Your product has been added to cart.");
    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue Shopping",
    });
    this.viewCartLink = page.getByRole("link", { name: "View Cart" });
  }

  async goto() {
    await this.page.goto("/products");
  }

  productCard(name) {
    return this.productCards.filter({
      has: this.page.getByText(name, { exact: true }),
    });
  }

  async getProductNames() {
    await this.productCards.first().waitFor();
    return this.productNames.allTextContents();
  }

  async search(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async addToCart(name) {
    const card = this.productCard(name);
    await card.hover();
    await card.getByRole("link", { name: "Add to cart" }).last().click();
  }

  async viewProduct(name) {
    await this.productCard(name)
      .getByRole("link", { name: "View Product" })
      .click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async viewCart() {
    await this.viewCartLink.click();
  }
}
