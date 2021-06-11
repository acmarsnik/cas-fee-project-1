export default class NotesState {
    constructor(
        href = '',
        page = 'notes',
        sortProperty = '',
        sortDirection = '',
        noteId = 0,
    ) {
        if (href) {
            this.href = href;
            this.page = this.getPageFromHref();
            this.sortProperty = this.getSortPropertyFromHref();
            this.sortDirection = this.getSortDirectionFromHref();
            this.noteId = this.getNoteIdFromHref();
        } else {
            this.href = href;
            this.page = page;
            this.sortProperty = sortProperty;
            this.sortDirection = sortDirection;
            this.noteId = noteId ? parseInt(noteId) : noteId;
        }
    }

    getThisAsStateInObject() {
        return { state: this };
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
        return `?page=${page}${this.getSortPropertyUrlFragment(
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

    getPropertyFromHref(property, href = this.href) {
        if (href.indexOf(`${property}=`) >= 0) {
            const propertyValueToEnd = href.substring(
                href.indexOf(`${property}=`) + 1 + property.length,
            );
            if (propertyValueToEnd.indexOf('&') >= 0) {
                return propertyValueToEnd.substring(
                    0,
                    propertyValueToEnd.indexOf('&'),
                );
            } else {
                return propertyValueToEnd;
            }
        } else return '';
    }

    getPageFromHref() {
        return this.getPropertyFromHref('page');
    }

    getSortPropertyFromHref() {
        return this.getPropertyFromHref('sortProperty');
    }

    getSortDirectionFromHref() {
        return this.getPropertyFromHref('sortDirection');
    }

    getNoteIdFromHref() {
        const noteIdString = this.getPropertyFromHref('noteId');
        return noteIdString ? parseInt(noteIdString) : '';
    }
}
