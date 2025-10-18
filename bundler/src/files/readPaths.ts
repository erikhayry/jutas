import * as fs from 'fs';
import * as path from 'path';
import type {Comic} from "jutas-types";

export function readPaths(files: string[]): string[] {
  return files.map(file => fs.readFileSync(file, 'utf-8'));
}
