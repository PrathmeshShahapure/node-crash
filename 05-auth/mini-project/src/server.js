import "dotenv/config"
import app from "./app.js"

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, (req, res) => { 
    console.log("APP is running on port ", PORT);
})