import {getComics} from "../../../utils/getComics";
import type {Comic} from "jutas-types";

export function getComic(comicSlug: string): Comic | undefined {
    return getComics().find(({slug}) => slug === comicSlug)
}