import {describe, expect, it} from 'vitest';
import {load} from "../+page";
import {COMIC_MOCK} from "../../../test/mock";


describe('Comic load', () => {
    it('should load comic if available', async () => {
        expect(load({params: {comic: COMIC_MOCK.slug}})).toEqual(COMIC_MOCK)
    });

    it('should load error if not available', async () => {
        try {
            load({params: {comic: 'UNKOWN'}})
        } catch (error) {
            expect(error).toMatchSnapshot()
        }
    });
});
