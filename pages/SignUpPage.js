// pages/SignupPage.js
export class SignUpPage {
  constructor(page) {
    this.page = page;

    // account information
    this.titleMr = page.locator("#id_gender1");
    this.password = page.locator('[data-qa="password"]');
    this.day = page.locator('[data-qa="days"]');
    this.month = page.locator('[data-qa="months"]');
    this.year = page.locator('[data-qa="years"]');

    // address information
    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address = page.locator('[data-qa="address"]');
    this.country = page.locator('[data-qa="country"]');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipcode = page.locator('[data-qa="zipcode"]');
    this.mobile = page.locator('[data-qa="mobile_number"]');
    this.createAccountBtn = page.locator('[data-qa="create-account"]');

    // account created page
    this.accountCreated = page.getByText("Account Created!");
    this.continueBtn = page.locator('[data-qa="continue-button"]');
  }

  async register(user) {
    await this.titleMr.check();
    await this.password.fill(user.password);
    await this.day.selectOption(user.day);
    await this.month.selectOption(user.month);
    await this.year.selectOption(user.year);
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.company.fill(user.company);
    await this.address.fill(user.address);
    await this.country.selectOption(user.country);
    await this.state.fill(user.state);
    await this.city.fill(user.city);
    await this.zipcode.fill(user.zipcode);
    await this.mobile.fill(user.mobile);
    await this.createAccountBtn.click();
  }

  async clickContinue() {
    await this.continueBtn.click();
  }
}
