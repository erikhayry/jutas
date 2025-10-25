import type {Page} from "@playwright/test";

export async function injectVirtualScreenReader({page}: { page: Page }) {
    await page.addScriptTag({
        url: "https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js",
        type: "module",
    });

    await page.addScriptTag({
        content: `import { virtual } from "https://unpkg.com/@guidepup/virtual-screen-reader/lib/esm/index.browser.js"; window.virtual = virtual;`,
        type: "module",
    });
}

export async function startVirtualScreenReader({
                                                   headless,
                                                   page,
                                               }: {
    headless: boolean;
    page: Page;
}) {
    await page.evaluate(async (headless) => {
        // @ts-expect-error document exists
        const container = document.body

        // @ts-expect-error window exists
        await window.virtual.start({
            container,
            displayCursor: !headless,
        });
    }, headless);
}

export async function navigateToEndOfDocument({page}: { page: Page }) {
    await page.evaluate(async () => {
        // @ts-expect-error window exists
        while ((await window.virtual.lastSpokenPhrase()) !== "end of document") {
            // @ts-expect-error window exists
            await window.virtual.next();
        }
    });
}

export async function getSpokenPhraseLog({page}: { page: Page }) {
    const spokenPhraseLog = await page.evaluate(async () => {
        // @ts-expect-error window exists
        return await window.virtual.spokenPhraseLog();
    });

    return JSON.stringify(spokenPhraseLog, undefined, 2);
}

export async function stopVirtualScreenReader({page}: { page: Page }) {
    await page.evaluate(async () => {
        // @ts-expect-error window exists
        await window.virtual.stop();
    });
}
