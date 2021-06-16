import NotesState from './notes-state.mjs';
import Note from './note.mjs';

export default class CreateEditNoteComponent {
    constructor(handlebars, notesService, importanceComponent) {
        this.handlebars = handlebars;
        this.notesService = notesService;
        this.importanceComponent = importanceComponent;
    }

    navigateToNotes() {
        const notesState = new NotesState('', 'notes');
        window.history.replaceState(
            notesState,
            notesState.getReplaceStateTitle(),
            notesState.getReplaceStateUrl(),
        );
    }

    save(topLevelIdPrefix) {
        const state = window.history.state;
        const finishByDateValue = document.getElementById(
            `${topLevelIdPrefix}finished-by-input`,
        ).value;
        const finishByDateYearMonthDay = finishByDateValue
            ? finishByDateValue.split('-')
            : null;
        const finishByDate = finishByDateValue
            ? new Date(
                  finishByDateYearMonthDay[0],
                  finishByDateYearMonthDay[1],
                  finishByDateYearMonthDay[2],
                  12,
              ).toISOString()
            : null;
        const title = document.getElementById(
            `${topLevelIdPrefix}title-input`,
        ).value;
        const importance = document.querySelectorAll(
            '#create-edit-note-page-container .bolt.black',
        ).length;
        const description = document.getElementById(
            `${topLevelIdPrefix}description-input`,
        ).value;
        const noteId = state?.noteId
            ? state.noteId
            : document.querySelectorAll(`.edit-button button[note-id]`).length +
              1;

        const note = new Note(
            finishByDate,
            title,
            importance,
            description,
            noteId,
        );
        if (state?.page?.includes('create')) {
            this.notesService.createNote(note);
        } else {
            this.notesService.updateNote(note);
        }

        this.navigateToNotes();
    }

    removeTopLevelElements(topLevelIdPrefix) {
        document
            .querySelectorAll(`[id^="${topLevelIdPrefix}"`)
            .forEach((notesTemplateElement) => {
                notesTemplateElement.remove();
            });
    }

    getContext(note, idPrefix, topLevelIdPrefix) {
        return {
            note,
            topLevelIdPrefix,
            idPrefix,
        };
    }

    addEventListeners(topLevelIdPrefix) {
        const saveButton = document.getElementById(
            `${topLevelIdPrefix}speichern`,
        );
        const cancelButton = document.getElementById(
            `${topLevelIdPrefix}cancel`,
        );
        saveButton.addEventListener('click', () => this.save(topLevelIdPrefix));
        cancelButton.addEventListener('click', this.navigateToNotes);
    }

    updateNote(idPrefix, topLevelIdPrefix, noteExists = false, noteId = null) {
        this.removeTopLevelElements(topLevelIdPrefix);

        let note = {
            title: null,
            description: null,
            finishByDate: null,
            importance: 0,
        };

        if (noteExists) {
            note = this.notesService.getNote(noteId);
        }

        // eslint-disable-next-line
        const createEditNoteContainerHtml =
            this.handlebars.templates.createEditNote(
                this.getContext(note, idPrefix, topLevelIdPrefix),
            );
        const createEditNotePageContainer = document.getElementById(
            'create-edit-note-page-container',
        );
        createEditNotePageContainer.innerHTML += createEditNoteContainerHtml;

        this.addEventListeners(topLevelIdPrefix);
        this.importanceComponent.addImportanceElements(
            [note.importance],
            `[id^="${topLevelIdPrefix}importance"]:not([id*="label"]).importance`,
        );
    }
}
