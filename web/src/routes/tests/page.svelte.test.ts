import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import {render} from 'vitest-browser-svelte';
import Page from '../+page.svelte';
import {COMIC_MOCK} from "../../test/mock";

describe('comics page', () => {
    it('should render list of comics', async () => {
        render(Page);

        const listItem = page.getByRole('link', {name: COMIC_MOCK.slug, exact: true});

        expect(listItem.elements()).toHaveLength(1);
        await expect.element(listItem).toBeInTheDocument();
    });
});
