//loading the data----------------------------------------------
let { read } = require("./db/keep.js")
let keep = require("./db/keep.js");
let router = require("express").Router();

//getting the Routes-------------------------------------------
router.get("/notes", function(req, res) {
    keep.getNotes(req.body).then((notes) => res.json(notes))
})
router.post("/notes", function(req, res) {
    keep.addNotes(req.body).then((notes) => res.json(notes))
})
router.delete("/notes/:id", function(req, res) {
    keep.deleteNotes(req.params.id).then((notes) => 
    res.json(notes));
})

module.exports = router