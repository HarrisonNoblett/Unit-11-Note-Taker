//loading the data
let keep = require("../db/keep.js");
let router = require("express").Router();

//getting the Routes
router.get("/notes", function(req, res) {
    keep.getNotes().then((notes) => res.json(notes))
})
router.post("spi/notes", function() {

})
router.delete("api/notes:id", function() {

})

module.exports = router