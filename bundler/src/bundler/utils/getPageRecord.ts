import {getPanel} from "./getPanel.ts";
import {getPanelOutputs} from "./getPanelOutputs.ts";
import {getOutputFilePath} from "./getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {PanelIdTuple, type PanelOutput} from "jutas-types";

function getPageNumber(panelId: string) {
    const idTuplet = PanelIdTuple.parse(removeExtension(panelId).split("."));

    return `${idTuplet[0]}.${idTuplet[1]}`;
}

function addToPageRecord(
    pageRecord: Record<string, PanelOutput[]>,
    filePath: string,
): Record<string, PanelOutput[]> {
    const panelOutput = getPanel(filePath);
    const pageNumber = getPageNumber(panelOutput.id);

    if (pageRecord[pageNumber]) {
        pageRecord[pageNumber].push(panelOutput);
    } else {
        pageRecord[pageNumber] = [panelOutput];
    }

    return pageRecord;
}

export function getPageRecord(path: string) {
    const toPageRecord = (
        pageRecord: Record<number, PanelOutput[]>,
        fileName: string,
    ) => addToPageRecord(pageRecord, getOutputFilePath(path, fileName));

    return getPanelOutputs(path).reduce(toPageRecord, {});
}
