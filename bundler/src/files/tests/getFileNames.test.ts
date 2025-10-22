import { expect, test } from "bun:test";
import { getJSONS } from "../getFileNames.ts";

export const DIR = "src/files/tests/mocks";

test("getFileNames returns only files name of file type", () => {
  expect(getJSONS(DIR)).toEqual([
    "file1Mock.json",
    "file2Mock.json",
    "file3Mock.json",
  ]);
});
