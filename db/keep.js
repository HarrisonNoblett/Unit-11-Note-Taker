const fs = require("fs");
const until = require("until");
var path = require("path");
var readFileAsync = until.promisify(fs.readFile);
var writeFileAsync = until.promisify(fs.writeFile);

const { v4: uuidv4 } = require('uuid');
const { json } = require("express");

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

    }
    deleteNotes() {

    }
}
module.exports = new Keep();