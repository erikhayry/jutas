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

function getKey(slug: string, id: PanelId) {
    const imageKey = (key: string) => key.includes(`${slug}/${id}`)

    return Key.parse(Object.keys(getImages()).find(imageKey))
}

export function getSrc(slug: string, id: PanelId): string {
    return getImages()[getKey(slug, id)].default
}