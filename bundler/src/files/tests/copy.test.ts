import { test, expect, afterEach } from 'bun:test';
import {copyFiles} from "../copy.ts";
import {getPaths} from "../getPaths.ts";
import {DIR} from "./getPaths.test.ts";
import * as fs from "node:fs";
import {getFileNames} from "../getFileNames.ts";

export const OUTPUT_DIR = `${DIR}/output`

test('copy files to target', () => {
    copyFiles(getPaths(DIR,'.json'), OUTPUT_DIR)

    expect(getFileNames(OUTPUT_DIR, '.json')).toEqual(getFileNames(DIR, '.json'))
})

afterEach(() => {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true })
})