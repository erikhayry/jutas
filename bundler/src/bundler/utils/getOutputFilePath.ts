import { OUTPUT_FOLDER } from "../../constants.ts";

export function getOutputFilePath(path: string, fileName: string) {
  return `${path}/${OUTPUT_FOLDER}/${fileName}`;
}
