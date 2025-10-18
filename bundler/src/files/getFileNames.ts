import * as path from 'path';
import {getPaths} from "./getPaths.ts";

export function getFileNames(dir: string, fileType: string): string[] {
  return getPaths(dir, fileType).map((filePath) => path.basename(filePath))
}
