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
