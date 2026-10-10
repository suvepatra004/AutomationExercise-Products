// pages/HomePage.js
export class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = page.getByRole("link", { name: "Signup / Login" });
    this.logoutLink = page.getByRole("link", { name: "Logout" });
    this.deleteAccountLink = page.getByRole("link", {
      name: "Delete Account",
    });
    this.accountDeleted = page.getByText("Account Deleted!");
    this.loggedInAs = page.getByText("Logged in as");

    this.homeLink = page.getByRole("link", { name: "Home" });
    this.productsLink = page.getByRole("link", { name: "Products" });
    this.cartLink = page.getByRole("link", { name: "Cart" });
    this.testCasesLink = page.getByRole("link", {
      name: "Test Cases",
      exact: true,
    });
    this.apiTestingLink = page.getByRole("link", { name: "API Testing" });
    this.videoTutorialsLink = page.getByRole("link", {
      name: "Video Tutorials",
    });
    this.contactUsLink = page.getByRole("link", { name: "Contact us" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async openLoginPage() {
    await this.signupLoginLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }

  loggedInAsUser(name) {
    return this.page.getByText(`Logged in as ${name}`);
  }
}
