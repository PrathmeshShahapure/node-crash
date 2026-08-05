import express from "express"
import errorHandler from "./05-error.js";
const app = express();

app.get("/", (req, res) => { 
    res.send("Hello !!!")
})

app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

app.listen(3000, () => { 
    console.log("your server is running on port 3000");
})

app.use(errorHandler)

export default app