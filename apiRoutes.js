//loading the data
let { read } = require("./db/keep.js")
let keep = require("./db/keep.js");
let router = require("express").Router();

//getting the Routes
router.get("/notes", function(req, res) {
    keep.getNotes().then((notes) => res.json(notes))
})
router.post("spi/notes", function() {
    keep.getNotes
})
router.delete("api/notes:id", function() {

})

module.exports = router