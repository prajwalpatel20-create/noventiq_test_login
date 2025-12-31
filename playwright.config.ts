import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

/**
 * Load environment variables based on TEST_ENV
 * Usage: TEST_ENV=dev npx playwright test
 * Default: dev
 */
const env = process.env.TEST_ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

/**
 * Playwright Test Configuration
 * Login Page Automation Framework
 * 
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    // Test directory
    testDir: './tests',

    // Run tests in files in parallel
    fullyParallel: true,

    // Fail the build on CI if you accidentally left test.only in the source code
    forbidOnly: !!process.env.CI,

    // Retry on CI only
    retries: process.env.CI ? 2 : 1,

    // Limit workers on CI
    workers: process.env.CI ? 1 : undefined,

    // Reporter configuration
    reporter: [
        ['list'],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
        ['json', { outputFile: 'test-results/results.json' }]
    ],

    // Test timeout
    timeout: 30000,

    // Expect timeout
    expect: {
        timeout: 5000
    },

    // Shared settings for all projects
    use: {
        // Base URL from environment
        baseURL: process.env.BASE_URL || 'https://practicetestautomation.com',

        // Collect trace when retrying the failed test
        trace: 'on-first-retry',

        // Screenshot on failure
        screenshot: 'only-on-failure',

        // Video recording
        video: 'retain-on-failure',

        // Action timeout
        actionTimeout: 10000,

        // Navigation timeout
        navigationTimeout: 15000,
    },

    // Configure projects for major browsers
    projects: [
        {
            name: 'chromium',
            use: { 
                ...devices['Desktop Chrome'],
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'firefox',
            use: { 
                ...devices['Desktop Firefox'],
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'webkit',
            use: { 
                ...devices['Desktop Safari'],
                viewport: { width: 1280, height: 720 },
            },
        },
    ],

    // Output folder for test artifacts
    outputDir: 'test-results',
});
