import { Page } from "@playwright/test";
import { WebActions } from "../actions/webActions";

export class BasePage  {

    private page: Page;
    protected webActions: WebActions;
    constructor(page: Page) {
        this.page = page;
        this.webActions = new WebActions(page);
    }

    async navigateToUrl(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async getPageTitle() {
        return this.page.title();
    }

}