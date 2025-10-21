import { getFileNames } from "../../files/getFileNames.ts";

export function getPanelOutputs(path: string) {
  return getFileNames(`${path}/output`, ".json");
}
