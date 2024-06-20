const base = require("@playwright/test");
const { LoginPage } = require("./login-page");
require("dotenv").config();

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(
      (username, password, shouldRemember, shouldLogin) =>
        new LoginPage(page, username, password, shouldRemember, shouldLogin)
    );
  },
});

exports.expect = base.expect;
