// Core
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Globals
const app = express();

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
    res.redirect(303, "/home");
});

// View Roues
app.get("/home", (req, res) => {
    res.json({ result: "SUCESS" });
});

// Initialize
app.listen(8081, () => {
    console.log("App listeing on port 'localhost:8081'");
});