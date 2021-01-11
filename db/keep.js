//Requirements -----------------------------------------------------------
const fs = require("fs");
const util = require("util");
var path = require("path");
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

const { v4: uuidv4 } = require('uuid');
const { json } = require("express");

//Method to read write keep and delete notes -----------------------------
class Keep {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }
    write(notes) {
        return writeFileAsynce("./dbjson", JSON.stringify
        (notes))
    }
    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes)
        })
    }
    addNotes() {
        this.write().then((notes) => {
            return JSON.parse(notes)
        })
    }
    deleteNotes() {

    }
}
module.exports = new Keep();