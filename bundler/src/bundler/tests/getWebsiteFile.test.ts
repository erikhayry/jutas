import { expect, test } from "bun:test";
import { getWebsiteFile } from "../getWebsiteFile.ts";
import { Comic } from "jutas-types";

const DIR = "src/bundler/tests/mocks";

test("is should return website", () => {
  const website = getWebsiteFile(DIR);

  expect(website).toHaveLength(2);

  const [comic1, comic2] = website as [Comic, Comic];

  expect(comic1.slug).toEqual("comic-1");
  expect(comic1.pages).toHaveLength(3);
  expect(comic1.pages[0]).toEqual({
    panels: [{ id: "1.1.1" }, { id: "1.1.2" }],
  });
  expect(comic1.pages[1]).toEqual({
    panels: [{ id: "1.2.1" }],
  });
  expect(comic1.pages[2]).toEqual({
    panels: [{ id: "2.1.1" }],
  });

  expect(comic2.slug).toEqual("comic-2");
  expect(comic2.pages).toHaveLength(1);
  expect(comic2.pages[0]).toEqual({
    panels: [{ id: "1.1.1" }],
  });
});
