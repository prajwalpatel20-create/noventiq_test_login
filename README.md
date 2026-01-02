# Login Page Automation - Playwright Test Framework

A scalable and maintainable Playwright test automation framework for testing login functionality.

## 📋 Project Overview

This project automates login page testing using Playwright with TypeScript. It follows the Page Object Model (POM) design pattern with Page Object Manager, custom fixtures, and data-driven testing approach.

## 🏗️ Project Structure

```
noventiq_test_login/
├── actions/                      # Reusable web action utilities
│   └── webActions.ts             # Common browser interactions (click, fill, getText, etc.)
├── fixtures/                     # Playwright custom fixtures
│   └── fixtures.ts               # Page Object Manager fixture setup
├── pages/                        # Page Object Models
│   ├── basePage.ts               # Base page with common methods
│   ├── loginPage.ts              # Login page actions and locators
│   ├── homePage.ts               # Home/Success page actions and locators
│   └── pageObjectManager.ts      # Centralized page object management
├── tests/                        # Test files
│   ├── baseTest.ts               # Extended test with custom fixtures
│   └── loginPage.spec.ts         # Login test cases (11 tests)
├── test-data/                    # Test data files
│   └── testData.json             # Data-driven test inputs (organized by page)
├── utils/                        # Utility functions
│   └── env.ts                    # Environment variable management
├── playwright-report/            # HTML test reports (generated)
├── test-results/                 # Test artifacts (generated)
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies and scripts
├── .env.dev                      # Development environment variables (gitignored)
├── .env.uat                      # UAT environment variables (gitignored)
└── README.md                     # Project documentation
```

## 🚀 Prerequisites

- **Node.js:** Version 18 or higher
- **npm:** Comes with Node.js

## 📥 Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd noventiq_test_login
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Install Playwright browsers:**

    ```bash
    npx playwright install
    ```

4. **Create environment file:**

    Create a `.env.dev` file in the root directory with the following variables:

    ```
    BASE_URL=<application-base-url>
    LOGIN_URL=<login-page-url>
    USERNAME=<valid-username>
    PASSWORD=<valid-password>
    ```

    > **Note:** Environment files (`.env.*`) are gitignored for security. You must create these files locally with the appropriate credentials.

## 🧪 Running Tests

### Run all tests (default environment: dev)

```bash
npm test
```

### Run tests by environment

```bash
# Development environment
npm run test:dev

# UAT environment
npm run test:uat
```

### Run tests by tag

```bash
# Run only negative test cases
npm run test:negative

# Run only positive test cases
npm run test:positive
```

### Run tests in specific browser

```bash
# Chromium only
npm run test:chromium

# Firefox only
npm run test:firefox

# WebKit (Safari) only
npm run test:webkit
```

### Run tests in headed mode (with browser UI)

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Run tests with Playwright UI

```bash
npm run test:ui
```

## 📊 Test Reports

### View HTML Report

After running tests, view the HTML report:

```bash
npm run report
```

Reports are generated in the `playwright-report/` directory.

### Test Results

- **HTML Report:** `playwright-report/index.html`
- **JSON Results:** `test-results/results.json`
- **Screenshots:** Captured on failure in `test-results/`
- **Videos:** Retained on failure in `test-results/`

## 📝 Test Cases

This project includes **11 functional test cases** (5 negative + 6 positive):

### Negative Test Cases (`@negative`)

| ID    | Test Case         | Description                                        |
| ----- | ----------------- | -------------------------------------------------- |
| TC-01 | Empty credentials | Error when both username and password are empty    |
| TC-02 | Invalid username  | Error when username is invalid, password empty     |
| TC-03 | Empty password    | Error when username is correct, password empty     |
| TC-04 | Empty username    | Error when username is empty, password correct     |
| TC-05 | Wrong password    | Error when username is correct, password incorrect |

### Positive Test Cases (`@positive`)

| ID    | Test Case                 | Description                                               |
| ----- | ------------------------- | --------------------------------------------------------- |
| TC-06 | Successful login          | Verify login with valid credentials shows success heading |
| TC-07 | URL verification          | Verify correct URL after successful login                 |
| TC-08 | Page title                | Verify correct page title after login                     |
| TC-09 | Success message           | Verify congratulations message after login                |
| TC-10 | Logout button             | Verify logout button is visible after login               |
| TC-11 | Complete login validation | Comprehensive login verification (soft assertions)        |

## 🔧 Configuration

### Environment Variables

Credentials and URLs are stored securely in environment files (`.env.dev`, `.env.uat`) which are gitignored.

| Variable    | Description          |
| ----------- | -------------------- |
| `BASE_URL`  | Application base URL |
| `LOGIN_URL` | Login page URL       |
| `USERNAME`  | Valid username       |
| `PASSWORD`  | Valid password       |

### Playwright Configuration (`playwright.config.ts`)

- **Test Timeout:** 30 seconds
- **Retries:** 1 (local), 2 (CI)
- **Browsers:** Chromium, Firefox, WebKit
- **Screenshots:** On failure only
- **Video:** Retained on failure
- **Trace:** On first retry

## 🏛️ Framework Design

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Test Layer                           │
│              (loginPage.spec.ts + baseTest.ts)              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Fixtures Layer                         │
│                       (fixtures.ts)                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  Page Object Manager                        │
│                  (pageObjectManager.ts)                     │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│    LoginPage    │ │    HomePage     │ │    BasePage     │
└─────────────────┘ └─────────────────┘ └─────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      WebActions                             │
│        (Reusable browser interactions with waits)           │
└─────────────────────────────────────────────────────────────┘
```

### Key Features

- ✅ TypeScript for type safety
- ✅ Page Object Model with Page Object Manager
- ✅ Custom Playwright fixtures for dependency injection
- ✅ Data-driven testing with JSON test data
- ✅ Environment-based configuration (dev, uat)
- ✅ Secure credential management via .env files
- ✅ Reusable WebActions utility class
- ✅ Test tagging (@positive, @negative)
- ✅ Soft assertions for comprehensive validations
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ HTML and JSON reports
- ✅ Screenshot and video on failure

## 📚 Available Scripts

| Script                  | Description                     |
| ----------------------- | ------------------------------- |
| `npm test`              | Run all tests                   |
| `npm run test:dev`      | Run tests in dev environment    |
| `npm run test:uat`      | Run tests in UAT environment    |
| `npm run test:negative` | Run only @negative tagged tests |
| `npm run test:positive` | Run only @positive tagged tests |
| `npm run test:chromium` | Run tests in Chromium only      |
| `npm run test:firefox`  | Run tests in Firefox only       |
| `npm run test:webkit`   | Run tests in WebKit only        |
| `npm run test:headed`   | Run tests with visible browser  |
| `npm run test:debug`    | Run tests in debug mode         |
| `npm run test:ui`       | Open Playwright UI mode         |
| `npm run report`        | Open HTML test report           |

## 📄 License

This project is licensed under the ISC License.
