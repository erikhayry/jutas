import {readPath} from "./readPath.ts";

export function readPaths(filePaths: string[]): string[] {
  return filePaths.map(readPath);
}
