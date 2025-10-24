import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import Page from '../+page.svelte';
import {getPage} from "../utils/getPage";
import {renderPage} from "../../../../test/renderPage";
import {COMIC_MOCK, PAGE_INDEX_MOCK} from "../../../../test/mock";


describe('Comic page', () => {
    it('should render list comic', async () => {
        renderPage(Page, {
            page: getPage(COMIC_MOCK.slug, PAGE_INDEX_MOCK),
            slug: COMIC_MOCK.slug,
            pageNumber: PAGE_INDEX_MOCK + 1
        });

        const heading = page.getByRole('heading', {name: `${COMIC_MOCK.slug} | ${PAGE_INDEX_MOCK + 1}`});
        const image = page.getByRole('img');

        await expect.element(heading).toBeInTheDocument();
        expect(image.elements()).toHaveLength(COMIC_MOCK.pages[PAGE_INDEX_MOCK].panels.length);
    });
});
