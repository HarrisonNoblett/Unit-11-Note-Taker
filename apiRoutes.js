//loading the data
var notesData = require("../public/notes");

//getting the Routes
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });
}