/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Page view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
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
});