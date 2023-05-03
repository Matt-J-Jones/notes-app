const NotesModel = require('./notesModel');

class NotesView {
  constructor(notesModel) {
    this.inputFormEl = document.querySelector('#note-input')
    this.postButtonEl = document.querySelector('#post-note-button');
    // this.clearButtonEl = document.querySelector('#clear-notes-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.notes = notesModel;

    this.postButtonEl.addEventListener('click', () => {
      this.newNote(this.inputFormEl.value);
      this.inputFormEl.value = "";
    });

  //   this.clearButtonEl.addEventListener('click', () => {
  //     this.clearNotes();
  //  });
  }

  newNote(text) {
    this.notes.addNote(text);
    this.displayNotes();
  }

  displayNotes() {
    this.clearNotes();

    this.notes.getNotes().reverse().forEach(note => {
      let div = document.createElement('div');
      div.textContent = note;
      div.classList.add("note")
      this.mainContainerEl.append(div);
    });

  }

  clearNotes() {
    const allParagraphs = document.querySelectorAll('div.note');
    allParagraphs.forEach(note => {
      note.remove();
    });
  }

}

module.exports = NotesView;