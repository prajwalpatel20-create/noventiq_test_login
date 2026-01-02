import { BasePage } from './basePage';
import { HomePageLocators as locator } from './locators/homePageLocators';
import { test } from '@playwright/test';

export class HomePage extends BasePage {
    async getLoginSuccessHeading() {
        return await this.webActions.getText(locator.postTitle.id);
    }

    async getLoginSuccessMessage() {
        return await this.webActions.getText(locator.postContent.id);
    }

    async verifyLogoutButtonIsVisible() {
        return await this.webActions.isElementVisible(locator.logoutButton.id);
    }
}
