import {describe, expect, test} from "vitest";
import {getComic} from "../getComic";
import {COMIC_MOCK} from "../../../../test/mock";

describe('getPanel', () => {
    test('returns comic if matching exists', () => {
        expect(getComic(COMIC_MOCK.slug)).toEqual(COMIC_MOCK.slug)
    })

    test('returns undefined if matching does not exists', () => {
        expect(getComic('NOT KNOWN')).toBeUndefined()
    })
})