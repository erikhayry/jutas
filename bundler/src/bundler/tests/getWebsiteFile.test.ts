import { expect, test } from "bun:test";
import { getWebsiteFile } from "../getWebsiteFile.ts";

const DIR = "src/bundler/tests/mocks";

test("is should add slugs for comics", () => {
  expect(getWebsiteFile(DIR)).toEqual([
    { slug: "comic-1" },
    { slug: "comic-2" },
  ]);
});
