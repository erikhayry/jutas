import {getComic} from "../../utils/getComic";
import type {Page} from "jutas-types";

export function getPage(slug: string, index: number): Page | undefined {
    return getComic(slug)?.pages[index]
}