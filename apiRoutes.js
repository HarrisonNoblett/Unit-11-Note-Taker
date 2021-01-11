//loading the data----------------------------------------------
let { read } = require("./db/keep.js")
let keep = require("./db/keep.js");
let router = require("express").Router();

//getting the Routes-------------------------------------------
router.get("/notes", function(req, res) {
    keep.getNotes().then((notes) => res.json(notes))
})
router.post("/notes", function() {
    keep.addNotes().then((notes) => res.json(notes))
})
router.delete("api/notes:id", function() {

})

module.exports = router