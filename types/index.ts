import * as z from "zod";

export const Dialog = z.object({
    text: z.string(),
    person: z.string()
})
const Dialogs = z.array(Dialog)

export const Comic = z.object({
    panel: z.string(),
    file_name: z.string(),
    coords_percent: z.object({
        x: z.number(),
        y: z.number(),
        w: z.number(),
        h: z.number()
    }),
    description: z.string(),
    narration: z.optional(z.string()),
    dialogs: z.optional(Dialogs),
    quotes: z.optional(z.string())
});

export type Comic = z.infer<typeof Comic>;
