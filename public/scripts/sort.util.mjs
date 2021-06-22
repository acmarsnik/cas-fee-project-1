import NotesState from './notes-state.mjs';

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
        const sortProperty = sortOptions.property;
        const sortDirection = sortOptions.direction;
        const aTime = a[sortProperty] ? new Date(a[sortProperty]).getTime() : 0;
        const bTime = b[sortProperty] ? new Date(b[sortProperty]).getTime() : 0;
        if (sortDirection === 'ascending') return aTime - bTime;
        else return bTime - aTime;
    }

    static sortNumbers(a, b, sortOptions) {
        const sortProperty = sortOptions.property;
        const sortDirection = sortOptions.direction;
        const aNumber = a[sortProperty] ? a[sortProperty] : 0;
        const bNumber = b[sortProperty] ? b[sortProperty] : 0;
        if (sortDirection === 'ascending') return aNumber - bNumber;
        else return bNumber - aNumber;
    }

    static sortBy(sortProperty) {
        const sortDirection = SortUtils.getSortDirection(window.history.state, sortProperty);
        const sortedNotesState = new NotesState('', 'notes', 'sort', sortProperty, sortDirection);
        sortedNotesState.replaceWindowHistoryState();
    }

    static getSortedNotes(notes, sortOptions) {
        return notes.slice().sort((a, b) => {
            if (sortOptions.property === 'createdDate' || sortOptions.property === 'finishedDate')
                return SortUtils.sortDates(a, b, sortOptions);
            else if (sortOptions.property === 'importance')
                return SortUtils.sortNumbers(a, b, sortOptions);
            else return notes;
        });
    }
}
