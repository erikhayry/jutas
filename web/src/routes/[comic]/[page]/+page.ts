import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import data from '$lib/assets/data.json';


export const load: PageLoad = ({ params }) => {
    const comicPage = data.find(({ slug}) => slug === params.comic)?.pages?.[Number.parseInt(params.page)]

    if (comicPage) {
        return comicPage
    }

    error(404, 'Not found');
};