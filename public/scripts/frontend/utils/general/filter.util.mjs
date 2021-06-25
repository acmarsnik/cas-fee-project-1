import NotesState from '../../models/notes-state.mjs';

export default class FilterUtils {
    static removeFalsy(notes, filterProperty) {
        return notes.filter((note) => note[filterProperty]);
    }

    static filterBy(filterProperty) {
        const { state } = window.history;
        let filteredNotesState;

        if (
            state?.transformationType !== 'filter' ||
            state?.transformationProperty !== filterProperty
        ) {
            filteredNotesState = new NotesState(
                '',
                'notes',
                'filter',
                filterProperty,
                '',
                0,
                state.colorPalette,
            );
        } else {
            filteredNotesState = new NotesState('', 'notes', '', '', '', 0, state.colorPalette);
        }
        filteredNotesState.replaceWindowHistoryState();
    }
}
