import { getWebsiteFile } from "./getWebsiteFile.ts";
import { createJSON } from "../files/createJSON.ts";
import { copyComicImages } from "./utils/copyComicImages.ts";

export function bundle({
  comicsFolder,
  wwwFolder,
  wwwFile,
}: {
  comicsFolder: string;
  wwwFolder: string;
  wwwFile: string;
}) {
  createJSON(wwwFolder, wwwFile, getWebsiteFile(comicsFolder));
  copyComicImages(comicsFolder, wwwFolder);
}
