import * as z from "zod";
import { PanelId } from "./output.ts";

export const Panel = z.object({
  id: PanelId,
});

export const Page = z.object({
  panels: z.array(Panel),
});

export const Comic = z.object({
  slug: z.string(),
  pages: z.array(Page),
});

export type Comic = z.infer<typeof Comic>;
