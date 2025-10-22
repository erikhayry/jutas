import { getJSONS } from "../../files/getFileNames.ts";
import { OUTPUT_FOLDER } from "../../constants.ts";

export function getPanelOutputs(path: string) {
  return getJSONS(`${path}/${OUTPUT_FOLDER}`);
}
