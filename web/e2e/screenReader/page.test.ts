import {expect, test} from "@playwright/test";
import {
    getSpokenPhraseLog,
    injectVirtualScreenReader,
    navigateToEndOfDocument,
    startVirtualScreenReader,
    stopVirtualScreenReader
} from "./utils/virtualScreenReader.ts";
import {COMIC_MOCK} from "../../src/test/mock.ts";

test("should match expected screen reader output for page", async ({
                                                                       page,
                                                                   }, testInfo) => {
    const headless = testInfo.project.use.headless ?? true;
    await page.goto(`/${COMIC_MOCK.slug}/1`);
    await injectVirtualScreenReader({page});
    await startVirtualScreenReader({headless, page});

    try {
        await navigateToEndOfDocument({page});
        const spokenPhraseLog = await getSpokenPhraseLog({page});
        expect(spokenPhraseLog).toMatchSnapshot('page.json');

    } finally {
        await stopVirtualScreenReader({page});
    }
});