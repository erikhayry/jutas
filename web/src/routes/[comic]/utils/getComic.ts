import {getComics} from "../../../utils/getComics";

export function getComic(comicSlug: string) {
    return getComics().find(({slug}) => slug === comicSlug)
}