const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
  let client;

  beforeEach(() => {
    fetch.resetMocks();
    client = new NotesClient();
  });

  it('calls fetch and loads notes', (done) => {
    
    fetch.mockResponseOnce(JSON.stringify({
      content: ['test post']
    }));
  
    client.loadNotes((apiData) => {
      expect(apiData.content).toEqual(['test post']);
      done();
    });
  });
});

module.exports = NotesClient;