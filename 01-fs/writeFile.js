import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filePath = fileURLToPath(import.meta.url);
const __dirPath = path.dirname(__filePath);

const dataFilePath=path.join(__dirPath,"data","hi.txt");

fs.writeFile(dataFilePath, "HI i am Prath", (err) => { 
    if (err) throw err;
    console.log("File Created ")
})
