import * as fs from "node:fs";
import * as path from "node:path";

export function copyFiles(filePaths: string[], target: string): void {
    fs.mkdirSync(target, { recursive: true })

    filePaths.forEach(filePath => {
        fs.copyFileSync(filePath, `${target}/${path.basename(filePath)}`);
    })
}