import {PanelOutput} from "jutas-types";

export function verifyPanelOutput(data: any) {
    return PanelOutput.safeParse(data).success;
}