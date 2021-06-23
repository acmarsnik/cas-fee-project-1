import Note from '../models/note.mjs';
import Navigation from '../utils/general/navigation.util.mjs';
import GeneralDomUtils from '../utils/general/general-dom.util.mjs';
import HandlebarsContextUtils from '../utils/general/handlebars-context.util.mjs';
import CreateEditNoteDomUtils from '../utils/components/create-edit-note-dom.util.mjs';

export default class CreateEditNoteComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    async createOrUpdateNote(state, note) {
        let response;

        if (state?.page?.includes('create')) {
            response = await this.notesService.createNote(note);
        } else {
            response = await this.notesService.updateNote(note);
        }

        return response;
    }

    async save(topLevelIdPrefix) {
        const { state } = window.history;
        const response = await this.createOrUpdateNote(
            state,
            CreateEditNoteDomUtils.getNote(topLevelIdPrefix, state),
        );
        Navigation.navigateToNotes();

        return response;
    }

    async getNote(noteExists, noteId) {
        let note = new Note(undefined, null, 0, null, undefined, undefined, undefined, undefined);

        if (noteExists) {
            note = await this.notesService.getNote(noteId);
        }

        return note;
    }

    updateCreateEditNoteDom(note, topLevelIdPrefix) {
        const createEditNoteContainerHtml = this.handlebars.templates.createEditNote(
            HandlebarsContextUtils.getCreateEditNoteContext(note, topLevelIdPrefix),
        );
        const createEditNotePageContainer = document.getElementById(
            'create-edit-note-page-container',
        );
        createEditNotePageContainer.innerHTML += createEditNoteContainerHtml;
    }

    addEventListeners(topLevelIdPrefix) {
        const saveButton = document.getElementById(`${topLevelIdPrefix}speichern`);
        const cancelButton = document.getElementById(`${topLevelIdPrefix}cancel`);
        saveButton.addEventListener('click', () => this.save(topLevelIdPrefix));
        cancelButton.addEventListener('click', Navigation.navigateToNotes);
    }

    async updateNote(topLevelIdPrefix, noteExists = false, noteId = null) {
        GeneralDomUtils.removeElementsWhereIdStartsWith(topLevelIdPrefix);
        const note = await this.getNote(noteExists, noteId);
        this.updateCreateEditNoteDom(note, topLevelIdPrefix);
        this.addEventListeners(topLevelIdPrefix);
        this.importanceComponent.addImportanceElements(
            [note.importance],
            `[id^="${topLevelIdPrefix}importance"]:not([id*="label"]).importance`,
        );
    }
}
