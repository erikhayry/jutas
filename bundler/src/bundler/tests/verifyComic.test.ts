import { test, expect } from 'bun:test';
import {verifyComic} from "../verifyComic.ts";
import {Comic} from "jutas-types";

test('should return false if data not compliant', () => {
    expect(verifyComic({})).toBeFalse()
})

test('should return true if data is compliant', () => {
    const comic: Comic = {
        panel: "panel mock",
        file_name: "file_name mock",
        coords_percent: {
            x: 100,
            y: 100,
            w: 100,
            h: 100
        },
        description: "description mock",
    }

    expect(verifyComic(comic)).toBeTruthy()
})