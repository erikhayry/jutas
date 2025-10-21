import type { Comic } from "jutas-types";
import { getComicOutput } from "./getComicOutput.ts";

function getComicFolder(path: string): string {
  const folders = path.split("/");

  return folders[folders.length - 1] || "";
}

export function getWebsiteFile(folderPath: string): Comic[] {
  const output = getComicOutput(folderPath);

  return output.map(({ path }) => ({
    slug: getComicFolder(path),
  }));
}
