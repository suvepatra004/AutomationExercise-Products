# Plan: Automation Exercise Page (UI Practice Project)

## What this project is for

This is a practice project, not a resume project. The goal is to get comfortable with Playwright UI automation quickly, before applying it properly to the Shopify project, which is the one that goes on your resume. No pressure to make this one polished.

Target site: automationexercise.com

## Phase 1 — First test, just to see it work

- [x] Playwright project initialized, browsers installed
- [x] Auto-generated project structure understood (`tests/`, `playwright.config.js`)
- [x] First test: homepage loads correctly
- [x] Headed run observed — actually watched the browser act
- [x] Headless run compared against the headed one

**Checkpoint:** you've seen Playwright open a real browser and interact with a real page.

## Phase 2 — Clicking, typing, and finding things on a page

- [x] Locator strategy understood — role/text-based preferred over CSS/XPath, and why
- [ ] Form interactions practiced: fill, click, select
- [ ] Signup flow test
- [ ] Login flow test, both correct and incorrect credentials

**Checkpoint:** you can get a real form filled out and submitted by code.

## Phase 3 — Waiting for things properly

- [ ] Playwright's auto-waiting behavior understood — why manual `sleep` is rarely needed
- [ ] Web-first assertions understood (`toBeVisible()`, `toHaveText()`) and why they fit a page that changes over time
- [ ] Product search test
- [ ] Add-to-cart test, including the cart count updating

**Checkpoint:** your tests don't break just because the page took a second longer to load.

## Phase 4 — Page Object Model (the UI version of what you already know)

- [ ] Page Object Model understood as the UI counterpart to the service layer from the API project
- [ ] Page classes built: `HomePage`, `LoginPage`, `ProductsPage`, `CartPage`
- [ ] Earlier tests rewritten to use page objects instead of raw locators
- [ ] One full flow test using only page objects: search → add to cart → view cart

**Checkpoint:** your test files read like plain English, and all the messy locator details live in one place per page.

## Phase 5 — Running across browsers

- [ ] `projects` config in `playwright.config.js` understood
- [ ] Full suite run across Chromium, Firefox, and WebKit
- [ ] (Optional) GitHub Actions workflow added — browser install step required this time, unlike the API project

**Checkpoint:** one command runs your whole suite on three browsers, not just one.

## Phase 6 — Capstone: full flow + edge cases

- [ ] Complete flow automated: browse → add to cart → checkout UI (no real payment on this site, that's expected)
- [ ] Negative tests added: invalid signup data, checkout attempted with an empty cart
- [ ] Cleanup pass across everything above

**Checkpoint:** this project is "done" — not polished, just functionally complete. Time to move to Shopify.

## What comes after this project

Once this is done, we move to the Shopify Partner dev store project. That one reuses everything here (Page Object Model, locators, waits, cross-browser) plus everything from the API project (services, fixtures), combined into hybrid API+UI tests — and that's the one that goes on the resume.
