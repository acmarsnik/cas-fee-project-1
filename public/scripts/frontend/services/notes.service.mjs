import Note from '../models/note.mjs';

export default class NotesService {
    constructor(baseUrl, apiUtils) {
        this.baseUrl = baseUrl;
        this.apiUtils = apiUtils;
    }

    async putOrPostNote(note, method) {
        const response = await this.apiUtils.getResponseJson(
            `${this.baseUrl}note`,
            {},
            method,
            JSON.stringify(note),
        );

        return response;
    }

    async getNotes() {
        const notes = (await this.apiUtils.getResponseJson(`${this.baseUrl}notes`, [])).map(
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

        return notes;
    }

    async getNote(id) {
        const note = await this.apiUtils.getResponseJson(`${this.baseUrl}note/${id}`, {});
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
        const response = await this.putOrPostNote(Note.getNoteForDB(note), 'PUT');
        return response;
    }

    async createNote(note) {
        const response = await this.putOrPostNote(Note.getNoteForDB(note), 'POST');
        return response;
    }

    async getNextNoteId() {
        const notes = await this.getNotes();
        const maxId = notes.reduce((prev, current) =>
            prev.id > current.id ? prev.id : current.id,
        );
        return maxId + 1;
    }

    async deleteNote() {
        const response = await this.apiUtils.getResponseJson(
            `${this.baseUrl}note/${id}`,
            {},
            'DELETE',
        );
        return response;
    }
}
