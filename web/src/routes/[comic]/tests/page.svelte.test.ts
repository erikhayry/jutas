import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import Page from '../+page.svelte';
import {getComic} from "../utils/getComic";
import {renderPage} from "../../../test/renderPage";
import {COMIC_MOCK} from "../../../test/mock";


describe('Comic page', () => {
    it('should render list comic', async () => {
        renderPage(Page, getComic(COMIC_MOCK.slug));

        const heading = page.getByRole('heading', {name: COMIC_MOCK.slug});
        const image = page.getByRole('img');

        await expect.element(heading).toBeInTheDocument();
        await expect.element(image).toBeInTheDocument();
    });
});
