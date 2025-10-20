import { getFolders } from "../files/getFolders.ts";
import { getFileNames } from "../files/getFileNames.ts";
import { verifyPanelOutput } from "../verify/verifyPanelOutput.ts";
import { readPath } from "../files/readPath.ts";

interface ComicFolder {
  jsons: string[];
  images: string[];
}

function bundle() {
  const comics = getFolders("./../comics").reduce<Record<string, ComicFolder>>(
    (acc, folderPath) => {
      acc[folderPath] = {
        jsons: getFileNames(`${folderPath}/output`, ".json")
          .map((fileName) => `${folderPath}/output/${fileName}`)
          .filter((filePath) =>
            verifyPanelOutput(JSON.parse(readPath(filePath))),
          ),
        images: getFileNames(`${folderPath}/output`, ".png").map(
          (fileName) => `${folderPath}/output/${fileName}`,
        ),
      };
      return acc;
    },
    {},
  );

  console.log(comics);
}

bundle();
