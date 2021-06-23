import Note from '../models/note.mjs';
import ApiUtils from '../utils/api/api.util.mjs';

export default class NotesService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async putOrPostNote(note, method) {
        const response = await ApiUtils.getResponseJson(
            `${this.baseUrl}note`,
            {},
            method,
            JSON.stringify(note),
        );

        return response;
    }

    async getNotes() {
        const notes = (await ApiUtils.getResponseJson(`${this.baseUrl}notes`, [])).map(
            (note) => new Note(
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
        const note = await ApiUtils.getResponseJson(`${this.baseUrl}note/${id}`, {});
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
}
