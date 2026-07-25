import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const filePath = fileURLToPath(import.meta.url);
const dirPath = path.dirname(filePath);

const Ab_FilePath = path.join(dirPath, "data", "data.json");

fs.readFile(Ab_FilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
 })