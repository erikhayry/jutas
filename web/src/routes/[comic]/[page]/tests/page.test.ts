import {describe, expect, it} from 'vitest';
import {load} from "../+page";
import {COMIC_MOCK, PAGE_INDEX_MOCK, PAGE_MOCK} from "../../../../test/mock";


describe('Comic page load', () => {
    it('should load comic page if available', async () => {
        expect(load({params: {comic: COMIC_MOCK.slug, page: PAGE_INDEX_MOCK.toString()}})).toEqual({
            page: PAGE_MOCK,
            slug: COMIC_MOCK.slug,
            title: `${COMIC_MOCK.slug} | ${PAGE_INDEX_MOCK + 1}`
        })
    });

    it('should load error if not available', async () => {
        try {
            load({params: {comic: COMIC_MOCK.slug, page: '99'}})
        } catch (error) {
            expect(error).toMatchSnapshot()
        }
    });
});
