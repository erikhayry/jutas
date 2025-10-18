import { test, expect } from 'bun:test';
import { getPaths } from '../getPaths.ts';

export const DIR = 'src/files/tests/mocks'

test('getPaths returns only files of file type json', () => {
  expect(getPaths(DIR, '.json')).toEqual([
   `${DIR}/file1Mock.json`, `${DIR}/file2Mock.json`, `${DIR}/file3Mock.json`,
  ]);
});

test('getPaths returns only files of file type txt', () => {
    expect(getPaths(DIR, '.txt')).toEqual([
        `${DIR}/file1Mock.txt`
    ]);
});

