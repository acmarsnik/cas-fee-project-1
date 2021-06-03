export default class NotesMockService {
    constructor(notes) {
        this.notes = notes;
    }
    getNotes() {
        return this.notes;
    }

    getNote(id) {
        return this.notes.find((note) => note.id === id);
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

    setNotes(notes = []) {
        this.notes = notes;
    }
}
