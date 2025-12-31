import { webPage } from "./webPage";

export class LoginPage extends webPage {
    private readonly LOCATORS = {
        usernameInput: this.page.locator('#username'),
        passwordInput: this.page.locator('#password'),
        submitButton: this.page.locator('#submit'),
        errorMessage: this.page.locator('#error'),
        pageTitle: this.page.locator('h2'),
    }
}