import {test, expect} from "bun:test";
import {getFolders} from "../getFolders.ts";
import {DIR} from "./getPaths.test.ts";

test('returns all folders in path', () => {
    expect(getFolders(DIR)).toEqual( [
           `${DIR}/folder-2`,
           `${DIR}/folder-1`,
         ])
})