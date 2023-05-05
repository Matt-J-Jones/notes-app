class NotesModel {
  constructor () {
    this.notes = [];
  }

  getNotes () {
    return this.notes;
  }

  setNotes (newNotes) {
    this.notes = newNotes;
  }

  addNote (noteToAdd) {
    this.notes.push(noteToAdd);
  }

  reset () {
    this.notes = [];
  }
}

module.exports = NotesModel;