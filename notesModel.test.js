const NotesModel = require('./notesModel');

describe('Creates Notes object', () => {
  it('Returns empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it('Adds notes, returns array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  })

  it('Adds notes, resets notes, returns empty', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
});