import * as path from "path";
import { getPaths } from "./getPaths.ts";
import { DATA_EXTENSION, IMAGE_EXTENSION } from "../constants.ts";

export function getFileNames(dir: string, extension: string): string[] {
  return getPaths(dir, extension).map((filePath) => path.basename(filePath));
}

export function getJSONS(dir: string): string[] {
  return getFileNames(dir, DATA_EXTENSION);
}

export function getImages(dir: string): string[] {
  return getFileNames(dir, IMAGE_EXTENSION);
}
