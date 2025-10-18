import { test, expect } from 'bun:test';
import { getPaths } from '../getPaths.ts';
import {getFileNames} from "../getFileNames.ts";

export const DIR = 'src/files/tests/mocks'

test('getFileNames returns only files name of file type', () => {
  expect(getFileNames(DIR, '.json')).toEqual([
   'file1Mock.json', 'file2Mock.json', 'file3Mock.json',
  ]);
});


