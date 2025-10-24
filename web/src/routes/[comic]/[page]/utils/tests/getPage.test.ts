import {describe, expect, test} from "vitest";
import {getPage} from "../getPage";
import {COMIC_MOCK} from "../../../../../test/mock";

describe('getPanel', () => {
    test('returns panel if matching exists', () => {
        expect(getPage(COMIC_MOCK.slug, 0)).toEqual(COMIC_MOCK.pages[0])
    })

    test('returns undefined if matching does not exists', () => {
        expect(getPage(COMIC_MOCK.slug, 99)).toBeUndefined()
        expect(getPage('NOT KNOWN', 0)).toBeUndefined()
    })
})