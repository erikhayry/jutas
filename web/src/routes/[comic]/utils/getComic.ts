import website from "$lib/assets/website.json";

export function getComic(comicSlug: string) {
    return website.find(({slug}) => slug === comicSlug)
}