import type {PanelId} from "jutas-types";

export function getSrc(comic: string, id: PanelId): string {
    const imageModules = import.meta.glob(
        '$lib/assets/**/*.png',
        {
            eager: true,
            query: {
                enhanced: true
            }
        }
    )
    const key = Object.keys(imageModules).find((key) => key.includes(`${comic}/${id}`)) || ''

    return imageModules[key].default
}