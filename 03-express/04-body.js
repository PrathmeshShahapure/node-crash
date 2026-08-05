import app from "./01-server.js";
import express from "express"
app.use(express.json())
app.post("/users", (req, res) => { 
    console.log(req.body);
    res.send("done");
})

///use postman to send data 