class NotesClient {
  constructor () {
  }

  loadNotes(callback) {
    const host = 'http://localhost:3000'
    return fetch(host + '/notes', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  async createNote(note) {
    const host = 'http://localhost:3000'
    await fetch(host + '/notes', { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
   });
  }
}

module.exports = NotesClient;