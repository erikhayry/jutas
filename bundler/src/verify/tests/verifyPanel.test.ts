import {expect, test} from "bun:test";
import {verifyPanelOutput} from "../verifyPanelOutput.ts";
import {PanelOutput} from "jutas-types";

test("should return false if data not compliant", () => {
    expect(verifyPanelOutput({})).toBeFalse();
});

test("should return true if data is compliant", () => {
    const panelOutput: PanelOutput = {
        panel: "INVALID ID",
        coords: {
            x: 100,
            y: 100,
            w: 100,
            h: 100,
        },
        description: "description mock",
    };

    expect(verifyPanelOutput(panelOutput)).toBeFalse();
});

test("should return true if data is compliant", () => {
    const panelOutput: PanelOutput = {
        panel: "1.1.1",
        coords: {
            x: 100,
            y: 100,
            w: 100,
            h: 100,
        },
        description: "description mock",
    };

    expect(verifyPanelOutput(panelOutput)).toBeTruthy();
});
