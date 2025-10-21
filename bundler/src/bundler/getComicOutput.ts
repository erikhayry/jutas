import { getFolders } from "../files/getFolders.ts";
import { getPageRecord } from "./utils/getPageRecord.ts";
import { isValidComicOutput as outInvalidComicOutput } from "./utils/isValidComicOutput.ts";
import type { ComicOutput, PageOutput } from "jutas-types";

function byName(a: string, b: string) {
  return a.localeCompare(b);
}

function toPageOutput([pageNumber, panels]: [string, string[]]) {
  return {
    number: Number.parseInt(pageNumber),
    panels,
  };
}

function getPages(path: string): PageOutput[] {
  return Object.entries(getPageRecord(path)).map(toPageOutput);
}

function toComicOutput(comics: ComicOutput[], path: string) {
  return [
    ...comics,
    {
      path,
      pages: getPages(path),
    },
  ];
}

export function getComicOutput(folderPath: string): ComicOutput[] {
  try {
    return getFolders(folderPath)
      .filter(outInvalidComicOutput)
      .sort(byName)
      .reduce(toComicOutput, []);
  } catch (error) {
    console.log(error);
    return [];
  }
}
