import { allNotes, activeNotes } from './notes.mock.data.mjs';

export default class NotesMockService {
    getNotes() {
        return activeNotes;
    }

    getNote(id) {
        return activeNotes.find((note) => note.id === id);
    }

    updateNote(note) {
        const indexOfNoteToUpdate = activeNotes.findIndex(
            (n) => n.id === note.id,
        );
        activeNotes[indexOfNoteToUpdate] = note;
    }

    setNotes(allNotesKey = null, notes = null) {
        if (allNotesKey) {
            activeNotes = allNotes[allNotesKey];
        } else if (notes) {
            activeNotes = notes;
        } else {
            activeNotes = [];
        }
    }
}
