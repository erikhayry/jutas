import {error} from '@sveltejs/kit';
import {getPage} from "./utils/getPage";
import type {Page} from "jutas-types";

export const load = ({params: {comic: slug, page: pageIndex}}: { params: { comic: string, page: string } }): {
    page: Page,
    slug: string
    pageNumber: number
} => {
    const page = getPage(slug, parseInt(pageIndex))

    if (page) {
        return {
            pageNumber: parseInt(pageIndex) + 1,
            page,
            slug,
        }
    }

    error(404, 'Not found');
};