console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const yargs = require('yargs');

const notes = require('./note-service.js');


const argv = yargs.argv;
const command = process.argv[2];

console.log("argv: ",argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else if(command === 'read'){
    notes.getNote(argv.title);
}else{
    console.log('Command not recognized');
}