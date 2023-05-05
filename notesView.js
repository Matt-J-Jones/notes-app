const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');

class NotesView {
  constructor(notesModel, notesClient) {
    this.notes = notesModel;
    this.client = notesClient;
    
    this.inputFormEl = document.querySelector('#note-input');
    this.postButtonEl = document.querySelector('#post-note-button');
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.postButtonEl.addEventListener('click', () => {
      this.newNote(this.inputFormEl.value);
      this.inputFormEl.value = "";
    });
  }

  newNote(text) {
    this.notes.addNote(text);
    this.displayNotes();
  }

  displayNotesFromApi() {
    this.client.loadNotes((data) => {
      this.notes.setNotes(data);
      this.displayNotes();
    });
  }

  displayNotes() {
    this.clearNotes();

    this.notes.getNotes().forEach(note => {
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