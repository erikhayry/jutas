import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import Page from '../+page.svelte';
import {getComic} from "../utils/getComic";
import {renderPage} from "../../../test/renderPage";


describe('Comic page', () => {
    it('should render list comic', async () => {
        renderPage(Page, getComic('slaget-vid-jutas'));

        const heading = page.getByRole('heading', {name: 'slaget-vid-jutas'});

        await expect.element(heading).toBeInTheDocument();
    });
});
