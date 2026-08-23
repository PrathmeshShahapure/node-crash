import jwt from "jsonwebtoken"
const secretKey = "secret_as";
const token = jwt.sign({ id: 1,name:"prathmesh" }, secretKey, {expiresIn: "1h" });
console.log("- token", token);

const decoded = jwt.verify(token, secretKey);
console.log("Decoded value is ",decoded);