import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filePath = fileURLToPath(import.meta.url);
const __dirPath = path.dirname(__filePath);

const oldNamePath = path.join(__dirPath, "data", "hi.txt");
const newNamePath = path.join(__dirPath, "data", "greeting.txt");

fs.rename(oldNamePath, newNamePath, (err) => {
    if (err) throw err;
    console.log("File has Renamed ")
 })


