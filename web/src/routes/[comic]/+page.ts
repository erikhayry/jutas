import {error} from '@sveltejs/kit';
import {getComic} from "./utils/getComic";

export const load = ({params}: { params: { comic: string } }) => {
    const comic = getComic(params.comic)

    if (comic) {
        return comic
    }

    error(404, 'Not found');
};