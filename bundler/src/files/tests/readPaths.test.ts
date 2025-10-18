import { test, expect } from 'bun:test';
import {readPaths} from "../readPaths.ts";
import {getPaths} from "../getPaths.ts";
import {DIR} from "./getPaths.test.ts";

test('reads files content', () => {
    expect(readPaths(getPaths(DIR, '.json'))).toEqual([
        '{ "mock": 1 }',
        '{ "mock": 2 }',
        '{ "mock": 3 }'
  ]);
});
