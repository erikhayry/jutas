import * as fs from 'fs';
import * as path from 'path';
import type {Comic} from "jutas-types";

export function getAllJsonFiles(dir: string, fsModule = fs): string[] {
  return fsModule.readdirSync(dir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => path.join(dir, file));
}

export function readJsonFiles(files: string[], fsModule = fs): any[] {
  return files.map(file => {
    const content = fsModule.readFileSync(file, 'utf-8');
    try {
      return JSON.parse(content);
    } catch (e) {
      console.error(`Error parsing ${file}:`, e);
      return null;
    }
  });
}

const outputDir = path.join(__dirname, 'output');
const jsonFiles = getAllJsonFiles(outputDir);
const jsonContents = readJsonFiles(jsonFiles);

console.log(jsonContents);


const comic: Comic = {
    coords_percent: {h: 0, w: 0, x: 0, y: 0}, description: "", file_name: "", panel: ""
}
