export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.signupBtn = 'data-qa="signup-button"';
    this.email = 'data-qa="signup-email"';
    this.password = 'data-qa="signup-password"';
  }

  async goto() {
    await this.page.goto("/signup");
  }

  
}
