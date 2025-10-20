import { getPanel } from "./getPanel.ts";
import { getValidPanelOutputs } from "./getValidPanelOutputs.ts";
import { getOutputFilePath } from "./getOutputFilePath.ts";

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

export function getPageRecord(path: string) {
  const toPageRecord = (
    pageRecord: Record<number, string[]>,
    fileName: string,
  ) => addToPageRecord(pageRecord, getOutputFilePath(path, fileName));

  return getValidPanelOutputs(path).reduce(toPageRecord, {});
}
