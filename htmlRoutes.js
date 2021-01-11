//Depnedencies--------------------------------------------------------
var path = require("path");
var router = require("express").Router();

//gathering the routes------------------------------------------------
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

module.exports = router;