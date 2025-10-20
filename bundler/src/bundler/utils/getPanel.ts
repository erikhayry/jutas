import { readPath } from "../../files/readPath.ts";

export function getPanel(filePath: string) {
  return JSON.parse(readPath(filePath));
}
