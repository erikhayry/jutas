import {getWebsiteFile} from "./getWebsiteFile.ts";
import {createJSON} from "../files/createJSON.ts";
import {copyComicImages} from "./utils/copyComicImages.ts";
import {createPanelSchema} from "../files/schemas.ts";

export interface TypeConfig {
    folder: string;
    schemas: {
        panel: string
    }
}

export interface WebConfig {
    folder: string;
    file: string;
}

export interface ComicsConfig {
    folder: string;
}


export interface BundleConfig {
    comics: ComicsConfig;
    web: WebConfig;
    type: TypeConfig
}

export function bundle({
                           comics,
                           web,
                           type
                       }: BundleConfig) {
    createJSON(web.folder, web.file, getWebsiteFile(comics.folder));
    copyComicImages(comics.folder, web.folder);
    createPanelSchema(type.folder, type.schemas.panel)
}
