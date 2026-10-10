# AutomationExercise-Products

A Playwright-based UI automation suite for validating login, signup, account lifecycle, and logout flows against the public Automation Exercise website.

## Overview

This repository is a browser test project, not an application server or API service. It automates the user journeys exposed by the Automation Exercise demo site and verifies that the public web flows behave as expected in a real browser.

The tests are written with Playwright Test and organized around the Page Object Model. Each page class encapsulates selectors and actions for a screen, while the tests focus on user behavior and validation outcomes. The suite covers authentication flows, duplicate account validation, and account deletion.

## Key Features

- Login flow validation for valid and invalid credentials
- Signup flow validation for new users
- Duplicate email validation before account creation
- Logout verification
- Account deletion validation after registration
- Reusable page objects for Home, Login, and Signup screens
- Centralized test data generation for unique user accounts
- CI execution through GitHub Actions on push and pull request events

## Tech Stack

- JavaScript as the implementation language
- CommonJS module format (`"type": "commonjs"` in `package.json`)
- Playwright Test for browser automation and assertions
- Node.js LTS in CI (`actions/setup-node@v4` with `node-version: lts/*`)
- dotenv for loading environment variables from `.env`
- GitHub Actions for automated test execution

## Architecture

The project is structured around a thin test layer and a page model.

- `tests/auth/` contains scenario-based tests for authentication flows.
- `pages/` contains page classes that define UI selectors and actions:
  - `HomePage.js` handles navigation and authentication state checks.
  - `LoginPage.js` handles login and signup form interactions.
  - `SignUpPage.js` handles the registration form and completion flow.
- `fixtures/PageFixture.js` extends Playwright's base test fixture and injects page objects into tests.
- `utils/testData.js` creates unique user payloads for test data.
- `playwright.config.js` configures the base URL, timeout values, browser project, and reporting.
- `.env` loads credentials used by the login tests.

The request flow is straightforward:

1. A test uses a fixture to receive `homePage`, `loginPage`, and `signupPage` instances.
2. The test navigates to the Automation Exercise site through the page object API.
3. The page object fills fields, clicks actions, and waits for the expected UI state.
4. Assertions confirm whether the browser displays the expected success or error message.
5. Results and artifacts are captured through Playwright's HTML and screenshot reporting.

## Project Structure

```text
.
├── .env
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── PageFixture.js
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SignUpPage.js
├── test-results/
├── tests/
│   └── auth/
│       ├── login.spec.js
│       └── signup.spec.js
├── utils/
│   └── testData.js
├── .gitignore
├── package-lock.json
├── package.json
├── PLAN.md
├── playwright-report/
├── playwright.config.js
├── README.md
└── .DS_Store
```

- `.env`: local environment variables for authentication credentials.
- `.github/workflows/playwright.yml`: CI workflow that installs Playwright and runs the suite.
- `fixtures/PageFixture.js`: Playwright fixture wiring for shared page objects.
- `pages/`: page object classes for the UI under test.
- `tests/auth/`: authentication-related Playwright test specs.
- `utils/testData.js`: helper for generating unique users used in signup tests.
- `playwright.config.js`: Playwright configuration for base URL, timeout, and browser settings.
- `playwright-report/`: generated HTML report from test runs.
- `test-results/`: screenshot and trace artifacts for failed runs.
- `PLAN.md`: project planning notes for the learning workflow.

## Prerequisites

- Node.js LTS
- npm
- A working browser environment for Playwright
- Access to the public Automation Exercise website
- Environment variables for the login account (`LOGIN_EMAIL`, `LOGIN_PASSWORD`, `LOGIN_NAME`)

The repository's CI workflow installs Playwright browser dependencies with:

```bash
npx playwright install --with-deps
```

## Installation and Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd AutomationExercise-Products
```

2. Install dependencies:

```bash
npm ci
```

3. Install Playwright browser binaries and OS dependencies:

```bash
npx playwright install --with-deps
```

4. Configure environment variables in a local `.env` file:

```bash
LOGIN_EMAIL=user@example.com
LOGIN_PASSWORD=your-password
LOGIN_NAME=Example User
```

5. Confirm the default base URL used by the project:

```bash
https://automationexercise.com
```

This value is defined in `playwright.config.js` and can be overridden with the `BASE_URL` environment variable.

## Configuration

The project reads environment variables from `.env` through `dotenv/config` in `playwright.config.js`.

| Name | Description | Required | Default / Example |
| --- | --- | --- | --- |
| `BASE_URL` | Base URL for the site under test | Optional | `https://automationexercise.com` |
| `LOGIN_EMAIL` | Email used by login tests | Required for login scenarios | `user@example.com` |
| `LOGIN_PASSWORD` | Password used by login tests | Required for login scenarios | `your-password` |
| `LOGIN_NAME` | Expected display name used after successful login | Required for login scenarios | `Example User` |

## Usage

Run the full Playwright suite:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/auth/login.spec.js
```

Run a single browser project:

```bash
npx playwright test --project=chromium
```

Run in headed mode for local debugging:

```bash
npx playwright test --headed
```

The project uses a default browser configuration in `playwright.config.js` and writes HTML output to `playwright-report/`. Failed runs save screenshots and traces under `test-results/`.

Example flow covered by the suite:

```text
Home page -> Login page -> enter credentials -> verify Logged in as <name> -> logout -> confirm login page is shown
```

## API Reference

Not applicable. This repository does not expose an application API or backend service. The tests interact with the public Automation Exercise web UI through browser automation.

## Testing

The repository uses Playwright's built-in testing framework.

Current test coverage includes:

- Valid login credentials
- Invalid login credentials
- Logout validation
- New user registration
- Duplicate signup email validation
- Account deletion after registration

To run the suite locally:

```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

The GitHub Actions workflow runs the same command on push and pull request events for the main and master branches.

## Build and Deployment

This project does not build or deploy a production application. It is a browser test repository designed to execute in CI and locally against the Automation Exercise website.

The automated workflow in `.github/workflows/playwright.yml` does the following:

1. Checks out the repository
2. Installs Node.js LTS
3. Runs `npm ci`
4. Installs Playwright browsers with system dependencies
5. Executes `npx playwright test`
6. Uploads the HTML report as a CI artifact

## Contributing

There is no formal contribution policy in the repository yet. The current project structure suggests the following working conventions:

- Keep test scenarios in `tests/auth/`
- Keep page selectors and browser interactions in `pages/`
- Keep shared user generation logic in `utils/testData.js`
- Use the existing Playwright fixture pattern instead of duplicating page setup across tests
- Create small, focused test cases that validate one behavior at a time

Before opening a pull request, run the relevant Playwright suite and confirm the affected scenario passes locally.

## Troubleshooting or FAQ

### Why do the login tests fail?

The tests require the `LOGIN_EMAIL`, `LOGIN_PASSWORD`, and `LOGIN_NAME` environment variables to be set in `.env` and to match a valid Automation Exercise account.

### Why does Playwright report missing browser binaries?

Install the required browser dependencies:

```bash
npx playwright install --with-deps
```

### Why do page selectors fail after a site update?

The project uses DOM selectors in `pages/*.js`. If the Automation Exercise site changes its markup, the selector values in those page objects may need to be updated.

### Where are the test artifacts?

- HTML report: `playwright-report/`
- Failed run traces and screenshots: `test-results/`

## License

This repository does not currently include a license file in the root directory. Add the appropriate license before publishing or distributing the project.
