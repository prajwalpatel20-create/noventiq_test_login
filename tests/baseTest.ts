import { test as baseTest} from '../fixtures/fixtures';
import { PageObjectManager } from '../pages/pageObjectManager';

type TestFixtures = {
    pageObjectManager: PageObjectManager;
}

export const test = baseTest.extend<TestFixtures>({
    pageObjectManager: async ({ customPage }, use) => {
        const pageManager = new PageObjectManager(customPage);
        await use(pageManager);
    }
})

export { expect } from '@playwright/test';