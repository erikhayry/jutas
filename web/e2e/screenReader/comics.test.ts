import {expect, test} from "@playwright/test";
import {
    getSpokenPhraseLog,
    injectVirtualScreenReader,
    navigateToEndOfDocument,
    startVirtualScreenReader,
    stopVirtualScreenReader
} from "./utils/virtualScreenReader.ts";


test("should match expected screen reader output for comics", async ({
                                                                         page,
                                                                     }, testInfo) => {
    const headless = testInfo.project.use.headless ?? true;
    await page.goto("/");
    await injectVirtualScreenReader({page});
    await startVirtualScreenReader({headless, page});

    try {
        await navigateToEndOfDocument({page});
        const spokenPhraseLog = await getSpokenPhraseLog({page});
        expect(spokenPhraseLog).toMatchSnapshot('comics.json');

    } finally {
        await stopVirtualScreenReader({page});
    }
});