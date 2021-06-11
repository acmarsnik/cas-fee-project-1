export default class Note {
    constructor(
        page = 'notes',
        sortProperty = '',
        sortDirection = '',
        noteId = 0,
    ) {
        this.page = page;
        this.sortProperty = sortProperty;
        this.sortDirection = sortDirection;
        this.noteId = noteId;
    }

    getReplaceStateTitle(page = this.page, noteId = this.noteId) {
        if (page?.includes('edit')) return `Edit Note ${noteId}`;
        else if (page?.includes('create')) return 'Create Note';
        else return 'Notes';
    }

    getReplaceStateUrl(
        page = this.page,
        sortProperty = this.sortProperty,
        sortDirection = this.sortDirection,
        noteId = this.noteId,
    ) {
        return `?${page}${this.getSortPropertyUrlFragment(
            sortProperty,
        )}${this.getSortDirectionUrlFragment(
            sortDirection,
        )}${this.getNoteIdUrlFragment(noteId)}`;
    }

    getSortPropertyUrlFragment(sortProperty) {
        return this.getUrlFragment('sortProperty', sortProperty);
    }

    getSortDirectionUrlFragment(sortDirection) {
        return this.getUrlFragment('sortDirection', sortDirection);
    }

    getNoteIdUrlFragment(noteId) {
        return this.getUrlFragment('noteId', noteId);
    }

    getUrlFragment(name, value) {
        return value ? `&${name}=${value}` : '';
    }
}
