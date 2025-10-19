import * as fs from "node:fs";
import * as path from "node:path";

function outFiles(folderPath: string) {
    return fs.lstatSync(folderPath).isDirectory()
}



export function getFolders(folderPath: string): string[] {
    const toPath = (fileName: string) => path.join(folderPath, fileName)

    return fs.readdirSync(folderPath)
        .map(toPath)
        .filter(outFiles)
}