import {getFolders} from "../files/getFolders.ts";
import {getFileNames} from "../files/getFileNames.ts";
import {verifyComic} from "./verifyComic.ts";
import {readPaths} from "../files/readPaths.ts";

function bundle(){
    const comicFolders = getFolders('./../comics')
    console.log(comicFolders)

    const jsons = comicFolders.map((folderPath) => getFileNames(`${folderPath}/output`, '.json').map((fileName) => `${folderPath}/output/${fileName}`))
    const images = comicFolders.map((folderPath) => getFileNames(`${folderPath}/output`, '.png').map((fileName) => `${folderPath}/output/${fileName}`))

    console.log(jsons)
    console.log(images)

    jsons.map(readPaths).flat().filter((json) => {
        console.log(verifyComic(JSON.parse(json)))
    })
}

bundle()