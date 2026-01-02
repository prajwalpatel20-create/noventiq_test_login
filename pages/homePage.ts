import { BasePage } from "./basepage";
import { HomePageLocators as locator} from "./locators/homePageLocators";

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