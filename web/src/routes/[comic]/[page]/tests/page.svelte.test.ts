import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import Page from '../+page.svelte';
import {renderPage} from "../../../../test/renderPage";
import {COMIC_MOCK, PAGE_INDEX_MOCK} from "../../../../test/mock";
import {load} from "../+page";


describe('Comic page', () => {
    it('should render list comic', async () => {
        const data = load({params: {comic: COMIC_MOCK.slug, page: PAGE_INDEX_MOCK.toString()}});
        renderPage(Page, data);

        const heading = page.getByRole('heading', {name: data.title, level: 1});
        await expect.element(heading).toBeInTheDocument();

        const image = page.getByRole('img');
        expect(image.elements()).toHaveLength(COMIC_MOCK.pages[PAGE_INDEX_MOCK].panels.length);
    });
});
