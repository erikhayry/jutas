import {
    type Comic,
    type ComicOutput,
    type Page,
    type PageOutput,
    Panel,
    type Panel as PanelType,
    PanelOutput,
    Website,
} from "jutas-types";
import {getComicOutput} from "./getComicOutput.ts";

function getComicFolder(path: string): string {
    const folders = path.split("/");

    return folders[folders.length - 1] || "";
}

function toPanel(panelOutput: PanelOutput): PanelType {
    return Panel.parse(panelOutput);
}

function toPages({panels}: PageOutput): Page {
    return {
        panels: panels.map(toPanel),
    };
}

function toComic({path: filePath, pages}: ComicOutput): Comic {
    return {
        slug: getComicFolder(filePath),
        pages: pages.map(toPages),
    };
}

export function getWebsiteFile(folderPath: string): Website {
    return getComicOutput(folderPath).map(toComic);
}
