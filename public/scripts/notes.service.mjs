export default class NotesService {
    constructor(notes) {
        this.notes = notes;
    }

    async getNotes() {
        const response = await fetch('http://localhost:8080/notes');

        let notes = [];

        if (response.status === 200) {
            notes = await response.json();
        }

        return notes;
    }

    async getNote(id) {
        return (await this.getNotes()).find((note) => note.id === id);
    }

    async updateNote(note) {
        return await this.putOrPostNote(note, 'PUT');
    }

    async createNote(note) {
        return await this.putOrPostNote(note, 'POST');
    }

    async putOrPostNote(note, method) {
        const response = await fetch('http://localhost:8080/note', {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
        const responseJson = response.json();
        console.log({
            responseStatus: response.status,
            responseStatusText: response.statusText,
            responseJson,
        });

        return responseJson;
    }
}
