import type { Comic } from "jutas-types";
import { getComicOutput } from "./getComicOutput.ts";
import * as path from "node:path";
import { removeExtension } from "../files/removeExtension.ts";

function getComicFolder(path: string): string {
  const folders = path.split("/");

  return folders[folders.length - 1] || "";
}

export function getWebsiteFile(folderPath: string): Comic[] {
  return getComicOutput(folderPath).map(({ path: filePath, pages }) => ({
    slug: getComicFolder(filePath),
    pages: pages.map(({ panels }) => ({
      panels: panels.map((filePath) => ({
        id: removeExtension(path.basename(filePath)),
      })),
    })),
  }));
}
