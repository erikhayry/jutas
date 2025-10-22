import { expect, test } from "bun:test";
import { getComicOutput } from "../getComicOutput.ts";

const DIR = "src/bundler/tests/mocks";

test("returns empty array when no folders", () => {
  expect(getComicOutput("/NOOP")).toEqual([]);
});

test("return array with comic valid paths", () => {
  const comics = getComicOutput(DIR);
  const [comic1, comic2] = comics;

  expect(comics).toHaveLength(2);
  expect(comic1!.path).toEqual(`${DIR}/comic-1`);
  expect(comic2!.path).toEqual(`${DIR}/comic-2`);
});

test("returns pages", () => {
  const [comic1, comic2] = getComicOutput(DIR);

  expect(comic1!.pages).toEqual([
    {
      panels: [
        `${DIR}/comic-1/output/1.1.1.json`,
        `${DIR}/comic-1/output/1.1.2.json`,
      ],
    },
    {
      panels: [`${DIR}/comic-1/output/1.2.1.json`],
    },
    {
      panels: [`${DIR}/comic-1/output/2.1.1.json`],
    },
  ]);
  expect(comic2!.pages).toEqual([
    {
      panels: [`${DIR}/comic-2/output/1.1.1.json`],
    },
  ]);
});
