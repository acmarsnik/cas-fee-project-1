import Note from './note.mjs';

export default class NotesService {
    baseUrl = 'http://localhost:3000/';

    constructor(notes) {
        this.notes = notes;
    }

    async getResponseJson(url, defaultJsonResponse = {}, method = 'GET', body = null) {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });

        let responseJson = defaultJsonResponse;

        if (response.status === 200) {
            responseJson = await response.json();
        } else {
            console.error({
                responseStatus: response.status,
                responseStatusText: response.statusText,
                responseText: response.text(),
            });
        }

        return responseJson;
    }

    async putOrPostNote(note, method) {
        return await this.getResponseJson(`${this.baseUrl}note`, {}, method, JSON.stringify(note));
    }

    async getNotes() {
        return (await this.getResponseJson(`${this.baseUrl}notes`, [])).map(
            (note) =>
                new Note(
                    note.finishByDate,
                    note.title,
                    note.importance,
                    note.description,
                    note.id,
                    note.finishedDate,
                    note.createdDate,
                    true,
                ),
        );
    }

    async getNote(id) {
        const note = await this.getResponseJson(`${this.baseUrl}note/${id}`, {});
        return new Note(
            note.finishByDate,
            note.title,
            note.importance,
            note.description,
            note.id,
            note.finishedDate,
            note.createdDate,
        );
    }

    async updateNote(note) {
        return await this.putOrPostNote(Note.getNoteForDB(note), 'PUT');
    }

    async createNote(note) {
        return await this.putOrPostNote(Note.getNoteForDB(note), 'POST');
    }
}
