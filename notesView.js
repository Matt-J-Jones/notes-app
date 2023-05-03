const NotesModel = require('./notesModel');

class NotesView {
  constructor(notesModel) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.notes = notesModel.getNotes();
  }

  displayNotes() {
    this.notes.forEach(note => {
      let div = document.createElement('div');
      div.textContent = note;
      div.classList.add("note")
      this.mainContainerEl.append(div);
    });
  }

  clearNotes() {
    const allParagraphs = document.querySelectorAll('.note');
    allParagraphs.forEach(note => {
      note.remove();
    });
  }

}

module.exports = NotesView;