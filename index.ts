import { bundle } from "./bundler/src/bundler/bundle.ts";

bundle({
  wwwFolder: "www/src/lib/assets",
  wwwFile: "website.json",
  comicsFolder: "comics",
});
