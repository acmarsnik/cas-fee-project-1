import NotesState from './notes-state.mjs';

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
            filteredNotesState = new NotesState('', 'notes', 'filter', filterProperty);
        } else {
            filteredNotesState = new NotesState('', 'notes');
        }

        filteredNotesState.replaceWindowHistoryState();
    }
}
