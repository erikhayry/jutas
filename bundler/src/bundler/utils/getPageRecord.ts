import { getPanel } from "./getPanel.ts";
import { getPanelOutputs } from "./getPanelOutputs.ts";
import { getOutputFilePath } from "./getOutputFilePath.ts";

function getPageNumber(panelId: string) {
  const idTuplet = panelId.replace(".json", "").split(".") as [
    string,
    string,
    string,
  ];

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
