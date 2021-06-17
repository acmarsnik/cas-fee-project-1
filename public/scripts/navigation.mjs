import NotesState from './notes-state.mjs';

export default class Navigation {
    static navigateToNotes() {
        const notesState = new NotesState('', 'notes');
        window.history.replaceState(
            notesState,
            notesState.getReplaceStateTitle(),
            notesState.getReplaceStateUrl(),
        );
    }
}
