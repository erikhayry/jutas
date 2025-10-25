import website from '$lib/assets/website.json' with {type: 'json'};
import type {Website} from "jutas-types";

export function getComics(): Website {
    return website
}