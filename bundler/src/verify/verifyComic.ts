import {ComicOutput, PanelOutput} from "jutas-types";
import {z} from "zod";

export function verifyComic(data: any){
    try {
        ComicOutput.parse(data);
        return true
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation failed: ", error.issues[0]);
        } else {
            console.error("Unexpected error: ", error);
        }
        return false
    }
}