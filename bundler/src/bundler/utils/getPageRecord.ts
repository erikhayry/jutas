import { getPanel } from "./getPanel.ts";
import { getPanelOutputs } from "./getPanelOutputs.ts";
import { getOutputFilePath } from "./getOutputFilePath.ts";
import { removeExtension } from "../../files/removeExtension.ts";
import { PanelIdTuple } from "jutas-types";

function getPageNumber(panelId: string) {
  const idTuplet = PanelIdTuple.parse(removeExtension(panelId).split("."));

  return `${idTuplet[0]}.${idTuplet[1]}`;
}

function addToPageRecord(
  pageRecord: Record<string, string[]>,
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

export function getPageRecord(path: string) {
  const toPageRecord = (
    pageRecord: Record<number, string[]>,
    fileName: string,
  ) => addToPageRecord(pageRecord, getOutputFilePath(path, fileName));

  return getPanelOutputs(path).reduce(toPageRecord, {});
}
