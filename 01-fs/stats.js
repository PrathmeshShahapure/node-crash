import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filepath = fileURLToPath(import.meta.url)
const __fileDirPath = path.dirname(__filepath);

const __dataPath = path.join(__fileDirPath, "data",);

fs.stat(__dataPath, (err,stats) => { 
    if (err) throw err;
    console.log(stats);
    console.log(stats.birthtime);
    console.log(stats.size);
})
