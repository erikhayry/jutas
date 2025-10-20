import * as fs from 'fs';

export function readPath(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}
