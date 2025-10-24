import { getWebsiteFile } from "./getWebsiteFile.ts";
import { createJSON } from "../files/createJSON.ts";
import { copyComicImages } from "./utils/copyComicImages.ts";


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
}

export function bundle({
                         comics,
                         web
                       }: BundleConfig) {
  createJSON(web, getWebsiteFile(comics.folder));
  copyComicImages(comics.folder, web.folder);
}
