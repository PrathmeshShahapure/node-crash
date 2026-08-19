import express from "express"
import pool from "./db.js"
import tasksRouter from "./routes/tasks.routes.js"
import usersRouter from "./routes/users.routes.js"


const app = express()
app.use(express.json())

app.get("/health", (req, res) => res.send("i am alive"))
app.use('/users', usersRouter);
app.use("/tasks", tasksRouter);

export default app;