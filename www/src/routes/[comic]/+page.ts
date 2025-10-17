import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import data from '$lib/assets/data.json';


export const load: PageLoad = ({ params }) => {
    const comic = data.find(({ slug}) => slug === params.comic)

    if (comic) {
        return comic
    }

    error(404, 'Not found');
};