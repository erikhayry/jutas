import { afterEach, expect, test } from "bun:test";
import { bundle, type BundleConfig } from "../bundle.ts";
import fs from "node:fs";
import { readPath } from "../../files/readPath.ts";
import { Website } from "jutas-types";
import { getImages } from "../../files/getFileNames.ts";

const WWW_FOLDER_DIR = "src/bundler/tests/comicsOutput";
const IMAGE_FOLDER = "src/bundler/tests/comicsOutput";
const COMICS_FOLDER_DIR = "src/bundler/tests/mocks";
const WWW_FILE = "website.json";

const config: BundleConfig = {
  comics: {
    folder: COMICS_FOLDER_DIR
  },
  web: {
    folder: WWW_FOLDER_DIR,
    file: WWW_FILE
  }
};

test("should create website settings", () => {
  bundle(config);

  expect(
    Website.safeParse(readPath(`${WWW_FOLDER_DIR}/${WWW_FILE}`))
  ).toBeTruthy();
});

test("should copy images", () => {
  bundle(config);

  expect(getImages(`${IMAGE_FOLDER}/comic-1`)).toEqual([
    "1.1.1.png",
    "1.1.2.png",
    "1.2.1.png",
    "2.1.1.png"
  ]);
  expect(getImages(`${IMAGE_FOLDER}/comic-2`)).toEqual(["1.1.1.png"]);
});

afterEach(() => {
  fs.rmSync(WWW_FOLDER_DIR, { recursive: true, force: true });
});
