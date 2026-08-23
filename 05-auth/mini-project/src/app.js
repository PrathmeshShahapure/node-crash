import express from "express"
import authRouter from "./routes/auth.route.js"
import tasksRouter from "./routes/tasks.route.js";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => { 
    res.send("hi iam alive");
})

app.use("/auth", authRouter);
app.use("/tasks",tasksRouter);
app.use("/admin",tasksRouter);

export default app;
