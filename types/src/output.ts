import * as z from "zod";

export const DialogOutput = z.object({
    text: z.string(),
    person: z.string(),
});

export const PanelId = z.string().regex(/^[1-9]\d*\.[1-9]\d*\.[1-9]\d*$/, {
    message:
        "Format must be number.number.number — no part can be zero (e.g. 1.2.3)",
});
export const PanelIdTuple = z.tuple([z.string(), z.string(), z.string()]);
export type PanelIdTuple = z.infer<typeof PanelIdTuple>;
export type PanelId = z.infer<typeof PanelId>;

export const PanelOutput = z.object({
    panel: PanelId,
    coords_percent: z.object({
        x: z.number(),
        y: z.number(),
        w: z.number(),
        h: z.number(),
    }),
    description: z.string(),
    narration: z.optional(z.string()),
    dialogs: z.optional(z.array(DialogOutput)),
    quotes: z.optional(z.string()),
    info: z.optional(z.string()),
});

export const PageOutput = z.object({
    panels: z.array(z.string()),
});

export const ComicOutput = z.object({
    pages: z.array(PageOutput),
    path: z.string(),
});

export type PanelOutput = z.infer<typeof PanelOutput>;
export type PageOutput = z.infer<typeof PageOutput>;
export type ComicOutput = z.infer<typeof ComicOutput>;
