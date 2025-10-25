import {readPath} from "../../files/readPath.ts";
import type {PanelOutput} from "jutas-types";

export function getPanel(filePath: string): PanelOutput {
    return JSON.parse(readPath(filePath));
}
