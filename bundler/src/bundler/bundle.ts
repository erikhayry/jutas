import {getFolders} from "../files/getFolders.ts";

function bundle(){
    const comicFolders = getFolders('./../comics')
    console.log(comicFolders)
}

bundle()