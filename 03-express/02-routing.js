import { Router } from "express";
import app from "./01-server.js";

// Static Routes
app.get("/home", (req, res) => {
  res.send("i am home");
});
app.get("/about", (req, res) => {
  res.send("i am about");
});

// Route Parameters. ----/http://localhost:3000/users/2?page=4&limit=5
app.get("/users/:id", (req, res) => {
  res.send(`hi my user no is ${req.params.id}
        `);
});

//query Parameters. ----  /products?search=macbook&page=2&limit=10&category=laptop
app.get("/products", (req, res) => {
  const { search, page, limit, category } = req.query;
  res.send(`here are the values = ${search},${page},${limit},${category},`);
});
