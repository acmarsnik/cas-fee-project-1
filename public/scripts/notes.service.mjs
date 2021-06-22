export default class NotesService {
    constructor(notes) {
        this.notes = notes;
    }

    getNotes() {
        return this.notes;
    }

    getNote(id) {
        return this.notes.find((note) => note.id === id);
    }

    updateNote(note) {
        const indexOfNoteToUpdate = this.notes.findIndex((n) => n.id === note.id);
        if (indexOfNoteToUpdate >= 0) {
            this.notes[indexOfNoteToUpdate] = note;
        } else {
            this.notes.push(note);
        }
    }

    createNote(note) {
        this.notes.push(note);
    }
}
