import NotesState from '../../models/notes-state.mjs';

export default class Navigation {
    static navigateToNotes() {
        const notesState = new NotesState('', 'notes');
        notesState.replaceWindowHistoryState();
    }

    static navigateToCreate() {
        const notesState = new NotesState('', 'create');
        notesState.replaceWindowHistoryState();
    }

    static navigateToEdit($event) {
        const attributes = $event?.target?.attributes;
        if (attributes && attributes['note-id'] && attributes['note-id'].value) {
            const noteId = attributes['note-id'].value;
            const notesState = new NotesState('', 'edit', '', '', '', noteId);
            notesState.replaceWindowHistoryState();
        }
    }
}
