export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('[data-qa="login-email"]');
    this.password = page.locator('[data-qa="login-password"]');
    this.loginBtn = page.locator('[data-qa="login-button"]');
    this.errorMessage = page.getByText("Your email or password is incorrect!");
  }

  async goto() {
    await this.page.goto("/login");
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}
