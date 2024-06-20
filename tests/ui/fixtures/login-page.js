export class LoginPage {
  /**
   * Creates an instance of LoginPage.
   * @param {import('@playwright/test').Page} page
   * @param {string} username
   * @param {string} password
   * @memberof LoginPage
   */
  constructor(
    page,
    username,
    password,
    shouldRemember = false,
    shouldLogin = true
  ) {
    this.page = page;
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.locator("#password");
    this.checkboxRememberMe = this.page.locator(
      '[data-test="signin-remember-me"]'
    );
    this.loginButton = this.page.locator('[data-test="signin-submit"]');
    this.errorMessage = this.page.locator('[data-test="signin-error"]');

    this.usernameError = this.page.locator("#username-helper-text");
    this.passwordError = this.page.locator("#password-helper-text");

    this.username = username;
    this.password = password;
    this.shouldRemember = shouldRemember;
    this.shouldLogin = shouldLogin;
  }

  async goto() {
    await this.page.goto("/signin");
  }

  async login() {
    await this.usernameInput.fill(this.username);
    await this.passwordInput.fill(this.password);
    this.shouldRemember ? await this.checkboxRememberMe.click() : null;
    console.log(this.shouldLogin);
    this.shouldLogin ? await this.loginButton.click() : null;
  }

  // TODO: ADD CHECKSTORAGE METHOD
  // /**
  //  *
  //  *
  //  * @param {string} item
  //  * @return {boolean}
  //  * @memberof LoginPage
  //  */
  // async checkStorage(item) {
  //   const value = await this.page.evaluate((key) => {
  //     const itemValue = localStorage.getItem(key);
  //   }, item);
  //   return value;
  // }
}
