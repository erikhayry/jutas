import { getFolders } from "../files/getFolders.ts";
import { getImages, getJSONS } from "../files/getFileNames.ts";
import { verifyPanelOutput } from "../verify/verifyPanelOutput.ts";
import { readPath } from "../files/readPath.ts";
import { OUTPUT_FOLDER } from "../constants.ts";

interface ComicFolder {
  jsons: string[];
  images: string[];
}

function bundle() {
  const comics = getFolders("./../comics").reduce<Record<string, ComicFolder>>(
    (acc, folderPath) => {
      acc[folderPath] = {
        jsons: getJSONS(`${folderPath}/${OUTPUT_FOLDER}`)
          .map((fileName) => `${folderPath}/${OUTPUT_FOLDER}/${fileName}`)
          .filter((filePath) =>
            verifyPanelOutput(JSON.parse(readPath(filePath))),
          ),
        images: getImages(`${folderPath}/${OUTPUT_FOLDER}`).map(
          (fileName) => `${folderPath}/${OUTPUT_FOLDER}/${fileName}`,
        ),
      };
      return acc;
    },
    {},
  );

  console.log(comics);
}

bundle();
