import { Page } from "@playwright/test";

export class WebActions {
    constructor(private page: Page) {
    }

    async isElementVisible(locator: string) {
        await this.waitForElement(locator);
        return await this.page.locator(locator).isVisible();
    }

    private async waitForElement(identifier: string) {
        const locator = identifier.match(/^#|\.|\//) ? this.page.locator(identifier) : this.page.getByTestId(identifier);
        return this.fluentWait(() => locator.isVisible());
    }

    async fluentWait(condition: () => Promise<boolean>, timeout: number = 5000, interval: number = 500):
        Promise<boolean> {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            try {
                if (await condition()) {
                    return true;
                }
            } catch (error) {
                console.error(`Error in fluentWait: ${error}`);
            }
            await new Promise(resolve => setTimeout(resolve, interval));
        }
        throw new Error(`Timeout in fluentWait after ${timeout}ms`);
    }

    async fillInput(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }

    async getText(locator: string) {
        const element = this.page.locator(locator);
        return await element.textContent() || '';
    }

    async click(locator: string) {
        await this.page.locator(locator).click();
    }


}