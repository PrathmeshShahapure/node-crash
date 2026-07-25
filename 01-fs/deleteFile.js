import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filePath = fileURLToPath(import.meta.url);
const __dirPath = path.dirname(__filePath);

const deleteFilePath = path.join(__dirPath, "data", "data.json");
console.log(deleteFilePath)

fs.unlink(deleteFilePath, (err) => { 
    if (err) throw err;
    console.log("File Deleted ");
})

