import express from "express"
import taskRouter from "./routes/auth.route.js"
const app = express();
app.use(express.json());

app.get("/health", (req, res) => { 
    res.send("hi iam alive");
})

app.use("/auth", taskRouter);

export default app;
