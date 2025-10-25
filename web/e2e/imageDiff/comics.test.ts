import {expect, type Page, test} from '@playwright/test';
import {getComics} from "../../src/utils/getComics.ts";
import type {Comic} from "jutas-types";

async function gotoComic(comic: Comic, page: Page) {
    await page.getByRole('link', {name: comic.slug, exact: true}).click();
    await expect(page).toHaveScreenshot(`${comic.slug}/landing.png`);

    let testedPage = 0;

    while (testedPage < comic.pages.length) {
        await page.getByRole('link', {name: testedPage.toString(), exact: true}).click();
        await expect(page).toHaveScreenshot(`${comic.slug}/${testedPage.toString()}.png`);
        await page.getByRole('link', {name: 'Back', exact: true}).click();
        testedPage++
    }

    await page.goto('/');
}

async function testComic(page: Page) {
    await page.goto('/');
    await expect(page).toHaveScreenshot('comics.png');
    const comics = getComics()
    let testedComic = 0;

    while (testedComic < comics.length) {
        await gotoComic(comics[testedComic]!, page)
        testedComic++
    }
}

test('comics', async ({page}) => {
    await testComic(page)
});
