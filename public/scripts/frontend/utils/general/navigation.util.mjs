import NotesState from '../../models/notes-state.mjs';

export default class Navigation {
    static navigateToNotes() {
        const { state } = window.history;
        const notesState = new NotesState(
            '',
            'notes',
            '',
            '',
            '',
            0,
            state?.colorPalette ? state.colorPalette : 'blackWhiteStyle',
        );
        notesState.replaceWindowHistoryState();
    }

    static navigateToCreate() {
        const { state } = window.history;
        const notesState = new NotesState(
            '',
            'create',
            '',
            '',
            '',
            0,
            state?.colorPalette ? state.colorPalette : 'blackWhiteStyle',
        );
        notesState.replaceWindowHistoryState();
    }

    static navigateToEdit($event) {
        const { state } = window.history;
        const attributes = $event?.target?.attributes;
        if (attributes && attributes['note-id'] && attributes['note-id'].value) {
            const noteId = attributes['note-id'].value;
            const notesState = new NotesState(
                '',
                'edit',
                '',
                '',
                '',
                noteId,
                state?.colorPalette ? state.colorPalette : 'blackWhiteStyle',
            );
            notesState.replaceWindowHistoryState();
        }
    }
}
