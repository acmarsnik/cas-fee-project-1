import cloneDeep from 'lodash.clonedeep';
import NotesState from '../../models/notes-state.mjs';

export default class SortUtils {
    static getSortDirection(state, sortProperty) {
        let direction = 'descending';
        if (
            state?.transformationProperty?.includes(sortProperty) &&
            state?.sortDirection?.includes('descending')
        ) {
            direction = 'ascending';
        }

        return direction;
    }

    static sortDates(a, b, sortOptions) {
        return SortUtils.sort(a, b, sortOptions, true);
    }

    static sortNumbers(a, b, sortOptions) {
        return SortUtils.sort(a, b, sortOptions);
    }

    static sort(a, b, sortOptions, isDate = false) {
        const sortProperty = sortOptions.property;
        const sortDirection = sortOptions.direction;
        let aProperty;
        let bProperty;

        if (isDate) {
            aProperty = a[sortProperty] ? new Date(a[sortProperty]).getTime() : 0;
            bProperty = b[sortProperty] ? new Date(b[sortProperty]).getTime() : 0;
        } else {
            aProperty = a[sortProperty] ? a[sortProperty] : 0;
            bProperty = b[sortProperty] ? b[sortProperty] : 0;
        }

        if (sortDirection === 'ascending') return aProperty - bProperty;
        return bProperty - aProperty;
    }

    static sortBy(sortProperty) {
        const { state } = window.history;
        const sortDirection = SortUtils.getSortDirection(window.history.state, sortProperty);
        const sortedNotesState = new NotesState(
            '',
            'notes',
            'sort',
            sortProperty,
            sortDirection,
            0,
            state?.colorPalette ? state.colorPalette : 'blackWhiteStyle',
        );
        sortedNotesState.replaceWindowHistoryState();
    }

    static getSortedNotes(notes, sortOptions) {
        return cloneDeep(notes).sort((a, b) => {
            if (sortOptions.property === 'createdDate' || sortOptions.property === 'finishedDate') {
                return SortUtils.sortDates(a, b, sortOptions);
            }

            if (sortOptions.property === 'importance') {
                return SortUtils.sortNumbers(a, b, sortOptions);
            }

            return cloneDeep(notes);
        });
    }
}
