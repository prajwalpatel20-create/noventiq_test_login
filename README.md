# Login Page Automation - Playwright Test Framework

A scalable and maintainable Playwright test automation framework for testing the login functionality at [Practice Test Automation](https://practicetestautomation.com/practice-test-login/).

## 📋 Project Overview

This project automates the login page testing using Playwright with TypeScript. It follows the Page Object Model (POM) design pattern for better maintainability and scalability.

### Test Application
- **URL:** https://practicetestautomation.com/practice-test-login/
- **Valid Username:** `student`
- **Valid Password:** `Password123`

## 🏗️ Project Structure

```
noventiq_test_login/
├── pages/                    # Page Object Models
│   ├── LoginPage.ts          # Login page actions and locators
│   ├── SuccessPage.ts        # Success page actions and locators
│   └── index.ts              # Page exports
├── tests/                    # Test files
│   └── login.spec.ts         # Login test cases (10 tests)
├── docs/                     # Documentation
│   └── TEST_CASES.md         # Detailed test cases documentation
├── playwright-report/        # HTML test reports (generated)
├── test-results/             # Test artifacts (generated)
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## 🚀 Prerequisites

- **Node.js:** Version 18 or higher
- **npm:** Comes with Node.js

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prajwalpatel20-create/noventiq_test_login.git
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

## 🧪 Running Tests

### Run all tests (all browsers)
```bash
npm test
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

This project includes **10 functional test cases** (5 positive + 5 negative):

### Positive Test Cases
| ID | Test Case | Status |
|----|-----------|--------|
| TC_001 | Successful login with valid credentials | ✅ Automated |
| TC_002 | Login page elements display correctly | ✅ Automated |
| TC_003 | Logout functionality after login | ✅ Automated |
| TC_004 | Congratulations message after login | ✅ Automated |
| TC_005 | Input fields accept text entry | ✅ Automated |

### Negative Test Cases
| ID | Test Case | Status |
|----|-----------|--------|
| TC_006 | Error for invalid username | ✅ Automated |
| TC_007 | Error for invalid password | ✅ Automated |
| TC_008 | Error when username is empty | ✅ Automated |
| TC_009 | Error when password is empty | ✅ Automated |
| TC_010 | Error when both fields are empty | ✅ Automated |

> 📄 For detailed test case documentation, see [docs/TEST_CASES.md](docs/TEST_CASES.md)

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Test Timeout:** 30 seconds
- **Retries:** 1 (local), 2 (CI)
- **Browsers:** Chromium, Firefox, WebKit
- **Screenshots:** On failure only
- **Video:** Retained on failure
- **Trace:** On first retry

## 🏛️ Framework Design

### Page Object Model (POM)
The framework uses Page Object Model for:
- **Separation of concerns:** Locators and actions are separated from tests
- **Reusability:** Page methods can be reused across multiple tests
- **Maintainability:** Changes to UI require updates in one place only

### Key Features
- ✅ TypeScript for type safety
- ✅ Page Object Model design pattern
- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ HTML and JSON reports
- ✅ Screenshot and video on failure
- ✅ Configurable timeouts and retries

## 📚 Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all tests in all browsers |
| `npm run test:chromium` | Run tests in Chromium only |
| `npm run test:firefox` | Run tests in Firefox only |
| `npm run test:webkit` | Run tests in WebKit only |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:debug` | Run tests in debug mode |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run report` | Open HTML test report |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-test`)
3. Commit changes (`git commit -m 'Add new test case'`)
4. Push to branch (`git push origin feature/new-test`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

**Author:** Prajwal Patel  
**Repository:** [GitHub](https://github.com/prajwalpatel20-create/noventiq_test_login)
