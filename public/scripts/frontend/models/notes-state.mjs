import TransformationOptions from './tranformation-options.mjs';

export default class NotesState {
    constructor(
        href = '',
        page = 'notes',
        transformationType = '',
        transformationProperty = '',
        sortDirection = '',
        noteId = 0,
        colorPalette = 'blackWhiteStyle',
    ) {
        if (href) {
            this.href = href;
            this.page = this.getPageFromHref();
            this.transformationType = this.getTransformationTypeFromHref();
            this.transformationProperty = this.getTransformationPropertyFromHref();
            this.sortDirection = this.getSortDirectionFromHref();
            this.noteId = this.getNoteIdFromHref();
            this.colorPalette = this.getColorPaletteFromHref();
        } else {
            this.href = href;
            this.page = page;
            this.transformationType = transformationType;
            this.transformationProperty = transformationProperty;
            this.sortDirection = sortDirection;
            this.noteId = noteId ? parseInt(noteId, 10) : noteId;
            this.colorPalette = colorPalette;
        }
    }

    static getNewFromStateProperty(e) {
        return new NotesState(
            e.state?.href ? e.state.href : '',
            e.state?.page ? e.state.page : 'notes',
            e.state?.transformationType ? e.state.transformationType : '',
            e.state?.transformationProperty ? e.state.transformationProperty : '',
            e.state?.sortDirection ? e.state.sortDirection : '',
            e.state?.noteId ? e.state.noteId : 0,
            e.state?.colorPalette ? e.state.colorPalette : 'blackWhiteStyle',
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
            notesState &&
            notesState.transformationProperty &&
            ((notesState.transformationType === 'sort' && notesState.sortDirection) ||
                notesState.transformationType === 'filter')
        );
    }

    static getUrlFragment(name, value) {
        return value ? `&${name}=${value}` : '';
    }

    getThisAsStateInObject() {
        return { state: this };
    }

    replaceWindowHistoryState() {
        window.history.replaceState(this, this.getReplaceStateTitle(), this.getReplaceStateUrl());
    }

    getReplaceStateTitle() {
        if (this.page?.includes('edit')) return `Edit Note ${this.noteId}`;
        if (this.page?.includes('create')) return 'Create Note';
        return 'Notes';
    }

    getReplaceStateUrl() {
        return `?page=${
            this.page
        }${this.getTransformationTypeUrlFragment()}${this.getTransformationPropertyUrlFragment()}${this.getSortDirectionUrlFragment()}${this.getNoteIdUrlFragment()}${this.getColorPaletteUrlFragment()}`;
    }

    getTransformationTypeUrlFragment() {
        return NotesState.getUrlFragment('transformationType', this.transformationType);
    }

    getTransformationPropertyUrlFragment() {
        return NotesState.getUrlFragment('transformationProperty', this.transformationProperty);
    }

    getSortDirectionUrlFragment() {
        return NotesState.getUrlFragment('sortDirection', this.sortDirection);
    }

    getNoteIdUrlFragment() {
        return NotesState.getUrlFragment('noteId', this.noteId);
    }

    getColorPaletteUrlFragment() {
        return NotesState.getUrlFragment('colorPalette', this.colorPalette);
    }

    getPropertyFromHref(property) {
        if (this.href.indexOf(`${property}=`) >= 0) {
            const propertyValueToEnd = this.href.substring(
                this.href.indexOf(`${property}=`) + 1 + property.length,
            );
            if (propertyValueToEnd.indexOf('&') >= 0) {
                return propertyValueToEnd.substring(0, propertyValueToEnd.indexOf('&'));
            }

            return propertyValueToEnd;
        }

        return '';
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
        return noteIdString ? parseInt(noteIdString, 10) : '';
    }

    getColorPaletteFromHref() {
        return this.getPropertyFromHref('colorPalette');
    }
}
