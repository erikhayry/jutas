import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render list of comics', async () => {
		render(Page);

		const listItem = page.getByRole('link', { name: 'Slaget vid jutas'});

        await expect(listItem.elements()).toHaveLength(1);
        await expect.element(listItem).toBeInTheDocument();
	});
});
