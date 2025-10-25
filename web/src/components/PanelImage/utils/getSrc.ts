import {Key, type PanelId} from "jutas-types";

function getImages(): Record<string, { default: string }> {
    return import.meta.glob(
        '$lib/assets/**/*.png',
        {
            eager: true,
            query: {
                enhanced: true
            }
        }
    )
}

function getKey(comic: string, id: PanelId) {
    const imageKey = (key: string) => key.includes(`${comic}/${id}`)

    return Key.parse(Object.keys(getImages()).find(imageKey))
}

export function getSrc(comic: string, id: PanelId): string {
    return getImages()[getKey(comic, id)].default
}