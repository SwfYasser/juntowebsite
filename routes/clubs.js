const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render(path.join(__dirname, "../views/clubs"))
})

router.get("/gaming", (req, res) => {
    res.render(path.join(__dirname, "../views/subclub/gaming"))
})

router.get("/art", (req, res) => {
    res.send("Under construction :(")
})

router.get("/book", (req, res) => {
    res.send("Under construction :(")
})

router.get("/arabic", (req, res) => {
    res.send("Under construction :(")
})

router.get("/STEM", (req, res) => {
    res.send("Under construction :(")
})

router.get("/music", (req, res) => {
    res.send("Under construction :(")
})

router.get("/photography", (req, res) => {
    res.send("Under construction :(")
})

router.get("/movies", (req, res) => {
    res.send("Under construction :(")
})

module.exports = router;