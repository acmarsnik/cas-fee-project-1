import NotesState from '../../models/notes-state.mjs';

export default class FilterUtils {
    static removeFalsy(notes, filterProperty) {
        return notes.filter((note) => note[filterProperty]);
    }

    static filterBy(filterProperty) {
        const { state } = window.history;
        let filteredNotesState;
        const colorPalette = state?.colorPalette ? state.colorPalette : 'blackWhiteStyle';

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
                colorPalette,
            );
        } else {
            filteredNotesState = new NotesState('', 'notes', '', '', '', 0, colorPalette);
        }
        filteredNotesState.replaceWindowHistoryState();
    }
}
