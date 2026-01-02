import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    /**
    * This is one way to organize locators for having a page with less locators, 
      we can use other ways as well like in homePageLocators.ts
    */

    readonly usernameInput = '#username';
    readonly passwordInput = '#password';
    readonly submitButton = '#submit';
    readonly errorMessage = '#error';

    async inputUsername(username: string) {
        await this.webActions.fillInput(this.usernameInput, username);
    }

    async inputPassword(password: string) {
        await this.webActions.fillInput(this.passwordInput, password);
    }

    async clickSubmitButton() {
        await this.webActions.click(this.submitButton);
    }

    async login(username: string, password: string) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickSubmitButton();
    }

    async getErrorMessage() {
        return await this.webActions.getText(this.errorMessage);
    }
}
