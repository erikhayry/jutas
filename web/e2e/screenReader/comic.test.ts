import {expect, test} from "@playwright/test";
import {
    getSpokenPhraseLog,
    injectVirtualScreenReader,
    navigateToEndOfDocument,
    startVirtualScreenReader,
    stopVirtualScreenReader
} from "./utils/virtualScreenReader.ts";
import {COMIC_MOCK} from "../../src/test/mock.ts";

test("should match expected screen reader output for comic", async ({
                                                                        page,
                                                                    }, testInfo) => {
    const headless = testInfo.project.use.headless ?? true;
    await page.goto(`/${COMIC_MOCK.slug}`);
    await injectVirtualScreenReader({page});
    await startVirtualScreenReader({headless, page});

    try {
        await navigateToEndOfDocument({page});
        const spokenPhraseLog = await getSpokenPhraseLog({page});
        expect(spokenPhraseLog).toMatchSnapshot('comic.json');

    } finally {
        await stopVirtualScreenReader({page});
    }
});