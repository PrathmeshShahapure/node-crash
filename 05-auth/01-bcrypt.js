import bcrypt from "bcrypt"

const hashed = await bcrypt.hash("Iamprath", 10);
console.log(hashed);
const iscorrect = await bcrypt.compare("Iamprathz", hashed);
console.log(iscorrect);