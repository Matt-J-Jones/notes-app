const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const model = new NotesModel();

model.addNote('Note 1')
model.addNote('Note 2')
model.addNote('Note 3')

const view = new NotesView(model);
view.displayNotes();

console.log(`Current notes: ${model.getNotes()}`);