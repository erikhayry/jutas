import { afterEach, describe, expect, test } from "bun:test";
import { copyFile, copyFiles } from "../copy.ts";
import { getPaths } from "../getPaths.ts";
import { DIR } from "./getPaths.test.ts";
import * as fs from "node:fs";
import { getFileNames } from "../getFileNames.ts";

export const OUTPUT_DIR = `${DIR}/output`;

describe("copyFiles", () => {
  test("copy files to target", () => {
    copyFiles(getPaths(DIR, ".json"), OUTPUT_DIR);

    expect(getFileNames(OUTPUT_DIR, ".json")).toEqual(
      getFileNames(DIR, ".json"),
    );
  });
});

describe("copyFile", () => {
  test("copy file to target", () => {
    copyFile(getPaths(DIR, ".json")[0]!, OUTPUT_DIR);

    expect(getFileNames(OUTPUT_DIR, ".json")[0]!).toEqual(
      getFileNames(DIR, ".json")[0]!,
    );
  });
});

afterEach(() => {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
});
