import { test, expect } from 'bun:test';
import {readPaths} from "../readPaths.ts";
import {getPaths} from "../getPaths.ts";
import {DIR} from "./getPaths.test.ts";
import {readPath} from "../readPath.ts";

test('reads files content', () => {
    expect(readPath(`${DIR}/file1Mock.json`)).toEqual('{ "mock": 1 }');
});
