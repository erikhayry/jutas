import { expect, test } from "bun:test";
import { getComicOutput } from "../getComicOutput.ts";

const DIR = "src/bundler/tests/mocks";

test("returns empty array when no folders", () => {
  expect(getComicOutput("/NOOP")).toEqual([]);
});

test("return array with comic paths", () => {
  const [comic1, comic2] = getComicOutput(DIR);

  expect(comic1!.path).toEqual(`${DIR}/comic-1`);
  expect(comic2!.path).toEqual(`${DIR}/comic-2`);
});

test("returns pages", () => {
  const [comic1, comic2] = getComicOutput(DIR);

  expect(comic1!.pages).toEqual([
    {
      number: 1,
      panels: [
        `${DIR}/comic-1/output/1.1.1.json`,
        `${DIR}/comic-1/output/1.1.2.json`,
      ],
    },
  ]);
  expect(comic2!.pages).toEqual([]);
});
