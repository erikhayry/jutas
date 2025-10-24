import {createJSON} from "./createJSON.ts";
import {Panel} from "jutas-types";
import {z} from "zod";


export function createPanelSchema(folderPath: string, fileName: string) {
    createJSON(folderPath, fileName, z.toJSONSchema(Panel))
}