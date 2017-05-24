const fs = require('fs');
const _ = require('lodash');

var notes = [];
var addNote = (title, body) => {
    getAllNotes();
    var duplicate = notes.filter((note) => {
        return note.title === title;
    });
    console.log(duplicate);
    if (duplicate.length < 1) {
        notes.push({
            title,
            body
        });
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }else{
        console.log("Duplicate Note Entered...")
    }

};

var getAllNotes = () => {
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (error) {
        notes = [];
    }

};

var getAll = () => {
    getAllNotes();
    return notes;
};

var removeNote = (title) => {
    getAllNotes();

    var filteredNotes = notes.filter(function (x) {
        return x.title != title;
    });
    fs.writeFileSync('notes-data.json', JSON.stringify(filteredNotes));
    console.log("filteredNotes: ",filteredNotes.length);
    console.log("notes: ",notes.length);
    console.log(filteredNotes.length != notes.length);
    return filteredNotes.length != notes.length;
};

var getNote = (title) => {
    var note = {};
    getAllNotes();
    notes.map(function (x, y) {
        if (x.title === title) {
            note = x;
        }
    });
    return note;
};

module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
}
