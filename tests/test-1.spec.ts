import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/");
  await page.getByRole("link", { name: " Signup / Login" }).click();
  await page.getByRole("heading", { name: "Login to your account" }).click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .click();
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .click();
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .fill("suve@gmail.com");
  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .press("ArrowDown");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("suvendu89");
  await page.getByRole("button", { name: "Login" }).click();
});
