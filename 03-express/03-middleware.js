import app from "./01-server.js";

let count = 0;
app.use((req, res, next) => {
    count++;
    console.log(`Middleware Request #${count}`);
    next();
});