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
}

module.exports = NotesClient;