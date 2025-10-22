import { DATA_EXTENSION } from "../constants.ts";

export function removeExtension(fileName: string) {
  return fileName.replace(DATA_EXTENSION, "");
}
