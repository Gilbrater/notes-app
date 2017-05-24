console.log('Starting app.js');

const note=require("./note.js");
const yargs = require("yargs");

const argv = yargs.argv;
const command = process.argv[2];

if(command==='add'){
    note.addNote(argv.title, argv.body);
    console.log("Note Added...");
}else if(command==='list'){
    var allNotes = note.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    console.log("All Notes: ", allNotes);
}else if(command==='delete'){
    var noteRemoved = note.removeNote(argv.title);
    console.log("noteRemoved: ", noteRemoved);
    noteRemoved==true? console.log("Note Removed..."):console.log("Note Not Removed...");
}else if(command==='get'){
    var sketch = note.getNote(argv.title);
    console.log("Get Note...");
    console.log("Note title: ",sketch.title, "Note body: ", sketch.body);
}else{
    console.log("command not recognized...");
}

