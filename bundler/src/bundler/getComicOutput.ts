import {
  type ComicOutput,
  type PageOutput,
  PanelId,
  type PanelOutput,
} from "jutas-types";
import { getFolders } from "../files/getFolders.ts";
import { getFileNames } from "../files/getFileNames.ts";
import { readPath } from "../files/readPath.ts";
import { verifyPanelOutput } from "../verify/verifyPanelOutput.ts";

function outInvalidFilenames(fileName: string) {
  try {
    PanelId.parse(fileName.replace(".json", ""));
    return true;
  } catch (error) {
    return false;
  }
}

function getPanel(filePath: string) {
  return JSON.parse(readPath(filePath));
}

function byName(a: string, b: string) {
  return a.localeCompare(b);
}

function getPageNumber(panelId: string) {
  return (
    panelId.replace(".json", "").split(".").map(Number) as [
      number,
      number,
      number,
    ]
  )[0];
}

function addToPageRecord(
  pageRecord: Record<number, string[]>,
  filePath: string,
) {
  const pageNumber = getPageNumber(getPanel(filePath).panel);

  if (pageRecord[pageNumber]) {
    pageRecord[pageNumber].push(filePath);
  } else {
    pageRecord[pageNumber] = [filePath];
  }

  return pageRecord;
}

function getFileName(path: string, fileName: string) {
  return `${path}/output/${fileName}`;
}

function getPageRecord(path: string) {
  const toPageRecord = (
    pageRecord: Record<number, string[]>,
    fileName: string,
  ) => addToPageRecord(pageRecord, getFileName(path, fileName));
  const outInvalidPanelId = (fileName: string) =>
    verifyPanelOutput(getPanel(getFileName(path, fileName)));

  return getFileNames(`${path}/output`, ".json")
    .filter(outInvalidFilenames)
    .filter(outInvalidPanelId)
    .reduce(toPageRecord, {});
}

function toPageOutput([pageNumber, panels]: [string, string[]]) {
  return {
    number: Number.parseInt(pageNumber),
    panels,
  };
}

function getPages(path: string): PageOutput[] {
  return Object.entries(getPageRecord(path)).map(toPageOutput);
}

function toComicOutput(comics: ComicOutput[], path: string) {
  return [
    ...comics,
    {
      path,
      pages: getPages(path),
    },
  ];
}

export function getComicOutput(folderPath: string): ComicOutput[] {
  try {
    return getFolders(folderPath).sort(byName).reduce(toComicOutput, []);
  } catch (error) {
    console.log(error);
    return [];
  }
}
