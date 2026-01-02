import { BasePage } from './basePage';
import { HomePageLocators as locator } from './locators/homePageLocators';

export class HomePage extends BasePage {
    async getLoginSuccessHeading(): Promise<string> {
        return await this.webActions.getText(locator.postTitle.id);
    }

    async getLoginSuccessMessage(): Promise<string> {
        return await this.webActions.getText(locator.postContent.id);
    }

    async isLogoutButtonIsVisible(): Promise<boolean> {
        return await this.webActions.isElementVisible(locator.logoutButton.id);
    }
}
