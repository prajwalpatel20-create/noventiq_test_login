import { ENV_VAR } from '../utils/env';
import { expect, test } from './baseTest';
import testData from '../test-data/testData.json';

const { wrongUsername, wrongPassword, emptyUsername, emptyPassword } = testData.loginPage.invalidLogin;
const { url, pageTitle, loginSuccessMessage, loginSuccessHeading } = testData.loginPage.validLogin;
const { invalidUsernameMsg, invalidPasswordMsg } = testData.loginPage.errorMessages;
const correctUsername = ENV_VAR.USERNAME;
const correctPassword = ENV_VAR.PASSWORD;

test.describe('Login Page', () => {
    test.beforeEach(async ({ pageObjectManager }) => {
        await pageObjectManager.loginPage.navigateToUrl(ENV_VAR.LOGIN_URL);
    });

    test('tc - 01: Verify error message when both username and password are empty @negative', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(emptyUsername, emptyPassword);
        const errorMessage = await pageObjectManager.loginPage.getErrorMessage();
        expect(errorMessage).toBe(invalidUsernameMsg);
    });

    test('tc - 02: Verify error message when username is invalid and password is empty @negative', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(wrongUsername, emptyPassword);
        const errorMessage = await pageObjectManager.loginPage.getErrorMessage();
        expect(errorMessage).toBe(invalidUsernameMsg);
    });

    test('tc - 03: Verify error message when username is correct but password is empty @negative', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(correctUsername, emptyPassword);
        const errorMessage = await pageObjectManager.loginPage.getErrorMessage();
        expect(errorMessage).toBe(invalidPasswordMsg);
    });

    test('tc - 04: Verify error message when username is empty and password is correct @negative', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(emptyUsername, correctPassword);
        const errorMessage = await pageObjectManager.loginPage.getErrorMessage();
        expect(errorMessage).toBe(invalidUsernameMsg);
    });

    test('tc - 05: Verify error message when username is correct but password is incorrect @negative', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(correctUsername, wrongPassword);
        const errorMessage = await pageObjectManager.loginPage.getErrorMessage();
        expect(errorMessage).toBe(invalidPasswordMsg);
    });

    test('tc - 06: Verify user can successfully login using correct username and correct password @positive', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(correctUsername, correctPassword);
        const successHeading = await pageObjectManager.homePage.getLoginSuccessHeading();
        expect(successHeading).toBe(loginSuccessHeading);
    });

    test('tc - 07: Verify success message contains the username @positive', async ({ pageObjectManager }) => {
        await pageObjectManager.loginPage.login(correctUsername, correctPassword);
        const successMessage = await pageObjectManager.homePage.getLoginSuccessMessage();
        expect(successMessage).toContain(correctUsername);
    });

    test('tc - 08: Verify that the application navigates to the correct URL and displays the correct page title after successful login @positive', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(correctUsername, correctPassword);
        const currentUrl = await pageObjectManager.homePage.getCurrentUrl();
        const title = await pageObjectManager.homePage.getPageTitle();
        expect.soft(currentUrl).toContain(url);
        expect.soft(title).toBe(pageTitle);
    });

    test('tc - 09: Verify that the correct success message is displayed after successful login @positive', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(correctUsername, correctPassword);
        const successMessage = await pageObjectManager.homePage.getLoginSuccessMessage();
        expect(successMessage).toBe(loginSuccessMessage);
    });

    test('tc - 10: Verify that the logout button is visible after successful login @positive', async ({
        pageObjectManager,
    }) => {
        await pageObjectManager.loginPage.login(correctUsername, correctPassword);
        const isLogoutButtonVisible = await pageObjectManager.homePage.isLogoutButtonIsVisible();
        expect(isLogoutButtonVisible).toBe(true);
    });
});
