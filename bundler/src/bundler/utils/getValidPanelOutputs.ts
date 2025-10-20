import { verifyPanelOutput } from "../../verify/verifyPanelOutput.ts";
import { getFileNames } from "../../files/getFileNames.ts";
import { PanelId } from "jutas-types";
import { getPanel } from "./getPanel.ts";
import { getOutputFilePath } from "./getOutputFilePath.ts";

function outInvalidFilenames(fileName: string) {
  try {
    PanelId.parse(fileName.replace(".json", ""));
    return true;
  } catch (error) {
    return false;
  }
}

function getPanelId(filePath: string) {
  return getPanel(filePath).panel;
}

function hasImage(path: string, panelId: string) {
  return getFileNames(`${path}/output`, ".png").some(
    (imageFileName) => imageFileName === `${panelId}.png`,
  );
}

export function getValidPanelOutputs(path: string) {
  const outInvalidPanelId = (fileName: string) =>
    verifyPanelOutput(getPanel(getOutputFilePath(path, fileName)));

  const outWithoutImage = (fileName: string) =>
    hasImage(path, getPanelId(getOutputFilePath(path, fileName)));

  return getFileNames(`${path}/output`, ".json")
    .filter(outInvalidFilenames)
    .filter(outInvalidPanelId)
    .filter(outWithoutImage);
}
