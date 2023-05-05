/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesClient = require('./notesClient');
require('jest-fetch-mock').enableMocks()


describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    fetch.resetMocks();
  });

  it('displays notes', () => {

    const model = new NotesModel();
    const view = new NotesView(model);

    expect(document.querySelectorAll('div').length).toBe(1);
  });

  it('adds note', () => {

    const model = new NotesModel();
    const view = new NotesView(model);

    expect(document.querySelectorAll('div').length).toBe(1);

    model.addNote('This is my first note!');
    view.displayNotes(model);

    expect(document.querySelectorAll('div').length).toBe(2);
  });

  it('clears notes', () => {

    const model = new NotesModel();
    const view = new NotesView(model);

    expect(document.querySelectorAll('div').length).toBe(1);

    model.addNote('This is my first note!');
    view.displayNotes();
    expect(document.querySelectorAll('div').length).toBe(2);

    view.clearNotes();
    expect(document.querySelectorAll('div').length).toBe(1);
  });

  it('Inputs new note using form', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#post-note-button');
    inputEl.value = 'Hello'
    buttonEl.click();

    expect(document.querySelector('.note')).not.toBeNull();
    expect(document.querySelector('.note').textContent).toEqual('Hello');
  });

  it('Should display mock response', () => {
    const notes = ['Test note 1', 'Test note 2'];
    const model = new NotesModel();
    model.setNotes(notes);
    const apiData = { Data: notes };
    const client = new NotesClient(apiData);

    const view = new NotesView(model, client);

    view.displayNotes();

    expect(document.querySelector('.note')).not.toBeNull();
    expect(document.querySelector('.note').textContent).toEqual('Test note 1');
  });

  it('Imports notes from api', () => {
    const model = new NotesModel();
    const client = new NotesClient();
    

    const doubleNotesModel = {
      notes: ['Test Post'],
      getNotes: () => { return ['Test Post'] },
      setNotes: (newNotes) => { notes = newNotes },
      addNote: (noteToAdd) => { notes.push(noteToAdd) },
      reset: () => { notes = [] } 
    }
  
    fetch.mockResponseOnce(
      JSON.stringify({
        notes: [
          'This note is coming from the server',
          'This is a second note coming from the server',
          'And a third!',
        ],
      })
    );

    const view = new NotesView(doubleNotesModel, client);
    view.displayNotesFromApi().then(() => {
      expect(document.querySelector('.note')).not.toBeNull();
      expect(document.querySelector('.note').textContent).toEqual('Test Post');
    })
  });
});