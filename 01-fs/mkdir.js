import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filepath = fileURLToPath(import.meta.url)
const __fileDirPath = path.dirname(__filepath);

const __imgFolderPath = path.join(__fileDirPath, "data","imageFolder");

fs.mkdir(__imgFolderPath, (err) => { 
    if (err) throw err;
    console.log("Folder Created Successfully !!!")
})
