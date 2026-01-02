import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./homePage";

export class PageObjectManager {
    constructor(private page: Page) {
    }

    private _loginPage  : LoginPage ;
    private _homePage  : HomePage ;

    get loginPage(): LoginPage {
        return this._loginPage ??= new LoginPage(this.page);
    }

    get homePage(): HomePage {
        return this._homePage ??= new HomePage(this.page);
    }
}