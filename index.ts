import {bundle} from "./bundler/src/bundler/bundle.ts";

bundle({
    web: {gc
        folder: "www/src/lib/assets",
        file: "website.json",
    },
    comics: {
        folder: "comics"
    }
});