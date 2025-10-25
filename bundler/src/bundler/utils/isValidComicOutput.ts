import {getImages, getJSONS} from "../../files/getFileNames.ts";
import {PanelId} from "jutas-types";
import {verifyPanelOutput} from "../../verify/verifyPanelOutput.ts";
import {getPanel} from "./getPanel.ts";
import {getOutputFilePath} from "./getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {error} from "../../logger/log.ts";

function isInvalidFilenames(fileName: string): boolean {
    return !PanelId.safeParse(removeExtension(fileName)).success
}

function getPanelDataFiles(folderPath: string) {
    return getJSONS(`${folderPath}/${OUTPUT_FOLDER}`);
}

function getPanelId(filePath: string) {
    return getPanel(filePath).id;
}

function hasImage(path: string, panelId: string) {
    return getImages(`${path}/${OUTPUT_FOLDER}`).some(
        (imageFileName) => imageFileName === `${panelId}${IMAGE_EXTENSION}`,
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
        error(`${folderPath} has no files`);
        return false;
    }

    if (hasInvalidPanelFileNames(folderPath)) {
        error(`${folderPath} has invalid panel file names`);
        return false;
    }

    if (hasInvalidPanelIds(folderPath)) {
        error(`${folderPath} has invalid panel ids`);
        return false;
    }

    if (hasPanelWithoutImage(folderPath)) {
        error(`${folderPath} has panels without images`);
        return false;
    }

    return true;
}
