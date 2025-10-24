import {render} from "vitest-browser-svelte";

export function renderPage<C>(component: C, data: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    render(component, {
        props: {
            data
        }
    });
}