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
      const noteToSend = { body: this.inputFormEl.value };
      this.client.createNote(noteToSend);
      this.inputFormEl.value = "";
      this.displayNotes();
    });
  }

  newNote(text) {
    this.notes.addNote(text);
    this.displayNotes();
  }

  async displayNotesFromApi() {
    await this.client.loadNotes((data) => {
      console.log(`Data: ${data}`)
      this.notes.setNotes(data);
      console.log(`notes: ${this.notes.getNotes()}`)
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