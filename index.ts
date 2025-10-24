import {bundle} from "./bundler/src/bundler/bundle.ts";

bundle({
    web: {
        folder: "www/src/lib/assets",
        file: "website.json",
    },
    comics: {
        folder: "comics"
    }
});