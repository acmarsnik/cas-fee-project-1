import TransformationOptions from './tranformation-options.mjs';

export default class NotesState {
    constructor(
        href = '',
        page = 'notes',
        transformationType = '',
        transformationProperty = '',
        sortDirection = '',
        noteId = 0,
    ) {
        if (href) {
            this.href = href;
            this.page = this.getPageFromHref();
            this.transformationType = this.getTransformationTypeFromHref();
            this.transformationProperty = this.getTransformationPropertyFromHref();
            this.sortDirection = this.getSortDirectionFromHref();
            this.noteId = this.getNoteIdFromHref();
        } else {
            this.href = href;
            this.page = page;
            this.transformationType = transformationType;
            this.transformationProperty = transformationProperty;
            this.sortDirection = sortDirection;
            this.noteId = noteId ? parseInt(noteId) : noteId;
        }
    }

    getThisAsStateInObject() {
        return { state: this };
    }

    static getNewFromStateProperty(e) {
        return new NotesState(
            e.state.href,
            e.state.page,
            e.state.transformationType,
            e.state.transformationProperty,
            e.state.sortDirection,
            e.state.noteId,
        );
    }

    static getNotesTransformationOptions(notesState) {
        return NotesState.areTransformationPropertiesValid(notesState)
            ? new TransformationOptions(
                  notesState.transformationType,
                  notesState.transformationProperty,
                  notesState.sortDirection,
              )
            : null;
    }

    static areTransformationPropertiesValid(notesState) {
        return (
            notesState.transformationProperty &&
            ((notesState.transformationType === 'sort' && notesState.sortDirection) ||
                notesState.transformationType === 'filter')
        );
    }

    getReplaceStateTitle(page = this.page, noteId = this.noteId) {
        if (page?.includes('edit')) return `Edit Note ${noteId}`;
        else if (page?.includes('create')) return 'Create Note';
        else return 'Notes';
    }

    getReplaceStateUrl(
        page = this.page,
        transformationType = this.transformationType,
        transformationProperty = this.transformationProperty,
        sortDirection = this.sortDirection,
        noteId = this.noteId,
    ) {
        return `?page=${page}${this.getTransformationTypeUrlFragment(
            transformationType,
        )}${this.getTransformationPropertyUrlFragment(
            transformationProperty,
        )}${this.getSortDirectionUrlFragment(sortDirection)}${this.getNoteIdUrlFragment(noteId)}`;
    }

    getTransformationTypeUrlFragment(sortProperty) {
        return this.getUrlFragment('transformationType', sortProperty);
    }

    getTransformationPropertyUrlFragment(sortProperty) {
        return this.getUrlFragment('transformationProperty', sortProperty);
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
                return propertyValueToEnd.substring(0, propertyValueToEnd.indexOf('&'));
            } else {
                return propertyValueToEnd;
            }
        } else return '';
    }

    getPageFromHref() {
        return this.getPropertyFromHref('page');
    }

    getTransformationTypeFromHref() {
        return this.getPropertyFromHref('transformationType');
    }

    getTransformationPropertyFromHref() {
        return this.getPropertyFromHref('transformationProperty');
    }

    getSortDirectionFromHref() {
        return this.getPropertyFromHref('sortDirection');
    }

    getNoteIdFromHref() {
        const noteIdString = this.getPropertyFromHref('noteId');
        return noteIdString ? parseInt(noteIdString) : '';
    }
}
