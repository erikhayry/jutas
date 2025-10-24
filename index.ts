import {bundle} from "./bundler/src/bundler/bundle.ts";

bundle({
    web: {
        folder: "web/src/lib/assets",
        file: "website.json",
    },
    comics: {
        folder: "comics"
    },
    type: {
        folder: 'types/schemas',
        schemas: {
            panel: 'panelSchema.json'
        }
    }
});