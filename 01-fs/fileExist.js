import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filepath = fileURLToPath(import.meta.url)
const __fileDirPath = path.dirname(__filepath);

const __imgFolderPath = path.join(__fileDirPath, "data","imageFolder");
const __messageFolder = path.join(__fileDirPath, "data", "message");

if (fs.existsSync(__imgFolderPath)) {
  console.log(" Img folder Exists");
} else {
  console.log(" Img folder Not Found");
}

if (fs.existsSync(__messageFolder)) {
  console.log(" Message folder Exists");
} else {
  console.log(" Message folder Not Found");
}
