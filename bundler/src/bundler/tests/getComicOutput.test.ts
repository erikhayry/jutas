import {expect, test} from "bun:test";
import {getComicOutput} from "../getComicOutput.ts";
import {OUTPUT_FOLDER} from "../../constants.ts";
import {getPanel} from "../utils/getPanel.ts";

const DIR = "src/bundler/tests/mocks";

test("returns empty array when no folders", () => {
    expect(getComicOutput("/NOOP")).toEqual([]);
});

test("return array with comic valid paths", () => {
    const comics = getComicOutput(DIR);
    const [comic1, comic2] = comics;

    expect(comics).toHaveLength(2);
    expect(comic1!.path).toEqual(`${DIR}/comic-1`);
    expect(comic2!.path).toEqual(`${DIR}/comic-2`);
});

test("returns pages", () => {
    const [comic1, comic2] = getComicOutput(DIR);

    expect(comic1!.pages).toEqual([
        {
            panels: [
                getPanel(`${DIR}/comic-1/${OUTPUT_FOLDER}/1.1.1.json`),
                getPanel(`${DIR}/comic-1/${OUTPUT_FOLDER}/1.1.2.json`),
            ],
        },
        {
            panels: [getPanel(`${DIR}/comic-1/${OUTPUT_FOLDER}/1.2.1.json`)],
        },
        {
            panels: [getPanel(`${DIR}/comic-1/${OUTPUT_FOLDER}/2.1.1.json`)],
        },
    ]);
    expect(comic2!.pages).toEqual([
        {
            panels: [getPanel(`${DIR}/comic-2/${OUTPUT_FOLDER}/1.1.1.json`)],
        },
    ]);
});
