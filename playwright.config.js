// @ts-check
import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,

  timeout: 60000,
  expect: { timeout: 10000 },

  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    baseURL: process.env.BASE_URL || "https://automationexercise.com",
    actionTimeout: 15000,
    navigationTimeout: 30000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Enable these when cross-browser testing is needed:
    // { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    // { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
