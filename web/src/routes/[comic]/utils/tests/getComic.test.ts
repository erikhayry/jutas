import {describe, expect, test} from "vitest";
import {getComic} from "../getComic";
import website from "$lib/assets/website.json";

describe('getComic', () => {
    test('returns comic if matching exists', () => {
        expect(getComic(website[0].slug)!.slug).toEqual(website[0].slug)
    })

    test('returns undefined if matching does not exists', () => {
        expect(getComic('NOT KNOWN')).toBeUndefined()
    })
})