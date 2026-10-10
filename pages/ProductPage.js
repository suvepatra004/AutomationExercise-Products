export class ProductPage {
  constructor(page) {
    this.page = page;
    // page validation
    this.allProductsTitle = page.getByRole("heading", { name: "All Products" });

    // search
    this.searchInput = page.locator("#search_product");
    this.searchButton = page.locator("#submit_search");
    this.searchedProductsTitle = page.getByRole("heading", {
      name: "Searched Products",
    });

    // product list
    this.productCards = page.locator(".features_items .product-image-wrapper");
    this.productNames = page.locator(".features_items .productinfo p");
    this.productPrices = page.locator(".features_items .productinfo h2");
    this.addToCartButtons = page
      .locator(".features_items a")
      .filter({ hasText: "Add to cart" });
    this.viewProductButtons = page
      .locator(".features_items a")
      .filter({ hasText: "View Product" });

    // first product example
    this.firstProductName = page
      .locator(".features_items .product-image-wrapper")
      .first()
      .locator(".productinfo p");
    this.firstProductPrice = page
      .locator(".features_items .product-image-wrapper")
      .first()
      .locator(".productinfo h2");
    this.firstProductAddToCart = page
      .locator(".features_items .product-image-wrapper")
      .first()
      .locator("a", { hasText: "Add to cart" });
    this.firstProductViewProduct = page
      .locator(".features_items .product-image-wrapper")
      .first()
      .locator("a", { hasText: "View Product" });

    // category / brands
    this.categoryTitle = page.getByRole("heading", { name: "Category" });
    this.womenCategory = page.getByRole("link", { name: "Women" });
    this.menCategory = page.getByRole("link", { name: "Men" });
    this.kidsCategory = page.getByRole("link", { name: "Kids" });
    this.brandsTitle = page.getByRole("heading", { name: "Brands" });
  }
}
