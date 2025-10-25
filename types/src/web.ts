import * as z from "zod";
import {CoordsOutput, PanelId} from "./output.ts";

export const Coords = CoordsOutput
export const Panel = z.object({
    id: PanelId,
    coords: Coords
});

export const Page = z.object({
    panels: z.array(Panel),
});

export const Comic = z.object({
    slug: z.string(),
    pages: z.array(Page),
});
export const Website = z.array(Comic);
export const Key = z.string()


export type Comic = z.infer<typeof Comic>;
export type Page = z.infer<typeof Page>;
export type Panel = z.infer<typeof Panel>;
export type Website = z.infer<typeof Website>;
