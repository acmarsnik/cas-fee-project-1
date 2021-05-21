import notes from './notes-data.js';

export function getNotes() {
    return notes;
}

export function getNote(id) {
    return notes.find((note) => note.id === id);
}

export function updateNote(note) {
    const indexOfNoteToUpdate = notes.findIndex((n) => n.id === note.id);
    notes[indexOfNoteToUpdate] = note;
}
