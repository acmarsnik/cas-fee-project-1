import notes from './notes.data.mjs';

export default class NotesService {
    getNotes() {
        return notes;
    }

    getNote(id) {
        return notes.find((note) => note.id === id);
    }

    updateOrCreateNote(note) {
        const indexOfNoteToUpdate = this.notes.findIndex(
            (n) => n.id === note.id,
        );
        if (indexOfNoteToUpdate >= 0) {
            this.notes[indexOfNoteToUpdate] = note;
        } else {
            this.notes.push(note);
        }
    }
}
