import { test as base, Page } from '@playwright/test';

type Fixtures = {
    customPage: Page;
};

export const test = base.extend<Fixtures>({
    customPage: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await use(page);
        await page.close();
        await context.close();
    },
});
