import { test, expect } from 'bun:test';
import * as path from 'path';
import { getAllJsonFiles, readJsonFiles } from './bundle';

test('getAllJsonFiles returns only .json files with correct paths', () => {
  const mockFs = {
    readdirSync: () => [
      'file1.json', 'file2.json', 'file3.txt', 'file4.JSON', 'file5.json'
    ]
  };
  const dir = '/fake/output';
  const result = getAllJsonFiles(dir, mockFs as unknown as typeof import("fs"));
  expect(result).toEqual([
    path.join(dir, 'file1.json'),
    path.join(dir, 'file2.json'),
    path.join(dir, 'file5.json')
  ]);
});

test('readJsonFiles parses valid JSON and returns null for invalid JSON', () => {
  const mockFs = {
    readFileSync: (file: string) => {
      if (file.endsWith('file1.json')) return '{"a":1}';
      if (file.endsWith('file2.json')) return '{"b":2}';
      if (file.endsWith('file5.json')) return 'invalid json';
      return '';
    }
  };
  const files = [
    '/fake/output/file1.json',
    '/fake/output/file2.json',
    '/fake/output/file5.json'
  ];
  const result = readJsonFiles(files, mockFs as typeof import("fs"));
  expect(result).toEqual([
    { a: 1 },
    { b: 2 },
    null
  ]);
});
