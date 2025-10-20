import {
  type ComicOutput,
  type PageOutput,
  type PanelOutput,
} from "jutas-types";
import { getFolders } from "../files/getFolders.ts";
import { getFileNames } from "../files/getFileNames.ts";
import { readPath } from "../files/readPath.ts";

function byName(a: string, b: string) {
  return a.localeCompare(b);
}

function getPageNumber(panelId: string) {
  return (
    panelId.replace(".json", "").split(".").map(Number) as [
      number,
      number,
      number,
    ]
  )[0];
}

function toJSON(path: string): PageOutput[] {
  const obj = getFileNames(`${path}/output`, ".json").reduce<
    Record<number, string[]>
  >((acc, fileName) => {
    const filePath = `${path}/output/${fileName}`;
    const pageNumber = getPageNumber(JSON.parse(readPath(filePath)).panel);

    if (acc[pageNumber]) {
      acc[pageNumber].push(filePath);
    } else {
      acc[pageNumber] = [filePath];
    }

    return acc;
  }, {});

  return Object.entries(obj).map(([pageNumber, panels]) => ({
    number: Number.parseInt(pageNumber),
    panels,
  }));
}

function toComicOutput(comics: ComicOutput[], path: string) {
  return [
    ...comics,
    {
      path,
      pages: toJSON(path),
    },
  ];
}

export function getComicOutput(folderPath: string): ComicOutput[] {
  try {
    return getFolders(folderPath).sort(byName).reduce(toComicOutput, []);
  } catch (error) {
    console.log(error);
    return [];
  }
}
