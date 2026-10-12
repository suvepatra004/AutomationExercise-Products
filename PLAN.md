| Project            | Type             | Status      | Owner  | Target Site            | Tooling                             |
| ------------------ | ---------------- | ----------- | ------ | ---------------------- | ----------------------------------- |
| AutomationExercise | Practice project | In Progress | Rative | automationexercise.com | Playwright, Node.js, GitHub Actions |

## Objective

This project provides a learning environment for Playwright UI automation against the public Automation Exercise demo site. It is a practice project and not the portfolio project; the objective is to build confidence in browser automation and test design before moving to the Shopify work that will serve as the primary portfolio artifact.

## Scope

### In Scope

- Playwright project initialization and browser setup
- Homepage load validation
- Login, signup, logout, and account deletion scenarios
- Role-based and text-based locator strategy for stable UI automation
- Form interaction patterns for fill, click, and select actions
- Basic web-first assertions and page-level abstraction through the Page Object Model
- Cross-browser execution configuration and CI execution

### Out of Scope

- Real payment processing or checkout completion for live commerce transactions
- Visual polish or production hardening for the demo site
- Framework architecture beyond the project's current learning goals
- Full coverage of all site flows outside the practice tasks listed below

## Success Criteria

- A Playwright test can launch a real browser, open the target site, and validate that the homepage loads successfully.
- The authentication flow covers valid login, invalid login, logout, and account creation.
- Duplicate email validation is exercised before account creation.
- The tests show stable locator strategy using role/text-based selectors rather than CSS or XPath where possible.
- Page objects are used to isolate selectors and interaction logic from the test case logic.
- The project establishes a cross-browser execution path and CI-compatible automation workflow.

## Progress Summary

| Phase   | Focus                                     | Tasks Done / Total | Status      |
| ------- | ----------------------------------------- | ------------------ | ----------- |
| Phase 1 | Initial browser automation baseline       | 5 / 5              | Complete    |
| Phase 2 | Form interaction and authentication flows | 4 / 4              | Complete    |
| Phase 3 | Waiting strategy and web-first assertions | 1 / 4              | In Progress |
| Phase 4 | Page Object Model                         | 1 / 4              | In Progress |
| Phase 5 | Cross-browser and CI execution            | 1 / 3              | Not Started |
| Phase 6 | Capstone flow and edge cases              | 0 / 3              | Not Started |

## Phase Details

### Phase 1: Initial Playwright baseline

- Goal: Establish a working browser automation project on the target site and confirm the test harness loads a page successfully.
- Tasks:
  - [x] Initialize the Playwright project and install required browsers.
  - [x] Review the generated project structure, including `tests/` and `playwright.config.js`.
  - [x] Implement the initial homepage load test.
  - [x] Validate the behavior in headed mode.
  - [x] Validate the behavior in headless mode.
- Exit Criteria: Playwright opens a real browser and interacts with the target page successfully.
- Deliverables:
  - Initial Playwright configuration
  - Smoke test for homepage validation
  - Local browser execution confirmation

### Phase 2: Form interaction and authentication flows

- **Goal**: Practice stable UI automation patterns for common form interactions and the primary signup and login workflows.
- **Tasks**:
  - [x] Document the rationale for role-based and text-based locators over CSS selectors and XPath in test notes or comments.
  - [x] Practice form interactions, including fill, click, and select actions.
  - [x] Implement signup flow test covering valid registration.
  - [x] Implement login flow tests covering both valid and invalid credentials.
- **Exit Criteria**: Real form fields are filled and submitted successfully by code, and the expected login or signup states are asserted.
- **Deliverables**:
  - Authentication flow tests
  - Form interaction coverage for common browser actions

### Phase 3: Waiting strategy and web-first assertions

- **Goal**: Replace manual timing assumptions with Playwright-native wait and assertion patterns.
- **Tasks**:
  - [ ] Validate Playwright auto-waiting behavior and document why manual `sleep` is rarely required.
  - [x] Validate web-first assertions such as `toBeVisible()` and `toHaveText()` for dynamic page states.
  - [ ] Implement product search test.
  - [ ] Implement add-to-cart test.
- **Exit Criteria**: Tests remain stable when page loads or UI updates occur within the normal timing envelope.
- **Deliverables**:
  - Search flow tests
  - Cart interaction tests

### Phase 4: Page Object Model

- **Goal**: Encapsulate selector logic and browser actions behind reusable page classes to improve maintainability and readability.
- **Tasks**:
  - [x] Validate the Page Object Model as the UI equivalent of the service layer used in the API project.
  - [ ] Build page classes for `HomePage`, `LoginPage`, `SignupPage`, `ProductsPage`, and `CartPage`.
  - [ ] Confirm all tests using page objects instead of raw locators (built this way from the start, so no rewrite is needed).
  - [ ] Implement one end-to-end flow using page objects only: search, add to cart, and view cart.
- **Exit Criteria**: Test files read like scenario definitions and the browser-specific details are centralized in page classes.
- **Deliverables**:
  - `HomePage`, `LoginPage`, `SignupPage`, `ProductsPage`, and `CartPage` page classes
  - Tests using the page object pattern

### Phase 5: Cross-browser and CI execution

- **Goal**: Confirm that the suite can run across the configured browser matrix and in CI with the required browser installation steps.
- **Tasks**:
  - [x] Review the `projects` configuration in `playwright.config.js`.
  - [ ] Run the full suite across Chromium, Firefox, and WebKit.
  - [ ] Add or validate the GitHub Actions workflow, including the Playwright browser install step required for CI.
- **Exit Criteria**: A single command executes the suite across the configured project matrix, and CI continues to run the browser-based checks reliably.
- **Deliverables**:
  - Cross-browser Playwright configuration
  - CI workflow for automated execution

### Phase 6: Capstone flow and edge cases

- **Goal**: Close the practice project with end-to-end coverage of the primary flow and representative regression scenarios.
- **Tasks**:
  - [ ] Automate the complete flow: browse, add to cart, and reach the checkout UI without processing real payment.
  - [ ] Add negative tests for invalid signup data and checkout attempts with an empty cart.
  - [ ] Complete a cleanup pass across earlier phases to ensure consistent coverage and stability.
- **Exit Criteria**: The practice project is functionally complete without requiring polish beyond the learning objective, and the project is ready to transition to the Shopify follow-on effort.
- **Deliverables**:
  - End-to-end flow coverage
  - Negative test coverage for high-risk or invalid user input paths

- **Goal**: Close the practice project with end-to-end coverage of the primary flow and representative regression scenarios.
- **Tasks**:
  - [ ] Automate the complete flow: browse, add to cart, and reach the checkout UI without processing real payment.
  - [ ] Add negative tests for invalid signup data and checkout attempts with an empty cart.
  - [ ] Complete a cleanup pass across earlier phases to ensure consistent coverage and stability.
- **Exit Criteria**: The practice project is functionally complete without requiring polish beyond the learning objective, and the project is ready to transition to the Shopify follow-on effort.
- **Deliverables**:
  - End-to-end flow coverage
  - Negative test coverage for high-risk or invalid user input paths

## Technical Approach

- Prefer _role-based_ and _text-based_ locators over CSS selectors and XPath where they provide clearer and more resilient UI targeting.
- Use Playwright auto-waiting and built-in retry behavior instead of manual timing delays unless it is required for a specific scenario.
- Use web-first assertions such as `toBeVisible()` and `toHaveText()` to validate the state of dynamic UI elements.
- Use the Page Object Model to separate test logic from page interaction logic and reduce duplication across test files.
- Configure execution through the Playwright `projects` matrix to support multi-browser validation.
- Keep tests isolated and scenario-based so the suite remains readable and easy to extend.

## Dependencies, Risks, and Assumptions

| Item                     | Status     | Notes                                                                                                               |
| ------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------- |
| Target site availability | Assumption | The public Automation Exercise site must remain available and stable for browser-based validation.                  |
| Browser binaries         | Dependency | Playwright browser installation is required for local and CI execution.                                             |
| CI environment variables | Dependency | Login tests rely on `LOGIN_EMAIL`, `LOGIN_PASSWORD`, and `LOGIN_NAME` values from the environment.                  |
| External site behavior   | Risk       | UI changes on the target site can require locator or assertion updates.                                             |
| Demo-site scope          | Assumption | The project remains a learning exercise and does not require production-level test architecture or deployment work. |

## Next Phase / Follow-On Work

The next phase is the Shopify Partner dev store project, which builds on the automation patterns established here. The same Page Object Model, locator strategy, wait handling, and cross-browser configuration will carry forward, along with API services and fixtures from the broader test stack. The follow-on objective is a hybrid API + UI test project that serves as the portfolio artifact.

## Revision History

| Version | Date | Change                                                                                                                           |
| ------- | ---- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | TBD  | Restructure the project plan into a standard, editable status tracker while preserving the original tasks and completion states. |
