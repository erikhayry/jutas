import * as fs from "node:fs";
import type {WebConfig} from "../bundler/bundle.ts";

export function createJSON(webConfig: WebConfig, content: any) {
    fs.mkdirSync(webConfig.folder, {recursive: true});

    fs.writeFileSync(
        `${webConfig.folder}/${webConfig.file}`,
        JSON.stringify(content, null, 2),
        "utf8",
    );
}
