import NotesState from './notes-state.mjs';

export default class Navigation {
    static navigateToNotes() {
        const notesState = new NotesState('', 'notes');
        notesState.replaceWindowHistoryState();
    }
}
