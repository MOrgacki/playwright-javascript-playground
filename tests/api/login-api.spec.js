import { test, expect } from "@playwright/test";
require("dotenv").config();

test.describe("API negative login", () => {
  test("login with non existing user and wrong password", async ({
    request,
  }) => {
    const data = {
      type: "LOGIN",
      username: "asddas",
      password: "asdads",
      remember: true,
    };
    const login = await request.post("/login", { data });
    console.log(login);
    expect(login.status()).toEqual(401);
  });

  test("login with existing user and wrong password", async ({ request }) => {
    const data = {
      type: "LOGIN",
      username: process.env.NAME,
      password: "asdads",
      remember: true,
    };
    const login = await request.post("/login", { data });
    expect(login.status()).toEqual(401);
  });

  test("login with empty username and password", async ({ request }) => {
    const data = {
      type: "LOGIN",
      username: "",
      password: "",
      remember: true,
    };

    const login = await request.post("/login", { data });
    expect(login.status()).toEqual(400);
  });

  test("login with valid username and empty password", async ({ request }) => {
    const data = {
      type: "LOGIN",
      username: process.env.NAME,
      password: "",
      remember: true,
    };

    const login = await request.post("/login", { data });
    expect(login.status()).toEqual(400);
  });

  test("login with non existing endpoint", async ({ request }) => {
    const login = await request.get("/loginadsad");
    expect(login.status()).toEqual(404);
  });
});

test.describe("API positive login", () => {
  test("login with valid user data", async ({ request }) => {
    const data = {
      type: "LOGIN",
      username: process.env.NAME,
      password: process.env.PASSWORD,
      remember: true,
    };
    const login = await request.post("/login", { data });
    expect(login.status()).toEqual(200);
  });
  test("login with valid username and missing 'type' field", async ({
    request,
  }) => {
    const data = {
      username: process.env.NAME,
      password: process.env.PASSWORD,
      remember: true,
    };

    const login = await request.post("/login", { data });
    expect(login.status()).toEqual(200);
  });

  test("login with valid user and incorrect 'remember' value", async ({
    request,
  }) => {
    const data = {
      type: "LOGIN",
      username: process.env.NAME,
      password: process.env.PASSWORD,
      remember: "test",
    };

    const login = await request.post("/login", { data });
    expect(login.status()).toEqual(200);
  });
});
