"use strict";

require("dotenv").config();
const { test, expect } = require("./pages");

test.describe("positive login page cases", () => {
  const username = process.env.NAME;
  const password = process.env.PASSWORD;

  test("should successfully login user with valid credentials", async ({
    loginPage,
    page,
  }) => {
    const loginPageInstance = await loginPage(username, password);

    await loginPageInstance.goto();
    await loginPageInstance.login();

    await expect(page).toHaveURL("/");
  });

  test.skip("should remember user if 'Remember Me' is checked", async ({
    loginPage,
  }) => {
    const shouldRemember = true;
    // const storageRememberValue = "remember";

    const loginPageInstance = await loginPage(
      username,
      password,
      shouldRemember
    );
    await loginPageInstance.goto();
    await loginPageInstance.login();
    // const value = await loginPageInstance.checkStorage(storageRememberValue);

    // await expect(page).toHaveURL("/");
    // await expect(value).toBe(true);
  });
});

test.describe("negative login page cases", () => {
  test("should not login user with invalid credentials", async ({
    loginPage,
    page,
  }) => {
    const username = process.env.WRONG_NAME;
    const password = process.env.WRONG_PASSWORD;
    const loginPageInstance = await loginPage(username, password);
    await loginPageInstance.goto();
    await loginPageInstance.login();
    await expect(page).toHaveURL("/signin");
    await expect(loginPageInstance.errorMessage).toBeVisible();
  });

  test("should not login user with incorrect credentials provided", async ({
    loginPage,
    page,
  }) => {
    const username = "";
    const password = "a";
    const shouldRemember = true;
    const shouldLogin = false;

    const loginPageInstance = await loginPage(
      username,
      password,
      shouldRemember,
      shouldLogin
    );
    await loginPageInstance.goto();
    await loginPageInstance.login();
    await expect(page).toHaveURL("/signin");
    await expect(loginPageInstance.usernameError).toBeVisible();
    await expect(loginPageInstance.passwordError).toBeVisible();
  });
});
