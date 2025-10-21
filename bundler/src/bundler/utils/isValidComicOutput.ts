import { getFileNames } from "../../files/getFileNames.ts";
import { PanelId } from "jutas-types";
import { verifyPanelOutput } from "../../verify/verifyPanelOutput.ts";
import { getPanel } from "./getPanel.ts";
import { getOutputFilePath } from "./getOutputFilePath.ts";

function isInvalidFilenames(fileName: string) {
  try {
    PanelId.parse(fileName.replace(".json", ""));
    return false;
  } catch (error) {
    return true;
  }
}

function getPanelDataFiles(folderPath: string) {
  return getFileNames(`${folderPath}/output`, ".json");
}

function getPanelId(filePath: string) {
  return getPanel(filePath).panel;
}

function hasImage(path: string, panelId: string) {
  return getFileNames(`${path}/output`, ".png").some(
    (imageFileName) => imageFileName === `${panelId}.png`,
  );
}

function hasInvalidPanelFileNames(folderPath: string) {
  return Boolean(
    getPanelDataFiles(folderPath).filter(isInvalidFilenames).length,
  );
}

function hasInvalidPanelIds(folderPath: string) {
  const isInvalidPanelId = (fileName: string) =>
    !verifyPanelOutput(getPanel(getOutputFilePath(folderPath, fileName)));

  return Boolean(getPanelDataFiles(folderPath).filter(isInvalidPanelId).length);
}

function hasPanelWithoutImage(folderPath: string) {
  const isWithoutImage = (fileName: string) =>
    !hasImage(folderPath, getPanelId(getOutputFilePath(folderPath, fileName)));

  return Boolean(getPanelDataFiles(folderPath).filter(isWithoutImage).length);
}

function hasNoFiles(folderPath: string) {
  return getPanelDataFiles(folderPath).length === 0;
}

export function isValidComicOutput(folderPath: string) {
  if (hasNoFiles(folderPath)) {
    console.error(`${folderPath} has no files`);
    return false;
  }

  if (hasInvalidPanelFileNames(folderPath)) {
    console.error(`${folderPath} has invalid panel file names`);
    return false;
  }

  if (hasInvalidPanelIds(folderPath)) {
    console.error(`${folderPath} has invalid panel ids`);
    return false;
  }

  if (hasPanelWithoutImage(folderPath)) {
    console.error(`${folderPath} has panels without images`);
    return false;
  }

  return true;
}
