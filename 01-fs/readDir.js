import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filepath = fileURLToPath(import.meta.url)
const __fileDirPath = path.dirname(__filepath);

const __imgFolderPath = path.join(__fileDirPath, "data","imageFolder");

fs.readdir(__imgFolderPath, (err,data) => { 
    if (err) throw err;
    console.log(`The Folder has: ${data}`)
})
