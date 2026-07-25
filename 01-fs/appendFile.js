import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filePath = fileURLToPath(import.meta.url)
const __dirPath = path.dirname(__filePath);

const dataFilePath = path.join(__dirPath, "data", "hi.txt")
console.log(dataFilePath)

fs.appendFile(dataFilePath, " and You are ?", (err) => { 
    if (err) throw err;
    console.log("Text added at the End")
})