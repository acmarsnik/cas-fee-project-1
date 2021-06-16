import notes from './notes.data.mjs';

export default class NotesService {
    getNotes() {
        return notes;
    }

    getNote(id) {
        return notes.find((note) => note.id === id);
    }

    updateNote(note) {
        const indexOfNoteToUpdate = notes.findIndex((n) => n.id === note.id);
        if (indexOfNoteToUpdate >= 0) {
            notes[indexOfNoteToUpdate] = note;
        } else {
            notes.push(note);
        }
    }

    createNote(note) {
        notes.push(note);
    }
}
