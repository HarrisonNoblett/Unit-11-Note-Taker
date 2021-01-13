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
        return writeFileAsync("db/db.json", JSON.stringify(notes))
    }
    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes);
        })
    }
    addNotes(note) {
        const {title, text} = note;
        const id = uuidv4();
        const newNote = {title, text, id};
        console.log(newNote)
       return this.read(). then((notes) => {
            const n = JSON.parse(notes);
            const newNotes = [...n, newNote];
            this.write(newNotes).then(() => {
                return newNotes;
            });
        });
    }
    deleteNotes(id) {
        return this.getNotes()
        .then((notes) => {
            return notes.filter((note) => note.id !== id)
        })
            .then((filteredNotes) => {
               return this.write(filteredNotes);
            })
        }
    }

module.exports = new Keep();